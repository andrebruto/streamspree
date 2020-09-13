import React, { Component } from "react";
import axios from "axios";
import MoviePoster from "../assets/images/11-avengers_1_orig.jpg";
import stream01 from "../assets/logos/netflix.png";
import stream02 from "../assets/logos/amazon-video.png";
import stream03 from "../assets/logos/apple-tv-plus.png";
import stream04 from "../assets/logos/crave.png";
import ShareMovieModal from "../components/ShareMovieModal";
import MovieDetailsComments from "../components/MovieDetailsComments";
import IMDBLogo from "../assets/logos/imdb.png";
import RottenTomatoesLogo from "../assets/logos/rotten-tomatoes.png";
import MetacriticLogo from "../assets/logos/metacritic.png";

const BASE_URL = "http://localhost:5000";
const searchByMovieID = (movieID) => `${BASE_URL}/movies/${movieID}/details`;

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.movieID = props.match.params.id;
    // console.log(this.movieID);
  }

  state = {
    movieDetails: {},
    imdbRatings: "",
    rottenRatings: "",
    metaRatings: "",
    error: "",
    movieID: "",
  };

  movieID;

  componentDidMount() {
    this.searchMovieByID(this.movieID);
  }

  searchMovieByID = (movieID) => {
    axios.get(searchByMovieID(movieID)).then((response) =>
      this.setState({
        movieDetails: response.data,
        imdbRatings: response.data.ratings[0].Value,
        rottenRatings: response.data.ratings[1].Value,
        metaRatings: response.data.ratings[2].Value,
      })
    );
  };

  render() {
    // console.log(this.state.movieDetails);
    if (this.state.movieDetails) {
      return (
        <>
          <div className="movie-details">
            {/* <ShareMovieModal /> */}
            <div className="movie-details__container">
              <div className="movie-details__subcontainer">
                <img
                  className="movie-details__poster"
                  src={this.state.movieDetails.poster}
                />
                <button className="movie-details__share">SHARE</button>
              </div>
              <div className="movie-details__info">
                <h2 className="movie-details__title">
                  {this.state.movieDetails.title}
                </h2>
                <h3 className="movie-details__year">
                  ({this.state.movieDetails.year})
                </h3>
                <p className="movie-details__data">
                  <span className="movie-details__data--bold">Director:</span>
                  {this.state.movieDetails.director}
                </p>
                <p className="movie-details__data">
                  <span className="movie-details__data--bold">Cast:</span>
                  {this.state.movieDetails.cast}
                </p>
                <p className="movie-details__data">
                  <span className="movie-details__data--bold">Runtime:</span>
                  {this.state.movieDetails.runtime}
                </p>
                <p className="movie-details__data">
                  <span className="movie-details__data--bold">Genre:</span>
                  {this.state.movieDetails.genre}
                </p>
                <p className="movie-details__description">
                  <span className="movie-details__data--bold">Plot:</span>
                  {this.state.movieDetails.plot}
                </p>
                <div className="movie-details__ratings">
                  <p className="movie-details__subtitle">RATINGS:</p>
                  <div className="movie-details__ratings-container">
                    <div className="movie-details__ratings-source">
                      <img
                        className="movie-details__ratings-img"
                        src={IMDBLogo}
                      />
                      <p className="movie-details__data">
                        {this.state.imdbRatings}
                      </p>
                    </div>
                    <div className="movie-details__ratings-source">
                      <img
                        className="movie-details__ratings-img"
                        src={RottenTomatoesLogo}
                      />
                      <p className="movie-details__data">
                        {this.state.rottenRatings}
                      </p>
                    </div>
                    <div className="movie-details__ratings-source">
                      <img
                        className="movie-details__ratings-img"
                        src={MetacriticLogo}
                      />
                      <p className="movie-details__data">
                        {this.state.metaRatings}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="movie-details__streaming">
                  <p className="movie-details__subtitle">STREAMING ON:</p>
                  <div className="movie-details__streaming-logos">
                    <img
                      className="movie-details__streaming-service"
                      src={stream01}
                    />
                    <img
                      className="movie-details__streaming-service"
                      src={stream02}
                    />
                    <img
                      className="movie-details__streaming-service"
                      src={stream03}
                    />
                    <img
                      className="movie-details__streaming-service"
                      src={stream04}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MovieDetailsComments />
        </>
      );
    }
  }
}

export default MovieDetails;
