
let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Bird Cage'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, What is the next to do?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, you quit the app!')