import React from "react";
import PlaylistItem from "../components/PlaylistItem.jsx";

const Playlist = () => {
  return (
    <div className="playlist">
      <h1 className="playlist__title">Playlist</h1>
      <div className="playlist__container">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </div>
    </div>
  );
};

export default Playlist;
