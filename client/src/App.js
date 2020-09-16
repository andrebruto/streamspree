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
    searchText: "",
  };

  searchMovies = (event) => {
    event.preventDefault();
    const inputText = event.target.searchMovieInput.value;

    axios.get(searchByMovieTitle(inputText)).then((response) =>
      this.setState({
        movies: response.data,
        searchText: inputText,
      })
    );
  };

  render() {
    return (
      <>
        <Header searchMovies={this.searchMovies} />
        <SearchResultsModal
          {...this.props}
          movies={this.state.movies}
          match={this.state.searchText}
        />
      </>
    );
  }
}

export default App;
