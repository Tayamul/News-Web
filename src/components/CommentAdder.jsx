import React, { useState } from "react";
import * as api from "../utils/api";
import "./commentAdder.css";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setNewComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSuccessful(true);
    api
      .postComments(article_id, newComment)
      .then((addedComment) => {
        setComments((currComments) => {
          return [...currComments, addedComment];
        });
        setIsSuccessful(false);
      })
      .catch((err) => {
        setIsSuccessful(false);
        setError("Something's gone worng, please refresh the page");
      });
    setNewComment("");
  };

  if (isSuccessful) <p>Posting...</p>;
  if (error) return error;

  return (
    <form onSubmit={submitHandler} className="container form__container">
      <div id="comment-form">
        {/* User avatar goes here */}
        <textarea
          id="add-comment"
          value={newComment}
          onChange={changeHandler}
          type="text"
          placeholder="Add a comment..."
        />
        <button id="post-comment-btn">Post</button>
      </div>
    </form>
  );
};

export default CommentAdder;
