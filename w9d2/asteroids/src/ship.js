const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Ship(object) {
    MovingObject.call(this, {
        pos: object.pos,
        vel: [0,0],
        radius: 5,
        color: "blue",
        game: object.game
    });
    this.color = "blue";
    this.radius = 5;
    this.vel = [0, 0];
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
};

Ship.prototype.power = function(impulse){
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]; 
};


module.exports = Ship;