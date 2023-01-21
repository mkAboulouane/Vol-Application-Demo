import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.vol import Vol
from fastapi_filter.contrib.sqlalchemy import Filter


class VolCreate(BaseModelConfig):
    numVol: str
    villeDepart: Optional[str]
    villeArrivee: Optional[str]
    retard: Optional[datetime.datetime]
    dateDepart: Optional[datetime.datetime]
    dateArrivee: Optional[datetime.datetime]
    avion: Optional[bool]
    pilote: Optional[bool]
    compagnie: Optional[bool]


class VolVo(VolCreate):
    id: int



class VolEdit(VolCreate):
    id: int


class VolWithoutAssociativeListVo(VolCreate):
    id: int


class  VolFilter(Filter):
    numVol: Optional[str]
    numVol__like: Optional[str]
    numVol__in: Optional[list[str]]
    villeDepart: Optional[str]
    villeDepart__like: Optional[str]
    villeDepart__in: Optional[list[str]]
    villeArrivee: Optional[str]
    villeArrivee__like: Optional[str]
    villeArrivee__in: Optional[list[str]]
    retard: Optional[datetime.datetime]
    retard__lt: Optional[datetime.datetime]
    retard__gte: Optional[datetime.datetime]
    dateDepart: Optional[datetime.datetime]
    dateDepart__lt: Optional[datetime.datetime]
    dateDepart__gte: Optional[datetime.datetime]
    dateArrivee: Optional[datetime.datetime]
    dateArrivee__lt: Optional[datetime.datetime]
    dateArrivee__gte: Optional[datetime.datetime]
    avion: Optional[bool]
    pilote: Optional[bool]
    compagnie: Optional[bool]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Vol

