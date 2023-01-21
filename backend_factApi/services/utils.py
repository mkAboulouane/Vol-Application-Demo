from sqlalchemy.orm import Session


class Util:
    @classmethod
    def save(cls, db: Session, obj):
        db.add(obj)
        db.commit()
        db.refresh(obj)
        return obj

    @classmethod
    def update(cls, db: Session, obj, entity):
        for key, value in entity.items():
            setattr(obj, key, value)
        return cls.save(db, obj)

    @classmethod
    def delete(cls, db: Session, Obj, id: int):
        db.query(Obj).filter(Obj.id == id).delete(synchronize_session=False)
        db.commit()
        return 1
    