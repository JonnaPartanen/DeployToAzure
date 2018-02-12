
const list = function(req, res){
    res.render('movies',{
        movies:
        [
            {movie:'Forrest Gump', director: 'Director: Robert Zemeckis '},
            {movie:'Everest', director: 'Director: Baltasar Kormákur '},
            {movie:'Seven', director: ' Director: David Fincher '}
        ]

    });
};
module.exports = {
    list
};