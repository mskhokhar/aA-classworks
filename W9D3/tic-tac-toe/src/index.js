const View = require('./ttt-view.js')
const Game = require('../solution/game.js');

  $(() => {
    // Your code here
    let game = new Game();
    let $el = $('.ttt');
    let view = new View(game, $el);
  });
