const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const middlewares = require('./middlewares/index');


// MIDLEWARES OF CONFIGURATION 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES 
app.get('/', (req, resp) => {
  resp.send('API DE BIENVENIDA');
})

// MIDLEWARES IN CASE OF ERROR 
app.use(middlewares.unknownEndpoint);
app.use(middlewares.errorHandler);


module.exports = app;