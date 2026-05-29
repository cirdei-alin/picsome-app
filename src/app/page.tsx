"use client";

import { useState } from "react";

import ImageGrid from "../features/products/components/ImageGrid";
import SearchBar from "../features/products/components/SearchBar";

export default function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("random");

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
      <section className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-sm font-bold text-fuchsia-200">
            Discover premium visuals
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Find images that make your project look{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              unforgettable.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Explore curated photos, save your favorites and build your visual
            store with one click.
          </p>
        </div>

        <div className="mt-8">
          <SearchBar
            value={searchInput}
            onChange={setSearchInput}
            onSubmit={() => setSearchTerm(searchInput || "random")}
            onClear={() => {
              setSearchInput("");
              setSearchTerm("random");
            }}
          />
        </div>
      </section>

      <ImageGrid searchTerm={searchTerm} />
    </main>
  );
}