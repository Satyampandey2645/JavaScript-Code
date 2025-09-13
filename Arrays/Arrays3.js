let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num[1];
console.log(num);  // [ 1, <1 empty item>, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num.length);  // 9

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [111, 112, 113, 114, 115, 116]
let newArray1 = num1.concat(num2);
let newArray2 = num1.concat(num2, num3);
console.log(newArray1);  // [ 1,  2,  3,  4,  5,  6,  7, 8,  9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
console.log(newArray2);  // [ 1,  2,  3,  4,  5,  6,  7, 8,  9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 111, 112, 113, 114, 115, 116 ]

let num4 = [34, 12, 8, 87, 23, 9, 1];
num4.sort()
console.log(num4);  // [ 1, 12, 23, 34, 8, 87,  9 ]