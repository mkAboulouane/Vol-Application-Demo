from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.pilote_converter import PiloteCreate, PiloteEdit, PiloteFilter
from models.pilote import Pilote
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Pilote).filter(Pilote.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Pilote with id: {id} does not exist')


def findByMatricule(db: Session, ref: str):
    founded = db.query(Pilote).filter(Pilote.matricule == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Pilote with Pilote: {ref} does not exist')


def findAll(db: Session):
    return db.query(Pilote).order_by(desc(Pilote.id)).all()


def save(db: Session, entity: PiloteCreate):
    pilote = Pilote(**entity.dict())
    return Util.save(db, pilote)


def edit(db: Session, entity: PiloteEdit):
    pilote = db.query(Pilote).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, pilote, entity)


def delete(db: Session, id: int):
    db.query(Pilote).filter(Pilote.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: PiloteFilter):
    query = select(Pilote)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


