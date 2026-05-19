type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search images..."
      onChange={(event) => onChange(event.target.value)}
      className="mb-6 w-full rounded border px-4 py-2"
    />
  );
}