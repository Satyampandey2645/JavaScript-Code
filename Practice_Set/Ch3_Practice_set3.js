// Chapter 3 - 01
let marks = {
    Harry : 98,
    Rohan : 70,
    Aakash : 7
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]); 
}

// Chapter 3 - 02
for (const key in marks) {
    console.log("Marks of "+key+" is "+marks[key]);
}

// Chapter 3 - 03
let cn = 4;
let i;
while (i!=cn) {
    i = prompt("Enter a number");
    console.log("Try again");
};
console.log("You have entered a correct number"); 

// Chapter 3 - 04
const mean = (a, b, c, d) => {
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));
