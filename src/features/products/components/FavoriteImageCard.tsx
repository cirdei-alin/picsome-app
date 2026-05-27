import type { Image } from "@/src/types/image";

type FavoriteImageCardProps = {
  image: Image;
  onRemove: (id: string) => void;
  onAddToStore: (image: Image) => void;
  onImageClick: (image: Image) => void;
};

export function FavoriteImageCard({
  image,
  onRemove,
  onAddToStore,
  onImageClick,
}: FavoriteImageCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-60 object-cover cursor-pointed"
        onClick={() => onImageClick(image)}
      />

      <div className="p-4">
        <p className="text-gray-600">{image.description}</p>
        <p className="font-bold mt-2">${image.price.toFixed(2)}</p>

        <div className = "flex gap-2 mt-4">
            <button
                className="border px-3 py-1 rounded"
                onClick={() => onAddToStore(image)}
            >
                Add to Store
            </button>

            <button
                className="border px-3 py-1 rounded"
                onClick={() => onRemove(image.id)}
            >
                Remove from Favorites
            </button>
        </div>
      </div>
    </div>
  );
}