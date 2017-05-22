/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(3);
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	    $(document).ready(function(){
	        var $detail = $('.detail');
	        var $short = $detail.find('.short');
	        var $long = $detail.find('.long');
	        var $detailInner = $('.detail-inner');
	        var $pup = $('.pup');

	        $short.click(function () {
	            $long.removeClass('active');
	            $short.addClass('active');
	            $detailInner.hide();
	            $pup.addClass('left');
	            $pup.removeClass('right');
	        });
	        $long.click(function () {
	            $short.removeClass('active');
	            $long.addClass('active');
	            $detailInner.show();
	            $pup.removeClass('left');
	            $pup.addClass('right');
	        });
	    })
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() {
	    $(document).ready(function(){
	        var $slider = $('.slider');
	        var $left = $slider.find('.arrow.left');
	        var $right = $slider.find('.arrow.right');
	        var index = 0;

	        function incrementIndex(newVal) {
	            var maxVal = $slider.find('.slide').length - 1;
	            if (newVal < 0) {
	                return maxVal;
	            }
	            if (newVal > maxVal) {
	                return 0
	            }
	            return newVal;
	        }

	        $left.click(function() {
	            index = incrementIndex(--index);
	            $slider.find('.slide').removeClass('active');
	            $($slider.find('.slide')[index]).addClass('active');
	        });
	        $right.click(function() {
	            index = incrementIndex(++index);
	            $slider.find('.slide').removeClass('active');
	            $($slider.find('.slide')[index]).addClass('active');
	        });
	    })
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);