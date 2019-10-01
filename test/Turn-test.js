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
});
