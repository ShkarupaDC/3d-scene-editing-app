import json
from typing import List, Dict, Any, Annotated

from fastapi import UploadFile, Form, File
from pydantic import BaseModel, validator, root_validator

from app.experiment.common import Camera, DatasetType, Matrix, ImageSize


class EmailModel(BaseModel):
    email: str


class TrainModel(EmailModel):
    data_url: str
    dataset_type: DatasetType = "blender"


class EditModel(EmailModel):
    base_experiment_id: str
    inner_region: bool


class EditAABBModel(EditModel):
    aabb: Matrix[float]

    @validator("aabb")
    def check_aabb(cls, aabb: Matrix[float]) -> Matrix[float]:
        if len(aabb) != 2 or any(len(bound) != 3 for bound in aabb):
            raise ValueError("AABB must be a 2 x 3 matrix")
        if any(x_min >= x_max for x_min, x_max in zip(*aabb)):
            raise ValueError(
                "The 1st row elements must be less than the 2nd row ones")
        return aabb


# NOTE(dsh): custom type to use cameras as Form field: https://stackoverflow.com/a/71439821/15955690
class Cameras(BaseModel):
    cameras: List[Camera]

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value):
        if isinstance(value, str):
            return cls(**json.loads(value))
        return value


class EditImageMasksModel(EditModel):
    image_masks: List[UploadFile]
    cameras: Cameras

    @root_validator(skip_on_failure=True)
    def check_masks(cls, values: Dict[str, Any]) -> None:
        if len(values["image_masks"]) != len(values["cameras"]):
            raise RuntimeError(
                "The number of image masks and cameras must be the same")
        return values

    # https://stackoverflow.com/a/60670614/15955690
    @classmethod
    def from_form(cls, email: Annotated[str, Form()],
                  base_experiment_id: Annotated[str, Form()],
                  image_masks: Annotated[List[UploadFile],
                                         File()], cameras: Annotated[Cameras,
                                                                     Form()],
                  inner_region: Annotated[bool, Form()]) -> None:
        return cls(email=email,
                   base_experiment_id=base_experiment_id,
                   image_masks=image_masks,
                   cameras=cameras.cameras,
                   inner_region=inner_region)


class SceneModel(BaseModel):
    experiment_id: str
    T: Matrix[float]  # 4 x 4, rotation + translation + scale


class RenderModel(EmailModel):
    scenes: List[SceneModel]
    image_size: ImageSize
    camera: Camera
