from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import avion_converter
from database import get_db
from services import avion_service

router = fastapi.APIRouter(
    prefix='/avion',
    tags=['Avion']
)

get_db = get_db

@router.get('/', response_model=List[avion_converter.AvionVo])
async def findAll(db: Session = Depends(get_db)):
    return avion_service.findAll(db)


@router.get('/code-avion/', response_model=avion_converter.AvionVo)
async def findByCodeAvion(ref: str, db: Session = Depends(get_db)):
    return avion_service.findByCodeAvion(db, ref)


@router.post('/filter', response_model=Page[avion_converter.AvionVo])
async def search(entity: avion_converter.AvionFilter, db: Session = Depends(get_db)):
    return paginate(avion_service.search(db, entity))


@router.get('/page', response_model=Page[avion_converter.AvionVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(avion_service.findAll(db))


@router.post('/', response_model=avion_converter.AvionVo)
async def save(entity: avion_converter.AvionCreate, db: Session = Depends(get_db)):
    return avion_service.save(db, entity)


@router.put('/', response_model=avion_converter.AvionVo)
async def edit(entity: avion_converter.AvionEdit, db: Session = Depends(get_db)):
    return avion_service.edit(db, entity)


@router.get('/{id}/', response_model=avion_converter.AvionVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return avion_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return avion_service.delete(db, id)

