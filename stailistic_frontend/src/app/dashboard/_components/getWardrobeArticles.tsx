import { WardrobeArticlesInterface } from "./ArticleBox";
export default async function getWardrobeArticles(): Promise<WardrobeArticlesInterface[]>{
    
        // const res = await fetch('need database call here');
        // const data = await res.json();
        return []; 
}

export async function getWardrobeArticlesDummy(): Promise<WardrobeArticlesInterface[]>{
    let iter = 25;
    const data: WardrobeArticlesInterface[] = [];
    while(iter > 0){
         const newArticle: WardrobeArticlesInterface =
            (iter % 4 == 0) ?
                {
                    itemID: iter,
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
            : (iter % 4 == 1) ?
                {
                    itemID: iter,
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
            : (iter % 4 == 2) ?
                {
                    itemID: iter,
                    imageDataURL: "/shirt.png",
                    itemName: "Favorite White Tee",
                    itemDescription: "White tee shirt i really love and adore. It fits me super well!",
                    itemStyle: "Casual",
                    itemColor: "White",
                    itemSecondaryColor: undefined,
                    itemType: "T-Shirt",
                    itemEvent: "Informal",
                    itemSize: "Large",
                } 
            :   
                {
                    itemID: iter,
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
        
        data.push(newArticle);
        iter = iter-1;
    }
    return data;
}
