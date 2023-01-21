import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from models.passager import Passager
from models.siege import Siege
from models.vol import Vol

from database import Base, engine


class Billet(Base):
    __tablename__ = 'billet'

    id = Column(Integer, primary_key=True, index=True)

    numBillet = Column(String, unique=True)
    createdAt = Column(DateTime, default=datetime.datetime.utcnow)
    dateEmission = Column(DateTime)
    datePaiment = Column(DateTime)
    dateReservation = Column(DateTime)

    passager_id = Column(Integer, ForeignKey(Passager.id))
    passager = relationship("Passager", back_populates="billet")

    siege_id = Column(Integer, ForeignKey(Siege.id))
    siege = relationship("Siege", back_populates="billet")

    vol_id = Column(Integer, ForeignKey(Vol.id))
    vol = relationship("Vol", back_populates="billet")



Base.metadata.create_all(bind=engine)
