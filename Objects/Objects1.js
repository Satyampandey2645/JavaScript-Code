// --------------------------------------------------- Object literals --------------------------------------------------

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

console.log(JsUser.email);  // satyamp1303@gmail.com
// console.log(JsUser[email]);  --> this will throw an error that's why we need to use double quote
console.log(JsUser["email"]);  // satyamp1303@gmail.com
console.log(JsUser["user name"]);  // Satyampandey2645
console.log(JsUser[mySym]);  // mykey1
console.log(typeof JsUser[mySym]);  // string  -> Because "mykey1" is literally a string value assigned to that symbol key.
console.log(typeof mySym);  // symbol


JsUser.email = "satyampandey2645@gmail.com"; 

// If you want to make the object immutable (no one can change it), you can use:
Object.freeze(JsUser);
JsUser.email = "newemail@gmail.com"; // ❌ won’t change
console.log(JsUser.email); // still satyampandey2645@gmail.com

console.log(JsUser);


// -------------------------------------------------------------------------------------------------------------------

const obj = new Object();
console.log(obj);  // {}