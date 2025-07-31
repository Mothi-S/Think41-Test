// const fs = require('fs');
// const csv = require('csv-parser');
// const Product = require('../models/product');
// const sequelize = require('../config/db');

// async function loadCSV() {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('Database synced.');

//     const products = [];

//     fs.createReadStream('./data/products.csv')
//       .pipe(csv())
//       .on('data', (row) => {
//         console.log(row);
//         products.push({
//   id: parseInt(row.id),
//   cost: parseFloat(row.cost),
//   category: row.category,
//   product_name: row.name,          // ✅ 'name' is the CSV header
//   brand: row.brand,
//   price: parseFloat(row.retail_price),
//   department: row.department,
//   sku: row.sku,
//   distribution_center_id: parseInt(row.distribution_center_id)
// });

//         // products.push({
//         //   id: parseInt(row.id),
//         //   product_name: row.product_name,
//         //   department: row.department,
//         //   price: parseFloat(row.price),
//         //   image: row.image
//         // });
//       })
//       .on('end', async () => {
//         await Product.bulkCreate(products);
//         console.log('CSV data loaded successfully.');
//         process.exit();
//       });

//   } catch (err) {
//     console.error('Error loading CSV:', err);
//   }
// }

// loadCSV();


const fs = require('fs');
const csv = require('csv-parser');
const sequelize = require('../config/db');
const Product = require('../models/product');

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
          cost: parseFloat(row.cost),
          category: row.category,
          name: row.name,
          brand: row.brand,
          price: parseFloat(row.retail_price),
          department: row.department,
          sku: row.sku,
          distribution_center_id: parseInt(row.distribution_center_id)
        });
      })
      .on('end', async () => {
        await Product.bulkCreate(products);
        console.log('CSV data loaded successfully.');
        process.exit();
      });

  } catch (error) {
    console.error('Error loading CSV:', error);
  }
}

loadCSV();
