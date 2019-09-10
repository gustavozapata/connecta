import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    user: {
      fullName: "",
      since: "",
      premium: false,
      likes: 0,
      dislikes: 0
    }
  };

  componentDidMount() {
    axios.get("http://localhost:8080/profile").then(res => {
      this.setState({
        user: {
          fullName: `${res.data.firstName} ${res.data.lastName}`,
          since: res.data.memberSince,
          premium: res.data.isPremium,
          likes: res.data.likes,
          dislikes: res.data.dislikes
        }
      });
    });
  }

  render() {
    return (
      <div className="Profile">
        <h1>My Profile</h1>
        <h4>Full name</h4>
        <p>{this.state.user.fullName}</p>
        <h4>Member since</h4>
        <p>{this.state.user.since}</p>
        <h4>Membership</h4>
        {!this.state.user.Premium ? <p>Regular</p> : <p>Premium</p>}
        <p>Likes: {this.state.user.likes}</p>
        <p>Dislikes: {this.state.user.dislikes}</p>
      </div>
    );
  }
}

export default Profile;
