const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Respuesta = sequelize.define('respuesta', {
    id_respuesta : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    texto : {
        allowNull : false,
        type : DataTypes.STRING,
    },
    fecha : {
        allowNull : false,
        type : DataTypes.DATE
    },
    votos : {
        type : DataTypes.INTEGER
    },
    id_tema : {
        allowNull : false,
        type : DataTypes.INTEGER
    }
});

module.exports = Respuesta;