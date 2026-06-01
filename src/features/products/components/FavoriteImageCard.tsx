import type { Image } from "@/src/types/image";
import toast from "react-hot-toast";
import { CartButton } from "./CartButton";
import { ProductPrice } from "./ProductPrice";

type FavoriteImageCardProps = {
  image: Image;
  isInCart: boolean;
  onRemove: (id: string) => void;
  onAddToCart: (image: Image) => void;
  onRemoveFromCart: (id: string) => void;
  onImageClick: (image: Image) => void;
};

export function FavoriteImageCard({
  image,
  isInCart,
  onRemove,
  onAddToCart,
  onRemoveFromCart,
  onImageClick,
}: FavoriteImageCardProps) {
  const handleCartClick = () => {
    if (isInCart) {
      onRemoveFromCart(image.id);
      return;
    }

    onAddToCart(image);
  };

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-fuchsia-300/40 hover:bg-white/[0.07]">
      <button
        type="button"
        className="block w-full overflow-hidden"
        onClick={() => onImageClick(image)}
      >
        <img
          src={image.url}
          alt={image.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </button>

      <div className="p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <p className="line-clamp-2 text-sm leading-6 text-slate-400">
            {image.description}
          </p>

          <ProductPrice price={image.price} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <CartButton isInCart={isInCart} onClick={handleCartClick} />

          <button
            className="group/btn flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-red-300/40 hover:bg-red-500/10 hover:text-red-100"
            onClick={() => {
              onRemove(image.id);
              toast.success("Removed from Favorites");
            }}
          >
            <span className="text-lg transition group-hover/btn:scale-125">
              ×
            </span>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}