import React, {Component} from 'react';
import Events from "./Event";


class Room extends Component {
	
	render() {
		const {room} = this.props;
		return (
			<div className="schedule-room" key={room.id}>
				<div className="schedule-room-info">
					<div className="sidebar-room-title">{room.title}</div>
					<div className="sidebar-room-subtitle">{room.capacity} человек</div>
				</div>
				{
					[...Array(24)].map((e, i) => <div className="schedule-room-hour" key={i}/>)
				}
				<Events items={room.events}/>
			</div>
		)
	}
}

export default Room;