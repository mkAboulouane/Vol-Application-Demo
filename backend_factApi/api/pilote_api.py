from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import pilote_converter
from database import get_db
from services import pilote_service

router = fastapi.APIRouter(
    prefix='/pilote',
    tags=['Pilote']
)

get_db = get_db

@router.get('/', response_model=List[pilote_converter.PiloteVo])
async def findAll(db: Session = Depends(get_db)):
    return pilote_service.findAll(db)


@router.get('/matricule/', response_model=pilote_converter.PiloteVo)
async def findByMatricule(ref: str, db: Session = Depends(get_db)):
    return pilote_service.findByMatricule(db, ref)


@router.post('/filter', response_model=Page[pilote_converter.PiloteVo])
async def search(entity: pilote_converter.PiloteFilter, db: Session = Depends(get_db)):
    return paginate(pilote_service.search(db, entity))


@router.get('/page', response_model=Page[pilote_converter.PiloteVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(pilote_service.findAll(db))


@router.post('/', response_model=pilote_converter.PiloteVo)
async def save(entity: pilote_converter.PiloteCreate, db: Session = Depends(get_db)):
    return pilote_service.save(db, entity)


@router.put('/', response_model=pilote_converter.PiloteVo)
async def edit(entity: pilote_converter.PiloteEdit, db: Session = Depends(get_db)):
    return pilote_service.edit(db, entity)


@router.get('/{id}/', response_model=pilote_converter.PiloteVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return pilote_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return pilote_service.delete(db, id)

