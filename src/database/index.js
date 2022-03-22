const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../model/User');

const connection = new Sequelize(config);

User.init(connection);

module.exports = connection;