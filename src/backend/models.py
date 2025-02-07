from sqlalchemy import Column, Integer, String
from database import Base

class Material(Base):
    __tablename__ = "materials"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    image = Column(String)
    quantity = Column(Integer)
    maxQuantity = Column(Integer)
    unit = Column(String) 