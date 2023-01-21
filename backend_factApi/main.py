from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi_pagination import add_pagination
from api import passager_api, billet_api, siege_api, avion_api, vol_api, pilote_api, compagnie_api


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

origins = [
    'http://localhost:4200',
    'http://localhost:3000',
    'http://localhost',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.on_event("startup")
async def startup() -> None:
    print('Application start...')


@app.on_event("shutdown")
async def startup() -> None:
    print('Shutdown...')


def configure_routing():
    app.include_router(passager_api.router)
    app.include_router(billet_api.router)
    app.include_router(siege_api.router)
    app.include_router(avion_api.router)
    app.include_router(vol_api.router)
    app.include_router(pilote_api.router)
    app.include_router(compagnie_api.router)


configure_routing()
add_pagination(app)

