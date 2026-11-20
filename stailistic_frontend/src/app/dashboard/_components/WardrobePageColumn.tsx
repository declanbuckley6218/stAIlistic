"use client";
import { useEffect, useMemo, useState } from "react";
import { PageColumnHeader } from "../page";
import { PageColumnSearchBar } from "./PageColumnSearcher";
import QuickButton, { QuickButtonGroup } from "./QuickButton";
import ArticleBox from "./ArticleBox";
import ScrollableBox from "./ScrollColumn";
import { ClothingItem } from "@/types/wardrobe";
import { loadWardrobe } from "@/app/actions/wardrobeActions";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import UploadDialog from "@/components/wardrobe/UploadDialog";
import EditItemDialog from "@/components/wardrobe/EditItemDialog";

export default function WardrobePageColumn() {
  const [wardrobeItems, setItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const functionEG = (id: string) => {
    console.log(`Button ${id} clicked`);
  };
  const [currentSearch, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const searchTerms = currentSearch
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (searchTerms.length === 0) {
      return wardrobeItems;
    }

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
        .filter((value) => value !== null && value !== undefined)
        .join(" ")
        .toLowerCase();

      return searchTerms.every((term) => searchableText.includes(term));
    });
  }, [wardrobeItems, currentSearch]);

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
  const [showUpload, setShowUpload] = useState(false);
  const [editingItem, setEditingItem] = useState<ClothingItem | null>(null);
  function photoEditPress(item: ClothingItem) {
    setEditingItem(item);
  }
  if (loading) return <p>Loading wardrobe...</p>;

  return (
    <div className="border-stailistictext-gray flex w-30 flex-3 flex-col overflow-hidden rounded-lg border bg-white shadow-xl focus-within:shadow-blue-200 sm:w-10 md:w-20">
      <PageColumnHeader>WARDROBE</PageColumnHeader>
      <div className="border-b-stailistictext-gray mb-5 flex h-40 flex-col justify-around border-b px-2 md:mb-3">
        <QuickButtonGroup>
          <QuickButton className="right-5" onClick={() => setShowUpload(true)}>
            <Plus />
            <span className="hidden sm:inline">Upload</span>
          </QuickButton>
          {/* <QuickButton onClick={() => functionEG("b")}>Edit Current Articles</QuickButton> */}
          {/* <QuickButton onClick={() => functionEG("c")}>Assign Button</QuickButton> */}
        </QuickButtonGroup>
        <div className="flex w-full flex-row">
          <PageColumnSearchBar
            value={currentSearch}
            onChange={setSearch}
            placeholder="Search Wardrobe..."
          ></PageColumnSearchBar>
          <QuickButton onClick={() => functionEG(" test ")}>
            Replace W Filter
          </QuickButton>
        </div>
        <p className="px-3 text-xs text-gray-400">
          Showing {filteredItems.length} of {wardrobeItems.length} items
        </p>
      </div>

      <ScrollableBox>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id}>
              {/* onClick={()=>(  setEditingItem(item))}> */}
              <ArticleBox attributes={item} editItem={photoEditPress} />
            </div>
          ))
        ) : (
          <p className="px-4 py-8 text-center text-gray-400">
            {currentSearch.trim()
              ? `No clothing items found for "${currentSearch}".`
              : "Your wardrobe is empty."}
          </p>
        )}
      </ScrollableBox>
      {showUpload && (
        <UploadDialog
          onClose={() => setShowUpload(false)}
          onAdded={(item) => setItems((prev) => [item, ...prev])}
        />
      )}
      {editingItem && (
        <EditItemDialog
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onSaved={(updated) =>
            setItems((prev) =>
              prev.map((i) => (i.id === updated.id ? updated : i)),
            )
          }
          onDeleted={(deletedId) =>
            setItems((prev) => prev.filter((i) => i.id !== deletedId))
          }
        />
      )}
    </div>
  );
}
