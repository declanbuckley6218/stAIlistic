import ImageCard, { SmallImageCard } from "@/components/ImageCard";
import { WardrobeArticlesInterface } from "./ArticleBox";

export interface OutfitInterface {
    outfitID: number,
    outfitArticles?: WardrobeArticlesInterface[], //at least should have 3, potench 4, one for shoes, shirt, pants, potench jacket
    outfitName?: string, //User Defined
    outfitDescription?: string, //User Defined
    outfitStyle?: string, //like athletic waer, sweat wear, 
    outfitEvent?: string, // Actual event of the outfit if any
}

export default function OutfitBox({fitInfo}: {fitInfo: OutfitInterface}){
    return(
        <div className="relative w-fill mx-1 grid gird-rows-4 border border-stailistictext-darkgray/25 justify-center bg-white h-fit py-4 px-2 my-2 rounded-sm overflow-hidden h-min-30">
            <div className="relative w-full flex  justify-center bg-white h-fit px-2 ">
                <p className="text-stailistic-blue-muted font-bold flex justify-center">
                    {fitInfo.outfitName ?? "Unnamed Outfit"}
                </p>
            </div>
            <OutfitPhotosBox urls={fitInfo.outfitArticles}/>
            <div className="relative w-full flex  justify-center bg-white h-fit px-2 ">
                <p className="text-stailistictext-gray flex justify-center">
                    {fitInfo.outfitDescription ?? "No description for this Outfit."}
                </p>
            </div>
             
            <div className="relative w-full">
                { (fitInfo.outfitEvent) ?
                    <div></div>:<></>
                }
                { (fitInfo.outfitDescription != undefined && fitInfo.outfitDescription != null) ?
                    <span className="text-stailistictext-gray flex justify-center">
                        <p className="font-bold">Outfit Style:</p>
                        {fitInfo.outfitStyle}
                    </span> :<></>
                }   
            </div> 
        </div>
    );
}


function OutfitPhotosBox({ urls }: { urls?: WardrobeArticlesInterface[] }) {
    if (!urls || urls.length === 0) return null;

    const cols =
        urls.length === 1 ? "grid-cols-1"
        : urls.length === 2 ? "grid-cols-2"
        : urls.length === 4 ? "grid-cols-2"   // 2x2
        : "grid-cols-3";                      // 3 -> 1 row, 5/6 -> 2 rows, 7+ keeps wrapping

    const Card = urls.length <= 2 ? ImageCard : SmallImageCard;

    return (
        <div className={`grid ${cols} gap-2 w-full max-w-sm mx-auto my-5`}>
            {urls.map(url => (
                <Card src={url.imageDataURL} key={url.itemID} />
            ))}
        </div>
    );
}
