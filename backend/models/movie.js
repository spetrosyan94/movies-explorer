const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({

  country: {
    type: String,
    required: {
      value: true,
      message: 'Поле страны обязательное!',
    },
  },

  director: {
    type: String,
    required: {
      value: true,
      message: 'Поле режиссера обязательное!',
    },
  },

  duration: {
    type: Number,
    required: {
      value: true,
      message: 'Поле длительности фильма обязательное!',
    },
  },

  year: {
    type: String,
    required: {
      value: true,
      message: 'Поле года выпуска фильма обязательное!',
    },
  },

  description: {
    type: String,
    required: {
      value: true,
      message: 'Поле описание фильма обязательное!',
    },
  },

  image: {
    type: String,
    required: {
      value: true,
      message: 'Поле постера к фильму обязательное!',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Указан некорректный URL',
    },
  },

  trailerLink: {
    type: String,
    required: {
      value: true,
      message: 'Поле трейлера фильму обязательное!',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Указан некорректный URL',
    },
  },

  thumbnail: {
    type: String,
    required: {
      value: true,
      message: 'Поле мини-постера к фильму обязательное!',
    },
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Указан некорректный URL',
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  movieId: {
    type: Number,
    required: true,
    // default: 111111111,
  },

  nameRU: {
    type: String,
    required: {
      value: true,
      message: 'Поле название фильма на русском языке обязательное!',
    },
  },

  nameEN: {
    type: String,
    required: {
      value: true,
      message: 'Поле название фильма на английском языке обязательное!',
    },
  },
}, {
  versionKey: false,
});

module.exports = mongoose.model('movie', movieSchema);
