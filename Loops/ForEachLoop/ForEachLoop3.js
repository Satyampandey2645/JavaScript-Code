const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

const values1 = coding.forEach( (item) => {
    console.log(item);
} )

console.log(values1);  // js ruby java python cpp undefined

const values2 = coding.forEach( (item) => {
    console.log(item);
    return item;
} )

console.log(values2);  // js ruby java python cpp undefined

const values3 = coding.forEach( (item) => {
    return item;
} )

console.log(values3);  // undefined

/* conclusion of above three operations is that: The JavaScript Array.prototype.forEach() method does not return a 
   value. It always returns undefined. */