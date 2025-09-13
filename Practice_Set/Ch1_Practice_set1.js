// Chapter 1 - 01
let a = "Hello";
let b = 67;
console.log(a + b);  // Hello67

// Chapter 1 - 02
console.log(typeof (a + b));  // string

// Chapter 1 - 03
const c = {
    name : "Harry",
    section : 1,
    isPrincipal : false
}
// c = 54;  // --> it will throw an error bcoz c is constant 
// c = {}   // --> it will throw an error bcoz c is constant  
// we can't change value of c but we can change its keys values if c is an object 

// Chapter 1 - 04
c['age'] = 23; // we can also write it as c.age = 23
c.name = "Satyam";
console.log(c)  // { name: 'Satyam', section: 1, isPrincipal: false, age: 23 }
console.log(typeof c.age)  // number
console.log(c.name);  // Satyam

// Chapter 1 - 05
const dict = {
    Ephemeral : "fleeting or temporary",
    Ineffable : "Too great or extreme to be expressed in words",
    Sanguine : " Optimistic or positive, especially in a bad or difficult situation",
    Voracious : "Having a very eager approach to something, especially in terms of appetite or desire",
    Serendipity : "The occurrence of events by chance in a happy or beneficial way"
}
console.log(dict.Ephemeral);  // fleeting or temporary


