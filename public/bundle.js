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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(6);
	__webpack_require__(5);
	__webpack_require__(4);

	__webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() {
	    $(document).ready(function(){
	        $('.btn-container .btn.red').click(function() {
	            var $container = $(this).closest('.btn-container');
	            if ($container.find('.btn-block-phone').val().length < 6) {
	                $container.find('.btn-block-phone').addClass('error');
	            } else {
	                $container.find('.btn-block-phone').removeClass('error');
	                var $modal = $('#conversion-modal');
	                $modal.removeClass('hide');
	                $modal.find('.cb-modal-layer').click(function() {
	                    $modal.addClass('hide');
	                });
	                $modal.find('.close').click(function() {
	                    $modal.addClass('hide');
	                });
	            }
	        });

	    })
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	(function() {
	    $(document).ready(function(){
	        function modalHandler($container, $actor) {
	            $actor.click(function() {
	                $container.removeClass('hide');
	            });
	            $container.find('.cb-modal-layer').click(function() {
	                $container.addClass('hide');
	            });
	            $container.find('.close').click(function() {
	                $container.addClass('hide');
	            });
	        }

	        modalHandler($('#conversion-modal'), $('.conversion'));
	        modalHandler($('#service-modal'), $('.feedback-container .link'));
	        modalHandler($('#callback-modal'), $('.call-back'));

	        $('.feedback-container .link').click(function() {
	            var text = 'Узнать подробнее об услуге  «' + $(this).data('val') + '»';
	            $('#service-modal').find('.title').text(text);
	        });

	        var $callBackModal = $('#callback-modal');
	        $callBackModal.find('.btn.red').click(function() {
	            $(this).removeClass('red').addClass('close').text('Закрыть');
	            $callBackModal.find('.info').html('<p>Спасибо за заявку! <br />Наш менеджер свяжется с вами<br /> в ближайшее время.</p>')
	            $callBackModal.find('.close').click(function() {
	                $callBackModal.addClass('hide');
	            });
	        });

	        $('.tariff-container').find('.btn').click(function() {
	            var price = $(this).data('val');
	            var $range = $('#range');
	            $range.val(price);
	            $range.trigger('change');
	            var destination = $('#form').offset().top;
	            $("html:not(:animated),body:not(:animated)").animate({
	                scrollTop: destination
	            }, 800);
	            return false;
	        });
	    })
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	(function() {
	    $(document).ready(function(){
	        var $detail = $('.detail');
	        var $short = $detail.find('.short');
	        var $long = $detail.find('.long');
	        var $detailInner = $('.detail-inner');
	        var $pup = $('.pup');
	        var $range = $('#range');
	        var $budget = $('#budget');

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
	        $range.on('change', function(e) {
	            var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	            $budget.text(price + ' ₽');
	        });
	        $range.mousedown(function(e) {
	            $range.mousemove(function(e) {
	                var price = e.target.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	                $budget.text(price + ' ₽');
	            });
	        });
	    })
	})();

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);