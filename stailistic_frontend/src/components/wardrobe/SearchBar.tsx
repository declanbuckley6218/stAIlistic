import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FilterPopover from "./FilterPopover";

//
export default function SearchBar() {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search by name, brand, color"
          className="h-10 bg-white pl-9 text-black"
        />
      </div>
      <FilterPopover />
    </div>
  );
}
