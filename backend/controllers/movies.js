const { ValidationError, CastError } = require('mongoose').Error;
const {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} = require('../errors/errors');
const Movie = require('../models/movie');
const { STATUS_CODE } = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.status(STATUS_CODE.CREATED).send(movie))
    .catch((err) => {
      if (err instanceof ValidationError) {
        return next(new BadRequestError('Переданы некорректные данные при создании фильма.'));
      }

      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм с указанным _id не найден.');
      }

      if (!movie.owner.equals(req.user._id)) {
        throw new ForbiddenError('Пользователю нельзя удалять фильмы других пользователей.');
      }

      movie.deleteOne()
        .then(() => res.status(STATUS_CODE.OK).send({ message: 'Фильм удален.' }))
        .catch(next);
    })
    .catch((err) => {
      if (err instanceof CastError) {
        return next(new BadRequestError('Переданы некорректные данные при удалении фильма.'));
      }

      return next(err);
    });
};
