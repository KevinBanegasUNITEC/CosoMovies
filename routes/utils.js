const router = require('express').Router();
const { getGenres, getNowPlaying, getPopular, getTopRated, getUpcoming, getSearchMovie, getSearchMovieByID, getMoviesByGenre} = require('../controllers/utils');

router.get('/nowplaying', getNowPlaying);
router.get('/popular', getPopular);
router.get('/toprated', getTopRated);
router.get('/upcoming', getUpcoming);
router.get('/genres', getGenres);
router.get('/search/movie/:query', getSearchMovie);
router.get('/search/id/:id', getSearchMovieByID);
router.get('/genre/:id', getMoviesByGenre);

module.exports = router;

