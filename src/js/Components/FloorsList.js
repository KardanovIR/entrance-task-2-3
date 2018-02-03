import React, {Component} from 'react';

import Floor from './Floor'
import {withApollo} from "react-apollo";
import {graphql} from "react-apollo/index";
import gql from "graphql-tag";


class FloorsList extends Component {
	
	constructor(props, context) {
		super(props);
		this.prev_rooms = [];
	}
	
	componentWillUpdate() {
		this.prev_rooms = this.props.data.rooms;
	}
	
	render() {
		let floors = {};
		let rooms;
		let {data} = this.props;
		if (data.loading) {
			rooms = this.prev_rooms;
		} else {
			rooms = data.rooms;
		}
		
		rooms.forEach((room) => {
			if (!floors.hasOwnProperty(room.floor)) {
				floors[room.floor] = {
					rooms: []
				}
			}
			floors[room.floor].rooms.push(room);
		});
		
		return Object.keys(floors).map((key) => <Floor key={key} name={key} rooms={floors[key].rooms}/>)
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

const FloorsListWithData = withApollo(graphql(getRoomsWithEvents, {
	fetchPolicy: 'network-only',
	options: ({date}) => ({variables: {date}}),
	props: ({ownProps, data}) => ({
		data: data,
		ownProps: ownProps
	}),
})(FloorsList));


export default FloorsListWithData