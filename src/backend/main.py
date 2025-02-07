from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from .models import Material
from .database import SessionLocal, engine

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React app's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods including DELETE
    allow_headers=["*"],
    expose_headers=["*"]
)


class QuantityUpdate(BaseModel):
    quantity: int


class MaterialCreate(BaseModel):
    name: str
    quantity: int
    max_quantity: int
    image: str
    unit: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/materials")
async def get_materials(db: Session = Depends(get_db)):
    materials = db.query(Material).all()
    return materials

@app.patch("/api/materials/{material_id}")
async def update_material_quantity(
    material_id: int, 
    update: QuantityUpdate,
    db: Session = Depends(get_db)
):
    material = db.query(Material).filter(Material.id == material_id).first()
    if not material:
        raise HTTPException(status_code=404, detail="Material not found")
    
    material.quantity = max(0, update.quantity)  
    db.commit()
    db.refresh(material)
    print(f"Updated material {material_id} quantity to {material.quantity}")  
    return material

@app.post("/api/materials/")
async def create_material(material: MaterialCreate, db: Session = Depends(get_db)):
    try:
        print(f"Received material data: {material.dict()}")  # Debug log
        db_material = Material(
            name=material.name,
            quantity=material.quantity,
            max_quantity=material.max_quantity,
            image=material.image,
            unit=material.unit
        )
        print(f"Created material object: {db_material.__dict__}")  # Debug log
        db.add(db_material)
        db.commit()
        db.refresh(db_material)
        print(f"Successfully created material: {db_material.name}")
        return db_material
    except Exception as e:
        print(f"Error creating material: {str(e)}")
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/api/materials/{material_id}")
async def delete_material(material_id: int, db: Session = Depends(get_db)):
    try:
        material = db.query(Material).filter(Material.id == material_id).first()
        if material is None:
            raise HTTPException(status_code=404, detail="Material not found")
        db.delete(material)
        db.commit()
        print(f"Deleted material: {material_id}")
        return {"message": "Material deleted"}
    except Exception as e:
        print(f"Error deleting material: {str(e)}")
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) 