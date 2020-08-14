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

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';


// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
//this method should return true if the player has won horizontally
const horizontalWin = () => {
  for (let i = 0; i < 3; i++){
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2]){
      if (board[i][0] == playerTurn || board[i][0] == playerTurn){
        return true;
      }
    }
  } return false;
}
// this method should return true if the player has won vertically
const verticalWin = () => {
  for (let i = 0; i < 3; i++){
    if(board[0][i] == board[1][i] && board[1][i] == board [2][i]){
      if (board[0][i] == playerTurn || board[0][i] == playerTurn){
        return true;
      }
    }
  } return false;
}

const diagonalWin = () => {
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]){
    if (board[0][0] == playerTurn || board[0][0] == playerTurn){
      return true;
    }
  }
  if (board[0][2] == board [1][1] && board [1][1] == board[2][0]){
    if (board[0][2] == playerTurn || board[0][2] == playerTurn){
      return true;
    }
  } return false;
}

//If playerTurn is"X we are going to reassign the value as 'O
//If the player wins horizontally it should return true, else if
//player wins vertically or diagonally it should return true
// if the no player returns as a winner than it should return false
const checkForWin = () => {
  if (horizontalWin()){
    console.log(`${playerTurn} has won horizontally `)
    return true;
  }
  if (verticalWin()){
    console.log(`${playerTurn} has won vertically `)
    return true;
  }
  if (diagonalWin()){
    console.log(`${playerTurn} has won diagonally`)
    return true;
  }
  else {
    return false;
  }
  // Your code here call each of the check for types of wins
}
//should place the mark on the board. (an X or an O
//use the playerTurn variable to help you) 
// if the player has won it should let them know
//it should update the playerTUrn variable accordingly

const changeMarker = () => {
  playerTurn = playerTurn === 'X' ? 'O' : 'X';
}

// I want to make a function that restarts the entire game
const ticTacToe = (row, column) => {
  board[row][column] = playerTurn;
  if (checkForWin()){
    return t;
  }
  else{
    return changeMarker();
  }
 

  
  //check to see if there is an X or an O at a specific row and column on the board?
  //IF the spot is taken ask the user to insert another spot.
  //IF the spot is not taken then check the board for a win
  //IF there is not a win and there are no  x's and o's in the same spot on the board, then repeat untill a win has been accomplished
  // Your code here to place a marker on the board
  // then check for a win
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}