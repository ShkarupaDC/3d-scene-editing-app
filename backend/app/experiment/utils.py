import re
import json
import enum
from pathlib import Path
from dataclasses import is_dataclass, asdict, fields
import typing
from typing import Any, Optional, Type, TypeVar

from fastapi import UploadFile
import aiohttp
import aiohttp.client_exceptions
import aiofiles

from app.config import settings

T = TypeVar("T")

GDRIVE_FILE_ID = re.compile("/d/(.+)/")


def get_gdrive_file_id(url: str) -> Optional[str]:
    match = GDRIVE_FILE_ID.search(url)
    return None if match is None else match.group(1)


def _get_gdrive_get_file_url(file_id: str) -> str:
    return f"https://www.googleapis.com/drive/v3/files/{file_id}?key={settings.google_api_key}"


async def get_gdrive_file_mime_type(file_id: str) -> Optional[str]:
    get_file_url = _get_gdrive_get_file_url(file_id)
    async with aiohttp.ClientSession(raise_for_status=True) as session:
        try:
            async with session.get(get_file_url) as response:
                dataset_data = await response.json()
                return dataset_data["mimeType"]
        except aiohttp.client_exceptions.ClientResponseError:
            return None


def _json_encoder(obj: object) -> Any:
    if is_dataclass(obj):
        return asdict(obj)
    if isinstance(obj, Path):
        return str(obj.expanduser().resolve())
    if isinstance(obj, enum.Enum):
        return obj.value
    try:
        iterable = iter(obj)
    except TypeError:
        pass
    else:
        return list(iterable)
    return json.encoder.JSONEncoder.default(obj)


def write_json_to_string(data: Any) -> str:
    return json.dumps(data, indent=2, default=_json_encoder)


async def write_json(data: Any, path: Path) -> None:
    async with aiofiles.open(path, mode="w") as stream:
        await stream.write(write_json_to_string(data))


async def read_json(path: Path) -> Any:
    async with aiofiles.open(path, mode="r") as stream:
        return json.loads(await stream.read())


async def write_binary(data: UploadFile, path: Path) -> None:
    async with aiofiles.open(path, mode="wb") as stream:
        await stream.write(data)


async def write_upload_file(upload_file: UploadFile, path: Path) -> None:
    await write_binary(await upload_file.read(), path)


async def read_binary(path: Path) -> bytes:
    async with aiofiles.open(path, mode="rb") as stream:
        return await stream.read()


def dataclass_from_json(class_: Type[T], data: Any) -> T:
    if is_dataclass(class_):
        return class_(
            **{
                field.name: dataclass_from_json(field.type, data[field.name])
                for field in fields(class_)
            })
    class_origin = typing.get_origin(class_)
    class_args = typing.get_args(class_)
    if class_origin == tuple:
        return tuple(
            dataclass_from_json(type, value)
            for type, value in zip(class_args, data))
    if class_origin == list:
        return [dataclass_from_json(class_args[0], value) for value in data]
    if class_origin is None:
        try:
            return class_(data)
        except Exception:
            pass
    raise RuntimeError(f"Unsupported type {class_}!")
