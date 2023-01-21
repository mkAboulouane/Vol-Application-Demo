from sqlalchemy.orm import sessionmaker
from faker import Faker

import database

db_string = database.SQLALCHEMY_DATABASE_URL
con = database.create_engine(db_string)
Session = sessionmaker(con)
db = Session()

fake = Faker()

def init(drop_and_create: bool) -> None:
    if drop_and_create:
        print('initializing start...')
        with database.engine.begin() as conn:
            conn.run_callable(database.Base.metadata.drop_all)
            conn.run_callable(database.Base.metadata.create_all)
    return None

