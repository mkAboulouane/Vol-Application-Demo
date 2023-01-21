from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import compagnie_converter
from database import get_db
from services import compagnie_service

router = fastapi.APIRouter(
    prefix='/compagnie',
    tags=['Compagnie']
)

get_db = get_db

@router.get('/', response_model=List[compagnie_converter.CompagnieVo])
async def findAll(db: Session = Depends(get_db)):
    return compagnie_service.findAll(db)


@router.get('/code/', response_model=compagnie_converter.CompagnieVo)
async def findByCode(ref: str, db: Session = Depends(get_db)):
    return compagnie_service.findByCode(db, ref)


@router.get('/page', response_model=Page[compagnie_converter.CompagnieVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(compagnie_service.findAll(db))


@router.post('/', response_model=compagnie_converter.CompagnieVo)
async def save(entity: compagnie_converter.CompagnieCreate, db: Session = Depends(get_db)):
    return compagnie_service.save(db, entity)


@router.put('/', response_model=compagnie_converter.CompagnieVo)
async def edit(entity: compagnie_converter.CompagnieEdit, db: Session = Depends(get_db)):
    return compagnie_service.edit(db, entity)


@router.get('/{id}/', response_model=compagnie_converter.CompagnieVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return compagnie_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return compagnie_service.delete(db, id)

