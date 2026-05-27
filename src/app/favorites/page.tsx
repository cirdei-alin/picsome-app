"use client";

import { useState } from "react";

import { ImagePreviewModal } from "@/src/features/products/components/ImagePreviewModal";
import { useImageStore } from "@/src/store/useImageStore";
import { FavoriteImageCard } from "@/src/features/products/components/FavoriteImageCard";

import type { Image } from "@/src/types/image";
import Link from "next/link";

export default function FavoritesPage() {
  const favorites = useImageStore((state) => state.favorites);
  const removeFromFavorites = useImageStore((state) => state.removeFromFavorites);
  const addToStore = useImageStore((state) => state.addToStore)
  
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>

      {favorites.length === 0 ? (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">No favorites yet</h2>
          <p className="text-gray-500 mb-4">
            Start exploring the gallery and save your favorite images.
          </p>

          <Link href="/" className="inline-block border px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Go to Gallery
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((image) => (
            <FavoriteImageCard
              key={image.id}
              image={image}
              onRemove={removeFromFavorites}
              onAddToStore={addToStore}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <ImagePreviewModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
}