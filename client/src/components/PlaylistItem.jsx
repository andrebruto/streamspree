import React from "react";
import ImgPlaceholder from "../assets/images/11-avengers_1_orig.jpg";

const PlaylistItem = () => {
  return (
    <div className="playlist-item">
      <img className="playlist-item__poster" src={ImgPlaceholder} />
      <p className="playlist-item__movie-title">Placeholder</p>
      <p className="playlist-item__movie-subtitle">YEAR</p>
      <div>
        <div className="playlist-item__container">
          <button className="playlist-item__btn-remove">REMOVE</button>
          <button className="playlist-item__btn-details">+ DETAILS</button>
          <select className="playlist-item__menu" name="" id="">
            <option className="playlist-item__menu-option" value="">
              Where to Stream?
            </option>
            <option className="playlist-item__menu-option" value="">
              Netflix
            </option>
            <option className="playlist-item__menu-option" value="">
              Amazon P. Video
            </option>
            <option className="playlist-item__menu-option" value="">
              Crave
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
