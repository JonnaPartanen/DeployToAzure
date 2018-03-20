const express = require('express');
const router = express.Router();

const ctrlApiMovies = require('../controllers/ctrlApiMovies');
const ctrlApiSeries = require('../controllers/ctrlApiSeries');

router
    .route('/movies')
    .get(ctrlApiMovies.movieList)
    .post(ctrlApiMovies.addMovies);

router
    .route('/series')
    .get(ctrlApiSeries.serieList)
    .post(ctrlApiSeries.addSeries);

module.exports = router;