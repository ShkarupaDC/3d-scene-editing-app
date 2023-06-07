import contextlib

from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.exception_handlers import http_exception_handler
from fastapi.middleware.cors import CORSMiddleware

from app.experiment.runner import experiment_runner
from app.experiment.service import experiment_dao
from app.experiment.exceptions import ExperimentError
from app.utils import interrupt_experiments_on_sigint, setup_logging
from app.config import settings
from app.experiment.routes import router


@contextlib.asynccontextmanager
async def lifespan(app: FastAPI) -> None:
    log_thread = setup_logging(settings.log_level)
    log_thread.start()
    await experiment_dao.start()
    experiment_runner.start()
    # NOTE(dsh): dirty hack to notify background tasks about CTRL+C before they finish
    interrupt_experiments_on_sigint(experiment_runner)
    yield
    experiment_runner.stop()
    await experiment_dao.stop()
    log_thread.stop()


app = FastAPI(title=settings.app_name, lifespan=lifespan)


@app.exception_handler(ExperimentError)
async def experiment_error_handler(request: Request,
                                   exc: ExperimentError) -> Response:
    return await http_exception_handler(
        request, HTTPException(status_code=400, detail=exc.args))


app.include_router(router, prefix="/api/experiment", tags=["experiment"])
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO(dsh): Fix
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
