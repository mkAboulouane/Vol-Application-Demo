from converter.base_model import BaseModelConfig
from typing import Optional

from fastapi_filter.contrib.sqlalchemy import Filter

from models.pilote import Pilote
from fastapi_filter.contrib.sqlalchemy import Filter


class PiloteCreate(BaseModelConfig):
    matricule: str
    nom: Optional[str]
    prenom: Optional[str]
    qualif: Optional[str]
    compagnie: Optional[bool]


class PiloteVo(PiloteCreate):
    id: int



class PiloteEdit(PiloteCreate):
    id: int


class PiloteWithoutAssociativeListVo(PiloteCreate):
    id: int


class  PiloteFilter(Filter):
    matricule: Optional[str]
    matricule__like: Optional[str]
    matricule__in: Optional[list[str]]
    nom: Optional[str]
    nom__like: Optional[str]
    nom__in: Optional[list[str]]
    prenom: Optional[str]
    prenom__like: Optional[str]
    prenom__in: Optional[list[str]]
    qualif: Optional[str]
    qualif__like: Optional[str]
    qualif__in: Optional[list[str]]
    compagnie: Optional[bool]
    order_by: list[str] = ["id"]


    class Constants(Filter.Constants):
        model = Pilote

