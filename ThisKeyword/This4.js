/* Regular function called directly (not as a method). Inside, this → refers to the global object 
   (window in browser / global in Node.js). Since there’s no name property on the global object → undefined. */
function thisFunc() {
    let name = "Satyam";
    console.log(this.name);
}

thisFunc();  // undefined

// ----------------------------------------------------------------------------------------------------------------------
/* Arrow functions don’t have their own this. They lexically inherit this from their surrounding scope. The surrounding 
scope here is global, where username doesn’t exist → undefined. */
const arrowFunc1 = () => {
    let username = "Satyam";
    console.log(this.username);
}

arrowFunc1();  // undefined

// ----------------------------------------------------------------------------------------------------------------------
/* In Node.js, arrow functions inherit 'this' from the module scope, which is {}. In Node.js, the top-level this refers 
   to an empty object ({}), not the global object like window in the browser.They don't have their own 'this', unlike 
   regular functions. */
const arrowFunc2 = () => {
    let username = "Satyam";
    console.log(this); 
}

arrowFunc2();  // {}

// ----------------------------------------------------------------------------------------------------------------------
/* Here, the function showThis is called as a method of user1. So 'this' → refers to the object that called it, 
   i.e. user1. Therefore, this.username → "Satyam". */
const user1 = {
    username: "Satyam",
    showThis: function() {
        console.log(this.username);  // Here, this refers to the object that called the function (user).
    }
};

user1.showThis(); // "Satyam"

// ----------------------------------------------------------------------------------------------------------------------
/* Arrow functions don’t have their own 'this' they inherit it from the surrounding (lexical) scope. In this case, the 
   outer scope is global, where username doesn’t exist. Since the global object doesn’t have username → undefined. */
const user2 = {
    username: "Satyam",
    showThis: () => {
      console.log(this.username);  // Here, this does not refer to user.
    }
  };
  
  user2.showThis(); // undefined

/*
| Scenario           | Function Type | Called From    | `this` Refers To             | Output      |
| ------------------ | ------------- | -------------- | ---------------------------- | ----------- |
| `thisFunc()`       | Regular       | Global         | Global object                | `undefined` |
| `arrowFunc()`      | Arrow         | Global         | Global scope (no `username`) | `undefined` |
| `user1.showThis()` | Regular       | `user1` object | `user1`                      | `"Satyam"`  |
| `user2.showThis()` | Arrow         | `user2` object | Outer (global) scope         | `undefined` |
*/  
  