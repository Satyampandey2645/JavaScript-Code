let a = 1;
var b = 2;
const c = 3;

function func(){
    let a = 10;
    var b = 20;
    const c = 30;

    console.log("Inside function: ");
    console.log("a: ",a);  // 10
    console.log("b: ",b);  // 20
    console.log("c: ",c);  // 30

    if (true) {
        let a = 100;
        var b = 200;
        const c = 300;

        console.log("Inside block function: ");
        console.log("a: ",a);  // 100
        console.log("b: ",b);  // 200
        console.log("c: ",c);  // 300
    }

    console.log("Inside function but outside block");
    console.log("a: ",a);  // 10
    console.log("b: ",b);  // 200
    console.log("c: ",c);  // 30
}

func();

console.log("Outside function: ");
console.log("a: ",a);  // 1
console.log("b: ",b);  // 2
console.log("c: ",c);  // 3

/*

| Variable      | Declared with   | Scope Type                                                         | Behavior |
| ------------- | --------------- | ------------------------------------------------------------------ | -------- |
| `let a`       | Block Scoped    | Each `{}` or function creates a new `a`.                           |          |
| `var b`       | Function Scoped | Only one `b` inside the function — block doesn’t create a new one. |          |
| `const c`     | Block Scoped    | New `c` for each block or function.                                |          |

*/