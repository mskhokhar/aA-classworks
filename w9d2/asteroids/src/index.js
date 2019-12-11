console.log("Webpack is working!");
// const MovingObject = require('./moving_object.js');
// const Asteroid = require('./asteroid.js');
const GameView = require('./game_view.js');

// window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
    // let ctx = document.getElementById("game-canvas").getContext("2d");
    const game = new GameView();
    // game.draw(ctx);
    game.start();
 
});
