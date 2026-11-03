"use client";

import { useState } from "react";
import Link from "next/link";
import StailisticLogo from "@/components/ui/stailisticlogo";

const occasions = [
  "Casual",
  "Meeting",
  "Professional",
  "Summer",
  "Interview",
  "Party",
];
const styles = ["Minimal", "Fancy", "Streetwear", "Formal", "Smart Casual"];

const select =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 outline-none focus:border-stailistictext-blue";

export default function Outfitter() {
  const [occasion, setOccasion] = useState("Casual");
  const [style, setStyle] = useState("Minimal");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="flex items-center justify-between px-8 py-5">
        <StailisticLogo isButton={true} />
        <Link
          href="/dashboard"
          className="text-sm text-zinc-500 hover:text-zinc-900"
        >
          Home
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-16">
        <h1 className="text-4xl font-bold">Outfit Generator</h1>
        <p className="mt-2 text-zinc-500">Get a complete outfit suggestion.</p>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <label className="text-sm font-medium">
            Occasion
            <select
              className={select + " mt-1"}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              {occasions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Style
            <select
              className={select + " mt-1"}
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              {styles.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <button
            onClick={() => setGenerated(true)}
            className="mt-2 rounded-full bg-stailistictext-blue py-3 font-medium text-white hover:opacity-90"
          >
            Generate Outfit
          </button>
        </div>

        {generated && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Your Outfit</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm"
                />
              ))}
            </div>
            <h3 className="mt-8 text-lg font-semibold">Why this works</h3>
            <p className="mt-1 text-zinc-500">
              {style} style works well for {occasion}.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
