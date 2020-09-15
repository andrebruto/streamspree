import React from "react";
import { Link } from "react-router-dom";
import SearchResultsItem from "./SearchResultsItem";
import CloseIcon from "../assets/icons/times-solid.svg";

const SearchResultsModal = ({ movies, match }) => {
  // console.log("searchresultsmodal", movies);
  const searchResults = movies.map((movie) => (
    <SearchResultsItem key={movie.imdbID} movieData={movie} />
  ));

  const refreshPage = () => window.location.reload();

  return (
    <div
      className={movies.length === 0 ? `search-modal` : `search-modal__visible`}
    >
      <div className="search-results">
        <div className="search-results__title-container">
          <h1 className="search-results__title">
            Results for <span className="search-results__name">"{match}"</span>
          </h1>
          <div className="search-results__subcontainer">
            <Link to="/playlist/1">
              <div className="search-results__playlist-btn">GO TO PLAYLIST</div>
            </Link>
            <button
              class="search-results__close"
              type="button"
              onClick={refreshPage}
            >
              <img
                className="share-movie__close-btn"
                src={CloseIcon}
                alt="close icon"
              />
            </button>
          </div>
        </div>

        <div className="search-results__container">{searchResults}</div>
      </div>
    </div>
  );
};

export default SearchResultsModal;
