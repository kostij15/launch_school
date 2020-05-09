// Constant variables
const READLINE = require('readline-sync');

//code
let play = true;
let board = newBoard();
playerMarker = markerChoice();
computerMarker = playerMarker === 'X' ? 'O' : 'X';

while (play) {
  displayBoard(board);

  playerBoardChoice(board);
  computerBoardChoice(board);

  displayBoard(board);

  checkWinningBoard(board);
}

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

//Player choice
function markerChoice() {
  marker = READLINE.question("Please select the marker you would like to use?\nX or O\n").toUpperCase();
  while (marker !== 'X' && marker !== 'O') {
    marker = READLINE.question("Please select either X or O\n");
  }
  return marker.toUpperCase();
}

function playerBoardChoice(board) {
  playerChoice = READLINE.question(`Please select an empty place on the board:\n`);
  while (typeof board[playerChoice] === 'string') {
    playerChoice = READLINE.question(`Please select an empty place on the board:\n`);
    displayBoard(Board);
  }
  board[playerChoice] = playerMarker;
}


//Computer Choice
function computerBoardChoice(board) {
  let computerChoice = Math.ceil(Math.random() * 9).toString();
  while (computerChoice === "0" || typeof board[computerChoice] !== 'number') {
    computerBoardChoice = Math.ceil(Math.random() * 9).toString();
  }
  board[computerChoice] = computerMarker;
}

// Winning Combinations
function sameMarker(nestedArr, marker) {
  return nestedArr.every(subArr => {
    return subArr.every(elem => elem === marker);
  })
}

function allSquaresFilled(board) {
  return Object.values(board).every(squares => typeof squares === 'string');
}

function playAgain() {
  playAgain = READLINE.question("Would you like to play again? (yes/no) \n");
  while (playAgain !== 'yes' && playAgain !== 'no') {
    playAgain = READLINE.question("Would you like to play again? (yes/no) \n");
  }
  if (playAgain === 'yes') {
    board = newBoard();
    return true;
  }
  displayBoard(board);
  return false;
}

function checkWinningBoard(board) {
  let winningCombination = [
    [board["1"], board["2"], board["3"]],
    [board["1"], board["5"], board["9"]],
    [board["1"], board["4"], board["7"]],
    [board["2"], board["5"], board["8"]],
    [board["3"], board["6"], board["9"]],
    [board["3"], board["5"], board["7"]],
    [board["4"], board["5"], board["6"]],
    [board["7"], board["8"], board["9"]]
  ];

  playerWins = sameMarker(winningCombination, playerMarker);
  console.log(playerWins);
  computerWins = sameMarker(winningCombination, computerMarker);
  console.log(computerWins);

  if (playerWins === true) {
    console.log("Player Wins!");
    play = playAgain();
  } else if (computerWins === true) {
    console.log("Computer Wins!");
    play = playAgain();
  }
}