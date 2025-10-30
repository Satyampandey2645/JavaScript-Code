function sayMyName() {
    console.log("Satyam Pandey");
}

console.log(sayMyName);  // [Function: sayMyName] -> just a reference of function that tells where the function is stored
sayMyName();  // Satyam Pandey

// ----------------------------------------------------------------------------------------------------------------------

// A parameter is a variable defined in a function's signature, acting as a placeholder for a value.    
// An argument is the actual value passed to the function when it is called

function addTwoNumbers(num1, num2) {  // Here num1 & num2 are paramters
    console.log(num1+num2); 
}

addTwoNumbers(3, 4);  // 7  -> Here 3 & 4 are arguments
addTwoNumbers(3, "4");  // 34  -> Here 3 & "4" are arguments
addTwoNumbers(3, 'a');  // 3a  -> Here 3 & a are arguments
addTwoNumbers(3, null);  // 3  -> Here 3 & null are arguments

const result = addTwoNumbers(5, 10);  // 15
console.log("Result: ", result);  // this will give undefined because this function doesn't return anything

// ----------------------------------------------------------------------------------------------------------------------

function sumOfTwoNum(a, b){
    return a+b;
}

sumOfTwoNum(2, 3);  // this won't print sum of a & b becoz we haven't give any print statment
console.log(sumOfTwoNum(2, 3));  // 5

ans = sumOfTwoNum(6, 7);
console.log("Answer: ",ans);  // 13

// ----------------------------------------------------------------------------------------------------------------------

function sumOfTwoInt(a, b){
    let result = a + b;
    return result;
    console.log("Satyam Pandey");  /* this line will never get printed becoz its a rule of function that Once a function 
                                      executes a return statement, the function immediately exits, and no code after 
                                      return inside that function will ever run.*/
}

const res = sumOfTwoInt(10, 20);
console.log("Result", res);  // 30



