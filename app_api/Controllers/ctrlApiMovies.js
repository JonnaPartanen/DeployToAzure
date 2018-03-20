//get access to the database connection
const mongoose = require('mongoose');

const moviesModel = mongoose.model('movies');

const movieList = function (req, res) {
    //res
        //.status(200)
        //.json({"movie" : "director"});
    moviesModel.find({}, function(err, movies){//"movies" name in here, you can give any name
        if(err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(movies);
        }
    })

};

const addMovies = function (req, res) {
    //res.status(201).json({"Add movie" : "Work in progress"})
    moviesModel.create(req.body, function(err, newMovie){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newMovie);
        }
    })
};

module.exports = {
    movieList,
    addMovies
};