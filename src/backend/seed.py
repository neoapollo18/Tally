from database import SessionLocal
import models

# Initial data
initial_data = [
    {
        "name": "Gildan T-Shirt - Red / M",
        "image": "/Images/tshirt-red.png",
        "quantity": 13,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - Red / L",
        "image": "/Images/tshirt-red.png",
        "quantity": 46,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - Black / S",
        "image": "/Images/tshirt-black.png",
        "quantity": 21,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - Black / M",
        "image": "/Images/tshirt-black.png",
        "quantity": 34,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - Black / L",
        "image": "/Images/tshirt-black.png",
        "quantity": 27,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - White /S",
        "image": "/Images/tshirt-white.png",
        "quantity": 34,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - White / M",
        "image": "/Images/tshirt-white.png",
        "quantity": 51,
        "maxQuantity": 24,
        "unit": "PCS"
    },
    {
        "name": "Gildan T-Shirt - White / L",
        "image": "/Images/tshirt-white.png",
        "quantity": 29,
        "maxQuantity": 24,
        "unit": "PCS"
    }
]

def seed_database():
    db = SessionLocal()
    try:
        # Check if we already have data
        existing = db.query(models.Material).first()
        if not existing:
            for data in initial_data:
                material = models.Material(**data)
                db.add(material)
            db.commit()
            print("Database seeded successfully!")
        else:
            print("Database already contains data")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database() 