class Turn {
  constructor(guess, object) {
    this.guess = guess
    this.card = object
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {

  }
  giveFeedback() {

  }
}


module.exports = Turn