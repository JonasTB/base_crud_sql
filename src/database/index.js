const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../model/User');
const Address = require('../model/Address');

const connection = new Sequelize(config);

User.init(connection);
Address.init(connection);
Address.associate(connection.models);

module.exports = connection;