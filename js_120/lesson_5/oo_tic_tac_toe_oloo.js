const READLINE = require('readline-sync');

let Square = {
  UNUSED_SQUARE: " ",
  HUMAN_MARKER: "X",
  COMPUTER_MARKER: '0',

  init(marker = this.UNUSED_SQUARE) {
    this.marker = marker;
  },

  toString() {
    return this.marker;
  },

  getMarker() {
    return this.marker;
  },

  setMarker(marker) {
    this.marker = marker;
  },

  isAvailable() {
    return this.marker === this.UNUSED_SQUARE;
  },
}

let Board = {
  init() {
    this.squares = {};
    for (let squareNum = 1; squareNum <= 9; squareNum++) {
      this.squares[squareNum] = Object.create(Square).init();
    }
    return this;
  },

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
  },

  displayWithClear() {
    console.log('\n\n');

    this.display();
  },

  markSquareAt(squareNum, marker) {
    this.squares[squareNum].setMarker(marker);
  },

  availableSquares() {
    return Object.keys(this.squares).filter(squareNum => this.squares[squareNum].isAvailable());
  },

  isBoardFull() {
    return this.availableSquares().length === 0;
  },

  markerCount(playerMarker, squareKeys) {
    return squareKeys.filter(square => this.squares[square].getMarker() === playerMarker.marker).length;
  },
}

let Player = {
  init(marker) {
    this.marker = marker;
  },

  getMarker() {
    return this.marker;
  },

}

let TTTGame = {
  POSSIBLE_WINNING_COMBINATIONS: [
    ['1', '2', '3'],
    ['1', '5', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '5', '7'],
    ['3', '6', '9'],
  ],

  init(board, human, computer) {
    this.board = Object.create(Board).init();
    this.human = Object.create(Player).init(Square.HUMAN_MARKER);
    this.computer = Object.create(Player).init(Square.COMPUTER_MARKER);
    return this;
  },

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  },

  humanPlayerMoves() {
    let square;

    while (true) {
      const validChoices = this.board.availableSquares();

      square = READLINE.question(`Please choose an available square (${this.board.availableSquares().join(', ')}):\n`);

      if (validChoices.includes(square)) break;

      console.log("Sorry that is not a valid choice.\n");
    }

    this.board.markSquareAt(square, this.human.getMarker());

  },

  computerPlayerMoves() {
    let randomSquare;
    while (true) {
      const vaildChoices = this.board.availableSquares();
      randomSquare = Math.ceil(Math.random() * 9);
      if (vaildChoices.includes(String(randomSquare))) break;
    }

    this.board.markSquareAt(randomSquare, this.computer.getMarker())
  },

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  },

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_COMBINATIONS.some(winningCombination => {
      return this.board.markerCount(player, winningCombination) === 3;
    });
  },

  gameOver() {
    return this.board.isBoardFull() || this.someoneWon();
  },

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log('You Won! Congrats!');
    } else if (this.isWinner(this.computer)) {
      console.log('Computer Wins! You suck!');
    } else {
      console.log("It's a tie. No one wins");
    }
  },

  displayGoodbyeMessage() {
    console.log('Hope you had fun!\nGoodbye!')
  },

  play() {
    this.displayWelcomeMessage();
    this.board.display();

    while (true) {
      this.board.displayWithClear();

      this.humanPlayerMoves();
      // this.board.display();
      if (this.gameOver()) break;

      this.computerPlayerMoves();
      // this.board.display();
      if (this.gameOver()) break;
    }
    this.board.displayWithClear();
    this.displayResults();
    this.displayGoodbyeMessage();
  },
}

let game = Object.create(TTTGame).init();
game.play();