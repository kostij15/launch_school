//Rules:
// 1. If player a chooses rock and player b chooses ss, player a wins.
// 2. If player a chooses p and player b chooses rock, player a wins.
// 3. If player a chooses ss and player b chooses p, player a wins.
// 4. If both players choose the same item, neither player wins. It's a tie.

//Flow Goes
//1. User makes a choice.
//2. Computer makes a choice
//3. Winner is displayed

//Edge Cases
// 1. Validating choices possibly const variable with an array of all choices

const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];

let playersScore = 0;
let computerScore = 0;

function displayWinner(player, computer) {
  if (player === 'r' && computer === 's' ||
    player === 'r' && computer === 'l' ||
    player === 'l' && computer === ' sp' ||
    player === 'l' && computer === 'p' ||
    player === 'sp' && computer === 'r' ||
    player === 'sp' && computer === 'sc' ||
    player === 'p' && computer === 'r' ||
    player === 'sc' && computer === 'p' ||
    player === ' sc' && computer === 'l') {
    prompt('You win !');
  } else if (computer === 'r' && player === 's' ||
    computer === 'r' && player === 'l' ||
    computer === 'l' && player === ' sp' ||
    computer === 'l' && player === 'p' ||
    computer === 'sp' && player === 'r' ||
    computer === 'sp' && player === 'sc' ||
    computer === 'p' && player === 'r' ||
    computer === 'sc' && player === 'p' ||
    computer === ' sc' && player === 'l') {
    prompt('Computer wins!');
  } else {
    prompt('It is a tie!');
  }
}



function displayScore(pScore, cScore) {
  prompt(`Player: ${pScore}\nComputer: ${cScore} `);
}

function prompt(message) {
  console.log(`=> ${message}`);
}



while (true) {

  //Players Choice section
  let playersChoice = readline.question(prompt(`Choose one: ${VALID_CHOICES.join(', ')}`));
  prompt(playersChoice);

  while (!VALID_CHOICES.includes(playersChoice)) {
    prompt('This is an invalid choice.');
    let playersChoice = readline.question(prompt("Choose one: r, p, sc, sp, l"));
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You've chosen ${playersChoice}, computer has chosen ${computerChoice}`);

  if ((playersChoice === 'r' && computerChoice === 'sc') ||
    (playersChoice === 'r' && computerChoice === 'l') ||
    (playersChoice === 'p' && computerChoice === 'r') ||
    (playersChoice === 'p' && computerChoice === 'sp') ||
    (playersChoice === 'sc' && computerChoice === 'p') ||
    (playersChoice === 'sc' && computerChoice === 'l') ||
    (playersChoice === 'l' && computerChoice === 'p') ||
    (playersChoice === 'l' && computerChoice === 'sp') ||
    (playersChoice === 'sp' && computerChoice === 'r') ||
    (playersChoice === 'sp' && computerChoice === 'sc')) {
    playersScore += 1;
  } else if ((playersChoice === 'r' && computerChoice === 'p') ||
    (playersChoice === 'r' && computerChoice === 'sp') ||
    (playersChoice === 'p' && computerChoice === 'l') ||
    (playersChoice === 'p' && computerChoice === 'sc') ||
    (playersChoice === 'sc' && computerChoice === 'r') ||
    (playersChoice === 'sc' && computerChoice === 'sp') ||
    (playersChoice === 'l' && computerChoice === 'sc') ||
    (playersChoice === 'l' && computerChoice === 'r') ||
    (playersChoice === 'sp' && computerChoice === 'p') ||
    (playersChoice === 'sp' && computerChoice === 'l')) {
    computerScore += 1;
  }

  displayWinner(playersChoice, computerChoice);

  displayScore(playersScore, computerScore);

  if (playersScore === 5 || computerScore === 5) {
    break;
  }

  // let playAgain = readline.question(prompt('Would you like to play again? (y/n)'));
  // if (playAgain === 'n') {
  //   break;
  // }

}

if (playersScore === 5) {
  console.log('Player wins!');
} else if (computerScore === 5) {
  console.log('Computer wins!');
} else {
  console.log("It's a tie");
}
