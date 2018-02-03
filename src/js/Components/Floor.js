import React, {Component} from 'react';
import Room from "./Room";

export default class Floor extends Component {
	
	render() {
		const {rooms, name} = this.props;
		return (
			<div className="schedule-floor-wrapper">
				<div className="schedule-floor-title">
					<div className="sidebar-floor-title">{name} этаж</div>
				</div>
				{
					rooms.map((room) => <Room key={room.id} room={room}/>)
				}
			</div>
		)
	}
}