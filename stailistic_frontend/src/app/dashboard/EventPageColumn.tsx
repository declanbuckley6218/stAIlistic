'use client'

import { useSearchParams } from "next/navigation";
import { PageColumnHeader,  } from "./page";
import QuickButton, { QuickButtonGroup } from "./QuickButton";
import { useState } from "react";
import { PageColumnSearchBar } from "./PageColumnSearcher";

export default function EventPageColumn(){
  const functionEG = (id: string) => {
    console.log(`Button ${id} clicked`);
  };
  const [currentSearch, setSearch] = useState("Search Events");
  const handleSearching = () => {
    setSearch(currentSearch ?? "Search Events");
  }
  return(
    <div className="flex flex-col bg-white flex-3 sm:w-10 md:w-20 w-30 border-stailistictext-gray overflow-hidden border rounded-lg box-shadow-lg">
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
    </div>
  );
}
