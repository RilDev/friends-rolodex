import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from './components/card-list/card-list.component';

const getFriends = async (url, callback) => {
  const response = await fetch(url);
  const friends = await response.json();

  callback(friends);
};

const getSearch = (search, friends) => friends.filter(friend => friend.name.toLowerCase().includes(search.toLowerCase()));

function App() {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getFriends(`https://jsonplaceholder.typicode.com/users`, setFriends);
  }, []);

  useEffect(() => {
    setSearchResult(getSearch(search, friends));
  }, [search, friends]);

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search Friend"
        onChange={e => setSearch(e.target.value)}
      />
      <CardList friends={searchResult} />
    </div>
  );
}

export default App;
