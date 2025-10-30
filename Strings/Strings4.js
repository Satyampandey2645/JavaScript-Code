// slice() and substring()  -> Both are used to extract parts of a string:

// ❌ Key Differences: 

/*
1. Handling of Negative Index
   -> slice(): Negative values count from the end.
   -> substring(): Treats negative values as 0.
*/
let str1 = "Hello World";

console.log(str.slice(-5));       // "World"   (works with negative)
console.log(str.substring(-5));   // "Hello World" (negative → 0)



/* 
2. When start > end
   -> slice(): Returns an empty string.
   -> substring(): Swaps the two values automatically.
*/
// start > end
console.log(str.slice(7, 2));      // "" (empty)
console.log(str.substring(7, 2));  // "llo W" (swaps 2 and 7)



/*
3. Syntax difference (slight)
   -> Both take (start, end) but:
   -> slice(start, end) → end is optional, negative allowed.
   -> substring(start, end) → end is optional, but negative becomes 0.
*/