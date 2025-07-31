const Sequelize = require('sequelize');
const sequelize = new Sequelize('think41_db', 'postgres', 'Admin', {
  host: 'localhost',
  dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('./product')(sequelize, Sequelize.DataTypes);
db.Department = require('./department')(sequelize, Sequelize.DataTypes);

// Associations
db.Department.hasMany(db.Product, { foreignKey: 'department_id' });
db.Product.belongsTo(db.Department, { foreignKey: 'department_id' });

module.exports = db;
