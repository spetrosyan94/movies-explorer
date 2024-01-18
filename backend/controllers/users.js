const { ValidationError } = require('mongoose').Error;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const { STATUS_CODE } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const {
  NotFoundError,
  BadRequestError,
  NotUniqueError,
} = require('../errors/errors');

const { STATUS_CODE } = require('../utils/constants');

module.exports.signOutUser = (req, res) => {
  res.clearCookie('jwt').send({ message: 'Пользователь вышел из аккаунта.' });
};

module.exports.getUserMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }

      res.send(user);
    })
    .catch(next); // Более короткая запись catch ниже
  // .catch((err) => next(err));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      // создадим токен
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '5d' });

      // вернем токен через куки
      return res.cookie('jwt', token, {
        // token - наш JWT токен, который мы отправляем
        maxAge: 3600000 * 24 * 7, // Срок хранения куки 7 дней
        httpOnly: true,
        secure: true, // Установите true, если используете HTTPS
        sameSite: 'None',
      })
        .send({ message: 'Токен безопасно отправлен в куки через httpOnly!', _id: user._id });
    })
    .catch(next); // Более короткая запись catch ниже
  // .catch((err) => next(err));
};

module.exports.createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hashPassword) => User.create({
      name,
      email,
      password: hashPassword,
    }))
    .then((user) => res.status(STATUS_CODE.CREATED).send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        return next(new BadRequestError('Переданы некорректные данные при создании пользователя.'));
      }

      if (err.code === 11000) {
        return next(new NotUniqueError('Пользователь пытается зарегистрироваться по уже существующему в базе email.'));
      }

      return next(err);
    });
};

module.exports.patchUser = (req, res, next) => {
  const { name, email } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(_id, { name, email }, {
    new: true,
    runValidators: true,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err instanceof ValidationError) {
        return next(new BadRequestError('Переданы некорректные данные при редактировании пользователя.'));
      }

      return next(err);
    });
};
