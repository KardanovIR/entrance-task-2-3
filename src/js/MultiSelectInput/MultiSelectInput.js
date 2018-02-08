import React, { Component, Fragment } from 'react';
import Fuse from 'fuse.js';
import {removeEventListener, addEventListener} from '../commons';
import MultiSelectInputOption from './MultiSelectInputOption';
import './MultiSelectInput.css';

const KEYS = {
	TAB: 9,
	ESC: 27,
	ENTER: 13,
	ARROW_UP: 38,
	ARROW_DOWN: 40,
};

export default class MultiSelectInput extends Component {
	state = {
		filtered_options: this.props.options.map((option, id) => ({
			...option,
			id
		})),
		hovered_item_id: 0,
		input_value: '',
		dropdown_opened: false,
		selected: []
	};
	
	componentDidMount() {
		if (this.state.dropdown_opened) {
			this.bindClickOutside();
		}
	}
	
	componentDidUpdate() {
		this.scrollToHovered();
	}
	
	componentWillUnmount() {
		this.unbindClickOutside();
	}
	
	filterOptions(input_value, selected) {
		const {options} = this.props;
		
		const filtered_options = options.reduce((new_array, option, id) => {
			if (selected.indexOf(id) === -1) {
				new_array.push({
					...option,
					id
				});
			}
			
			return new_array;
		}, []);
		
		if (input_value) {
			
			return (new Fuse(filtered_options, {
				keys: [
					'login',
				]
			})).search(input_value);
		}
		
		return filtered_options;
	};
	
	scrollToHovered() {
		const {hovered_item, dropdown} = this,
			viewport_height = 136;
		
		if (hovered_item) {
			if (hovered_item.offsetTop < dropdown.scrollTop) {
				dropdown.scrollTop = hovered_item.offsetTop;
			}
			
			if (dropdown.scrollTop + viewport_height < hovered_item.offsetTop + hovered_item.offsetHeight) {
				dropdown.scrollTop = (hovered_item.offsetTop + hovered_item.offsetHeight) - viewport_height;
			}
		}
	}
	
	handleClickOutside = event => {
		if (!(!(this.input && !this.input.contains(event.target)) || !(this.dropdown && !this.dropdown.contains(event.target)))) {
			this.closeDropdown();
		}
	};
	
	bindClickOutside() {
		addEventListener(document, 'mousedown', this.handleClickOutside);
	}
	
	unbindClickOutside() {
		removeEventListener(document, 'mousedown', this.handleClickOutside);
	}
	
	openDropdown = () => {
		if (!this.state.dropdown_opened) {
			this.bindClickOutside();
			this.setState({
				dropdown_opened: true
			});
		}
	};
	
	closeDropdown = () => {
		this.unbindClickOutside();
		this.setState({
			dropdown_opened: false
		});
	};
	
	keyDownListener = event => {
		const {dropdown_opened, filtered_options, hovered_item_id} = this.state,
			max_index = filtered_options.length - 1,
			current_index = filtered_options.findIndex(option => option.id === hovered_item_id),
			has_results = max_index > 0;
		
		switch (event.which) {
			case KEYS.TAB:
			case KEYS.ESC: {
				this.closeDropdown();
				break;
			}
			case KEYS.ENTER: {
				if (dropdown_opened && has_results) {
					event.preventDefault();
					this.chooseItem(hovered_item_id);
				}
				break;
			}
			case KEYS.ARROW_DOWN: {
				event.preventDefault();
				
				if (!dropdown_opened) {
					this.openDropdown();
				} else if (has_results) {
					let next_index = current_index + 1;
					
					if (next_index > max_index) {
						next_index = 0;
					}
					
					this.hoverItem(filtered_options[next_index].id);
				}
				
				break;
			}
			case KEYS.ARROW_UP: {
				event.preventDefault();
				
				if (dropdown_opened && has_results) {
					let next_index = current_index - 1;
					
					if (next_index < 0) {
						next_index = max_index;
					}
					
					this.hoverItem(filtered_options[next_index].id);
				}
				
				break;
			}
		}
	};
	
	getCurrentHoveredIndex(new_filtered_options) {
		const {filtered_options, hovered_item_id} = this.state;
		
		return (new_filtered_options || filtered_options).findIndex(option => option.id === hovered_item_id);
	}
	
	inputChangeHandler = event => {
		const {hovered_item_id, selected} = this.state,
			input_value = event.target.value,
			filtered_options = this.filterOptions(input_value, selected),
			current_index = this.getCurrentHoveredIndex();
		
		this.setState({
			filtered_options,
			hovered_item_id: (current_index === -1 && filtered_options.length) ? filtered_options[0].id : hovered_item_id,
			input_value
		});
	};
	
	hoverItem = hovered_item_id => {
		this.setState({hovered_item_id});
	};
	
	chooseItem = id => {
		const {
				selected,
				filtered_options,
				hovered_item_id,
			} = this.state,
			new_filtered_options = filtered_options.filter(option => option.id !== id),
			current_index = this.getCurrentHoveredIndex(new_filtered_options);
		
		this.setState({
			filtered_options: new_filtered_options,
			hovered_item_id: (current_index === -1 && new_filtered_options.length) ? new_filtered_options[0].id : hovered_item_id,
			selected: [...selected, id]
		}, () => {
			this.input.focus();
		});
	};
	
	clearSelected = clear_id => {
		let selected = [];
		
		if (clear_id != null) {
			selected = this.state.selected.filter(id => id !== clear_id);
		}
		
		this.setState({
			selected,
			filtered_options: this.filterOptions(this.state.input_value, selected)
		});
	};
	
	Input = props => {
		const {
			dropdown_opened,
			filtered_options,
			input_value,
			hovered_item_id,
			selected,
		} = this.state,
			{
				name,
				...rest_props
			} = props;
		
		return (
			<Fragment>
				<input
					{...rest_props}
					ref={element => this.input = element}
					value={input_value}
					onKeyDown={this.keyDownListener}
					onChange={this.inputChangeHandler}
					onFocus={this.openDropdown}
					onClick={this.openDropdown}
				/>
				<input type="hidden" name={name} value={selected} />
				{dropdown_opened && (
					<div className="multiselect_dropdown_wrapper" ref={element => this.dropdown = element}>
						<ul className="multiselect_dropdown_container">
							{
								filtered_options.length ?
								filtered_options.map(item => (
									<MultiSelectInputOption
										key={item.id}
										item={item}
										isHovered={item.id === hovered_item_id}
										innerRef={element => this.hovered_item = element}
										onHover={this.hoverItem}
										onChoose={this.chooseItem}
									/>
								)) :
								<li className="multiselect_dropdown_item --no_results">Нет результатов</li>
							}
						</ul>
					</div>
				)}
			</Fragment>
		);
	};
	
	render() {
		const { render, options } = this.props;
		
		this.Input.displayName = 'MultiSelectInputWrapper';
		
		return render({
			Input: this.Input,
			options: options,
			selected: this.state.selected.map(i => options[i]),
			clearSelected: this.clearSelected
		});
	}
}