const logger = require('../utils/logger')

module.exports = errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  next(error)
};