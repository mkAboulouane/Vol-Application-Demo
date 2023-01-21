import datetime
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.orm import relationship

from database import Base, engine


class Vol(Base):
    __tablename__ = 'vol'

    id = Column(Integer, primary_key=True, index=True)

    numVol = Column(String, unique=True)
    villeDepart = Column(String)
    villeArrivee = Column(String)
    retard = Column(DateTime)
    dateDepart = Column(DateTime)
    dateArrivee = Column(DateTime)
    avion = Column(Boolean, default=False)
    pilote = Column(Boolean, default=False)
    compagnie = Column(Boolean, default=False)

    billet = relationship("Billet", back_populates="vol")


Base.metadata.create_all(bind=engine)
