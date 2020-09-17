import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/stream-spree-v2.svg";
import BurgerMenu from "../components/BurgerMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img className="navbar__logo" src={logo} alt="stream spree logo" />
        <Link to="/">
          <h2 className="navbar__title">
            Stream<span className="navbar__title--light">Spree</span>
          </h2>
        </Link>
      </div>
      <div className="navbar__subcontainer">
        <Link to="/">
          <p className="navbar__menu-item">HOME</p>
        </Link>
        <Link to="/playlist/1">
          <p className="navbar__menu-item">WATCHLIST</p>
        </Link>
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
