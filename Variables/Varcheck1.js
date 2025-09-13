var a = 2;
function check1() {
    var a = 4;
    if (true) {
        var a = 3;
        console.log(a);  // 3
    } 
    console.log(a);  // 3 
}
check1();  
console.log(a);  // 2


let b = 6;
function check2() {
    let b = 7;
    if (true){
        let b = 8;
        console.log(b);  // 8
    }
    console.log(b);  // 7
}
check2();
console.log(b);  // 6


