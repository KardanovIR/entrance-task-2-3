import React, {Component} from 'react';
import Timeline from './Timeline'
import Dividers from './Dividers';

import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


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

const roomsListQuery = gql`
   {
        rooms {
          id,
          title,
          capacity,
          floor
        }
   }
 `;

const FloorsList = ({data}) => {
	console.log(data);
	if (data) {
		return <ul>
			{data.map(ch => <li key={ch.id}>{ch.name}</li>)}
		</ul>;
	}else{
		return <ul/>;
	}
};


export default class Schedule extends Component {
	
	
	constructor(props) {
		super(props);
		
		this.state = {
			is_modal_open: false,
			Modal: null,
		};
		
	}
	
	render() {
		return (
			<div>
				<FloorsList/>
				<main>
					<div className="date-picker-wrapper">
						<div className="date-picker">
							<span className="icon-button sidebar-date-chevron-left"></span>
							<div className="date-picker-inner">
								<span className="date-picker-text">14 дек </span>
								<span className="date-picker-separator">&nbsp;·&nbsp;</span>
								<span className="date-picker-dayname">Сегодня</span>
								<div className="date-picker-calendar">
								</div>
							</div>
							<span className="icon-button sidebar-date-chevron-right"></span>
						</div>
					</div>
					<div className="schedule-wrapper">
						<div className="schedule-container">
							<Timeline/>
							<Dividers/>
							<div className="schedule-floor-wrapper">
								<div className="schedule-floor-title">
									<div className="sidebar-floor-title">7 этаж</div>
								</div>
								<div className="schedule-room">
									<div className="schedule-room-info">
										<div className="sidebar-room-title">Ржавый Фред</div>
										<div className="sidebar-room-subtitle">3-6 человек</div>
									</div>
									
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
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
								</div>
								<div className="schedule-room">
									<div className="schedule-room-info">
										<div className="sidebar-room-title">Прачечная</div>
										<div className="sidebar-room-subtitle">до 10 человек</div>
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
								</div>
								<div className="schedule-room">
									<div className="schedule-room-info">
										<div className="sidebar-room-title">Жёлтый дом</div>
										<div className="sidebar-room-subtitle">до 10 человек</div>
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
								</div>
								<div className="schedule-room schedule-room-disabled">
									<div className="schedule-room-info">
										<div className="sidebar-room-title">Оранжевый тюльпан</div>
										<div className="sidebar-room-subtitle">до 10 человек</div>
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
									<div className="schedule-room-hour">
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer>
				
				</footer>
				{/*{*/}
				{/*(this.state.is_modal_open) ?*/}
				{/*<ModalWrapper render={this.state.modal}/> : ''*/}
				{/*}*/}
				<div className="modal-overlay">
					<div className="modal" role="dialog" aria-modal="true" id="event-added">
						<div className="modal-icon icon-success"></div>
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