// arrow function explicit return means using return keyword
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(10, 20));  // 30

// ----------------------------------------------------------------------------------------------------------------------
// arror function implicit return means without using return keyword
const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(1, 9));  // 10

// ----------------------------------------------------------------------------------------------------------------------

const sumOfTwo = (num1, num2) => ( num1 + num2 );
console.log(sumOfTwo(100, 200));  // 300

// ----------------------------------------------------------------------------------------------------------------------

const passObject = () => ( {username: "Satyam"} );
console.log(passObject());  // { username: 'Satyam' }
