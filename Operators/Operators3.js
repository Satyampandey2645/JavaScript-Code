// Comparison Operators in Js
// ==, !=, ===, !==, >, <, >=, <=, ?

let a = 6;
let b = 7;
let c = "6";
console.log("a == b is ", a == b);  // false
console.log("a != b is ", a != b);  // true
console.log("a === b is ", a === b);  // false ---> equal value and type
console.log("a !== b is ", a !== b);  // true ---> not equal value or not equal type

console.log("a == c is ", a == c);  // true
console.log("a != c is ", a != c);  // false
console.log("a === c is ", a === c);  // false
console.log("a !== c is ", a !== c);  // true

// Ternary Operator --> ?
let age = 18;
console.log("You can", age<=18 ? "not drive" : "drive");

// Logical Operators in Js
// &&, ||, !

let x = 5;
let y = 6;
console.log(x<y && x==5);  // true
console.log(x>y || x==5);  // true
console.log(!false);  // true
console.log(!true);  // false