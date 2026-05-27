"use client";

import { useImageStore } from "@/src/store/useImageStore";
import { FavoriteImageCard } from "@/src/features/products/components/FavoriteImageCard";

export default function FavoritesPage() {
  const favorites = useImageStore((state) => state.favorites);
  const removeFromFavorites = useImageStore((state) => state.removeFromFavorites);
  const addToStore = useImageStore((state) => state.addToStore)
  
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite images yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((image) => (
            <FavoriteImageCard
              key={image.id}
              image={image}
              onRemove={removeFromFavorites}
              onAddToStore={addToStore}
            />
          ))}
        </div>
      )}
    </main>
  );
}