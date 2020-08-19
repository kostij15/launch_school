const READLINE = require('readline-sync');

function Board(squares = {}) {
  this.squares = squares;

  for (let squareNum = 1; squareNum <= 9; squareNum++) {
    this.squares[squareNum] = new Square();
  }
}

Board.prototype.display = function () {
  console.log("");
  console.log(`       |       |`);
  console.log(`   ${this.squares[1]}   |   ${this.squares[2]}   |  ${this.squares[3]}`);
  console.log("       |       |");
  console.log("-------+-------+-------")
  console.log("       |       |");
  console.log(`   ${this.squares[4]}   |   ${this.squares[5]}   |   ${this.squares[6]}`);
  console.log("       |       |");
  console.log("-------+-------+-------");
  console.log("       |       |");
  console.log(`   ${this.squares[7]}   |   ${this.squares[8]}   |  ${this.squares[9]}`);
  console.log("       |       |");
}

Board.prototype.displayWithClear = function () {
  console.clear();
  console.log('\n\n');
  this.display();
}

Board.prototype.markSquareAt = function (squareNum, marker) {
  this.squares[squareNum].setMarker(marker);
}

Board.prototype.availableSquares = function () {
  return Object.keys(this.squares).filter(squareNum => this.squares[squareNum].isAvailable());
}

Board.prototype.isBoardFull = function () {
  return this.availableSquares().length === 0;
}

Board.prototype.markerCount = function (playerMarker, squareKeys) {
  return squareKeys.filter(square => this.squares[square].getMarker() === playerMarker.marker).length;
}


function Square(marker) {
  this.marker = marker || " ";
}

Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = '0';

Square.prototype.toString = function () {
  return this.marker;
}

Square.prototype.getMarker = function () {
  return this.marker;
}

Square.prototype.setMarker = function (marker) {
  this.marker = marker;
}

Square.prototype.isAvailable = function () {
  return this.marker === Square.UNUSED_SQUARE;
}

function Player(marker) {
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  return this.marker;
}

function Human(marker) {
  this.marker = marker || Square.HUMAN_MARKER;
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

function Computer(marker) {
  this.marker = marker || Square.COMPUTER_MARKER;
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;


function TTTGame(board, human, computer) {
  this.board = board || new Board();
  this.human = human || new Human();
  this.computer = computer || new Computer();
}

TTTGame.POSSIBLE_WINNING_COMBINATIONS = [
  ['1', '2', '3'],
  ['1', '5', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '5', '7'],
  ['3', '6', '9'],
];

TTTGame.prototype.displayWelcomeMessage = function () {
  console.log('Welcome to Tic Tac Toe!');
}

TTTGame.prototype.humanPlayerMoves = function () {
  let square;

  while (true) {
    const validChoices = this.board.availableSquares();

    square = READLINE.question(`Please choose an available square (${this.board.availableSquares().join(', ')}):\n`);

    if (validChoices.includes(square)) break;

    console.log("Sorry that is not a valid choice.\n");
  }

  this.board.markSquareAt(square, this.human.getMarker());

}

TTTGame.prototype.computerPlayerMoves = function () {
  let randomSquare;
  while (true) {
    const vaildChoices = this.board.availableSquares();
    randomSquare = Math.ceil(Math.random() * 9);
    if (vaildChoices.includes(String(randomSquare))) break;
  }

  this.board.markSquareAt(randomSquare, this.computer.getMarker())
}

TTTGame.prototype.someoneWon = function () {
  return this.isWinner(this.human) || this.isWinner(this.computer);
}

TTTGame.prototype.isWinner = function (player) {
  return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(winningCombination => {
    return this.board.markerCount(player, winningCombination) === 3;
  });
}

TTTGame.prototype.gameOver = function () {
  return this.board.isBoardFull() || this.someoneWon();
}

TTTGame.prototype.displayResults = function () {
  if (this.isWinner(this.human)) {
    console.log('You Won! Congrats!');
  } else if (this.isWinner(this.computer)) {
    console.log('Computer Wins! You suck!');
  } else {
    console.log("It's a tie. No one wins");
  }
}

TTTGame.prototype.displayGoodbyeMessage = function () {
  console.log('Hope you had fun!\nGoodbye!')
}

TTTGame.prototype.play = function () {
  this.displayWelcomeMessage();
  this.board.display();

  while (true) {
    this.humanPlayerMoves();
    // this.board.display();
    if (this.gameOver()) break;

    this.computerPlayerMoves();
    // this.board.display();
    if (this.gameOver()) break;

    this.board.displayWithClear();
  }
  this.board.displayWithClear();
  this.displayResults();
  this.displayGoodbyeMessage();

}

let game = new TTTGame();
game.play();