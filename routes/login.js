const router = require('express').Router();
const {addUser} = require('../controllers/login');

router.post('/signup',addUser);

module.exports = router;