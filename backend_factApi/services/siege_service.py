from fastapi import HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import Session

from converter.siege_converter import SiegeCreate, SiegeEdit
from models.siege import Siege
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Siege).filter(Siege.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Siege with id: {id} does not exist')


def findAll(db: Session):
    return db.query(Siege).order_by(desc(Siege.id)).all()


def save(db: Session, entity: SiegeCreate):
    siege = Siege(**entity.dict())
    return Util.save(db, siege)


def edit(db: Session, entity: SiegeEdit):
    siege = db.query(Siege).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, siege, entity)


def delete(db: Session, id: int):
    db.query(Siege).filter(Siege.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


