import logging
import sys
from pathlib import Path
from typing import Optional

from pydantic import BaseSettings

APP_PATH = Path(__file__).parent
NN_PATH = APP_PATH.parent.joinpath("nn")


class Settings(BaseSettings):
    # App
    app_name: str = "3d-scene-editing"

    # Email
    app_email: str = None
    smtp_host: str = None
    smtp_port: int = None
    smtp_username: str = None
    smtp_password: str = None
    start_TLS: bool = True

    # Logging
    log_level: int = logging.INFO

    # GPU pool
    gpu_count: Optional[int] = None
    min_free_memory: float = 10_000  # MiB
    mock_gpus: bool = False

    # Experiment runner
    cpu_process_count: int = 4
    gpu_process_count: int = 1
    gpu_heavy_proccess_count: int = 1

    # Experiment DAO
    experiments_path: Path = APP_PATH.parent.joinpath("experiments")

    # Experiment service
    google_api_key: str = None

    # NN
    nn_python_path: Path = sys.executable
    nn_entrypoint_path: Path = NN_PATH.joinpath("entrypoint.py")
    nn_log_level: int = logging.INFO

    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()
