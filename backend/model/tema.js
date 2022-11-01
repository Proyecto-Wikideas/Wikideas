const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Tema = sequelize.define('tema', {
    id_tema : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    titulo : {
        allowNull : false,
        type : DataTypes.STRING
    },
    descripcion : {
        allowNull : false,
        type : DataTypes.STRING
    },
    imagen : {
        allowNull : false,
        type : DataTypes.BLOB
    },
    archivo : {
        allowNull : false,
        type : DataTypes.BLOB
    },
    fecha : {
        allowNull : false,
        type : DataTypes.DATE
    },
    id_categoria : {
        allowNull : false,
        type : DataTypes.INTEGER
    }
});

module.exports = Tema;