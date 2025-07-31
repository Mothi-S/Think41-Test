const express = require('express');
const app = express();
const sequelize = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// Start server
const PORT = 3000;
sequelize.authenticate().then(() => {
  console.log('📦 Connected to DB');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Failed to connect to database:', err);
});
