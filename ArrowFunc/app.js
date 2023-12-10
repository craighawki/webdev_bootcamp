// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x * x;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const greet = (name) => {
//     return "Hey " + name;
// }

// // const add = (a, b) => (
// //     a + b;
// // )

// const add = (a, b) => a + b;

const movies = [
    {
        title: 'Amadeus',
        score: 80
    },
    {
        title: 'The Stand',
        score: 80
    },
    {
        title: 'Dune',
        score: 95
    },
    {
        title: 'American Gigilo',
        score: 80
    },
    {
        title: 'Alien',
        score: 82
    }
]

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))