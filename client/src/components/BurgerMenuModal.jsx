import React from "react";
import { Link } from "react-router-dom";
import CloseBtn from "../assets/icons/times-solid.svg";
import logo from "../assets/logos/stream-spree-v2.svg";

const BurgerMenuModal = ({ show, handleClose }) => {
  return (
    <div
      className={
        show === true ? "burger-menu__modal" : "burger-menu__modal--off"
      }
    >
      <div className="burger-menu__logo-container">
        <div className="burger-menu__logo-subcontainer">
          <img
            className="burger-menu__logo"
            src={logo}
            alt="stream spree logo"
          />
          <Link to="/">
            <h2 className="burger-menu__title">
              Stream<span className="burger-menu__title--light">Spree</span>
            </h2>
          </Link>
        </div>
        <img
          className="burger-menu__close-btn"
          src={CloseBtn}
          alt="close button"
          onClick={handleClose}
        />
      </div>
      <div className="burger-menu__menu">
        <Link to="/" onClick={handleClose}>
          <p className="burger-menu__item">HOME</p>
        </Link>
        <Link to="/playlist/1" onClick={handleClose}>
          <p className="burger-menu__item burger-menu__item--watchlist">
            WATCHLIST
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenuModal;
