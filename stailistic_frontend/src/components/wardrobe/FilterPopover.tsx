import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClothingItem } from "@/types/wardrobe";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Hard coded filter for now, probably makes sense to make it dynamic later on
type FilterKey = keyof Pick<
  ClothingItem,
  "color" | "size" | "brand" | "type" | "material"
>;
type FilterGroup = {
  key: FilterKey;
  label: string;
  options: string[];
};
const filterGroups: FilterGroup[] = [
  {
    key: "color",
    label: "Color",
    options: ["Red", "Blue", "Green", "Black", "White"],
  },
  {
    key: "size",
    label: "Size",
    options: ["XS", "S", "M", "L", "XL"],
  },
  {
    key: "brand",
    label: "Brand",
    options: ["Nike", "Adidas", "Puma", "Reebok"],
  },
  {
    key: "type",
    label: "Type",
    options: ["Top", "Bottom", "Shoes", "Accessories"],
  },
  {
    key: "material",
    label: "Material",
    options: ["Cotton", "Polyester", "Leather", "Denim"],
  },
];
export default function FilterPopover() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline" className="h-10 bg-white" />}
      >
        <SlidersHorizontal />
        <span className="hidden sm:inline">Filters</span>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Filters</h4>
            <p className="text-muted-foreground text-sm">
              Narrow down your wardrobe.
            </p>
          </div>
          <div className="max-h-96 space-y-4 overflow-y-auto">
            {filterGroups.map((group) => (
              <div key={group.key} className="space-y-2">
                <p className="">{group.label}</p>
                <div className="grid grid-cols-2 gap-2">
                  {group.options.map((option) => (
                    <Label key={option} className="font-normal">
                      <Checkbox />
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
