const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0
    // this.data = prototypeQuestions
  }
  start(details) {
    const cards = []

    details.forEach(function(data) {
      var cardDetail = Object.values(data)
      var card = new Card(cardDetail[0], cardDetail[1], cardDetail[2], cardDetail[3])
      cards.push(card)
    })
    const deck = new Deck(cards);
    return deck;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;