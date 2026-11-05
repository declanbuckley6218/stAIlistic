'use client'
import { useState } from "react";
import { PageColumnHeader } from "../page";
import { PageColumnSearchBar } from "./PageColumnSearcher";
import QuickButton, { QuickButtonGroup } from "./QuickButton";
import ArticleBox from "./ArticleBox";
import ScrollableBox from "./ScrollColumn";
import  { getWardrobeArticlesDummy } from "./getWardrobeArticles";
  const wardrobeItems = await getWardrobeArticlesDummy();

export default function WardrobePageColumn(){
  const functionEG = (id: string) => {
    console.log(`Button ${id} clicked`);
  };
  const [currentSearch, setSearch] = useState("Search Wardrobe");
  const handleSearching = () => {
    setSearch(currentSearch ?? "Search Wardrobe");
  }

  return(
    <div className="flex flex-col flex-3 bg-white sm:w-10 md:w-20 w-30 border-stailistictext-gray  border rounded-lg shadow-xl focus-within:shadow-blue-200 overflow-hidden">
      <PageColumnHeader>WARDROBE</PageColumnHeader>
      <div className="flex flex-col h-40 border-b border-b-stailistictext-gray mb-5 md:mb-3 px-2 justify-around">
        <QuickButtonGroup>
          <QuickButton onClick={() => functionEG("a")}>Add To Wardrobe</QuickButton>
          <QuickButton onClick={() => functionEG("b")}>Edit Current Articles</QuickButton>
          <QuickButton onClick={() => functionEG("c")}>Assign Button</QuickButton>
        </QuickButtonGroup>
        <div className="flex w-full flex-row">
            <PageColumnSearchBar 
            value={currentSearch} 
            onChange={setSearch} 
            placeholder="Search Wardrobe..." >
            </PageColumnSearchBar>
            <QuickButton onClick={() => functionEG(" test ")}>Replace W Filter</QuickButton>
        </div>
      </div>
      <ScrollableBox>
        {wardrobeItems?.map(item => (
          <ArticleBox attributes={item} key={item.itemID} />
        ))}
      </ScrollableBox>
    </div>
  );
}