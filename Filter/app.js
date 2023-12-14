const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.filter(n => {
    return n < 10;
})

const movies = [
    {
        title: 'Amadeus',
        score: 80,
        year: 1984
    },
    {
        title: 'Birth of A Nation',
        score: 13,
        year: 1915
    },
    {
        title: 'The Stand',
        score: 79,
        year: 1978
    },
    {
        title: 'Dune',
        score: 95,
        year: 1975
    },
    {
        title: 'American Gigilo',
        score: 86,
        year: 1981
    },
    {
        title: 'Alien',
        score: 82,
        year: 2001
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    }
]

// const films = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

const goodMovies = movies.filter(m => m.score > 80);
const badMovies = movies.filter(m => m.score < 70);

const recentMovies = movies.filter(m => m.year > 2000);