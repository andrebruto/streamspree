import React from "react";
import BackgroundImg from "../assets/images/background-image.jpg";

const Header = ({ searchMovies }) => {
  const navRef = React.useRef(null);

  const onAddClick = () => {
    navRef.current.classList.add("header__btn--anim");
  };

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
          ></input>
          <button ref={navRef} className="header__btn" onClick={onAddClick}>
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
