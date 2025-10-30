// Passing array in a function

const myArray = [200, 400, 100, 600];

function handleArray1(getArray) {
    return getArray[0];
}

console.log(handleArray1(myArray));  // 200

// ----------------------------------------------------------------------------------------------------------------------

function handleArray2(getArray) {
    return getArray[2];
}

// directly passing arrays during function call
console.log(handleArray2([1000, 2000, 999]));  // 999