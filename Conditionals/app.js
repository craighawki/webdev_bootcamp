
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!");
// } else {
//     console.log("Your number GT 0.5!");
// }
// console.log(random);

// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH THE DUDE HATES MONDAYS!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY PEOPLE TEND TO REALLY LIKE SATURDAYS!")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays Are Decent")
// } else if (dayOfWeek === 'tuesday') {
//     console.log("MEH")
// } else {
//     console.log("MEH")
// }


// const age = 65;

// if (age < 5) {
//     console.log("You're a baby,so you can get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10.00")
// } else if (age < 65) {
//     console.log("You are an adult, so you pay $20.00")
// } else {
//     console.log("You are a senior, so you pay $10.00")
// }









const password = prompt("please enter a new password");

// Password needs to be 6+ characters
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short! Must be 6+ characters")
}
// Password cannot includes spaces








