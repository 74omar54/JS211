'use strict'


//brings in the readline module to access the command line
const readline = require('readline');
//use the readline module to print out to the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Funcition trims extra spaces and converts the text to all upper case.
let convertToUpper = (sentence) => {
    return sentence.trim().toUpperCase();
}

let runProgram = () => {
    rl.question("input: ", function(answer){
        let convert = convertToUpper(answer);
        console.log(convert);
        runProgram();
    })
}




if (typeof describe == 'function'){
    console.log("In test mode");
    const assert = require('assert');

    describe("test suite1", function(){
        it ('should convert single words', function (){
            let word = 'boy';
            let expected = "BOY";
            let actual = convertToUpper(word);
            assert.equal(actual, expected);
        })

        it ("should handle 2 words", function (){
            let words = "the girl";
            let expected = "THE GIRL";
            let actual = convertToUpper(words);
            assert.equal(actual, expected);
        })

        it ('should handle a full sentence', function(){
            let sentence = "The dog ran around the block.";
            let expected = "THE DOG RAN AROUND THE BLOCK."
            let actual = convertToUpper(sentence);
            assert.equal(actual, expected);
        })
    });

    describe("test suite2", function(){
        it()
    })








} else {
    console.log("in execute mode");
    runProgram();
}