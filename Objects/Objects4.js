// A constructor is a special function used to create and initialize objects in JavaScript.
// It serves as a blueprint for creating multiple objects that share the same structure (properties and methods).

const tinderUser = new Object();  // singleton object
// const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// ---------------------------------------------------------------------------------------------------------------------

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "Pandey"
        }
    }
}

console.log(regularUser.fullname);  // { userfullname: { firstname: 'Satyam', lastname: 'Pandey' } }
console.log(regularUser.fullname.userfullname);  // { firstname: 'Satyam', lastname: 'Pandey' }
console.log(regularUser.fullname.userfullname.firstname);  // Satyam