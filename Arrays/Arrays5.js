const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);  // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
console.log(marvel_heroes[3]);  // [ 'Superman', 'Flash', 'Batman' ]
console.log(marvel_heroes[3][0]);  // Superman
console.log(marvel_heroes[3][1]);  // Flash
console.log(marvel_heroes[3][2]);  // Batman

// ------------------------------------------------------------------------------------------------------------------

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = arr1.push(arr2);  // This will give length of new array which is 5
console.log(arr3);  // 5
console.log(arr1);  // [ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

// ------------------------------------------------------------------------------------------------------------------

const myArr1 = ["Satyam", "Caliber", "Aditya"]; 
const myArr2 = ["Harsh", "Nikhil", "Ashish"]; 

const newArr = myArr1.concat(myArr2);
console.log(newArr);  // [ 'Satyam', 'Caliber', 'Aditya', 'Harsh', 'Nikhil', 'Ashish' ]

// ------------------------------------------------------------------------------------------------------------------

const myNewArr = [...myArr1, ...myArr2];  // spread operator
console.log(myNewArr);  // [ 'Satyam', 'Caliber', 'Aditya', 'Harsh', 'Nikhil', 'Ashish' ]

// ------------------------------------------------------------------------------------------------------------------

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const new_another_arr1 = another_arr.flat(Infinity);
console.log(new_another_arr1);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

const new_another_arr2 = another_arr.flat();  
console.log(new_another_arr2);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

const new_another_arr3 = another_arr.flat(2);
console.log(new_another_arr3);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// ------------------------------------------------------------------------------------------------------------------

console.log(Array.isArray("Satyam"));  // false
console.log(Array.isArray(["Satyam"]));  // true

console.log(Array.from("Satyam"));  // [ 'S', 'a', 't', 'y', 'a', 'm' ]
console.log(Array.from("The quick brown fox jumps over the lazy dog."));  // [ 'T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.' ]
console.log(Array.from([1, 2, 3], (x) => x + x));  // [ 2, 4, 6 ]
console.log(Array.from({name: "Satyam", surname: "Pandey", age: 21}));  // []

// ------------------------------------------------------------------------------------------------------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));  // [ 100, 200, 300 ]
console.log(typeof(Array.of(score1, score2,score3)));  // object
console.log(Array.isArray(Array.of(score1, score2,score3)));  // true