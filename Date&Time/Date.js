let myDate = new Date();

console.log(typeof myDate);  // object
console.log(myDate.toString());  // Wed Oct 08 2025 12:50:35 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());  // 2025-10-08T07:20:35.659Z
console.log(myDate.toUTCString());  // Wed, 08 Oct 2025 07:20:35 GMT
console.log(myDate.toDateString());  // Wed Oct 08 2025
console.log(myDate.toJSON());  // 2025-10-08T07:20:35.659Z
console.log(myDate.toLocaleString());  // 8/10/2025, 12:50:35 pm
console.log(myDate.toLocaleDateString());  // 8/10/2025

// --------------------------------------------------------------------------------------------------------------------

let myCreatedDate = new Date(2023, 0 ,23);  // In Js, months starts with 0 i.e

console.log(myCreatedDate);  // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// --------------------------------------------------------------------------------------------------------------------

let myCreatedDateTime = new Date(2023, 0 ,23, 5, 3);  // In Js, months starts with 0 i.e

console.log(myCreatedDateTime);  // 2023-01-22T23:33:00.000Z
console.log(myCreatedDateTime.toLocaleString());  // 23/1/2023, 5:03:00 am

// --------------------------------------------------------------------------------------------------------------------

let myFormedDate = new Date("2023-01-14");  

console.log(myFormedDate.toLocaleString());  // 14/1/2023, 5:30:00 am

// --------------------------------------------------------------------------------------------------------------------

let myFormedDate2 = new Date("03-13-2024");  

console.log(myFormedDate2.toLocaleString());  // 13/3/2024, 12:00:00 am

// --------------------------------------------------------------------------------------------------------------------

let newDate = new Date();

console.log(newDate.getMonth());  // it will show current month in number and month starts from 0 for January
console.log(newDate.getMonth()+1);  // // it will show current month with current number
console.log(newDate.getFullYear());  // it will show current year
console.log(newDate.getDate());  // it will return current date
console.log(newDate.getDay());  // it will return current day of week in number and day starts from Sunday and 0 is for Sunday

// --------------------------------------------------------------------------------------------------------------------

newDate.toLocaleString('default', {
    weekday: "long",                 // we can see all properties by clicking ctrl+space
});
