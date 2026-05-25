"use client";

import { useImageStore } from "@/src/store/useImageStore";

export default function FavoritesPage() {
  const favorites = useImageStore((state) => state.favorites);
  const removeFromFavorites = useImageStore((state) => state.removeFromFavorites);
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite images yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((image) => (
            <div key={image.id} className="border rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <p className="text-gray-600">{image.description}</p>
                <button
                    className="border px-3 py-1 rounded mt-4"
                    onClick={() => removeFromFavorites(image.id)}
                    >
                    Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}