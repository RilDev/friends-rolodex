import React from "react";
import "./card-list.style.css";
import Card from '../card/card.component';

const CardList = props => (
	<div className="card-list">
		{props.friends.map(friend => <Card key={friend.id} friend={friend} />)}
	</div>
);

export default CardList;
