"use server";

import { getWardrobeController } from "@/app/controllers/WardrobeController";

export async function loadWardrobe(userid: number) {
    return await getWardrobeController(userid);
}