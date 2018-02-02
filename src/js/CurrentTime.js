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
		const ms_in_day = 86400000;
		const now = new Date();
		const time_diff = now.getTime() - this.today.getTime();
		const left_offset = 6.25;
		
		return ((time_diff / ms_in_day * 100) + left_offset) + '%';
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