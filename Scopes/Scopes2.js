/* In nested function, the child function(two()) can access variable(username) of parent function(one()) but parent 
   function can't access the variable which are declared in child function 
*/

function one() {
    const username = "Satyam";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);  -> this will throw Reference Error becoz one() can't access website 

    two();
}

one();

// ----------------------------------------------------------------------------------------------------------------------

if(true){
    const username = "Satyam";

    if (username === "Satyam") {
        const website = " Youtube";
        console.log(username+website);  // Satyam Youtube
    }
    console.log(website);  // this will throw Reference Error becoz website cannot be accessed 
}
console.log(username);