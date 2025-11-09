// ------------------------------------------------- In non-strict mode -------------------------------------------------
// In a regular function, 'this' refers to the global object (window in browser, undefined in Node.js strict mode).
// In Node.js (non-strict mode), 'this' in a regular function refers to the global object

function thisKeyword1() {
    console.log(this);
}

thisKeyword1();  // <ref *1> Object [global] { ... }

// ----------------------------------------------------------------------------------------------------------------------

function thisKeyword2() {
    let username = "Satyam";
    console.log(this);
}

thisKeyword2();  // <ref *1> Object [global] { ... }

// ----------------------------------------------------------------------------------------------------------------------

const thisKeyword3 = function(){
    let username = "Satyam";
    console.log(this.username);
}

thisKeyword3();  // undefined

// ----------------------------------------------------------------------------------------------------------------------

function thisKeyword4() {
    let username = "Satyam";
    console.log(this.username);
}

thisKeyword4();  // undefined
// 'this.username' is undefined because 'username' is a local variable, not a property of any object.
/*
  Here, (username)variable belongs only to the function’s local scope, not to any object.
  And I'm trying to access like: this.username
  But here, this refers to:
   * window (in browser, non-strict mode)
   * global (in Node.js, non-strict mode)
   * undefined (in strict mode)
  Since the global object doesn’t have a property called username, it prints: undefined 

  If you put username as a property of an object, this will point to it:
  const user = {
    username: "Satyam",
    showThis() {
        console.log(this.username);
    }
  };

  user.showThis(); // "Satyam"
*/
