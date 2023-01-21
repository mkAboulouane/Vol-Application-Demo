import datetime
from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.passager import Passager
from fastapi_filter.contrib.sqlalchemy import Filter


class PassagerCreate(BaseModelConfig):
    nom: Optional[str]
    cin: str
    prenom: Optional[str]
    telephone: Optional[str]
    status: Optional[str]
    dateNaissance: Optional[datetime.datetime]


class PassagerVo(PassagerCreate):
    id: int



class PassagerEdit(PassagerCreate):
    id: int


class PassagerWithoutAssociativeListVo(PassagerCreate):
    id: int


class  PassagerFilter(Filter):
    nom: Optional[str]
    nom__like: Optional[str]
    nom__in: Optional[list[str]]
    cin: Optional[str]
    cin__like: Optional[str]
    cin__in: Optional[list[str]]
    prenom: Optional[str]
    prenom__like: Optional[str]
    prenom__in: Optional[list[str]]
    telephone: Optional[str]
    telephone__like: Optional[str]
    telephone__in: Optional[list[str]]
    status: Optional[str]
    status__like: Optional[str]
    status__in: Optional[list[str]]
    dateNaissance: Optional[datetime.datetime]
    dateNaissance__lt: Optional[datetime.datetime]
    dateNaissance__gte: Optional[datetime.datetime]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Passager

