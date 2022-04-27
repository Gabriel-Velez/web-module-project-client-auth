import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => setFriends(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>FriendsList</h1>
      <ul>
        {friends.map((friend) => {
          return (
            <h3 key={friend.id}>
              {friend.name} - {friend.age} - {friend.email}
            </h3>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
