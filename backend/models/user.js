const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { UnauthorizedError } = require('../errors/errors');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    unique: false,
    required: {
      value: true,
      message: 'Поле name является обязательным!',
    },
    minlength: 2,
    maxlength: 30,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Указан некорректный email',
    },
  },

  password: {
    type: String,
    require: {
      value: true,
      message: 'Поле password является обязательным!',
    },
    select: false, // Чтобы api не возвращал хэш пароля
  },
}, {
  versionKey: false,
});

userSchema.statics.findUserByCredentials = function checkLogin(email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Неправильные почта или пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильные почта или пароль');
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
