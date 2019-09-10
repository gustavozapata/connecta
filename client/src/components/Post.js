import React, { Component } from "react";

import ActionPost from "./ActionPost";

import "./styles/Post.css";

class Post extends Component {
  state = {
    hasLiked: false,
    hasDisliked: false,
    likes: this.props.item.likes,
    dislikes: this.props.item.dislikes
  };

  handleLikes = () => {
    if (!this.state.hasLiked) {
      this.setState({
        hasLiked: true,
        likes: this.state.likes + 1
      });
    }
  };

  handleDislikes = () => {
    if (!this.state.hasDisliked) {
      this.setState({
        hasDisliked: true,
        dislikes: this.state.dislikes + 1
      });
    }
  };

  render() {
    return (
      <div className="Post">
        <h2>{this.props.item.name}</h2>
        <img src={require(`./images/${this.props.item.image}`)} alt="Post" />
        <p>Likes: {this.state.likes}</p>
        <p>Dislikes: {this.state.dislikes}</p>
        <ActionPost
          handleLikes={this.handleLikes}
          handleDislikes={this.handleDislikes}
        />
        <div className="post-comments"></div>
      </div>
    );
  }
}

export default Post;
