import ImageCard from "@/components/ImageCard";
import { ClothingItem } from "@/types/wardrobe";



export default function ArticleBox( {attributes} : {attributes: ClothingItem}){
    return(
        <div className="relative w-fill flex flex-col gap-4 border border-stailistictext-darkgray/15 justify-center bg-white h-fit py-4 px-2 h-min-30 border-t mx-1 my-1 overflow-hidden rounded-sm">
            <div className="relative w-full flex  justify-center bg-white h-fit px-2 ">
                <p className="text-stailistic-blue-muted font-bold flex justify-center">
                    {attributes.name}
                </p>
            </div>
            <div className="grid grid-cols-2 justify-center gap-2 border border-stailistictext-darkgray/10 rounded-lg px-1 bg-stailistic-blue-faint/20">
                <div className="w-fit h-fit mx-auto my-auto">
                    <ImageCard src={attributes.image}/>
                </div>
                <div className="w-fit h-fit justify-around mx-auto my-2">
                    <div className="flex flex-wrap gap-2">
                        {attributes.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[#eaf1f8] px-3 py-1
                                           text-xs font-medium text-[#527da8]
                                           border border-[#d8e4f0]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <ol>
                        {(attributes.brand != undefined && attributes.brand != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Brand:</p> {attributes.brand}</span> </li> : <></> }
                        {(attributes.type != undefined && attributes.type != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Type:</p> {attributes.type}</span> </li> : <></> }
                        {(attributes.material != undefined && attributes.material != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Material:</p> {attributes.material}</span> </li> : <></> } 
                    </ol>
                    <ol>
                        {(attributes.color != undefined && attributes.color != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">Color:</p> {attributes.color}</span> </li> : <></> }
                        {(attributes.size != undefined && attributes.size != null) ? <li> <span className="text-stailistictext-gray justify-left flex-row flex"><p className="font-bold">- Size:</p> {attributes.size} </span> </li> : <></> }
                    </ol>
                </div>
                
                
            </div>
            
        </div>
    );
}


