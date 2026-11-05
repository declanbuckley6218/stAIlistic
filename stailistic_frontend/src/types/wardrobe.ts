export interface ClothingItem {
  name: string;
  id: string;
  brand: string;
  color?: string;
  type: string;
  material: string;
  size: string;
  image: string;
  tags: string[];
}

export interface WardrobeArticlesInterface {
    itemID: number,
    imageDataURL?: string,
    itemName?: string, //User Defined
    itemDescription?: string, //User Defined
    itemStyle?: string, //like athletic waer, sweat wear, 
    itemColor?: string,
    itemSecondaryColor?: string,
    itemType?: string, // shirts, shorts, shoes
    itemEvent?: string, // formal, casual
    itemSize?: string, // small- medium-large 30X32...
}