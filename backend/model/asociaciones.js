const Tema = require('./tema.js');
const Categoria = require('./categoria.js');
const Historial = require('./historial.js');
const Respuesta = require('./respuesta.js');

Categoria.hasMany(Tema);
Tema.belongsTo(Categoria);

Tema.hasMany(Respuesta);
Respuesta.belongsTo(Tema);

Tema.hasMany(Historial);
Historial.belongsTo(Tema);

module.exports = {
    Tema,
    Categoria,
    Historial,
    Respuesta
}