const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // MySQL username
  process.env.DB_PASSWORD,   // MySQL password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',        // Use 'mysql' for MySQL
    port: process.env.DB_PORT,
    logging: false,          // Disable SQL logging in the console (optional)
  }
);

module.exports = sequelize;
