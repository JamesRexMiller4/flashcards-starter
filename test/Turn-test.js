const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn, with two arguments', function() {
    const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")
    const turn = new Turn('mutator method', card);
    expect(turn).to.be.an.instanceof(Turn);
    expect(turn.constructor.length).to.equal(2);
  });

  it('should have a method that returns the guess', function() {
    const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")    
    const turn = new Turn('mutator method', card);
    expect(turn.returnGuess()).to.equal('mutator method')
  });

  it('should have a method that returns the card', function() {
    const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")    
    const turn = new Turn('mutator method', card);
    expect(turn.returnCard()).to.equal(card)
  });

  it('should have a method that evaluates if the guess is the correct answer', function() {
    const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")    
    const turn = new Turn('mutator method', card);
    expect(turn.evaluateGuess()).to.equal(false);

    const turn2 = new Turn("accessor method", card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that gives feedback based on whether the guess was correct or not', function() {
    const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ['mutator method', 'accessor method', 'iteration method'], "accessor method")    
    const turn = new Turn('mutator method', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!')

    const turn2 = new Turn("accessor method", card);
    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn2.giveFeedback()).to.equal('correct!')
  });
});
