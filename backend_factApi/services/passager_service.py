from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.passager_converter import PassagerCreate, PassagerEdit, PassagerFilter
from models.passager import Passager
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Passager).filter(Passager.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Passager with id: {id} does not exist')


def findByCin(db: Session, ref: str):
    founded = db.query(Passager).filter(Passager.cin == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Passager with Passager: {ref} does not exist')


def findAll(db: Session):
    return db.query(Passager).order_by(desc(Passager.id)).all()


def save(db: Session, entity: PassagerCreate):
    passager = Passager(**entity.dict())
    return Util.save(db, passager)


def edit(db: Session, entity: PassagerEdit):
    passager = db.query(Passager).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, passager, entity)


def delete(db: Session, id: int):
    db.query(Passager).filter(Passager.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: PassagerFilter):
    query = select(Passager)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


