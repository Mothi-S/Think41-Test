module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
  });

  Department.associate = (models) => {
    Department.hasMany(models.Product, { foreignKey: 'department_id' });
  };

  return Department;
};

