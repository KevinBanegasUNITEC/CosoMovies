const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use('/favorites', require('./favorites'));

module.exports = router;