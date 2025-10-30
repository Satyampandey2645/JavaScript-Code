function loginUserMessage1(username){
    return `${username} just logged in`
}

console.log(loginUserMessage1("Satyam Pandey"));  // Satyam Pandey just logged in
console.log(loginUserMessage1(""));  //  just logged in
console.log(loginUserMessage1());  // undefined just logged in

// ----------------------------------------------------------------------------------------------------------------------

function loginUserMessage2(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return;  // it will return undefined
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage2());  // Please enter a username and undefined(in next line)
// undefined becoz When you just write return; (with nothing after it), it means the function returns nothing.
// In JavaScript, when a function returns nothing, its default return value becomes undefined.

// ----------------------------------------------------------------------------------------------------------------------
    // In JavaScript, these values are falsy:  false, 0, "", null, undefined, NaN

function loginUserMessage3(username){
    if(!username){  // checks whether username is falsy.
        console.log("Please enter a username");
        return; 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage3());  // Please enter a username and undefined(in next line)
// username is undefined → !username is true
// prints message and returns nothing (undefined).

// ----------------------------------------------------------------------------------------------------------------------
    /* Here, if we give a default username value as a parameter, the if statement will never execute because if the user 
       doesn’t enter any username, the function will use the default value. But if the user enters a username, the 
       default value will be overwritten. */

function loginUserMessage4(username = "Sam"){  // Here Sam is default username
    if(!username){ 
        console.log("Please enter a username");
        return; 
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage4());  // Sam just logged in
console.log(loginUserMessage4("Hitesh"));  // Hitesh just logged in