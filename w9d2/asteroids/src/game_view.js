const Game = require('./game.js');

function GameView(params) {
    // this.ship = new Ship({ pos: this.game.randomPosition(), game: this });
    this.game = new Game();
    this.ctx = document.getElementById("game-canvas").getContext("2d");
}

GameView.prototype.start = function (params) {
    this.bindKeyHandlers();
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
};

GameView.prototype.bindKeyHandlers = function () {
    key( 'w' , () => {this.game.ship.power([0,-1])});
    key( 's' , () => {this.game.ship.power([0,1])});
    key( 'd' , () => {this.game.ship.power([1,0])});
    key( 'a' , () => {this.game.ship.power([-1,0])});
};

module.exports = GameView;
