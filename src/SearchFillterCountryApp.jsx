
import { useState } from "react";

const SearchFilterApp = () => {
  const [search, setSearch] = useState("");
  const [isFound, setIsFound] = useState(null);

  const countries = [
    "India",
    "Australia",
    "Brazil",
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
  ];

  const handleClick = () => {
    const found = countries.some(
      (v) => v.toLowerCase() === search.toLowerCase()
    );
    setIsFound(found);
  };

  return (
    <div>
      <h1>SearchCountry</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />

      <button onClick={handleClick}>
        Check
      </button><br/>

    {isFound?"true":"false"}
      
    </div>
  ) 
}

export default SearchFilterApp;