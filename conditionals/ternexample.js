'use strict'

let passFail = '';

//if the grade >= 70, we want passFail to be "pass", else we want 
//passFail to be "Fail"

let convert = (grade) => {
    let passFail;
    if(grade >= 70){
        passFail = "Pass";
    } else {
        passFail = "Fail";
    }
    //THis does the exact same thing as the if/else statement above!
    passFail = ( grade >= 70) ? "Pass" : "Fail";
    
    return passFail;
    
}
console.log("65: ", convert(65));
console.log("75: ", convert(75));


//(QUESTION) ? (IF THE ANSWER IS YES " ") : (IF THE ANSWER IS NO " "); <= this is the way the ternary operator works!!! 
