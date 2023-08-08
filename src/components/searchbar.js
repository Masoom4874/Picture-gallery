import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
    }
  };

  return (
    <div className="home-page">
      <h3>Find Images</h3>
      <input
        className="mt-4 p-1"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        className="p-1 m-1"
        onClick={handleButtonSearch}
        disabled={!searchValue}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
