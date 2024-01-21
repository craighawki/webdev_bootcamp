const nums = [14, 2, 567, 88, 4346, 4, 222222, 43, 33, 74, 989]

Math.max(...nums);
Math.max(nums);

const cats = ['Pikey', 'Fritz', 'Pepe'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const dataFromForm = {
    email: 'craighawki@gmail.com',
    password: 'abcd1234!',
    username: 'canard'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }