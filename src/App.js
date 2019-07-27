import React, { useState, useEffect } from "react";
import "./App.css";

const getFriends = async (url, callback) => {
  const response = await fetch(url);
  const friends = await response.json();

  console.log(`friends`, friends);
  callback(friends);
};

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends(`https://jsonplaceholder.typicode.com/users`, setFriends);
  }, []);

  return (
    <div className="App">
      {friends.length > 0 && friends.map(friend => <h1 key={friend.id}>{friend.name}</h1>)}
    </div>
  );
}

export default App;
