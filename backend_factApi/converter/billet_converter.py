import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.billet import Billet
from converter.passager_converter import PassagerVo
from converter.siege_converter import SiegeVo
from converter.vol_converter import VolVo
from fastapi_filter.contrib.sqlalchemy import Filter


class BilletCreate(BaseModelConfig):
    numBillet: str
    dateEmission: Optional[datetime.datetime]
    datePaiment: Optional[datetime.datetime]
    dateReservation: Optional[datetime.datetime]

    passager_id: Optional[int]
    siege_id: Optional[int]
    vol_id: Optional[int]

class BilletVo(BilletCreate):
    id: int

    passager: Optional[PassagerVo]
    siege: Optional[SiegeVo]
    vol: Optional[VolVo]


class BilletEdit(BilletCreate):
    id: int


class BilletWithoutAssociativeListVo(BilletCreate):
    id: int


class  BilletFilter(Filter):
    numBillet: Optional[str]
    numBillet__like: Optional[str]
    numBillet__in: Optional[list[str]]
    createdAt: Optional[datetime.datetime]
    createdAt__lt: Optional[datetime.datetime]
    createdAt__gte: Optional[datetime.datetime]
    dateEmission: Optional[datetime.datetime]
    dateEmission__lt: Optional[datetime.datetime]
    dateEmission__gte: Optional[datetime.datetime]
    datePaiment: Optional[datetime.datetime]
    datePaiment__lt: Optional[datetime.datetime]
    datePaiment__gte: Optional[datetime.datetime]
    dateReservation: Optional[datetime.datetime]
    dateReservation__lt: Optional[datetime.datetime]
    dateReservation__gte: Optional[datetime.datetime]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Billet

