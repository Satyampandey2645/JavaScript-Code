const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // false

// -------------------------------------------------------------------------------------------------------------------

let Var = Symbol('123');
let anotherVar = Symbol('123');

console.log(Var === anotherVar);  // false

// -------------------------------------------------------------------------------------------------------------------

let num = 345674654567654534n  // we use n to make the number in bigInt
console.log(num);
console.log(typeof num);  // bigint

// -------------------------------------------------------------------------------------------------------------------

// Arrays
const heroes = ["Ironman", "Thor", "Superman"] 
console.log(heroes);  // [ 'Ironman', 'Thor', 'Superman' ]
console.log(typeof heroes);  // object

// In JavaScript, arrays are a special kind of object
// Because arrays in JS are implemented as objects with numeric keys and some extra methods (push, pop, etc.).

// If we want to specifically check if it’s an array:
console.log(Array.isArray(heroes));  // true

// -------------------------------------------------------------------------------------------------------------------

// objects
let myObj = {
    name: "Satyam",
    age: 21
}

const temperature = null;
console.log(temperature);  // null
console.log(typeof temperature);  // object

// -------------------------------------------------------------------------------------------------------------------

// functions
const myFunc = function(){  // function declaration as a variable
    console.log("Hello World");
}

console.log(myFunc);  // [Function: myFunc]
console.log(typeof myFunc);  // function  --> (special subtype of object)