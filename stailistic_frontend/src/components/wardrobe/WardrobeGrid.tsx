import { ClothingItem } from "@/types/wardrobe";
import WardrobeItem from "./WardrobeItem";
import { URL } from "node:url";

interface WardrobeItemProp {
  items: ClothingItem[];
  viewMode: "grid" | "list";
  onItemClick: (id: string) => void;
}

export default function WardrobeGrid({
  items,
  viewMode,
  onItemClick,
}: WardrobeItemProp) {
  // List view
  if (viewMode === "list") {
    return (
      <ul className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onItemClick(item.id)}
              className="flex w-full items-center gap-4 px-3 py-2.5 text-left hover:bg-gray-50"
            >
              <WardrobeItem
                item={item}
                sizes="80px"
                className="size-20 shrink-0 rounded-lg"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-lg font-medium text-gray-900">
                  {item.name || "Untitled"}
                </p>
                <p className="truncate text-sm text-gray-500">{item.brand}</p>
              </div>
              <div className="hidden items-center gap-1.5 text-xs text-gray-600 sm:flex sm:w-28">
                {item.color && (
                  <span
                    className="size-3 shrink-0 rounded-full border border-black/10"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                <span className="truncate">{item.color}</span>
              </div>
              <span className="hidden w-24 text-xs text-gray-600 md:block">
                {item.type}
              </span>
              <span className="w-16 text-right text-xs text-gray-600">
                {item.size}
              </span>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  // Grid View (default)
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => (
        <WardrobeItem key={item.id} item={item} sizes={""} />
      ))}
    </div>
  );
}
