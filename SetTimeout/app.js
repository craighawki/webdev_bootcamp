// console.log("Hello!!!...")
// setTimeout(() => {
//     console.log("... Are you still there??")
// }, 3000)

// console.log("GOODBYE!!")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// run clearInterval(id) in the console, to stop the interval.

clearInterval(id);  // comment this out to see the set interval run.