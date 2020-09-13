import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";

import SearchResultsModal from "./components/SearchResultsModal";

const BASE_URL = "http://localhost:5000";

const searchByMovieTitle = (searchKeyword) =>
  `${BASE_URL}/movies/${searchKeyword}`;
const searchByMovieID = (imdbID) => `${BASE_URL}/movies/details/${imdbID}`;

class App extends Component {
  state = {
    movies: [],
    movieDetails: {},
    error: "",
  };

  componentDidMount() {
    sessionStorage.setItem("defaultSearch", "money");
    axios
      .get(searchByMovieTitle(sessionStorage.getItem("defaultSearch")))
      .then((response) =>
        this.setState(
          {
            movies: response.data,
          }

          // () => this.searchMovieByImdbID(this.state.movies[0].imdbID);
        )
      );
  }

  searchMovieByImdbID = (imdbID) => {
    axios.get(searchByMovieID(imdbID)).then((response) =>
      this.setState({
        movieDetails: response.data,
      })
    );
  };

  searchMovies = (event) => {
    event.preventDefault();
    axios
      .get(searchByMovieTitle(event.target.searchMovieInput.value))
      .then((response) =>
        this.setState({
          movies: response.data,
        })
      );
  };

  render() {
    return (
      <>
        <Header searchMovies={this.searchMovies} />
        <SearchResultsModal {...this.props} movies={this.state.movies} />
      </>
    );
  }
}

export default App;
