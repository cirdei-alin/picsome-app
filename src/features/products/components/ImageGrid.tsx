"use client";

import { useEffect, useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { fetchPictures } from "@/src/lib/fetchPictures";
import { ImageCard } from "./ImageCard";
import { ImageGridSkeleton } from "./ImageGridSkeleton";
import { ImagePreviewModal } from "./ImagePreviewModal";
import SearchBar from "./SearchBar";
import type { Image } from "@/src/types/image";
import { useDebounce } from "../hooks/useDebounce";

export default function ImageGrid() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [error, setError] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 2500);

  const addToFavorites = useImageStore((state) => state.addToFavorites);
  const addToStore = useImageStore((state) => state.addToStore);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        setError("");

        const pictures = await fetchPictures(debouncedSearchTerm);

        setImages(pictures);
      } catch {
        setError("Something went wrong while loading images.");
      } finally {
        setLoading(false);
      }
   }

    loadImages();
  }, [debouncedSearchTerm]);  

  
  if (loading) {
    return <ImageGridSkeleton />;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {error && (
        <p className="mb-6 text-red-500 font-semibold">
          {error}
        </p>
      )}

      {!error && images.length === 0 && (
        <p className="text-gray-500">
          No images found.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onImageClick={setSelectedImage}
            onAddToFavorites={addToFavorites}
            onAddToStore={addToStore}
          />
        ))}
      </div>

      {selectedImage && (
        <ImagePreviewModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}