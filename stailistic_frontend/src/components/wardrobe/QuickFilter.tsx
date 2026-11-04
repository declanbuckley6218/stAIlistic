"use client";
import { CLOTHING_TYPES } from "@/lib/mockWardrobe";
import { Button } from "../ui/button";

import { useState } from "react";

export default function QuickFilter() {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {["All", ...CLOTHING_TYPES].map((type) => (
        <Button
          key={type}
          className={
            selectedType === type
              ? "shrink-0 rounded-xl"
              : "shrink-0 rounded-xl bg-white"
          }
          variant={selectedType === type ? "default" : "outline"}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
