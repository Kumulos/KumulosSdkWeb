(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kumulos"] = factory();
	else
		root["kumulos"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/***/ ((module) => {

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".kumulos-rating {\n  display: flex;\n  height: 20px;\n  font-size: 16px;\n  align-items: center;\n  margin-top: 3px;\n}\n.kumulos-rating .kumulos-rating-star {\n  position: relative;\n}\n.kumulos-rating .kumulos-rating-star .kumulos-rating-halfstar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  overflow: hidden;\n}\n.kumulos-rating .kumulos-rating-count {\n  font-size: 12px;\n  margin-left: 3px;\n}", "",{"version":3,"sources":["webpack://./src/components/app-rating/app-rating.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;AACJ;AACI;EACI,kBAAA;AACR;AACQ;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;AACZ;AAGI;EACI,eAAA;EACA,gBAAA;AADR","sourcesContent":[".kumulos-rating {\n    display: flex;\n    height: 20px;\n    font-size: 16px;\n    align-items: center;\n    margin-top: 3px;\n\n    .kumulos-rating-star {\n        position: relative;\n\n        .kumulos-rating-halfstar {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 50%;\n            overflow: hidden;\n        }\n    }\n\n    .kumulos-rating-count {\n        font-size: 12px;\n        margin-left: 3px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/prompts/styles/_anims.scss","webpack://./src/styles.scss","webpack://./src/prompts/styles/_tooltip.scss","webpack://./src/prompts/styles/_variables.scss","webpack://./src/prompts/styles/_toast.scss","webpack://./src/prompts/styles/_prompts.scss","webpack://./src/prompts/styles/_buttons.scss","webpack://./src/prompts/styles/_checkbox.scss","webpack://./src/prompts/styles/_banner.scss","webpack://./src/prompts/styles/_banner.compact.scss","webpack://./src/prompts/styles/_safe-area-inset-pad.scss","webpack://./src/prompts/bell/bell.scss","webpack://./src/prompts/dialog/dialog.scss","webpack://./src/prompts/background-mask.scss","webpack://./src/prompts/overlay.scss"],"names":[],"mappings":"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","sourcesContent":["// Based on https://css-tricks.com/snippets/css/shake-css-keyframe-animation/\n@keyframes kumulos-anim-shake {\n    10%,\n    90% {\n        transform: translate3d(-1px, 0, 0);\n    }\n\n    20%,\n    80% {\n        transform: translate3d(2px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translate3d(-2px, 0, 0);\n    }\n\n    40%,\n    60% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes kumulos-anim-fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes kumulos-reveal-left {\n    0% {\n        opacity: 0;\n        transform: translate(10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-reveal-right {\n    0% {\n        opacity: 0;\n        transform: translate(-10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-toast-in-out {\n    0% {\n        opacity: 0;\n        transform: translate3d(-50%, 100%, 0);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate3d(-50%, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-down {\n    0% {\n        transform: translate3d(0, -100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-up {\n    0% {\n        transform: translate3d(0, 100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n","@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}",".kumulos-tooltip-parent {\n    .kumulos-tooltip {\n        display: none;\n    }\n\n    &:hover .kumulos-tooltip {\n        display: block;\n    }\n}\n\n.kumulos-tooltip {\n    background: $tooltip-background;\n    position: absolute;\n    top: 50%;\n    padding: 8px 12px;\n    font: 14px helvetica, sans-serif;\n    color: #eee;\n    border-radius: 6px;\n    white-space: nowrap;\n    z-index: 1100;\n    pointer-events: none;\n    transform: translateY(-50%);\n    will-change: opacity, transform;\n\n    &:after {\n        content: \"\";\n        width: 0;\n        height: 0;\n        position: absolute;\n        top: 50%;\n        right: 100%;\n        border: solid transparent;\n        border-width: 8px;\n        margin-top: -8px;\n    }\n\n    &-right {\n        left: calc(100% + 12px);\n        animation: kumulos-reveal-right 0.2s $quintEasing;\n\n        &:after {\n            border-right-color: $tooltip-background;\n            right: 100%;\n        }\n    }\n\n    &-left {\n        right: calc(100% + 12px);\n        animation: kumulos-reveal-left 0.2s $quintEasing;\n\n        &:after {\n            border-left-color: $tooltip-background;\n            left: 100%;\n        }\n    }\n}\n","$shadow-color: rgba(0, 0, 0, 0.54);\n$tooltip-background: #222;\n// https://easings.net/en#easeOutQuint\n$quintEasing: cubic-bezier(0.23, 1, 0.32, 1);\n\n$defaultFont: helvetica, sans-serif;\n$defaultHeaderFontSize: 18px;\n$defaultBodySize: 14px;\n$defaultButtonSize: 14px;\n\n$maskZIndex: 900;\n$promptZIndex: 1000;\n\n$defaultBannerHeaderFontSizeMobile: 12px;\n$defaultBannerHeaderLineHeightMobile: 14px;\n\n$defaultBannerBodyFontSizeMobile: 12px;\n$defaultBannerBodyLineHeightMobile: 14px;\n\n$defaultBannerPadding: 10px;",".kumulos-toast {\n    display: inline-block;\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: $tooltip-background;\n    z-index: 1100;\n    padding: 12px;\n    font-size: 16px;\n    font-family: $defaultFont;\n    color: #eee;\n    border-radius: 8px 8px 0 0;\n    animation: kumulos-toast-in-out 0.25s $quintEasing;\n}\n",".kumulos-prompt {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: $promptZIndex;\n}\n",".kumulos-action-button {\n    border: none;\n\n    margin-left: 10px;\n    padding: 7px 10px;\n\n    min-width: 100px;\n\n    text-transform: uppercase;\n    font-size: $defaultButtonSize;\n    font-weight: 600;\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.kumulos-action-button-cancel {\n    background: none;\n    color: #555;\n\n    &:hover {\n        background: #eee;\n    }\n}\n\n.kumulos-action-button-confirm {\n    border-radius: 3px;\n    box-shadow: 1px 3px 3px $shadow-color;\n\n    background: rgb(76, 136, 224);\n    color: #fff;\n\n    &:hover {\n        opacity: 0.8;\n    }\n}\n",".kumulos-checkbox-container {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    user-select: none;\n    line-height: 20px;\n    font-size: 0.9em;\n    font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n.kumulos-checkbox {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n    border-color: #aaa;\n    display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #aaa;\n    box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n    border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #222;\n    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n    left: 10px;\n    top: -7px;\n    width: 8px;\n    height: 20px;\n    border: solid #000;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n",".kumulos-banner-container {\n    display: flex;\n    flex-direction: row;\n    flex-flow: wrap;\n\n    position: fixed;\n    left: 0;\n\n    width: 100%;\n    min-height: 80px;\n\n    padding: $defaultBannerPadding;\n\n    font-family: $defaultFont;\n\n    backface-visibility: hidden;\n\n    box-shadow: 0 0 3px 1px $shadow-color;\n\n    &.kumulos-prompt-position-top {\n        top: 0;\n        animation: kumulos-slide-down 0.4s ease;\n    }\n\n    &.kumulos-prompt-position-bottom {\n        bottom: 0;\n        top: unset;\n        animation: kumulos-slide-up 0.4s ease;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-container {\n        flex-flow: initial;\n    }\n}\n\n.kumulos-banner-icon {\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.kumulos-banner-content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.kumulos-banner-header {\n    display: flex;\n    font-size: $defaultBannerHeaderFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n\n    h1 {\n        font-size: inherit;\n        font-weight: bold;\n        margin: 0 0 3px 0;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-header {\n        font-size: $defaultHeaderFontSize;\n    }\n}\n\n.kumulos-banner-body {\n    display: flex;\n    flex-grow: 2;\n    align-items: flex-start;\n    font-size: $defaultBannerBodyFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n    overflow: hidden;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-body {\n        font-size: $defaultBodySize;\n    }\n}\n\n.kumulos-banner-actions {\n    display: flex;\n    align-self: center;\n    justify-self: flex-end;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n}\n",".kumulos-banner-compact {\n    .kumulos-banner-body {\n        margin-top: 0;\n    }\n\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n\n    .kumulos-banner-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin-right: 10px;\n    }\n}\n","@supports(padding: unquote('max(0px)')) {\n    .kumulos-safe-area-inset-pad-left {\n        padding-left: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-left))');\n    }\n    .kumulos-safe-area-inset-pad-right {\n        padding-right: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-right))');\n    }\n    .kumulos-safe-area-inset-pad-top {\n        padding-top: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-top))');\n    }\n    .kumulos-safe-area-inset-pad-bottom {\n        padding-bottom: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-bottom))');\n    }\n}\n",".kumulos-bell-container {\n    position: fixed;\n\n    &-bottom-left {\n        bottom: 15px;\n        left: 15px;\n    }\n\n    &-bottom-right {\n        bottom: 15px;\n        right: 15px;\n    }\n}\n\n.kumulos-bell {\n    transition: transform 0.2s $quintEasing,\n        box-shadow 0.2s $quintEasing;\n\n    border-radius: 100%;\n    border-color: #fff;\n    background: rgb(76, 136, 224);\n    box-shadow: 1px 2px 2px 0 $shadow-color;\n\n    width: 60px;\n    height: 60px;\n\n    padding: 10px;\n\n    // Note the scale/width/height in all states have been chosen such that they resolve to whole numbers.\n    // This helps reduce blur of the SVG icon due to resterisation in Webkit.\n    transform: scale(0.9);\n\n    cursor: pointer;\n\n    &:hover {\n        transform: scale(1);\n        box-shadow: 1px 2px 3px 1px $shadow-color;\n    }\n\n    &:active {\n        transform: scale(0.8);\n        box-shadow: 1px 2px 2px 0 $shadow-color;\n    }\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n\n    svg {\n        fill: #fff;\n        animation: kumulos-anim-shake 0.4s cubic-bezier(.36, .07, .19, .97) both;\n        animation-delay: 0.3s;\n    }\n\n    &:before {\n        content: '';\n        display: block;\n        width: 85%;\n        height: 85%;\n        border: solid 1px;\n        border-radius: 100%;\n        ;\n        border-color: inherit;\n        ;\n        position: absolute;\n        top: 0;\n        left: 0;\n        margin: 7.5% 0 0 7.5%;\n    }\n}\n\n.kumulos-bell-inner {\n    border-radius: 100%;\n}\n",".kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    font-family: $defaultFont;\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-channel-dialog-container,\n    .kumulos-alert-container {\n        left: 50%;\n\n        width: 500px;\n        min-height: 250px;\n        margin-left: -250px;\n\n        box-shadow: 0 0 3px 1px $shadow-color;\n\n        height: auto;\n\n        &.kumulos-prompt-position-top-center {\n            border-radius: 0 0 3px 3px;\n        }\n\n        &.kumulos-prompt-position-center {\n            border-radius: 3px;\n            top: 120px;\n        }\n    }\n}\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n    order: 2;\n    width: 60px;\n    height: 60px;\n    align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n    display: flex;\n    order: 1;\n    flex-direction: column;\n    flex: 1;\n    margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n    display: flex;\n    font-size: $defaultHeaderFontSize;\n    margin-bottom: 20px;\n\n    h1 {\n        font-size: inherit;\n        font-weight: 400;\n        margin: 0;\n    }\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n    flex: 1;\n    white-space: pre-wrap;\n    overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 20px;\n    order: 3;\n    width: 100%;\n    height: 30px;\n    align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n    margin: 20px 0;\n}\n","body.kumulos-background-mask-blur {\n    overflow: hidden;\n}\n\n.kumulos-background-mask-blur\n    > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n    filter: blur(3px);\n}\n\n.kumulos-background-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\n    z-index: $maskZIndex;\n\n    background-color: rgba(0, 0, 0, 0.3);\n\n    display: block;\n}\n",".kumulos-overlay-blur > *:not(.kumulos-overlay) {\n    filter: blur(3px);\n}\n\n.kumulos-overlay {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: 2000;\n\n    &-strip {\n        display: flex;\n\n        &:before {\n            display: block;\n            content: '';\n            width: calc(500px + 12%);\n            max-width: 660px;\n        }\n\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n        min-height: 150px;\n    }\n\n    &-content-container {\n        display: flex;\n        max-width: 38%;\n        padding: 1em;\n        font-size: 14px;\n        font-family: $defaultFont;\n\n        * {\n            margin: 0;\n        }\n\n        svg {\n            margin: 55px 1.7em 0 0;\n            stroke: none;\n            fill: rgba(0, 0, 0, 0.8);\n            flex-shrink: 0;\n        }\n\n        img {\n            width: 55px;\n            height: 55px;\n            flex-shrink: 0;\n        }\n\n        h3,\n        p,\n        a {\n            color: inherit;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            font-weight: bold;\n        }\n\n        a {\n            margin-right: 0.65em;\n            opacity: 0.8;\n            text-decoration: none;\n        }\n    }\n\n    .kumulos-overlay-content {\n        margin-left: 0.75em;\n\n        p {\n            margin: 0.5em 0;\n        }\n    }\n\n    .kumulos-silent-overlay-indicator {\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 1;\n    }\n\n    .kumulos-silent-overlay-content-text {\n        max-width: 500px;\n        text-align: center;\n        font-size: 1.3em;\n        font-family: $defaultFont;\n    }\n}\n\n.kumulos-overlay-chrome {\n    .kumulos-overlay-strip:before {\n        width: 440px;\n    }\n}\n\n.kumulos-overlay-edge {\n    .kumulos-overlay-strip:before {\n        display: none;\n    }\n\n    .kumulos-overlay-strip {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        padding-bottom: 60px;\n        justify-content: center;\n    }\n\n    .kumulos-overlay-content-container {\n        min-width: 675px;\n\n        svg {\n            order: 1;\n            transform: rotate(-30deg);\n        }\n    }\n}\n\n.kumulos-overlay-safari {\n    .kumulos-overlay-strip:before {\n        width: calc(50% + 212px);\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 900px) {\n    .kumulos-overlay {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ nn),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ B),
/* harmony export */   "hydrate": () => (/* binding */ H),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ un),
/* harmony export */   "createPortal": () => (/* binding */ W),
/* harmony export */   "createFactory": () => (/* binding */ tn),
/* harmony export */   "cloneElement": () => (/* binding */ rn),
/* harmony export */   "isValidElement": () => (/* binding */ en),
/* harmony export */   "findDOMNode": () => (/* binding */ on),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "flushSync": () => (/* binding */ cn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ ln),
/* harmony export */   "StrictMode": () => (/* binding */ fn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ M),
/* harmony export */   "lazy": () => (/* binding */ F),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function H(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Z=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Y(){}function $(){return this.cancelBubble}function q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return Z&&(n=Z(n)),n.persist=Y,n.isPropagationStopped=$,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J))}n.$$typeof=j,K&&K(n)};var Q=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function en(n){return!!n&&n.$$typeof===j}function rn(n){return en(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function un(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:B,hydrate:H,unmountComponentAtNode:un,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:tn,cloneElement:rn,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:en,findDOMNode:on,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ A),
/* harmony export */   "options": () => (/* binding */ l)
/* harmony export */ });
var n,l,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)))})}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,r,o,f=a({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,r||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ A),
/* harmony export */   "useCallback": () => (/* binding */ F),
/* harmony export */   "useContext": () => (/* binding */ T),
/* harmony export */   "useDebugValue": () => (/* binding */ d),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,A(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function A(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function F(n,t){return o=8,A(function(){return n},t)}function T(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./src/components/app-rating/app-rating.scss":
/*!***************************************************!*\
  !*** ./src/components/app-rating/app-rating.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app-rating.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/app-rating/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/app-rating/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
            starEls.push((0, preact_1.h)(AppRatingStar, { state: stars >= i
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
    return ((0, preact_1.h)("div", { "class": "kumulos-rating", style: ratingStyle },
        createStars(),
        (0, preact_1.h)("span", { "class": "kumulos-rating-count" },
            "(",
            props.ratingCount,
            ")")));
}
exports.AppRating = AppRating;
function AppRatingStar(props) {
    var starEl;
    if (props.state === 'on') {
        starEl = (0, preact_1.h)("span", null, "\u2605");
    }
    else if (props.state === 'half') {
        starEl = ((0, preact_1.h)("div", null,
            (0, preact_1.h)("span", null, "\u2606"),
            (0, preact_1.h)("span", { "class": "kumulos-rating-halfstar" }, "\u2605")));
    }
    else {
        starEl = (0, preact_1.h)("span", null, "\u2606");
    }
    return (0, preact_1.h)("div", { "class": "kumulos-rating-star" }, starEl);
}


/***/ }),

/***/ "./src/components/svg-pointer.tsx":
/*!****************************************!*\
  !*** ./src/components/svg-pointer.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.SvgPointer = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var PI_HALF = Math.PI / 2;
var POINTER_HEAD_FROM_BODY_DIST = 50;
var POINTER_CURVE_CTRL_POINT_DIST = 150;
function calcPointerHeadCurveCoordsFromCtrlAndTarget(ctrlPoint, target) {
    var pointerDirRads = Math.atan2(ctrlPoint.x - ctrlPoint.x, target.y - target.y) + PI_HALF;
    var dirVec = {
        x: Math.cos(pointerDirRads),
        y: -Math.sin(pointerDirRads)
    };
    var curveCtrlPoint = {
        x: dirVec.x * POINTER_CURVE_CTRL_POINT_DIST,
        y: dirVec.y * POINTER_CURVE_CTRL_POINT_DIST
    };
    var pointerOffset = {
        x: -curveCtrlPoint.x * POINTER_HEAD_FROM_BODY_DIST,
        y: -dirVec.y * POINTER_HEAD_FROM_BODY_DIST
    };
    var curveStart = {
        x: Math.cos(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y: -Math.sin(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };
    var curveEnd = {
        x: Math.cos(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y: -Math.sin(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };
    return {
        p1: curveStart,
        p2: curveCtrlPoint,
        p3: curveEnd
    };
}
function SvgPointer(_a) {
    var area = _a.area, quadCurvePoints = _a.quadCurvePoints, color = _a.color;
    var p1 = quadCurvePoints.p1, p2 = quadCurvePoints.p2, p3 = quadCurvePoints.p3;
    var linePath = "M ".concat(p1.x, " ").concat(p1.y, " Q ").concat(p2.x, " ").concat(p2.y, " ").concat(p3.x, " ").concat(p3.y);
    var _b = calcPointerHeadCurveCoordsFromCtrlAndTarget(p2, p3), h1 = _b.p1, h2 = _b.p2, h3 = _b.p3;
    var headPath = "M ".concat(p3.x + h1.x, " ").concat(p3.y + h1.y, " Q ").concat(p3.x + h2.x, " ").concat(p3.y +
        h2.y, " ").concat(p3.x + h3.x, " ").concat(p3.y + h3.y);
    var strokeStyle = {
        stroke: color,
        fill: 'none'
    };
    return ((0, preact_1.h)("svg", { viewBox: "0 0 ".concat(area.width, " ").concat(area.height), width: "".concat(area.width, "px"), height: "".concat(area.height, "px"), xmlns: "http://www.w3.org/2000/svg" },
        (0, preact_1.h)("g", { "stroke-width": "3", "stroke-linecap": "round", fill: "none", "fill-rule": "evenodd" },
            (0, preact_1.h)("path", { style: strokeStyle, d: linePath }),
            (0, preact_1.h)("path", { style: strokeStyle, d: headPath }))));
}
exports.SvgPointer = SvgPointer;


/***/ }),

