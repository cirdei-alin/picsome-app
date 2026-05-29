import type { Image } from "@/src/types/image";
import toast from "react-hot-toast";

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
        <div className="mb-4 flex items-start justify-between gap-4">
          <p className="line-clamp-2 text-sm leading-6 text-slate-400">
            {image.description}
          </p>

          <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950">
            ${image.price.toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.03]"
            onClick={() => {
              onAddToStore(image);
              toast.success("Added to Store");
            }}
          >
            Add to Store
          </button>

          <button
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-red-300/40 hover:bg-red-500/10 hover:text-red-100"
            onClick={() => {
              onRemove(image.id);
              toast.success("Removed from Favorites");
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}