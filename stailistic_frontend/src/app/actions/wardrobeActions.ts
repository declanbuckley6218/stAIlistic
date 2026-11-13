"use server";

import { getWardrobeController } from "@/app/controllers/WardrobeController";
import { updateWardrobeItem } from "@/services/WardrobeDatabaseService";
import { ClothingItem } from "@/types/wardrobe";

export async function loadWardrobe(userid: number) {
  return await getWardrobeController(userid);
}

export async function updateItem(
  itemId: string,
  userid: number,
  updates: Partial<Omit<ClothingItem, "id" | "userid">>,
) {
  return updateWardrobeItem(itemId, userid, updates);
}
