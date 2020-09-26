import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToPlaylist from "./AddToPlaylist";
import PosterNotAvailable from "../assets/images/poster-not-available.jpg";

const BASE_URL = "http://localhost:5000";
const searchByMovieID = (movieID) => `${BASE_URL}/movies/${movieID}/details`;

class PlaylistItem extends Component {
  state = {
    movieDetails: {},
  };

  componentDidMount() {
    this.searchMovieByID(this.props.movieID);
  }

  searchMovieByID = (movieID) => {
    axios.get(searchByMovieID(movieID)).then((response) =>
      this.setState({
        movieDetails: response.data,
      })
    );
  };

  render() {
    if (this.state.movieDetails) {
      return (
        <div className="playlist-item">
          <Link to={`/movie/details/${this.props.movieID}`}>
            {this.state.movieDetails.poster === "N/A" ? (
              <img className="playlist-item__poster" src={PosterNotAvailable} />
            ) : (
              <img
                className="playlist-item__poster"
                src={this.state.movieDetails.poster}
              />
            )}
          </Link>

          <p className="playlist-item__movie-title">
            {this.state.movieDetails.title}
          </p>
          <p className="playlist-item__movie-subtitle">
            {this.state.movieDetails.year}
          </p>

          <div className="playlist-item__container">
            <AddToPlaylist
              movieID={this.props.movieID}
              onDelete={this.props.onRemoveFromPlaylist}
            />
            <Link
              className="results-item__link-details"
              to={`/movie/details/${this.props.movieID}`}
            >
              <button className="results-item__btn-details">+ DETAILS</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default PlaylistItem;
