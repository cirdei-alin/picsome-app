"use client";

import { useState } from "react";
import Link from "next/link";

import { ImagePreviewModal } from "@/src/features/products/components/ImagePreviewModal";
import { useImageStore } from "@/src/store/useImageStore";
import { FavoriteImageCard } from "@/src/features/products/components/FavoriteImageCard";

import type { Image } from "@/src/types/image";

export default function FavoritesPage() {
  const favorites = useImageStore((state) => state.favorites);
  const removeFromFavorites = useImageStore((state) => state.removeFromFavorites);
  const addToStore = useImageStore((state) => state.addToStore);
  const store = useImageStore((state) => state.store);
  const removeFromStore = useImageStore((state) => state.removeFromStore);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
      <section className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
        <p className="mb-3 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-sm font-bold text-fuchsia-200">
          Your saved collection
        </p>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Favorite{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                visuals.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-slate-300">
              Keep your best image picks in one place and move them to your
              store whenever you are ready.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-4 text-center shadow-xl shadow-black/20">
            <p className="text-3xl font-black text-white">{favorites.length}</p>
            <p className="text-sm font-semibold text-slate-400">
              saved images
            </p>
          </div>
        </div>
      </section>

      {favorites.length === 0 ? (
        <section className="grid min-h-[360px] place-items-center rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="max-w-md">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-4xl shadow-lg shadow-fuchsia-500/25">
              ♡
            </div>

            <h2 className="text-3xl font-black text-white">
              No favorites yet
            </h2>

            <p className="mt-3 text-slate-400">
              Start exploring the gallery and save the images that match your
              style.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-fuchsia-200"
            >
              Go to Gallery
            </Link>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((image) => (
            <FavoriteImageCard
              key={image.id}
              image={image}
              isInCart={store.some((cartImage) => cartImage.id === image.id)}
              onRemove={removeFromFavorites}
              onAddToStore={addToStore}
              onRemoveFromStore={removeFromStore}
              onImageClick={setSelectedImage}
            />
          ))}
        </section>
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