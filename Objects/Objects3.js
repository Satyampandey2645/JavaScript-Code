const mySym = Symbol();

const JsUser = {
    name: "Satyam",
    "user name": "Satyampandey2645",
    [mySym]: "mykey1",
    age: 21,
    location: "Gorakhpur",
    email: "satyamp1303@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());  // Hello Js User and undefined(in next line)
console.log(JsUser.greetingTwo());  // Hello Js User, Satyam and undefined(in next line)
