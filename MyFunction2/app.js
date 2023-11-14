// function add(x, y) {
//     return x + y;
// }

// const add = function (x, y) {
//     return x + y;
// }

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

const square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function (side) {
        return side * 4;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWW`);
    }
}