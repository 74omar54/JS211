'use strict'

// I want to create a function that takes in a numeric grade
// and returns the equivalent letter grade

let convertToLetter = (grade) => {
    console.log("Input to my function: ", grade);

    if (grade > 89){
        return "A";
    }
    if (grade > 79){
        return "B";
    
    }
    if (grade > 74){
        return "C";
    }
    if (grade > 69 ){
        return "D";
    }
    else {
        return "F";
    }
}
console.log(convertToLetter("92"));
console.log(convertToLetter("65"));
console.log(convertToLetter("77"));
console.log(convertToLetter("73"));
console.log(convertToLetter(90));