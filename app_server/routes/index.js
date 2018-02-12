const express = require('express');
const router = express.Router();

/* GET home page. */
const ctrlMain = require('../Controllers/ctrlMain');
const ctrlMovies = require('../controllers/ctrlMovies');
const ctrlSeries = require('../controllers/ctrlSeries');

router.get('/', ctrlMain.index);
router.get('/movies', ctrlMovies.list);
router.get('/series', ctrlSeries.list);

module.exports = router;
