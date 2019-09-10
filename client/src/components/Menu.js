import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";
import feed from "./images/feed2.png";

function Menu() {
  return (
    <div className="Menu">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={feed} alt="feed" />
          <p>Home</p>
        </Link>
      </div>

      <div>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <img src={require("./images/profile.png")} alt="profile" />
          <p>Profile</p>
        </Link>
      </div>

      <div>
        <Link to="/friends" style={{ textDecoration: "none" }}>
          <img src={require("./images/friends.png")} alt="friends" />
          <p>Friends</p>
        </Link>
      </div>

      <div>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <img src={require("./images/settings.png")} alt="settings" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
