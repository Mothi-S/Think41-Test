




const express = require('express');
const router = express.Router();
const db = require('../models'); // Import Sequelize models
const Product = db.Product;
const Department = db.Department;

// GET all products with department name
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Department,
        attributes: ['name'] // only include the name of the department
      }
    });

    // Format the output to include department name
    const formatted = products.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      brand: p.brand,
      retail_price: p.retail_price,
      sku: p.sku,
      distribution_center_id: p.distribution_center_id,
      department: p.Department?.name || 'N/A',
    }));

    res.status(200).json(formatted);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET product by ID with department name
router.get('/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId, {
      include: {
        model: Department,
        attributes: ['name']
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const formatted = {
      id: product.id,
      name: product.name,
      category: product.category,
      brand: product.brand,
      retail_price: product.retail_price,
      sku: product.sku,
      distribution_center_id: product.distribution_center_id,
      department: product.Department?.name || 'N/A',
    };

    res.status(200).json(formatted);
  } catch (err) {
    console.error('Error fetching product by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
