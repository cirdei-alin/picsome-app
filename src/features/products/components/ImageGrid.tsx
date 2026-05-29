"use client";

import { useEffect, useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { fetchPictures } from "@/src/lib/fetchPictures";
import { ImageCard } from "./ImageCard";
import { ImageGridSkeleton } from "./ImageGridSkeleton";
import { ImagePreviewModal } from "./ImagePreviewModal";
import type { Image } from "@/src/types/image";

type ImageGridProps = {
  searchTerm: string;
};

export default function ImageGrid({ searchTerm }: ImageGridProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [error, setError] = useState("");

  const addToFavorites = useImageStore((state) => state.addToFavorites);
  const addToStore = useImageStore((state) => state.addToStore);

  useEffect(() => {
    async function loadImages() {
      try {
        setError("");

        if (images.length === 0) {
          setLoading(true);
        } else {
          setIsSearching(true);
        }

        const pictures = await fetchPictures(searchTerm);
        setImages(pictures);
      } catch {
        setError("Something went wrong while loading images.");
      } finally {
        setLoading(false);
        setIsSearching(false);
      }
    }

    loadImages();
  }, [searchTerm]);

  if (loading) {
    return <ImageGridSkeleton />;
  }

  return (
    <section>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
            PicSome Gallery
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
            Fresh picks for{" "}
            <span className="text-cyan-300">{searchTerm}</span>
          </h2>
        </div>

        {isSearching && (
          <p className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            Loading new images...
          </p>
        )}
      </div>

      {error && (
        <p className="mb-6 rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 font-semibold text-red-200">
          {error}
        </p>
      )}

      {!error && images.length === 0 && (
        <p className="mb-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-300">
          No images found for this search.
        </p>
      )}

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
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