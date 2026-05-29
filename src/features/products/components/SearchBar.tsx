type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
};

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
}: SearchBarProps) {
  return (
    <form
      className="flex flex-col gap-3 md:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="relative w-full">
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-500">
          ⌕
        </span>

        <input
          type="text"
          value={value}
          placeholder="Search mountains, cars, fashion, nature..."
          onChange={(event) => onChange(event.target.value)}
          className="min-h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-12 text-base font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/60 focus:bg-white/10 focus:ring-4 focus:ring-fuchsia-500/10"
        />
      </div>

      <button
        type="submit"
        className="min-h-14 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-8 font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]"
      >
        Search
      </button>

      <button
        type="button"
        className="min-h-14 rounded-2xl border border-white/10 px-8 font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
        onClick={onClear}
      >
        Clear
      </button>
    </form>
  );
}