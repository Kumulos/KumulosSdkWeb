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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/bell.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/bell.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000; }\n  .kumulos-prompt *,\n  .kumulos-prompt *:before,\n  .kumulos-prompt *:after {\n    box-sizing: inherit; }\n\n.kumulos-bell-container {\n  position: fixed; }\n  .kumulos-bell-container-bottom-left {\n    bottom: 15px;\n    left: 15px; }\n  .kumulos-bell-container-bottom-right {\n    bottom: 15px;\n    right: 15px; }\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  will-change: transform, box-shadow, width, height;\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden; }\n  .kumulos-bell:hover {\n    transform: scale(1);\n    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54); }\n  .kumulos-bell:active {\n    transform: scale(0.8);\n    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54); }\n  .kumulos-bell svg {\n    fill: #fff;\n    animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n    animation-delay: 0.3s; }\n  .kumulos-bell:before {\n    content: '';\n    display: block;\n    width: 85%;\n    height: 85%;\n    border: solid 1px;\n    border-radius: 100%;\n    border-color: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 7.5% 0 0 7.5%; }\n\n.kumulos-bell-inner {\n  border-radius: 100%; }\n\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none; }\n\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block; }\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform; }\n  .kumulos-tooltip:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: 100%;\n    border: solid transparent;\n    border-width: 8px;\n    margin-top: -8px; }\n  .kumulos-tooltip-right {\n    left: calc(100% + 12px);\n    animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-right:after {\n      border-right-color: #222;\n      right: 100%; }\n  .kumulos-tooltip-left {\n    right: calc(100% + 12px);\n    animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-left:after {\n      border-left-color: #222;\n      left: 100%; }\n\n@keyframes kumulos-anim-shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-2px, 0, 0); }\n  40%,\n  60% {\n    transform: translate3d(2px, 0, 0); } }\n\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/overlay.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/overlay.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body.kumulos-overlay-blur {\n  overflow: hidden; }\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px); }\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  .kumulos-overlay *,\n  .kumulos-overlay *:before,\n  .kumulos-overlay *:after {\n    box-sizing: inherit; }\n  .kumulos-overlay-strip {\n    display: flex;\n    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n    min-height: 150px; }\n    .kumulos-overlay-strip:before {\n      display: block;\n      content: '';\n      width: calc(500px + 12%);\n      max-width: 660px; }\n  .kumulos-overlay-content-container {\n    display: flex;\n    max-width: 380px;\n    padding: 1em;\n    font: 14px helvetica, sans-serif; }\n    .kumulos-overlay-content-container * {\n      margin: 0; }\n    .kumulos-overlay-content-container svg {\n      margin: 55px 2em 0 0;\n      stroke: none;\n      fill: rgba(0, 0, 0, 0.8); }\n    .kumulos-overlay-content-container img {\n      width: 65px;\n      height: 65px; }\n    .kumulos-overlay-content-container h3 {\n      font-size: 1.3em;\n      font-weight: bold; }\n    .kumulos-overlay-content-container a {\n      margin-right: 0.4em;\n      color: inherit;\n      opacity: 0.8;\n      text-decoration: none; }\n  .kumulos-overlay .kumulos-overlay-content {\n    margin-left: 0.75em; }\n    .kumulos-overlay .kumulos-overlay-content p {\n      margin: 0.5em 0; }\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px; }\n", ""]);
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
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, Suspense, SuspenseList, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return O; });
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

function E(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}var C=function(n){var t,e;function r(t){var e;return(e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)},r}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);function _(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,E({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;function S(n){function t(t){var e=E({},t);return delete e.ref,n(e,t.ref)}return t.prototype.isReactComponent=!0,t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),A&&A(n)};var k=function(n,t){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t):null},F={map:k,forEach:k,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){if(1!==(n=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},N=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function R(n){return n&&((n=E({},n)).__c=null,n.__k=n.__k&&n.__k.map(R)),n}function M(n){this.__u=0,this.__b=null}function U(n){var t=n.__.__c;return t&&t.o&&t.o(n)}function O(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,o)}return o.displayName="Lazy",o.t=!0,o}function j(){this.u=null,this.i=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.l)return r.l(n,t.__c);N(n,t,e)},(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).l=function(n,t){var e=this,r=U(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){--e.__u||(e.__v.__k[0]=e.state.o,e.setState({o:e.__b=null}))};e.__u++||e.setState({o:e.__b=e.__v.__k[0]}),n.then(u,u)},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=R(this.__b),this.__b=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Component"],null,t.o?null:n.children),t.o&&n.fallback]};var z=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};(j.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).o=function(n){var t=this,e=U(t.__v),r=t.i.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),z(t,n,r)):o()};e?e(u):u()}},j.prototype.render=function(n){this.u=null,this.i=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.i.set(t[e],this.u=[1,0,this.u]);return n.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var n=this;n.i.forEach(function(t,e){z(n,e,t)})};var L=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function P(n){var t=this,e=n.container,r=Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(L,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v),t.p=!1),n.vnode?t.p?(e.__k=t.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e),t.__k=e.__k):(t.h=document.createTextNode(""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("",e),e.appendChild(t.h),t.p=!0,t.s=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)},null}function W(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(P,{vnode:n,container:t})}var D=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function V(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Z(n,t,e)}function Z(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=function(){},n.nativeEvent=n};var $={configurable:!0,get:function(){return this.class}},q=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.$$typeof=T;var t=n.type,e=n.props;if("function"!=typeof t){var r,o,u;for(u in e.defaultValue&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0)}),delete e.value),e)if(r=D.test(u))break;if(r)for(u in o=n.props={},e)o[D.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u]}(e.class||e.className)&&($.enumerable="className"in e,e.className&&(e.class=e.className),Object.defineProperty(e,"className",$)),function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),q&&q(n)};var B="16.8.0";function G(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function J(n){return!!n&&n.$$typeof===T}function K(n){return J(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function Q(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function X(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)};/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:F,render:V,hydrate:V,unmountComponentAtNode:Q,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:G,cloneElement:K,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:J,findDOMNode:X,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:C,memo:_,forwardRef:S,unstable_batchedUpdates:Y,Suspense:M,SuspenseList:j,lazy:O});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k)}function k(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=T(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?m(o):r),$(t,o),i!=r&&w(o)))}function _(n,l,u,t,i,o,r,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=T(n,u,p=p||f,t,i,o,r,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)b(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||C(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||C(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,t,i,o,r,f,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,h.__h.length&&f.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,t,i,o,r,f,e,c),h.base=u.__e,h.__h.length&&f.push(h),g&&(h.__E=h.__=null),h.__e=null}else u.__e=j(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,t,i,o,r,c){var s,a,h,v,p,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,d,y,i,c),l.__k=l.props.children,v||_(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function z(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function A(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||z(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&A(i[r],u,t);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),$(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},d.prototype.render=y,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return F; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,i=[],o=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function a(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u);var r=u.__H||(u.__H={t:[],u:[]});return t>=r.t.length&&r.t.push({}),r.t[t]}function v(n){return m(E,n)}function m(n,r,i){var o=a(t++);return o.__c||(o.__c=u,o.i=[i?i(r):E(void 0,r),function(t){var u=n(o.i[0],t);o.i[0]!==u&&(o.i[0]=u,o.__c.setState({}))}]),o.i}function p(n,r){var i=a(t++);x(i.o,r)&&(i.i=n,i.o=r,u.__H.u.push(i))}function l(n,r){var i=a(t++);x(i.o,r)&&(i.i=n,i.o=r,u.__h.push(i))}function d(n){return y(function(){return{current:n}},[])}function s(n,t,u){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function y(n,u){var r=a(t++);return x(r.o,u)?(r.o=u,r.v=n,r.i=n()):r.i}function T(n,t){return y(function(){return n},t)}function w(n){var r=u.context[n.__c];if(!r)return n.__;var i=a(t++);return null==i.i&&(i.i=!0,r.sub(u)),r.props.value}function A(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function F(n){var r=a(t++),i=v();return r.i=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.i&&r.i(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function _(){i.some(function(n){n.__P&&(n.__H.u.forEach(g),n.__H.u.forEach(q),n.__H.u=[])}),i=[]}function g(n){n.m&&n.m()}function q(n){var t=n.i();"function"==typeof t&&(n.m=t)}function x(n,t){return!n||t.some(function(t,u){return t!==n[u]})}function E(n,t){return"function"==typeof t?t(n):t}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){o&&o(n),t=0,(u=n.__c).__H&&(u.__H.u.forEach(g),u.__H.u.forEach(q),u.__H.u=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i.push(u)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u))})(_))}},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(n,t){t.some(function(n){n.__h.forEach(g),n.__h=n.__h.filter(function(n){return!n.i||q(n)})}),c&&c(n,t)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(n){e&&e(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()})}};
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

/***/ "./src/core/channels.ts":
/*!******************************!*\
  !*** ./src/core/channels.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
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

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
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
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_VERSION = '1.2.2';
var SDK_TYPE = 10;
var EVENTS_BASE_URL = 'https://events.kumulos.com';
exports.PUSH_BASE_URL = 'https://push.kumulos.com';
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
var Context = /** @class */ (function () {
    function Context(config) {
        var _a, _b, _c;
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = "Basic " + btoa(this.apiKey + ":" + this.secretKey);
        this.serviceWorkerPath = (_a = config.serviceWorkerPath, (_a !== null && _a !== void 0 ? _a : '/worker.js'));
        this.pushPrompts = (_b = config.pushPrompts, (_b !== null && _b !== void 0 ? _b : 'auto'));
        this.autoResubscribe = (_c = config.autoResubscribe, (_c !== null && _c !== void 0 ? _c : true));
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
    return Context;
}());
exports.Context = Context;
function assertConfigValid(config) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }
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
}
exports.assertConfigValid = assertConfigValid;
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
    return storage_1.get('userId').then(function (userId) { return (userId !== null && userId !== void 0 ? userId : getInstallId()); });
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


/***/ }),

/***/ "./src/core/push.ts":
/*!**************************!*\
  !*** ./src/core/push.ts ***!
  \**************************/
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
var index_1 = __webpack_require__(/*! ./index */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
function registerServiceWorker(path) {
    if (!('serviceWorker' in navigator)) {
        return Promise.reject('ServiceWorker is not supported in this browser, aborting...');
    }
    return navigator.serviceWorker.register(path).then(function () {
        return navigator.serviceWorker.ready;
    });
}
exports.registerServiceWorker = registerServiceWorker;
function requestNotificationPermission() {
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
}
exports.requestNotificationPermission = requestNotificationPermission;
function pushRegister(ctx, workerReg) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var existingSub, sub, endpoint, endpointHash, expiry, existingEndpointHash, existingExpiry;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!('PushManager' in window)) {
                        return [2 /*return*/, Promise.reject('Push notifications are not supported in this browser')];
                    }
                    return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                case 1:
                    existingSub = _b.sent();
                    if (!(existingSub && !hasSameKey(ctx.vapidPublicKey, existingSub))) return [3 /*break*/, 3];
                    return [4 /*yield*/, ((_a = existingSub) === null || _a === void 0 ? void 0 : _a.unsubscribe())];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [4 /*yield*/, workerReg.pushManager.subscribe({
                        applicationServerKey: ctx.vapidPublicKey,
                        userVisibleOnly: true
                    })];
                case 4:
                    sub = _b.sent();
                    endpoint = sub.endpoint;
                    endpointHash = utils_1.cyrb53(endpoint);
                    expiry = sub.expirationTime;
                    return [4 /*yield*/, storage_1.get('pushEndpointHash')];
                case 5:
                    existingEndpointHash = _b.sent();
                    return [4 /*yield*/, storage_1.get('pushExpiresAt')];
                case 6:
                    existingExpiry = _b.sent();
                    if (existingEndpointHash === endpointHash &&
                        (!existingExpiry || existingExpiry > Date.now())) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, index_1.trackEvent(ctx, index_1.EventType.PUSH_REGISTERED, {
                            type: 3,
                            token: sub
                        })];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, storage_1.set('pushEndpointHash', endpointHash)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, storage_1.set('pushExpiresAt', expiry)];
                case 9:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.pushRegister = pushRegister;
function requestPermissionAndRegisterForPush(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var perm, reg, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestNotificationPermission()];
                case 1:
                    perm = _a.sent();
                    switch (perm) {
                        case 'default':
                            return [2 /*return*/, 'unsubscribed'];
                        case 'denied':
                            return [2 /*return*/, 'blocked'];
                    }
                    return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
                case 2:
                    reg = _a.sent();
                    if (!reg) {
                        return [2 /*return*/, Promise.reject()];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, pushRegister(ctx, reg)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, 'subscribed'];
                case 5:
                    e_2 = _a.sent();
                    return [2 /*return*/, 'unsubscribed'];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.requestPermissionAndRegisterForPush = requestPermissionAndRegisterForPush;
