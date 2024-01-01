let arr = ["cat", "dog", "eagle", "owl", "hen"];

let modifiedArr = arr.map(function (element) {
    return element + " is an animal";
});

console.log(modifiedArr);

let users = [
    { firstName: "Susan", lastName: "Steward", status: "Normal" },
    { firstName: "Daniel", lastName: "Longbottom", status: "Normal" },
    { firstName: "Jacob", lastName: "Black", status: "Normal" },
    { firstName: "Jessica", lastName: "Jones", status: "Super Hero" },

];

let userFullNames = users.map(function (element) {
    return `${element.firstName} ${element.lastName} -> ${element.status}`;
})

console.log(userFullNames);

let arr1 = [2, 3, 5, 7, 13]

const eighty = arr1.map(function (element, index, array) {
    console.log(array);
}, 40);