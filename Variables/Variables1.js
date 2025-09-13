const accId = 144553;
let accEmail = "satyamp1303@gmail.com";
var accPass = "12345";
accCity = "Jaipur";
let accState;

// accId = 144663  // TypeError: Assignment to constant variable.
// console.log(accId);  

accEmail = "shivam.pandey224@gmail.com";
accPass = "987654";
accCity = "Bengaluru";

console.table([accId, accEmail, accPass, accCity, accState])

console.log(typeof accId);  // number
console.log(typeof accEmail);  // string
console.log(typeof accPass);  // string
console.log(typeof accCity);  // string
console.log(typeof accState);  // undefined