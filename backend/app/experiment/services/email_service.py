import email.message
import mimetypes
import asyncio
import logging
from dataclasses import dataclass
from typing import Tuple, Optional, IO, List

import aiosmtplib

from app.experiment.dao import ExperimentDAO
from app.experiment.common import ExperimentState, Experiment, FinishedProcess
from app.experiment.utils import write_json_to_string
from app.config import settings

logger = logging.getLogger(__name__)


class EmailService:

    def __init__(self, smtp_host: str, smtp_port: str, username: str,
                 password: str, start_TLS: bool) -> None:
        self.smtp_host = smtp_host
        self.smtp_port = smtp_port
        self.username = username
        self.password = password
        self.start_TLS = start_TLS

    async def send_email(self, message: email.message.EmailMessage) -> None:
        await asyncio.sleep(3)
        logger.info(message.as_string())
        return
        await aiosmtplib.send(message=message,
                              hostname=self.smtp_host,
                              port=self.smtp_port,
                              username=self.username,
                              password=self.password,
                              start_tls=self.start_TLS)


@dataclass
class Attachment:
    data: IO
    filename: str


class ExperimentEmailService:

    def __init__(self, sender: str, email_service: EmailService) -> None:
        self.sender = sender
        self.email_service = email_service

    def _add_binary_attachment(self, message: email.message.EmailMessage,
                               data: bytes,
                               filename: str) -> email.message.EmailMessage:
        # https://docs.python.org/3/library/email.examples.html
        ctype, encoding = mimetypes.guess_type(filename)
        if ctype is None or encoding is not None:
            ctype = "application/octet-stream"
        maintype, subtype = ctype.split("/", 1)
        message.add_attachment(data,
                               maintype=maintype,
                               subtype=subtype,
                               filename=filename)
        return message

    def _prepare_message(
        self,
        sender: str,
        recipient: str,
        subject: str,
        body: str,
        text_attachments: Optional[List[Attachment]] = None,
        binary_attachments: Optional[List[Attachment]] = None
    ) -> email.message.EmailMessage:
        message = email.message.EmailMessage()
        message["Subject"] = subject
        message["From"] = sender
        message["To"] = recipient
        message.set_content(body)
        if text_attachments is not None:
            for attachment in text_attachments:
                message.add_attachment(attachment.data,
                                       filename=attachment.filename)
        if binary_attachments is not None:
            for attachment in binary_attachments:
                self._add_binary_attachment(message, attachment.data,
                                            attachment.filename)
        return message

    def _get_subject_and_body(self, experiment: Experiment) -> Tuple[str, str]:
        type_name = experiment.type.name.capitalize()
        if experiment.state is ExperimentState.DONE:
            subject = f"{type_name} experiment {experiment.id} is done!"
            body = "Go back to app and check it!"
        elif experiment.state is ExperimentState.FAILED:
            subject = f"{type_name} experiment {experiment.id} is failed("
            body = "Look at stderr.txt to find failure reason"
        else:
            assert experiment.state in {
                ExperimentState.PENDING, ExperimentState.STOPPED
            }
            subject = f"{type_name} experiment {experiment.id} was not done... Please, resubmit it!"
            if experiment.state is ExperimentState.PENDING:
                body = "Experiment has not been started"
            else:
                body = "Experiment was stopped"
        return subject, body

    def _get_text_attachments(
            self,
            finished_process: Optional[FinishedProcess]) -> List[Attachment]:
        if finished_process is None:
            return []
        return [
            Attachment(finished_process.stdout, filename="stdout.txt"),
            Attachment(finished_process.stderr, filename="stderr.txt")
        ]

    async def _send_default_message(
            self, experiment: Experiment,
            finished_process: Optional[FinishedProcess],
            recipient: str) -> None:
        subject, body = self._get_subject_and_body(experiment)
        text_attachments = self._get_text_attachments(finished_process)
        message = self._prepare_message(sender=self.sender,
                                        recipient=recipient,
                                        subject=subject,
                                        body=body,
                                        text_attachments=text_attachments)
        await self.email_service.send_email(message=message)

    async def send_edit_message(self, experiment: Experiment,
                                finished_process: Optional[FinishedProcess],
                                recipient: str) -> None:
        await self._send_default_message(experiment, finished_process,
                                         recipient)

    async def send_render_message(self, experiment: Experiment,
                                  finished_process: Optional[FinishedProcess],
                                  recipient: str,
                                  experiment_dao: ExperimentDAO) -> None:
        subject, body = self._get_subject_and_body(experiment)
        text_attachments = self._get_text_attachments(finished_process)

        if experiment.state is ExperimentState.DONE:
            body = f"{body}\nCamera parameters and rendering can be found in attachments"
            # Rendering
            rendering_path = experiment_dao.get_rendering_path(experiment.id)
            rendering = await experiment_dao.get_rendering(experiment.id)
            # Camera
            render_config = await experiment_dao.get_render_config(
                experiment.id)
            camera_json = write_json_to_string(render_config.camera)
            # Attachments
            binary_attachments = [
                Attachment(rendering, filename=rendering_path.name),
                Attachment(camera_json.encode(), filename="camera.json")
            ]
        else:
            binary_attachments = None

        message = self._prepare_message(sender=self.sender,
                                        recipient=recipient,
                                        subject=subject,
                                        body=body,
                                        text_attachments=text_attachments,
                                        binary_attachments=binary_attachments)
        await self.email_service.send_email(message=message)

    async def send_train_message(self, experiment: Experiment,
                                 finished_process: Optional[FinishedProcess],
                                 recipient: str) -> None:
        await self._send_default_message(experiment, finished_process,
                                         recipient)


email_service = EmailService(smtp_host=settings.smtp_host,
                             smtp_port=settings.smtp_port,
                             username=settings.smtp_username,
                             password=settings.smtp_password,
                             start_TLS=settings.start_TLS)
experiment_email_service = ExperimentEmailService(sender=settings.app_email,
                                                  email_service=email_service)
