let score = "33";
console.log(typeof score);  // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);  // 33 

// --------------------------------------------------------------------------------------------------------------------

let marks = "33abc"

let valueInNum = Number(marks); 
console.log(typeof valueInNum);  // number
console.log(valueInNum);  // NaN (Not a Number) --> It is also a type

// --------------------------------------------------------------------------------------------------------------------

let runs = null

let runsInNum = Number(runs); 
console.log(typeof runsInNum);  // number
console.log(runsInNum);  // 0

// --------------------------------------------------------------------------------------------------------------------

let health = undefined

let healthInNum = Number(health); 
console.log(typeof healthInNum);  // number
console.log(healthInNum);  // NaN

// --------------------------------------------------------------------------------------------------------------------

let decision = true

let decisionInNum = Number(decision); 
console.log(typeof decisionInNum);  // number
console.log(decisionInNum);  // 1

// --------------------------------------------------------------------------------------------------------------------

let ans = "abc"

let ansInNum = Number(ans); 
console.log(typeof ansInNum);  // number
console.log(ansInNum);  // NaN

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0


// --------------------------------------------------------------------------------------------------------------------

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true

// --------------------------------------------------------------------------------------------------------------------

let newVar = ""

let booleanNewVar = Boolean(newVar);
console.log(booleanNewVar);  // false

// --------------------------------------------------------------------------------------------------------------------

let varNew = "Satyam"

let booleanVarNew = Boolean(varNew);
console.log(booleanVarNew);  // true

// 1 => true, 0 => false
// "" => false
// "Satyam" => true 


// --------------------------------------------------------------------------------------------------------------------

let someNum = 33

let numInString = String(someNum);
console.log(numInString);  // 33
console.log(typeof numInString);  // string 

