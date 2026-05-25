"use client";

import { useState } from "react";

import ImageGrid from "../features/products/components/ImageGrid";
import SearchBar from "../features/products/components/SearchBar";

export default function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("random");

  return (
    <main className="p-6">
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSubmit={() => setSearchTerm(searchInput || "nature")}
        onClear={() => {
          setSearchInput("");
          setSearchTerm("nature");
        }}
      />

      <ImageGrid searchTerm={searchTerm} />
    </main>
  );
}