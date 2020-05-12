//CONST variables
const READLINE = require('readline-sync');
const CARDS_SCORE = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: [1, 11]
};
const WINNING_SCORE = 21
const DEALER_STAY = 17;
const NUM_CARDS = 52;


//Normal Variables
let dealerCards = [];
let playerCards = [];

//In Game Player Score
let currentPlayerScore = 0;
let currentDealerScore = 0;

//Overall Games Score;
let overallPlayerGames = 0;
let overallDealerGames = 0;

let deck;;

//Limiting our losses
let games = numberOfGames();

while (games > 0) {
  deck = initializeDeck();
  gameStart();
  dealCards(deck);

  playerMove(deck);
  displayGames();

  games -= 1;

}
finalMessage(overallPlayerGames, overallDealerGames);

//Games Question
function numberOfGames() {
  let games = Number(READLINE.question("How many games would you like to play?\nPLEASE ENTER A NUMBER\n"));

  while (isNaN(games)) {
    games = Number(READLINE.question("How many games would you like to play?\nPLEASE ENTER A NUMBER\n"));
  }

  return games
}

//Initialize Board
function initializeDeck() {
  let deck = [];
  let cardCount = {};

  console.log("\nDealer shuffling deck");

  while (deck.length < NUM_CARDS) {
    let possibleCards = Object.keys(CARDS_SCORE);
    let randomInt = Math.floor(Math.random() * possibleCards.length);
    let newCard = possibleCards[randomInt];

    if (!cardCount[newCard]) {
      cardCount[newCard] = 1;
    } else if (cardCount[newCard] < 4) {
      cardCount[newCard] += 1;
    }
    deck.push(newCard);
  }
  console.log("Deck Shuffled\n");
  return deck
}

function gameStart() {
  currentPlayerScore = 0;
  playerCards = [];

  currentDealerScore = 0;
  dealerCards = [];
}

//Increment Scores
function playerWins() {
  overallPlayerGames += 1;
}

function dealerWins() {
  overallDealerGames += 1;
}

//Display Statements
function displayPlayerCards() {
  console.log(`Player has ${playerCards.join(' and ')}`);
  console.log(`Current Player Score: ${currentPlayerScore}\n`);
}

function displayGames() {
  if (overallPlayerGames > overallDealerGames) {
    console.log(`Player Games: ${overallPlayerGames}`);
    console.log(`Dealer Games: ${overallDealerGames}`);
  } else {
    console.log(`Dealer Games: ${overallDealerGames}`);
    console.log(`Player Games: ${overallPlayerGames}`);
  }
}

//Deal Cards

function dealCards(deck) {
  playerCards.push(deck.shift());
  dealerCards.push(deck.shift());

  playerCards.push(deck.shift());
  dealerCards.push(deck.shift());

  currentPlayerScore = scoreTotal(playerCards);
  currentDealerScore = scoreTotal(dealerCards);

  displayPlayerCards();
  console.log(`Dealer has ${dealerCards[1]} and unknown`);
}


//playerDecision
function playerMove(deck) {
  let validAnswer = ['hit', 'stay'];

  while (true) {

    if (twentyOne(currentPlayerScore)) {
      playerWins();
      console.log("You hit blackjack!\n\n You win!");
      break;
    }

    if (bust(currentPlayerScore) === true) {
      dealerWins();
      console.log('You busted!\n\nDealer wins!');
      break;
    }

    let response = READLINE.question("Hit or Stay?\n").toLowerCase();
    let nextCard = deck.shift();

    while (!validAnswer.includes(response)) {
      let response = READLINE.question("Hit or Stay?\n");
    }

    if (response === 'hit') {
      playerCards.push(nextCard);
      currentPlayerScore = scoreTotal(playerCards);
      displayPlayerCards();
    } else {
      console.log('Dealers turn!');
      dealerMove(deck);
      break;
    }
  }
}

//computerDecision
function dealerMove(deck) {
  while (currentDealerScore < DEALER_STAY) {
    let nextCard = deck.shift();
    dealerCards.push(nextCard);

    currentDealerScore = scoreTotal(dealerCards);
    console.log(`Dealer Score is: ${currentDealerScore}\n`);
  }
  if (bust(currentDealerScore)) {
    playerWins();
    console.log(`Dealer busts!\n\nPlayer Wins`);

  } else if (twentyOne(currentDealerScore)) {
    dealerWins();
    console.log(`Dealer hits BlackJack!\n\nDealer Wins`);

  } else {
    turnDecision(currentPlayerScore, currentDealerScore);

  }
}

//Score Total
function scoreTotal(cards) {
  let aceEleven = 0;
  let aceOne = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 'Ace') {
      aceEleven += 11;
      aceOne += 1;
    } else {
      aceEleven += CARDS_SCORE[cards[i]];
      aceOne += CARDS_SCORE[cards[i]];
    }
  }

  return aceEleven <= WINNING_SCORE ? aceEleven : aceOne;
}

// Check if bust
function bust(cardTotal) {
  if (cardTotal > WINNING_SCORE) {
    return true;
  } else {
    return false;
  }
}

function twentyOne(cardTotal) {
  if (cardTotal === WINNING_SCORE) {
    return true;
  } else {
    return false;
  }
}

function turnDecision(currentPlayerScore, currentDealerScore) {
  console.log(`Final Player Score: ${currentPlayerScore}`);
  console.log(`Final Dealer Score: ${currentDealerScore}`);

  if (currentPlayerScore > currentDealerScore) {
    playerWins();
    console.log('Player Wins!');
  } else if (currentPlayerScore < currentDealerScore) {
    dealerWins();
    console.log('Dealer Wins!')
  } else {
    console.log("It's a push. No one wins!")
  }
}

function finalMessage(playerGames, dealerGames) {
  if (playerGames > dealerGames) {
    console.log("\nOverall Player Wins!");
  } else if (playerGames < dealerGames) {
    console.log("\nOverall Dealer Wins!")
  } else {
    console.log("\nEnds in a tie!");
  }
}

//Play Again
// function playAgain() {
//   let validScores = ['y', 'n'];
//   let response = READLINE.question("Would you like to play again?\n");

//   while (!validScores.includes(response)) {
//     response = READLINE.question("Would you like to play again?\n");
//   }
//   if (response === 'y') {
//     console.clear();
//     deck = initializeDeck();
//     return true;
//   } else {
//     return false;
//   }
// }