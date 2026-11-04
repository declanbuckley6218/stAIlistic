"use client";

import WardrobeGrid from "@/components/wardrobe/WardrobeGrid";
import { ClothingItem } from "@/types/wardrobe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StailisticLogo from "@/components/ui/stailisticlogo";
import { Plus, Search, SlidersHorizontal, SquarePen } from "lucide-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

// Mock clothing data, needs to be turned into a api call.
const mockClothingItems: ClothingItem[] = [
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "1",
    type: "Top",
    size: "M",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "2",
    type: "",
    size: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "3",
    type: "",
    size: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "4",
    type: "",
    size: "",
  },
  {
    name: "T-Shirt",
    brand: "Nike",
    color: "Red",
    image: "/NikeShirt.webp",
    tags: [],
    id: "5",
    type: "",
    size: "",
  },
];
export default function WardrobePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-20 flex justify-center border-b bg-white p-4">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <div className="mr-auto">
            <StailisticLogo isButton={true} />
          </div>
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

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search by name, brand, color"
              className="h-10 bg-white pl-9 text-black"
            />
          </div>
          <Popover>
            <PopoverTrigger
              render={<Button variant="outline" className="h-10 bg-white" />}
            >
              <SlidersHorizontal />
              <span className="hidden sm:inline">Filters</span>
            </PopoverTrigger>
          </Popover>
        </div>
        <div className="mt-6">
          <WardrobeGrid
            items={mockClothingItems}
            viewMode={"grid"}
            onItemClick={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
}
