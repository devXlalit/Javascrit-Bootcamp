// // Functions without parameter 
// function hello(){
//     console.log("Hello world!");
//     return 24;
// }

// let res = hello();
// console.log(res);

// // Function with parameters 
// // function sum(a , b) { // Parameters
// //     console.log(a+b);
// //     return a+b;
// // }


// // console.log(sum(2,3));
// sum(2,3) // Arguments 



// // arr = [1,2,,3,4]
// // console.log(arr[1]);


// // Function Expression
// const add = function (a, b) {
// 	console.log(a + b);
// }

// // Calling function
// add(12, 3);
// console.log(add(45,2));

// Arrow functions
const sum = (a , b) =>{
    console.log(a+b);
}

sum(4,5)

// Anonymous functions 
// IIFE - Immediately Invoked Function Expression
( () => {
    console.log("object");
} )();

(()=>{
    console.log("Hello");
})()


let greet = () => console.log("Welcome to FCA"); 

greet(); 


