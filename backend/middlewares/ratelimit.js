const setRateLimit = require('express-rate-limit');
const { TooManyRequests } = require('../errors/errors');

const rateLimit = setRateLimit({
  windowMs: 60 * 1000, // интервал ограничения времени 1 минута
  limit: 100,
  // keyGenerator: (req, res) => {
  //   console.log(req.user._id);
  //   return req.user._id;
  // },
  // message: { message: 'Вы превысили лимит на 5 запросов в минуту. Повторите попытку позже.' },
  // Отправляет ответ клиенту, когда сработало ограничение запросов
  handler: (req, res, next) => next(new TooManyRequests('Вы превысили лимит на 100 запросов в минуту. Повторите попытку позже.')),
  // Заголовки ответа при ограничении запросов
  legacyHeaders: false,
  standardHeaders: 'draft-7',
});

module.exports = rateLimit;
