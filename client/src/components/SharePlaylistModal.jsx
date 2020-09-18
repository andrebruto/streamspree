import React from "react";
import CloseIcon from "../assets/icons/times-solid.svg";

const SharePlaylistModal = ({ hideModal, shareModal }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  if (!shareModal) {
    return <></>;
  }
  {
    return (
      <div className="modal">
        <div className="share-movie">
          <div className="share-movie__container">
            <h1 className="share-movie__title">Share with your friends!</h1>
            <img
              className="share-movie__close-btn"
              src={CloseIcon}
              onClick={hideModal}
            />
          </div>
          <form className="share-movie__form">
            <label className="share-movie__label">
              CLICK THE BUTTON TO COPY YOUR LINK
            </label>
            <button className="share-movie__btn" onClick={copyToClipboard}>
              SHARE
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default SharePlaylistModal;
