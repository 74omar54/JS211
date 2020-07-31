'use strict'

let convertToLetter = (grade) => {
    console.log("Input grade: ", grade);

    let letter = "F";
    if(grade >= 90){
        letter = "A";
    }
    if (grade >= 80 && grade < 90){
        letter = "B";
    }
    if (grade >= 75 && grade < 80){
        letter = "C";

    }
    if (grade >= 70 && grade < 75){
        letter = "D";
    } 
    return letter;
}
console.log(convertToLetter("92"));
console.log(convertToLetter("65"));
console.log(convertToLetter("77"));
console.log(convertToLetter("73"));
console.log(convertToLetter("88"));
console.log(convertToLetter(90));