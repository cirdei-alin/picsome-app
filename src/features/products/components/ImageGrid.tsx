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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadImages() {
    const pictures = await fetchPictures();
    setImages(pictures);
    setLoading(false);
  }

  loadImages();
  }, []);

  if (loading) {
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden animate-pulse">
              <div className="w-full h-60 bg-gray-300" />

              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-3" />
                <div className="h-4 bg-gray-300 rounded mb-4" />
                <div className="h-8 bg-gray-300 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  } 

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