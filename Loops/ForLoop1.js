// Program to add first n natural number
let sum = 0;
let n = prompt("Enter your number");
n = Number.parseInt(n);
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first "+ n +" natural number is " +sum);