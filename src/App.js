import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from './components/card-list/card-list.component';

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
      <CardList friends={friends} />
    </div>
  );
}

export default App;
