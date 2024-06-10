var a = null;
console.log(a);

var a = 2.3; // Numbers
var b = 2; // Numbers

var a = "name"; // string

var a = true; // boolean
var b = false; // boolean

console.log(a);
console.log(b);

// objects
var obj = {
  studentId: 1,
  name: "sawan",
  work: {
    id: 20,
    name: "string",
    nothing: {
      namimg: "something",
    },
  },
};

console.log(obj.studentId);
console.log(obj.namimg);

var arr = [1, 2, 3, 4, 54];
console.log(arr);

let x = BigInt(123456789012345678901234567890);
console.log(typeof x);
console.log(x);

// usecase of object

const car = {
  maxSpeed: 100,
  seatter: 4,
  mailage: 50,
  brand: {
    name: "Ford",
    model: "mustang",
  },
};

console.log(car["maxSpeed"]);

car.brand.name = "volvo";
console.log(car);
