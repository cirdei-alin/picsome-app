import type { Image } from "@/src/types/image";
import { CartButton } from "./CartButton";
import { FavoriteButton } from "./FavoriteButton";
import { ProductPrice } from "./ProductPrice";

type ImageCardProps = {
  image: Image;
  isFavorite: boolean;
  isInCart: boolean;
  onImageClick: (image: Image) => void;
  onAddToFavorites: (image: Image) => void;
  onRemoveFromFavorites: (id: string) => void;
  onAddToCart: (image: Image) => void;
  onRemoveFromCart: (id: string) => void;
};

export function ImageCard({
  image,
  isFavorite,
  isInCart,
  onImageClick,
  onAddToFavorites,
  onRemoveFromFavorites,
  onAddToCart,
  onRemoveFromCart,
}: ImageCardProps) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(image.id);
      return;
    }

    onAddToFavorites(image);
  };

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
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />

          <CartButton isInCart={isInCart} onClick={handleCartClick} />
        </div>
      </div>
    </article>
  );
}