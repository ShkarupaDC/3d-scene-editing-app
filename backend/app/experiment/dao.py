import uuid
import asyncio
import shutil
from pathlib import Path
from typing import Dict, List, Iterator

from fastapi import UploadFile

from app.experiment.common import (
    Experiment,
    ExperimentType,
    EditConfig,
    RenderConfig,
    TrainConfig,
)
from app.experiment.utils import write_json, write_upload_file, read_binary, read_json, dataclass_from_json
from app.config import settings


class ExperimentDAO:  # filesystem-based

    def __init__(self, root_path: Path, remove_on_stop: bool = False) -> None:
        self.root_path = root_path
        self.remove_on_stop = remove_on_stop
        # TODO(dsh): Move to DB
        self._metadata_path = root_path.joinpath("experiments.json")
        self.experiments: Dict[str, Experiment] = {}

    async def _read_experiments(self) -> Iterator[Experiment]:
        for json_experiment in await read_json(self._metadata_path):
            yield Experiment.from_json(json_experiment)

    async def _write_experiments(self) -> None:
        await write_json(self.experiments.values(), self._metadata_path)

    async def start(self) -> None:
        if self.root_path.is_dir():
            self.experiments = {
                experiment.id: experiment
                async for experiment in self._read_experiments()
            }
        else:
            self.root_path.mkdir(exist_ok=True, parents=True)
            self.experiments = {}

    async def stop(self) -> None:
        if self.remove_on_stop:
            shutil.rmtree(self.root_path)
        else:
            await self._write_experiments()

    def is_experiment(self, experiment_id: str) -> bool:
        return (experiment_id in self.experiments
                and self.get_experiment_path(experiment_id).is_dir())

    def _generate_experiment_id(self) -> str:
        while True:
            experiment_id = uuid.uuid4().hex
            if not self.is_experiment(experiment_id):
                return experiment_id

    def get_experiment_path(self, experiment_id: bool) -> Path:
        return self.root_path.joinpath(experiment_id)

    def get_experiment(self, experiment_id: str) -> Experiment:
        return self.experiments[experiment_id]

    def create_experiment(self, experiment_type: ExperimentType) -> Experiment:
        experiment_id = self._generate_experiment_id()
        self.get_experiment_path(experiment_id).mkdir()
        experiment = Experiment(experiment_id, experiment_type)
        self.experiments[experiment_id] = experiment
        return experiment

    def get_edit_config_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath(
            "edit_config.json")

    async def set_edit_config(self, experiment_id: str,
                              edit_config: EditConfig) -> None:
        edit_config_path = self.get_edit_config_path(experiment_id)
        await write_json(edit_config, edit_config_path)

    def get_render_config_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath(
            "render_config.json")

    async def set_render_config(self, experiment_id: str,
                                render_config: RenderConfig) -> None:
        render_config_path = self.get_render_config_path(experiment_id)
        await write_json(render_config, render_config_path)

    async def get_render_config(self, experiment_id: str) -> RenderConfig:
        render_config_path = self.get_render_config_path(experiment_id)
        return dataclass_from_json(RenderConfig, await
                                   read_json(render_config_path))

    def get_train_config_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath(
            "train_config.json")

    async def set_train_config(self, experiment_id: str,
                               train_config: TrainConfig) -> None:
        train_config_path = self.get_train_config_path(experiment_id)
        await write_json(train_config, train_config_path)

    def get_base_image_masks_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath("image_masks")

    async def set_image_masks(self, experiment_id: str,
                              image_masks: List[UploadFile]) -> List[Path]:
        base_path = self.get_base_image_masks_path(experiment_id)
        base_path.mkdir(exist_ok=True)
        image_masks_paths = [
            base_path.joinpath(
                f"{idx}.{image_mask.content_type.split('/')[-1]}")
            for idx, image_mask in enumerate(image_masks)
        ]
        await asyncio.wait([
            write_upload_file(image_mask, path)
            for image_mask, path in zip(image_masks, image_masks_paths)
        ])
        return image_masks_paths

    def get_mesh_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath("mesh.ply")

    def get_rendering_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath(
            "rendering.png")

    async def get_rendering(self, experiment_id: str) -> bytes:
        return await read_binary(self.get_rendering_path(experiment_id))

    def get_model_path(self, experiment_id: str) -> Path:
        return self.get_experiment_path(experiment_id).joinpath(
            f"{experiment_id}_5.th")


experiment_dao = ExperimentDAO(root_path=settings.experiments_path)
