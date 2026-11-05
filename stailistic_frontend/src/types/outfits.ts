import { WardrobeArticlesInterface } from "./wardrobe";

export interface OutfitInterface {
    outfitID: number,
    outfitArticles?: WardrobeArticlesInterface[], //at least should have 3, potench 4, one for shoes, shirt, pants, potench jacket
    outfitName?: string, //User Defined
    outfitDescription?: string, //User Defined
    outfitStyle?: string, //like athletic waer, sweat wear, 
    outfitEvent?: string, // Actual event of the outfit if any
}