// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// DO NOT RUN TIS INFINITE LOOP!!

// for (let i = 20; i >= 0; i++) 
//   console.log(i);

// DO NOT RUN THIS INFINITE LOOP!

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }

const seatingChart = [
    ['Kristin', 'Ivory', 'Coleen'],
    ['Buffy', 'Willow', 'Glory', 'Valarie'],
    ['Deva', 'Ashe', 'Torb', 'Symetra']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row ${i + 1}`);
    for (j = 0; j < row.length; j++) {
        console.log(`      Student: ${row[j]}`);
    }
}