/***/ "./src/core/channels.ts":
/*!******************************!*\
  !*** ./src/core/channels.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/app-installs/").concat(installId, "/channels/subscriptions");
            var params = {
                uuids: uuids
            };
            var options = {
                method: method,
                body: JSON.stringify(params)
            };
            return (0, utils_1.authedFetch)(_this.context, url, options);
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
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/app-installs/").concat(installId, "/channels");
            return (0, utils_1.authedFetchJson)(_this.context, url);
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
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/channels");
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
            return (0, utils_1.authedFetchJson)(_this.context, url, options);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
    CONFIG_CACHE_KEY: "".concat(key, "Config"),
    CONFIG_CACHE_KEY_UPDATED: "".concat(key, "ConfigUpdated")
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
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    config = _b.sent();
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY_UPDATED)];
                case 2:
                    lastLoadTime = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : 0;
                    updatedRemoteConfig = false;
                    if (!(Date.now() - lastLoadTime > MAX_CACHE_AGE_MS)) return [3 /*break*/, 6];
                    console.info('Config never synced/stale, syncing now...');
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, (0, utils_1.authedFetchJson)(ctx, url)];
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
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY, config)];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY_UPDATED, Date.now())];
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
                case 0: return [4 /*yield*/, loadConfig("".concat(ctx.urlForService(_1.Service.PUSH), "/v1/web/config"), ConfigCacheType.PLATFORM, ctx)];
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
                case 0: return [4 /*yield*/, (0, _1.getInstallId)()];
                case 1:
                    webInstallId = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, loadConfig("".concat(ctx.urlForService(_1.Service.DDL), "/v1/banners?webInstallId=").concat(webInstallId), ConfigCacheType.DDL, ctx)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    err_1 = _a.sent();
                    console.warn("loadDdlConfig: failed to load Deferred DeepLink configuration", err_1);
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
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    configs = _a.sent();
                    if (!configs) {
                        return [2 /*return*/];
                    }
                    configs = configs.filter(function (c) { return c.uuid !== bannerUuid; });
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY, configs)];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.setInstallId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.Service = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.SystemEventType = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_VERSION = '1.11.1';
var SDK_TYPE = 10;
var SystemEventType;
(function (SystemEventType) {
    SystemEventType["MESSAGE_DELIVERED"] = "k.message.delivered";
    SystemEventType["MESSAGE_OPENED"] = "k.message.opened";
    SystemEventType["PUSH_REGISTERED"] = "k.push.deviceRegistered";
    SystemEventType["INSTALL_TRACKED"] = "k.stats.installTracked";
    SystemEventType["USER_ASSOCIATED"] = "k.stats.userAssociated";
    SystemEventType["USER_ASSOCIATION_CLEARED"] = "k.stats.userAssociationCleared";
})(SystemEventType = exports.SystemEventType || (exports.SystemEventType = {}));
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
var Service;
(function (Service) {
    Service["PUSH"] = "push";
    Service["DDL"] = "ddl";
    Service["EVENTS"] = "events";
})(Service = exports.Service || (exports.Service = {}));
var Context = /** @class */ (function () {
    function Context(config) {
        var _a;
        var _b, _c, _d, _e;
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = "Basic ".concat(btoa("".concat(this.apiKey, ":").concat(this.secretKey)));
        this.serviceWorkerPath = (_b = config.serviceWorkerPath) !== null && _b !== void 0 ? _b : '/worker.js';
        this.pushPrompts = (_c = config.pushPrompts) !== null && _c !== void 0 ? _c : 'auto';
        this.autoResubscribe = (_d = config.autoResubscribe) !== null && _d !== void 0 ? _d : true;
        this.features = (_e = config.features) !== null && _e !== void 0 ? _e : [SDKFeature.PUSH];
        this.subscribers = {};
        this.urlMap = (_a = {},
            _a[Service.PUSH] = "https://push-" + config.region + ".kumulos.com",
            _a[Service.EVENTS] = "https://events-" + config.region + ".kumulos.com",
            _a[Service.DDL] = "https://links-" + config.region + ".kumulos.com",
            _a);
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
    Context.prototype.urlForService = function (service) {
        return this.urlMap[service];
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
    var requiredStringProps = ['region', 'apiKey', 'secretKey', 'vapidPublicKey'];
    for (var _i = 0, requiredStringProps_1 = requiredStringProps; _i < requiredStringProps_1.length; _i++) {
        var prop = requiredStringProps_1[_i];
        if (typeof config[prop] !== 'string' || config[prop].length === 0) {
            throw "Required configuration key '".concat(prop, "' must be non-empty string");
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
var installIdSettingPromise = undefined;
function getInstallId() {
    if (installIdPromise) {
        return installIdPromise;
    }
    installIdPromise = (0, storage_1.get)('installId').then(function (installId) {
        if (!installId) {
            return setInstallId((0, utils_1.uuidv4)());
        }
        return installId;
    });
    return installIdPromise;
}
exports.getInstallId = getInstallId;
function setInstallId(installId) {
    return (0, storage_1.set)('installId', installId);
}
exports.setInstallId = setInstallId;
function getUserId() {
    return (0, storage_1.get)('userId').then(function (userId) { return userId !== null && userId !== void 0 ? userId : getInstallId(); });
}
exports.getUserId = getUserId;
function associateUser(ctx, id, attributes) {
    return __awaiter(this, void 0, void 0, function () {
        var props;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, storage_1.set)('userId', id)];
                case 1:
                    _a.sent();
                    props = {
                        id: id,
                        attributes: attributes
                    };
                    return [2 /*return*/, trackEvent(ctx, SystemEventType.USER_ASSOCIATED, props).then(function (_) { })];
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
                    trackEvent(ctx, SystemEventType.USER_ASSOCIATION_CLEARED, {
                        oldUserIdentifier: currentUserId
                    });
                    return [2 /*return*/, (0, storage_1.del)('userId')];
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
                            uuid: (0, utils_1.uuidv4)(),
                            timestamp: Date.now(),
                            data: properties,
                            userId: userId
                        }
                    ];
                    ctx.broadcast('eventTracked', events);
                    if (!isSystemEvent(type)) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    url = "".concat(ctx.urlForService(Service.EVENTS), "/v1/app-installs/").concat(installId, "/events");
                    return [2 /*return*/, (0, utils_1.authedFetch)(ctx, url, {
                            method: 'POST',
                            body: JSON.stringify(events)
                        })];
            }
        });
    });
}
exports.trackEvent = trackEvent;
function isSystemEvent(type) {
    return Object.values(SystemEventType).includes(type);
}
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
                    hash = (0, utils_1.cyrb53)(hashParts.join('|'));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, storage_1.get)('detailsHash')];
                case 2:
                    existingHash = _a.sent();
                    if (existingHash === hash) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4: return [2 /*return*/, trackEvent(ctx, SystemEventType.INSTALL_TRACKED, payload)
                        .then(function () { return (0, storage_1.set)('detailsHash', hash); })
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var manager;
function getPushOpsManager(ctx) {
    if (manager) {
        return manager;
    }
    var browser = (0, utils_1.getBrowserName)();
    if (browser === 'safari') {
        manager = (0, config_1.loadPlatformConfig)(ctx).then(function (cfg) { return new safari_1["default"](cfg); });
    }
    else {
        manager = Promise.resolve(new w3c_1["default"]());
    }
    return manager;
}
exports["default"] = getPushOpsManager;
function trackOpenFromQuery(ctx) {
    var browser = (0, utils_1.getBrowserName)();
    if (browser !== 'safari') {
        return;
    }
    var params = (0, utils_1.parseQueryString)();
    if (!(params === null || params === void 0 ? void 0 : params['knid'])) {
        return;
    }
    (0, __1.trackEvent)(ctx, __1.SystemEventType.MESSAGE_OPENED, {
        type: MessageType.PUSH,
        id: Number(params['knid'])
    });
}
exports.trackOpenFromQuery = trackOpenFromQuery;
function notificationFromPayload(payload) {
    var _a, _b, _c;
    var _d = payload.data, _ = _d["k.message"], userData = __rest(_d, ['k.message']);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
    return (0, utils_1.cyrb53)("".concat(ctx.apiKey, ":").concat(token));
}
var SafariPushManager = /** @class */ (function () {
    function SafariPushManager(cfg) {
        this.cfg = cfg;
    }
    SafariPushManager.prototype.requestNotificationPermission = function (ctx) {
        var _a;
        var svcUrl = "".concat(ctx.urlForService(__1.Service.PUSH), "/safari/").concat(ctx.apiKey);
        var deferred = (0, utils_1.defer)();
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
                    case 0: return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || !perm.deviceToken) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
                    case 2:
                        existingTokenHash = _b.sent();
                        tokenHash = hashToken(ctx, perm.deviceToken);
                        if (existingTokenHash === tokenHash) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.SystemEventType.PUSH_REGISTERED, {
                                type: _1.TokenType.SAFARI,
                                token: perm.deviceToken,
                                bundleId: cfg.safariPushId
                            })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushTokenHash', tokenHash)];
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
                    case 0: return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _c.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || (perm === null || perm === void 0 ? void 0 : perm.permission) === 'denied') {
                            return [2 /*return*/, 'blocked'];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
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
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || perm.permission !== 'granted' || !perm.deviceToken) {
                            console.info('Auto-resubscription: permission not granted or no token, aborting');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
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
    SafariPushManager.prototype.isNativePromptShown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(true)];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var BLUR_EVENT_TIMEOUT_MILLIS = 1000;
function hasSameKey(vapidKey, subscription) {
    var existingSubKey = subscription.options.applicationServerKey;
    if (!existingSubKey) {
        return false;
    }
    var subKey = (0, utils_1.base64UrlEncode)(existingSubKey);
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
    return (0, utils_1.cyrb53)("".concat(ctx.apiKey, ":").concat(sub.endpoint));
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
                        return [4 /*yield*/, (0, storage_1.get)('pushEndpointHash')];
                    case 6:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, (0, storage_1.get)('pushExpiresAt')];
                    case 7:
                        existingExpiry = _a.sent();
                        if (existingEndpointHash === endpointHash &&
                            (!existingExpiry || existingExpiry > Date.now())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.SystemEventType.PUSH_REGISTERED, {
                                type: _1.TokenType.W3C,
                                token: sub
                            })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushEndpointHash', endpointHash)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushExpiresAt', expiry)];
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
                            console.info("Auto-resubscribe: permission not granted, aborting: ".concat(perm));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushEndpointHash')];
                    case 1:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, (0, storage_1.get)('pushExpiresAt')];
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
    W3cPushManager.prototype.isNativePromptShown = function () {
        var browserName = (0, utils_1.getBrowserName)();
        if ('chrome' !== browserName) {
            return Promise.resolve(true);
        }
        return new Promise(function (resolve) {
            var blurEventFired = false;
            var checkForBlur = function () {
                if (blurEventFired) {
                    return;
                }
                clearTimeout(cancelBlurTimeout);
                window.removeEventListener('blur', checkForBlur);
                blurEventFired = true;
                resolve(true);
            };
            window.addEventListener('blur', checkForBlur);
            var cancelBlurTimeout = setTimeout(function () {
                window.removeEventListener('blur', checkForBlur);
                resolve(false);
            }, BLUR_EVENT_TIMEOUT_MILLIS);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
        (0, utils_1.onDOMReady)(function () { return document.body.appendChild(_this.element); });
    }
    RootFrame.prototype.createContainer = function (name) {
        var container = {
            name: name,
            element: document.createElement('div')
        };
        container.element.id = "kumulos-ui-root-".concat(name);
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
/***/ ((__unused_webpack_module, exports) => {

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
    return (0, idb_keyval_1.get)(key, store);
}
exports.get = get;
function set(key, value) {
    return (0, idb_keyval_1.set)(key, value, store).then(function () { return value; });
}
exports.set = set;
function del(key) {
    return (0, idb_keyval_1.del)(key, store);
}
exports.del = del;
function persistConfig(config) {
    return set('config', {
        region: config.region,
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
    return set("reminder.".concat(promptUuid), reminder);
}
exports.persistPromptReminder = persistPromptReminder;
function getPromptReminder(promptUuid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get("reminder.".concat(promptUuid))];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
    var coreDependencies = __spreadArray([], CORE_FEATURE_DEPENDENCIES, true);
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
        return _super.call(this, "authed fetch failed: ".concat(statusCode, ", ").concat(statusText)) || this;
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var types_1 = __webpack_require__(/*! ./types */ "./src/fp/types.ts");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var FP_CAPTURE_URL = 'https://pd.app.delivery';
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
            console.info("FpCapure: message ".concat(e.data.type, " received from ").concat(e.origin));
            var message = e.data;
            if (e.origin !== FP_CAPTURE_URL) {
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
            console.info("FpCapure: dispatching ".concat(message.type, " message to capture frame"));
            var window = (_a = _this.iFrameRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow;
            if (!window) {
                return;
            }
            window.postMessage(message, FP_CAPTURE_URL);
        };
        _this.iFrameRef = (0, preact_1.createRef)();
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
        return (0, compat_1.createPortal)((0, preact_1.h)("iframe", { ref: this.iFrameRef, src: FP_CAPTURE_URL, style: { width: 0, height: 0 } }), document.body);
    };
    return FpCapture;
}(preact_1.Component));
exports["default"] = FpCapture;


/***/ }),

/***/ "./src/fp/index.ts":
/*!*************************!*\
  !*** ./src/fp/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
                    url = "".concat(ctx.urlForService(core_1.Service.DDL), "/v1/banners/").concat(bannerUid, "/taps");
                    return [4 /*yield*/, (0, core_1.getInstallId)()];
                case 1:
                    webInstallId = _a.sent();
                    return [2 /*return*/, (0, utils_1.authedFetch)(ctx, url, {
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
/***/ ((__unused_webpack_module, exports) => {

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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
var utils_1 = __webpack_require__(/*! ./core/utils */ "./src/core/utils.ts");
var manager_1 = __importDefault(__webpack_require__(/*! ./prompts/ddl/manager */ "./src/prompts/ddl/manager.tsx"));
var prompts_1 = __webpack_require__(/*! ./prompts */ "./src/prompts/index.tsx");
var root_frame_1 = __importDefault(__webpack_require__(/*! ./core/root-frame */ "./src/core/root-frame.ts"));
var Kumulos = /** @class */ (function () {
    function Kumulos(config) {
        var _this = this;
        this.onWorkerMessage = function (e) {
            var _a, _b;
            if (e.origin !== location.origin) {
                return;
            }
            if (!(0, messaging_1.isKumulosWorkerMessage)(e.data)) {
                return;
            }
            switch (e.data.type) {
                case messaging_1.WorkerMessageType.KPushReceived: {
                    var push = (0, push_1.notificationFromPayload)(e.data.data);
                    (_b = (_a = _this.config).onPushReceived) === null || _b === void 0 ? void 0 : _b.call(_a, push);
                    break;
                }
            }
        };
        (0, core_1.assertConfigValid)(config);
        this.config = config;
        this.context = new core_1.Context(config);
        this.maybePersistInstallIdAndUserId(config);
        (0, storage_1.persistConfig)(config);
        (0, core_1.trackInstallDetails)(this.context);
        this.rootFrame = new root_frame_1["default"]();
        if (this.context.hasFeature(core_1.SDKFeature.PUSH)) {
            (0, push_1.trackOpenFromQuery)(this.context);
            this.serviceWorkerReg = (0, utils_1.registerServiceWorker)(this.context.serviceWorkerPath);
            this.promptManager = new prompts_1.PromptManager(this, this.context, this.rootFrame);
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.addEventListener('message', this.onWorkerMessage);
            }
            this.maybeFireOpenedHandler();
        }
        if (this.context.hasFeature(core_1.SDKFeature.DDL)) {
            if (!(0, utils_1.isMobile)()) {
                console.info('DdlManager: DDL feature support only available on mobile devices.');
                return;
            }
            this.ddlManager = new manager_1["default"](this.context, this.rootFrame);
        }
    }
    Kumulos.prototype.maybePersistInstallIdAndUserId = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, core_1.getInstallId)()
                            .then(function (installId) {
                            if (installId !== config.installId) {
                                (0, core_1.setInstallId)(config.installId);
                            }
                        })];
                    case 1:
                        _a.sent();
                        if (config.userId === undefined) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        return [4 /*yield*/, (0, core_1.getUserId)()
                                .then(function (userId) {
                                if (userId !== config.userId) {
                                    (0, core_1.associateUser)(_this.context, config.userId);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    Kumulos.prototype.associateUser = function (identifier, attributes) {
        return (0, core_1.associateUser)(this.context, identifier, attributes);
    };
    Kumulos.prototype.trackEvent = function (type, properties) {
        return (0, core_1.trackEvent)(this.context, type, properties).then(function (_) { return void 0; });
    };
    Kumulos.prototype.pushRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mgr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, push_1["default"])(this.context)];
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
    Kumulos.prototype.maybeFireOpenedHandler = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var payload, push;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, storage_1.getMostRecentlyOpenedPushPayload)()];
                    case 1:
                        payload = _c.sent();
                        if (!payload) {
                            return [2 /*return*/];
                        }
                        push = (0, push_1.notificationFromPayload)(payload);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        var classes = "kumulos-prompt kumulos-prompt-".concat(this.props.promptManagerState, " kumulos-bell-container kumulos-bell-container-").concat(this.props.config.position);
        var config = this.props.config;
        var tooltipPos = (0, ui_1.inversePosition)(config.position);
        var bgColor = (_b = (_a = config.colors) === null || _a === void 0 ? void 0 : _a.bell) === null || _b === void 0 ? void 0 : _b.bg;
        var fgColor = (_d = (_c = config.colors) === null || _c === void 0 ? void 0 : _c.bell) === null || _d === void 0 ? void 0 : _d.fg;
        var bellStyle = {
            borderColor: fgColor,
            backgroundColor: bgColor
        };
        return ((0, preact_1.h)("div", { "class": classes },
            (0, preact_1.h)("div", { "class": "kumulos-bell-inner kumulos-tooltip-parent" },
                (0, preact_1.h)("div", { "class": "kumulos-bell", onClick: this.onRequestNativePrompt, style: bellStyle },
                    (0, preact_1.h)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        (0, preact_1.h)("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z", fill: fgColor }))),
                (0, preact_1.h)(ui_1.Tooltip, { position: tooltipPos }, (_g = (_f = (_e = config.labels) === null || _e === void 0 ? void 0 : _e.tooltip) === null || _f === void 0 ? void 0 : _f.subscribe) !== null && _g !== void 0 ? _g : ui_1.DEFAULT_SUBSCRIBE_LABEL))));
    };
    return Bell;
}(preact_1.Component));
exports.Bell = Bell;


/***/ }),

/***/ "./src/prompts/ddl/ddl-banner.tsx":
/*!****************************************!*\
  !*** ./src/prompts/ddl/ddl-banner.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DdlBanner = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var app_rating_1 = __webpack_require__(/*! ../../components/app-rating */ "./src/components/app-rating/index.tsx");
var deeplink_button_1 = __importDefault(__webpack_require__(/*! ./deeplink-button */ "./src/prompts/ddl/deeplink-button.tsx"));
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
var SHOW_COPY_TOAST_DELAY = 1000;
var DdlBanner = /** @class */ (function (_super) {
    __extends(DdlBanner, _super);
    function DdlBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function (actionType) {
            if (_this.state.showCopyToast === true) {
                return;
            }
            if (actionType === core_1.UiActionType.DDL_OPEN_DEEPLINK) {
                _this.props.onConfirm(_this.props.config);
                return;
            }
            if (actionType === core_1.UiActionType.DDL_OPEN_STORE) {
                _this.setState({ showCopyToast: true });
                setTimeout(function () {
                    _this.setState({ showCopyToast: false });
                    _this.props.onConfirm(_this.props.config);
                }, SHOW_COPY_TOAST_DELAY);
            }
        };
        _this.onCancel = function () {
            _this.props.onCancel(_this.props.config);
        };
        _this.containerRef = (0, preact_1.createRef)();
        _this.state = { showCopyToast: false };
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
        var classes = __spreadArray(__spreadArray([], CLASSES, true), [
            "kumulos-prompt-position-".concat(promptPosition)
        ], false);
        if ([core_1.PromptPosition.TOP, core_1.PromptPosition.BOTTOM].includes(promptPosition)) {
            classes.push("kumulos-safe-area-inset-pad-".concat(promptPosition));
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
        var bannerIconStyle = __assign(__assign({}, styles.bannerIconStyle), { backgroundImage: "url(".concat(imageUrl, ")") });
        return ((0, preact_1.h)("div", { style: containerStyle, "class": classes, ref: this.containerRef },
            (0, preact_1.h)("div", { "class": "kumulos-banner-close", style: declineActionStyle, onTouchEnd: this.onCancel }, "\u2716"),
            (0, preact_1.h)("div", { style: bannerIconStyle, "class": "kumulos-banner-icon" }),
            (0, preact_1.h)("div", { "class": "kumulos-banner-content" },
                (0, preact_1.h)("div", { "class": "kumulos-banner-header" },
                    (0, preact_1.h)("h1", null, heading)),
                (0, preact_1.h)("div", { "class": "kumulos-banner-body" }, body),
                appRating && ((0, preact_1.h)(app_rating_1.AppRating, { ratingCount: appRating.ratingCount, stars: appRating.rating, color: ratingFg }))),
            (0, preact_1.h)("div", { "class": "kumulos-banner-actions" },
                (0, preact_1.h)(deeplink_button_1["default"], { style: actionStyle, "class": "kumulos-action-button kumulos-action-button-confirm", text: acceptAction, promptActions: config, onAction: this.onConfirm })),
            this.state.showCopyToast && ((0, preact_1.h)("div", { "class": "kumulos-toast" }, "Link Copied"))));
    };
    return DdlBanner;
}(preact_1.Component));
exports.DdlBanner = DdlBanner;


/***/ }),

/***/ "./src/prompts/ddl/deeplink-button.tsx":
/*!*********************************************!*\
  !*** ./src/prompts/ddl/deeplink-button.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var clipboard_copy_1 = __importDefault(__webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js"));
var DeeplinkButton = /** @class */ (function (_super) {
    __extends(DeeplinkButton, _super);
    function DeeplinkButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAction = function () {
            var accept = _this.props.promptActions.uiActions.accept;
            switch (accept.type) {
                case core_1.UiActionType.DDL_OPEN_STORE:
                    (0, clipboard_copy_1["default"])(accept.deepLinkUrl)
                        .then(function () {
                        return _this.props.onAction(core_1.UiActionType.DDL_OPEN_STORE);
                    })["catch"](function (e) {
                        console.error('Unable to capture deeplink url for deferred app pickup', e);
                    });
                    break;
                case core_1.UiActionType.DDL_OPEN_DEEPLINK:
                    _this.props.onAction(core_1.UiActionType.DDL_OPEN_STORE);
                    break;
                default:
                    return console.error("Handle DeepLink Action: unsupported accept action type '".concat(accept['type'], "'"));
            }
        };
        return _this;
    }
    DeeplinkButton.prototype.render = function () {
        var _a = this.props, style = _a.style, cssClass = _a["class"], text = _a.text;
        return ((0, preact_1.h)("button", { type: "button", style: style, "class": cssClass, onTouchEnd: this.handleAction }, text));
    };
    return DeeplinkButton;
}(preact_1.Component));
exports["default"] = DeeplinkButton;


/***/ }),

/***/ "./src/prompts/ddl/manager.tsx":
/*!*************************************!*\
  !*** ./src/prompts/ddl/manager.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
                        return [4 /*yield*/, (0, fp_1.sendClickRequest)(this.context, prompt.uuid, components)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, (0, config_1.deleteDdlBannerConfigFromCache)(prompt.uuid)];
                    case 3:
                        _a.sent();
                        this.hidePrompt(prompt);
                        this.performClientRedirection(prompt);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onBannerCancelled = function (prompt) {
            (0, prompt_reminder_1.maybePersistReminder)(prompt);
            _this.hidePrompt(prompt);
        };
        this.render = function (prompt) {
            (0, preact_1.render)((0, preact_1.h)(ui_1["default"], { config: prompt, context: _this.context, onBannerConfirm: _this.onBannerConfirm, onBannerCancelled: _this.onBannerCancelled }), _this.ddlContainer.element);
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
                        if (!(0, utils_1.deferPromptActivation)(prompt_1, this.render)) {
                            this.render(prompt_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DdlManager.prototype.renderEmpty = function () {
        (0, preact_1.render)(null, this.ddlContainer.element);
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
                    case 0: return [4 /*yield*/, (0, config_1.loadDdlConfig)(this.context)];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
                : 'marginBottom'] = "".concat(offset, "px");
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
        _this.fpRef = (0, preact_1.createRef)();
        return _this;
    }
    Ui.prototype.resetBodyStyles = function () {
        var _a;
        var config = this.props.config;
        document.body.style.transition = (_a = this.siteTransition) !== null && _a !== void 0 ? _a : '';
        document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
            ? 'marginTop'
            : 'marginBottom'] = this.siteMargin ? "".concat(this.siteMargin, "px") : '';
    };
    Ui.prototype.componentWillUnmount = function () {
        this.resetBodyStyles();
    };
    Ui.prototype.render = function () {
        if (!this.props.config) {
            return null;
        }
        return (0, compat_1.createPortal)((0, preact_1.h)(preact_1.Fragment, null,
            (0, preact_1.h)(ddl_banner_1.DdlBanner, { config: this.props.config, onConfirm: this.onBannerConfirm, onCancel: this.onBannerCancelled, dimensions: this.onDimensions }),
            (0, preact_1.h)(fp_capture_1["default"], { ref: this.fpRef, onCaptured: this.onCaptureFp })), document.body);
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ }),

/***/ "./src/prompts/dialog/channels-dialog.tsx":
/*!************************************************!*\
  !*** ./src/prompts/dialog/channels-dialog.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
                channelSelections: __spreadArray([], channelList, true)
            });
        };
        _this.renderDialog = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var action = _this.props.action;
            var classes = "kumulos-prompt kumulos-channel-dialog-container kumulos-prompt-position-".concat(action.dialogConfig.position);
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
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(".concat(uiContext === null || uiContext === void 0 ? void 0 : uiContext.platformConfig.iconUrl, ")") });
            return ((0, preact_1.h)("div", { style: containerStyle, className: classes },
                (0, preact_1.h)("div", { style: iconStyle, className: "kumulos-channel-dialog-icon" }),
                (0, preact_1.h)("div", { className: "kumulos-channel-dialog-content" },
                    (0, preact_1.h)("div", { className: "kumulos-channel-dialog-header" },
                        (0, preact_1.h)("h1", null, heading)),
                    (0, preact_1.h)("div", { className: "kumulos-channel-dialog-body" },
                        (0, preact_1.h)(channels_list_1.ChannelsList, { channelList: (0, core_1.getChannelDialogChannels)(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged }))),
                (0, preact_1.h)("div", { className: "kumulos-channel-dialog-actions" },
                    (0, preact_1.h)("button", { type: "button", style: confirmActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onConfirm }, confirmAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    ChannelsDialog.prototype.render = function () {
        return (0, preact_1.h)(ui_context_1.UIContext.Consumer, null, this.renderDialog);
    };
    return ChannelsDialog;
}(preact_1.Component));
exports.ChannelsDialog = ChannelsDialog;


/***/ }),

/***/ "./src/prompts/dialog/channels-list.tsx":
/*!**********************************************!*\
  !*** ./src/prompts/dialog/channels-list.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ChannelsList = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ChannelsList = /** @class */ (function (_super) {
    __extends(ChannelsList, _super);
    function ChannelsList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            channels: __spreadArray([], _this.props.channelList, true)
        };
        _this.props.onChannelSelectionChanged(_this.state.channels);
        return _this;
    }
    ChannelsList.prototype.onChannelCheckChange = function (channelUuid, checked) {
        var _this = this;
        var item = this.state.channels.find(function (c) { return c.channel.uuid === channelUuid; });
        item.checked = checked;
        this.setState({
            channels: __spreadArray([], this.state.channels, true)
        }, function () { return _this.props.onChannelSelectionChanged(_this.state.channels); });
    };
    ChannelsList.prototype.render = function () {
        var _this = this;
        var channels = this.state.channels;
        if (!channels.length) {
            return null;
        }
        return ((0, preact_1.h)("div", { "class": "kumulos-channel-list-container" }, channels.map(function (item) { return ((0, preact_1.h)("label", { key: item.channel.uuid, className: "kumulos-checkbox-container" },
            item.channel.name,
            (0, preact_1.h)("input", { type: "checkbox", readOnly: true, checked: item.checked, onClick: function (e) {
                    _this.onChannelCheckChange(item.channel.uuid, e.currentTarget.checked);
                } }),
            (0, preact_1.h)("span", { className: "kumulos-checkbox" }))); })));
    };
    return ChannelsList;
}(preact_1.Component));
exports.ChannelsList = ChannelsList;


/***/ }),

/***/ "./src/prompts/dialog/index.tsx":
/*!**************************************!*\
  !*** ./src/prompts/dialog/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
                channelSelections: __spreadArray([], channelList, true)
            });
        };
        _this.renderAlert = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var config = _this.props.config;
            var classes = "kumulos-prompt kumulos-prompt-".concat(_this.props.promptManagerState, " kumulos-").concat(config.type, "-container kumulos-prompt-position-").concat(config.position);
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
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(".concat(config.imageUrl, ")") });
            return ((0, preact_1.h)("div", { style: containerStyle, className: classes },
                config.imageUrl && ((0, preact_1.h)("div", { style: iconStyle, className: "kumulos-".concat(config.type, "-icon") })),
                (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-content") },
                    (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-header") },
                        (0, preact_1.h)("h1", null, heading)),
                    (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-body") },
                        body,
                        _this.props.action && ((0, preact_1.h)(channels_list_1.ChannelsList, { channelList: (0, core_1.getChannelDialogChannels)(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged })))),
                (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-actions") },
                    (0, preact_1.h)("button", { type: "button", style: declineActionStyle, className: "kumulos-action-button kumulos-action-button-cancel", onClick: _this.onRequestCancel }, declineAction),
                    (0, preact_1.h)("button", { type: "button", style: acceptActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onRequestNativePrompt }, acceptAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        return (0, preact_1.h)(ui_context_1.UIContext.Consumer, null, this.renderAlert);
    };
    return Dialog;
}(preact_1.Component));
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/prompts/index.tsx":
/*!*******************************!*\
  !*** ./src/prompts/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var channels_1 = __webpack_require__(/*! ../core/channels */ "./src/core/channels.ts");
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var triggers_1 = __webpack_require__(/*! ./triggers */ "./src/prompts/triggers.ts");
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/prompts/ui-context.ts");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ui.tsx"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/prompts/utils.ts");
var config_1 = __webpack_require__(/*! ../core/config */ "./src/core/config.ts");
var prompt_reminder_1 = __webpack_require__(/*! ./prompt-reminder */ "./src/prompts/prompt-reminder.ts");
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
            var _this = this;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if ('requesting' === this.state || 'requesting-silent' === this.state) {
                            return [2 /*return*/];
                        }
                        this.currentlyRequestingPrompt = prompt;
                        (_b = this.pushOpsManager) === null || _b === void 0 ? void 0 : _b.isNativePromptShown().then(function (isNativePromptShown) {
                            if (isNativePromptShown) {
                                _this.setState('requesting');
                            }
                            else {
                                _this.setState('requesting-silent');
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, ((_c = this.pushOpsManager) === null || _c === void 0 ? void 0 : _c.requestPermissionAndRegisterForPush(this.context))];
                    case 1:
                        _a.subscriptionState = _d.sent();
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
                        if (!(this.subscriptionState === 'subscribed')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.handlePromptActions(prompt)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.handleUserChannelSelection(channelSelections)];
                    case 4:
                        _c.sent();
                        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showToast((_b = prompt.labels) === null || _b === void 0 ? void 0 : _b.thanksForSubscribing);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
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
            (0, prompt_reminder_1.maybePersistReminder)(prompt);
            _this.hidePrompt(prompt);
        };
        this.onDismissOverlay = function (prompt) {
            _this.hidePrompt(prompt);
            _this.setState('requesting-silent-dismissed');
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
    PromptManager.prototype.getChannelSubscriptionManager = function () {
        if (!this.channelSubscriptionManager) {
            this.channelSubscriptionManager = new channels_1.ChannelSubscriptionManager(this.context);
        }
        return this.channelSubscriptionManager;
    };
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
                        channelSubMgr = this.getChannelSubscriptionManager();
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
                                console.info("Unable to subscribe to channel '".concat(action.channelUuid, "' as it does not exist"));
                                return false;
                            }
                            return true;
                        })
                            .map(function (action) { return action.channelUuid; });
                        return [4 /*yield*/, this.getChannelSubscriptionManager().subscribe(uuidsToSubscribe)];
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
                        channelSubMgr = this.getChannelSubscriptionManager();
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
        (0, preact_1.render)((0, preact_1.h)(ui_context_1.UIContext.Provider, { value: {
                platformConfig: this.platformConfig,
                channelList: this.channels
            } },
            (0, preact_1.h)(ui_1["default"], { ref: function (r) { return (_this.ui = r); }, prompts: this.activePrompts, subscriptionState: this.subscriptionState, promptManagerState: this.state, onPromptAccepted: this.onPromptAccepted, onPromptDeclined: this.onPromptDeclined, onPostActionConfirm: this.onPostActionConfirm, onDismissOverlay: this.onDismissOverlay, currentlyRequestingPrompt: this.currentlyRequestingPrompt, currentPostAction: this.currentPostAction })), this.pushContainer.element);
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
            if ((0, utils_1.deferPromptActivation)(prompt_1, this.activateDeferredPrompt)) {
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
                            case 'ready': return [3 /*break*/, 7];
                            case 'postaction': return [3 /*break*/, 10];
                            case 'requesting': return [3 /*break*/, 10];
                            case 'requesting-silent': return [3 /*break*/, 10];
                            case 'requesting-silent-dismissed': return [3 /*break*/, 10];
                        }
                        return [3 /*break*/, 11];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, (0, push_1["default"])(this.context)];
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
                        return [4 /*yield*/, this.getChannelSubscriptionManager().listChannels()];
                    case 6:
                        _e.channels = _g.sent();
                        this.setState('ready');
                        return [3 /*break*/, 11];
                    case 7:
                        this.currentlyRequestingPrompt = undefined;
                        this.currentPostAction = undefined;
                        _f = this;
                        return [4 /*yield*/, ((_a = this.pushOpsManager) === null || _a === void 0 ? void 0 : _a.getCurrentSubscriptionState(this.context))];
                    case 8:
                        _f.subscriptionState = _g.sent();
                        return [4 /*yield*/, this.evaluateTriggers()];
                    case 9:
                        _g.sent();
                        this.render();
                        return [3 /*break*/, 11];
                    case 10:
                        this.render();
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
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
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(this.context)];
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
                        return [4 /*yield*/, this.getChannelSubscriptionManager().listChannels()];
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

