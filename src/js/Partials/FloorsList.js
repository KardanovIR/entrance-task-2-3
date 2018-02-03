import React, {Component} from 'react';

import Floor from './Floor'
import moment from "moment/moment";
import {graphql} from "react-apollo/index";
import gql from "graphql-tag";


const FloorsList = ({ data: {loading, error, rooms }}) => {
	
	if (loading) {
		return <p>Loading ...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	let floors = {};
	rooms.forEach((room) => {
		if (!floors.hasOwnProperty(room.floor)) {
			floors[room.floor] = {
				rooms: []
			}
		}
		floors[room.floor].rooms.push(room);
	});
	
	return Object.keys(floors).map((key) => <Floor key={key} name={key} rooms={floors[key].rooms}/>)
	
};

const getRoomsWithEvents = gql`
	   query getRoomsWithEvents{
	      rooms{
	        id,
	        title,
	        capacity,
	        floor
	      }
			}
	 `;

const FloorsListWithData =
	graphql(getRoomsWithEvents, {
		options: {
			variables: {date: moment().format()}
		}
	})(FloorsList);

export default FloorsListWithData