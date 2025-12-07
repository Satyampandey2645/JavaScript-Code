const form = document.querySelector('form');

/* ---------- this use case will give you empty when this code runs outside the event listener ----------
   const height = parseInt(document.querySelector('#height').value); 
   const weight = parseInt(document.querySelector('#weight').value); 
*/

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // display the result
        
        if (bmi < 18.6) {
            results.innerHTML = `<span>Your BMI: ${bmi}</span><br>Under Weight`;
        } 
        else if (bmi < 24.9) {
            results.innerHTML = `<span>Your BMI: ${bmi}</span><br>Normal Range`;
        } 
        else {
            results.innerHTML = `<span>Your BMI: ${bmi}</span><br>Overweight`;
        }
        
        /*  ---- Optional ----
        
          let message = "";

          if (bmi < 18.6) {
              message = "Under Weight";
          } else if (bmi < 24.9) {
              message = "Normal Range";
          } else {
              message = "Overweight";
          }

          results.innerHTML = `<p><strong>BMI:</strong> ${bmi}</p>
          <p>${message}</p>`;
        */
    }
    
});