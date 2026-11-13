
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { filterGroups } from "@/lib/mockWardrobe";

export type SelectedFilters = Record<string, string[]>;

interface FilterPopoverProps {
    selectedFilters: SelectedFilters;
    onFiltersChange: (filters: SelectedFilters) => void;
}

export default function FilterPopover({
    selectedFilters,
    onFiltersChange,
}: FilterPopoverProps) {

    const handleFilterChange = (
        groupKey: string,
        option: string,
        checked: boolean
    ) => {
        const currentOptions = selectedFilters[groupKey] ?? [];

        const updatedOptions = checked
            ? [...currentOptions, option]
            : currentOptions.filter((item) => item !== option);

        onFiltersChange({
            ...selectedFilters,
            [groupKey]: updatedOptions,
        });
    };

    const clearFilters = () => {
        onFiltersChange({});
    };

    const activeFilterCount = Object.values(selectedFilters)
        .reduce((total, options) => total + options.length, 0);

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button variant="outline" className="h-10 bg-white" />
                }
            >
                <SlidersHorizontal className="size-4" />
                <span className="hidden sm:inline">Filters</span>

                {activeFilterCount > 0 && (
                    <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">
                        {activeFilterCount}
                    </span>
                )}
            </PopoverTrigger>

            <PopoverContent className="w-80" align="end">
                <div className="grid gap-4">
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">
                                Filters
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Narrow down your wardrobe.
                            </p>
                        </div>

                        {activeFilterCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearFilters}
                                className="h-auto px-2 py-1 text-xs"
                            >
                                Clear all
                            </Button>
                        )}
                    </div>

                    <div className="max-h-96 space-y-4 overflow-y-auto">
                        {filterGroups.map((group) => (
                            <div key={group.key} className="space-y-2">
                                <p className="text-sm font-medium">
                                    {group.label}
                                </p>

                                <div className="grid grid-cols-2 gap-2">
                                    {group.options.map((option) => (
                                        <Label
                                            key={option}
                                            className="flex cursor-pointer items-center gap-2 font-normal"
                                        >
                                            <Checkbox
                                                checked={
                                                    selectedFilters[group.key]
                                                        ?.includes(option) ?? false
                                                }
                                                onCheckedChange={(checked) =>
                                                    handleFilterChange(
                                                        group.key,
                                                        option,
                                                        checked === true
                                                    )
                                                }
                                            />
                                            {option}
                                        </Label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
