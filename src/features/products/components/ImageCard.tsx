import type { Image } from "@/src/types/image";

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

          <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950 shadow-lg">
            ${image.price.toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className={`group/btn flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              isFavorite
                ? "border-fuchsia-300/40 bg-fuchsia-400/15 text-fuchsia-100"
                : "border-white/10 text-slate-200 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/10 hover:text-white"
            }`}
            onClick={handleFavoriteClick}
          >
            <span
              className={`text-lg transition group-hover/btn:scale-125 ${
                isFavorite ? "scale-125 text-fuchsia-300" : "text-fuchsia-300"
              }`}
            >
              {isFavorite ? "♥" : "♡"}
            </span>

            {isFavorite ? "Saved" : "Favorite"}
          </button>

          <button
            className={`group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-4 py-3 text-sm font-black text-white transition duration-300 active:scale-95 ${
              isInCart
                ? "bg-emerald-500 shadow-xl shadow-emerald-500/30 ring-2 ring-emerald-300/30 hover:bg-emerald-400"
                : "bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400 shadow-xl shadow-fuchsia-500/30 ring-2 ring-white/15 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-cyan-400/40"
            }`}
            onClick={handleCartClick}
          >
            <span className="absolute inset-0 bg-white/0 transition group-hover/btn:bg-white/15" />

            {!isInCart && (
              <>
                <span className="absolute -left-12 top-0 h-full w-12 skew-x-[-20deg] bg-white/35 transition duration-700 group-hover/btn:left-[120%]" />
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover/btn:opacity-100" />
              </>
            )}

            <span className="relative grid h-7 w-7 place-items-center rounded-xl bg-white/20 text-base shadow-inner shadow-white/10 transition group-hover/btn:scale-110">
              {isInCart ? "✓" : "🛒"}
            </span>

            <span className="relative tracking-wide">
              {isInCart ? "Added" : "Add to Cart"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}