"use client";

import { useState } from "react";
import { ClothingItem } from "@/types/wardrobe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateItem } from "@/app/actions/wardrobeActions";
import { CLOTHING_CATEGORY_MAP } from "@/components/wardrobe/WardrobeSearchBar";

const categories = Object.values(CLOTHING_CATEGORY_MAP).flat();

interface EditItemDialogProp {
  item: ClothingItem;
  onClose: () => void;
  onSaved: (item: ClothingItem) => void;
}

export default function EditItemDialog({
  item,
  onClose,
  onSaved,
}: EditItemDialogProp) {
  // Pre-fill the form with the item's current values, or empty strings if they are undefined
  const [name, setName] = useState(item.name ?? "");
  const [type, setType] = useState(item.type ?? "");
  const [color, setColor] = useState(item.color ?? "");
  const [tags, setTags] = useState((item.tags ?? []).join(", "));

  const [image, setImage] = useState<string>();
  const [error, setError] = useState("");

  const typeOptions =
    item.type && !categories.includes(item.type)
      ? [item.type, ...categories]
      : categories;

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const updates = {
      name,
      type,
      color,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      ...(image && { image }),
    };
    try {
      const ok = await updateItem(item.id, 1, updates);
      if (!ok) return setError("Couldn't save changes.");
      onSaved({ ...item, ...updates });
      onClose();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="text-xl font-semibold">Edit item</h2>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return setImage(undefined);

            // base 64 reader, since we are storing it as base64
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
          }}
        />
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="border-input h-8 rounded-lg border px-2 text-sm"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Category</option>
          {typeOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <Input
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="mt-2 flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
