import enum
from pathlib import Path
from dataclasses import dataclass
from typing import TypeVar, Optional, Tuple, List, Dict, Any, Literal

T = TypeVar("T")
Matrix = List[List[T]]
ImageSize = Tuple[int, int]  # height, width
DatasetType = Literal["blender"]


class ProcessState(enum.IntEnum):
    DONE = 0
    FAILED = 1
    STOPPED = 2


@dataclass
class FinishedProcess:  # analogue of subprocess.CompletedProcess
    state: ProcessState
    stdout: str = ""
    stderr: str = ""
    exit_code: int = 0


class ExperimentType(str, enum.Enum):
    TRAIN = "train"
    EDIT = "edit"
    RENDER = "render"


class ExperimentState(enum.IntEnum):
    DONE = 0
    FAILED = 1
    STOPPED = 2
    PENDING = 3

    def as_string(self) -> str:
        return self.name.lower()

    @staticmethod
    def from_process_state(state: ProcessState) -> "ExperimentState":
        return ExperimentState(state.value)


@dataclass
class Experiment:
    id: str
    type: ExperimentType
    state: ExperimentState = ExperimentState.PENDING  # TODO: Lock

    @classmethod
    def from_json(cls, json_dict: Dict[str, Any]) -> "Experiment":
        return cls(id=json_dict["id"],
                   type=ExperimentType(json_dict["type"]),
                   state=ExperimentState(json_dict["state"]))


class DeviceType(str, enum.Enum):
    CPU = "cpu"
    GPU = "gpu"

    def to_torch(self) -> str:
        if self is DeviceType.GPU:
            return "cuda"
        assert self is DeviceType.CPU
        return self.value


@dataclass
class Device:
    type: DeviceType
    index: Optional[int] = None  # None for CPU

    def to_torch(self) -> str:
        if self.type is DeviceType.CPU:
            return self.type.to_torch()
        assert self.type is DeviceType.GPU
        return ":".join((self.type.to_torch(), str(self.index)))


@dataclass
class Camera:  # pinhole
    fx: float
    fy: float
    camera2world: Matrix[float]  # 4 x 4; rotation + translation


@dataclass
class ImageMask:
    mask_path: Path
    camera: Camera


@dataclass
class EditConfig:
    base_model_path: Path
    model_path: Path
    mesh_path: Path
    aabb: Optional[Matrix[float]]  # 2 x 3
    image_masks: Optional[List[ImageMask]]
    inner_region: bool


@dataclass
class Scene:
    model_path: Path
    T: Matrix[float]  # 4 x 4, rotation + translation + scale


@dataclass
class RenderConfig:
    scenes: List[Scene]
    image_size: Tuple[int, int]
    camera: Camera
    rendering_path: Path


@dataclass
class TrainConfig:
    data_url: str
    dataset_type: str
    base_path: Path
    mesh_path: Path
