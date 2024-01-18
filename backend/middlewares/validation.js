const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

// Валидация ссылки с помощью регулярного выражения
const regex = /(https?:\/\/)?(www\.)?[a-z0-9-\-._~:/?#[\]@!$&'()*+,;=]+(?:\.[a-z]{2,})+#?/i;

const urlValidity = (value, helpers) => {
  if (!regex.test(value) || !validator.isURL(value)) {
    return helpers.message('Некорректная ссылка');
  }

  return value;
};

const signupValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const signinValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const userUpdateValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().min(2).max(30),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(2).required(),
    director: Joi.string().min(2).required(),
    duration: Joi.number().required(),
    year: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    nameRU: Joi.string().min(2).required(),
    nameEN: Joi.string().min(2).required(),
    movieId: Joi.number(),
    image: Joi.string().required().custom(urlValidity),
    trailerLink: Joi.string().required().custom(urlValidity),
    thumbnail: Joi.string().required().custom(urlValidity),
  }),
});

const movieIdValidate = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().required().length(24),
  }),
});

module.exports = {
  signupValidate,
  signinValidate,
  userUpdateValidate,
  createMovieValidation,
  movieIdValidate,
};
