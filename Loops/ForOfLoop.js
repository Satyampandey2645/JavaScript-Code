// For arrays we use for_of loop
let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

// ----------------------------------------------------------------------------------------------------------------------

const greetings = "Hello World!";

for (const greet of greetings) {
    console.log(`Each of char is ${greet}`);
}

// ----------------------------------------------------------------------------------------------------------------------
/* Maps -> Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the
           Map's collection. */ 
           
const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

console.log(map);  // Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'FR' => 'France' }

for(const key of map){
    console.log(key);  // [ 'IN', 'India' ] [ 'USA', 'United States of America' ] [ 'FR', 'France' ]
}

for (const [key, value] of map) {  // destructuring array by using [key, value]
    console.log(`${key} :- ${value}`);  // IN :- India   USA :- United States of America   FR :- France
}