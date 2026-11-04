"use client";

import WardrobeGrid from "@/components/wardrobe/WardrobeGrid";
import { Button } from "@/components/ui/button";
import StailisticLogo from "@/components/ui/stailisticlogo";
import { LayoutGrid, List, Plus, SquarePen } from "lucide-react";
import { mockClothingItems } from "@/lib/mockWardrobe";
import SearchBar from "../../components/wardrobe/SearchBar";
import QuickFilter from "@/components/wardrobe/QuickFilter";
import { useState } from "react";

export default function WardrobePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between px-8 py-3">
        <StailisticLogo isButton={true} />
        <div className="flex gap-3"></div>
        <div className="flex gap-3">
          <Button variant="outline" size="lg">
            <SquarePen />
            <span className="hidden sm:inline">Edit</span>
          </Button>
          <Button size="lg">
            <Plus />
            <span className="hidden sm:inline">Upload</span>
          </Button>
        </div>
      </header>

      <div className="mx-auto py-2 sm:px-6 lg:px-8">
        <SearchBar />
        <div className="mt-4 flex items-center justify-between">
          <QuickFilter />
          <div className="flex shrink-0 rounded-lg border bg-white p-0.5">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="size-8"
              aria-label="Grid view"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="size-8"
              aria-label="List view"
              onClick={() => setViewMode("list")}
            >
              <List />
            </Button>
          </div>
        </div>
        <WardrobeGrid
          items={mockClothingItems}
          viewMode={viewMode}
          onItemClick={(id) => console.log("Clicked item with id:", id)}
        />
      </div>
    </div>
  );
}
