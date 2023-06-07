import math
import itertools
import logging
from pathlib import Path
from dataclasses import dataclass
from typing import List

from ccnerf.models.CCNeRF import CCNeRF
from ccnerf.renderer import OctreeRender_trilinear_fast

import torch
import numpy as np
from PIL import Image

from common import Scene, Camera, JsonDict, ImageSize, Device, _decompose_T as decompose_T
from utils import load_model, generate_rays

logger = logging.getLogger('nn')


@dataclass
class RenderConfig:
    scenes: List[Scene]
    image_size: ImageSize
    camera: Camera
    rendering_path: Path

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "RenderConfig":
        return cls(
            scenes=[Scene.from_json(scene) for scene in json_dict["scenes"]],
            image_size=json_dict["image_size"],
            camera=Camera.from_json(json_dict["camera"]),
            rendering_path=Path(json_dict["rendering_path"]),
        )


@torch.no_grad()
def get_composed_aabb(aabb_list: List[torch.Tensor],
                      transform_matrix_list: List[torch.Tensor],
                      device: Device = "cpu") -> torch.Tensor:
    logger.debug(f"AABBs:\n{aabb_list}")
    aabbs = torch.tensor(
        [
            list(itertools.product(*aabb.T.tolist(), repeat=1))
            for aabb in aabb_list
        ],
        device=device,
    )  # N aabbs, 8, 3
    aabbs = torch.cat(
        [aabbs, torch.ones(
            (*aabbs.shape[:2], 1), device=device)], dim=-1)  # N aabbs, 8, 4
    transform_matrices = torch.stack(transform_matrix_list)[:, :3].to(
        device)  # N aabbs, 3, 4
    aabbs = torch.bmm(aabbs, transform_matrices.transpose(1, 2)).reshape(
        -1, 3)  # N aabbs * 8, 3
    composed_aabb = torch.stack(
        [aabbs.min(dim=0).values,
         aabbs.max(dim=0).values])  # 2, 3
    return composed_aabb


@torch.no_grad()
def get_scaled_step_size(aabb_size: torch.Tensor, grid_size: torch.Tensor,
                         step_ratio: float, T: torch.Tensor) -> float:
    S = decompose_T(T)[-1]
    scaled_aabb_size = aabb_size * S
    scaled_units = scaled_aabb_size / (grid_size - 1)
    scaled_step_size = scaled_units.mean() * step_ratio
    return scaled_step_size.item()


@torch.no_grad()
def compose_models(scenes: List[Scene], device: Device = "cpu") -> CCNeRF:
    assert scenes, "No scenes to compose!"
    for scene in scenes:
        scene.to(device)

    models = [load_model(scene.model_path, device) for scene in scenes]
    composed_aabb = get_composed_aabb([model.aabb for model in models],
                                      [scene.T for scene in scenes], device)
    composed_aabb_diag = torch.linalg.norm(composed_aabb[1] -
                                           composed_aabb[0]).item()
    logger.debug(f"Composed AABB:\n{composed_aabb}")

    composed_model = CCNeRF(
        aabb=composed_aabb,
        gridSize=[1] * 3,
        near_far=[0.1, 1000],
        degree=4,
        rank_density=[1, 1],
        rank_vec=[1],
        rank_mat=[1],
        fea2rgbAct="sigmoid",
        device=device,
    )
    composed_model.updateAlphaMask(
        composed_model.resolution, return_aabb=False
    )  # set alpha mask to zero to make a transparent background

    step_size = math.inf
    for model, scene in zip(models, scenes):
        step_size = min(
            step_size,
            get_scaled_step_size(model.aabbSize, model.gridSize,
                                 model.step_ratio, scene.T),
        )
        composed_model.compose(model, T=scene.T, R=decompose_T(scene.T)[0])
    n_samples = int(composed_aabb_diag / step_size) + 1
    logger.debug(f"N samples per ray: {n_samples}")

    # NOTE(dsh): dirty hack
    composed_model.stepSize = step_size
    composed_model.nSamples = n_samples
    return composed_model


@torch.no_grad()
def render_image(model: CCNeRF,
                 rays_o: torch.Tensor,
                 rays_d: torch.Tensor,
                 image_size: ImageSize,
                 batch_size: int,
                 device: Device = "cpu") -> np.ndarray:
    height, width = image_size
    rays = torch.cat([rays_o, rays_d], dim=-1)
    rgb_image, _ = OctreeRender_trilinear_fast(
        rays,
        model,
        chunk=batch_size,
        N_samples=-1,
        ndc_ray=False,
        white_bg=True,
        device=device,
        K=5,
    )
    rgb_image = rgb_image.clamp(0.0, 1.0)
    rgb_image = rgb_image.reshape(height, width, -1).cpu().numpy() * 255
    return rgb_image.astype(np.uint8)


@torch.no_grad()
def render_scene(render_config: RenderConfig,
                 batch_size: int = 4096,
                 device: Device = "cpu") -> None:
    camera = render_config.camera
    image_size = render_config.image_size
    logger.debug(f"Camera: {repr(camera)}")

    composed_model = compose_models(render_config.scenes, device=device)
    rays_o, rays_d = generate_rays(image_size, camera.focal,
                                   camera.camera2world)
    np_image = render_image(
        composed_model,
        rays_o,
        rays_d,
        image_size=image_size,
        batch_size=batch_size,
        device=device,
    )

    image = Image.fromarray(np_image, mode="RGB")
    image.save(render_config.rendering_path)
