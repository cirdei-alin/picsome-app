import type { Image } from "@/src/types/image";

type StoreImageCardProps = {
  image: Image;
  onRemove: (id: string) => void;
};

export function StoreImageCard({ image, onRemove }: StoreImageCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <p className="text-gray-600">{image.description}</p>
        <p className="font-bold mt-2">${image.price.toFixed(2)}</p>

        <button
          className="border px-3 py-1 rounded mt-4"
          onClick={() => onRemove(image.id)}
        >
          Remove from Store
        </button>
      </div>
    </div>
  );
}