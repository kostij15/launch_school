// Constant variables
const READLINE = require('readline-sync');
const BOARD_SQUARES = 9;
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WON_MATCH = 5;

//Problem Breakdown
// 1. Display the 3x3 board
// 2. Ask user input to mark square
// 3. Computer's turn
// 4. Display the updated board
// 5. if its a winning board, display the winner
// 6. If board is full, display tie
// 7. if neither player wins, and board isn't full go back to step 2
// 8. Ask user if they want to play again
// 9. if yes go back to #1
// 10. else end

function prompt(msg) {
  console.log(`=> ${msg}`)
}

function joinOr(array, delimeter = ', ', conjoin = 'or') {
  return array.slice(0,-1).join(delimeter) + `, ${conjoin} ${array.slice(-1)}`;
}

function displayBoard(board) {
  console.clear();
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

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= BOARD_SQUARES; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function emptySquares(board) {
 return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board), ', ')}:`);
    square = READLINE.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function checkWin(score) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let combination = 0; combination < winningLines.length; combination+=1) {
    if (winningLines[combination].every(square => board[square] === HUMAN_MARKER)) {
      return 'Player';
    } else if (winningLines[combination].every(square => board[square] === COMPUTER_MARKER)) {
      return 'Computer';
    }
  }
  return null;
  }

  function displayScore(score) {
    score.forEach(player => prompt(`${player}: ${score[player]}`));
  }

  function overallGames(board, score) {
    score[detectWinner(board)];
  }

let board = initializeBoard();
displayBoard(board);

while (true){
  let score = {Player: 0, Computer: 0};

  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (checkWin(board) || boardFull(board)) break;
}

if (checkWin(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie!");
}