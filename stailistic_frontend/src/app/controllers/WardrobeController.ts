import { ClothingItem } from "@/types/wardrobe";
import { getWardrobeItems } from "@/services/WardrobeDatabaseService";
import "server-only";
export async function getWardrobeController(
    userid: number
): Promise<ClothingItem[]> {
    try {
        if (!Number.isInteger(userid) || userid <= 0) {
            throw new Error("Invalid user ID");
        }

        const wardrobe = await getWardrobeItems(userid);

        return wardrobe;

    } catch (error) {
        console.error("Wardrobe Controller Error:", error);
        throw error;
    }
}