import React, {Component} from 'react';
import Timeline from './Timeline'
import Dividers from './Dividers';
import DatePicker from './DatePicker';
import moment from 'moment';


import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import FloorsListWithData from './Components/FloorsList'

import '../css/schedule.css';


// document.addEventListener("DOMContentLoaded", function () {

// document.getElementsByClassName('schedule-wrapper').item(0).addEventListener('scroll', function (e) {
// 	if (e.srcElement.scrollLeft > 140) {
// $('.schedule-room-info').addClass('--title-floating');
// } else {
// $('.schedule-room-info').removeClass('--title-floating');
// }
// }, false);
// });

export default class Schedule extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			selected_day: moment(),
			is_modal_open: false,
			Modal: null
		};
	}
	
	setSelectedDay = (direction) => {
		let _current = this.state.selected_day.clone();
		_current.subtract(direction, 'days');
		this.setState({
			selected_day: _current
		});
	};
	
	
	render() {
		return (
			<div>
				<main>
					<DatePicker onChange={this.setSelectedDay} selectedDay={this.state.selected_day}/>
					<div className="schedule-wrapper">
						<div className="schedule-container">
							<Timeline/>
							<Dividers/>
							<FloorsListWithData date={this.state.selected_day.format()}/>
						</div>
					</div>
				</main>
				<footer/>
				{/*{*/}
				{/*(this.state.is_modal_open) ?*/}
				{/*<ModalWrapper render={this.state.modal}/> : ''*/}
				{/*}*/}
				<div className="modal-overlay">
					<div className="modal" role="dialog" aria-modal="true" id="event-added">
						<div className="modal-icon icon-success"/>
						<div className="modal-title">Встреча создана!</div>
						<div className="modal-text">14 декабря, 15:00 - 17:00</div>
						<div className="modal-footer">
							<div className="button-container">
								<a href="#" className="button button-default">Хорошо</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}