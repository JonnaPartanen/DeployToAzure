db.dropDatabase();

db.movies.save(
    [
        {movie:'Forrest Gump', director: 'Robert Zemeckis '},
        {movie:'Everest', director: 'Baltasar Kormákur '},
        {movie:'Seven', director: ' David Fincher '}
    ]
);

db.series.save(

    [
        {serie:'Breaking Bad'},
        {serie:'24'},
        {serie:'Sons of Anarghy'}
    ]

);