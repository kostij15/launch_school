const READLINE = require('readline-sync');

class Board {
  constructor() {
    this.resetBoard();
  }

  resetBoard() {
    this.squares = {};

    for (let squareNum = 1; squareNum <= 9; squareNum++) {
      this.squares[squareNum] = new Square();
    }
  }

  display() {
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
    console.log('\n');
  }

  displayWithClear() {
    console.log('\n\n');

    this.display();
  }

  markSquareAt(squareNum, marker) {
    this.squares[squareNum].setMarker(marker);
  }

  availableSquares() {
    return Object.keys(this.squares).filter(squareNum => this.squares[squareNum].isAvailable());
  }

  isAvailableSquare(squareNum) {
    return this.squares[squareNum].isAvailable();
  }

  isBoardFull() {
    return this.availableSquares().length === 0;
  }

  markerCount(playerMarker, squareKeys) {
    return squareKeys.filter(square => this.squares[square].getMarker() === playerMarker.marker).length;
  }

}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = '0';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  getMarker() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isAvailable() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}


class TTTGame {
  static POSSIBLE_WINNING_COMBINATIONS = [
    ['1', '2', '3'],
    ['1', '5', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '5', '7'],
    ['3', '6', '9'],
  ];

  static joinOr(array) {
    if (array.length === 1) return String(array);
    return `${array.slice(0, -1).join(', ')}, or ${array.slice(-1)}`;
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }

  humanPlayerMoves() {
    let square;

    while (true) {
      const validChoices = this.board.availableSquares();

      square = READLINE.question(`Please choose an available square(${TTTGame.joinOr(this.board.availableSquares())}): \n`);

      if (validChoices.includes(square)) break;

      console.log("Sorry that is not a valid choice.\n");
    }

    this.board.markSquareAt(square, this.human.getMarker());

  }

  computerMoves() {
    let nextSquare;
    //console.log(this.potentialComputerWin());
    while (true) {
      const vaildChoices = this.board.availableSquares();
      nextSquare = Math.ceil(Math.random() * 9);
      if (vaildChoices.includes(String(nextSquare))) break;
    }


    this.board.markSquareAt(nextSquare, this.computer.getMarker())
  }

  defensiveComputerMove() {

  }

  potentialComputerWin() {
    let potentialWinner = TTTGame.POSSIBLE_WINNING_COMBINATIONS.filter(winningCombination => {
      return this.board.markerCount(this.computer, winningCombination) === 2;
    });

    let potentialSquare = potentialWinner.find(winningCombination => {
      return winningCombination.find(square => {
        return this.board.isAvailableSquare(square);
      });
    });

    return potentialSquare;
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(winningCombination => {
      return this.board.markerCount(player, winningCombination) === 3;
    });
  }

  gameOver() {
    return this.board.isBoardFull() || this.someoneWon();
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You Won! Congrats!');
    } else if (this.isWinner(this.computer)) {
      console.log('Computer Wins! You suck!');
    } else {
      console.log("It's a tie. No one wins");
    }
  }

  displayGoodbyeMessage() {
    console.log('Hope you had fun!\nGoodbye!')
  }

  playAgain() {
    let again;
    let validChoices = ['y', 'n'];

    while (true) {
      again = READLINE.question('Would you like to play again?\n');
      again = again.toLowerCase();

      if (validChoices.includes(again)) break;

      console.log('Not a valid input!\n');
    }

    return again === 'y';
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.resetBoard();

      while (true) {
        this.board.displayWithClear();

        this.humanPlayerMoves();
        // this.board.display();
        if (this.gameOver()) break;

        this.computerMoves();
        // this.board.display();
        if (this.gameOver()) break;
      }
      this.board.displayWithClear();
      this.displayResults();

      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
}

let game = new TTTGame();
game.play();