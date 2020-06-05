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
  Ace: 11
};
const WINNING_SCORE = 21;
const DEALER_STAY = 17;
const UNIQUE_CARDS_IN_DECK = Object.keys(CARDS_SCORE).length;
const NUM_CARDS_IN_DECK = 52;
const VALID_HIT_INPUT = ['h', 'hit'];
const VALID_STAY_INPUT = ['s', 'stay'];
const VALID_PLAYER_INPUT = VALID_HIT_INPUT.concat(VALID_STAY_INPUT);
const VALID_PLAY_AGAIN_INPUT = ['y', 'n'];

function initializeDeck() {
  console.clear();

  let deck = [];
  for (let cards = 0; cards < NUM_CARDS_IN_DECK; cards++) {
    let randomCard = Object.keys(CARDS_SCORE)[Math.floor(Math.random() * UNIQUE_CARDS_IN_DECK)];
    while (cardInDeck(deck, randomCard)) {
      randomCard = Object.keys(CARDS_SCORE)[Math.floor(Math.random() * UNIQUE_CARDS_IN_DECK)];
    }
    deck.push(randomCard);
  }

  console.log('Deck Shuffled!\n');
  return deck;
}

function cardInDeck(deck, card) {
  return deck.filter(currentCards => currentCards === card).length === 4;
}

function distributeCards(deck, cards) {
  cards.push(deck.shift());
}

function dealCards(deck, playerCards, dealerCards) {

  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) distributeCards(deck, playerCards);
    else distributeCards(deck, dealerCards);
  }

  initialDisplayCards(playerCards, dealerCards);
}

function joinAnd(array, delimeter = ', ') {
  return `${array.slice(0, -1).join(delimeter)} and ${array.slice(-1)}`;
}

function initialDisplayCards(playerCards, dealerCards) {
  console.log(`Player Has ${joinAnd(playerCards)}`);
  console.log(`Dealer Has ${dealerCards[0]} and ?\n`);
}

function displayCards(cards, user) {
  console.log(`${user} Has ${joinAnd(cards)}`);
  displayCardTotal(cards, user);
}

function detectAce(cards) {
  return cards.includes('Ace');
}

function cardTotal(cards) {
  let cardTotal = cards.reduce((total, card) => total + CARDS_SCORE[card], 0);
  if (cardTotal > 21 && detectAce(cards)) {
    return cardTotal - 10;
  }
  return cardTotal;
}

function displayCardTotal(cards, user) {
  console.log(`${user} card total is ${cardTotal(cards)}`);
}

function playerDecision() {
  let decision = READLINE.question("Hit or Stay?\n");

  while (!VALID_PLAYER_INPUT.includes(decision.toLowerCase())) {
    decision = READLINE.question("Hit or Stay?:\n");
  }

  return decision.toLowerCase();
}

function playerTurn(deck, playerCards) {

  while (VALID_HIT_INPUT.includes(playerDecision())) {
    distributeCards(deck, playerCards);
    displayCards(playerCards, 'Player');

    if (cardsBust(playerCards) || twentyOne(playerCards)) {
      break;
    }
  }
}


function dealerTurn(deck, dealerCards) {
  while (cardTotal(dealerCards) < DEALER_STAY) {
    console.log('Dealer Hits!');
    distributeCards(deck, dealerCards);
    displayCardTotal(dealerCards, 'Dealer');
    if (cardsBust(dealerCards) || twentyOne(dealerCards)) {
      break;
    }
  }
}

function cardsBust(userCards) {
  if (cardTotal(userCards) > WINNING_SCORE) {
    return true;
  } else {
    return false;
  }
}

function bustMessage(user) {
  console.log(`${user} Busts!`);

}

function twentyOne(cards) {
  return cardTotal(cards) === 21;
}

function twentyOneMessage(user) {
  console.log(`${user} hit BlackJack!`);
}

function determineWinner(playerCards, dealerCards) {
  let playerTotal = cardTotal(playerCards);
  let dealerTotal = cardTotal(dealerCards);

  if (playerTotal > dealerTotal && !cardsBust(playerCards) || twentyOne(playerCards) || cardsBust(dealerCards)) {
    return 'Player';
  } else if (dealerTotal > playerTotal && !cardsBust(dealerCards) || twentyOne(dealerCards) || cardsBust(playerCards)) {
    return 'Dealer';
  } else {
    return;
  }
}

function winMessage(user) {
  console.log(`${user} Wins!`);
}

function incrementGame(gameTotals, playerCards, dealerCards) {
  let winner = determineWinner(playerCards, dealerCards);
  if (winner) {
    winMessage(winner);
    gameTotals[winner] += 1;
  } else {
    console.log("It's a tie!");
  }
}

function displayOverallGames(gameTotals) {
  Object.keys(gameTotals).forEach(key => {
    console.log(`${key} Games: ${gameTotals[key]}`);
  });
}

function finalWinner(gameTotals) {
  let playerGames = gameTotals['Player'];
  let dealerGames = gameTotals['Dealer'];

  if (playerGames > dealerGames) {
    winMessage('Player');
  } else if (dealerGames > playerGames) {
    winMessage('Computer');
  } else {
    console.log("It's a tie!");
  }
}

function finalMessage() {
  console.log('Thanks for Playing!');
}

function playAgain() {
  let response = READLINE.question('Would you like to play again?\n');

  while (!VALID_PLAY_AGAIN_INPUT.includes(response)) {
    response = READLINE.question('Would you like to play again?\n');
  }

  if (response === 'y') {
    return true;
  } else if (response === 'n') {
    return false;
  }
}


while (true) {

  let gameTotals = { 'Player': 0, 'Dealer': 0 };

  while (true) {

    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    while (true) {

      dealCards(deck, playerCards, dealerCards);

      //Players turn
      playerTurn(deck, playerCards);
      if (cardsBust(playerCards)) {
        bustMessage('Player');
        break;
      }

      if (twentyOne(playerCards)) {
        twentyOneMessage('Player');
        break;
      }

      //Dealers turn
      dealerTurn(deck, dealerCards);

      if (cardsBust(dealerCards, 'Dealer')) {
        bustMessage('Dealer');
        break;
      }

      if (twentyOne(dealerCards)) {
        twentyOneMessage('Dealer');
        break;
      }

      break;

    }
    incrementGame(gameTotals, playerCards, dealerCards);
    displayOverallGames(gameTotals);

    if (playAgain() === false) {
      break;
    }
  }
  finalWinner(gameTotals);
  finalMessage();
  break;
}