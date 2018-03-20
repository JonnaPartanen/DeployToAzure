const mongoose = require('mongoose');

const seriesModel = mongoose.model('series');

const serieList = function (req, res) {
    //res
        //.status(200)
        //.json({"serie" : ""});
    seriesModel.find({}, function(err, series){
        if(err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(series);
        }
    });
};

const addSeries = function (req, res) {
    //res.status(201).json({"Add Serie" : "Work in progsess"});
    seriesModel.create(req.body, function(err, newSerie){
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newSerie);
        }
    }
    );
};

module.exports = {
    serieList,
    addSeries
};