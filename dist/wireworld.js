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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const diode = [[{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 1 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 2, "next": 2 }, { "state": 2, "next": 2 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 1 }, { "state": 3, "next": 3 }, { "state": 2, "next": 2 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 1 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 2, "next": 2 }, { "state": 0, "next": 0 }, { "state": 2, "next": 2 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 1 }, { "state": 1, "next": 1 }, { "state": 1, "next": 1 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 2, "next": 2 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 1 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 3, "next": 3 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 1, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 2, "next": 2 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }], [{ "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }, { "state": 0, "next": 0 }]];
/* harmony export (immutable) */ __webpack_exports__["a"] = diode;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {

	constructor(w, h) {
		this.w = w;
		this.h = h;
	}

	init(map) {
		this.map = map;
		const snap = new Snap("#svg");
		let group = snap.g();
		this.gui_group = snap.g();
		let clicker = snap.rect(0, 0, 3000, 3000);
		this.cursor = snap.rect(0, 0, 30, 30);
		this.cursor.attr({
			stroke: '#fff',
			strokeWidth: 1,
			fill: 'none'
		});
		clicker.attr({
			'fill-opacity': 0
		});
		clicker.mousedown((e, x, y) => {
			this.changeState(x, y + window.scrollY);
		});
		clicker.mousemove((e, x, y) => {
			this.showCursor(x, y + window.scrollY);
		});
		/*
  clicker.drag(function(dx, dy, x, y) {
  	addState(x, y);
  }, function(x, y) {
  	addState(x, y);
  }, function(e) {
  });
  */
		this.gui_group.append(clicker);
		group.attr({
			fill: "#555"
			//stroke: "#000",
			//strokeWidth: 2
		});
		this.elems = [];
		for (var i = 0; i < this.w; i++) {
			this.elems[i] = [];
			for (var j = 0; j < this.h; j++) {
				this.elems[i][j] = {};
				this.elems[i][j].rect = snap.rect(i * 30, j * 30, 30, 30);
				//this.elems[i][j].text = snap.text(i*30, j*30+20, "");
				group.append(this.elems[i][j].rect);
				//group.append(this.elems[i][j].text);
			}
		}
	}

	changeState(x, y) {
		const cx = x / 30 >> 0;
		const cy = y / 30 >> 0;
		var s = this.map.get(cx, cy);
		s++;
		if (s >= 4) {
			s = 0;
		}
		this.map.set(cx, cy, s);
	}

	showCursor(x, y) {
		const cx = x / 30 >> 0;
		const cy = y / 30 >> 0;
		this.cursor.attr({
			x: cx * 30,
			y: cy * 30
		});
	}

	change(x, y, color) {
		this.elems[x][y].rect.attr({
			fill: color
		});
	}

	changeText(x, y, text) {
		if (!this.elems[x][y].text) {
			return;
		}
		this.elems[x][y].text.attr({
			text: text
		});
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cellautomaton__ = __webpack_require__(3);


const WireWorld = {
	EMPTY: 0,
	CONDUCTOR: 1,
	HEAD: 2,
	TAIL: 3
};

const getWireWorld = listeners => {
	return new __WEBPACK_IMPORTED_MODULE_0__cellautomaton__["a" /* default */](function () {
		return WireWorld.EMPTY;
	}, function (cells) {
		if (cells[4] == WireWorld.EMPTY) {
			return WireWorld.EMPTY;
		} else if (cells[4] == WireWorld.HEAD) {
			return WireWorld.TAIL;
		} else if (cells[4] == WireWorld.TAIL) {
			return WireWorld.CONDUCTOR;
		} else if (cells[4] == WireWorld.CONDUCTOR) {
			var m = 0;
			for (var i = 0; i < cells.length; i++) {
				if (cells[i] == WireWorld.HEAD) {
					m++;
				}
			}
			if (m == 1 || m == 2) {
				return WireWorld.HEAD;
			}
			return WireWorld.EMPTY;
		}
	}, listeners);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getWireWorld;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CellAutomaton {
	constructor(init, rule, listener) {
		this.w = 30;
		this.h = 30;
		this.current_chunk = { x: 0, y: 0 };
		this.map = [];
		this.init = init;
		this.rule = rule;
		this.listener = listener;
		for (var i = 0; i < this.w; i++) {
			this.map[i] = [];
			for (var j = 0; j < this.h; j++) {
				this.map[i][j] = {
					state: this.init(i, j),
					next: this.init(i, j)
				};
			}
		}
		this.load();
	}

	get(i, j) {
		return this.map[i][j].state;
	}

	set(i, j, state) {
		if (this.map[i][j].state != state) {
			this.listener(i, j, state);
		}
		this.map[i][j].state = state;
		this.save();
	}

	each(cb) {
		var d = 0;
		for (var i = 0; i < this.w; i++) {
			for (var j = 0; j < this.h; j++) {
				d += cb(i, j, this.map[i][j].state);
			}
		}
		return d;
	}

	refresh() {
		for (var i = 0; i < this.w; i++) {
			for (var j = 0; j < this.h; j++) {
				this.listener(i, j, this.map[i][j].state);
			}
		}
	}

	step() {
		for (var i = 1; i < this.w - 1; i++) {
			for (var j = 1; j < this.h - 1; j++) {
				this.map[i][j].next = this.rule([this.map[i - 1][j - 1].state, this.map[i][j - 1].state, this.map[i + 1][j - 1].state, this.map[i - 1][j].state, this.map[i][j].state, this.map[i + 1][j].state, this.map[i - 1][j + 1].state, this.map[i][j + 1].state, this.map[i + 1][j + 1].state], i, j);
			}
		}
		for (var i = 0; i < this.w; i++) {
			for (var j = 0; j < this.h; j++) {
				if (!this.map[i][j].next) {
					continue;
				}
				if (this.map[i][j].state != this.map[i][j].next) {
					this.listener(i, j, this.map[i][j].next);
					this.map[i][j].state = this.map[i][j].next;
				}
			}
		}
	}

	save() {
		localStorage.setItem('map', JSON.stringify(this.map));
	}

	load() {
		try {
			const map = JSON.parse(localStorage.getItem('map'));
			if (map) {
				this.map = map;
			}
		} catch (e) {
			console.error(e);
			this.map = [];
		}
	}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = CellAutomaton;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wireworld__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample__ = __webpack_require__(0);




let map = localStorage.getItem('map');
if (!map) {
	localStorage.setItem('map', JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__sample__["a" /* diode */]));
}

var view = new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](30, 30);
var wireworld = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wireworld__["a" /* getWireWorld */])(function (x, y, state) {
	if (state == 0) {
		view.change(x, y, "#232323");
	} else if (state == 1) {
		view.change(x, y, "#ffff00");
	} else if (state == 2) {
		view.change(x, y, "#0000ff");
	} else if (state == 3) {
		view.change(x, y, "#ff0000");
	}
});
view.init(wireworld);
wireworld.refresh();
setInterval(function () {
	wireworld.step();
}, 500);

/***/ })
/******/ ]);