"use client";

import { useEffect, useState } from "react";
import { useImageStore } from "@/src/store/useImageStore";
import { fetchPictures } from "@/src/lib/fetchPictures";
import { ImageCard } from "./ImageCard";
import { ImageGridSkeleton } from "./ImageGridSkeleton";
import { ImagePreviewModal } from "./ImagePreviewModal";
import { SearchBar } from "./SearchBar";

type Image = {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  tags: string[];
};

export default function ImageGrid() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredImages = images.filter((image) => {
    const search = searchTerm.toLowerCase();

    return (
      image.title.toLowerCase().includes(search) ||
      image.description.toLowerCase().includes(search) ||
      image.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  if (loading) {
    return <ImageGridSkeleton />;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">PicSome Gallery</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
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