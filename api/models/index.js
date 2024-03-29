'use strict';

const Sequelize = require('sequelize');
const scheme = require('./scheme');

const Op = Sequelize.Op;
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite3',
    operatorsAliases: {$and: Op.and, $or: Op.or},
    logging: false
});

scheme(sequelize);
sequelize.sync();

module.exports.sequelize = sequelize;
module.exports.models = sequelize.models;
