import React, {Component} from 'react';

import Floor from './Floor'
import {graphql} from "react-apollo/index";
import gql from "graphql-tag";


class FloorsList extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		if (this.props.data.loading) {
			return <div/>;
		}
		let floors = {};
		let rooms = this.props.data.rooms;
		rooms.forEach((room) => {
			if (!floors.hasOwnProperty(room.floor)) {
				floors[room.floor] = {
					rooms: []
				}
			}
			floors[room.floor].rooms.push(room);
		});
		return Object.keys(floors).map((key) => <Floor key={key} rooms={floors[key].rooms}/>)
	}
}


const getRoomsWithEvents = gql`
	   query getRoomsWithEvents($date: Date = "2018-02-03T01:58:01.000Z"){
      rooms(events: {date: $date}){
        id,
        title,
        capacity,
        floor,
        events{
          id,
          title,
          dateStart,
          dateEnd,
          users {
		        id,
            login,
		        avatarUrl
          }
        }
      }
		}
	 `;

const FloorsListWithData = graphql(getRoomsWithEvents, {
	options: ({date}) => ({variables: {date}}),
})(FloorsList);


export default FloorsListWithData