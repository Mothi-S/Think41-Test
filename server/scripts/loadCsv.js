




const fs = require('fs');
const csv = require('csv-parser');
const { Product, Department, sequelize } = require('../models');

const results = [];

fs.createReadStream('./data/products.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    try {
      await sequelize.sync();

      // Step 1: Extract unique departments
      const uniqueDepartments = [...new Set(results.map(r => r.department))];

      // Step 2: Insert departments if not exist
      for (const deptName of uniqueDepartments) {
        await Department.findOrCreate({ where: { name: deptName } });
      }

      // Step 3: Insert products with department_id
      for (const row of results) {
        const dept = await Department.findOne({ where: { name: row.department } });

        await Product.create({
          id: row.id,
          name: row.name,
          brand: row.brand,
          category: row.category,
          cost: parseFloat(row.cost),
          retail_price: parseFloat(row.retail_price),
          sku: row.sku,
          distribution_center_id: parseInt(row.distribution_center_id),
          department_id: dept.id
        });
      }

      console.log('✅ Product data loaded successfully.');
    } catch (err) {
      console.error('❌ Error:', err);
    }
  });
