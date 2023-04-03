const Sequelize = require('sequelize');

const connectDB = new Sequelize('your_database', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = connectDB;
