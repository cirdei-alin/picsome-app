type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search images..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      className="w-full border rounded-lg px-4 py-3 mb-6 bg-black text-white"
    />
  );
}