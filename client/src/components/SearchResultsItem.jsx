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
        <div>
          <div className="results-item__container">
            <AddToPlaylist movieID={imdbID} />
            <Link to={`/movie/details/${imdbID}`}>
              <button className="results-item__btn-details">+ DETAILS</button>
            </Link>
          </div>
        </div>
        <p className="results-item__movie-title">{title}</p>
      </div>
    );
  }
}

export default SearchResultsItem;
