const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have 0 turns when starting a round', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")

    const cardsArray = [card1, card2, card3, card4];
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    expect(round.turns).to.equal(0)
  });

  it('should have no incorrect guesses when starting a round', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")

    const cardsArray = [card1, card2, card3, card4];
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should have a method that returns the current card being played', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")

    const cardsArray = [card1, card2, card3, card4];
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have a method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")

    const cardsArray = [card1, card2, card3, card4];
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([]);

    expect(round.takeTurn('object')).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.deep.equal([2]);
    expect(round.turns).to.equal(2);
  });

  it('should have a method that calculates the percent correctly answered each round', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")

    const cardsArray = [card1, card2, card3, card4];
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('accessor method');
    round.takeTurn('accessor method');

    expect(round.calculatePercentCorrect()).to.equal(75);
  });
});