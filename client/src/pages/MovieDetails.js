import React, { Component } from "react";
import axios from "axios";
import PosterNotAvailable from "../assets/images/poster-not-available.jpg";
import ShareMovieModal from "../components/ShareMovieModal";
import MovieDetailsComments from "../components/MovieDetailsComments";
import IMDBLogo from "../assets/logos/imdb.png";
import RottenTomatoesLogo from "../assets/logos/rotten-tomatoes.png";
import MetacriticLogo from "../assets/logos/metacritic.png";
import AddToPlaylist from "../components/AddToPlaylist";

const BASE_URL = "http://localhost:5000";
const searchByMovieID = (movieID) => `${BASE_URL}/movies/${movieID}/details`;
const movieCommentsURL = (movieID) => `${BASE_URL}/movies/${movieID}/comments`;

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
    comments: [],
  };

  movieID;

  componentDidMount() {
    this.searchMovieByID(this.movieID);
    this.getComments(this.movieID);
  }

  getComments = (movieID) => {
    axios.get(movieCommentsURL(movieID)).then((response) =>
      this.setState({
        comments: response.data,
      })
    );
  };

  searchMovieByID = (movieID) => {
    axios.get(searchByMovieID(movieID)).then((response) => {
      // console.log(response.data.ratings);
      this.setState({
        movieDetails: response.data,
        ...(response.data.ratings && {
          ...(response.data.ratings[0] && {
            imdbRatings: response.data.ratings[0].Value,
          }),
          ...(response.data.ratings[1] && {
            rottenRatings: response.data.ratings[1].Value,
          }),
          ...(response.data.ratings[2] && {
            metaRatings: response.data.ratings[2].Value,
          }),
        }),
      });
    });
  };

  postComment = (e) => {
    e.preventDefault();
    const commentValue = e.target.message.value;
    const nameValue = e.target.name.value;
    if (commentValue.trim(" ") === "" && nameValue.trim(" ") === "") {
      this.setState({ error: "You must fill all fields." });
      return;
    }
    this.setState({ error: "" });
    axios
      .post(movieCommentsURL(this.movieID), {
        name: nameValue,
        comment: commentValue,
      })
      .then((response) => {
        this.setState({
          comments: [response.data, ...this.state.comments],
        });
      });
    e.target.reset();
  };

  render() {
    console.log(this.state.movieDetails.poster);
    if (this.state.movieDetails) {
      return (
        <>
          <div className="movie-details">
            {/* <ShareMovieModal /> */}

            <div className="movie-details__container">
              <div className="movie-details__subcontainer">
                {this.state.movieDetails.poster === "N/A" ? (
                  <img
                    className="movie-details__poster-notAvailable"
                    src={PosterNotAvailable}
                  />
                ) : (
                  <img
                    className="movie-details__poster"
                    src={this.state.movieDetails.poster}
                  />
                )}
                <div className="movie-details__btn-subcontainer">
                  <AddToPlaylist movieID={this.movieID} />
                  <button className="movie-details__share">+ SHARE</button>
                </div>
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
                <div
                  className={
                    this.state.imdbRatings ||
                    this.state.rottenRatings ||
                    this.state.metaRatings
                      ? "movie-details__ratings"
                      : "movie-details__ratings--off"
                  }
                >
                  <p className="movie-details__subtitle">RATINGS:</p>
                  <div className="movie-details__ratings-container">
                    <div
                      className={
                        this.state.imdbRatings
                          ? "movie-details__ratings-source"
                          : "movie-details__ratings-source--imdb-off"
                      }
                    >
                      <img
                        className="movie-details__ratings-img"
                        src={IMDBLogo}
                      />
                      <p className="movie-details__data">
                        {this.state.imdbRatings}
                      </p>
                    </div>
                    <div
                      className={
                        this.state.rottenRatings
                          ? "movie-details__ratings-source"
                          : "movie-details__ratings-source--rotten-off"
                      }
                    >
                      <img
                        className="movie-details__ratings-img"
                        src={RottenTomatoesLogo}
                      />
                      <p className="movie-details__data">
                        {this.state.rottenRatings}
                      </p>
                    </div>
                    <div
                      className={
                        this.state.metaRatings
                          ? "movie-details__ratings-source"
                          : "movie-details__ratings-source--metacritic-off"
                      }
                    >
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
              </div>
            </div>
          </div>
          <MovieDetailsComments
            postComment={this.postComment}
            comments={this.state.comments}
          />
        </>
      );
    }
  }
}

export default MovieDetails;
