import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToPlaylist from "./AddToPlaylist";

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
          <img
            className="playlist-item__poster"
            src={this.state.movieDetails.poster}
          />
          <p className="playlist-item__movie-title">
            {this.state.movieDetails.title}
          </p>
          <p className="playlist-item__movie-subtitle">
            {this.state.movieDetails.year}
          </p>
          <div>
            <div className="playlist-item__container">
              <AddToPlaylist
                movieID={this.props.movieID}
                onDelete={this.props.onRemoveFromPlaylist}
              />
              <Link to={`/movie/details/${this.props.movieID}`}>
                <button className="playlist-item__btn-details">
                  + DETAILS
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PlaylistItem;
