const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
        title: 'Alian',
        score: 82
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})