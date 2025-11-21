/* --------- We can run this code in browsers console or in replit only ---------

let a = prompt("Hey, whats your age?");
a=Number.parseInt(a);  // converting a string into a number
if (a<0) {
    alert("This is an invalid age");
} else if(a<9) {
    alert("You are a kid and you cannot even think of driving");
} else if ((a<18)&&(a>9)){
    alert("You are a kid and you can think of driving after 18");
} else{
    alert("You can now drive as you are above 18");
}
*/

// ----------------------------------------------------------------------------------------------------------------------

let a = 19;
if (a<0) {
    console.log("This is an invalid age");
} else if(a<9) {
    console.log("You are a kid and you cannot even think of driving");
} else if ((a<18)&&(a>9)){
    console.log("You are a kid and you can think of driving after 18");
} else{
    console.log("You can now drive as you are above 18");
}




