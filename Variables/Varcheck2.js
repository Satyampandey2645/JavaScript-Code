// redeclaration of var & let
var x = 1;
var x = 2;
console.log(x);  // 2

let y = 1;
// let y = 2;  --> redeclaration error
y = 3;
console.log(y);  // 3

// Hoisting of var & let
console.log(a);
var a = 1;  // undefined

console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 1;