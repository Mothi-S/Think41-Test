const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('think41_db', 'postgres', 'Admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
