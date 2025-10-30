// Stack (Primitive),    Heap (Non-Primitive)   
// Primitive (Stack): Copy is made → changes do not affect the original
// Non-Primitive (Heap): Reference is copied → changes do affect the original

// Primitive
let myName = "Satyam";  // "Satyam" is stored in stack
let anotherName = myName;  // copy of "Satyam" is stored in anotherName

anotherName = "Pandey";  // anotherName now holds "Pandey"

console.log(myName);  // Satyam
console.log(anotherName);  // Pandey

/* Step by step Explanation:

1. let myName = "Satyam";
   * "Satyam" (a primitive string) is stored in the stack.
   * myName points directly to the value "Satyam".

2. let anotherName = myName;
   * Since primitives are stored by value, a new copy of "Satyam" is created.
   * anotherName points to its own copy of "Satyam".

3. anotherName = "Pandey";
   * Now anotherName is reassigned to "Pandey".
   * This does not affect myName, because they are two separate copies.
*/
