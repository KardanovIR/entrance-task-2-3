import React from "react";
import moment from 'moment'

class DatePicker extends React.Component {
	
	getFormattedDate = () => {
		return this.moment_day.format('DD MMM');
	};
	
	getDayName = () => {
		if (this.moment_day.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
			return 'Сегодня';
		} else if (this.moment_day.format('YYYY-MM-DD') === moment().add(1, 'days').format('YYYY-MM-DD')) {
			return 'Завтра';
		} else {
			return this.moment_day.format('dddd');
		}
	};
	
	next = () => {
		this.props.onChange(1);
	};
	
	prev = () => {
		this.props.onChange(-1);
	};
	
	render() {
		this.moment_day = this.props.selectedDay;
		
		return (
			<div className="date-picker-wrapper">
				<div className="date-picker">
					<span className="icon-button sidebar-date-chevron-left" onClick={this.next}/>
					<div className="date-picker-inner">
						<span className="date-picker-text">{this.getFormattedDate()} </span>
						<span className="date-picker-separator">&nbsp;·&nbsp;</span>
						<span className="date-picker-dayname">{this.getDayName()}</span>
						<div className="date-picker-calendar">
						</div>
					</div>
					<span className="icon-button sidebar-date-chevron-right" onClick={this.prev}/>
				</div>
			</div>
		);
	}
}

export default DatePicker;