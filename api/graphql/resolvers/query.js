'use strict';

const {models} = require('../../models');

module.exports = {
	event(root, {id}) {
		return models.Event.findById(id);
	},
	events(root, args, context) {
		return models.Event.findAll();
	},
	user(root, {id}) {
		return models.User.findById(id);
	},
	users() {
		return models.User.findAll();
	},
	room(root, {id}) {
		return models.Room.findById(id);
	},
	rooms(root, args, context) {
		return models.Room.findAll();
	}
};
