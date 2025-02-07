from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://charles@localhost:5432/materials_db"
    
    class Config:
        env_file = ".env"

settings = Settings() 