import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = async () => {
    const data = await fetch("http://localhost:8080/friends");
    const datajson = await data.json();
    this.setState({
      friends: [...datajson]
    });
  };

  render() {
    return (
      <div className="Friends">
        {this.state.friends.map(friend => (
          <Fragment key={friend.id}>
            <h1>{friend.image}</h1>
            <Link
              //   to={`/friends/${friend.friendName.replace(/\s+/g, "")}`}
              to={`/friends/${friend.id}`}
            >
              <p>{friend.friendName}</p>
            </Link>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Friends;
