// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }


// callTwice(rollDie)


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!");
//             console.log("YOU WIN A MILLION DOLLARS");
//         }
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//         }
//     }
// }


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }


Running
makeBetweenFunc(100, 200)
ƒ(num) {
    return num >= min && num <= max;
}
const isChild = makeBetweenFunc(0, 18)
undefined
isChild(40)
false
isChild(13)
true
const isAdult = makeBetweenFunc(19, 60)
undefined
isAdult(40)
true