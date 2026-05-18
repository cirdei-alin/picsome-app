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
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const addToFavorites = useImageStore((state) => state.addToFavorites);
  const addToStore = useImageStore((state) => state.addToStore);
  
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
              className="w-full h-60 object-cover cursor-pointer"
              onClick={() => setSelectedImage(image)}
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

     {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "12px",
              maxWidth: "900px",
              width: "100%",
              overflow: "hidden",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              style={{
                width: "100%",
                maxHeight: "70vh",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "16px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                {selectedImage.title}
              </h2>

              <p style={{ color: "#4b5563", marginTop: "8px" }}>
                {selectedImage.description}
              </p>

              <p style={{ fontWeight: "bold", marginTop: "8px" }}>
                ${selectedImage.price.toFixed(2)}
              </p>

              <button
                style={{
                  border: "1px solid black",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  marginTop: "16px",
                }}
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}