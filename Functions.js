function onePlusAvg(x, y){
    return Math.round(1+(x+y)/2)
}

const sum = (p, q) => {  // This is an arrow function
    return p+q;
}

const hello = () => {
    console.log("Hello World");
}

let a = 3;
let b = 4;
let res = onePlusAvg(a,b);
console.log(res);
console.log(sum(9, 7));
hello();
