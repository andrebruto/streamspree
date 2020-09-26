import React from "react";
import moment from "moment";

const MovieDetailsComments = ({ comments, postComment }) => {
  return (
    <div className="details-comments">
      <h1 className="details-comments__title">Comments:</h1>
      <form className="details-comments__form" onSubmit={postComment}>
        <input
          className="details-comments__user"
          name="name"
          placeholder="Name"
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
      {comments.map((comment) => {
        const unixDate = new Date(comment.created_at);
        const timeFromNow = moment(unixDate).fromNow();
        return (
          <div key={comment.id} className="details-comments__comment">
            <div className="details-comments__comment-container">
              <div className="details-comments__comment-titleBlock">
                <h5 className="details-comments__comment-username">
                  {comment.name}
                </h5>
              </div>
              <p className="details-comments__comment-date">{timeFromNow}</p>
            </div>
            <p className="details-comments__comment-text">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetailsComments;
