import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon" />
    <input
      type="text"
      placeholder="Find Your Course"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
