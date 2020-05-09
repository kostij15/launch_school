// Constant variables
const READLINE = require('readline-sync');

//Functions
//Board Functions
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function newBoard() {
  let newBoard = {};

  for (let i = 1; i <= 9; i++) {
    newBoard[i] = i;
  }

  return newBoard;
}

board = newBoard();
displayBoard(board);

//Player choice
function markerChoice() {
  marker = String.toLowerCase(READLINE.question("Please select the marker you would like to use?\nX or O"));
  while (marker !== 'x' || marker !== 'o') {
    marker = String.toLowerCase(READLINE.question("Please select either X or O"))
  }
  return marker;
}

playerMarker = markerChoice();