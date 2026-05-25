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

export default function ImageGrid({
  searchTerm,
}: ImageGridProps) {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);  
  const [error, setError] = useState("");

  const addToFavorites = useImageStore((state) => state.addToFavorites);
  const addToStore = useImageStore((state) => state.addToStore);

  useEffect(() => {
      async function loadImages() {
        try {
          setLoading(true)
          setError("");

          const pictures = await fetchPictures(searchTerm);

          setImages(pictures);
        } catch {
          setError("Something went wrong while loading images.");
        } finally {
          setLoading(false);
        }
    }

    loadImages();
  }, [searchTerm]);

  
  if (loading) {
    return <ImageGridSkeleton />;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

      {error && (
        <p className="mb-6 font-semibold text-red-500">
          {error}
        </p>
      )}

      {!error && images.length === 0 && (
        <p className="mb-6 text-gray-500">
          No images found for this search.
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