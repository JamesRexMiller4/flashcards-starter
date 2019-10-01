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
  start(data) {
    // const cards = []
    // // const deck = new Deck ()
    // console.log(data[i]);
    // for (let i = 0; i < data.length; i++) {
    //   var card = new Card(data[i])
    //   cards.push(card)
    // }
    // const deck = new Deck(cards);
    // console.log(deck[0])
    // return deck;
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