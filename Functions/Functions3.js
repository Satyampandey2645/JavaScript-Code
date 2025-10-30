// The syntax (...num) is called a rest parameter.
// It collects all remaining arguments passed to the function into a single array.
function calculateCartPrice1(...num){
    return num;
}

console.log(calculateCartPrice1(200, 300, 400, 500));  // [ 200, 300, 400, 500 ]

// ----------------------------------------------------------------------------------------------------------------------

function calculateCartPrice2(val1, val2, ...num){
    return val1, val2, num; 
    // The comma operator (,) in JavaScript evaluates all expressions, but returns only the value of the last one.
}

console.log(calculateCartPrice2(200, 300, 400, 500));  // [ 400, 500 ] 
// evaluate val1 -> 200, val2 -> 300 , evaluate num -> [ 400, 500 ] and return only the last value (num)

// ----------------------------------------------------------------------------------------------------------------------
// If you actually want to return all values 
// Option 1 — Return as array: 

function calculateCartPrice3(val1, val2, ...num){
    return [val1, val2, num];
}

console.log(calculateCartPrice3(200, 300, 400, 500));  // [ 200, 300, [ 400, 500 ] ]

// Option 2 — Return as object (cleaner):

function calculateCartPrice4(val1, val2, ...num) {
    return { val1, val2, num };
}

console.log(calculateCartPrice4(200, 300, 400, 500));  // { val1: 200, val2: 300, num: [400, 500] }

