
import Image from 'next/image';

export default function ImageCard({ src }: { src?: string }) {
  return (
    <div className="select-none w-64 h-64 sm:w-32 md:w-48 md:h-32 lg:h-48 relative rounded-2xl overflow-hidden border-4 border-white  shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] hover:scale-103 my-auto">
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
export function SmallImageCard({ src }: { src?: string }) {
  return (
    <div className="select-none w-32 h-32 sm:w-32 md:w-24 md:h-16 lg:h-24 relative rounded-2xl overflow-hidden border-4 border-white  shadow-[0_0_15px_3px_rgba(0,0,0,0.1)] hover:scale-103 my-auto">
      <Image
        src={src ?? "/NoImageFound.png"}
        alt="No Image Found!"
        fill
        sizes="256px"
        className="object-cover"
      />
    </div>
  );
}