'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let indexOfVowel = (word) => {
  let letters = word.split('');
  let i = 0;
  for ( i = 0; i < letters.length; i++){
      let letter = letters[i];
      // check if the letter is a vowel
      // if the letter is a vowel return the position (i);
      let hasVowel = 'aeiou'.includes(letter);
      let firstLetterVowel = 'aeiou'.includes(letters[0]);
      if(firstLetterVowel){
          return word + 'yay';
      }
      if(hasVowel){
          let newString = word.substring(letter);
          //this is where you need to find a way to split and rearange the word
          return i;
      }
  }
  //if we get to this point
  //that means that we finished going through all the letters
  //and if we had encoutnered a vowel in the loop, we would have returned 
  //so this means the word has no vowel.
  return -1;
}


const pigLatin = (word) => {
   let indexedWord = indexOfVowel(word);
   return indexedWord
  
  // Your code here

}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
