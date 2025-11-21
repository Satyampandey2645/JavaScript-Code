// Nullish Coalescing Operator (??): null, undefined
/* The nullish coalescing operator (??) in JavaScript is a logical operator that returns its right-hand side operand 
   when its left-hand side operand is either null or undefined. Otherwise, it returns the left-hand side operand. 
   
   When fetching data from a database or using services like Firebase or Appwrite, you might get null or undefined 
   responses instead of direct data; to prevent code errors, always handle both cases properly—assign null or handle 
   empty states if the value is null, handle undefined gracefully, and assign the valid value when available; this is 
   especially important when working with databases. 
*/

let val1, val2, val3, val4;

val1 = 5 ?? 10
console.log(val1);  // 5

val2 = null ?? 10;
console.log(val2);  // 10

val3 = undefined ?? 15;
console.log(val3);  // 15

val4 = null ?? 20 ?? 30;
console.log(val4);  // 20

// ----------------------------------------------------------------------------------------------------------------------
// Ternary Operator -> Syntax:   condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  // more than 80




