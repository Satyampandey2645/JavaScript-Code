// Immediately Invoked Function Expression (IIFE)
/* It’s a function that runs as soon as it’s defined, mainly used to create a private scope and avoid polluting the 
   global namespace. */

// The parentheses around the function make it an expression (not a declaration).
// The final () actually invokes it.

(function chai(){    // named IIFE becoz this function has name 'chai'
    let name = "Satyam";
    console.log(`${name} DB Connected`);
})();  // Satyam DB Connected -> semi-colon is important in the end becoz it is immediatly invoked but it don't know where to stop

// ----------------------------------------------------------------------------------------------------------------------

( () => {  // // unnamed IIFE
    console.log(`DB Connected Two`);
})();  // DB Connected Two

// ----------------------------------------------------------------------------------------------------------------------

( (name) => {
    console.log(`${name} DB Connected Two`);
})("Satyam");  // Satyam DB Connected Two

// ----------------------------------------------------------------------------------------------------------------------
// Avoid polluting the global scope -> Variables inside an IIFE are not accessible outside it.
(function () {
    let secret = "This is private";
})();

//console.log(secret);  // ReferenceError: secret is not defined

// ----------------------------------------------------------------------------------------------------------------------

const app = (() => {
    const user = "Satyam";
    return {
      getUser: () => user
    };
  })();
  
console.log(app.getUser());  // "Satyam"
  