from typing import List

import fastapi
from fastapi import Depends
from sqlalchemy.orm import Session
from fastapi_pagination import Page, paginate

from converter import vol_converter
from database import get_db
from services import vol_service

router = fastapi.APIRouter(
    prefix='/vol',
    tags=['Vol']
)

get_db = get_db

@router.get('/', response_model=List[vol_converter.VolVo])
async def findAll(db: Session = Depends(get_db)):
    return vol_service.findAll(db)


@router.get('/num-vol/', response_model=vol_converter.VolVo)
async def findByNumVol(ref: str, db: Session = Depends(get_db)):
    return vol_service.findByNumVol(db, ref)


@router.post('/filter', response_model=Page[vol_converter.VolVo])
async def search(entity: vol_converter.VolFilter, db: Session = Depends(get_db)):
    return paginate(vol_service.search(db, entity))


@router.get('/page', response_model=Page[vol_converter.VolVo])
async def findAllPage(db: Session = Depends(get_db)):
    return paginate(vol_service.findAll(db))


@router.post('/', response_model=vol_converter.VolVo)
async def save(entity: vol_converter.VolCreate, db: Session = Depends(get_db)):
    return vol_service.save(db, entity)


@router.put('/', response_model=vol_converter.VolVo)
async def edit(entity: vol_converter.VolEdit, db: Session = Depends(get_db)):
    return vol_service.edit(db, entity)


@router.get('/{id}/', response_model=vol_converter.VolVo)
async def findById(id: int, db: Session = Depends(get_db)):
    return vol_service.findById(db, id)


@router.delete('/{id}/')
async def delete(id: int, db: Session = Depends(get_db)):
    return vol_service.delete(db, id)

