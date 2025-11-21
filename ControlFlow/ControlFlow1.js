// Falsy Values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values -> "0", "false", " ", [], {}, function(){}

const userEmail = "satyam123@gmail.com";

if (userEmail) {  // string is truthy value
    console.log("Got user Email");  // this will be output
} else {
    console.log("Don't have user Email");
}

// ----------------------------------------------------------------------------------------------------------------------

const userEmail1 = "";  

if (userEmail1) {  // empty string is falsy value
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");  // this will be output
}

// ----------------------------------------------------------------------------------------------------------------------

const userEmail2 = " ";  

if (userEmail2) {  
    console.log("Got user Email");  // this will be output
} else {
    console.log("Don't have user Email");  
}

// ----------------------------------------------------------------------------------------------------------------------

const userEmail3 = [];

if (userEmail3) {  // empty string is truthy value
    console.log("Got user Email");  // this will be output
} else {
    console.log("Don't have user Email");
}

// ----------------------------------------------------------------------------------------------------------------------
// way to check its an empty array
if (userEmail3.length === 0) {
    console.log("Array is Empty");  // this will be output
} else{
    console.log("Not an empty array");
}

// ----------------------------------------------------------------------------------------------------------------------
// way to check its an empty object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");  // this will be output
} else{
    console.log("Not an empty object")
}
