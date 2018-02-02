import React from 'react';


const Timeline = () => {
	const n = 24;
	return (
		<div className="timeline">
			{[...Array(n)].map((e, i) => <div className="timeline-item" key={i}>{i}</div>)}
		</div>)
};

export default Timeline;