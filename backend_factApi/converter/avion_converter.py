from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.avion import Avion
from fastapi_filter.contrib.sqlalchemy import Filter


class AvionCreate(BaseModelConfig):
    codeAvion: str
    typeAvion: Optional[str]
    modeleAvion: Optional[str]
    nbPassagers: Optional[int]


class AvionVo(AvionCreate):
    id: int



class AvionEdit(AvionCreate):
    id: int


class AvionWithoutAssociativeListVo(AvionCreate):
    id: int


class  AvionFilter(Filter):
    codeAvion: Optional[str]
    codeAvion__like: Optional[str]
    codeAvion__in: Optional[list[str]]
    typeAvion: Optional[str]
    typeAvion__like: Optional[str]
    typeAvion__in: Optional[list[str]]
    modeleAvion: Optional[str]
    modeleAvion__like: Optional[str]
    modeleAvion__in: Optional[list[str]]
    nbPassagers: Optional[float]
    nbPassagers__lt: Optional[float]
    nbPassagers__gte: Optional[float]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Avion

