import React, {Component} from 'react';
import moment from "moment";


class Events extends Component {
	
	constructor(props, context) {
		super(props, context);
		this.items = props.items;
	}
	
	render() {
		return this.items.map((event, i) => {
			const sec_in_day = 86400;
			const start_date = moment(event.dateStart);
			const end_date = moment(event.dateEnd);
			const day_start = start_date.clone().startOf('day');
			const diff_since_mn = start_date.diff(day_start, 'seconds');
			const left = diff_since_mn / sec_in_day * 100;
			const diff_between = Math.abs(end_date.diff(start_date, 'seconds'));
			let width = diff_between / sec_in_day * 100;
			if ((width + left) > 100){
				width = 100 - left;
			}
			
			return <div className="schedule-event-item" style={{width: width + '%', left: left + '%'}} key={i}>
				<div className="schedule-event-popover">
					<div className="schedule-popover-body">
						<div className="schedule-popover-header">
							<span>{event.title}</span>
							<span className="schedule-popover-close"/>
						</div>
						<div className="schedule-popover-content">
							{start_date.format()}
						</div>
					</div>
				</div>
			</div>
		})
	}
}

export default Events;