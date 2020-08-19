const SHUFFLE_ARRAY = require('shuffle-array');
const READLINE = require('readline-sync');

class Deck {
  static numCardSuits = 4;

  constructor() {
    this.resetDeck();
  }

  createDeck() {
    const cards = Object.keys(Card.cardValue);

    this.playingDeck = [];

    cards.forEach(card => {
      for (let i = 0; i < Deck.numCardSuits; i++) {
        this.playingDeck.push(card);
      }
    });
  }

  shuffleDeck() {
    SHUFFLE_ARRAY(this.playingDeck);
  }

  resetDeck() {
    this.createDeck();
    this.shuffleDeck()
  }
}

class Card {
  static cardValue = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': 11,
  }

  constructor(card) {
    this.card = card;
  }

  getCardValue() {
    return cardValue[this.card];
  }
}

class Participant {
  static joinAnd(array) {
    if (array.length === 0) return String(array);

    return `${array.slice(0, -1).join(', ')} and ${array.slice(-1)}`;
  }

  constructor(hand) {
    this.hand = hand || [];
  }

  detectAce() {
    const ace = 'A'
    return this.hand.includes(ace);
  }

  resetHand() {
    this.hand = [];
  }
}

class Dealer extends Participant {
  static dealerMinHandTotal = 17;

  constructor(hand) {
    super(hand);
  }
}

class Player extends Participant {
  constructor(hand) {
    super(hand);
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

    while (true) {
      this.resetDeck();
      this.resetHands();
      this.dealCards();

      while (true) {
        this.displayCards();

        this.playersTurn();
        if (this.isBust(this.player)) break;

        this.dealersTurn();
        if (this.isBust(this.dealer)) break;

        this.displayFinalCards();
        break;
      }
      this.determineWinner();

      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty-One! I'll be your host for the night. Drinks are on the house!\n")
  }

  dealCards() {
    this.dealer.hand.push(this.deck.playingDeck.shift());
    this.player.hand.push(this.deck.playingDeck.shift());
    this.dealer.hand.push(this.deck.playingDeck.shift());
    this.player.hand.push(this.deck.playingDeck.shift())
  }

  displayCards() {
    console.log(`Dealer's Hand: ${this.dealer.hand[1]} and Unknown`);
    console.log(`Player's Hand: ${Participant.joinAnd(this.player.hand)}`);
  }

  hit(participant) {
    participant.hand.push(this.deck.playingDeck.shift());
  }

  handTotal(participant) {
    const removingAceHigh = 10;
    let total = participant.hand.reduce((sum, card) => sum + Card.cardValue[card], 0)

    if (participant.detectAce() && total > 21) {
      total -= removingAceHigh;
    }

    return total;
  }

  isBust(participant) {
    return this.handTotal(participant) > 21;
  }

  displayParticipantHand(participant, finalHand = false) {
    if (finalHand === true) {
      console.log(`Final ${participant.constructor.name}'s Hand is ${Participant.joinAnd(participant.hand)} with a score of ${this.handTotal(participant)}`);
    } else {
      console.log(`${participant.constructor.name}'s Hand is ${Participant.joinAnd(participant.hand)} with a score of ${this.handTotal(participant)}`);
    }
  }

  playersTurn() {
    const validChoices = ['h', 's'];

    while (true) {
      this.displayParticipantHand(this.player);
      let answer;

      while (true) {
        answer = READLINE.question('Would you like to hit or stay?\n').toLowerCase();

        if (validChoices.includes(answer)) break;

        console.log('Sorry this is an invalid input. Please try again.');
        console.log('');
      }

      if (answer === 's') break;

      this.hit(this.player);
    }
  }

  dealersTurn() {
    while (true) {
      if (this.isBust(this.dealer)) break;

      this.displayParticipantHand(this.dealer);

      let dealerTotal = this.handTotal(this.dealer);

      if (dealerTotal >= Dealer.dealerMinHandTotal) break;
      this.hit(this.dealer);

    }
    console.log('');
  }

  displayFinalCards() {
    this.displayParticipantHand(this.dealer, true);
    console.log('');
    this.displayParticipantHand(this.player, true);
    console.log('');
  }

  determineWinner() {
    let finalDealerTotal = this.handTotal(this.dealer);
    let finalPlayerTotal = this.handTotal(this.player);

    if (!this.isBust(this.player) && finalPlayerTotal > finalDealerTotal) {
      console.log('Congratulations you win! Shots on the house!\n');
    } else if (!this.isBust(this.dealer) || finalDealerTotal > finalPlayerTotal) {
      console.log('Dealer Wins! Additional chips provided at the Cashier Services booth.\n')
    } else {
      console.log('It is a push! You get your money back. How about another drink?\n');
    }
    console.log('');
  }

  displayGoodbyeMessage() {
    console.log("Aww leaving so soon! Drive safe and come back soon!");
  }

  playAgain() {
    const validChoices = ['y', 'n'];
    let again;

    while (true) {
      again = READLINE.question("Come on! One more time never hurt! Want to play again?\n").toLowerCase();

      if (validChoices.includes(again)) break;

      console.log("Oh you didn't hear me? That's fine! I said...");
    }

    return again === 'y';
  }

  resetHands() {
    this.player.resetHand();
    this.dealer.resetHand();
  }

  resetDeck() {
    this.deck.resetDeck();
  }

}

let newGame = new TOGame();
newGame.start();