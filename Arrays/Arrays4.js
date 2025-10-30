let myArr = [1, 2, 3, 4, 5]

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(4));  // 3
console.log(myArr.indexOf(9));  // -1 -> becoz 9 is not included in myArr

// ------------------------------------------------------------------------------------------------------------------

console.log("A ", myArr);  // A  [ 1, 2, 3, 4, 5 ]

let newArr1 = myArr.slice(1, 3);
console.log(newArr1);  // [ 2, 3 ]
console.log("B ", myArr);  // B  [ 1, 2, 3, 4, 5 ]

let newArr2 = myArr.splice(1, 3);
console.log(newArr2);  // [ 2, 3, 4 ]
console.log("C ", myArr);  // C  [ 1, 5 ]

// ------------------------------------------------------------------------------------------------------------------

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);  // Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);  // [ 'Jan', 'Feb', 'March', 'April', 'May' ]