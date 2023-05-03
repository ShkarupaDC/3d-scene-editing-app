import asyncio
import contextlib
from typing import Generator, Optional, List

import GPUtil

from app.config import settings


class GPUPool:

    def __init__(self,
                 gpu_count: Optional[int],
                 min_free_memory: float,
                 mock_gpus: bool = False) -> None:
        self.gpus = self.__find_gpus(gpu_count, min_free_memory, mock_gpus)
        self.min_free_memory = min_free_memory
        self.semaphore = asyncio.BoundedSemaphore(self.gpu_count)
        self.lock = asyncio.Lock()
        self.is_free = {gpu.id: True for gpu in self.gpus}

    @property
    def gpu_count(self) -> int:
        return len(self.gpus)

    def __find_gpus(self, gpu_count: Optional[int], min_free_memory: float,
                    mock_gpus: bool) -> List[GPUtil.GPU]:
        # TODO(dsh): Remove
        if mock_gpus:
            if gpu_count is None:
                raise ValueError(
                    "When mock_gpus=True, gpu_count must not be None")
            return [_get_mock_gpu(gpu_id) for gpu_id in range(gpu_count)]
        gpus: List[GPUtil.GPU] = [
            gpu for gpu in GPUtil.getGPUs()
            if gpu.memoryFree >= min_free_memory
        ]
        max_gpus = len(gpus)
        if max_gpus == 0:
            raise ValueError("There are no GPUs that satisfies condition!")
        if gpu_count is None:
            gpu_count = max_gpus
        elif gpu_count > max_gpus:
            raise ValueError(
                f"Only {max_gpus} GPUs are availabled but {gpu_count} is requested"
            )
        return gpus[:gpu_count]

    async def acquire_gpu(self) -> GPUtil.GPU:
        await self.semaphore.acquire()
        async with self.lock:
            gpu = next(gpu for gpu in self.gpus if self.is_free[gpu.id])
            if gpu.memoryFree < self.min_free_memory:
                raise RuntimeError(
                    f"Free GPU {gpu.id} is still occupied: {gpu.memoryFree} < {self.min_free_memory}"
                )
            self.is_free[gpu.id] = False
        return gpu

    async def release_gpu(self, gpu: GPUtil.GPU) -> None:
        async with self.lock:
            if self.is_free[gpu.id]:
                raise RuntimeError(f"GPU {gpu.id} is already free!")
            self.is_free[gpu.id] = True
        self.semaphore.release()

    @contextlib.asynccontextmanager
    async def gpu(self) -> Generator[GPUtil.GPU, None, None]:
        gpu = await self.acquire_gpu()
        try:
            yield gpu
        finally:
            await self.release_gpu(gpu)


# TODO(dsh): remove
def _get_mock_gpu(gpu_id: int) -> GPUtil.GPU:
    return GPUtil.GPU(
        ID=gpu_id,
        uuid=gpu_id,
        load=0,
        memoryTotal=11264.0,
        memoryUsed=1.0,
        memoryFree=11018.0,
        driver="515.43.04",
        gpu_name="NVIDIA GeForce RTX 2080 Ti",
        serial="[N/A]",
        display_mode="Disabled",
        display_active="Disabled",
        temp_gpu=27.0,  # temperature
    )


gpu_pool = GPUPool(gpu_count=settings.gpu_count,
                   min_free_memory=settings.min_free_memory,
                   mock_gpus=settings.mock_gpus)
