const express = require('express');
const router = express.Router();

/* GET home page. */
const ctrlMain = require('../Controllers/ctrlMain');
const ctrlMovies = require('../controllers/ctrlMovies');
const ctrlSeries = require('../controllers/ctrlSeries');

router.get('/', ctrlMain.index);
router.get('/movies', ctrlMovies.list);
router.get('/series', ctrlSeries.list);

router
    .route('/movies/add')
    .get(ctrlMovies.showForm)
    .post(ctrlMovies.addData);

router
    .route('/series/add')
    .get(ctrlSeries.showForm)
    .post(ctrlSeries.addData);

module.exports = router;
