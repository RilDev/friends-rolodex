import React from 'react';

const Card = props => (
	<div>
		<img src={`https://robohash.org/${props.friend.email}?set=set5&size=180x180`} />
  	<h2>{props.friend.name}</h2>
  </div>
);

export default Card;