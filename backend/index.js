import http from 'http';
import logger from './utils/logger';
import config from './utils/config';
import app from './app';

// CREATE SERVER AND INIT SERVER IN A PORT 
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});