// const http = require('http');
// const Game = require('./src/Game')
// let app = http.createServer();

const util = require('./src/util');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Round = require('./src/Round')

const http = require('http');
const Game = require('./src/Game')
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 
const game = new Game()
game.start(prototypeQuestions)