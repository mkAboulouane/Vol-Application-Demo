from converter.base_model import BaseModelConfig
from typing import Optional

from converter.avion_converter import AvionVo


class SiegeCreate(BaseModelConfig):
    numAllee: Optional[str]
    numRang: Optional[str]
    classe: Optional[str]

    avion_id: Optional[int]

class SiegeVo(SiegeCreate):
    id: int

    avion: Optional[AvionVo]


class SiegeEdit(SiegeCreate):
    id: int


class SiegeWithoutAssociativeListVo(SiegeCreate):
    id: int


