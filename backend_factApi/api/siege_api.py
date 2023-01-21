from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import siege_converter
from database import get_db
from services import siege_service

router = fastapi.APIRouter(
    prefix='/siege',
    tags=['Siege']
)

get_db = get_db

@router.get('/', response_model=List[siege_converter.SiegeVo])
async def findAll(db: Session = Depends(get_db)):
    return siege_service.findAll(db)


@router.get('/page', response_model=Page[siege_converter.SiegeVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(siege_service.findAll(db))


@router.post('/', response_model=siege_converter.SiegeVo)
async def save(entity: siege_converter.SiegeCreate, db: Session = Depends(get_db)):
    return siege_service.save(db, entity)


@router.put('/', response_model=siege_converter.SiegeVo)
async def edit(entity: siege_converter.SiegeEdit, db: Session = Depends(get_db)):
    return siege_service.edit(db, entity)


@router.get('/{id}/', response_model=siege_converter.SiegeVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return siege_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return siege_service.delete(db, id)

