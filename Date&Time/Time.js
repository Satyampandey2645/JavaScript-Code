let myCreatedDate = new Date();
console.log(myCreatedDate.getTime());  // it will also show current time in millisecond from 1 jan 1970

// ---------------------------------------------------------------------------------------------------------------

let myTimeStamp = Date.now();  // it will show current time in millisecond from 1 jan 1970

console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));  // it will show current time in seconds from 1 jan 1970
console.log(Math.floor(Date.now()/1000));  // it will also show current time in seconds from 1 jan 1970
