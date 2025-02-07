from sqlalchemy import create_engine, text
from .database import SQLALCHEMY_DATABASE_URL

def migrate_database():
    engine = create_engine(SQLALCHEMY_DATABASE_URL)
    with engine.connect() as connection:

        connection.execute(text("""
            ALTER TABLE materials 
            RENAME COLUMN "maxQuantity" TO max_quantity;
        """))
        connection.commit()

if __name__ == "__main__":
    migrate_database() 