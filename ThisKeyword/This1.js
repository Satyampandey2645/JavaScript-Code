// The 'this' keyword refers to the object that is currently executing the function. 
// 'this' refers to the object that calls the function.
// In a browser, this → window(Global object in browser)
// In Node.js, this → {} (empty object in a module)

const user = {
    username: "Satyam",
    age: 21,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();  
/* 
    Satyam, welcome to website
    { username: 'Satyam', age: 21, welcomeMessage: [Function: welcomeMessage] }
*/

user.username = "Sam";
user.welcomeMessage();
/* 
    Sam, welcome to website 
    { username: 'Sam', age: 21, welcomeMessage: [Function: welcomeMessage] }
*/

console.log(this);  // {} -> {} is an empty object
// Here this refers to {} becoz there is no context exist globally