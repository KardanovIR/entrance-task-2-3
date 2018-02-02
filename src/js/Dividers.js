import React from 'react';
import CurrentTime from './CurrentTime';

const Dividers = () => {
	const n = 24;
	return (
		<div className="timeline-dividers-container">
			<CurrentTime/>
			{[...Array(n)].map((e, i) => <div className="timeline-vertical-divider" key={i}/>)}
		</div>)
};

export default Dividers;