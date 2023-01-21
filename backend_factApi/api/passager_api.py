from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import passager_converter
from database import get_db
from services import passager_service

router = fastapi.APIRouter(
    prefix='/passager',
    tags=['Passager']
)

get_db = get_db

@router.get('/', response_model=List[passager_converter.PassagerVo])
async def findAll(db: Session = Depends(get_db)):
    return passager_service.findAll(db)


@router.get('/cin/', response_model=passager_converter.PassagerVo)
async def findByCin(ref: str, db: Session = Depends(get_db)):
    return passager_service.findByCin(db, ref)


@router.post('/filter', response_model=Page[passager_converter.PassagerVo])
async def search(entity: passager_converter.PassagerFilter, db: Session = Depends(get_db)):
    return paginate(passager_service.search(db, entity))


@router.get('/page', response_model=Page[passager_converter.PassagerVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(passager_service.findAll(db))


@router.post('/', response_model=passager_converter.PassagerVo)
async def save(entity: passager_converter.PassagerCreate, db: Session = Depends(get_db)):
    return passager_service.save(db, entity)


@router.put('/', response_model=passager_converter.PassagerVo)
async def edit(entity: passager_converter.PassagerEdit, db: Session = Depends(get_db)):
    return passager_service.edit(db, entity)


@router.get('/{id}/', response_model=passager_converter.PassagerVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return passager_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return passager_service.delete(db, id)

