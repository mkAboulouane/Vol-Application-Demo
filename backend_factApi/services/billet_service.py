from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.billet_converter import BilletCreate, BilletEdit, BilletFilter
from models.billet import Billet
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Billet).filter(Billet.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Billet with id: {id} does not exist')


def findByNumBillet(db: Session, ref: str):
    founded = db.query(Billet).filter(Billet.numBillet == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Billet with Billet: {ref} does not exist')


def findAll(db: Session):
    return db.query(Billet).order_by(desc(Billet.id)).all()


def save(db: Session, entity: BilletCreate):
    billet = Billet(**entity.dict())
    return Util.save(db, billet)


def edit(db: Session, entity: BilletEdit):
    billet = db.query(Billet).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, billet, entity)


def delete(db: Session, id: int):
    db.query(Billet).filter(Billet.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: BilletFilter):
    query = select(Billet)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


