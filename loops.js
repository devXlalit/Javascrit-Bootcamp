// for (initialization; condition; updatetion / iteration) {
//   // code
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(2 * i);
// }

// console.log(text);
// 1. write a program in js to print the multiplication table of a number.
// 2. Write a program in js to print the n fibonacci series.
// 3. Write a program in js to print the factorial of a number.

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  // text += person[x];
  text = text + person[x];
}
// console.log(text);
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// console.log(txt);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x in arr) {
  // console.log(arr[x]);
}

newArr = [1, 2, 3, 4, 5, 6];

// newArr.forEach(myFunc);

// function myFunc(elem) {
//   console.log(elem);
// }

newObj = { fname: "john", lname: "doe", age: 23 };

newArr.forEach((element) => {
  // console.log(element);
});

const cars = [1, 2, 2, 4, 4];

let newText = "";

for (let x of cars) {
  console.log("Values on cars with index of x:", cars[x]);
  console.log("Value of x: ", x);
}

// console.log(x);

let language = "JavaScript";

let Newtxt = "";
for (let x of language) {
  Newtxt += x + " ";
}

console.log(Newtxt);



