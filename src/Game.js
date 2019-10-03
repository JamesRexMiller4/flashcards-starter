const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  start(prototypeQuestions) {
    const cards = []

    prototypeQuestions.forEach(function(data) {
      var cardDetail = Object.values(data)
      var card = new Card(cardDetail[0], cardDetail[1], cardDetail[2], cardDetail[3])
      cards.push(card)
    })
    const deck = new Deck(cards);
    var round = new Round(deck);
    this.currentRound += 1

    this.printMessage(deck);
    this.printQuestion(round);
  }
  

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;