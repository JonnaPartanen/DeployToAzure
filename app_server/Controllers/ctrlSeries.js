const list = function(req, res){
    res.render('series',{
        series:
            [
                {serie:'Breaking Bad'},
                {serie:'24'},
                {serie:'Sons of Anarghy'}
            ]

    });
};
module.exports = {
    list
};