// Function declarations are hoisted, so addOne() can be called before it's defined.
// Function expressions (like addTwo) are not hoisted, so calling them before initialization causes an error.
// Hoisting means JavaScript reads function and variable declarations before running the code.
// That's why we can call a function declared with 'function' before it appears in the code.
// Variables declared with let/const are hoisted but not initialized, so using them before declaration gives an error.

console.log(addOne(5));  // 6

function addOne(num){
    return num + 1;
}

addTwo(5);

const addTwo = function(num){
    return num + 2;
}

// ----------------------------------------------------------------------------------------------------------------------
// var is hoisted and initialized with undefined, so it doesn’t give an error.
console.log(a); // undefined (no error)
var a = 10;

/* 
  let and const are also hoisted, but they are not initialized during the memory phase.
  They stay in a special zone called the Temporal Dead Zone (TDZ) until the actual line of code where they’re declared 
  is reached.
*/
console.log(b); // ReferenceError
let b = 10;

