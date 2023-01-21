from fastapi import HTTPException
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from converter.vol_converter import VolCreate, VolEdit, VolFilter
from models.vol import Vol
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Vol).filter(Vol.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Vol with id: {id} does not exist')


def findByNumVol(db: Session, ref: str):
    founded = db.query(Vol).filter(Vol.numVol == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Vol with Vol: {ref} does not exist')


def findAll(db: Session):
    return db.query(Vol).order_by(desc(Vol.id)).all()


def save(db: Session, entity: VolCreate):
    vol = Vol(**entity.dict())
    return Util.save(db, vol)


def edit(db: Session, entity: VolEdit):
    vol = db.query(Vol).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, vol, entity)


def delete(db: Session, id: int):
    db.query(Vol).filter(Vol.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


def search(db: Session, entity: VolFilter):
    query = select(Vol)
    query = entity.filter(query)
    query = entity.sort(query)
    result = db.execute(query)
    return result.scalars().all()


