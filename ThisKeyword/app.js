
// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log("THIS IS:", this);
//         console.log(`${this.name} says MEOWWW`);
//     }
// }

// const meow2 = cat.meow;

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG';
    }
}