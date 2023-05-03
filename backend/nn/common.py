from pathlib import Path
from dataclasses import dataclass, field
from typing import Union, Tuple, TypeVar, Dict, Any, List, SupportsFloat

import torch
import numpy as np
from scipy.spatial.transform import Rotation

Device = Union[torch.device, str]
ImageSize = Tuple[int, int]  # H, W
FocalLength = Tuple[float, float]  # H, W
JsonDict = Dict[str, Any]
Tensor = TypeVar("Tensor", torch.Tensor, np.ndarray)


@dataclass
class Camera:  # pinhole
    fx: float
    fy: float
    camera2world: torch.Tensor  # rotation, translation

    @property
    def focal(self) -> Tuple[float, float]:
        return (self.fy, self.fx)

    def __repr__(self) -> str:
        fx = self.fx
        fy = self.fy
        R, T_vec, _ = _decompose_T(self.camera2world)
        R = _round_list(_R_as_euler(R).tolist(), 3)
        T_vec = _round_list(T_vec[:, 0].tolist(), 3)
        return f"Camera({fx=}, {fy=}, {R=}, {T_vec=})"

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "Camera":
        return cls(fx=json_dict["fx"],
                   fy=json_dict["fy"],
                   camera2world=torch.as_tensor(json_dict["camera2world"],
                                                dtype=torch.float))


@dataclass
class ImageMask:
    mask_path: Path
    camera: Camera

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "ImageMask":
        return cls(mask_path=Path(json_dict["mask_path"]),
                   camera=Camera.from_json(json_dict["camera"]))


@dataclass
class Scene:
    model_path: Path
    # rotation, translation, scale. Tip: T = T @ R
    T: torch.Tensor = field(default_factory=lambda: torch.eye(4))

    def __post_init__(self):
        assert self.T.shape == (4, 4)

    def to(self, device: Device) -> None:
        self.T = self.T.to(device)

    def __repr__(self) -> str:
        model_path = self.model_path
        R, T_vec, S = _decompose_T(self.T)
        R = _round_list(_R_as_euler(R).tolist(), 3)
        T_vec = _round_list(T_vec[:, 0].tolist(), 3)
        S = _round_list(S[:, 0].tolist(), 3)
        return f"Scene({model_path=}, {R=}, {T_vec=}, {S=})"

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "Scene":
        return cls(model_path=Path(json_dict["model_path"]),
                   T=torch.as_tensor(json_dict["T"], dtype=torch.float))


@torch.no_grad()
def _decompose_T(
        T: torch.Tensor) -> Tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
    T_vec = T[:3, -1:]
    S = torch.linalg.norm(T[:3, :3], dim=1, keepdims=True)
    R = T[:3, :3] / S
    return R, T_vec, S


@torch.no_grad()
def _R_as_euler(R: Tensor) -> Tensor:
    is_torch = torch.is_tensor(R)
    if is_torch:
        R = R.cpu().numpy()
    euler = Rotation.from_matrix(R).as_euler("xyz", degrees=True)
    if is_torch:
        euler = torch.as_tensor(euler, dtype=torch.float32)
    return euler


def _round_list(data: List[SupportsFloat],
                ndigits: int) -> List[SupportsFloat]:
    return [round(element, ndigits) for element in data]
