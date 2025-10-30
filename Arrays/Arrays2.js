// -------------------- Arrays Methods --------------------

let num = [1, 2, 3, 34, 4];

let a = num.toString();  // 1,2,3,34,4
console.log(a);
console.log(typeof a);  // string
console.log(num);  // [ 1, 2, 3, 34, 4 ]
console.log(typeof num);  // object

let b = num.join("_")  // 1_2_3_34_4
console.log(b);  
console.log(typeof b);  // string

let c = num.pop();  
console.log(num);  // [ 1, 2, 3, 34 ]
console.log(c);  //  4 --> pop() returns popped element

let d = num.push(8);  
console.log(num);  // [ 1, 2, 3, 34, 8 ]
console.log(d);  //  5 --> push() returns the new array length

let e = num.shift();  // Remove an element from the start of the array
console.log(num);  // [ 2, 3, 34, 8 ]
console.log(e);  //  1 --> shift() returns the removed element

let f = num.unshift(9);  // add an element to the beginning of the array
console.log(num);  // [ 9, 2, 3, 34, 8 ]
console.log(f);  //  5 --> shift() returns the new array length