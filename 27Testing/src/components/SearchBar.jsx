import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const trimmed = search.trim();

    if (!trimmed) return;

    onSearch(trimmed)
    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button aria-label="Search"
         onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;