import React from "react";
import SearchResultsItem from "./SearchResultsItem";
import CloseIcon from "../assets/icons/times-solid.svg";

const SearchResultsModal = () => {
  return (
    <div className="search-modal">
      <div className="search-results">
        <div className="search-results__title-container">
          <h1 className="search-results__title">
            Results for{" "}
            <span className="search-results__name">"Placeholder"</span>
          </h1>
          <img className="share-movie__close-btn" src={CloseIcon} />
        </div>

        <div className="search-results__container">
          <SearchResultsItem />
          {/* <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem />
          <SearchResultsItem /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsModal;
