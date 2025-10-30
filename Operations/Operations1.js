let value = 3

let newValue = -value;
console.log(newValue);

// --------------------------------------------------------------------------------------------------------------------

let str1 = "Hello"
let str2 = " Satyam"

let str3 = str1 + str2;
console.log(str3);  // Hello Satyam

// --------------------------------------------------------------------------------------------------------------------

let add1 = "1" + 2;
let add2 = 1 + "2";
let add3 = "1" + 2 + 2;
let add4 = 1 + 2 + "2";
console.log(add1, add2, add3, add4);  // 12 12 122 32
console.log(typeof add1);  // string
console.log(typeof add2);  // string
console.log(typeof add3);  // string
console.log(typeof add4);  // string

let sub1 = "1" - 2;
let sub2 = 1 - "2";
let sub3 = "1" - 2 - 2;
let sub4 = 1 - 2 - "2";
console.log(sub1, sub2, sub3, sub4);  // 12 12 122 32
console.log(typeof sub1);  // number
console.log(typeof sub2);  // number
console.log(typeof sub3);  // number
console.log(typeof sub4);  // number


// --------------------------------------------------------------------------------------------------------------------

console.log(+true);  // 1  --> not good format
console.log(+"");  // 0 --> not good format


let num1, num2, num3;
num1 = num2 = num3 =2 + 2;  // not good format so never assign like this