const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wiki','root','admin',{
    host : 'localhost',
    dialect : 'mysql'
});

module.exports = sequelize; 