// Array is a collection of elements, arrays are mutable that can be changed

let marks = [98, 82, 63, 84, false, "Not Given"];

console.log(marks);  // [ 98, 82, 63, 84, false, 'Not Given' ]
console.log(marks[0]);  // 98
console.log(marks[1]);  // 82
console.log(marks[2]);  // 63
console.log(marks[3]);  // 84
console.log(marks[4]);  // false
console.log(marks[5]);  // Not Given
console.log(marks[6]);  // undefined
console.log(marks.length);  // 6 

marks[4] = 93;
console.log(marks);  // [ 98, 82, 63, 84, 93, 'Not Given' ]

marks[7] = 67;
console.log(marks);  // [ 98, 82, 63, 84, 93, 'Not Given', <1 empty item>, 67 ]

console.log(typeof marks);  // object

// -----------------------------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];

console.log(arr);  // [ 1, 2, 3, 4, 5 ]
arr[1] = 9;
arr[6] = 8;
console.log(arr);  // [ 1, 9, 3, 4, 5, <1 empty item>, 8 ]
console.log(typeof arr);  // object

// -----------------------------------------------------------------------------------------------------------------

const myArr = new Array("Thor", "Batman", "Superman", "Ironman");
console.log(myArr);  // [ 'Thor', 'Batman', 'Superman', 'Ironman' ]
console.log(myArr[0]);  // Thor

// -----------------------------------------------------------------------------------------------------------------

// Quick Quiz
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}