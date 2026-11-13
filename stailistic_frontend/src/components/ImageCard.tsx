
import Image from 'next/image';
import { useState } from 'react';

export default function ImageCard({ src}: { src?: string }) {
  const [imgSrc, setImgSrc] = useState(
    src ? src : "/NoImageFound.png"
  );
  return (
    <div className="select-none w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32  relative rounded-2xl overflow-hidden border-4 border-white  shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] hover:scale-103 my-auto">
      <Image
        src={imgSrc}
        alt="No Image Found!"
        fill
        sizes="256px"
        loading="eager"
        className="object-cover"
        onError={() => {
          setImgSrc("/NoImageFound.png");
        }}
      />
    </div>
  );
}
export function SmallImageCard({ src = '' }: { src?: string }) {
  const [imgSrc, setImgSrc] = useState(
    src ? src : "/NoImageFound.png"
  );
  return (
    <div className="select-none w-32 h-32 sm:w-32 md:w-24 md:h-16 lg:h-24 relative rounded-2xl overflow-hidden border-4 border-white  shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] hover:scale-103 my-auto">
      <Image
        src={imgSrc}
        alt="No Image Found!"
        fill
        sizes="256px"
        className="object-cover"
        onError={() => {
          setImgSrc("/NoImageFound.png");
        }}
      />
    </div>
  );
}