// Constant variables
const READLINE = require('readline-sync');
const BOARD_SQUARES = 9;

//code
let board = newBoard();
let playerMarker = markerChoice();
let computerMarker = playerMarker === 'X' ? 'O' : 'X';
let firstTurn;
let playerScore = 0;
let computerScore = 0;

while (true) {
  displayBoard(board);

  participantBoardOrder(board);

  if (checkWinningBoard(board) !== undefined) {
    let play = playAgain();
    if (play === false) {
      break;
    }
  }

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

  for (let i = 1; i <= BOARD_SQUARES; i++) {
    newBoard[i] = i;
  }

  return newBoard;
}

function newGame() {
  board = newBoard();
  playerMarker = markerChoice();
  computerMarker = playerMarker === 'X' ? 'O' : 'X';
  leadingTurn();
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
    displayBoard(board);
  }
  board[playerChoice] = playerMarker;
}


//Computer Choice
function computerBoardChoice(board) {
  let computerChoice = Math.ceil(Math.random() * BOARD_SQUARES).toString();
  while (computerChoice === "0" || typeof board[computerChoice] !== 'number') {
    computerChoice = Math.ceil(Math.random() * BOARD_SQUARES).toString();
  }
  board[computerChoice] = computerMarker;
}

//Deciding whose turn
function leadingTurn() {
  let participants = ['computer', 'player'];
  let randomInt = Math.floor(Math.random() * (participants.length - 1));

  firstTurn = participants[randomInt];
}

function participantBoardOrder(board) {
  if (firstTurn === 'computer') {
    console.log("Computer Goes First!")
    computerBoardChoice(board);
    displayBoard()
    playerBoardChoice(board);
  } else {
    console.log("Player Goes First!")
    playerBoardChoice(board);
    computerBoardChoice(board);
  }
}

// Winning Combinations
function sameMarker(nestedArr, marker) {
  return nestedArr.some(subArr => {
    return subArr.every(elem => elem === marker);
  })
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

  let playerWins = sameMarker(winningCombination, playerMarker);
  let computerWins = sameMarker(winningCombination, computerMarker);
  let allSquaresFilled = Object.values(board).every(squares => typeof squares === 'string');
  console.log(allSquaresFilled);

  if (playerWins === true) {
    console.log("Player Wins!");
    playerScore += 1;
    return 1;
  } else if (computerWins === true) {
    console.log("Computer Wins!");
    computerScore += 1;
    return 0;
  } else if (allSquaresFilled === true) {
    console.log("Its a tie");
    return 2;
  }
}

function playAgain(play) {
  console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`)

  let againResponse = READLINE.question("Would you like to play again? (yes/no) \n");
  let validResponse = ['yes', 'no'];

  while (!validResponse.includes(againResponse)) {
    againResponse = READLINE.question("Would you like to play again? (yes/no) \n");
  }

  if (againResponse === 'yes') {
    newGame();
    console.clear();
    return true;
  } else {
    console.log('Thanks for Playing!');
    return false;
  }
}