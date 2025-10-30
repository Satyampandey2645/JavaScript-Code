console.log(Math);  // Object [Math] {}

// Math.abs()
console.log(Math.abs(-199));  // 199

// Math.round()
console.log(Math.round(9.1));  // 9
console.log(Math.round(9.5));  // 10

// Math.ceil() -> rounds a number upward to its nearest integer.
console.log(Math.ceil(5.1));  // 6
console.log(Math.ceil(5.9));  // 6
console.log(Math.ceil(5));  // 5
console.log(Math.ceil(-5.9));  // -5
console.log(Math.ceil(-5.1));  // -5

// Math.floor() -> rounds a number downward to its nearest integer.
console.log(Math.floor(7.1));  // 7
console.log(Math.floor(7.9));  // 7
console.log(Math.floor(7));  // 7
console.log(Math.floor(-7.1));  // -8
console.log(Math.floor(-7.9));  // -8

// Math.sqrt()
console.log(Math.sqrt(225));  // 15

// Math.pow()
console.log(Math.pow(5, 3));  // 5^3 = 125

// Math.min()
console.log(Math.min(10, 50, 5, 30));  // 5

// Math.max()
console.log(Math.max(10, 50, 5, 30));  // 50

// Math.random() -> this always give value b/w 0(inclusive) and 1(exclusive).
console.log(Math.random());
console.log((Math.random())*10);  // in this case minimum value will be 0
console.log(((Math.random())*10) + 1);  // in this case minimum value will be 1
console.log(Math.floor(((Math.random())*10) + 1));  


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1))+min);
/*
🧠 Explanation:
    -> Math.random() → returns a random decimal number between 0 (inclusive) and 1 (exclusive).
      👉 Example: 0.234, 0.99, etc.
    -> (max - min + 1) → gives the total number of integers in the range [min, max].
      👉 For 10 to 20 → 20 - 10 + 1 = 11.
    -> Math.random() * (max - min + 1) → scales the random number to the range 0 to 11 (exclusive).
    -> Math.floor(...) → converts the decimal to the nearest lower integer.
      👉 Now the value is between 0 and 10.
    -> + min → shifts the range from 0–10 to 10–20.
    -> A random integer between 10 and 20 (inclusive) will get print every time you run it.
*/