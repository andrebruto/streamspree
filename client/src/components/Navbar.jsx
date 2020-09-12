import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/stream-spree-v2.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="stream spree logo" />
      <Link to="/">
        <h2 className="navbar__title">
          Stream<span className="navbar__title--light">Spree</span>
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
