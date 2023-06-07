import json
import logging
import functools
import signal
from pathlib import Path
import shutil
import types
from typing import Union, Tuple, Any, Optional, Callable, Iterable
from typing_extensions import ParamSpecArgs

from ccnerf.models.CCNeRF import CCNeRF
from ccnerf.dataLoader.ray_utils import get_ray_directions, get_rays

import torch
import numpy as np
from skimage import measure
import open3d as o3d

from common import Device, ImageSize, FocalLength

SignalHandler = Callable[[int, Optional[types.FrameType]], None]
P = ParamSpecArgs("P")

DEFAULT_HANDLERS = {
    signum: signal.getsignal(signum)
    for signum in signal.valid_signals()
}

logger = logging.getLogger('nn')


def read_json(path: Path, **kwargs: Any) -> Any:
    with path.open("r") as stream:
        return json.load(stream, **kwargs)


@torch.no_grad()
def load_model(model_path: Path, device: Device = "cpu") -> CCNeRF:
    checkpoint = torch.load(model_path, map_location=device)

    model_kwargs = checkpoint["kwargs"]
    model_kwargs["device"] = device
    model = CCNeRF(**model_kwargs)

    model.load(checkpoint)
    return model


@torch.no_grad()
def generate_rays(
        image_size: ImageSize,
        focal_length: FocalLength,
        camera2world: torch.Tensor,
        image_mask: torch.Tensor = None) -> Tuple[torch.Tensor, torch.Tensor]:
    ray_d = get_ray_directions(*image_size, focal_length)  # H, W, 3
    ray_d /= torch.linalg.norm(ray_d, dim=-1, keepdims=True)
    if image_mask is not None:
        assert image_mask.dtype == torch.bool and image_mask.shape == image_size
        ray_d = ray_d[image_mask]  # ..., 3
    return get_rays(ray_d, camera2world)  # H * W, 3 or ..., 3


@torch.no_grad()
def export_mesh(model: Union[CCNeRF, Path],
                mesh_path: Path,
                min_cluster_triangles: int = 100,
                reduction_factor: Optional[float] = 10,
                device: Device = "cpu") -> o3d.geometry.TriangleMesh:
    if isinstance(model, Path):
        model = load_model(model, device=device)
    else:
        model.to(device)
    # NOTE(dsh): some code is taken from train.export_mesh and utils.convert_sdf_samples_to_ply
    dense_alpha_grid, _ = model.getDenseAlpha()

    dense_alpha_grid = dense_alpha_grid.cpu().numpy()
    aabb = model.aabb.cpu().numpy()
    volume_size: np.ndarray = (aabb[1] - aabb[0]) / np.asarray(
        dense_alpha_grid.shape)

    non_zero_alpha_grid: np.ndarray = dense_alpha_grid[np.nonzero(
        dense_alpha_grid)]
    logger.debug(
        f"Alpha grid: min={non_zero_alpha_grid.min():.3f}, max={non_zero_alpha_grid.max():.3f}, mean={non_zero_alpha_grid.mean():.3f}"
    )

    vertices, faces, normals, _ = measure.marching_cubes(
        dense_alpha_grid, level=0.005, spacing=volume_size.tolist())
    vertices += aabb[:1]
    faces = faces[..., ::-1]

    # Use open3d to simplify and save mesh: http://www.open3d.org/docs/release/tutorial/geometry/mesh.html
    mesh = o3d.geometry.TriangleMesh(
        vertices=o3d.utility.Vector3dVector(vertices),
        triangles=o3d.utility.Vector3iVector(faces),
    )
    triangles_count = len(mesh.triangles)
    mesh.vertex_normals = o3d.utility.Vector3dVector(normals)
    triangle_clusters, cluster_n_triangles, _ = map(
        np.asarray, mesh.cluster_connected_triangles())
    remove_mask = cluster_n_triangles[
        triangle_clusters] < min_cluster_triangles
    mesh.remove_triangles_by_mask(remove_mask)
    logger.debug(
        f"Remove trash! #triangles: {triangles_count} -> {len(mesh.triangles)}"
    )

    if reduction_factor is not None:
        assert reduction_factor > 1, reduction_factor
        triangles_count = len(mesh.triangles)
        mesh = mesh.simplify_quadric_decimation(
            target_number_of_triangles=triangles_count // reduction_factor)
        logger.debug(
            f"Simplify! #triangles: {triangles_count} -> {len(mesh.triangles)}"
        )

    o3d.io.write_triangle_mesh(
        str(mesh_path),
        mesh,
        compressed=True,
        write_vertex_normals=False,  # True
        write_vertex_colors=False,
        write_triangle_uvs=False,
    )
    return mesh


def reraise_signal(handler: SignalHandler) -> SignalHandler:

    @functools.wraps(handler)
    def wrapper(signum: int, frame: Optional[types.FrameType]) -> None:
        default_handler = DEFAULT_HANDLERS[signum]
        handler(signum, frame)
        if callable(default_handler):
            default_handler(signum, frame)
        elif default_handler == signal.SIG_DFL:
            signal.signal(signum, signal.SIG_DFL)
            signal.raise_signal(signum)
        else:
            pass

    return wrapper


def remove_if_exists(paths: Iterable[Path]) -> None:
    for path in paths:
        if not path.exists():
            continue
        if path.is_dir():
            shutil.rmtree(path)
        elif path.is_file():
            path.unlink()


def set_signal_handler(
    signame: signal.Signals,
    function: Callable[[P], Any],
    *args: P,
    reraise_default: bool = False,
    pass_sigdata: bool = False,
) -> signal.Handlers:

    def signal_handler(signum: int, frame: Optional[types.FrameType]) -> None:
        if pass_sigdata:
            return function(signum, frame, *args)
        return function(*args)

    if reraise_default:
        signal_handler = reraise_signal(signal_handler)
    return signal.signal(signame, signal_handler)
