const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({movie:String, director:String});
const seriesSchema = new mongoose.Schema({serie:String});

mongoose.model('movies', moviesSchema);
mongoose.model('series', seriesSchema);