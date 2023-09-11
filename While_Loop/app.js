// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//     if (guess !== SECRET) {
//         console.log("Wrong!!!");
//     }
//     guess = prompt("Enter the secret code...")
// }
// console.log("Yay! you got the secret!");

// let input = prompt("Hey, say something!!!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Okay, fine. You win :-)")


let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if (guess === 'q') {
    console.log(`You quit the game after ${attempts} guesses.`)
} else if (guess < targetNum) {
    console.log("Congrats! You win")
    console.log(`You got it! It took you ${attempts} guesses`);
}