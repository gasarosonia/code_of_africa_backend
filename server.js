const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./src/config/database');

console.log('Current directory:', __dirname);
console.log('File exists:', require('fs').existsSync('./src/routes/transactionRoutes.js'));

const transactionRoutes = require('./src/routes/transactionRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log('MySQL database connected'))
  .catch((err) => console.error('Error connecting to MySQL database:', err));

// Sync Models
sequelize.sync({ force: false }).then(() => {
  console.log('MySQL Models synchronized');
});

// Routes
app.use('/api/transactions', transactionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
