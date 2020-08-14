'use strict';

// Here we start by making a variable called translator and 
//and connecting it to the button in the HTML FILE
//next I give the translator an event to listen for (click)
//Then I make a var waitingToTranslate in order to get the 
//input from the input box
//I wrote out a console.log to make sure it was actually grabbing my input
//Then i created a list item called printWord
//that is going to print out my translatedword
//I made a UL in the HTML with the id "theResult"
//The list item that is about to appear i gave it the piglatin function 
//and i told it to translate the word that is waiting to get translated
//I then put my newly translated word inside that UL i made earlier
//lastly I set my translatorBox value to a string so it would expect the input of a string.
let translator = document.getElementById("translator");
translator.addEventListener('click',function (){
  let translatorBox = document.getElementById("translatorBox");
  let waitingToTranslate = translatorBox.value;
  console.log(`the word that is getting translated is ${waitingToTranslate}`);

  let printWord = document.createElement("li");
  let theResult = document.getElementById("theResult")
  printWord.innerText = pigLatin(waitingToTranslate);
  
  theResult.appendChild(printWord);

  translatorBox.value = '';
  

  
})

// brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

let indexOfVowel = (word) => {
  let letters = word.toLowerCase().trim().split('');
  let i = 0;
  for ( i = 0; i < letters.length; i++){
      let letter = letters[i];
      let hasVowel = 'aeiou'.includes(letter);
      if(hasVowel){
         
          return i;
      }
  }
  return -1;
}


const pigLatin = (word) => {
  let indexedWord = indexOfVowel(word);
   //checks to see if the first letter is a vowel.
  if (indexedWord == 0){
     return word + 'yay';
  }
   // checks to see if the word doesnt contain a vowel
  if (indexedWord == -1){
     return word + 'ay';
  }
   // when there is a vowel but it isnt the first letter in the word.
  if (indexedWord > 0){
     let newWord = word.slice(indexedWord) + word.slice(0, indexedWord) + 'ay';
     return newWord;
  }

}
  




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
