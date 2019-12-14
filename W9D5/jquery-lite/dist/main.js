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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMNodeCollection; });\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ \"./src/queue.js\");\n\nclass DOMNodeCollection{\n  constructor(array){\n    this.collection = array;\n    return this;\n  }\n}\nDOMNodeCollection.prototype.html = function (str) {\n  if (!str) {\n    return this.collection[0].innerHTML;\n  } else {\n    for (let i = 0; i < this.collection.length; i++) {\n      this.collection[i].innerHTML = str;\n    }\n  }\n  return this;\n};\n\nDOMNodeCollection.prototype.empty = function (){\n  for(let i = 0; i < this.collection.length; i++){\n    this.collection[i].innerHTML = \"\";\n  }\n};\n\nDOMNodeCollection.prototype.append = function(els){\n  if (typeof els === 'string'){\n    els = new DOMNodeCollection([els]);\n  } else if (els instanceof HTMLElement){\n    els = new DOMNodeCollection([els.cloneNode(true)]);\n  } else if (els instanceof DOMNodeCollection){\n    for (let i = 0; i < els.collection.length; i++){\n      els.collection[i] = els.collection[i].cloneNode(true);\n    }\n  }\n  for (let i = 0; i < this.collection.length; i++) {\n    for (let j = 0; j < els.collection.length; j++) {\n      if (els.collection[j] instanceof HTMLElement) {\n        this.collection[i].appendChild(els.collection[j].cloneNode(true));\n      } else {\n        this.collection[i].innerHTML += els.collection[j];\n      }\n    }\n  }\n};\n\nDOMNodeCollection.prototype.attr = function(attrName, attrValue){\n  for (let i = 0; i < this.collection.length; i++) {\n    if (!attrValue){\n      return this.collection[i].getAttribute(attrName);\n    } else {\n      this.collection[i].setAttribute(attrName, attrValue);\n    }\n  }\n  return this;\n};\nDOMNodeCollection.prototype.addClass = function(className){\n  if (!className){return this;}\n  for (let i = 0; i < this.collection.length; i++) {\n    this.collection[i].className += ` ${className}`;\n  }\n  return this;\n};\nDOMNodeCollection.prototype.removeClass = function(className){\n  if (!className){return this;}\n  for (let i = 0; i < this.collection.length; i++) {\n    if (this.collection[i].classList.contains(className)){\n      this.collection[i].classList.remove(className);\n    }\n  }\n  return this;\n};\n\nDOMNodeCollection.prototype.children = function(){\n  const result = [];\n  for (let i = 0; i < this.collection.length; i++) {\n    result.push(this.collection[i].childNodes);\n  }\n  return new DOMNodeCollection(result);\n};\nDOMNodeCollection.prototype.parent = function(){\n  const result = new Set();\n  for (let i = 0; i < this.collection.length; i++) {\n    result.add(this.collection[i].parentNode);\n  }\n  return new DOMNodeCollection(Array.from(result));\n};\nDOMNodeCollection.prototype.find = function(selector){\n  if (!selector) return new DOMNodeCollection([]);\n\n  if (typeof selector === 'string'){\n    var check = 'element';\n    if(selector[0] === '.'){check = 'class';}\n    else if(selector[0] === '#'){check = 'id';}\n  } else {\n\n  }\n  \n  \n  let queue = new _queue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  let result = [];\n  console.log(this.collection[0].childNodes);\n  \n  queue.enqueue(this.collection[0].childNodes);\n  console.dir(queue)\n  while (!queue.isEmpty()){\n    \n    let currentChild = queue.dequeue();\n    console.log(currentChild);\n    if (check === 'class'){\n      if (Array.from(currentChild.classList).includes(selector.slice(1))){\n        result = result.concat(currentChild);\n      }\n    } else if (check === 'id'){\n      if (currentChild.id === selector.slice(1)) {\n        result = result.concat(currentChild);\n      }\n    } else if (check === 'element'){\n      if (currentChild.nodeName === selector) {\n        result = result.concat(currentChild);\n      }\n    }\n    queue.enqueue(currentChild.childNodes);\n  }\n  return new DOMNodeCollection(result);\n};\n\n\n\n// let anything = window.$l('.list-element');\n// anything.append(document.getElementsByClassName('list-element')[0])\n\n// module.exports = DOMNodeCollection;\n// .append('<li></li>')\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n \nfunction $l(selector) {\n  \n  if (typeof selector === 'string' ) {\n    if (!selector[0] === '#'){\n      return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Array.from(document.querySelectorAll(selector)));\n    } else {\n      return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([document.getElementById(selector.slice(1))]);\n    }\n\n  } else if (selector instanceof HTMLElement) {\n    return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([selector]);\n  }\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\nclass Queue {\n  // Array is used to implement a Queue \n  constructor() {\n    this.items = [];\n  }\n\n  // Functions to be implemented \n  // enqueue(item) \n  enqueue(...element) {\n    // adding element to the queue \n    for (let i = 0; i < element.length; i++){\n      this.items.push(element[i]);\n    }\n  } \n  // dequeue() \n  dequeue() {\n    // removing element from the queue \n    // returns underflow when called  \n    // on empty queue \n    if (this.isEmpty())\n      return \"Underflow\";\n    return this.items.shift();\n  } \n  // front() \n  front() {\n    // returns the Front element of  \n    // the queue without removing it. \n    if (this.isEmpty())\n      return \"No elements in Queue\";\n    return this.items[0];\n  } \n  // isEmpty() \n  isEmpty() {\n    // return true if the queue is empty. \n    return this.items.length == 0;\n  } \n  // printQueue() \n  printQueue() {\n    var str = \"\";\n    for (var i = 0; i < this.items.length; i++)\n      str += this.items[i] + \" \";\n    return str;\n  } \n} \n\n//# sourceURL=webpack:///./src/queue.js?");

/***/ })

/******/ });