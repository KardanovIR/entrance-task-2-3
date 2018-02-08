import React, {Component, Fragment} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Modal from './Modal'
import MultiSelectInput from './MultiSelectInput';
import MaskedInput from 'react-maskedinput'

import '../css/add.css';


export default class extends React.Component {
	state = {
		selected_room: null
	};
	
	saveEvent = () => {
		const values = Object.keys(this.refs).reduce((values, key) => {
			values[key] = this.refs[key].value;
			
			return values;
		}, {});
		
		
		
		console.log(values);
	};
	
	render() {
		debugger;
		
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
															ref={component => this.refs.start_time = component.input}
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
															ref={component => this.refs.end_time = component.input}
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
									options={[
										{
											login: 'inal',
											avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
											homeFloor: 2
										},
										{
											login: 'aram',
											avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
											homeFloor: 1
										},
										{
											login: 'evendate',
											avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
											homeFloor: 0
										},
										{
											login: 'veged',
											avatarUrl: 'https://avatars3.githubusercontent.com/u/15365?s=460&v=4',
											homeFloor: 0
										},
										{
											login: 'alt-j',
											avatarUrl: 'https://avatars1.githubusercontent.com/u/3763844?s=400&v=4',
											homeFloor: 3
										},
										{
											login: 'yeti-or',
											avatarUrl: 'https://avatars0.githubusercontent.com/u/1813468?s=460&v=4',
											homeFloor: 2
										}
									]}
									render={({Input, options, selected, clearSelected}) => (
										<div className="form-control --m-padding-top-16 --substrate">
											<label className="form-label">
												<span>Участники</span>
												<Input className="form-input" placeholder="Например, Тор Одинович"/>
											</label>
											<div className="form-chosen-wrapper">
												{
													selected.map((item, i) => (
														<div key={item.login} className="form-chosen-item">
															<img className="form-chosen-item-img" height={24} width={24} src={item.avatarUrl} />
															<span className="form-chosen-item-name">{item.login}</span>
															<span className="form-chosen-item-remove" onClick={
																() => clearSelected(options.findIndex(option => option.login === item.login))
															} />
														</div>
													))
												}
											</div>
										</div>
									)}
								/>
							</div>
							<div className="flex-cell">
								<div className="rooms-wrapper --substrate">
									<label className="form-label">
										<span>Рекомендованные переговорки</span>
									</label>
									<div className="room --active">
										<div className="room-main">
											<b className="room-times">16:00—16:30</b>
											<span className="room-name">Готем · 4 этаж</span>
										</div>
										<span className="room-remove">
											<svg width="10" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<g>
													<path className="room-remove-icon" d="M5.02 3.621L2.193.793A1 1 0 1 0 .778 2.207l2.829 2.829L.778 7.864a1 1 0 1 0 1.414 1.414L5.021 6.45l2.828 2.828a1 1 0 0 0 1.414-1.414L6.435 5.036l2.828-2.829A1 1 0 1 0 7.85.793L5.021 3.62z"/>
												</g>
											</svg>
										</span>
									</div>
									<div className="room">
										<div className="room-main">
											<b className="room-times">16:00—16:30</b>
											<span className="room-name">Готем · 4 этаж</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<footer>
							<div className="footer add_footer --substrate">
								<button type="button" className="footer-button button-gray">Отмена</button>
								<button type="button" className="footer-button --footer-delete-button button-gray">Удалить встречу</button>
								<button type="button" className="footer-button button-gray show-event-added" onClick={this.saveEvent}>Сохранить</button>
							</div>
						</footer>
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