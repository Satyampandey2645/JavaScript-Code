// Chapter 4 - 01
console.log("har\"".length);  // 4
console.log("har\"");  // har"

// Chapter 4 - 02
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word)); // true
console.log(sentence.includes(word, 16));  // true  // string.includes(searchString, position)
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);  // The word "fox" is in the sentence

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));  // true
console.log(str1.startsWith('Sat', 3));  // false  // string.startsWith(searchString, position)
console.log(str1.startsWith('Sat', 0));  // true

const str2 = 'Cats are the best!';
console.log(str2.endsWith('best!'));  // true
console.log(str2.endsWith('best', 17));  // true  // string.endsWith(searchString, length)
const str3 = 'Is this a question?';
console.log(str3.endsWith('question'));  // false
console.log(str3.endsWith('question?', 19));  // true

// Chapter 4 - 03
console.log(str2.toLowerCase());  // cats are the best!

// Chapter 4 - 04
let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount);  // 1000
console.log(typeof amount);  // number

// Chapter 4 - 05
let friend = "Deepika";
friend[4] = "R";
console.log(friend);  // Deepika --> friend is not changed because string is immutable