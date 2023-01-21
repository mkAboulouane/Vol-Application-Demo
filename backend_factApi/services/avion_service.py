from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.avion_converter import AvionCreate, AvionEdit, AvionFilter
from models.avion import Avion
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Avion).filter(Avion.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Avion with id: {id} does not exist')


def findByCodeAvion(db: Session, ref: str):
    founded = db.query(Avion).filter(Avion.codeAvion == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Avion with Avion: {ref} does not exist')


def findAll(db: Session):
    return db.query(Avion).order_by(desc(Avion.id)).all()


def save(db: Session, entity: AvionCreate):
    avion = Avion(**entity.dict())
    return Util.save(db, avion)


def edit(db: Session, entity: AvionEdit):
    avion = db.query(Avion).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, avion, entity)


def delete(db: Session, id: int):
    db.query(Avion).filter(Avion.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: AvionFilter):
    query = select(Avion)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


