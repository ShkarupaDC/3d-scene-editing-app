import asyncio
import contextlib
from typing import Generator, Optional, List

import GPUtil

from app.config import settings


class GPUPool:

    def __init__(self, gpu_count: Optional[int],
                 min_free_memory: float) -> None:
        self.gpus = self.__find_gpus(gpu_count, min_free_memory)
        self.min_free_memory = min_free_memory
        self.semaphore = asyncio.BoundedSemaphore(self.gpu_count)
        self.lock = asyncio.Lock()
        self.is_free = {gpu.id: True for gpu in self.gpus}

    @property
    def gpu_count(self) -> int:
        return len(self.gpus)

    def __find_gpus(self, gpu_count: Optional[int],
                    min_free_memory: float) -> List[GPUtil.GPU]:
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


gpu_pool = GPUPool(gpu_count=settings.gpu_count,
                   min_free_memory=settings.min_free_memory)
