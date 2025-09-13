// nn bb ss u --> Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false 
let d = BigInt("567")+BigInt("3");
let e = "Hello";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof(b));  // number

// Non-Primitive Data Types --> Objects in Js --> by this we can make key value pairs like price of items, marks of students, etc
const item = {
    "Harry" : true,
    "Shubh" : false,
    "Lovish": 67,
    "Rohan" : undefined
}
console.log(item["Harry"]);  // true
console.log(item.Harry);  // true
console.log(item.Lovish);  // 67
console.log(item["asd"]);  // undefined bcoz asd is not there in item