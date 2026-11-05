import ImageCard from "@/components/ImageCard";
import { WardrobeArticlesInterface } from "@/types/wardrobe";



export default function ArticleBox( {attributes} : {attributes: WardrobeArticlesInterface}){
    return(
        <div className="relative w-fill flex flex-col gap-4 border border-stailistictext-darkgray/15 justify-center bg-white h-fit py-4 px-2 h-min-30 border-t mx-1 my-1 overflow-hidden rounded-sm">
            <div className="relative w-full flex  justify-center bg-white h-fit px-2 ">
                <p className="text-stailistic-blue-muted font-bold flex justify-center">
                    {attributes.itemName}
                </p>
            </div>
            <div className="grid grid-cols-2 justify-center gap-2 border border-stailistictext-darkgray/10 rounded-lg px-1 bg-stailistic-blue-faint/20">
                <div className="w-fit h-fit mx-auto my-auto">
                    <ImageCard src={attributes.imageDataURL}/>
                </div>
                <div className="w-fit h-fit justify-around mx-auto md:block hidden">
                    <p className="text-stailistictext-gray flex justify-center my-2">
                    {attributes.itemDescription}
                    </p>
                    <ol>
                        {(attributes.itemEvent != undefined && attributes.itemEvent != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Event:</p> {attributes.itemEvent}</span> </li> : <></> }
                        {(attributes.itemType != undefined && attributes.itemType != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Type:</p> {attributes.itemType}</span> </li> : <></> }
                        {(attributes.itemStyle != undefined && attributes.itemStyle != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Style:</p> {attributes.itemStyle}</span> </li> : <></> } 
                    </ol>
                    <ol>
                        {(attributes.itemColor != undefined && attributes.itemColor != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Color:</p> {attributes.itemColor}</span> </li> : <></> }
                        {(attributes.itemSecondaryColor != undefined && attributes.itemSecondaryColor != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">- Secondary:</p> {attributes.itemSecondaryColor} </span> </li> : <></> }
                        {(attributes.itemSize != undefined && attributes.itemSize != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Size:</p> {attributes.itemSize}</span> </li> : <></> }
                    </ol>
                </div>
                
                
            </div>
            
        </div>
    );
}


