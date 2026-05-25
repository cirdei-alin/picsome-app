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
      className="mb-6 flex gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        placeholder="Search images..."
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded border px-4 py-2 bg-black text-white"
      />

      <button type="submit" className="border px-4 py-2 rounded">
        Search
      </button>

      <button type="button" className="border px-4 py-2 rounded" onClick={onClear}>
        Clear
      </button>
    </form>
  );
}