const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game ();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the currentRound', function() {
    const game = new Game();

    game.start(prototypeQuestions);

    expect(game.currentRound).to.equal(0);
  });

  it('should create instances of Cards and put them into an instance of a Deck', function() {
    const game = new Game();
    const deck = new Deck(prototypeQuestions)

    // game.start(prototypeQuestions);
    expect(game.start(prototypeQuestions)).to.deep.equal(deck);
      
  })


});