const router = require('express').Router();
const auth = require('../middlewares/auth');
const { login, createUser, signOutUser } = require('../controllers/users');

const {
  signupValidate,
  signinValidate,
} = require('../middlewares/validation');

// роуты, не требующие авторизации, регистрация и логин
router.post('/signup', signupValidate, createUser);
router.post('/signin', signinValidate, login);

// авторизация
router.use(auth);

router.get('/signout', signOutUser);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

module.exports = router;
