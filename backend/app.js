import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import middlewares from './middlewares/index';
const app = express();

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


export default app;