from sqlalchemy import Column, Integer, String

from database import Base, engine


class Compagnie(Base):
    __tablename__ = 'compagnie'

    id = Column(Integer, primary_key=True, index=True)

    code = Column(String, unique=True)
    nom = Column(String)
    siegeSocial = Column(String)



Base.metadata.create_all(bind=engine)
