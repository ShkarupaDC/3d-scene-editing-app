import argparse
import logging
import signal
from pathlib import Path

import torch

from edit import EditConfig, edit_scene
from render import RenderConfig, render_scene
from train import TrainConfig, train_scene
from utils import read_json, set_signal_handler

logging.basicConfig(
    format="%(asctime)s - [%(levelname)s] - %(name)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S")
logger = logging.getLogger('nn')


def handle_quit() -> None:
    logger.error("SIGQUIT! Quiting...")


def get_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Tool to edit and render composed CCNeRF scenes")
    parser.add_argument("--device", type=str,
                        default="cuda")  # cpu, cuda, cuda:0, cuda:...
    parser.add_argument("--log_level",
                        type=str,
                        default="INFO",
                        choices=["DEBUG", "INFO", "ERROR"])
    commands = parser.add_subparsers(dest="command")
    train_parser = commands.add_parser("train")
    train_parser.add_argument("--config_path", type=Path, required=True)
    edit_parser = commands.add_parser("edit")
    edit_parser.add_argument("--config_path", type=Path, required=True)
    render_parser = commands.add_parser("render")
    render_parser.add_argument("--config_path", type=Path, required=True)
    return parser


if __name__ == "__main__":
    set_signal_handler(signal.SIGQUIT, handle_quit, reraise_default=True)
    args = get_parser().parse_args()

    logger.setLevel(getattr(logging, args.log_level))
    device = torch.device(args.device)
    if device.type == "cuda":
        torch.cuda.set_device(device.index or 0)

    if args.command == "train":
        train_config = TrainConfig.from_json(read_json(args.config_path))
        logger.info(f"Train config:\n{train_config}")
        try:
            train_scene(train_config, device)
        except Exception:
            logger.exception("Exception occured when training scene!")
            raise
    elif args.command == "edit":
        edit_config = EditConfig.from_json(read_json(args.config_path))
        logger.info(f"Edit config:\n{edit_config}")
        try:
            edit_scene(edit_config, device=device)
        except Exception:
            logger.exception("Exception occured when editing scene!")
            raise
    else:
        assert args.command == "render"
        render_config = RenderConfig.from_json(read_json(args.config_path))
        logger.info(f"Render config:\n{render_config}")
        try:
            render_scene(render_config, device=device)
        except Exception:
            logger.exception("Exception occured when rendering scenes!")
            raise
