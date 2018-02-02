import React, {Component, Fragment} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import MultiSelectInput from './MultiSelectInput';
import MaskedInput from 'react-maskedinput'

import '../css/add.css';


// $(document).ready(() => {
//
// 	$('.show-event-added').on('click', function () {
// 		new Modal('#event-added');
// 	});
//
// });

export default class extends React.Component {
	
	state = {
		selected_room: null
	};
	
	saveMeeting = () => {
		const values = Object.keys(this.refs).reduce((values, key) => {
			values[key] = this.refs[key].value;
			
			return values;
		}, {});
		
		console.log(values);
	};
	
	render() {
		
		return (
			<div>
				<main>
					<div className="layout">
						<div className="add-title --substrate">
							Редактирование встречи
							<Link to="/">
								<span className="close-button icon-button icon-close" />
							</Link>
						</div>
						
						<div className="flex-grid --m-direction-column --substrate">
							<div className="flex-cell">
								<div className="form-control">
									<label className="form-label">
										<span>Тема</span>
										<input className="form-input" type="text" ref="theme"/>
									</label>
								</div>
							</div>
							<div className="flex-cell">
								<div className="flex-grid --m-direction-column">
									<div className="flex-cell">
										<div className="form-control --m-padding-bottom-8">
											<label className="form-label">
												<span>Дата</span>
												<input className="form-input" type="date" ref="date"/>
											</label>
										</div>
									</div>
									<div className="flex-cell">
										<div className="flex-grid">
											<div className="flex-cell">
												<div className="form-control --d-padding-0 --m-padding-bottom-0">
													<label className="form-label --m-prune">
														<span>Начало</span>
														<MaskedInput
															className="form-input time-input"
															mask="11:11"
															name="card"
															size="5"
															ref={component => {
																this.refs.start_time = component.input;
															}}
														/>
													</label>
												</div>
											</div>
											<div className="flex-cell repulser">
												<span>—</span>
											</div>
											<div className="flex-cell">
												<div className="form-control --d-padding-0 --m-padding-bottom-0">
													<label className="form-label --m-prune">
														<span>Конец</span>
														<MaskedInput
															className="form-input time-input"
															mask="11:11"
															name="card"
															size="5"
															ref={component => {
																this.refs.end_time = component.input;
															}}
														/>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="flex-grid --m-direction-column">
							<div className="flex-cell --m-margin-top-8">
								<MultiSelectInput
									options={['картошка', 'кульбит', 'охлакома', 'люмпен', 'чебоксары']}
									render={({Input, selected}) => (
										<Fragment>
											<div className="form-control --m-padding-top-16 --substrate">
												<label className="form-label">
													<span>Участники</span>
													<Input className="form-input" placeholder="Например, Тор Одинович"/>
												</label>
											</div>
											<div className="form-chosen-wrapper">
												{selected.map(item => (null))}
											</div>
										</Fragment>
									)}
								/>
							</div>
							<div className="flex-cell">
								<div className="rooms-wrapper --substrate">
									<label className="form-label">
										<span>Рекомендованные переговорки</span>
									</label>
									<div className="room --active">
										<b className="room-times">16:00—16:30</b>
										<span className="room-name">Готем · 4 этаж</span>
									</div>
									<div className="room">
										<b className="room-times">16:00—16:30</b>
										<span className="room-name">Готем · 4 этаж</span>
									</div>
								</div>
							</div>
						</div>
						
						<div className="footer button-container --substrate">
							<button type="button" className="footer-button button button-gray">Отмена</button>
							<button type="button" className="footer-button --footer-delete-button button button-gray">Удалить встречу</button>
							<button type="button" className="footer-button button button-gray show-event-added" onClick={this.saveMeeting}>Сохранить</button>
						</div>
					</div>
				</main>
				
				<div className="modal-overlay">
					<div className="modal" role="dialog" aria-modal="true" id="event-added">
						<div className="modal-icon icon-success" />
						<div className="modal-title">Встреча создана!</div>
						<div className="modal-text">14 декабря, 15:00 - 17:00</div>
						<div className="modal-footer">
							<div className="modal-button-container">
								<a href="#" className="button button-default">Хорошо</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};