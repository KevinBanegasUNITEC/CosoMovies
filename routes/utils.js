const router = require('express').Router();
const { getGenres, getNowPlaying, getPopular, getTopRated, getUpcoming } = require('../controllers/utils');

router.get('/nowplaying', getNowPlaying);
router.get('/popular', getPopular);
router.get('/toprated', getTopRated);
router.get('/upcoming', getUpcoming);
router.get('/genres', getGenres);

module.exports = router;

