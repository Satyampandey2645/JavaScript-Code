// trim()
let strr = "    Satyam    Pandey       "
console.log(strr);  //     Satyam    Pandey       
console.log(strr.trim());  // Satyam    Pandey
console.log(strr.trimStart());  // Satyam    Pandey       
console.log(strr.trimEnd());  //     Satyam    Pande


// replace()
const url = "https://satyam.com/satyam%20pandey";
const newUrl = url.replace('%20', '-');
console.log(newUrl);  // https://satyam.com/satyam-pandey


// includes()
console.log(url.includes("satyam"));  // true
console.log(url.includes("pandey"));  // true
console.log(url.includes("hello"));  // false


// split()
/* The split() method of String values takes a pattern and divides this string into an ordered list of substrings 
   by searching for the pattern, puts these substrings into an array, and returns the array. */
let user = "satyam-pandey-sp";
let word = user.split('-');
console.log(word);  // [ 'satyam', 'pandey', 'sp' ]
console.log(word[0]);  // satyam
console.log(word[1]);  // pandey
console.log(word[2]);  // sp
console.log(Array.isArray(word));  // true

let char = user.split('');
console.log(char);  
/* Expected Output:
  [
    's', 'a', 't', 'y',
    'a', 'm', '-', 'p',
    'a', 'n', 'd', 'e',
    'y', '-', 's', 'p'
  ]
*/
console.log(char[0]);  // s
console.log(char[1]);  // a
console.log(char[2]);  // t
console.log(char[3]);  // y


const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words);  // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the',   'lazy', 'dog.' ]
console.log(words[3]);  // fox

const chars = str.split("");
console.log(chars);  // [ 'T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.' ]
console.log(chars[8]);  // k

const strCopy = str.split();
console.log(strCopy);  // [ 'The quick brown fox jumps over the lazy dog.' ]
console.log(strCopy[0]);  // The quick brown fox jumps over the lazy dog.
console.log(strCopy[1]);  // undefined


// small()
let varr = "satyam-pandey";
let newVarr = varr.small();
console.log(newVarr);  // <small>satyam-pandey</small>


