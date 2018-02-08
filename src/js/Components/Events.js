import React, {Component} from 'react';
import moment from "moment";
import Popover from 'react-popover'

class Events extends Component {
	
	render() {
		return this.props.items.map((event, i) => {
			const sec_in_day = 86400;
			const start_date = moment(event.dateStart);
			const end_date = moment(event.dateEnd);
			const day_start = start_date.clone().startOf('day');
			const diff_since_mn = start_date.diff(day_start, 'seconds');
			const left = diff_since_mn / sec_in_day * 100;
			const diff_between = Math.abs(end_date.diff(start_date, 'seconds'));
			let width = diff_between / sec_in_day * 100;
			if ((width + left) > 100) {
				width = 100 - left;
			}
			return <div
				className="schedule-event-item" style={{width: width + '%', left: left + '%'}} key={i}>
				<Popover
					className="schedule-event-popover"
					preferPlace={'below'}
					body={
						<div>
							<div className="schedule-popover-title">{event.title}</div>
							<div className="schedule-popover-text">
								{start_date.format('DD MMMM')} <span>&nbsp;·&nbsp;</span> {start_date.format('HH:mm')} - {end_date.format('HH:mm')}
							</div>
						</div>
					}
					place={'below'}/>
			</div>
		})
	}
}

export default Events;