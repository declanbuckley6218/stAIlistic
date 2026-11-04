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
// {   imageDataURL = "/NoImageFound.png", 
//         itemName = "Unnamed Article", 
//         itemDescription = "No article description has been provided!", 
//         itemStyle,
//         itemColor,
//         itemSecondaryColor,
//         itemType,
//         itemEvent,
//         itemSize }:WardrobeArticlesInterface)
//     {
export default function ArticleBox( {attributes} : {attributes: WardrobeArticlesInterface}){
    console.log("Wardrobe Item in box: " + attributes.itemID + "\n");

    return(
        <div className="relative w-full flex gap-4 border-b border-stailistictext-darkgray justify-center bg-white h-fit py-4 px-2 h-min-30">
            <ImageCard src={attributes.imageDataURL}/>
            <div className="flex-1 grid grid-rows-3 gap-1 border border-stailistictext-darkgray rounded-lg px-1 bg-stailistic-blue-faint/20">
                <p className="text-stailistic-blue-muted font-bold flex justify-center">
                    {attributes.itemName}
                </p>
                <p className="text-stailistictext-gray flex justify-center ">
                    {attributes.itemDescription}
                </p>
                    <ol>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Event:</p> {attributes.itemEvent}</p> </li>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Type:</p> {attributes.itemType}</p> </li>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Style:</p> {attributes.itemStyle}</p> </li>
                    </ol>
                    <ol>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Color:</p> {attributes.itemColor}</p> </li>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">- Secondary:</p> {attributes.itemSecondaryColor} </p> </li>
                        <li> <p className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Size:</p> {attributes.itemSize}</p> </li>
                    </ol>
                
            </div>
            
        </div>
    );
}

import Image from 'next/image';

export function ImageCard({ src }: { src?: string }) {
  return (
    <div className="select-none w-64 h-64 sm:w-32 md:w-48 md:h-32 lg:h-48 relative rounded-2xl overflow-hidden border-4 border-white shadow-xl hover:scale-103 my-auto">
      <Image
        src={src ?? "/NoImageFound.png"}
        alt="No Image Found!"
        fill
        sizes="256px"
        className="object-cover" 
        unoptimized 
      />
    </div>
  );
}

function NoImageFound(){
    return(
        <div className="lg:w-64 lg:h-64 sm:w-16 md:w-32 sm:h-16 md:h-32 relative rounded-2xl overflow-hidden border-2 border-stailistic-blue-muted/20 shadow-lg hover:scale-103">
          <Image
            src="/NoImageFound.png"
            alt="No Image Found!"
            fill
            sizes="256px"
            className="object-cover"
            />
        </div>
    );
}