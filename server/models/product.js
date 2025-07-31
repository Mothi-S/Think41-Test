const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING,
  },
  department: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  image: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
});

module.exports = Product;
