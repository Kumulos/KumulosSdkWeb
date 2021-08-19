(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kumulos"] = factory();
	else
		root["kumulos"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* global DOMException */

module.exports = clipboardCopy

function makeError () {
  return new DOMException('The request is not allowed', 'NotAllowedError')
}

async function copyClipboardApi (text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (!navigator.clipboard) {
    throw makeError()
  }
  return navigator.clipboard.writeText(text)
}

async function copyExecCommand (text) {
  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'
  span.style.webkitUserSelect = 'auto'
  span.style.userSelect = 'all'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } finally {
    // Cleanup
    selection.removeAllRanges()
    window.document.body.removeChild(span)
  }

  if (!success) throw makeError()
}

async function clipboardCopy (text) {
  try {
    await copyClipboardApi(text)
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text)
    } catch (err2) {
      throw (err2 || err || makeError())
    }
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kumulos-rating {\n  display: flex;\n  height: 20px;\n  font-size: 16px;\n  align-items: center;\n  margin-top: 3px; }\n  .kumulos-rating .kumulos-rating-star {\n    position: relative; }\n    .kumulos-rating .kumulos-rating-star .kumulos-rating-halfstar {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 50%;\n      overflow: hidden; }\n  .kumulos-rating .kumulos-rating-count {\n    font-size: 12px;\n    margin-left: 3px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes kumulos-anim-shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-2px, 0, 0); }\n  40%,\n  60% {\n    transform: translate3d(2px, 0, 0); } }\n\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0); }\n  100% {\n    opacity: 1;\n    transform: translateY(-50%, 0, 0); } }\n\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    transform: translateY(0, 0, 0); } }\n\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    transform: translateY(0, 0, 0); } }\n\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none; }\n\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block; }\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform; }\n  .kumulos-tooltip:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: 100%;\n    border: solid transparent;\n    border-width: 8px;\n    margin-top: -8px; }\n  .kumulos-tooltip-right {\n    left: calc(100% + 12px);\n    animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-right:after {\n      border-right-color: #222;\n      right: 100%; }\n  .kumulos-tooltip-left {\n    right: calc(100% + 12px);\n    animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-left:after {\n      border-left-color: #222;\n      left: 100%; }\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1); }\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000; }\n  .kumulos-prompt *,\n  .kumulos-prompt *:before,\n  .kumulos-prompt *:after {\n    box-sizing: inherit; }\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600; }\n  .kumulos-action-button:hover {\n    cursor: pointer; }\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555; }\n  .kumulos-action-button-cancel:hover {\n    background: #eee; }\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff; }\n  .kumulos-action-button-confirm:hover {\n    opacity: 0.8; }\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold; }\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd; }\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block; }\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none; }\n\n.kumulos-checkbox:after {\n  content: '';\n  position: absolute;\n  display: none; }\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa; }\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3); }\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54); }\n  .kumulos-banner-container.kumulos-prompt-position-top {\n    top: 0;\n    animation: kumulos-slide-down 0.4s ease; }\n  .kumulos-banner-container.kumulos-prompt-position-bottom {\n    bottom: 0;\n    top: unset;\n    animation: kumulos-slide-up 0.4s ease; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial; } }\n\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px; }\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px; }\n  .kumulos-banner-header h1 {\n    font-size: inherit;\n    font-weight: bold;\n    margin: 0 0 3px 0; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px; } }\n\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px; } }\n\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0; } }\n\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0; }\n\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0; }\n\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px; }\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left)); }\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right)); }\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top)); }\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom)); } }\n\n.kumulos-bell-container {\n  position: fixed; }\n  .kumulos-bell-container-bottom-left {\n    bottom: 15px;\n    left: 15px; }\n  .kumulos-bell-container-bottom-right {\n    bottom: 15px;\n    right: 15px; }\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden; }\n  .kumulos-bell:hover {\n    transform: scale(1);\n    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54); }\n  .kumulos-bell:active {\n    transform: scale(0.8);\n    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54); }\n  .kumulos-bell svg {\n    fill: #fff;\n    animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n    animation-delay: 0.3s; }\n  .kumulos-bell:before {\n    content: '';\n    display: block;\n    width: 85%;\n    height: 85%;\n    border: solid 1px;\n    border-radius: 100%;\n    border-color: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 7.5% 0 0 7.5%; }\n\n.kumulos-bell-inner {\n  border-radius: 100%; }\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n  .kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto; }\n    .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n    .kumulos-alert-container.kumulos-prompt-position-top-center {\n      border-radius: 0 0 3px 3px; }\n    .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n    .kumulos-alert-container.kumulos-prompt-position-center {\n      border-radius: 3px;\n      top: 120px; } }\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start; }\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px; }\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px; }\n  .kumulos-channel-dialog-header h1,\n  .kumulos-alert-header h1 {\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0; }\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto; }\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end; }\n\n.kumulos-channel-list-container {\n  margin: 20px 0; }\n\n.kumulos-inapp-container {\n  position: fixed;\n  top: 100px;\n  left: 50%;\n  width: 600px;\n  height: 1000px;\n  margin-left: -300px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54); }\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden; }\n\n.kumulos-background-mask-blur\n> *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px); }\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block; }\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px); }\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000; }\n  .kumulos-overlay *,\n  .kumulos-overlay *:before,\n  .kumulos-overlay *:after {\n    box-sizing: inherit; }\n  .kumulos-overlay-strip {\n    display: flex;\n    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n    min-height: 150px; }\n    .kumulos-overlay-strip:before {\n      display: block;\n      content: '';\n      width: calc(500px + 12%);\n      max-width: 660px; }\n  .kumulos-overlay-content-container {\n    display: flex;\n    max-width: 38%;\n    padding: 1em;\n    font: 14px helvetica, sans-serif; }\n    .kumulos-overlay-content-container * {\n      margin: 0; }\n    .kumulos-overlay-content-container svg {\n      margin: 55px 1.7em 0 0;\n      stroke: none;\n      fill: rgba(0, 0, 0, 0.8);\n      flex-shrink: 0; }\n    .kumulos-overlay-content-container img {\n      width: 55px;\n      height: 55px;\n      flex-shrink: 0; }\n    .kumulos-overlay-content-container h3,\n    .kumulos-overlay-content-container p,\n    .kumulos-overlay-content-container a {\n      color: inherit; }\n    .kumulos-overlay-content-container h3 {\n      font-size: 1.3em;\n      font-weight: bold; }\n    .kumulos-overlay-content-container a {\n      margin-right: 0.65em;\n      opacity: 0.8;\n      text-decoration: none; }\n  .kumulos-overlay .kumulos-overlay-content {\n    margin-left: 0.75em; }\n    .kumulos-overlay .kumulos-overlay-content p {\n      margin: 0.5em 0; }\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px; }\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none; }\n\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center; }\n\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px; }\n  .kumulos-overlay-edge .kumulos-overlay-content-container svg {\n    order: 1;\n    transform: rotate(-30deg); }\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%; }\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return hn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_ImmediatePriority", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_UserBlockingPriority", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_NormalPriority", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_LowPriority", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_IdlePriority", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_runWithPriority", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_now", function() { return on; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},k={map:N,forEach:N,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return u&&(u.__h=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(j,{__v:n,i:t})}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function sn(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:fn,cloneElement:an,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:cn,findDOMNode:hn,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/components/app-rating/app-rating.scss":
/*!***************************************************!*\
  !*** ./src/components/app-rating/app-rating.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app-rating.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/app-rating/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/app-rating/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.AppRating = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
__webpack_require__(/*! ./app-rating.scss */ "./src/components/app-rating/app-rating.scss");
function AppRating(props) {
    var stars = props.stars, ratingCount = props.ratingCount;
    function createStars() {
        var starEls = [];
        for (var i = 1; i <= 5; i++) {
            starEls.push(preact_1.h(AppRatingStar, { state: stars >= i
                    ? 'on'
                    : stars < i && stars > i - 1
                        ? 'half'
                        : 'off' }));
        }
        return starEls;
    }
    var ratingStyle = {
        color: props.color
    };
    return (preact_1.h("div", { "class": "kumulos-rating", style: ratingStyle },
        createStars(),
        preact_1.h("span", { "class": "kumulos-rating-count" },
            "(",
            props.ratingCount,
            ")")));
}
exports.AppRating = AppRating;
function AppRatingStar(props) {
    var starEl;
    if (props.state === 'on') {
        starEl = preact_1.h("span", null, "\u2605");
    }
    else if (props.state === 'half') {
        starEl = (preact_1.h("div", null,
            preact_1.h("span", null, "\u2606"),
            preact_1.h("span", { "class": "kumulos-rating-halfstar" }, "\u2605")));
    }
    else {
        starEl = preact_1.h("span", null, "\u2606");
    }
    return preact_1.h("div", { "class": "kumulos-rating-star" }, starEl);
}


/***/ }),

/***/ "./src/core/channels.ts":
/*!******************************!*\
  !*** ./src/core/channels.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ChannelSubscriptionManager = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var ChannelSubscriptionManager = /** @class */ (function () {
    function ChannelSubscriptionManager(ctx) {
        this.context = ctx;
    }
    ChannelSubscriptionManager.prototype.makeSubscriptionRequest = function (method, uuids) {
        var _this = this;
        return _1.getInstallId().then(function (installId) {
            var url = _1.PUSH_BASE_URL + "/v1/app-installs/" + installId + "/channels/subscriptions";
            var params = {
                uuids: uuids
            };
            var options = {
                method: method,
                body: JSON.stringify(params)
            };
            return utils_1.authedFetch(_this.context, url, options);
        });
    };
    /**
     * Subscribes to the channels given by unique ID
     */
    ChannelSubscriptionManager.prototype.subscribe = function (uuids) {
        return this.makeSubscriptionRequest('POST', uuids);
    };
    /**
     * Unsubscribes from the channels given by unique ID
     */
    ChannelSubscriptionManager.prototype.unsubscribe = function (uuids) {
        return this.makeSubscriptionRequest('DELETE', uuids);
    };
    /**
     * Sets the current installations channel subscriptions to those given by unique ID.
     *
     * Any other subscriptions will be removed.
     */
    ChannelSubscriptionManager.prototype.setSubscriptions = function (uuids) {
        return this.makeSubscriptionRequest('PUT', uuids);
    };
    /**
     * Clears all of the existing installation's channel subscriptions
     */
    ChannelSubscriptionManager.prototype.clearSubscriptions = function () {
        return this.setSubscriptions([]);
    };
    /**
     * Lists the channels available to this installation along with subscription status
     */
    ChannelSubscriptionManager.prototype.listChannels = function () {
        var _this = this;
        return _1.getInstallId().then(function (installId) {
            var url = _1.PUSH_BASE_URL + "/v1/app-installs/" + installId + "/channels";
            return utils_1.authedFetchJson(_this.context, url);
        });
    };
    /**
     * Creates a push channel and optionally subscribes the current installation.
     *
     * Name is optional, but required if showInPortal is true.
     */
    ChannelSubscriptionManager.prototype.createChannel = function (channelSpec) {
        var _this = this;
        if (channelSpec.showInPortal &&
            (!channelSpec.name || !channelSpec.name.length)) {
            return Promise.reject({
                error: 'Name is required for channel creation when showInPortal is true'
            });
        }
        return _1.getInstallId().then(function (installId) {
            var url = _1.PUSH_BASE_URL + "/v1/channels";
            var params = {
                uuid: channelSpec.uuid,
                name: channelSpec.name,
                showInPortal: Boolean(channelSpec.showInPortal),
                meta: channelSpec.meta,
                installId: undefined
            };
            if (channelSpec.subscribe) {
                params.installId = installId;
            }
            var options = {
                method: 'POST',
                body: JSON.stringify(params)
            };
            return utils_1.authedFetchJson(_this.context, url, options);
        });
    };
    return ChannelSubscriptionManager;
}());
exports.ChannelSubscriptionManager = ChannelSubscriptionManager;


/***/ }),

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteDdlBannerConfigFromCache = exports.loadDdlConfig = exports.loadPlatformConfig = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var getCacheKeys = function (key) { return ({
    CONFIG_CACHE_KEY: key + "Config",
    CONFIG_CACHE_KEY_UPDATED: key + "ConfigUpdated"
}); };
var MAX_CACHE_AGE_MS = 1 * 60 * 60 * 1000;
var ConfigCacheType;
(function (ConfigCacheType) {
    ConfigCacheType["PLATFORM"] = "platform";
    ConfigCacheType["DDL"] = "ddl";
})(ConfigCacheType || (ConfigCacheType = {}));
function loadConfig(url, cacheKey, ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cacheKeys, config, lastLoadTime, updatedRemoteConfig, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cacheKeys = getCacheKeys(cacheKey);
                    return [4 /*yield*/, storage_1.get(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    config = _b.sent();
                    return [4 /*yield*/, storage_1.get(cacheKeys.CONFIG_CACHE_KEY_UPDATED)];
                case 2:
                    lastLoadTime = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : 0;
                    updatedRemoteConfig = false;
                    if (!(Date.now() - lastLoadTime > MAX_CACHE_AGE_MS)) return [3 /*break*/, 6];
                    console.info('Config never synced/stale, syncing now...');
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, utils_1.authedFetchJson(ctx, url)];
                case 4:
                    config = _b.sent();
                    updatedRemoteConfig = true;
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    console.warn(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    if (!updatedRemoteConfig) return [3 /*break*/, 9];
                    return [4 /*yield*/, storage_1.set(cacheKeys.CONFIG_CACHE_KEY, config)];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, storage_1.set(cacheKeys.CONFIG_CACHE_KEY_UPDATED, Date.now())];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [2 /*return*/, config];
            }
        });
    });
}
function loadPlatformConfig(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadConfig(_1.PUSH_BASE_URL + "/v1/web/config", ConfigCacheType.PLATFORM, ctx)];
                case 1: return [2 /*return*/, ((_a = (_b.sent())) !== null && _a !== void 0 ? _a : {})];
            }
        });
    });
}
exports.loadPlatformConfig = loadPlatformConfig;
function loadDdlConfig(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var webInstallId, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _1.getInstallId()];
                case 1:
                    webInstallId = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, loadConfig(_1.DDL_BASE_URL + "/v1/banners?webInstallId=" + webInstallId, ConfigCacheType.DDL, ctx)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    err_1 = _a.sent();
                    console.warn("loadDdlConfig: failed to load Deferred DeepLink configuration", err_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.loadDdlConfig = loadDdlConfig;
function deleteDdlBannerConfigFromCache(bannerUuid) {
    return __awaiter(this, void 0, void 0, function () {
        var cacheKeys, configs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheKeys = getCacheKeys(ConfigCacheType.DDL);
                    return [4 /*yield*/, storage_1.get(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    configs = _a.sent();
                    if (!configs) {
                        return [2 /*return*/];
                    }
                    configs = configs.filter(function (c) { return c.uuid !== bannerUuid; });
                    return [4 /*yield*/, storage_1.set(cacheKeys.CONFIG_CACHE_KEY, configs)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteDdlBannerConfigFromCache = deleteDdlBannerConfigFromCache;


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.EventType = exports.FP_CAPTURE_URL = exports.DDL_BASE_URL = exports.PUSH_BASE_URL = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_VERSION = '1.10.0';
var SDK_TYPE = 10;
var EVENTS_BASE_URL = 'https://events.kumulos.com';
exports.PUSH_BASE_URL = 'https://push.kumulos.com';
exports.DDL_BASE_URL = 'https://links.kumulos.com';
exports.FP_CAPTURE_URL = 'https://pd.app.delivery';
var EventType;
(function (EventType) {
    EventType["MESSAGE_DELIVERED"] = "k.message.delivered";
    EventType["MESSAGE_OPENED"] = "k.message.opened";
    EventType["PUSH_REGISTERED"] = "k.push.deviceRegistered";
    EventType["INSTALL_TRACKED"] = "k.stats.installTracked";
    EventType["USER_ASSOCIATED"] = "k.stats.userAssociated";
    EventType["USER_ASSOCIATION_CLEARED"] = "k.stats.userAssociationCleared";
    EventType["PAGE_VIEWED"] = "k.pageViewed";
})(EventType = exports.EventType || (exports.EventType = {}));
var PromptTypeName;
(function (PromptTypeName) {
    PromptTypeName["BELL"] = "bell";
    PromptTypeName["ALERT"] = "alert";
    PromptTypeName["BANNER"] = "banner";
    PromptTypeName["DDL_BANNER"] = "ddl_banner";
})(PromptTypeName = exports.PromptTypeName || (exports.PromptTypeName = {}));
var UiActionType;
(function (UiActionType) {
    UiActionType["DECLINE"] = "decline";
    UiActionType["REMIND"] = "remind";
    UiActionType["DDL_OPEN_STORE"] = "openStore";
    UiActionType["DDL_OPEN_DEEPLINK"] = "openDeeplink";
})(UiActionType = exports.UiActionType || (exports.UiActionType = {}));
var ReminderTimeUnit;
(function (ReminderTimeUnit) {
    ReminderTimeUnit["HOURS"] = "hours";
    ReminderTimeUnit["DAYS"] = "days";
})(ReminderTimeUnit = exports.ReminderTimeUnit || (exports.ReminderTimeUnit = {}));
var PromptPosition;
(function (PromptPosition) {
    PromptPosition["TOP_LEFT"] = "top-left";
    PromptPosition["TOP_CENTER"] = "top-center";
    PromptPosition["TOP_RIGHT"] = "top-right";
    PromptPosition["CENTER_LEFT"] = "center-left";
    PromptPosition["CENTER"] = "center";
    PromptPosition["CENTER_RIGHT"] = "center-right";
    PromptPosition["BOTTOM_LEFT"] = "bottom-left";
    PromptPosition["BOTTOM_CENTER"] = "bottom-center";
    PromptPosition["BOTTOM_RIGHT"] = "bottom-right";
    PromptPosition["TOP"] = "top";
    PromptPosition["BOTTOM"] = "bottom";
})(PromptPosition = exports.PromptPosition || (exports.PromptPosition = {}));
var SDKFeature;
(function (SDKFeature) {
    SDKFeature["PUSH"] = "push";
    SDKFeature["DDL"] = "ddl";
})(SDKFeature = exports.SDKFeature || (exports.SDKFeature = {}));
var Context = /** @class */ (function () {
    function Context(config) {
        var _a, _b, _c, _d;
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = "Basic " + btoa(this.apiKey + ":" + this.secretKey);
        this.serviceWorkerPath = (_a = config.serviceWorkerPath) !== null && _a !== void 0 ? _a : '/worker.js';
        this.pushPrompts = (_b = config.pushPrompts) !== null && _b !== void 0 ? _b : 'auto';
        this.autoResubscribe = (_c = config.autoResubscribe) !== null && _c !== void 0 ? _c : true;
        this.features = (_d = config.features) !== null && _d !== void 0 ? _d : [SDKFeature.PUSH];
        this.subscribers = {};
    }
    Context.prototype.subscribe = function (event, handler) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        if (this.subscribers[event].indexOf(handler) > -1) {
            return;
        }
        this.subscribers[event].push(handler);
    };
    Context.prototype.broadcast = function (event, data) {
        if (!this.subscribers[event]) {
            return;
        }
        for (var i = 0; i < this.subscribers[event].length; ++i) {
            this.subscribers[event][i]({
                type: event,
                data: data
            });
        }
    };
    Context.prototype.hasFeature = function (feature) {
        return this.features.includes(feature);
    };
    return Context;
}());
exports.Context = Context;
function assertConfigValid(config) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }
    var features = Array.isArray(config.features) && config.features.length
        ? config.features
        : undefined;
    if (!features || features.includes(SDKFeature.PUSH)) {
        return assertPushConfigValid(config);
    }
}
exports.assertConfigValid = assertConfigValid;
function assertPushConfigValid(config) {
    var requiredStringProps = ['apiKey', 'secretKey', 'vapidPublicKey'];
    for (var _i = 0, requiredStringProps_1 = requiredStringProps; _i < requiredStringProps_1.length; _i++) {
        var prop = requiredStringProps_1[_i];
        if (typeof config[prop] !== 'string' || config[prop].length === 0) {
            throw "Required configuration key '" + prop + "' must be non-empty string";
        }
    }
    if (config.serviceWorkerPath &&
        typeof config.serviceWorkerPath !== 'string' &&
        config.serviceWorkerPath.length === 0) {
        throw "Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)";
    }
    if (config.onPushReceived && typeof config.onPushReceived !== 'function') {
        throw "Optional configuration key 'onPushReceived' must be a function";
    }
    if (config.onPushOpened && typeof config.onPushOpened !== 'function') {
        throw "Optional configuration key 'onPushOpened' must be a function";
    }
}
var installIdPromise = undefined;
function getInstallId() {
    if (installIdPromise) {
        return installIdPromise;
    }
    installIdPromise = storage_1.get('installId').then(function (installId) {
        if (!installId) {
            return storage_1.set('installId', utils_1.uuidv4());
        }
        return installId;
    });
    return installIdPromise;
}
exports.getInstallId = getInstallId;
function getUserId() {
    return storage_1.get('userId').then(function (userId) { return userId !== null && userId !== void 0 ? userId : getInstallId(); });
}
exports.getUserId = getUserId;
function associateUser(ctx, id, attributes) {
    return __awaiter(this, void 0, void 0, function () {
        var props;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.set('userId', id)];
                case 1:
                    _a.sent();
                    props = {
                        id: id,
                        attributes: attributes
                    };
                    return [2 /*return*/, trackEvent(ctx, EventType.USER_ASSOCIATED, props).then(function (_) { })];
            }
        });
    });
}
exports.associateUser = associateUser;
function clearUserAssociation(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUserId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserId()];
                case 1:
                    currentUserId = _a.sent();
                    trackEvent(ctx, EventType.USER_ASSOCIATION_CLEARED, {
                        oldUserIdentifier: currentUserId
                    });
                    return [2 /*return*/, storage_1.del('userId')];
            }
        });
    });
}
exports.clearUserAssociation = clearUserAssociation;
function trackEvent(ctx, type, properties) {
    return __awaiter(this, void 0, void 0, function () {
        var installId, userId, events, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallId()];
                case 1:
                    installId = _a.sent();
                    return [4 /*yield*/, getUserId()];
                case 2:
                    userId = _a.sent();
                    events = [
                        {
                            type: type,
                            uuid: utils_1.uuidv4(),
                            timestamp: Date.now(),
                            data: properties,
                            userId: userId
                        }
                    ];
                    url = EVENTS_BASE_URL + "/v1/app-installs/" + installId + "/events";
                    ctx.broadcast('eventTracked', events);
                    return [2 /*return*/, utils_1.authedFetch(ctx, url, {
                            method: 'POST',
                            body: JSON.stringify(events)
                        })];
            }
        });
    });
}
exports.trackEvent = trackEvent;
function trackInstallDetails(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var payload, hashParts, hash, existingHash, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payload = {
                        app: {
                            bundle: location.host,
                            version: '0.0.0',
                            target: 2 // TODO read from context?
                        },
                        sdk: {
                            id: SDK_TYPE,
                            version: SDK_VERSION
                        },
                        runtime: {
                            id: 8,
                            version: navigator.userAgent
                        },
                        os: {
                            // Detection will be performed server-side from UA data
                            id: 0,
                            version: '0.0.0'
                        },
                        device: {
                            // Will be handled on best-effort basis server-side
                            name: navigator.userAgent,
                            tz: typeof Intl !== 'undefined'
                                ? Intl.DateTimeFormat().resolvedOptions().timeZone || null
                                : null,
                            isSimulator: false,
                            locale: navigator.language
                        }
                    };
                    hashParts = [
                        SDK_VERSION,
                        payload.app.bundle,
                        payload.device.tz,
                        payload.device.locale,
                        payload.device.name
                    ];
                    hash = utils_1.cyrb53(hashParts.join('|'));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, storage_1.get('detailsHash')];
                case 2:
                    existingHash = _a.sent();
                    if (existingHash === hash) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4: return [2 /*return*/, trackEvent(ctx, EventType.INSTALL_TRACKED, payload)
                        .then(function () { return storage_1.set('detailsHash', hash); })
                        .then(function () { return void 0; })];
            }
        });
    });
}
exports.trackInstallDetails = trackInstallDetails;
function getChannelDialogChannels(allChannels, selectionConfig) {
    return allChannels
        .filter(function (c) {
        return selectionConfig.presentedUuids === 'all' ||
            selectionConfig.presentedUuids.includes(c.uuid);
    })
        .map(function (c) { return ({
        channel: __assign({}, c),
        checked: c.subscribed.valueOf() ||
            selectionConfig.checkedUuids === 'all' ||
            selectionConfig.checkedUuids.includes(c.uuid)
    }); });
}
exports.getChannelDialogChannels = getChannelDialogChannels;


/***/ }),

/***/ "./src/core/push/index.ts":
/*!********************************!*\
  !*** ./src/core/push/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.notificationFromPayload = exports.trackOpenFromQuery = exports.MessageType = exports.TokenType = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var safari_1 = __importDefault(__webpack_require__(/*! ./safari */ "./src/core/push/safari.ts"));
var w3c_1 = __importDefault(__webpack_require__(/*! ./w3c */ "./src/core/push/w3c.ts"));
var config_1 = __webpack_require__(/*! ../config */ "./src/core/config.ts");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["W3C"] = 3] = "W3C";
    TokenType[TokenType["SAFARI"] = 4] = "SAFARI";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["PUSH"] = 1] = "PUSH";
    MessageType[MessageType["INAPP"] = 2] = "INAPP";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var manager;
function getPushOpsManager(ctx) {
    if (manager) {
        return manager;
    }
    var browser = utils_1.getBrowserName();
    if (browser === 'safari') {
        manager = config_1.loadPlatformConfig(ctx).then(function (cfg) { return new safari_1["default"](cfg); });
    }
    else {
        manager = Promise.resolve(new w3c_1["default"]());
    }
    return manager;
}
exports["default"] = getPushOpsManager;
function trackOpenFromQuery(ctx) {
    var browser = utils_1.getBrowserName();
    if (browser !== 'safari') {
        return;
    }
    var params = utils_1.parseQueryString();
    if (!(params === null || params === void 0 ? void 0 : params['knid'])) {
        return;
    }
    __1.trackEvent(ctx, __1.EventType.MESSAGE_OPENED, {
        type: MessageType.PUSH,
        id: Number(params['knid'])
    });
}
exports.trackOpenFromQuery = trackOpenFromQuery;
function notificationFromPayload(payload) {
    var _a, _b, _c;
    var userData = __assign({}, payload.data);
    delete userData['k.message'];
    var push = {
        id: payload.data['k.message'].data.id,
        title: payload.title,
        message: payload.msg,
        data: userData,
        url: (_a = payload.url) !== null && _a !== void 0 ? _a : undefined,
        iconUrl: (_b = payload.icon) !== null && _b !== void 0 ? _b : undefined,
        imageUrl: (_c = payload.image) !== null && _c !== void 0 ? _c : undefined
    };
    return push;
}
exports.notificationFromPayload = notificationFromPayload;


/***/ }),

/***/ "./src/core/push/safari.ts":
/*!*********************************!*\
  !*** ./src/core/push/safari.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/core/push/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/core/storage/index.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/core/config.ts");
function hashToken(ctx, token) {
    return utils_1.cyrb53(ctx.apiKey + ":" + token);
}
var SafariPushManager = /** @class */ (function () {
    function SafariPushManager(cfg) {
        this.cfg = cfg;
    }
    SafariPushManager.prototype.requestNotificationPermission = function (ctx) {
        var _a;
        var svcUrl = __1.PUSH_BASE_URL + "/safari/" + ctx.apiKey;
        var deferred = utils_1.defer();
        (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.requestPermission(svcUrl, this.cfg.safariPushId, {}, function (perm) {
            console.log(perm);
            deferred.resolve(perm.permission);
        });
        return deferred.promise;
    };
    SafariPushManager.prototype.pushRegister = function (ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, config_1.loadPlatformConfig(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || !perm.deviceToken) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, storage_1.get('pushTokenHash')];
                    case 2:
                        existingTokenHash = _b.sent();
                        tokenHash = hashToken(ctx, perm.deviceToken);
                        if (existingTokenHash === tokenHash) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, __1.trackEvent(ctx, __1.EventType.PUSH_REGISTERED, {
                                type: _1.TokenType.SAFARI,
                                token: perm.deviceToken,
                                bundleId: cfg.safariPushId
                            })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, storage_1.set('pushTokenHash', tokenHash)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafariPushManager.prototype.requestPermissionAndRegisterForPush = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestNotificationPermission(ctx)];
                    case 1:
                        perm = _a.sent();
                        switch (perm) {
                            case 'default':
                                return [2 /*return*/, 'unsubscribed'];
                            case 'denied':
                                return [2 /*return*/, 'blocked'];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.pushRegister(ctx)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'subscribed'];
                    case 4:
                        e_1 = _a.sent();
                        return [2 /*return*/, 'unsubscribed'];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SafariPushManager.prototype.getCurrentSubscriptionState = function (ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, config_1.loadPlatformConfig(ctx)];
                    case 1:
                        cfg = _c.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || (perm === null || perm === void 0 ? void 0 : perm.permission) === 'denied') {
                            return [2 /*return*/, 'blocked'];
                        }
                        return [4 /*yield*/, storage_1.get('pushTokenHash')];
                    case 2:
                        existingTokenHash = _c.sent();
                        tokenHash = hashToken(ctx, (_b = perm.deviceToken) !== null && _b !== void 0 ? _b : '');
                        if (existingTokenHash === tokenHash && perm.permission === 'granted') {
                            return [2 /*return*/, 'subscribed'];
                        }
                        return [2 /*return*/, 'unsubscribed'];
                }
            });
        });
    };
    SafariPushManager.prototype.handleAutoResubscription = function (ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!ctx.autoResubscribe || !this.cfg.safariPushId) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, config_1.loadPlatformConfig(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || perm.permission !== 'granted' || !perm.deviceToken) {
                            console.info('Auto-resubscription: permission not granted or no token, aborting');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, storage_1.get('pushTokenHash')];
                    case 2:
                        existingTokenHash = _b.sent();
                        tokenHash = hashToken(ctx, perm.deviceToken);
                        if (existingTokenHash === tokenHash) {
                            console.info('Auto-resubscription: already have a token hash for same token, aborting');
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.pushRegister(ctx)];
                }
            });
        });
    };
    return SafariPushManager;
}());
exports["default"] = SafariPushManager;


/***/ }),

/***/ "./src/core/push/w3c.ts":
/*!******************************!*\
  !*** ./src/core/push/w3c.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/core/push/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/core/storage/index.ts");
function hasSameKey(vapidKey, subscription) {
    var existingSubKey = subscription.options.applicationServerKey;
    if (!existingSubKey) {
        return false;
    }
    var subKey = utils_1.base64UrlEncode(existingSubKey);
    return subKey === vapidKey;
}
function getActiveServiceWorkerReg() {
    return __awaiter(this, void 0, void 0, function () {
        var workerReg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
                case 1:
                    workerReg = _a.sent();
                    if (!workerReg) {
                        return [2 /*return*/, Promise.reject('No service worker registration')];
                    }
                    return [2 /*return*/, navigator.serviceWorker.ready];
            }
        });
    });
}
function hashSubscription(ctx, sub) {
    return utils_1.cyrb53(ctx.apiKey + ":" + sub.endpoint);
}
var W3cPushManager = /** @class */ (function () {
    function W3cPushManager() {
    }
    W3cPushManager.prototype.requestNotificationPermission = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof Notification === 'undefined') {
                            return [2 /*return*/, Promise.reject('Notifications are not supported in this browser, aborting...')];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.pushRegister = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var workerReg, existingSub, sub, endpointHash, expiry, existingEndpointHash, existingExpiry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!('PushManager' in window)) {
                            return [2 /*return*/, Promise.reject('Push notifications are not supported in this browser')];
                        }
                        return [4 /*yield*/, getActiveServiceWorkerReg()];
                    case 1:
                        workerReg = _a.sent();
                        return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                    case 2:
                        existingSub = _a.sent();
                        if (!(existingSub && !hasSameKey(ctx.vapidPublicKey, existingSub))) return [3 /*break*/, 4];
                        return [4 /*yield*/, (existingSub === null || existingSub === void 0 ? void 0 : existingSub.unsubscribe())];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, workerReg.pushManager.subscribe({
                            applicationServerKey: ctx.vapidPublicKey,
                            userVisibleOnly: true
                        })];
                    case 5:
                        sub = _a.sent();
                        endpointHash = hashSubscription(ctx, sub);
                        expiry = sub.expirationTime;
                        return [4 /*yield*/, storage_1.get('pushEndpointHash')];
                    case 6:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, storage_1.get('pushExpiresAt')];
                    case 7:
                        existingExpiry = _a.sent();
                        if (existingEndpointHash === endpointHash &&
                            (!existingExpiry || existingExpiry > Date.now())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, __1.trackEvent(ctx, __1.EventType.PUSH_REGISTERED, {
                                type: _1.TokenType.W3C,
                                token: sub
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, storage_1.set('pushEndpointHash', endpointHash)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, storage_1.set('pushExpiresAt', expiry)];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.requestPermissionAndRegisterForPush = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestNotificationPermission(ctx)];
                    case 1:
                        perm = _a.sent();
                        switch (perm) {
                            case 'default':
                                return [2 /*return*/, 'unsubscribed'];
                            case 'denied':
                                return [2 /*return*/, 'blocked'];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.pushRegister(ctx)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'subscribed'];
                    case 4:
                        e_2 = _a.sent();
                        return [2 /*return*/, 'unsubscribed'];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.getCurrentSubscriptionState = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, reg, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perm = Notification.permission;
                        if (perm === 'denied') {
                            return [2 /*return*/, 'blocked'];
                        }
                        return [4 /*yield*/, getActiveServiceWorkerReg()];
                    case 1:
                        reg = _a.sent();
                        return [4 /*yield*/, (reg === null || reg === void 0 ? void 0 : reg.pushManager.getSubscription())];
                    case 2:
                        sub = _a.sent();
                        if (sub && perm === 'granted' && hasSameKey(ctx.vapidPublicKey, sub)) {
                            return [2 /*return*/, 'subscribed'];
                        }
                        return [2 /*return*/, 'unsubscribed'];
                }
            });
        });
    };
    W3cPushManager.prototype.handleAutoResubscription = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, existingEndpointHash, existingExpiry, workerReg, existingSub, existingSubHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ctx.autoResubscribe) {
                            console.info('Auto-resubscribe: not enabled, aborting');
                            return [2 /*return*/];
                        }
                        perm = Notification.permission;
                        if (perm !== 'granted') {
                            console.info("Auto-resubscribe: permission not granted, aborting: " + perm);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, storage_1.get('pushEndpointHash')];
                    case 1:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, storage_1.get('pushExpiresAt')];
                    case 2:
                        existingExpiry = _a.sent();
                        return [4 /*yield*/, getActiveServiceWorkerReg()];
                    case 3:
                        workerReg = _a.sent();
                        return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                    case 4:
                        existingSub = _a.sent();
                        existingSubHash = undefined;
                        if (existingSub) {
                            existingSubHash = hashSubscription(ctx, existingSub);
                        }
                        if (existingEndpointHash !== undefined &&
                            existingEndpointHash === existingSubHash &&
                            existingSub &&
                            hasSameKey(ctx.vapidPublicKey, existingSub) &&
                            (existingExpiry === null ||
                                existingExpiry === undefined ||
                                existingExpiry > Date.now())) {
                            console.info('Auto-resubscribe: already have a non-expired endpoint hash for same sub, aborting');
                            return [2 /*return*/];
                        }
                        console.info('Auto-resubscribe: attempting resubscription');
                        try {
                            return [2 /*return*/, this.pushRegister(ctx)];
                        }
                        catch (e) {
                            console.error(e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return W3cPushManager;
}());
exports["default"] = W3cPushManager;


/***/ }),

/***/ "./src/core/root-frame.ts":
/*!********************************!*\
  !*** ./src/core/root-frame.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var RootFrame = /** @class */ (function () {
    function RootFrame() {
        var _this = this;
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';
        this.containers = [];
        utils_1.onDOMReady(function () { return document.body.appendChild(_this.element); });
    }
    RootFrame.prototype.createContainer = function (name) {
        var container = {
            name: name,
            element: document.createElement('div')
        };
        container.element.id = "kumulos-ui-root-" + name;
        this.element.appendChild(container.element);
        this.containers.push(container);
        return container;
    };
    return RootFrame;
}());
exports["default"] = RootFrame;


/***/ }),

/***/ "./src/core/storage/idb-keyval.ts":
/*!****************************************!*\
  !*** ./src/core/storage/idb-keyval.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright 2016, Jake Archibald
exports.__esModule = true;
exports.keys = exports.clear = exports.del = exports.set = exports.get = exports.Store = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var Store = /** @class */ (function () {
    function Store(dbName, storeName) {
        if (dbName === void 0) { dbName = 'keyval-store'; }
        if (storeName === void 0) { storeName = 'keyval'; }
        this.storeName = storeName;
        this._dbp = new Promise(function (resolve, reject) {
            var openreq = indexedDB.open(dbName, 1);
            openreq.onerror = function () { return reject(openreq.error); };
            openreq.onsuccess = function () { return resolve(openreq.result); };
            // First time setup: create an empty object store
            openreq.onupgradeneeded = function () {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    Store.prototype._withIDBStore = function (type, callback) {
        var _this = this;
        return this._dbp.then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction(_this.storeName, type);
                transaction.oncomplete = function () { return resolve(); };
                transaction.onabort = transaction.onerror = function () {
                    return reject(transaction.error);
                };
                callback(transaction.objectStore(_this.storeName));
            });
        });
    };
    return Store;
}());
exports.Store = Store;
var store;
function getDefaultStore() {
    if (!store)
        store = new Store();
    return store;
}
function get(key, store) {
    if (store === void 0) { store = getDefaultStore(); }
    var req;
    return store
        ._withIDBStore('readonly', function (store) {
        req = store.get(key);
    })
        .then(function () { return req.result; });
}
exports.get = get;
function set(key, value, store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store.put(value, key);
    });
}
exports.set = set;
function del(key, store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store["delete"](key);
    });
}
exports.del = del;
function clear(store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store.clear();
    });
}
exports.clear = clear;
function keys(store) {
    if (store === void 0) { store = getDefaultStore(); }
    var keys = [];
    return store
        ._withIDBStore('readonly', function (store) {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
            if (!this.result)
                return;
            keys.push(this.result.key);
            this.result["continue"]();
        };
    })
        .then(function () { return keys; });
}
exports.keys = keys;


/***/ }),

/***/ "./src/core/storage/index.ts":
/*!***********************************!*\
  !*** ./src/core/storage/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getMostRecentlyOpenedPushPayload = exports.persistOpenedPushPayload = exports.getContextFromStoredConfig = exports.getPromptReminder = exports.persistPromptReminder = exports.persistDDLConfig = exports.persistConfig = exports.del = exports.set = exports.get = void 0;
var index_1 = __webpack_require__(/*! ../index */ "./src/core/index.ts");
var idb_keyval_1 = __webpack_require__(/*! ./idb-keyval */ "./src/core/storage/idb-keyval.ts");
var store = new idb_keyval_1.Store('kumulos', 'default');
function get(key) {
    return idb_keyval_1.get(key, store);
}
exports.get = get;
function set(key, value) {
    return idb_keyval_1.set(key, value, store).then(function () { return value; });
}
exports.set = set;
function del(key) {
    return idb_keyval_1.del(key, store);
}
exports.del = del;
function persistConfig(config) {
    return set('config', {
        apiKey: config.apiKey,
        secretKey: config.secretKey,
        vapidPublicKey: config.vapidPublicKey,
        serviceWorkerPath: config.serviceWorkerPath,
        autoResubscribe: config.autoResubscribe,
        pushPrompts: config.pushPrompts
    });
}
exports.persistConfig = persistConfig;
function persistDDLConfig(config) {
    return set('ddlconfig', config);
}
exports.persistDDLConfig = persistDDLConfig;
function persistPromptReminder(promptUuid, reminder) {
    return set("reminder." + promptUuid, reminder);
}
exports.persistPromptReminder = persistPromptReminder;
function getPromptReminder(promptUuid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get("reminder." + promptUuid)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getPromptReminder = getPromptReminder;
function getContextFromStoredConfig() {
    return get('config').then(function (config) {
        return config ? new index_1.Context(config) : undefined;
    });
}
exports.getContextFromStoredConfig = getContextFromStoredConfig;
function persistOpenedPushPayload(payload) {
    return set('mostRecentOpenedPushPayload', payload);
}
exports.persistOpenedPushPayload = persistOpenedPushPayload;
function getMostRecentlyOpenedPushPayload() {
    return __awaiter(this, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get('mostRecentOpenedPushPayload')];
                case 1:
                    payload = _a.sent();
                    return [4 /*yield*/, del('mostRecentOpenedPushPayload')];
                case 2:
                    _a.sent();
                    return [2 /*return*/, payload !== null && payload !== void 0 ? payload : undefined];
            }
        });
    });
}
exports.getMostRecentlyOpenedPushPayload = getMostRecentlyOpenedPushPayload;


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.isMobile = exports.onDOMReady = exports.parseQueryString = exports.defer = exports.registerServiceWorker = exports.base64UrlEncode = exports.authedFetchJson = exports.AuthedFetchError = exports.authedFetch = exports.escapeRegExp = exports.cyrb53 = exports.isBrowserSupported = exports.getBrowserName = exports.uuidv4 = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/core/index.ts");
var CORE_FEATURE_DEPENDENCIES = [typeof Promise, typeof fetch, typeof indexedDB];
var FEATURE_DEPENDENCY_CHECK = {
    'push': isBrowserSupportedForPush,
    'ddl': isBrowserSupportedForDdl
};
// See: https://stackoverflow.com/a/2117523
function uuidv4() {
    if (typeof crypto === 'undefined') {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    return ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))).toString(16);
    });
}
exports.uuidv4 = uuidv4;
function getBrowserName() {
    var ua = navigator.userAgent.toLowerCase();
    var browsers = ['edge', 'firefox', 'chrome', 'safari'];
    for (var _i = 0, browsers_1 = browsers; _i < browsers_1.length; _i++) {
        var b = browsers_1[_i];
        if (ua.indexOf(b) > -1) {
            return b;
        }
    }
    return '';
}
exports.getBrowserName = getBrowserName;
function isBrowserSupported(sdkFeatures) {
    sdkFeatures = sdkFeatures !== null && sdkFeatures !== void 0 ? sdkFeatures : [];
    if (!sdkFeatures.length) {
        sdkFeatures.push(index_1.SDKFeature.PUSH);
    }
    return sdkFeatures.filter(function (f) { return FEATURE_DEPENDENCY_CHECK[f](); }).length > 0;
}
exports.isBrowserSupported = isBrowserSupported;
function isBrowserSupportedForPush() {
    var _a;
    var coreDependencies = __spreadArrays(CORE_FEATURE_DEPENDENCIES);
    var browser = getBrowserName();
    if ('safari' === browser) {
        coreDependencies.push(typeof ((_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification));
    }
    else {
        coreDependencies.push.apply(coreDependencies, [
            typeof Notification,
            typeof navigator.serviceWorker,
            typeof PushManager
        ]);
    }
    return checkRequired(coreDependencies);
}
function isBrowserSupportedForDdl() {
    return checkRequired(CORE_FEATURE_DEPENDENCIES);
}
function checkRequired(coreDependencies) {
    return coreDependencies.reduce(function (supported, dependency) { return supported && dependency !== 'undefined'; }, true);
}
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
var imul = Math.imul ||
    function (a, b) {
        b |= 0; // ensure that opB is an integer. opA will automatically be coerced.
        // floating points give us 53 bits of precision to work with plus 1 sign bit
        // automatically handled for our convienence:
        // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
        //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        var result = (a & 0x003fffff) * b;
        // 2. We can remove an integer coersion from the statement above because:
        //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
        //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        if (a & 0xffc00000 /*!== 0*/)
            result += ((a & 0xffc00000) * b) | 0;
        return result | 0;
    };
// https://stackoverflow.com/a/52171480
function cyrb53(str, seed) {
    if (seed === void 0) { seed = 0; }
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (var i = 0, ch = void 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = imul(h1 ^ ch, 2654435761);
        h2 = imul(h2 ^ ch, 1597334677);
    }
    h1 =
        imul(h1 ^ (h1 >>> 16), 2246822507) ^ imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        imul(h2 ^ (h2 >>> 16), 2246822507) ^ imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
exports.cyrb53 = cyrb53;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
function authedFetch(ctx, url, options) {
    var _a;
    if (options === void 0) { options = { method: 'GET' }; }
    var existingHeaders = (_a = options.headers) !== null && _a !== void 0 ? _a : {};
    options.headers = __assign({ 'Content-Type': 'application/json', Accept: 'application/json', Authorization: ctx.authHeader }, existingHeaders);
    return fetch(url, options);
}
exports.authedFetch = authedFetch;
var AuthedFetchError = /** @class */ (function (_super) {
    __extends(AuthedFetchError, _super);
    function AuthedFetchError(statusCode, statusText) {
        return _super.call(this, "authed fetch failed: " + statusCode + ", " + statusText) || this;
    }
    return AuthedFetchError;
}(Error));
exports.AuthedFetchError = AuthedFetchError;
function authedFetchJson(ctx, url, options) {
    return authedFetch(ctx, url, options).then(function (r) {
        if (!r.ok) {
            throw new AuthedFetchError(r.status, r.statusText);
        }
        return r.json();
    });
}
exports.authedFetchJson = authedFetchJson;
// Based on the alphabets in https://tools.ietf.org/html/rfc4648 Tables 1 & 2
function base64UrlEncode(buffer) {
    var ints = new Uint8Array(buffer);
    var base64Encoded = btoa(ints.reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''));
    var urlVariant = base64Encoded
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    return urlVariant;
}
exports.base64UrlEncode = base64UrlEncode;
function registerServiceWorker(path) {
    if (!('serviceWorker' in navigator)) {
        return Promise.reject('ServiceWorker is not supported in this browser, aborting...');
    }
    return navigator.serviceWorker.register(path).then(function () {
        return navigator.serviceWorker.ready;
    });
}
exports.registerServiceWorker = registerServiceWorker;
function defer() {
    var deferred = {
        resolve: null,
        reject: null,
        promise: null
    };
    deferred.promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}
exports.defer = defer;
function parseQueryString(qs, excludedQueryKeys) {
    if (qs === void 0) { qs = location.search; }
    if (excludedQueryKeys === void 0) { excludedQueryKeys = []; }
    var query = undefined;
    if (qs.length > 0) {
        query = qs
            .substring(1)
            .split('&')
            .map(function (vars) { return vars.split('='); })
            .map(function (pairs) { return pairs.map(decodeURIComponent); })
            .filter(function (pairs) { return excludedQueryKeys.indexOf(pairs[0]) === -1; })
            .reduce(function (q, pair) {
            var _a;
            return (__assign(__assign({}, q), (_a = {}, _a[pair[0]] = pair[1], _a)));
        }, {});
    }
    return query;
}
exports.parseQueryString = parseQueryString;
function onDOMReady(fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
exports.onDOMReady = onDOMReady;
function isMobile() {
    return /android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}
exports.isMobile = isMobile;


/***/ }),

/***/ "./src/fp/fp-capture.tsx":
/*!*******************************!*\
  !*** ./src/fp/fp-capture.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var types_1 = __webpack_require__(/*! ./types */ "./src/fp/types.ts");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var CaptureState;
(function (CaptureState) {
    CaptureState[CaptureState["IDLE"] = 0] = "IDLE";
    CaptureState[CaptureState["CAPTURING"] = 1] = "CAPTURING";
})(CaptureState || (CaptureState = {}));
var FpCapture = /** @class */ (function (_super) {
    __extends(FpCapture, _super);
    function FpCapture(props) {
        var _this = _super.call(this, props) || this;
        _this.onMessage = function (e) {
            console.info("FpCapure: message " + e.data.type + " received from " + e.origin);
            var message = e.data;
            if (e.origin !== core_1.FP_CAPTURE_URL) {
                return;
            }
            switch (message.type) {
                case types_1.ClientMessageType.READY:
                    _this.setState({ isReady: true });
                    break;
                case types_1.ClientMessageType.FINGERPRINT_GENERATED:
                    _this.setState({ captureState: CaptureState.IDLE }, function () {
                        _this.props.onCaptured(message.data.components);
                    });
                    break;
            }
        };
        _this.dispatchMessage = function (message) {
            var _a;
            console.info("FpCapure: dispatching " + message.type + " message to capture frame");
            var window = (_a = _this.iFrameRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow;
            if (!window) {
                return;
            }
            window.postMessage(message, core_1.FP_CAPTURE_URL);
        };
        _this.iFrameRef = preact_1.createRef();
        _this.state = {
            isReady: false,
            captureState: CaptureState.IDLE
        };
        return _this;
    }
    FpCapture.prototype.componentDidMount = function () {
        window.addEventListener('message', this.onMessage);
    };
    FpCapture.prototype.componentWillUnmount = function () {
        window.removeEventListener('message', this.onMessage);
    };
    FpCapture.prototype.componentWillUpdate = function (_, nextState) {
        var isReady = nextState.isReady, captureState = nextState.captureState;
        var prevCaptureState = this.state.captureState;
        if (isReady &&
            captureState === CaptureState.CAPTURING &&
            prevCaptureState === CaptureState.IDLE) {
            this.dispatchMessage({
                type: types_1.HostMessageType.REQUEST_FINGERPRINT
            });
        }
    };
    FpCapture.prototype.requestFp = function () {
        console.info("FpCapure: requesting fp capture");
        if (this.state.captureState !== CaptureState.IDLE) {
            console.error('FpCapture.requestFp: captureState not IDLE');
            return;
        }
        this.setState({ captureState: CaptureState.CAPTURING });
    };
    FpCapture.prototype.render = function () {
        return compat_1.createPortal(preact_1.h("iframe", { ref: this.iFrameRef, src: core_1.FP_CAPTURE_URL, style: { width: 0, height: 0 } }), document.body);
    };
    return FpCapture;
}(preact_1.Component));
exports["default"] = FpCapture;


/***/ }),

/***/ "./src/fp/index.ts":
/*!*************************!*\
  !*** ./src/fp/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.sendClickRequest = void 0;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
function sendClickRequest(ctx, bannerUid, fingerprint) {
    return __awaiter(this, void 0, void 0, function () {
        var url, webInstallId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = core_1.DDL_BASE_URL + "/v1/banners/" + bannerUid + "/taps";
                    return [4 /*yield*/, core_1.getInstallId()];
                case 1:
                    webInstallId = _a.sent();
                    return [2 /*return*/, utils_1.authedFetch(ctx, url, {
                            method: 'POST',
                            body: JSON.stringify({
                                webInstallId: webInstallId,
                                fingerprint: fingerprint
                            })
                        })];
            }
        });
    });
}
exports.sendClickRequest = sendClickRequest;


/***/ }),

/***/ "./src/fp/types.ts":
/*!*************************!*\
  !*** ./src/fp/types.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ClientMessageType = exports.HostMessageType = void 0;
var HostMessageType;
(function (HostMessageType) {
    HostMessageType["REQUEST_FINGERPRINT"] = "REQUEST_FINGERPRINT";
})(HostMessageType = exports.HostMessageType || (exports.HostMessageType = {}));
var ClientMessageType;
(function (ClientMessageType) {
    ClientMessageType["READY"] = "READY";
    ClientMessageType["FINGERPRINT_GENERATED"] = "FINGERPRINT_GENERATED";
})(ClientMessageType = exports.ClientMessageType || (exports.ClientMessageType = {}));


/***/ }),

/***/ "./src/inapp/InAppDialog.tsx":
/*!***********************************!*\
  !*** ./src/inapp/InAppDialog.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var in_app_1 = __importDefault(__webpack_require__(/*! ./in-app */ "./src/inapp/in-app.tsx"));
var InAppDialog = /** @class */ (function (_super) {
    __extends(InAppDialog, _super);
    function InAppDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRequestCancel = function () { };
        return _this;
    }
    InAppDialog.prototype.render = function () {
        var classes = "kumulos-prompt kumulos-inapp-container kumulos-prompt-position-top";
        return (preact_1.h("div", { className: classes }, preact_1.h(in_app_1["default"], { messagePart: this.props.messagePart, width: "100%", height: "100%", onMessageAction: this.props.onMessageAction })));
    };
    return InAppDialog;
}(preact_1.Component));
exports["default"] = InAppDialog;


/***/ }),

/***/ "./src/inapp/in-app.tsx":
/*!******************************!*\
  !*** ./src/inapp/in-app.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var IN_APP_RENDER_RUNTIME_URL = 'http://localhost:55367';
var InAppDisplayProxy = /** @class */ (function (_super) {
    __extends(InAppDisplayProxy, _super);
    function InAppDisplayProxy(props) {
        var _this = _super.call(this, props) || this;
        _this.onMessage = function (e) {
            var _a, _b;
            console.info(e);
            switch (e.data.type) {
                case 'READY':
                    _this.setState({
                        ready: true
                    });
                    break;
                case 'EXECUTE_ACTIONS':
                    var actions = (_b = (_a = e.data.data) === null || _a === void 0 ? void 0 : _a.actions) !== null && _b !== void 0 ? _b : [];
                    actions.forEach(function (action) {
                        _this.props.onMessageAction(action);
                    });
                    break;
            }
        };
        _this.state = {
            ready: false
        };
        _this.frame = preact_1.createRef();
        return _this;
    }
    InAppDisplayProxy.prototype.componentDidMount = function () {
        window.addEventListener('message', this.onMessage);
    };
    InAppDisplayProxy.prototype.componentWillUnmount = function () {
        window.removeEventListener('message', this.onMessage);
    };
    InAppDisplayProxy.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!this.state.ready) {
            return;
        }
        if ((prevState.ready !== this.state.ready && this.props.messagePart) ||
            prevProps.messagePart !== this.props.messagePart) {
            this.requestRender();
        }
    };
    InAppDisplayProxy.prototype.requestRender = function () {
        var _a;
        if (!this.frame.current || !this.props.messagePart) {
            return;
        }
        console.info('posting message', this.props.messagePart.data);
        (_a = this.frame.current.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
            type: 'PRESENT_MESSAGE',
            data: this.props.messagePart.data
        }, '*');
    };
    InAppDisplayProxy.prototype.render = function () {
        return (preact_1.h("iframe", { ref: this.frame, src: IN_APP_RENDER_RUNTIME_URL, frameBorder: "0", scrolling: "no", className: "full-height" }));
    };
    return InAppDisplayProxy;
}(preact_1.Component));
exports["default"] = InAppDisplayProxy;


/***/ }),

/***/ "./src/inapp/index.tsx":
/*!*****************************!*\
  !*** ./src/inapp/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var InAppDialog_1 = __importDefault(__webpack_require__(/*! ./InAppDialog */ "./src/inapp/InAppDialog.tsx"));
var push_1 = __webpack_require__(/*! ../core/push */ "./src/core/push/index.ts");
// v1/users/{userIdentifier}/messages
var InAppMessageManager = /** @class */ (function () {
    function InAppMessageManager(context, rootFrame) {
        var _this = this;
        this.context = context;
        this.isPolling = false;
        this.pollForMessages = function () { return __awaiter(_this, void 0, void 0, function () {
            var messageData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isPolling || this.currentMessage) {
                            return [2 /*return*/];
                        }
                        this.isPolling = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, utils_1.authedFetch(this.context, this.url()).then(function (r) { return r.json(); })];
                    case 2:
                        messageData = _a.sent();
                        if (messageData && messageData.length) {
                            this.currentMessage = messageData[0];
                            this.renderInApp();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.error("Unable to fetch messages: " + e_1.message);
                        return [3 /*break*/, 5];
                    case 4:
                        this.isPolling = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.url = function () { return core_1.PUSH_BASE_URL + "/v1/users/" + _this.installId + "/messages"; };
        this.container = rootFrame.createContainer('inapp');
        this.startPollForMessages();
    }
    InAppMessageManager.prototype.startPollForMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, core_1.getUserId()];
                    case 1:
                        _a.installId = _b.sent();
                        setInterval(this.pollForMessages, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    InAppMessageManager.prototype.renderInApp = function () {
        var _this = this;
        preact_1.render(compat_1.createPortal(preact_1.h(preact_1.Fragment, null, this.currentMessage ? (preact_1.h(InAppDialog_1["default"], { messagePart: {
                type: push_1.MessageType.INAPP,
                data: this.currentMessage.content
            }, onMessageAction: function (action) {
                console.info("InAppManager handling inapp message action: " + JSON.stringify(action));
                switch (action.type) {
                    case 'closeMessage':
                        _this.currentMessage = null;
                        _this.renderInApp();
                        break;
                }
            } })) : null), document.body), this.container.element);
    };
    return InAppMessageManager;
}());
exports["default"] = InAppMessageManager;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! ./core */ "./src/core/index.ts");
var messaging_1 = __webpack_require__(/*! ./worker/messaging */ "./src/worker/messaging.ts");
var storage_1 = __webpack_require__(/*! ./core/storage */ "./src/core/storage/index.ts");
var push_1 = __importStar(__webpack_require__(/*! ./core/push */ "./src/core/push/index.ts"));
var channels_1 = __webpack_require__(/*! ./core/channels */ "./src/core/channels.ts");
var prompts_1 = __webpack_require__(/*! ./prompts */ "./src/prompts/index.tsx");
var utils_1 = __webpack_require__(/*! ./core/utils */ "./src/core/utils.ts");
var root_frame_1 = __importDefault(__webpack_require__(/*! ./core/root-frame */ "./src/core/root-frame.ts"));
var manager_1 = __importDefault(__webpack_require__(/*! ./prompts/ddl/manager */ "./src/prompts/ddl/manager.tsx"));
var inapp_1 = __importDefault(__webpack_require__(/*! ./inapp */ "./src/inapp/index.tsx"));
var Kumulos = /** @class */ (function () {
    function Kumulos(config) {
        var _this = this;
        this.onWorkerMessage = function (e) {
            var _a, _b;
            if (e.origin !== location.origin) {
                return;
            }
            if (!messaging_1.isKumulosWorkerMessage(e.data)) {
                return;
            }
            switch (e.data.type) {
                case messaging_1.WorkerMessageType.KPushReceived: {
                    var push = push_1.notificationFromPayload(e.data.data);
                    (_b = (_a = _this.config).onPushReceived) === null || _b === void 0 ? void 0 : _b.call(_a, push);
                    break;
                }
            }
        };
        core_1.assertConfigValid(config);
        this.config = config;
        this.context = new core_1.Context(config);
        storage_1.persistConfig(config);
        core_1.trackInstallDetails(this.context);
        this.rootFrame = new root_frame_1["default"]();
        this.inAppManager = new inapp_1["default"](this.context, this.rootFrame);
        if (this.context.hasFeature(core_1.SDKFeature.PUSH)) {
            push_1.trackOpenFromQuery(this.context);
            this.serviceWorkerReg = utils_1.registerServiceWorker(this.context.serviceWorkerPath);
            this.promptManager = new prompts_1.PromptManager(this, this.context, this.rootFrame);
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.addEventListener('message', this.onWorkerMessage);
            }
            this.maybeFireOpenedHandler();
        }
        if (this.context.hasFeature(core_1.SDKFeature.DDL)) {
            if (!utils_1.isMobile()) {
                console.info('DdlManager: DDL feature support only available on mobile devices.');
                return;
            }
            this.ddlManager = new manager_1["default"](this.context, this.rootFrame);
        }
    }
    Kumulos.prototype.getInstallId = function () {
        return core_1.getInstallId();
    };
    Kumulos.prototype.getCurrentUserIdentifier = function () {
        return core_1.getUserId();
    };
    Kumulos.prototype.associateUser = function (identifier, attributes) {
        return core_1.associateUser(this.context, identifier, attributes);
    };
    Kumulos.prototype.clearUserAssociation = function () {
        return core_1.clearUserAssociation(this.context);
    };
    Kumulos.prototype.trackEvent = function (type, properties) {
        return core_1.trackEvent(this.context, type, properties).then(function (_) { return void 0; });
    };
    Kumulos.prototype.pushRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mgr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, push_1["default"](this.context)];
                    case 1:
                        mgr = _a.sent();
                        return [2 /*return*/, mgr
                                .requestNotificationPermission(this.context)
                                .then(function (perm) {
                                if ('granted' !== perm) {
                                    return Promise.reject('Notification permission not granted');
                                }
                            })
                                .then(function () {
                                return mgr.pushRegister(_this.context);
                            })];
                }
            });
        });
    };
    Kumulos.prototype.getChannelSubscriptionManager = function () {
        if (!this.channelSubscriptionManager) {
            this.channelSubscriptionManager = new channels_1.ChannelSubscriptionManager(this.context);
        }
        return this.channelSubscriptionManager;
    };
    Kumulos.prototype.maybeFireOpenedHandler = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var payload, push;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, storage_1.getMostRecentlyOpenedPushPayload()];
                    case 1:
                        payload = _c.sent();
                        if (!payload) {
                            return [2 /*return*/];
                        }
                        push = push_1.notificationFromPayload(payload);
                        (_b = (_a = this.config).onPushOpened) === null || _b === void 0 ? void 0 : _b.call(_a, push);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Kumulos;
}());
exports["default"] = Kumulos;


/***/ }),

/***/ "./src/prompts/bell/index.tsx":
/*!************************************!*\
  !*** ./src/prompts/bell/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Bell = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ui_1 = __webpack_require__(/*! ../ui */ "./src/prompts/ui.tsx");
var Bell = /** @class */ (function (_super) {
    __extends(Bell, _super);
    function Bell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRequestNativePrompt = function () {
            _this.props.onPromptAccepted(_this.props.config);
        };
        return _this;
    }
    Bell.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var classes = "kumulos-prompt kumulos-prompt-" + this.props.promptManagerState + " kumulos-bell-container kumulos-bell-container-" + this.props.config.position;
        var config = this.props.config;
        var tooltipPos = ui_1.inversePosition(config.position);
        var bgColor = (_b = (_a = config.colors) === null || _a === void 0 ? void 0 : _a.bell) === null || _b === void 0 ? void 0 : _b.bg;
        var fgColor = (_d = (_c = config.colors) === null || _c === void 0 ? void 0 : _c.bell) === null || _d === void 0 ? void 0 : _d.fg;
        var bellStyle = {
            borderColor: fgColor,
            backgroundColor: bgColor
        };
        return (preact_1.h("div", { "class": classes },
            preact_1.h("div", { "class": "kumulos-bell-inner kumulos-tooltip-parent" },
                preact_1.h("div", { "class": "kumulos-bell", onClick: this.onRequestNativePrompt, style: bellStyle },
                    preact_1.h("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        preact_1.h("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z", fill: fgColor }))),
                preact_1.h(ui_1.Tooltip, { position: tooltipPos }, (_g = (_f = (_e = config.labels) === null || _e === void 0 ? void 0 : _e.tooltip) === null || _f === void 0 ? void 0 : _f.subscribe) !== null && _g !== void 0 ? _g : ui_1.DEFAULT_SUBSCRIBE_LABEL))));
    };
    return Bell;
}(preact_1.Component));
exports.Bell = Bell;


/***/ }),

/***/ "./src/prompts/ddl/ddl-banner.tsx":
/*!****************************************!*\
  !*** ./src/prompts/ddl/ddl-banner.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DdlBanner = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var deeplink_button_1 = __importDefault(__webpack_require__(/*! ./deeplink-button */ "./src/prompts/ddl/deeplink-button.tsx"));
var app_rating_1 = __webpack_require__(/*! ../../components/app-rating */ "./src/components/app-rating/index.tsx");
var styles = {
    bannerIconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    closeIconStyle: {
        width: 12,
        height: 12
    }
};
var CLASSES = [
    'kumulos-prompt',
    'kumulos-banner-container',
    'kumulos-banner-compact',
    'kumulos-safe-area-inset-pad-left',
    'kumulos-safe-area-inset-pad-right'
];
var DdlBanner = /** @class */ (function (_super) {
    __extends(DdlBanner, _super);
    function DdlBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function () {
            _this.props.onConfirm(_this.props.config);
        };
        _this.onCancel = function () {
            _this.props.onCancel(_this.props.config);
        };
        _this.containerRef = preact_1.createRef();
        return _this;
    }
    DdlBanner.prototype.componentDidMount = function () {
        if (!this.containerRef.current) {
            return;
        }
        var _a = this.containerRef.current, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        this.props.dimensions(clientWidth, clientHeight);
    };
    DdlBanner.prototype.getCssClasses = function (promptPosition) {
        var classes = __spreadArrays(CLASSES, ["kumulos-prompt-position-" + promptPosition]);
        if ([core_1.PromptPosition.TOP, core_1.PromptPosition.BOTTOM].includes(promptPosition)) {
            classes.push("kumulos-safe-area-inset-pad-" + promptPosition);
        }
        return classes.join(' ');
    };
    DdlBanner.prototype.render = function () {
        var config = this.props.config;
        var position = config.position, labels = config.labels, colors = config.colors, imageUrl = config.imageUrl, appRating = config.appRating;
        var heading = labels.heading, body = labels.body, acceptAction = labels.acceptAction;
        var bg = colors.bg, fg = colors.fg, acceptActionBg = colors.acceptActionBg, acceptActionFg = colors.acceptActionFg, declineActionBg = colors.declineActionBg, declineActionFg = colors.declineActionFg, ratingFg = colors.ratingFg;
        var classes = this.getCssClasses(position);
        var containerStyle = {
            backgroundColor: bg,
            color: fg
        };
        var declineActionStyle = {
            backgroundColor: declineActionBg,
            color: declineActionFg
        };
        var actionStyle = {
            backgroundColor: acceptActionBg,
            color: acceptActionFg
        };
        var bannerIconStyle = __assign(__assign({}, styles.bannerIconStyle), { backgroundImage: "url(" + imageUrl + ")" });
        return (preact_1.h("div", { style: containerStyle, "class": classes, ref: this.containerRef },
            preact_1.h("div", { "class": "kumulos-banner-close", style: declineActionStyle, onTouchEnd: this.onCancel }, "\u2716"),
            preact_1.h("div", { style: bannerIconStyle, "class": "kumulos-banner-icon" }),
            preact_1.h("div", { "class": "kumulos-banner-content" },
                preact_1.h("div", { "class": "kumulos-banner-header" },
                    preact_1.h("h1", null, heading)),
                preact_1.h("div", { "class": "kumulos-banner-body" }, body),
                appRating && (preact_1.h(app_rating_1.AppRating, { ratingCount: appRating.ratingCount, stars: appRating.rating, color: ratingFg }))),
            preact_1.h("div", { "class": "kumulos-banner-actions" },
                preact_1.h(deeplink_button_1["default"], { style: actionStyle, "class": "kumulos-action-button kumulos-action-button-confirm", text: acceptAction, promptActions: config, onAction: this.onConfirm }))));
    };
    return DdlBanner;
}(preact_1.Component));
exports.DdlBanner = DdlBanner;


/***/ }),

/***/ "./src/prompts/ddl/deeplink-button.tsx":
/*!*********************************************!*\
  !*** ./src/prompts/ddl/deeplink-button.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var clipboard_copy_1 = __importDefault(__webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js"));
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var DeeplinkButton = /** @class */ (function (_super) {
    __extends(DeeplinkButton, _super);
    function DeeplinkButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAction = function () {
            var accept = _this.props.promptActions.uiActions.accept;
            switch (accept.type) {
                case core_1.UiActionType.DDL_OPEN_STORE:
                    clipboard_copy_1["default"](accept.deepLinkUrl)
                        .then(_this.props.onAction)["catch"](function (e) {
                        console.error('Unable to capture deeplink url for deferred app pickup', e);
                    });
                    break;
                case core_1.UiActionType.DDL_OPEN_DEEPLINK:
                    _this.props.onAction();
                    break;
                default:
                    return console.error("Handle DeepLink Action: unsupported accept action type '" + accept['type'] + "'");
            }
        };
        return _this;
    }
    DeeplinkButton.prototype.render = function () {
        var _a = this.props, style = _a.style, cssClass = _a["class"], text = _a.text;
        return (preact_1.h("button", { type: "button", style: style, "class": cssClass, onTouchEnd: this.handleAction }, text));
    };
    return DeeplinkButton;
}(preact_1.Component));
exports["default"] = DeeplinkButton;


/***/ }),

/***/ "./src/prompts/ddl/manager.tsx":
/*!*************************************!*\
  !*** ./src/prompts/ddl/manager.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DdlManagerState = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var index_1 = __webpack_require__(/*! ../../core/index */ "./src/core/index.ts");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ddl/ui.tsx"));
var config_1 = __webpack_require__(/*! ../../core/config */ "./src/core/config.ts");
var prompt_reminder_1 = __webpack_require__(/*! ../prompt-reminder */ "./src/prompts/prompt-reminder.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/prompts/utils.ts");
var fp_1 = __webpack_require__(/*! ../../fp */ "./src/fp/index.ts");
var triggers_1 = __webpack_require__(/*! ../triggers */ "./src/prompts/triggers.ts");
var DdlManagerState;
(function (DdlManagerState) {
    DdlManagerState["LOADING"] = "loading";
    DdlManagerState["READY"] = "ready";
})(DdlManagerState = exports.DdlManagerState || (exports.DdlManagerState = {}));
var DdlManager = /** @class */ (function () {
    function DdlManager(ctx, rootFrame) {
        var _this = this;
        this.activeConfigs = [];
        this.onBannerConfirm = function (prompt, components) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!!components) return [3 /*break*/, 2];
                        return [4 /*yield*/, fp_1.sendClickRequest(this.context, prompt.uuid, components)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, config_1.deleteDdlBannerConfigFromCache(prompt.uuid)];
                    case 3:
                        _a.sent();
                        this.hidePrompt(prompt);
                        this.performClientRedirection(prompt);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onBannerCancelled = function (prompt) {
            prompt_reminder_1.maybePersistReminder(prompt);
            _this.hidePrompt(prompt);
        };
        this.render = function (prompt) {
            preact_1.render(preact_1.h(ui_1["default"], { config: prompt, context: _this.context, onBannerConfirm: _this.onBannerConfirm, onBannerCancelled: _this.onBannerCancelled }), _this.ddlContainer.element);
        };
        console.info('DdlManager: initialising');
        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;
        this.triggerFilter = new triggers_1.PromptTriggerEventFilter(ctx, function (_) {
            _this.updateActiveConfigs();
            _this.setState(DdlManagerState.READY);
        });
        this.setState(DdlManagerState.LOADING);
    }
    DdlManager.prototype.hidePrompt = function (prompt) {
        var _a;
        this.activeConfigs = (_a = this.activeConfigs) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c.uuid !== prompt.uuid; });
        this.setState(DdlManagerState.READY);
    };
    DdlManager.prototype.performClientRedirection = function (config) {
        var acceptAction = config.uiActions.accept;
        switch (acceptAction.type) {
            case index_1.UiActionType.DDL_OPEN_STORE:
                window.location.href = acceptAction.url;
                break;
            case index_1.UiActionType.DDL_OPEN_DEEPLINK:
                window.location.href = acceptAction.deepLinkUrl;
                break;
            default:
                console.error('DdlManager.performClientRedirection: Unsupported accept action type, unable to perform redirection');
        }
    };
    DdlManager.prototype.setState = function (state) {
        console.info('Setting DdlManager state:' + state);
        this.onEnter(state);
    };
    DdlManager.prototype.onEnter = function (state) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, prompt_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case DdlManagerState.LOADING: return [3 /*break*/, 1];
                            case DdlManagerState.READY: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, this.loadConfig()];
                    case 2:
                        _c.config = _d.sent();
                        if (!this.config) {
                            return [2 /*return*/];
                        }
                        this.setState(DdlManagerState.READY);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.updateActiveConfigs()];
                    case 4:
                        _d.sent();
                        prompt_1 = (_a = this.activeConfigs) === null || _a === void 0 ? void 0 : _a.shift();
                        if (!prompt_1) {
                            this.renderEmpty();
                            return [2 /*return*/];
                        }
                        if (!utils_1.deferPromptActivation(prompt_1, this.render)) {
                            this.render(prompt_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DdlManager.prototype.renderEmpty = function () {
        preact_1.render(null, this.ddlContainer.element);
    };
    DdlManager.prototype.updateActiveConfigs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var matchedConfigs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.triggerFilter.filterPrompts(this.config)];
                    case 1:
                        matchedConfigs = _a.sent();
                        matchedConfigs.forEach(function (c) {
                            var _a;
                            if (((_a = _this.activeConfigs) === null || _a === void 0 ? void 0 : _a.indexOf(c)) !== -1) {
                                return;
                            }
                            _this.activeConfigs.push(c);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DdlManager.prototype.loadConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, config_1.loadDdlConfig(this.context)];
                    case 1:
                        configs = _a.sent();
                        if (undefined === configs) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, configs.reduce(function (bag, c) {
                                bag[c.uuid] = c;
                                return bag;
                            }, {})];
                }
            });
        });
    };
    return DdlManager;
}());
exports["default"] = DdlManager;


/***/ }),

/***/ "./src/prompts/ddl/ui.tsx":
/*!********************************!*\
  !*** ./src/prompts/ddl/ui.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ddl_banner_1 = __webpack_require__(/*! ./ddl-banner */ "./src/prompts/ddl/ddl-banner.tsx");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var core_2 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var fp_capture_1 = __importDefault(__webpack_require__(/*! ../../fp/fp-capture */ "./src/fp/fp-capture.tsx"));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui(props) {
        var _this = _super.call(this, props) || this;
        _this.onDimensions = function (_bannerWidth, bannerHeight) {
            var config = _this.props.config;
            var bodyStyle = window.getComputedStyle(document.body, null);
            _this.siteMargin = parseFloat(bodyStyle.getPropertyValue((config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
                ? 'margin-top'
                : 'margin-bottom'));
            _this.siteTransition = bodyStyle.getPropertyValue('transition');
            if ((config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.BOTTOM) {
                bannerHeight += 20;
            }
            var offset = bannerHeight + _this.siteMargin;
            document.body.style.transition = 'all 0.375s ease 0s';
            document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'] = offset + "px";
        };
        _this.onBannerConfirm = function (config) {
            var _a;
            var acceptAction = config.uiActions.accept;
            switch (acceptAction.type) {
                case core_1.UiActionType.DDL_OPEN_STORE:
                    (_a = _this.fpRef.current) === null || _a === void 0 ? void 0 : _a.requestFp();
                    break;
                case core_1.UiActionType.DDL_OPEN_DEEPLINK:
                    _this.resetBodyStyles();
                    _this.props.onBannerConfirm(_this.props.config);
                    break;
                default:
                    console.error('Ui.onBannerConfirm: Unsupported accept action type, unable to confirm banner');
            }
        };
        _this.onBannerCancelled = function (config) {
            _this.resetBodyStyles();
            _this.props.onBannerCancelled(config);
        };
        _this.onCaptureFp = function (components) {
            _this.resetBodyStyles();
            _this.props.onBannerConfirm(_this.props.config, components);
        };
        _this.state = {
            requestFpCapture: false
        };
        _this.fpRef = preact_1.createRef();
        return _this;
    }
    Ui.prototype.resetBodyStyles = function () {
        var _a;
        var config = this.props.config;
        document.body.style.transition = (_a = this.siteTransition) !== null && _a !== void 0 ? _a : '';
        document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
            ? 'marginTop'
            : 'marginBottom'] = this.siteMargin ? this.siteMargin + "px" : '';
    };
    Ui.prototype.componentWillUnmount = function () {
        this.resetBodyStyles();
    };
    Ui.prototype.render = function () {
        if (!this.props.config) {
            return null;
        }
        return compat_1.createPortal(preact_1.h(preact_1.Fragment, null,
            preact_1.h(ddl_banner_1.DdlBanner, { config: this.props.config, onConfirm: this.onBannerConfirm, onCancel: this.onBannerCancelled, dimensions: this.onDimensions }),
            preact_1.h(fp_capture_1["default"], { ref: this.fpRef, onCaptured: this.onCaptureFp })), document.body);
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ }),

/***/ "./src/prompts/dialog/channels-dialog.tsx":
/*!************************************************!*\
  !*** ./src/prompts/dialog/channels-dialog.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ChannelsDialog = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ui_context_1 = __webpack_require__(/*! ../ui-context */ "./src/prompts/ui-context.ts");
var channels_list_1 = __webpack_require__(/*! ./channels-list */ "./src/prompts/dialog/channels-list.tsx");
var styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};
var ChannelsDialog = /** @class */ (function (_super) {
    __extends(ChannelsDialog, _super);
    function ChannelsDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function () {
            _this.props.onConfirm(_this.state.channelSelections);
        };
        _this.onSelectedChannelChanged = function (channelList) {
            _this.setState({
                channelSelections: __spreadArrays(channelList)
            });
        };
        _this.renderDialog = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var action = _this.props.action;
            var classes = "kumulos-prompt kumulos-channel-dialog-container kumulos-prompt-position-" + action.dialogConfig.position;
            var _a = action.dialogConfig.labels, heading = _a.heading, confirmAction = _a.confirmAction;
            var _b = action.dialogConfig.colors, bg = _b.bg, fg = _b.fg, confirmActionBg = _b.confirmActionBg, confirmActionFg = _b.confirmActionFg;
            var containerStyle = {
                backgroundColor: bg,
                color: fg
            };
            var confirmActionStyle = {
                backgroundColor: confirmActionBg,
                color: confirmActionFg
            };
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(" + (uiContext === null || uiContext === void 0 ? void 0 : uiContext.platformConfig.iconUrl) + ")" });
            return (preact_1.h("div", { style: containerStyle, className: classes },
                preact_1.h("div", { style: iconStyle, className: "kumulos-channel-dialog-icon" }),
                preact_1.h("div", { className: "kumulos-channel-dialog-content" },
                    preact_1.h("div", { className: "kumulos-channel-dialog-header" },
                        preact_1.h("h1", null, heading)),
                    preact_1.h("div", { className: "kumulos-channel-dialog-body" },
                        preact_1.h(channels_list_1.ChannelsList, { channelList: core_1.getChannelDialogChannels(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged }))),
                preact_1.h("div", { className: "kumulos-channel-dialog-actions" },
                    preact_1.h("button", { type: "button", style: confirmActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onConfirm }, confirmAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    ChannelsDialog.prototype.render = function () {
        return preact_1.h(ui_context_1.UIContext.Consumer, null, this.renderDialog);
    };
    return ChannelsDialog;
}(preact_1.Component));
exports.ChannelsDialog = ChannelsDialog;


/***/ }),

/***/ "./src/prompts/dialog/channels-list.tsx":
/*!**********************************************!*\
  !*** ./src/prompts/dialog/channels-list.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ChannelsList = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ChannelsList = /** @class */ (function (_super) {
    __extends(ChannelsList, _super);
    function ChannelsList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            channels: __spreadArrays(_this.props.channelList)
        };
        _this.props.onChannelSelectionChanged(_this.state.channels);
        return _this;
    }
    ChannelsList.prototype.onChannelCheckChange = function (channelUuid, checked) {
        var _this = this;
        var item = this.state.channels.find(function (c) { return c.channel.uuid === channelUuid; });
        item.checked = checked;
        this.setState({
            channels: __spreadArrays(this.state.channels)
        }, function () { return _this.props.onChannelSelectionChanged(_this.state.channels); });
    };
    ChannelsList.prototype.render = function () {
        var _this = this;
        var channels = this.state.channels;
        if (!channels.length) {
            return null;
        }
        return (preact_1.h("div", { "class": "kumulos-channel-list-container" }, channels.map(function (item) { return (preact_1.h("label", { key: item.channel.uuid, className: "kumulos-checkbox-container" },
            item.channel.name,
            preact_1.h("input", { type: "checkbox", readOnly: true, checked: item.checked, onClick: function (e) {
                    _this.onChannelCheckChange(item.channel.uuid, e.currentTarget.checked);
                } }),
            preact_1.h("span", { className: "kumulos-checkbox" }))); })));
    };
    return ChannelsList;
}(preact_1.Component));
exports.ChannelsList = ChannelsList;


/***/ }),

/***/ "./src/prompts/dialog/index.tsx":
/*!**************************************!*\
  !*** ./src/prompts/dialog/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Dialog = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ui_context_1 = __webpack_require__(/*! ../ui-context */ "./src/prompts/ui-context.ts");
var channels_list_1 = __webpack_require__(/*! ./channels-list */ "./src/prompts/dialog/channels-list.tsx");
var styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.onRequestNativePrompt = function () {
            _this.props.onPromptAccepted(_this.props.config, _this.state.channelSelections);
        };
        _this.onRequestCancel = function () {
            _this.props.onPromptDeclined(_this.props.config);
        };
        _this.onSelectedChannelChanged = function (channelList) {
            _this.setState({
                channelSelections: __spreadArrays(channelList)
            });
        };
        _this.renderAlert = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var config = _this.props.config;
            var classes = "kumulos-prompt kumulos-prompt-" + _this.props.promptManagerState + " kumulos-" + config.type + "-container kumulos-prompt-position-" + config.position;
            var _a = config.type === core_1.PromptTypeName.ALERT
                ? config.labels.alert
                : config.labels.banner, heading = _a.heading, body = _a.body, declineAction = _a.declineAction, acceptAction = _a.acceptAction;
            var _b = config.type === core_1.PromptTypeName.ALERT
                ? config.colors.alert
                : config.colors.banner, bg = _b.bg, fg = _b.fg, acceptActionBg = _b.acceptActionBg, acceptActionFg = _b.acceptActionFg, declineActionBg = _b.declineActionBg, declineActionFg = _b.declineActionFg;
            var containerStyle = {
                backgroundColor: bg,
                color: fg
            };
            var declineActionStyle = {
                backgroundColor: declineActionBg,
                color: declineActionFg
            };
            var acceptActionStyle = {
                backgroundColor: acceptActionBg,
                color: acceptActionFg
            };
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(" + config.imageUrl + ")" });
            return (preact_1.h("div", { style: containerStyle, className: classes },
                config.imageUrl && (preact_1.h("div", { style: iconStyle, className: "kumulos-" + config.type + "-icon" })),
                preact_1.h("div", { className: "kumulos-" + config.type + "-content" },
                    preact_1.h("div", { className: "kumulos-" + config.type + "-header" },
                        preact_1.h("h1", null, heading)),
                    preact_1.h("div", { className: "kumulos-" + config.type + "-body" },
                        body,
                        _this.props.action && (preact_1.h(channels_list_1.ChannelsList, { channelList: core_1.getChannelDialogChannels(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged })))),
                preact_1.h("div", { className: "kumulos-" + config.type + "-actions" },
                    preact_1.h("button", { type: "button", style: declineActionStyle, className: "kumulos-action-button kumulos-action-button-cancel", onClick: _this.onRequestCancel }, declineAction),
                    preact_1.h("button", { type: "button", style: acceptActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onRequestNativePrompt }, acceptAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        return preact_1.h(ui_context_1.UIContext.Consumer, null, this.renderAlert);
    };
    return Dialog;
}(preact_1.Component));
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/prompts/index.tsx":
/*!*******************************!*\
  !*** ./src/prompts/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PromptManager = void 0;
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ui.tsx"));
var triggers_1 = __webpack_require__(/*! ./triggers */ "./src/prompts/triggers.ts");
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/prompts/ui-context.ts");
var config_1 = __webpack_require__(/*! ../core/config */ "./src/core/config.ts");
var prompt_reminder_1 = __webpack_require__(/*! ./prompt-reminder */ "./src/prompts/prompt-reminder.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/prompts/utils.ts");
// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready
var PromptManager = /** @class */ (function () {
    function PromptManager(client, ctx, rootFrame) {
        var _this = this;
        this.onEventTracked = function (e) {
            console.info('Prompt trigger saw event', e);
            if (_this.state !== 'ready') {
                console.info('Not ready, waiting on queue');
                return;
            }
            _this.evaluateTriggers();
        };
        this.activateDeferredPrompt = function (prompt) {
            _this.activatePrompt(prompt);
            _this.render();
        };
        this.onRequestNativePrompt = function (prompt) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if ('requesting' === this.state) {
                            return [2 /*return*/];
                        }
                        this.currentlyRequestingPrompt = prompt;
                        this.setState('requesting');
                        _a = this;
                        return [4 /*yield*/, ((_b = this.pushOpsManager) === null || _b === void 0 ? void 0 : _b.requestPermissionAndRegisterForPush(this.context))];
                    case 1:
                        _a.subscriptionState = _c.sent();
                        this.setState('ready');
                        return [2 /*return*/];
                }
            });
        }); };
        this.onRequestPostActionPrompt = function (prompt, action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ('postaction' === this.state) {
                    return [2 /*return*/];
                }
                if ('userChannelSelectDialog' !== action.type) {
                    return [2 /*return*/];
                }
                this.currentlyRequestingPrompt = prompt;
                this.currentPostAction = action;
                this.setState('postaction');
                return [2 /*return*/];
            });
        }); };
        this.onPromptAccepted = function (prompt, channelSelections) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.subscriptionState === 'unsubscribed')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onRequestNativePrompt(prompt)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        this.hideAndSuppressPrompts(prompt);
                        return [4 /*yield*/, this.handlePromptActions(prompt)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.handleUserChannelSelection(channelSelections)];
                    case 4:
                        _c.sent();
                        if (this.subscriptionState === 'subscribed') {
                            (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showToast((_b = prompt.labels) === null || _b === void 0 ? void 0 : _b.thanksForSubscribing);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.onPostActionConfirm = function (prompt, channelSelections) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleUserChannelSelection(channelSelections)];
                    case 1:
                        _a.sent();
                        this.setState('ready');
                        this.hideAndSuppressPrompts(prompt);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onPromptDeclined = function (prompt) {
            prompt_reminder_1.maybePersistReminder(prompt);
            _this.hidePrompt(prompt);
        };
        this.prompts = {};
        this.activePrompts = [];
        this.channels = [];
        this.triggerFilter = new triggers_1.PromptTriggerEventFilter(ctx, this.onEventTracked);
        this.pushContainer = rootFrame.createContainer('push');
        this.kumulosClient = client;
        this.context = ctx;
        this.setState('loading');
    }
    PromptManager.prototype.hideAndSuppressPrompts = function (prompt) {
        var _this = this;
        var subscriptionState = this.subscriptionState;
        this.hidePrompt(prompt);
        if (subscriptionState !== 'unsubscribed') {
            this.activePrompts.forEach(function (p) { return _this.hidePrompt(p); });
        }
    };
    PromptManager.prototype.handlePromptActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var channelSubMgr, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!prompt.actions) {
                            return [2 /*return*/];
                        }
                        console.info('Will handle actions: ', prompt.actions);
                        channelSubMgr = this.kumulosClient.getChannelSubscriptionManager();
                        _a = this;
                        return [4 /*yield*/, channelSubMgr.listChannels()];
                    case 1:
                        _a.channels = _b.sent();
                        return [4 /*yield*/, this.handleChannelSubActions(prompt)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.handleChannelPostActions(prompt)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.handleChannelSubActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, uuidsToSubscribe;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (undefined === prompt.actions) {
                            return [2 /*return*/];
                        }
                        actions = prompt.actions.filter(function (action) {
                            return action.type === 'subscribeToChannel';
                        });
                        uuidsToSubscribe = actions
                            .filter(function (action) {
                            var channeltoSub = _this.channels.find(function (c) { return c.uuid === action.channelUuid && c.subscribed === false; });
                            if (undefined === channeltoSub) {
                                console.info("Unable to subscribe to channel '" + action.channelUuid + "' as it does not exist");
                                return false;
                            }
                            return true;
                        })
                            .map(function (action) { return action.channelUuid; });
                        return [4 /*yield*/, this.kumulosClient
                                .getChannelSubscriptionManager()
                                .subscribe(uuidsToSubscribe)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.handleChannelPostActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var actions;
            return __generator(this, function (_a) {
                if (undefined === prompt.actions) {
                    return [2 /*return*/];
                }
                actions = prompt.actions.filter(function (action) {
                    return action.type === 'userChannelSelectDialog';
                });
                if (!actions.length) {
                    return [2 /*return*/];
                }
                // currently only expecting 1 configured `userChannelSelectDialog` action
                this.onRequestPostActionPrompt(prompt, actions[0]);
                return [2 /*return*/];
            });
        });
    };
    PromptManager.prototype.handleUserChannelSelection = function (channelSelections) {
        return __awaiter(this, void 0, void 0, function () {
            var channelSubMgr, unsubscribes, subscribes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (undefined === channelSelections) {
                            return [2 /*return*/];
                        }
                        channelSubMgr = this.kumulosClient.getChannelSubscriptionManager();
                        unsubscribes = channelSelections
                            .filter(function (cs) { return !cs.checked; })
                            .map(function (cs) { return cs.channel.uuid; });
                        return [4 /*yield*/, channelSubMgr.unsubscribe(unsubscribes)];
                    case 1:
                        _a.sent();
                        subscribes = channelSelections
                            .filter(function (cs) { return cs.checked; })
                            .map(function (cs) { return cs.channel.uuid; });
                        return [4 /*yield*/, channelSubMgr.subscribe(subscribes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.render = function () {
        var _this = this;
        if (!this.subscriptionState || !this.state || !this.platformConfig) {
            return;
        }
        preact_1.render(preact_1.h(ui_context_1.UIContext.Provider, { value: {
                platformConfig: this.platformConfig,
                channelList: this.channels
            } },
            preact_1.h(ui_1["default"], { ref: function (r) { return (_this.ui = r); }, prompts: this.activePrompts, subscriptionState: this.subscriptionState, promptManagerState: this.state, onPromptAccepted: this.onPromptAccepted, onPromptDeclined: this.onPromptDeclined, onPostActionConfirm: this.onPostActionConfirm, currentlyRequestingPrompt: this.currentlyRequestingPrompt, currentPostAction: this.currentPostAction })), this.pushContainer.element);
    };
    PromptManager.prototype.evaluateTriggers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var matchedPrompts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        return [4 /*yield*/, this.triggerFilter.filterPrompts(this.prompts, function (prompt) {
                                return _this.promptActionNeedsTaken(prompt);
                            })];
                    case 1:
                        matchedPrompts = _a.sent();
                        this.activatePrompts(matchedPrompts);
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.promptActionNeedsTaken = function (prompt) {
        var _a, _b;
        if (this.subscriptionState === 'unsubscribed') {
            return true;
        }
        var channelsToSub = (_b = (_a = prompt.actions) === null || _a === void 0 ? void 0 : _a.filter(function (action) {
            return action.type === 'subscribeToChannel';
        }).map(function (a) { return a.channelUuid; })) !== null && _b !== void 0 ? _b : [];
        var needsToSub = this.channels.filter(function (c) { return channelsToSub.includes(c.uuid) && !c.subscribed; }).length > 0;
        if (needsToSub) {
            return true;
        }
        return false;
    };
    PromptManager.prototype.hidePrompt = function (prompt) {
        var idx = this.activePrompts.indexOf(prompt);
        this.activePrompts.splice(idx, 1);
        this.render();
    };
    PromptManager.prototype.activatePrompt = function (prompt) {
        // TODO is identity ok for comparison here... might need to use ID
        if (this.activePrompts.indexOf(prompt) > -1) {
            return;
        }
        this.activePrompts.push(prompt);
    };
    PromptManager.prototype.activatePrompts = function (prompts) {
        console.info('Will activate prompts: ', prompts);
        for (var i = 0; i < prompts.length; ++i) {
            var prompt_1 = prompts[i];
            if (utils_1.deferPromptActivation(prompt_1, this.activateDeferredPrompt)) {
                continue;
            }
            this.activatePrompt(prompt_1);
        }
        this.render();
    };
    PromptManager.prototype.setState = function (state) {
        console.info('Setting prompt manager state:' + state);
        this.state = state;
        this.onEnter(state);
    };
    PromptManager.prototype.onEnter = function (state) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case 'loading': return [3 /*break*/, 1];
                            case 'requesting': return [3 /*break*/, 7];
                            case 'ready': return [3 /*break*/, 8];
                            case 'postaction': return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 12];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, push_1["default"](this.context)];
                    case 2:
                        _c.pushOpsManager = _g.sent();
                        return [4 /*yield*/, this.pushOpsManager.handleAutoResubscription(this.context)];
                    case 3:
                        _g.sent();
                        _d = this;
                        return [4 /*yield*/, this.pushOpsManager.getCurrentSubscriptionState(this.context)];
                    case 4:
                        _d.subscriptionState = _g.sent();
                        return [4 /*yield*/, this.loadPrompts()];
                    case 5:
                        _g.sent();
                        _e = this;
                        return [4 /*yield*/, this.kumulosClient
                                .getChannelSubscriptionManager()
                                .listChannels()];
                    case 6:
                        _e.channels = _g.sent();
                        this.setState('ready');
                        return [3 /*break*/, 12];
                    case 7:
                        this.render();
                        return [3 /*break*/, 12];
                    case 8:
                        this.currentlyRequestingPrompt = undefined;
                        this.currentPostAction = undefined;
                        _f = this;
                        return [4 /*yield*/, ((_a = this.pushOpsManager) === null || _a === void 0 ? void 0 : _a.getCurrentSubscriptionState(this.context))];
                    case 9:
                        _f.subscriptionState = _g.sent();
                        return [4 /*yield*/, this.evaluateTriggers()];
                    case 10:
                        _g.sent();
                        this.render();
                        return [3 /*break*/, 12];
                    case 11:
                        this.render();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.loadPrompts = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, _d, _e, _i, id, hasChannelOp, _f, e_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _c = this;
                        return [4 /*yield*/, config_1.loadPlatformConfig(this.context)];
                    case 1:
                        _c.platformConfig = _g.sent();
                        if (!this.platformConfig.publicKey) {
                            console.error('Failed to load prompts config');
                            return [2 /*return*/];
                        }
                        if (this.context.pushPrompts !== 'auto') {
                            this.prompts = __assign({}, this.context.pushPrompts);
                        }
                        else {
                            this.prompts = __assign({}, (this.platformConfig.prompts || {}));
                        }
                        _d = [];
                        for (_e in this.prompts)
                            _d.push(_e);
                        _i = 0;
                        _g.label = 2;
                    case 2:
                        if (!(_i < _d.length)) return [3 /*break*/, 8];
                        id = _d[_i];
                        hasChannelOp = Boolean((_b = (_a = this.prompts[id].actions) === null || _a === void 0 ? void 0 : _a.filter(function (a) { return a.type === 'subscribeToChannel'; })) === null || _b === void 0 ? void 0 : _b.length);
                        if (!hasChannelOp) return [3 /*break*/, 7];
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 5, , 6]);
                        _f = this;
                        return [4 /*yield*/, this.kumulosClient
                                .getChannelSubscriptionManager()
                                .listChannels()];
                    case 4:
                        _f.channels = _g.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _g.sent();
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    return PromptManager;
}());
exports.PromptManager = PromptManager;


/***/ }),

/***/ "./src/prompts/prompt-reminder.ts":
/*!****************************************!*\
  !*** ./src/prompts/prompt-reminder.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.hasPromptReminderElapsed = exports.isPromptSuppressed = exports.maybePersistReminder = void 0;
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var REMINDER_TIME_UNIT_TO_MILLIS = (_a = {},
    _a[core_1.ReminderTimeUnit.HOURS] = 1000 * 60 * 60,
    _a[core_1.ReminderTimeUnit.DAYS] = 1000 * 60 * 60 * 24,
    _a);
function maybePersistReminder(prompt) {
    var uiActions = prompt.uiActions;
    if (!uiActions) {
        return;
    }
    var type = uiActions.decline.type;
    switch (type) {
        case core_1.UiActionType.REMIND:
            return storage_1.persistPromptReminder(prompt.uuid, {
                declinedOn: Date.now()
            });
        case core_1.UiActionType.DECLINE:
            return storage_1.persistPromptReminder(prompt.uuid, 'suppressed');
        default:
            return console.warn("Unsupported decline action type " + type + " supported for prompt " + prompt.uuid + ", fall back to always show this prompt when declined");
    }
}
exports.maybePersistReminder = maybePersistReminder;
function isPromptSuppressed(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var reminder, uiActions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storage_1.getPromptReminder(prompt.uuid)];
                case 1:
                    reminder = _a.sent();
                    if (!reminder) {
                        return [2 /*return*/, false];
                    }
                    if ('suppressed' === reminder) {
                        return [2 /*return*/, true];
                    }
                    uiActions = prompt.uiActions;
                    if (uiActions.decline.type !== core_1.UiActionType.REMIND) {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/, !hasPromptReminderElapsed(reminder.declinedOn, uiActions.decline.delay)];
            }
        });
    });
}
exports.isPromptSuppressed = isPromptSuppressed;
function hasPromptReminderElapsed(declinedOnMillis, delayConfig) {
    return (Date.now() - declinedOnMillis >
        REMINDER_TIME_UNIT_TO_MILLIS[delayConfig.timeUnit] *
            delayConfig.duration);
}
exports.hasPromptReminderElapsed = hasPromptReminderElapsed;


/***/ }),

/***/ "./src/prompts/triggers.ts":
/*!*********************************!*\
  !*** ./src/prompts/triggers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PromptTriggerEventFilter = exports.triggerMatched = void 0;
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var prompt_reminder_1 = __webpack_require__(/*! ./prompt-reminder */ "./src/prompts/prompt-reminder.ts");
function propIn(filterValue, propValue) {
    if (!Array.isArray(filterValue)) {
        return false;
    }
    if (typeof propValue === 'string') {
        var tests = filterValue.map(function (v) {
            var pattern = "^" + utils_1.escapeRegExp(v).replace(/\\\*/g, '.*') + "$";
            return new RegExp(pattern, 'g');
        });
        var filterMatched = tests.reduce(function (matched, matcher) { return matched || matcher.test(String(propValue)); }, false);
        return filterMatched;
    }
    else if (typeof propValue === 'number') {
        return filterValue.indexOf(propValue) > -1;
    }
    return false;
}
function propEq(filterValue, propValue) {
    return filterValue == propValue;
}
function propGt(filterValue, propValue) {
    return propValue > filterValue;
}
function propGte(filterValue, propValue) {
    return propValue >= filterValue;
}
function propLt(filterValue, propValue) {
    return propValue < filterValue;
}
function propLte(filterValue, propValue) {
    return propValue <= filterValue;
}
function triggerMatched(prompt, event) {
    var _a;
    var trigger = prompt.trigger;
    if (trigger.event !== event.type) {
        return false;
    }
    if (!((_a = trigger.filters) === null || _a === void 0 ? void 0 : _a.length)) {
        return true;
    }
    if (!event.data) {
        return false;
    }
    var allPropFiltersMatch = true;
    for (var i = 0; i < trigger.filters.length; ++i) {
        var _b = trigger.filters[i], prop = _b[0], op = _b[1], filterTestValue = _b[2];
        var propValue = event.data[prop];
        var filterMatched = false;
        switch (op) {
            case 'in':
            case 'IN':
                filterMatched = propIn(filterTestValue, propValue);
                break;
            case '=':
                filterMatched = propEq(filterTestValue, propValue);
                break;
            case '>':
                filterMatched = propGt(filterTestValue, propValue);
                break;
            case '>=':
                filterMatched = propGte(filterTestValue, propValue);
                break;
            case '<':
                filterMatched = propLt(filterTestValue, propValue);
                break;
            case '<=':
                filterMatched = propLte(filterTestValue, propValue);
                break;
            default:
                console.warn("Unknown filter operator: " + op);
        }
        allPropFiltersMatch = allPropFiltersMatch && filterMatched;
    }
    return allPropFiltersMatch;
}
exports.triggerMatched = triggerMatched;
var PromptTriggerEventFilter = /** @class */ (function () {
    function PromptTriggerEventFilter(ctx, eventReceivedCallback) {
        var _this = this;
        this.eventQueue = [];
        this.handleSdkEvent = function (e) {
            var _a;
            var _b;
            var events = e.data;
            (_a = _this.eventQueue).push.apply(_a, events);
            (_b = _this.eventReceivedCallback) === null || _b === void 0 ? void 0 : _b.call(_this, e);
        };
        this.eventReceivedCallback = eventReceivedCallback;
        ctx.subscribe('eventTracked', this.handleSdkEvent);
    }
    PromptTriggerEventFilter.prototype.filterPrompts = function (prompts, filter) {
        if (filter === void 0) { filter = function (_) { return true; }; }
        return __awaiter(this, void 0, void 0, function () {
            var matchedPrompts, _a, _b, _i, id, prompt_1, i, event_1, promptSuppressed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        matchedPrompts = [];
                        _a = [];
                        for (_b in prompts)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        id = _a[_i];
                        prompt_1 = prompts[id];
                        i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(i < this.eventQueue.length)) return [3 /*break*/, 5];
                        event_1 = this.eventQueue[i];
                        return [4 /*yield*/, prompt_reminder_1.isPromptSuppressed(prompt_1)];
                    case 3:
                        promptSuppressed = _c.sent();
                        if (!promptSuppressed &&
                            triggerMatched(prompt_1, event_1) &&
                            filter(prompt_1)) {
                            matchedPrompts.push(prompt_1);
                        }
                        _c.label = 4;
                    case 4:
                        ++i;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.eventQueue = [];
                        return [2 /*return*/, matchedPrompts];
                }
            });
        });
    };
    return PromptTriggerEventFilter;
}());
exports.PromptTriggerEventFilter = PromptTriggerEventFilter;


/***/ }),

/***/ "./src/prompts/ui-context.ts":
/*!***********************************!*\
  !*** ./src/prompts/ui-context.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.UIContext = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
exports.UIContext = preact_1.createContext(undefined);


/***/ }),

/***/ "./src/prompts/ui.tsx":
/*!****************************!*\
  !*** ./src/prompts/ui.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Tooltip = exports.inversePosition = exports.DEFAULT_SUBSCRIBE_LABEL = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var bell_1 = __webpack_require__(/*! ./bell */ "./src/prompts/bell/index.tsx");
var dialog_1 = __webpack_require__(/*! ./dialog */ "./src/prompts/dialog/index.tsx");
var channels_dialog_1 = __webpack_require__(/*! ./dialog/channels-dialog */ "./src/prompts/dialog/channels-dialog.tsx");
exports.DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';
function inversePosition(pos) {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}
exports.inversePosition = inversePosition;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        return (preact_1.h("div", { "class": "kumulos-tooltip kumulos-tooltip-" + this.props.position }, this.props.children));
    };
    return Tooltip;
}(preact_1.Component));
exports.Tooltip = Tooltip;
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.render = function () {
        var _a;
        var _b = this.props, promptState = _b.promptState, prompt = _b.prompt, subscriptionState = _b.subscriptionState;
        if (!prompt ||
            promptState !== 'requesting' ||
            !prompt.overlay ||
            subscriptionState !== 'unsubscribed') {
            return null;
        }
        var overlay = prompt.overlay;
        var style = {
            background: overlay.colors.shade,
            color: overlay.colors.text
        };
        return (preact_1.h(BackgroundMask, { style: style, 
            // maintains backwards compat with existing blur class that
            // was being applied directly by this component previously
            blurClass: "kumulos-overlay-blur", "class": "kumulos-overlay kumulos-overlay-" + utils_1.getBrowserName() },
            preact_1.h("div", { "class": "kumulos-overlay-strip", style: { background: overlay.colors.strip } },
                preact_1.h("div", { "class": "kumulos-overlay-content-container" },
                    preact_1.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "35", viewBox: "0 0 64 33" },
                        preact_1.h("path", { fill: "none", stroke: overlay.colors.text, "stroke-width": "2.5px", "stroke-linecap": "round", d: "M 12.57,11.12\n           C 12.57,11.12 6.84,20.82 4.13,21.01\n             1.42,21.21 20.71,28.67 26.62,28.67M 4.23,21.01\n           C 4.23,21.01 53.96,14.91 60.65,3.47" })),
                    overlay.iconUrl && preact_1.h("img", { src: overlay.iconUrl }),
                    preact_1.h("div", { "class": "kumulos-overlay-content" },
                        preact_1.h("h3", null, overlay.labels.heading),
                        preact_1.h("p", null, overlay.labels.body), (_a = overlay.links) === null || _a === void 0 ? void 0 :
                        _a.map(function (l) { return (preact_1.h("a", { href: l.url, target: "_blank" }, l.label)); }))))));
    };
    return Overlay;
}(preact_1.Component));
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.render = function () {
        return preact_1.h("div", { "class": "kumulos-toast" }, this.props.message);
    };
    return Toast;
}(preact_1.Component));
var BackgroundMask = /** @class */ (function (_super) {
    __extends(BackgroundMask, _super);
    function BackgroundMask(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        var blurClasses = (_b = (_a = _this.props.blurClass) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        blurClasses.push('kumulos-background-mask-blur');
        _this.state = {
            blurClasses: blurClasses
        };
        return _this;
    }
    BackgroundMask.prototype.updateBlurState = function () {
        var blurClasses = this.state.blurClasses;
        blurClasses.forEach(function (blurClass) {
            if (!document.body.classList.contains(blurClass)) {
                document.body.classList.add(blurClass);
            }
        });
    };
    BackgroundMask.prototype.componentDidMount = function () {
        this.updateBlurState();
    };
    BackgroundMask.prototype.componentDidUpdate = function () {
        this.updateBlurState();
    };
    BackgroundMask.prototype.componentWillUnmount = function () {
        this.state.blurClasses.forEach(function (blurClass) {
            return document.body.classList.remove(blurClass);
        });
    };
    BackgroundMask.prototype.render = function () {
        var _a = this.props, classNames = _a["class"], style = _a.style;
        var classes = ['kumulos-background-mask'];
        if (!!classNames) {
            classes.push(classNames);
        }
        return (preact_1.h("div", { style: style, "class": classes.join(' ') }, this.props.children));
    };
    return BackgroundMask;
}(preact_1.Component));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui(props) {
        var _this = _super.call(this, props) || this;
        _this.dequeueToast = function () {
            _this.setState({
                toastQueue: _this.state.toastQueue.slice(1)
            });
        };
        _this.state = {
            toastQueue: []
        };
        return _this;
    }
    Ui.prototype.showToast = function (message) {
        if (!message || !message.length) {
            return;
        }
        this.setState({
            toastQueue: __spreadArrays(this.state.toastQueue, [message])
        });
        setTimeout(this.dequeueToast, 3200);
    };
    Ui.prototype.render = function () {
        return compat_1.createPortal(preact_1.h(preact_1.Fragment, null,
            this.maybeRenderPromptBackgroundMask(),
            this.props.prompts.map(this.renderPrompt, this),
            this.renderPostAction(),
            !utils_1.isMobile() && (preact_1.h(Overlay, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt, subscriptionState: this.props.subscriptionState })),
            this.state.toastQueue.length > 0 && (preact_1.h(Toast, { message: this.state.toastQueue[0] }))), document.body);
    };
    Ui.prototype.maybeRenderPromptBackgroundMask = function () {
        if ('requesting' === this.props.promptManagerState) {
            return null;
        }
        var prompts = this.props.prompts;
        var firstPromptWithMask = prompts.filter(function (p) {
            return (p.type === core_1.PromptTypeName.ALERT ||
                p.type === core_1.PromptTypeName.BANNER) &&
                !!p.backgroundMask;
        })[0];
        if (!firstPromptWithMask) {
            return null;
        }
        var style = {
            backgroundColor: firstPromptWithMask.backgroundMask.colors.bg
        };
        return preact_1.h(BackgroundMask, { style: style });
    };
    Ui.prototype.renderPrompt = function (prompt) {
        var _a;
        if ('requesting' === this.props.promptManagerState) {
            return null;
        }
        if ('postaction' === this.props.promptManagerState) {
            return null;
        }
        switch (prompt.type) {
            case 'bell':
                return (preact_1.h(bell_1.Bell, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined }));
            case 'alert':
            case 'banner':
                var action = void 0;
                if (prompt.type === core_1.PromptTypeName.ALERT) {
                    action = (_a = prompt.actions) === null || _a === void 0 ? void 0 : _a.find(function (action) {
                        return action.type === 'userChannelSelectInline';
                    });
                }
                return (preact_1.h(dialog_1.Dialog, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined, action: action }));
            default:
                return null;
        }
    };
    Ui.prototype.renderPostAction = function () {
        var _this = this;
        var _a = this.props, promptManagerState = _a.promptManagerState, currentPostAction = _a.currentPostAction, currentlyRequestingPrompt = _a.currentlyRequestingPrompt;
        if ('postaction' !== promptManagerState) {
            return null;
        }
        if (!currentlyRequestingPrompt) {
            return null;
        }
        if ('userChannelSelectDialog' !== (currentPostAction === null || currentPostAction === void 0 ? void 0 : currentPostAction.type)) {
            return null;
        }
        var backgroundMask = null;
        if ((currentlyRequestingPrompt.type === core_1.PromptTypeName.ALERT ||
            currentlyRequestingPrompt.type === core_1.PromptTypeName.BANNER) &&
            undefined !== currentlyRequestingPrompt.backgroundMask) {
            var maskConfig = currentlyRequestingPrompt.backgroundMask;
            backgroundMask = (preact_1.h(BackgroundMask, { style: { backgroundColor: maskConfig.colors.bg } }));
        }
        return (preact_1.h(preact_1.Fragment, null,
            backgroundMask,
            preact_1.h(channels_dialog_1.ChannelsDialog, { action: currentPostAction, onConfirm: function (channelSelections) {
                    _this.props.onPostActionConfirm(currentlyRequestingPrompt, channelSelections);
                } })));
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ }),

/***/ "./src/prompts/utils.ts":
/*!******************************!*\
  !*** ./src/prompts/utils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.deferPromptActivation = void 0;
function deferPromptActivation(prompt, activateFn) {
    if (prompt.trigger.afterSeconds === undefined ||
        prompt.trigger.afterSeconds < 0) {
        return false;
    }
    console.info('Deferring prompt activation by ' + prompt.trigger.afterSeconds);
    setTimeout(activateFn, prompt.trigger.afterSeconds * 1000, prompt);
    return true;
}
exports.deferPromptActivation = deferPromptActivation;


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/worker/messaging.ts":
/*!*********************************!*\
  !*** ./src/worker/messaging.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.isKumulosWorkerMessage = exports.WorkerMessageType = void 0;
var WorkerMessageType;
(function (WorkerMessageType) {
    WorkerMessageType["KPushReceived"] = "KPushReceived";
})(WorkerMessageType = exports.WorkerMessageType || (exports.WorkerMessageType = {}));
function isKumulosWorkerMessage(data) {
    return (data.type !== undefined &&
        WorkerMessageType[data.type] !== undefined);
}
exports.isKumulosWorkerMessage = isKumulosWorkerMessage;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLWNvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3M/ZTgwOCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2NoYW5uZWxzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL3NhZmFyaS50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC93M2MudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3Jvb3QtZnJhbWUudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3N0b3JhZ2UvaWRiLWtleXZhbC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9mcC9mcC1jYXB0dXJlLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2ZwL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZnAvdHlwZXMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9pbmFwcC9JbkFwcERpYWxvZy50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9pbmFwcC9pbi1hcHAudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvaW5hcHAvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2JlbGwvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvZGRsLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC9kZWVwbGluay1idXR0b24udHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvbWFuYWdlci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC91aS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9jaGFubmVscy1kaWFsb2cudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kaWFsb2cvY2hhbm5lbHMtbGlzdC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvcHJvbXB0LXJlbWluZGVyLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy90cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWktY29udGV4dC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWkudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3N0eWxlcy5zY3NzPzM3ZmYiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy93b3JrZXIvbWVzc2FnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQixrQkFBa0IsaUJBQWlCLG9CQUFvQix3QkFBd0Isb0JBQW9CLEVBQUUsMENBQTBDLHlCQUF5QixFQUFFLHFFQUFxRSwyQkFBMkIsZ0JBQWdCLGVBQWUsbUJBQW1CLHlCQUF5QixFQUFFLDJDQUEyQyxzQkFBc0IsdUJBQXVCLEVBQUU7QUFDNWQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsaUJBQWlCLHlDQUF5QyxFQUFFLGlCQUFpQix3Q0FBd0MsRUFBRSx5QkFBeUIseUNBQXlDLEVBQUUsaUJBQWlCLHdDQUF3QyxFQUFFLEVBQUUscUNBQXFDLFFBQVEsaUJBQWlCLEVBQUUsVUFBVSxpQkFBaUIsRUFBRSxFQUFFLG9DQUFvQyxRQUFRLGlCQUFpQix1Q0FBdUMsRUFBRSxVQUFVLGlCQUFpQixzQ0FBc0MsRUFBRSxFQUFFLHFDQUFxQyxRQUFRLGlCQUFpQix3Q0FBd0MsRUFBRSxVQUFVLGlCQUFpQixzQ0FBc0MsRUFBRSxFQUFFLHFDQUFxQyxRQUFRLGlCQUFpQiw0Q0FBNEMsRUFBRSxVQUFVLGlCQUFpQix3Q0FBd0MsRUFBRSxFQUFFLG1DQUFtQyxRQUFRLDBDQUEwQyxFQUFFLFVBQVUscUNBQXFDLEVBQUUsRUFBRSxpQ0FBaUMsUUFBUSx5Q0FBeUMsRUFBRSxVQUFVLHFDQUFxQyxFQUFFLEVBQUUsOENBQThDLGtCQUFrQixFQUFFLG9EQUFvRCxtQkFBbUIsRUFBRSxzQkFBc0IscUJBQXFCLHVCQUF1QixhQUFhLHNCQUFzQixxQ0FBcUMsZ0JBQWdCLHVCQUF1Qix3QkFBd0Isa0JBQWtCLHlCQUF5QixnQ0FBZ0Msb0NBQW9DLEVBQUUsNEJBQTRCLG9CQUFvQixlQUFlLGdCQUFnQix5QkFBeUIsZUFBZSxrQkFBa0IsZ0NBQWdDLHdCQUF3Qix1QkFBdUIsRUFBRSw0QkFBNEIsOEJBQThCLDBFQUEwRSxFQUFFLG9DQUFvQyxpQ0FBaUMsb0JBQW9CLEVBQUUsMkJBQTJCLCtCQUErQix5RUFBeUUsRUFBRSxtQ0FBbUMsZ0NBQWdDLG1CQUFtQixFQUFFLG9CQUFvQiwwQkFBMEIsb0JBQW9CLGNBQWMsY0FBYyxnQ0FBZ0MscUJBQXFCLGtCQUFrQixrQkFBa0Isb0JBQW9CLHVDQUF1QyxnQkFBZ0IsK0JBQStCLHlFQUF5RSxFQUFFLHFCQUFxQiwyQkFBMkIsa0JBQWtCLEVBQUUsZ0ZBQWdGLDBCQUEwQixFQUFFLDRCQUE0QixpQkFBaUIsc0JBQXNCLHNCQUFzQixxQkFBcUIsOEJBQThCLG9CQUFvQixxQkFBcUIsRUFBRSxrQ0FBa0Msc0JBQXNCLEVBQUUsbUNBQW1DLHFCQUFxQixnQkFBZ0IsRUFBRSx5Q0FBeUMsdUJBQXVCLEVBQUUsb0NBQW9DLHVCQUF1QixnREFBZ0Qsd0JBQXdCLGdCQUFnQixFQUFFLDBDQUEwQyxtQkFBbUIsRUFBRSxpQ0FBaUMsbUJBQW1CLHVCQUF1Qix1QkFBdUIsd0JBQXdCLG9CQUFvQixzQkFBc0Isc0JBQXNCLHFCQUFxQixzQkFBc0IsRUFBRSx1Q0FBdUMsdUJBQXVCLGVBQWUsb0JBQW9CLGNBQWMsYUFBYSxFQUFFLHVCQUF1QiwyQkFBMkIsdUJBQXVCLFdBQVcsWUFBWSxpQkFBaUIsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsRUFBRSxpRUFBaUUsdUJBQXVCLG1CQUFtQixFQUFFLHVFQUF1RSxtQkFBbUIsdUJBQXVCLHFCQUFxQixFQUFFLDZCQUE2QixnQkFBZ0IsdUJBQXVCLGtCQUFrQixFQUFFLG1FQUFtRSx1QkFBdUIsRUFBRSx5RUFBeUUsbUJBQW1CLHVCQUF1QixtREFBbUQsRUFBRSx5REFBeUQsZUFBZSxjQUFjLGVBQWUsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLEVBQUUsK0JBQStCLGtCQUFrQix3QkFBd0Isb0JBQW9CLG9CQUFvQixZQUFZLGdCQUFnQixxQkFBcUIsa0JBQWtCLHVDQUF1QyxnQ0FBZ0MsZ0RBQWdELEVBQUUsMkRBQTJELGFBQWEsOENBQThDLEVBQUUsOERBQThELGdCQUFnQixpQkFBaUIsNENBQTRDLEVBQUUsc0RBQXNELCtCQUErQix5QkFBeUIsRUFBRSxFQUFFLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixFQUFFLDZCQUE2QixrQkFBa0IsMkJBQTJCLFlBQVksRUFBRSw0QkFBNEIsa0JBQWtCLG9CQUFvQixzQkFBc0IsRUFBRSwrQkFBK0IseUJBQXlCLHdCQUF3Qix3QkFBd0IsRUFBRSxzREFBc0QsNEJBQTRCLHNCQUFzQixFQUFFLEVBQUUsMEJBQTBCLGtCQUFrQixpQkFBaUIsNEJBQTRCLG9CQUFvQixzQkFBc0IscUJBQXFCLHFCQUFxQixFQUFFLHNEQUFzRCwwQkFBMEIsc0JBQXNCLEVBQUUsRUFBRSw2QkFBNkIsa0JBQWtCLHVCQUF1QiwyQkFBMkIsZ0JBQWdCLDhCQUE4QixxQkFBcUIsRUFBRSxzREFBc0QsNkJBQTZCLGtCQUFrQixvQkFBb0IsRUFBRSxFQUFFLGtEQUFrRCxrQkFBa0IsRUFBRSxxREFBcUQsZ0JBQWdCLGtCQUFrQixFQUFFLG1EQUFtRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLHVCQUF1QixFQUFFLG1DQUFtQyx1Q0FBdUMseURBQXlELEVBQUUsd0NBQXdDLDJEQUEyRCxFQUFFLHNDQUFzQyx1REFBdUQsRUFBRSx5Q0FBeUMsNkRBQTZELEVBQUUsRUFBRSw2QkFBNkIsb0JBQW9CLEVBQUUseUNBQXlDLG1CQUFtQixpQkFBaUIsRUFBRSwwQ0FBMEMsbUJBQW1CLGtCQUFrQixFQUFFLG1CQUFtQiw4R0FBOEcsd0JBQXdCLHVCQUF1Qix3QkFBd0Isa0RBQWtELGdCQUFnQixpQkFBaUIsa0JBQWtCLDBCQUEwQixvQkFBb0IsaURBQWlELGdDQUFnQyxFQUFFLHlCQUF5QiwwQkFBMEIsc0RBQXNELEVBQUUsMEJBQTBCLDRCQUE0QixvREFBb0QsRUFBRSx1QkFBdUIsaUJBQWlCLG1GQUFtRiw0QkFBNEIsRUFBRSwwQkFBMEIsa0JBQWtCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsNEJBQTRCLHlCQUF5QixhQUFhLGNBQWMsNEJBQTRCLEVBQUUseUJBQXlCLHdCQUF3QixFQUFFLGtFQUFrRSxvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIscUJBQXFCLGtCQUFrQixrQkFBa0Isd0JBQXdCLG9CQUFvQix1Q0FBdUMsaURBQWlELGdDQUFnQyxFQUFFLHNEQUFzRCxvRUFBb0UsZ0JBQWdCLG1CQUFtQix3QkFBd0IsMEJBQTBCLGtEQUFrRCxtQkFBbUIsRUFBRSw4SUFBOEksbUNBQW1DLEVBQUUsc0lBQXNJLDJCQUEyQixtQkFBbUIsRUFBRSxFQUFFLHdEQUF3RCxhQUFhLGdCQUFnQixpQkFBaUIsMkJBQTJCLEVBQUUsOERBQThELGtCQUFrQixhQUFhLDJCQUEyQixZQUFZLHVCQUF1QixFQUFFLDREQUE0RCxrQkFBa0Isb0JBQW9CLHdCQUF3QixFQUFFLG9FQUFvRSx5QkFBeUIsdUJBQXVCLGdCQUFnQixFQUFFLHdEQUF3RCxZQUFZLDBCQUEwQixxQkFBcUIsRUFBRSw4REFBOEQsa0JBQWtCLDhCQUE4QixxQkFBcUIsYUFBYSxnQkFBZ0IsaUJBQWlCLHlCQUF5QixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSw4QkFBOEIsb0JBQW9CLGVBQWUsY0FBYyxpQkFBaUIsbUJBQW1CLHdCQUF3QixrQkFBa0Isd0JBQXdCLG9CQUFvQix1Q0FBdUMsaURBQWlELGdDQUFnQyxnREFBZ0QsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsaUhBQWlILHNCQUFzQixFQUFFLDhCQUE4QixvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHlDQUF5QyxtQkFBbUIsRUFBRSxxREFBcUQsc0JBQXNCLEVBQUUsc0JBQXNCLDJCQUEyQixrQkFBa0IsRUFBRSxtRkFBbUYsMEJBQTBCLEVBQUUsNEJBQTRCLG9CQUFvQiwrQ0FBK0Msd0JBQXdCLEVBQUUscUNBQXFDLHVCQUF1QixvQkFBb0IsaUNBQWlDLHlCQUF5QixFQUFFLHdDQUF3QyxvQkFBb0IscUJBQXFCLG1CQUFtQix1Q0FBdUMsRUFBRSw0Q0FBNEMsa0JBQWtCLEVBQUUsOENBQThDLCtCQUErQixxQkFBcUIsaUNBQWlDLHVCQUF1QixFQUFFLDhDQUE4QyxvQkFBb0IscUJBQXFCLHVCQUF1QixFQUFFLG1JQUFtSSx1QkFBdUIsRUFBRSw2Q0FBNkMseUJBQXlCLDBCQUEwQixFQUFFLDRDQUE0Qyw2QkFBNkIscUJBQXFCLDhCQUE4QixFQUFFLCtDQUErQywwQkFBMEIsRUFBRSxtREFBbUQsd0JBQXdCLEVBQUUsMkRBQTJELGlCQUFpQixFQUFFLHlEQUF5RCxrQkFBa0IsRUFBRSxrREFBa0QsdUJBQXVCLGNBQWMsZ0JBQWdCLHlCQUF5Qiw0QkFBNEIsRUFBRSw4REFBOEQscUJBQXFCLEVBQUUsa0VBQWtFLGVBQWUsZ0NBQWdDLEVBQUUsMkRBQTJELDZCQUE2QixvQkFBb0IsRUFBRSwrQkFBK0Isc0JBQXNCLG9CQUFvQixFQUFFLEVBQUU7QUFDMXNhO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlkLGdCQUFnQix5QkFBeUIsU0FBUyxnQkFBZ0IscURBQXFELHVEQUF1RCxTQUFTLGNBQWMsYUFBYSxnQkFBZ0IsY0FBYyxnQ0FBZ0Msb0ZBQW9GLGNBQWMsb0NBQW9DLDREQUFDLE1BQU0sb0dBQW9HLGlCQUFpQixnREFBQywwRUFBMEUseUNBQXlDLE1BQU0sOENBQUMsS0FBSyw4Q0FBQyxpQkFBaUIsbUVBQW1FLG9GQUFvRixjQUFjLGdCQUFnQixVQUFVLElBQUksa0ZBQWtGLCtIQUErSCxvQkFBb0Isb0JBQW9CLDJEQUFDLENBQUMsMkRBQUMsWUFBWSxJQUFJLGtDQUFrQyxTQUFTLDJEQUFDLGFBQWEsa0JBQWtCLE1BQU0sMkRBQUMsSUFBSSxxQ0FBcUMsWUFBWSxTQUFTLG1EQUFDLENBQUMsR0FBRyw4Q0FBQyxLQUFLLDhDQUFDLHFCQUFxQix3QkFBd0IsT0FBTyw4RUFBOEUsVUFBVSxNQUFNLDhDQUFDLFNBQVMsYUFBYSxxQ0FBcUMsY0FBYyxlQUFlLDBCQUEwQixjQUFjLFVBQVUsY0FBYywrQkFBK0IsZUFBZSxhQUFhLElBQUksWUFBWSxjQUFjLE9BQU8sNERBQUMsTUFBTSx1Q0FBdUMsYUFBYSx3QkFBd0IsOENBQUMscUJBQXFCLFlBQVksdURBQXVELGtCQUFrQixnREFBQyxvQkFBb0IsbUJBQW1CLGdDQUFnQyxpQ0FBaUMsaUNBQWlDLFFBQVEsaUJBQWlCLGFBQWEsZ0JBQWdCLGtCQUFrQiwrQkFBK0IseURBQXlELGdCQUFnQix5RkFBeUYsd0JBQXdCLE1BQU0sZ0JBQWdCLGVBQWUsRUFBRSxZQUFZLGtCQUFrQixjQUFjLHdCQUF3Qix1QkFBdUIsY0FBYyw2Q0FBNkMsVUFBVSxrQ0FBa0MsYUFBYSxpQkFBaUIsMERBQTBELGtDQUFrQywrREFBK0Qsa0NBQWtDLCtCQUErQix1RkFBdUYsZ0JBQWdCLEtBQUsseUJBQXlCLGNBQWMsYUFBYSw0REFBQyxDQUFDLCtDQUFDLGtCQUFrQix3QkFBd0IsNERBQUMsQ0FBQywrQ0FBQyxpQ0FBaUMsc0JBQXNCLHlHQUF5RyxFQUFFLEVBQUUsS0FBSyxXQUFXLFdBQVcsbUJBQW1CLGFBQWEsY0FBYyx1Q0FBdUMsaUJBQWlCLFlBQVksY0FBYyxpQkFBaUIsa0NBQWtDLHFEQUFDLDZCQUE2QixnRUFBZ0UsOERBQThELDJDQUEyQyw0QkFBNEIsMkNBQTJDLHlCQUF5Qiw2RUFBNkUsRUFBRSxxREFBQyxDQUFDLDREQUFDLElBQUksa0JBQWtCLDRDQUE0QyxnQkFBZ0IsT0FBTyw0REFBQyxJQUFJLFVBQVUsRUFBRSxpQkFBaUIsZ0RBQUMsa0JBQWtCLG1DQUFtQywwQkFBMEIsaUJBQWlCLDhDQUE4QyxZQUFZLGdDQUFnQywyQkFBMkIsTUFBTSwyREFBQyxhQUFhLG1EQUFtRCxtQkFBbUIsSUFBSSxzQ0FBc0Msa0JBQWtCLHlFQUF5RSxXQUFXLDZCQUE2QixTQUFTLEdBQUcsb1VBQW9VLG9HQUFvRyxrQkFBa0IsdUNBQXVDLHFEQUFDLDZDQUE2QyxrQkFBa0IsT0FBTyxzREFBQyw2Q0FBNkMsZ0RBQUMsOEJBQThCLDhGQUE4RixzQkFBc0IsZ0RBQUMsY0FBYywrQkFBK0IseUJBQXlCLGlCQUFpQiw4QkFBOEIsb0NBQW9DLEdBQUcsRUFBRSxFQUFFLE1BQU0sOENBQUMsT0FBTyxjQUFjLGFBQWEseUJBQXlCLGFBQWEsNkJBQTZCLDhDQUFDLG1CQUFtQixnR0FBZ0csU0FBUywrQkFBK0IsbUJBQW1CLEdBQUcsOENBQUMsT0FBTyw4Q0FBQyxtQkFBbUIsMkJBQTJCLHVCQUF1QixpQkFBaUIsSUFBSSxXQUFXLGlYQUFpWCwwREFBMEQsMkRBQUMsaUNBQWlDLG9EQUFvRCwrQ0FBK0MsMkRBQUMsaUNBQWlDLG9HQUFvRyxhQUFhLDhKQUE4SixNQUFNLDhDQUFDLEtBQUssOENBQUMsaUJBQWlCLGlCQUFpQixPQUFPLHdCQUF3QixTQUFTLHdCQUF3QixtQ0FBbUMseUJBQXlCLGlCQUFpQixXQUFXLHFIQUFxSCxrQkFBa0IsYUFBYSxlQUFlLE9BQU8sb0RBQUMsY0FBYyxlQUFlLDBCQUEwQixlQUFlLGFBQWEsbURBQUMseUJBQXlCLGVBQWUsZ0JBQWdCLHFEQUFDLGFBQWEsZUFBZSw0Q0FBNEMscUJBQXFCLFlBQVksSUFBSSwrQ0FBQyxDQUFlLGdFQUFDLFNBQVMscURBQUMsWUFBWSx1REFBQyxXQUFXLHNEQUFDLGlCQUFpQiw0REFBQyxRQUFRLG1EQUFDLHFCQUFxQixnRUFBQyxTQUFTLG9EQUFDLGFBQWEsd0RBQUMsWUFBWSx1REFBQyxlQUFlLDBEQUFDLHVHQUF1RyxvREFBQyxlQUFlLG9EQUFDLDRDQUE0QyxnREFBQyxVQUFVLCtDQUFDLDRDQUE0QyxnREFBQywyRUFBMkUsK0NBQUMsdUZBQXVGLEVBQW9rQjtBQUMvaFI7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFvQiw0RUFBNEUsZ0JBQWdCLHlCQUF5QixTQUFTLGNBQWMsbUJBQW1CLG9CQUFvQixrQkFBa0IsMkJBQTJCLHFEQUFxRCxvQ0FBb0MsbUJBQW1CLGlCQUFpQixzSUFBc0ksdUJBQXVCLHNCQUFzQixPQUFPLGtJQUFrSSxtQ0FBbUMsYUFBYSxPQUFPLGNBQWMsY0FBYyxrQkFBa0IsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsMERBQTBELFVBQVUsZUFBZSxvREFBb0QsMENBQTBDLGNBQWMsUUFBUSxnQ0FBZ0MsOEJBQThCLGVBQWUsd0NBQXdDLHVCQUF1QixNQUFNLGFBQWEsY0FBYyxvR0FBb0csYUFBYSxVQUFVLGVBQWUsd0JBQXdCLDJCQUEyQiwwQkFBMEIsZ0JBQWdCLG9EQUFvRCwrSEFBK0gsRUFBRSxnQ0FBZ0MsMkNBQTJDLGlCQUFpQixXQUFXLHlLQUF5SyxXQUFXLGdFQUFnRSxzRkFBc0YsYUFBYSxJQUFJLEtBQUssNENBQTRDLFlBQVksTUFBTSxPQUFPLGlWQUFpVixnQkFBZ0IsSUFBSSx5R0FBeUcsYUFBYSxXQUFXLDBCQUEwQixrQkFBa0IsUUFBUSxRQUFRLGVBQWUsdUZBQXVGLFNBQVMsZ0JBQWdCLGtGQUFrRixPQUFPLGVBQWUsd0JBQXdCLFVBQVUsdUNBQXVDLGlHQUFpRyxLQUFLLFlBQVksOEJBQThCLHFCQUFxQix3QkFBd0Isa0NBQWtDLHNCQUFzQixNQUFNLGlFQUFpRSw4SEFBOEgsa0JBQWtCLHFGQUFxRixzQkFBc0IsTUFBTSx5REFBeUQsS0FBSyxzRkFBc0Ysa0RBQWtELHdJQUF3SSxpRkFBaUYsdUNBQXVDLHlEQUF5RCx1RkFBdUYsa0JBQWtCLFFBQVEsVUFBVSw0R0FBNEcsY0FBYyx3Q0FBd0MsY0FBYyx3Q0FBd0MsOEJBQThCLG1DQUFtQyxzQ0FBc0Msc0VBQXNFLElBQUksMkJBQTJCLHlQQUF5UCxzSUFBc0ksNk5BQTZOLEtBQUssK01BQStNLDRHQUE0RyxZQUFZLDBCQUEwQixRQUFRLGdIQUFnSCw0QkFBNEIsRUFBRSxtS0FBbUssaVJBQWlSLG1GQUFtRixtQkFBbUIsU0FBUyxnRkFBZ0YsZ0JBQWdCLHFDQUFxQyxJQUFJLG9DQUFvQyxVQUFVLEVBQUUsU0FBUyxnQkFBZ0IsRUFBRSw0QkFBNEIsNkNBQTZDLGtDQUFrQyxXQUFXLDREQUE0RCxjQUFjLE1BQU0sWUFBWSw4Q0FBOEMsMkdBQTJHLDZDQUE2QyxLQUFLLDRHQUE0RyxtQkFBbUIsS0FBSyxzQkFBc0Isa0RBQWtELDRGQUE0RiwyQkFBMkIsOEhBQThILElBQUkscUJBQXFCLHlMQUF5TCxTQUFTLGtCQUFrQixJQUFJLHNDQUFzQyxTQUFTLFlBQVksa0JBQWtCLFVBQVUsd0tBQXdLLDhCQUE4Qix5QkFBeUIsU0FBUyxXQUFXLGtCQUFrQixtQkFBbUIsV0FBVyxzQkFBc0IsY0FBYyxrQkFBa0IsNkJBQTZCLGtCQUFrQixVQUFVLGlQQUFpUCxnQkFBZ0IsU0FBUyxrQkFBa0IsNEJBQTRCLFVBQVUscURBQXFELG9DQUFvQyxtQkFBbUIsaUJBQWlCLGtFQUFrRSxnQkFBZ0IsT0FBTyw2Q0FBNkMscUJBQXFCLHNCQUFzQixRQUFRLHdDQUF3QywwQ0FBMEMsU0FBUyx3Q0FBd0Msc0NBQXNDLHNCQUFzQixVQUFVLDZCQUE2QixrQ0FBa0MsdUNBQXVDLGVBQWUsOENBQThDLEdBQUcsa0JBQWtCLGNBQWMsT0FBTyx5QkFBeUIseUxBQXlMLFNBQVMsSUFBSSxRQUFRLE9BQU8sZUFBZSx1Q0FBdUMsb0NBQW9DLE1BQU0sOERBQThELDRDQUE0Qyw0RUFBNEUscUNBQXFDLG9EQUFvRCw4SEFBNlQ7QUFDdDBUOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUMscUJBQXFCLDhDQUFDLE9BQU8sOENBQUMsT0FBTyw4Q0FBQyxVQUFVLDhDQUFDLE9BQU8sOENBQUMsU0FBUyxnQkFBZ0IsOENBQUMsTUFBTSw4Q0FBQyxtQkFBbUIscUJBQXFCLGFBQWEsRUFBRSxtQ0FBbUMsVUFBVSxjQUFjLGtCQUFrQixrQkFBa0IsZUFBZSwwREFBMEQscUJBQXFCLGdEQUFnRCxHQUFHLGdCQUFnQixnQkFBZ0IsZUFBZSxDQUFDLDhDQUFDLHFEQUFxRCxnQkFBZ0IsZUFBZSxDQUFDLDhDQUFDLGlEQUFpRCxjQUFjLHdCQUF3QixPQUFPLFdBQVcsS0FBSyxrQkFBa0IsaUJBQWlCLCtDQUErQyx3QkFBd0IsZ0JBQWdCLGVBQWUsbURBQW1ELGdCQUFnQix3QkFBd0IsU0FBUyxJQUFJLGNBQWMsa0NBQWtDLHFFQUFxRSxnQkFBZ0IsOENBQUMsZ0JBQWdCLDhDQUFDLHlCQUF5QixjQUFjLHNCQUFzQixvRUFBb0Usc0JBQXNCLG1CQUFtQixhQUFhLEVBQUUsYUFBYSxzQkFBc0IsYUFBYSx1REFBdUQsU0FBUyxhQUFhLDhDQUFDLGVBQWUsT0FBTyw4Q0FBQyxpQkFBaUIsZUFBZSxDQUFDLDhDQUFDLGlCQUFpQixZQUFZLG9CQUFvQixnREFBZ0QsQ0FBQyw4Q0FBQyxvQkFBb0IsUUFBUSxZQUFZLGdEQUFnRCw4Q0FBQyw0QkFBNEIsOENBQUMscUNBQXFDLG1CQUFtQix5REFBeUQscUJBQXFCLGdDQUFnQyxlQUFlLENBQUMsOENBQUMsbUJBQW1CLG1CQUFtQixJQUFJLGdEQUFnRCxrQkFBa0IsRUFBRSxTQUFTLG1CQUFtQixrQkFBa0IsT0FBTyw4Q0FBQyxlQUFlLFlBQVksQ0FBQyw4Q0FBQyxxQkFBcUIsUUFBUSxZQUFZLGdCQUFnQixvQkFBb0IsU0FBUyw4Q0FBQyxnQkFBZ0IsK0NBQStDLGNBQWMsUUFBUSxzQ0FBc0MsY0FBYyxRQUFRLGlCQUFpQixnQkFBZ0Isb0RBQW9ELGdCQUFnQixFQUFFLGdCQUFnQixrQ0FBd087QUFDdmlGOzs7Ozs7Ozs7Ozs7O0FDRGE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTs7QUFFQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdGQUF3RjtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQzs7QUFFQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDelJBLGNBQWMsbUJBQU8sQ0FBQywrT0FBZ0g7QUFDdEk7O0FBRUE7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsZ0dBQTJCO0FBRTNCLDRGQUEyQjtBQVEzQixTQUFnQixTQUFTLENBQUMsS0FBcUI7SUFDbkMsU0FBSyxHQUFrQixLQUFLLE1BQXZCLEVBQUUsV0FBVyxHQUFLLEtBQUssWUFBVixDQUFXO0lBRXJDLFNBQVMsV0FBVztRQUNoQixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsSUFBSSxDQUNSLFdBQUMsYUFBYSxJQUNWLEtBQUssRUFDRCxLQUFLLElBQUksQ0FBQztvQkFDTixDQUFDLENBQUMsSUFBSTtvQkFDTixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxNQUFNO3dCQUNSLENBQUMsQ0FBQyxLQUFLLEdBRWpCLENBQ0wsQ0FBQztTQUNMO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQU0sV0FBVyxHQUFHO1FBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztLQUNyQixDQUFDO0lBRUYsT0FBTyxDQUNILG9CQUFLLE9BQUssRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUUsV0FBVztRQUN6QyxXQUFXLEVBQUU7UUFDZCxxQkFBTSxPQUFLLEVBQUMsc0JBQXNCOztZQUFHLEtBQUssQ0FBQyxXQUFXO2dCQUFTLENBQzdELENBQ1QsQ0FBQztBQUNOLENBQUM7QUFoQ0QsOEJBZ0NDO0FBTUQsU0FBUyxhQUFhLENBQUMsS0FBeUI7SUFDNUMsSUFBSSxNQUFNLENBQUM7SUFFWCxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxrQ0FBb0IsQ0FBQztLQUNqQztTQUFNLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7UUFDL0IsTUFBTSxHQUFHLENBQ0w7WUFDSSxrQ0FBb0I7WUFDcEIscUJBQU0sT0FBSyxFQUFDLHlCQUF5QixhQUFlLENBQ2xELENBQ1QsQ0FBQztLQUNMO1NBQU07UUFDSCxNQUFNLEdBQUcsa0NBQW9CLENBQUM7S0FDakM7SUFFRCxPQUFPLG9CQUFLLE9BQUssRUFBQyxxQkFBcUIsSUFBRSxNQUFNLENBQU8sQ0FBQztBQUMzRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVELDZEQUFzRTtBQUN0RSx3RUFBdUQ7QUFtQnZEO0lBR0ksb0NBQVksR0FBWTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRU8sNERBQXVCLEdBQS9CLFVBQ0ksTUFBa0IsRUFDbEIsS0FBZTtRQUZuQixpQkFpQkM7UUFiRyxPQUFPLGVBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBUztZQUNoQyxJQUFNLEdBQUcsR0FBTSxnQkFBYSx5QkFBb0IsU0FBUyw0QkFBeUIsQ0FBQztZQUNuRixJQUFNLE1BQU0sR0FBRztnQkFDWCxLQUFLO2FBQ1IsQ0FBQztZQUVGLElBQU0sT0FBTyxHQUFHO2dCQUNaLE1BQU07Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQy9CLENBQUM7WUFFRixPQUFPLG1CQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw4Q0FBUyxHQUFULFVBQVUsS0FBZTtRQUNyQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0RBQVcsR0FBWCxVQUFZLEtBQWU7UUFDdkIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gscURBQWdCLEdBQWhCLFVBQWlCLEtBQWU7UUFDNUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILHVEQUFrQixHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILGlEQUFZLEdBQVo7UUFBQSxpQkFLQztRQUpHLE9BQU8sZUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFTO1lBQ2hDLElBQU0sR0FBRyxHQUFNLGdCQUFhLHlCQUFvQixTQUFTLGNBQVcsQ0FBQztZQUNyRSxPQUFPLHVCQUFlLENBQVksS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0RBQWEsR0FBYixVQUFjLFdBQXdCO1FBQXRDLGlCQWlDQztRQWhDRyxJQUNJLFdBQVcsQ0FBQyxZQUFZO1lBQ3hCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDakQ7WUFDRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLEtBQUssRUFDRCxpRUFBaUU7YUFDeEUsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLGVBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBUztZQUNoQyxJQUFNLEdBQUcsR0FBTSxnQkFBYSxpQkFBYyxDQUFDO1lBRTNDLElBQUksTUFBTSxHQUFHO2dCQUNULElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2dCQUN0QixZQUFZLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7Z0JBQy9DLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtnQkFDdEIsU0FBUyxFQUFFLFNBQVM7YUFDdkIsQ0FBQztZQUVGLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsTUFBYyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDekM7WUFFRCxJQUFNLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDL0IsQ0FBQztZQUVGLE9BQU8sdUJBQWUsQ0FBVSxLQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUM7QUF6R1ksZ0VBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ2Qyw2REFPVztBQUNYLG9GQUFxQztBQUVyQyx3RUFBMEM7QUFFMUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUFXLElBQUssUUFBQztJQUNuQyxnQkFBZ0IsRUFBSyxHQUFHLFdBQVE7SUFDaEMsd0JBQXdCLEVBQUssR0FBRyxrQkFBZTtDQUNsRCxDQUFDLEVBSG9DLENBR3BDLENBQUM7QUFFSCxJQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUU1QyxJQUFLLGVBR0o7QUFIRCxXQUFLLGVBQWU7SUFDaEIsd0NBQXFCO0lBQ3JCLDhCQUFXO0FBQ2YsQ0FBQyxFQUhJLGVBQWUsS0FBZixlQUFlLFFBR25CO0FBRUQsU0FBZSxVQUFVLENBQ3JCLEdBQVcsRUFDWCxRQUFnQixFQUNoQixHQUFZOzs7Ozs7O29CQUVOLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVCLHFCQUFNLGFBQUcsQ0FBYyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7O29CQUEzRCxNQUFNLEdBQUcsU0FBa0Q7b0JBRXpDLHFCQUFNLGFBQUcsQ0FBUyxTQUFTLENBQUMsd0JBQXdCLENBQUM7O29CQUFyRSxZQUFZLFNBQUcsQ0FBQyxTQUFxRCxDQUFDLG1DQUFJLENBQUM7b0JBQzdFLG1CQUFtQixHQUFHLEtBQUssQ0FBQzt5QkFFNUIsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsR0FBNUMsd0JBQTRDO29CQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Ozs7b0JBRzdDLHFCQUFNLHVCQUFlLENBQWMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQXJELE1BQU0sR0FBRyxTQUE0QyxDQUFDO29CQUN0RCxtQkFBbUIsR0FBRyxJQUFJLENBQUM7Ozs7b0JBRTNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7Ozt5QkFLcEIsbUJBQW1CLEVBQW5CLHdCQUFtQjtvQkFDbkIscUJBQU0sYUFBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7O29CQUE3QyxTQUE2QyxDQUFDO29CQUM5QyxxQkFBTSxhQUFHLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7b0JBQXpELFNBQXlELENBQUM7O3dCQUc5RCxzQkFBTyxNQUFNLEVBQUM7Ozs7Q0FDakI7QUFFRCxTQUFzQixrQkFBa0IsQ0FDcEMsR0FBWTs7Ozs7d0JBR1AscUJBQU0sVUFBVSxDQUNWLGdCQUFhLG1CQUFnQixFQUNoQyxlQUFlLENBQUMsUUFBUSxFQUN4QixHQUFHLENBQ047d0JBTEwsc0JBQU8sT0FDSCxDQUFDLFNBSUEsQ0FBQyxtQ0FBSSxFQUFFLENBQ1gsRUFBQzs7OztDQUNMO0FBVkQsZ0RBVUM7QUFFRCxTQUFzQixhQUFhLENBQy9CLEdBQVk7Ozs7O3dCQUVTLHFCQUFNLGVBQVksRUFBRTs7b0JBQW5DLFlBQVksR0FBRyxTQUFvQjs7OztvQkFHOUIscUJBQU0sVUFBVSxDQUNoQixlQUFZLGlDQUE0QixZQUFjLEVBQ3pELGVBQWUsQ0FBQyxHQUFHLEVBQ25CLEdBQUcsQ0FDTjt3QkFKRCxzQkFBTyxTQUlOLEVBQUM7OztvQkFFRixPQUFPLENBQUMsSUFBSSxDQUNSLCtEQUErRCxFQUMvRCxLQUFHLENBQUMsT0FBTyxDQUNkLENBQUM7Ozs7OztDQUdUO0FBbEJELHNDQWtCQztBQUVELFNBQXNCLDhCQUE4QixDQUFDLFVBQWtCOzs7Ozs7b0JBQzdELFNBQVMsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV0QyxxQkFBTSxhQUFHLENBQW9CLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7b0JBQWxFLE9BQU8sR0FBRyxTQUF3RDtvQkFFdEUsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDVixzQkFBTztxQkFDVjtvQkFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQztvQkFFckQscUJBQU0sYUFBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7O29CQUE5QyxTQUE4QyxDQUFDOzs7OztDQUNsRDtBQVpELHdFQVlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0Qsd0VBQXNEO0FBQ3RELG9GQUEwQztBQUcxQyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0IsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLElBQU0sZUFBZSxHQUFHLDRCQUE0QixDQUFDO0FBQ3hDLHFCQUFhLEdBQUcsMEJBQTBCLENBQUM7QUFDM0Msb0JBQVksR0FBRywyQkFBMkIsQ0FBQztBQUMzQyxzQkFBYyxHQUFHLHlCQUF5QixDQUFDO0FBbUJ4RCxJQUFZLFNBUVg7QUFSRCxXQUFZLFNBQVM7SUFDakIsc0RBQXlDO0lBQ3pDLGdEQUFtQztJQUNuQyx3REFBMkM7SUFDM0MsdURBQTBDO0lBQzFDLHVEQUEwQztJQUMxQyx3RUFBMkQ7SUFDM0QseUNBQTRCO0FBQ2hDLENBQUMsRUFSVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVFwQjtBQUVELElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN0QiwrQkFBYTtJQUNiLGlDQUFlO0lBQ2YsbUNBQWlCO0lBQ2pCLDJDQUF5QjtBQUM3QixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFrRUQsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLG1DQUFtQjtJQUNuQixpQ0FBaUI7SUFDakIsNENBQTRCO0lBQzVCLGtEQUFrQztBQUN0QyxDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFnQkQsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLG1DQUFlO0lBQ2YsaUNBQWE7QUFDakIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBbUJELElBQVksY0FZWDtBQVpELFdBQVksY0FBYztJQUN0Qix1Q0FBcUI7SUFDckIsMkNBQXlCO0lBQ3pCLHlDQUF1QjtJQUN2Qiw2Q0FBMkI7SUFDM0IsbUNBQWlCO0lBQ2pCLCtDQUE2QjtJQUM3Qiw2Q0FBMkI7SUFDM0IsaURBQStCO0lBQy9CLCtDQUE2QjtJQUM3Qiw2QkFBVztJQUNYLG1DQUFpQjtBQUNyQixDQUFDLEVBWlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFZekI7QUEySkQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLDJCQUFhO0lBQ2IseUJBQVc7QUFDZixDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFzQkQ7SUFZSSxpQkFBWSxNQUFxQjs7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFTLElBQUksQ0FBSSxJQUFJLENBQUMsTUFBTSxTQUFJLElBQUksQ0FBQyxTQUFXLENBQUcsQ0FBQztRQUN0RSxJQUFJLENBQUMsaUJBQWlCLFNBQUcsTUFBTSxDQUFDLGlCQUFpQixtQ0FBSSxZQUFZLENBQUM7UUFDbEUsSUFBSSxDQUFDLFdBQVcsU0FBRyxNQUFNLENBQUMsV0FBVyxtQ0FBSSxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsU0FBRyxNQUFNLENBQUMsZUFBZSxtQ0FBSSxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsU0FBRyxNQUFNLENBQUMsUUFBUSxtQ0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLEtBQW1CLEVBQUUsT0FBd0I7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQy9DLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBUyxHQUFULFVBQVUsS0FBbUIsRUFBRSxJQUFTO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJO2FBQ1AsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLE9BQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBckRZLDBCQUFPO0FBdURwQixTQUFnQixpQkFBaUIsQ0FBQyxNQUFXO0lBQ3pDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzVCLE1BQU0sMEJBQTBCLENBQUM7S0FDcEM7SUFFRCxJQUFNLFFBQVEsR0FDVixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDcEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ2pCLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFcEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqRCxPQUFPLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hDO0FBQ0wsQ0FBQztBQWJELDhDQWFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxNQUFXO0lBQ3RDLElBQU0sbUJBQW1CLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEUsS0FBbUIsVUFBbUIsRUFBbkIsMkNBQW1CLEVBQW5CLGlDQUFtQixFQUFuQixJQUFtQixFQUFFO1FBQW5DLElBQU0sSUFBSTtRQUNYLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9ELE1BQU0saUNBQStCLElBQUksK0JBQTRCLENBQUM7U0FDekU7S0FDSjtJQUVELElBQ0ksTUFBTSxDQUFDLGlCQUFpQjtRQUN4QixPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxRQUFRO1FBQzVDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN2QztRQUNFLE1BQU0sdUZBQXVGLENBQUM7S0FDakc7SUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLElBQUksT0FBTyxNQUFNLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRTtRQUN0RSxNQUFNLGdFQUFnRSxDQUFDO0tBQzFFO0lBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDbEUsTUFBTSw4REFBOEQsQ0FBQztLQUN4RTtBQUNMLENBQUM7QUFFRCxJQUFJLGdCQUFnQixHQUFtQyxTQUFTLENBQUM7QUFFakUsU0FBZ0IsWUFBWTtJQUN4QixJQUFJLGdCQUFnQixFQUFFO1FBQ2xCLE9BQU8sZ0JBQWdCLENBQUM7S0FDM0I7SUFFRCxnQkFBZ0IsR0FBRyxhQUFHLENBQXdCLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDM0QsbUJBQVM7UUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTyxhQUFHLENBQUMsV0FBVyxFQUFFLGNBQU0sRUFBRSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDLENBQ0osQ0FBQztJQUVGLE9BQU8sZ0JBQWdCLENBQUM7QUFDNUIsQ0FBQztBQWhCRCxvQ0FnQkM7QUFFRCxTQUFnQixTQUFTO0lBQ3JCLE9BQU8sYUFBRyxDQUFxQixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3pDLGdCQUFNLFdBQUksTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksWUFBWSxFQUFFLElBQ3JDLENBQUM7QUFDTixDQUFDO0FBSkQsOEJBSUM7QUFFRCxTQUFzQixhQUFhLENBQy9CLEdBQVksRUFDWixFQUFVLEVBQ1YsVUFBd0I7Ozs7O3dCQUV4QixxQkFBTSxhQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQzs7b0JBQXZCLFNBQXVCLENBQUM7b0JBRWxCLEtBQUssR0FBRzt3QkFDVixFQUFFO3dCQUNGLFVBQVU7cUJBQ2IsQ0FBQztvQkFFRixzQkFBTyxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSyxDQUFDLENBQUMsRUFBQzs7OztDQUMxRTtBQWJELHNDQWFDO0FBRUQsU0FBc0Isb0JBQW9CLENBQUMsR0FBWTs7Ozs7d0JBQzdCLHFCQUFNLFNBQVMsRUFBRTs7b0JBQWpDLGFBQWEsR0FBRyxTQUFpQjtvQkFFdkMsVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsd0JBQXdCLEVBQUU7d0JBQ2hELGlCQUFpQixFQUFFLGFBQWE7cUJBQ25DLENBQUMsQ0FBQztvQkFFSCxzQkFBTyxhQUFHLENBQUMsUUFBUSxDQUFDLEVBQUM7Ozs7Q0FDeEI7QUFSRCxvREFRQztBQVlELFNBQXNCLFVBQVUsQ0FDNUIsR0FBWSxFQUNaLElBQVksRUFDWixVQUF3Qjs7Ozs7d0JBRU4scUJBQU0sWUFBWSxFQUFFOztvQkFBaEMsU0FBUyxHQUFHLFNBQW9CO29CQUN2QixxQkFBTSxTQUFTLEVBQUU7O29CQUExQixNQUFNLEdBQUcsU0FBaUI7b0JBRTFCLE1BQU0sR0FBaUI7d0JBQ3pCOzRCQUNJLElBQUk7NEJBQ0osSUFBSSxFQUFFLGNBQU0sRUFBRTs0QkFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDckIsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLE1BQU07eUJBQ1Q7cUJBQ0osQ0FBQztvQkFFSSxHQUFHLEdBQU0sZUFBZSx5QkFBb0IsU0FBUyxZQUFTLENBQUM7b0JBRXJFLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUV0QyxzQkFBTyxtQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7NEJBQ3pCLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt5QkFDL0IsQ0FBQyxFQUFDOzs7O0NBQ047QUExQkQsZ0NBMEJDO0FBRUQsU0FBc0IsbUJBQW1CLENBQUMsR0FBWTs7Ozs7O29CQUM1QyxPQUFPLEdBQUc7d0JBQ1osR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTs0QkFDckIsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsMEJBQTBCO3lCQUN2Qzt3QkFDRCxHQUFHLEVBQUU7NEJBQ0QsRUFBRSxFQUFFLFFBQVE7NEJBQ1osT0FBTyxFQUFFLFdBQVc7eUJBQ3ZCO3dCQUNELE9BQU8sRUFBRTs0QkFDTCxFQUFFLEVBQUUsQ0FBQzs0QkFDTCxPQUFPLEVBQUUsU0FBUyxDQUFDLFNBQVM7eUJBQy9CO3dCQUNELEVBQUUsRUFBRTs0QkFDQSx1REFBdUQ7NEJBQ3ZELEVBQUUsRUFBRSxDQUFDOzRCQUNMLE9BQU8sRUFBRSxPQUFPO3lCQUNuQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osbURBQW1EOzRCQUNuRCxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVM7NEJBQ3pCLEVBQUUsRUFDRSxPQUFPLElBQUksS0FBSyxXQUFXO2dDQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJO2dDQUMxRCxDQUFDLENBQUMsSUFBSTs0QkFDZCxXQUFXLEVBQUUsS0FBSzs0QkFDbEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxRQUFRO3lCQUM3QjtxQkFDSixDQUFDO29CQUVJLFNBQVMsR0FBRzt3QkFDZCxXQUFXO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTt3QkFDbEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSTtxQkFDdEIsQ0FBQztvQkFDSSxJQUFJLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7OztvQkFHaEIscUJBQU0sYUFBRyxDQUFTLGFBQWEsQ0FBQzs7b0JBQS9DLFlBQVksR0FBRyxTQUFnQztvQkFFckQsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO3dCQUN2QixzQkFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUM7cUJBQzVCOzs7O29CQUVELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7d0JBRzdCLHNCQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7eUJBQ3JELElBQUksQ0FBQyxjQUFNLG9CQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxJQUFJLENBQUMsY0FBTSxZQUFLLENBQUMsRUFBTixDQUFNLENBQUMsRUFBQzs7OztDQUMzQjtBQXRERCxrREFzREM7QUFPRCxTQUFnQix3QkFBd0IsQ0FDcEMsV0FBc0IsRUFDdEIsZUFBNEM7SUFFNUMsT0FBTyxXQUFXO1NBQ2IsTUFBTSxDQUNILFdBQUM7UUFDRyxzQkFBZSxDQUFDLGNBQWMsS0FBSyxLQUFLO1lBQ3hDLGVBQWUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFEL0MsQ0FDK0MsQ0FDdEQ7U0FDQSxHQUFHLENBQWtCLFdBQUMsSUFBSSxRQUFDO1FBQ3hCLE9BQU8sZUFBTyxDQUFDLENBQUU7UUFDakIsT0FBTyxFQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3RCLGVBQWUsQ0FBQyxZQUFZLEtBQUssS0FBSztZQUN0QyxlQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3BELENBQUMsRUFOeUIsQ0FNekIsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQWpCRCw0REFpQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlsQkQsK0RBQW9EO0FBQ3BELHlFQUE0RDtBQUU1RCxpR0FBeUM7QUFDekMsd0ZBQW1DO0FBQ25DLDRFQUErQztBQUkvQyxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsdUNBQU87SUFDUCw2Q0FBVTtBQUNkLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQiw2Q0FBUTtJQUNSLCtDQUFTO0FBQ2IsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBMkNELElBQUksT0FBZ0MsQ0FBQztBQUVyQyxTQUF3QixpQkFBaUIsQ0FDckMsR0FBWTtJQUVaLElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxPQUFPLENBQUM7S0FDbEI7SUFFRCxJQUFNLE9BQU8sR0FBRyxzQkFBYyxFQUFFLENBQUM7SUFFakMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQ3RCLE9BQU8sR0FBRywyQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2xDLGFBQUcsSUFBSSxXQUFJLG1CQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUExQixDQUEwQixDQUNwQyxDQUFDO0tBQ0w7U0FBTTtRQUNILE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWMsRUFBRSxDQUFDLENBQUM7S0FDbkQ7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBbEJELHVDQWtCQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLEdBQVk7SUFDM0MsSUFBTSxPQUFPLEdBQUcsc0JBQWMsRUFBRSxDQUFDO0lBRWpDLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUN0QixPQUFPO0tBQ1Y7SUFFRCxJQUFNLE1BQU0sR0FBRyx3QkFBZ0IsRUFBRSxDQUFDO0lBRWxDLElBQUksRUFBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUcsTUFBTSxFQUFDLEVBQUU7UUFDbkIsT0FBTztLQUNWO0lBRUQsY0FBVSxDQUFDLEdBQUcsRUFBRSxhQUFTLENBQUMsY0FBYyxFQUFFO1FBQ3RDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtRQUN0QixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBakJELGdEQWlCQztBQUVELFNBQWdCLHVCQUF1QixDQUNuQyxPQUFvQjs7SUFFcEIsSUFBTSxRQUFRLGdCQUFRLE9BQU8sQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUNyQyxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU3QixJQUFNLElBQUksR0FBNEI7UUFDbEMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRztRQUNwQixJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsUUFBRSxPQUFPLENBQUMsR0FBRyxtQ0FBSSxTQUFTO1FBQzdCLE9BQU8sUUFBRSxPQUFPLENBQUMsSUFBSSxtQ0FBSSxTQUFTO1FBQ2xDLFFBQVEsUUFBRSxPQUFPLENBQUMsS0FBSyxtQ0FBSSxTQUFTO0tBQ3ZDLENBQUM7SUFDRixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBaEJELDBEQWdCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhELCtEQU1ZO0FBQ1osa0VBQThDO0FBQzlDLHlFQUF5QztBQUN6QyxxRkFBc0M7QUFHdEMsNEVBQStDO0FBRS9DLFNBQVMsU0FBUyxDQUFDLEdBQVksRUFBRSxLQUFhO0lBQzFDLE9BQU8sY0FBTSxDQUFJLEdBQUcsQ0FBQyxNQUFNLFNBQUksS0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVEO0lBRUksMkJBQVksR0FBbUI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELHlEQUE2QixHQUE3QixVQUNJLEdBQVk7O1FBRVosSUFBTSxNQUFNLEdBQU0saUJBQWEsZ0JBQVcsR0FBRyxDQUFDLE1BQVEsQ0FBQztRQUV2RCxJQUFNLFFBQVEsR0FBRyxhQUFLLEVBQTBCLENBQUM7UUFFakQsWUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsaUJBQWlCLENBQzdDLE1BQU0sRUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQXNCLEVBQy9CLEVBQUUsRUFDRixjQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQ0g7UUFFRixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVLLHdDQUFZLEdBQWxCLFVBQW1CLEdBQVk7Ozs7Ozs0QkFDZixxQkFBTSwyQkFBa0IsQ0FBQyxHQUFHLENBQUM7O3dCQUFuQyxHQUFHLEdBQUcsU0FBNkI7d0JBQ25DLElBQUksU0FBRyxNQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQ25ELEdBQUcsQ0FBQyxZQUFzQixDQUM3QixDQUFDO3dCQUVGLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUM1QixzQkFBTzt5QkFDVjt3QkFFeUIscUJBQU0sYUFBRyxDQUFTLGVBQWUsQ0FBQzs7d0JBQXRELGlCQUFpQixHQUFHLFNBQWtDO3dCQUN0RCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRW5ELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFOzRCQUNqQyxzQkFBTzt5QkFDVjt3QkFFRCxxQkFBTSxjQUFVLENBQUMsR0FBRyxFQUFFLGFBQVMsQ0FBQyxlQUFlLEVBQUU7Z0NBQzdDLElBQUksRUFBRSxZQUFTLENBQUMsTUFBTTtnQ0FDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dDQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7NkJBQzdCLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFFSCxxQkFBTSxhQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzs7d0JBQXJDLFNBQXFDLENBQUM7Ozs7O0tBQ3pDO0lBRUssK0RBQW1DLEdBQXpDLFVBQ0ksR0FBWTs7Ozs7NEJBRUMscUJBQU0sSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7d0JBQXBELElBQUksR0FBRyxTQUE2Qzt3QkFFMUQsUUFBUSxJQUFJLEVBQUU7NEJBQ1YsS0FBSyxTQUFTO2dDQUNWLHNCQUFPLGNBQWMsRUFBQzs0QkFDMUIsS0FBSyxRQUFRO2dDQUNULHNCQUFPLFNBQVMsRUFBQzt5QkFDeEI7Ozs7d0JBR0cscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7O3dCQUE1QixTQUE0QixDQUFDO3dCQUM3QixzQkFBTyxZQUFZLEVBQUM7Ozt3QkFFcEIsc0JBQU8sY0FBYyxFQUFDOzs7OztLQUU3QjtJQUVLLHVEQUEyQixHQUFqQyxVQUNJLEdBQVk7Ozs7Ozs0QkFFQSxxQkFBTSwyQkFBa0IsQ0FBQyxHQUFHLENBQUM7O3dCQUFuQyxHQUFHLEdBQUcsU0FBNkI7d0JBQ25DLElBQUksU0FBRyxNQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQ25ELEdBQUcsQ0FBQyxZQUFzQixDQUM3QixDQUFDO3dCQUVGLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsTUFBSyxRQUFRLEVBQUU7NEJBQ3hDLHNCQUFPLFNBQVMsRUFBQzt5QkFDcEI7d0JBRXlCLHFCQUFNLGFBQUcsQ0FBUyxlQUFlLENBQUM7O3dCQUF0RCxpQkFBaUIsR0FBRyxTQUFrQzt3QkFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFFBQUUsSUFBSSxDQUFDLFdBQVcsbUNBQUksRUFBRSxDQUFDLENBQUM7d0JBRXpELElBQUksaUJBQWlCLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFOzRCQUNsRSxzQkFBTyxZQUFZLEVBQUM7eUJBQ3ZCO3dCQUVELHNCQUFPLGNBQWMsRUFBQzs7OztLQUN6QjtJQUVLLG9EQUF3QixHQUE5QixVQUErQixHQUFZOzs7Ozs7O3dCQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFOzRCQUNoRCxzQkFBTzt5QkFDVjt3QkFFVyxxQkFBTSwyQkFBa0IsQ0FBQyxHQUFHLENBQUM7O3dCQUFuQyxHQUFHLEdBQUcsU0FBNkI7d0JBQ25DLElBQUksU0FBRyxNQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQ25ELEdBQUcsQ0FBQyxZQUFzQixDQUM3QixDQUFDO3dCQUVGLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUM3RCxPQUFPLENBQUMsSUFBSSxDQUNSLG1FQUFtRSxDQUN0RSxDQUFDOzRCQUNGLHNCQUFPO3lCQUNWO3dCQUV5QixxQkFBTSxhQUFHLENBQVMsZUFBZSxDQUFDOzt3QkFBdEQsaUJBQWlCLEdBQUcsU0FBa0M7d0JBQ3RELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFFbkQsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7NEJBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQ1IseUVBQXlFLENBQzVFLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRUQsc0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQzs7OztLQUNqQztJQUNMLHdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJRCwrREFBb0Q7QUFDcEQsa0VBQXFFO0FBQ3JFLHlFQUFtRDtBQUNuRCxxRkFBc0M7QUFFdEMsU0FBUyxVQUFVLENBQUMsUUFBZ0IsRUFBRSxZQUE4QjtJQUNoRSxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0lBRWpFLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFNLE1BQU0sR0FBRyx1QkFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBZSx5QkFBeUI7Ozs7O3dCQUNsQixxQkFBTSxTQUFTLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTs7b0JBQTNELFNBQVMsR0FBRyxTQUErQztvQkFFakUsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDWixzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEVBQUM7cUJBQzNEO29CQUVELHNCQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDOzs7O0NBQ3hDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFZLEVBQUUsR0FBcUI7SUFDekQsT0FBTyxjQUFNLENBQUksR0FBRyxDQUFDLE1BQU0sU0FBSSxHQUFHLENBQUMsUUFBVSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVEO0lBQUE7SUF5SkEsQ0FBQztJQXhKUyxzREFBNkIsR0FBbkMsVUFDSSxHQUFZOzs7Ozs7d0JBRVosSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7NEJBQ3JDLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQ2pCLDhEQUE4RCxDQUNqRSxFQUFDO3lCQUNMOzs7O3dCQUdrQixxQkFBTSxZQUFZLENBQUMsaUJBQWlCLEVBQUU7O3dCQUEvQyxNQUFNLEdBQUcsU0FBc0M7d0JBRXJELHNCQUFPLE1BQU0sRUFBQzs7O3dCQUVkLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7d0JBQ2pCLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7Ozs7O0tBRWhDO0lBRUsscUNBQVksR0FBbEIsVUFBbUIsR0FBWTs7Ozs7O3dCQUMzQixJQUFJLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLEVBQUU7NEJBQzVCLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQ2pCLHNEQUFzRCxDQUN6RCxFQUFDO3lCQUNMO3dCQUVpQixxQkFBTSx5QkFBeUIsRUFBRTs7d0JBQTdDLFNBQVMsR0FBRyxTQUFpQzt3QkFDL0IscUJBQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7O3dCQUEzRCxXQUFXLEdBQUcsU0FBNkM7NkJBRTdELFlBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxHQUEzRCx3QkFBMkQ7d0JBQzNELHNCQUFNLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXLEtBQUU7O3dCQUFoQyxTQUFnQyxDQUFDOzs0QkFHekIscUJBQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7NEJBQzlDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxjQUFjOzRCQUN4QyxlQUFlLEVBQUUsSUFBSTt5QkFDeEIsQ0FBQzs7d0JBSEksR0FBRyxHQUFHLFNBR1Y7d0JBRUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7d0JBRUwscUJBQU0sYUFBRyxDQUFTLGtCQUFrQixDQUFDOzt3QkFBNUQsb0JBQW9CLEdBQUcsU0FBcUM7d0JBQzNDLHFCQUFNLGFBQUcsQ0FDNUIsZUFBZSxDQUNsQjs7d0JBRkssY0FBYyxHQUFHLFNBRXRCO3dCQUVELElBQ0ksb0JBQW9CLEtBQUssWUFBWTs0QkFDckMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ2xEOzRCQUNFLHNCQUFPO3lCQUNWO3dCQUVELHFCQUFNLGNBQVUsQ0FBQyxHQUFHLEVBQUUsYUFBUyxDQUFDLGVBQWUsRUFBRTtnQ0FDN0MsSUFBSSxFQUFFLFlBQVMsQ0FBQyxHQUFHO2dDQUNuQixLQUFLLEVBQUUsR0FBRzs2QkFDYixDQUFDOzt3QkFIRixTQUdFLENBQUM7d0JBRUgscUJBQU0sYUFBRyxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQzs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLHFCQUFNLGFBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDOzt3QkFBbEMsU0FBa0MsQ0FBQzs7Ozs7S0FDdEM7SUFFSyw0REFBbUMsR0FBekMsVUFDSSxHQUFZOzs7Ozs0QkFFQyxxQkFBTSxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDOzt3QkFBcEQsSUFBSSxHQUFHLFNBQTZDO3dCQUUxRCxRQUFRLElBQUksRUFBRTs0QkFDVixLQUFLLFNBQVM7Z0NBQ1Ysc0JBQU8sY0FBYyxFQUFDOzRCQUMxQixLQUFLLFFBQVE7Z0NBQ1Qsc0JBQU8sU0FBUyxFQUFDO3lCQUN4Qjs7Ozt3QkFHRyxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7d0JBQTVCLFNBQTRCLENBQUM7d0JBQzdCLHNCQUFPLFlBQVksRUFBQzs7O3dCQUVwQixzQkFBTyxjQUFjLEVBQUM7Ozs7O0tBRTdCO0lBRUssb0RBQTJCLEdBQWpDLFVBQ0ksR0FBWTs7Ozs7O3dCQUVOLElBQUksR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO3dCQUVyQyxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7NEJBQ25CLHNCQUFPLFNBQVMsRUFBQzt5QkFDcEI7d0JBRVcscUJBQU0seUJBQXlCLEVBQUU7O3dCQUF2QyxHQUFHLEdBQUcsU0FBaUM7d0JBQ2pDLHNCQUFNLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxXQUFXLENBQUMsZUFBZSxLQUFFOzt3QkFBOUMsR0FBRyxHQUFHLFNBQXdDO3dCQUVwRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUNsRSxzQkFBTyxZQUFZLEVBQUM7eUJBQ3ZCO3dCQUVELHNCQUFPLGNBQWMsRUFBQzs7OztLQUN6QjtJQUVLLGlEQUF3QixHQUE5QixVQUErQixHQUFZOzs7Ozs7d0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFOzRCQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7NEJBQ3hELHNCQUFPO3lCQUNWO3dCQUVLLElBQUksR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO3dCQUVyQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQ1IseURBQXVELElBQU0sQ0FDaEUsQ0FBQzs0QkFDRixzQkFBTzt5QkFDVjt3QkFFNEIscUJBQU0sYUFBRyxDQUFTLGtCQUFrQixDQUFDOzt3QkFBNUQsb0JBQW9CLEdBQUcsU0FBcUM7d0JBQzNDLHFCQUFNLGFBQUcsQ0FDNUIsZUFBZSxDQUNsQjs7d0JBRkssY0FBYyxHQUFHLFNBRXRCO3dCQUVpQixxQkFBTSx5QkFBeUIsRUFBRTs7d0JBQTdDLFNBQVMsR0FBRyxTQUFpQzt3QkFDL0IscUJBQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7O3dCQUEzRCxXQUFXLEdBQUcsU0FBNkM7d0JBRTdELGVBQWUsR0FBRyxTQUFTLENBQUM7d0JBQ2hDLElBQUksV0FBVyxFQUFFOzRCQUNiLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQ3hEO3dCQUVELElBQ0ksb0JBQW9CLEtBQUssU0FBUzs0QkFDbEMsb0JBQW9CLEtBQUssZUFBZTs0QkFDeEMsV0FBVzs0QkFDWCxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7NEJBQzNDLENBQUMsY0FBYyxLQUFLLElBQUk7Z0NBQ3BCLGNBQWMsS0FBSyxTQUFTO2dDQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ2xDOzRCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQ1IsbUZBQW1GLENBQ3RGLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3dCQUU1RCxJQUFJOzRCQUNBLHNCQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUM7eUJBQ2pDO3dCQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3BCOzs7OztLQUNKO0lBQ0wscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeExELCtEQUF3QjtBQUV4Qix3RUFBcUM7QUFPckM7SUFJSTtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLGtCQUFVLENBQUMsY0FBTSxlQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQU0sU0FBUyxHQUFHO1lBQ2QsSUFBSTtZQUNKLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztTQUN6QyxDQUFDO1FBRUYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcscUJBQW1CLElBQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbENELGlDQUFpQzs7O0FBRWpDLGtFQUFrRTtBQUNsRSxtRUFBbUU7QUFDbkUsMENBQTBDO0FBRTFDLGlEQUFpRDtBQUVqRCxzRUFBc0U7QUFDdEUsb0VBQW9FO0FBQ3BFLDJFQUEyRTtBQUMzRSxzRUFBc0U7QUFDdEUsaUNBQWlDO0FBQ2pDO0lBR0ksZUFBWSxNQUF1QixFQUFXLFNBQW9CO1FBQXRELGdEQUF1QjtRQUFXLGdEQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwQyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsT0FBTyxHQUFHLGNBQU0sYUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztZQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQU0sY0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztZQUVsRCxpREFBaUQ7WUFDakQsT0FBTyxDQUFDLGVBQWUsR0FBRztnQkFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2QkFBYSxHQUFiLFVBQ0ksSUFBd0IsRUFDeEIsUUFBeUM7UUFGN0MsaUJBY0M7UUFWRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixZQUFFO1lBQ0UsV0FBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDOUIsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxXQUFXLENBQUMsVUFBVSxHQUFHLGNBQU0sY0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDO2dCQUN6QyxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEdBQUc7b0JBQ3hDLGFBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUF6QixDQUF5QixDQUFDO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUM7UUFORixDQU1FLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQS9CWSxzQkFBSztBQWlDbEIsSUFBSSxLQUFZLENBQUM7QUFFakIsU0FBUyxlQUFlO0lBQ3BCLElBQUksQ0FBQyxLQUFLO1FBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDaEMsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQWdCLEdBQUcsQ0FDZixHQUFnQixFQUNoQixLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFFekIsSUFBSSxHQUFlLENBQUM7SUFDcEIsT0FBTyxLQUFLO1NBQ1AsYUFBYSxDQUFDLFVBQVUsRUFBRSxlQUFLO1FBQzVCLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxjQUFNLFVBQUcsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQVZELGtCQVVDO0FBRUQsU0FBZ0IsR0FBRyxDQUNmLEdBQWdCLEVBQ2hCLEtBQVUsRUFDVixLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFFekIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFLO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJELGtCQVFDO0FBRUQsU0FBZ0IsR0FBRyxDQUNmLEdBQWdCLEVBQ2hCLEtBQXlCO0lBQXpCLGdDQUFRLGVBQWUsRUFBRTtJQUV6QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLGVBQUs7UUFDekMsS0FBSyxDQUFDLFFBQU0sRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCxrQkFPQztBQUVELFNBQWdCLEtBQUssQ0FBQyxLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFDM0MsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFLO1FBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCxzQkFJQztBQUVELFNBQWdCLElBQUksQ0FBQyxLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFDMUMsSUFBTSxJQUFJLEdBQWtCLEVBQUUsQ0FBQztJQUUvQixPQUFPLEtBQUs7U0FDUCxhQUFhLENBQUMsVUFBVSxFQUFFLGVBQUs7UUFDNUIsOEVBQThFO1FBQzlFLCtDQUErQztRQUMvQyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDMUMsS0FBSyxDQUNSLENBQUMsU0FBUyxHQUFHO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUSxHQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLGNBQU0sV0FBSSxFQUFKLENBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFoQkQsb0JBZ0JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdELHlFQUtrQjtBQUNsQiwrRkFLc0I7QUFJdEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxrQkFBSyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUU5QyxTQUFnQixHQUFHLENBQUksR0FBZ0I7SUFDbkMsT0FBTyxnQkFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixHQUFHLENBQWdCLEdBQWdCLEVBQUUsS0FBUTtJQUN6RCxPQUFPLGdCQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxZQUFLLEVBQUwsQ0FBSyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZELGtCQUVDO0FBRUQsU0FBZ0IsR0FBRyxDQUFDLEdBQWdCO0lBQ2hDLE9BQU8sZ0JBQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUZELGtCQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQXFCO0lBQy9DLE9BQU8sR0FBRyxDQUFnQixRQUFRLEVBQUU7UUFDaEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztRQUMzQixjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWM7UUFDckMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtRQUMzQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7UUFDdkMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQ2xDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFURCxzQ0FTQztBQUVELFNBQWdCLGdCQUFnQixDQUM1QixNQUF5QjtJQUV6QixPQUFPLEdBQUcsQ0FBb0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLHFCQUFxQixDQUNqQyxVQUFrQixFQUNsQixRQUF3QjtJQUV4QixPQUFPLEdBQUcsQ0FBQyxjQUFZLFVBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBTEQsc0RBS0M7QUFFRCxTQUFzQixpQkFBaUIsQ0FDbkMsVUFBa0I7Ozs7d0JBRVgscUJBQU0sR0FBRyxDQUE2QixjQUFZLFVBQVksQ0FBQzt3QkFBdEUsc0JBQU8sU0FBK0QsRUFBQzs7OztDQUMxRTtBQUpELDhDQUlDO0FBRUQsU0FBZ0IsMEJBQTBCO0lBQ3RDLE9BQU8sR0FBRyxDQUFnQixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07UUFDM0MsYUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztJQUF4QyxDQUF3QyxDQUMzQyxDQUFDO0FBQ04sQ0FBQztBQUpELGdFQUlDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQ3BDLE9BQW9CO0lBRXBCLE9BQU8sR0FBRyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFKRCw0REFJQztBQUVELFNBQXNCLGdDQUFnQzs7Ozs7d0JBR2xDLHFCQUFNLEdBQUcsQ0FBYyw2QkFBNkIsQ0FBQzs7b0JBQS9ELE9BQU8sR0FBRyxTQUFxRDtvQkFFckUscUJBQU0sR0FBRyxDQUFDLDZCQUE2QixDQUFDOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFFekMsc0JBQU8sT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksU0FBUyxFQUFDOzs7O0NBQy9CO0FBUkQsNEVBUUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VELHdFQUE4QztBQUk5QyxJQUFNLHlCQUF5QixHQUF5QixDQUFDLE9BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLE9BQU8sU0FBUyxDQUFDLENBQUM7QUFFekcsSUFBTSx3QkFBd0IsR0FBMEM7SUFDcEUsTUFBTSxFQUFFLHlCQUF5QjtJQUNqQyxLQUFLLEVBQUUsd0JBQXdCO0NBQ2xDLENBQUM7QUFFRiwyQ0FBMkM7QUFDM0MsU0FBZ0IsTUFBTTtJQUNsQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUMvQixPQUFPLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFDM0QsQ0FBQztZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDNUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztLQUNOO0lBRUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQzFELFFBQVEsRUFDUixXQUFDO1FBQ0csUUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUpkLENBSWMsQ0FDckIsQ0FBQztBQUNOLENBQUM7QUFwQkQsd0JBb0JDO0FBRUQsU0FBZ0IsY0FBYztJQUMxQixJQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLElBQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFekQsS0FBYyxVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtRQUFuQixJQUFJLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBWEQsd0NBV0M7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxXQUEwQjtJQUN6RCxXQUFXLEdBQUcsV0FBVyxhQUFYLFdBQVcsY0FBWCxXQUFXLEdBQUksRUFBRSxDQUFDO0lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQ3JCLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksK0JBQXdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQVBELGdEQU9DO0FBRUQsU0FBUyx5QkFBeUI7O0lBQzlCLElBQU0sZ0JBQWdCLGtCQUFPLHlCQUF5QixDQUFDLENBQUM7SUFDeEQsSUFBTSxPQUFPLEdBQUcsY0FBYyxFQUFFLENBQUM7SUFFakMsSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1FBQ3RCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFPLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLGdCQUFnQixFQUFDLENBQUM7S0FDakU7U0FBTTtRQUNILGdCQUFnQixDQUFDLElBQUksT0FBckIsZ0JBQWdCLEVBQ1Q7WUFDQyxPQUFPLFlBQVk7WUFDbkIsT0FBTyxTQUFTLENBQUMsYUFBYTtZQUM5QixPQUFPLFdBQVc7U0FDckIsRUFDSDtLQUNMO0lBRUQsT0FBTyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsU0FBUyx3QkFBd0I7SUFDN0IsT0FBTyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsZ0JBQXFDO0lBQ3hELE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUMxQixVQUFDLFNBQWtCLEVBQUUsVUFBNkIsSUFBSyxnQkFBUyxJQUFJLFVBQVUsS0FBSyxXQUFXLEVBQXZDLENBQXVDLEVBQzlGLElBQUksQ0FDUCxDQUFDO0FBQ04sQ0FBQztBQUVELGlHQUFpRztBQUNqRyxJQUFNLElBQUksR0FDTixJQUFJLENBQUMsSUFBSTtJQUNULFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDVCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0VBQW9FO1FBQzVFLDRFQUE0RTtRQUM1RSw2Q0FBNkM7UUFDN0MsNkVBQTZFO1FBQzdFLHFFQUFxRTtRQUNyRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMseUVBQXlFO1FBQ3pFLHNEQUFzRDtRQUN0RCxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVM7WUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkUsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztBQUVOLHVDQUF1QztBQUN2QyxTQUFnQixNQUFNLENBQUMsR0FBVyxFQUFFLElBQVE7SUFBUiwrQkFBUTtJQUN4QyxJQUFJLEVBQUUsR0FBRyxVQUFVLEdBQUcsSUFBSSxFQUN0QixFQUFFLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFdBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNsQztJQUNELEVBQUU7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUUsRUFBRTtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RSxPQUFPLFVBQVUsR0FBRyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBYkQsd0JBYUM7QUFFRCxvRkFBb0Y7QUFDcEYsU0FBZ0IsWUFBWSxDQUFDLEdBQVc7SUFDcEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQWdCLFdBQVcsQ0FDdkIsR0FBWSxFQUNaLEdBQWdCLEVBQ2hCLE9BQXdDOztJQUF4QyxzQ0FBeUIsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUV4QyxJQUFNLGVBQWUsU0FBRyxPQUFPLENBQUMsT0FBTyxtQ0FBSSxFQUFFLENBQUM7SUFFOUMsT0FBTyxDQUFDLE9BQU8sY0FDWCxjQUFjLEVBQUUsa0JBQWtCLEVBQ2xDLE1BQU0sRUFBRSxrQkFBa0IsRUFDMUIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLElBQzFCLGVBQWUsQ0FDckIsQ0FBQztJQUVGLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBZkQsa0NBZUM7QUFFRDtJQUFzQyxvQ0FBSztJQUN2QywwQkFBWSxVQUFrQixFQUFFLFVBQWtCO2VBQzlDLGtCQUFNLDBCQUF3QixVQUFVLFVBQUssVUFBWSxDQUFDO0lBQzlELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQ0FKcUMsS0FBSyxHQUkxQztBQUpZLDRDQUFnQjtBQU03QixTQUFnQixlQUFlLENBQzNCLEdBQVksRUFDWixHQUFnQixFQUNoQixPQUFxQjtJQUVyQixPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFDO1FBQ3hDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1AsTUFBTSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBWkQsMENBWUM7QUFFRCw2RUFBNkU7QUFDN0UsU0FBZ0IsZUFBZSxDQUFDLE1BQW1CO0lBQy9DLElBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssV0FBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQWhDLENBQWdDLEVBQUUsRUFBRSxDQUFDLENBQ3BFLENBQUM7SUFDRixJQUFNLFVBQVUsR0FBRyxhQUFhO1NBQzNCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkIsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQVhELDBDQVdDO0FBRUQsU0FBZ0IscUJBQXFCLENBQ2pDLElBQVk7SUFFWixJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDLEVBQUU7UUFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNqQiw2REFBNkQsQ0FDaEUsQ0FBQztLQUNMO0lBRUQsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCxzREFZQztBQUVELFNBQWdCLEtBQUs7SUFDakIsSUFBTSxRQUFRLEdBQUc7UUFDYixPQUFPLEVBQUcsSUFBd0Q7UUFDbEUsTUFBTSxFQUFHLElBQTBDO1FBQ25ELE9BQU8sRUFBRyxJQUE4QjtLQUMzQyxDQUFDO0lBRUYsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzdDLFFBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBYkQsc0JBYUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FDNUIsRUFBNEIsRUFDNUIsaUJBQWdDO0lBRGhDLDBCQUFhLFFBQVEsQ0FBQyxNQUFNO0lBQzVCLDBEQUFnQztJQUVoQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7SUFFdEIsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNmLEtBQUssR0FBRyxFQUFFO2FBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNaLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUE3QixDQUE2QixDQUFDO2FBQzNDLE1BQU0sQ0FBQyxlQUFLLElBQUksd0JBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO2FBQzNELE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxJQUFJOztZQUFLLDhCQUFNLENBQUMsZ0JBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBRztRQUE5QixDQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWpCRCw0Q0FpQkM7QUFFRCxTQUFnQixVQUFVLENBQUMsRUFBYztJQUNyQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ25DLEVBQUUsRUFBRSxDQUFDO0tBQ1I7U0FBTTtRQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFORCxnQ0FNQztBQUVELFNBQWdCLFFBQVE7SUFDcEIsT0FBTyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFGRCw0QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pPRCxnR0FBNEQ7QUFDNUQsOEdBQTZDO0FBQzdDLHNFQUtpQjtBQUNqQix1RUFBeUM7QUFFekMsSUFBSyxZQUdKO0FBSEQsV0FBSyxZQUFZO0lBQ2IsK0NBQUk7SUFDSix5REFBUztBQUNiLENBQUMsRUFISSxZQUFZLEtBQVosWUFBWSxRQUdoQjtBQVdEO0lBQXVDLDZCQUd0QztJQUdHLG1CQUFZLEtBQXFCO1FBQWpDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBUWY7UUFvQ08sZUFBUyxHQUFHLFVBQUMsQ0FBZTtZQUNoQyxPQUFPLENBQUMsSUFBSSxDQUNSLHVCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQWtCLENBQUMsQ0FBQyxNQUFRLENBQy9ELENBQUM7WUFFRixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRXZCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxxQkFBYyxFQUFFO2dCQUM3QixPQUFPO2FBQ1Y7WUFFRCxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUsseUJBQWlCLENBQUMsS0FBSztvQkFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUNWLEtBQUsseUJBQWlCLENBQUMscUJBQXFCO29CQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTthQUNiO1FBQ0wsQ0FBQyxDQUFDO1FBRU0scUJBQWUsR0FBRyxVQUFDLE9BQW9COztZQUMzQyxPQUFPLENBQUMsSUFBSSxDQUNSLDJCQUF5QixPQUFPLENBQUMsSUFBSSw4QkFBMkIsQ0FDbkUsQ0FBQztZQUVGLElBQU0sTUFBTSxTQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTywwQ0FBRSxhQUFhLENBQUM7WUFFckQsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPO2FBQ1Y7WUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxxQkFBYyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO1FBN0VFLEtBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVMsRUFBcUIsQ0FBQztRQUVoRCxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FDbEMsQ0FBQzs7SUFDTixDQUFDO0lBRUQscUNBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHdDQUFvQixHQUFwQjtRQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx1Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBaUIsRUFBRSxTQUF5QjtRQUNwRCxXQUFPLEdBQW1CLFNBQVMsUUFBNUIsRUFBRSxZQUFZLEdBQUssU0FBUyxhQUFkLENBQWU7UUFDNUMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUVqRCxJQUNJLE9BQU87WUFDUCxZQUFZLEtBQUssWUFBWSxDQUFDLFNBQVM7WUFDdkMsZ0JBQWdCLEtBQUssWUFBWSxDQUFDLElBQUksRUFDeEM7WUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNqQixJQUFJLEVBQUUsdUJBQWUsQ0FBQyxtQkFBbUI7YUFDNUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUM1RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUF1Q0QsMEJBQU0sR0FBTjtRQUNJLE9BQU8scUJBQVksQ0FDZix1QkFDSSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDbkIsR0FBRyxFQUFFLHFCQUFjLEVBQ25CLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUNoQyxFQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBbEdzQyxrQkFBUyxHQWtHL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhELHVFQUE4RDtBQUM5RCw4RUFBNEM7QUFHNUMsU0FBc0IsZ0JBQWdCLENBQ2xDLEdBQVksRUFDWixTQUFpQixFQUNqQixXQUFrQzs7Ozs7O29CQUU1QixHQUFHLEdBQU0sbUJBQVksb0JBQWUsU0FBUyxVQUFPLENBQUM7b0JBQ3RDLHFCQUFNLG1CQUFZLEVBQUU7O29CQUFuQyxZQUFZLEdBQUcsU0FBb0I7b0JBRXpDLHNCQUFPLG1CQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTs0QkFDekIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0NBQ2pCLFlBQVk7Z0NBQ1osV0FBVzs2QkFDZCxDQUFDO3lCQUNMLENBQUMsRUFBQzs7OztDQUNOO0FBZkQsNENBZUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxJQUFZLGVBRVg7QUFGRCxXQUFZLGVBQWU7SUFDdkIsOERBQTJDO0FBQy9DLENBQUMsRUFGVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUUxQjtBQUVELElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUN6QixvQ0FBZTtJQUNmLG9FQUErQztBQUNuRCxDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFHNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxnR0FBc0M7QUFDdEMsOEZBQXlDO0FBVXpDO0lBQXlDLCtCQUd4QztJQUhEO1FBQUEscUVBc0JDO1FBbEJHLHFCQUFlLEdBQUcsY0FBTyxDQUFDLENBQUM7O0lBa0IvQixDQUFDO0lBaEJHLDRCQUFNLEdBQU47UUFDSSxJQUFNLE9BQU8sR0FBRyxvRUFBb0UsQ0FBQztRQUVyRixPQUFPLENBQ0gsb0JBQUssU0FBUyxFQUFFLE9BQU8sSUFFZixXQUFDLG1CQUFpQixJQUNkLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDbkMsS0FBSyxFQUFDLE1BQU0sRUFDWixNQUFNLEVBQUMsTUFBTSxFQUNiLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FDN0MsQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBdEJ3QyxrQkFBUyxHQXNCakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNELGdHQUE0RDtBQUk1RCxJQUFNLHlCQUF5QixHQUFHLHdCQUF3QixDQUFDO0FBYTNEO0lBQStDLHFDQUc5QztJQUdHLDJCQUFZLEtBQXdCO1FBQXBDLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBT2Y7UUFFRCxlQUFTLEdBQUcsVUFBQyxDQUFNOztZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEIsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxPQUFPO29CQUNSLEtBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1YsS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1YsS0FBSyxpQkFBaUI7b0JBQ2xCLElBQU0sT0FBTyxlQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxPQUFPLG1DQUFJLEVBQUUsQ0FBQztvQkFFM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQVc7d0JBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2FBQ2I7UUFDTCxDQUFDLENBQUM7UUF4QkUsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLEtBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQVMsRUFBRSxDQUFDOztJQUM3QixDQUFDO0lBcUJELDZDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxnREFBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsOENBQWtCLEdBQWxCLFVBQ0ksU0FBNEIsRUFDNUIsU0FBNEI7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQ0ksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQ2xEO1lBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHlDQUFhLEdBQWI7O1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDaEQsT0FBTztTQUNWO1FBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxVQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLDBDQUFFLFdBQVcsQ0FDekM7WUFDSSxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BDLEVBQ0QsR0FBRyxFQUNMO0lBQ04sQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsdUJBQ0ksR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ2YsR0FBRyxFQUFFLHlCQUF5QixFQUM5QixXQUFXLEVBQUMsR0FBRyxFQUNmLFNBQVMsRUFBQyxJQUFJLEVBQ2QsU0FBUyxFQUFDLGFBQWEsR0FDekIsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxDQXRGOEMsa0JBQVMsR0FzRnZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdELGdHQUF3RDtBQUV4RCx1RUFBMEU7QUFDMUUsOEVBQTRDO0FBQzVDLDhHQUE2QztBQUM3Qyw2R0FBd0M7QUFFeEMsaUZBQTJDO0FBRTNDLHFDQUFxQztBQUNyQztJQU1JLDZCQUFvQixPQUFnQixFQUFFLFNBQW9CO1FBQTFELGlCQUdDO1FBSG1CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFKNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQWUzQixvQkFBZSxHQUFHOzs7Ozt3QkFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7NEJBQ3ZDLHNCQUFPO3lCQUNWO3dCQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7O3dCQUdFLHFCQUFNLG1CQUFXLENBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUNiLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDOzt3QkFIZixXQUFXLEdBQUcsU0FHQzt3QkFFckIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTs0QkFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3JDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDdEI7Ozs7d0JBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBNkIsR0FBQyxDQUFDLE9BQVMsQ0FBQyxDQUFDOzs7d0JBRXhELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7OzthQUU5QixDQUFDO1FBRU0sUUFBRyxHQUFHLGNBQU0sT0FBRyxvQkFBYSxrQkFBYSxLQUFJLENBQUMsU0FBUyxjQUFXLEVBQXRELENBQXNELENBQUM7UUFsQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRWEsa0RBQW9CLEdBQWxDOzs7Ozs7d0JBQ0ksU0FBSTt3QkFBYSxxQkFBTSxnQkFBUyxFQUFFOzt3QkFBbEMsR0FBSyxTQUFTLEdBQUcsU0FBaUIsQ0FBQzt3QkFFbkMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7O0tBQzNDO0lBNEJPLHlDQUFXLEdBQW5CO1FBQUEsaUJBOEJDO1FBN0JHLGVBQU0sQ0FDRixxQkFBWSxDQUNSLFdBQUMsaUJBQVEsUUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUNuQixXQUFDLHdCQUFXLElBQ1IsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxrQkFBVyxDQUFDLEtBQUs7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU87YUFDcEMsRUFDRCxlQUFlLEVBQUUsZ0JBQU07Z0JBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQ1IsaURBQStDLElBQUksQ0FBQyxTQUFTLENBQ3pELE1BQU0sQ0FDUCxDQUNOLENBQUM7Z0JBQ0YsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUNqQixLQUFLLGNBQWM7d0JBQ2YsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsTUFBTTtpQkFDYjtZQUNMLENBQUMsR0FDSCxDQUNMLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDRCxFQUNYLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLEVBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ3pCLENBQUM7SUFDTixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGRCxzRUFjZ0I7QUFDaEIsNkZBQStFO0FBQy9FLHlGQUd3QjtBQUN4Qiw4RkFJcUI7QUFFckIsc0ZBQTZEO0FBQzdELGdGQUEwQztBQUMxQyw2RUFBK0Q7QUFDL0QsNkdBQTBDO0FBQzFDLG1IQUErQztBQUMvQywyRkFBMEM7QUFPMUM7SUFVSSxpQkFBWSxNQUFxQjtRQUFqQyxpQkFpREM7UUFpRE8sb0JBQWUsR0FBRyxVQUFDLENBQWU7O1lBQ3RDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUM5QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsa0NBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxPQUFPO2FBQ1Y7WUFFRCxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLDZCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNsQyxJQUFNLElBQUksR0FBRyw4QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsRCxpQkFBSSxDQUFDLE1BQU0sRUFBQyxjQUFjLG1EQUFHLElBQUksRUFBRTtvQkFFbkMsTUFBTTtpQkFDVDthQUNKO1FBQ0wsQ0FBQyxDQUFDO1FBbEhFLHdCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsdUJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QiwwQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHVCQUFTLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksa0JBQW1CLENBQ3ZDLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFNBQVMsQ0FDakIsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyx5QkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLDZCQUFxQixDQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUNqQyxDQUFDO1lBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLENBQ2xDLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQ2pCLENBQUM7WUFFRixJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUU7Z0JBQzlCLFNBQVMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ3BDLFNBQVMsRUFDVCxJQUFJLENBQUMsZUFBZSxDQUN2QixDQUFDO2FBQ0w7WUFFRCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNqQztRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsZ0JBQVEsRUFBRSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQ1IsbUVBQW1FLENBQ3RFLENBQUM7Z0JBQ0YsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNJLE9BQU8sbUJBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQ0FBd0IsR0FBeEI7UUFDSSxPQUFPLGdCQUFTLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLFVBQWtCLEVBQUUsVUFBd0I7UUFDdEQsT0FBTyxvQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxzQ0FBb0IsR0FBcEI7UUFDSSxPQUFPLDJCQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxVQUF3QjtRQUM3QyxPQUFPLGlCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxZQUFLLENBQUMsRUFBTixDQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUssOEJBQVksR0FBbEI7Ozs7Ozs0QkFDZ0IscUJBQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7d0JBQTNDLEdBQUcsR0FBRyxTQUFxQzt3QkFFakQsc0JBQU8sR0FBRztpQ0FDTCw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUMzQyxJQUFJLENBQUMsY0FBSTtnQ0FDTixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0NBQ3BCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FDakIscUNBQXFDLENBQ3hDLENBQUM7aUNBQ0w7NEJBQ0wsQ0FBQyxDQUFDO2lDQUNELElBQUksQ0FBQztnQ0FDRixPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMxQyxDQUFDLENBQUMsRUFBQzs7OztLQUNWO0lBRUQsK0NBQTZCLEdBQTdCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNsQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxxQ0FBMEIsQ0FDNUQsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUMzQyxDQUFDO0lBcUJhLHdDQUFzQixHQUFwQzs7Ozs7OzRCQUNvQixxQkFBTSwwQ0FBZ0MsRUFBRTs7d0JBQWxELE9BQU8sR0FBRyxTQUF3Qzt3QkFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDVixzQkFBTzt5QkFDVjt3QkFFSyxJQUFJLEdBQUcsOEJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRTlDLGdCQUFJLENBQUMsTUFBTSxFQUFDLFlBQVksbURBQUcsSUFBSSxFQUFFOzs7OztLQUNwQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS0QsZ0dBQXNDO0FBRXRDLG9FQUF5RjtBQUV6RjtJQUEwQix3QkFBaUQ7SUFBM0U7UUFBQSxxRUE0Q0M7UUEzQ0MsMkJBQXFCLEdBQUc7WUFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQzs7SUF5Q0osQ0FBQztJQXZDQyxxQkFBTSxHQUFOOztRQUNJLElBQU0sT0FBTyxHQUFHLG1DQUFpQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQix1REFBa0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBVSxDQUFDO1FBQ3JKLFVBQU0sR0FBSyxJQUFJLENBQUMsS0FBSyxPQUFmLENBQWdCO1FBRTlCLElBQU0sVUFBVSxHQUFHLG9CQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQU0sT0FBTyxlQUFHLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLElBQUksMENBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQU0sT0FBTyxlQUFHLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLElBQUksMENBQUUsRUFBRSxDQUFDO1FBRXhDLElBQU0sU0FBUyxHQUFHO1lBQ2QsV0FBVyxFQUFFLE9BQU87WUFDcEIsZUFBZSxFQUFFLE9BQU87U0FDM0IsQ0FBQztRQUVGLE9BQU8sQ0FDSCxvQkFBSyxPQUFLLEVBQUUsT0FBTztZQUNmLG9CQUFLLE9BQUssRUFBQywyQ0FBMkM7Z0JBQ2xELG9CQUNJLE9BQUssRUFBQyxjQUFjLEVBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQ25DLEtBQUssRUFBRSxTQUFnQjtvQkFFdkIsb0JBQ0ksT0FBTyxFQUFDLFdBQVcsRUFDbkIsS0FBSyxFQUFDLDRCQUE0Qjt3QkFFbEMscUJBQ0ksQ0FBQyxFQUFDLGtLQUFrSyxFQUNwSyxJQUFJLEVBQUUsT0FBTyxHQUNmLENBQ0EsQ0FDSjtnQkFDTixXQUFDLFlBQU8sSUFBQyxRQUFRLEVBQUUsVUFBVSxzQkFDeEIsTUFBTSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxTQUFTLG1DQUM5Qiw0QkFBdUIsQ0FDckIsQ0FDUixDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxDQTVDeUIsa0JBQVMsR0E0Q2xDO0FBNUNZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pqQixnR0FBNEQ7QUFDNUQsMEVBQW1FO0FBQ25FLCtIQUErQztBQUMvQyxtSEFBd0Q7QUFFeEQsSUFBTSxNQUFNLEdBQUc7SUFDWCxlQUFlLEVBQUU7UUFDYixnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsY0FBYyxFQUFFLE9BQU87S0FDMUI7SUFDRCxjQUFjLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO0tBQ2I7Q0FDSixDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0NBQ3RDLENBQUM7QUFTRjtJQUErQiw2QkFBZ0M7SUFHM0QsbUJBQVksS0FBcUI7UUFBakMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FHZjtRQVlPLGVBQVMsR0FBRztZQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUVNLGNBQVEsR0FBRztZQUNmLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO1FBbkJFLEtBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQVMsRUFBa0IsQ0FBQzs7SUFDcEQsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUM1QixPQUFPO1NBQ1Y7UUFFSyxTQUFnQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBdkQsV0FBVyxtQkFBRSxZQUFZLGtCQUE4QixDQUFDO1FBRWhFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBVU8saUNBQWEsR0FBckIsVUFBc0IsY0FBOEI7UUFDaEQsSUFBTSxPQUFPLGtCQUFPLE9BQU8sR0FBRSw2QkFBMkIsY0FBZ0IsRUFBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxxQkFBYyxDQUFDLEdBQUcsRUFBRSxxQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUErQixjQUFnQixDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDWSxVQUFNLEdBQUssSUFBSSxDQUFDLEtBQUssT0FBZixDQUFnQjtRQUcxQixZQUFRLEdBS1IsTUFBTSxTQUxFLEVBQ1IsTUFBTSxHQUlOLE1BQU0sT0FKQSxFQUNOLE1BQU0sR0FHTixNQUFNLE9BSEEsRUFDTixRQUFRLEdBRVIsTUFBTSxTQUZFLEVBQ1IsU0FBUyxHQUNULE1BQU0sVUFERyxDQUNGO1FBQ0gsV0FBTyxHQUF5QixNQUFNLFFBQS9CLEVBQUUsSUFBSSxHQUFtQixNQUFNLEtBQXpCLEVBQUUsWUFBWSxHQUFLLE1BQU0sYUFBWCxDQUFZO1FBRTNDLE1BQUUsR0FPRixNQUFNLEdBUEosRUFDRixFQUFFLEdBTUYsTUFBTSxHQU5KLEVBQ0YsY0FBYyxHQUtkLE1BQU0sZUFMUSxFQUNkLGNBQWMsR0FJZCxNQUFNLGVBSlEsRUFDZCxlQUFlLEdBR2YsTUFBTSxnQkFIUyxFQUNmLGVBQWUsR0FFZixNQUFNLGdCQUZTLEVBQ2YsUUFBUSxHQUNSLE1BQU0sU0FERSxDQUNEO1FBRVgsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3QyxJQUFNLGNBQWMsR0FBRztZQUNuQixlQUFlLEVBQUUsRUFBRTtZQUNuQixLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFFRixJQUFNLGtCQUFrQixHQUF3QjtZQUM1QyxlQUFlLEVBQUUsZUFBZTtZQUNoQyxLQUFLLEVBQUUsZUFBZTtTQUN6QixDQUFDO1FBRUYsSUFBTSxXQUFXLEdBQXdCO1lBQ3JDLGVBQWUsRUFBRSxjQUFjO1lBQy9CLEtBQUssRUFBRSxjQUFjO1NBQ3hCLENBQUM7UUFFRixJQUFNLGVBQWUseUJBQ2QsTUFBTSxDQUFDLGVBQWUsS0FDekIsZUFBZSxFQUFFLFNBQU8sUUFBUSxNQUFHLEdBQ3RDLENBQUM7UUFFRixPQUFPLENBQ0gsb0JBQUssS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUM5RCxvQkFDSSxPQUFLLEVBQUMsc0JBQXNCLEVBQzVCLEtBQUssRUFBRSxrQkFBa0IsRUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLGFBR3ZCO1lBQ04sb0JBQUssS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFLLEVBQUMscUJBQXFCLEdBQU87WUFFL0Qsb0JBQUssT0FBSyxFQUFDLHdCQUF3QjtnQkFDL0Isb0JBQUssT0FBSyxFQUFDLHVCQUF1QjtvQkFDOUIsdUJBQUssT0FBTyxDQUFNLENBQ2hCO2dCQUNOLG9CQUFLLE9BQUssRUFBQyxxQkFBcUIsSUFBRSxJQUFJLENBQU87Z0JBQzVDLFNBQVMsSUFBSSxDQUNWLFdBQUMsc0JBQVMsSUFDTixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFDbEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQ3ZCLEtBQUssRUFBRSxRQUFRLEdBQ2pCLENBQ0wsQ0FDQztZQUVOLG9CQUFLLE9BQUssRUFBQyx3QkFBd0I7Z0JBQy9CLFdBQUMsNEJBQWMsSUFDWCxLQUFLLEVBQUUsV0FBVyxFQUNsQixPQUFLLEVBQUMscURBQXFELEVBQzNELElBQUksRUFBRSxZQUFZLEVBQ2xCLGFBQWEsRUFBRSxNQUFNLEVBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUMxQixDQUNBLENBQ0osQ0FDVCxDQUFDO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXJIOEIsa0JBQVMsR0FxSHZDO0FBckhZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEN0QixnR0FBc0M7QUFDdEMsNEhBQWtDO0FBQ2xDLDBFQUF3RDtBQVV4RDtJQUE0QyxrQ0FHM0M7SUFIRDtRQUFBLHFFQTRDQztRQXhDVyxrQkFBWSxHQUFHO1lBRUYsVUFBTSxHQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsaUJBREwsQ0FDTTtZQUU3QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssbUJBQVksQ0FBQyxjQUFjO29CQUM1QiwyQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7eUJBQ25CLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUN6QixPQUFLLEVBQUMsV0FBQzt3QkFDSixPQUFPLENBQUMsS0FBSyxDQUNULHdEQUF3RCxFQUN4RCxDQUFDLENBQ0osQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQztvQkFDUCxNQUFNO2dCQUNWLEtBQUssbUJBQVksQ0FBQyxpQkFBaUI7b0JBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1Y7b0JBQ0ksT0FBTyxPQUFPLENBQUMsS0FBSyxDQUNoQiw2REFBMkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFHLENBQy9FLENBQUM7YUFDVDtRQUNMLENBQUMsQ0FBQzs7SUFnQk4sQ0FBQztJQWRHLCtCQUFNLEdBQU47UUFDVSxTQUFtQyxJQUFJLENBQUMsS0FBSyxFQUEzQyxLQUFLLGFBQVMsUUFBUSxnQkFBRSxJQUFJLFVBQWUsQ0FBQztRQUVwRCxPQUFPLENBQ0gsdUJBQ0ksSUFBSSxFQUFDLFFBQVEsRUFDYixLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQUssRUFBRSxRQUFRLEVBQ2YsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLElBRTVCLElBQUksQ0FDQSxDQUNaLENBQUM7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLENBNUMyQyxrQkFBUyxHQTRDcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERELGdHQUFtQztBQUNuQyxpRkFNMEI7QUFFMUIsd0ZBQXNCO0FBQ3RCLG9GQUcyQjtBQUMzQiwwR0FBOEU7QUFDOUUsNEVBQWlEO0FBQ2pELG9FQUE0QztBQUU1QyxxRkFBdUQ7QUFFdkQsSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3ZCLHNDQUFtQjtJQUNuQixrQ0FBZTtBQUNuQixDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUI7QUFFRDtJQU9JLG9CQUFZLEdBQVksRUFBRSxTQUFvQjtRQUE5QyxpQkFlQztRQWxCTyxrQkFBYSxHQUF1QixFQUFFLENBQUM7UUFvQnZDLG9CQUFlLEdBQUcsVUFDdEIsTUFBdUIsRUFDdkIsVUFBa0M7Ozs7NkJBRTlCLENBQUMsQ0FBQyxVQUFVLEVBQVosd0JBQVk7d0JBQ1oscUJBQU0scUJBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzs7d0JBQTdELFNBQTZELENBQUM7OzRCQUdsRSxxQkFBTSx1Q0FBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzt3QkFBakQsU0FBaUQsQ0FBQzt3QkFFbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFeEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7O2FBQ3pDLENBQUM7UUFFTSxzQkFBaUIsR0FBRyxVQUFDLE1BQXVCO1lBQ2hELHNDQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBNERNLFdBQU0sR0FBRyxVQUFDLE1BQW9CO1lBQ2xDLGVBQU0sQ0FDRixXQUFDLGVBQUUsSUFDQyxNQUFNLEVBQUUsTUFBeUIsRUFDakMsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQ3JCLGVBQWUsRUFBRSxLQUFJLENBQUMsZUFBZSxFQUNyQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsaUJBQWlCLEdBQzNDLEVBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQzVCLENBQUM7UUFDTixDQUFDLENBQUM7UUF4R0UsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksbUNBQXdCLENBQzdDLEdBQUcsRUFDSCxVQUFDLENBQVc7WUFDUixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFzQk8sK0JBQVUsR0FBbEIsVUFBbUIsTUFBdUI7O1FBQ3RDLElBQUksQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGFBQWEsMENBQUUsTUFBTSxDQUMzQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxFQUF0QixDQUFzQixDQUM5QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLDZDQUF3QixHQUFoQyxVQUFpQyxNQUF1QjtRQUNwRCxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUU3QyxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDdkIsS0FBSyxvQkFBWSxDQUFDLGNBQWM7Z0JBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLG9CQUFZLENBQUMsaUJBQWlCO2dCQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO2dCQUNoRCxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTyxDQUFDLEtBQUssQ0FDVCxvR0FBb0csQ0FDdkcsQ0FBQztTQUNUO0lBQ0wsQ0FBQztJQUVPLDZCQUFRLEdBQWhCLFVBQWlCLEtBQXNCO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRWEsNEJBQU8sR0FBckIsVUFBc0IsS0FBc0I7Ozs7Ozs7d0JBQ2hDLFVBQUs7O2lDQUNKLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBeEIsd0JBQXVCO2lDQVN2QixlQUFlLENBQUMsS0FBSyxDQUFDLENBQXRCLHdCQUFxQjs7Ozt3QkFSdEIsU0FBSTt3QkFBVSxxQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFFOzt3QkFBckMsR0FBSyxNQUFNLEdBQUcsU0FBdUIsQ0FBQzt3QkFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ2Qsc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JDLHdCQUFNOzRCQUVOLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRTs7d0JBQWhDLFNBQWdDLENBQUM7d0JBRTNCLGlCQUFTLElBQUksQ0FBQyxhQUFhLDBDQUFFLEtBQUssRUFBRSxDQUFDO3dCQUUzQyxJQUFJLENBQUMsUUFBTSxFQUFFOzRCQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs0QkFDbkIsc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxDQUFDLDZCQUFxQixDQUFDLFFBQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBTSxDQUFDLENBQUM7eUJBQ3ZCO3dCQUVELHdCQUFNOzs7OztLQUVqQjtJQWNPLGdDQUFXLEdBQW5CO1FBQ0ksZUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFYSx3Q0FBbUIsR0FBakM7Ozs7Ozs7d0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ2Qsc0JBQU87eUJBQ1Y7d0JBRXNCLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUN6RCxJQUFJLENBQUMsTUFBTSxDQUNkOzt3QkFGSyxjQUFjLEdBQUcsU0FFdEI7d0JBRUQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFDOzs0QkFDcEIsSUFBSSxZQUFJLENBQUMsYUFBYSwwQ0FBRSxPQUFPLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFO2dDQUN2QyxPQUFPOzZCQUNWOzRCQUVELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixDQUFDLENBQUMsQ0FBQzs7Ozs7S0FDTjtJQUVhLCtCQUFVLEdBQXhCOzs7Ozs0QkFHb0IscUJBQU0sc0JBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzt3QkFBM0MsT0FBTyxHQUFHLFNBQWlDO3dCQUVqRCxJQUFJLFNBQVMsS0FBSyxPQUFPLEVBQUU7NEJBQ3ZCLHNCQUFPO3lCQUNWO3dCQUVELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQWtDLFVBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQzFELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNoQixPQUFPLEdBQUcsQ0FBQzs0QkFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7Ozs7S0FDVjtJQUNMLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS0QsZ0dBQXNFO0FBRXRFLDBFQUFvRTtBQUNwRSwrRkFBeUM7QUFDekMsOEdBQTZDO0FBQzdDLDBFQUE0QztBQUM1Qyw4R0FBNEM7QUFpQjVDO0lBQWdDLHNCQUEyQjtJQUt2RCxZQUFZLEtBQWM7UUFBMUIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FPZjtRQUVPLGtCQUFZLEdBQUcsVUFBQyxZQUFvQixFQUFFLFlBQW9CO1lBQ3RELFVBQU0sR0FBSyxLQUFJLENBQUMsS0FBSyxPQUFmLENBQWdCO1lBQzlCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUN4QixTQUFTLENBQUMsZ0JBQWdCLENBQ3RCLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLE1BQUsscUJBQWMsQ0FBQyxHQUFHO2dCQUNuQyxDQUFDLENBQUMsWUFBWTtnQkFDZCxDQUFDLENBQUMsZUFBZSxDQUN4QixDQUNKLENBQUM7WUFDRixLQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUvRCxJQUFJLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLE1BQUsscUJBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzVDLFlBQVksSUFBSSxFQUFFLENBQUM7YUFDdEI7WUFFRCxJQUFNLE1BQU0sR0FBRyxZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQztZQUU5QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUM7WUFDdEQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQ2YsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVEsTUFBSyxxQkFBYyxDQUFDLEdBQUc7Z0JBQ25DLENBQUMsQ0FBQyxXQUFXO2dCQUNiLENBQUMsQ0FBQyxjQUFjLENBQ3ZCLEdBQU0sTUFBTSxPQUFJLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBRU0scUJBQWUsR0FBRyxVQUFDLE1BQXVCOztZQUM5QyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUU3QyxRQUFRLFlBQVksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLEtBQUssbUJBQVksQ0FBQyxjQUFjO29CQUM1QixXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sMENBQUUsU0FBUyxHQUFHO29CQUNoQyxNQUFNO2dCQUNWLEtBQUssbUJBQVksQ0FBQyxpQkFBaUI7b0JBQy9CLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUMsTUFBTTtnQkFDVjtvQkFDSSxPQUFPLENBQUMsS0FBSyxDQUNULDhFQUE4RSxDQUNqRixDQUFDO2FBQ1Q7UUFDTCxDQUFDLENBQUM7UUFFTSx1QkFBaUIsR0FBRyxVQUFDLE1BQXVCO1lBQ2hELEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUVNLGlCQUFXLEdBQUcsVUFBQyxVQUFpQztZQUNwRCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDO1FBM0RFLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1NBQzFCLENBQUM7UUFFRixLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFTLEVBQWEsQ0FBQzs7SUFDeEMsQ0FBQztJQXdETyw0QkFBZSxHQUF2Qjs7UUFDWSxVQUFNLEdBQUssSUFBSSxDQUFDLEtBQUssT0FBZixDQUFnQjtRQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLFNBQUcsSUFBSSxDQUFDLGNBQWMsbUNBQUksRUFBRSxDQUFDO1FBRTNELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNmLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLE1BQUsscUJBQWMsQ0FBQyxHQUFHO1lBQ25DLENBQUMsQ0FBQyxXQUFXO1lBQ2IsQ0FBQyxDQUFDLGNBQWMsQ0FDdkIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsVUFBVSxPQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLHFCQUFZLENBQ2YsV0FBQyxpQkFBUTtZQUNMLFdBQUMsc0JBQVMsSUFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUNoQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FDL0I7WUFDRixXQUFDLHVCQUFTLElBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUksQ0FDckQsRUFDWCxRQUFRLENBQUMsSUFBSSxDQUNoQixDQUFDO0lBQ04sQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLENBdEcrQixrQkFBUyxHQXNHeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIRCxnR0FBc0M7QUFDdEMsMEVBSW9CO0FBQ3BCLDJGQUEwRDtBQUMxRCwyR0FBK0M7QUFFL0MsSUFBTSxNQUFNLEdBQUc7SUFDWCxTQUFTLEVBQUU7UUFDUCxnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsY0FBYyxFQUFFLE9BQU87S0FDMUI7Q0FDSixDQUFDO0FBV0Y7SUFBb0Msa0NBR25DO0lBQ0csd0JBQVksS0FBMEI7UUFBdEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FLZjtRQUVELGVBQVMsR0FBRztZQUNSLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFFRiw4QkFBd0IsR0FBRyxVQUFDLFdBQThCO1lBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsaUJBQWlCLGlCQUFNLFdBQVcsQ0FBQzthQUN0QyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRixrQkFBWSxHQUFHLFVBQUMsU0FBMEI7WUFDdEMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQzthQUNmO1lBRU8sVUFBTSxHQUFLLEtBQUksQ0FBQyxLQUFLLE9BQWYsQ0FBZ0I7WUFDOUIsSUFBTSxPQUFPLEdBQUcsNkVBQTJFLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBVSxDQUFDO1lBRXBILFNBQTZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFyRCxPQUFPLGVBQUUsYUFBYSxtQkFBK0IsQ0FBQztZQUN4RCxTQUtGLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUoxQixFQUFFLFVBQ0YsRUFBRSxVQUNGLGVBQWUsdUJBQ2YsZUFBZSxxQkFDVyxDQUFDO1lBRS9CLElBQU0sY0FBYyxHQUFHO2dCQUNuQixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsS0FBSyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBRUYsSUFBTSxrQkFBa0IsR0FBRztnQkFDdkIsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLEtBQUssRUFBRSxlQUFlO2FBQ3pCLENBQUM7WUFFRixJQUFNLFNBQVMseUJBQ1IsTUFBTSxDQUFDLFNBQVMsS0FDbkIsZUFBZSxFQUFFLFVBQU8sU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGNBQWMsQ0FBQyxPQUFPLE9BQUcsR0FDL0QsQ0FBQztZQUVGLE9BQU8sQ0FDSCxvQkFBSyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUMxQyxvQkFDSSxLQUFLLEVBQUUsU0FBUyxFQUNoQixTQUFTLEVBQUMsNkJBQTZCLEdBQ3BDO2dCQUVQLG9CQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7b0JBQzNDLG9CQUFLLFNBQVMsRUFBQywrQkFBK0I7d0JBQzFDLHVCQUFLLE9BQU8sQ0FBTSxDQUNoQjtvQkFDTixvQkFBSyxTQUFTLEVBQUMsNkJBQTZCO3dCQUN4QyxXQUFDLDRCQUFZLElBQ1QsV0FBVyxFQUFFLCtCQUF3QixDQUNqQyxTQUFTLENBQUMsV0FBVyxFQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQzdCLEVBQ0QseUJBQXlCLEVBQ3JCLEtBQUksQ0FBQyx3QkFBd0IsR0FFbkMsQ0FDQSxDQUNKO2dCQUVOLG9CQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7b0JBQzNDLHVCQUNJLElBQUksRUFBQyxRQUFRLEVBQ2IsS0FBSyxFQUFFLGtCQUFrQixFQUN6QixTQUFTLEVBQUMscURBQXFELEVBQy9ELE9BQU8sRUFBRSxLQUFJLENBQUMsU0FBUyxJQUV0QixhQUFhLENBQ1QsQ0FDUCxDQUNKLENBQ1QsQ0FBQztRQUNOLENBQUMsQ0FBQztRQWxGRSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsaUJBQWlCLEVBQUUsRUFBRTtTQUN4QixDQUFDOztJQUNOLENBQUM7SUFpRkQsK0JBQU0sR0FBTjtRQUNJLE9BQU8sV0FBQyxzQkFBUyxDQUFDLFFBQVEsUUFBRSxJQUFJLENBQUMsWUFBWSxDQUFzQixDQUFDO0lBQ3hFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0E5Rm1DLGtCQUFTLEdBOEY1QztBQTlGWSx3Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUIzQixnR0FBc0M7QUFZdEM7SUFBa0MsZ0NBR2pDO0lBQ0csc0JBQVksS0FBdUI7UUFBbkMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FPZjtRQUxHLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxRQUFRLGlCQUFNLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ3hDLENBQUM7UUFFRixLQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQzlELENBQUM7SUFFRCwyQ0FBb0IsR0FBcEIsVUFBcUIsV0FBbUIsRUFBRSxPQUFnQjtRQUExRCxpQkFZQztRQVhHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBOUIsQ0FBOEIsQ0FDdEMsQ0FBQztRQUNGLElBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLENBQ1Q7WUFDSSxRQUFRLGlCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3JDLEVBQ0QsY0FBTSxZQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQXpELENBQXlELENBQ2xFLENBQUM7SUFDTixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUFBLGlCQWlDQztRQWhDVyxZQUFRLEdBQUssSUFBSSxDQUFDLEtBQUssU0FBZixDQUFnQjtRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxDQUNILG9CQUFLLE9BQUssRUFBQyxnQ0FBZ0MsSUFDdEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFJLElBQUksUUFDbEIsc0JBQ0ksR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN0QixTQUFTLEVBQUMsNEJBQTRCO1lBRXJDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNsQixzQkFDSSxJQUFJLEVBQUMsVUFBVSxFQUNmLFFBQVEsUUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDckIsT0FBTyxFQUFFLFVBQ0wsQ0FBd0M7b0JBRXhDLEtBQUksQ0FBQyxvQkFBb0IsQ0FDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUMxQixDQUFDO2dCQUNOLENBQUMsR0FDSDtZQUNGLHFCQUFNLFNBQVMsRUFBQyxrQkFBa0IsR0FBUSxDQUN0QyxDQUNYLEVBckJxQixDQXFCckIsQ0FBQyxDQUNBLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQ0E5RGlDLGtCQUFTLEdBOEQxQztBQTlEWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaekIsZ0dBQXNDO0FBRXRDLDBFQU1vQjtBQUNwQiwyRkFBMEQ7QUFDMUQsMkdBQStDO0FBRS9DLElBQU0sTUFBTSxHQUFHO0lBQ1gsU0FBUyxFQUFFO1FBQ1AsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGNBQWMsRUFBRSxPQUFPO0tBQzFCO0NBQ0osQ0FBQztBQU1GO0lBQTRCLDBCQUczQjtJQUNHLGdCQUFZLEtBQTREO1FBQXhFLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFRCwyQkFBcUIsR0FBRztZQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FDL0IsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLHFCQUFlLEdBQUc7WUFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDO1FBRUYsOEJBQXdCLEdBQUcsVUFBQyxXQUE4QjtZQUN0RCxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLGlCQUFpQixpQkFBTSxXQUFXLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBRUYsaUJBQVcsR0FBRyxVQUFDLFNBQTBCO1lBQ3JDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDekIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2pDLElBQU0sT0FBTyxHQUFHLG1DQUFpQyxLQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixpQkFBWSxNQUFNLENBQUMsSUFBSSwyQ0FBc0MsTUFBTSxDQUFDLFFBQVUsQ0FBQztZQUV2SixTQUNGLE1BQU0sQ0FBQyxJQUFJLEtBQUsscUJBQWMsQ0FBQyxLQUFLO2dCQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBSHRCLE9BQU8sZUFBRSxJQUFJLFlBQUUsYUFBYSxxQkFBRSxZQUFZLGtCQUdwQixDQUFDO1lBRXpCLFNBUUYsTUFBTSxDQUFDLElBQUksS0FBSyxxQkFBYyxDQUFDLEtBQUs7Z0JBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFUMUIsRUFBRSxVQUNGLEVBQUUsVUFDRixjQUFjLHNCQUNkLGNBQWMsc0JBQ2QsZUFBZSx1QkFDZixlQUFlLHFCQUlXLENBQUM7WUFFL0IsSUFBTSxjQUFjLEdBQUc7Z0JBQ25CLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixLQUFLLEVBQUUsRUFBRTthQUNaLENBQUM7WUFFRixJQUFNLGtCQUFrQixHQUFHO2dCQUN2QixlQUFlLEVBQUUsZUFBZTtnQkFDaEMsS0FBSyxFQUFFLGVBQWU7YUFDekIsQ0FBQztZQUVGLElBQU0saUJBQWlCLEdBQUc7Z0JBQ3RCLGVBQWUsRUFBRSxjQUFjO2dCQUMvQixLQUFLLEVBQUUsY0FBYzthQUN4QixDQUFDO1lBRUYsSUFBTSxTQUFTLHlCQUNSLE1BQU0sQ0FBQyxTQUFTLEtBQ25CLGVBQWUsRUFBRSxTQUFPLE1BQU0sQ0FBQyxRQUFRLE1BQUcsR0FDN0MsQ0FBQztZQUVGLE9BQU8sQ0FDSCxvQkFBSyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxPQUFPO2dCQUN6QyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQ2hCLG9CQUNJLEtBQUssRUFBRSxTQUFTLEVBQ2hCLFNBQVMsRUFBRSxhQUFXLE1BQU0sQ0FBQyxJQUFJLFVBQU8sR0FDckMsQ0FDVjtnQkFFRCxvQkFBSyxTQUFTLEVBQUUsYUFBVyxNQUFNLENBQUMsSUFBSSxhQUFVO29CQUM1QyxvQkFBSyxTQUFTLEVBQUUsYUFBVyxNQUFNLENBQUMsSUFBSSxZQUFTO3dCQUMzQyx1QkFBSyxPQUFPLENBQU0sQ0FDaEI7b0JBQ04sb0JBQUssU0FBUyxFQUFFLGFBQVcsTUFBTSxDQUFDLElBQUksVUFBTzt3QkFDeEMsSUFBSTt3QkFDSixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUNsQixXQUFDLDRCQUFZLElBQ1QsV0FBVyxFQUFFLCtCQUF3QixDQUNqQyxTQUFTLENBQUMsV0FBVyxFQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQzdCLEVBQ0QseUJBQXlCLEVBQ3JCLEtBQUksQ0FBQyx3QkFBd0IsR0FFbkMsQ0FDTCxDQUNDLENBQ0o7Z0JBRU4sb0JBQUssU0FBUyxFQUFFLGFBQVcsTUFBTSxDQUFDLElBQUksYUFBVTtvQkFDNUMsdUJBQ0ksSUFBSSxFQUFDLFFBQVEsRUFDYixLQUFLLEVBQUUsa0JBQWtCLEVBQ3pCLFNBQVMsRUFBQyxvREFBb0QsRUFDOUQsT0FBTyxFQUFFLEtBQUksQ0FBQyxlQUFlLElBRTVCLGFBQWEsQ0FDVDtvQkFDVCx1QkFDSSxJQUFJLEVBQUMsUUFBUSxFQUNiLEtBQUssRUFBRSxpQkFBaUIsRUFDeEIsU0FBUyxFQUFDLHFEQUFxRCxFQUMvRCxPQUFPLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixJQUVsQyxZQUFZLENBQ1IsQ0FDUCxDQUNKLENBQ1QsQ0FBQztRQUNOLENBQUMsQ0FBQztRQXBIRSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsaUJBQWlCLEVBQUUsRUFBRTtTQUN4QixDQUFDOztJQUNOLENBQUM7SUFtSEQsdUJBQU0sR0FBTjtRQUNJLE9BQU8sV0FBQyxzQkFBUyxDQUFDLFFBQVEsUUFBRSxJQUFJLENBQUMsV0FBVyxDQUFzQixDQUFDO0lBQ3ZFLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxDQWhJMkIsa0JBQVMsR0FnSXBDO0FBaElZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabkIsa0dBR3NCO0FBQ3RCLGdHQUFtQztBQUluQyxvRkFBc0I7QUFDdEIsb0ZBQXNEO0FBQ3RELDBGQUF5QztBQUN6QyxpRkFBb0Q7QUFFcEQseUdBQXlEO0FBQ3pELDJFQUFnRDtBQVFoRCxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBRXRCO0lBaUJJLHVCQUFZLE1BQWUsRUFBRSxHQUFZLEVBQUUsU0FBb0I7UUFBL0QsaUJBY0M7UUFFTyxtQkFBYyxHQUFHLFVBQUMsQ0FBVztZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTVDLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDNUMsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBRU0sMkJBQXNCLEdBQUcsVUFBQyxNQUFvQjtZQUNsRCxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQTBCLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBRU0sMEJBQXFCLEdBQUcsVUFBTyxNQUF3Qjs7Ozs7O3dCQUMzRCxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUM3QixzQkFBTzt5QkFDVjt3QkFFRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDO3dCQUV4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUU1QixTQUFJO3dCQUFxQiw0QkFBTSxJQUFJLENBQUMsY0FBYywwQ0FBRSxtQ0FBbUMsQ0FDbkYsSUFBSSxDQUFDLE9BQU8sSUFDZjs7d0JBRkQsR0FBSyxpQkFBaUIsR0FBRyxTQUV4QixDQUFDO3dCQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7YUFDMUIsQ0FBQztRQUVNLDhCQUF5QixHQUFHLFVBQ2hDLE1BQXdCLEVBQ3hCLE1BQW9COztnQkFFcEIsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDN0Isc0JBQU87aUJBQ1Y7Z0JBRUQsSUFBSSx5QkFBeUIsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUMzQyxzQkFBTztpQkFDVjtnQkFFRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO2dCQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7YUFDL0IsQ0FBQztRQUVNLHFCQUFnQixHQUFHLFVBQ3ZCLE1BQXdCLEVBQ3hCLGlCQUFxQzs7Ozs7NkJBRWpDLEtBQUksQ0FBQyxpQkFBaUIsS0FBSyxjQUFjLEdBQXpDLHdCQUF5Qzt3QkFDekMscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQzs7d0JBQXhDLFNBQXdDLENBQUM7Ozt3QkFHN0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUVwQyxxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDOzt3QkFBdEMsU0FBc0MsQ0FBQzt3QkFFdkMscUJBQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDOzt3QkFBeEQsU0FBd0QsQ0FBQzt3QkFFekQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssWUFBWSxFQUFFOzRCQUN6QyxVQUFJLENBQUMsRUFBRSwwQ0FBRSxTQUFTLENBQUMsWUFBTSxDQUFDLE1BQU0sMENBQUUsb0JBQXFCLEVBQUU7eUJBQzVEOzs7O2FBQ0osQ0FBQztRQUVNLHdCQUFtQixHQUFHLFVBQzFCLE1BQXdCLEVBQ3hCLGlCQUFxQzs7OzRCQUVyQyxxQkFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUM7O3dCQUF4RCxTQUF3RCxDQUFDO3dCQUV6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7YUFDdkMsQ0FBQztRQUVNLHFCQUFnQixHQUFHLFVBQUMsTUFBd0I7WUFDaEQsc0NBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFqR0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLG1DQUF3QixDQUM3QyxHQUFHLEVBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FDdEIsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUVuQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFzRk8sOENBQXNCLEdBQTlCLFVBQStCLE1BQXdCO1FBQXZELGlCQVFDO1FBUFcscUJBQWlCLEdBQUssSUFBSSxrQkFBVCxDQUFVO1FBRW5DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEIsSUFBSSxpQkFBaUIsS0FBSyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFlBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFYSwyQ0FBbUIsR0FBakMsVUFBa0MsTUFBd0I7Ozs7Ozt3QkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7NEJBQ2pCLHNCQUFPO3lCQUNWO3dCQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVoRCxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO3dCQUN6RSxTQUFJO3dCQUFZLHFCQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUU7O3dCQUFsRCxHQUFLLFFBQVEsR0FBRyxTQUFrQyxDQUFDO3dCQUVuRCxxQkFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDOzt3QkFBMUMsU0FBMEMsQ0FBQzt3QkFDM0MscUJBQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQzs7d0JBQTNDLFNBQTJDLENBQUM7Ozs7O0tBQy9DO0lBRWEsK0NBQXVCLEdBQXJDLFVBQ0ksTUFBd0I7Ozs7Ozs7d0JBRXhCLElBQUksU0FBUyxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUU7NEJBQzlCLHNCQUFPO3lCQUNWO3dCQUVLLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakMsVUFBQyxNQUFvQjs0QkFDakIsYUFBTSxDQUFDLElBQUksS0FBSyxvQkFBb0I7d0JBQXBDLENBQW9DLENBQzNDLENBQUM7d0JBRUksZ0JBQWdCLEdBQUcsT0FBTzs2QkFDM0IsTUFBTSxDQUFDLGdCQUFNOzRCQUNWLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUF2RCxDQUF1RCxDQUMvRCxDQUFDOzRCQUVGLElBQUksU0FBUyxLQUFLLFlBQVksRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLElBQUksQ0FDUixxQ0FBbUMsTUFBTSxDQUFDLFdBQVcsMkJBQXdCLENBQ2hGLENBQUM7Z0NBQ0YsT0FBTyxLQUFLLENBQUM7NkJBQ2hCOzRCQUVELE9BQU8sSUFBSSxDQUFDO3dCQUNoQixDQUFDLENBQUM7NkJBQ0QsR0FBRyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO3dCQUV2QyxxQkFBTSxJQUFJLENBQUMsYUFBYTtpQ0FDbkIsNkJBQTZCLEVBQUU7aUNBQy9CLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7d0JBRmhDLFNBRWdDLENBQUM7Ozs7O0tBQ3BDO0lBRWEsZ0RBQXdCLEdBQXRDLFVBQ0ksTUFBd0I7Ozs7Z0JBRXhCLElBQUksU0FBUyxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLHNCQUFPO2lCQUNWO2dCQUdLLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakMsVUFBQyxNQUFvQjtvQkFDakIsYUFBTSxDQUFDLElBQUksS0FBSyx5QkFBeUI7Z0JBQXpDLENBQXlDLENBQ2hELENBQUM7Z0JBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLHNCQUFPO2lCQUNWO2dCQUVELHlFQUF5RTtnQkFDekUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztLQUN0RDtJQUVhLGtEQUEwQixHQUF4QyxVQUNJLGlCQUFxQzs7Ozs7O3dCQUVyQyxJQUFJLFNBQVMsS0FBSyxpQkFBaUIsRUFBRTs0QkFDakMsc0JBQU87eUJBQ1Y7d0JBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLEVBQUUsQ0FBQzt3QkFFbkUsWUFBWSxHQUFHLGlCQUFpQjs2QkFDakMsTUFBTSxDQUFDLFlBQUUsSUFBSSxRQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQVgsQ0FBVyxDQUFDOzZCQUN6QixHQUFHLENBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDO3dCQUNoQyxxQkFBTSxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQzs7d0JBQTdDLFNBQTZDLENBQUM7d0JBRXhDLFVBQVUsR0FBRyxpQkFBaUI7NkJBQy9CLE1BQU0sQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLE9BQU8sRUFBVixDQUFVLENBQUM7NkJBQ3hCLEdBQUcsQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUM7d0JBQ2hDLHFCQUFNLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDOzt3QkFBekMsU0FBeUMsQ0FBQzs7Ozs7S0FDN0M7SUFFTyw4QkFBTSxHQUFkO1FBQUEsaUJBMEJDO1FBekJHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoRSxPQUFPO1NBQ1Y7UUFFRCxlQUFNLENBQ0YsV0FBQyxzQkFBUyxDQUFDLFFBQVEsSUFDZixLQUFLLEVBQUU7Z0JBQ0gsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDN0I7WUFFRCxXQUFDLGVBQUUsSUFDQyxHQUFHLEVBQUUsV0FBQyxJQUFJLFFBQUMsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBYixDQUFhLEVBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUMzQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQ3pDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQzlCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUN2QyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQzdDLHlCQUF5QixFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFDekQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUMzQyxDQUNlLEVBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUM3QixDQUFDO0lBQ04sQ0FBQztJQUVhLHdDQUFnQixHQUE5Qjs7Ozs7Ozt3QkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7d0JBRXBCLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUN6RCxJQUFJLENBQUMsT0FBTyxFQUNaLGdCQUFNO2dDQUNGLE9BQU8sS0FBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUMvQyxDQUFDLENBQ0o7O3dCQUxLLGNBQWMsR0FBRyxTQUt0Qjt3QkFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7OztLQUN4QztJQUVELDhDQUFzQixHQUF0QixVQUF1QixNQUF3Qjs7UUFDM0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssY0FBYyxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFNLGFBQWEsZUFDZixNQUFNLENBQUMsT0FBTywwQ0FDUixNQUFNLENBQ0osVUFBQyxNQUFvQjtZQUNqQixhQUFNLENBQUMsSUFBSSxLQUFLLG9CQUFvQjtRQUFwQyxDQUFvQyxFQUUzQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxXQUFXLEVBQWIsQ0FBYSxvQ0FBSyxFQUFFLENBQUM7UUFDdkMsSUFBTSxVQUFVLEdBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2hCLFdBQUMsSUFBSSxvQkFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUEvQyxDQUErQyxDQUN2RCxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFakIsSUFBSSxVQUFVLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLGtDQUFVLEdBQWxCLFVBQW1CLE1BQXdCO1FBQ3ZDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLHNDQUFjLEdBQXRCLFVBQXVCLE1BQXdCO1FBQzNDLGtFQUFrRTtRQUNsRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyx1Q0FBZSxHQUF2QixVQUF3QixPQUEyQjtRQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWpELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLElBQU0sUUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQixJQUFJLDZCQUFxQixDQUFDLFFBQU0sRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRTtnQkFDNUQsU0FBUzthQUNaO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sZ0NBQVEsR0FBaEIsVUFBaUIsS0FBeUI7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFYSwrQkFBTyxHQUFyQixVQUFzQixLQUF5Qjs7Ozs7Ozt3QkFDbkMsVUFBSzs7aUNBQ0osU0FBUyxDQUFDLENBQVYsd0JBQVM7aUNBY1QsWUFBWSxDQUFDLENBQWIsd0JBQVk7aUNBR1osT0FBTyxDQUFDLENBQVIsd0JBQU87aUNBU1AsWUFBWSxDQUFDLENBQWIseUJBQVk7Ozs7d0JBekJiLFNBQUk7d0JBQWtCLHFCQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7O3dCQUEzRCxHQUFLLGNBQWMsR0FBRyxTQUFxQyxDQUFDO3dCQUM1RCxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUM5QyxJQUFJLENBQUMsT0FBTyxDQUNmOzt3QkFGRCxTQUVDLENBQUM7d0JBQ0YsU0FBSTt3QkFBcUIscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FDMUUsSUFBSSxDQUFDLE9BQU8sQ0FDZjs7d0JBRkQsR0FBSyxpQkFBaUIsR0FBRyxTQUV4QixDQUFDO3dCQUNGLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUU7O3dCQUF4QixTQUF3QixDQUFDO3dCQUN6QixTQUFJO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxhQUFhO2lDQUNuQyw2QkFBNkIsRUFBRTtpQ0FDL0IsWUFBWSxFQUFFOzt3QkFGbkIsR0FBSyxRQUFRLEdBQUcsU0FFRyxDQUFDO3dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2Qix5QkFBTTs7d0JBRU4sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNkLHlCQUFNOzt3QkFFTixJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO3dCQUNuQyxTQUFJO3dCQUFxQiw0QkFBTSxJQUFJLENBQUMsY0FBYywwQ0FBRSwyQkFBMkIsQ0FDM0UsSUFBSSxDQUFDLE9BQU8sSUFDZjs7d0JBRkQsR0FBSyxpQkFBaUIsR0FBRyxTQUV4QixDQUFDO3dCQUNGLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7d0JBQTdCLFNBQTZCLENBQUM7d0JBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDZCx5QkFBTTs7d0JBRU4sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNkLHlCQUFNOzs7OztLQUVqQjtJQUVhLG1DQUFXLEdBQXpCOzs7Ozs7O3dCQUNJLFNBQUk7d0JBQWtCLHFCQUFNLDJCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7O3dCQUE1RCxHQUFLLGNBQWMsR0FBRyxTQUFzQyxDQUFDO3dCQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7NEJBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQzs0QkFDL0Msc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7NEJBQ3JDLElBQUksQ0FBQyxPQUFPLGdCQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFFLENBQUM7eUJBQ2xEOzZCQUFNOzRCQUNILElBQUksQ0FBQyxPQUFPLGdCQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQzt5QkFDN0Q7O21DQUVjLElBQUksQ0FBQyxPQUFPOzs7Ozs7O3dCQUNqQixZQUFZLEdBQUcsT0FBTyxhQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUM1QixXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxvQkFBb0IsRUFBL0IsQ0FBK0IsMkNBQ3JDLE1BQU0sQ0FDWixDQUFDOzZCQUVFLFlBQVksRUFBWix3QkFBWTs7Ozt3QkFFUixTQUFJO3dCQUFZLHFCQUFNLElBQUksQ0FBQyxhQUFhO2lDQUNuQyw2QkFBNkIsRUFBRTtpQ0FDL0IsWUFBWSxFQUFFOzt3QkFGbkIsR0FBSyxRQUFRLEdBQUcsU0FFRyxDQUFDOzs7Ozs0QkFJeEIsd0JBQU07Ozs7NEJBSWQsc0JBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFDOzs7O0tBQzVCO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBcFlZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMUIsMEZBQTJFO0FBRTNFLHVFQU1pQjtBQUVqQixJQUFNLDRCQUE0QjtJQUM5QixHQUFDLHVCQUFnQixDQUFDLEtBQUssSUFBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUU7SUFDeEMsR0FBQyx1QkFBZ0IsQ0FBQyxJQUFJLElBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtPQUMvQyxDQUFDO0FBRUYsU0FBZ0Isb0JBQW9CLENBQUMsTUFBb0I7SUFDN0MsYUFBUyxHQUFLLE1BQXlCLFVBQTlCLENBQStCO0lBRWhELElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDWixPQUFPO0tBQ1Y7SUFFTyxRQUFJLEdBQUssU0FBUyxDQUFDLE9BQU8sS0FBdEIsQ0FBdUI7SUFFbkMsUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLG1CQUFZLENBQUMsTUFBTTtZQUNwQixPQUFPLCtCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQ3pCLENBQUMsQ0FBQztRQUNQLEtBQUssbUJBQVksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sK0JBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM1RDtZQUNJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDZixxQ0FBbUMsSUFBSSw4QkFBeUIsTUFBTSxDQUFDLElBQUkseURBQXNELENBQ3BJLENBQUM7S0FDVDtBQUNMLENBQUM7QUFyQkQsb0RBcUJDO0FBRUQsU0FBc0Isa0JBQWtCLENBQ3BDLE1BQW9COzs7Ozt3QkFFSCxxQkFBTSwyQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOztvQkFBL0MsUUFBUSxHQUFHLFNBQW9DO29CQUVyRCxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNYLHNCQUFPLEtBQUssRUFBQztxQkFDaEI7b0JBRUQsSUFBSSxZQUFZLEtBQUssUUFBUSxFQUFFO3dCQUMzQixzQkFBTyxJQUFJLEVBQUM7cUJBQ2Y7b0JBRU8sU0FBUyxHQUFLLE1BQXlCLFVBQTlCLENBQStCO29CQUVoRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFZLENBQUMsTUFBTSxFQUFFO3dCQUNoRCxzQkFBTyxLQUFLLEVBQUM7cUJBQ2hCO29CQUVELHNCQUFPLENBQUMsd0JBQXdCLENBQzVCLFFBQVEsQ0FBQyxVQUFVLEVBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUMxQixFQUFDOzs7O0NBQ0w7QUF2QkQsZ0RBdUJDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQ3BDLGdCQUF3QixFQUN4QixXQUFzQztJQUV0QyxPQUFPLENBQ0gsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGdCQUFnQjtRQUM3Qiw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQzlDLFdBQVcsQ0FBQyxRQUFRLENBQzNCLENBQUM7QUFDTixDQUFDO0FBVEQsNERBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REQsOEVBQTZDO0FBQzdDLHlHQUF1RDtBQUV2RCxTQUFTLE1BQU0sQ0FBQyxXQUF3QixFQUFFLFNBQWM7SUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUMvQixJQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQUM7WUFDM0IsSUFBTSxPQUFPLEdBQUcsTUFBSSxvQkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQUcsQ0FBQztZQUM5RCxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQzlCLFVBQUMsT0FBTyxFQUFFLE9BQU8sSUFBSyxjQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsRUFDaEUsS0FBSyxDQUNSLENBQUM7UUFFRixPQUFPLGFBQWEsQ0FBQztLQUN4QjtTQUFNLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO1FBQ3RDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsV0FBd0IsRUFBRSxTQUFjO0lBQ3BELE9BQU8sV0FBVyxJQUFJLFNBQVMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsV0FBd0IsRUFBRSxTQUFjO0lBQ3BELE9BQU8sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsV0FBd0IsRUFBRSxTQUFjO0lBQ3JELE9BQU8sU0FBUyxJQUFJLFdBQVcsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsV0FBd0IsRUFBRSxTQUFjO0lBQ3BELE9BQU8sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsV0FBd0IsRUFBRSxTQUFjO0lBQ3JELE9BQU8sU0FBUyxJQUFJLFdBQVcsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBZ0IsY0FBYyxDQUMxQixNQUFvQixFQUNwQixLQUFtQjs7SUFFbkIsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUUvQixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtRQUM5QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELElBQUksUUFBQyxPQUFPLENBQUMsT0FBTywwQ0FBRSxNQUFNLEdBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2IsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDdkMsU0FBOEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQWUsRUFBN0QsSUFBSSxVQUFFLEVBQUUsVUFBRSxlQUFlLFFBQW9DLENBQUM7UUFFckUsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFMUIsUUFBUSxFQUFFLEVBQUU7WUFDUixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssSUFBSTtnQkFDTCxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNWLEtBQUssSUFBSTtnQkFDTCxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNWLEtBQUssSUFBSTtnQkFDTCxhQUFhLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQTRCLEVBQUksQ0FBQyxDQUFDO1NBQ3REO1FBRUQsbUJBQW1CLEdBQUcsbUJBQW1CLElBQUksYUFBYSxDQUFDO0tBQzlEO0lBRUQsT0FBTyxtQkFBbUIsQ0FBQztBQUMvQixDQUFDO0FBdERELHdDQXNEQztBQUVEO0lBSUksa0NBQVksR0FBWSxFQUFFLHFCQUE2QztRQUF2RSxpQkFHQztRQU5PLGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBb0M5QixtQkFBYyxHQUFHLFVBQUMsQ0FBVzs7O1lBQ2pDLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFvQixDQUFDO1lBRXRDLFdBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxXQUFJLE1BQU0sRUFBRTtZQUVoQyxXQUFJLENBQUMscUJBQXFCLCtDQUExQixLQUFJLEVBQXlCLENBQUMsRUFBRTtRQUNwQyxDQUFDLENBQUM7UUF0Q0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUssZ0RBQWEsR0FBbkIsVUFDSSxPQUF5QixFQUN6QixNQUErQztRQUEvQyw0Q0FBa0MsQ0FBSSxJQUFLLFdBQUksRUFBSixDQUFJOzs7Ozs7d0JBRS9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzt3QkFFckMsY0FBYyxHQUFHLEVBQUUsQ0FBQzs7bUNBQ1gsT0FBTzs7Ozs7Ozt3QkFDWixXQUFTLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxFQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO3dCQUNoQyxVQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1IscUJBQU0sb0NBQWtCLENBQUMsUUFBTSxDQUFDOzt3QkFBbkQsZ0JBQWdCLEdBQUcsU0FBZ0M7d0JBRXpELElBQ0ksQ0FBQyxnQkFBZ0I7NEJBQ2pCLGNBQWMsQ0FBQyxRQUFNLEVBQUUsT0FBSyxDQUFDOzRCQUM3QixNQUFNLENBQUMsUUFBTSxDQUFDLEVBQ2hCOzRCQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUM7eUJBQy9COzs7d0JBVnVDLEVBQUUsQ0FBQzs7Ozs7O3dCQWNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFFckIsc0JBQU8sY0FBYyxFQUFDOzs7O0tBQ3pCO0lBU0wsK0JBQUM7QUFBRCxDQUFDO0FBNUNZLDREQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIckMsZ0dBQXVDO0FBUzFCLGlCQUFTLEdBQUcsc0JBQWEsQ0FBNkIsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q5RSxnR0FBcUQ7QUFFckQsdUVBUWlCO0FBR2pCLDhHQUE2QztBQUM3Qyw4RUFBeUQ7QUFDekQsK0VBQThCO0FBQzlCLHFGQUFrQztBQUNsQyx3SEFBMEQ7QUFFN0MsK0JBQXVCLEdBQUcsNkJBQTZCLENBQUM7QUFFckUsU0FBZ0IsZUFBZSxDQUFDLEdBQVc7SUFDdkMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN2RCxDQUFDO0FBRkQsMENBRUM7QUFrQkQ7SUFBNkIsMkJBQThCO0lBQTNEOztJQVVBLENBQUM7SUFURyx3QkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILG9CQUNJLE9BQUssRUFBRSxxQ0FBbUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFVLElBRTlELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQ0FWNEIsa0JBQVMsR0FVckM7QUFWWSwwQkFBTztBQWtCcEI7SUFBc0IsMkJBQThCO0lBQXBEOztJQWdFQSxDQUFDO0lBL0RHLHdCQUFNLEdBQU47O1FBQ1UsU0FBNkMsSUFBSSxDQUFDLEtBQUssRUFBckQsV0FBVyxtQkFBRSxNQUFNLGNBQUUsaUJBQWlCLHVCQUFlLENBQUM7UUFFOUQsSUFDSSxDQUFDLE1BQU07WUFDUCxXQUFXLEtBQUssWUFBWTtZQUM1QixDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ2YsaUJBQWlCLEtBQUssY0FBYyxFQUN0QztZQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHO1lBQ1YsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNoQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1NBQzdCLENBQUM7UUFFRixPQUFPLENBQ0gsV0FBQyxjQUFjLElBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWiwyREFBMkQ7WUFDM0QsMERBQTBEO1lBQzFELFNBQVMsRUFBQyxzQkFBc0IsRUFDaEMsT0FBSyxFQUFFLHFDQUFtQyxzQkFBYyxFQUFJO1lBRTVELG9CQUNJLE9BQUssRUFBQyx1QkFBdUIsRUFDN0IsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUUzQyxvQkFBSyxPQUFLLEVBQUMsbUNBQW1DO29CQUMxQyxvQkFDSSxLQUFLLEVBQUMsNEJBQTRCLEVBQ2xDLEtBQUssRUFBQyxJQUFJLEVBQ1YsTUFBTSxFQUFDLElBQUksRUFDWCxPQUFPLEVBQUMsV0FBVzt3QkFFbkIscUJBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUNkLE9BQU8sb0JBQ0wsT0FBTyxFQUN0QixDQUFDLEVBQUMsNEtBR2EsR0FDakIsQ0FDQTtvQkFDTCxPQUFPLENBQUMsT0FBTyxJQUFJLG9CQUFLLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxHQUFJO29CQUNqRCxvQkFBSyxPQUFLLEVBQUMseUJBQXlCO3dCQUNoQyx1QkFBSyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBTTt3QkFDakMsc0JBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUssUUFDM0IsT0FBTyxDQUFDLEtBQUs7MkJBQUUsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUNyQixrQkFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsUUFBUSxJQUMxQixDQUFDLENBQUMsS0FBSyxDQUNSLENBQ1AsRUFKd0IsQ0FJeEIsRUFDQyxDQUNKLENBQ0osQ0FDTyxDQUNwQixDQUFDO0lBQ04sQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBaEVxQixrQkFBUyxHQWdFOUI7QUFFRDtJQUFvQix5QkFBcUM7SUFBekQ7O0lBSUEsQ0FBQztJQUhHLHNCQUFNLEdBQU47UUFDSSxPQUFPLG9CQUFLLE9BQUssRUFBQyxlQUFlLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQU8sQ0FBQztJQUNqRSxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0FKbUIsa0JBQVMsR0FJNUI7QUFZRDtJQUE2QixrQ0FHNUI7SUFDRyx3QkFBWSxLQUEwQjs7UUFBdEMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FRZjtRQU5HLElBQU0sV0FBVyxlQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUywwQ0FBRSxLQUFLLENBQUMsR0FBRyxvQ0FBSyxFQUFFLENBQUM7UUFDM0QsV0FBVyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRWpELEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXO1NBQ2QsQ0FBQzs7SUFDTixDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNZLGVBQVcsR0FBSyxJQUFJLENBQUMsS0FBSyxZQUFmLENBQWdCO1FBRW5DLFdBQVcsQ0FBQyxPQUFPLENBQUMsbUJBQVM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDZDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBUztZQUNwQyxlQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQXpDLENBQXlDLENBQzVDLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNVLFNBQStCLElBQUksQ0FBQyxLQUFLLEVBQWhDLFVBQVUsZ0JBQUUsS0FBSyxXQUFlLENBQUM7UUFFaEQsSUFBTSxPQUFPLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRTtZQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUI7UUFFRCxPQUFPLENBQ0gsb0JBQUssS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQ0F0RDRCLGtCQUFTLEdBc0RyQztBQXVCRDtJQUFnQyxzQkFBMkI7SUFDdkQsWUFBWSxLQUFjO1FBQTFCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBS2Y7UUFFRCxrQkFBWSxHQUFHO1lBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFURSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7SUFDTixDQUFDO0lBUUQsc0JBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixVQUFVLGlCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFFLE9BQU8sRUFBQztTQUNsRCxDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsbUJBQU0sR0FBTjtRQUNJLE9BQU8scUJBQVksQ0FDZixXQUFDLGlCQUFRO1lBQ0osSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBRXRDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztZQUUvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFFdkIsQ0FBQyxnQkFBUSxFQUFFLElBQUksQ0FDWixXQUFDLE9BQU8sSUFDSixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDMUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQzVDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQ2pELENBQ0w7WUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQ2pDLFdBQUMsS0FBSyxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUMvQyxDQUNNLEVBQ1gsUUFBUSxDQUFDLElBQUksQ0FDaEIsQ0FBQztJQUNOLENBQUM7SUFFRCw0Q0FBK0IsR0FBL0I7UUFDSSxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFTyxXQUFPLEdBQUssSUFBSSxDQUFDLEtBQUssUUFBZixDQUFnQjtRQUUvQixJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQ3RDLFdBQUM7WUFDRyxRQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUsscUJBQWMsQ0FBQyxLQUFLO2dCQUM1QixDQUFDLENBQUMsSUFBSSxLQUFLLHFCQUFjLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7UUFGbEIsQ0FFa0IsQ0FDekIsQ0FBQyxDQUFDLENBQTJDLENBQUM7UUFFL0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFNLEtBQUssR0FBRztZQUNWLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxjQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDakUsQ0FBQztRQUVGLE9BQU8sV0FBQyxjQUFjLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO0lBQzVDLENBQUM7SUFFRCx5QkFBWSxHQUFaLFVBQWEsTUFBd0I7O1FBQ2pDLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxDQUNILFdBQUMsV0FBSSxJQUNELE1BQU0sRUFBRSxNQUFNLEVBQ2QsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDL0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDN0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FDL0MsQ0FDTCxDQUFDO1lBQ04sS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxNQUFNLFNBQTJDLENBQUM7Z0JBRXRELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxxQkFBYyxDQUFDLEtBQUssRUFBRTtvQkFDdEMsTUFBTSxTQUFHLE1BQU0sQ0FBQyxPQUFPLDBDQUFFLElBQUksQ0FHekIsVUFDSSxNQUFvQjt3QkFFcEIsYUFBTSxDQUFDLElBQUksS0FBSyx5QkFBeUI7b0JBQXpDLENBQXlDLENBQ2hELENBQUM7aUJBQ0w7Z0JBRUQsT0FBTyxDQUNILFdBQUMsZUFBTSxJQUNILE1BQU0sRUFBRSxNQUFNLEVBQ2QsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFDL0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDN0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFDN0MsTUFBTSxFQUFFLE1BQU0sR0FDaEIsQ0FDTCxDQUFDO1lBQ047Z0JBQ0ksT0FBTyxJQUFJLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsNkJBQWdCLEdBQWhCO1FBQUEsaUJBZ0RDO1FBL0NTLFNBSUYsSUFBSSxDQUFDLEtBQUssRUFIVixrQkFBa0IsMEJBQ2xCLGlCQUFpQix5QkFDakIseUJBQXlCLCtCQUNmLENBQUM7UUFFZixJQUFJLFlBQVksS0FBSyxrQkFBa0IsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLHlCQUF5QixNQUFLLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLElBQUksR0FBRTtZQUN2RCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQ0ksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEtBQUsscUJBQWMsQ0FBQyxLQUFLO1lBQ3BELHlCQUF5QixDQUFDLElBQUksS0FBSyxxQkFBYyxDQUFDLE1BQU0sQ0FBQztZQUM3RCxTQUFTLEtBQUsseUJBQXlCLENBQUMsY0FBYyxFQUN4RDtZQUNFLElBQU0sVUFBVSxHQUFHLHlCQUF5QixDQUFDLGNBQWMsQ0FBQztZQUM1RCxjQUFjLEdBQUcsQ0FDYixXQUFDLGNBQWMsSUFDWCxLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FDbEQsQ0FDTCxDQUFDO1NBQ0w7UUFFRCxPQUFPLENBQ0gsV0FBQyxpQkFBUTtZQUNKLGNBQWM7WUFDZixXQUFDLGdDQUFjLElBQ1gsTUFBTSxFQUFFLGlCQUFpQixFQUN6QixTQUFTLEVBQUUsMkJBQWlCO29CQUN4QixLQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLENBQ3BCLENBQUM7Z0JBQ04sQ0FBQyxHQUNILENBQ0ssQ0FDZCxDQUFDO0lBQ04sQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLENBL0srQixrQkFBUyxHQStLeEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdllELFNBQWdCLHFCQUFxQixDQUNqQyxNQUFvQixFQUNwQixVQUEwQztJQUUxQyxJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxLQUFLLFNBQVM7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUNqQztRQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxDQUFDLElBQUksQ0FDUixpQ0FBaUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FDbEUsQ0FBQztJQUVGLFVBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5FLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFsQkQsc0RBa0JDOzs7Ozs7Ozs7Ozs7QUNwQkQsY0FBYyxtQkFBTyxDQUFDLHFNQUFnRztBQUN0SDs7QUFFQTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLElBQVksaUJBRVg7QUFGRCxXQUFZLGlCQUFpQjtJQUN6QixvREFBK0I7QUFDbkMsQ0FBQyxFQUZXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRTVCO0FBTUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBUztJQUM1QyxPQUFPLENBQ0YsSUFBc0IsQ0FBQyxJQUFJLEtBQUssU0FBUztRQUMxQyxpQkFBaUIsQ0FBRSxJQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FDaEUsQ0FBQztBQUNOLENBQUM7QUFMRCx3REFLQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia3VtdWxvc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiEgY2xpcGJvYXJkLWNvcHkuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGdsb2JhbCBET01FeGNlcHRpb24gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGlwYm9hcmRDb3B5XG5cbmZ1bmN0aW9uIG1ha2VFcnJvciAoKSB7XG4gIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCcsICdOb3RBbGxvd2VkRXJyb3InKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5Q2xpcGJvYXJkQXBpICh0ZXh0KSB7XG4gIC8vIFVzZSB0aGUgQXN5bmMgQ2xpcGJvYXJkIEFQSSB3aGVuIGF2YWlsYWJsZS4gUmVxdWlyZXMgYSBzZWN1cmUgYnJvd3NpbmdcbiAgLy8gY29udGV4dCAoaS5lLiBIVFRQUylcbiAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgdGhyb3cgbWFrZUVycm9yKClcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUV4ZWNDb21tYW5kICh0ZXh0KSB7XG4gIC8vIFB1dCB0aGUgdGV4dCB0byBjb3B5IGludG8gYSA8c3Bhbj5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIC8vIFByZXNlcnZlIGNvbnNlY3V0aXZlIHNwYWNlcyBhbmQgbmV3bGluZXNcbiAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSdcbiAgc3Bhbi5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ2F1dG8nXG4gIHNwYW4uc3R5bGUudXNlclNlbGVjdCA9ICdhbGwnXG5cbiAgLy8gQWRkIHRoZSA8c3Bhbj4gdG8gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxuXG4gIC8vIE1ha2UgYSBzZWxlY3Rpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcmFuZ2Ugb2YgdGV4dCBzZWxlY3RlZCBieSB0aGUgdXNlclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3QgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShzcGFuKVxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG5cbiAgLy8gQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuICB0cnkge1xuICAgIHN1Y2Nlc3MgPSB3aW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIENsZWFudXBcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuKVxuICB9XG5cbiAgaWYgKCFzdWNjZXNzKSB0aHJvdyBtYWtlRXJyb3IoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbGlwYm9hcmRDb3B5ICh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUNsaXBib2FyZEFwaSh0ZXh0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAuLi5PdGhlcndpc2UsIHVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgpIGZhbGxiYWNrXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvcHlFeGVjQ29tbWFuZCh0ZXh0KVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIHRocm93IChlcnIyIHx8IGVyciB8fCBtYWtlRXJyb3IoKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIua3VtdWxvcy1yYXRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcHg7IH1cXG4gIC5rdW11bG9zLXJhdGluZyAua3VtdWxvcy1yYXRpbmctc3RhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIgLmt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLWNvdW50IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApOyB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7IH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7IH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtdG9hc3QtaW4tb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlLCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLCAwLCAwKTsgfSB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07IH1cXG4gIC5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtOHB4OyB9XFxuICAua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gICAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7IH1cXG4gICAgLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyO1xcbiAgICAgIHJpZ2h0OiAxMDAlOyB9XFxuICAua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTsgfVxcbiAgICAua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgICAgIGxlZnQ6IDEwMCU7IH1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpOyB9XFxuXFxuLmt1bXVsb3MtcHJvbXB0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAua3VtdWxvcy1wcm9tcHQgKixcXG4gIC5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4gIC5rdW11bG9zLXByb21wdCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogIzU1NTsgfVxcbiAgLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICMyMjI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWZsb3c6IHdyYXA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlOyB9XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiB1bnNldDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsOyB9IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4OyB9XFxuICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwIDAgM3B4IDA7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XFxuXFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfSB9XFxuXFxuLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7IH1cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtcmlnaHQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpOyB9XFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTsgfVxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7IH0gfVxcblxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLWxlZnQge1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIGxlZnQ6IDE1cHg7IH1cXG4gIC5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgcmlnaHQ6IDE1cHg7IH1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5rdW11bG9zLWJlbGw6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxcbiAgLmt1bXVsb3MtYmVsbDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxcbiAgLmt1bXVsb3MtYmVsbCBzdmcge1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1zaGFrZSAwLjRzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cXG4gIC5rdW11bG9zLWJlbGw6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjogNy41JSAwIDAgNy41JTsgfVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTsgfVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuICAua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcbiAgICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlcixcXG4gICAgLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4OyB9XFxuICAgIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIsXFxuICAgIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICB0b3A6IDEyMHB4OyB9IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgb3JkZXI6IDI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50LFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIgaDEsXFxuICAua3VtdWxvcy1hbGVydC1oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvcmRlcjogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwOyB9XFxuXFxuLmt1bXVsb3MtaW5hcHAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cXG5cXG5ib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyXFxuPiAqOm5vdCgua3VtdWxvcy1wcm9tcHQpOm5vdCgua3VtdWxvcy1vdmVybGF5KTpub3QoLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrKSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTsgfVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpOyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMjAwMDsgfVxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAqLFxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAqOmJlZm9yZSxcXG4gIC5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgICAgIG1heC13aWR0aDogNjYwcHg7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDM4JTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyICoge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICAgICAgbWFyZ2luOiA1NXB4IDEuN2VtIDAgMDtcXG4gICAgICBzdHJva2U6IG5vbmU7XFxuICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAgIGZsZXgtc2hyaW5rOiAwOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaW1nIHtcXG4gICAgICB3aWR0aDogNTVweDtcXG4gICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgZmxleC1zaHJpbms6IDA7IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyxcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBwLFxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgICAgIGNvbG9yOiBpbmhlcml0OyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQgcCB7XFxuICAgICAgbWFyZ2luOiAwLjVlbSAwOyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ0MHB4OyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDY3NXB4OyB9XFxuICAua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgICBvcmRlcjogMTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSArIDIxMnB4KTtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHAsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgZCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOlModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIFModGhpcy5wcm9wcyxuKXx8Uyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPUMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpwKHAobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3AobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9cChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpwfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBEKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIEYoKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1DKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBNPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIFQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBqKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe2QobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSksZChzKFQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gSShuLHQpe3JldHVybiBzKGose19fdjpuLGk6dH0pfShGLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxNKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sRi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXAobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LEYucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1GLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtNKG4sZSx0KX0pfTt2YXIgVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLGQobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPSQsbi5uYXRpdmVFdmVudD1ufTt2YXIgcSxHPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxKPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Zm9yKHZhciB1IGluIHI9e30sZSl7dmFyIG89ZVt1XTtcInZhbHVlXCI9PT11JiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09b3x8KFwiZGVmYXVsdFZhbHVlXCI9PT11JiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP3U9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PXUmJiEwPT09bz9vPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KHUpP3U9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KHUrdCkmJiFWKGUudHlwZSk/dT1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3QodSk/dT11LnRvTG93ZXJDYXNlKCk6UC50ZXN0KHUpP3U9dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09byYmKG89dm9pZCAwKSxyW3VdPW8pfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPXAoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPXAoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoRy5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixHKSksbi4kJHR5cGVvZj1XLEomJkoobil9O3ZhciBLPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe0smJksobikscT1uLl9fY307dmFyIFE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBxLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LFg9MSxubj0yLHRuPTMsZW49NCxybj01O2Z1bmN0aW9uIHVuKG4sdCl7cmV0dXJuIHQoKX12YXIgb249XCJvYmplY3RcIj09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3c/cGVyZm9ybWFuY2Uubm93LmJpbmQocGVyZm9ybWFuY2UpOmZ1bmN0aW9uKCl7cmV0dXJuIERhdGUubm93KCl9LGxuPVwiMTYuOC4wXCI7ZnVuY3Rpb24gZm4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGNuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PVd9ZnVuY3Rpb24gYW4obil7cmV0dXJuIGNuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gc24obil7cmV0dXJuISFuLl9fayYmKGQobnVsbCxuKSwhMCl9ZnVuY3Rpb24gaG4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgcG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sdm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpmLHVzZURlYnVnVmFsdWU6Yyx2ZXJzaW9uOlwiMTYuOC4wXCIsQ2hpbGRyZW46ayxyZW5kZXI6eixoeWRyYXRlOkIsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpzbixjcmVhdGVQb3J0YWw6SSxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6Zm4sY2xvbmVFbGVtZW50OmFuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6Y24sZmluZERPTU5vZGU6aG4sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6cG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0OkYsbGF6eTpELF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlF9O2V4cG9ydHtsbiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4seiBhcyByZW5kZXIsQiBhcyBoeWRyYXRlLHNuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsSSBhcyBjcmVhdGVQb3J0YWwsZm4gYXMgY3JlYXRlRmFjdG9yeSxhbiBhcyBjbG9uZUVsZW1lbnQsY24gYXMgaXNWYWxpZEVsZW1lbnQsaG4gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYscG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsdm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLEYgYXMgU3VzcGVuc2VMaXN0LEQgYXMgbGF6eSxRIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELFggYXMgdW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksbm4gYXMgdW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksdG4gYXMgdW5zdGFibGVfTm9ybWFsUHJpb3JpdHksZW4gYXMgdW5zdGFibGVfTG93UHJpb3JpdHkscm4gYXMgdW5zdGFibGVfSWRsZVByaW9yaXR5LHVuIGFzIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxvbiBhcyB1bnN0YWJsZV9ub3d9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQsbyxyPXt9LGY9W10sZT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gcyhuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBhKG4sbCx1KXt2YXIgaSx0LG8scj1hcmd1bWVudHMsZj17fTtmb3IobyBpbiBsKVwia2V5XCI9PW8/aT1sW29dOlwicmVmXCI9PW8/dD1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtpZihudWxsIT11JiYoZi5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IobyBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1uLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHYobixmLGksdCxudWxsKX1mdW5jdGlvbiB2KGwsdSxpLHQsbyl7dmFyIHI9e3R5cGU6bCxwcm9wczp1LGtleTppLHJlZjp0LF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/KytuLl9fdjpvfTtyZXR1cm4gbnVsbCE9bi52bm9kZSYmbi52bm9kZShyKSxyfWZ1bmN0aW9uIGgoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiB5KG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHAobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gZChuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ZChuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9kKG4pOm51bGx9ZnVuY3Rpb24gXyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIF8obil9fWZ1bmN0aW9uIGsobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmdS5wdXNoKGwpJiYhYi5fX3IrK3x8dCE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKHQ9bi5kZWJvdW5jZVJlbmRlcmluZyl8fGkpKGIpfWZ1bmN0aW9uIGIoKXtmb3IodmFyIG47Yi5fX3I9dS5sZW5ndGg7KW49dS5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx1PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9Yyh7fSx0KSkuX192PXQuX192KzEsSShyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ZCh0KTpvLHQuX19oKSxUKHUsdCksdC5fX2UhPW8mJl8odCkpKX0pfWZ1bmN0aW9uIG0obixsLHUsaSx0LG8sZSxjLHMsYSl7dmFyIGgscCxfLGssYixtLHcsQT1pJiZpLl9fa3x8ZixQPUEubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KGs9dS5fX2tbaF09bnVsbD09KGs9bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygaz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBrfHxcIm51bWJlclwiPT10eXBlb2Yga3x8XCJiaWdpbnRcIj09dHlwZW9mIGs/dihudWxsLGssbnVsbCxudWxsLGspOkFycmF5LmlzQXJyYXkoayk/dih5LHtjaGlsZHJlbjprfSxudWxsLG51bGwsbnVsbCk6ay5fX2I+MD92KGsudHlwZSxrLnByb3BzLGsua2V5LG51bGwsay5fX3YpOmspKXtpZihrLl9fPXUsay5fX2I9dS5fX2IrMSxudWxsPT09KF89QVtoXSl8fF8mJmsua2V5PT1fLmtleSYmay50eXBlPT09Xy50eXBlKUFbaF09dm9pZCAwO2Vsc2UgZm9yKHA9MDtwPFA7cCsrKXtpZigoXz1BW3BdKSYmay5rZXk9PV8ua2V5JiZrLnR5cGU9PT1fLnR5cGUpe0FbcF09dm9pZCAwO2JyZWFrfV89bnVsbH1JKG4sayxfPV98fHIsdCxvLGUsYyxzLGEpLGI9ay5fX2UsKHA9ay5yZWYpJiZfLnJlZiE9cCYmKHd8fCh3PVtdKSxfLnJlZiYmdy5wdXNoKF8ucmVmLG51bGwsayksdy5wdXNoKHAsay5fX2N8fGIsaykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGsudHlwZSYmbnVsbCE9ay5fX2smJmsuX19rPT09Xy5fX2s/ay5fX2Q9cz1nKGsscyxuKTpzPXgobixrLF8sQSxiLHMpLGF8fFwib3B0aW9uXCIhPT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZfLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1kKF8pKX1mb3IodS5fX2U9bSxoPVA7aC0tOyludWxsIT1BW2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT1BW2hdLl9fZSYmQVtoXS5fX2U9PXUuX19kJiYodS5fX2Q9ZChpLGgrMSkpLEwoQVtoXSxBW2hdKSk7aWYodylmb3IoaD0wO2g8dy5sZW5ndGg7aCsrKXood1toXSx3WysraF0sd1srK2hdKX1mdW5jdGlvbiBnKG4sbCx1KXt2YXIgaSx0O2ZvcihpPTA7aTxuLl9fay5sZW5ndGg7aSsrKSh0PW4uX19rW2ldKSYmKHQuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudHlwZT9nKHQsbCx1KTp4KHUsdCx0LG4uX19rLHQuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiB3KG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7dyhuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIHgobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQShuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8QyhuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEMobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiBQKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxlLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHxQKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fFAobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP0g6JCxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP0g6JCxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiAkKGwpe3RoaXMubFtsLnR5cGUrITFdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBIKGwpe3RoaXMubFtsLnR5cGUrITBdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiBJKGwsdSxpLHQsbyxyLGYsZSxzKXt2YXIgYSx2LGgsZCxfLGssYixnLHcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihzPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGc9dS5wcm9wcyx3PShhPVAuY29udGV4dFR5cGUpJiZ0W2EuX19jXSx4PWE/dz93LnByb3BzLnZhbHVlOmEuX186dCxpLl9fYz9iPSh2PXUuX19jPWkuX19jKS5fXz12Ll9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBQKGcseCk6KHUuX19jPXY9bmV3IHAoZyx4KSx2LmNvbnN0cnVjdG9yPVAsdi5yZW5kZXI9TSksdyYmdy5zdWIodiksdi5wcm9wcz1nLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9eCx2Ll9fbj10LGg9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJih2Ll9fcz09di5zdGF0ZSYmKHYuX19zPWMoe30sdi5fX3MpKSxjKHYuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGcsdi5fX3MpKSksZD12LnByb3BzLF89di5zdGF0ZSxoKW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZ2Ll9faC5wdXNoKHYuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmchPT1kJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhnLHgpLCF2Ll9fZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoZyx2Ll9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7di5wcm9wcz1nLHYuc3RhdGU9di5fX3MsdS5fX3YhPT1pLl9fdiYmKHYuX19kPSExKSx2Ll9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KTticmVhayBufW51bGwhPXYuY29tcG9uZW50V2lsbFVwZGF0ZSYmdi5jb21wb25lbnRXaWxsVXBkYXRlKGcsdi5fX3MseCksbnVsbCE9di5jb21wb25lbnREaWRVcGRhdGUmJnYuX19oLnB1c2goZnVuY3Rpb24oKXt2LmNvbXBvbmVudERpZFVwZGF0ZShkLF8sayl9KX12LmNvbnRleHQ9eCx2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcywoYT1uLl9fcikmJmEodSksdi5fX2Q9ITEsdi5fX3Y9dSx2Ll9fUD1sLGE9di5yZW5kZXIodi5wcm9wcyx2LnN0YXRlLHYuY29udGV4dCksdi5zdGF0ZT12Ll9fcyxudWxsIT12LmdldENoaWxkQ29udGV4dCYmKHQ9YyhjKHt9LHQpLHYuZ2V0Q2hpbGRDb250ZXh0KCkpKSxofHxudWxsPT12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGQsXykpLEE9bnVsbCE9YSYmYS50eXBlPT09eSYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphLG0obCxBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LG8scixmLGUscyksdi5iYXNlPXUuX19lLHUuX19oPW51bGwsdi5fX2gubGVuZ3RoJiZmLnB1c2godiksYiYmKHYuX19FPXYuX189bnVsbCksdi5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9aihpLl9fZSx1LGksdCxvLHIsZixzKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7dS5fX3Y9bnVsbCwoc3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhcyxyW3IuaW5kZXhPZihlKV09bnVsbCksbi5fX2UobCx1LGkpfX1mdW5jdGlvbiBUKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiBqKG4sbCx1LGksdCxvLGUsYyl7dmFyIGEsdixoLHkscD11LnByb3BzLGQ9bC5wcm9wcyxfPWwudHlwZSxrPTA7aWYoXCJzdmdcIj09PV8mJih0PSEwKSxudWxsIT1vKWZvcig7azxvLmxlbmd0aDtrKyspaWYoKGE9b1trXSkmJihhPT09bnx8KF8/YS5sb2NhbE5hbWU9PV86Mz09YS5ub2RlVHlwZSkpKXtuPWEsb1trXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1fKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPXQ/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixfKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KF8sZC5pcyYmZCksbz1udWxsLGM9ITF9aWYobnVsbD09PV8pcD09PWR8fGMmJm4uZGF0YT09PWR8fChuLmRhdGE9ZCk7ZWxzZXtpZihvPW8mJmYuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpLHY9KHA9dS5wcm9wc3x8cikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcihwPXt9LHk9MDt5PG4uYXR0cmlidXRlcy5sZW5ndGg7eSsrKXBbbi5hdHRyaWJ1dGVzW3ldLm5hbWVdPW4uYXR0cmlidXRlc1t5XS52YWx1ZTsoaHx8dikmJihoJiYodiYmaC5fX2h0bWw9PXYuX19odG1sfHxoLl9faHRtbD09PW4uaW5uZXJIVE1MKXx8KG4uaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9aWYoQShuLGQscCx0LGMpLGgpbC5fX2s9W107ZWxzZSBpZihrPWwucHJvcHMuY2hpbGRyZW4sbShuLEFycmF5LmlzQXJyYXkoayk/azpba10sbCx1LGksdCYmXCJmb3JlaWduT2JqZWN0XCIhPT1fLG8sZSxuLmZpcnN0Q2hpbGQsYyksbnVsbCE9bylmb3Ioaz1vLmxlbmd0aDtrLS07KW51bGwhPW9ba10mJnMob1trXSk7Y3x8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PShrPWQudmFsdWUpJiYoayE9PW4udmFsdWV8fFwicHJvZ3Jlc3NcIj09PV8mJiFrKSYmQyhuLFwidmFsdWVcIixrLHAudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gZCYmdm9pZCAwIT09KGs9ZC5jaGVja2VkKSYmayE9PW4uY2hlY2tlZCYmQyhuLFwiY2hlY2tlZFwiLGsscC5jaGVja2VkLCExKSl9cmV0dXJuIG59ZnVuY3Rpb24geihsLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGw/bCh1KTpsLmN1cnJlbnQ9dX1jYXRjaChsKXtuLl9fZShsLGkpfX1mdW5jdGlvbiBMKGwsdSxpKXt2YXIgdCxvLHI7aWYobi51bm1vdW50JiZuLnVubW91bnQobCksKHQ9bC5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1sLl9fZXx8eih0LG51bGwsdSkpLGl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZXx8KGk9bnVsbCE9KG89bC5fX2UpKSxsLl9fZT1sLl9fZD12b2lkIDAsbnVsbCE9KHQ9bC5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PWwuX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTCh0W3JdLHUsaSk7bnVsbCE9byYmcyhvKX1mdW5jdGlvbiBNKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIE4obCx1LGkpe3ZhciB0LG8sZTtuLl9fJiZuLl9fKGwsdSksbz0odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx1Ll9fayxlPVtdLEkodSxsPSghdCYmaXx8dSkuX19rPWEoeSxudWxsLFtsXSksb3x8cixyLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LCF0JiZpP1tpXTpvP251bGw6dS5maXJzdENoaWxkP2Yuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpOm51bGwsZSwhdCYmaT9pOm8/by5fX2U6dS5maXJzdENoaWxkLHQpLFQoZSxsKX1mdW5jdGlvbiBPKG4sbCl7TihuLGwsTyl9ZnVuY3Rpb24gUyhuLGwsdSl7dmFyIGksdCxvLHI9YXJndW1lbnRzLGY9Yyh7fSxuLnByb3BzKTtmb3IobyBpbiBsKVwia2V5XCI9PW8/aT1sW29dOlwicmVmXCI9PW8/dD1sW29dOmZbb109bFtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLG89MztvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXUucHVzaChyW29dKTtyZXR1cm4gbnVsbCE9dSYmKGYuY2hpbGRyZW49dSksdihuLnR5cGUsZixpfHxuLmtleSx0fHxuLnJlZixudWxsKX1mdW5jdGlvbiBxKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK28rKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGspfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufSxfX3Y6MH0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0scC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9Yyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGMoe30sdSksdGhpcy5wcm9wcykpLG4mJmModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksayh0aGlzKSl9LHAucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxrKHRoaXMpKX0scC5wcm90b3R5cGUucmVuZGVyPXksdT1bXSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGIuX19yPTAsbz0wO2V4cG9ydHtOIGFzIHJlbmRlcixPIGFzIGh5ZHJhdGUsYSBhcyBjcmVhdGVFbGVtZW50LGEgYXMgaCx5IGFzIEZyYWdtZW50LGggYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQscCBhcyBDb21wb25lbnQsUyBhcyBjbG9uZUVsZW1lbnQscSBhcyBjcmVhdGVDb250ZXh0LHcgYXMgdG9DaGlsZEFycmF5LG4gYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5fX2M9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBUKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9dm9pZCAwfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLXJhdGluZy5zY3NzXCIpO1xuY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCAnLi9hcHAtcmF0aW5nLnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZ1Byb3BzIHtcbiAgICBzdGFyczogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFJhdGluZyhwcm9wczogQXBwUmF0aW5nUHJvcHMpIHtcbiAgICBjb25zdCB7IHN0YXJzLCByYXRpbmdDb3VudCB9ID0gcHJvcHM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGFycygpIHtcbiAgICAgICAgY29uc3Qgc3RhckVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJFbHMucHVzaChcbiAgICAgICAgICAgICAgICA8QXBwUmF0aW5nU3RhclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycyA+PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGFycyA8IGkgJiYgc3RhcnMgPiBpIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hhbGYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhckVscztcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLXJhdGluZ1wiIHN0eWxlPXtyYXRpbmdTdHlsZX0+XG4gICAgICAgICAgICB7Y3JlYXRlU3RhcnMoKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3VtdWxvcy1yYXRpbmctY291bnRcIj4oe3Byb3BzLnJhdGluZ0NvdW50fSk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmludGVyZmFjZSBBcHBSYXRpbmdTdGFyUHJvcHMge1xuICAgIHN0YXRlOiAnb24nIHwgJ2hhbGYnIHwgJ29mZic7XG59XG5cbmZ1bmN0aW9uIEFwcFJhdGluZ1N0YXIocHJvcHM6IEFwcFJhdGluZ1N0YXJQcm9wcykge1xuICAgIGxldCBzdGFyRWw7XG5cbiAgICBpZiAocHJvcHMuc3RhdGUgPT09ICdvbicpIHtcbiAgICAgICAgc3RhckVsID0gPHNwYW4+JiM5NzMzOzwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwcm9wcy5zdGF0ZSA9PT0gJ2hhbGYnKSB7XG4gICAgICAgIHN0YXJFbCA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+JiM5NzM0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyXCI+JiM5NzMzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJFbCA9IDxzcGFuPiYjOTczNDs8L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwia3VtdWxvcy1yYXRpbmctc3RhclwiPntzdGFyRWx9PC9kaXY+O1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgUFVTSF9CQVNFX1VSTCwgUHJvcHNPYmplY3QsIGdldEluc3RhbGxJZCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2gsIGF1dGhlZEZldGNoSnNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG50eXBlIEh0dHBNZXRob2QgPSAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbCB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgc3Vic2NyaWJlZDogQm9vbGVhbjtcbiAgICBtZXRhPzogUHJvcHNPYmplY3QgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTcGVjIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgc3Vic2NyaWJlOiBib29sZWFuO1xuICAgIG1ldGE/OiBQcm9wc09iamVjdCB8IG51bGw7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBzaG93SW5Qb3J0YWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWtlU3Vic2NyaXB0aW9uUmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBIdHRwTWV0aG9kLFxuICAgICAgICB1dWlkczogc3RyaW5nW11cbiAgICApOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtQVVNIX0JBU0VfVVJMfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzL3N1YnNjcmlwdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHV1aWRzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2godGhpcy5jb250ZXh0LCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBjaGFubmVscyBnaXZlbiBieSB1bmlxdWUgSURcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnUE9TVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZXMgZnJvbSB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUodXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnREVMRVRFJywgdXVpZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgaW5zdGFsbGF0aW9ucyBjaGFubmVsIHN1YnNjcmlwdGlvbnMgdG8gdGhvc2UgZ2l2ZW4gYnkgdW5pcXVlIElELlxuICAgICAqXG4gICAgICogQW55IG90aGVyIHN1YnNjcmlwdGlvbnMgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIHNldFN1YnNjcmlwdGlvbnModXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnUFVUJywgdXVpZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgb2YgdGhlIGV4aXN0aW5nIGluc3RhbGxhdGlvbidzIGNoYW5uZWwgc3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIGNsZWFyU3Vic2NyaXB0aW9ucygpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN1YnNjcmlwdGlvbnMoW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RzIHRoZSBjaGFubmVscyBhdmFpbGFibGUgdG8gdGhpcyBpbnN0YWxsYXRpb24gYWxvbmcgd2l0aCBzdWJzY3JpcHRpb24gc3RhdHVzXG4gICAgICovXG4gICAgbGlzdENoYW5uZWxzKCk6IFByb21pc2U8Q2hhbm5lbFtdPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtQVVNIX0JBU0VfVVJMfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzYDtcbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbFtdPih0aGlzLmNvbnRleHQsIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwdXNoIGNoYW5uZWwgYW5kIG9wdGlvbmFsbHkgc3Vic2NyaWJlcyB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24uXG4gICAgICpcbiAgICAgKiBOYW1lIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgaWYgc2hvd0luUG9ydGFsIGlzIHRydWUuXG4gICAgICovXG4gICAgY3JlYXRlQ2hhbm5lbChjaGFubmVsU3BlYzogQ2hhbm5lbFNwZWMpOiBQcm9taXNlPENoYW5uZWw+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsICYmXG4gICAgICAgICAgICAoIWNoYW5uZWxTcGVjLm5hbWUgfHwgIWNoYW5uZWxTcGVjLm5hbWUubGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICdOYW1lIGlzIHJlcXVpcmVkIGZvciBjaGFubmVsIGNyZWF0aW9uIHdoZW4gc2hvd0luUG9ydGFsIGlzIHRydWUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtQVVNIX0JBU0VfVVJMfS92MS9jaGFubmVsc2A7XG5cbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdXVpZDogY2hhbm5lbFNwZWMudXVpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBjaGFubmVsU3BlYy5uYW1lLFxuICAgICAgICAgICAgICAgIHNob3dJblBvcnRhbDogQm9vbGVhbihjaGFubmVsU3BlYy5zaG93SW5Qb3J0YWwpLFxuICAgICAgICAgICAgICAgIG1ldGE6IGNoYW5uZWxTcGVjLm1ldGEsXG4gICAgICAgICAgICAgICAgaW5zdGFsbElkOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChjaGFubmVsU3BlYy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAocGFyYW1zIGFzIGFueSkuaW5zdGFsbElkID0gaW5zdGFsbElkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbD4odGhpcy5jb250ZXh0LCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgUFVTSF9CQVNFX1VSTCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgRERMX0JBU0VfVVJMLFxuICAgIGdldEluc3RhbGxJZFxufSBmcm9tICcuJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdldENhY2hlS2V5cyA9IChrZXk6IHN0cmluZykgPT4gKHtcbiAgICBDT05GSUdfQ0FDSEVfS0VZOiBgJHtrZXl9Q29uZmlnYCxcbiAgICBDT05GSUdfQ0FDSEVfS0VZX1VQREFURUQ6IGAke2tleX1Db25maWdVcGRhdGVkYFxufSk7XG5cbmNvbnN0IE1BWF9DQUNIRV9BR0VfTVMgPSAxICogNjAgKiA2MCAqIDEwMDA7XG5cbmVudW0gQ29uZmlnQ2FjaGVUeXBlIHtcbiAgICBQTEFURk9STSA9ICdwbGF0Zm9ybScsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZzxUQ29uZmlnVHlwZT4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FjaGVLZXk6IHN0cmluZyxcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8VENvbmZpZ1R5cGU+IHtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBnZXRDYWNoZUtleXMoY2FjaGVLZXkpO1xuICAgIGxldCBjb25maWcgPSBhd2FpdCBnZXQ8VENvbmZpZ1R5cGU+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGNvbnN0IGxhc3RMb2FkVGltZSA9IChhd2FpdCBnZXQ8bnVtYmVyPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVEKSkgPz8gMDtcbiAgICBsZXQgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IGZhbHNlO1xuXG4gICAgaWYgKERhdGUubm93KCkgLSBsYXN0TG9hZFRpbWUgPiBNQVhfQ0FDSEVfQUdFX01TKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnQ29uZmlnIG5ldmVyIHN5bmNlZC9zdGFsZSwgc3luY2luZyBub3cuLi4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uZmlnID0gYXdhaXQgYXV0aGVkRmV0Y2hKc29uPFRDb25maWdUeXBlPihjdHgsIHVybCk7XG4gICAgICAgICAgICB1cGRhdGVkUmVtb3RlQ29uZmlnID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgLy8gTm9vcCAoZmFsbGJhY2sgdG8gbG9jYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlZFJlbW90ZUNvbmZpZykge1xuICAgICAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVksIGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVELCBEYXRlLm5vdygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXRmb3JtQ29uZmlnKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQbGF0Zm9ybUNvbmZpZz4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIChhd2FpdCBsb2FkQ29uZmlnPFBsYXRmb3JtQ29uZmlnPihcbiAgICAgICAgICAgIGAke1BVU0hfQkFTRV9VUkx9L3YxL3dlYi9jb25maWdgLFxuICAgICAgICAgICAgQ29uZmlnQ2FjaGVUeXBlLlBMQVRGT1JNLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICkpID8/IHt9XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZGxDb25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPERkbFByb21wdENvbmZpZ1tdIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3Qgd2ViSW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgbG9hZENvbmZpZzxEZGxQcm9tcHRDb25maWdbXT4oXG4gICAgICAgICAgICBgJHtERExfQkFTRV9VUkx9L3YxL2Jhbm5lcnM/d2ViSW5zdGFsbElkPSR7d2ViSW5zdGFsbElkfWAsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuRERMLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBsb2FkRGRsQ29uZmlnOiBmYWlsZWQgdG8gbG9hZCBEZWZlcnJlZCBEZWVwTGluayBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIGVyci5tZXNzYWdlXG4gICAgICAgICk7XG4gICAgICAgIC8vIHVuZGVmaW5lZCByZXR1cm4gLyBubyBjb25maWdcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGUoYmFubmVyVXVpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKENvbmZpZ0NhY2hlVHlwZS5EREwpO1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBhd2FpdCBnZXQ8RGRsUHJvbXB0Q29uZmlnW10+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncyA9IGNvbmZpZ3MuZmlsdGVyKGMgPT4gYy51dWlkICE9PSBiYW5uZXJVdWlkKTtcblxuICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlncyk7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4vY2hhbm5lbHMnO1xuXG5jb25zdCBTREtfVkVSU0lPTiA9ICcxLjEwLjAnO1xuY29uc3QgU0RLX1RZUEUgPSAxMDtcbmNvbnN0IEVWRU5UU19CQVNFX1VSTCA9ICdodHRwczovL2V2ZW50cy5rdW11bG9zLmNvbSc7XG5leHBvcnQgY29uc3QgUFVTSF9CQVNFX1VSTCA9ICdodHRwczovL3B1c2gua3VtdWxvcy5jb20nO1xuZXhwb3J0IGNvbnN0IERETF9CQVNFX1VSTCA9ICdodHRwczovL2xpbmtzLmt1bXVsb3MuY29tJztcbmV4cG9ydCBjb25zdCBGUF9DQVBUVVJFX1VSTCA9ICdodHRwczovL3BkLmFwcC5kZWxpdmVyeSc7XG5cbi8vIGV4cG9ydCBjb25zdCBQVVNIX0JBU0VfVVJMID0gJ2h0dHA6Ly9wdXNoLmt1bXVsb3MubG9jYWwnO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XG4gICAgTUVTU0FHRV9ERUxJVkVSRUQgPSAnay5tZXNzYWdlLmRlbGl2ZXJlZCcsXG4gICAgTUVTU0FHRV9PUEVORUQgPSAnay5tZXNzYWdlLm9wZW5lZCcsXG4gICAgUFVTSF9SRUdJU1RFUkVEID0gJ2sucHVzaC5kZXZpY2VSZWdpc3RlcmVkJyxcbiAgICBJTlNUQUxMX1RSQUNLRUQgPSAnay5zdGF0cy5pbnN0YWxsVHJhY2tlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVEVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0ZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGlvbkNsZWFyZWQnLFxuICAgIFBBR0VfVklFV0VEID0gJ2sucGFnZVZpZXdlZCdcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0VHlwZU5hbWUge1xuICAgIEJFTEwgPSAnYmVsbCcsXG4gICAgQUxFUlQgPSAnYWxlcnQnLFxuICAgIEJBTk5FUiA9ICdiYW5uZXInLFxuICAgIERETF9CQU5ORVIgPSAnZGRsX2Jhbm5lcidcbn1cblxuLy8gTm90ZSBkdXBsaWNhdGUgJ2luJyB2cyAnSU4nIGR1ZSB0byBtaXNhbGlnbm1lbnQgaW4gc2VydmVyIGNvbmZpZyBhbmQgcHVibGlzaGVkIGRvY3MgZm9yIG1hbnVhbCBjb25maWdcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9yID0gJ2luJyB8ICdJTicgfCAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcbmV4cG9ydCB0eXBlIEZpbHRlclZhbHVlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUHJvcEZpbHRlciA9IFtzdHJpbmcsIEZpbHRlck9wZXJhdG9yLCBGaWx0ZXJWYWx1ZV07XG5cbmludGVyZmFjZSBQcm9tcHRUcmlnZ2VyIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGFmdGVyU2Vjb25kcz86IG51bWJlcjtcbiAgICBmaWx0ZXJzPzogUHJvcEZpbHRlcltdO1xufVxuXG5pbnRlcmZhY2UgUHJvbXB0T3ZlcmxheUNvbmZpZyB7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsaW5rcz86IHsgbGFiZWw6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xuICAgIGNvbG9yczoge1xuICAgICAgICBzaGFkZTogc3RyaW5nO1xuICAgICAgICBzdHJpcDogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnIHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWcge1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uQmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uRmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29uZmlnIHtcbiAgICBsYWJlbHM6IENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWc7XG4gICAgY29sb3JzOiBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWcge1xuICAgIHByZXNlbnRlZFV1aWRzOiBzdHJpbmdbXSB8ICdhbGwnO1xuICAgIGNoZWNrZWRVdWlkczogc3RyaW5nW10gfCAnbm9uZScgfCAnYWxsJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG4gICAgZGlhbG9nQ29uZmlnOiBDaGFubmVsRGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTdWJBY3Rpb24ge1xuICAgIHR5cGU6ICdzdWJzY3JpYmVUb0NoYW5uZWwnO1xuICAgIGNoYW5uZWxVdWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVpQWN0aW9uVHlwZSB7XG4gICAgREVDTElORSA9ICdkZWNsaW5lJyxcbiAgICBSRU1JTkQgPSAncmVtaW5kJyxcbiAgICBERExfT1BFTl9TVE9SRSA9ICdvcGVuU3RvcmUnLFxuICAgIERETF9PUEVOX0RFRVBMSU5LID0gJ29wZW5EZWVwbGluaydcbn1cblxuaW50ZXJmYWNlIERlY2xpbmVQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERUNMSU5FO1xufVxuXG5pbnRlcmZhY2UgUmVtaW5kUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuUkVNSU5EO1xuICAgIGRlbGF5OiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRBY3Rpb24gPVxuICAgIHwgQ2hhbm5lbFN1YkFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uO1xuXG5leHBvcnQgZW51bSBSZW1pbmRlclRpbWVVbml0IHtcbiAgICBIT1VSUyA9ICdob3VycycsXG4gICAgREFZUyA9ICdkYXlzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGltZVVuaXQ6IFJlbWluZGVyVGltZVVuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgZGVjbGluZTogRGVjbGluZVByb21wdEFjdGlvbiB8IFJlbWluZFByb21wdEFjdGlvbjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrQ29uZmlnIHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRQb3NpdGlvbiB7XG4gICAgVE9QX0xFRlQgPSAndG9wLWxlZnQnLFxuICAgIFRPUF9DRU5URVIgPSAndG9wLWNlbnRlcicsXG4gICAgVE9QX1JJR0hUID0gJ3RvcC1yaWdodCcsXG4gICAgQ0VOVEVSX0xFRlQgPSAnY2VudGVyLWxlZnQnLFxuICAgIENFTlRFUiA9ICdjZW50ZXInLFxuICAgIENFTlRFUl9SSUdIVCA9ICdjZW50ZXItcmlnaHQnLFxuICAgIEJPVFRPTV9MRUZUID0gJ2JvdHRvbS1sZWZ0JyxcbiAgICBCT1RUT01fQ0VOVEVSID0gJ2JvdHRvbS1jZW50ZXInLFxuICAgIEJPVFRPTV9SSUdIVCA9ICdib3R0b20tcmlnaHQnLFxuICAgIFRPUCA9ICd0b3AnLFxuICAgIEJPVFRPTSA9ICdib3R0b20nXG59XG5cbmludGVyZmFjZSBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWU7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG4gICAgb3ZlcmxheT86IFByb21wdE92ZXJsYXlDb25maWc7XG4gICAgYWN0aW9ucz86IFByb21wdEFjdGlvbltdO1xufVxuXG5pbnRlcmZhY2UgV2l0aEltYWdlVXJsIHtcbiAgICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBDb25maWcge1xuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBEaWFsb2dMYWJlbENvbmZpZyA9IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb246IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb246IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dMYWJlbENvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nTGFiZWxDb25maWdcbj47XG5cbnR5cGUgRGlhbG9nQ29sb3JDb25maWcgPSB7XG4gICAgZmc6IHN0cmluZztcbiAgICBiZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25GZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25CZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uQmc6IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dDb2xvckNvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nQ29sb3JDb25maWdcbj47XG5cbmludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG59XG5cbi8vIEJFTExcblxudHlwZSBCZWxsTGFiZWxDb25maWcgPSBUb2FzdE1lc3NhZ2UgJiBUb29sdGlwQ29uZmlnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxDb2xvckNvbmZpZyB7XG4gICAgYmVsbDoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbFByb21wdENvbmZpZyBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJFTEw7XG4gICAgbGFiZWxzPzogQmVsbExhYmVsQ29uZmlnO1xuICAgIGNvbG9ycz86IEJlbGxDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uQk9UVE9NX0xFRlQgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT01fUklHSFQ7XG59XG5cbi8vIEFMRVJUXG5cbnR5cGUgQWxlcnRMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEFsZXJ0Q29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkFMRVJUO1xuICAgIGxhYmVsczogQWxlcnRMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEFsZXJ0Q29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkNFTlRFUjtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBCQU5ORVJcblxudHlwZSBCYW5uZXJMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBCYW5uZXJDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPjtcblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CQU5ORVI7XG4gICAgbGFiZWxzOiBCYW5uZXJMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEJhbm5lckNvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT007XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gRERMIEJBTk5FUlxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZyB7XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgcmF0aW5nQ291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBEZGxEaWFsb2dDb2xvckNvbmZpZyA9IERpYWxvZ0NvbG9yQ29uZmlnICYgeyByYXRpbmdGZzogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIE9wZW5TdG9yZVVpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcbnR5cGUgT3BlbkRlZXBMaW5rVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZGxVaUFjdGlvbnMgPSBQcm9tcHRVaUFjdGlvbnMgJiB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGFjY2VwdDogT3BlblN0b3JlVWlBY3Rpb24gfCBPcGVuRGVlcExpbmtVaUFjdGlvbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgRGRsVWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5ERExfQkFOTkVSO1xuICAgIGxhYmVsczogRGlhbG9nTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBEZGxEaWFsb2dDb2xvckNvbmZpZztcbiAgICBhcHBSYXRpbmc/OiBBcHBSYXRpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFB1c2hQcm9tcHRDb25maWcgPVxuICAgIHwgQmVsbFByb21wdENvbmZpZ1xuICAgIHwgQWxlcnRQcm9tcHRDb25maWdcbiAgICB8IEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgRGRsUHJvbXB0Q29uZmlnID0gRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWcgPSBQdXNoUHJvbXB0Q29uZmlnIHwgRGRsUHJvbXB0Q29uZmlnO1xuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnczxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiA9IFJlY29yZDxzdHJpbmcsIFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtQ29uZmlnIHtcbiAgICBwdWJsaWNLZXk6IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIHByb21wdHM/OiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHNhZmFyaVB1c2hJZD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFNES0ZlYXR1cmUge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBzZWNyZXRLZXk6IHN0cmluZztcbiAgICB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICAgIHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gICAgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdFJlbWluZGVyID1cbiAgICB8IHtcbiAgICAgICAgICBkZWNsaW5lZE9uOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCAnc3VwcHJlc3NlZCc7XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF1dGhIZWFkZXI6IHN0cmluZztcbiAgICByZWFkb25seSBzZXJ2aWNlV29ya2VyUGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIHJlYWRvbmx5IGF1dG9SZXN1YnNjcmliZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBmZWF0dXJlczogU0RLRmVhdHVyZVtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBTZGtFdmVudEhhbmRsZXJbXSB9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBjb25maWcuc2VjcmV0S2V5O1xuICAgICAgICB0aGlzLnZhcGlkUHVibGljS2V5ID0gY29uZmlnLnZhcGlkUHVibGljS2V5O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3RoaXMuYXBpS2V5fToke3RoaXMuc2VjcmV0S2V5fWApfWA7XG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclBhdGggPSBjb25maWcuc2VydmljZVdvcmtlclBhdGggPz8gJy93b3JrZXIuanMnO1xuICAgICAgICB0aGlzLnB1c2hQcm9tcHRzID0gY29uZmlnLnB1c2hQcm9tcHRzID8/ICdhdXRvJztcbiAgICAgICAgdGhpcy5hdXRvUmVzdWJzY3JpYmUgPSBjb25maWcuYXV0b1Jlc3Vic2NyaWJlID8/IHRydWU7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBjb25maWcuZmVhdHVyZXMgPz8gW1NES0ZlYXR1cmUuUFVTSF07XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZShldmVudDogU2RrRXZlbnRUeXBlLCBoYW5kbGVyOiBTZGtFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5pbmRleE9mKGhhbmRsZXIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGV2ZW50OiBTZGtFdmVudFR5cGUsIGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XVtpXSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNGZWF0dXJlKGZlYXR1cmU6IFNES0ZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbJ2FwaUtleScsICdzZWNyZXRLZXknLCAndmFwaWRQdWJsaWNLZXknXTtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcmVxdWlyZWRTdHJpbmdQcm9wcykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ1twcm9wXSAhPT0gJ3N0cmluZycgfHwgY29uZmlnW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgYFJlcXVpcmVkIGNvbmZpZ3VyYXRpb24ga2V5ICcke3Byb3B9JyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICBjb25maWcuc2VydmljZVdvcmtlclBhdGggJiZcbiAgICAgICAgdHlwZW9mIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdzZXJ2aWNlV29ya2VyUGF0aCcgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nIChpZiBzdXBwbGllZClcIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaFJlY2VpdmVkICYmIHR5cGVvZiBjb25maWcub25QdXNoUmVjZWl2ZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnb25QdXNoUmVjZWl2ZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QdXNoT3BlbmVkICYmIHR5cGVvZiBjb25maWcub25QdXNoT3BlbmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaE9wZW5lZCcgbXVzdCBiZSBhIGZ1bmN0aW9uXCI7XG4gICAgfVxufVxuXG5sZXQgaW5zdGFsbElkUHJvbWlzZTogUHJvbWlzZTxJbnN0YWxsSWQ+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8SW5zdGFsbElkPiB7XG4gICAgaWYgKGluc3RhbGxJZFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG4gICAgfVxuXG4gICAgaW5zdGFsbElkUHJvbWlzZSA9IGdldDxJbnN0YWxsSWQgfCB1bmRlZmluZWQ+KCdpbnN0YWxsSWQnKS50aGVuKFxuICAgICAgICBpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnN0YWxsSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0KCdpbnN0YWxsSWQnLCB1dWlkdjQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsSWQ7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICByZXR1cm4gZ2V0PFVzZXJJZCB8IHVuZGVmaW5lZD4oJ3VzZXJJZCcpLnRoZW4oXG4gICAgICAgIHVzZXJJZCA9PiB1c2VySWQgPz8gZ2V0SW5zdGFsbElkKClcbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzb2NpYXRlVXNlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgaWQ6IFVzZXJJZCxcbiAgICBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHNldCgndXNlcklkJywgaWQpO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRFRCwgcHJvcHMpLnRoZW4oXyA9PiB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclVzZXJBc3NvY2lhdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCwge1xuICAgICAgICBvbGRVc2VySWRlbnRpZmllcjogY3VycmVudFVzZXJJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbCgndXNlcklkJyk7XG59XG5cbmV4cG9ydCB0eXBlIEt1bXVsb3NFdmVudCA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRhdGE/OiBQcm9wc09iamVjdDtcbn07XG5cbmV4cG9ydCB0eXBlIEV2ZW50UGF5bG9hZCA9IEt1bXVsb3NFdmVudFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tFdmVudChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFBheWxvYWQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB1dWlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCB1cmwgPSBgJHtFVkVOVFNfQkFTRV9VUkx9L3YxL2FwcC1pbnN0YWxscy8ke2luc3RhbGxJZH0vZXZlbnRzYDtcblxuICAgIGN0eC5icm9hZGNhc3QoJ2V2ZW50VHJhY2tlZCcsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50cylcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrSW5zdGFsbERldGFpbHMoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICBidW5kbGU6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnLCAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICAgICAgdGFyZ2V0OiAyIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgIH0sXG4gICAgICAgIHNkazoge1xuICAgICAgICAgICAgaWQ6IFNES19UWVBFLFxuICAgICAgICAgICAgdmVyc2lvbjogU0RLX1ZFUlNJT05cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICB2ZXJzaW9uOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgIH0sXG4gICAgICAgIG9zOiB7XG4gICAgICAgICAgICAvLyBEZXRlY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWQgc2VydmVyLXNpZGUgZnJvbSBVQSBkYXRhXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCdcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlOiB7XG4gICAgICAgICAgICAvLyBXaWxsIGJlIGhhbmRsZWQgb24gYmVzdC1lZmZvcnQgYmFzaXMgc2VydmVyLXNpZGVcbiAgICAgICAgICAgIG5hbWU6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICB0ejpcbiAgICAgICAgICAgICAgICB0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgPyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBpc1NpbXVsYXRvcjogZmFsc2UsXG4gICAgICAgICAgICBsb2NhbGU6IG5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc2hQYXJ0cyA9IFtcbiAgICAgICAgU0RLX1ZFUlNJT04sXG4gICAgICAgIHBheWxvYWQuYXBwLmJ1bmRsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UudHosXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLmxvY2FsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubmFtZVxuICAgIF07XG4gICAgY29uc3QgaGFzaCA9IGN5cmI1MyhoYXNoUGFydHMuam9pbignfCcpKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdkZXRhaWxzSGFzaCcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0hhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLklOU1RBTExfVFJBQ0tFRCwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0KCdkZXRhaWxzSGFzaCcsIGhhc2gpKVxuICAgICAgICAudGhlbigoKSA9PiB2b2lkIDApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxMaXN0SXRlbSB7XG4gICAgY2hhbm5lbDogQ2hhbm5lbDtcbiAgICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgIGFsbENoYW5uZWxzOiBDaGFubmVsW10sXG4gICAgc2VsZWN0aW9uQ29uZmlnOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWdcbikge1xuICAgIHJldHVybiBhbGxDaGFubmVsc1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgYyA9PlxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICApXG4gICAgICAgIC5tYXA8Q2hhbm5lbExpc3RJdGVtPihjID0+ICh7XG4gICAgICAgICAgICBjaGFubmVsOiB7IC4uLmMgfSxcbiAgICAgICAgICAgIGNoZWNrZWQ6XG4gICAgICAgICAgICAgICAgYy5zdWJzY3JpYmVkLnZhbHVlT2YoKSB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIH0pKTtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgU2FmYXJpUHVzaE1hbmFnZXIgZnJvbSAnLi9zYWZhcmknO1xuaW1wb3J0IFczY1B1c2hNYW5hZ2VyIGZyb20gJy4vdzNjJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSA9ICdzdWJzY3JpYmVkJyB8ICd1bnN1YnNjcmliZWQnIHwgJ2Jsb2NrZWQnO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIFczQyA9IDMsXG4gICAgU0FGQVJJID0gNFxufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgUFVTSCA9IDEsXG4gICAgSU5BUFAgPSAyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE9wc01hbmFnZXIge1xuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+O1xuICAgIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKGN0eDogQ29udGV4dCk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBpbWFnZVVybD86IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hQYXlsb2FkIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1zZzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgJ2subWVzc2FnZSc6IHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0g7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICAgIHVybDogc3RyaW5nIHwgbnVsbDtcbiAgICBpbWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICBpY29uOiBzdHJpbmcgfCBudWxsO1xufVxuXG5sZXQgbWFuYWdlcjogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFB1c2hPcHNNYW5hZ2VyKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj4ge1xuICAgIGlmIChtYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgPT09ICdzYWZhcmknKSB7XG4gICAgICAgIG1hbmFnZXIgPSBsb2FkUGxhdGZvcm1Db25maWcoY3R4KS50aGVuKFxuICAgICAgICAgICAgY2ZnID0+IG5ldyBTYWZhcmlQdXNoTWFuYWdlcihjZmcpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFuYWdlciA9IFByb21pc2UucmVzb2x2ZShuZXcgVzNjUHVzaE1hbmFnZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja09wZW5Gcm9tUXVlcnkoY3R4OiBDb250ZXh0KSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciAhPT0gJ3NhZmFyaScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcblxuICAgIGlmICghcGFyYW1zPy5bJ2tuaWQnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX09QRU5FRCwge1xuICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNILFxuICAgICAgICBpZDogTnVtYmVyKHBhcmFtc1sna25pZCddKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHsgLi4ucGF5bG9hZC5kYXRhIH07XG4gICAgZGVsZXRlIHVzZXJEYXRhWydrLm1lc3NhZ2UnXTtcblxuICAgIGNvbnN0IHB1c2g6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uID0ge1xuICAgICAgICBpZDogcGF5bG9hZC5kYXRhWydrLm1lc3NhZ2UnXS5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogcGF5bG9hZC50aXRsZSxcbiAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5tc2csXG4gICAgICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgICAgICB1cmw6IHBheWxvYWQudXJsID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaWNvblVybDogcGF5bG9hZC5pY29uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaW1hZ2VVcmw6IHBheWxvYWQuaW1hZ2UgPz8gdW5kZWZpbmVkXG4gICAgfTtcbiAgICByZXR1cm4gcHVzaDtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBFdmVudFR5cGUsXG4gICAgUFVTSF9CQVNFX1VSTCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICB0cmFja0V2ZW50XG59IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGN5cmI1MywgZGVmZXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9wdXNoJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vc2FmYXJpLyR7Y3R4LmFwaUtleX1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5TQUZBUkksXG4gICAgICAgICAgICB0b2tlbjogcGVybS5kZXZpY2VUb2tlbixcbiAgICAgICAgICAgIGJ1bmRsZUlkOiBjZmcuc2FmYXJpUHVzaElkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaFRva2VuSGFzaCcsIHRva2VuSGFzaCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBQdXNoU3Vic2NyaXB0aW9uU3RhdGUsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYmFzZTY0VXJsRW5jb2RlLCBjeXJiNTMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5mdW5jdGlvbiBoYXNTYW1lS2V5KHZhcGlkS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4aXN0aW5nU3ViS2V5ID0gc3Vic2NyaXB0aW9uLm9wdGlvbnMuYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG5cbiAgICBpZiAoIWV4aXN0aW5nU3ViS2V5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJLZXkgPSBiYXNlNjRVcmxFbmNvZGUoZXhpc3RpbmdTdWJLZXkpO1xuXG4gICAgcmV0dXJuIHN1YktleSA9PT0gdmFwaWRLZXk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG5cbiAgICBpZiAoIXdvcmtlclJlZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbn1cblxuZnVuY3Rpb24gaGFzaFN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQsIHN1YjogUHVzaFN1YnNjcmlwdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3N1Yi5lbmRwb2ludH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVzNjUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgYXN5bmMgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ1B1c2ggbm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdTdWIgJiYgIWhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikpIHtcbiAgICAgICAgICAgIGF3YWl0IGV4aXN0aW5nU3ViPy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogY3R4LnZhcGlkUHVibGljS2V5LFxuICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVuZHBvaW50SGFzaCA9IGhhc2hTdWJzY3JpcHRpb24oY3R4LCBzdWIpO1xuICAgICAgICBjb25zdCBleHBpcnkgPSBzdWIuZXhwaXJhdGlvblRpbWU7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBlbmRwb2ludEhhc2ggJiZcbiAgICAgICAgICAgICghZXhpc3RpbmdFeHBpcnkgfHwgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgICAgICB0eXBlOiBUb2tlblR5cGUuVzNDLFxuICAgICAgICAgICAgdG9rZW46IHN1YlxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hFbmRwb2ludEhhc2gnLCBlbmRwb2ludEhhc2gpO1xuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hFeHBpcmVzQXQnLCBleHBpcnkpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPGltcG9ydCgnLicpLlB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gYXdhaXQgdGhpcy5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihjdHgpO1xuXG4gICAgICAgIHN3aXRjaCAocGVybSkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHJlZz8ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKHN1YiAmJiBwZXJtID09PSAnZ3JhbnRlZCcgJiYgaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIHN1YikpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnQXV0by1yZXN1YnNjcmliZTogbm90IGVuYWJsZWQsIGFib3J0aW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gIT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgIGBBdXRvLXJlc3Vic2NyaWJlOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkLCBhYm9ydGluZzogJHtwZXJtfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBsZXQgZXhpc3RpbmdTdWJIYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZXhpc3RpbmdTdWIpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViSGFzaCA9IGhhc2hTdWJzY3JpcHRpb24oY3R4LCBleGlzdGluZ1N1Yik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZXhpc3RpbmdTdWJIYXNoICYmXG4gICAgICAgICAgICBleGlzdGluZ1N1YiAmJlxuICAgICAgICAgICAgaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIGV4aXN0aW5nU3ViKSAmJlxuICAgICAgICAgICAgKGV4aXN0aW5nRXhwaXJ5ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpYmU6IGFscmVhZHkgaGF2ZSBhIG5vbi1leHBpcmVkIGVuZHBvaW50IGhhc2ggZm9yIHNhbWUgc3ViLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IGF0dGVtcHRpbmcgcmVzdWJzY3JpcHRpb24nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHsgb25ET01SZWFkeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RGcmFtZUNvbnRhaW5lciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290RnJhbWUge1xuICAgIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyczogUm9vdEZyYW1lQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9ICdrdW11bG9zLXVpLXJvb3QnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgICBvbkRPTVJlYWR5KCgpID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuZWxlbWVudC5pZCA9IGBrdW11bG9zLXVpLXJvb3QtJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBQcm9tcHRSZW1pbmRlcixcbiAgICBEZGxQcm9tcHRDb25maWdcbn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICAgIHNlY3JldEtleTogY29uZmlnLnNlY3JldEtleSxcbiAgICAgICAgdmFwaWRQdWJsaWNLZXk6IGNvbmZpZy52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgc2VydmljZVdvcmtlclBhdGg6IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCxcbiAgICAgICAgYXV0b1Jlc3Vic2NyaWJlOiBjb25maWcuYXV0b1Jlc3Vic2NyaWJlLFxuICAgICAgICBwdXNoUHJvbXB0czogY29uZmlnLnB1c2hQcm9tcHRzXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0RERMQ29uZmlnKFxuICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnW11cbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10+IHtcbiAgICByZXR1cm4gc2V0PERkbFByb21wdENvbmZpZ1tdPignZGRsY29uZmlnJywgY29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmcsXG4gICAgcmVtaW5kZXI6IFByb21wdFJlbWluZGVyXG4pIHtcbiAgICByZXR1cm4gc2V0KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCwgcmVtaW5kZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nXG4pOiBQcm9taXNlPFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGF3YWl0IGdldDxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4oYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnKCk6IFByb21pc2U8Q29udGV4dCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBnZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycpLnRoZW4oY29uZmlnID0+XG4gICAgICAgIGNvbmZpZyA/IG5ldyBDb250ZXh0KGNvbmZpZykgOiB1bmRlZmluZWRcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdE9wZW5lZFB1c2hQYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBQcm9taXNlPFB1c2hQYXlsb2FkPiB7XG4gICAgcmV0dXJuIHNldCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJywgcGF5bG9hZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCgpOiBQcm9taXNlPFxuICAgIFB1c2hQYXlsb2FkIHwgdW5kZWZpbmVkXG4+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZ2V0PFB1c2hQYXlsb2FkPignbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICBhd2FpdCBkZWwoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQgPz8gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU0RLRmVhdHVyZSB9IGZyb20gJy4vaW5kZXgnO1xuXG50eXBlIEZlYXR1cmVEZXBlbmRlbmN5ID0gc3RyaW5nIHwgb2JqZWN0IHwgSURCRmFjdG9yeSB8IFByb21pc2VDb25zdHJ1Y3RvciB8IE5vdGlmaWNhdGlvbiB8IFB1c2hNYW5hZ2VyIHwgU2VydmljZVdvcmtlckNvbnRhaW5lciB8IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbjtcblxuY29uc3QgQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyA6IEZlYXR1cmVEZXBlbmRlbmN5W10gPSBbdHlwZW9mIFByb21pc2UsIHR5cGVvZiBmZXRjaCwgdHlwZW9mIGluZGV4ZWREQl07XG5cbmNvbnN0IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDSyA6IHtba2V5IGluIFNES0ZlYXR1cmVdOiAoKSA9PiBib29sZWFufSA9IHtcbiAgICAncHVzaCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2gsXG4gICAgJ2RkbCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbFxufTtcblxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oXG4gICAgICAgICAgICBjXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoMWU3KS50b1N0cmluZygpICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoXG4gICAgICAgIC9bMDE4XS9nLFxuICAgICAgICBjID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKGMpIF5cbiAgICAgICAgICAgICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJlxuICAgICAgICAgICAgICAgICAgICAoMTUgPj4gKE51bWJlcihjKSAvIDQpKSlcbiAgICAgICAgICAgICkudG9TdHJpbmcoMTYpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYnJvd3NlcnMgPSBbJ2VkZ2UnLCAnZmlyZWZveCcsICdjaHJvbWUnLCAnc2FmYXJpJ107XG5cbiAgICBmb3IgKGxldCBiIG9mIGJyb3dzZXJzKSB7XG4gICAgICAgIGlmICh1YS5pbmRleE9mKGIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkKHNka0ZlYXR1cmVzPzogU0RLRmVhdHVyZVtdKSB7XG4gICAgc2RrRmVhdHVyZXMgPSBzZGtGZWF0dXJlcyA/PyBbXTtcbiAgICBpZiAoIXNka0ZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICBzZGtGZWF0dXJlcy5wdXNoKFNES0ZlYXR1cmUuUFVTSCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNka0ZlYXR1cmVzLmZpbHRlcihmID0+IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDS1tmXSgpKS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JQdXNoKCkge1xuICAgIGNvbnN0IGNvcmVEZXBlbmRlbmNpZXMgPSBbLi4uQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFU107XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoJ3NhZmFyaScgPT09IGJyb3dzZXIpIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKHR5cGVvZiB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2goXG4gICAgICAgICAgICAuLi5bXG4gICAgICAgICAgICAgICAgdHlwZW9mIE5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIsXG4gICAgICAgICAgICAgICAgdHlwZW9mIFB1c2hNYW5hZ2VyXG4gICAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llcyk7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbCgpIHtcbiAgICByZXR1cm4gY2hlY2tSZXF1aXJlZChDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZXF1aXJlZChjb3JlRGVwZW5kZW5jaWVzOiBGZWF0dXJlRGVwZW5kZW5jeVtdKSB7XG4gICAgcmV0dXJuIGNvcmVEZXBlbmRlbmNpZXMucmVkdWNlKFxuICAgICAgICAoc3VwcG9ydGVkOiBib29sZWFuLCBkZXBlbmRlbmN5OiBGZWF0dXJlRGVwZW5kZW5jeSkgPT4gc3VwcG9ydGVkICYmIGRlcGVuZGVuY3kgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICB0cnVlXG4gICAgKTtcbn1cblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvaW11bFxuY29uc3QgaW11bCA9XG4gICAgTWF0aC5pbXVsIHx8XG4gICAgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBiIHw9IDA7IC8vIGVuc3VyZSB0aGF0IG9wQiBpcyBhbiBpbnRlZ2VyLiBvcEEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvZXJjZWQuXG4gICAgICAgIC8vIGZsb2F0aW5nIHBvaW50cyBnaXZlIHVzIDUzIGJpdHMgb2YgcHJlY2lzaW9uIHRvIHdvcmsgd2l0aCBwbHVzIDEgc2lnbiBiaXRcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBoYW5kbGVkIGZvciBvdXIgY29udmllbmVuY2U6XG4gICAgICAgIC8vIDEuIDB4MDAzZmZmZmYgLypvcEEgJiAweDAwMGZmZmZmKi8gKiAweDdmZmZmZmZmIC8qb3BCKi8gPSAweDFmZmZmZjdmYzAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICB2YXIgcmVzdWx0ID0gKGEgJiAweDAwM2ZmZmZmKSAqIGI7XG4gICAgICAgIC8vIDIuIFdlIGNhbiByZW1vdmUgYW4gaW50ZWdlciBjb2Vyc2lvbiBmcm9tIHRoZSBzdGF0ZW1lbnQgYWJvdmUgYmVjYXVzZTpcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSArIDB4ZmZjMDAwMDAgPSAweDFmZmZmZmZmODAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmZmY4MDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICBpZiAoYSAmIDB4ZmZjMDAwMDAgLyohPT0gMCovKSByZXN1bHQgKz0gKChhICYgMHhmZmMwMDAwMCkgKiBiKSB8IDA7XG4gICAgICAgIHJldHVybiByZXN1bHQgfCAwO1xuICAgIH07XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MjE3MTQ4MFxuZXhwb3J0IGZ1bmN0aW9uIGN5cmI1MyhzdHI6IHN0cmluZywgc2VlZCA9IDApOiBudW1iZXIge1xuICAgIGxldCBoMSA9IDB4ZGVhZGJlZWYgXiBzZWVkLFxuICAgICAgICBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBjaDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoMSA9IGltdWwoaDEgXiBjaCwgMjY1NDQzNTc2MSk7XG4gICAgICAgIGgyID0gaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPVxuICAgICAgICBpbXVsKGgxIF4gKGgxID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMiBeIChoMiA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICBoMiA9XG4gICAgICAgIGltdWwoaDIgXiAoaDIgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgxIF4gKGgxID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnNcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0geyBtZXRob2Q6ICdHRVQnIH1cbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBleGlzdGluZ0hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPz8ge307XG5cbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBjdHguYXV0aEhlYWRlcixcbiAgICAgICAgLi4uZXhpc3RpbmdIZWFkZXJzXG4gICAgfTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVkRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlOiBudW1iZXIsIHN0YXR1c1RleHQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihgYXV0aGVkIGZldGNoIGZhaWxlZDogJHtzdGF0dXNDb2RlfSwgJHtzdGF0dXNUZXh0fWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoSnNvbjxUPihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zPzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwgb3B0aW9ucykudGhlbihyID0+IHtcbiAgICAgICAgaWYgKCFyLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aGVkRmV0Y2hFcnJvcihyLnN0YXR1cywgci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICB9KTtcbn1cblxuLy8gQmFzZWQgb24gdGhlIGFscGhhYmV0cyBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCBUYWJsZXMgMSAmIDJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxFbmNvZGUoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaW50cyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmFzZTY0RW5jb2RlZCA9IGJ0b2EoXG4gICAgICAgIGludHMucmVkdWNlKChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgKTtcbiAgICBjb25zdCB1cmxWYXJpYW50ID0gYmFzZTY0RW5jb2RlZFxuICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC89L2csICcnKTtcblxuICAgIHJldHVybiB1cmxWYXJpYW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ1NlcnZpY2VXb3JrZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihwYXRoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXI8VD4oKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB7XG4gICAgICAgIHJlc29sdmU6IChudWxsIGFzIHVua25vd24pIGFzICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICAgICAgcmVqZWN0OiAobnVsbCBhcyB1bmtub3duKSBhcyAocmVhc29uPzogYW55KSA9PiB2b2lkLFxuICAgICAgICBwcm9taXNlOiAobnVsbCBhcyB1bmtub3duKSBhcyBQcm9taXNlPFQ+XG4gICAgfTtcblxuICAgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKFxuICAgIHFzOiBzdHJpbmcgPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgZXhjbHVkZWRRdWVyeUtleXM6IHN0cmluZ1tdID0gW11cbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQge1xuICAgIGxldCBxdWVyeSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChxcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5ID0gcXNcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAubWFwKHZhcnMgPT4gdmFycy5zcGxpdCgnPScpKVxuICAgICAgICAgICAgLm1hcChwYWlycyA9PiBwYWlycy5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KSlcbiAgICAgICAgICAgIC5maWx0ZXIocGFpcnMgPT4gZXhjbHVkZWRRdWVyeUtleXMuaW5kZXhPZihwYWlyc1swXSkgPT09IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgocSwgcGFpcikgPT4gKHsgLi4ucSwgW3BhaXJbMF1dOiBwYWlyWzFdIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25ET01SZWFkeShmbjogKCkgPT4gdm9pZCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvYW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfG1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHtcbiAgICBDbGllbnRNZXNzYWdlVHlwZSxcbiAgICBIb3N0TWVzc2FnZSxcbiAgICBIb3N0TWVzc2FnZVR5cGUsXG4gICAgRmluZ2VycHJpbnRDb21wb25lbnRzXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRlBfQ0FQVFVSRV9VUkwgfSBmcm9tICcuLi9jb3JlJztcblxuZW51bSBDYXB0dXJlU3RhdGUge1xuICAgIElETEUsXG4gICAgQ0FQVFVSSU5HXG59XG5cbmludGVyZmFjZSBGcENhcHR1cmVQcm9wcyB7XG4gICAgb25DYXB0dXJlZDogKGNvbXBvbmVudHM6IEZpbmdlcnByaW50Q29tcG9uZW50cykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEZwQ2FwdHVyZVN0YXRlIHtcbiAgICBpc1JlYWR5OiBib29sZWFuO1xuICAgIGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcENhcHR1cmUgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRnBDYXB0dXJlUHJvcHMsXG4gICAgRnBDYXB0dXJlU3RhdGVcbj4ge1xuICAgIHByaXZhdGUgaUZyYW1lUmVmOiBSZWZPYmplY3Q8SFRNTElGcmFtZUVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZwQ2FwdHVyZVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmlGcmFtZVJlZiA9IGNyZWF0ZVJlZjxIVE1MSUZyYW1lRWxlbWVudD4oKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5JRExFXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKF86IEZwQ2FwdHVyZVByb3BzLCBuZXh0U3RhdGU6IEZwQ2FwdHVyZVN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHsgaXNSZWFkeSwgY2FwdHVyZVN0YXRlIH0gPSBuZXh0U3RhdGU7XG4gICAgICAgIGNvbnN0IHByZXZDYXB0dXJlU3RhdGUgPSB0aGlzLnN0YXRlLmNhcHR1cmVTdGF0ZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1JlYWR5ICYmXG4gICAgICAgICAgICBjYXB0dXJlU3RhdGUgPT09IENhcHR1cmVTdGF0ZS5DQVBUVVJJTkcgJiZcbiAgICAgICAgICAgIHByZXZDYXB0dXJlU3RhdGUgPT09IENhcHR1cmVTdGF0ZS5JRExFXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEhvc3RNZXNzYWdlVHlwZS5SRVFVRVNUX0ZJTkdFUlBSSU5UXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0RnAoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhgRnBDYXB1cmU6IHJlcXVlc3RpbmcgZnAgY2FwdHVyZWApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhcHR1cmVTdGF0ZSAhPT0gQ2FwdHVyZVN0YXRlLklETEUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZwQ2FwdHVyZS5yZXF1ZXN0RnA6IGNhcHR1cmVTdGF0ZSBub3QgSURMRScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlLkNBUFRVUklORyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZwQ2FwdXJlOiBtZXNzYWdlICR7ZS5kYXRhLnR5cGV9IHJlY2VpdmVkIGZyb20gJHtlLm9yaWdpbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGUuZGF0YTtcblxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IEZQX0NBUFRVUkVfVVJMKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDbGllbnRNZXNzYWdlVHlwZS5SRUFEWTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZWFkeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TWVzc2FnZVR5cGUuRklOR0VSUFJJTlRfR0VORVJBVEVEOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5JRExFIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhcHR1cmVkKG1lc3NhZ2UuZGF0YS5jb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGRpc3BhdGNoTWVzc2FnZSA9IChtZXNzYWdlOiBIb3N0TWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICBgRnBDYXB1cmU6IGRpc3BhdGNoaW5nICR7bWVzc2FnZS50eXBlfSBtZXNzYWdlIHRvIGNhcHR1cmUgZnJhbWVgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5pRnJhbWVSZWYuY3VycmVudD8uY29udGVudFdpbmRvdztcblxuICAgICAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIEZQX0NBUFRVUkVfVVJMKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pRnJhbWVSZWZ9XG4gICAgICAgICAgICAgICAgc3JjPXtGUF9DQVBUVVJFX1VSTH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMCwgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBERExfQkFTRV9VUkwsIENvbnRleHQsIGdldEluc3RhbGxJZCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2ggfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZENsaWNrUmVxdWVzdChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgYmFubmVyVWlkOiBzdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IEZpbmdlcnByaW50Q29tcG9uZW50c1xuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHVybCA9IGAke0RETF9CQVNFX1VSTH0vdjEvYmFubmVycy8ke2Jhbm5lclVpZH0vdGFwc2A7XG4gICAgY29uc3Qgd2ViSW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG5cbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHdlYkluc3RhbGxJZCxcbiAgICAgICAgICAgIGZpbmdlcnByaW50XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iLCJcbnR5cGUgTWVzc2FnZTxULCBEID0gbmV2ZXI+ID1cbiAgICB8IHtcbiAgICAgICAgdHlwZTogVDtcbiAgICB9XG4gICAgfCB7IHR5cGU6IFQ7IGRhdGE6IEQgfTtcblxuZXhwb3J0IGVudW0gSG9zdE1lc3NhZ2VUeXBlIHtcbiAgICBSRVFVRVNUX0ZJTkdFUlBSSU5UID0gJ1JFUVVFU1RfRklOR0VSUFJJTlQnLFxufVxuXG5leHBvcnQgZW51bSBDbGllbnRNZXNzYWdlVHlwZSB7XG4gICAgUkVBRFkgPSAnUkVBRFknLFxuICAgIEZJTkdFUlBSSU5UX0dFTkVSQVRFRCA9ICdGSU5HRVJQUklOVF9HRU5FUkFURUQnLFxufVxuXG5leHBvcnQgdHlwZSBGaW5nZXJwcmludENvbXBvbmVudHMgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG5leHBvcnQgdHlwZSBIb3N0TWVzc2FnZSA9IE1lc3NhZ2U8SG9zdE1lc3NhZ2VUeXBlLlJFUVVFU1RfRklOR0VSUFJJTlQ+O1xuXG5leHBvcnQgdHlwZSBDbGllbnRNZXNzYWdlID1cbiAgICB8IE1lc3NhZ2U8Q2xpZW50TWVzc2FnZVR5cGUuUkVBRFk+XG4gICAgfCBNZXNzYWdlPFxuICAgICAgICBDbGllbnRNZXNzYWdlVHlwZS5GSU5HRVJQUklOVF9HRU5FUkFURUQsXG4gICAgICAgIHsgY29tcG9uZW50czogRmluZ2VycHJpbnRDb21wb25lbnRzIH1cbiAgICA+O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBJbkFwcERpc3BsYXlQcm94eSBmcm9tICcuL2luLWFwcCc7XG5pbXBvcnQgeyBJbkFwcE1lc3NhZ2VQYXJ0Rm9yUHJldmlldyB9IGZyb20gJy4vc3RydWN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5BcHBEaWFsb2dQcm9wcyB7XG4gICAgbWVzc2FnZVBhcnQ6IEluQXBwTWVzc2FnZVBhcnRGb3JQcmV2aWV3O1xuICAgIG9uTWVzc2FnZUFjdGlvbjogKGFjdGlvbjogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwRGlhbG9nU3RhdGUge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5BcHBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgSW5BcHBEaWFsb2dQcm9wcyxcbiAgICBJbkFwcERpYWxvZ1N0YXRlXG4+IHtcbiAgICBvblJlcXVlc3RDYW5jZWwgPSAoKSA9PiB7fTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLWluYXBwLWNvbnRhaW5lciBrdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3BgO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICA8SW5BcHBEaXNwbGF5UHJveHlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQYXJ0PXt0aGlzLnByb3BzLm1lc3NhZ2VQYXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25NZXNzYWdlQWN0aW9uPXt0aGlzLnByb3BzLm9uTWVzc2FnZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIFJlZk9iamVjdCwgY3JlYXRlUmVmIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgSW5BcHBNZXNzYWdlUGFydEZvclByZXZpZXcgfSBmcm9tICcuL3N0cnVjdHMnO1xuXG5jb25zdCBJTl9BUFBfUkVOREVSX1JVTlRJTUVfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTUzNjcnO1xuXG5pbnRlcmZhY2UgSW5BcHBEaXNwbGF5UHJvcHMge1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgbWVzc2FnZVBhcnQ6IEluQXBwTWVzc2FnZVBhcnRGb3JQcmV2aWV3O1xuICAgIG9uTWVzc2FnZUFjdGlvbjogKGFjdGlvbjogYW55KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSW5BcHBEaXNwbGF5U3RhdGUge1xuICAgIHJlYWR5OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbkFwcERpc3BsYXlQcm94eSBleHRlbmRzIENvbXBvbmVudDxcbiAgICBJbkFwcERpc3BsYXlQcm9wcyxcbiAgICBJbkFwcERpc3BsYXlTdGF0ZVxuPiB7XG4gICAgcHJpdmF0ZSBmcmFtZTogUmVmT2JqZWN0PEhUTUxJRnJhbWVFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJbkFwcERpc3BsYXlQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlYWR5OiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZnJhbWUgPSBjcmVhdGVSZWYoKTtcbiAgICB9XG5cbiAgICBvbk1lc3NhZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhlKTtcblxuICAgICAgICBzd2l0Y2ggKGUuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdSRUFEWSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFWEVDVVRFX0FDVElPTlMnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSBlLmRhdGEuZGF0YT8uYWN0aW9ucyA/PyBbXTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1lc3NhZ2VBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShcbiAgICAgICAgcHJldlByb3BzOiBJbkFwcERpc3BsYXlQcm9wcyxcbiAgICAgICAgcHJldlN0YXRlOiBJbkFwcERpc3BsYXlTdGF0ZVxuICAgICkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcmV2U3RhdGUucmVhZHkgIT09IHRoaXMuc3RhdGUucmVhZHkgJiYgdGhpcy5wcm9wcy5tZXNzYWdlUGFydCkgfHxcbiAgICAgICAgICAgIHByZXZQcm9wcy5tZXNzYWdlUGFydCAhPT0gdGhpcy5wcm9wcy5tZXNzYWdlUGFydFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdFJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZyYW1lLmN1cnJlbnQgfHwgIXRoaXMucHJvcHMubWVzc2FnZVBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygncG9zdGluZyBtZXNzYWdlJywgdGhpcy5wcm9wcy5tZXNzYWdlUGFydC5kYXRhKTtcblxuICAgICAgICB0aGlzLmZyYW1lLmN1cnJlbnQuY29udGVudFdpbmRvdz8ucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1BSRVNFTlRfTUVTU0FHRScsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5tZXNzYWdlUGFydC5kYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyonXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5mcmFtZX1cbiAgICAgICAgICAgICAgICBzcmM9e0lOX0FQUF9SRU5ERVJfUlVOVElNRV9VUkx9XG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC1oZWlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIHJlbmRlciwgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBDb250ZXh0LCBQVVNIX0JBU0VfVVJMLCBnZXRJbnN0YWxsSWQsIGdldFVzZXJJZCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2ggfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IEluQXBwRGlhbG9nIGZyb20gJy4vSW5BcHBEaWFsb2cnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG4vLyB2MS91c2Vycy97dXNlcklkZW50aWZpZXJ9L21lc3NhZ2VzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbkFwcE1lc3NhZ2VNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGluc3RhbGxJZD86IHN0cmluZztcbiAgICBwcml2YXRlIGlzUG9sbGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudE1lc3NhZ2U6IGFueTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXh0OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHJvb3RGcmFtZS5jcmVhdGVDb250YWluZXIoJ2luYXBwJyk7XG4gICAgICAgIHRoaXMuc3RhcnRQb2xsRm9yTWVzc2FnZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHN0YXJ0UG9sbEZvck1lc3NhZ2VzKCkge1xuICAgICAgICB0aGlzLmluc3RhbGxJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgICAgIHNldEludGVydmFsKHRoaXMucG9sbEZvck1lc3NhZ2VzLCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvbGxGb3JNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNQb2xsaW5nIHx8IHRoaXMuY3VycmVudE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQb2xsaW5nID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBhd2FpdCBhdXRoZWRGZXRjaChcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy51cmwoKVxuICAgICAgICAgICAgKS50aGVuKHIgPT4gci5qc29uKCkpO1xuXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEgJiYgbWVzc2FnZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IG1lc3NhZ2VEYXRhWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW5BcHAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGZldGNoIG1lc3NhZ2VzOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuaXNQb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSB1cmwgPSAoKSA9PiBgJHtQVVNIX0JBU0VfVVJMfS92MS91c2Vycy8ke3RoaXMuaW5zdGFsbElkfS9tZXNzYWdlc2A7XG5cbiAgICBwcml2YXRlIHJlbmRlckluQXBwKCkge1xuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jdXJyZW50TWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbkFwcERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VQYXJ0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLklOQVBQLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmN1cnJlbnRNZXNzYWdlLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVzc2FnZUFjdGlvbj17YWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYEluQXBwTWFuYWdlciBoYW5kbGluZyBpbmFwcCBtZXNzYWdlIGFjdGlvbjogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjbG9zZU1lc3NhZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW5BcHAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBDb250ZXh0LFxuICAgIEluc3RhbGxJZCxcbiAgICBQcm9wc09iamVjdCxcbiAgICBVc2VySWQsXG4gICAgYXNzZXJ0Q29uZmlnVmFsaWQsXG4gICAgYXNzb2NpYXRlVXNlcixcbiAgICBjbGVhclVzZXJBc3NvY2lhdGlvbixcbiAgICBnZXRJbnN0YWxsSWQsXG4gICAgZ2V0VXNlcklkLFxuICAgIHRyYWNrRXZlbnQsXG4gICAgdHJhY2tJbnN0YWxsRGV0YWlscyxcbiAgICBTREtGZWF0dXJlXG59IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyBXb3JrZXJNZXNzYWdlVHlwZSwgaXNLdW11bG9zV29ya2VyTWVzc2FnZSB9IGZyb20gJy4vd29ya2VyL21lc3NhZ2luZyc7XG5pbXBvcnQge1xuICAgIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkLFxuICAgIHBlcnNpc3RDb25maWdcbn0gZnJvbSAnLi9jb3JlL3N0b3JhZ2UnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyLCB7XG4gICAgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24sXG4gICAgbm90aWZpY2F0aW9uRnJvbVBheWxvYWQsXG4gICAgdHJhY2tPcGVuRnJvbVF1ZXJ5XG59IGZyb20gJy4vY29yZS9wdXNoJztcblxuaW1wb3J0IHsgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgfSBmcm9tICcuL2NvcmUvY2hhbm5lbHMnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlciB9IGZyb20gJy4vcHJvbXB0cyc7XG5pbXBvcnQgeyByZWdpc3RlclNlcnZpY2VXb3JrZXIsIGlzTW9iaWxlIH0gZnJvbSAnLi9jb3JlL3V0aWxzJztcbmltcG9ydCBSb290RnJhbWUgZnJvbSAnLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IERkbE1hbmFnZXIgZnJvbSAnLi9wcm9tcHRzL2RkbC9tYW5hZ2VyJztcbmltcG9ydCBJbkFwcE1lc3NhZ2VNYW5hZ2VyIGZyb20gJy4vaW5hcHAnO1xuXG5pbnRlcmZhY2UgS3VtdWxvc0NvbmZpZyBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICAgIG9uUHVzaFJlY2VpdmVkPzogKHBheWxvYWQ6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuICAgIG9uUHVzaE9wZW5lZD86IChwYXlsb2FkOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS3VtdWxvcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IEt1bXVsb3NDb25maWc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZVdvcmtlclJlZz86IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj47XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9tcHRNYW5hZ2VyPzogUHJvbXB0TWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRkbE1hbmFnZXI/OiBEZGxNYW5hZ2VyO1xuICAgIHByaXZhdGUgY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI/OiBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RGcmFtZTogUm9vdEZyYW1lO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5BcHBNYW5hZ2VyPzogSW5BcHBNZXNzYWdlTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChjb25maWcpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChjb25maWcpO1xuXG4gICAgICAgIHBlcnNpc3RDb25maWcoY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucm9vdEZyYW1lID0gbmV3IFJvb3RGcmFtZSgpO1xuXG4gICAgICAgIHRoaXMuaW5BcHBNYW5hZ2VyID0gbmV3IEluQXBwTWVzc2FnZU1hbmFnZXIoXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICB0aGlzLnJvb3RGcmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUmVnID0gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9tcHRNYW5hZ2VyID0gbmV3IFByb21wdE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RnJhbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNGZWF0dXJlKFNES0ZlYXR1cmUuRERMKSkge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAnRGRsTWFuYWdlcjogRERMIGZlYXR1cmUgc3VwcG9ydCBvbmx5IGF2YWlsYWJsZSBvbiBtb2JpbGUgZGV2aWNlcy4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGRsTWFuYWdlciA9IG5ldyBEZGxNYW5hZ2VyKHRoaXMuY29udGV4dCwgdGhpcy5yb290RnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8SW5zdGFsbElkPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcklkZW50aWZpZXIoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICAgICAgcmV0dXJuIGdldFVzZXJJZCgpO1xuICAgIH1cblxuICAgIGFzc29jaWF0ZVVzZXIoaWRlbnRpZmllcjogVXNlcklkLCBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGFzc29jaWF0ZVVzZXIodGhpcy5jb250ZXh0LCBpZGVudGlmaWVyLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBjbGVhclVzZXJBc3NvY2lhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGNsZWFyVXNlckFzc29jaWF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudCh0eXBlOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2tFdmVudCh0aGlzLmNvbnRleHQsIHR5cGUsIHByb3BlcnRpZXMpLnRoZW4oXyA9PiB2b2lkIDApO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgbWdyID0gYXdhaXQgZ2V0UHVzaE9wc01hbmFnZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gbWdyXG4gICAgICAgICAgICAucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24odGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgLnRoZW4ocGVybSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCdncmFudGVkJyAhPT0gcGVybSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9uIHBlcm1pc3Npb24gbm90IGdyYW50ZWQnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWdyLnB1c2hSZWdpc3Rlcih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTogQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgPSBuZXcgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldvcmtlck1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChlLmRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHVzaCA9IG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKGUuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vblB1c2hSZWNlaXZlZD8uKHB1c2gpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBhc3luYyBtYXliZUZpcmVPcGVuZWRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQoKTtcbiAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwdXNoID0gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQocGF5bG9hZCk7XG5cbiAgICAgICAgdGhpcy5jb25maWcub25QdXNoT3BlbmVkPy4ocHVzaCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEJlbGxQcm9tcHRDb25maWcgfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xuaW1wb3J0IHsgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUwsIGludmVyc2VQb3NpdGlvbiwgUHJvbXB0VWlQcm9wcywgVG9vbHRpcCB9IGZyb20gXCIuLi91aVwiO1xuXG5leHBvcnQgY2xhc3MgQmVsbCBleHRlbmRzIENvbXBvbmVudDxQcm9tcHRVaVByb3BzPEJlbGxQcm9tcHRDb25maWc+LCBuZXZlcj4ge1xuICBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWQodGhpcy5wcm9wcy5jb25maWcpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1wcm9tcHQtJHt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX0ga3VtdWxvcy1iZWxsLWNvbnRhaW5lciBrdW11bG9zLWJlbGwtY29udGFpbmVyLSR7dGhpcy5wcm9wcy5jb25maWcucG9zaXRpb259YDtcbiAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB0b29sdGlwUG9zID0gaW52ZXJzZVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7XG4gICAgICBjb25zdCBiZ0NvbG9yID0gY29uZmlnLmNvbG9ycz8uYmVsbD8uYmc7XG4gICAgICBjb25zdCBmZ0NvbG9yID0gY29uZmlnLmNvbG9ycz8uYmVsbD8uZmc7XG5cbiAgICAgIGNvbnN0IGJlbGxTdHlsZSA9IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogZmdDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3JcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzcz17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJlbGwtaW5uZXIga3VtdWxvcy10b29sdGlwLXBhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1iZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVxdWVzdE5hdGl2ZVByb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YmVsbFN0eWxlIGFzIGFueX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDIyYzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjg5IDIgMiAyem02LTZ2LTVjMC0zLjA3LTEuNjQtNS42NC00LjUtNi4zMlY0YzAtLjgzLS42Ny0xLjUtMS41LTEuNXMtMS41LjY3LTEuNSAxLjV2LjY4QzcuNjMgNS4zNiA2IDcuOTIgNiAxMXY1bC0yIDJ2MWgxNnYtMWwtMi0yelwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtmZ0NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwb3NpdGlvbj17dG9vbHRpcFBvc30+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5sYWJlbHM/LnRvb2x0aXA/LnN1YnNjcmliZSA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICBERUZBVUxUX1NVQlNDUklCRV9MQUJFTH1cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoLCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBEZGxCYW5uZXJQcm9tcHRDb25maWcsIFByb21wdFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgRGVlcGxpbmtCdXR0b24gZnJvbSAnLi9kZWVwbGluay1idXR0b24nO1xuaW1wb3J0IHsgQXBwUmF0aW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcHAtcmF0aW5nJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhbm5lckljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9LFxuICAgIGNsb3NlSWNvblN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgaGVpZ2h0OiAxMlxuICAgIH1cbn07XG5cbmNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2t1bXVsb3MtcHJvbXB0JyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29udGFpbmVyJyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29tcGFjdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0JyxcbiAgICAna3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0J1xuXTtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG4gICAgb25Db25maXJtOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6IChjb25maWc6IERkbEJhbm5lclByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBkaW1lbnNpb25zOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEZGxCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQ8RGRsQmFubmVyUHJvcHMsIG5ldmVyPiB7XG4gICAgcHJpdmF0ZSBjb250YWluZXJSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGRsQmFubmVyUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyUmVmID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcblxuICAgICAgICB0aGlzLnByb3BzLmRpbWVuc2lvbnMoY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0Q3NzQ2xhc3Nlcyhwcm9tcHRQb3NpdGlvbjogUHJvbXB0UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsuLi5DTEFTU0VTLCBga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHtwcm9tcHRQb3NpdGlvbn1gXTtcblxuICAgICAgICBpZiAoW1Byb21wdFBvc2l0aW9uLlRPUCwgUHJvbXB0UG9zaXRpb24uQk9UVE9NXS5pbmNsdWRlcyhwcm9tcHRQb3NpdGlvbikpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChga3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLSR7cHJvbXB0UG9zaXRpb259YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGNvbG9ycyxcbiAgICAgICAgICAgIGltYWdlVXJsLFxuICAgICAgICAgICAgYXBwUmF0aW5nXG4gICAgICAgIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgYWNjZXB0QWN0aW9uIH0gPSBsYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkZnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkZnLFxuICAgICAgICAgICAgcmF0aW5nRmdcbiAgICAgICAgfSA9IGNvbG9ycztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDc3NDbGFzc2VzKHBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWNsaW5lQWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY3Rpb25TdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogYWNjZXB0QWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYW5uZXJJY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuYmFubmVySWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzPXtjbGFzc2VzfSByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGVjbGluZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2FuY2VsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJiMxMDAwNjtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJJY29uU3R5bGV9IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItaWNvblwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYm9keVwiPntib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YXBwUmF0aW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdDb3VudD17YXBwUmF0aW5nLnJhdGluZ0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzPXthcHBSYXRpbmcucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyYXRpbmdGZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8RGVlcGxpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEFjdGlvbnM9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgY29weSBmcm9tICdjbGlwYm9hcmQtY29weSc7XG5pbXBvcnQgeyBEZGxVaUFjdGlvbnMsIFVpQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbnRlcmZhY2UgRGVlcGxpbmtCdXR0b25Qcm9wcyB7XG4gICAgc3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcHJvbXB0QWN0aW9uczogRGRsVWlBY3Rpb25zO1xuICAgIG9uQWN0aW9uOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWVwbGlua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudDxcbiAgICBEZWVwbGlua0J1dHRvblByb3BzLFxuICAgIG5ldmVyXG4+IHtcbiAgICBwcml2YXRlIGhhbmRsZUFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdWlBY3Rpb25zOiB7IGFjY2VwdCB9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzLnByb21wdEFjdGlvbnM7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgY29weShhY2NlcHQuZGVlcExpbmtVcmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHRoaXMucHJvcHMub25BY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuYWJsZSB0byBjYXB0dXJlIGRlZXBsaW5rIHVybCBmb3IgZGVmZXJyZWQgYXBwIHBpY2t1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgSGFuZGxlIERlZXBMaW5rIEFjdGlvbjogdW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlICcke2FjY2VwdFsndHlwZSddfSdgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzOiBjc3NDbGFzcywgdGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y3NzQ2xhc3N9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVBY3Rpb259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFNka0V2ZW50XG59IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHtcbiAgICBsb2FkRGRsQ29uZmlnLFxuICAgIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZVxufSBmcm9tICcuLi8uLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciwgaXNQcm9tcHRTdXBwcmVzc2VkIH0gZnJvbSAnLi4vcHJvbXB0LXJlbWluZGVyJztcbmltcG9ydCB7IGRlZmVyUHJvbXB0QWN0aXZhdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHNlbmRDbGlja1JlcXVlc3QgfSBmcm9tICcuLi8uLi9mcCc7XG5pbXBvcnQgeyBGaW5nZXJwcmludENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9mcC90eXBlcyc7XG5pbXBvcnQgeyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXIgfSBmcm9tICcuLi90cmlnZ2Vycyc7XG5cbmV4cG9ydCBlbnVtIERkbE1hbmFnZXJTdGF0ZSB7XG4gICAgTE9BRElORyA9ICdsb2FkaW5nJyxcbiAgICBSRUFEWSA9ICdyZWFkeSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGRsTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGRsQ29udGFpbmVyOiBSb290RnJhbWVDb250YWluZXI7XG4gICAgcHJpdmF0ZSBjb25maWc/OiBSZWNvcmQ8c3RyaW5nLCBEZGxQcm9tcHRDb25maWc+O1xuICAgIHByaXZhdGUgYWN0aXZlQ29uZmlncz86IERkbFByb21wdENvbmZpZ1tdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmlnZ2VyRmlsdGVyOiBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8RGRsUHJvbXB0Q29uZmlnPjtcblxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgcm9vdEZyYW1lOiBSb290RnJhbWUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdEZGxNYW5hZ2VyOiBpbml0aWFsaXNpbmcnKTtcblxuICAgICAgICB0aGlzLmRkbENvbnRhaW5lciA9IHJvb3RGcmFtZS5jcmVhdGVDb250YWluZXIoJ2RkbCcpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyRmlsdGVyID0gbmV3IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxEZGxQcm9tcHRDb25maWc+KFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgKF86IFNka0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb25maWdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLkxPQURJTkcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CYW5uZXJDb25maXJtID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IERkbFByb21wdENvbmZpZyxcbiAgICAgICAgY29tcG9uZW50cz86IEZpbmdlcnByaW50Q29tcG9uZW50c1xuICAgICkgPT4ge1xuICAgICAgICBpZiAoISFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kQ2xpY2tSZXF1ZXN0KHRoaXMuY29udGV4dCwgcHJvbXB0LnV1aWQsIGNvbXBvbmVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgZGVsZXRlRGRsQmFubmVyQ29uZmlnRnJvbUNhY2hlKHByb21wdC51dWlkKTtcblxuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICB0aGlzLnBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbihwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ2FuY2VsbGVkID0gKHByb21wdDogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdCk7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBEZGxQcm9tcHRDb25maWcpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVDb25maWdzID0gdGhpcy5hY3RpdmVDb25maWdzPy5maWx0ZXIoXG4gICAgICAgICAgICBjID0+IGMudXVpZCAhPT0gcHJvbXB0LnV1aWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuUkVBRFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvbiA9IGNvbmZpZy51aUFjdGlvbnMuYWNjZXB0O1xuXG4gICAgICAgIHN3aXRjaCAoYWNjZXB0QWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFOlxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWNjZXB0QWN0aW9uLnVybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LOlxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWNjZXB0QWN0aW9uLmRlZXBMaW5rVXJsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnRGRsTWFuYWdlci5wZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb246IFVuc3VwcG9ydGVkIGFjY2VwdCBhY3Rpb24gdHlwZSwgdW5hYmxlIHRvIHBlcmZvcm0gcmVkaXJlY3Rpb24nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IERkbE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1NldHRpbmcgRGRsTWFuYWdlciBzdGF0ZTonICsgc3RhdGUpO1xuICAgICAgICB0aGlzLm9uRW50ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25FbnRlcihzdGF0ZTogRGRsTWFuYWdlclN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGRsTWFuYWdlclN0YXRlLkxPQURJTkc6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBhd2FpdCB0aGlzLmxvYWRDb25maWcoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGRsTWFuYWdlclN0YXRlLlJFQURZOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQWN0aXZlQ29uZmlncygpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gdGhpcy5hY3RpdmVDb25maWdzPy5zaGlmdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9tcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWZlclByb21wdEFjdGl2YXRpb24ocHJvbXB0LCB0aGlzLnJlbmRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJvbXB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyID0gKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICAgIDxVaVxuICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0IGFzIERkbFByb21wdENvbmZpZ31cbiAgICAgICAgICAgICAgICBjb250ZXh0PXt0aGlzLmNvbnRleHR9XG4gICAgICAgICAgICAgICAgb25CYW5uZXJDb25maXJtPXt0aGlzLm9uQmFubmVyQ29uZmlybX1cbiAgICAgICAgICAgICAgICBvbkJhbm5lckNhbmNlbGxlZD17dGhpcy5vbkJhbm5lckNhbmNlbGxlZH1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgdGhpcy5kZGxDb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlbmRlckVtcHR5KCkge1xuICAgICAgICByZW5kZXIobnVsbCwgdGhpcy5kZGxDb250YWluZXIuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVBY3RpdmVDb25maWdzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXRjaGVkQ29uZmlncyA9IGF3YWl0IHRoaXMudHJpZ2dlckZpbHRlci5maWx0ZXJQcm9tcHRzKFxuICAgICAgICAgICAgdGhpcy5jb25maWdcbiAgICAgICAgKTtcblxuICAgICAgICBtYXRjaGVkQ29uZmlncy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ29uZmlncz8uaW5kZXhPZihjKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29uZmlncy5wdXNoKGMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRDb25maWcoKTogUHJvbWlzZTxcbiAgICAgICAgUmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPiB8IHVuZGVmaW5lZFxuICAgID4ge1xuICAgICAgICBjb25zdCBjb25maWdzID0gYXdhaXQgbG9hZERkbENvbmZpZyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGNvbmZpZ3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWdzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBEZGxQcm9tcHRDb25maWc+PigoYmFnLCBjKSA9PiB7XG4gICAgICAgICAgICBiYWdbYy51dWlkXSA9IGM7XG4gICAgICAgICAgICByZXR1cm4gYmFnO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoLCBGcmFnbWVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBEZGxQcm9tcHRDb25maWcsIFVpQWN0aW9uVHlwZSwgQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgRGRsQmFubmVyIH0gZnJvbSAnLi9kZGwtYmFubmVyJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHsgUHJvbXB0UG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCBGcENhcHR1cmUgZnJvbSAnLi4vLi4vZnAvZnAtY2FwdHVyZSc7XG5pbXBvcnQgeyBGaW5nZXJwcmludENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9mcC90eXBlcyc7XG5cbmludGVyZmFjZSBVaVByb3BzIHtcbiAgICBjb25maWc6IERkbFByb21wdENvbmZpZztcbiAgICBjb250ZXh0OiBDb250ZXh0O1xuICAgIG9uQmFubmVyQ29uZmlybTogKFxuICAgICAgICBjb25maWc6IERkbFByb21wdENvbmZpZyxcbiAgICAgICAgZmluZ2VycHJpbnRDb21wb25lbnRzPzogRmluZ2VycHJpbnRDb21wb25lbnRzXG4gICAgKSA9PiB2b2lkO1xuICAgIG9uQmFubmVyQ2FuY2VsbGVkOiAoY29uZmlnOiBEZGxQcm9tcHRDb25maWcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBVaVN0YXRlIHtcbiAgICByZXF1ZXN0RnBDYXB0dXJlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaSBleHRlbmRzIENvbXBvbmVudDxVaVByb3BzLCBVaVN0YXRlPiB7XG4gICAgcHJpdmF0ZSBzaXRlTWFyZ2luPzogbnVtYmVyO1xuICAgIHByaXZhdGUgc2l0ZVRyYW5zaXRpb24/OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBmcFJlZjogUmVmT2JqZWN0PEZwQ2FwdHVyZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVWlQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJlcXVlc3RGcENhcHR1cmU6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mcFJlZiA9IGNyZWF0ZVJlZjxGcENhcHR1cmU+KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRpbWVuc2lvbnMgPSAoX2Jhbm5lcldpZHRoOiBudW1iZXIsIGJhbm5lckhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKTtcbiAgICAgICAgdGhpcy5zaXRlTWFyZ2luID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgICAgICA/ICdtYXJnaW4tdG9wJ1xuICAgICAgICAgICAgICAgICAgICA6ICdtYXJnaW4tYm90dG9tJ1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNpdGVUcmFuc2l0aW9uID0gYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24nKTtcblxuICAgICAgICBpZiAoY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uQk9UVE9NKSB7XG4gICAgICAgICAgICBiYW5uZXJIZWlnaHQgKz0gMjA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBiYW5uZXJIZWlnaHQgKyB0aGlzLnNpdGVNYXJnaW47XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwLjM3NXMgZWFzZSAwcyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbXG4gICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICA/ICdtYXJnaW5Ub3AnXG4gICAgICAgICAgICAgICAgOiAnbWFyZ2luQm90dG9tJ1xuICAgICAgICBdID0gYCR7b2Zmc2V0fXB4YDtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNvbmZpcm0gPSAoY29uZmlnOiBEZGxQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uID0gY29uZmlnLnVpQWN0aW9ucy5hY2NlcHQ7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHRBY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgdGhpcy5mcFJlZi5jdXJyZW50Py5yZXF1ZXN0RnAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LOlxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJhbm5lckNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVWkub25CYW5uZXJDb25maXJtOiBVbnN1cHBvcnRlZCBhY2NlcHQgYWN0aW9uIHR5cGUsIHVuYWJsZSB0byBjb25maXJtIGJhbm5lcidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDYW5jZWxsZWQgPSAoY29uZmlnOiBEZGxQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJhbm5lckNhbmNlbGxlZChjb25maWcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQ2FwdHVyZUZwID0gKGNvbXBvbmVudHM6IEZpbmdlcnByaW50Q29tcG9uZW50cykgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQmFubmVyQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZywgY29tcG9uZW50cyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVzZXRCb2R5U3R5bGVzKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zaXRlVHJhbnNpdGlvbiA/PyAnJztcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW1xuICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgPyAnbWFyZ2luVG9wJ1xuICAgICAgICAgICAgICAgIDogJ21hcmdpbkJvdHRvbSdcbiAgICAgICAgXSA9IHRoaXMuc2l0ZU1hcmdpbiA/IGAke3RoaXMuc2l0ZU1hcmdpbn1weGAgOiAnJztcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RGRsQmFubmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5vbkJhbm5lckNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLm9uQmFubmVyQ2FuY2VsbGVkfVxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zPXt0aGlzLm9uRGltZW5zaW9uc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGcENhcHR1cmUgcmVmPXt0aGlzLmZwUmVmfSBvbkNhcHR1cmVkPXt0aGlzLm9uQ2FwdHVyZUZwfSAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7XG4gICAgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24sXG4gICAgZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzLFxuICAgIENoYW5uZWxMaXN0SXRlbVxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFVJQ29udGV4dCwgVUlDb250ZXh0U3RhdGUgfSBmcm9tICcuLi91aS1jb250ZXh0JztcbmltcG9ydCB7IENoYW5uZWxzTGlzdCB9IGZyb20gJy4vY2hhbm5lbHMtbGlzdCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBpY29uU3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsc0RpYWxvZ1Byb3BzIHtcbiAgICBhY3Rpb246IFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uO1xuICAgIG9uQ29uZmlybTogKGNoYW5uZWxTZWxlY3Rpb25zOiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nU3RhdGUge1xuICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxzRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIENoYW5uZWxzRGlhbG9nUHJvcHMsXG4gICAgQ2hhbm5lbERpYWxvZ1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhbm5lbHNEaWFsb2dQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5zdGF0ZS5jaGFubmVsU2VsZWN0aW9ucyk7XG4gICAgfTtcblxuICAgIG9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZCA9IChjaGFubmVsTGlzdDogQ2hhbm5lbExpc3RJdGVtW10pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogWy4uLmNoYW5uZWxMaXN0XVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyRGlhbG9nID0gKHVpQ29udGV4dD86IFVJQ29udGV4dFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHVpQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lciBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke2FjdGlvbi5kaWFsb2dDb25maWcucG9zaXRpb259YDtcblxuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGNvbmZpcm1BY3Rpb24gfSA9IGFjdGlvbi5kaWFsb2dDb25maWcubGFiZWxzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgY29uZmlybUFjdGlvbkJnLFxuICAgICAgICAgICAgY29uZmlybUFjdGlvbkZnXG4gICAgICAgIH0gPSBhY3Rpb24uZGlhbG9nQ29uZmlnLmNvbG9ycztcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb25maXJtQWN0aW9uU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbmZpcm1BY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBjb25maXJtQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuaWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dWlDb250ZXh0Py5wbGF0Zm9ybUNvbmZpZy5pY29uVXJsfSlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbHNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q9e2dldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250ZXh0LmNoYW5uZWxMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi5jaGFubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb25maXJtQWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWFjdGlvbi1idXR0b24ga3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maXJtQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VUlDb250ZXh0LkNvbnN1bWVyPnt0aGlzLnJlbmRlckRpYWxvZ308L1VJQ29udGV4dC5Db25zdW1lcj47XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IENoYW5uZWxMaXN0SXRlbSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQ2hhbm5lbExpc3RQcm9wcyB7XG4gICAgY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdO1xuICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ6IChjaGFubmVsTGlzdDogQ2hhbm5lbExpc3RJdGVtW10pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDaGFubmVsTGlzdFN0YXRlIHtcbiAgICBjaGFubmVsczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0xpc3QgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQ2hhbm5lbExpc3RQcm9wcyxcbiAgICBDaGFubmVsTGlzdFN0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQ2hhbm5lbExpc3RQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5uZWxzOiBbLi4udGhpcy5wcm9wcy5jaGFubmVsTGlzdF1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQodGhpcy5zdGF0ZS5jaGFubmVscyk7XG4gICAgfVxuXG4gICAgb25DaGFubmVsQ2hlY2tDaGFuZ2UoY2hhbm5lbFV1aWQ6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zdGF0ZS5jaGFubmVscy5maW5kKFxuICAgICAgICAgICAgYyA9PiBjLmNoYW5uZWwudXVpZCA9PT0gY2hhbm5lbFV1aWRcbiAgICAgICAgKTtcbiAgICAgICAgaXRlbSEuY2hlY2tlZCA9IGNoZWNrZWQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsczogWy4uLnRoaXMuc3RhdGUuY2hhbm5lbHNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5vbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkKHRoaXMuc3RhdGUuY2hhbm5lbHMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghY2hhbm5lbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2NoYW5uZWxzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uY2hhbm5lbC51dWlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGVja2JveC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGFubmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXRlbS5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogaC5KU1guVGFyZ2V0ZWRFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbm5lbENoZWNrQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGFubmVsLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3VtdWxvcy1jaGVja2JveFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBQcm9tcHRVaVByb3BzIH0gZnJvbSAnLi4vdWknO1xuaW1wb3J0IHtcbiAgICBBbGVydFByb21wdENvbmZpZyxcbiAgICBCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0VHlwZU5hbWUsXG4gICAgZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzLFxuICAgIENoYW5uZWxMaXN0SXRlbVxufSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFVJQ29udGV4dCwgVUlDb250ZXh0U3RhdGUgfSBmcm9tICcuLi91aS1jb250ZXh0JztcbmltcG9ydCB7IENoYW5uZWxzTGlzdCB9IGZyb20gJy4vY2hhbm5lbHMtbGlzdCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBpY29uU3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dTdGF0ZSB7XG4gICAgY2hhbm5lbFNlbGVjdGlvbnM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIFByb21wdFVpUHJvcHM8QWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc+LFxuICAgIERpYWxvZ1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvbXB0VWlQcm9wczxBbGVydFByb21wdENvbmZpZyB8IEJhbm5lclByb21wdENvbmZpZz4pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICApO1xuICAgIH07XG5cbiAgICBvblJlcXVlc3RDYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Qcm9tcHREZWNsaW5lZCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgfTtcblxuICAgIG9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZCA9IChjaGFubmVsTGlzdDogQ2hhbm5lbExpc3RJdGVtW10pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogWy4uLmNoYW5uZWxMaXN0XVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyQWxlcnQgPSAodWlDb250ZXh0PzogVUlDb250ZXh0U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdWlDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnO1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtcHJvbXB0LSR7dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9IGt1bXVsb3MtJHtjb25maWcudHlwZX0tY29udGFpbmVyIGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7Y29uZmlnLnBvc2l0aW9ufWA7XG5cbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBib2R5LCBkZWNsaW5lQWN0aW9uLCBhY2NlcHRBY3Rpb24gfSA9XG4gICAgICAgICAgICBjb25maWcudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlRcbiAgICAgICAgICAgICAgICA/IGNvbmZpZy5sYWJlbHMuYWxlcnRcbiAgICAgICAgICAgICAgICA6IGNvbmZpZy5sYWJlbHMuYmFubmVyO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkZnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH0gPVxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUXG4gICAgICAgICAgICAgICAgPyBjb25maWcuY29sb3JzLmFsZXJ0XG4gICAgICAgICAgICAgICAgOiBjb25maWcuY29sb3JzLmJhbm5lcjtcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWNsaW5lQWN0aW9uU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogYWNjZXB0QWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuaWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y29uZmlnLmltYWdlVXJsfSlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgIHtjb25maWcuaW1hZ2VVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17aWNvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1pY29uYH1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tY29udGVudGB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0taGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1ib2R5YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdD17Z2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlDb250ZXh0LmNoYW5uZWxMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWFjdGlvbnNgfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGVjbGluZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3RDYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZWNsaW5lQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWNjZXB0QWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWFjdGlvbi1idXR0b24ga3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NlcHRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxVSUNvbnRleHQuQ29uc3VtZXI+e3RoaXMucmVuZGVyQWxlcnR9PC9VSUNvbnRleHQuQ29uc3VtZXI+O1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBTZGtFdmVudCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBDaGFubmVsU3ViQWN0aW9uLFxuICAgIFByb21wdEFjdGlvbixcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbixcbiAgICBDaGFubmVsTGlzdEl0ZW0sXG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWdzLFxuICAgIFByb21wdENvbmZpZ1xufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIFB1c2hPcHNNYW5hZ2VyLFxuICAgIFB1c2hTdWJzY3JpcHRpb25TdGF0ZVxufSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4uL2NvcmUvY2hhbm5lbHMnO1xuaW1wb3J0IEt1bXVsb3MgZnJvbSAnLi4nO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi90cmlnZ2Vycyc7XG5pbXBvcnQgeyBVSUNvbnRleHQgfSBmcm9tICcuL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9jb25maWcnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IHsgbWF5YmVQZXJzaXN0UmVtaW5kZXIgfSBmcm9tICcuL3Byb21wdC1yZW1pbmRlcic7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgUHJvbXB0TWFuYWdlclN0YXRlID1cbiAgICB8ICdsb2FkaW5nJ1xuICAgIHwgJ3JlYWR5J1xuICAgIHwgJ3JlcXVlc3RpbmcnXG4gICAgfCAncG9zdGFjdGlvbic7XG5cbi8vIGxvYWRpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHJlcXVlc3Rpbmdcbi8vIHJlcXVlc3RpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHBvc3RhY3Rpb25cbi8vIHBvc3RhY3Rpb24gLT4gcmVhZHlcblxuZXhwb3J0IGNsYXNzIFByb21wdE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkga3VtdWxvc0NsaWVudDogS3VtdWxvcztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwdXNoQ29udGFpbmVyOiBSb290RnJhbWVDb250YWluZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmlnZ2VyRmlsdGVyOiBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8UHVzaFByb21wdENvbmZpZz47XG5cbiAgICBwcml2YXRlIHN0YXRlPzogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uU3RhdGU/OiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJpdmF0ZSBwcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHByaXZhdGUgYWN0aXZlUHJvbXB0czogUHVzaFByb21wdENvbmZpZ1tdO1xuICAgIHByaXZhdGUgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgcHJpdmF0ZSBwdXNoT3BzTWFuYWdlcj86IFB1c2hPcHNNYW5hZ2VyO1xuICAgIHByaXZhdGUgY2hhbm5lbHM6IENoYW5uZWxbXTtcbiAgICBwcml2YXRlIHVpPzogVWk7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUNvbmZpZz86IFBsYXRmb3JtQ29uZmlnO1xuICAgIHByaXZhdGUgY3VycmVudFBvc3RBY3Rpb24/OiBQcm9tcHRBY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IEt1bXVsb3MsIGN0eDogQ29udGV4dCwgcm9vdEZyYW1lOiBSb290RnJhbWUpIHtcbiAgICAgICAgdGhpcy5wcm9tcHRzID0ge307XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cyA9IFtdO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW107XG4gICAgICAgIHRoaXMudHJpZ2dlckZpbHRlciA9IG5ldyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8UHVzaFByb21wdENvbmZpZz4oXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmFja2VkXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wdXNoQ29udGFpbmVyID0gcm9vdEZyYW1lLmNyZWF0ZUNvbnRhaW5lcigncHVzaCcpO1xuICAgICAgICB0aGlzLmt1bXVsb3NDbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdsb2FkaW5nJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkV2ZW50VHJhY2tlZCA9IChlOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1Byb21wdCB0cmlnZ2VyIHNhdyBldmVudCcsIGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVhZHknKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ05vdCByZWFkeSwgd2FpdGluZyBvbiBxdWV1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYWN0aXZhdGVEZWZlcnJlZFByb21wdCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCBhcyBQdXNoUHJvbXB0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSBhc3luYyAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nJyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXI/LnJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0ID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGFjdGlvbjogUHJvbXB0QWN0aW9uXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnICE9PSBhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ID0gcHJvbXB0O1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3N0QWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3Bvc3RhY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblByb21wdEFjY2VwdGVkID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uUmVxdWVzdE5hdGl2ZVByb21wdChwcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVQcm9tcHRBY3Rpb25zKHByb21wdCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICdzdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgdGhpcy51aT8uc2hvd1RvYXN0KHByb21wdC5sYWJlbHM/LnRoYW5rc0ZvclN1YnNjcmliaW5nISk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblBvc3RBY3Rpb25Db25maXJtID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgdGhpcy5oaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qcm9tcHREZWNsaW5lZCA9IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0KTtcbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgeyBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuZm9yRWFjaChwID0+IHRoaXMuaGlkZVByb21wdChwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGlmICghcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnV2lsbCBoYW5kbGUgYWN0aW9uczogJywgcHJvbXB0LmFjdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmt1bXVsb3NDbGllbnQuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IGNoYW5uZWxTdWJNZ3IubGlzdENoYW5uZWxzKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsU3ViQWN0aW9ucyhwcm9tcHQpO1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxDaGFubmVsU3ViQWN0aW9uPihcbiAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdXVpZHNUb1N1YnNjcmliZSA9IGFjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsdG9TdWIgPSB0aGlzLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGMgPT4gYy51dWlkID09PSBhY3Rpb24uY2hhbm5lbFV1aWQgJiYgYy5zdWJzY3JpYmVkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsdG9TdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFVuYWJsZSB0byBzdWJzY3JpYmUgdG8gY2hhbm5lbCAnJHthY3Rpb24uY2hhbm5lbFV1aWR9JyBhcyBpdCBkb2VzIG5vdCBleGlzdGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5jaGFubmVsVXVpZCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5rdW11bG9zQ2xpZW50XG4gICAgICAgICAgICAuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1dWlkc1RvU3Vic2NyaWJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHByb21wdC5hY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwb3N0IGFjdGlvbnMgb25seSBhcHBseSB0byBgdXNlckNoYW5uZWxTZWxlY3REaWFsb2dgIGFjdGlvbnNcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IGV4cGVjdGluZyAxIGNvbmZpZ3VyZWQgYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25cbiAgICAgICAgdGhpcy5vblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0KHByb21wdCwgYWN0aW9uc1swXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsU2VsZWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMua3VtdWxvc0NsaWVudC5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuXG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcyA9IGNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGNzID0+ICFjcy5jaGVja2VkKVxuICAgICAgICAgICAgLm1hcChjcyA9PiBjcy5jaGFubmVsLnV1aWQpO1xuICAgICAgICBhd2FpdCBjaGFubmVsU3ViTWdyLnVuc3Vic2NyaWJlKHVuc3Vic2NyaWJlcyk7XG5cbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlcyA9IGNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGNzID0+IGNzLmNoZWNrZWQpXG4gICAgICAgICAgICAubWFwKGNzID0+IGNzLmNoYW5uZWwudXVpZCk7XG4gICAgICAgIGF3YWl0IGNoYW5uZWxTdWJNZ3Iuc3Vic2NyaWJlKHN1YnNjcmliZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgfHwgIXRoaXMuc3RhdGUgfHwgIXRoaXMucGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICAgIDxVSUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybUNvbmZpZzogdGhpcy5wbGF0Zm9ybUNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q6IHRoaXMuY2hhbm5lbHNcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxVaVxuICAgICAgICAgICAgICAgICAgICByZWY9e3IgPT4gKHRoaXMudWkgPSByKX1cbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0cz17dGhpcy5hY3RpdmVQcm9tcHRzfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBvblByb21wdEFjY2VwdGVkPXt0aGlzLm9uUHJvbXB0QWNjZXB0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0RGVjbGluZWQ9e3RoaXMub25Qcm9tcHREZWNsaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgb25Qb3N0QWN0aW9uQ29uZmlybT17dGhpcy5vblBvc3RBY3Rpb25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PXt0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uPXt0aGlzLmN1cnJlbnRQb3N0QWN0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1VJQ29udGV4dC5Qcm92aWRlcj4sXG4gICAgICAgICAgICB0aGlzLnB1c2hDb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZXZhbHVhdGVUcmlnZ2VycygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLnByb21wdHMsXG4gICAgICAgICAgICBwcm9tcHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0cyhtYXRjaGVkUHJvbXB0cyk7XG4gICAgfVxuXG4gICAgcHJvbXB0QWN0aW9uTmVlZHNUYWtlbihwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxzVG9TdWIgPVxuICAgICAgICAgICAgcHJvbXB0LmFjdGlvbnNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIENoYW5uZWxTdWJBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4gYS5jaGFubmVsVXVpZCkgPz8gW107XG4gICAgICAgIGNvbnN0IG5lZWRzVG9TdWIgPVxuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYyA9PiBjaGFubmVsc1RvU3ViLmluY2x1ZGVzKGMudXVpZCkgJiYgIWMuc3Vic2NyaWJlZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmIChuZWVkc1RvU3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE8gaXMgaWRlbnRpdHkgb2sgZm9yIGNvbXBhcmlzb24gaGVyZS4uLiBtaWdodCBuZWVkIHRvIHVzZSBJRFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMucHVzaChwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHRzKHByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1dpbGwgYWN0aXZhdGUgcHJvbXB0czogJywgcHJvbXB0cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9tcHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5hY3RpdmF0ZURlZmVycmVkUHJvbXB0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1NldHRpbmcgcHJvbXB0IG1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm9uRW50ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25FbnRlcihzdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXIgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXIuaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcm9tcHRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMua3VtdWxvc0NsaWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKVxuICAgICAgICAgICAgICAgICAgICAubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3RpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWFkeSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc3RBY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXI/LmdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV2YWx1YXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zdGFjdGlvbic6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZFByb21wdHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMucGxhdGZvcm1Db25maWcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoIXRoaXMucGxhdGZvcm1Db25maWcucHVibGljS2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBwcm9tcHRzIGNvbmZpZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5wdXNoUHJvbXB0cyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdHMgPSB7IC4uLnRoaXMuY29udGV4dC5wdXNoUHJvbXB0cyB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9tcHRzID0geyAuLi4odGhpcy5wbGF0Zm9ybUNvbmZpZy5wcm9tcHRzIHx8IHt9KSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5wcm9tcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFubmVsT3AgPSBCb29sZWFuKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0c1tpZF0uYWN0aW9ucz8uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBhID0+IGEudHlwZSA9PT0gJ3N1YnNjcmliZVRvQ2hhbm5lbCdcbiAgICAgICAgICAgICAgICApPy5sZW5ndGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChoYXNDaGFubmVsT3ApIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzID0gYXdhaXQgdGhpcy5rdW11bG9zQ2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDaGFubmVscygpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9vcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwZXJzaXN0UHJvbXB0UmVtaW5kZXIsIGdldFByb21wdFJlbWluZGVyIH0gZnJvbSAnLi4vY29yZS9zdG9yYWdlJztcblxuaW1wb3J0IHtcbiAgICBQcm9tcHRVaUFjdGlvbnMsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnLFxuICAgIFJlbWluZGVyVGltZVVuaXRcbn0gZnJvbSAnLi4vY29yZSc7XG5cbmNvbnN0IFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVMgPSB7XG4gICAgW1JlbWluZGVyVGltZVVuaXQuSE9VUlNdOiAxMDAwICogNjAgKiA2MCxcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5EQVlTXTogMTAwMCAqIDYwICogNjAgKiAyNFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdDogUHJvbXB0Q29uZmlnKSB7XG4gICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdCBhcyBQcm9tcHRVaUFjdGlvbnM7XG5cbiAgICBpZiAoIXVpQWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB0eXBlIH0gPSB1aUFjdGlvbnMuZGVjbGluZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5SRU1JTkQ6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCB7XG4gICAgICAgICAgICAgICAgZGVjbGluZWRPbjogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRFQ0xJTkU6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCAnc3VwcHJlc3NlZCcpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgVW5zdXBwb3J0ZWQgZGVjbGluZSBhY3Rpb24gdHlwZSAke3R5cGV9IHN1cHBvcnRlZCBmb3IgcHJvbXB0ICR7cHJvbXB0LnV1aWR9LCBmYWxsIGJhY2sgdG8gYWx3YXlzIHNob3cgdGhpcyBwcm9tcHQgd2hlbiBkZWNsaW5lZGBcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNQcm9tcHRTdXBwcmVzc2VkKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZW1pbmRlciA9IGF3YWl0IGdldFByb21wdFJlbWluZGVyKHByb21wdC51dWlkKTtcblxuICAgIGlmICghcmVtaW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnc3VwcHJlc3NlZCcgPT09IHJlbWluZGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdWlBY3Rpb25zIH0gPSBwcm9tcHQgYXMgUHJvbXB0VWlBY3Rpb25zO1xuXG4gICAgaWYgKHVpQWN0aW9ucy5kZWNsaW5lLnR5cGUgIT09IFVpQWN0aW9uVHlwZS5SRU1JTkQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhaGFzUHJvbXB0UmVtaW5kZXJFbGFwc2VkKFxuICAgICAgICByZW1pbmRlci5kZWNsaW5lZE9uLFxuICAgICAgICB1aUFjdGlvbnMuZGVjbGluZS5kZWxheVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcm9tcHRSZW1pbmRlckVsYXBzZWQoXG4gICAgZGVjbGluZWRPbk1pbGxpczogbnVtYmVyLFxuICAgIGRlbGF5Q29uZmlnOiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnXG4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBEYXRlLm5vdygpIC0gZGVjbGluZWRPbk1pbGxpcyA+XG4gICAgICAgIFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVNbZGVsYXlDb25maWcudGltZVVuaXRdICpcbiAgICAgICAgICAgIGRlbGF5Q29uZmlnLmR1cmF0aW9uXG4gICAgKTtcbn1cbiIsImltcG9ydCB7XG4gICAgRmlsdGVyVmFsdWUsXG4gICAgS3VtdWxvc0V2ZW50LFxuICAgIFByb3BGaWx0ZXIsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdENvbmZpZ3MsXG4gICAgQ29udGV4dCxcbiAgICBTZGtFdmVudCxcbiAgICBFdmVudFBheWxvYWRcbn0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgaXNQcm9tcHRTdXBwcmVzc2VkIH0gZnJvbSAnLi9wcm9tcHQtcmVtaW5kZXInO1xuXG5mdW5jdGlvbiBwcm9wSW4oZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0ZXN0cyA9IGZpbHRlclZhbHVlLm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBgXiR7ZXNjYXBlUmVnRXhwKHYpLnJlcGxhY2UoL1xcXFxcXCovZywgJy4qJyl9JGA7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyTWF0Y2hlZCA9IHRlc3RzLnJlZHVjZShcbiAgICAgICAgICAgIChtYXRjaGVkLCBtYXRjaGVyKSA9PiBtYXRjaGVkIHx8IG1hdGNoZXIudGVzdChTdHJpbmcocHJvcFZhbHVlKSksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJNYXRjaGVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluZGV4T2YocHJvcFZhbHVlIGFzIGFueSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHByb3BFcShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbHRlclZhbHVlID09IHByb3BWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0KGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlID4gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BHdGUoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPj0gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BMdChmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHRlKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlIDw9IGZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlck1hdGNoZWQoXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgZXZlbnQ6IEt1bXVsb3NFdmVudFxuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHByb21wdC50cmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIuZXZlbnQgIT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdHJpZ2dlci5maWx0ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC5kYXRhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyLmZpbHRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgW3Byb3AsIG9wLCBmaWx0ZXJUZXN0VmFsdWVdID0gdHJpZ2dlci5maWx0ZXJzW2ldIGFzIFByb3BGaWx0ZXI7XG5cbiAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gZXZlbnQuZGF0YVtwcm9wXTtcblxuICAgICAgICBsZXQgZmlsdGVyTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIGNhc2UgJ0lOJzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEluKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wRXEoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gZmlsdGVyIG9wZXJhdG9yOiAke29wfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IGFsbFByb3BGaWx0ZXJzTWF0Y2ggJiYgZmlsdGVyTWF0Y2hlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsUHJvcEZpbHRlcnNNYXRjaDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiB7XG4gICAgcHJpdmF0ZSBldmVudFF1ZXVlOiBFdmVudFBheWxvYWQgPSBbXTtcbiAgICBwcml2YXRlIGV2ZW50UmVjZWl2ZWRDYWxsYmFjaz86IChlOiBTZGtFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgZXZlbnRSZWNlaXZlZENhbGxiYWNrPzogKGU6IFNka0V2ZW50KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZXZlbnRSZWNlaXZlZENhbGxiYWNrID0gZXZlbnRSZWNlaXZlZENhbGxiYWNrO1xuICAgICAgICBjdHguc3Vic2NyaWJlKCdldmVudFRyYWNrZWQnLCB0aGlzLmhhbmRsZVNka0V2ZW50KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaWx0ZXJQcm9tcHRzKFxuICAgICAgICBwcm9tcHRzOiBQcm9tcHRDb25maWdzPFQ+LFxuICAgICAgICBmaWx0ZXI6IChwcm9tcHQ6IFQpID0+IGJvb2xlYW4gPSAoXzogVCkgPT4gdHJ1ZVxuICAgICkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0V2YWx1YXRpbmcgcHJvbXB0IHRyaWdnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZFByb21wdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gcHJvbXB0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpZF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdFN1cHByZXNzZWQgPSBhd2FpdCBpc1Byb21wdFN1cHByZXNzZWQocHJvbXB0KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIXByb21wdFN1cHByZXNzZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck1hdGNoZWQocHJvbXB0LCBldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHByb21wdClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFByb21wdHMucHVzaChwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkUHJvbXB0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNka0V2ZW50ID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGUuZGF0YSBhcyBFdmVudFBheWxvYWQ7XG5cbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlLnB1c2goLi4uZXZlbnRzKTtcblxuICAgICAgICB0aGlzLmV2ZW50UmVjZWl2ZWRDYWxsYmFjaz8uKGUpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi4vY29yZS9jaGFubmVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDb250ZXh0U3RhdGUge1xuICAgIHBsYXRmb3JtQ29uZmlnOiBQbGF0Zm9ybUNvbmZpZztcbiAgICBjaGFubmVsTGlzdDogQ2hhbm5lbFtdO1xufVxuXG5leHBvcnQgY29uc3QgVUlDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVSUNvbnRleHRTdGF0ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIGgsIEpTWCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBBbGVydFByb21wdENvbmZpZyxcbiAgICBCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0QWN0aW9uLFxuICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uLFxuICAgIENoYW5uZWxMaXN0SXRlbVxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUsIGlzTW9iaWxlIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBCZWxsIH0gZnJvbSAnLi9iZWxsJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcbmltcG9ydCB7IENoYW5uZWxzRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cvY2hhbm5lbHMtZGlhbG9nJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMID0gJ1N1YnNjcmliZSBmb3Igbm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlUG9zaXRpb24ocG9zOiBzdHJpbmcpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICByZXR1cm4gcG9zLmluZGV4T2YoJ2xlZnQnKSA+IC0xID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRVaVByb3BzPFQgZXh0ZW5kcyBQdXNoUHJvbXB0Q29uZmlnPiB7XG4gICAgY29uZmlnOiBUO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBhY3Rpb24/OiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbjtcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50PFRvb2x0aXBQcm9wcywgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLXRvb2x0aXAga3VtdWxvcy10b29sdGlwLSR7dGhpcy5wcm9wcy5wb3NpdGlvbn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgT3ZlcmxheVByb3BzIHtcbiAgICBwcm9tcHRTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbn1cblxuY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudDxPdmVybGF5UHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZycgfHxcbiAgICAgICAgICAgICFwcm9tcHQub3ZlcmxheSB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0Lm92ZXJsYXk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc2hhZGUsXG4gICAgICAgICAgICBjb2xvcjogb3ZlcmxheS5jb2xvcnMudGV4dFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgLy8gbWFpbnRhaW5zIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBleGlzdGluZyBibHVyIGNsYXNzIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB3YXMgYmVpbmcgYXBwbGllZCBkaXJlY3RseSBieSB0aGlzIGNvbXBvbmVudCBwcmV2aW91c2x5XG4gICAgICAgICAgICAgICAgYmx1ckNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWJsdXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LXN0cmlwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc3RyaXAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NCAzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e292ZXJsYXkuY29sb3JzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjIuNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDEyLjU3LDExLjEyXG4gICAgICAgICAgIEMgMTIuNTcsMTEuMTIgNi44NCwyMC44MiA0LjEzLDIxLjAxXG4gICAgICAgICAgICAgMS40MiwyMS4yMSAyMC43MSwyOC42NyAyNi42MiwyOC42N00gNC4yMywyMS4wMVxuICAgICAgICAgICBDIDQuMjMsMjEuMDEgNTMuOTYsMTQuOTEgNjAuNjUsMy40N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkuaWNvblVybCAmJiA8aW1nIHNyYz17b3ZlcmxheS5pY29uVXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57b3ZlcmxheS5sYWJlbHMuaGVhZGluZ308L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvdmVybGF5LmxhYmVscy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5saW5rcz8ubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0sIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PjtcbiAgICB9XG59XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kTWFza1Byb3BzIHtcbiAgICBjbGFzcz86IHN0cmluZztcbiAgICBibHVyQ2xhc3M/OiBzdHJpbmc7XG4gICAgc3R5bGU/OiBKU1guQ1NTUHJvcGVydGllcztcbn1cblxuaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrU3RhdGUge1xuICAgIGJsdXJDbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuY2xhc3MgQmFja2dyb3VuZE1hc2sgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQmFja2dyb3VuZE1hc2tQcm9wcyxcbiAgICBCYWNrZ3JvdW5kTWFza1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFja2dyb3VuZE1hc2tQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYmx1ckNsYXNzZXMgPSB0aGlzLnByb3BzLmJsdXJDbGFzcz8uc3BsaXQoJyAnKSA/PyBbXTtcbiAgICAgICAgYmx1ckNsYXNzZXMucHVzaCgna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1cicpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBibHVyQ2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZUJsdXJTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBibHVyQ2xhc3NlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBibHVyQ2xhc3Nlcy5mb3JFYWNoKGJsdXJDbGFzcyA9PiB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGJsdXJDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYmx1ckNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYmx1ckNsYXNzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lcywgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2snXTtcblxuICAgICAgICBpZiAoISFjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBVaVByb3BzIHtcbiAgICBwcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW107XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBvblByb21wdEFjY2VwdGVkOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uUG9zdEFjdGlvbkNvbmZpcm06IChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgdG9hc3RRdWV1ZTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIFVpU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVWlQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVxdWV1ZVRvYXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IHRoaXMuc3RhdGUudG9hc3RRdWV1ZS5zbGljZSgxKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2hvd1RvYXN0KG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiBbLi4udGhpcy5zdGF0ZS50b2FzdFF1ZXVlLCBtZXNzYWdlXVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZGVxdWV1ZVRvYXN0LCAzMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMubWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHJvbXB0cy5tYXAodGhpcy5yZW5kZXJQcm9tcHQsIHRoaXMpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdEFjdGlvbigpfVxuXG4gICAgICAgICAgICAgICAgeyFpc01vYmlsZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2FzdFF1ZXVlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VG9hc3QgbWVzc2FnZT17dGhpcy5zdGF0ZS50b2FzdFF1ZXVlWzBdfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtYXliZVJlbmRlclByb21wdEJhY2tncm91bmRNYXNrKCkge1xuICAgICAgICBpZiAoJ3JlcXVlc3RpbmcnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHByb21wdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZmlyc3RQcm9tcHRXaXRoTWFzayA9IHByb21wdHMuZmlsdGVyKFxuICAgICAgICAgICAgcCA9PlxuICAgICAgICAgICAgICAgIChwLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgICAgIHAudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgICAgICEhcC5iYWNrZ3JvdW5kTWFza1xuICAgICAgICApWzBdIGFzIEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnO1xuXG4gICAgICAgIGlmICghZmlyc3RQcm9tcHRXaXRoTWFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmlyc3RQcm9tcHRXaXRoTWFzay5iYWNrZ3JvdW5kTWFzayEuY29sb3JzLmJnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIDxCYWNrZ3JvdW5kTWFzayBzdHlsZT17c3R5bGV9IC8+O1xuICAgIH1cblxuICAgIHJlbmRlclByb21wdChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChwcm9tcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmVsbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgICAgICBjYXNlICdiYW5uZXInOlxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb246IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBwcm9tcHQuYWN0aW9ucz8uZmluZDxcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgID4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICk6IGFjdGlvbiBpcyBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdEFjY2VwdGVkPXt0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclBvc3RBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uLFxuICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nICE9PSBwcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnICE9PSBjdXJyZW50UG9zdEFjdGlvbj8udHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFja2dyb3VuZE1hc2sgPSBudWxsO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5CQU5ORVIpICYmXG4gICAgICAgICAgICB1bmRlZmluZWQgIT09IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2tcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBtYXNrQ29uZmlnID0gY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC5iYWNrZ3JvdW5kTWFzaztcbiAgICAgICAgICAgIGJhY2tncm91bmRNYXNrID0gKFxuICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IG1hc2tDb25maWcuY29sb3JzLmJnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kTWFza31cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbHNEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtjdXJyZW50UG9zdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtjaGFubmVsU2VsZWN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUG9zdEFjdGlvbkNvbmZpcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRDb25maWcgfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyUHJvbXB0QWN0aXZhdGlvbihcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICBhY3RpdmF0ZUZuOiAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHZvaWRcbikge1xuICAgIGlmIChcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzIDwgMFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnRGVmZXJyaW5nIHByb21wdCBhY3RpdmF0aW9uIGJ5ICcgKyBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHNcbiAgICApO1xuXG4gICAgc2V0VGltZW91dChhY3RpdmF0ZUZuLCBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgKiAxMDAwLCBwcm9tcHQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG5leHBvcnQgZW51bSBXb3JrZXJNZXNzYWdlVHlwZSB7XG4gICAgS1B1c2hSZWNlaXZlZCA9ICdLUHVzaFJlY2VpdmVkJ1xufVxuZXhwb3J0IHR5cGUgV29ya2VyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkO1xuICAgIGRhdGE6IFB1c2hQYXlsb2FkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZGF0YTogYW55KTogZGF0YSBpcyBXb3JrZXJNZXNzYWdlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgV29ya2VyTWVzc2FnZVR5cGVbKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZV0gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9