import ImageCard from "@/components/ImageCard";

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

export default function ArticleBox( {attributes} : {attributes: WardrobeArticlesInterface}){
    return(
        <div className="relative w-fill flex gap-4 border border-stailistictext-darkgray/15 justify-center bg-white h-fit py-4 px-2 h-min-30 border-t mx-1 my-1 overflow-hidden rounded-sm">
            <ImageCard src={attributes.imageDataURL}/>
            <div className="flex-1 grid grid-rows-3 gap-1 border border-stailistictext-darkgray rounded-lg px-1 bg-stailistic-blue-faint/20">
                <p className="text-stailistic-blue-muted font-bold flex justify-center">
                    {attributes.itemName}
                </p>
                <p className="text-stailistictext-gray flex justify-center ">
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
    );
}


