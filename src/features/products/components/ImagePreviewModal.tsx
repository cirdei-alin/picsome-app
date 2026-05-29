import type { Image } from "@/src/types/image";

type ImagePreviewModalProps = {
  image: Image;
  onClose: () => void;
};

export function ImagePreviewModal({ image, onClose }: ImagePreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-[999999] grid place-items-center bg-black/80 p-5 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/50 text-xl font-black text-white backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-slate-950"
        >
          ×
        </button>

        <img
          src={image.url}
          alt={image.title}
          className="max-h-[70vh] w-full object-cover"
        />

        <div className="border-t border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                Preview
              </p>

              <h2 className="mt-2 text-3xl font-black text-white">
                {image.title}
              </h2>

              <p className="mt-3 max-w-2xl text-slate-400">
                {image.description}
              </p>
            </div>

            <p className="w-fit rounded-full bg-white px-5 py-3 text-xl font-black text-slate-950">
              ${image.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}