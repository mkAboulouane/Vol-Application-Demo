from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship

from database import Base, engine


class Avion(Base):
    __tablename__ = 'avion'

    id = Column(Integer, primary_key=True, index=True)

    codeAvion = Column(String, unique=True)
    typeAvion = Column(String)
    modeleAvion = Column(String)
    nbPassagers = Column(Integer)

    siege = relationship("Siege", back_populates="avion")


Base.metadata.create_all(bind=engine)
