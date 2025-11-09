// --------------------------------------------------- In strict mode ---------------------------------------------------
// In strict mode, 'this' becomes undefined.

"use strict";

function thisKeyword1() {
  console.log(this);
}

thisKeyword1();  // undefined

// ----------------------------------------------------------------------------------------------------------------------

function thisKeyword2() {
    let username = "Satyam";
    console.log(this);
}

thisKeyword2();  // undefined

// ----------------------------------------------------------------------------------------------------------------------

function thisKeyword3() {
    let username = "Satyam";
    console.log(this.username);
}

thisKeyword3();  // TypeError: Cannot read properties of undefined (reading 'username') at thisKeyword3

// ----------------------------------------------------------------------------------------------------------------------

const thisKeyword4 = function(){
    let username = "Satyam";
    console.log(this.username);
}

thisKeyword4();  // TypeError: Cannot read properties of undefined (reading 'username') at thisKeyword3