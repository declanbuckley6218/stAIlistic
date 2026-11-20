"use client";

import { useState } from "react";
import Image from "next/image";
import { Footprints, Shirt, Watch, type LucideIcon } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { ClothingItem } from "@/types/wardrobe";

interface WardrobeItemProp {
  item: ClothingItem;
  sizes: string;
  className?: string;
}

// Icon shown when an item has no photo, picked by category
const TYPE_ICONS: Record<string, LucideIcon> = {
  Tops: Shirt,
  Bottoms: Shirt,
  Shoes: Footprints,
  Accessories: Watch,
};

export default function WardrobeItem({
  item,
  sizes,
  className,
}: WardrobeItemProp) {
  const [failed, setFailed] = useState(false);
  const hasImage = !!item.image && !failed;
  const Icon = TYPE_ICONS[item.type] ?? Shirt;
  const details = [item.brand, item.type].filter(Boolean).join(" · ");

  return (
    <Card
      className={cn(
        "group gap-0 overflow-hidden rounded-xl border border-gray-200 bg-white p-0 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[4/5] bg-gray-50">
        {hasImage ? (
          <Image
            src={item.image!}
            alt={item.name}
            fill
            sizes={sizes}
            className="object-contain p-3 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <Icon className="size-10 text-gray-300" strokeWidth={1.5} />
            <span className="text-xs text-gray-400">No photo</span>
          </div>
        )}
      </div>

      <div className="space-y-0.5 border-t border-gray-100 p-3">
        <p className="truncate text-sm font-medium text-gray-900">
          {item.name}
        </p>
        {(details || item.color) && (
          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            {item.color && (
              <span
                className="size-2.5 shrink-0 rounded-full border border-black/10"
                style={{ backgroundColor: item.color }}
                title={item.color}
              />
            )}
            <span className="truncate">{details || item.color}</span>
          </p>
        )}
      </div>
    </Card>
  );
}
