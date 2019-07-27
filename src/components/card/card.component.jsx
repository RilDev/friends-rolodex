import React from 'react';
import './card.style.css';

const Card = props => (
	<div class="card-container">
		<img src={`https://robohash.org/${props.friend.email}?set=set5&size=180x180`} />
	  <h2>{props.friend.name}</h2>
	  <p>{props.friend.email}</p>
  </div>
);

export default Card;