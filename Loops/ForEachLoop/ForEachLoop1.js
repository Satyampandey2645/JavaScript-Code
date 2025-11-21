/* A callback function is a function passed as an argument to another function, which is then executed later after some 
   operation is completed */ 
   
const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach( function (item){
    console.log(item);  // js ruby java python cpp
} )

// ----------------------------------------------------------------------------------------------------------------------

const superheroes = ['Ironman', 'Thor', 'Captain America', 'Hulk']

superheroes.forEach( (val) => {
    console.log(val);  // Ironman Thor Captain America Hulk
} )

// ----------------------------------------------------------------------------------------------------------------------

const name = ['Satyam', 'Aditya', 'Nikhil', 'Sahil'];

function printMe(item) {
    console.log(item);
}

name.forEach(printMe);  // Satyam Aditya Nikhil Sahil




