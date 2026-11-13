import { ClothingItem } from "@/types/wardrobe";
import { insertClothingItem } from "./wardrobeRepository";

export interface NewClothingItem {
  image: string;
  name: string;
  type: string;
  color: string;
}

function getAiTags(item: NewClothingItem): string[] {
  return [item.type, item.color].filter(Boolean);
}

export async function addClothingItem(
  input: NewClothingItem,
): Promise<ClothingItem> {
  if (!input.image) throw new Error("Please add a photo.");
  if (!input.type) throw new Error("Please pick a category.");

  const item = {
    name: input.name || "Untitled",
    brand: "",
    color: input.color,
    type: input.type,
    material: "Unknown",
    size: "Unknown",
    image: input.image,
    tags: getAiTags(input),
  };
  const id = await insertClothingItem(item);
  return { ...item, id };
}
