// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error('Mongo error:', err));

// Route Imports
const authRoutes = require('./Routes/authRoutes');
const productRoutes = require('./Routes/productRoutes');

// Route Mounts
app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);
