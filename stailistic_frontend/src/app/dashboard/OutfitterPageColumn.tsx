'use client'
import { useState } from "react";
import { PageColumnHeader,  } from "./page";
import { PageColumnSearchBar } from "./PageColumnSearcher";
import QuickButton, { QuickButtonGroup } from "./QuickButton";

export default function OutfitterPageColumn(){
  const functionEG = (id: string) => {
    console.log(`Button ${id} clicked`);
  };
   const [currentSearch, setSearch] = useState("Search Outfits");
    const handleSearching = () => {
      setSearch(currentSearch ?? "Search Outfits");
    }
  return(
    <div className="flex bg-white flex-col flex-3  sm:w-10 md:w-20 w-30  border-stailistictext-gray overflow-hidden border rounded-lg">
        <PageColumnHeader>OUTFITTER</PageColumnHeader>

        <div className="flex flex-col h-40 border-b border-b-stailistictext-gray mb-5 md:mb-3 px-2 justify-around">
            <QuickButtonGroup>
                <QuickButton onClick={() => functionEG(" test ")}>Create An Outfit</QuickButton>
                <QuickButton onClick={() => functionEG(" test ")}>Assign Button</QuickButton>
                <QuickButton onClick={() => functionEG(" test ")}>Assign Button</QuickButton>
            </QuickButtonGroup>
            <div className="flex w-full flex-row">
                <PageColumnSearchBar 
                    value={currentSearch} 
                    onChange={setSearch} 
                    placeholder="Search Outfits..." >
                </PageColumnSearchBar>
                <QuickButton onClick={() => functionEG(" test ")}>Replace W Filter</QuickButton>
            </div>
        </div>
    </div>
  );
}