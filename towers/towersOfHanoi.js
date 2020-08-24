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
/*
I started the game by making a couple variables available to the whole program
in this case I made the specific array that Iwas trying to target into variables so my code
would look cleaner.
*/
  let a = stacks.a;
  let b = stacks.b;
  let c = stacks.c;
  let errorMessage = `You have made an invalid entry or move please try again`;
  let winningMessage = `Congrats!! The Towers of Hanoi have been defeated the game is now over....`;
  
 

const printStacks = () => {
  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);
}
/*
I moved the stacks variable into another file and messed around with it untill I found
out exaclty how I was tyring to manipulate the stacks to do exactly what I wanted it to do.
Inside the movePiece function I knew I would have to find a way to move the pieces
I started by making a new variable that would make the user input into a lowercase
to gurantee that it would match what my function was wanting to take in as an input
Once the input was recieved it would pop off the last index of the startStack
and push it onto the endStack NOTE: this does not check to see if a move is legal!!!
*/

const movePiece = (startStack, endStack) => {
  let firstMove = startStack.toLowerCase();
  let secondMove = endStack.toLowerCase();

  if (firstMove == 'a' && secondMove == 'b'){
    b.push(a.pop());
    return stacks;
  }
  if (firstMove == 'a' && secondMove == 'c'){
    c.push(a.pop());
    return stacks;

  }
  if (firstMove == 'b' && secondMove == 'a'){
    a.push(b.pop());
    return stacks;

  }
  if (firstMove == 'b' && secondMove == 'c'){
    c.push(b.pop());
    return stacks;

  }
  if (firstMove == 'c' && secondMove == 'a'){
    a.push(c.pop());
    return stacks;

  }
  if (firstMove == 'c' && secondMove == 'b'){
    b.push(c.pop());
    return stacks;

  }
  


}
/*
This function was the most challenging to me because I didnt know how or where to start.
I kept repeating over and over in my head that I needed an error to appear if i tried to stack
a bigger disc on a smaller disc, except I was having a tough time putting that into code
I started by making a couple variables that would make the answer to lowercase once again
NOTE: I could have saved time by making that same variable available to the whole program
I made three variables that were gonna be exactly what I was looking for in my program. 
Basically these read as if the last number in the A stack is greater than the last number in the 
B stack DO NOT MAKE THE MOVE. I then repeated this step for every possible combination of 
startStack and endStack, while also considering invalid entries the entire time.

*/

const isLegal = (startStack, endStack) => {
  
  let lowerStart = startStack.toLowerCase();
  let lowerEnd = endStack.toLowerCase();
  let lastIndexOfA = a[a.length -1];
  let lastIndexOfB = b[b.length -1];
  let lastIndexOfC = c[c.length -1];

  if (lowerStart == lowerEnd){ 
    return false;
  }
  if (lowerStart == 'a' && lowerEnd == 'b'){
    if (lastIndexOfA > lastIndexOfB){
      return false;
    } else {
      return true;
    }
  }
  if (lowerStart == 'a' && lowerEnd == 'c'){
    if (lastIndexOfA > lastIndexOfC){
      return false;
    } else {
      return true;
    }
  }
  if (lowerStart == 'b' && lowerEnd == 'a'){
    if (lastIndexOfB > lastIndexOfA){
      return false;
    } else {
      return true;
    }
  }
  if (lowerStart == 'b' && lowerEnd == 'c'){
    if (lastIndexOfB > lastIndexOfC){
      return false;
    } else {
      return true;
    }
  }
  if (lowerStart == 'c' && lowerEnd == 'a'){
    if (lastIndexOfC > lastIndexOfA){
      return false;
    } else {
      return true;
    }
  }
  if (lowerStart == 'c' && lowerEnd == 'b'){
    if (lastIndexOfC > lastIndexOfB){
      return false;
    } else {
      return true;
    }
  }
  else {
    return true;
  }
  

}
/*
The check for win function was by far the easiest to complete and its actually
the very first thing I did. The first thing I did was convert my arrays into strings, because
everyone knows that arrays can never be completly equal. 
After converting it to a string I checked to so if pegs B || C had all the numbers in order
on either one of those pegs! If they were then a message would display that the game has been won!
*/

const checkForWin = () => {
  if (b.join() == ('4,3,2,1') || c.join() == ('4,3,2,1')){
    console.log(winningMessage);
    return true;
  }


}
/*
This is the function that ran the entire game and I knew that all the other functions would end up here
I thought that the isLegal would have to be first to ensure the move wouldnt be made if it wasnt
So i started by saying that if the move IS legal then make the move
if the move is not legal return an error message and DO NOT MAKE THE MOVE
after that I checked to see if the stacks were equal to a win after each and every move.l
*/

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) == true){
    movePiece(startStack, endStack);
  } else{
    console.log(errorMessage);
  }
  checkForWin();
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
I will be placing the unit test down here! 
I could only figure out how to make two of the test pass! =(
*/
if (typeof describe === 'function'){
  describe('TowersOfHanoiTest',() =>{
    it('should return false for an invalid move', () => {
      assert.equal(isLegal('a', 'a'), false);
      assert.equal(isLegal('b', 'b'), false);
      assert.equal(isLegal('c', 'c'), false);
    });
    it('should check to see if a piece has been moved', () => {
      assert.equal(movePiece('a', 'b'), stacks);
      assert.equal(movePiece('a', 'c'), stacks);
      assert.equal(movePiece('b', 'a'), stacks);
      assert.equal(movePiece('b', 'c'), stacks);
      assert.equal(movePiece('c', 'a'), stacks);
      assert.equal(movePiece('c', 'b'), stacks);
    });
    it ('should detect a win', () => {
      towersOfHanoi('a', 'b')
      towersOfHanoi('a', 'c')
      towersOfHanoi('b', 'c')
      towersOfHanoi('a', 'b')
      towersOfHanoi('c', 'a')
      towersOfHanoi('c', 'b')
      towersOfHanoi('a', 'b')
      towersOfHanoi('a', 'c')
      towersOfHanoi('b', 'c')
      towersOfHanoi('b', 'a')
      towersOfHanoi('c', 'a')
      towersOfHanoi('b', 'c')
      towersOfHanoi('a', 'b')
      towersOfHanoi('a', 'c')
      towersOfHanoi('b', 'c')
      assert.equal(checkForWin(), true)
    });
  });
} else {
  getPrompt();
}