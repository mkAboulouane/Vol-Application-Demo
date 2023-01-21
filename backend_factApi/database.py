from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



SQLALCHEMY_DATABASE_URL = "postgresql://admin:admin@127.0.0.1:5432/vol_application"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False)

Base = declarative_base()


def get_db():
    db = SessionLocal(bind=engine)
    try:
        yield db
    finally:
        db.close()

