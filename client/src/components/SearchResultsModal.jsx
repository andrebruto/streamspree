import React from "react";
import SearchResultsItem from "./SearchResultsItem";
import CloseIcon from "../assets/icons/times-solid.svg";

const SearchResultsModal = ({ movies, match }) => {
  // console.log("searchresultsmodal", movies);
  const searchResults = movies.map((movie) => (
    <SearchResultsItem key={movie.imdbID} movieData={movie} />
  ));

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

        <div className="search-results__container">{searchResults}</div>
      </div>
    </div>
  );
};

export default SearchResultsModal;
