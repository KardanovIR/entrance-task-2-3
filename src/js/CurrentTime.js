import React from "react";

class CurrentTime extends React.Component {
	
	constructor(props) {
		super(props);
		
		const now = new Date();
		this.today = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0, 0, 0);
		
		this.getParentElement = props.getParentElement;
		this.state = {
			time: this.getCurrentTimeFormatted()
		};
	}
	
	getCurrentTimeFormatted() {
		let pad = (n) => {
			return n < 10 ? '0' + n : n
		};
		return (pad(new Date()).getHours()) + ':' + pad((new Date()).getMinutes())
	}
	
	calculateCurrentTimeLeft() {
		if (this.getParentElement() === undefined) return '';
		const ms_in_day = 86400000;
		const now = new Date();
		const time_diff = now.getTime() - this.today.getTime();
		const timeline_width = this.getParentElement().offsetWidth;
		const parent_width = this.getParentElement().parentElement.offsetWidth;
		const left_offset = parent_width - timeline_width;
		const element_width = 49;
		return ((time_diff / ms_in_day * timeline_width) + left_offset) - (element_width / 2);
	}
	
	componentDidMount() {
		window.setInterval(() => {
			this.setState({
				time: this.getCurrentTimeFormatted()
			})
		}, 1000);
	}
	
	render() {
		return (
			<div className="current-time-wrapper"  style={{left: this.calculateCurrentTimeLeft()}}>
				<div className="current-time-item">
					<span>{this.state.time}</span>
				</div>
			</div>
		);
	}
}

export default CurrentTime;