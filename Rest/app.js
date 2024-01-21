// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// function sum(...nums) {
//     console.log(nums);
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`Silver MEDAL GOES TO: ${silver}`)
    console.log(`THANKS TO THE FOLLOWING PEOPLE FOR PARTICIPATING: ${everyoneElse}`)
}