import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddToPlaylist from "../components/AddToPlaylist";
import PosterNotAvailable from "../assets/images/poster-not-available.jpg";

class SearchResultsItem extends Component {
  render() {
    const { title, poster, imdbID } = this.props.movieData;
    return (
      <div key={imdbID} className="results-item">
        <Link to={`/movie/details/${imdbID}`}>
          {poster === "N/A" ? (
            <img className="results-item__poster" src={PosterNotAvailable} />
          ) : (
            <img className="results-item__poster" src={poster} />
          )}
        </Link>

        <div className="results-item__btn-container">
          <AddToPlaylist movieID={imdbID} />
          <Link
            className="results-item__link-details"
            to={`/movie/details/${imdbID}`}
          >
            <button className="results-item__btn-details">+ DETAILS</button>
          </Link>
        </div>
        <div className="results-item__movieTitle-wrapper">
          <div className="results-item__movie-title results-item__tooltip">
            {title}
            <div className="results-item__tooltip-top">
              <p className="results-item__tooltip-text">{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultsItem;
