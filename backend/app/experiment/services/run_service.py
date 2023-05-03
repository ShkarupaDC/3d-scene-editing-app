import asyncio
import traceback
from typing import Optional, Any, Callable

from fastapi.concurrency import run_in_threadpool

from app.experiment.dao import ExperimentDAO, experiment_dao
from app.experiment.runner import ExperimentRunner, experiment_runner
from app.experiment.services.nn_cli import NNCLI, nn_cli
from app.experiment.common import (Experiment, ExperimentType, Device,
                                   DeviceType, FinishedProcess, ProcessState,
                                   ExperimentState)
from app.experiment.runner.utils import run_subprocess

RunFn = Callable[[Experiment, Device, Optional[asyncio.Event]],
                 FinishedProcess]
ReportFn = Callable[[Experiment, FinishedProcess], None]


class ExperimentRunService:

    def __init__(self, experiment_dao: ExperimentDAO,
                 experiment_runner: ExperimentRunner, nn_cli: NNCLI) -> None:
        self.dao = experiment_dao
        self.runner = experiment_runner
        self.nn_cli = nn_cli

    async def _run_edit(
            self, experiment: Experiment, device: Device,
            stop_event: Optional[asyncio.Event]) -> FinishedProcess:
        edit_config_path = self.dao.get_edit_config_path(experiment.id)
        edit_command = self.nn_cli.edit_command(edit_config_path, device)
        return await run_subprocess(edit_command.as_iter(), stop_event)

    async def _run_render(
            self, experiment: Experiment, device: Device,
            stop_event: Optional[asyncio.Event]) -> FinishedProcess:
        render_config_path = self.dao.get_render_config_path(experiment.id)
        render_command = self.nn_cli.render_command(render_config_path, device)
        return await run_subprocess(render_command.as_iter(), stop_event)

    async def _run_train(
            self, experiment: Experiment, device: Device,
            stop_event: Optional[asyncio.Event]) -> FinishedProcess:
        train_config_path = self.dao.get_train_config_path(experiment.id)
        train_command = self.nn_cli.train_command(train_config_path, device)
        return await run_subprocess(train_command.as_iter(), stop_event)

    async def _run_experiment_and_report(self, run: RunFn,
                                         experiment: Experiment,
                                         device_type: DeviceType,
                                         is_heavy: bool, report: ReportFn,
                                         **report_kwargs: Any) -> None:
        try:
            finished_process = await self.runner.run_experiment(
                run=run,
                experiment=experiment,
                device_type=device_type,
                is_heavy=is_heavy)
        except asyncio.exceptions.CancelledError:
            finished_process = None
        except Exception:
            finished_process = FinishedProcess(state=ProcessState.FAILED,
                                               stderr=traceback.format_exc(),
                                               exit_code=1)
        if finished_process is not None:
            experiment.state = ExperimentState.from_process_state(
                finished_process.state)
        try:
            # NOTE(dsh): Taken from starlette.concurrency.BackgroundTask
            if asyncio.iscoroutinefunction(report):
                await report(experiment, finished_process, **report_kwargs)
            else:
                await run_in_threadpool(report, experiment, finished_process,
                                        **report_kwargs)
        except Exception as exc:
            raise RuntimeError("Callback crashed!") from exc

    async def process_experiment(self, experiment: Experiment,
                                 device_type: DeviceType, is_heavy: bool,
                                 report: ReportFn,
                                 **report_kwargs: Any) -> None:
        if experiment.type is ExperimentType.EDIT:
            run = self._run_edit
        elif experiment.type is ExperimentType.RENDER:
            run = self._run_render
        else:
            assert experiment.type is ExperimentType.TRAIN
            run = self._run_train
        await self._run_experiment_and_report(run,
                                              experiment=experiment,
                                              device_type=device_type,
                                              is_heavy=is_heavy,
                                              report=report,
                                              **report_kwargs)


experiment_run_service = ExperimentRunService(
    experiment_dao=experiment_dao,
    experiment_runner=experiment_runner,
    nn_cli=nn_cli)
