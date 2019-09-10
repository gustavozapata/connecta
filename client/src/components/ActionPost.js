import React from "react";

import "./styles/ActionPost.css";
import like from "./images/like.png";

function ActionPost(props) {
  return (
    <div className="ActionPost">
      <div className="button-action" onClick={props.handleLikes}>
        <img src={like} alt="likes" />
        <p>Like</p>
      </div>

      <div className="button-action" onClick={props.handleDislikes}>
        <img id="dislike" src={like} alt="dislikes" />
        <p>Dislike</p>
      </div>

      <h4>Comment</h4>
      <textarea></textarea>
      <br />
      <button>Publish</button>
    </div>
  );
}

export default ActionPost;
