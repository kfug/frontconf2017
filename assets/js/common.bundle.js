/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var map;
	var marker;
	
	window.initMap = function () {
	    var mapElement = document.getElementById('map');
	    if (!mapElement) {
	        return;
	    }
	
	    var myLatLng = { lat: 34.701971, lng: 135.488924 };
	    map = new google.maps.Map(mapElement, {
	        zoom: 1,
	        center: myLatLng,
	        scrollwheel: false
	    });
	    marker = new google.maps.Marker({
	        position: myLatLng,
	        title: 'Hello World!',
	        animation: google.maps.Animation.BOUNCE,
	        icon: {
	            url: "./img/map-pin.png",
	            scaledSize: new google.maps.Size(71, 88.5)
	        }
	    });
	    marker.setMap(map);
	    map.setZoom(17);
	};
	
	$(function () {
	    var $menu = $('#main-menu');
	    if ($menu.length === 0) {
	        return;
	    }
	
	    var menuScrollTop = $menu.offset().top;
	    $(window).scroll(function (e) {
	        var scrollTop = $(e.target).scrollTop();
	        if (menuScrollTop < scrollTop) {
	            $('.to-menu').fadeIn(1000);
	        } else {
	            $('.to-menu').fadeOut(1000);
	        }
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=common.bundle.js.map