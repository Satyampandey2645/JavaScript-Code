const city = ['Gorakhpur', 'Lucknow', 'Jalandhar', 'Bengaluru', 'Hyderabad'];

city.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// ----------------------------------------------------------------------------------------------------------------------

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);  // js java py 
} )