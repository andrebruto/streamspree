import React from "react";
import MoviePoster from "../assets/images/11-avengers_1_orig.jpg";
import stream01 from "../assets/logos/netflix.png";
import stream02 from "../assets/logos/amazon-video.png";
import stream03 from "../assets/logos/apple-tv-plus.png";
import stream04 from "../assets/logos/crave.png";
import MovieDetailsComments from "../components/MovieDetailsComments";

const MovieDetails = () => {
  return (
    <>
      <div className="movie-details">
        <div className="movie-details__container">
          <img className="movie-details__poster" src={MoviePoster} />
          <div className="movie-details__info">
            <h2 className="movie-details__title">Avengers: Infinity War</h2>
            <h3 className="movie-details__date">(2018)</h3>
            <p className="movie-details__cast">
              Brad Pitt, Julia Roberts, George Clooney, Olivia Munn
            </p>
            <p className="movie-details__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="movie-details__streaming">
              <p className="movie-details__streaming-title">STREAMING ON:</p>
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
};

export default MovieDetails;
