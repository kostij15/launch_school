const SHUFFLE_ARRAY = require('shuffle-array');

class Deck {
  static cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  constructor() {
    this.shuffleDeck();
  }

  createDeck() {
    this.deck = [];

    Deck.cards.forEach(card => this.deck.push(card.repeat(4)));
  }

  shuffleDeck() {
    SHUFFLE_ARRAY(this.deck);
  }

  deal() {
    //must deal out cards
  }
}

class Participant {
  constructor() {

  }
}

class Dealer extends Participant {
  constructor() {

  }

  hit() {
    //add cards to deck
    //increment total
  }

  stay() {
    //ends participants end
  }

  bust() {
    //identifies if a hand is over 21
  }

  score() {
    //particpant's hand total
  }
}

class Player extends Participant {
  constructor() {

  }

  hit() {
    //add cards to deck
    //increment total
  }

  stay() {
    //ends participants end
  }

  bust() {
    //identifies if a hand is over 21
  }

  score() {
    //particpant's hand total
  }
}

class TOGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {

    this.displayWelcomeMessage();
    this.dealCards();
    this.displayCards();
    this.playersTurn();
    this.dealersTurn();
    this.displayFinalCards();

    this.determineWinner();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {

  }

  dealCards() {

  }

  displayCards() {

  }

  playersTurn() {

  }

  dealersTurn() {

  }

  displayFinalCards() {

  }

  determineWinner() {

  }

  displayGoodbyeMessage() {

  }

}

let newGame = new TOGame();
newGame.start();