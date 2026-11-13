import { ClothingItem } from "@/types/wardrobe";
import { addItem } from "@/app/actions/wardrobeActions";

export async function insertClothingItem(
  item: Omit<ClothingItem, "id">,
): Promise<string> {
  return addItem(1, item);
}
