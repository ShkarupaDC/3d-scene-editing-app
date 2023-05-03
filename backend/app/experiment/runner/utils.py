import asyncio
import signal
from pathlib import Path
from typing import Optional, List, Any

from app.experiment.common import ProcessState, FinishedProcess


async def run_subprocess(
    command: List[str],
    stop_event: Optional[asyncio.Event] = None,
    ping_timeout: float = 5,  # seconds
    stop_timeout: float = 10,  # seconds
    stop_signal: signal.Signals = signal.SIGQUIT,  # signal.SIGTERM
    is_python: bool = True,
    **kwargs: Any,
) -> FinishedProcess:
    process_kwargs = {
        "stderr": asyncio.subprocess.PIPE,
        "stdout": asyncio.subprocess.PIPE,
        "preexec_fn": _ignore_sigint,
    }
    if is_python:
        process_kwargs["env"] = {
            # NOTE(dsh): flushes stdout and stderr inmmediately
            "PYTHONUNBUFFERED": "1",
            # NOTE(dsh): prevents UserWarning: No PYTORCH_KERNEL_CACHE_PATH or HOME environment variable set!
            "HOME": str(Path.home())
        }
    process_kwargs.update(kwargs)  # overrides "env"
    process = await asyncio.create_subprocess_exec(*command, **process_kwargs)
    while process.returncode is None:
        try:
            await asyncio.wait_for(process.wait(), timeout=ping_timeout)
        except asyncio.TimeoutError:
            if stop_event is None or not stop_event.is_set():
                continue
            process.send_signal(stop_signal)
            try:
                await asyncio.wait_for(process.wait(), timeout=stop_timeout)
            except asyncio.TimeoutError:
                process.kill()
                await process.wait()
            state = ProcessState.STOPPED
            break
    else:
        if process.returncode == 0:
            state = ProcessState.DONE
        else:
            state = ProcessState.FAILED
    stdout = await process.stdout.read()
    stderr = await process.stderr.read()
    return FinishedProcess(state, stdout.decode(), stderr.decode(),
                           process.returncode)


def _ignore_sigint() -> None:
    signal.signal(signal.SIGINT, signal.SIG_IGN)
