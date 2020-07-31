'use strict'

//this implementation, makes 4 checks always, to decide waht the letter grade is

let convertToLetter = (grade) => {
    console.log("Input to my functin: ", grade);

    let letter;

    if(grade >= 90) {
        letter = "A";
    } else if (grade >= 80){
        letter = "B";
    } else if (grade >= 75){
        letter = "C";
    } else if (grade >= 70){
        letter = "D"
    } else {
        letter = "F"
    }
    return letter;
}

console.log(convertToLetter("92"));
console.log(convertToLetter("65"));
console.log(convertToLetter("77"));
console.log(convertToLetter("73"));
console.log(convertToLetter("88"));
console.log(convertToLetter(90));