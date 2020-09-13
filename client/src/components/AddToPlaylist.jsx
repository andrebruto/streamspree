import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";
const playlistsMoviesURL = (movieID) =>
  `${BASE_URL}/playlists/1/movies/${movieID}`;

class AddToPlaylist extends Component {
  state = {
    inPlaylist: false,
  };

  componentDidMount() {
    this.checkIfInPlaylist();
  }

  checkIfInPlaylist = () => {
    axios
      .get(playlistsMoviesURL(this.props.movieID))
      .then((resp) => {
        if (resp.data.movies.length) {
          this.setState({ inPlaylist: true });
          return;
        }
        this.setState({ inPlaylist: false });
      })
      .catch(() => {
        this.setState({ inPlaylist: false });
      });
  };

  addToPlaylist = () => {
    axios
      .post(playlistsMoviesURL(this.props.movieID))
      .then(() => {
        this.setState({ inPlaylist: true });
      })
      .catch(() => {
        this.setState({ inPlaylist: false });
      });
  };

  removeFromPlaylist = async () => {
    await axios
      .delete(playlistsMoviesURL(this.props.movieID))
      .then(() => {
        this.setState({ inPlaylist: false });
      })
      .catch(() => {
        this.setState({ inPlaylist: true });
      });

    if (this.props.onDelete) {
      this.props.onDelete(this.props.movieID);
    }
  };

  render() {
    if (this.state.inPlaylist) {
      return (
        <button
          className="results-item__btn-playlist"
          onClick={this.removeFromPlaylist}
        >
          REMOVE
        </button>
      );
    }
    return (
      <>
        <button
          className="results-item__btn-playlist"
          onClick={this.addToPlaylist}
        >
          + PLAYLIST
        </button>
      </>
    );
  }
}

export default AddToPlaylist;
