import React from "react";
import Navbar from "./components/Navbar";
import BackgroundImg from "./assets/images/background-image.jpg";

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
