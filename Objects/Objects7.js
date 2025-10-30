const course = {
    courseName: "Js In Hindi",
    coursePrice: "999",
    courseInstructor: "Hitest Choudhary" 
}

// Object de-structuring means Extract property with same name
const { courseInstructor } = course;
console.log(courseInstructor);  // Hitest Choudhary


// if we want to rename keys of object means Extract and rename it 
// You didn’t rename the key in the object.
// You just created a different variable name pointing to the same value.
const { courseInstructor: instructor } = course;
console.log(instructor);  // Hitest Choudhary
console.log(course);  // { courseName: 'Js In Hindi', coursePrice: '999', courseInstructor: 'Hitest Choudhary' }


/* ------ React de-structuring example ------

   const navbar = ({ company }) => {

   }
   navbar(company = "Satyam")

*/

// ------------------------------------------------- Api JSON Format ----------------------------------------------------
/*

{
    "courseName": "Js In Hindi",
    "coursePrice": "free",
    "courseInstructor": "Hitest Choudhary"     
}

*/

// ------------------------------------------------- Api Array Format ----------------------------------------------------
// Sometimes, we get api in arrays format
[
    {},
    {},
    {}
]
// We can pick random api for testing from "https://randomuser.me/" website
// We can format any api json to know about its format from "https://jsonformatter.org/" website
