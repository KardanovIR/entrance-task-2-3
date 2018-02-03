'use strict';

const GraphQLDate = require('graphql-date');
const Sequelize = require('sequelize');


const query = require('./query');
const mutation = require('./mutation');

module.exports = function resolvers() {
	return {
		Query: query,
		Mutation: mutation,
		Event: {
			users(event) {
				return event.getUsers();
			},
			room(event) {
				return event.getRoom();
			}
		},
		Room: {
			events(room, a, b, c) {
				let where_clause = {};
				if (c.variableValues.hasOwnProperty('date')) {
					const date_string = c.variableValues.date;
					where_clause = {where:
							{
								$or:
									[
										Sequelize.where(Sequelize.fn('DATE', Sequelize.col('dateStart')), Sequelize.fn('DATE', date_string)),
										Sequelize.where(Sequelize.fn('DATE', Sequelize.col('dateEnd')), Sequelize.fn('DATE', date_string)),
									]
							}
					};
					console.log(where_clause);
				}
				return room.getEvents(where_clause);
			}
		},
		Date: GraphQLDate
	};
};
