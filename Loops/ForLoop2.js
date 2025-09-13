let obj = {
    harry : 90,
    shubh : 45,
    shivika : 56,
    ritika : 57,
    shiv : 23 
}
// -------------------- for_in --------------------
for(let key in obj) { 
    console.log("Marks of "+ key +" are "+obj[key]);
}
 
// -------------------- for_of --------------------
for (let b of "HARRY") {
    console.log(b);
}
