import React, { Component } from "react";
import axios from "axios";
import BackgroundImg from "./assets/images/background-image.jpg";

class App extends Component {
  render() {
    return (
      <div className="header">
        <img className="header__img" src={BackgroundImg} />
        <form className="header__form">
          <h1 className="header__label">What do you want to watch today?</h1>
          <div className="header__container">
            <input className="header__input"></input>
            <button className="header__btn">SEARCH</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
