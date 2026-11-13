import { ClothingItem } from "@/types/wardrobe";
import { Card } from "../ui/card";
import Image from "next/image";
import { cn } from "cn";
import { useState } from "react";

interface WardrobeItemProp {
  item: ClothingItem;
  sizes: string;
  className?: string;
}

export default function WardrobeItem({
  item,
  sizes,
  className,
}: WardrobeItemProp) {
    const [imgSrc, setImgSrc] = useState(
      item.image ? item.image : "/NoImageFound.png"
    );
  return (
    <Card
      className={cn(
        "group gap-0 overflow-hidden rounded-xl border border-gray-200 bg-white p-0",
        className,
      )}
    >
      <div className="relative aspect-square">
        <Image
          src={ (item.image.length < 3) ? item.image  :'/NoImageFound.png' }
          alt={item.name}
          fill
          loading="eager"
          sizes="sizes"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          onError={() => {
            setImgSrc("/NoImageFound.png");
          }}
        />
      </div> 
    </Card>
  );
}
