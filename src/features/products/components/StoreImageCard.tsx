import type { Image } from "@/src/types/image";
import toast from "react-hot-toast";

type StoreItem = Image & {
  quantity: number;
};

type StoreImageCardProps = {
  image: StoreItem;
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onImageClick: (image: Image) => void;
};

export function StoreImageCard({ 
    image,
    onRemove, 
    onIncrease,
    onDecrease,
    onImageClick,
}: StoreImageCardProps) {
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
        <p className="mt-2">Quantity: {image.quantity}</p>
        <p className="font-bold mt-2"> 
            Subtotal: ${(image.price * image.quantity).toFixed(2)}
        </p>
        
        <div className="flex gap-2 mt-4">
            <button 
                className="border px-3 py-1 rounded"
                onClick={() => onDecrease(image.id)}
            >
                -
            </button>

            <button 
                className="border px-3 py-1 rounded"
                onClick={() => onIncrease(image.id)}
            >
                +
            </button>

            <button
                className="border px-3 py-1 rounded"
                onClick={() => {
                  onRemove(image.id);
                  toast.success("Removed from Store");
                }}
            >
                Remove from Store
            </button>
        </div>
      </div>
    </div>
  );
}