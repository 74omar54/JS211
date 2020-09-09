'use strict';
//I created a function called word occcurence where i will count the instances 
//that a letter appears in a given string!
let wordOccurrence = (string) => {
    let stringObj = {};//I create an empty object that will hold my keys and values
    //I will then do a for loop in order to loop through the given string
    for (let i = 0; i <string.length; i++){
        let splitString = string[i];//Here i created a variable for the letter at a given index of 'string'
        if (!stringObj[splitString]){//this is saying that if the index isnt inside the object
        stringObj[splitString] = 0;//set it to ZERO
        } 
        stringObj[splitString]++;//this is saying to move the count of the letter +1
        
    }
    return stringObj;// ALWAYS have to return something inside of a function or you will get undefined 

};

console.log(wordOccurrence('the brown fox jumped over the lazy dog'));
