from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from models.avion import Avion

from database import Base, engine


class Siege(Base):
    __tablename__ = 'siege'

    id = Column(Integer, primary_key=True, index=True)

    numAllee = Column(String)
    numRang = Column(String)
    classe = Column(String)

    avion_id = Column(Integer, ForeignKey(Avion.id))
    avion = relationship("Avion", back_populates="siege")

    billet = relationship("Billet", back_populates="siege")


Base.metadata.create_all(bind=engine)
