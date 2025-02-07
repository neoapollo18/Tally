from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import models
from database import SessionLocal, engine

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=False,  
    allow_methods=["*"],
    allow_headers=["*"],
)


class QuantityUpdate(BaseModel):
    quantity: int


class MaterialCreate(BaseModel):
    name: str
    image: str
    quantity: int
    maxQuantity: int
    unit: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/materials")
async def get_materials(db: Session = Depends(get_db)):
    materials = db.query(models.Material).all()
    return materials

@app.patch("/api/materials/{material_id}")
async def update_material_quantity(
    material_id: int, 
    update: QuantityUpdate,
    db: Session = Depends(get_db)
):
    material = db.query(models.Material).filter(models.Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    
    material.quantity = max(0, update.quantity)  
    db.commit()
    db.refresh(material)
    print(f"Updated material {material_id} quantity to {material.quantity}")  
    return material

@app.post("/api/materials")
async def create_material(
    material: MaterialCreate,
    db: Session = Depends(get_db)
):
    db_material = models.Material(**material.dict())
    db.add(db_material)
    db.commit()
    db.refresh(db_material)
    print(f"Created new material: {db_material.name}")  
    return db_material 