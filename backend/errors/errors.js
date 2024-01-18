const NotFoundError = require('./NotFoundError');
const BadRequestError = require('./BadRequestError');
const UnauthorizedError = require('./UnauthorizedError');
const ForbiddenError = require('./ForbiddenError');
const NotUniqueError = require('./NotUniqueError');
const TooManyRequests = require('./TooManyRequests');

module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotUniqueError,
  TooManyRequests,
};
