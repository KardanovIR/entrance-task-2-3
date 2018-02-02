import React, { Fragment } from 'react';
import Fuse from 'fuse.js';

import './index.css';

export default class extends React.Component {
	state = {
		input_value: '',
		dropdown_opened: false,
		selected: []
	};
	
	inputChangeHandler = e => {
		this.setState({
			input_value: e.target.value
		});
	};
	
	inputFocusHandler = e => {
		this.setState({
			dropdown_opened: true
		});
	};
	
	inputBlurHandler = e => {
		this.setState({
			dropdown_opened: false
		});
	};
	
	
	Input = props => {
		const fuse = new Fuse(this.props.options, {
		
		}),
			{input_value, dropdown_opened} = this.state,
			{options} = this.props;
		
		function renderItems(item) {
			
			return (
				<div key={item} className="multiselect_dropdown_item">{item}</div>
			);
		}
		
		return (
			<Fragment>
				<input
					{...props}
					onChange={this.inputChangeHandler}
					onFocus={this.inputFocusHandler}
					onBlur={this.inputBlurHandler}
				/>
				<div className={['multiselect_dropdown_wrapper'].concat(dropdown_opened ? '--show' : '').join(' ')}>
					{
						input_value ?
						fuse.search(input_value).map(i => renderItems(options[i])) :
						options.map(renderItems)
					}
				</div>
			</Fragment>
		);
	};
	
	render() {
		const { render } = this.props;
		
		return render({
			Input: this.Input,
			selected: this.state.selected
		});
	}
}

