"use client";

import { useEffect, useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { fetchPictures } from "@/src/lib/fetchPictures";

type Image = {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
};

export default function ImageGrid() {
  const [images, setImages] = useState<Image[]>([]);

  const addToFavorites = useImageStore((state) => state.addToFavorites);
  const addToStore = useImageStore((state) => state.addToStore);

  useEffect(() => {
  async function loadImages() {
    const pictures = await fetchPictures();
    setImages(pictures);
  }

  loadImages();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{image.title}</h2>
              <p className="text-gray-600">{image.description}</p>
              <p className="font-bold mt-2">${image.price.toFixed(2)}</p>

              <div className="flex gap-2 mt-4">
                <button
                  className="border px-3 py-1 rounded"
                  onClick={() => addToFavorites(image)}
                >
                  Add to Favorites
                </button>

                <button
                  className="border px-3 py-1 rounded"
                  onClick={() => addToStore(image)}
                >
                  Add to Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}