/***/ "./src/prompts/overlay/background-mask.tsx":
/*!*************************************************!*\
  !*** ./src/prompts/overlay/background-mask.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BackgroundMask = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
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
        return ((0, preact_1.h)("div", { style: style, "class": classes.join(' '), onClick: this.props.onClick }, this.props.children));
    };
    return BackgroundMask;
}(preact_1.Component));
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./src/prompts/overlay/push-perms-silent.tsx":
/*!***************************************************!*\
  !*** ./src/prompts/overlay/push-perms-silent.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.__esModule = true;
exports.OverlaySilent = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var utils_1 = __webpack_require__(/*! ../../core/utils */ "./src/core/utils.ts");
var background_mask_1 = __webpack_require__(/*! ./background-mask */ "./src/prompts/overlay/background-mask.tsx");
var svg_pointer_1 = __webpack_require__(/*! ../../components/svg-pointer */ "./src/components/svg-pointer.tsx");
var localStyles = {
    mask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
var POINTER_START_OFFSET = {
    x: 0,
    y: 50
};
var POINTER_END_OFFSET = {
    x: -175,
    y: 75
};
var CONTROL_POINT_OFFSET = {
    x: 0,
    y: 500
};
var OverlaySilent = /** @class */ (function (_super) {
    __extends(OverlaySilent, _super);
    function OverlaySilent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onBackgroundMaskClick = function () {
            var _a = _this.props, prompt = _a.prompt, onDismiss = _a.onDismiss;
            if (!prompt || !onDismiss) {
                return;
            }
            onDismiss(prompt);
        };
        return _this;
    }
    OverlaySilent.prototype.componentWillMount = function () {
        var width = window.innerWidth, height = window.innerHeight;
        this.setState({ windowDimensions: { width: width, height: height } });
    };
    OverlaySilent.prototype.render = function () {
        var _a = this.props, promptState = _a.promptState, prompt = _a.prompt, subscriptionState = _a.subscriptionState;
        if (!prompt ||
            promptState !== 'requesting-silent' ||
            !prompt.silentOverlay ||
            subscriptionState !== 'unsubscribed') {
            return null;
        }
        var overlay = prompt.silentOverlay;
        var bodyLabel = overlay.labels.body;
        var color = overlay.colors.text;
        var maskStyle = __assign(__assign({}, localStyles.mask), { color: color });
        return ((0, preact_1.h)(background_mask_1.BackgroundMask, { blurClass: "kumulos-overlay-blur", "class": "kumulos-overlay kumulos-overlay-".concat((0, utils_1.getBrowserName)()), style: maskStyle, onClick: this.onBackgroundMaskClick },
            this.renderPointer(color),
            (0, preact_1.h)("p", { "class": "kumulos-silent-overlay-content-text" }, bodyLabel)));
    };
    OverlaySilent.prototype.renderPointer = function (color) {
        var windowDimensions = this.state.windowDimensions;
        var pointerStart = {
            x: windowDimensions.width / 2 + POINTER_START_OFFSET.x,
            y: windowDimensions.height / 2 + POINTER_START_OFFSET.y
        };
        var pointerEnd = {
            x: windowDimensions.width + POINTER_END_OFFSET.x,
            y: POINTER_END_OFFSET.y
        };
        var controlPoint = {
            x: pointerEnd.x + CONTROL_POINT_OFFSET.x,
            y: pointerStart.y + CONTROL_POINT_OFFSET.y
        };
        return ((0, preact_1.h)("div", { "class": "kumulos-silent-overlay-indicator" },
            (0, preact_1.h)(svg_pointer_1.SvgPointer, { area: windowDimensions, quadCurvePoints: {
                    p1: pointerStart,
                    p2: controlPoint,
                    p3: pointerEnd
                }, color: color })));
    };
    return OverlaySilent;
}(preact_1.Component));
exports.OverlaySilent = OverlaySilent;


/***/ }),

/***/ "./src/prompts/overlay/push-perms.tsx":
/*!********************************************!*\
  !*** ./src/prompts/overlay/push-perms.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Overlay = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var utils_1 = __webpack_require__(/*! ../../core/utils */ "./src/core/utils.ts");
var background_mask_1 = __webpack_require__(/*! ./background-mask */ "./src/prompts/overlay/background-mask.tsx");
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
        return ((0, preact_1.h)(background_mask_1.BackgroundMask, { style: style, 
            // maintains backwards compat with existing blur class that
            // was being applied directly by this component previously
            blurClass: "kumulos-overlay-blur", "class": "kumulos-overlay kumulos-overlay-".concat((0, utils_1.getBrowserName)()) },
            (0, preact_1.h)("div", { "class": "kumulos-overlay-strip", style: { background: overlay.colors.strip } },
                (0, preact_1.h)("div", { "class": "kumulos-overlay-content-container" },
                    (0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "35", viewBox: "0 0 64 33" },
                        (0, preact_1.h)("path", { fill: "none", stroke: overlay.colors.text, "stroke-width": "2.5px", "stroke-linecap": "round", d: "M 12.57,11.12\n           C 12.57,11.12 6.84,20.82 4.13,21.01\n             1.42,21.21 20.71,28.67 26.62,28.67M 4.23,21.01\n           C 4.23,21.01 53.96,14.91 60.65,3.47" })),
                    overlay.iconUrl && (0, preact_1.h)("img", { src: overlay.iconUrl }),
                    (0, preact_1.h)("div", { "class": "kumulos-overlay-content" },
                        (0, preact_1.h)("h3", null, overlay.labels.heading),
                        (0, preact_1.h)("p", null, overlay.labels.body), (_a = overlay.links) === null || _a === void 0 ? void 0 :
                        _a.map(function (l) { return ((0, preact_1.h)("a", { href: l.url, target: "_blank" }, l.label)); }))))));
    };
    return Overlay;
}(preact_1.Component));
exports.Overlay = Overlay;


/***/ }),

/***/ "./src/prompts/prompt-reminder.ts":
/*!****************************************!*\
  !*** ./src/prompts/prompt-reminder.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
            return (0, storage_1.persistPromptReminder)(prompt.uuid, {
                declinedOn: Date.now()
            });
        case core_1.UiActionType.DECLINE:
            return (0, storage_1.persistPromptReminder)(prompt.uuid, 'suppressed');
        default:
            return console.warn("Unsupported decline action type ".concat(type, " supported for prompt ").concat(prompt.uuid, ", fall back to always show this prompt when declined"));
    }
}
exports.maybePersistReminder = maybePersistReminder;
function isPromptSuppressed(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var reminder, uiActions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, storage_1.getPromptReminder)(prompt.uuid)];
                case 1:
                    reminder = _a.sent();
                    if (!reminder) {
                        return [2 /*return*/, false];
                    }
                    if ('suppressed' === reminder) {
                        return [2 /*return*/, true];
                    }
                    if (!('uiActions' in prompt)) {
                        return [2 /*return*/, false];
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
            var pattern = "^".concat((0, utils_1.escapeRegExp)(v).replace(/\\\*/g, '.*'), "$");
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
                console.warn("Unknown filter operator: ".concat(op));
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
                        return [4 /*yield*/, (0, prompt_reminder_1.isPromptSuppressed)(prompt_1)];
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
                        // Cast necessary to narrow the type from the constraint.
                        // Seems the TS compiler isn't quite smart enough when handling
                        // the 'T extends PromptConfig' constraint.
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.UIContext = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
exports.UIContext = (0, preact_1.createContext)(undefined);


/***/ }),

/***/ "./src/prompts/ui.tsx":
/*!****************************!*\
  !*** ./src/prompts/ui.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var background_mask_1 = __webpack_require__(/*! ./overlay/background-mask */ "./src/prompts/overlay/background-mask.tsx");
