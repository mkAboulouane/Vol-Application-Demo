from converter.base_model import BaseModelConfig
from typing import Optional



class CompagnieCreate(BaseModelConfig):
    code: str
    nom: Optional[str]
    siegeSocial: Optional[str]


class CompagnieVo(CompagnieCreate):
    id: int



class CompagnieEdit(CompagnieCreate):
    id: int


class CompagnieWithoutAssociativeListVo(CompagnieCreate):
    id: int


