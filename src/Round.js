const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0
    this.deck = deck
    this.currentCard = undefined
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    this.currentCard = this.deck.deck[this.turns]
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (turn.giveFeedback() === 'incorrect!') { 
      this.incorrectGuesses.push(this.deck.deck[this.turns].id)
    }
    this.turns += 1;
    return turn.giveFeedback();

  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}


module.exports = Round