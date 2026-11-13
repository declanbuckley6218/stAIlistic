"use client";

import { useState } from "react";
import { ClothingItem } from "@/types/wardrobe";
import { addClothingItem } from "@/services/wardrobeService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = ["Top", "Bottom", "Shoes", "Outerwear", "Accessory"];

interface UploadDialogProp {
  onClose: () => void;
  onAdded: (item: ClothingItem) => void;
}

export default function UploadDialog({ onClose, onAdded }: UploadDialogProp) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      onAdded(await addClothingItem({ image, name, type, color }));
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
        <h2 className="text-xl font-semibold">Add clothing item</h2>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setImage(file ? URL.createObjectURL(file) : "");
          }}
        />
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="h-8 rounded-lg border border-input px-2 text-sm"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Category</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <Input
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="mt-2 flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}
