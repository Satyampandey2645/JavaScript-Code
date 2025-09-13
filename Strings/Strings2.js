let name = "Harry";
console.log(name.length);  // 5   // its a property(name.length)
console.log(name.toUpperCase());  // HARRY  // its a built-in string function
console.log(name.toLowerCase());  // harry
console.log(name.slice(2,4));  // rr
console.log(name.slice(1,3));  // ar
console.log(name.slice(1));  // arry
console.log(name.slice(2));  // rry
console.log(name.replace("Har","Per"));  // Perry

let name1 = "Harry";
let name2 = "Naman";
console.log(name1.concat(" is a friend of ", name2, ", Ok"));  // Harry is a friend of Naman, Ok  
console.log(name1+name2);  // HarryNaman

let name3 = "      Satyam       ";
console.log(name3);  //        Satyam       
console.log(name3.trim());  // Satyam
/* The .trim() method in JavaScript is used to remove whitespace characters (spaces, tabs, newlines, etc.) 
   from both the beginning and end of a string.
*/

// --------------- Quick Quiz ---------------
let word = "Shivika"
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}


