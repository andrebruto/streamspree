import React from "react";
import PosterNotAvailable from "../assets/images/poster-not-available.jpg";
import { Link } from "react-router-dom";
import AddToPlaylist from "../components/AddToPlaylist";
import CloseIcon from "../assets/icons/times-solid.svg";

const RandomMovieModal = ({ randomMovie }) => {
  const { title, year, poster, imdbID } = randomMovie;
  // console.log(randomMovie);
  const refreshPage = () => window.location.reload();

  const navRef = React.useRef(null);

  return (
    <div
      className={!randomMovie.title ? `search-modal` : `search-modal__visible`}
    >
      <div className={randomMovie.title ? "rm-modal--visible" : "rm-modal"}>
        <img
          className="rm-modal__close-btn"
          src={CloseIcon}
          alt="close icon"
          onClick={refreshPage}
        />
        <h1 className="rm-modal__title">CHECK THIS ONE OUT!</h1>
        {poster === "N/A" ? (
          <img className="rm-modal__poster" src={PosterNotAvailable} />
        ) : (
          <img className="rm-modal__poster" src={poster} />
        )}

        <p className="rm-modal__movie-title">{title}</p>
        <p className="rm-modal__year">{year}</p>
        <div className="rm-modal__btn-container">
          <AddToPlaylist movieID={imdbID} />
          <Link to={`/movie/details/${imdbID}`}>
            <button className="results-item__btn-details">+ DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RandomMovieModal;
