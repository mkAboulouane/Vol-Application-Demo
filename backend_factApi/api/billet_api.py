from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import billet_converter
from database import get_db
from services import billet_service

router = fastapi.APIRouter(
    prefix='/billet',
    tags=['Billet']
)

get_db = get_db

@router.get('/', response_model=List[billet_converter.BilletVo])
async def findAll(db: Session = Depends(get_db)):
    return billet_service.findAll(db)


@router.get('/num-billet/', response_model=billet_converter.BilletVo)
async def findByNumBillet(ref: str, db: Session = Depends(get_db)):
    return billet_service.findByNumBillet(db, ref)


@router.post('/filter', response_model=Page[billet_converter.BilletVo])
async def search(entity: billet_converter.BilletFilter, db: Session = Depends(get_db)):
    return paginate(billet_service.search(db, entity))


@router.get('/page', response_model=Page[billet_converter.BilletVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(billet_service.findAll(db))


@router.post('/', response_model=billet_converter.BilletVo)
async def save(entity: billet_converter.BilletCreate, db: Session = Depends(get_db)):
    return billet_service.save(db, entity)


@router.put('/', response_model=billet_converter.BilletVo)
async def edit(entity: billet_converter.BilletEdit, db: Session = Depends(get_db)):
    return billet_service.edit(db, entity)


@router.get('/{id}/', response_model=billet_converter.BilletVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return billet_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return billet_service.delete(db, id)

