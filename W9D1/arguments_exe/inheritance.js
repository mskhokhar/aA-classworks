Function.prototype.inherits = function(SuperClass){
  function Surrogate(){}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject(name) {
  this.name = name;
 }

MovingObject.prototype.method1 = function() {
  console.log(`Inside method 1 ${this.name}`);
}


function Ship(name) {
  MovingObject.call(this,name);
 }
Ship.inherits(MovingObject);

function Asteroid(name) { 
  MovingObject.call(this,name);
}

Asteroid.inherits(MovingObject);

let ship1 = new Ship("titanic");
ship1.method1();

