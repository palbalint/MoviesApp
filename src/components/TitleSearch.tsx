import React, { useState } from "react";
import "../styles/TitleSearch.scss";

interface TitleSearchProps {
  onSearch: (query: string) => void;
}

const TitleSearch: React.FC<TitleSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (): void => {
    onSearch(query);
  };

  const handleClearSearch = (): void => {
    setQuery("");
    onSearch("");
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Keresés cím alapján"
        onChange={(e) => setQuery(e.target.value)}
        className="search-field"
      />
      <button onClick={handleSearch}>Keresés</button>
      <button onClick={handleClearSearch}>Keresés törlése</button>
    </div>
  );
};

export default TitleSearch;
