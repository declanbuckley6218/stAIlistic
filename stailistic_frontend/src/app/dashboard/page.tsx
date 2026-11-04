import Image from "next/image";
import Link from "next/link";
import StailisticLogo from "@/components/ui/stailisticlogo";
import { ButtonHTMLAttributes } from "react";
import WardrobePageColumn from "./WardrobePageColumn";
import EventPageColumn from "./EventPageColumn";
import OutfitterPageColumn from "./OutfitterPageColumn";
export default function DashboardHome() {
  return (
    <div className="flex flex-row items-stretch font-sans  dark:bg-stailistictext-darkgray bg-gray-100 h-dvh w-full select-none">
      <header className="flex flex-col  md:w-74 sm:w-64 h-full shrink-0 bg-stailistic-blue-faint border-r border-r-gray-300 dark:bg-stailistictext-darkgray">
        <div className="flex justify-center p-4 border-b border-stailistictext-darkgray/30 bg-stailistictext-blue/10">
          <StailisticLogo isButton={true}/>
        </div>

        <NavButton
          pageTitle="warbrobe"
          buttonText="Wardrobe"
          smallerText="View, Edit and Add to your Wardrobe"
        />
        <NavButton
          pageTitle="outfitter"
          buttonText="Outfitter"
          smallerText="View, Edit and Create your Outfits"
        />
        <NavButton
          pageTitle="events"
          buttonText="Events"
          smallerText="View, Edit and Create Upcoming Events"
        />
      </header>

      <main className="relative flex-1 min-w-0 m-8  overflow-hidden ">
        <div className="flex flex-row justify-between gap-10  h-full w-full  px-5">
          <WardrobePageColumn/>
          <OutfitterPageColumn/>
          <EventPageColumn/>
        </div>
      </main>
    </div>
  );
}



interface NavButtonProp {
 pageTitle: string,
 buttonText: string,
 smallerText: string
};
function NavButton (props: NavButtonProp){
  return (
      <Link href={'/'+props.pageTitle} className="h-fit w-fill px-1 mx-3 p-2 border-b bg-white/30 border-stailistictext-gray/30 hover:bg-stailistictext-gray/10 hover:shadow-lg hover:ease-in-out hover:scale-105">
        <p className="text-stailistictext-blue/80 px-5 font-bold flex justify-center text-2xl xs:text-xl">
          {props.buttonText}
        </p>
        <p className="text-stailistictext-gray/80 font-bold flex justify-center text-sm xs:hidden text-center">
          {props.smallerText}
        </p>
      </Link>
  );
}

export function PageColumnHeader({children}:any){
  return(
    <div className="flex justify-center p-2 border-b bg-stailistic-blue-faint border-stailistictext-darkgray/30 ">
      <p className="stailistic-st font-stretch-90%">{children}</p>
    </div>
  )
}
