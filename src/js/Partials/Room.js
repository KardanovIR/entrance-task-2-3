import React, {Component} from 'react';


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
				{/*<div className="schedule-event-item" style="width: 15%; left: 25%">*/}
				{/*<div className="schedule-event-popover">*/}
				{/*<div className="schedule-popover-body">*/}
				{/*<div className="schedule-popover-header">*/}
				{/*<span>Рассуждения о высоком</span>*/}
				{/*<span className="schedule-popover-close"></span>*/}
				{/*</div>*/}
				{/*<div className="schedule-popover-content">*/}
				{/*Блша бла бла*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
			</div>
		)
	}
}

export default Room;