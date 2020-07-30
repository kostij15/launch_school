//description
//Paper beats Rock
//Rock beats scissors
//Scissors beats paper
//Same move its a tie

//Extract the significant nouns and verbs from the description
//Nouns: player, move, rule
//Verbs: choose, compare

//3. Organize and associate the verbs with the nouns
// player
//  - choose
//Move
//rule

//???
//compare

//Creating Object factories
//start by outlining the factories and compare method

const READLINE = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function createPlayer() {
  return {
    move: null,
    previousMoves: [],
    score: 0,

    incrementScore() {
      this.score += 1;
    },

    addPreviousMove(previousMove) {
      this.previousMoves.push(previousMove);
    },
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {

    choose() {
      let choice;

      while (true) {
        choice = READLINE.question("Would you like to choose rock, paper, scissors, lizard or spock?\n");

        if (CHOICES.includes(choice)) break;
        console.log('Invalid Choice!\n');
      }

      this.move = choice;
    },

  }

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,
    score: 0,

    choose() {
      let randomIndex = Math.floor(Math.random() * CHOICES.length);
      this.move = CHOICES[randomIndex];
    },
  }

  return Object.assign(computerObject, playerObject);
}

//Here we're creating the object that will run the game. This will contain functions that well represent the game
//first within the function of play() we want to outline the functions we will need to run this program.
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors, Lizard, SPOCCKKK!");
  },

  displayWinner() {
    console.log(`Player chose ${this.human.move}`);
    console.log(`Computer chose ${this.computer.move}`);

    if ((this.human.move === 'rock' && this.computer.move === 'scissors') ||
      (this.human.move === 'paper' && this.computer.move === 'rock') ||
      (this.human.move === 'scissors' && this.computer.move === 'paper') ||
      (this.human.move === 'scissors' && this.computer.move === 'lizard') ||
      (this.human.move === 'lizard' && this.computer.move === 'spock') ||
      (this.human.move === 'lizard' && this.computer.move === 'paper') ||
      (this.human.move === 'spock' && this.computer.move === 'rock') ||
      (this.human.move === 'spock' && this.computer.move === 'scissors') ||
      (this.human.move === 'rock' && this.computer.move === 'lizard')) {
      console.log('Player Wins!');
      this.human.incrementScore();
    } else if ((this.computer.move === 'rock' && this.human.move === 'scissors') ||
      (this.computer.move === 'paper' && this.human.move === 'rock') ||
      (this.computer.move === 'scissors' && this.human.move === 'paper') ||
      (this.computer.move === 'scissors' && this.human.move === 'lizard') ||
      (this.computer.move === 'lizard' && this.human.move === 'spock') ||
      (this.computer.move === 'lizard' && this.human.move === 'paper') ||
      (this.computer.move === 'spock' && this.human.move === 'rock') ||
      (this.computer.move === 'spock' && this.human.move === 'scissors') ||
      (this.computer.move === 'rock' && this.human.move === 'lizard')) {
      console.log('Computer wins');
      this.computer.incrementScore();
    } else {
      console.log("It's a tie!");
    }

    this.human.addPreviousMove(this.human.move);
    this.computer.addPreviousMove(this.computer.move);
  },

  displayPreviousMoves() {
    console.log(`Your opponents previous moves: ${this.computer.previousMoves}`);
  },

  displayGoodbyeMessage() {
    console.log(`The final score was:\nYou: ${this.human.score}\nComputer: ${this.computer.score}\n`);
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  playAgain() {
    const playerChoices = ['y', 'n', 'yes', 'no'];
    let again;

    while (true) {
      again = READLINE.question('Would you like to play again? (y/n)\n').toLowerCase();
      if (playerChoices.includes(again)) break;
      console.log('Please enter a valid choice\n');
    }

    if (again.startsWith('y')) return true;
    return false;
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (this.playAgain() === false) {
        this.displayGoodbyeMessage();
        break
      }
      this.displayPreviousMoves();
    }
  },
};

RPSGame.play();