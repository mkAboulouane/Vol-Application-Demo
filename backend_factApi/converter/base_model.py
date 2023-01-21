from pydantic import BaseModel


class BaseModelConfig(BaseModel):
    pass

    class Config:
        orm_mode = True


