import textwrap
import logging
import re
import shutil
from pathlib import Path
from dataclasses import dataclass
from typing import Optional

from ccnerf.opt import config_parser
from ccnerf.train import reconstruction

import gdown

from common import JsonDict, Device
from utils import export_mesh

logger = logging.getLogger('nn')

GDRIVE_FILE_ID = re.compile("/d/(.+)/")


@dataclass
class TrainConfig:
    data_url: str
    dataset_type: str
    base_path: Path
    mesh_path: Path

    @classmethod
    def from_json(cls, json_dict: JsonDict) -> "TrainConfig":
        return cls(data_url=json_dict["data_url"],
                   dataset_type=json_dict["dataset_type"],
                   base_path=Path(json_dict["base_path"]),
                   mesh_path=Path(json_dict["mesh_path"]))


def generate_config(data_path: Path,
                    experiment_path: Path,
                    dataset_type: str = "blender") -> None:
    return textwrap.dedent(f"""\
    # Data
    dataset_name = {dataset_type}
    datadir = {data_path}
    basedir = {experiment_path.parent}
    expname = {experiment_path.name}

    # Model
    rank_mat = [0, 4, 16, 32, 64]
    rank_vec = [96, 96, 96, 96, 96]
    rank_density = [96, 0]
    degree = 4
    model_name = CCNeRF
    fea2denseAct = softplus
    fea2rgbAct = sigmoid

    # Train
    n_iters = 30000
    batch_size = 4096
    N_voxel_init = 2097156 # 128**3
    N_voxel_final = 27000000 # 300**3
    upsamp_list = [2000, 3000, 4000, 5500, 7000]
    update_AlphaMask_list = [2000, 4000]

    # Loss
    L1_weight_inital = 1e-5
    L1_weight_rest = 1e-5

    # Visalization
    N_vis = 5
    vis_every = 10000""")


def get_gdrive_file_id(gdrive_url: str) -> Optional[str]:
    match = GDRIVE_FILE_ID.search(gdrive_url)
    return None if match is None else match.group(1)


def download_data(data_url: str, data_path: Path) -> None:
    # Skip if data is already downloaded
    if data_path.is_dir():
        return
    # Extract Google Drive file id from URL
    data_id = get_gdrive_file_id(data_url)
    assert data_id is not None, f"URL {data_url} is invalid"
    # Download and extract
    archieve_path = Path(gdown.download(quiet=True, id=data_id))
    data_path.mkdir()
    archieve_path = Path(shutil.move(archieve_path, data_path))
    gdown.extractall(path=str(archieve_path))
    archieve_path.unlink()
    # Flat parent directory if required
    archieve_paths = data_path.glob("*")
    parent_path = next(archieve_paths)
    try:
        next(archieve_paths)
    except StopIteration:
        for subpath in parent_path.glob("*"):
            shutil.move(subpath, data_path)
        parent_path.rmdir()


def train_scene(config: TrainConfig, device: Device) -> Path:
    config.base_path.mkdir(exist_ok=True, parents=True)

    data_path = config.base_path.joinpath("data")
    logger.info(f"Downloading data from URL {config.data_url}...")
    download_data(config.data_url, data_path)

    config_path = config.base_path.joinpath("config.txt")
    config_text = generate_config(data_path, config.base_path,
                                  config.dataset_type)
    logger.info(f"Generated train config:\n{config_text}")
    config_path.write_text(config_text)

    train_args = config_parser(f"--config {config_path} --device {device}")
    logger.info("Start training...")
    reconstruction(train_args)

    model_path = config.base_path.joinpath(f"{config.base_path.name}_5.th")
    assert model_path.is_file()
    export_mesh(model_path, mesh_path=config.mesh_path, device=device)
