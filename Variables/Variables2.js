let a = 67;
console.log(a);   // 67

a = "Hi! I'm Satyam";
console.log(a); // Hi! I'm Satyam


// ----- var -----
var b = 20;
console.log(b);  // 20
{
    var b = 10;
    var c = 5;
    console.log(b);  // 10
    console.log(c);  // 5
}
console.log(b);  // 10
console.log(c);  // 5



// ----- let -----
let p = 100;
console.log(p);  // 100
{
    let p = 50;
    let q = 40;
    console.log(p);  // 50 
    console.log(q);  // 40
}
console.log(p);  // 100
// console.log(q);  // error

// --- redeclaration of var ---
var x = 23;
var x = "Satyam";
console.log(x);  // Satyam

// --- redeclaration of let ---
let y = 30;
// let y = 40;   ---> it will throw an error because we can't declare same variable again, we can update value of variable but can't redeclare it with datatypes
console.log(y);  // 30

y = 40;
console.log(y);  // 40