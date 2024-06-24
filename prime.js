// let a=7;
// let b=0
// for(let i=2; i<a; i++){
//     if(a%i==0){
//         // console.log("is not a prime")
//         b=1
//         break
//     }
// }
// if(b==1){
//     console.log("is not a prime")
// }
// else{
//     console.log("is prime")
// }

//  Write a program to check if a number is prime or not n = 21

let n = 18;
let isPrime = true; // flag

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
  }
}

console.log(isPrime ? "Prime" : "Non prime");
