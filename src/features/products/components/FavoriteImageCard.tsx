import type { Image } from "@/src/types/image";
import toast from "react-hot-toast";

type FavoriteImageCardProps = {
  image: Image;
  isInCart: boolean;
  onRemove: (id: string) => void;
  onAddToStore: (image: Image) => void;
  onRemoveFromStore: (id: string) => void;
  onImageClick: (image: Image) => void;
};

export function FavoriteImageCard({
  image,
  isInCart,
  onRemove,
  onAddToStore,
  onRemoveFromStore,
  onImageClick,
}: FavoriteImageCardProps) {
  const handleCartClick = () => {
    if (isInCart) {
      onRemoveFromStore(image.id);
      return;
    }

    onAddToStore(image);
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
            className={`group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-4 py-3 text-sm font-black text-white shadow-xl transition duration-300 hover:-translate-y-0.5 active:scale-95 ${
              isInCart
                ? "bg-emerald-500 shadow-emerald-500/30 ring-2 ring-emerald-300/30 hover:bg-emerald-400"
                : "bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 shadow-fuchsia-500/30 ring-2 ring-fuchsia-300/20 hover:scale-[1.04] hover:shadow-cyan-400/40"
            }`}
            onClick={handleCartClick}
          >
            <span className="absolute inset-0 bg-white/0 transition group-hover/btn:bg-white/15" />

            {!isInCart && (
              <span className="absolute -left-10 top-0 h-full w-10 skew-x-[-20deg] bg-white/30 transition duration-700 group-hover/btn:left-[120%]" />
            )}

            <span className="relative text-lg transition group-hover/btn:scale-125">
              {isInCart ? "✓" : "🛒"}
            </span>

            <span className="relative">{isInCart ? "Added" : "Add to Cart"}</span>
          </button>

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