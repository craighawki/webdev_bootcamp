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
if (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);