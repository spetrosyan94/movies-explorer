const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/errors');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  let payload;

  try {
    // верифицируем токен
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    // отправим ошибку, если не получилось авторизовать токен
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  // записываем пейлоуд в объект запроса
  req.user = payload;
  // пропускаем запрос дальше
  return next();
};
