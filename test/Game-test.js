const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round')


describe('Game', function() {

  it.skip('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it.skip('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should keep track of the currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(0);

    game.start(prototypeQuestions);

    expect(game.currentRound).to.equal(1);
  });

});