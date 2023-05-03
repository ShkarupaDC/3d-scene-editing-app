from typing import Annotated

from fastapi import APIRouter, Body, Depends, BackgroundTasks
from fastapi import status
from fastapi.responses import FileResponse

from app.experiment.models import EditAABBModel, EditImageMasksModel, TrainModel, RenderModel
from app.experiment.service import experiment_service

router = APIRouter()


@router.get("/{experiment_id}/mesh", status_code=status.HTTP_200_OK)
async def get_mesh(experiment_id: str) -> FileResponse:
    mesh_path = experiment_service.get_mesh_path(experiment_id)
    return FileResponse(path=mesh_path,
                        media_type="application/octet-stream",
                        filename=mesh_path.name)


@router.get("/{experiment_id}/rendering",
            status_code=status.HTTP_200_OK,
            response_class=FileResponse)
async def get_image(experiment_id: str) -> FileResponse:
    return experiment_service.get_rendering_path(experiment_id)


@router.post("/train", status_code=status.HTTP_201_CREATED)
async def train(background_tasks: BackgroundTasks,
                data: Annotated[TrainModel, Body()]) -> str:
    return await experiment_service.train(email=data.email,
                                          data_url=data.data_url,
                                          dataset_type=data.dataset_type,
                                          background_tasks=background_tasks)


@router.post("/edit/aabb", status_code=status.HTTP_201_CREATED)
async def edit_aabb(background_tasks: BackgroundTasks,
                    data: Annotated[EditAABBModel, Body()]) -> str:
    return await experiment_service.edit_aabb(
        email=data.email,
        base_experiment_id=data.base_experiment_id,
        aabb=data.aabb,
        inner_region=data.inner_region,
        background_tasks=background_tasks)


# https://fastapi.tiangolo.com/tutorial/request-forms-and-files/
@router.post("/edit/image-masks", status_code=status.HTTP_201_CREATED)
async def edit_image_masks(
    background_tasks: BackgroundTasks,
    data: Annotated[EditImageMasksModel,
                    Depends(EditImageMasksModel.from_form)]
) -> str:
    return await experiment_service.edit_image_masks(
        email=data.email,
        base_experiment_id=data.base_experiment_id,
        image_masks=data.image_masks,
        cameras=data.cameras,
        inner_region=data.inner_region,
        background_tasks=background_tasks)


@router.post("/render", status_code=status.HTTP_201_CREATED)
async def render(background_tasks: BackgroundTasks,
                 data: Annotated[RenderModel, Body()]) -> str:
    return await experiment_service.render(email=data.email,
                                           scenes=data.scenes,
                                           image_size=data.image_size,
                                           camera=data.camera,
                                           background_tasks=background_tasks)
