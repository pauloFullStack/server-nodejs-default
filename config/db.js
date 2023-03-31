const Sequelize = require('sequelize');

const connectDB = new Sequelize('nodeTest', 'postgres', 'davi91445129', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = connectDB;
