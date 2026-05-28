import type { Image } from "@/src/types/image";
import toast from "react-hot-toast";

type ImageCardProps = {
  image: Image;
  onImageClick: (image: Image) => void;
  onAddToFavorites: (image: Image) => void;
  onAddToStore: (image: Image) => void;
};

export function ImageCard({
  image,
  onImageClick,
  onAddToFavorites,
  onAddToStore,
}: ImageCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-60 object-cover cursor-pointer"
        onClick={() => onImageClick(image)}
      />

      <div className="p-4">
        <p className="text-gray-600">{image.description}</p>
        <p className="font-bold mt-2">${image.price.toFixed(2)}</p>

        <div className="flex gap-2 mt-4">
          <button
            className="border px-3 py-1 rounded"
            onClick={ () => {
              onAddToFavorites(image);
              toast.success("Added to Favorites");
            }}
          >
            Add to Favorites
          </button>

          <button
            className="border px-3 py-1 rounded"
            onClick={() => {
              onAddToStore(image);
              toast.success("Added to Store");
            }}
          >
            Add to Store
          </button>
        </div>
      </div>
    </div>
  );
}