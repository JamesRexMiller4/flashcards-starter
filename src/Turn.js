class Turn {
  constructor(guess, object) {
    this.guess = guess
    this.card = object
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.returnGuess() === this.card.correctAnswer) {
      return true;
    } else { 
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}


module.exports = Turn