const fs = require('fs');
const csv = require('csv-parser');
const Product = require('../models/product');
const sequelize = require('../config/db');

async function loadCSV() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced.');

    const products = [];

    fs.createReadStream('./data/products.csv')
      .pipe(csv())
      .on('data', (row) => {
        products.push({
          id: parseInt(row.id),
          product_name: row.product_name,
          department: row.department,
          price: parseFloat(row.price),
          image: row.image
        });
      })
      .on('end', async () => {
        await Product.bulkCreate(products);
        console.log('CSV data loaded successfully.');
        process.exit();
      });

  } catch (err) {
    console.error('Error loading CSV:', err);
  }
}

loadCSV();
