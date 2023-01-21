import datetime
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship

from database import Base, engine


class Passager(Base):
    __tablename__ = 'passager'

    id = Column(Integer, primary_key=True, index=True)

    nom = Column(String)
    cin = Column(String, unique=True)
    prenom = Column(String)
    telephone = Column(String)
    status = Column(String)
    dateNaissance = Column(DateTime)

    billet = relationship("Billet", back_populates="passager")


Base.metadata.create_all(bind=engine)
