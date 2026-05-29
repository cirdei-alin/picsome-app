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
      className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        placeholder="Search mountains, cars, fashion, nature..."
        onChange={(event) => onChange(event.target.value)}
        className="min-h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-base font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-fuchsia-300/60 focus:bg-white/10 focus:ring-4 focus:ring-fuchsia-500/10"
      />

      <button
        type="submit"
        className="min-h-14 rounded-2xl bg-white px-7 font-black text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-fuchsia-200"
      >
        Search
      </button>

      <button
        type="button"
        className="min-h-14 rounded-2xl border border-white/10 px-7 font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
        onClick={onClear}
      >
        Clear
      </button>
    </form>
  );
}