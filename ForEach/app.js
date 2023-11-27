const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print);

// numbers.forEach(function (el) {
//     if (el % 2 == 0) {
//         console.log(el);
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }





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

const films = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })