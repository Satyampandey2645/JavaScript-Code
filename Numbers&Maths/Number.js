const num = 400;
console.log(num);  // 400

const score = new Number(400);
console.log(score);  // [Number: 400]

// toString()
console.log(score.toString());  // 400 -> but its a string
console.log(score.toString().length);  // 3


// toFixed()
/*
   -> Purpose: Formats a number with fixed number of digits after the decimal point.
   -> Always returns a string.
   -> Rounds if needed.
*/
const balance = 100;
console.log(balance.toFixed(1));  // 100.0
console.log(balance.toFixed(5));  // 100.00000

const balance1 = 100.53;
console.log(balance1.toFixed());  // 101
console.log(balance1.toFixed(4));  // 100.5300

const balance2 = 100.49;
console.log(balance2.toFixed());  // 100


// toPrecision()
/*
   -> Purpose: Formats a number to a total number of significant digits (not just decimals).
   -> Always returns a string.
   -> Can switch to scientific notation if needed.
*/
const other = 23.8961;
console.log(other.toPrecision(3));  // 23.9
console.log(other.toPrecision(4));  // 23.90

const another = 123.8961;
console.log(another.toPrecision(4));  // 123.9

const anotherr = 1123.8961;
console.log(anotherr.toPrecision(3));  // 1.12e+3

// toLocaleString()
const first = 100000000;
console.log(first.toLocaleString());  // 10,00,00,000



