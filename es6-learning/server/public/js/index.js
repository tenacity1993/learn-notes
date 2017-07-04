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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
	  var ajax = function ajax(callback) {
	    console.log('start');
	    setTimeout(function () {
	      callback && callback.call();
	    }, 1000);
	  };
	  ajax(function () {
	    console.log('timeout1');
	  });
	}
	{
	  var _ajax = function _ajax() {
	    console.log('start2');
	    // resolve：执行下一步操作 reject :中断当前操作
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };
	  _ajax().then(function () {
	    console.log('promise', 'timeout2');
	  });
	}
	{
	  var _ajax2 = function _ajax2() {
	    console.log('start3');
	    // resolve：执行下一步操作 reject :中断当前操作
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 1000);
	    });
	  };
	  _ajax2().then(function () {
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        resolve();
	      }, 2000);
	    });
	  }).then(function () {
	    console.log('timeout3');
	  });
	}
	{
	  var _ajax3 = function _ajax3(num) {
	    console.log('start4');
	    return new Promise(function (resolve, reject) {
	      if (num > 5) {
	        resolve();
	      } else {
	        throw new Error('出错了');
	      }
	    });
	  };
	  _ajax3(6).then(function () {
	    console.log('log', 6);
	  }).catch(function (err) {
	    //  捕获错误
	    console.log('catch', err);
	  });
	}
	{
	  // 所有图片加载完成再添加到页面
	  var loadImg = function loadImg(src) {
	    return new Promise(function (resolve, rejec) {
	      var img = document.createElement('img');
	      img.src = src;
	      img.onload = function () {
	        resolve(img);
	      };
	      img.onerror = function (err) {
	        reject(err);
	      };
	    });
	  };

	  var showImgs = function showImgs(imgs) {
	    imgs.forEach(function (img) {
	      document.body.appendChild(img);
	    });
	  };
	  // 把多个promise实例 当作一个promise实例


	  Promise.all([loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')]).then(showImgs);
	}
	{
	  // 有一个图片加载完成就显示
	  var _loadImg = function _loadImg(src) {
	    return new Promise(function (resolve, rejec) {
	      var img = document.createElement('img');
	      img.src = src;
	      img.onload = function () {
	        resolve(img);
	      };
	      img.onerror = function (err) {
	        reject(err);
	      };
	    });
	  };

	  var _showImgs = function _showImgs(img) {
	    var p = document.createElement('p');
	    p.appendChild(img);
	    document.body.appendChild(p);
	  };

	  Promise.race([_loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')]).then(_showImgs);
	}

/***/ })
/******/ ]);