var push_perms_1 = __webpack_require__(/*! ./overlay/push-perms */ "./src/prompts/overlay/push-perms.tsx");
var push_perms_silent_1 = __webpack_require__(/*! ./overlay/push-perms-silent */ "./src/prompts/overlay/push-perms-silent.tsx");
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
        return ((0, preact_1.h)("div", { "class": "kumulos-tooltip kumulos-tooltip-".concat(this.props.position) }, this.props.children));
    };
    return Tooltip;
}(preact_1.Component));
exports.Tooltip = Tooltip;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.render = function () {
        return (0, preact_1.h)("div", { "class": "kumulos-toast" }, this.props.message);
    };
    return Toast;
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
            toastQueue: __spreadArray(__spreadArray([], this.state.toastQueue, true), [message], false)
        });
        setTimeout(this.dequeueToast, 3200);
    };
    Ui.prototype.render = function () {
        return (0, compat_1.createPortal)((0, preact_1.h)(preact_1.Fragment, null,
            this.maybeRenderPromptBackgroundMask(),
            this.props.prompts.map(this.renderPrompt, this),
            this.renderPostAction(),
            !(0, utils_1.isMobile)() && ((0, preact_1.h)(push_perms_1.Overlay, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt, subscriptionState: this.props.subscriptionState })),
            !(0, utils_1.isMobile)() && ((0, preact_1.h)(push_perms_silent_1.OverlaySilent, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt, subscriptionState: this.props.subscriptionState, onDismiss: this.props.onDismissOverlay })),
            this.state.toastQueue.length > 0 && ((0, preact_1.h)(Toast, { message: this.state.toastQueue[0] }))), document.body);
    };
    Ui.prototype.maybeRenderPromptBackgroundMask = function () {
        if ('requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState) {
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
        return (0, preact_1.h)(background_mask_1.BackgroundMask, { style: style });
    };
    Ui.prototype.renderPrompt = function (prompt) {
        var _a;
        if ('requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState) {
            return null;
        }
        if ('postaction' === this.props.promptManagerState) {
            return null;
        }
        switch (prompt.type) {
            case 'bell':
                return ((0, preact_1.h)(bell_1.Bell, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined }));
            case 'alert':
            case 'banner':
                var action = void 0;
                if (prompt.type === core_1.PromptTypeName.ALERT) {
                    action = (_a = prompt.actions) === null || _a === void 0 ? void 0 : _a.find(function (action) {
                        return action.type === 'userChannelSelectInline';
                    });
                }
                return ((0, preact_1.h)(dialog_1.Dialog, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined, action: action }));
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
            backgroundMask = ((0, preact_1.h)(background_mask_1.BackgroundMask, { style: { backgroundColor: maskConfig.colors.bg } }));
        }
        return ((0, preact_1.h)(preact_1.Fragment, null,
            backgroundMask,
            (0, preact_1.h)(channels_dialog_1.ChannelsDialog, { action: currentPostAction, onConfirm: function (channelSelections) {
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
/***/ ((__unused_webpack_module, exports) => {

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

/***/ "./src/worker/messaging.ts":
/*!*********************************!*\
  !*** ./src/worker/messaging.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxlQUFlLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxX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RU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQtY29weS9pbmRleC5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzP2ZiZDEiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9zdmctcG9pbnRlci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2NoYW5uZWxzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL3NhZmFyaS50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC93M2MudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3Jvb3QtZnJhbWUudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3N0b3JhZ2UvaWRiLWtleXZhbC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9mcC9mcC1jYXB0dXJlLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2ZwL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZnAvdHlwZXMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvYmVsbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC9kZGwtYmFubmVyLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGRsL2RlZXBsaW5rLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC9tYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGRsL3VpLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGlhbG9nL2NoYW5uZWxzLWRpYWxvZy50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9jaGFubmVscy1saXN0LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGlhbG9nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9vdmVybGF5L2JhY2tncm91bmQtbWFzay50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL292ZXJsYXkvcHVzaC1wZXJtcy1zaWxlbnQudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9vdmVybGF5L3B1c2gtcGVybXMudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9wcm9tcHQtcmVtaW5kZXIudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3RyaWdnZXJzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy91aS1jb250ZXh0LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy91aS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3V0aWxzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvd29ya2VyL21lc3NhZ2luZy50cyIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia3VtdWxvc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrdW11bG9zXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohIGNsaXBib2FyZC1jb3B5LiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBnbG9iYWwgRE9NRXhjZXB0aW9uICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xpcGJvYXJkQ29weVxuXG5mdW5jdGlvbiBtYWtlRXJyb3IgKCkge1xuICByZXR1cm4gbmV3IERPTUV4Y2VwdGlvbignVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQnLCAnTm90QWxsb3dlZEVycm9yJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUNsaXBib2FyZEFwaSAodGV4dCkge1xuICAvLyBVc2UgdGhlIEFzeW5jIENsaXBib2FyZCBBUEkgd2hlbiBhdmFpbGFibGUuIFJlcXVpcmVzIGEgc2VjdXJlIGJyb3dzaW5nXG4gIC8vIGNvbnRleHQgKGkuZS4gSFRUUFMpXG4gIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgIHRocm93IG1ha2VFcnJvcigpXG4gIH1cbiAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlFeGVjQ29tbWFuZCAodGV4dCkge1xuICAvLyBQdXQgdGhlIHRleHQgdG8gY29weSBpbnRvIGEgPHNwYW4+XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRcblxuICAvLyBQcmVzZXJ2ZSBjb25zZWN1dGl2ZSBzcGFjZXMgYW5kIG5ld2xpbmVzXG4gIHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnXG4gIHNwYW4uc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdhdXRvJ1xuICBzcGFuLnN0eWxlLnVzZXJTZWxlY3QgPSAnYWxsJ1xuXG4gIC8vIEFkZCB0aGUgPHNwYW4+IHRvIHRoZSBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbilcblxuICAvLyBNYWtlIGEgc2VsZWN0aW9uIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJhbmdlIG9mIHRleHQgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gIGNvbnN0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gIHJhbmdlLnNlbGVjdE5vZGUoc3BhbilcbiAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuXG4gIC8vIENvcHkgdGV4dCB0byB0aGUgY2xpcGJvYXJkXG4gIGxldCBzdWNjZXNzID0gZmFsc2VcbiAgdHJ5IHtcbiAgICBzdWNjZXNzID0gd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBDbGVhbnVwXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbilcbiAgfVxuXG4gIGlmICghc3VjY2VzcykgdGhyb3cgbWFrZUVycm9yKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2xpcGJvYXJkQ29weSAodGV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvcHlDbGlwYm9hcmRBcGkodGV4dClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gLi4uT3RoZXJ3aXNlLCB1c2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoKSBmYWxsYmFja1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb3B5RXhlY0NvbW1hbmQodGV4dClcbiAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICB0aHJvdyAoZXJyMiB8fCBlcnIgfHwgbWFrZUVycm9yKCkpXG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rdW11bG9zLXJhdGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuLmt1bXVsb3MtcmF0aW5nIC5rdW11bG9zLXJhdGluZy1zdGFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmt1bXVsb3MtcmF0aW5nIC5rdW11bG9zLXJhdGluZy1zdGFyIC5rdW11bG9zLXJhdGluZy1oYWxmc3RhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5rdW11bG9zLXJhdGluZyAua3VtdWxvcy1yYXRpbmctY291bnQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNaO0FBR0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIua3VtdWxvcy1yYXRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcblxcbiAgICAua3VtdWxvcy1yYXRpbmctc3RhciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAua3VtdWxvcy1yYXRpbmctaGFsZnN0YXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3MtcmF0aW5nLWNvdW50IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tc2hha2Uge1xcbiAgMTAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1mYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy10b2FzdC1pbi1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy10b29sdGlwLXBhcmVudCAua3VtdWxvcy10b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50OmhvdmVyIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxufVxcbi5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1yaWdodCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyMjI7XFxuICByaWdodDogMTAwJTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0IHtcXG4gIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtdG9hc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBhbmltYXRpb246IGt1bXVsb3MtdG9hc3QtaW4tb3V0IDAuMjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuXFxuLmt1bXVsb3MtcHJvbXB0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4ua3VtdWxvcy1wcm9tcHQgKixcXG4ua3VtdWxvcy1wcm9tcHQgKjpiZWZvcmUsXFxuLmt1bXVsb3MtcHJvbXB0ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiB1bnNldDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDNweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgIHBhZGRpbmctbGVmdDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsIHN2ZyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuLmt1bXVsb3MtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDcuNSUgMCAwIDcuNSU7XFxufVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gIH1cXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgdG9wOiAxMjBweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gIG9yZGVyOiAyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50LFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlcixcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlciBoMSxcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keSxcXG4ua3VtdWxvcy1hbGVydC1ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5ib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIgPiAqOm5vdCgua3VtdWxvcy1wcm9tcHQpOm5vdCgua3VtdWxvcy1vdmVybGF5KTpub3QoLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrKSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWJsdXIgPiAqOm5vdCgua3VtdWxvcy1vdmVybGF5KSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMjAwMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAqLFxcbi5rdW11bG9zLW92ZXJsYXkgKjpiZWZvcmUsXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDUwMHB4ICsgMTIlKTtcXG4gIG1heC13aWR0aDogNjYwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMzglO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgbWFyZ2luOiA1NXB4IDEuN2VtIDAgMDtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogNTVweDtcXG4gIGhlaWdodDogNTVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgcCxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjY1ZW07XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHQge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWNocm9tZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogNDQwcHg7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjc1cHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBvcmRlcjogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSArIDIxMnB4KTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19hbmltcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fdG9vbHRpcC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3RvYXN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fcHJvbXB0cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19jaGVja2JveC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2Jhbm5lci5jb21wYWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fc2FmZS1hcmVhLWluc2V0LXBhZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9iZWxsL2JlbGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvZGlhbG9nL2RpYWxvZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9iYWNrZ3JvdW5kLW1hc2suc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvb3ZlcmxheS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0k7SUFFSSxrQ0FBQTtFQ0ROO0VESUU7SUFFSSxpQ0FBQTtFQ0hOO0VETUU7SUFHSSxrQ0FBQTtFQ05OO0VEU0U7SUFFSSxpQ0FBQTtFQ1JOO0FBQ0Y7QURXQTtFQUNJO0lBQ0ksVUFBQTtFQ1ROO0VEWUU7SUFDSSxVQUFBO0VDVk47QUFDRjtBRGFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7RUNYTjtFRGNFO0lBQ0ksVUFBQTtJQUNBLCtCQUFBO0VDWk47QUFDRjtBRGVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUNiTjtFRGdCRTtJQUNJLFVBQUE7SUFDQSwrQkFBQTtFQ2ROO0FBQ0Y7QURpQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQ0FBQTtFQ2ZOO0VEa0JFO0lBQ0ksVUFBQTtJQUNBLGtDQUFBO0VDaEJOO0FBQ0Y7QURtQkE7RUFD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QUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBYjJmUjtBYXhmSTtFQUNJLGdCQUFBO0FiMGZSO0FheGZRO0VBQ0ksUUFBQTtFQUNBLHlCQUFBO0FiMGZaOztBYXBmSTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBYnVmUjs7QWFuZkE7RUFDSTtJQUNJLGFBQUE7RWJzZk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBCYXNlZCBvbiBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9zaGFrZS1jc3Mta2V5ZnJhbWUtYW5pbWF0aW9uL1xcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLXNoYWtlIHtcXG4gICAgMTAlLFxcbiAgICA5MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAyMCUsXFxuICAgIDgwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMzAlLFxcbiAgICA1MCUsXFxuICAgIDcwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDQwJSxcXG4gICAgNjAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1mYWRlLWluIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1sZWZ0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1yaWdodCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtdG9hc3QtaW4tb3V0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtZG93biB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIixcIkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLXNoYWtlIHtcXG4gIDEwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcbiAgMzAlLCA1MCUsIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICB9XFxuICA0MCUsIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1yaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtdG9hc3QtaW4tb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtZG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXBhcmVudDpob3ZlciAua3VtdWxvcy10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy10b29sdGlwIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgZm9udDogMTRweCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxMTAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogOHB4O1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1yaWdodCB7XFxuICBsZWZ0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQ6YWZ0ZXIge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyO1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtbGVmdCB7XFxuICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLWxlZnQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtbGVmdDphZnRlciB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzIyMjtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLXRvYXN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICB6LWluZGV4OiAxMTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXRvYXN0LWluLW91dCAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcblxcbi5rdW11bG9zLXByb21wdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuLmt1bXVsb3MtcHJvbXB0ICosXFxuLmt1bXVsb3MtcHJvbXB0ICo6YmVmb3JlLFxcbi5rdW11bG9zLXByb21wdCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogIzIyMjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAtN3B4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgIzAwMDtcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWZsb3c6IHdyYXA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICB0b3A6IDA7XFxuICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtZG93biAwLjRzIGVhc2U7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogdW5zZXQ7XFxuICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtdXAgMC40cyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZmxvdzogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWljb24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMCAzcHggMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5Ac3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWxlZnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtcmlnaHQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC10b3Age1xcbiAgICBwYWRkaW5nLXRvcDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWJvdHRvbSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDE1cHg7XFxuICBsZWZ0OiAxNXB4O1xcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5rdW11bG9zLWJlbGwge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtYmVsbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbCBzdmcge1xcbiAgZmlsbDogI2ZmZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcbi5rdW11bG9zLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHRvcDogMTIwcHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb24sXFxuLmt1bXVsb3MtYWxlcnQtaWNvbiB7XFxuICBvcmRlcjogMjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIgaDEsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9ucyxcXG4ua3VtdWxvcy1hbGVydC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG9yZGVyOiAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuYm9keS5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgKixcXG4ua3VtdWxvcy1vdmVybGF5ICo6YmVmb3JlLFxcbi5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICBtYXgtd2lkdGg6IDY2MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDM4JTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDU1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHAsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCBwIHtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0IHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ0MHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDY3NXB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgb3JkZXI6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LXNhZmFyaSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLFwiLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQge1xcbiAgICAua3VtdWxvcy10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciAua3VtdWxvcy10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgICBiYWNrZ3JvdW5kOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgZm9udDogMTRweCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHotaW5kZXg6IDExMDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgICB9XFxuXFxuICAgICYtcmlnaHQge1xcbiAgICAgICAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgJHF1aW50RWFzaW5nO1xcblxcbiAgICAgICAgJjphZnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtbGVmdCB7XFxuICAgICAgICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLWxlZnQgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHRvb2x0aXAtYmFja2dyb3VuZDtcXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4kdG9vbHRpcC1iYWNrZ3JvdW5kOiAjMjIyO1xcbi8vIGh0dHBzOi8vZWFzaW5ncy5uZXQvZW4jZWFzZU91dFF1aW50XFxuJHF1aW50RWFzaW5nOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuXFxuJGRlZmF1bHRGb250OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuJGRlZmF1bHRIZWFkZXJGb250U2l6ZTogMThweDtcXG4kZGVmYXVsdEJvZHlTaXplOiAxNHB4O1xcbiRkZWZhdWx0QnV0dG9uU2l6ZTogMTRweDtcXG5cXG4kbWFza1pJbmRleDogOTAwO1xcbiRwcm9tcHRaSW5kZXg6IDEwMDA7XFxuXFxuJGRlZmF1bHRCYW5uZXJIZWFkZXJGb250U2l6ZU1vYmlsZTogMTJweDtcXG4kZGVmYXVsdEJhbm5lckhlYWRlckxpbmVIZWlnaHRNb2JpbGU6IDE0cHg7XFxuXFxuJGRlZmF1bHRCYW5uZXJCb2R5Rm9udFNpemVNb2JpbGU6IDEycHg7XFxuJGRlZmF1bHRCYW5uZXJCb2R5TGluZUhlaWdodE1vYmlsZTogMTRweDtcXG5cXG4kZGVmYXVsdEJhbm5lclBhZGRpbmc6IDEwcHg7XCIsXCIua3VtdWxvcy10b2FzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICB6LWluZGV4OiAxMTAwO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXRvYXN0LWluLW91dCAwLjI1cyAkcXVpbnRFYXNpbmc7XFxufVxcblwiLFwiLmt1bXVsb3MtcHJvbXB0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgKixcXG4gICAgKjpiZWZvcmUsXFxuICAgICo6YWZ0ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICB6LWluZGV4OiAkcHJvbXB0WkluZGV4O1xcbn1cXG5cIixcIi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcXG5cXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEJ1dHRvblNpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6ICM1NTU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggM3B4ICRzaGFkb3ctY29sb3I7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYig3NiwgMTM2LCAyMjQpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG59XFxuXCIsXCIua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogLTdweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXCIsXCIua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcblxcbiAgICBwYWRkaW5nOiAkZGVmYXVsdEJhbm5lclBhZGRpbmc7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuXFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3Age1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tYm90dG9tIHtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRvcDogdW5zZXQ7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtdXAgMC40cyBlYXNlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1pY29uIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QmFubmVySGVhZGVyRm9udFNpemVNb2JpbGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAkZGVmYXVsdEJhbm5lckJvZHlMaW5lSGVpZ2h0TW9iaWxlO1xcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbjogMCAwIDNweCAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdEhlYWRlckZvbnRTaXplO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEJhbm5lckJvZHlGb250U2l6ZU1vYmlsZTtcXG4gICAgbGluZS1oZWlnaHQ6ICRkZWZhdWx0QmFubmVyQm9keUxpbmVIZWlnaHRNb2JpbGU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCb2R5U2l6ZTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWJhbm5lci1jb21wYWN0IHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3MtYmFubmVyLWNsb3NlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbn1cXG5cIixcIkBzdXBwb3J0cyhwYWRkaW5nOiB1bnF1b3RlKCdtYXgoMHB4KScpKSB7XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSknKTtcXG4gICAgfVxcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpJyk7XFxuICAgIH1cXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC10b3Age1xcbiAgICAgICAgcGFkZGluZy10b3A6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKScpO1xcbiAgICB9XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB1bnF1b3RlKCdtYXgoJyArICRkZWZhdWx0QmFubmVyUGFkZGluZyArICcsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSknKTtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICAmLWJvdHRvbS1sZWZ0IHtcXG4gICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgIGxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgJi1ib3R0b20tcmlnaHQge1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzICRxdWludEVhc2luZyxcXG4gICAgICAgIGJveC1zaGFkb3cgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLy8gTm90ZSB0aGUgc2NhbGUvd2lkdGgvaGVpZ2h0IGluIGFsbCBzdGF0ZXMgaGF2ZSBiZWVuIGNob3NlbiBzdWNoIHRoYXQgdGhleSByZXNvbHZlIHRvIHdob2xlIG51bWJlcnMuXFxuICAgIC8vIFRoaXMgaGVscHMgcmVkdWNlIGJsdXIgb2YgdGhlIFNWRyBpY29uIGR1ZSB0byByZXN0ZXJpc2F0aW9uIGluIFdlYmtpdC5cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcblxcbiAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICBzdmcge1xcbiAgICAgICAgZmlsbDogI2ZmZjtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG4gICAgfVxcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIGhlaWdodDogODUlO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbjogNy41JSAwIDAgNy41JTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXCIsXCIua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG5cXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbiAgICAua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICAgICAgbGVmdDogNTAlO1xcblxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgIHRvcDogMTIwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnQsXFxuLmt1bXVsb3MtYWxlcnQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlcixcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0SGVhZGVyRm9udFNpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keSxcXG4ua3VtdWxvcy1hbGVydC1ib2R5IHtcXG4gICAgZmxleDogMTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBvcmRlcjogMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXCIsXCJib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1clxcbiAgICA+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB6LWluZGV4OiAkbWFza1pJbmRleDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsXCIua3VtdWxvcy1vdmVybGF5LWJsdXIgPiAqOm5vdCgua3VtdWxvcy1vdmVybGF5KSB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgKixcXG4gICAgKjpiZWZvcmUsXFxuICAgICo6YWZ0ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICB6LWluZGV4OiAyMDAwO1xcblxcbiAgICAmLXN0cmlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNjYwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgJi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzOCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcblxcbiAgICAgICAgKiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgICAgICAgICAgIHN0cm9rZTogbm9uZTtcXG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgzLFxcbiAgICAgICAgcCxcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDMge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xcblxcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDQ0MHB4O1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4td2lkdGg6IDY3NXB4O1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEgobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIFo9aC5ldmVudDtmdW5jdGlvbiBZKCl7fWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gWiYmKG49WihuKSksbi5wZXJzaXN0PVksbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cixlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpfW4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTpILHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT15LnZhbHVlfHxfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLXJhdGluZy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLXJhdGluZy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgJy4vYXBwLXJhdGluZy5zY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRpbmdQcm9wcyB7XG4gICAgc3RhcnM6IG51bWJlcjtcbiAgICByYXRpbmdDb3VudDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBSYXRpbmcocHJvcHM6IEFwcFJhdGluZ1Byb3BzKSB7XG4gICAgY29uc3QgeyBzdGFycywgcmF0aW5nQ291bnQgfSA9IHByb3BzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlU3RhcnMoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJFbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICAgICAgICBzdGFyRWxzLnB1c2goXG4gICAgICAgICAgICAgICAgPEFwcFJhdGluZ1N0YXJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMgPj0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhcnMgPCBpICYmIHN0YXJzID4gaSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoYWxmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ29mZidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJFbHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmF0aW5nU3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1yYXRpbmdcIiBzdHlsZT17cmF0aW5nU3R5bGV9PlxuICAgICAgICAgICAge2NyZWF0ZVN0YXJzKCl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLWNvdW50XCI+KHtwcm9wcy5yYXRpbmdDb3VudH0pPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5pbnRlcmZhY2UgQXBwUmF0aW5nU3RhclByb3BzIHtcbiAgICBzdGF0ZTogJ29uJyB8ICdoYWxmJyB8ICdvZmYnO1xufVxuXG5mdW5jdGlvbiBBcHBSYXRpbmdTdGFyKHByb3BzOiBBcHBSYXRpbmdTdGFyUHJvcHMpIHtcbiAgICBsZXQgc3RhckVsO1xuXG4gICAgaWYgKHByb3BzLnN0YXRlID09PSAnb24nKSB7XG4gICAgICAgIHN0YXJFbCA9IDxzcGFuPiYjOTczMzs8L3NwYW4+O1xuICAgIH0gZWxzZSBpZiAocHJvcHMuc3RhdGUgPT09ICdoYWxmJykge1xuICAgICAgICBzdGFyRWwgPSAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPiYjOTczNDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrdW11bG9zLXJhdGluZy1oYWxmc3RhclwiPiYjOTczMzs8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGFyRWwgPSA8c3Bhbj4mIzk3MzQ7PC9zcGFuPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLXN0YXJcIj57c3RhckVsfTwvZGl2Pjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zLCBQb2ludCB9IGZyb20gJy4uL2NvcmUnO1xuXG5pbnRlcmZhY2UgUXVhZHJhdGljQ3VydmVQb2ludHMge1xuICAgIHAxOiBQb2ludDtcbiAgICBwMjogUG9pbnQ7XG4gICAgcDM6IFBvaW50O1xufVxuXG5pbnRlcmZhY2UgU3ZnUG9pbnRlclByb3BzIHtcbiAgICBhcmVhOiBEaW1lbnNpb25zO1xuICAgIHF1YWRDdXJ2ZVBvaW50czogUXVhZHJhdGljQ3VydmVQb2ludHM7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgUElfSEFMRiA9IE1hdGguUEkgLyAyO1xuY29uc3QgUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUID0gNTA7XG5jb25zdCBQT0lOVEVSX0NVUlZFX0NUUkxfUE9JTlRfRElTVCA9IDE1MDtcblxuZnVuY3Rpb24gY2FsY1BvaW50ZXJIZWFkQ3VydmVDb29yZHNGcm9tQ3RybEFuZFRhcmdldChcbiAgICBjdHJsUG9pbnQ6IFBvaW50LFxuICAgIHRhcmdldDogUG9pbnRcbik6IFF1YWRyYXRpY0N1cnZlUG9pbnRzIHtcbiAgICBjb25zdCBwb2ludGVyRGlyUmFkcyA9XG4gICAgICAgIE1hdGguYXRhbjIoY3RybFBvaW50LnggLSBjdHJsUG9pbnQueCwgdGFyZ2V0LnkgLSB0YXJnZXQueSkgKyBQSV9IQUxGO1xuXG4gICAgY29uc3QgZGlyVmVjOiBQb2ludCA9IHtcbiAgICAgICAgeDogTWF0aC5jb3MocG9pbnRlckRpclJhZHMpLFxuICAgICAgICB5OiAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMpXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnZlQ3RybFBvaW50OiBQb2ludCA9IHtcbiAgICAgICAgeDogZGlyVmVjLnggKiBQT0lOVEVSX0NVUlZFX0NUUkxfUE9JTlRfRElTVCxcbiAgICAgICAgeTogZGlyVmVjLnkgKiBQT0lOVEVSX0NVUlZFX0NUUkxfUE9JTlRfRElTVFxuICAgIH07XG5cbiAgICBjb25zdCBwb2ludGVyT2Zmc2V0OiBQb2ludCA9IHtcbiAgICAgICAgeDogLWN1cnZlQ3RybFBvaW50LnggKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QsXG4gICAgICAgIHk6IC1kaXJWZWMueSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVFxuICAgIH07XG5cbiAgICBjb25zdCBjdXJ2ZVN0YXJ0OiBQb2ludCA9IHtcbiAgICAgICAgeDpcbiAgICAgICAgICAgIE1hdGguY29zKHBvaW50ZXJEaXJSYWRzIC0gUElfSEFMRikgKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgK1xuICAgICAgICAgICAgcG9pbnRlck9mZnNldC54LFxuICAgICAgICB5OlxuICAgICAgICAgICAgLU1hdGguc2luKHBvaW50ZXJEaXJSYWRzIC0gUElfSEFMRikgKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgK1xuICAgICAgICAgICAgcG9pbnRlck9mZnNldC55XG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnZlRW5kOiBQb2ludCA9IHtcbiAgICAgICAgeDpcbiAgICAgICAgICAgIE1hdGguY29zKHBvaW50ZXJEaXJSYWRzICsgUElfSEFMRikgKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgK1xuICAgICAgICAgICAgcG9pbnRlck9mZnNldC54LFxuICAgICAgICB5OlxuICAgICAgICAgICAgLU1hdGguc2luKHBvaW50ZXJEaXJSYWRzICsgUElfSEFMRikgKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgK1xuICAgICAgICAgICAgcG9pbnRlck9mZnNldC55XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHAxOiBjdXJ2ZVN0YXJ0LFxuICAgICAgICBwMjogY3VydmVDdHJsUG9pbnQsXG4gICAgICAgIHAzOiBjdXJ2ZUVuZFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdmdQb2ludGVyKHsgYXJlYSwgcXVhZEN1cnZlUG9pbnRzLCBjb2xvciB9OiBTdmdQb2ludGVyUHJvcHMpIHtcbiAgICBjb25zdCB7IHAxLCBwMiwgcDMgfSA9IHF1YWRDdXJ2ZVBvaW50cztcbiAgICBjb25zdCBsaW5lUGF0aCA9IGBNICR7cDEueH0gJHtwMS55fSBRICR7cDIueH0gJHtwMi55fSAke3AzLnh9ICR7cDMueX1gO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBwMTogaDEsXG4gICAgICAgIHAyOiBoMixcbiAgICAgICAgcDM6IGgzXG4gICAgfSA9IGNhbGNQb2ludGVySGVhZEN1cnZlQ29vcmRzRnJvbUN0cmxBbmRUYXJnZXQocDIsIHAzKTtcbiAgICBjb25zdCBoZWFkUGF0aCA9IGBNICR7cDMueCArIGgxLnh9ICR7cDMueSArIGgxLnl9IFEgJHtwMy54ICsgaDIueH0gJHtwMy55ICtcbiAgICAgICAgaDIueX0gJHtwMy54ICsgaDMueH0gJHtwMy55ICsgaDMueX1gO1xuXG4gICAgY29uc3Qgc3Ryb2tlU3R5bGUgPSB7XG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIGZpbGw6ICdub25lJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB2aWV3Qm94PXtgMCAwICR7YXJlYS53aWR0aH0gJHthcmVhLmhlaWdodH1gfVxuICAgICAgICAgICAgd2lkdGg9e2Ake2FyZWEud2lkdGh9cHhgfVxuICAgICAgICAgICAgaGVpZ2h0PXtgJHthcmVhLmhlaWdodH1weGB9XG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIzXCJcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3N0cm9rZVN0eWxlfSBkPXtsaW5lUGF0aH0gLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17c3Ryb2tlU3R5bGV9IGQ9e2hlYWRQYXRofSAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgUHJvcHNPYmplY3QsIFNlcnZpY2UsIGdldEluc3RhbGxJZCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2gsIGF1dGhlZEZldGNoSnNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG50eXBlIEh0dHBNZXRob2QgPSAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbCB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgc3Vic2NyaWJlZDogQm9vbGVhbjtcbiAgICBtZXRhPzogUHJvcHNPYmplY3QgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTcGVjIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgc3Vic2NyaWJlOiBib29sZWFuO1xuICAgIG1ldGE/OiBQcm9wc09iamVjdCB8IG51bGw7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBzaG93SW5Qb3J0YWw/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWtlU3Vic2NyaXB0aW9uUmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBIdHRwTWV0aG9kLFxuICAgICAgICB1dWlkczogc3RyaW5nW11cbiAgICApOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbnRleHQudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzL3N1YnNjcmlwdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHV1aWRzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2godGhpcy5jb250ZXh0LCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBjaGFubmVscyBnaXZlbiBieSB1bmlxdWUgSURcbiAgICAgKi9cbiAgICBzdWJzY3JpYmUodXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnUE9TVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZXMgZnJvbSB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUodXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnREVMRVRFJywgdXVpZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgaW5zdGFsbGF0aW9ucyBjaGFubmVsIHN1YnNjcmlwdGlvbnMgdG8gdGhvc2UgZ2l2ZW4gYnkgdW5pcXVlIElELlxuICAgICAqXG4gICAgICogQW55IG90aGVyIHN1YnNjcmlwdGlvbnMgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqL1xuICAgIHNldFN1YnNjcmlwdGlvbnModXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlU3Vic2NyaXB0aW9uUmVxdWVzdCgnUFVUJywgdXVpZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgb2YgdGhlIGV4aXN0aW5nIGluc3RhbGxhdGlvbidzIGNoYW5uZWwgc3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIGNsZWFyU3Vic2NyaXB0aW9ucygpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN1YnNjcmlwdGlvbnMoW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RzIHRoZSBjaGFubmVscyBhdmFpbGFibGUgdG8gdGhpcyBpbnN0YWxsYXRpb24gYWxvbmcgd2l0aCBzdWJzY3JpcHRpb24gc3RhdHVzXG4gICAgICovXG4gICAgbGlzdENoYW5uZWxzKCk6IFByb21pc2U8Q2hhbm5lbFtdPiB7XG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbnRleHQudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzYDtcbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbFtdPih0aGlzLmNvbnRleHQsIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwdXNoIGNoYW5uZWwgYW5kIG9wdGlvbmFsbHkgc3Vic2NyaWJlcyB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24uXG4gICAgICpcbiAgICAgKiBOYW1lIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgaWYgc2hvd0luUG9ydGFsIGlzIHRydWUuXG4gICAgICovXG4gICAgY3JlYXRlQ2hhbm5lbChjaGFubmVsU3BlYzogQ2hhbm5lbFNwZWMpOiBQcm9taXNlPENoYW5uZWw+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsICYmXG4gICAgICAgICAgICAoIWNoYW5uZWxTcGVjLm5hbWUgfHwgIWNoYW5uZWxTcGVjLm5hbWUubGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICdOYW1lIGlzIHJlcXVpcmVkIGZvciBjaGFubmVsIGNyZWF0aW9uIHdoZW4gc2hvd0luUG9ydGFsIGlzIHRydWUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbnRleHQudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS92MS9jaGFubmVsc2A7XG5cbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdXVpZDogY2hhbm5lbFNwZWMudXVpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBjaGFubmVsU3BlYy5uYW1lLFxuICAgICAgICAgICAgICAgIHNob3dJblBvcnRhbDogQm9vbGVhbihjaGFubmVsU3BlYy5zaG93SW5Qb3J0YWwpLFxuICAgICAgICAgICAgICAgIG1ldGE6IGNoYW5uZWxTcGVjLm1ldGEsXG4gICAgICAgICAgICAgICAgaW5zdGFsbElkOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChjaGFubmVsU3BlYy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAocGFyYW1zIGFzIGFueSkuaW5zdGFsbElkID0gaW5zdGFsbElkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbD4odGhpcy5jb250ZXh0LCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgZ2V0SW5zdGFsbElkXG59IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2V0Q2FjaGVLZXlzID0gKGtleTogc3RyaW5nKSA9PiAoe1xuICAgIENPTkZJR19DQUNIRV9LRVk6IGAke2tleX1Db25maWdgLFxuICAgIENPTkZJR19DQUNIRV9LRVlfVVBEQVRFRDogYCR7a2V5fUNvbmZpZ1VwZGF0ZWRgXG59KTtcblxuY29uc3QgTUFYX0NBQ0hFX0FHRV9NUyA9IDEgKiA2MCAqIDYwICogMTAwMDtcblxuZW51bSBDb25maWdDYWNoZVR5cGUge1xuICAgIFBMQVRGT1JNID0gJ3BsYXRmb3JtJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnPFRDb25maWdUeXBlPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWNoZUtleTogc3RyaW5nLFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxUQ29uZmlnVHlwZT4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhjYWNoZUtleSk7XG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IGdldDxUQ29uZmlnVHlwZT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgY29uc3QgbGFzdExvYWRUaW1lID1cbiAgICAgICAgKGF3YWl0IGdldDxudW1iZXI+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQpKSA/PyAwO1xuICAgIGxldCB1cGRhdGVkUmVtb3RlQ29uZmlnID0gZmFsc2U7XG5cbiAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RMb2FkVGltZSA+IE1BWF9DQUNIRV9BR0VfTVMpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdDb25maWcgbmV2ZXIgc3luY2VkL3N0YWxlLCBzeW5jaW5nIG5vdy4uLicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25maWcgPSBhd2FpdCBhdXRoZWRGZXRjaEpzb248VENvbmZpZ1R5cGU+KGN0eCwgdXJsKTtcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVkUmVtb3RlQ29uZmlnKSB7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlnKTtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQsIERhdGUubm93KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGxhdGZvcm1Db25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGF3YWl0IGxvYWRDb25maWc8UGxhdGZvcm1Db25maWc+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvd2ViL2NvbmZpZ2AsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuUExBVEZPUk0sXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKSkgPz8ge31cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERkbENvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10gfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkQ29uZmlnPERkbFByb21wdENvbmZpZ1tdPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuRERMKX0vdjEvYmFubmVycz93ZWJJbnN0YWxsSWQ9JHt3ZWJJbnN0YWxsSWR9YCxcbiAgICAgICAgICAgIENvbmZpZ0NhY2hlVHlwZS5EREwsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYGxvYWREZGxDb25maWc6IGZhaWxlZCB0byBsb2FkIERlZmVycmVkIERlZXBMaW5rIGNvbmZpZ3VyYXRpb25gLFxuICAgICAgICAgICAgZXJyXG4gICAgICAgICk7XG4gICAgICAgIC8vIHVuZGVmaW5lZCByZXR1cm4gLyBubyBjb25maWdcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGUoXG4gICAgYmFubmVyVXVpZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBnZXRDYWNoZUtleXMoQ29uZmlnQ2FjaGVUeXBlLkRETCk7XG5cbiAgICBsZXQgY29uZmlncyA9IGF3YWl0IGdldDxEZGxQcm9tcHRDb25maWdbXT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdzID0gY29uZmlncy5maWx0ZXIoYyA9PiBjLnV1aWQgIT09IGJhbm5lclV1aWQpO1xuXG4gICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZLCBjb25maWdzKTtcbn1cbiIsImltcG9ydCB7IGF1dGhlZEZldGNoLCBjeXJiNTMsIHV1aWR2NCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVsLCBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuL2NoYW5uZWxzJztcblxuY29uc3QgU0RLX1ZFUlNJT04gPSAnMS4xMS4xJztcbmNvbnN0IFNES19UWVBFID0gMTA7XG5cbmV4cG9ydCB0eXBlIEluc3RhbGxJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZztcblxudHlwZSBKc29uaXNoID1cbiAgICB8IHN0cmluZ1xuICAgIHwgbnVtYmVyXG4gICAgfCBib29sZWFuXG4gICAgfCBudWxsXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfVxuICAgIHwgeyB0b0pTT046ICgpID0+IGFueSB9XG4gICAgfCBKc29uaXNoW11cbiAgICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUHJvcHNPYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfTtcblxudHlwZSBOZXN0ZWRQaWNrPFQsIEsxIGV4dGVuZHMga2V5b2YgVCwgSzIgZXh0ZW5kcyBrZXlvZiBUW0sxXT4gPSB7XG4gICAgW1AxIGluIEsxXToge1xuICAgICAgICBbUDIgaW4gSzJdOiBUW0sxXVtQMl07XG4gICAgfTtcbn07XG5cbmV4cG9ydCBlbnVtIFN5c3RlbUV2ZW50VHlwZSB7XG4gICAgTUVTU0FHRV9ERUxJVkVSRUQgPSAnay5tZXNzYWdlLmRlbGl2ZXJlZCcsXG4gICAgTUVTU0FHRV9PUEVORUQgPSAnay5tZXNzYWdlLm9wZW5lZCcsXG4gICAgUFVTSF9SRUdJU1RFUkVEID0gJ2sucHVzaC5kZXZpY2VSZWdpc3RlcmVkJyxcbiAgICBJTlNUQUxMX1RSQUNLRUQgPSAnay5zdGF0cy5pbnN0YWxsVHJhY2tlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVEVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0ZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGlvbkNsZWFyZWQnXG59XG5cbmV4cG9ydCBlbnVtIFByb21wdFR5cGVOYW1lIHtcbiAgICBCRUxMID0gJ2JlbGwnLFxuICAgIEFMRVJUID0gJ2FsZXJ0JyxcbiAgICBCQU5ORVIgPSAnYmFubmVyJyxcbiAgICBERExfQkFOTkVSID0gJ2RkbF9iYW5uZXInXG59XG5cbi8vIE5vdGUgZHVwbGljYXRlICdpbicgdnMgJ0lOJyBkdWUgdG8gbWlzYWxpZ25tZW50IGluIHNlcnZlciBjb25maWcgYW5kIHB1Ymxpc2hlZCBkb2NzIGZvciBtYW51YWwgY29uZmlnXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvciA9ICdpbicgfCAnSU4nIHwgJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XG5leHBvcnQgdHlwZSBGaWx0ZXJWYWx1ZSA9IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIFByb3BGaWx0ZXIgPSBbc3RyaW5nLCBGaWx0ZXJPcGVyYXRvciwgRmlsdGVyVmFsdWVdO1xuXG5pbnRlcmZhY2UgUHJvbXB0VHJpZ2dlciB7XG4gICAgZXZlbnQ6IHN0cmluZztcbiAgICBhZnRlclNlY29uZHM/OiBudW1iZXI7XG4gICAgZmlsdGVycz86IFByb3BGaWx0ZXJbXTtcbn1cblxuaW50ZXJmYWNlIFByb21wdE92ZXJsYXlDb25maWcge1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgbGFiZWxzOiB7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgYm9keTogc3RyaW5nO1xuICAgIH07XG4gICAgbGlua3M/OiB7IGxhYmVsOiBzdHJpbmc7IHVybDogc3RyaW5nIH1bXTtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgc2hhZGU6IHN0cmluZztcbiAgICAgICAgc3RyaXA6IHN0cmluZztcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgUHJvbXB0U2lsZW50T3ZlcmxheUNvbmZpZyA9IE5lc3RlZFBpY2s8XG4gICAgUHJvbXB0T3ZlcmxheUNvbmZpZyxcbiAgICAnbGFiZWxzJyxcbiAgICAnYm9keSdcbj4gJlxuICAgIE5lc3RlZFBpY2s8UHJvbXB0T3ZlcmxheUNvbmZpZywgJ2NvbG9ycycsICd0ZXh0Jz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZyB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnIHtcbiAgICBiZzogc3RyaW5nO1xuICAgIGZnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkZnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbmZpZyB7XG4gICAgbGFiZWxzOiBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnO1xuICAgIGNvbG9yczogQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnIHtcbiAgICBwcmVzZW50ZWRVdWlkczogc3RyaW5nW10gfCAnYWxsJztcbiAgICBjaGVja2VkVXVpZHM6IHN0cmluZ1tdIHwgJ25vbmUnIHwgJ2FsbCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdElubGluZSc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xuICAgIGRpYWxvZ0NvbmZpZzogQ2hhbm5lbERpYWxvZ0NvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsU3ViQWN0aW9uIHtcbiAgICB0eXBlOiAnc3Vic2NyaWJlVG9DaGFubmVsJztcbiAgICBjaGFubmVsVXVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBVaUFjdGlvblR5cGUge1xuICAgIERFQ0xJTkUgPSAnZGVjbGluZScsXG4gICAgUkVNSU5EID0gJ3JlbWluZCcsXG4gICAgRERMX09QRU5fU1RPUkUgPSAnb3BlblN0b3JlJyxcbiAgICBERExfT1BFTl9ERUVQTElOSyA9ICdvcGVuRGVlcGxpbmsnXG59XG5cbmludGVyZmFjZSBEZWNsaW5lUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuREVDTElORTtcbn1cblxuaW50ZXJmYWNlIFJlbWluZFByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLlJFTUlORDtcbiAgICBkZWxheTogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZztcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0QWN0aW9uID1cbiAgICB8IENoYW5uZWxTdWJBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcblxuZXhwb3J0IGVudW0gUmVtaW5kZXJUaW1lVW5pdCB7XG4gICAgSE9VUlMgPSAnaG91cnMnLFxuICAgIERBWVMgPSAnZGF5cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRpbWVVbml0OiBSZW1pbmRlclRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGRlY2xpbmU6IERlY2xpbmVQcm9tcHRBY3Rpb24gfCBSZW1pbmRQcm9tcHRBY3Rpb247XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTWFza0NvbmZpZyB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0UG9zaXRpb24ge1xuICAgIFRPUF9MRUZUID0gJ3RvcC1sZWZ0JyxcbiAgICBUT1BfQ0VOVEVSID0gJ3RvcC1jZW50ZXInLFxuICAgIFRPUF9SSUdIVCA9ICd0b3AtcmlnaHQnLFxuICAgIENFTlRFUl9MRUZUID0gJ2NlbnRlci1sZWZ0JyxcbiAgICBDRU5URVIgPSAnY2VudGVyJyxcbiAgICBDRU5URVJfUklHSFQgPSAnY2VudGVyLXJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVCA9ICdib3R0b20tbGVmdCcsXG4gICAgQk9UVE9NX0NFTlRFUiA9ICdib3R0b20tY2VudGVyJyxcbiAgICBCT1RUT01fUklHSFQgPSAnYm90dG9tLXJpZ2h0JyxcbiAgICBUT1AgPSAndG9wJyxcbiAgICBCT1RUT00gPSAnYm90dG9tJ1xufVxuXG5pbnRlcmZhY2UgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lO1xuICAgIHRyaWdnZXI6IFByb21wdFRyaWdnZXI7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xuICAgIG92ZXJsYXk/OiBQcm9tcHRPdmVybGF5Q29uZmlnO1xuICAgIHNpbGVudE92ZXJsYXk/OiBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnO1xuICAgIGFjdGlvbnM/OiBQcm9tcHRBY3Rpb25bXTtcbn1cblxuaW50ZXJmYWNlIFdpdGhJbWFnZVVybCB7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUb29sdGlwQ29uZmlnIHtcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHN1YnNjcmliZTogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgRGlhbG9nTGFiZWxDb25maWcgPSB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nTGFiZWxDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0xhYmVsQ29uZmlnXG4+O1xuXG50eXBlIERpYWxvZ0NvbG9yQ29uZmlnID0ge1xuICAgIGZnOiBzdHJpbmc7XG4gICAgYmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uRmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uQmc6IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb25GZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkJnOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nQ29sb3JDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0NvbG9yQ29uZmlnXG4+O1xuXG5pbnRlcmZhY2UgVG9hc3RNZXNzYWdlIHtcbiAgICB0aGFua3NGb3JTdWJzY3JpYmluZzogc3RyaW5nO1xufVxuXG4vLyBCRUxMXG5cbnR5cGUgQmVsbExhYmVsQ29uZmlnID0gVG9hc3RNZXNzYWdlICYgVG9vbHRpcENvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBCZWxsQ29sb3JDb25maWcge1xuICAgIGJlbGw6IHtcbiAgICAgICAgZmc6IHN0cmluZztcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxQcm9tcHRDb25maWcgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CRUxMO1xuICAgIGxhYmVscz86IEJlbGxMYWJlbENvbmZpZztcbiAgICBjb2xvcnM/OiBCZWxsQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLkJPVFRPTV9MRUZUIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NX1JJR0hUO1xufVxuXG4vLyBBTEVSVFxuXG50eXBlIEFsZXJ0TGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBBbGVydENvbG9yQ29uZmlnID0gTmFtZWREaWFsb2dDb2xvckNvbmZpZzxQcm9tcHRUeXBlTmFtZS5BTEVSVD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5BTEVSVDtcbiAgICBsYWJlbHM6IEFsZXJ0TGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBBbGVydENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5DRU5URVI7XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gQkFOTkVSXG5cbnR5cGUgQmFubmVyTGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj4gJlxuICAgIFRvYXN0TWVzc2FnZTtcbnR5cGUgQmFubmVyQ29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkFOTkVSO1xuICAgIGxhYmVsczogQmFubmVyTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBCYW5uZXJDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uVE9QIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NO1xuICAgIGJhY2tncm91bmRNYXNrPzogQmFja2dyb3VuZE1hc2tDb25maWc7XG59XG5cbi8vIERETCBCQU5ORVJcblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRpbmcge1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG59XG5cbnR5cGUgRGRsRGlhbG9nQ29sb3JDb25maWcgPSBEaWFsb2dDb2xvckNvbmZpZyAmIHsgcmF0aW5nRmc6IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBPcGVuU3RvcmVVaUFjdGlvbiA9IHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZGVlcExpbmtVcmw6IHN0cmluZztcbn07XG50eXBlIE9wZW5EZWVwTGlua1VpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRGRsVWlBY3Rpb25zID0gUHJvbXB0VWlBY3Rpb25zICYge1xuICAgIHVpQWN0aW9uczoge1xuICAgICAgICBhY2NlcHQ6IE9wZW5TdG9yZVVpQWN0aW9uIHwgT3BlbkRlZXBMaW5rVWlBY3Rpb247XG4gICAgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGRsQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIERkbFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuRERMX0JBTk5FUjtcbiAgICBsYWJlbHM6IERpYWxvZ0xhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogRGRsRGlhbG9nQ29sb3JDb25maWc7XG4gICAgYXBwUmF0aW5nPzogQXBwUmF0aW5nO1xufVxuXG5leHBvcnQgdHlwZSBQdXNoUHJvbXB0Q29uZmlnID1cbiAgICB8IEJlbGxQcm9tcHRDb25maWdcbiAgICB8IEFsZXJ0UHJvbXB0Q29uZmlnXG4gICAgfCBCYW5uZXJQcm9tcHRDb25maWc7XG5cbmV4cG9ydCB0eXBlIERkbFByb21wdENvbmZpZyA9IERkbEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnID0gUHVzaFByb21wdENvbmZpZyB8IERkbFByb21wdENvbmZpZztcbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZ3M8VCBleHRlbmRzIFByb21wdENvbmZpZz4gPSBSZWNvcmQ8c3RyaW5nLCBUPjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gICAgcHVibGljS2V5OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBwcm9tcHRzPzogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPjtcbiAgICBzYWZhcmlQdXNoSWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBTREtGZWF0dXJlIHtcbiAgICBQVVNIID0gJ3B1c2gnLFxuICAgIERETCA9ICdkZGwnXG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCcsXG4gICAgRVZFTlRTID0gJ2V2ZW50cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICByZWdpb246IHN0cmluZztcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBzZWNyZXRLZXk6IHN0cmluZztcbiAgICB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICAgIHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gICAgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdFJlbWluZGVyID1cbiAgICB8IHtcbiAgICAgICAgICBkZWNsaW5lZE9uOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCAnc3VwcHJlc3NlZCc7XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF1dGhIZWFkZXI6IHN0cmluZztcbiAgICByZWFkb25seSBzZXJ2aWNlV29ya2VyUGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIHJlYWRvbmx5IGF1dG9SZXN1YnNjcmliZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBmZWF0dXJlczogU0RLRmVhdHVyZVtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBTZGtFdmVudEhhbmRsZXJbXSB9O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsTWFwOiB7IFtrZXkgaW4gU2VydmljZV06IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBjb25maWcuc2VjcmV0S2V5O1xuICAgICAgICB0aGlzLnZhcGlkUHVibGljS2V5ID0gY29uZmlnLnZhcGlkUHVibGljS2V5O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3RoaXMuYXBpS2V5fToke3RoaXMuc2VjcmV0S2V5fWApfWA7XG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclBhdGggPSBjb25maWcuc2VydmljZVdvcmtlclBhdGggPz8gJy93b3JrZXIuanMnO1xuICAgICAgICB0aGlzLnB1c2hQcm9tcHRzID0gY29uZmlnLnB1c2hQcm9tcHRzID8/ICdhdXRvJztcbiAgICAgICAgdGhpcy5hdXRvUmVzdWJzY3JpYmUgPSBjb25maWcuYXV0b1Jlc3Vic2NyaWJlID8/IHRydWU7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBjb25maWcuZmVhdHVyZXMgPz8gW1NES0ZlYXR1cmUuUFVTSF07XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuXG4gICAgICAgIHRoaXMudXJsTWFwID0ge1xuICAgICAgICAgICAgW1NlcnZpY2UuUFVTSF06IFwiaHR0cHM6Ly9wdXNoLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5FVkVOVFNdOiBcImh0dHBzOi8vZXZlbnRzLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5ERExdOiBcImh0dHBzOi8vbGlua3MtXCIgKyBjb25maWcucmVnaW9uICsgXCIua3VtdWxvcy5jb21cIixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmVhdHVyZShmZWF0dXJlOiBTREtGZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICAgIH1cblxuICAgIHVybEZvclNlcnZpY2Uoc2VydmljZTogU2VydmljZSkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxNYXBbc2VydmljZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbJ3JlZ2lvbicsICdhcGlLZXknLCAnc2VjcmV0S2V5JywgJ3ZhcGlkUHVibGljS2V5J107XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbmxldCBpbnN0YWxsSWRTZXR0aW5nUHJvbWlzZTogUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEluc3RhbGxJZCh1dWlkdjQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsSWQ7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnN0YWxsSWQoaW5zdGFsbElkOiBJbnN0YWxsSWQpIDogUHJvbWlzZTxJbnN0YWxsSWQ+e1xuICAgIHJldHVybiBzZXQoJ2luc3RhbGxJZCcsIGluc3RhbGxJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICByZXR1cm4gZ2V0PFVzZXJJZCB8IHVuZGVmaW5lZD4oJ3VzZXJJZCcpLnRoZW4oXG4gICAgICAgIHVzZXJJZCA9PiB1c2VySWQgPz8gZ2V0SW5zdGFsbElkKClcbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzb2NpYXRlVXNlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgaWQ6IFVzZXJJZCxcbiAgICBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHNldCgndXNlcklkJywgaWQpO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRFRCwgcHJvcHMpLnRoZW4oXyA9PiB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclVzZXJBc3NvY2lhdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCwge1xuICAgICAgICBvbGRVc2VySWRlbnRpZmllcjogY3VycmVudFVzZXJJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbCgndXNlcklkJyk7XG59XG5cbmV4cG9ydCB0eXBlIEt1bXVsb3NFdmVudCA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRhdGE/OiBQcm9wc09iamVjdDtcbn07XG5cbmV4cG9ydCB0eXBlIEV2ZW50UGF5bG9hZCA9IEt1bXVsb3NFdmVudFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tFdmVudChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCBpbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRQYXlsb2FkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdXVpZDogdXVpZHY0KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY3R4LmJyb2FkY2FzdCgnZXZlbnRUcmFja2VkJywgZXZlbnRzKTtcblxuICAgIGlmICghaXNTeXN0ZW1FdmVudCh0eXBlKSl7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLkVWRU5UUyl9L3YxL2FwcC1pbnN0YWxscy8ke2luc3RhbGxJZH0vZXZlbnRzYDtcbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50cylcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBpc1N5c3RlbUV2ZW50KHR5cGU6IHN0cmluZyl7XG4gICAgcmV0dXJuICg8YW55Pk9iamVjdCkudmFsdWVzKFN5c3RlbUV2ZW50VHlwZSkuaW5jbHVkZXModHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0luc3RhbGxEZXRhaWxzKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGFwcDoge1xuICAgICAgICAgICAgYnVuZGxlOiBsb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJywgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgICAgIHRhcmdldDogMiAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICB9LFxuICAgICAgICBzZGs6IHtcbiAgICAgICAgICAgIGlkOiBTREtfVFlQRSxcbiAgICAgICAgICAgIHZlcnNpb246IFNES19WRVJTSU9OXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICB9LFxuICAgICAgICBvczoge1xuICAgICAgICAgICAgLy8gRGV0ZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIHNlcnZlci1zaWRlIGZyb20gVUEgZGF0YVxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIG9uIGJlc3QtZWZmb3J0IGJhc2lzIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBuYW1lOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgdHo6XG4gICAgICAgICAgICAgICAgdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgID8gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgaXNTaW11bGF0b3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNoUGFydHMgPSBbXG4gICAgICAgIFNES19WRVJTSU9OLFxuICAgICAgICBwYXlsb2FkLmFwcC5idW5kbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLnR6LFxuICAgICAgICBwYXlsb2FkLmRldmljZS5sb2NhbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLm5hbWVcbiAgICBdO1xuICAgIGNvbnN0IGhhc2ggPSBjeXJiNTMoaGFzaFBhcnRzLmpvaW4oJ3wnKSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0hhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPignZGV0YWlsc0hhc2gnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdIYXNoID09PSBoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5JTlNUQUxMX1RSQUNLRUQsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKCgpID0+IHNldCgnZGV0YWlsc0hhc2gnLCBoYXNoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdm9pZCAwKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsTGlzdEl0ZW0ge1xuICAgIGNoYW5uZWw6IENoYW5uZWw7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICBhbGxDaGFubmVsczogQ2hhbm5lbFtdLFxuICAgIHNlbGVjdGlvbkNvbmZpZzogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnXG4pIHtcbiAgICByZXR1cm4gYWxsQ2hhbm5lbHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIGMgPT5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgKVxuICAgICAgICAubWFwPENoYW5uZWxMaXN0SXRlbT4oYyA9PiAoe1xuICAgICAgICAgICAgY2hhbm5lbDogeyAuLi5jIH0sXG4gICAgICAgICAgICBjaGVja2VkOlxuICAgICAgICAgICAgICAgIGMuc3Vic2NyaWJlZC52YWx1ZU9mKCkgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFN5c3RlbUV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgU2FmYXJpUHVzaE1hbmFnZXIgZnJvbSAnLi9zYWZhcmknO1xuaW1wb3J0IFczY1B1c2hNYW5hZ2VyIGZyb20gJy4vdzNjJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSA9ICdzdWJzY3JpYmVkJyB8ICd1bnN1YnNjcmliZWQnIHwgJ2Jsb2NrZWQnO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIFczQyA9IDMsXG4gICAgU0FGQVJJID0gNFxufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgUFVTSCA9IDFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoT3BzTWFuYWdlciB7XG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj47XG4gICAgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG4gICAgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoY3R4OiBDb250ZXh0KTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBpbWFnZVVybD86IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hQYXlsb2FkIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1zZzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgJ2subWVzc2FnZSc6IHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0g7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICAgIHVybDogc3RyaW5nIHwgbnVsbDtcbiAgICBpbWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICBpY29uOiBzdHJpbmcgfCBudWxsO1xufVxuXG5sZXQgbWFuYWdlcjogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFB1c2hPcHNNYW5hZ2VyKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj4ge1xuICAgIGlmIChtYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgPT09ICdzYWZhcmknKSB7XG4gICAgICAgIG1hbmFnZXIgPSBsb2FkUGxhdGZvcm1Db25maWcoY3R4KS50aGVuKFxuICAgICAgICAgICAgY2ZnID0+IG5ldyBTYWZhcmlQdXNoTWFuYWdlcihjZmcpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFuYWdlciA9IFByb21pc2UucmVzb2x2ZShuZXcgVzNjUHVzaE1hbmFnZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja09wZW5Gcm9tUXVlcnkoY3R4OiBDb250ZXh0KSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciAhPT0gJ3NhZmFyaScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcblxuICAgIGlmICghcGFyYW1zPy5bJ2tuaWQnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5NRVNTQUdFX09QRU5FRCwge1xuICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNILFxuICAgICAgICBpZDogTnVtYmVyKHBhcmFtc1sna25pZCddKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdCB7ICdrLm1lc3NhZ2UnOiBfLCAuLi51c2VyRGF0YSB9ID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgY29uc3QgcHVzaDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24gPSB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmRhdGFbJ2subWVzc2FnZSddLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlLFxuICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLm1zZyxcbiAgICAgICAgZGF0YTogdXNlckRhdGEsXG4gICAgICAgIHVybDogcGF5bG9hZC51cmwgPz8gdW5kZWZpbmVkLFxuICAgICAgICBpY29uVXJsOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICBpbWFnZVVybDogcGF5bG9hZC5pbWFnZSA/PyB1bmRlZmluZWRcbiAgICB9O1xuICAgIHJldHVybiBwdXNoO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgU3lzdGVtRXZlbnRUeXBlLFxuICAgIHRyYWNrRXZlbnRcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgY3lyYjUzLCBkZWZlciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uL3B1c2gnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZnVuY3Rpb24gaGFzaFRva2VuKGN0eDogQ29udGV4dCwgdG9rZW46IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3Rva2VufWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZhcmlQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNmZzogUGxhdGZvcm1Db25maWc7XG4gICAgY29uc3RydWN0b3IoY2ZnOiBQbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICB0aGlzLmNmZyA9IGNmZztcbiAgICB9XG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBjb25zdCBzdmNVcmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS9zYWZhcmkvJHtjdHguYXBpS2V5fWA7XG5cbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcjxOb3RpZmljYXRpb25QZXJtaXNzaW9uPigpO1xuXG4gICAgICAgIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICBzdmNVcmwsXG4gICAgICAgICAgICB0aGlzLmNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBwZXJtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJtKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHBlcm0ucGVybWlzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8ICFwZXJtLmRldmljZVRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlNBRkFSSSxcbiAgICAgICAgICAgIHRva2VuOiBwZXJtLmRldmljZVRva2VuLFxuICAgICAgICAgICAgYnVuZGxlSWQ6IGNmZy5zYWZhcmlQdXNoSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoVG9rZW5IYXNoJywgdG9rZW5IYXNoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8IHBlcm0/LnBlcm1pc3Npb24gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuID8/ICcnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCAmJiBwZXJtLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSB8fCAhdGhpcy5jZmcuc2FmYXJpUHVzaElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8IHBlcm0ucGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnIHx8ICFwZXJtLmRldmljZVRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IHBlcm1pc3Npb24gbm90IGdyYW50ZWQgb3Igbm8gdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbik7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2gpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmlwdGlvbjogYWxyZWFkeSBoYXZlIGEgdG9rZW4gaGFzaCBmb3Igc2FtZSB0b2tlbiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTeXN0ZW1FdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBQdXNoT3BzTWFuYWdlciwgUHVzaFN1YnNjcmlwdGlvblN0YXRlLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGJhc2U2NFVybEVuY29kZSwgY3lyYjUzLCBnZXRCcm93c2VyTmFtZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vc3RvcmFnZSc7XG5cbmNvbnN0IEJMVVJfRVZFTlRfVElNRU9VVF9NSUxMSVMgPSAxMDAwO1xuXG5mdW5jdGlvbiBoYXNTYW1lS2V5KHZhcGlkS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4aXN0aW5nU3ViS2V5ID0gc3Vic2NyaXB0aW9uLm9wdGlvbnMuYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG5cbiAgICBpZiAoIWV4aXN0aW5nU3ViS2V5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJLZXkgPSBiYXNlNjRVcmxFbmNvZGUoZXhpc3RpbmdTdWJLZXkpO1xuXG4gICAgcmV0dXJuIHN1YktleSA9PT0gdmFwaWRLZXk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG5cbiAgICBpZiAoIXdvcmtlclJlZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbn1cblxuZnVuY3Rpb24gaGFzaFN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQsIHN1YjogUHVzaFN1YnNjcmlwdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3N1Yi5lbmRwb2ludH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVzNjUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgYXN5bmMgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ1B1c2ggbm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdTdWIgJiYgIWhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikpIHtcbiAgICAgICAgICAgIGF3YWl0IGV4aXN0aW5nU3ViPy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogY3R4LnZhcGlkUHVibGljS2V5LFxuICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVuZHBvaW50SGFzaCA9IGhhc2hTdWJzY3JpcHRpb24oY3R4LCBzdWIpO1xuICAgICAgICBjb25zdCBleHBpcnkgPSBzdWIuZXhwaXJhdGlvblRpbWU7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBlbmRwb2ludEhhc2ggJiZcbiAgICAgICAgICAgICghZXhpc3RpbmdFeHBpcnkgfHwgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBTeXN0ZW1FdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgICAgICB0eXBlOiBUb2tlblR5cGUuVzNDLFxuICAgICAgICAgICAgdG9rZW46IHN1YlxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hFbmRwb2ludEhhc2gnLCBlbmRwb2ludEhhc2gpO1xuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hFeHBpcmVzQXQnLCBleHBpcnkpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPGltcG9ydCgnLicpLlB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gYXdhaXQgdGhpcy5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihjdHgpO1xuXG4gICAgICAgIHN3aXRjaCAocGVybSkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHJlZz8ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKHN1YiAmJiBwZXJtID09PSAnZ3JhbnRlZCcgJiYgaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIHN1YikpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnQXV0by1yZXN1YnNjcmliZTogbm90IGVuYWJsZWQsIGFib3J0aW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gIT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgIGBBdXRvLXJlc3Vic2NyaWJlOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkLCBhYm9ydGluZzogJHtwZXJtfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBsZXQgZXhpc3RpbmdTdWJIYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZXhpc3RpbmdTdWIpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViSGFzaCA9IGhhc2hTdWJzY3JpcHRpb24oY3R4LCBleGlzdGluZ1N1Yik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZXhpc3RpbmdTdWJIYXNoICYmXG4gICAgICAgICAgICBleGlzdGluZ1N1YiAmJlxuICAgICAgICAgICAgaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIGV4aXN0aW5nU3ViKSAmJlxuICAgICAgICAgICAgKGV4aXN0aW5nRXhwaXJ5ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpYmU6IGFscmVhZHkgaGF2ZSBhIG5vbi1leHBpcmVkIGVuZHBvaW50IGhhc2ggZm9yIHNhbWUgc3ViLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IGF0dGVtcHRpbmcgcmVzdWJzY3JpcHRpb24nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc05hdGl2ZVByb21wdFNob3duKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBicm93c2VyTmFtZSA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICAgICAgaWYgKCdjaHJvbWUnICE9PSBicm93c2VyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxldCBibHVyRXZlbnRGaXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja0ZvckJsdXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJsdXJFdmVudEZpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY2FuY2VsQmx1clRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2hlY2tGb3JCbHVyKTtcbiAgICAgICAgICAgICAgICBibHVyRXZlbnRGaXJlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY2hlY2tGb3JCbHVyKTtcblxuICAgICAgICAgICAgY29uc3QgY2FuY2VsQmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9LCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCB7IG9uRE9NUmVhZHkgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSb290RnJhbWVDb250YWluZXIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vdEZyYW1lIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcnM6IFJvb3RGcmFtZUNvbnRhaW5lcltdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSAna3VtdWxvcy11aS1yb290JztcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gW107XG5cbiAgICAgICAgb25ET01SZWFkeSgoKSA9PiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCkpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRhaW5lcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyLmVsZW1lbnQuaWQgPSBga3VtdWxvcy11aS1yb290LSR7bmFtZX1gO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNiwgSmFrZSBBcmNoaWJhbGRcblxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4vLyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICAgIHJlYWRvbmx5IF9kYnA6IFByb21pc2U8SURCRGF0YWJhc2U+O1xuXG4gICAgY29uc3RydWN0b3IoZGJOYW1lID0gJ2tleXZhbC1zdG9yZScsIHJlYWRvbmx5IHN0b3JlTmFtZSA9ICdrZXl2YWwnKSB7XG4gICAgICAgIHRoaXMuX2RicCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5yZXEgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIDEpO1xuICAgICAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG9wZW5yZXEuZXJyb3IpO1xuICAgICAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcblxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSBzZXR1cDogY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBzdG9yZVxuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlbnJlcS5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF93aXRoSURCU3RvcmUoXG4gICAgICAgIHR5cGU6IElEQlRyYW5zYWN0aW9uTW9kZSxcbiAgICAgICAgY2FsbGJhY2s6IChzdG9yZTogSURCT2JqZWN0U3RvcmUpID0+IHZvaWRcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RicC50aGVuKFxuICAgICAgICAgICAgZGIgPT5cbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWUsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgc3RvcmU6IFN0b3JlO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0U3RvcmUoKSB7XG4gICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBuZXcgU3RvcmUoKTtcbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VHlwZT4oXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPFR5cGU+IHtcbiAgICBsZXQgcmVxOiBJREJSZXF1ZXN0O1xuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICByZXEgPSBzdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVxLnJlc3VsdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQoXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICB2YWx1ZTogYW55LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpOiBQcm9taXNlPElEQlZhbGlkS2V5W10+IHtcbiAgICBjb25zdCBrZXlzOiBJREJWYWxpZEtleVtdID0gW107XG5cbiAgICByZXR1cm4gc3RvcmVcbiAgICAgICAgLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCBiZSBzdG9yZS5nZXRBbGxLZXlzKCksIGJ1dCBpdCBpc24ndCBzdXBwb3J0ZWQgYnkgRWRnZSBvciBTYWZhcmkuXG4gICAgICAgICAgICAvLyBBbmQgb3BlbktleUN1cnNvciBpc24ndCBzdXBwb3J0ZWQgYnkgU2FmYXJpLlxuICAgICAgICAgICAgKHN0b3JlLm9wZW5LZXlDdXJzb3IgfHwgc3RvcmUub3BlbkN1cnNvcikuY2FsbChcbiAgICAgICAgICAgICAgICBzdG9yZVxuICAgICAgICAgICAgKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVzdWx0KSByZXR1cm47XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHRoaXMucmVzdWx0LmtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IGtleXMpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFJlbWluZGVyXG59IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7XG4gICAgU3RvcmUsXG4gICAgZGVsIGFzIGlkYkRlbCxcbiAgICBnZXQgYXMgaWRiR2V0LFxuICAgIHNldCBhcyBpZGJTZXRcbn0gZnJvbSAnLi9pZGIta2V5dmFsJztcblxuaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9wdXNoJztcblxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoJ2t1bXVsb3MnLCAnZGVmYXVsdCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFQ+KGtleTogSURCVmFsaWRLZXkpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiR2V0KGtleSwgc3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQgZXh0ZW5kcyBhbnk+KGtleTogSURCVmFsaWRLZXksIHZhbHVlOiBUKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGlkYlNldChrZXksIHZhbHVlLCBzdG9yZSkudGhlbigoKSA9PiB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwoa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBpZGJEZWwoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0Q29uZmlnKGNvbmZpZzogQ29uZmlndXJhdGlvbik6IFByb21pc2U8Q29uZmlndXJhdGlvbj4ge1xuICAgIHJldHVybiBzZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycsIHtcbiAgICAgICAgcmVnaW9uOiBjb25maWcucmVnaW9uLFxuICAgICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICAgIHNlY3JldEtleTogY29uZmlnLnNlY3JldEtleSxcbiAgICAgICAgdmFwaWRQdWJsaWNLZXk6IGNvbmZpZy52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgc2VydmljZVdvcmtlclBhdGg6IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCxcbiAgICAgICAgYXV0b1Jlc3Vic2NyaWJlOiBjb25maWcuYXV0b1Jlc3Vic2NyaWJlLFxuICAgICAgICBwdXNoUHJvbXB0czogY29uZmlnLnB1c2hQcm9tcHRzXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0RERMQ29uZmlnKFxuICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnW11cbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10+IHtcbiAgICByZXR1cm4gc2V0PERkbFByb21wdENvbmZpZ1tdPignZGRsY29uZmlnJywgY29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmcsXG4gICAgcmVtaW5kZXI6IFByb21wdFJlbWluZGVyXG4pIHtcbiAgICByZXR1cm4gc2V0KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCwgcmVtaW5kZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nXG4pOiBQcm9taXNlPFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGF3YWl0IGdldDxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4oYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnKCk6IFByb21pc2U8Q29udGV4dCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBnZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycpLnRoZW4oY29uZmlnID0+XG4gICAgICAgIGNvbmZpZyA/IG5ldyBDb250ZXh0KGNvbmZpZykgOiB1bmRlZmluZWRcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdE9wZW5lZFB1c2hQYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBQcm9taXNlPFB1c2hQYXlsb2FkPiB7XG4gICAgcmV0dXJuIHNldCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJywgcGF5bG9hZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCgpOiBQcm9taXNlPFxuICAgIFB1c2hQYXlsb2FkIHwgdW5kZWZpbmVkXG4+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZ2V0PFB1c2hQYXlsb2FkPignbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICBhd2FpdCBkZWwoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQgPz8gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU0RLRmVhdHVyZSB9IGZyb20gJy4vaW5kZXgnO1xuXG50eXBlIEZlYXR1cmVEZXBlbmRlbmN5ID0gc3RyaW5nIHwgb2JqZWN0IHwgSURCRmFjdG9yeSB8IFByb21pc2VDb25zdHJ1Y3RvciB8IE5vdGlmaWNhdGlvbiB8IFB1c2hNYW5hZ2VyIHwgU2VydmljZVdvcmtlckNvbnRhaW5lciB8IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbjtcblxuY29uc3QgQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyA6IEZlYXR1cmVEZXBlbmRlbmN5W10gPSBbdHlwZW9mIFByb21pc2UsIHR5cGVvZiBmZXRjaCwgdHlwZW9mIGluZGV4ZWREQl07XG5cbmNvbnN0IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDSyA6IHtba2V5IGluIFNES0ZlYXR1cmVdOiAoKSA9PiBib29sZWFufSA9IHtcbiAgICAncHVzaCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2gsXG4gICAgJ2RkbCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbFxufTtcblxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oXG4gICAgICAgICAgICBjXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoMWU3KS50b1N0cmluZygpICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoXG4gICAgICAgIC9bMDE4XS9nLFxuICAgICAgICBjID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKGMpIF5cbiAgICAgICAgICAgICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJlxuICAgICAgICAgICAgICAgICAgICAoMTUgPj4gKE51bWJlcihjKSAvIDQpKSlcbiAgICAgICAgICAgICkudG9TdHJpbmcoMTYpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYnJvd3NlcnMgPSBbJ2VkZ2UnLCAnZmlyZWZveCcsICdjaHJvbWUnLCAnc2FmYXJpJ107XG5cbiAgICBmb3IgKGxldCBiIG9mIGJyb3dzZXJzKSB7XG4gICAgICAgIGlmICh1YS5pbmRleE9mKGIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkKHNka0ZlYXR1cmVzPzogU0RLRmVhdHVyZVtdKSB7XG4gICAgc2RrRmVhdHVyZXMgPSBzZGtGZWF0dXJlcyA/PyBbXTtcbiAgICBpZiAoIXNka0ZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICBzZGtGZWF0dXJlcy5wdXNoKFNES0ZlYXR1cmUuUFVTSCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNka0ZlYXR1cmVzLmZpbHRlcihmID0+IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDS1tmXSgpKS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JQdXNoKCkge1xuICAgIGNvbnN0IGNvcmVEZXBlbmRlbmNpZXMgPSBbLi4uQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFU107XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoJ3NhZmFyaScgPT09IGJyb3dzZXIpIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKHR5cGVvZiB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2goXG4gICAgICAgICAgICAuLi5bXG4gICAgICAgICAgICAgICAgdHlwZW9mIE5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIsXG4gICAgICAgICAgICAgICAgdHlwZW9mIFB1c2hNYW5hZ2VyXG4gICAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llcyk7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbCgpIHtcbiAgICByZXR1cm4gY2hlY2tSZXF1aXJlZChDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZXF1aXJlZChjb3JlRGVwZW5kZW5jaWVzOiBGZWF0dXJlRGVwZW5kZW5jeVtdKSB7XG4gICAgcmV0dXJuIGNvcmVEZXBlbmRlbmNpZXMucmVkdWNlKFxuICAgICAgICAoc3VwcG9ydGVkOiBib29sZWFuLCBkZXBlbmRlbmN5OiBGZWF0dXJlRGVwZW5kZW5jeSkgPT4gc3VwcG9ydGVkICYmIGRlcGVuZGVuY3kgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICB0cnVlXG4gICAgKTtcbn1cblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvaW11bFxuY29uc3QgaW11bCA9XG4gICAgTWF0aC5pbXVsIHx8XG4gICAgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBiIHw9IDA7IC8vIGVuc3VyZSB0aGF0IG9wQiBpcyBhbiBpbnRlZ2VyLiBvcEEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvZXJjZWQuXG4gICAgICAgIC8vIGZsb2F0aW5nIHBvaW50cyBnaXZlIHVzIDUzIGJpdHMgb2YgcHJlY2lzaW9uIHRvIHdvcmsgd2l0aCBwbHVzIDEgc2lnbiBiaXRcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBoYW5kbGVkIGZvciBvdXIgY29udmllbmVuY2U6XG4gICAgICAgIC8vIDEuIDB4MDAzZmZmZmYgLypvcEEgJiAweDAwMGZmZmZmKi8gKiAweDdmZmZmZmZmIC8qb3BCKi8gPSAweDFmZmZmZjdmYzAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICB2YXIgcmVzdWx0ID0gKGEgJiAweDAwM2ZmZmZmKSAqIGI7XG4gICAgICAgIC8vIDIuIFdlIGNhbiByZW1vdmUgYW4gaW50ZWdlciBjb2Vyc2lvbiBmcm9tIHRoZSBzdGF0ZW1lbnQgYWJvdmUgYmVjYXVzZTpcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSArIDB4ZmZjMDAwMDAgPSAweDFmZmZmZmZmODAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmZmY4MDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICBpZiAoYSAmIDB4ZmZjMDAwMDAgLyohPT0gMCovKSByZXN1bHQgKz0gKChhICYgMHhmZmMwMDAwMCkgKiBiKSB8IDA7XG4gICAgICAgIHJldHVybiByZXN1bHQgfCAwO1xuICAgIH07XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MjE3MTQ4MFxuZXhwb3J0IGZ1bmN0aW9uIGN5cmI1MyhzdHI6IHN0cmluZywgc2VlZCA9IDApOiBudW1iZXIge1xuICAgIGxldCBoMSA9IDB4ZGVhZGJlZWYgXiBzZWVkLFxuICAgICAgICBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBjaDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoMSA9IGltdWwoaDEgXiBjaCwgMjY1NDQzNTc2MSk7XG4gICAgICAgIGgyID0gaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPVxuICAgICAgICBpbXVsKGgxIF4gKGgxID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMiBeIChoMiA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICBoMiA9XG4gICAgICAgIGltdWwoaDIgXiAoaDIgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgxIF4gKGgxID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnNcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0geyBtZXRob2Q6ICdHRVQnIH1cbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBleGlzdGluZ0hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPz8ge307XG5cbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBjdHguYXV0aEhlYWRlcixcbiAgICAgICAgLi4uZXhpc3RpbmdIZWFkZXJzXG4gICAgfTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVkRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlOiBudW1iZXIsIHN0YXR1c1RleHQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihgYXV0aGVkIGZldGNoIGZhaWxlZDogJHtzdGF0dXNDb2RlfSwgJHtzdGF0dXNUZXh0fWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoSnNvbjxUPihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zPzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwgb3B0aW9ucykudGhlbihyID0+IHtcbiAgICAgICAgaWYgKCFyLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aGVkRmV0Y2hFcnJvcihyLnN0YXR1cywgci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICB9KTtcbn1cblxuLy8gQmFzZWQgb24gdGhlIGFscGhhYmV0cyBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCBUYWJsZXMgMSAmIDJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxFbmNvZGUoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaW50cyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmFzZTY0RW5jb2RlZCA9IGJ0b2EoXG4gICAgICAgIGludHMucmVkdWNlKChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgKTtcbiAgICBjb25zdCB1cmxWYXJpYW50ID0gYmFzZTY0RW5jb2RlZFxuICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC89L2csICcnKTtcblxuICAgIHJldHVybiB1cmxWYXJpYW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ1NlcnZpY2VXb3JrZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihwYXRoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXI8VD4oKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB7XG4gICAgICAgIHJlc29sdmU6IChudWxsIGFzIHVua25vd24pIGFzICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICAgICAgcmVqZWN0OiAobnVsbCBhcyB1bmtub3duKSBhcyAocmVhc29uPzogYW55KSA9PiB2b2lkLFxuICAgICAgICBwcm9taXNlOiAobnVsbCBhcyB1bmtub3duKSBhcyBQcm9taXNlPFQ+XG4gICAgfTtcblxuICAgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKFxuICAgIHFzOiBzdHJpbmcgPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgZXhjbHVkZWRRdWVyeUtleXM6IHN0cmluZ1tdID0gW11cbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQge1xuICAgIGxldCBxdWVyeSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChxcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5ID0gcXNcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAubWFwKHZhcnMgPT4gdmFycy5zcGxpdCgnPScpKVxuICAgICAgICAgICAgLm1hcChwYWlycyA9PiBwYWlycy5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KSlcbiAgICAgICAgICAgIC5maWx0ZXIocGFpcnMgPT4gZXhjbHVkZWRRdWVyeUtleXMuaW5kZXhPZihwYWlyc1swXSkgPT09IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgocSwgcGFpcikgPT4gKHsgLi4ucSwgW3BhaXJbMF1dOiBwYWlyWzFdIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25ET01SZWFkeShmbjogKCkgPT4gdm9pZCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvYW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfG1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4iLCJpbXBvcnQge1xuICAgIENsaWVudE1lc3NhZ2VUeXBlLFxuICAgIEZpbmdlcnByaW50Q29tcG9uZW50cyxcbiAgICBIb3N0TWVzc2FnZSxcbiAgICBIb3N0TWVzc2FnZVR5cGVcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmLCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5jb25zdCBGUF9DQVBUVVJFX1VSTCA9ICdodHRwczovL3BkLmFwcC5kZWxpdmVyeSc7XG5cbmVudW0gQ2FwdHVyZVN0YXRlIHtcbiAgICBJRExFLFxuICAgIENBUFRVUklOR1xufVxuXG5pbnRlcmZhY2UgRnBDYXB0dXJlUHJvcHMge1xuICAgIG9uQ2FwdHVyZWQ6IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGcENhcHR1cmVTdGF0ZSB7XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnBDYXB0dXJlIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIEZwQ2FwdHVyZVByb3BzLFxuICAgIEZwQ2FwdHVyZVN0YXRlXG4+IHtcbiAgICBwcml2YXRlIGlGcmFtZVJlZjogUmVmT2JqZWN0PEhUTUxJRnJhbWVFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGcENhcHR1cmVQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pRnJhbWVSZWYgPSBjcmVhdGVSZWY8SFRNTElGcmFtZUVsZW1lbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShfOiBGcENhcHR1cmVQcm9wcywgbmV4dFN0YXRlOiBGcENhcHR1cmVTdGF0ZSkge1xuICAgICAgICBjb25zdCB7IGlzUmVhZHksIGNhcHR1cmVTdGF0ZSB9ID0gbmV4dFN0YXRlO1xuICAgICAgICBjb25zdCBwcmV2Q2FwdHVyZVN0YXRlID0gdGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNSZWFkeSAmJlxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuQ0FQVFVSSU5HICYmXG4gICAgICAgICAgICBwcmV2Q2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWVzdEZwKCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYEZwQ2FwdXJlOiByZXF1ZXN0aW5nIGZwIGNhcHR1cmVgKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGUgIT09IENhcHR1cmVTdGF0ZS5JRExFKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGcENhcHR1cmUucmVxdWVzdEZwOiBjYXB0dXJlU3RhdGUgbm90IElETEUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5DQVBUVVJJTkcgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgIGBGcENhcHVyZTogbWVzc2FnZSAke2UuZGF0YS50eXBlfSByZWNlaXZlZCBmcm9tICR7ZS5vcmlnaW59YFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XG5cbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBGUF9DQVBUVVJFX1VSTCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TWVzc2FnZVR5cGUuUkVBRFk6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUmVhZHk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DYXB0dXJlZChtZXNzYWdlLmRhdGEuY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaE1lc3NhZ2UgPSAobWVzc2FnZTogSG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZwQ2FwdXJlOiBkaXNwYXRjaGluZyAke21lc3NhZ2UudHlwZX0gbWVzc2FnZSB0byBjYXB0dXJlIGZyYW1lYFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuaUZyYW1lUmVmLmN1cnJlbnQ/LmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBGUF9DQVBUVVJFX1VSTCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaUZyYW1lUmVmfVxuICAgICAgICAgICAgICAgIHNyYz17RlBfQ0FQVFVSRV9VUkx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU2VydmljZSwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2ggfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRDbGlja1JlcXVlc3QoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGJhbm5lclVpZDogc3RyaW5nLFxuICAgIGZpbmdlcnByaW50OiBGaW5nZXJwcmludENvbXBvbmVudHNcbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLkRETCl9L3YxL2Jhbm5lcnMvJHtiYW5uZXJVaWR9L3RhcHNgO1xuICAgIGNvbnN0IHdlYkluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuXG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB3ZWJJbnN0YWxsSWQsXG4gICAgICAgICAgICBmaW5nZXJwcmludFxuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiXG50eXBlIE1lc3NhZ2U8VCwgRCA9IG5ldmVyPiA9XG4gICAgfCB7XG4gICAgICAgIHR5cGU6IFQ7XG4gICAgfVxuICAgIHwgeyB0eXBlOiBUOyBkYXRhOiBEIH07XG5cbmV4cG9ydCBlbnVtIEhvc3RNZXNzYWdlVHlwZSB7XG4gICAgUkVRVUVTVF9GSU5HRVJQUklOVCA9ICdSRVFVRVNUX0ZJTkdFUlBSSU5UJyxcbn1cblxuZXhwb3J0IGVudW0gQ2xpZW50TWVzc2FnZVR5cGUge1xuICAgIFJFQURZID0gJ1JFQURZJyxcbiAgICBGSU5HRVJQUklOVF9HRU5FUkFURUQgPSAnRklOR0VSUFJJTlRfR0VORVJBVEVEJyxcbn1cblxuZXhwb3J0IHR5cGUgRmluZ2VycHJpbnRDb21wb25lbnRzID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuZXhwb3J0IHR5cGUgSG9zdE1lc3NhZ2UgPSBNZXNzYWdlPEhvc3RNZXNzYWdlVHlwZS5SRVFVRVNUX0ZJTkdFUlBSSU5UPjtcblxuZXhwb3J0IHR5cGUgQ2xpZW50TWVzc2FnZSA9XG4gICAgfCBNZXNzYWdlPENsaWVudE1lc3NhZ2VUeXBlLlJFQURZPlxuICAgIHwgTWVzc2FnZTxcbiAgICAgICAgQ2xpZW50TWVzc2FnZVR5cGUuRklOR0VSUFJJTlRfR0VORVJBVEVELFxuICAgICAgICB7IGNvbXBvbmVudHM6IEZpbmdlcnByaW50Q29tcG9uZW50cyB9XG4gICAgPjtcbiIsImltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBDb250ZXh0LFxuICAgIEluc3RhbGxJZCxcbiAgICBQcm9wc09iamVjdCxcbiAgICBTREtGZWF0dXJlLFxuICAgIFVzZXJJZCxcbiAgICBhc3NlcnRDb25maWdWYWxpZCxcbiAgICBhc3NvY2lhdGVVc2VyLFxuICAgIGdldEluc3RhbGxJZCxcbiAgICBnZXRVc2VySWQsXG4gICAgc2V0SW5zdGFsbElkLFxuICAgIHRyYWNrRXZlbnQsXG4gICAgdHJhY2tJbnN0YWxsRGV0YWlsc1xufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgV29ya2VyTWVzc2FnZVR5cGUsIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UgfSBmcm9tICcuL3dvcmtlci9tZXNzYWdpbmcnO1xuaW1wb3J0IHtcbiAgICBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCxcbiAgICBwZXJzaXN0Q29uZmlnLFxuICAgIHNldFxufSBmcm9tICcuL2NvcmUvc3RvcmFnZSc7XG5pbXBvcnQgZ2V0UHVzaE9wc01hbmFnZXIsIHtcbiAgICBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbixcbiAgICBub3RpZmljYXRpb25Gcm9tUGF5bG9hZCxcbiAgICB0cmFja09wZW5Gcm9tUXVlcnlcbn0gZnJvbSAnLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgaXNNb2JpbGUsIHJlZ2lzdGVyU2VydmljZVdvcmtlciB9IGZyb20gJy4vY29yZS91dGlscyc7XG5cbmltcG9ydCBEZGxNYW5hZ2VyIGZyb20gJy4vcHJvbXB0cy9kZGwvbWFuYWdlcic7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyIH0gZnJvbSAnLi9wcm9tcHRzJztcbmltcG9ydCBSb290RnJhbWUgZnJvbSAnLi9jb3JlL3Jvb3QtZnJhbWUnO1xuXG5pbnRlcmZhY2UgS3VtdWxvc0NvbmZpZyBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICAgIG9uUHVzaFJlY2VpdmVkPzogKHBheWxvYWQ6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuICAgIG9uUHVzaE9wZW5lZD86IChwYXlsb2FkOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcbiAgICBpbnN0YWxsSWQ6IEluc3RhbGxJZDtcbiAgICB1c2VySWQ/OiBVc2VySWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEt1bXVsb3Mge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBLdW11bG9zQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJSZWc/OiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvbXB0TWFuYWdlcj86IFByb21wdE1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZGxNYW5hZ2VyPzogRGRsTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RGcmFtZTogUm9vdEZyYW1lO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBLdW11bG9zQ29uZmlnKSB7XG4gICAgICAgIGFzc2VydENvbmZpZ1ZhbGlkKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5tYXliZVBlcnNpc3RJbnN0YWxsSWRBbmRVc2VySWQoY29uZmlnKTtcbiAgICAgICAgcGVyc2lzdENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIHRyYWNrSW5zdGFsbERldGFpbHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLnJvb3RGcmFtZSA9IG5ldyBSb290RnJhbWUoKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0Lmhhc0ZlYXR1cmUoU0RLRmVhdHVyZS5QVVNIKSkge1xuICAgICAgICAgICAgdHJhY2tPcGVuRnJvbVF1ZXJ5KHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZVdvcmtlclJlZyA9IHJlZ2lzdGVyU2VydmljZVdvcmtlcihcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuc2VydmljZVdvcmtlclBhdGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvbXB0TWFuYWdlciA9IG5ldyBQcm9tcHRNYW5hZ2VyKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgICAgIHRoaXMucm9vdEZyYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbldvcmtlck1lc3NhZ2VcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1heWJlRmlyZU9wZW5lZEhhbmRsZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLkRETCkpIHtcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXI6IERETCBmZWF0dXJlIHN1cHBvcnQgb25seSBhdmFpbGFibGUgb24gbW9iaWxlIGRldmljZXMuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRkbE1hbmFnZXIgPSBuZXcgRGRsTWFuYWdlcih0aGlzLmNvbnRleHQsIHRoaXMucm9vdEZyYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbWF5YmVQZXJzaXN0SW5zdGFsbElkQW5kVXNlcklkKGNvbmZpZzogS3VtdWxvc0NvbmZpZykgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgZ2V0SW5zdGFsbElkKClcbiAgICAgICAgICAgIC50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbGxJZCAhPT0gY29uZmlnLmluc3RhbGxJZCl7XG4gICAgICAgICAgICAgICAgICAgIHNldEluc3RhbGxJZChjb25maWcuaW5zdGFsbElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29uZmlnLnVzZXJJZCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGdldFVzZXJJZCgpXG4gICAgICAgICAgICAudGhlbih1c2VySWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgIT09IGNvbmZpZy51c2VySWQpe1xuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVVc2VyKHRoaXMuY29udGV4dCwgY29uZmlnLnVzZXJJZCEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGFzc29jaWF0ZVVzZXIoaWRlbnRpZmllcjogVXNlcklkLCBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGFzc29jaWF0ZVVzZXIodGhpcy5jb250ZXh0LCBpZGVudGlmaWVyLCBhdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICB0cmFja0V2ZW50KHR5cGU6IHN0cmluZywgcHJvcGVydGllcz86IFByb3BzT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0cmFja0V2ZW50KHRoaXMuY29udGV4dCwgdHlwZSwgcHJvcGVydGllcykudGhlbihfID0+IHZvaWQgMCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBtZ3IgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBtZ3JcbiAgICAgICAgICAgIC5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbih0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICAudGhlbihwZXJtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoJ2dyYW50ZWQnICE9PSBwZXJtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb24gcGVybWlzc2lvbiBub3QgZ3JhbnRlZCdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZ3IucHVzaFJlZ2lzdGVyKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV29ya2VyTWVzc2FnZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNLdW11bG9zV29ya2VyTWVzc2FnZShlLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGUuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFdvcmtlck1lc3NhZ2VUeXBlLktQdXNoUmVjZWl2ZWQ6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoID0gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaFJlY2VpdmVkPy4ocHVzaCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGFzeW5jIG1heWJlRmlyZU9wZW5lZEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCgpO1xuICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChwYXlsb2FkKTtcblxuICAgICAgICB0aGlzLmNvbmZpZy5vblB1c2hPcGVuZWQ/LihwdXNoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQmVsbFByb21wdENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NVQlNDUklCRV9MQUJFTCwgaW52ZXJzZVBvc2l0aW9uLCBQcm9tcHRVaVByb3BzLCBUb29sdGlwIH0gZnJvbSBcIi4uL3VpXCI7XG5cbmV4cG9ydCBjbGFzcyBCZWxsIGV4dGVuZHMgQ29tcG9uZW50PFByb21wdFVpUHJvcHM8QmVsbFByb21wdENvbmZpZz4sIG5ldmVyPiB7XG4gIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLXByb21wdC0ke3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfSBrdW11bG9zLWJlbGwtY29udGFpbmVyIGt1bXVsb3MtYmVsbC1jb250YWluZXItJHt0aGlzLnByb3BzLmNvbmZpZy5wb3NpdGlvbn1gO1xuICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHRvb2x0aXBQb3MgPSBpbnZlcnNlUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGJnQ29sb3IgPSBjb25maWcuY29sb3JzPy5iZWxsPy5iZztcbiAgICAgIGNvbnN0IGZnQ29sb3IgPSBjb25maWcuY29sb3JzPy5iZWxsPy5mZztcblxuICAgICAgY29uc3QgYmVsbFN0eWxlID0ge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBmZ0NvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvclxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmVsbC1pbm5lciBrdW11bG9zLXRvb2x0aXAtcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrdW11bG9zLWJlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtiZWxsU3R5bGUgYXMgYW55fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuODkgMiAyIDJ6bTYtNnYtNWMwLTMuMDctMS42NC01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xbC0yLTJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2ZnQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBvc2l0aW9uPXt0b29sdGlwUG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmxhYmVscz8udG9vbHRpcD8uc3Vic2NyaWJlID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMfVxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmLCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7XG4gICAgRGRsQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFBvc2l0aW9uLFxuICAgIFVpQWN0aW9uVHlwZVxufSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW1wb3J0IHsgQXBwUmF0aW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcHAtcmF0aW5nJztcbmltcG9ydCBEZWVwbGlua0J1dHRvbiBmcm9tICcuL2RlZXBsaW5rLWJ1dHRvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBiYW5uZXJJY29uU3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgfSxcbiAgICBjbG9zZUljb25TdHlsZToge1xuICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgIGhlaWdodDogMTJcbiAgICB9XG59O1xuXG5jb25zdCBDTEFTU0VTID0gW1xuICAgICdrdW11bG9zLXByb21wdCcsXG4gICAgJ2t1bXVsb3MtYmFubmVyLWNvbnRhaW5lcicsXG4gICAgJ2t1bXVsb3MtYmFubmVyLWNvbXBhY3QnLFxuICAgICdrdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCdcbl07XG5cbmNvbnN0IFNIT1dfQ09QWV9UT0FTVF9ERUxBWSA9IDEwMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGRsQmFubmVyUHJvcHMge1xuICAgIGNvbmZpZzogRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuICAgIG9uQ29uZmlybTogKGNvbmZpZzogRGRsQmFubmVyUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgZGltZW5zaW9uczogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRGRsQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIERkbEJhbm5lclByb3BzLFxuICAgIHtcbiAgICAgICAgc2hvd0NvcHlUb2FzdDogYm9vbGVhbjtcbiAgICB9XG4+IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lclJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEZGxCYW5uZXJQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYgPSBjcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNob3dDb3B5VG9hc3Q6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50O1xuXG4gICAgICAgIHRoaXMucHJvcHMuZGltZW5zaW9ucyhjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ29uZmlybSA9IChhY3Rpb25UeXBlOiBVaUFjdGlvblR5cGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0NvcHlUb2FzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb3B5VG9hc3Q6IHRydWUgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvcHlUb2FzdDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICAgICAgfSwgU0hPV19DT1BZX1RPQVNUX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBnZXRDc3NDbGFzc2VzKHByb21wdFBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgLi4uQ0xBU1NFUyxcbiAgICAgICAgICAgIGBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke3Byb21wdFBvc2l0aW9ufWBcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBbUHJvbXB0UG9zaXRpb24uVE9QLCBQcm9tcHRQb3NpdGlvbi5CT1RUT01dLmluY2x1ZGVzKHByb21wdFBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChga3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLSR7cHJvbXB0UG9zaXRpb259YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCBsYWJlbHMsIGNvbG9ycywgaW1hZ2VVcmwsIGFwcFJhdGluZyB9ID0gY29uZmlnO1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGJvZHksIGFjY2VwdEFjdGlvbiB9ID0gbGFiZWxzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25GZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZyxcbiAgICAgICAgICAgIHJhdGluZ0ZnXG4gICAgICAgIH0gPSBjb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0Q3NzQ2xhc3Nlcyhwb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVjbGluZUFjdGlvblN0eWxlOiBoLkpTWC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGFjY2VwdEFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmFubmVySWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmJhbm5lckljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjbGFzcz17Y2xhc3Nlc30gcmVmPXt0aGlzLmNvbnRhaW5lclJlZn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5vbkNhbmNlbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICYjMTAwMDY7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVySWNvblN0eWxlfSBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWljb25cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWJvZHlcIj57Ym9keX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2FwcFJhdGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nQ291bnQ9e2FwcFJhdGluZy5yYXRpbmdDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycz17YXBwUmF0aW5nLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cmF0aW5nRmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPERlZXBsaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXthY2NlcHRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRBY3Rpb25zPXtjb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q29weVRvYXN0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj5MaW5rIENvcGllZDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgRGRsVWlBY3Rpb25zLCBVaUFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW1wb3J0IGNvcHkgZnJvbSAnY2xpcGJvYXJkLWNvcHknO1xuXG5pbnRlcmZhY2UgRGVlcGxpbmtCdXR0b25Qcm9wcyB7XG4gICAgc3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcHJvbXB0QWN0aW9uczogRGRsVWlBY3Rpb25zO1xuICAgIG9uQWN0aW9uOiAoYWN0aW9uVHlwZTogVWlBY3Rpb25UeXBlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWVwbGlua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudDxcbiAgICBEZWVwbGlua0J1dHRvblByb3BzLFxuICAgIG5ldmVyXG4+IHtcbiAgICBwcml2YXRlIGhhbmRsZUFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdWlBY3Rpb25zOiB7IGFjY2VwdCB9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzLnByb21wdEFjdGlvbnM7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgY29weShhY2NlcHQuZGVlcExpbmtVcmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbmFibGUgdG8gY2FwdHVyZSBkZWVwbGluayB1cmwgZm9yIGRlZmVycmVkIGFwcCBwaWNrdXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbihVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYEhhbmRsZSBEZWVwTGluayBBY3Rpb246IHVuc3VwcG9ydGVkIGFjY2VwdCBhY3Rpb24gdHlwZSAnJHthY2NlcHRbJ3R5cGUnXX0nYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlLCBjbGFzczogY3NzQ2xhc3MsIHRleHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3M9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlQWN0aW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFVpQWN0aW9uVHlwZSxcbiAgICBTZGtFdmVudFxufSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCBVaSBmcm9tICcuL3VpJztcbmltcG9ydCB7XG4gICAgbG9hZERkbENvbmZpZyxcbiAgICBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGVcbn0gZnJvbSAnLi4vLi4vY29yZS9jb25maWcnO1xuaW1wb3J0IHsgbWF5YmVQZXJzaXN0UmVtaW5kZXIgfSBmcm9tICcuLi9wcm9tcHQtcmVtaW5kZXInO1xuaW1wb3J0IHsgZGVmZXJQcm9tcHRBY3RpdmF0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgc2VuZENsaWNrUmVxdWVzdCB9IGZyb20gJy4uLy4uL2ZwJztcbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2ZwL3R5cGVzJztcbmltcG9ydCB7IFByb21wdFRyaWdnZXJFdmVudEZpbHRlciB9IGZyb20gJy4uL3RyaWdnZXJzJztcblxuZXhwb3J0IGVudW0gRGRsTWFuYWdlclN0YXRlIHtcbiAgICBMT0FESU5HID0gJ2xvYWRpbmcnLFxuICAgIFJFQURZID0gJ3JlYWR5J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZGxNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZGxDb250YWluZXI6IFJvb3RGcmFtZUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIGNvbmZpZz86IFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz47XG4gICAgcHJpdmF0ZSBhY3RpdmVDb25maWdzPzogRGRsUHJvbXB0Q29uZmlnW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyaWdnZXJGaWx0ZXI6IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxEZGxQcm9tcHRDb25maWc+O1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0RkbE1hbmFnZXI6IGluaXRpYWxpc2luZycpO1xuXG4gICAgICAgIHRoaXMuZGRsQ29udGFpbmVyID0gcm9vdEZyYW1lLmNyZWF0ZUNvbnRhaW5lcignZGRsJyk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcblxuICAgICAgICB0aGlzLnRyaWdnZXJGaWx0ZXIgPSBuZXcgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPERkbFByb21wdENvbmZpZz4oXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAoXzogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuTE9BRElORyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNvbmZpcm0gPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogRGRsUHJvbXB0Q29uZmlnLFxuICAgICAgICBjb21wb25lbnRzPzogRmluZ2VycHJpbnRDb21wb25lbnRzXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICghIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmRDbGlja1JlcXVlc3QodGhpcy5jb250ZXh0LCBwcm9tcHQudXVpZCwgY29tcG9uZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGUocHJvbXB0LnV1aWQpO1xuXG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuXG4gICAgICAgIHRoaXMucGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uKHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDYW5jZWxsZWQgPSAocHJvbXB0OiBEZGxQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0KTtcbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGlkZVByb21wdChwcm9tcHQ6IERkbFByb21wdENvbmZpZykge1xuICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ3MgPSB0aGlzLmFjdGl2ZUNvbmZpZ3M/LmZpbHRlcihcbiAgICAgICAgICAgIGMgPT4gYy51dWlkICE9PSBwcm9tcHQudXVpZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb24oY29uZmlnOiBEZGxQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uID0gY29uZmlnLnVpQWN0aW9ucy5hY2NlcHQ7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHRBY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY2NlcHRBY3Rpb24udXJsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY2NlcHRBY3Rpb24uZGVlcExpbmtVcmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdEZGxNYW5hZ2VyLnBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbjogVW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlLCB1bmFibGUgdG8gcGVyZm9ybSByZWRpcmVjdGlvbidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGF0ZShzdGF0ZTogRGRsTWFuYWdlclN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnU2V0dGluZyBEZGxNYW5hZ2VyIHN0YXRlOicgKyBzdGF0ZSk7XG4gICAgICAgIHRoaXMub25FbnRlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkVudGVyKHN0YXRlOiBEZGxNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBEZGxNYW5hZ2VyU3RhdGUuTE9BRElORzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMubG9hZENvbmZpZygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZGxNYW5hZ2VyU3RhdGUuUkVBRFk6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVBY3RpdmVDb25maWdzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLmFjdGl2ZUNvbmZpZ3M/LnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXByb21wdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlZmVyUHJvbXB0QWN0aXZhdGlvbihwcm9tcHQsIHRoaXMucmVuZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcihwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIgPSAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHQgYXMgRGRsUHJvbXB0Q29uZmlnfVxuICAgICAgICAgICAgICAgIGNvbnRleHQ9e3RoaXMuY29udGV4dH1cbiAgICAgICAgICAgICAgICBvbkJhbm5lckNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgIG9uQmFubmVyQ2FuY2VsbGVkPXt0aGlzLm9uQmFubmVyQ2FuY2VsbGVkfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICB0aGlzLmRkbENvbnRhaW5lci5lbGVtZW50XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVuZGVyRW1wdHkoKSB7XG4gICAgICAgIHJlbmRlcihudWxsLCB0aGlzLmRkbENvbnRhaW5lci5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRDb25maWdzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1xuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoZWRDb25maWdzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDb25maWdzPy5pbmRleE9mKGMpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb25maWdzLnB1c2goYyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZENvbmZpZygpOiBQcm9taXNlPFxuICAgICAgICBSZWNvcmQ8c3RyaW5nLCBEZGxQcm9tcHRDb25maWc+IHwgdW5kZWZpbmVkXG4gICAgPiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBhd2FpdCBsb2FkRGRsQ29uZmlnKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY29uZmlncykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ3MucmVkdWNlPFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz4+KChiYWcsIGMpID0+IHtcbiAgICAgICAgICAgIGJhZ1tjLnV1aWRdID0gYztcbiAgICAgICAgICAgIHJldHVybiBiYWc7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIEZyYWdtZW50LCBSZWZPYmplY3QsIGNyZWF0ZVJlZiB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IERkbFByb21wdENvbmZpZywgVWlBY3Rpb25UeXBlLCBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBEZGxCYW5uZXIgfSBmcm9tICcuL2RkbC1iYW5uZXInO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgeyBQcm9tcHRQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IEZwQ2FwdHVyZSBmcm9tICcuLi8uLi9mcC9mcC1jYXB0dXJlJztcbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2ZwL3R5cGVzJztcblxuaW50ZXJmYWNlIFVpUHJvcHMge1xuICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnO1xuICAgIGNvbnRleHQ6IENvbnRleHQ7XG4gICAgb25CYW5uZXJDb25maXJtOiAoXG4gICAgICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnLFxuICAgICAgICBmaW5nZXJwcmludENvbXBvbmVudHM/OiBGaW5nZXJwcmludENvbXBvbmVudHNcbiAgICApID0+IHZvaWQ7XG4gICAgb25CYW5uZXJDYW5jZWxsZWQ6IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFVpU3RhdGUge1xuICAgIHJlcXVlc3RGcENhcHR1cmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIFVpU3RhdGU+IHtcbiAgICBwcml2YXRlIHNpdGVNYXJnaW4/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzaXRlVHJhbnNpdGlvbj86IHN0cmluZztcbiAgICBwcml2YXRlIGZwUmVmOiBSZWZPYmplY3Q8RnBDYXB0dXJlPjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBVaVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVxdWVzdEZwQ2FwdHVyZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZwUmVmID0gY3JlYXRlUmVmPEZwQ2FwdHVyZT4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGltZW5zaW9ucyA9IChfYmFubmVyV2lkdGg6IG51bWJlciwgYmFubmVySGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpO1xuICAgICAgICB0aGlzLnNpdGVNYXJnaW4gPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgICAgID8gJ21hcmdpbi10b3AnXG4gICAgICAgICAgICAgICAgICAgIDogJ21hcmdpbi1ib3R0b20nXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2l0ZVRyYW5zaXRpb24gPSBib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbicpO1xuXG4gICAgICAgIGlmIChjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5CT1RUT00pIHtcbiAgICAgICAgICAgIGJhbm5lckhlaWdodCArPSAyMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGJhbm5lckhlaWdodCArIHRoaXMuc2l0ZU1hcmdpbjtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuMzc1cyBlYXNlIDBzJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtcbiAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgID8gJ21hcmdpblRvcCdcbiAgICAgICAgICAgICAgICA6ICdtYXJnaW5Cb3R0b20nXG4gICAgICAgIF0gPSBgJHtvZmZzZXR9cHhgO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb24gPSBjb25maWcudWlBY3Rpb25zLmFjY2VwdDtcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdEFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICB0aGlzLmZwUmVmLmN1cnJlbnQ/LnJlcXVlc3RGcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQmFubmVyQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVaS5vbkJhbm5lckNvbmZpcm06IFVuc3VwcG9ydGVkIGFjY2VwdCBhY3Rpb24gdHlwZSwgdW5hYmxlIHRvIGNvbmZpcm0gYmFubmVyJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNhbmNlbGxlZCA9IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQmFubmVyQ2FuY2VsbGVkKGNvbmZpZyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DYXB0dXJlRnAgPSAoY29tcG9uZW50czogRmluZ2VycHJpbnRDb21wb25lbnRzKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKHRoaXMucHJvcHMuY29uZmlnLCBjb21wb25lbnRzKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXNldEJvZHlTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnNpdGVUcmFuc2l0aW9uID8/ICcnO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbXG4gICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICA/ICdtYXJnaW5Ub3AnXG4gICAgICAgICAgICAgICAgOiAnbWFyZ2luQm90dG9tJ1xuICAgICAgICBdID0gdGhpcy5zaXRlTWFyZ2luID8gYCR7dGhpcy5zaXRlTWFyZ2lufXB4YCA6ICcnO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxEZGxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLm9uQmFubmVyQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9e3RoaXMub25EaW1lbnNpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZwQ2FwdHVyZSByZWY9e3RoaXMuZnBSZWZ9IG9uQ2FwdHVyZWQ9e3RoaXMub25DYXB0dXJlRnB9IC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbixcbiAgICBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMsXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVUlDb250ZXh0LCBVSUNvbnRleHRTdGF0ZSB9IGZyb20gJy4uL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbm5lbHNMaXN0IH0gZnJvbSAnLi9jaGFubmVscy1saXN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxzRGlhbG9nUHJvcHMge1xuICAgIGFjdGlvbjogVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb247XG4gICAgb25Db25maXJtOiAoY2hhbm5lbFNlbGVjdGlvbnM6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dTdGF0ZSB7XG4gICAgY2hhbm5lbFNlbGVjdGlvbnM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQ2hhbm5lbHNEaWFsb2dQcm9wcyxcbiAgICBDaGFubmVsRGlhbG9nU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDaGFubmVsc0RpYWxvZ1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Db25maXJtID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnN0YXRlLmNoYW5uZWxTZWxlY3Rpb25zKTtcbiAgICB9O1xuXG4gICAgb25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkID0gKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbLi4uY2hhbm5lbExpc3RdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXJEaWFsb2cgPSAodWlDb250ZXh0PzogVUlDb250ZXh0U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdWlDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyIGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7YWN0aW9uLmRpYWxvZ0NvbmZpZy5wb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29uZmlybUFjdGlvbiB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5sYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb25maXJtQWN0aW9uRmdcbiAgICAgICAgfSA9IGFjdGlvbi5kaWFsb2dDb25maWcuY29sb3JzO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbmZpcm1BY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29uZmlybUFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aUNvbnRleHQ/LnBsYXRmb3JtQ29uZmlnLmljb25Vcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aWNvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb25cIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdD17Z2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRleHQuY2hhbm5lbExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbmZpcm1BY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1BY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxVSUNvbnRleHQuQ29uc3VtZXI+e3RoaXMucmVuZGVyRGlhbG9nfTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQ2hhbm5lbExpc3RJdGVtIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmludGVyZmFjZSBDaGFubmVsTGlzdFByb3BzIHtcbiAgICBjaGFubmVsTGlzdDogQ2hhbm5lbExpc3RJdGVtW107XG4gICAgb25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZDogKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0U3RhdGUge1xuICAgIGNoYW5uZWxzOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxzTGlzdCBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsTGlzdFByb3BzLFxuICAgIENoYW5uZWxMaXN0U3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDaGFubmVsTGlzdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnByb3BzLmNoYW5uZWxMaXN0XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5uZWxDaGVja0NoYW5nZShjaGFubmVsVXVpZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN0YXRlLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICBjID0+IGMuY2hhbm5lbC51dWlkID09PSBjaGFubmVsVXVpZFxuICAgICAgICApO1xuICAgICAgICBpdGVtIS5jaGVja2VkID0gY2hlY2tlZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbLi4udGhpcy5zdGF0ZS5jaGFubmVsc11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLm9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQodGhpcy5zdGF0ZS5jaGFubmVscylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFjaGFubmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2hhbm5lbHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5jaGFubmVsLnV1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoYW5uZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBoLkpTWC5UYXJnZXRlZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFubmVsQ2hlY2tDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYW5uZWwudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrdW11bG9zLWNoZWNrYm94XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFByb21wdFVpUHJvcHMgfSBmcm9tICcuLi91aSc7XG5pbXBvcnQge1xuICAgIEFsZXJ0UHJvbXB0Q29uZmlnLFxuICAgIEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMsXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVUlDb250ZXh0LCBVSUNvbnRleHRTdGF0ZSB9IGZyb20gJy4uL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbm5lbHNMaXN0IH0gZnJvbSAnLi9jaGFubmVscy1saXN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgUHJvbXB0VWlQcm9wczxBbGVydFByb21wdENvbmZpZyB8IEJhbm5lclByb21wdENvbmZpZz4sXG4gICAgRGlhbG9nU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9tcHRVaVByb3BzPEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnPikge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIG9uUmVxdWVzdENhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgb25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkID0gKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbLi4uY2hhbm5lbExpc3RdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXJBbGVydCA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1wcm9tcHQtJHt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX0ga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHtjb25maWcucG9zaXRpb259YDtcblxuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGJvZHksIGRlY2xpbmVBY3Rpb24sIGFjY2VwdEFjdGlvbiB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmxhYmVscy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmxhYmVscy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uRmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfSA9XG4gICAgICAgICAgICBjb25maWcudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlRcbiAgICAgICAgICAgICAgICA/IGNvbmZpZy5jb2xvcnMuYWxlcnRcbiAgICAgICAgICAgICAgICA6IGNvbmZpZy5jb2xvcnMuYmFubmVyO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRlY2xpbmVBY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBhY2NlcHRBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb25maWcuaW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge2NvbmZpZy5pbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWljb25gfVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1jb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWJvZHlgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbHNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRleHQuY2hhbm5lbExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi5jaGFubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtkZWNsaW5lQWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWFjdGlvbi1idXR0b24ga3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVxdWVzdENhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RlY2xpbmVBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY2NlcHRBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVxdWVzdE5hdGl2ZVByb21wdH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJBbGVydH08L1VJQ29udGV4dC5Db25zdW1lcj47XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2hhbm5lbCwgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcbmltcG9ydCB7XG4gICAgQ2hhbm5lbExpc3RJdGVtLFxuICAgIENoYW5uZWxTdWJBY3Rpb24sXG4gICAgQ29udGV4dCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdENvbmZpZ3MsXG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBTZGtFdmVudCxcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvblxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIFB1c2hPcHNNYW5hZ2VyLFxuICAgIFB1c2hTdWJzY3JpcHRpb25TdGF0ZVxufSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IEt1bXVsb3MgZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi90cmlnZ2Vycyc7XG5pbXBvcnQgeyBVSUNvbnRleHQgfSBmcm9tICcuL3VpLWNvbnRleHQnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHsgZGVmZXJQcm9tcHRBY3RpdmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciB9IGZyb20gJy4vcHJvbXB0LXJlbWluZGVyJztcblxuZXhwb3J0IHR5cGUgUHJvbXB0TWFuYWdlclN0YXRlID1cbiAgICB8ICdsb2FkaW5nJ1xuICAgIHwgJ3JlYWR5J1xuICAgIHwgJ3JlcXVlc3RpbmcnXG4gICAgfCAncmVxdWVzdGluZy1zaWxlbnQnXG4gICAgfCAncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJ1xuICAgIHwgJ3Bvc3RhY3Rpb24nO1xuXG4vLyBsb2FkaW5nIC0+IHJlYWR5XG4vLyByZWFkeSAtPiByZXF1ZXN0aW5nXG4vLyByZXF1ZXN0aW5nIC0+IHJlYWR5XG4vLyByZWFkeSAtPiBwb3N0YWN0aW9uXG4vLyBwb3N0YWN0aW9uIC0+IHJlYWR5XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGt1bXVsb3NDbGllbnQ6IEt1bXVsb3M7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHVzaENvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJpZ2dlckZpbHRlcjogUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFB1c2hQcm9tcHRDb25maWc+O1xuXG4gICAgcHJpdmF0ZSBzdGF0ZT86IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvblN0YXRlPzogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByaXZhdGUgcHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPjtcbiAgICBwcml2YXRlIGFjdGl2ZVByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHByaXZhdGUgcHVzaE9wc01hbmFnZXI/OiBQdXNoT3BzTWFuYWdlcjtcbiAgICBwcml2YXRlIGNoYW5uZWxzOiBDaGFubmVsW107XG4gICAgcHJpdmF0ZSB1aT86IFVpO1xuICAgIHByaXZhdGUgcGxhdGZvcm1Db25maWc/OiBQbGF0Zm9ybUNvbmZpZztcbiAgICBwcml2YXRlIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xuICAgIHByaXZhdGUgY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI/OiBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogS3VtdWxvcywgY3R4OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICB0aGlzLnByb21wdHMgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzID0gW107XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRmlsdGVyID0gbmV3IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxQdXNoUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIHRoaXMub25FdmVudFRyYWNrZWRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnB1c2hDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdwdXNoJyk7XG4gICAgICAgIHRoaXMua3VtdWxvc0NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2xvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk6IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyID0gbmV3IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FdmVudFRyYWNrZWQgPSAoZTogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdQcm9tcHQgdHJpZ2dlciBzYXcgZXZlbnQnLCBlKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdOb3QgcmVhZHksIHdhaXRpbmcgb24gcXVldWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlRGVmZXJyZWRQcm9tcHQgPSAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdChwcm9tcHQgYXMgUHVzaFByb21wdENvbmZpZyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gYXN5bmMgKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBpZiAoJ3JlcXVlc3RpbmcnID09PSB0aGlzLnN0YXRlIHx8ICdyZXF1ZXN0aW5nLXNpbGVudCcgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcblxuICAgICAgICB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5pc05hdGl2ZVByb21wdFNob3duKCkudGhlbihpc05hdGl2ZVByb21wdFNob3duID0+IHtcbiAgICAgICAgICAgIGlmIChpc05hdGl2ZVByb21wdFNob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVxdWVzdGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nLXNpbGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8ucmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUmVxdWVzdFBvc3RBY3Rpb25Qcm9tcHQgPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICApID0+IHtcbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZycgIT09IGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSBwcm9tcHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc3RBY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncG9zdGFjdGlvbicpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUHJvbXB0QWNjZXB0ZWQgPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3Vuc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0KTtcblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3N1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oY2hhbm5lbFNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLnVpPy5zaG93VG9hc3QocHJvbXB0LmxhYmVscz8udGhhbmtzRm9yU3Vic2NyaWJpbmchKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUG9zdEFjdGlvbkNvbmZpcm0gPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVVzZXJDaGFubmVsU2VsZWN0aW9uKGNoYW5uZWxTZWxlY3Rpb25zKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICB0aGlzLmhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblByb21wdERlY2xpbmVkID0gKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQpO1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkRpc21pc3NPdmVybGF5ID0gKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgeyBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuZm9yRWFjaChwID0+IHRoaXMuaGlkZVByb21wdChwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGlmICghcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnV2lsbCBoYW5kbGUgYWN0aW9uczogJywgcHJvbXB0LmFjdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCBjaGFubmVsU3ViTWdyLmxpc3RDaGFubmVscygpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMocHJvbXB0KTtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMocHJvbXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxTdWJBY3Rpb25zKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWdcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8Q2hhbm5lbFN1YkFjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgQ2hhbm5lbFN1YkFjdGlvbiA9PlxuICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHV1aWRzVG9TdWJzY3JpYmUgPSBhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbHRvU3ViID0gdGhpcy5jaGFubmVscy5maW5kKFxuICAgICAgICAgICAgICAgICAgICBjID0+IGMudXVpZCA9PT0gYWN0aW9uLmNoYW5uZWxVdWlkICYmIGMuc3Vic2NyaWJlZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbHRvU3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gc3Vic2NyaWJlIHRvIGNoYW5uZWwgJyR7YWN0aW9uLmNoYW5uZWxVdWlkfScgYXMgaXQgZG9lcyBub3QgZXhpc3RgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24uY2hhbm5lbFV1aWQpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5zdWJzY3JpYmUodXVpZHNUb1N1YnNjcmliZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9zdCBhY3Rpb25zIG9ubHkgYXBwbHkgdG8gYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25zXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8VXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24+KFxuICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjdXJyZW50bHkgb25seSBleHBlY3RpbmcgMSBjb25maWd1cmVkIGB1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZ2AgYWN0aW9uXG4gICAgICAgIHRoaXMub25SZXF1ZXN0UG9zdEFjdGlvblByb21wdChwcm9tcHQsIGFjdGlvbnNbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbFNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gIWNzLmNoZWNrZWQpXG4gICAgICAgICAgICAubWFwKGNzID0+IGNzLmNoYW5uZWwudXVpZCk7XG4gICAgICAgIGF3YWl0IGNoYW5uZWxTdWJNZ3IudW5zdWJzY3JpYmUodW5zdWJzY3JpYmVzKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci5zdWJzY3JpYmUoc3Vic2NyaWJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSB8fCAhdGhpcy5zdGF0ZSB8fCAhdGhpcy5wbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVJQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnOiB0aGlzLnBsYXRmb3JtQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdDogdGhpcy5jaGFubmVsc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiAodGhpcy51aSA9IHIpfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRzPXt0aGlzLmFjdGl2ZVByb21wdHN9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICBvblBvc3RBY3Rpb25Db25maXJtPXt0aGlzLm9uUG9zdEFjdGlvbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzc092ZXJsYXk9e3RoaXMub25EaXNtaXNzT3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD17dGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zdEFjdGlvbj17dGhpcy5jdXJyZW50UG9zdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9VSUNvbnRleHQuUHJvdmlkZXI+LFxuICAgICAgICAgICAgdGhpcy5wdXNoQ29udGFpbmVyLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGV2YWx1YXRlVHJpZ2dlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRXZhbHVhdGluZyBwcm9tcHQgdHJpZ2dlcnMnKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVkUHJvbXB0cyA9IGF3YWl0IHRoaXMudHJpZ2dlckZpbHRlci5maWx0ZXJQcm9tcHRzKFxuICAgICAgICAgICAgdGhpcy5wcm9tcHRzLFxuICAgICAgICAgICAgcHJvbXB0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9tcHRBY3Rpb25OZWVkc1Rha2VuKHByb21wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdHMobWF0Y2hlZFByb21wdHMpO1xuICAgIH1cblxuICAgIHByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFubmVsc1RvU3ViID1cbiAgICAgICAgICAgIHByb21wdC5hY3Rpb25zXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3N1YnNjcmliZVRvQ2hhbm5lbCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IGEuY2hhbm5lbFV1aWQpID8/IFtdO1xuICAgICAgICBjb25zdCBuZWVkc1RvU3ViID1cbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGMgPT4gY2hhbm5lbHNUb1N1Yi5pbmNsdWRlcyhjLnV1aWQpICYmICFjLnN1YnNjcmliZWRcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAobmVlZHNUb1N1Yikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLmFjdGl2ZVByb21wdHMuaW5kZXhPZihwcm9tcHQpO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICAvLyBUT0RPIGlzIGlkZW50aXR5IG9rIGZvciBjb21wYXJpc29uIGhlcmUuLi4gbWlnaHQgbmVlZCB0byB1c2UgSURcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzLnB1c2gocHJvbXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlUHJvbXB0cyhwcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW10pIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdXaWxsIGFjdGl2YXRlIHByb21wdHM6ICcsIHByb21wdHMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpXTtcblxuICAgICAgICAgICAgaWYgKGRlZmVyUHJvbXB0QWN0aXZhdGlvbihwcm9tcHQsIHRoaXMuYWN0aXZhdGVEZWZlcnJlZFByb21wdCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdChwcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIHByb21wdCBtYW5hZ2VyIHN0YXRlOicgKyBzdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hPcHNNYW5hZ2VyID0gYXdhaXQgZ2V0UHVzaE9wc01hbmFnZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlci5nZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUHJvbXB0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCkubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8uZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0YWN0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3RpbmcnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUHJvbXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wbGF0Zm9ybUNvbmZpZy5wdWJsaWNLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb21wdHMgY29uZmlnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4udGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdHMgPSB7IC4uLih0aGlzLnBsYXRmb3JtQ29uZmlnLnByb21wdHMgfHwge30pIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLnByb21wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5uZWxPcCA9IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRzW2lkXS5hY3Rpb25zPy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gYS50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgICk/Lmxlbmd0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGhhc0NoYW5uZWxPcCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCkubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCwgSlNYIH0gZnJvbSAncHJlYWN0JztcblxuaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrUHJvcHMge1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIGJsdXJDbGFzcz86IHN0cmluZztcbiAgICBzdHlsZT86IEpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tTdGF0ZSB7XG4gICAgYmx1ckNsYXNzZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZE1hc2sgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQmFja2dyb3VuZE1hc2tQcm9wcyxcbiAgICBCYWNrZ3JvdW5kTWFza1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFja2dyb3VuZE1hc2tQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYmx1ckNsYXNzZXMgPSB0aGlzLnByb3BzLmJsdXJDbGFzcz8uc3BsaXQoJyAnKSA/PyBbXTtcbiAgICAgICAgYmx1ckNsYXNzZXMucHVzaCgna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1cicpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBibHVyQ2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZUJsdXJTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBibHVyQ2xhc3NlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBibHVyQ2xhc3Nlcy5mb3JFYWNoKGJsdXJDbGFzcyA9PiB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGJsdXJDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYmx1ckNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYmx1ckNsYXNzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lcywgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2snXTtcblxuICAgICAgICBpZiAoISFjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgUHVzaFByb21wdENvbmZpZywgUG9pbnQsIERpbWVuc2lvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgaXNNb2JpbGUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEJhY2tncm91bmRNYXNrIH0gZnJvbSAnLi9iYWNrZ3JvdW5kLW1hc2snO1xuaW1wb3J0IHsgU3ZnUG9pbnRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3ZnLXBvaW50ZXInO1xuXG5jb25zdCBsb2NhbFN0eWxlcyA9IHtcbiAgICBtYXNrOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH1cbn07XG5cbmNvbnN0IFBPSU5URVJfU1RBUlRfT0ZGU0VUOiBQb2ludCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDUwXG59O1xuXG5jb25zdCBQT0lOVEVSX0VORF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IC0xNzUsXG4gICAgeTogNzVcbn07XG5cbmNvbnN0IENPTlRST0xfUE9JTlRfT0ZGU0VUOiBQb2ludCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDUwMFxufTtcblxuaW50ZXJmYWNlIE92ZXJsYXlTaWxlbnRQcm9wcyB7XG4gICAgcHJvbXB0U3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgb25EaXNtaXNzPzogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE92ZXJsYXlTaWxlbnRTdGF0ZSB7XG4gICAgd2luZG93RGltZW5zaW9uczogRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlTaWxlbnQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgT3ZlcmxheVNpbGVudFByb3BzLFxuICAgIE92ZXJsYXlTaWxlbnRTdGF0ZVxuPiB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbmRvd0RpbWVuc2lvbnM6IHsgd2lkdGgsIGhlaWdodCB9IH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm9tcHRTdGF0ZSwgcHJvbXB0LCBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJvbXB0IHx8XG4gICAgICAgICAgICBwcm9tcHRTdGF0ZSAhPT0gJ3JlcXVlc3Rpbmctc2lsZW50JyB8fFxuICAgICAgICAgICAgIXByb21wdC5zaWxlbnRPdmVybGF5IHx8XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBwcm9tcHQuc2lsZW50T3ZlcmxheTtcbiAgICAgICAgY29uc3QgYm9keUxhYmVsID0gb3ZlcmxheS5sYWJlbHMuYm9keTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBvdmVybGF5LmNvbG9ycy50ZXh0O1xuXG4gICAgICAgIGNvbnN0IG1hc2tTdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLmxvY2FsU3R5bGVzLm1hc2ssXG4gICAgICAgICAgICBjb2xvclxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBibHVyQ2xhc3M9XCJrdW11bG9zLW92ZXJsYXktYmx1clwiXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLW92ZXJsYXkga3VtdWxvcy1vdmVybGF5LSR7Z2V0QnJvd3Nlck5hbWUoKX1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXttYXNrU3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJhY2tncm91bmRNYXNrQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9pbnRlcihjb2xvcil9XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJrdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dFwiPntib2R5TGFiZWx9PC9wPlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclBvaW50ZXIoY29sb3I6IHN0cmluZykge1xuICAgICAgICBjb25zdCB7IHdpbmRvd0RpbWVuc2lvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlclN0YXJ0OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHdpbmRvd0RpbWVuc2lvbnMud2lkdGggLyAyICsgUE9JTlRFUl9TVEFSVF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IHdpbmRvd0RpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIFBPSU5URVJfU1RBUlRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwb2ludGVyRW5kOiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHdpbmRvd0RpbWVuc2lvbnMud2lkdGggKyBQT0lOVEVSX0VORF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IFBPSU5URVJfRU5EX09GRlNFVC55XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29udHJvbFBvaW50OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHBvaW50ZXJFbmQueCArIENPTlRST0xfUE9JTlRfT0ZGU0VULngsXG4gICAgICAgICAgICB5OiBwb2ludGVyU3RhcnQueSArIENPTlRST0xfUE9JTlRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgPFN2Z1BvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgYXJlYT17d2luZG93RGltZW5zaW9uc31cbiAgICAgICAgICAgICAgICAgICAgcXVhZEN1cnZlUG9pbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwMTogcG9pbnRlclN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcDI6IGNvbnRyb2xQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAzOiBwb2ludGVyRW5kXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJhY2tncm91bmRNYXNrQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvbXB0LCBvbkRpc21pc3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFwcm9tcHQgfHwgIW9uRGlzbWlzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb25EaXNtaXNzKHByb21wdCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IFB1c2hQcm9tcHRDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL2JhY2tncm91bmQtbWFzayc7XG5cbmludGVyZmFjZSBPdmVybGF5UHJvcHMge1xuICAgIHByb21wdFN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcHJvbXB0PzogUHVzaFByb21wdENvbmZpZztcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudDxPdmVybGF5UHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZycgfHxcbiAgICAgICAgICAgICFwcm9tcHQub3ZlcmxheSB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0Lm92ZXJsYXk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc2hhZGUsXG4gICAgICAgICAgICBjb2xvcjogb3ZlcmxheS5jb2xvcnMudGV4dFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgLy8gbWFpbnRhaW5zIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBleGlzdGluZyBibHVyIGNsYXNzIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB3YXMgYmVpbmcgYXBwbGllZCBkaXJlY3RseSBieSB0aGlzIGNvbXBvbmVudCBwcmV2aW91c2x5XG4gICAgICAgICAgICAgICAgYmx1ckNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWJsdXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LXN0cmlwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc3RyaXAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NCAzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e292ZXJsYXkuY29sb3JzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjIuNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDEyLjU3LDExLjEyXG4gICAgICAgICAgIEMgMTIuNTcsMTEuMTIgNi44NCwyMC44MiA0LjEzLDIxLjAxXG4gICAgICAgICAgICAgMS40MiwyMS4yMSAyMC43MSwyOC42NyAyNi42MiwyOC42N00gNC4yMywyMS4wMVxuICAgICAgICAgICBDIDQuMjMsMjEuMDEgNTMuOTYsMTQuOTEgNjAuNjUsMy40N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkuaWNvblVybCAmJiA8aW1nIHNyYz17b3ZlcmxheS5pY29uVXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57b3ZlcmxheS5sYWJlbHMuaGVhZGluZ308L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvdmVybGF5LmxhYmVscy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5saW5rcz8ubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwZXJzaXN0UHJvbXB0UmVtaW5kZXIsIGdldFByb21wdFJlbWluZGVyIH0gZnJvbSAnLi4vY29yZS9zdG9yYWdlJztcblxuaW1wb3J0IHtcbiAgICBQcm9tcHRVaUFjdGlvbnMsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnLFxuICAgIFJlbWluZGVyVGltZVVuaXRcbn0gZnJvbSAnLi4vY29yZSc7XG5cbmNvbnN0IFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVMgPSB7XG4gICAgW1JlbWluZGVyVGltZVVuaXQuSE9VUlNdOiAxMDAwICogNjAgKiA2MCxcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5EQVlTXTogMTAwMCAqIDYwICogNjAgKiAyNFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdDogUHJvbXB0Q29uZmlnKSB7XG4gICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdCBhcyBQcm9tcHRVaUFjdGlvbnM7XG5cbiAgICBpZiAoIXVpQWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB0eXBlIH0gPSB1aUFjdGlvbnMuZGVjbGluZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5SRU1JTkQ6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCB7XG4gICAgICAgICAgICAgICAgZGVjbGluZWRPbjogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRFQ0xJTkU6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCAnc3VwcHJlc3NlZCcpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgVW5zdXBwb3J0ZWQgZGVjbGluZSBhY3Rpb24gdHlwZSAke3R5cGV9IHN1cHBvcnRlZCBmb3IgcHJvbXB0ICR7cHJvbXB0LnV1aWR9LCBmYWxsIGJhY2sgdG8gYWx3YXlzIHNob3cgdGhpcyBwcm9tcHQgd2hlbiBkZWNsaW5lZGBcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNQcm9tcHRTdXBwcmVzc2VkKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZW1pbmRlciA9IGF3YWl0IGdldFByb21wdFJlbWluZGVyKHByb21wdC51dWlkKTtcblxuICAgIGlmICghcmVtaW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnc3VwcHJlc3NlZCcgPT09IHJlbWluZGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghKCd1aUFjdGlvbnMnIGluIHByb21wdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdWlBY3Rpb25zIH0gPSBwcm9tcHQ7XG5cbiAgICBpZiAodWlBY3Rpb25zLmRlY2xpbmUudHlwZSAhPT0gVWlBY3Rpb25UeXBlLlJFTUlORCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFoYXNQcm9tcHRSZW1pbmRlckVsYXBzZWQoXG4gICAgICAgIHJlbWluZGVyLmRlY2xpbmVkT24sXG4gICAgICAgIHVpQWN0aW9ucy5kZWNsaW5lLmRlbGF5XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb21wdFJlbWluZGVyRWxhcHNlZChcbiAgICBkZWNsaW5lZE9uTWlsbGlzOiBudW1iZXIsXG4gICAgZGVsYXlDb25maWc6IFByb21wdFJlbWluZGVyRGVsYXlDb25maWdcbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIERhdGUubm93KCkgLSBkZWNsaW5lZE9uTWlsbGlzID5cbiAgICAgICAgUkVNSU5ERVJfVElNRV9VTklUX1RPX01JTExJU1tkZWxheUNvbmZpZy50aW1lVW5pdF0gKlxuICAgICAgICAgICAgZGVsYXlDb25maWcuZHVyYXRpb25cbiAgICApO1xufVxuIiwiaW1wb3J0IHtcbiAgICBGaWx0ZXJWYWx1ZSxcbiAgICBLdW11bG9zRXZlbnQsXG4gICAgUHJvcEZpbHRlcixcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlncyxcbiAgICBDb250ZXh0LFxuICAgIFNka0V2ZW50LFxuICAgIEV2ZW50UGF5bG9hZFxufSBmcm9tICcuLi9jb3JlJztcblxuaW1wb3J0IHsgZXNjYXBlUmVnRXhwIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBpc1Byb21wdFN1cHByZXNzZWQgfSBmcm9tICcuL3Byb21wdC1yZW1pbmRlcic7XG5cbmZ1bmN0aW9uIHByb3BJbihmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRlc3RzID0gZmlsdGVyVmFsdWUubWFwKHYgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IGBeJHtlc2NhcGVSZWdFeHAodikucmVwbGFjZSgvXFxcXFxcKi9nLCAnLionKX0kYDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJNYXRjaGVkID0gdGVzdHMucmVkdWNlKFxuICAgICAgICAgICAgKG1hdGNoZWQsIG1hdGNoZXIpID0+IG1hdGNoZWQgfHwgbWF0Y2hlci50ZXN0KFN0cmluZyhwcm9wVmFsdWUpKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlck1hdGNoZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZmlsdGVyVmFsdWUuaW5kZXhPZihwcm9wVmFsdWUgYXMgYW55KSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJvcEVxKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmlsdGVyVmFsdWUgPT0gcHJvcFZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wR3QoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPiBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0ZShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEx0KGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlIDwgZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BMdGUoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPD0gZmlsdGVyVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyTWF0Y2hlZChcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICBldmVudDogS3VtdWxvc0V2ZW50XG4pOiBib29sZWFuIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gcHJvbXB0LnRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlci5ldmVudCAhPT0gZXZlbnQudHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0cmlnZ2VyLmZpbHRlcnM/Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBhbGxQcm9wRmlsdGVyc01hdGNoID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXIuZmlsdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBbcHJvcCwgb3AsIGZpbHRlclRlc3RWYWx1ZV0gPSB0cmlnZ2VyLmZpbHRlcnNbaV0gYXMgUHJvcEZpbHRlcjtcblxuICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSBldmVudC5kYXRhW3Byb3BdO1xuXG4gICAgICAgIGxldCBmaWx0ZXJNYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICAgICAgY2FzZSAnaW4nOlxuICAgICAgICAgICAgY2FzZSAnSU4nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wSW4oZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BFcShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEd0KGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEd0ZShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEx0KGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEx0ZShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBmaWx0ZXIgb3BlcmF0b3I6ICR7b3B9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxQcm9wRmlsdGVyc01hdGNoID0gYWxsUHJvcEZpbHRlcnNNYXRjaCAmJiBmaWx0ZXJNYXRjaGVkO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxQcm9wRmlsdGVyc01hdGNoO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFQgZXh0ZW5kcyBQcm9tcHRDb25maWc+IHtcbiAgICBwcml2YXRlIGV2ZW50UXVldWU6IEV2ZW50UGF5bG9hZCA9IFtdO1xuICAgIHByaXZhdGUgZXZlbnRSZWNlaXZlZENhbGxiYWNrPzogKGU6IFNka0V2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCBldmVudFJlY2VpdmVkQ2FsbGJhY2s/OiAoZTogU2RrRXZlbnQpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5ldmVudFJlY2VpdmVkQ2FsbGJhY2sgPSBldmVudFJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgIGN0eC5zdWJzY3JpYmUoJ2V2ZW50VHJhY2tlZCcsIHRoaXMuaGFuZGxlU2RrRXZlbnQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbHRlclByb21wdHMoXG4gICAgICAgIHByb21wdHM6IFByb21wdENvbmZpZ3M8VD4sXG4gICAgICAgIGZpbHRlcjogKHByb21wdDogVCkgPT4gYm9vbGVhbiA9IChfOiBUKSA9PiB0cnVlXG4gICAgKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGlkIGluIHByb21wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHByb21wdHNbaWRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50UXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRRdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHRTdXBwcmVzc2VkID0gYXdhaXQgaXNQcm9tcHRTdXBwcmVzc2VkKHByb21wdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFwcm9tcHRTdXBwcmVzc2VkICYmXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJNYXRjaGVkKHByb21wdCwgZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcihwcm9tcHQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9tcHRzLnB1c2gocHJvbXB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbXTtcblxuICAgICAgICAvLyBDYXN0IG5lY2Vzc2FyeSB0byBuYXJyb3cgdGhlIHR5cGUgZnJvbSB0aGUgY29uc3RyYWludC5cbiAgICAgICAgLy8gU2VlbXMgdGhlIFRTIGNvbXBpbGVyIGlzbid0IHF1aXRlIHNtYXJ0IGVub3VnaCB3aGVuIGhhbmRsaW5nXG4gICAgICAgIC8vIHRoZSAnVCBleHRlbmRzIFByb21wdENvbmZpZycgY29uc3RyYWludC5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRQcm9tcHRzIGFzIFRbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNka0V2ZW50ID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGUuZGF0YSBhcyBFdmVudFBheWxvYWQ7XG5cbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlLnB1c2goLi4uZXZlbnRzKTtcblxuICAgICAgICB0aGlzLmV2ZW50UmVjZWl2ZWRDYWxsYmFjaz8uKGUpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi4vY29yZS9jaGFubmVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDb250ZXh0U3RhdGUge1xuICAgIHBsYXRmb3JtQ29uZmlnOiBQbGF0Zm9ybUNvbmZpZztcbiAgICBjaGFubmVsTGlzdDogQ2hhbm5lbFtdO1xufVxuXG5leHBvcnQgY29uc3QgVUlDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVSUNvbnRleHRTdGF0ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIGgsIEpTWCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBBbGVydFByb21wdENvbmZpZyxcbiAgICBCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0QWN0aW9uLFxuICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uLFxuICAgIENoYW5uZWxMaXN0SXRlbVxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEJlbGwgfSBmcm9tICcuL2JlbGwnO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IHsgQ2hhbm5lbHNEaWFsb2cgfSBmcm9tICcuL2RpYWxvZy9jaGFubmVscy1kaWFsb2cnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL292ZXJsYXkvYmFja2dyb3VuZC1tYXNrJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXkvcHVzaC1wZXJtcyc7XG5pbXBvcnQgeyBPdmVybGF5U2lsZW50IH0gZnJvbSAnLi9vdmVybGF5L3B1c2gtcGVybXMtc2lsZW50JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMID0gJ1N1YnNjcmliZSBmb3Igbm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlUG9zaXRpb24ocG9zOiBzdHJpbmcpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICByZXR1cm4gcG9zLmluZGV4T2YoJ2xlZnQnKSA+IC0xID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRVaVByb3BzPFQgZXh0ZW5kcyBQdXNoUHJvbXB0Q29uZmlnPiB7XG4gICAgY29uZmlnOiBUO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBhY3Rpb24/OiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbjtcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50PFRvb2x0aXBQcm9wcywgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLXRvb2x0aXAga3VtdWxvcy10b29sdGlwLSR7dGhpcy5wcm9wcy5wb3NpdGlvbn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBUb2FzdCBleHRlbmRzIENvbXBvbmVudDx7IG1lc3NhZ2U6IHN0cmluZyB9LCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJrdW11bG9zLXRvYXN0XCI+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj47XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgcHJvbXB0czogUHVzaFByb21wdENvbmZpZ1tdO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBvblBvc3RBY3Rpb25Db25maXJtOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvbkRpc21pc3NPdmVybGF5OiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgdG9hc3RRdWV1ZTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIFVpU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVWlQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVxdWV1ZVRvYXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IHRoaXMuc3RhdGUudG9hc3RRdWV1ZS5zbGljZSgxKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2hvd1RvYXN0KG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiBbLi4udGhpcy5zdGF0ZS50b2FzdFF1ZXVlLCBtZXNzYWdlXVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZGVxdWV1ZVRvYXN0LCAzMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMubWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHJvbXB0cy5tYXAodGhpcy5yZW5kZXJQcm9tcHQsIHRoaXMpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdEFjdGlvbigpfVxuXG4gICAgICAgICAgICAgICAgeyFpc01vYmlsZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHshaXNNb2JpbGUoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPdmVybGF5U2lsZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHQ9e3RoaXMucHJvcHMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXt0aGlzLnByb3BzLm9uRGlzbWlzc092ZXJsYXl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvYXN0UXVldWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdCBtZXNzYWdlPXt0aGlzLnN0YXRlLnRvYXN0UXVldWVbMF19IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1heWJlUmVuZGVyUHJvbXB0QmFja2dyb3VuZE1hc2soKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUgfHxcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nLXNpbGVudCcgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHByb21wdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZmlyc3RQcm9tcHRXaXRoTWFzayA9IHByb21wdHMuZmlsdGVyKFxuICAgICAgICAgICAgcCA9PlxuICAgICAgICAgICAgICAgIChwLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgICAgIHAudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgICAgICEhcC5iYWNrZ3JvdW5kTWFza1xuICAgICAgICApWzBdIGFzIEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnO1xuXG4gICAgICAgIGlmICghZmlyc3RQcm9tcHRXaXRoTWFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmlyc3RQcm9tcHRXaXRoTWFzay5iYWNrZ3JvdW5kTWFzayEuY29sb3JzLmJnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIDxCYWNrZ3JvdW5kTWFzayBzdHlsZT17c3R5bGV9IC8+O1xuICAgIH1cblxuICAgIHJlbmRlclByb21wdChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJ3JlcXVlc3RpbmcnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSB8fFxuICAgICAgICAgICAgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocHJvbXB0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2JlbGwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0RGVjbGluZWQ9e3RoaXMucHJvcHMub25Qcm9tcHREZWNsaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAnYWxlcnQnOlxuICAgICAgICAgICAgY2FzZSAnYmFubmVyJzpcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gcHJvbXB0LmFjdGlvbnM/LmZpbmQ8XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvblxuICAgICAgICAgICAgICAgICAgICA+KFxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogUHJvbXB0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQb3N0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50UG9zdEFjdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyAhPT0gcHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJyAhPT0gY3VycmVudFBvc3RBY3Rpb24/LnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhY2tncm91bmRNYXNrID0gbnVsbDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgdW5kZWZpbmVkICE9PSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LmJhY2tncm91bmRNYXNrXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgbWFza0NvbmZpZyA9IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kTWFzayA9IChcbiAgICAgICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBtYXNrQ29uZmlnLmNvbG9ycy5iZyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7YmFja2dyb3VuZE1hc2t9XG4gICAgICAgICAgICAgICAgPENoYW5uZWxzRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17Y3VycmVudFBvc3RBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17Y2hhbm5lbFNlbGVjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBvc3RBY3Rpb25Db25maXJtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlclByb21wdEFjdGl2YXRpb24oXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgYWN0aXZhdGVGbjogKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB2b2lkXG4pIHtcbiAgICBpZiAoXG4gICAgICAgIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyA8IDBcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgJ0RlZmVycmluZyBwcm9tcHQgYWN0aXZhdGlvbiBieSAnICsgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzXG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoYWN0aXZhdGVGbiwgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzICogMTAwMCwgcHJvbXB0KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG5leHBvcnQgZW51bSBXb3JrZXJNZXNzYWdlVHlwZSB7XG4gICAgS1B1c2hSZWNlaXZlZCA9ICdLUHVzaFJlY2VpdmVkJ1xufVxuZXhwb3J0IHR5cGUgV29ya2VyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkO1xuICAgIGRhdGE6IFB1c2hQYXlsb2FkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZGF0YTogYW55KTogZGF0YSBpcyBXb3JrZXJNZXNzYWdlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgV29ya2VyTWVzc2FnZVR5cGVbKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZV0gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=