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
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07]">
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

        <div className="mb-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">
              Quantity
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-lg font-black text-white">
              {image.quantity}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 text-xl font-black text-white transition hover:bg-white hover:text-slate-950"
              onClick={() => onDecrease(image.id)}
            >
              -
            </button>

            <button
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-xl font-black text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
              onClick={() => onIncrease(image.id)}
            >
              +
            </button>

            <p className="ml-auto text-right">
              <span className="block text-xs font-semibold text-slate-500">
                Subtotal
              </span>
              <span className="font-black text-white">
                ${(image.price * image.quantity).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <button
          className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-red-300/40 hover:bg-red-500/10 hover:text-red-100"
          onClick={() => {
            onRemove(image.id);
            toast.success("Removed from Cart");
          }}
        >
          <span className="text-lg transition group-hover/btn:scale-125">
            ×
          </span>
          Remove from Cart
        </button>
      </div>
    </article>
  );
}