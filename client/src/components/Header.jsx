import React from "react";
import BackgroundImg from "../assets/images/background-image.jpg";

const Header = ({ searchMovies }) => {
  return (
    <div className="header">
      <img
        className="header__img"
        src={BackgroundImg}
        alt="theater with empty chairs"
      />
      <form className="header__form" onSubmit={searchMovies}>
        <h1 className="header__label">What do you want to watch today?</h1>
        <div className="header__container">
          <input
            className="header__input"
            type="search"
            name="searchMovieInput"
            placeholder="search by movie title"
          ></input>
          <button className="header__btn">SEARCH</button>
        </div>
      </form>
    </div>
  );
};

export default Header;
