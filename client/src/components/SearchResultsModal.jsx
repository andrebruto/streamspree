import React from "react";
import SearchResultsItem from "./SearchResultsItem";

const SearchResultsModal = () => {
  return (
    <div className="search-results">
      <h1 className="search-results__title">
        Results for <span className="search-results__name">"Placeholder"</span>
      </h1>
      <div className="search-results__container">
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
        <SearchResultsItem />
      </div>
    </div>
  );
};

export default SearchResultsModal;
