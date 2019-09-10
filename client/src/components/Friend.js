import React, { useState, useEffect } from "react";

function Friend({ match }) {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const fetchFriend = async () => {
      const fetchFriend = await fetch(
        `http://localhost:8080/friends/${match.params.id}`
      );
      const item = await fetchFriend.json();
      setFriend(item);
    };
    fetchFriend();
  }, [match]);

  return (
    <div className="Friend">
      <h1>{friend.friendName}</h1>
      <h1>{friend.image}</h1>
      <p>{friend.born}</p>
      <p>
        <b>Friends since:</b> <i>{friend.since}</i>
      </p>
    </div>
  );
}

export default Friend;
