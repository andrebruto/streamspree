import React, { Component } from "react";
import axios from "axios";
import RandomMovieModal from "./RandomMovieModal";

const BASE_URL = "http://localhost:5000";
const randomMovieURL = () => `${BASE_URL}/movies/movie/random`;

class RandomMovie extends Component {
  state = {
    randomMovie: {},
  };

  getRandomMovie = (event) => {
    event.preventDefault();
    axios
      .get(randomMovieURL())
      .then((response) => this.setState({ randomMovie: response.data }));
  };

  render() {
    // console.log(this.state.randomMovie);
    return (
      <>
        <form className="random-movie">
          <h1 className="random-movie__title">
            Don't know what do you want to watch?
          </h1>
          <p className="random-movie__subtitle">
            CLICK THE BUTTON AND WE WILL TELL YOU
          </p>
          <button
            className="random-movie__btn"
            name="randomMovie"
            onClick={this.getRandomMovie}
          >
            SHOW ME
          </button>
        </form>
        <RandomMovieModal randomMovie={this.state.randomMovie} />
      </>
    );
  }
}

export default RandomMovie;
