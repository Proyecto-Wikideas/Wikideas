const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Historial = sequelize.define('historial', {
    id_historial : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    texto : {
        allowNull : false,
        type : DataTypes.BLOB
    },
    fecha : {
        allowNull : false,
        type : DataTypes.DATE
    },
    id_tema : {
        allowNull : false,
        type : DataTypes.INTEGER
    }
});

module.exports = Historial;