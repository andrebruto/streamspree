import React from "react";
import ImgPlaceholder from "../assets/images/11-avengers_1_orig.jpg";

const SearchResultsItem = () => {
  return (
    <div className="results-item">
      <img className="results-item__poster" src={ImgPlaceholder} />
      <p className="results-item__movie-title">Placeholder</p>
      <div>
        <div className="results-item__container">
          <button className="results-item__btn-playlist">+ PLAYLIST</button>
          <button className="results-item__btn-details">+ DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsItem;
