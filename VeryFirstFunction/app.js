function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0]}, how goes it?`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    let sum = x + y;
    return sum;
}


// singSong()
// singSong()
// singSong()
// singSong()