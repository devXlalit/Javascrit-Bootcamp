let x = 5;
let y = 2;
let op = "*";

// DRY = Do no reapeat yourself
if (op == "+") {
  console.log(x + y);
} else if (op == "-") {
  console.log(x - y);
} else if (op == "*") {
  console.log(x * y);
} else if (op == "/") {
  console.log(x / y);
} else if (op == "%") {
  console.log(x % y);
} else {
  console.log("Invalid operator");
}

// console.log(new Date().getDate());
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "Not found";
}

console.log(day);