function hasSameKey(vapidKey, subscription) {
    var existingSubKey = subscription.options.applicationServerKey;
    if (!existingSubKey) {
        return false;
    }
    var subKey = utils_1.base64UrlEncode(existingSubKey);
    return subKey === vapidKey;
}
function getCurrentSubscriptionState(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var perm, reg, sub;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    perm = Notification.permission;
                    if (perm === 'denied') {
                        return [2 /*return*/, 'blocked'];
                    }
                    return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
                case 1:
                    reg = _b.sent();
                    return [4 /*yield*/, ((_a = reg) === null || _a === void 0 ? void 0 : _a.pushManager.getSubscription())];
                case 2:
                    sub = _b.sent();
                    if (sub && perm === 'granted' && hasSameKey(ctx.vapidPublicKey, sub)) {
                        return [2 /*return*/, 'subscribed'];
                    }
                    return [2 /*return*/, 'unsubscribed'];
            }
        });
    });
}
exports.getCurrentSubscriptionState = getCurrentSubscriptionState;
function handleAutoResubscription(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var perm, existingEndpointHash, existingExpiry, reg, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!ctx.autoResubscribe) {
                        return [2 /*return*/];
                    }
                    perm = Notification.permission;
                    if (perm !== 'granted') {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, storage_1.get('pushEndpointHash')];
                case 1:
                    existingEndpointHash = _a.sent();
                    return [4 /*yield*/, storage_1.get('pushExpiresAt')];
                case 2:
                    existingExpiry = _a.sent();
                    if (existingEndpointHash !== undefined &&
                        (existingExpiry === null || existingExpiry === undefined || existingExpiry > Date.now())) {
                        return [2 /*return*/];
                    }
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
                case 4:
                    reg = _a.sent();
                    if (!reg) {
                        console.warn('No worker, aborting auto-resubscription');
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, pushRegister(ctx, reg)];
                case 5:
                    e_3 = _a.sent();
                    console.error(e_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.handleAutoResubscription = handleAutoResubscription;


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

exports.__esModule = true;
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
    return set('config', config);
}
exports.persistConfig = persistConfig;
function getContextFromStoredConfig() {
    return get('config').then(function (config) {
        return config ? new index_1.Context(config) : undefined;
    });
}
exports.getContextFromStoredConfig = getContextFromStoredConfig;


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
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
exports.__esModule = true;
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
function isBrowserSupported() {
    var requiredThings = [
        typeof Promise,
        typeof fetch,
        typeof Notification,
        typeof indexedDB,
        typeof navigator.serviceWorker,
        typeof PushManager
    ];
    return requiredThings.reduce(function (supported, thing) { return supported && thing !== 'undefined'; }, true);
}
exports.isBrowserSupported = isBrowserSupported;
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
    if (options === void 0) { options = { method: 'GET' }; }
    var _a;
    var existingHeaders = (_a = options.headers, (_a !== null && _a !== void 0 ? _a : {}));
    options.headers = __assign({ 'Content-Type': 'application/json', Accept: 'application/json', Authorization: ctx.authHeader }, existingHeaders);
    return fetch(url, options);
}
exports.authedFetch = authedFetch;
function authedFetchJson(ctx, url, options) {
    return authedFetch(ctx, url, options).then(function (r) { return r.json(); });
}
exports.authedFetchJson = authedFetchJson;
// Based on the alphabets in https://tools.ietf.org/html/rfc4648 Tables 1 & 2
function base64UrlEncode(buffer) {
    var ints = new Uint8Array(buffer);
    var base64Encoded = btoa(ints.reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''));
    var urlVariant = base64Encoded.replace('+', '-').replace('/', '_').replace('=', '');
    return urlVariant;
}
exports.base64UrlEncode = base64UrlEncode;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! ./core */ "./src/core/index.ts");
var push_1 = __webpack_require__(/*! ./core/push */ "./src/core/push.ts");
var channels_1 = __webpack_require__(/*! ./core/channels */ "./src/core/channels.ts");
var prompts_1 = __webpack_require__(/*! ./prompts */ "./src/prompts/index.tsx");
var storage_1 = __webpack_require__(/*! ./core/storage */ "./src/core/storage/index.ts");
var Kumulos = /** @class */ (function () {
    function Kumulos(config) {
        core_1.assertConfigValid(config);
        this.context = new core_1.Context(config);
        storage_1.persistConfig(config);
        core_1.trackInstallDetails(this.context);
        this.serviceWorkerReg = push_1.registerServiceWorker(this.context.serviceWorkerPath);
        this.promptManager = new prompts_1.PromptManager(this.context);
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
        var _this = this;
        return push_1.requestNotificationPermission()
            .then(function (perm) {
            if ('granted' !== perm) {
                return Promise.reject('Notification permission not granted');
            }
            return _this.serviceWorkerReg;
        })
            .then(function (reg) {
            return push_1.pushRegister(_this.context, reg);
        });
    };
    Kumulos.prototype.getChannelSubscriptionManager = function () {
        if (!this.channelSubscriptionManager) {
            this.channelSubscriptionManager = new channels_1.ChannelSubscriptionManager(this.context);
        }
        return this.channelSubscriptionManager;
    };
    return Kumulos;
}());
exports["default"] = Kumulos;


/***/ }),

/***/ "./src/prompts/bell.scss":
/*!*******************************!*\
  !*** ./src/prompts/bell.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./bell.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/bell.scss");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/prompts/config.ts":
/*!*******************************!*\
  !*** ./src/prompts/config.ts ***!
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
exports.__esModule = true;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
function loadConfig(ctx) {
    var url = core_1.PUSH_BASE_URL + "/v1/web/config";
    return utils_1.authedFetchJson(ctx, url);
}
function loadPromptConfigs(ctx) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var MAX_AGE_MS, remotePrompts, lastPromptLoadTime, updatedRemoteConfig, platformConfig, e_1, localPrompts, mergedPrompts, id, localIds, remoteIds_1, removedIds, _i, removedIds_1, id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    MAX_AGE_MS = 1 * 60 * 60 * 1000;
                    remotePrompts = {};
                    return [4 /*yield*/, storage_1.get('promptsUpdated')];
                case 1:
                    lastPromptLoadTime = (_a = _c.sent(), (_a !== null && _a !== void 0 ? _a : 0));
                    updatedRemoteConfig = false;
                    if (!(Date.now() - lastPromptLoadTime > MAX_AGE_MS)) return [3 /*break*/, 5];
                    console.info('Prompts never synced/stale, syncing now...');
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, loadConfig(ctx)];
                case 3:
                    platformConfig = _c.sent();
                    remotePrompts = platformConfig.prompts;
                    updatedRemoteConfig = true;
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _c.sent();
                    console.warn(e_1);
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, storage_1.get('prompts')];
                case 6:
                    localPrompts = (_b = _c.sent(), (_b !== null && _b !== void 0 ? _b : {}));
                    mergedPrompts = __assign({}, localPrompts);
                    if (!updatedRemoteConfig) return [3 /*break*/, 9];
                    for (id in remotePrompts) {
                        mergedPrompts[id] = remotePrompts[id];
                    }
                    localIds = Object.keys(localPrompts);
                    remoteIds_1 = Object.keys(remotePrompts);
                    removedIds = localIds.filter(function (id) { return remoteIds_1.indexOf(id) === -1; });
                    for (_i = 0, removedIds_1 = removedIds; _i < removedIds_1.length; _i++) {
                        id = removedIds_1[_i];
                        delete mergedPrompts[id];
                    }
                    return [4 /*yield*/, storage_1.set('prompts', mergedPrompts)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, storage_1.set('promptsUpdated', Date.now())];
                case 8:
                    _c.sent();
                    _c.label = 9;
                case 9: return [2 /*return*/, mergedPrompts];
            }
        });
    });
}
exports.loadPromptConfigs = loadPromptConfigs;


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
var push_1 = __webpack_require__(/*! ../core/push */ "./src/core/push.ts");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ui.tsx"));
var config_1 = __webpack_require__(/*! ./config */ "./src/prompts/config.ts");
var triggers_1 = __webpack_require__(/*! ./triggers */ "./src/prompts/triggers.ts");
// loading -> ready
// ready -> requesting
// requesting -> ready
var PromptManager = /** @class */ (function () {
    function PromptManager(ctx) {
        var _this = this;
        this.onEventTracked = function (e) {
            var _a;
            console.info('Prompt trigger saw event', e);
            var events = e.data;
            (_a = _this.eventQueue).push.apply(_a, events);
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
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if ('requesting' === this.state) {
                            return [2 /*return*/];
                        }
                        this.currentlyRequestingPrompt = prompt;
                        this.setState('requesting');
                        _a = this;
                        return [4 /*yield*/, push_1.requestPermissionAndRegisterForPush(this.context)];
                    case 1:
                        _a.subscriptionState = _b.sent();
                        this.setState('ready');
                        return [2 /*return*/];
                }
            });
        }); };
        this.onPromptDeclined = function (prompt) {
            // TODO record state etc.
        };
        this.prompts = {};
        this.eventQueue = [];
        this.activePrompts = [];
        this.uiRoot = document.createElement('div');
        this.uiRoot.id = 'kumulos-ui-root';
        document.body.appendChild(this.uiRoot);
        this.context = ctx;
        this.setState('loading');
        ctx.subscribe('eventTracked', this.onEventTracked);
    }
    PromptManager.prototype.render = function () {
        if (!this.subscriptionState || !this.state) {
            return;
        }
        preact_1.render(preact_1.h(ui_1["default"], { prompts: this.activePrompts, subscriptionState: this.subscriptionState, promptManagerState: this.state, requestNativePrompt: this.onRequestNativePrompt, onPromptDeclined: this.onPromptDeclined, currentlyRequestingPrompt: this.currentlyRequestingPrompt }), this.uiRoot);
    };
    PromptManager.prototype.evaluateTriggers = function () {
        // TODO future allow this to run to show alternate UIs
        if (this.subscriptionState === 'subscribed') {
            return;
        }
        console.info('Evaluating prompt triggers');
        var matchedPrompts = [];
        for (var id in this.prompts) {
            var prompt_1 = this.prompts[id];
            for (var i = 0; i < this.eventQueue.length; ++i) {
                var event_1 = this.eventQueue[i];
                if (triggers_1.triggerMatched(prompt_1, event_1)) {
                    matchedPrompts.push(prompt_1);
                }
            }
        }
        // TODO filter out declined/ask again after (need to merge some persistent state into memory)
        this.activatePrompts(matchedPrompts);
        this.eventQueue = [];
    };
    PromptManager.prototype.deferPromptActivation = function (prompt) {
        if (!prompt.trigger.afterSeconds || prompt.trigger.afterSeconds < 0) {
            return;
        }
        console.info('Deferring prompt activation by ' + prompt.trigger.afterSeconds);
        setTimeout(this.activateDeferredPrompt, prompt.trigger.afterSeconds * 1000, prompt);
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
            var prompt_2 = prompts[i];
            if (prompt_2.trigger.afterSeconds !== undefined) {
                this.deferPromptActivation(prompt_2);
                continue;
            }
            this.activatePrompt(prompt_2);
        }
        this.render();
    };
    PromptManager.prototype.setState = function (state) {
        console.info('Setting prompt manager state:' + state);
        this.state = state;
        this.onEnter(state);
    };
    PromptManager.prototype.onEnter = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = state;
                        switch (_a) {
                            case 'loading': return [3 /*break*/, 1];
                            case 'requesting': return [3 /*break*/, 5];
                            case 'ready': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 1: return [4 /*yield*/, push_1.handleAutoResubscription(this.context)];
                    case 2:
                        _d.sent();
                        _b = this;
                        return [4 /*yield*/, push_1.getCurrentSubscriptionState(this.context)];
                    case 3:
                        _b.subscriptionState = _d.sent();
                        return [4 /*yield*/, this.loadPrompts()];
                    case 4:
                        _d.sent();
                        this.setState('ready');
                        return [3 /*break*/, 8];
                    case 5:
                        this.render();
                        return [3 /*break*/, 8];
                    case 6:
                        this.currentlyRequestingPrompt = undefined;
                        _c = this;
                        return [4 /*yield*/, push_1.getCurrentSubscriptionState(this.context)];
                    case 7:
                        _c.subscriptionState = _d.sent();
                        this.evaluateTriggers();
                        this.render();
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.loadPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.context.pushPrompts !== 'auto') {
                            this.prompts = __assign({}, this.context.pushPrompts);
                            return [2 /*return*/];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, config_1.loadPromptConfigs(this.context)];
                    case 2:
                        _a.prompts = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error('Failed to load prompts', e_1);
                        this.prompts = {};
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    return PromptManager;
}());
exports.PromptManager = PromptManager;


/***/ }),

