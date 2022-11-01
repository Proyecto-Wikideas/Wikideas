const express = require('express');
const app = express()
const sequelize = require('./database');
require('./model/asociaciones');


app.get('/', (req, resp) => {
  resp.send('Express');
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    console.log("Conectado!");
  } catch (error) {
    console.log("Error en la conexión: ", error);
  }
})();

app.listen(3001)
console.log('API FUNCIONANDO')