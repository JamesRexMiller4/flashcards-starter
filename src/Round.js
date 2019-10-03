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

    if (!this.returnCurrentCard) {
      this.endRound()
    } else if (turn.giveFeedback() === 'incorrect!') { 
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    var percentCorrect = (((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
    return percentCorrect
  }

  endRound() {
    return `** ROUND OVER ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}



module.exports = Round