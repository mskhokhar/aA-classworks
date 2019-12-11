const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Asteroid(object) {
    MovingObject.call(this, {
        pos: object.pos,
        vel: Util.randomVec(),
        radius: 10,
        color: "gray",
        game: object.game
    });
    this.color = "gray";
    this.radius = 10;
    this.vel = Util.randomVec();
    // this.game = object.game;
}
Asteroid.prototype.collideWith =  function(otherObject){
    if (this.isCollidedWith(otherObject)) {
        if (otherObject instanceof Ship) {
            otherObject.relocate();
        }else{
            this.game.remove(otherObject);
            this.game.remove(this);
        }
    }
};
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;