/***/ "./src/prompts/overlay.scss":
/*!**********************************!*\
  !*** ./src/prompts/overlay.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./overlay.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/prompts/overlay.scss");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/prompts/triggers.ts":
/*!*********************************!*\
  !*** ./src/prompts/triggers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
function propIn(filterValue, propValue) {
    if (!Array.isArray(filterValue)) {
        return false;
    }
    if (typeof propValue === 'string') {
        var tests = filterValue.map(function (v) { return new RegExp(utils_1.escapeRegExp(v).replace('\\*', '.*'), 'g'); });
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
exports.__esModule = true;
__webpack_require__(/*! ./bell.scss */ "./src/prompts/bell.scss");
__webpack_require__(/*! ./overlay.scss */ "./src/prompts/overlay.scss");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';
function inversePosition(pos) {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}
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
var Bell = /** @class */ (function (_super) {
    __extends(Bell, _super);
    function Bell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRequestNativePrompt = function () {
            _this.props.requestNativePrompt(_this.props.config);
        };
        return _this;
    }
    Bell.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.props.subscriptionState !== 'unsubscribed') {
            return null;
        }
        var classes = "kumulos-prompt kumulos-prompt-" + this.props.promptManagerState + " kumulos-bell-container kumulos-bell-container-" + this.props.config.position;
        var tooltipPos = inversePosition(this.props.config.position);
        var bgColor = (_b = (_a = this.props.config.colors) === null || _a === void 0 ? void 0 : _a.bell) === null || _b === void 0 ? void 0 : _b.bg;
        var fgColor = (_d = (_c = this.props.config.colors) === null || _c === void 0 ? void 0 : _c.bell) === null || _d === void 0 ? void 0 : _d.fg;
        var bellStyle = {
            borderColor: fgColor,
            backgroundColor: bgColor
        };
        return (preact_1.h("div", { "class": classes },
            preact_1.h("div", { "class": "kumulos-bell-inner kumulos-tooltip-parent" },
                preact_1.h("div", { "class": "kumulos-bell", onClick: this.onRequestNativePrompt, style: bellStyle },
                    preact_1.h("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        preact_1.h("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z", fill: fgColor }))),
                preact_1.h(Tooltip, { position: tooltipPos }, (_g = (_f = (_e = this.props.config.labels) === null || _e === void 0 ? void 0 : _e.tooltip) === null || _f === void 0 ? void 0 : _f.subscribe, (_g !== null && _g !== void 0 ? _g : DEFAULT_SUBSCRIBE_LABEL))))));
    };
    return Bell;
}(preact_1.Component));
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.updateBlurState = function () {
        var blurClass = 'kumulos-overlay-blur';
        if (this.props.promptState === 'requesting' &&
            this.props.prompt.overlay) {
            document.body.classList.add(blurClass);
        }
        else {
            document.body.classList.remove(blurClass);
        }
    };
    Overlay.prototype.componentDidMount = function () {
        this.updateBlurState();
    };
    Overlay.prototype.componentWillUnmount = function () {
        document.body.classList.remove('kumulos-overlay-blur');
    };
    Overlay.prototype.render = function () {
        var _a = this.props, promptState = _a.promptState, prompt = _a.prompt;
        if (!prompt || promptState !== 'requesting' || !prompt.overlay) {
            return null;
        }
        var overlay = prompt.overlay;
        var style = {
            background: overlay.colors.shade,
            color: overlay.colors.text
        };
        return (preact_1.h("div", { "class": "kumulos-overlay kumulos-overlay-" + getBrowserName(), style: style },
            preact_1.h("div", { "class": "kumulos-overlay-strip", style: { background: overlay.colors.strip } },
                preact_1.h("div", { "class": "kumulos-overlay-content-container" },
                    preact_1.h("svg", { width: "60", height: "30", viewBox: "0 0 22.931481 10.702209", xmlns: "http://www.w3.org/2000/svg" },
                        preact_1.h("g", { transform: "translate(-84.797 -137.57)" },
                            preact_1.h("path", { d: "m107.27 137.57c-0.85825 0.21893-1.1426 1.4022-2.0164 1.7627-2.3976 1.4485-5.1526 2.1624-7.8548 2.8068-2.9661 0.63867-5.9654 1.119-8.9661 1.5615-0.41514 0.0524-1.0682 0.21112-0.46798-0.28108 0.44267-0.72215 1.6468-1.5374 1.1985-2.458-1.0644-0.61662-1.1387 1.2071-1.7981 1.6772-0.5417 0.81574-1.3889 1.3066-2.2058 1.7979-0.95589 0.60047 0.20922 1.4985 0.91298 1.6112 2.5142 0.95092 5.1189 1.6734 7.7581 2.1778 1.2049 0.35323 0.92812-1.449-0.19376-1.1189-2.4877-0.51019-4.949-1.1923-7.3121-2.1277 3.2517-0.30481 6.4694-0.89638 9.6816-1.4723 3.2949-0.67721 6.6438-1.4624 9.5969-3.1297 0.85452-0.5218 1.6368-1.2265 2.1001-2.1235 0.10591-0.30575-0.12194-0.63786-0.43344-0.68399z", "stroke-width": ".82632", style: { fill: overlay.colors.text } }))),
                    overlay.iconUrl && preact_1.h("img", { src: overlay.iconUrl }),
                    preact_1.h("div", { "class": "kumulos-overlay-content" },
                        preact_1.h("h3", null, overlay.labels.heading),
                        preact_1.h("p", null, overlay.labels.body),
                        overlay.links.map(function (l) { return (preact_1.h("a", { href: l.url, target: "_blank" }, l.label)); }))))));
    };
    return Overlay;
}(preact_1.Component));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ui.prototype.render = function () {
        return compat_1.createPortal(preact_1.h(preact_1.Fragment, null,
            this.props.prompts.map(this.renderPrompt, this),
            this.props.currentlyRequestingPrompt && (preact_1.h(Overlay, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt }))), document.body);
    };
    Ui.prototype.renderPrompt = function (prompt) {
        switch (prompt.type) {
            case 'bell':
                return (preact_1.h(Bell, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, requestNativePrompt: this.props.requestNativePrompt, onPromptDeclined: this.props.onPromptDeclined }));
            default:
                return null;
        }
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9iZWxsLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL292ZXJsYXkuc2NzcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubW9kdWxlLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3N0b3JhZ2UvaWRiLWtleXZhbC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvYmVsbC5zY3NzP2ExZjIiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9vdmVybGF5LnNjc3M/YzgzMiIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdHJpZ2dlcnMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3VpLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsb0JBQW9CLDJCQUEyQixrQkFBa0IsRUFB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SUFDRCxNQUFNLEVBQUUsTUFBTSxFQUNkLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQy9DLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQ2pELG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQ25ELGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQy9DLENBQ0wsQ0FBQztZQUNOO2dCQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLENBaEMrQixrQkFBUyxHQWdDeEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrdW11bG9zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rdW11bG9zLXByb21wdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLmt1bXVsb3MtcHJvbXB0ICosXFxuICAua3VtdWxvcy1wcm9tcHQgKjpiZWZvcmUsXFxuICAua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gIC5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICBsZWZ0OiAxNXB4OyB9XFxuICAua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tcmlnaHQge1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4OyB9XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93LCB3aWR0aCwgaGVpZ2h0O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLmt1bXVsb3MtYmVsbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuICAua3VtdWxvcy1iZWxsOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuICAua3VtdWxvcy1iZWxsIHN2ZyB7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxcbiAgLmt1bXVsb3MtYmVsbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlOyB9XFxuXFxuLmt1bXVsb3MtYmVsbC1pbm5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlOyB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07IH1cXG4gIC5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtOHB4OyB9XFxuICAua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gICAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7IH1cXG4gICAgLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyO1xcbiAgICAgIHJpZ2h0OiAxMDAlOyB9XFxuICAua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTsgfVxcbiAgICAua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgICAgIGxlZnQ6IDEwMCU7IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApOyB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7IH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7IH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkua3VtdWxvcy1vdmVybGF5LWJsdXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpOyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMjAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAqLFxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAqOmJlZm9yZSxcXG4gIC5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBtaW4taGVpZ2h0OiAxNTBweDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgICAgIG1heC13aWR0aDogNjYwcHg7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gICAgICBtYXJnaW46IDU1cHggMmVtIDAgMDtcXG4gICAgICBzdHJva2U6IG5vbmU7XFxuICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaW1nIHtcXG4gICAgICB3aWR0aDogNjVweDtcXG4gICAgICBoZWlnaHQ6IDY1cHg7IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyB7XFxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC40ZW07XFxuICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMC43NWVtOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHAge1xcbiAgICAgIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiA0NDBweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgbyx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIHUsdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGYsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgYX1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBsLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHYsaHlkcmF0ZSBhcyBwLHJlbmRlciBhcyBkLF91bm1vdW50IGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBnLEZyYWdtZW50IGFzIHh9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIEUobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gdyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX12YXIgQz1mdW5jdGlvbihuKXt2YXIgdCxlO2Z1bmN0aW9uIHIodCl7dmFyIGU7cmV0dXJuKGU9bi5jYWxsKHRoaXMsdCl8fHRoaXMpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLGV9cmV0dXJuIGU9biwodD1yKS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29uc3RydWN0b3I9dCx0Ll9fcHJvdG9fXz1lLHIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiB3KHRoaXMucHJvcHMsbil8fHcodGhpcy5zdGF0ZSx0KX0scn0obCk7ZnVuY3Rpb24gXyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOncodGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobixFKHt9LHQpKX1yZXR1cm4gci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnQ9ITAscn12YXIgQT1oLnZub2RlO2Z1bmN0aW9uIFMobil7ZnVuY3Rpb24gdCh0KXt2YXIgZT1FKHt9LHQpO3JldHVybiBkZWxldGUgZS5yZWYsbihlLHQucmVmKX1yZXR1cm4gdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCx0LnQ9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH1oLnZub2RlPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLnQmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksQSYmQShuKX07dmFyIGs9ZnVuY3Rpb24obix0KXtyZXR1cm4gbj92KG4pLm1hcCh0KTpudWxsfSxGPXttYXA6ayxmb3JFYWNoOmssY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXtpZigxIT09KG49dihuKSkubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNoaWxkcmVuLm9ubHkoKSBleHBlY3RzIG9ubHkgb25lIGNoaWxkLlwiKTtyZXR1cm4gblswXX0sdG9BcnJheTp2fSxOPWguX19lO2Z1bmN0aW9uIFIobil7cmV0dXJuIG4mJigobj1FKHt9LG4pKS5fX2M9bnVsbCxuLl9faz1uLl9fayYmbi5fX2subWFwKFIpKSxufWZ1bmN0aW9uIE0obil7dGhpcy5fX3U9MCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQubyYmdC5vKG4pfWZ1bmN0aW9uIE8obil7dmFyIHQsZSxyO2Z1bmN0aW9uIG8obyl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLG8pfXJldHVybiBvLmRpc3BsYXlOYW1lPVwiTGF6eVwiLG8udD0hMCxvfWZ1bmN0aW9uIGooKXt0aGlzLnU9bnVsbCx0aGlzLmk9bnVsbH1oLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcixvPXQ7bz1vLl9fOylpZigocj1vLl9fYykmJnIubClyZXR1cm4gci5sKG4sdC5fX2MpO04obix0LGUpfSwoTS5wcm90b3R5cGU9bmV3IGwpLmw9ZnVuY3Rpb24obix0KXt2YXIgZT10aGlzLHI9VShlLl9fdiksbz0hMSx1PWZ1bmN0aW9uKCl7b3x8KG89ITAscj9yKGkpOmkoKSl9O3QuX19jPXQuY29tcG9uZW50V2lsbFVubW91bnQsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UoKSx0Ll9fYyYmdC5fX2MoKX07dmFyIGk9ZnVuY3Rpb24oKXstLWUuX191fHwoZS5fX3YuX19rWzBdPWUuc3RhdGUubyxlLnNldFN0YXRlKHtvOmUuX19iPW51bGx9KSl9O2UuX191Kyt8fGUuc2V0U3RhdGUoe286ZS5fX2I9ZS5fX3YuX19rWzBdfSksbi50aGVuKHUsdSl9LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe3JldHVybiB0aGlzLl9fYiYmKHRoaXMuX192Ll9fa1swXT1SKHRoaXMuX19iKSx0aGlzLl9fYj1udWxsKSxbcyhsLG51bGwsdC5vP251bGw6bi5jaGlsZHJlbiksdC5vJiZuLmZhbGxiYWNrXX07dmFyIHo9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uaS5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uaS5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07KGoucHJvdG90eXBlPW5ldyBsKS5vPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuaS5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbihvKXt2YXIgdT1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaChvKSx6KHQsbixyKSk6bygpfTtlP2UodSk6dSgpfX0sai5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMuaT1uZXcgTWFwO3ZhciB0PXYobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLmkuc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LGoucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1qLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7bi5pLmZvckVhY2goZnVuY3Rpb24odCxlKXt6KG4sZSx0KX0pfTt2YXIgTD1mdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt9dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMuY29udGV4dH0sdC5yZW5kZXI9ZnVuY3Rpb24obil7cmV0dXJuIG4uY2hpbGRyZW59LG59KCk7ZnVuY3Rpb24gUChuKXt2YXIgdD10aGlzLGU9bi5jb250YWluZXIscj1zKEwse2NvbnRleHQ6dC5jb250ZXh0fSxuLnZub2RlKTtyZXR1cm4gdC5zJiZ0LnMhPT1lJiYodC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KSx0LnA9ITEpLG4udm5vZGU/dC5wPyhlLl9faz10Ll9fayxkKHIsZSksdC5fX2s9ZS5fX2spOih0Lmg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikscChcIlwiLGUpLGUuYXBwZW5kQ2hpbGQodC5oKSx0LnA9ITAsdC5zPWUsZChyLGUsdC5oKSx0Ll9faz10aGlzLmguX19rKTp0LnAmJih0LmgucGFyZW50Tm9kZSYmdC5zLnJlbW92ZUNoaWxkKHQuaCksbSh0LnYpKSx0LnY9cix0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KX0sbnVsbH1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoUCx7dm5vZGU6bixjb250YWluZXI6dH0pfXZhciBEPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXB8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBofGhvcml6fG1hcmtlcnxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHR8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eClbQS1aXS87bC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTt2YXIgVD1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDM7ZnVuY3Rpb24gVihuLHQsZSl7aWYobnVsbD09dC5fX2spZm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTtyZXR1cm4gWihuLHQsZSl9ZnVuY3Rpb24gWihuLHQsZSl7cmV0dXJuIGQobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfXZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gSShuLHQpe25bXCJVTlNBRkVfXCIrdF0mJiFuW3RdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHtjb25maWd1cmFibGU6ITEsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXt0aGlzW1wiVU5TQUZFX1wiK3RdPW59fSl9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PWZ1bmN0aW9uKCl7fSxuLm5hdGl2ZUV2ZW50PW59O3ZhciAkPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxxPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXtuLiQkdHlwZW9mPVQ7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcztpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXt2YXIgcixvLHU7Zm9yKHUgaW4gZS5kZWZhdWx0VmFsdWUmJihlLnZhbHVlfHwwPT09ZS52YWx1ZXx8KGUudmFsdWU9ZS5kZWZhdWx0VmFsdWUpLGRlbGV0ZSBlLmRlZmF1bHRWYWx1ZSksQXJyYXkuaXNBcnJheShlLnZhbHVlKSYmZS5tdWx0aXBsZSYmXCJzZWxlY3RcIj09PXQmJih2KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7LTEhPWUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKSYmKG4ucHJvcHMuc2VsZWN0ZWQ9ITApfSksZGVsZXRlIGUudmFsdWUpLGUpaWYocj1ELnRlc3QodSkpYnJlYWs7aWYocilmb3IodSBpbiBvPW4ucHJvcHM9e30sZSlvW0QudGVzdCh1KT91LnJlcGxhY2UoLyhbQS1aMC05XSkvLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk6dV09ZVt1XX0oZS5jbGFzc3x8ZS5jbGFzc05hbWUpJiYoJC5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLGUuY2xhc3NOYW1lJiYoZS5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjbGFzc05hbWVcIiwkKSksZnVuY3Rpb24odCl7dmFyIGU9bi50eXBlLHI9bi5wcm9wcztpZihyJiZcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIG89e307Zm9yKHZhciB1IGluIHIpL15vbihBbml8VHJhfFRvdSkvLnRlc3QodSkmJihyW3UudG9Mb3dlckNhc2UoKV09clt1XSxkZWxldGUgclt1XSksb1t1LnRvTG93ZXJDYXNlKCldPXU7aWYoby5vbmRvdWJsZWNsaWNrJiYoci5vbmRibGNsaWNrPXJbby5vbmRvdWJsZWNsaWNrXSxkZWxldGUgcltvLm9uZG91YmxlY2xpY2tdKSxvLm9uYmVmb3JlaW5wdXQmJihyLm9uYmVmb3JlaW5wdXQ9cltvLm9uYmVmb3JlaW5wdXRdLGRlbGV0ZSByW28ub25iZWZvcmVpbnB1dF0pLG8ub25jaGFuZ2UmJihcInRleHRhcmVhXCI9PT1lfHxcImlucHV0XCI9PT1lLnRvTG93ZXJDYXNlKCkmJiEvXmZpbHxjaGV8cmEvaS50ZXN0KHIudHlwZSkpKXt2YXIgaT1vLm9uaW5wdXR8fFwib25pbnB1dFwiO3JbaV18fChyW2ldPXJbby5vbmNoYW5nZV0sZGVsZXRlIHJbby5vbmNoYW5nZV0pfX19KCksXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmIXQubSYmdC5wcm90b3R5cGUmJihJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbE1vdW50XCIpLEkodC5wcm90b3R5cGUsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpLEkodC5wcm90b3R5cGUsXCJjb21wb25lbnRXaWxsVXBkYXRlXCIpLHQubT0hMCkscSYmcShuKX07dmFyIEI9XCIxNi44LjBcIjtmdW5jdGlvbiBHKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBKKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PVR9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gSihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIFEobil7cmV0dXJuISFuLl9fayYmKGQobnVsbCxuKSwhMCl9ZnVuY3Rpb24gWChuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBZPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjpvLHVzZUltcGVyYXRpdmVIYW5kbGU6dSx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6Zix1c2VDb250ZXh0OmMsdXNlRGVidWdWYWx1ZTphLHZlcnNpb246XCIxNi44LjBcIixDaGlsZHJlbjpGLHJlbmRlcjpWLGh5ZHJhdGU6Vix1bm1vdW50Q29tcG9uZW50QXROb2RlOlEsY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6ZyxjcmVhdGVGYWN0b3J5OkcsY2xvbmVFbGVtZW50OkssY3JlYXRlUmVmOmIsRnJhZ21lbnQ6eCxpc1ZhbGlkRWxlbWVudDpKLGZpbmRET01Ob2RlOlgsQ29tcG9uZW50OmwsUHVyZUNvbXBvbmVudDpDLG1lbW86Xyxmb3J3YXJkUmVmOlMsdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6WSxTdXNwZW5zZTpNLFN1c3BlbnNlTGlzdDpqLGxhenk6T307ZXhwb3J0e0IgYXMgdmVyc2lvbixGIGFzIENoaWxkcmVuLFYgYXMgcmVuZGVyLFogYXMgaHlkcmF0ZSxRIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsRyBhcyBjcmVhdGVGYWN0b3J5LEsgYXMgY2xvbmVFbGVtZW50LEogYXMgaXNWYWxpZEVsZW1lbnQsWCBhcyBmaW5kRE9NTm9kZSxDIGFzIFB1cmVDb21wb25lbnQsXyBhcyBtZW1vLFMgYXMgZm9yd2FyZFJlZixZIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLE0gYXMgU3VzcGVuc2UsaiBhcyBTdXNwZW5zZUxpc3QsTyBhcyBsYXp5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsdCxpLG8scixmPXt9LGU9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBoKG4sbCx1KXt2YXIgdCxpPWFyZ3VtZW50cyxvPXt9O2Zvcih0IGluIGwpXCJrZXlcIiE9PXQmJlwicmVmXCIhPT10JiYob1t0XT1sW3RdKTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLHQ9Mzt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXUucHVzaChpW3RdKTtpZihudWxsIT11JiYoby5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IodCBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1vW3RdJiYob1t0XT1uLmRlZmF1bHRQcm9wc1t0XSk7cmV0dXJuIHYobixvLGwmJmwua2V5LGwmJmwucmVmKX1mdW5jdGlvbiB2KGwsdSx0LGkpe3ZhciBvPXt0eXBlOmwscHJvcHM6dSxrZXk6dCxyZWY6aSxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDpudWxsLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMH07cmV0dXJuIG4udm5vZGUmJm4udm5vZGUobyksb31mdW5jdGlvbiBwKCl7cmV0dXJue319ZnVuY3Rpb24geShuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBkKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIG0obixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP20obi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/bShuKTpudWxsfWZ1bmN0aW9uIHcobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiB3KG4pfX1mdW5jdGlvbiBnKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJjE9PT11LnB1c2gobCl8fGkhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKChpPW4uZGVib3VuY2VSZW5kZXJpbmcpfHx0KShrKX1mdW5jdGlvbiBrKCl7dmFyIG4sbCx0LGksbyxyLGY7Zm9yKHUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBsLl9fdi5fX2Itbi5fX3YuX19ifSk7bj11LnBvcCgpOyluLl9fZCYmKHQ9dm9pZCAwLGk9dm9pZCAwLHI9KG89KGw9bikuX192KS5fX2UsKGY9bC5fX1ApJiYodD1bXSxpPVQoZixvLHMoe30sbyksbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCx0LG51bGw9PXI/bShvKTpyKSwkKHQsbyksaSE9ciYmdyhvKSkpfWZ1bmN0aW9uIF8obixsLHUsdCxpLG8scixjLHMpe3ZhciBoLHYscCx5LGQsdyxnLGs9dSYmdS5fX2t8fGUsXz1rLmxlbmd0aDtpZihjPT1mJiYoYz1udWxsIT1vP29bMF06Xz9tKHUsMCk6bnVsbCksaD0wLGwuX19rPWIobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fXz1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWtbaF0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSlrW2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxfO3YrKyl7aWYoKHA9a1t2XSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtrW3ZdPXZvaWQgMDticmVha31wPW51bGx9aWYoeT1UKG4sdSxwPXB8fGYsdCxpLG8scixjLHMpLCh2PXUucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLHUpLGcucHVzaCh2LHUuX19jfHx5LHUpKSxudWxsIT15KXtpZihudWxsPT13JiYodz15KSxudWxsIT11Ll9fZCl5PXUuX19kLHUuX19kPW51bGw7ZWxzZSBpZihvPT1wfHx5IT1jfHxudWxsPT15LnBhcmVudE5vZGUpe246aWYobnVsbD09Y3x8Yy5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHkpO2Vsc2V7Zm9yKGQ9Yyx2PTA7KGQ9ZC5uZXh0U2libGluZykmJnY8Xzt2Kz0yKWlmKGQ9PXkpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh5LGMpfVwib3B0aW9uXCI9PWwudHlwZSYmKG4udmFsdWU9XCJcIil9Yz15Lm5leHRTaWJsaW5nLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZSYmKGwuX19kPXkpfX1yZXR1cm4gaCsrLHV9KSxsLl9fZT13LG51bGwhPW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGwudHlwZSlmb3IoaD1vLmxlbmd0aDtoLS07KW51bGwhPW9baF0mJmEob1toXSk7Zm9yKGg9XztoLS07KW51bGwhPWtbaF0mJkEoa1toXSxrW2hdKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspeihnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIGIobixsLHUpe2lmKG51bGw9PXUmJih1PVtdKSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG4pbCYmdS5wdXNoKGwobnVsbCkpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyliKG5bdF0sbCx1KTtlbHNlIHUucHVzaChsP2woXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP3YobnVsbCxuLG51bGwsbnVsbCk6bnVsbCE9bi5fX2V8fG51bGwhPW4uX19jP3Yobi50eXBlLG4ucHJvcHMsbi5rZXksbnVsbCk6bik6bik7cmV0dXJuIHV9ZnVuY3Rpb24geChuLGwsdSx0LGkpe3ZhciBvO2ZvcihvIGluIHUpbyBpbiBsfHxQKG4sbyxudWxsLHVbb10sdCk7Zm9yKG8gaW4gbClpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxQKG4sbyxsW29dLHVbb10sdCl9ZnVuY3Rpb24gQyhuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPVwibnVtYmVyXCI9PXR5cGVvZiB1JiYhMT09PWMudGVzdChsKT91K1wicHhcIjpudWxsPT11P1wiXCI6dX1mdW5jdGlvbiBQKG4sbCx1LHQsaSl7dmFyIG8scixmLGUsYztpZihpP1wiY2xhc3NOYW1lXCI9PT1sJiYobD1cImNsYXNzXCIpOlwiY2xhc3NcIj09PWwmJihsPVwiY2xhc3NOYW1lXCIpLFwia2V5XCI9PT1sfHxcImNoaWxkcmVuXCI9PT1sKTtlbHNlIGlmKFwic3R5bGVcIj09PWwpaWYobz1uLnN0eWxlLFwic3RyaW5nXCI9PXR5cGVvZiB1KW8uY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihvLmNzc1RleHQ9XCJcIix0PW51bGwpLHQpZm9yKHIgaW4gdCl1JiZyIGluIHV8fEMobyxyLFwiXCIpO2lmKHUpZm9yKGYgaW4gdSl0JiZ1W2ZdPT09dFtmXXx8QyhvLGYsdVtmXSl9ZWxzZVwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdPyhlPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksYz1sLnRvTG93ZXJDYXNlKCksbD0oYyBpbiBuP2M6bCkuc2xpY2UoMiksdT8odHx8bi5hZGRFdmVudExpc3RlbmVyKGwsTixlKSwobi5sfHwobi5sPXt9KSlbbF09dSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsTixlKSk6XCJsaXN0XCIhPT1sJiZcInRhZ05hbWVcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0eXBlXCIhPT1sJiYhaSYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL154bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9ZnVuY3Rpb24gTihsKXt0aGlzLmxbbC50eXBlXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gVChsLHUsdCxpLG8scixmLGUsYyl7dmFyIGEsaCx2LHAsbSx3LGcsayx4LEMsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoaz11LnByb3BzLHg9KGE9UC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLEM9YT94P3gucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP2c9KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAoayxDKToodS5fX2M9aD1uZXcgZChrLEMpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1EKSx4JiZ4LnN1YihoKSxoLnByb3BzPWssaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD1DLGguX19uPWksdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoayxoLl9fcykpKSxwPWgucHJvcHMsbT1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmayE9PXAmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGssQyksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShrLGguX19zLEMpKXtmb3IoaC5wcm9wcz1rLGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsaC5fX3Y9dSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxhPTA7YTx1Ll9fay5sZW5ndGg7YSsrKXUuX19rW2FdJiYodS5fX2tbYV0uX189dSk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShrLGguX19zLEMpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUocCxtLHcpfSl9aC5jb250ZXh0PUMsaC5wcm9wcz1rLGguc3RhdGU9aC5fX3MsKGE9bi5fX3IpJiZhKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bCxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLHUuX19rPWIobnVsbCE9YSYmYS50eXBlPT15JiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEpLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYoaT1zKHMoe30saSksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fCh3PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocCxtKSksXyhsLHUsdCxpLG8scixmLGUsYyksaC5iYXNlPXUuX19lLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGcmJihoLl9fRT1oLl9fPW51bGwpLGguX19lPW51bGx9ZWxzZSB1Ll9fZT1qKHQuX19lLHUsdCxpLG8scixmLGMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXtuLl9fZShsLHUsdCl9cmV0dXJuIHUuX19lfWZ1bmN0aW9uICQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uIGoobixsLHUsdCxpLG8scixjKXt2YXIgcyxhLGgsdixwLHk9dS5wcm9wcyxkPWwucHJvcHM7aWYoaT1cInN2Z1wiPT09bC50eXBlfHxpLG51bGw9PW4mJm51bGwhPW8pZm9yKHM9MDtzPG8ubGVuZ3RoO3MrKylpZihudWxsIT0oYT1vW3NdKSYmKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpKXtuPWEsb1tzXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1sLnR5cGUpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249aT9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGwudHlwZSk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUpLG89bnVsbH1pZihudWxsPT09bC50eXBlKW51bGwhPW8mJihvW28uaW5kZXhPZihuKV09bnVsbCkseSE9PWQmJm4uZGF0YSE9ZCYmKG4uZGF0YT1kKTtlbHNlIGlmKGwhPT11KXtpZihudWxsIT1vJiYobz1lLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksaD0oeT11LnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKHk9PT1mKWZvcih5PXt9LHA9MDtwPG4uYXR0cmlidXRlcy5sZW5ndGg7cCsrKXlbbi5hdHRyaWJ1dGVzW3BdLm5hbWVdPW4uYXR0cmlidXRlc1twXS52YWx1ZTsodnx8aCkmJih2JiZoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fChuLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfXgobixkLHksaSxjKSxsLl9faz1sLnByb3BzLmNoaWxkcmVuLHZ8fF8obixsLHUsdCxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmaSxvLHIsZixjKSxjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09ZC52YWx1ZSYmZC52YWx1ZSE9PW4udmFsdWUmJihuLnZhbHVlPW51bGw9PWQudmFsdWU/XCJcIjpkLnZhbHVlKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PWQuY2hlY2tlZCYmZC5jaGVja2VkIT09bi5jaGVja2VkJiYobi5jaGVja2VkPWQuY2hlY2tlZCkpfXJldHVybiBufWZ1bmN0aW9uIHoobCx1LHQpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCx0KX19ZnVuY3Rpb24gQShsLHUsdCl7dmFyIGksbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLChpPWwucmVmKSYmKGkuY3VycmVudCYmaS5jdXJyZW50IT09bC5fX2V8fHooaSxudWxsLHUpKSx0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fCh0PW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9bnVsbCxudWxsIT0oaT1sLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bC5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZBKGlbcl0sdSx0KTtudWxsIT1vJiZhKG8pfWZ1bmN0aW9uIEQobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGkscixjO24uX18mJm4uX18obCx1KSxyPShpPXQ9PT1vKT9udWxsOnQmJnQuX19rfHx1Ll9fayxsPWgoeSxudWxsLFtsXSksYz1bXSxUKHUsKGk/dTp0fHx1KS5fX2s9bCxyfHxmLGYsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsdCYmIWk/W3RdOnI/bnVsbDplLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSxjLHR8fGYsaSksJChjLGwpfWZ1bmN0aW9uIEgobixsKXtFKG4sbCxvKX1mdW5jdGlvbiBJKG4sbCl7cmV0dXJuIGw9cyhzKHt9LG4ucHJvcHMpLGwpLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGwuY2hpbGRyZW49ZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSksdihuLnR5cGUsbCxsLmtleXx8bi5rZXksbC5yZWZ8fG4ucmVmKX1mdW5jdGlvbiBMKG4pe3ZhciBsPXt9LHU9e19fYzpcIl9fY0NcIityKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdCxpPXRoaXM7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodD1bXSx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBsW3UuX19jXT1pLGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKGwpe24udmFsdWUhPT1sLnZhbHVlJiZ0LnNvbWUoZnVuY3Rpb24obil7bi5jb250ZXh0PWwudmFsdWUsZyhuKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt0LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dC5zcGxpY2UodC5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGU9dSx1fW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYodS5jb25zdHJ1Y3RvciYmbnVsbCE9dS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih0PSEwLHUuc2V0U3RhdGUodS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodD0hMCx1LmNvbXBvbmVudERpZENhdGNoKG4pKSx0KXJldHVybiBnKHUuX19FPXUpfWNhdGNoKGwpe249bH10aHJvdyBufX0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PXRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4odSx0aGlzLnByb3BzKSksbiYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYodGhpcy5fX2U9ITEsbCYmdGhpcy5fX2gucHVzaChsKSxnKHRoaXMpKX0sZC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGcodGhpcykpfSxkLnByb3RvdHlwZS5yZW5kZXI9eSx1PVtdLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsbz1mLHI9MDtleHBvcnR7RSBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLGggYXMgY3JlYXRlRWxlbWVudCxoLHkgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCxkIGFzIENvbXBvbmVudCxJIGFzIGNsb25lRWxlbWVudCxMIGFzIGNyZWF0ZUNvbnRleHQsYiBhcyB0b0NoaWxkQXJyYXksQSBhcyBfdW5tb3VudCxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLGk9W10sbz1uLl9fcixmPW4uZGlmZmVkLGM9bi5fX2MsZT1uLnVubW91bnQ7ZnVuY3Rpb24gYSh0KXtuLl9faCYmbi5fX2godSk7dmFyIHI9dS5fX0h8fCh1Ll9fSD17dDpbXSx1OltdfSk7cmV0dXJuIHQ+PXIudC5sZW5ndGgmJnIudC5wdXNoKHt9KSxyLnRbdF19ZnVuY3Rpb24gdihuKXtyZXR1cm4gbShFLG4pfWZ1bmN0aW9uIG0obixyLGkpe3ZhciBvPWEodCsrKTtyZXR1cm4gby5fX2N8fChvLl9fYz11LG8uaT1baT9pKHIpOkUodm9pZCAwLHIpLGZ1bmN0aW9uKHQpe3ZhciB1PW4oby5pWzBdLHQpO28uaVswXSE9PXUmJihvLmlbMF09dSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0pLG8uaX1mdW5jdGlvbiBwKG4scil7dmFyIGk9YSh0KyspO3goaS5vLHIpJiYoaS5pPW4saS5vPXIsdS5fX0gudS5wdXNoKGkpKX1mdW5jdGlvbiBsKG4scil7dmFyIGk9YSh0KyspO3goaS5vLHIpJiYoaS5pPW4saS5vPXIsdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gZChuKXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gcyhuLHQsdSl7bChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiB5KG4sdSl7dmFyIHI9YSh0KyspO3JldHVybiB4KHIubyx1KT8oci5vPXUsci52PW4sci5pPW4oKSk6ci5pfWZ1bmN0aW9uIFQobix0KXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB3KG4pe3ZhciByPXUuY29udGV4dFtuLl9fY107aWYoIXIpcmV0dXJuIG4uX187dmFyIGk9YSh0KyspO3JldHVybiBudWxsPT1pLmkmJihpLmk9ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWV9ZnVuY3Rpb24gQSh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBGKG4pe3ZhciByPWEodCsrKSxpPXYoKTtyZXR1cm4gci5pPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5pJiZyLmkobiksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gXygpe2kuc29tZShmdW5jdGlvbihuKXtuLl9fUCYmKG4uX19ILnUuZm9yRWFjaChnKSxuLl9fSC51LmZvckVhY2gocSksbi5fX0gudT1bXSl9KSxpPVtdfWZ1bmN0aW9uIGcobil7bi5tJiZuLm0oKX1mdW5jdGlvbiBxKG4pe3ZhciB0PW4uaSgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihuLm09dCl9ZnVuY3Rpb24geChuLHQpe3JldHVybiFufHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9bi5fX3I9ZnVuY3Rpb24obil7byYmbyhuKSx0PTAsKHU9bi5fX2MpLl9fSCYmKHUuX19ILnUuZm9yRWFjaChnKSx1Ll9fSC51LmZvckVhY2gocSksdS5fX0gudT1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2YmJmYodCk7dmFyIHU9dC5fX2M7aWYodSl7dmFyIG89dS5fX0g7byYmby51Lmxlbmd0aCYmKDEhPT1pLnB1c2godSkmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KShfKSl9fSxuLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faC5mb3JFYWNoKGcpLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5pfHxxKG4pfSl9KSxjJiZjKG4sdCl9LG4udW5tb3VudD1mdW5jdGlvbihuKXtlJiZlKG4pO3ZhciB0PW4uX19jO2lmKHQpe3ZhciB1PXQuX19IO3UmJnUudC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JldHVybiBuLm0mJm4ubSgpfSl9fTtleHBvcnR7diBhcyB1c2VTdGF0ZSxtIGFzIHVzZVJlZHVjZXIscCBhcyB1c2VFZmZlY3QsbCBhcyB1c2VMYXlvdXRFZmZlY3QsZCBhcyB1c2VSZWYscyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLHkgYXMgdXNlTWVtbyxUIGFzIHVzZUNhbGxiYWNrLHcgYXMgdXNlQ29udGV4dCxBIGFzIHVzZURlYnVnVmFsdWUsRiBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsImltcG9ydCB7IENvbnRleHQsIFBVU0hfQkFTRV9VUkwsIFByb3BzT2JqZWN0LCBnZXRJbnN0YWxsSWQgfSBmcm9tICcuJztcbmltcG9ydCB7IGF1dGhlZEZldGNoLCBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBIdHRwTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWwge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHN1YnNjcmliZWQ6IEJvb2xlYW47XG4gICAgbWV0YT86IFByb3BzT2JqZWN0IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsU3BlYyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHN1YnNjcmliZTogYm9vbGVhbjtcbiAgICBtZXRhPzogUHJvcHNPYmplY3QgfCBudWxsO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgc2hvd0luUG9ydGFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogSHR0cE1ldGhvZCxcbiAgICAgICAgdXVpZHM6IHN0cmluZ1tdXG4gICAgKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVscy9zdWJzY3JpcHRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoKHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BPU1QnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gdGhlIGNoYW5uZWxzIGdpdmVuIGJ5IHVuaXF1ZSBJRFxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ0RFTEVURScsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbnMgY2hhbm5lbCBzdWJzY3JpcHRpb25zIHRvIHRob3NlIGdpdmVuIGJ5IHVuaXF1ZSBJRC5cbiAgICAgKlxuICAgICAqIEFueSBvdGhlciBzdWJzY3JpcHRpb25zIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBzZXRTdWJzY3JpcHRpb25zKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BVVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBleGlzdGluZyBpbnN0YWxsYXRpb24ncyBjaGFubmVsIHN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBjbGVhclN1YnNjcmlwdGlvbnMoKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJzY3JpcHRpb25zKFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0cyB0aGUgY2hhbm5lbHMgYXZhaWxhYmxlIHRvIHRoaXMgaW5zdGFsbGF0aW9uIGFsb25nIHdpdGggc3Vic2NyaXB0aW9uIHN0YXR1c1xuICAgICAqL1xuICAgIGxpc3RDaGFubmVscygpOiBQcm9taXNlPENoYW5uZWxbXT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVsc2A7XG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2hKc29uPENoYW5uZWxbXT4odGhpcy5jb250ZXh0LCB1cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHVzaCBjaGFubmVsIGFuZCBvcHRpb25hbGx5IHN1YnNjcmliZXMgdGhlIGN1cnJlbnQgaW5zdGFsbGF0aW9uLlxuICAgICAqXG4gICAgICogTmFtZSBpcyBvcHRpb25hbCwgYnV0IHJlcXVpcmVkIGlmIHNob3dJblBvcnRhbCBpcyB0cnVlLlxuICAgICAqL1xuICAgIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbFNwZWM6IENoYW5uZWxTcGVjKTogUHJvbWlzZTxDaGFubmVsPiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoYW5uZWxTcGVjLnNob3dJblBvcnRhbCAmJlxuICAgICAgICAgICAgKCFjaGFubmVsU3BlYy5uYW1lIHx8ICFjaGFubmVsU3BlYy5uYW1lLmxlbmd0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAnTmFtZSBpcyByZXF1aXJlZCBmb3IgY2hhbm5lbCBjcmVhdGlvbiB3aGVuIHNob3dJblBvcnRhbCBpcyB0cnVlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vdjEvY2hhbm5lbHNgO1xuXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHV1aWQ6IGNoYW5uZWxTcGVjLnV1aWQsXG4gICAgICAgICAgICAgICAgbmFtZTogY2hhbm5lbFNwZWMubmFtZSxcbiAgICAgICAgICAgICAgICBzaG93SW5Qb3J0YWw6IEJvb2xlYW4oY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsKSxcbiAgICAgICAgICAgICAgICBtZXRhOiBjaGFubmVsU3BlYy5tZXRhLFxuICAgICAgICAgICAgICAgIGluc3RhbGxJZDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoY2hhbm5lbFNwZWMuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgKHBhcmFtcyBhcyBhbnkpLmluc3RhbGxJZCA9IGluc3RhbGxJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2hKc29uPENoYW5uZWw+KHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXV0aGVkRmV0Y2gsIGN5cmI1MywgdXVpZHY0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBkZWwsIGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgU0RLX1ZFUlNJT04gPSAnMS4yLjInO1xuY29uc3QgU0RLX1RZUEUgPSAxMDtcbmNvbnN0IEVWRU5UU19CQVNFX1VSTCA9ICdodHRwczovL2V2ZW50cy5rdW11bG9zLmNvbSc7XG5leHBvcnQgY29uc3QgUFVTSF9CQVNFX1VSTCA9ICdodHRwczovL3B1c2gua3VtdWxvcy5jb20nO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XG4gICAgTUVTU0FHRV9ERUxJVkVSRUQgPSAnay5tZXNzYWdlLmRlbGl2ZXJlZCcsXG4gICAgTUVTU0FHRV9PUEVORUQgPSAnay5tZXNzYWdlLm9wZW5lZCcsXG4gICAgUFVTSF9SRUdJU1RFUkVEID0gJ2sucHVzaC5kZXZpY2VSZWdpc3RlcmVkJyxcbiAgICBJTlNUQUxMX1RSQUNLRUQgPSAnay5zdGF0cy5pbnN0YWxsVHJhY2tlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVEVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0ZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGlvbkNsZWFyZWQnLFxuICAgIFBBR0VfVklFV0VEID0gJ2sucGFnZVZpZXdlZCdcbn1cblxuLy8gTm90ZSBkdXBsaWNhdGUgJ2luJyB2cyAnSU4nIGR1ZSB0byBtaXNhbGlnbm1lbnQgaW4gc2VydmVyIGNvbmZpZyBhbmQgcHVibGlzaGVkIGRvY3MgZm9yIG1hbnVhbCBjb25maWdcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9yID0gJ2luJyB8ICdJTicgfCAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcbmV4cG9ydCB0eXBlIEZpbHRlclZhbHVlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUHJvcEZpbHRlciA9IFtzdHJpbmcsIEZpbHRlck9wZXJhdG9yLCBGaWx0ZXJWYWx1ZV07XG5cbmludGVyZmFjZSBQcm9tcHRUcmlnZ2VyIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGFmdGVyU2Vjb25kcz86IG51bWJlcjtcbiAgICBmaWx0ZXJzPzogUHJvcEZpbHRlcltdO1xufVxuXG5pbnRlcmZhY2UgUHJvbXB0T3ZlcmxheUNvbmZpZyB7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsaW5rczogeyBsYWJlbDogc3RyaW5nOyB1cmw6IHN0cmluZyB9W107XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHNoYWRlOiBzdHJpbmc7XG4gICAgICAgIHN0cmlwOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICB9O1xufVxuXG5pbnRlcmZhY2UgQmVsbFByb21wdENvbmZpZyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR5cGU6ICdiZWxsJztcbiAgICB0cmlnZ2VyOiBQcm9tcHRUcmlnZ2VyO1xuICAgIGxhYmVscz86IHtcbiAgICAgICAgdG9vbHRpcD86IHtcbiAgICAgICAgICAgIHN1YnNjcmliZT86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNvbG9ycz86IHtcbiAgICAgICAgYmVsbD86IHtcbiAgICAgICAgICAgIGJnPzogc3RyaW5nO1xuICAgICAgICAgICAgZmc/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuICAgIG92ZXJsYXk/OiBQcm9tcHRPdmVybGF5Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWcgPSBCZWxsUHJvbXB0Q29uZmlnO1xuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlncyA9IHsgW2tleTogc3RyaW5nXTogUHJvbXB0Q29uZmlnIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG4gICAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gICAgdmFwaWRQdWJsaWNLZXk6IHN0cmluZztcbiAgICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgICBwdXNoUHJvbXB0cz86IFByb21wdENvbmZpZ3MgfCAnYXV0byc7XG4gICAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbn1cblxudHlwZSBTZGtFdmVudFR5cGUgPSAnZXZlbnRUcmFja2VkJztcbmV4cG9ydCB0eXBlIFNka0V2ZW50PFQgPSBhbnk+ID0geyB0eXBlOiBTZGtFdmVudFR5cGU7IGRhdGE6IFQgfTtcbnR5cGUgU2RrRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBTZGtFdmVudCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlY3JldEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXV0aEhlYWRlcjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJQYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcHVzaFByb21wdHM6IHsgW2tleTogc3RyaW5nXTogUHJvbXB0Q29uZmlnIH0gfCAnYXV0byc7XG4gICAgcmVhZG9ubHkgYXV0b1Jlc3Vic2NyaWJlOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBTZGtFdmVudEhhbmRsZXJbXSB9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBjb25maWcuc2VjcmV0S2V5O1xuICAgICAgICB0aGlzLnZhcGlkUHVibGljS2V5ID0gY29uZmlnLnZhcGlkUHVibGljS2V5O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3RoaXMuYXBpS2V5fToke3RoaXMuc2VjcmV0S2V5fWApfWA7XG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclBhdGggPSBjb25maWcuc2VydmljZVdvcmtlclBhdGggPz8gJy93b3JrZXIuanMnO1xuICAgICAgICB0aGlzLnB1c2hQcm9tcHRzID0gY29uZmlnLnB1c2hQcm9tcHRzID8/ICdhdXRvJztcbiAgICAgICAgdGhpcy5hdXRvUmVzdWJzY3JpYmUgPSBjb25maWcuYXV0b1Jlc3Vic2NyaWJlID8/IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZShldmVudDogU2RrRXZlbnRUeXBlLCBoYW5kbGVyOiBTZGtFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5pbmRleE9mKGhhbmRsZXIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGV2ZW50OiBTZGtFdmVudFR5cGUsIGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XVtpXSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyAnQ29uZmlnIG11c3QgYmUgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCByZXF1aXJlZFN0cmluZ1Byb3BzID0gWydhcGlLZXknLCAnc2VjcmV0S2V5JywgJ3ZhcGlkUHVibGljS2V5J107XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxufVxuXG5sZXQgaW5zdGFsbElkUHJvbWlzZTogUHJvbWlzZTxJbnN0YWxsSWQ+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8SW5zdGFsbElkPiB7XG4gICAgaWYgKGluc3RhbGxJZFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG4gICAgfVxuXG4gICAgaW5zdGFsbElkUHJvbWlzZSA9IGdldDxJbnN0YWxsSWQgfCB1bmRlZmluZWQ+KCdpbnN0YWxsSWQnKS50aGVuKFxuICAgICAgICBpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnN0YWxsSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0KCdpbnN0YWxsSWQnLCB1dWlkdjQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsSWQ7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICByZXR1cm4gZ2V0PFVzZXJJZCB8IHVuZGVmaW5lZD4oJ3VzZXJJZCcpLnRoZW4oXG4gICAgICAgIHVzZXJJZCA9PiB1c2VySWQgPz8gZ2V0SW5zdGFsbElkKClcbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzb2NpYXRlVXNlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgaWQ6IFVzZXJJZCxcbiAgICBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHNldCgndXNlcklkJywgaWQpO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRFRCwgcHJvcHMpLnRoZW4oXyA9PiB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclVzZXJBc3NvY2lhdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCwge1xuICAgICAgICBvbGRVc2VySWRlbnRpZmllcjogY3VycmVudFVzZXJJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbCgndXNlcklkJyk7XG59XG5cbmV4cG9ydCB0eXBlIEt1bXVsb3NFdmVudCA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRhdGE/OiBQcm9wc09iamVjdDtcbn07XG5cbmV4cG9ydCB0eXBlIEV2ZW50UGF5bG9hZCA9IEt1bXVsb3NFdmVudFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tFdmVudChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFBheWxvYWQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB1dWlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCB1cmwgPSBgJHtFVkVOVFNfQkFTRV9VUkx9L3YxL2FwcC1pbnN0YWxscy8ke2luc3RhbGxJZH0vZXZlbnRzYDtcblxuICAgIGN0eC5icm9hZGNhc3QoJ2V2ZW50VHJhY2tlZCcsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50cylcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrSW5zdGFsbERldGFpbHMoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICBidW5kbGU6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnLCAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICAgICAgdGFyZ2V0OiAyIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgIH0sXG4gICAgICAgIHNkazoge1xuICAgICAgICAgICAgaWQ6IFNES19UWVBFLFxuICAgICAgICAgICAgdmVyc2lvbjogU0RLX1ZFUlNJT05cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICB2ZXJzaW9uOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgIH0sXG4gICAgICAgIG9zOiB7XG4gICAgICAgICAgICAvLyBEZXRlY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWQgc2VydmVyLXNpZGUgZnJvbSBVQSBkYXRhXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCdcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlOiB7XG4gICAgICAgICAgICAvLyBXaWxsIGJlIGhhbmRsZWQgb24gYmVzdC1lZmZvcnQgYmFzaXMgc2VydmVyLXNpZGVcbiAgICAgICAgICAgIG5hbWU6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICB0ejpcbiAgICAgICAgICAgICAgICB0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgPyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBpc1NpbXVsYXRvcjogZmFsc2UsXG4gICAgICAgICAgICBsb2NhbGU6IG5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc2hQYXJ0cyA9IFtcbiAgICAgICAgU0RLX1ZFUlNJT04sXG4gICAgICAgIHBheWxvYWQuYXBwLmJ1bmRsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UudHosXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLmxvY2FsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubmFtZVxuICAgIF07XG4gICAgY29uc3QgaGFzaCA9IGN5cmI1MyhoYXNoUGFydHMuam9pbignfCcpKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdkZXRhaWxzSGFzaCcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0hhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLklOU1RBTExfVFJBQ0tFRCwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0KCdkZXRhaWxzSGFzaCcsIGhhc2gpKVxuICAgICAgICAudGhlbigoKSA9PiB2b2lkIDApO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgPSAnc3Vic2NyaWJlZCcgfCAndW5zdWJzY3JpYmVkJyB8ICdibG9ja2VkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcihcbiAgICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj4ge1xuICAgIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICdTZXJ2aWNlV29ya2VyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLCBhYm9ydGluZy4uLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIocGF0aCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnTm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHVzaFJlZ2lzdGVyKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB3b3JrZXJSZWc6IFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb25cbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnUHVzaCBub3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgIGlmIChleGlzdGluZ1N1YiAmJiAhaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgIGF3YWl0IGV4aXN0aW5nU3ViPy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogY3R4LnZhcGlkUHVibGljS2V5LFxuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuZHBvaW50ID0gc3ViLmVuZHBvaW50O1xuICAgIGNvbnN0IGVuZHBvaW50SGFzaCA9IGN5cmI1MyhlbmRwb2ludCk7XG4gICAgY29uc3QgZXhwaXJ5ID0gc3ViLmV4cGlyYXRpb25UaW1lO1xuXG4gICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZW5kcG9pbnRIYXNoICYmXG4gICAgICAgICghZXhpc3RpbmdFeHBpcnkgfHwgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgdHlwZTogMyxcbiAgICAgICAgdG9rZW46IHN1YlxuICAgIH0pO1xuXG4gICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICBhd2FpdCBzZXQoJ3B1c2hFeHBpcmVzQXQnLCBleHBpcnkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgIGNvbnN0IHBlcm0gPSBhd2FpdCByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpO1xuXG4gICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICB9XG5cbiAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKTtcblxuICAgIGlmICghcmVnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHB1c2hSZWdpc3RlcihjdHgsIHJlZyk7XG4gICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNTYW1lS2V5KHZhcGlkS2V5OnN0cmluZywgc3Vic2NyaXB0aW9uOlB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKGN0eDpDb250ZXh0KTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICBpZiAocGVybSA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICB9XG5cbiAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKTtcbiAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgaWYgKHN1YiAmJiBwZXJtID09PSAnZ3JhbnRlZCcgJiYgaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIHN1YikpIHtcbiAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4IDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgaWYgKHBlcm0gIT09ICdncmFudGVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICApO1xuXG4gICAgaWYgKGV4aXN0aW5nRW5kcG9pbnRIYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgKGV4aXN0aW5nRXhwaXJ5ID09PSBudWxsIHx8IGV4aXN0aW5nRXhwaXJ5ID09PSB1bmRlZmluZWQgfHwgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG5cbiAgICAgICAgaWYgKCFyZWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gd29ya2VyLCBhYm9ydGluZyBhdXRvLXJlc3Vic2NyaXB0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHVzaFJlZ2lzdGVyKGN0eCwgcmVnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTYsIEpha2UgQXJjaGliYWxkXG5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuLy8gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICByZWFkb25seSBfZGJwOiBQcm9taXNlPElEQkRhdGFiYXNlPjtcblxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9ICdrZXl2YWwtc3RvcmUnLCByZWFkb25seSBzdG9yZU5hbWUgPSAna2V5dmFsJykge1xuICAgICAgICB0aGlzLl9kYnAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcGVucmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCAxKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShvcGVucmVxLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgc2V0dXA6IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgc3RvcmVcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5yZXEucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfd2l0aElEQlN0b3JlKFxuICAgICAgICB0eXBlOiBJREJUcmFuc2FjdGlvbk1vZGUsXG4gICAgICAgIGNhbGxiYWNrOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlKSA9PiB2b2lkXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYnAudGhlbihcbiAgICAgICAgICAgIGRiID0+XG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IHN0b3JlOiBTdG9yZTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFN0b3JlKCkge1xuICAgIGlmICghc3RvcmUpIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFR5cGU+KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTxUeXBlPiB7XG4gICAgbGV0IHJlcTogSURCUmVxdWVzdDtcbiAgICByZXR1cm4gc3RvcmVcbiAgICAgICAgLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xuICAgICAgICAgICAgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHJlcS5yZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgdmFsdWU6IGFueSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwoXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5cyhzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTxJREJWYWxpZEtleVtdPiB7XG4gICAgY29uc3Qga2V5czogSURCVmFsaWRLZXlbXSA9IFtdO1xuXG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgd291bGQgYmUgc3RvcmUuZ2V0QWxsS2V5cygpLCBidXQgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEVkZ2Ugb3IgU2FmYXJpLlxuICAgICAgICAgICAgLy8gQW5kIG9wZW5LZXlDdXJzb3IgaXNuJ3Qgc3VwcG9ydGVkIGJ5IFNhZmFyaS5cbiAgICAgICAgICAgIChzdG9yZS5vcGVuS2V5Q3Vyc29yIHx8IHN0b3JlLm9wZW5DdXJzb3IpLmNhbGwoXG4gICAgICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICAgICkub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3VsdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGtleXMucHVzaCh0aGlzLnJlc3VsdC5rZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0LmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBrZXlzKTtcbn1cbiIsImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIENvbnRleHQgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge1xuICAgIFN0b3JlLFxuICAgIGRlbCBhcyBpZGJEZWwsXG4gICAgZ2V0IGFzIGlkYkdldCxcbiAgICBzZXQgYXMgaWRiU2V0XG59IGZyb20gJy4vaWRiLWtleXZhbCc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCdrdW11bG9zJywgJ2RlZmF1bHQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUPihrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGlkYkdldChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldDxUIGV4dGVuZHMgYW55PihrZXk6IElEQlZhbGlkS2V5LCB2YWx1ZTogVCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJTZXQoa2V5LCB2YWx1ZSwgc3RvcmUpLnRoZW4oKCkgPT4gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKGtleTogSURCVmFsaWRLZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gaWRiRGVsKGtleSwgc3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdENvbmZpZyhjb25maWc6IENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPENvbmZpZ3VyYXRpb24+IHtcbiAgICByZXR1cm4gc2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnLCBjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKTogUHJvbWlzZTxDb250ZXh0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGdldDxDb25maWd1cmF0aW9uPignY29uZmlnJykudGhlbihjb25maWcgPT5cbiAgICAgICAgY29uZmlnID8gbmV3IENvbnRleHQoY29uZmlnKSA6IHVuZGVmaW5lZFxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi5cIjtcblxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oXG4gICAgICAgICAgICBjXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoMWU3KS50b1N0cmluZygpICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoXG4gICAgICAgIC9bMDE4XS9nLFxuICAgICAgICBjID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKGMpIF5cbiAgICAgICAgICAgICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJlxuICAgICAgICAgICAgICAgICAgICAoMTUgPj4gKE51bWJlcihjKSAvIDQpKSlcbiAgICAgICAgICAgICkudG9TdHJpbmcoMTYpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXF1aXJlZFRoaW5ncyA9IFtcbiAgICAgICAgdHlwZW9mIFByb21pc2UsXG4gICAgICAgIHR5cGVvZiBmZXRjaCxcbiAgICAgICAgdHlwZW9mIE5vdGlmaWNhdGlvbixcbiAgICAgICAgdHlwZW9mIGluZGV4ZWREQixcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICB0eXBlb2YgUHVzaE1hbmFnZXJcbiAgICBdO1xuXG4gICAgcmV0dXJuIHJlcXVpcmVkVGhpbmdzLnJlZHVjZShcbiAgICAgICAgKHN1cHBvcnRlZDogYm9vbGVhbiwgdGhpbmcpID0+IHN1cHBvcnRlZCAmJiB0aGluZyAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIHRydWVcbiAgICApO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG5jb25zdCBpbXVsID1cbiAgICBNYXRoLmltdWwgfHxcbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGIgfD0gMDsgLy8gZW5zdXJlIHRoYXQgb3BCIGlzIGFuIGludGVnZXIuIG9wQSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29lcmNlZC5cbiAgICAgICAgLy8gZmxvYXRpbmcgcG9pbnRzIGdpdmUgdXMgNTMgYml0cyBvZiBwcmVjaXNpb24gdG8gd29yayB3aXRoIHBsdXMgMSBzaWduIGJpdFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgZm9yIG91ciBjb252aWVuZW5jZTpcbiAgICAgICAgLy8gMS4gMHgwMDNmZmZmZiAvKm9wQSAmIDB4MDAwZmZmZmYqLyAqIDB4N2ZmZmZmZmYgLypvcEIqLyA9IDB4MWZmZmZmN2ZjMDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIHZhciByZXN1bHQgPSAoYSAmIDB4MDAzZmZmZmYpICogYjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChhICYgMHhmZmMwMDAwMCAvKiE9PSAwKi8pIHJlc3VsdCArPSAoKGEgJiAweGZmYzAwMDAwKSAqIGIpIHwgMDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwXG5leHBvcnQgZnVuY3Rpb24gY3lyYjUzKHN0cjogc3RyaW5nLCBzZWVkID0gMCk6IG51bWJlciB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBpbXVsKGgyIF4gY2gsIDE1OTczMzQ2NzcpO1xuICAgIH1cbiAgICBoMSA9XG4gICAgICAgIGltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID1cbiAgICAgICAgaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgcmV0dXJuIDQyOTQ5NjcyOTYgKiAoMjA5NzE1MSAmIGgyKSArIChoMSA+Pj4gMCk7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2goXG4gICAgY3R4OkNvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHttZXRob2Q6ICdHRVQnfVxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/PyB7fTtcblxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGN0eC5hdXRoSGVhZGVyLFxuICAgICAgICAuLi5leGlzdGluZ0hlYWRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaEpzb248VD4oY3R4OkNvbnRleHQsdXJsOlJlcXVlc3RJbmZvLG9wdGlvbnM/OlJlcXVlc3RJbml0KSA6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwgb3B0aW9ucykudGhlbihyID0+IHIuanNvbigpKTtcbn1cblxuLy8gQmFzZWQgb24gdGhlIGFscGhhYmV0cyBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCBUYWJsZXMgMSAmIDJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxFbmNvZGUoYnVmZmVyOkFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbnRzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBiYXNlNjRFbmNvZGVkID0gYnRvYShpbnRzLnJlZHVjZSgoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksICcnKSk7XG4gICAgY29uc3QgdXJsVmFyaWFudCA9IGJhc2U2NEVuY29kZWQucmVwbGFjZSgnKycsICctJykucmVwbGFjZSgnLycsICdfJykucmVwbGFjZSgnPScsICcnKTtcblxuICAgIHJldHVybiB1cmxWYXJpYW50O1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgSW5zdGFsbElkLFxuICAgIFByb3BzT2JqZWN0LFxuICAgIFVzZXJJZCxcbiAgICBhc3NlcnRDb25maWdWYWxpZCxcbiAgICBhc3NvY2lhdGVVc2VyLFxuICAgIGNsZWFyVXNlckFzc29jaWF0aW9uLFxuICAgIGdldEluc3RhbGxJZCxcbiAgICBnZXRVc2VySWQsXG4gICAgdHJhY2tFdmVudCxcbiAgICB0cmFja0luc3RhbGxEZXRhaWxzXG59IGZyb20gJy4vY29yZSc7XG5pbXBvcnQge1xuICAgIHB1c2hSZWdpc3RlcixcbiAgICByZWdpc3RlclNlcnZpY2VXb3JrZXIsXG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb25cbn0gZnJvbSAnLi9jb3JlL3B1c2gnO1xuXG5pbXBvcnQgeyBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB9IGZyb20gJy4vY29yZS9jaGFubmVscyc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyIH0gZnJvbSAnLi9wcm9tcHRzJztcbmltcG9ydCB7IHBlcnNpc3RDb25maWcgfSBmcm9tICcuL2NvcmUvc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEt1bXVsb3Mge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJSZWc6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj47XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9tcHRNYW5hZ2VyOiBQcm9tcHRNYW5hZ2VyO1xuICAgIHByaXZhdGUgY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI/OiBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChjb25maWcpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChjb25maWcpO1xuXG4gICAgICAgIHBlcnNpc3RDb25maWcoY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclJlZyA9IHJlZ2lzdGVyU2VydmljZVdvcmtlcihcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucHJvbXB0TWFuYWdlciA9IG5ldyBQcm9tcHRNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8SW5zdGFsbElkPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50VXNlcklkZW50aWZpZXIoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICAgICAgcmV0dXJuIGdldFVzZXJJZCgpO1xuICAgIH1cblxuICAgIGFzc29jaWF0ZVVzZXIoaWRlbnRpZmllcjogVXNlcklkLCBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGFzc29jaWF0ZVVzZXIodGhpcy5jb250ZXh0LCBpZGVudGlmaWVyLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICBjbGVhclVzZXJBc3NvY2lhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGNsZWFyVXNlckFzc29jaWF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudCh0eXBlOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2tFdmVudCh0aGlzLmNvbnRleHQsIHR5cGUsIHByb3BlcnRpZXMpLnRoZW4oXyA9PiB2b2lkIDApO1xuICAgIH1cblxuICAgIHB1c2hSZWdpc3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKClcbiAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnZ3JhbnRlZCcgIT09IHBlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2VXb3JrZXJSZWc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVnID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHVzaFJlZ2lzdGVyKHRoaXMuY29udGV4dCwgcmVnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk6IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyID0gbmV3IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuICAgIH1cbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmVsbC5zY3NzXCIpO1xuY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgUFVTSF9CQVNFX1VSTCwgUHJvbXB0Q29uZmlncyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9jb3JlL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gICAgcHVibGljS2V5OiBzdHJpbmc7XG4gICAgcHJvbXB0czogUHJvbXB0Q29uZmlncztcbn1cblxuZnVuY3Rpb24gbG9hZENvbmZpZyhjdHg6IENvbnRleHQpOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgY29uc3QgdXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vdjEvd2ViL2NvbmZpZ2A7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoSnNvbjxQbGF0Zm9ybUNvbmZpZz4oY3R4LCB1cmwpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFByb21wdENvbmZpZ3MoY3R4OiBDb250ZXh0KTogUHJvbWlzZTxQcm9tcHRDb25maWdzPiB7XG4gICAgY29uc3QgTUFYX0FHRV9NUyA9IDEgKiA2MCAqIDYwICogMTAwMDtcbiAgICBsZXQgcmVtb3RlUHJvbXB0cyA9IHt9IGFzIFByb21wdENvbmZpZ3M7XG5cbiAgICBjb25zdCBsYXN0UHJvbXB0TG9hZFRpbWUgPSBhd2FpdCBnZXQ8bnVtYmVyPigncHJvbXB0c1VwZGF0ZWQnKSA/PyAwO1xuICAgIGxldCB1cGRhdGVkUmVtb3RlQ29uZmlnID0gZmFsc2U7XG5cbiAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RQcm9tcHRMb2FkVGltZSA+IE1BWF9BR0VfTVMpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdQcm9tcHRzIG5ldmVyIHN5bmNlZC9zdGFsZSwgc3luY2luZyBub3cuLi4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm1Db25maWcgPSBhd2FpdCBsb2FkQ29uZmlnKGN0eCk7XG4gICAgICAgICAgICByZW1vdGVQcm9tcHRzID0gcGxhdGZvcm1Db25maWcucHJvbXB0cztcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxvY2FsUHJvbXB0cyA9IGF3YWl0IGdldDxQcm9tcHRDb25maWdzPigncHJvbXB0cycpID8/IHt9O1xuXG4gICAgbGV0IG1lcmdlZFByb21wdHMgPSB7IC4uLmxvY2FsUHJvbXB0cyB9O1xuXG4gICAgaWYgKHVwZGF0ZWRSZW1vdGVDb25maWcpIHtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gcmVtb3RlUHJvbXB0cykge1xuICAgICAgICAgICAgbWVyZ2VkUHJvbXB0c1tpZF0gPSByZW1vdGVQcm9tcHRzW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvY2FsSWRzID0gT2JqZWN0LmtleXMobG9jYWxQcm9tcHRzKTtcbiAgICAgICAgY29uc3QgcmVtb3RlSWRzID0gT2JqZWN0LmtleXMocmVtb3RlUHJvbXB0cyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZWRJZHMgPSBsb2NhbElkcy5maWx0ZXIoaWQgPT4gcmVtb3RlSWRzLmluZGV4T2YoaWQpID09PSAtMSk7XG5cbiAgICAgICAgZm9yIChsZXQgaWQgb2YgcmVtb3ZlZElkcykge1xuICAgICAgICAgICAgZGVsZXRlIG1lcmdlZFByb21wdHNbaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwcm9tcHRzJywgbWVyZ2VkUHJvbXB0cyk7XG4gICAgICAgIGF3YWl0IHNldCgncHJvbXB0c1VwZGF0ZWQnLCBEYXRlLm5vdygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkUHJvbXB0cztcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50UGF5bG9hZCwgUHJvbXB0Q29uZmlnLCBTZGtFdmVudCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBQdXNoU3Vic2NyaXB0aW9uU3RhdGUsXG4gICAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlLFxuICAgIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbixcbiAgICByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaFxufSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHsgbG9hZFByb21wdENvbmZpZ3MgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyB0cmlnZ2VyTWF0Y2hlZCB9IGZyb20gJy4vdHJpZ2dlcnMnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRNYW5hZ2VyU3RhdGUgPSAnbG9hZGluZycgfCAncmVhZHknIHwgJ3JlcXVlc3RpbmcnO1xuXG4vLyBsb2FkaW5nIC0+IHJlYWR5XG4vLyByZWFkeSAtPiByZXF1ZXN0aW5nXG4vLyByZXF1ZXN0aW5nIC0+IHJlYWR5XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSB1aVJvb3Q6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBzdGF0ZT86IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvblN0YXRlPzogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByaXZhdGUgZXZlbnRRdWV1ZTogRXZlbnRQYXlsb2FkO1xuICAgIHByaXZhdGUgcHJvbXB0czogeyBbeDogc3RyaW5nXTogUHJvbXB0Q29uZmlnIH07XG4gICAgcHJpdmF0ZSBhY3RpdmVQcm9tcHRzOiBQcm9tcHRDb25maWdbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQcm9tcHRDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5wcm9tcHRzID0ge307XG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMgPSBbXTtcblxuICAgICAgICB0aGlzLnVpUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnVpUm9vdC5pZCA9ICdrdW11bG9zLXVpLXJvb3QnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudWlSb290KTtcblxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnbG9hZGluZycpO1xuICAgICAgICBjdHguc3Vic2NyaWJlKCdldmVudFRyYWNrZWQnLCB0aGlzLm9uRXZlbnRUcmFja2VkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXZlbnRUcmFja2VkID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnUHJvbXB0IHRyaWdnZXIgc2F3IGV2ZW50JywgZSk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gZS5kYXRhIGFzIEV2ZW50UGF5bG9hZDtcblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUucHVzaCguLi5ldmVudHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVhZHknKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ05vdCByZWFkeSwgd2FpdGluZyBvbiBxdWV1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYWN0aXZhdGVEZWZlcnJlZFByb21wdCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gYXN5bmMgKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nJyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblByb21wdERlY2xpbmVkID0gKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIC8vIFRPRE8gcmVjb3JkIHN0YXRlIGV0Yy5cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSB8fCAhdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgcHJvbXB0cz17dGhpcy5hY3RpdmVQcm9tcHRzfVxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5zdGF0ZSBhcyBQcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgcmVxdWVzdE5hdGl2ZVByb21wdD17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ9e3RoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgdGhpcy51aVJvb3RcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGV2YWx1YXRlVHJpZ2dlcnMoKSB7XG4gICAgICAgIC8vIFRPRE8gZnV0dXJlIGFsbG93IHRoaXMgdG8gcnVuIHRvIHNob3cgYWx0ZXJuYXRlIFVJc1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3N1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ0V2YWx1YXRpbmcgcHJvbXB0IHRyaWdnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZFByb21wdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5wcm9tcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLnByb21wdHNbaWRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50UXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRRdWV1ZVtpXTtcblxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyTWF0Y2hlZChwcm9tcHQsIGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUHJvbXB0cy5wdXNoKHByb21wdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBmaWx0ZXIgb3V0IGRlY2xpbmVkL2FzayBhZ2FpbiBhZnRlciAobmVlZCB0byBtZXJnZSBzb21lIHBlcnNpc3RlbnQgc3RhdGUgaW50byBtZW1vcnkpXG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdHMobWF0Y2hlZFByb21wdHMpO1xuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmVyUHJvbXB0QWN0aXZhdGlvbihwcm9tcHQ6IFByb21wdENvbmZpZykge1xuICAgICAgICBpZiAoIXByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyB8fCBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAnRGVmZXJyaW5nIHByb21wdCBhY3RpdmF0aW9uIGJ5ICcgKyBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHNcbiAgICAgICAgKTtcblxuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZURlZmVycmVkUHJvbXB0LFxuICAgICAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzICogMTAwMCxcbiAgICAgICAgICAgIHByb21wdFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHQocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgLy8gVE9ETyBpcyBpZGVudGl0eSBvayBmb3IgY29tcGFyaXNvbiBoZXJlLi4uIG1pZ2h0IG5lZWQgdG8gdXNlIElEXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb21wdHMuaW5kZXhPZihwcm9tcHQpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5wdXNoKHByb21wdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZVByb21wdHMocHJvbXB0czogUHJvbXB0Q29uZmlnW10pIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdXaWxsIGFjdGl2YXRlIHByb21wdHM6ICcsIHByb21wdHMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpXTtcblxuICAgICAgICAgICAgaWYgKHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZlclByb21wdEFjdGl2YXRpb24ocHJvbXB0KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdChwcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIHByb21wdCBtYW5hZ2VyIHN0YXRlOicgKyBzdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByb21wdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUHJvbXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5wdXNoUHJvbXB0cyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdHMgPSB7IC4uLnRoaXMuY29udGV4dC5wdXNoUHJvbXB0cyB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IGF3YWl0IGxvYWRQcm9tcHRDb25maWdzKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb21wdHMnLCBlKTtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3ZlcmxheS5zY3NzXCIpO1xuY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IHsgRmlsdGVyVmFsdWUsIEt1bXVsb3NFdmVudCwgUHJvbXB0Q29uZmlnLCBQcm9wRmlsdGVyIH0gZnJvbSBcIi4uL2NvcmVcIjtcblxuaW1wb3J0IHsgZXNjYXBlUmVnRXhwIH0gZnJvbSBcIi4uL2NvcmUvdXRpbHNcIjtcblxuZnVuY3Rpb24gcHJvcEluKGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTpib29sZWFuIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGVzdHMgPSBmaWx0ZXJWYWx1ZS5tYXAodiA9PiBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh2KS5yZXBsYWNlKCdcXFxcKicsICcuKicpLCAnZycpKTtcbiAgICAgICAgY29uc3QgZmlsdGVyTWF0Y2hlZCA9IHRlc3RzLnJlZHVjZSgobWF0Y2hlZCwgbWF0Y2hlcikgPT4gbWF0Y2hlZCB8fCBtYXRjaGVyLnRlc3QoU3RyaW5nKHByb3BWYWx1ZSkpLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlck1hdGNoZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZmlsdGVyVmFsdWUuaW5kZXhPZihwcm9wVmFsdWUgYXMgYW55KSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJvcEVxKGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbHRlclZhbHVlID09IHByb3BWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0KGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wR3RlKGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEx0KGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHRlKGZpbHRlclZhbHVlOkZpbHRlclZhbHVlLCBwcm9wVmFsdWU6YW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB0cmlnZ2VyTWF0Y2hlZChwcm9tcHQ6IFByb21wdENvbmZpZywgZXZlbnQ6IEt1bXVsb3NFdmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRyaWdnZXIgPSBwcm9tcHQudHJpZ2dlcjtcblxuICAgIGlmICh0cmlnZ2VyLmV2ZW50ICE9PSBldmVudC50eXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRyaWdnZXIuZmlsdGVycz8ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlci5maWx0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IFtwcm9wLCBvcCwgZmlsdGVyVGVzdFZhbHVlXSA9IHRyaWdnZXIuZmlsdGVyc1tpXSBhcyBQcm9wRmlsdGVyO1xuXG4gICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGV2ZW50LmRhdGFbcHJvcF07XG5cbiAgICAgICAgbGV0IGZpbHRlck1hdGNoZWQgPSBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICBjYXNlICdJTic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BJbihmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEVxKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3QoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3RlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHQoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHRlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGZpbHRlciBvcGVyYXRvcjogJHtvcH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSBhbGxQcm9wRmlsdGVyc01hdGNoICYmIGZpbHRlck1hdGNoZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFByb3BGaWx0ZXJzTWF0Y2g7XG59IiwiaW1wb3J0ICcuL2JlbGwuc2Nzcyc7XG5pbXBvcnQgJy4vb3ZlcmxheS5zY3NzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IFByb21wdENvbmZpZyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5cbmNvbnN0IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMID0gJ1N1YnNjcmliZSBmb3Igbm90aWZpY2F0aW9ucyc7XG5cbmZ1bmN0aW9uIGludmVyc2VQb3NpdGlvbihwb3M6IHN0cmluZyk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiBwb3MuaW5kZXhPZignbGVmdCcpID4gLTEgPyAncmlnaHQnIDogJ2xlZnQnO1xufVxuXG5mdW5jdGlvbiBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJyb3dzZXJzID0gWydlZGdlJywgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaSddO1xuXG4gICAgZm9yIChsZXQgYiBvZiBicm93c2Vycykge1xuICAgICAgICBpZiAodWEuaW5kZXhPZihiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuaW50ZXJmYWNlIFByb21wdFVpUHJvcHMge1xuICAgIGNvbmZpZzogUHJvbXB0Q29uZmlnO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcmVxdWVzdE5hdGl2ZVByb21wdDogKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uUHJvbXB0RGVjbGluZWQ6IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3MtdG9vbHRpcCBrdW11bG9zLXRvb2x0aXAtJHt0aGlzLnByb3BzLnBvc2l0aW9ufWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEJlbGwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbXB0VWlQcm9wcywgbmV2ZXI+IHtcbiAgICBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdE5hdGl2ZVByb21wdCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1wcm9tcHQtJHt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX0ga3VtdWxvcy1iZWxsLWNvbnRhaW5lciBrdW11bG9zLWJlbGwtY29udGFpbmVyLSR7dGhpcy5wcm9wcy5jb25maWcucG9zaXRpb259YDtcbiAgICAgICAgY29uc3QgdG9vbHRpcFBvcyA9IGludmVyc2VQb3NpdGlvbih0aGlzLnByb3BzLmNvbmZpZy5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGJnQ29sb3IgPSB0aGlzLnByb3BzLmNvbmZpZy5jb2xvcnM/LmJlbGw/LmJnO1xuICAgICAgICBjb25zdCBmZ0NvbG9yID0gdGhpcy5wcm9wcy5jb25maWcuY29sb3JzPy5iZWxsPy5mZztcblxuICAgICAgICBjb25zdCBiZWxsU3R5bGUgPSB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogZmdDb2xvcixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvclxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iZWxsLWlubmVyIGt1bXVsb3MtdG9vbHRpcC1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrdW11bG9zLWJlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YmVsbFN0eWxlIGFzIGFueX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuODkgMiAyIDJ6bTYtNnYtNWMwLTMuMDctMS42NC01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xbC0yLTJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17ZmdDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwb3NpdGlvbj17dG9vbHRpcFBvc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcubGFiZWxzPy50b29sdGlwPy5zdWJzY3JpYmUgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERUZBVUxUX1NVQlNDUklCRV9MQUJFTH1cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgT3ZlcmxheVByb3BzIHtcbiAgICBwcm9tcHRTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByb21wdDogUHJvbXB0Q29uZmlnO1xufVxuXG5jbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50PE92ZXJsYXlQcm9wcywgbmV2ZXI+IHtcbiAgICB1cGRhdGVCbHVyU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGJsdXJDbGFzcyA9ICdrdW11bG9zLW92ZXJsYXktYmx1cic7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9tcHRTdGF0ZSA9PT0gJ3JlcXVlc3RpbmcnICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByb21wdC5vdmVybGF5XG4gICAgICAgICkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGJsdXJDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYmx1ckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2t1bXVsb3Mtb3ZlcmxheS1ibHVyJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFwcm9tcHQgfHwgcHJvbXB0U3RhdGUgIT09ICdyZXF1ZXN0aW5nJyB8fCAhcHJvbXB0Lm92ZXJsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHByb21wdC5vdmVybGF5O1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG92ZXJsYXkuY29sb3JzLnNoYWRlLFxuICAgICAgICAgICAgY29sb3I6IG92ZXJsYXkuY29sb3JzLnRleHRcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1zdHJpcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IG92ZXJsYXkuY29sb3JzLnN0cmlwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjIuOTMxNDgxIDEwLjcwMjIwOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04NC43OTcgLTEzNy41NylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTA3LjI3IDEzNy41N2MtMC44NTgyNSAwLjIxODkzLTEuMTQyNiAxLjQwMjItMi4wMTY0IDEuNzYyNy0yLjM5NzYgMS40NDg1LTUuMTUyNiAyLjE2MjQtNy44NTQ4IDIuODA2OC0yLjk2NjEgMC42Mzg2Ny01Ljk2NTQgMS4xMTktOC45NjYxIDEuNTYxNS0wLjQxNTE0IDAuMDUyNC0xLjA2ODIgMC4yMTExMi0wLjQ2Nzk4LTAuMjgxMDggMC40NDI2Ny0wLjcyMjE1IDEuNjQ2OC0xLjUzNzQgMS4xOTg1LTIuNDU4LTEuMDY0NC0wLjYxNjYyLTEuMTM4NyAxLjIwNzEtMS43OTgxIDEuNjc3Mi0wLjU0MTcgMC44MTU3NC0xLjM4ODkgMS4zMDY2LTIuMjA1OCAxLjc5NzktMC45NTU4OSAwLjYwMDQ3IDAuMjA5MjIgMS40OTg1IDAuOTEyOTggMS42MTEyIDIuNTE0MiAwLjk1MDkyIDUuMTE4OSAxLjY3MzQgNy43NTgxIDIuMTc3OCAxLjIwNDkgMC4zNTMyMyAwLjkyODEyLTEuNDQ5LTAuMTkzNzYtMS4xMTg5LTIuNDg3Ny0wLjUxMDE5LTQuOTQ5LTEuMTkyMy03LjMxMjEtMi4xMjc3IDMuMjUxNy0wLjMwNDgxIDYuNDY5NC0wLjg5NjM4IDkuNjgxNi0xLjQ3MjMgMy4yOTQ5LTAuNjc3MjEgNi42NDM4LTEuNDYyNCA5LjU5NjktMy4xMjk3IDAuODU0NTItMC41MjE4IDEuNjM2OC0xLjIyNjUgMi4xMDAxLTIuMTIzNSAwLjEwNTkxLTAuMzA1NzUtMC4xMjE5NC0wLjYzNzg2LTAuNDMzNDQtMC42ODM5OXpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiLjgyNjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IG92ZXJsYXkuY29sb3JzLnRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvdmVybGF5Lmljb25VcmwgJiYgPGltZyBzcmM9e292ZXJsYXkuaWNvblVybH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e292ZXJsYXkubGFiZWxzLmhlYWRpbmd9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57b3ZlcmxheS5sYWJlbHMuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkubGlua3MubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgcHJvbXB0czogUHJvbXB0Q29uZmlnW107XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICByZXF1ZXN0TmF0aXZlUHJvbXB0OiAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQcm9tcHRDb25maWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb21wdHMubWFwKHRoaXMucmVuZGVyUHJvbXB0LCB0aGlzKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJQcm9tcHQocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgc3dpdGNoIChwcm9tcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmVsbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE5hdGl2ZVByb21wdD17dGhpcy5wcm9wcy5yZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==