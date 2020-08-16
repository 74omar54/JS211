'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//this function should move the top piece from the start stack
//and add it to the top of the end stack

//startStack: this is the name of the starting stack
//endStack: this is the name of the ending stack
const movePiece = (startStack, endStack) => {
  // Your code here

}

//this function should check to see if the move from the top piece from the start stack,
// to the endstack is a legal move
//NOTE: it should NOT move the piece, just return if it is alegal/allowed move
//return false if it is not


const isLegal = (startStack, endStack) => {
  // Your code here

}

//this function should return true when any peg,
// other than the starting peg has all disc in order.
const checkForWin = () => {
  // Your code here
  //REMEMBER, you cannot check arrays to see if they are equal to eachother 

}


const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //take in the move that the user wants to do
  //if that move is legal make the move
  //if the move is not legal let the user try again
  //once the move is made check to see if the user has won the game

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();

/*
let a1 = [4,3,2,1];
let a2 = [4,3,2,1];
if (a1.join()  === a2.join()){ 
    console.log("The arrays are equal")
} else{
    console.log("The arrays are not equal");
}

// How do i add something to the end of the array? use push()
// how do i remove something from the end of an array? pop()
//how do i look at the end of the array without removing it 
let stacks = {
    a: [4,3,2,1],
    b: [],
    c: []
}

let variable = 'a'; ( make the variable equals to startStack and Endstack)

*** all these will work
console.log(stacks[variable]); // use this one for the towers of Hanoi 
console.log(stacks.a);
console.log(stacks['a']);


*/