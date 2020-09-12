import React from "react";

const MovieDetailsComments = () => {
  return (
    <div className="details-comments">
      <h1 className="details-comments__title">Comments:</h1>
      <form className="details-comments__form" action="" method="post">
        <input
          className="details-comments__user"
          name="message"
          placeholder="Name"
        ></input>
        <input
          className="details-comments__user"
          name="message"
          placeholder="Email"
        ></input>
        <textarea
          className="details-comments__input"
          name="message"
          placeholder="Write comment here"
        ></textarea>
        <button className="details-comments__btn" type="submit">
          COMMENT
        </button>
      </form>
      <div className="details-comments__comment">
        <div className="details-comments__comment-container">
          <div className="details-comments__comment-titleBlock">
            <h5 className="details-comments__comment-username">Name</h5>
            <h6 className="details-comments__comment-email">email@email.com</h6>
          </div>
          <p className="details-comments__comment-date">09/18/2020</p>
        </div>
        <p className="details-comments__comment-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          integer eget aliquet nibh praesent. Lacus vestibulum sed arcu non odio
          euismod lacinia at quis. Amet aliquam id diam maecenas. Lacus sed
          viverra tellus in.
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsComments;
