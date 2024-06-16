const express = require('express');
const router = express.Router();

router.use('/favorites', require('./favorites'));
router.use('/utils', require('./utils'));
router.use('/login', require('./login'));

module.exports = router;