const express = require('express');
const router = express.Router();
const { Department, Product } = require('../models');

// GET all departments with product count
router.get('/', async (req, res) => {
  try {
    const departments = await Department.findAll({
      include: [{ model: Product, attributes: [] }],
      attributes: [
        'id',
        'name',
        [Product.sequelize.fn('COUNT', Product.sequelize.col('Products.id')), 'product_count']
      ],
      group: ['Department.id']
    });
    res.status(200).json({ departments });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

// GET specific department details
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch department' });
  }
});

// GET all products in a department
router.get('/:id/products', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id, {
      include: [Product]
    });

    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.status(200).json({
      department: department.name,
      products: department.Products
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch department products' });
  }
});

module.exports = router;
