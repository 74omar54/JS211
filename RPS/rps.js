// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
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





const rockPaperScissors = (hand1, hand2) => {
const tieGame = "It's a tie!";
const hand1Win = "Hand one wins!";
const hand2Win = "Hand two wins!";
const invalidMessage = "You have made an invalid entry, please try again";

  if (hand1.toLowerCase().trim() === hand2.toLowerCase().trim()){
    return tieGame;
  }
  else if (hand1.toLowerCase().trim() === 'rock' && hand2.toLowerCase().trim() === 'paper'){
    return hand2Win;
  } 
  else if (hand1.toLowerCase().trim() === 'paper' && hand2.toLowerCase().trim() === 'scissors'){
    return hand2Win;
  } 
  else if (hand1.toLowerCase().trim() === 'scissors' && hand2.toLowerCase().trim() === 'rock'){
    return hand2Win;
  } 
  else if (hand1.toLowerCase().trim() === 'rock' && hand2.toLowerCase().trim() === 'scissors'){
    return hand1Win;
  }
  else if (hand1.toLowerCase().trim() === 'paper' && hand2.toLowerCase().trim() === 'rock'){
    return hand1Win;
  }
  else if (hand1.toLowerCase().trim() === 'scissors' && hand2.toLowerCase().trim() === 'paper'){
    return hand1Win;
  }
  else {
    return invalidMessage;
  }
  

//I found out how to make it work if there was an invalid entry, however if the same invalid entry is entered twice it will count as a tie =(,,,,
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });

 // I will ad my own unit test named RPS UNIT TEST HW
 //I will first check to see if there will be an invalid message when
 //somebody has an invalid input
 //I will then test to see what happens when you enter the same mispelled word
 //twice into the input. my guess is that it will result in a tie
 //I would like to find a way to not have it end in a tie! 

  describe('RPS UNIT TEST HW', function(){
    it ("should check if there is an invalid message", function(){
      assert.equal(rockPaperScissors('rack', 'rick'), "You have made an invalid entry, please try again");
      assert.equal(rockPaperScissors('posper', 'poper'), "You have made an invalid entry, please try again");
      assert.equal(rockPaperScissors('siser', 'sisser'), "You have made an invalid entry, please try again");
    });
   it ("should check to see if the same mispelled words would equal a tie", function(){
     assert.equal(rockPaperScissors('roc','roc'), "It's a tie!");
     assert.equal(rockPaperScissors('papper', 'papper'), "It's a tie!");
     assert.equal(rockPaperScissors('sizer', 'sizer'), "It's a tie!");
   })

      
  })
} else {

  // always returns ask the user for another input
  getPrompt();

}