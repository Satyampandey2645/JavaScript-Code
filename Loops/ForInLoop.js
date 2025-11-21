// For Objects we use for_in loop
let myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for(let key in myObj) { 
    console.log(key);  // js cpp rb py
}

for(let key in myObj) { 
    console.log(`${key} is shortcut of ${myObj[key]}`);  
}

// ----------------------------------------------------------------------------------------------------------------------

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    console.log(key);  // 0 1 2 3 4
}

for (const key in programming) {
    console.log(programming[key]);  // js rb py java cpp
}

// ----------------------------------------------------------------------------------------------------------------------

const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);  // this won't give any output bcoz Maps are not iterable
}