from sqlalchemy import Column, Integer, String, Boolean

from database import Base, engine


class Pilote(Base):
    __tablename__ = 'pilote'

    id = Column(Integer, primary_key=True, index=True)

    matricule = Column(String, unique=True)
    nom = Column(String)
    prenom = Column(String)
    qualif = Column(String)
    compagnie = Column(Boolean, default=False)



Base.metadata.create_all(bind=engine)
