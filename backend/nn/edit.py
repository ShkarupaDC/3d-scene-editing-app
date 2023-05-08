from pathlib import Path
import warnings
from dataclasses import dataclass
from typing import Optional, List

from ccnerf.models.tensorBase import AlphaGridMask
from ccnerf.models.CCNeRF import CCNeRF

import torch
from torchvision.transforms.functional import pil_to_tensor
from PIL import Image

from common import ImageMask, JsonDict, Device
from utils import load_model, generate_rays, export_mesh


@dataclass
class EditConfig:
    base_model_path: Path
    model_path: Path
    mesh_path: Path
    aabb: Optional[torch.Tensor] = None
    image_masks: Optional[List[ImageMask]] = None
    inner_region: bool = True

    def __post_init__(self) -> None:
        assert (self.aabb is None) ^ (self.image_masks is None)

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "EditConfig":
        aabb = json_dict.get("aabb")
        if aabb is not None:
            aabb = torch.as_tensor(aabb, dtype=torch.float)
        image_masks = json_dict.get("image_masks")
        if image_masks is not None:
            image_masks = [
                ImageMask.from_json(image_mask) for image_mask in image_masks
            ]
        return cls(base_model_path=Path(json_dict["base_model_path"]),
                   model_path=Path(json_dict["model_path"]),
                   mesh_path=json_dict["mesh_path"],
                   aabb=aabb,
                   image_masks=image_masks,
                   inner_region=json_dict["inner_region"])


@torch.no_grad()
def get_aabb_volume_mask(model: CCNeRF,
                         aabb: torch.Tensor,
                         inner_region: bool = True) -> torch.Tensor:
    assert aabb.shape == (2, 3), aabb.shape
    if torch.any(aabb[0] < model.aabb[0]) or torch.any(
            aabb[1] > model.aabb[1]):
        warnings.warn(
            f"AABB {aabb} is out of parent AABB bounds {model.aabb}. Clipping..."
        )
        aabb[0].clip_(model.aabb[0], model.aabb[1])
        aabb[1].clip_(model.aabb[0], model.aabb[1])

    device = model.device
    alpha_grid: torch.Tensor = model.alphaMask.alpha_volume  # 1, 1, D, H, W

    alpha_grid_size = torch.tensor(alpha_grid.shape[-1:1:-1],
                                   device=device)  # W, H, D
    aabb = alpha_grid_size * (aabb - model.aabb[0]) / model.aabbSize
    x_min, y_min, z_min = aabb[0].floor().to(torch.int)
    x_max, y_max, z_max = aabb[1].ceil().to(torch.int)

    # NOTE(dsh): can be done inplace
    if inner_region:
        new_alpha_grid = torch.zeros_like(alpha_grid)
        new_alpha_grid[..., z_min:z_max, y_min:y_max,
                       x_min:x_max] = alpha_grid[..., z_min:z_max, y_min:y_max,
                                                 x_min:x_max]
    else:
        new_alpha_grid = alpha_grid.clone()
        new_alpha_grid[..., z_min:z_max, y_min:y_max, x_min:x_max] = 0
    return new_alpha_grid


@torch.no_grad()
def get_image_mask_based_volume_mask(
        model: CCNeRF,
        image_masks: List[ImageMask],
        inner_region: bool = True) -> torch.Tensor:
    assert image_masks, "Image masks are not found"
    mask_count = len(image_masks)

    device = model.device
    alpha_grid: torch.Tensor = model.alphaMask.alpha_volume
    alpha_grid_size = torch.tensor(alpha_grid.shape[-1:1:-1],
                                   device=device)  # W, H, D

    vote_grid = torch.zeros_like(alpha_grid, dtype=torch.int32)
    for image_mask in image_masks:
        mask = Image.open(image_mask.mask_path)
        mask = pil_to_tensor(mask)[0] == 255  # on cpu

        rays_o, rays_d = generate_rays(
            image_size=mask.shape,
            focal_length=image_mask.camera.focal,
            camera2world=image_mask.camera.camera2world.to("cpu"),
            image_mask=mask,
        )
        xyz_samples, _, rays_valid = model.sample_ray(
            rays_o=rays_o.to(device), rays_d=rays_d.to(device),
            is_train=False)  # N rays, N samples, 3
        xyz_samples = xyz_samples[rays_valid]  # K samples, 3
        alpha_samples = model.alphaMask.sample_alpha(
            model.normalize_coord(xyz_samples))  # K samples
        alpha_mask = alpha_samples > 0  # K samples
        xyz_samples = xyz_samples[alpha_mask]  # M samples

        assert torch.all(model.aabb[0] <= xyz_samples) and torch.all(
            xyz_samples <= model.aabb[1])
        xyz_samples = alpha_grid_size * (xyz_samples -
                                         model.aabb[0]) / model.aabbSize
        xyz_samples = torch.round(xyz_samples).to(dtype=torch.long)

        x, y, z = xyz_samples.unbind(dim=1)
        vote_grid[..., z, y, x] += 1

    zero = torch.tensor(0, dtype=torch.float, device=device)
    if inner_region:
        new_alpha_grid = torch.where(vote_grid >= mask_count, alpha_grid, zero)
    else:
        new_alpha_grid = torch.where(vote_grid >= mask_count, zero, alpha_grid)
    return new_alpha_grid


@torch.no_grad()
def edit_scene(config: EditConfig, device: Device = "cpu") -> None:
    model = load_model(config.base_model_path, device=device)
    if config.aabb is not None:
        aabb = config.aabb.to(device)
        volume_mask = get_aabb_volume_mask(model,
                                           aabb,
                                           inner_region=config.inner_region)
    else:
        assert config.image_masks is not None
        volume_mask = get_image_mask_based_volume_mask(
            model, config.image_masks, inner_region=config.inner_region)
    model.alphaMask = AlphaGridMask(device, volume_mask)
    model.save(config.model_path, K=5)  # K=5 means the best resolution
    export_mesh(model, config.mesh_path, device=device)
