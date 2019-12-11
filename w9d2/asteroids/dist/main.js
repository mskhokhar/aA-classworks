/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(object) {\n    MovingObject.call(this, {\n        pos: object.pos,\n        vel: Util.randomVec(),\n        radius: 10,\n        color: \"gray\",\n        game: object.game\n    });\n    this.color = \"gray\";\n    this.radius = 10;\n    this.vel = Util.randomVec();\n    // this.game = object.game;\n}\nAsteroid.prototype.collideWith =  function(otherObject){\n    if (this.isCollidedWith(otherObject)) {\n        if (otherObject instanceof Ship) {\n            otherObject.relocate();\n        }else{\n            this.game.remove(otherObject);\n            this.game.remove(this);\n        }\n    }\n};\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n    \n    this.asteroids = [];\n    this.ship = new Ship({pos: this.randomPosition(), game: this});\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n    while (Game.NUM_ASTEROIDS > this.asteroids.length) {\n        this.asteroids.push( new Asteroid( {pos: this.randomPosition(), game: this} ));\n    }\n};\n\nGame.prototype.draw = function (ctx) {\n    // debugger\n    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(moving_obj => {\n        moving_obj.draw(ctx);\n    });\n};\n\nGame.prototype.randomPosition = function() {\n    return [\n            Math.floor(Math.random() * Game.DIM_X), \n            Math.floor(Math.random() * Game.DIM_Y)\n        ];\n};\n\nGame.prototype.moveObjects = function () {\n    // debugger\n        this.allObjects().forEach(asteroid => {\n            asteroid.move();\n        });\n};\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] < 0) {\n        pos[0] = 500;\n    } \n    if (pos[0] > 500) {\n        pos[0] = 0;\n    }\n    if (pos[1] < 0) {\n        pos[1] = 500;\n    } \n    if (pos[1] > 500) {\n        pos[1] = 0;\n    }\n    return pos;\n};\n\nGame.prototype.checkCollisions = function () {\n    let all_obcts = this.allObjects();\n    for (let i = 0; i < all_obcts.length; i++) {\n        const ast_1 = all_obcts[i];\n        for (let j = 0; j < all_obcts.length; j++) {\n            const ast_2 = all_obcts[j];\n            if (j > i && ast_1.isCollidedWith(ast_2)) {\n                ast_1.collideWith(ast_2);\n            }\n        }\n    }\n};\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.remove = function (asteroid) {\n    let idx = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(idx, 1);\n};\n\nGame.prototype.allObjects = function () {\n    \n    return this.asteroids.concat([this.ship]);\n\n};\n\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 10;\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(params) {\n    // this.ship = new Ship({ pos: this.game.randomPosition(), game: this });\n    this.game = new Game();\n    this.ctx = document.getElementById(\"game-canvas\").getContext(\"2d\");\n}\n\nGameView.prototype.start = function (params) {\n    this.bindKeyHandlers();\n    setInterval(() => {\n        this.game.step();\n        this.game.draw(this.ctx);\n    }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function () {\n    key( 'w' , () => {this.game.ship.power([0,-1])});\n    key( 's' , () => {this.game.ship.power([0,1])});\n    key( 'd' , () => {this.game.ship.power([1,0])});\n    key( 'a' , () => {this.game.ship.power([-1,0])});\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n// const MovingObject = require('./moving_object.js');\n// const Asteroid = require('./asteroid.js');\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n// window.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    // let ctx = document.getElementById(\"game-canvas\").getContext(\"2d\");\n    const game = new GameView();\n    // game.draw(ctx);\n    game.start();\n \n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(object)  {\n    this.pos = object[\"pos\"];\n    this.vel = object[\"vel\"];\n    this.radius = object[\"radius\"];\n    this.color = object[\"color\"];\n    this.game = object.game;\n}\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.lineWidth = 1;\n    ctx.strokeStyle = '#003300';\n    ctx.stroke();\n};\n\nMovingObject.prototype.move = function () {\n    // debugger\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    // debugger\n    this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    if ((Math.abs(this.pos[0] - otherObject.pos[0]) < this.radius) && (Math.abs(this.pos[1] - otherObject.pos[1])) < this.radius) {\n        return true;\n    } else {\n        return false;\n    }\n};\nMovingObject.prototype.collideWith = function(otherObject){\n    // if (this.isCollidedWith(otherObject)) {\n    //     this.game.remove(otherObject);\n    //     this.game.remove(this);\n    // }\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship(object) {\n    MovingObject.call(this, {\n        pos: object.pos,\n        vel: [0,0],\n        radius: 5,\n        color: \"blue\",\n        game: object.game\n    });\n    this.color = \"blue\";\n    this.radius = 5;\n    this.vel = [0, 0];\n}\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n};\n\nShip.prototype.power = function(impulse){\n    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]; \n};\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(ChildClass, ParentClass) {\n        function Surrogate() { }\n        Surrogate.prototype = ParentClass.prototype;\n        ChildClass.prototype = new Surrogate();\n        ChildClass.prototype.constructor = ChildClass;\n    },\n\n    randomVec() {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], 5);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });