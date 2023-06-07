from pathlib import Path
from typing import Optional, Collection, List, Union

from fastapi import BackgroundTasks, UploadFile

from app.experiment.dao import ExperimentDAO, experiment_dao
from app.experiment.services import ExperimentRunService, ExperimentEmailService, experiment_run_service, experiment_email_service
from app.experiment.common import (Experiment, ExperimentType, Matrix,
                                   ImageSize, DatasetType, Camera, EditConfig,
                                   ImageMask, Scene, RenderConfig, TrainConfig,
                                   DeviceType, ExperimentState)
from app.experiment.models import SceneModel
from app.experiment.exceptions import ExperimentError
from app.experiment.utils import get_gdrive_file_mime_type, get_gdrive_file_id

ExpectedExperimentTypes = Union[ExperimentType, Collection[ExperimentType]]


class ExperimentService:

    def __init__(self, experiment_dao: ExperimentDAO,
                 experiment_email_service: ExperimentEmailService,
                 experiment_run_service: ExperimentRunService) -> None:
        self.dao = experiment_dao
        self.email_service = experiment_email_service
        self.run_service = experiment_run_service

    # Experiment validation
    def _check_is_experiment(self, experiment_id: str) -> None:
        if not self.dao.is_experiment(experiment_id):
            raise ExperimentError(f"Experiment {experiment_id} does not exist!") # yapf: disable

    def _check_experiment_type(
            self, experiment: Experiment,
            expected_types: ExpectedExperimentTypes) -> None:
        if isinstance(expected_types, ExperimentType):
            if experiment.type is not expected_types:
                raise ExperimentError(f"Type of experiment {experiment.id} must be {expected_types.value}, but it is {experiment.type.value}!")  # yapf: disable
        else:
            if experiment.type not in expected_types:
                raise ExperimentError(f"Type of experiment {experiment.id} must be one of {[type_enum.value for type_enum in expected_types]}")  # yapf: disable

    def _check_experiment_done(self, experiment: Experiment) -> None:
        if experiment.state is not ExperimentState.DONE:
            raise ExperimentError(f"Experiment {experiment.id} is not done, but it is {experiment.state.as_string()}!") # yapf: disable

    def _check_experiment(self, experiment_id: str,
                          expected_types: ExpectedExperimentTypes) -> None:
        self._check_is_experiment(experiment_id)
        experiment = self.dao.get_experiment(experiment_id)
        self._check_experiment_type(experiment, expected_types)
        self._check_experiment_done(experiment)

    # Get mesh
    def get_mesh_path(self, experiment_id: str) -> Path:
        self._check_experiment(experiment_id,
                               {ExperimentType.TRAIN, ExperimentType.EDIT})

        return self.dao.get_mesh_path(experiment_id)

    # Get rendering
    def get_rendering_path(self, experiment_id: str) -> Path:
        self._check_experiment(experiment_id, ExperimentType.RENDER)

        return self.dao.get_rendering_path(experiment_id)

    # Edit AABB
    async def edit_aabb(self, email: str, base_experiment_id: str,
                        aabb: Matrix[float], inner_region: bool,
                        background_tasks: BackgroundTasks) -> str:
        return await self.edit(email=email,
                               base_experiment_id=base_experiment_id,
                               aabb=aabb,
                               image_masks=None,
                               cameras=None,
                               inner_region=inner_region,
                               background_tasks=background_tasks)

    # Edit image masks
    async def edit_image_masks(self, email: str, base_experiment_id: str,
                               image_masks: List[UploadFile],
                               cameras: List[Camera], inner_region: bool,
                               background_tasks: BackgroundTasks) -> str:
        return await self.edit(email=email,
                               base_experiment_id=base_experiment_id,
                               aabb=None,
                               image_masks=image_masks,
                               cameras=cameras,
                               inner_region=inner_region,
                               background_tasks=background_tasks)

    async def edit(self, email: str, base_experiment_id: str,
                   aabb: Optional[Matrix[float]],
                   image_masks: Optional[List[UploadFile]],
                   cameras: Optional[List[Camera]], inner_region: bool,
                   background_tasks: BackgroundTasks) -> str:
        self._check_experiment(base_experiment_id,
                               {ExperimentType.TRAIN, ExperimentType.EDIT})

        experiment = self.dao.create_experiment(ExperimentType.EDIT)
        if image_masks is not None:
            image_masks_paths = await self.dao.set_image_masks(
                experiment.id, image_masks)
            image_masks = [
                ImageMask(image_mask_path, camera)
                for image_mask_path, camera in zip(image_masks_paths, cameras)
            ]
        edit_config = EditConfig(
            base_model_path=self.dao.get_model_path(base_experiment_id),
            model_path=self.dao.get_model_path(experiment.id),
            mesh_path=self.dao.get_mesh_path(experiment.id),
            aabb=aabb,
            image_masks=image_masks,
            inner_region=inner_region)
        await self.dao.set_edit_config(experiment.id, edit_config)

        background_tasks.add_task(self.run_service.process_experiment,
                                  experiment=experiment,
                                  device_type=DeviceType.CPU,
                                  is_heavy=False,
                                  report=self.email_service.send_edit_message,
                                  recipient=email)
        return experiment.id

    # Render
    def _check_scenes(self, scenes: List[SceneModel]) -> None:
        for scene in scenes:
            self._check_experiment(scene.experiment_id,
                                   {ExperimentType.EDIT, ExperimentType.TRAIN})

    async def render(self, email: str, scenes: List[SceneModel],
                     image_size: ImageSize, camera: Camera,
                     background_tasks: BackgroundTasks) -> str:
        self._check_scenes(scenes)

        experiment = self.dao.create_experiment(ExperimentType.RENDER)
        render_config = RenderConfig(
            scenes=[
                Scene(model_path=self.dao.get_model_path(scene.experiment_id),
                      T=scene.T) for scene in scenes
            ],
            image_size=image_size,
            camera=camera,
            rendering_path=self.dao.get_rendering_path(experiment.id),
        )
        await self.dao.set_render_config(experiment.id, render_config)

        background_tasks.add_task(
            self.run_service.process_experiment,
            experiment=experiment,
            device_type=DeviceType.GPU,
            is_heavy=False,
            report=self.email_service.send_render_message,
            recipient=email,
            experiment_dao=self.dao)
        return experiment.id

    # Train
    async def _check_data_url(self, data_url: str) -> None:
        gdrive_id = get_gdrive_file_id(data_url)
        if gdrive_id is None:
            raise ExperimentError(f"{data_url} is invalid Google Drive File URL!") # yapf: disable
        mime_type = await get_gdrive_file_mime_type(gdrive_id)
        if mime_type is None:
            raise ExperimentError(f"{data_url} must be a shared Google Drive Link") # yapf: disable
        mime_types = ["application/x-tar", "application/zip"]
        if mime_type not in mime_types:
            raise ExperimentError(f"Dataset mime type must be one of {mime_types}, got {mime_type}!") # yapf: disable


    async def train(self, email: str, data_url: str, dataset_type: DatasetType,
                    background_tasks: BackgroundTasks) -> str:
        await self._check_data_url(data_url)

        experiment = self.dao.create_experiment(ExperimentType.TRAIN)
        train_config = TrainConfig(
            data_url=data_url,
            dataset_type=dataset_type,
            base_path=self.dao.get_experiment_path(experiment.id),
            mesh_path=self.dao.get_mesh_path(experiment.id),
        )
        await self.dao.set_train_config(experiment.id, train_config)

        background_tasks.add_task(self.run_service.process_experiment,
                                  experiment=experiment,
                                  device_type=DeviceType.GPU,
                                  is_heavy=True,
                                  report=self.email_service.send_train_message,
                                  recipient=email)
        return experiment.id


experiment_service = ExperimentService(
    experiment_dao=experiment_dao,
    experiment_email_service=experiment_email_service,
    experiment_run_service=experiment_run_service)
