
import FilterPopover, {
    SelectedFilters,
} from "@/components/wardrobe/FilterPopover";
import { Search } from "lucide-react";
import React, { ComponentProps } from "react";

interface SearchBarProps
    extends Omit<ComponentProps<"input">, "value" | "onChange"> {
    value: string;
    onChange: (value: string) => void;
}

interface WardrobeSearchBarProps extends SearchBarProps {
    selectedFilters: SelectedFilters;
    onFiltersChange: (filters: SelectedFilters) => void;
}

export default function WardrobeSearchBar({
    value,
    onChange,
    selectedFilters,
    onFiltersChange,
    placeholder = "Search by name, brand, color...",
    ...props
}: WardrobeSearchBarProps) {
    return (
        <div className="flex w-full items-center gap-2">
            <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

                <input
                    {...props}
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    aria-label="Search wardrobe"
                    className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <FilterPopover
                selectedFilters={selectedFilters}
                onFiltersChange={onFiltersChange}
            />
        </div>
    );
}

export const CLOTHING_TYPES = [
  "Tops",
  "Bottoms",
  "Shoes",
  "Accessories",
] as const;


export const CLOTHING_CATEGORY_MAP: Record<string, string[]> = {
    Tops: [
        "T-Shirt",
        "Shirt",
        "Blouse",
        "Tank Top",
        "Polo",
        "Sweater",
        "Hoodie",
        "Jacket",
        "Coat",
        "Cardigan",
        "Sweatshirt",
    ],

    Bottoms: [
        "Pants",
        "Jeans",
        "Shorts",
        "Skirt",
        "Leggings",
        "Joggers",
    ],

    Shoes: [
        "Sneakers",
        "Boots",
        "Sandals",
        "Heels",
        "Flats",
        "Dress Shoes",
        "Loafers",
    ],

    Accessories: [
        "Hat",
        "Cap",
        "Belt",
        "Watch",
        "Jewelry",
        "Bag",
        "Sunglasses",
        "Scarf",
        "Tie",
    ],
};