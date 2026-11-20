"use client";

import { useState } from "react";
import Image from "next/image";
import { Footprints, Shirt, Watch, type LucideIcon } from "lucide-react";

interface ImageCardProps {
  src?: string;
  alt?: string;
  type?: string;
}

// Icon shown when an item has no photo, picked by category
const TYPE_ICONS: Record<string, LucideIcon> = {
  Tops: Shirt,
  Bottoms: Shirt,
  Shoes: Footprints,
  Accessories: Watch,
};

/** The photo, or the "No photo" placeholder if there's no src or it fails to load. */
function CardImage({ src, alt, type }: ImageCardProps) {
  const [failed, setFailed] = useState(false);
  const hasImage = !!src && !failed;
  const Icon = (type && TYPE_ICONS[type]) || Shirt;

  return hasImage ? (
    <Image
      src={src!}
      alt={alt ?? ""}
      fill
      sizes="256px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
      <Icon className="size-10 text-gray-300" strokeWidth={1.5} />
      <span className="text-xs text-gray-400">No photo</span>
    </div>
  );
}

export default function ImageCard(props: ImageCardProps) {
  return (
    <div className="relative my-auto h-16 w-16 overflow-hidden rounded-2xl border-4 border-white bg-gray-50 shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] select-none hover:scale-103 hover:cursor-pointer sm:h-24 sm:w-24 md:h-32 md:w-32">
      <CardImage key={props.src} {...props} />
    </div>
  );
}

export function SmallImageCard(props: ImageCardProps) {
  return (
    <div className="relative my-auto h-32 w-32 overflow-hidden rounded-2xl border-4 border-white bg-gray-50 shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] select-none hover:scale-103 sm:w-32 md:h-16 md:w-24 lg:h-24">
      <CardImage key={props.src} {...props} />
    </div>
  );
}
