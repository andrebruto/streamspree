import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";

class SearchResultsItem extends Component {
  render() {
    const { title, poster, imdbID } = this.props.movieData;
    return (
      <div key={imdbID} className="results-item">
        <img className="results-item__poster" src={poster} />

        <div>
          <div className="results-item__container">
            <button className="results-item__btn-playlist">+ PLAYLIST</button>
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
