const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } 
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }

    })
} );
/* -------- Optimized Version Of Above Code---------

   const buttons = document.querySelectorAll('.button');
   const body = document.body;

   buttons.forEach(button => {
     button.addEventListener('click', (e) => {
       const color = e.target.id;     // get the id like "grey", "blue"
       body.style.backgroundColor = color;
     });
   });

*/