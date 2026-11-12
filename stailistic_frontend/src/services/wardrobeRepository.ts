import { ClothingItem } from "@/types/wardrobe";

export async function insertClothingItem(item: ClothingItem): Promise<void> {
  const res = await fetch("http://localhost:8000/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Could not save the item.");
}
