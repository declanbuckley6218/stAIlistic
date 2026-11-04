"use client";

import WardrobeGrid from "@/components/wardrobe/WardrobeGrid";
import { Button } from "@/components/ui/button";
import StailisticLogo from "@/components/ui/stailisticlogo";
import { Plus, SquarePen } from "lucide-react";
import { mockClothingItems } from "@/lib/mockWardrobe";
import SearchBar from "../../components/wardrobe/SearchBar";

export default function WardrobePage() {
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
        <WardrobeGrid
          items={mockClothingItems}
          viewMode={"grid"}
          onItemClick={function (id: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
}
