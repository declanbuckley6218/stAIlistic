from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


class ClothingItem(BaseModel):
    id: str
    name: str
    brand: str
    color: str | None = None
    type: str
    material: str
    size: str
    image: str
    tags: list[str]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}


@app.post("/items")
def insert_clothing_item(item: ClothingItem):
    sql = "INSERT INTO ClothingItem (id, name, brand, color, type, material, size, image) VALUES (:id, :name, :brand, :color, :type, :material, :size, :image)"
    print("Pretend Oracle query:", sql, item)
    return item
