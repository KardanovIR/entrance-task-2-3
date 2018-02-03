import React, {Component} from 'react';
import Events from "./Event";


class Room extends Component {
	
	constructor(props, context) {
		super(props, context);
		this.room = props.room;
	}
	
	render() {
		return (
			<div className="schedule-room" key={this.room.id}>
				<div className="schedule-room-info">
					<div className="sidebar-room-title">{this.room.title}</div>
					<div className="sidebar-room-subtitle">{this.room.capacity} человек</div>
				</div>
				{
					[...Array(24)].map((e, i) => <div className="schedule-room-hour" key={i}/>)
				}
				<Events items={this.room.events}/>
			</div>
		)
	}
}

export default Room;