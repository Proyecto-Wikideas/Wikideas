import http from 'http'
import logger from './utils/logger'
import config from './utils/config'
import express from 'express';
import app from './app'
const sequelize = require('./database');
require('./model/asociaciones');

const server = http.createServer(app)

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); 
    logger.info("Conexión exitosa a la base de datos");
  } catch (error) {
    logger.error("Error en la conexión: ", error);
  }
})();

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
