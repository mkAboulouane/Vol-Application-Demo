from fastapi import HTTPException
from sqlalchemy import desc
from sqlalchemy.orm import Session

from converter.compagnie_converter import CompagnieCreate, CompagnieEdit
from models.compagnie import Compagnie
from services.utils import Util


def findById(db: Session, id: int):
    founded = db.query(Compagnie).filter(Compagnie.id == id).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Compagnie with id: {id} does not exist')


def findByCode(db: Session, ref: str):
    founded = db.query(Compagnie).filter(Compagnie.code == ref).first()
    if founded:
        return founded
    raise HTTPException(status_code=400, detail=f'Compagnie with Compagnie: {ref} does not exist')


def findAll(db: Session):
    return db.query(Compagnie).order_by(desc(Compagnie.id)).all()


def save(db: Session, entity: CompagnieCreate):
    compagnie = Compagnie(**entity.dict())
    return Util.save(db, compagnie)


def edit(db: Session, entity: CompagnieEdit):
    compagnie = db.query(Compagnie).get(entity.id)
    entity = entity.dict(exclude_unset=True)
    return Util.update(db, compagnie, entity)


def delete(db: Session, id: int):
    db.query(Compagnie).filter(Compagnie.id == id).delete(synchronize_session=False)
    db.commit()
    return 1


