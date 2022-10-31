import logger from '../utils/logger'

export default (error, request, response, next) => {
  logger.error(error.message)

  next(error)
}