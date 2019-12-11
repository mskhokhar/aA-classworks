function MovingObject(object)  {
    this.pos = object["pos"];
    this.vel = object["vel"];
    this.radius = object["radius"];
    this.color = object["color"];
    this.game = object.game;
}
MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
};

MovingObject.prototype.move = function () {
    // debugger
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    // debugger
    this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject){
    if ((Math.abs(this.pos[0] - otherObject.pos[0]) < this.radius) && (Math.abs(this.pos[1] - otherObject.pos[1])) < this.radius) {
        return true;
    } else {
        return false;
    }
};
MovingObject.prototype.collideWith = function(otherObject){
    // if (this.isCollidedWith(otherObject)) {
    //     this.game.remove(otherObject);
    //     this.game.remove(this);
    // }
};

module.exports = MovingObject;