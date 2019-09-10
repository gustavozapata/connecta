import React, { Component } from "react";
import axios from "axios";

import Post from "./Post";

import "./styles/Home.css";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    axios.get("http://localhost:8080/").then(res => {
      this.setState({
        posts: [...res.data]
      });
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        {this.state.posts.map(item => (
          <Post key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Home;
