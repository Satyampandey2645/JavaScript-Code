/* Strings are immutable means we can't change a string or any character of any string means a original string can 
   never be changed, we can make new string but can't change an existed string or its character */
let name = "Harry"+"Shivika";
console.log(name.length);  // 12
console.log(name[0]);  // H
console.log(name[1]);  // a
console.log(name);  // HarryShivika
// name[2] = "o";  // This is not possible  

let friend = 'Prakash';
console.log(friend.length);  // 7

// ------------------ Template Literals ------------------
let boy1 = "Pramod";
let boy2 = "Nikhil";
let sentence = `${boy1} is a friend of ${boy2}`; // String interpolation
console.log(sentence);  // Pramod is a friend of Nikhil

// ------------------ Escape Sequence Characters ------------------
let fruit = 'Ban\'ana'
console.log(fruit);  // Ban'ana
console.log(fruit.length);  // 7

let str = "Hi I\'m Satyam \"Pandey";
console.log(str);  // Hi I'm Satyam "Pandey

let sent = "My name is Harry \ I'm a developer"
console.log(sent);  // My name is Harry  I'm a developer

let sente = "My name is Harry\nI'm a developer"
console.log(sente);  // My name is Harry
                     // I'm a developer

let senten = "My name is Harry\tI'm a developer"
console.log(senten);  // My name is Harry        I'm a developer

// about \r
let sentenc = "My name is Harry\rI am a developer"
console.log(sentenc);

let a = "Goodbye\rHi";
console.log(a);  // Hiodbye
/*
Step-by-Step Execution
1. "Goodbye" is printed first.
2. \r moves the cursor back to the beginning.
3. "Hi" is written from the start, replacing the first two letters of "Goodbye", but the remaining characters ("odbye") are still there.
4. The final output looks like:  Hiodbye
*/


