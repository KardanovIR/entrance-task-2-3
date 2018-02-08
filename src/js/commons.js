
export function addEventListener(to_element, event_type, handler) {
	if (!to_element.attachedEvents) {
		to_element.attachedEvents = {}
	}
	if (!to_element.attachedEvents[event_type]) {
		to_element.attachedEvents[event_type] = [];
	}
	
	const is_handler_attached = to_element.attachedEvents[event_type].reduce((is_handler_attached, h) => (is_handler_attached || h===handler), false);
	
	if (!is_handler_attached) {
		if (to_element.addEventListener) {
			to_element.addEventListener(event_type, handler);
		} else {
			to_element.attachEvent(`on${event_type}`, handler);
		}
		
		to_element.attachedEvents[event_type].push(handler);
	}
	
	return handler;
}

export function removeEventListener(to_element, event_type, handler) {
	function deleteEvent(handler) {
		if (to_element.removeEventListener) {
			to_element.removeEventListener(event_type, handler);
		} else {
			to_element.detachEvent(`on${event_type}`, handler);
		}
	}
	
	if (handler) {
		deleteEvent(handler);
		if (to_element.attachedEvents && to_element.attachedEvents[event_type]) {
			to_element.attachedEvents[event_type] = to_element.attachedEvents[event_type].filter(h => h !== handler);
		}
	} else {
		to_element.attachedEvents[event_type] = to_element.attachedEvents[event_type].filter(handler => {
			deleteEvent(handler);
			
			return false;
		});
	}
	
	return to_element;
}