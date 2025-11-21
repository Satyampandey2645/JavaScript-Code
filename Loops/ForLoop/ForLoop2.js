let myArray = ["Flash", "Batman", "Superman"];

console.log(myArray.length);  // 3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// ---------------------------------------------------------------------------------------------------------------------

// Program to add first n natural number
let sum = 0;
let n = prompt("Enter your number");
n = Number.parseInt(n);
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first "+ n +" natural number is " +sum);