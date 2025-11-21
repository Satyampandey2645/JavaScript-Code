// .filter() → returns a new array with elements that satisfy the condition
// .filter() → returns elements that pass a condition (true/false)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter( (num) => num > 4 );
const newNums2 = myNums.filter( (num) => {
    return num > 4 ;
} )

console.log(newNums1);  // [ 5, 6, 7, 8, 9, 10 ]
console.log(newNums2);  // [ 5, 6, 7, 8, 9, 10 ]

// ----------------------------------------------------------------------------------------------------------------------
// Above operation using forEach loop

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

myArr.forEach( (num) => {
    if (num > 4) {
        newArr.push(num);
    }
} )

console.log(newArr);  // [ 5, 6, 7, 8, 9, 10 ]


