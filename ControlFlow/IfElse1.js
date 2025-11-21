const temperature = 51;

if (temperature >= 50) {
    console.log("Temperature is greater than 50");
} else {
    console.log("Temperature is less than 50");
}

console.log("Executed");

// ----------------------------------------------------------------------------------------------------------------------

const balance = 1000;

if (balance > 500) console.log("test1"), console.log("test2");  // -> implicit scope  
// Don't use ',' for separating statements, its not a good practice, use this if method for only one statment

// ----------------------------------------------------------------------------------------------------------------------

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// ----------------------------------------------------------------------------------------------------------------------

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
} 

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}