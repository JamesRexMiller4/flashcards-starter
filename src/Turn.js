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
    if (this.returnGuess() === this.card.correctAnswer) {
      this.giveFeedback()
      return true
    } else { 
      this.giveFeedback()
      return false
    }
  }
  giveFeedback() {
    if (this.returnGuess() === this.card.correctAnswer) {
      return "correct!"
    } else {
      return "incorrect!"
    }
  }
}


module.exports = Turn