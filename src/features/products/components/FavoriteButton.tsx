type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export function FavoriteButton({ isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button
      className={`group/btn flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
        isFavorite
          ? "border-fuchsia-300/40 bg-fuchsia-400/15 text-fuchsia-100"
          : "border-white/10 text-slate-200 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/10 hover:text-white"
      }`}
      onClick={onClick}
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
  );
}