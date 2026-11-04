'use client'

import { useSearchParams } from "next/navigation";
import { PageColumnHeader,  } from "../page";
import { useState } from "react";
import { PageColumnSearchBar } from "./PageColumnSearcher";
import QuickButton, { QuickButtonGroup } from "./QuickButton";
import { getEventsDummy, getRepeatingEventsDummy } from "./getEvents";
import OutfitBox from "./OutfitBox";
import ScrollableBox from "./ScrollColumn";
import EventBox, {RepeatEventBox} from "./EventBox";


const events = await getEventsDummy();
const repeatEvents = await getRepeatingEventsDummy();
export default function EventPageColumn(){
  const functionEG = (id: string) => {
    console.log(`Button ${id} clicked`);
  };
  const [currentSearch, setSearch] = useState("Search Events");
  const handleSearching = () => {
    setSearch(currentSearch ?? "Search Events");
  }
  return(
    <div className="flex flex-col flex-3 bg-white sm:w-10 md:w-20 w-30 border-stailistictext-gray  border rounded-lg shadow-xl focus-within:shadow-blue-200 overflow-hidden">
      <PageColumnHeader>EVENTS</PageColumnHeader>
      <div className="flex flex-col h-40 border-b border-b-stailistictext-gray mb-5 md:mb-3 px-2 justify-around">
        <QuickButtonGroup>
            <QuickButton onClick={() => functionEG(" test ")}>Schedule An Event</QuickButton>
            <QuickButton onClick={() => functionEG(" test ")}>Edit Current Events</QuickButton>
            <QuickButton onClick={() => functionEG(" test ")}>Assign Button</QuickButton>
        </QuickButtonGroup>
        <div className="flex w-full flex-row">
            <PageColumnSearchBar 
              value={currentSearch} 
              onChange={setSearch} 
              placeholder="Search Events..." >
            </PageColumnSearchBar>
            <QuickButton onClick={() => functionEG(" test ")}>Replace W Filter</QuickButton>
            
        </div>
      </div>
      <ScrollableBox>
              {events?.map(e => {
                return(<EventBox eventInfo={e} key={e.eventID} />);
              }
                
              )}
              {repeatEvents?.map(e => {
                return(<RepeatEventBox repEventInfo={e} key={e.repeatEventID} />);
              }
                
              )}
            </ScrollableBox>
    </div>
  );
}
