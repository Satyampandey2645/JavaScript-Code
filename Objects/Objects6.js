// When data comes from a database (like MongoDB, MySQL, or Firebase), it usually comes as an array of objects.

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "def@gmail.com"
    },
    {
        id: 3,
        email: "ghi@gmail.com"
    }
]

console.log(users[0].id);  // 1
console.log(users[1].email);  // def@gmail.com

// ----------------------------------------------------------------------------------------------------------------------

const tinderUser = new Object(); 

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]
// Object.keys() and Object.values() both returns an array of keys and values of object respectively.

console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Object.entries() makes array of every single key-value pairs and store these arrays of key/value in a single array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
console.log(tinderUser.hasOwnProperty('email'));  // false