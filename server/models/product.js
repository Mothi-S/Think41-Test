
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    retail_price: DataTypes.FLOAT,
    sku: DataTypes.STRING,
    distribution_center_id: DataTypes.INTEGER,
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Departments',
        key: 'id',
      }
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Department, { foreignKey: 'department_id' });
  };

  return Product;
};
