import { WardrobeArticlesInterface } from "./ArticleBox";
import { OutfitInterface } from "./OutfitBox";
// export interface OutfitInterface {
//     outfitID: number,
//     clothingItems?: , //at least should have 3, potench 4, one for shoes, shirt, pants, potench jacket
//     outfitName?: string, //User Defined
//     outfitDescription?: string, //User Defined
//     outfitStyle?: string, //like athletic waer, sweat wear, 
//     outfitEvent?: string, // actual event
// }
export default async function getOutfits(): Promise<OutfitInterface[]>{
        // const res = await fetch('need database call here');
        // const data = await res.json();
        return []; 
}

export async function getOutfitsDummy(): Promise<OutfitInterface[]>{
    let iter = 25;
    const data: OutfitInterface[] = [];
    const shoes: WardrobeArticlesInterface = {
        itemID: 1,
        imageDataURL: "/shoes.png",
        itemName: "ASCIS shoes",
        itemDescription: "ASICS Gel-NYC White Roasted Coffee 'White Brown'",
        itemStyle: "Casual",
        itemColor: "Coffee",
        itemSecondaryColor: "White",
        itemType: "Shoes",
        itemEvent: "Informal",
        itemSize: "9.5",
    } 
    const pants: WardrobeArticlesInterface = {
        itemID: 2,
        imageDataURL: "/pants.png",
        itemName: "Brown Cargo Pants",
        itemDescription: "Brown Cargo Pants",
        itemStyle: "Casual",
        itemColor: "Brown",
        itemSecondaryColor: "Tan",
        itemType: "Pants",
        itemEvent: "Informal",
        itemSize: "32x32",
    } 
    const pants2: WardrobeArticlesInterface = {
        itemID: 6,
        imageDataURL: "/pants.png",
        itemName: "Brown Cargo Pants",
        itemDescription: "Brown Cargo Pants",
        itemStyle: "Casual",
        itemColor: "Brown",
        itemSecondaryColor: "Tan",
        itemType: "Pants",
        itemEvent: "Informal",
        itemSize: "32x32",
    }
    const shirt: WardrobeArticlesInterface = {
        itemID: 3,
        imageDataURL: "/shirt.png",
        itemName: "Favorite White Tee",
        itemDescription: "White tee shirt i really love and adore. It fits me super well!",
        itemStyle: "Casual",
        itemColor: "White",
        itemSecondaryColor: "White",
        itemType: "T-Shirt",
        itemEvent: "Informal",
        itemSize: "Large",
    } 
    const shirt2: WardrobeArticlesInterface = {
        itemID: 5,
        imageDataURL: "/shirt.png",
        itemName: "Favorite White Tee",
        itemDescription: "White tee shirt i really love and adore. It fits me super well!",
        itemStyle: "Casual",
        itemColor: "White",
        itemSecondaryColor: "White",
        itemType: "T-Shirt",
        itemEvent: "Informal",
        itemSize: "Large",
    } 
    const jacket: WardrobeArticlesInterface = {
        itemID: 4,
        imageDataURL: "/jacket.png",
        itemName: "Brown Jacket",
        itemDescription: "Brown jacket with fuzzy neckline and cuffs, super warm and I adore it.",
        itemStyle: "Casual",
        itemColor: "Brown",
        itemSecondaryColor: "Cream",
        itemType: "Jacket",
        itemEvent: "Informal",
        itemSize: "Large",
    } 
    const shirt3: WardrobeArticlesInterface = {
        itemID: 7,
        imageDataURL: "/shirt.png",
        itemName: "Favorite White Tee",
        itemDescription: "White tee shirt i really love and adore. It fits me super well!",
        itemStyle: "Casual",
        itemColor: "White",
        itemSecondaryColor: "White",
        itemType: "T-Shirt",
        itemEvent: "Informal",
        itemSize: "Large",
    } 
    const jacket2: WardrobeArticlesInterface = {
        itemID: 8,
        imageDataURL: "/jacket.png",
        itemName: "Brown Jacket",
        itemDescription: "Brown jacket with fuzzy neckline and cuffs, super warm and I adore it.",
        itemStyle: "Casual",
        itemColor: "Brown",
        itemSecondaryColor: "Cream",
        itemType: "Jacket",
        itemEvent: "Informal",
        itemSize: "Large",
    } 
    while (iter > 0) {
        const newOutfit: OutfitInterface =
            (iter % 4 == 0)
                ? {
                    outfitID: iter,
                    outfitArticles: [jacket, shirt, pants,shirt2,pants2, jacket2, shirt3, shoes],
                    outfitName: "Fall Day Exploring",
                    outfitDescription: "Nice and warm, brown tones, good for a fall dayy! Wore it and loved it.",
                    outfitStyle: "Going Out",
                    outfitEvent: undefined,
                }
            : (iter % 4 == 1)
                ? {
                    outfitID: iter,
                    outfitArticles: [shirt, pants],
                    outfitName: "Day in lounging",
                    outfitDescription: "Just a lounging around the house outfit",
                    outfitStyle: "Lounging",
                    outfitEvent: undefined,
                }
            : (iter % 4 == 2)
                ? {
                    outfitID: iter,
                    outfitArticles: [shirt, pants, shoes],
                    outfitName: "Simple fit",
                    outfitDescription: "Simple outfit for a warm or hot day",
                    outfitStyle: "Casual",
                    outfitEvent: undefined,
                }
            : {
                    outfitID: iter,
                    outfitArticles: [pants],
                    outfitName: "Incomplete Outfit for School",
                    outfitDescription: "I need to build this outfit still, i was editing and had to do something else.",
                    outfitStyle: undefined,
                    outfitEvent: undefined,
                };
        iter = iter - 1;
        data.push(newOutfit);
    }
    return data;
}
