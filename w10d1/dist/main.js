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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Clock {\n  constructor(){\n    this.date = new Date();\n    this.seconds = this.date.getSeconds();\n    this.minutes = this.date.getMinutes();\n    this.hours = this.date.getHours();\n    this.tick();\n  }\n\n  tick(){\n    let that = this;\n    setInterval( () => {\n      that.seconds += 1;\n      if (that.seconds > 59){\n        that.minutes += 1;\n        that.seconds = 0;\n      } \n      if (that.minutes > 59){\n        that.hours += 1;\n        that.minutes = 0;\n      } \n      if (that.hours > 23){\n        that.hours = 0;\n      } \n    that.changeClockDisplay();\n    } ,1000);\n  }\n\n  changeClockDisplay(){\n    const clockEle = document.getElementById('clock');\n    clockEle.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;\n  }\n}\n\n\nmodule.exports = Clock;\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dogLinkCreator; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(){\n  let list = document.getElementsByClassName(\"drop-down-dog-list\");\n  let dogsArray = Object.entries(dogs);\n  for (let i = 0; i < dogsArray.length; i++) {\n    let link = document.createElement(\"a\");\n    link.innerHTML = dogsArray[i][0];\n    link.href = dogsArray[i][1];\n    let listItem = document.createElement(\"li\");\n    listItem.appendChild(link);\n    listItem.className = \"dog-list\";\n    list[0].appendChild(listItem);\n  }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Clock = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\nconst partyHeader = document.getElementById('party');\nObject(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Party Time.', partyHeader);\nObject(_drop_down__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nlet clock = new Clock();\n\nconst dogDropDownNav = document.getElementsByClassName(\"h3-drop-down\")[0];\ndogDropDownNav.addEventListener(\"mouseenter\", function(){\n  let dogList = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n  dogList.className = \"drop-down-dog-list \";\n});\n\ndogDropDownNav.addEventListener(\"mouseleave\", function () {\n  let dogList = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n  dogList.className = \"drop-down-dog-list hidden\";\n});\n\nlet todo = new _todo_list__WEBPACK_IMPORTED_MODULE_2___default.a();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Todo{\n  constructor(){\n    let localStorage = window.localStorage;\n    this.list = JSON.parse(localStorage.getItem(\"list\")) || [];\n    const todoList = document.getElementsByClassName(\"create-list\")[0];\n    this.populateList(this.list);\n    todoList.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      let todoString = document.getElementById(\"todo-text-field\").value;\n      let todoObj = { \"text\": todoString, \"done\": false };\n      this.list.push(todoObj);\n      document.getElementById(\"todo-text-field\").value = '';\n      this.populateList([this.list[this.list.length-1]]);\n      localStorage.setItem(\"list\", JSON.stringify(this.list));\n    });\n    const checkBox = document.getElementsByClassName(\"checkbox\");\n    for (let i = 0; i < checkBox.length; i++) {\n      const check = checkBox[i];\n      check.addEventListener(\"click\", (e) => {\n        let index = e.target.getAttribute(\"dataindex\");\n        if (!check.getAttribute(\"checked\")) {\n          e.target.removeAttribute(\"checked\");\n          this.list[index][\"done\"] = true;\n        } else {\n          e.target.setAttribute(\"checked\", \"banana\");\n          this.list[index][\"done\"] = false;\n        }\n        localStorage.setItem(\"list\", JSON.stringify(this.list));\n      });\n    }\n  }\n\n  populateList(listArray){\n    listArray.forEach((el, i) => {\n      let input = document.createElement(\"input\");\n      input.setAttribute(\"type\", \"checkbox\");\n      input.setAttribute(\"class\", \"checkbox\");\n      input.setAttribute(\"dataIndex\", `${i}`);\n      if (el.done) {\n        input.setAttribute(\"checked\", \"banana\");\n      }\n      let label = document.createElement(\"label\");\n      label.setAttribute(\"for\", `item${i}`);\n      label.innerHTML = el.text;\n      let ul = document.getElementsByClassName(\"todos\")[0];\n      let li = document.createElement(\"li\");\n      li.appendChild(input);\n      li.appendChild(label);\n      ul.appendChild(li);\n    });\n  }\n  \n}\n\nmodule.exports = Todo;\n\n\n\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst partyHeader = document.getElementById('party');\n\nlet htmlGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (htmlGenerator = (string, htmlElement) => {\n  let node = document.createElement('p');\n  node.innerHTML = string;\n  htmlElement.appendChild(node);\n});\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });