import React, {Component} from 'react';
import Room from "./Room";

export default class Floor extends Component {
	
	constructor(props, context) {
		super(props, context);
		this.rooms = props.rooms;
		this.name = props.name;
	}
	
	render() {
		return (
			<div className="schedule-floor-wrapper">
				<div className="schedule-floor-title">
					<div className="sidebar-floor-title">{this.name} этаж</div>
				</div>
				{
					this.rooms.map((room) => <Room key={room.id} room={room}/>)
				}
			</div>
		)
	}
}