// Non-Primitive
let userOne = {
    email: "user@gmail.com",
    upi: "user@okicici"
}

let userTwo = userOne;
userTwo.email = "satyam@gmail.com";

console.log(userOne.email);  // satyam@gmail.com
console.log(userTwo.email);  // satyam@gmail.com

/* Step by step Explanation:
   -> Objects are non-primitive.
   -> The actual object { email: "...", upi: "..." } is stored in the heap.
   -> The variable userOne in the stack holds a reference (pointer) to the heap memory location of this object.

   let userTwo = userOne;
   -> Here, JavaScript does not copy the object itself.
   -> Instead, it copies the reference (pointer) to the same object in the heap.
   -> Now both userOne and userTwo point to the same object in memory.
   -> Since both variables point to the same object, changing the object through userTwo also affects userOne, 
      because there is only one object in memory.
*/      
