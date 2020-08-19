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

  static maxHandTotal = 21;

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
  static minHandTotal = 17;

  constructor(hand) {
    super(hand);
  }
}

class Player extends Participant {
  static minCash = 0;
  static maxCash = 10;

  constructor(hand) {
    super(hand);
    this.purse = 5;
  }

  incrementCash() {
    this.purse += 1;
  }

  decrememntCash() {
    this.purse -= 1;
  }

  displayCash() {
    console.log(`Your Current Cash Total: \$${this.purse}`);
  }

  hasNoCash() {
    return this.purse <= Player.minCash;
  }

  hasTooMuchCash() {
    return this.purse >= Player.maxCash;
  }
}

class UnicodeValues {
  static emoji = {
    shrug: String.fromCodePoint("0x1F937"),
    angry: String.fromCodePoint("0x1F620"),
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
      this.displayWinner();

      this.updateCash();
      this.displayPlayerCash();

      if (this.isGameOver()) break;

      if (!this.playAgain()) break;
    }

    if (this.isGameOver()) {
      this.displayGameOverMessage();
    } else {
      this.displayGoodbyeMessage();
    }
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
    console.clear();

    console.log(`Dealer's Hand: ${this.dealer.hand[1]} and Unknown`);
    console.log(`Player's Hand: ${Participant.joinAnd(this.player.hand)}`);
  }

  hit(participant) {
    participant.hand.push(this.deck.playingDeck.shift());
  }

  handTotal(participant) {
    const removingAceHigh = 10;
    let total = participant.hand.reduce((sum, card) => sum + Card.cardValue[card], 0)

    if (participant.detectAce() && total > Participant.maxHandTotal) {
      total -= removingAceHigh;
    }

    return total;
  }

  isBust(participant) {
    return this.handTotal(participant) > Participant.maxHandTotal;
  }

  isTwentyOne(participant) {
    return this.handTotal(participant) === Participant.maxHandTotal;
  }

  isCurrentHandOver(participant) {
    return this.isBust(participant) || this.isTwentyOne(participant);
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

      while (!this.isCurrentHandOver(this.player)) {
        answer = READLINE.question('Would you like to hit or stay?\n').toLowerCase();

        if (validChoices.includes(answer)) break;

        console.log('Sorry this is an invalid input. Please try again.');
        console.log('');
      }

      if (answer === 'h') {
        this.hit(this.player);
      } else {
        break;
      }
    }
  }

  dealersTurn() {
    while (true) {
      this.displayParticipantHand(this.dealer);

      let dealerTotal = this.handTotal(this.dealer);

      if (dealerTotal >= Dealer.minHandTotal || this.isCurrentHandOver(this.dealer)) break;

      this.hit(this.dealer);

    }
    console.log('');
  }

  displayFinalCards() {
    console.log("We have our final hands!\n");
    this.displayParticipantHand(this.dealer, true);
    this.displayParticipantHand(this.player, true);
    console.log('');
  }

  determineWinner() {
    let finalDealerTotal = this.handTotal(this.dealer);
    let finalPlayerTotal = this.handTotal(this.player);

    if ((!this.isBust(this.player) && finalPlayerTotal > finalDealerTotal) || this.isBust(this.dealer)) {
      return 'player';
    } else if ((!this.isBust(this.dealer) && finalDealerTotal > finalPlayerTotal) || this.isBust(this.player)) {
      return 'dealer';
    } else {
      return;
    }
  }

  displayWinner() {
    if (this.determineWinner() === 'player') {
      console.log('Congratulations you win! Shots on the house!\n');
    } else if (this.determineWinner() === 'dealer') {
      console.log('Dealer Wins! Additional chips provided at the Cashier Services booth.\n');
    } else {
      console.log('It is a push! You get your money back. How about another drink?\n');
    }
    console.log('');
  }

  updateCash() {
    if (this.determineWinner() === 'player') {
      this.player.incrementCash();
    } else if (this.determineWinner() === 'dealer') {
      this.player.decrememntCash();
    }
  }

  displayPlayerCash() {
    this.player.displayCash();
  }

  isGameOver() {
    return this.player.hasNoCash() || this.player.hasTooMuchCash();
  }

  displayGameOverMessage() {
    if (this.player.hasNoCash()) {
      console.log(`On the bright side you tried hard ${UnicodeValues.emoji['shrug']}`);
    } else if (this.player.hasTooMuchCash()) {
      console.log(`You've seen the movie Casino right? Get out! ${UnicodeValues.emoji['angry']}`);
    }
  }

  displayGoodbyeMessage() {
    console.log("Aww leaving so soon! Drive safe and come back soon!");
  }

  playAgainMessages(cashTotal) {
    switch (cashTotal) {
      case 1:
        console.log("Don't worry. Your spouse won't even know. One more time for old times sake?\n");
        break;
      case 2:
        console.log("The local coffee shop will survive without this dollar. Try it again... you never know.\n");
        break;
      case 8:
        console.log("I'm starting to think this isn't luck. Play one more time.\n");
        break;
      case 9:
        console.log("Security come over to this table. I need a second set of eyes. Go ahead play again.\n");
        break;
      default:
        console.log("Come on! One more time never hurt! Want to play again?\n")
        break;
    }
  }

  playAgain() {
    const validChoices = ['y', 'n'];
    let again;

    while (true) {
      again = READLINE.question(this.playAgainMessages(this.player.purse)).toLowerCase();

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