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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggleUtil = __webpack_require__(/*! ./follow_toggle_util.js */ "./frontend/follow_toggle_util.js");
class FollowToggle {
  
  constructor($elObj) {
    this.$el = $elObj;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();

    this.$el.on('click', () => {
      let f_id = this.userId;
      this.handleClick(f_id);
      this.render();
    });

  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.prop('disabled', false);
      this.$el.html("Follow!");
    } else if (this.followState === "following" || this.followState === "unfollowing"){
      this.$el.prop('disabled', true);
    } else {
      this.$el.prop('disabled', false);
      this.$el.html("Unfollow!");

    }
  }

  

  handleClick(f_id){

    const success = () => {
      // this.followState = this.followState === "followed" ? "unfollowed" : "followed";
      this.followState = this.followState === "unfollowing" ? "unfollowed" : "followed";
      this.render(); 
    };

    const failure = () => {
      // $messages.text(errors.responseJSON);
      console.log("oops");
    };
  
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      FollowToggleUtil.followAJAX(f_id)
        .then(success, failure);
      
    } else {
      this.followState = "unfollowing";
      this.render();
      FollowToggleUtil.unfollowAJAX(f_id)
        .then(success, failure);
    }
    // this.render(); 
    
  }
}



module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/follow_toggle_util.js":
/*!****************************************!*\
  !*** ./frontend/follow_toggle_util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const FollowToggleUtil = {
  followAJAX: function (followee_id) {
    return $.ajax({
      method: "POST",
      url: `/users/${followee_id}/follow`,
      dataType: 'json'
    });
  },
  unfollowAJAX: function (followee_id) {
    return $.ajax({
      method: "DELETE",
      url: `/users/${followee_id}/follow`,
      dataType: 'json'
    });
  }

};

module.exports = FollowToggleUtil;

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const FollowToggleUtil = __webpack_require__(/*! ./follow_toggle_util.js */ "./frontend/follow_toggle_util.js");



$(() => {
  $(".follow-toggle").each(function(index) {
    new FollowToggle($(this));
  });
});




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map