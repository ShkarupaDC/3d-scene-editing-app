import sys
import queue
import signal
import logging
import logging.handlers

from app.experiment.runner import ExperimentRunner


def setup_logging(log_level: int) -> logging.handlers.QueueListener:
    log_queue = queue.Queue(maxsize=-1)
    # NOTE(dsh): root sends log messages to a separate thread
    root = logging.getLogger()
    queue_handler = logging.handlers.QueueHandler(log_queue)
    root.addHandler(queue_handler)
    root.setLevel(log_level)
    # NOTE(dsh): separate thread prints log messages to stdout
    stdout_formatter = logging.Formatter(
        fmt="%(asctime)s %(name)s %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    stdout_handler = logging.StreamHandler(sys.stdout)
    stdout_handler.setLevel(log_level)
    stdout_handler.setFormatter(stdout_formatter)
    log_thread = logging.handlers.QueueListener(log_queue, stdout_handler)
    return log_thread


def interrupt_experiments_on_sigint(runner: ExperimentRunner) -> None:
    signal.signal(signal.SIGINT, lambda signum, frame: runner.interrupt_experiments())
