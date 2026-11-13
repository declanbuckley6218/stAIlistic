
"use client";


import { Button } from "../ui/button";
import { SelectedFilters } from "@/components/wardrobe/FilterPopover";
import { CLOTHING_TYPES } from "./WardrobeSearchBar";

interface QuickFilterProps {
    selectedFilters: SelectedFilters;
    onFiltersChange: (filters: SelectedFilters) => void;
}

export default function QuickFilter({
    selectedFilters,
    onFiltersChange,
}: QuickFilterProps) {
    const selectedTypes = selectedFilters.type ?? [];

    const handleTypeChange = (type: string) => {
        if (type === "All") {
            onFiltersChange({
                ...selectedFilters,
                type: [],
            });
            return;
        }

        const isSelected = selectedTypes.includes(type);

        const updatedTypes = isSelected
            ? selectedTypes.filter((item) => item !== type)
            : [...selectedTypes, type];

        onFiltersChange({
            ...selectedFilters,
            type: updatedTypes,
        });
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-1">
            <Button
                variant={selectedTypes.length === 0 ? "default" : "outline"}
                className="shrink-0 rounded-xl"
                onClick={() => handleTypeChange("All")}
            >
                All
            </Button>

            {CLOTHING_TYPES.map((type) => (
                <Button
                    key={type}
                    variant={
                        selectedTypes.includes(type) ? "default" : "outline"
                    }
                    className="shrink-0 rounded-xl"
                    onClick={() => handleTypeChange(type)}
                >
                    {type}
                </Button>
            ))}
        </div>
    );
}
