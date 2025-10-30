const mySym = Symbol();

const JsUser = {
    name: "Satyam",
    "user name": "Satyampandey2645",
    [mySym]: "mykey1",
    age: 21,
    location: "Gorakhpur",
    email: "satyamp1303@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting);  // [Function (anonymous)] 
// This does not call the function. It only returns a reference to it (basically a pointer to where the function is stored in memory).


console.log(JsUser.greeting());  // Hello Js User and undefined(in next line)
// The parentheses () actually invoke (call) the function.
// So the body of the function runs, and "Hello Js User" is printed.
// function greeting doesn’t return anything — it only does a console.log().
// By default, in JavaScript, a function that doesn’t return anything returns undefined.