// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD!")
// } else {
//     console.log("password not accepted! Fix that shit!")
// }

// 0-5 free
// 5-10 $10
// 10-65 $20
//65+ free

// const age = 90;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE!")
// }

// const firstName = prompt("Enter your first name: ");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE  NOT A BABY OR A SENIOR!");
}