import React, { Component } from "react";
import axios from "axios";
import PlaylistItem from "../components/PlaylistItem.jsx";
import SharePlaylistModal from "../components/SharePlaylistModal.jsx";

const BASE_URL = "http://localhost:5000";
const playlistsMoviesURL = `${BASE_URL}/playlists/1/movies`;

class Playlist extends Component {
  state = {
    movies: [],
    shareModal: false,
  };

  onOpenModal = (e) => {
    this.setState({ shareModal: true });
  };
  onCloseModal = () => {
    this.setState({ shareModal: false });
  };

  componentDidMount() {
    this.getPlaylistItems();
  }

  getPlaylistItems = () => {
    axios
      .get(playlistsMoviesURL)
      .then((resp) => {
        this.setState({ movies: resp.data.movies });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateList = (movieID) => {
    // console.log("updateList", movieID);
    this.setState({
      movies: this.state.movies.filter((movie) => movie.movie_id !== movieID),
    });
  };

  render() {
    return (
      <div className="playlist">
        <SharePlaylistModal
          hideModal={this.onCloseModal}
          shareModal={this.state.shareModal}
        />
        <div className="playlist__title-container">
          <h1 className="playlist__title">WATCHLIST</h1>
          <button className="playlist__share-btn" onClick={this.onOpenModal}>
            SHARE
          </button>
        </div>
        <div className="playlist__container">
          {this.state.movies.map((movie) => (
            <PlaylistItem
              key={movie.movie_id}
              movieID={movie.movie_id}
              onRemoveFromPlaylist={this.updateList}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Playlist;
