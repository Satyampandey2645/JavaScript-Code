const gameName1 = "FreeFire";  // primitive string
console.log(gameName1[0]);  // F

const gameName2 = new String("PUBG");  // / String object
// this creates a String object (a wrapper around the primitive string).
// Using new String() dynamically allocates an object in the heap.
// The object itself is stored in the heap, and the variable holds a reference to it.
// It’s not a primitive string anymore, but an object with properties and methods.

console.log(gameName2[0]);  // P

console.log(gameName1.__proto__);  // {}
// Every object in JavaScript has an internal property called [[Prototype]] (exposed as __proto__).
// For a String object, this prototype comes from String.prototype.

console.log(gameName1.__proto__.toUpperCase.call(gameName1));  // FREEFIRE
console.log(gameName1.toUpperCase());  // FREEFIRE
console.log(gameName1.length);  // 8
console.log(gameName1.charAt(2));  // e
console.log(gameName1.indexOf('F'));  // 0


// substring
const aString = "Hello-Dear"; 
const newString1 = aString.substring(0, 8);
const newString2 = aString.substring(3, 8);
console.log(newString1);  // Hello-De
console.log(newString2);  // lo-De

// slice
let anotherString1 = aString.slice(0, 8);
let anotherString2 = aString.slice(-8, 8);  // length of "Hello-Dear" is 10 so 10-8 = 2(start index) and 8(end index excluded) 
let anotherString3 = aString.slice(0, 4);
let anotherString4 = aString.slice(-8, 4);  // length of "Hello-Dear" is 10 so 10-8 = 2(start index) and 4(end index excluded)
let anotherString5 = aString.slice(-4, -1)  // length of "Hello-Dear" is 10 so 10-4 = 6(start index) and 10-1 = 9(end index excluded)
console.log(anotherString1);  // Hello-De
console.log(anotherString2);  // llo-De     
console.log(anotherString3);  // Hell
console.log(anotherString4);  // ll
console.log(anotherString5);  // Dea

/* Difference b/w slice() and substring()

| Feature              | `slice()`                            | `substring()`                  |
| -------------------- | ------------------------------------ | ------------------------------ |
| Negative indexes     | Counts from end                      | Treated as `0`                 |
| If start > end       | Returns `""` (empty)                 | Swaps start & end              |
| Use case             | Works like Python slice, more modern | Legacy method, sometimes safer |

*/

