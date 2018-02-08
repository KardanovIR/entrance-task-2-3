import React, { Component } from 'react';
import './MultiSelectInputOption.css';

export default class Option extends Component {
	clickHandler = () => {
		const {
			item,
			onChoose,
		} = this.props;
		
		return onChoose(item.id);
	};
	
	hoverHandler = () => {
		const {
			item,
			isHovered,
			onHover,
		} = this.props;
		
		if (!isHovered) {
			
			return onHover(item.id);
		}
	};
	
	render() {
		const {
				item,
				isHovered,
				innerRef,
			} = this.props,
			classes = ['multiselect_dropdown_item'];
		
		if (isHovered) {
			classes.push('--hovered');
		}
		
		return (
			<li
				key={item.id}
				ref={isHovered ? innerRef : () => {}}
				className={classes.join(' ')}
				onMouseEnter={this.hoverHandler}
				onMouseMove={this.hoverHandler}
				onClick={this.clickHandler}
			>
				<img className="multiselect_dropdown_item_img" src={item.avatarUrl} width={24} height={24} />
				<div className="multiselect_dropdown_item_main">
					<span className="multiselect_dropdown_item_login">{item.login}</span>
					<span className="multiselect_dropdown_item_floor">· {item.homeFloor} этаж</span>
				</div>
			</li>
		);
	}
}