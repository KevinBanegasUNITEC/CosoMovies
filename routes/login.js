const router = require('express').Router();
const {signUp, signIn, signOutUser} = require('../controllers/login');

router.post('/signup',signUp);
router.post('/signin', signIn);
router.get('/signout', signOutUser);

module.exports = router;