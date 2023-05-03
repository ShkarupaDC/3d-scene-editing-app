import os
import asyncio
import logging
from typing import Any, Optional, Callable, TypeVar

from app.experiment.runner.gpu_pool import GPUPool, gpu_pool
from app.experiment.common import Experiment, Device, DeviceType
from app.config import settings

T = TypeVar("T")
RunFn = Callable[[Experiment, Device, Optional[asyncio.Event]], T]

logger = logging.getLogger(__name__)


class ExperimentRunner:

    def __init__(
        self,
        gpu_pool: GPUPool,
        cpu_process_count: int = 1,
        gpu_process_count: int = 1,
        gpu_heavy_process_count: int = 1,
    ) -> None:
        # NOTE(dsh): + 1 considers Main process
        self.gpu_pool = gpu_pool
        process_count = (cpu_process_count + gpu_process_count +
                         gpu_heavy_process_count + 1)
        assert (
            process_count <= os.cpu_count()
        ), f"{os.cpu_count()} CPUs is available but {process_count} is requested"
        self.cpu_semaphore = asyncio.Semaphore(cpu_process_count)
        self.gpu_semaphore = asyncio.Semaphore(gpu_process_count)
        self.gpu_heavy_semaphore = asyncio.Semaphore(gpu_heavy_process_count)
        self.stop_event = asyncio.Event()
        self.is_running = False

    def start(self) -> None:
        if self.is_running:
            return
        self.stop_event.clear()
        self.is_running = True
        logger.info("Experiment runner is started")

    def interrupt_experiments(self) -> None:
        self.stop_event.set()

    def stop(self) -> None:
        if not self.is_running:
            return
        self.interrupt_experiments()
        self.is_running = False
        logger.info("Experiment runner is stopped!")

    async def run_experiment(self,
                             run: RunFn[T],
                             experiment: Experiment,
                             device_type: DeviceType = DeviceType.CPU,
                             is_heavy: bool = False,
                             **kwargs: Any) -> Optional[T]:
        if not self.is_running:
            raise RuntimeError("Experiment runner is not running")

        if device_type is DeviceType.CPU:
            if self.cpu_semaphore.locked():
                logger.info(f"Experiment {experiment.id} is in CPU queue")
            async with self.cpu_semaphore:
                if self.stop_event.is_set():
                    return None
                device = Device(device_type)
                return await run(experiment, device, None, **kwargs)

        assert device_type is DeviceType.GPU
        if is_heavy:
            semaphore = self.gpu_heavy_semaphore
            stop_event = self.stop_event
        else:
            semaphore = self.gpu_semaphore
            stop_event = None
        if semaphore.locked():
            logger.info(
                f"Experiment {experiment.id} is in GPU {is_heavy=} queue")
        async with semaphore:
            if self.stop_event.is_set():
                return None
            async with self.gpu_pool.gpu() as gpu:
                device = Device(device_type, index=gpu.id)
                return await run(experiment, device, stop_event, **kwargs)


experiment_runner = ExperimentRunner(
    gpu_pool=gpu_pool,
    cpu_process_count=settings.cpu_process_count,
    gpu_process_count=settings.gpu_process_count,
    gpu_heavy_process_count=settings.gpu_heavy_proccess_count)
