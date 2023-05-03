import logging
import shlex
from pathlib import Path
from typing import Iterator

from app.experiment.common import Device
from app.config import settings


class Command:

    def __init__(self) -> None:
        self._command = []

    def add_argument(self, *args: str) -> "Command":
        self._command.extend(args)
        return self

    def as_string(self) -> str:
        return shlex.join(self._command)

    def as_iter(self) -> Iterator[str]:
        return iter(self._command)


class NNCLI:

    def __init__(self, python_path: Path, entrypoint_path: Path,
                 log_level: int) -> None:
        self.python_path = python_path
        self.entrypoint_path = entrypoint_path
        self.log_level = logging.getLevelName(log_level)

    def _base_command(self, device: Device) -> Command:
        return Command() \
            .add_argument(self.python_path, self.entrypoint_path) \
            .add_argument("--device", device.to_torch()) \
            .add_argument("--log_level", self.log_level)

    def edit_command(self, edit_config_path: Path, device: Device) -> Command:
        return self._base_command(device) \
            .add_argument("edit") \
            .add_argument("--config_path", edit_config_path)

    def render_command(self, render_config_path: Path,
                       device: Device) -> Command:
        return self._base_command(device) \
            .add_argument("render") \
            .add_argument("--config_path", render_config_path)

    def train_command(self, train_config_path: Path,
                      device: Device) -> Command:
        return self._base_command(device) \
            .add_argument("train") \
            .add_argument("--config_path", train_config_path)


nn_cli = NNCLI(python_path=settings.nn_python_path,
               entrypoint_path=settings.nn_entrypoint_path,
               log_level=settings.nn_log_level)
