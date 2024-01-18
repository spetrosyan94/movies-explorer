const router = require('express').Router();

const {
  getUserMe,
  patchUser,
} = require('../controllers/users');

const {
  userUpdateValidate,
} = require('../middlewares/validation');

router.get('/me', getUserMe);
router.patch('/me', userUpdateValidate, patchUser);

module.exports = router;
