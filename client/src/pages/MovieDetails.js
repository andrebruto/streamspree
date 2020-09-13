import React, { Component } from "react";
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

class MovieDetails extends Component {
  render() {
    return (
      <>
        <div className="movie-details">
          {/* <ShareMovieModal /> */}
          <div className="movie-details__container">
            <div className="movie-details__subcontainer">
              <img className="movie-details__poster" src={MoviePoster} />
              <button className="movie-details__share">SHARE</button>
            </div>
            <div className="movie-details__info">
              <h2 className="movie-details__title">Avengers: Infinity War</h2>
              <h3 className="movie-details__year">(2018)</h3>
              <p className="movie-details__data">
                <span className="movie-details__data--bold">Director:</span>{" "}
                Steven Spielberg
              </p>
              <p className="movie-details__data">
                <span className="movie-details__data--bold">Cast:</span> Brad
                Pitt, Julia Roberts, George Clooney, Olivia Munn
              </p>
              <p className="movie-details__data">
                <span className="movie-details__data--bold">Runtime:</span> 149
                min
              </p>
              <p className="movie-details__data">
                <span className="movie-details__data--bold">Genre:</span> Action
              </p>
              <p className="movie-details__description">
                <span className="movie-details__data--bold">Plot:</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="movie-details__ratings">
                <p className="movie-details__subtitle">RATINGS:</p>
                <div className="movie-details__ratings-container">
                  <div className="movie-details__ratings-source">
                    <img
                      className="movie-details__ratings-img"
                      src={IMDBLogo}
                    />
                    <p className="movie-details__data">8.4/10</p>
                  </div>
                  <div className="movie-details__ratings-source">
                    <img
                      className="movie-details__ratings-img"
                      src={RottenTomatoesLogo}
                    />
                    <p className="movie-details__data">85%</p>
                  </div>
                  <div className="movie-details__ratings-source">
                    <img
                      className="movie-details__ratings-img"
                      src={MetacriticLogo}
                    />
                    <p className="movie-details__data">68/100</p>
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

export default MovieDetails;
