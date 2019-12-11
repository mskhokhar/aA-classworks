
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

function Game() {
    
    this.asteroids = [];
    this.ship = new Ship({pos: this.randomPosition(), game: this});
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    while (Game.NUM_ASTEROIDS > this.asteroids.length) {
        this.asteroids.push( new Asteroid( {pos: this.randomPosition(), game: this} ));
    }
};

Game.prototype.draw = function (ctx) {
    // debugger
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(moving_obj => {
        moving_obj.draw(ctx);
    });
};

Game.prototype.randomPosition = function() {
    return [
            Math.floor(Math.random() * Game.DIM_X), 
            Math.floor(Math.random() * Game.DIM_Y)
        ];
};

Game.prototype.moveObjects = function () {
    // debugger
        this.allObjects().forEach(asteroid => {
            asteroid.move();
        });
};

Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
        pos[0] = 500;
    } 
    if (pos[0] > 500) {
        pos[0] = 0;
    }
    if (pos[1] < 0) {
        pos[1] = 500;
    } 
    if (pos[1] > 500) {
        pos[1] = 0;
    }
    return pos;
};

Game.prototype.checkCollisions = function () {
    let all_obcts = this.allObjects();
    for (let i = 0; i < all_obcts.length; i++) {
        const ast_1 = all_obcts[i];
        for (let j = 0; j < all_obcts.length; j++) {
            const ast_2 = all_obcts[j];
            if (j > i && ast_1.isCollidedWith(ast_2)) {
                ast_1.collideWith(ast_2);
            }
        }
    }
};

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function (asteroid) {
    let idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
};

Game.prototype.allObjects = function () {
    
    return this.asteroids.concat([this.ship]);

};


Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;