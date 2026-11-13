"use client";

import WardrobeGrid from "@/components/wardrobe/WardrobeGrid";
import { Button } from "@/components/ui/button";
import StailisticLogo from "@/components/ui/stailisticlogo";
import { LayoutGrid, List, Plus, SquarePen } from "lucide-react";
import WardrobeSearchBar, { CLOTHING_CATEGORY_MAP } from "../../components/wardrobe/WardrobeSearchBar";
import QuickFilter from "@/components/wardrobe/QuickFilter";
import { useEffect, useMemo, useState } from "react";
import { ClothingItem } from "@/types/wardrobe";
import { loadWardrobe } from "../actions/wardrobeActions";
import { SelectedFilters } from "@/components/wardrobe/FilterPopover";

export default function WardrobePage() {
  const [wardrobeItems, setItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [currentSearch, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>({});
  const filteredItems = useMemo(() => {
    const terms = currentSearch
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    return wardrobeItems.filter((item) => {
        const searchableText = [
            item.id,
            item.name,
            item.brand,
            item.color,
            item.type,
            item.material,
            item.size,
            ...(item.tags ?? []),
        ]
            .filter((value) => value != null)
            .join(" ")
            .toLowerCase();

        const matchesSearch = terms.every((term) =>
            searchableText.includes(term)
        );

        const matchesFilters = Object.entries(selectedFilters).every(
          ([groupKey, selectedOptions]) => {
            if (selectedOptions.length === 0) 
              return true;

              const itemValue = (
                item as unknown as Record<string, unknown>
              )[groupKey];

              const itemValues = Array.isArray(itemValue)
                ? itemValue.map(String)
                : itemValue != null
                  ? [String(itemValue)]
                  : [];
              if (groupKey === "type") {
                return selectedOptions.some((category) => {
                  const categoryTypes =
                    CLOTHING_CATEGORY_MAP[category] ?? [category];

                return categoryTypes.some((type) =>
                  itemValues.some(
                    (value) =>
                      value.toLowerCase() === type.toLowerCase()
                  )
                );
            });}

            return selectedOptions.some((option) =>
              itemValues.some(
                (value) =>
                  value.toLowerCase() === option.toLowerCase()
              )
            );
          }
        );

        return matchesSearch && matchesFilters;
    });
}, [wardrobeItems, currentSearch, selectedFilters]);  

  useEffect(() => {
    async function fetchWardrobe() {
      try {
        const wardrobe = await loadWardrobe(1);
        setItems(wardrobe);
      } catch (error) {
        console.error("Failed to load wardrobe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWardrobe();
  }, []);
  if (loading) 
    return <p>Loading wardrobe...</p>;
  
  
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
        <WardrobeSearchBar
          value={currentSearch}
          onChange={setSearch}
          placeholder="Search by name, brand, color..."
          selectedFilters={selectedFilters}
          onFiltersChange={setSelectedFilters}
        />
        <div className="mt-4 flex items-center justify-between">
          <QuickFilter
            selectedFilters={selectedFilters}
            onFiltersChange={setSelectedFilters}
          />
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
          items={filteredItems.length > 0 ? ( filteredItems ) : ( undefined)}
          currentSearch={currentSearch}
          viewMode={viewMode}
          onItemClick={(id) => console.log("Clicked item with id:", id)}
        />
      </div>
    </div>
  );
}
