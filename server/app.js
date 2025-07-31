const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models'); // This loads index.js where models are defined
const productRoutes = require('./routes/productRoutes');
const departmentRoutes = require('./routes/departmentRoutes');




app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/departments', departmentRoutes);

// Start server
const PORT = 3000;

db.sequelize.authenticate()
  .then(() => {
    console.log('📦 Connected to DB');

    // Sync the models (including departments)
    return db.sequelize.sync({ force: true });
 // <-- This line creates the tables if they don't exist
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to database:', err);
  });
