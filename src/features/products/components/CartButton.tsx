type CartButtonProps = {
  isInCart: boolean;
  onClick: () => void;
};

export function CartButton({ isInCart, onClick }: CartButtonProps) {
  return (
    <button
      className={`group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-4 py-3 text-sm font-black text-white transition duration-300 active:scale-95 ${
        isInCart
          ? "bg-emerald-500 shadow-xl shadow-emerald-500/30 ring-2 ring-emerald-300/30 hover:bg-emerald-400"
          : "bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400 shadow-xl shadow-fuchsia-500/30 ring-2 ring-white/15 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-cyan-400/40"
      }`}
      onClick={onClick}
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
  );
}