const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Categoria = sequelize.define('categoria', {
    id_categoria : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    nombre : {
        allowNull : false,
        type : DataTypes.STRING
    },
    icono : {
        allowNull : false,
        type : DataTypes.STRING
    },
    color : {
        allowNull : false,
        type : DataTypes.STRING
    }
});

module.exports = Categoria;