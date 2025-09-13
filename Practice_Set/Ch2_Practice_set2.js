// Chapter 2 - 01
let age = prompt("What is your age?")
age = Number.parseInt(age);
// The prompt() function returns user input as a string.
// Number.parseInt(age) converts it to an integer.
if (age>10&&age<20) {
    console.log("Your age lies between 10 and 20");
} else{
    console.log("Your age doesn't lies between 10 and 20");
}

// Chapter 2 - 02
switch (age) {
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not special");
        break;
}

// Chapter 2 - 03
let num = prompt("What is your age?")
num = Number.parseInt(num);
if (num%2==0 && num%3==0) {
    console.log("Your number is divisible by 2 and 3");
}else{
    console.log("Your number is not divisible by 2 and 3");
}

// Chapter 2 - 04
let numb = prompt("What is your age?")
numb = Number.parseInt(numb);
if (number % 2 === 0 && number % 3 === 0) {
    console.log(number + " is divisible by both 2 and 3.");
} else if (number % 2 === 0) {
    console.log(number + " is divisible by 2.");
} else if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 2 or 3.");
}

// Chapter 2 - 05
let a = 12;
console.log("You can", age<18 ? "not drive" : "drive");
