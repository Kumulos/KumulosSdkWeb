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
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.Service = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.SystemEventType = void 0;
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
function getInstallId() {
    if (installIdPromise) {
        return installIdPromise;
    }
    installIdPromise = (0, storage_1.get)('installId').then(function (installId) {
        if (!installId) {
            return (0, storage_1.set)('installId', (0, utils_1.uuidv4)());
        }
        return installId;
    });
    return installIdPromise;
}
exports.getInstallId = getInstallId;
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
                                console.info("Unable to subscribe to channel '".concat(action.channelUuid, "' as it does not exist"));
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
                        return [4 /*yield*/, this.kumulosClient
                                .getChannelSubscriptionManager()
                                .listChannels()];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxlQUFlLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxX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QU8sQ0FBQyxZQUFZLENBQ2xFLENBQUM7SUFFRixVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBbEJELHNEQWtCQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJELElBQVksaUJBRVg7QUFGRCxXQUFZLGlCQUFpQjtJQUN6QixvREFBK0I7QUFDbkMsQ0FBQyxFQUZXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRTVCO0FBTUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBUztJQUM1QyxPQUFPLENBQ0YsSUFBc0IsQ0FBQyxJQUFJLEtBQUssU0FBUztRQUMxQyxpQkFBaUIsQ0FBRSxJQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FDaEUsQ0FBQztBQUNOLENBQUM7QUFMRCx3REFLQzs7Ozs7OztVQ2ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQtY29weS9pbmRleC5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzP2ZiZDEiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9zdmctcG9pbnRlci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvc2FmYXJpLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL3czYy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcm9vdC1mcmFtZS50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvc3RvcmFnZS9pZGIta2V5dmFsLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9zdG9yYWdlL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2ZwL2ZwLWNhcHR1cmUudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZnAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9mcC90eXBlcy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9iZWxsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGRsL2RkbC1iYW5uZXIudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvZGVlcGxpbmstYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGRsL21hbmFnZXIudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvdWkudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kaWFsb2cvY2hhbm5lbHMtZGlhbG9nLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGlhbG9nL2NoYW5uZWxzLWxpc3QudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kaWFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL292ZXJsYXkvYmFja2dyb3VuZC1tYXNrLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvb3ZlcmxheS9wdXNoLXBlcm1zLXNpbGVudC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL292ZXJsYXkvcHVzaC1wZXJtcy50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3Byb21wdC1yZW1pbmRlci50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdHJpZ2dlcnMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3VpLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL3VpLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy93b3JrZXIvbWVzc2FnaW5nLnRzIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrdW11bG9zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKiEgY2xpcGJvYXJkLWNvcHkuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGdsb2JhbCBET01FeGNlcHRpb24gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGlwYm9hcmRDb3B5XG5cbmZ1bmN0aW9uIG1ha2VFcnJvciAoKSB7XG4gIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCcsICdOb3RBbGxvd2VkRXJyb3InKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5Q2xpcGJvYXJkQXBpICh0ZXh0KSB7XG4gIC8vIFVzZSB0aGUgQXN5bmMgQ2xpcGJvYXJkIEFQSSB3aGVuIGF2YWlsYWJsZS4gUmVxdWlyZXMgYSBzZWN1cmUgYnJvd3NpbmdcbiAgLy8gY29udGV4dCAoaS5lLiBIVFRQUylcbiAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgdGhyb3cgbWFrZUVycm9yKClcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUV4ZWNDb21tYW5kICh0ZXh0KSB7XG4gIC8vIFB1dCB0aGUgdGV4dCB0byBjb3B5IGludG8gYSA8c3Bhbj5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIC8vIFByZXNlcnZlIGNvbnNlY3V0aXZlIHNwYWNlcyBhbmQgbmV3bGluZXNcbiAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSdcbiAgc3Bhbi5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ2F1dG8nXG4gIHNwYW4uc3R5bGUudXNlclNlbGVjdCA9ICdhbGwnXG5cbiAgLy8gQWRkIHRoZSA8c3Bhbj4gdG8gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxuXG4gIC8vIE1ha2UgYSBzZWxlY3Rpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcmFuZ2Ugb2YgdGV4dCBzZWxlY3RlZCBieSB0aGUgdXNlclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3QgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShzcGFuKVxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG5cbiAgLy8gQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuICB0cnkge1xuICAgIHN1Y2Nlc3MgPSB3aW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIENsZWFudXBcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuKVxuICB9XG5cbiAgaWYgKCFzdWNjZXNzKSB0aHJvdyBtYWtlRXJyb3IoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbGlwYm9hcmRDb3B5ICh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUNsaXBib2FyZEFwaSh0ZXh0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAuLi5PdGhlcndpc2UsIHVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgpIGZhbGxiYWNrXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvcHlFeGVjQ29tbWFuZCh0ZXh0KVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIHRocm93IChlcnIyIHx8IGVyciB8fCBtYWtlRXJyb3IoKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmt1bXVsb3MtcmF0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIgLmt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtcmF0aW5nIC5rdW11bG9zLXJhdGluZy1jb3VudCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2FwcC1yYXRpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rdW11bG9zLXJhdGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuXFxuICAgIC5rdW11bG9zLXJhdGluZy1zdGFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIC5rdW11bG9zLXJhdGluZy1oYWxmc3RhciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1yYXRpbmctY291bnQge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQge1xcbiAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyMjtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMjI7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG5cXG4ua3VtdWxvcy1wcm9tcHQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5rdW11bG9zLXByb21wdCAqLFxcbi5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4ua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm06aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICMyMjI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogLTdweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwMDA7XFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1mbG93OiB3cmFwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3Age1xcbiAgdG9wOiAwO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICB0b3A6IHVuc2V0O1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICBmbGV4LWZsb3c6IGluaXRpYWw7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1pY29uIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDAgM3B4IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1yaWdodDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtdG9wIHtcXG4gICAgcGFkZGluZy10b3A6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XFxuICB9XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgbGVmdDogMTVweDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5rdW11bG9zLWJlbGw6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGwgc3ZnIHtcXG4gIGZpbGw6ICNmZmY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1zaGFrZSAwLjRzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODUlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogNy41JSAwIDAgNy41JTtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbC1pbm5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgb3JkZXI6IDI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnQsXFxuLmt1bXVsb3MtYWxlcnQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyIGgxLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgZmxleDogMTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvcmRlcjogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbmJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciA+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5ICosXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmJlZm9yZSxcXG4ua3VtdWxvcy1vdmVybGF5ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgbWF4LXdpZHRoOiA2NjBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiAzOCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBwLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQgcCB7XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiA0NDBweDtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA2NzVweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG9yZGVyOiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5rdW11bG9zLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2FuaW1zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL190b29sdGlwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fdG9hc3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19wcm9tcHRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2NoZWNrYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYmFubmVyLmNvbXBhY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19zYWZlLWFyZWEtaW5zZXQtcGFkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2JlbGwvYmVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9kaWFsb2cvZGlhbG9nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2JhY2tncm91bmQtbWFzay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9vdmVybGF5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSTtJQUVJLGtDQUFBO0VDRE47RURJRTtJQUVJLGlDQUFBO0VDSE47RURNRTtJQUdJLGtDQUFBO0VDTk47RURTRTtJQUVJLGlDQUFBO0VDUk47QUFDRjtBRFdBO0VBQ0k7SUFDSSxVQUFBO0VDVE47RURZRTtJQUNJLFVBQUE7RUNWTjtBQUNGO0FEYUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtFQ1hOO0VEY0U7SUFDSSxVQUFBO0lBQ0EsK0JBQUE7RUNaTjtBQUNGO0FEZUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ2JOO0VEZ0JFO0lBQ0ksVUFBQTtJQUNBLCtCQUFBO0VDZE47QUFDRjtBRGlCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFDQUFBO0VDZk47RURrQkU7SUFDSSxVQUFBO0lBQ0Esa0NBQUE7RUNoQk47QUFDRjtBRG1CQTtFQUNJO0lBQ0ksbUNBQUE7RUNqQk47RURvQkU7SUFDSSwrQkFBQTtFQ2xCTjtBQUNGO0FEcUJBO0VBQ0k7SUFDSSxrQ0FBQTtFQ25CTjtFRHNCRTtJQUNJLCtCQUFBO0VDcEJOO0FBQ0Y7QUNsRUk7RUFDSSxhQUFBO0FEb0VSO0FDakVJO0VBQ0ksY0FBQTtBRG1FUjs7QUMvREE7RUFDSSxnQkNWaUI7RURXakIsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7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b20vc25pcHBldHMvY3NzL3NoYWtlLWNzcy1rZXlmcmFtZS1hbmltYXRpb24vXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tc2hha2Uge1xcbiAgICAxMCUsXFxuICAgIDkwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDIwJSxcXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAzMCUsXFxuICAgIDUwJSxcXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNDAlLFxcbiAgICA2MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy10b2FzdC1pbi1vdXQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS1kb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS11cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxufVxcblwiLFwiQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tc2hha2Uge1xcbiAgMTAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1mYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy10b2FzdC1pbi1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy10b29sdGlwLXBhcmVudCAua3VtdWxvcy10b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50OmhvdmVyIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxufVxcbi5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1yaWdodCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyMjI7XFxuICByaWdodDogMTAwJTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0IHtcXG4gIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtdG9hc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBhbmltYXRpb246IGt1bXVsb3MtdG9hc3QtaW4tb3V0IDAuMjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuXFxuLmt1bXVsb3MtcHJvbXB0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4ua3VtdWxvcy1wcm9tcHQgKixcXG4ua3VtdWxvcy1wcm9tcHQgKjpiZWZvcmUsXFxuLmt1bXVsb3MtcHJvbXB0ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiB1bnNldDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDNweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgIHBhZGRpbmctbGVmdDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsIHN2ZyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuLmt1bXVsb3MtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDcuNSUgMCAwIDcuNSU7XFxufVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gIH1cXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgdG9wOiAxMjBweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gIG9yZGVyOiAyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50LFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlcixcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlciBoMSxcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keSxcXG4ua3VtdWxvcy1hbGVydC1ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5ib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIgPiAqOm5vdCgua3VtdWxvcy1wcm9tcHQpOm5vdCgua3VtdWxvcy1vdmVybGF5KTpub3QoLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrKSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWJsdXIgPiAqOm5vdCgua3VtdWxvcy1vdmVybGF5KSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMjAwMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAqLFxcbi5rdW11bG9zLW92ZXJsYXkgKjpiZWZvcmUsXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDUwMHB4ICsgMTIlKTtcXG4gIG1heC13aWR0aDogNjYwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMzglO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgbWFyZ2luOiA1NXB4IDEuN2VtIDAgMDtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogNTVweDtcXG4gIGhlaWdodDogNTVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgcCxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjY1ZW07XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHQge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWNocm9tZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogNDQwcHg7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjc1cHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBvcmRlcjogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSArIDIxMnB4KTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsXCIua3VtdWxvcy10b29sdGlwLXBhcmVudCB7XFxuICAgIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICAgIGJhY2tncm91bmQ6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgei1pbmRleDogMTEwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG5cXG4gICAgJjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgIH1cXG5cXG4gICAgJi1yaWdodCB7XFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi1sZWZ0IHtcXG4gICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzICRxdWludEVhc2luZztcXG5cXG4gICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIkc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiR0b29sdGlwLWJhY2tncm91bmQ6ICMyMjI7XFxuLy8gaHR0cHM6Ly9lYXNpbmdzLm5ldC9lbiNlYXNlT3V0UXVpbnRcXG4kcXVpbnRFYXNpbmc6IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG5cXG4kZGVmYXVsdEZvbnQ6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kZGVmYXVsdEhlYWRlckZvbnRTaXplOiAxOHB4O1xcbiRkZWZhdWx0Qm9keVNpemU6IDE0cHg7XFxuJGRlZmF1bHRCdXR0b25TaXplOiAxNHB4O1xcblxcbiRtYXNrWkluZGV4OiA5MDA7XFxuJHByb21wdFpJbmRleDogMTAwMDtcXG5cXG4kZGVmYXVsdEJhbm5lckhlYWRlckZvbnRTaXplTW9iaWxlOiAxMnB4O1xcbiRkZWZhdWx0QmFubmVySGVhZGVyTGluZUhlaWdodE1vYmlsZTogMTRweDtcXG5cXG4kZGVmYXVsdEJhbm5lckJvZHlGb250U2l6ZU1vYmlsZTogMTJweDtcXG4kZGVmYXVsdEJhbm5lckJvZHlMaW5lSGVpZ2h0TW9iaWxlOiAxNHB4O1xcblxcbiRkZWZhdWx0QmFubmVyUGFkZGluZzogMTBweDtcIixcIi5rdW11bG9zLXRvYXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQ6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgIHotaW5kZXg6IDExMDA7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBhbmltYXRpb246IGt1bXVsb3MtdG9hc3QtaW4tb3V0IDAuMjVzICRxdWludEVhc2luZztcXG59XFxuXCIsXCIua3VtdWxvcy1wcm9tcHQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAqLFxcbiAgICAqOmJlZm9yZSxcXG4gICAgKjphZnRlciB7XFxuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIHotaW5kZXg6ICRwcm9tcHRaSW5kZXg7XFxufVxcblwiLFwiLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xcblxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QnV0dG9uU2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogIzU1NTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cIixcIi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuXFxuICAgIHBhZGRpbmc6ICRkZWZhdWx0QmFubmVyUGFkZGluZztcXG5cXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG5cXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtZG93biAwLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdG9wOiB1bnNldDtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWZsb3c6IGluaXRpYWw7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWljb24ge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCYW5uZXJIZWFkZXJGb250U2l6ZU1vYmlsZTtcXG4gICAgbGluZS1oZWlnaHQ6ICRkZWZhdWx0QmFubmVyQm9keUxpbmVIZWlnaHRNb2JpbGU7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgM3B4IDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0SGVhZGVyRm9udFNpemU7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QmFubmVyQm9keUZvbnRTaXplTW9iaWxlO1xcbiAgICBsaW5lLWhlaWdodDogJGRlZmF1bHRCYW5uZXJCb2R5TGluZUhlaWdodE1vYmlsZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdEJvZHlTaXplO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxufVxcblwiLFwiLmt1bXVsb3MtYmFubmVyLWNvbXBhY3Qge1xcbiAgICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxufVxcblwiLFwiQHN1cHBvcnRzKHBhZGRpbmc6IHVucXVvdGUoJ21heCgwcHgpJykpIHtcXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKScpO1xcbiAgICB9XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSknKTtcXG4gICAgfVxcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpJyk7XFxuICAgIH1cXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKScpO1xcbiAgICB9XFxufVxcblwiLFwiLmt1bXVsb3MtYmVsbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICAgICYtYm90dG9tLWxlZnQge1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgbGVmdDogMTVweDtcXG4gICAgfVxcblxcbiAgICAmLWJvdHRvbS1yaWdodCB7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICByaWdodDogMTVweDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgJHF1aW50RWFzaW5nLFxcbiAgICAgICAgYm94LXNoYWRvdyAwLjJzICRxdWludEVhc2luZztcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDEzNiwgMjI0KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAvLyBOb3RlIHRoZSBzY2FsZS93aWR0aC9oZWlnaHQgaW4gYWxsIHN0YXRlcyBoYXZlIGJlZW4gY2hvc2VuIHN1Y2ggdGhhdCB0aGV5IHJlc29sdmUgdG8gd2hvbGUgbnVtYmVycy5cXG4gICAgLy8gVGhpcyBoZWxwcyByZWR1Y2UgYmx1ciBvZiB0aGUgU1ZHIGljb24gZHVlIHRvIHJlc3RlcmlzYXRpb24gaW4gV2Via2l0LlxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4ICRzaGFkb3ctY29sb3I7XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxuXFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICBmaWxsOiAjZmZmO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSBib3RoO1xcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICB9XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICA7XFxuICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cIixcIi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcblxcbiAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuICAgIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuXFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAgICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgICAgdG9wOiAxMjBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgICBvcmRlcjogMjtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRIZWFkZXJGb250U2l6ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG9yZGVyOiAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cIixcImJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyXFxuICAgID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHotaW5kZXg6ICRtYXNrWkluZGV4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIixcIi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAqLFxcbiAgICAqOmJlZm9yZSxcXG4gICAgKjphZnRlciB7XFxuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIHotaW5kZXg6IDIwMDA7XFxuXFxuICAgICYtc3RyaXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgfVxcblxcbiAgICAmLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXgtd2lkdGg6IDM4JTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuXFxuICAgICAgICAqIHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDMsXFxuICAgICAgICBwLFxcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUge1xcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogNDQwcHg7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogNjc1cHg7XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkge1xcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQscixvLGY9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHkobCxmLHQscixudWxsKX1mdW5jdGlvbiB5KG4saSx0LHIsbyl7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om99O3JldHVybiBudWxsPT1vJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbztuLl9fZCYmKHI9KHQ9KGw9bikuX192KS5fX2UsKG89bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKG8sdCxpLGwuX19uLHZvaWQgMCE9PW8ub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tyXTpudWxsLHUsbnVsbD09cj9rKHQpOnIsdC5fX2gpLHoodSx0KSx0Ll9fZSE9ciYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQscixvLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LHIsbyxmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtmb3IociBpbiB1KVwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxyIGluIGx8fEgobixyLG51bGwsdVtyXSxpKTtmb3IociBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxIKG4scixsW3JdLHVbcl0saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciByO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKXI9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwscj9UOkkscik6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9UOkkscik7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LHIsbyxmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwsbz1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQscixvLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIWMsb1tvLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LHIsbyxmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKHI9ITApLG51bGwhPW8pZm9yKDtfPG8ubGVuZ3RoO18rKylpZigocz1vW19dKSYmXCJzZXRBdHRyaWJ1dGVcImluIHM9PSEhZCYmKGQ/cy5sb2NhbE5hbWU9PT1kOjM9PT1zLm5vZGVUeXBlKSl7bD1zLG9bX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1yP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLG89bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYobz1vJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHkscixjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LHImJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxvLGYsbz9vWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9bylmb3IoXz1vLmxlbmd0aDtfLS07KW51bGwhPW9bX10mJmgob1tfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PXkudmFsdWV8fF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTih0W3JdLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFyJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxvfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQscikseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxyLG8sZj1hKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBvPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gZCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LGQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCAnLi9hcHAtcmF0aW5nLnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZ1Byb3BzIHtcbiAgICBzdGFyczogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFJhdGluZyhwcm9wczogQXBwUmF0aW5nUHJvcHMpIHtcbiAgICBjb25zdCB7IHN0YXJzLCByYXRpbmdDb3VudCB9ID0gcHJvcHM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGFycygpIHtcbiAgICAgICAgY29uc3Qgc3RhckVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJFbHMucHVzaChcbiAgICAgICAgICAgICAgICA8QXBwUmF0aW5nU3RhclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycyA+PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGFycyA8IGkgJiYgc3RhcnMgPiBpIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hhbGYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhckVscztcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLXJhdGluZ1wiIHN0eWxlPXtyYXRpbmdTdHlsZX0+XG4gICAgICAgICAgICB7Y3JlYXRlU3RhcnMoKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3VtdWxvcy1yYXRpbmctY291bnRcIj4oe3Byb3BzLnJhdGluZ0NvdW50fSk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmludGVyZmFjZSBBcHBSYXRpbmdTdGFyUHJvcHMge1xuICAgIHN0YXRlOiAnb24nIHwgJ2hhbGYnIHwgJ29mZic7XG59XG5cbmZ1bmN0aW9uIEFwcFJhdGluZ1N0YXIocHJvcHM6IEFwcFJhdGluZ1N0YXJQcm9wcykge1xuICAgIGxldCBzdGFyRWw7XG5cbiAgICBpZiAocHJvcHMuc3RhdGUgPT09ICdvbicpIHtcbiAgICAgICAgc3RhckVsID0gPHNwYW4+JiM5NzMzOzwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwcm9wcy5zdGF0ZSA9PT0gJ2hhbGYnKSB7XG4gICAgICAgIHN0YXJFbCA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+JiM5NzM0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyXCI+JiM5NzMzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJFbCA9IDxzcGFuPiYjOTczNDs8L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwia3VtdWxvcy1yYXRpbmctc3RhclwiPntzdGFyRWx9PC9kaXY+O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IERpbWVuc2lvbnMsIFBvaW50IH0gZnJvbSAnLi4vY29yZSc7XG5cbmludGVyZmFjZSBRdWFkcmF0aWNDdXJ2ZVBvaW50cyB7XG4gICAgcDE6IFBvaW50O1xuICAgIHAyOiBQb2ludDtcbiAgICBwMzogUG9pbnQ7XG59XG5cbmludGVyZmFjZSBTdmdQb2ludGVyUHJvcHMge1xuICAgIGFyZWE6IERpbWVuc2lvbnM7XG4gICAgcXVhZEN1cnZlUG9pbnRzOiBRdWFkcmF0aWNDdXJ2ZVBvaW50cztcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBQSV9IQUxGID0gTWF0aC5QSSAvIDI7XG5jb25zdCBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgPSA1MDtcbmNvbnN0IFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUID0gMTUwO1xuXG5mdW5jdGlvbiBjYWxjUG9pbnRlckhlYWRDdXJ2ZUNvb3Jkc0Zyb21DdHJsQW5kVGFyZ2V0KFxuICAgIGN0cmxQb2ludDogUG9pbnQsXG4gICAgdGFyZ2V0OiBQb2ludFxuKTogUXVhZHJhdGljQ3VydmVQb2ludHMge1xuICAgIGNvbnN0IHBvaW50ZXJEaXJSYWRzID1cbiAgICAgICAgTWF0aC5hdGFuMihjdHJsUG9pbnQueCAtIGN0cmxQb2ludC54LCB0YXJnZXQueSAtIHRhcmdldC55KSArIFBJX0hBTEY7XG5cbiAgICBjb25zdCBkaXJWZWM6IFBvaW50ID0ge1xuICAgICAgICB4OiBNYXRoLmNvcyhwb2ludGVyRGlyUmFkcyksXG4gICAgICAgIHk6IC1NYXRoLnNpbihwb2ludGVyRGlyUmFkcylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVDdHJsUG9pbnQ6IFBvaW50ID0ge1xuICAgICAgICB4OiBkaXJWZWMueCAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNULFxuICAgICAgICB5OiBkaXJWZWMueSAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IHBvaW50ZXJPZmZzZXQ6IFBvaW50ID0ge1xuICAgICAgICB4OiAtY3VydmVDdHJsUG9pbnQueCAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCxcbiAgICAgICAgeTogLWRpclZlYy55ICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnZlU3RhcnQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVFbmQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcDE6IGN1cnZlU3RhcnQsXG4gICAgICAgIHAyOiBjdXJ2ZUN0cmxQb2ludCxcbiAgICAgICAgcDM6IGN1cnZlRW5kXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN2Z1BvaW50ZXIoeyBhcmVhLCBxdWFkQ3VydmVQb2ludHMsIGNvbG9yIH06IFN2Z1BvaW50ZXJQcm9wcykge1xuICAgIGNvbnN0IHsgcDEsIHAyLCBwMyB9ID0gcXVhZEN1cnZlUG9pbnRzO1xuICAgIGNvbnN0IGxpbmVQYXRoID0gYE0gJHtwMS54fSAke3AxLnl9IFEgJHtwMi54fSAke3AyLnl9ICR7cDMueH0gJHtwMy55fWA7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHAxOiBoMSxcbiAgICAgICAgcDI6IGgyLFxuICAgICAgICBwMzogaDNcbiAgICB9ID0gY2FsY1BvaW50ZXJIZWFkQ3VydmVDb29yZHNGcm9tQ3RybEFuZFRhcmdldChwMiwgcDMpO1xuICAgIGNvbnN0IGhlYWRQYXRoID0gYE0gJHtwMy54ICsgaDEueH0gJHtwMy55ICsgaDEueX0gUSAke3AzLnggKyBoMi54fSAke3AzLnkgK1xuICAgICAgICBoMi55fSAke3AzLnggKyBoMy54fSAke3AzLnkgKyBoMy55fWA7XG5cbiAgICBjb25zdCBzdHJva2VTdHlsZSA9IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHZpZXdCb3g9e2AwIDAgJHthcmVhLndpZHRofSAke2FyZWEuaGVpZ2h0fWB9XG4gICAgICAgICAgICB3aWR0aD17YCR7YXJlYS53aWR0aH1weGB9XG4gICAgICAgICAgICBoZWlnaHQ9e2Ake2FyZWEuaGVpZ2h0fXB4YH1cbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17c3Ryb2tlU3R5bGV9IGQ9e2xpbmVQYXRofSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXtzdHJva2VTdHlsZX0gZD17aGVhZFBhdGh9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgZ2V0SW5zdGFsbElkXG59IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2V0Q2FjaGVLZXlzID0gKGtleTogc3RyaW5nKSA9PiAoe1xuICAgIENPTkZJR19DQUNIRV9LRVk6IGAke2tleX1Db25maWdgLFxuICAgIENPTkZJR19DQUNIRV9LRVlfVVBEQVRFRDogYCR7a2V5fUNvbmZpZ1VwZGF0ZWRgXG59KTtcblxuY29uc3QgTUFYX0NBQ0hFX0FHRV9NUyA9IDEgKiA2MCAqIDYwICogMTAwMDtcblxuZW51bSBDb25maWdDYWNoZVR5cGUge1xuICAgIFBMQVRGT1JNID0gJ3BsYXRmb3JtJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnPFRDb25maWdUeXBlPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWNoZUtleTogc3RyaW5nLFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxUQ29uZmlnVHlwZT4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhjYWNoZUtleSk7XG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IGdldDxUQ29uZmlnVHlwZT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgY29uc3QgbGFzdExvYWRUaW1lID1cbiAgICAgICAgKGF3YWl0IGdldDxudW1iZXI+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQpKSA/PyAwO1xuICAgIGxldCB1cGRhdGVkUmVtb3RlQ29uZmlnID0gZmFsc2U7XG5cbiAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RMb2FkVGltZSA+IE1BWF9DQUNIRV9BR0VfTVMpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdDb25maWcgbmV2ZXIgc3luY2VkL3N0YWxlLCBzeW5jaW5nIG5vdy4uLicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25maWcgPSBhd2FpdCBhdXRoZWRGZXRjaEpzb248VENvbmZpZ1R5cGU+KGN0eCwgdXJsKTtcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVkUmVtb3RlQ29uZmlnKSB7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlnKTtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQsIERhdGUubm93KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGxhdGZvcm1Db25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGF3YWl0IGxvYWRDb25maWc8UGxhdGZvcm1Db25maWc+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvd2ViL2NvbmZpZ2AsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuUExBVEZPUk0sXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKSkgPz8ge31cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERkbENvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10gfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkQ29uZmlnPERkbFByb21wdENvbmZpZ1tdPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuRERMKX0vdjEvYmFubmVycz93ZWJJbnN0YWxsSWQ9JHt3ZWJJbnN0YWxsSWR9YCxcbiAgICAgICAgICAgIENvbmZpZ0NhY2hlVHlwZS5EREwsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYGxvYWREZGxDb25maWc6IGZhaWxlZCB0byBsb2FkIERlZmVycmVkIERlZXBMaW5rIGNvbmZpZ3VyYXRpb25gLFxuICAgICAgICAgICAgZXJyXG4gICAgICAgICk7XG4gICAgICAgIC8vIHVuZGVmaW5lZCByZXR1cm4gLyBubyBjb25maWdcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGUoXG4gICAgYmFubmVyVXVpZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBnZXRDYWNoZUtleXMoQ29uZmlnQ2FjaGVUeXBlLkRETCk7XG5cbiAgICBsZXQgY29uZmlncyA9IGF3YWl0IGdldDxEZGxQcm9tcHRDb25maWdbXT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdzID0gY29uZmlncy5maWx0ZXIoYyA9PiBjLnV1aWQgIT09IGJhbm5lclV1aWQpO1xuXG4gICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZLCBjb25maWdzKTtcbn1cbiIsImltcG9ydCB7IGF1dGhlZEZldGNoLCBjeXJiNTMsIHV1aWR2NCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVsLCBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuL2NoYW5uZWxzJztcblxuY29uc3QgU0RLX1ZFUlNJT04gPSAnMS4xMS4xJztcbmNvbnN0IFNES19UWVBFID0gMTA7XG5cbmV4cG9ydCB0eXBlIEluc3RhbGxJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZztcblxudHlwZSBKc29uaXNoID1cbiAgICB8IHN0cmluZ1xuICAgIHwgbnVtYmVyXG4gICAgfCBib29sZWFuXG4gICAgfCBudWxsXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfVxuICAgIHwgeyB0b0pTT046ICgpID0+IGFueSB9XG4gICAgfCBKc29uaXNoW11cbiAgICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUHJvcHNPYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfTtcblxudHlwZSBOZXN0ZWRQaWNrPFQsIEsxIGV4dGVuZHMga2V5b2YgVCwgSzIgZXh0ZW5kcyBrZXlvZiBUW0sxXT4gPSB7XG4gICAgW1AxIGluIEsxXToge1xuICAgICAgICBbUDIgaW4gSzJdOiBUW0sxXVtQMl07XG4gICAgfTtcbn07XG5cbmV4cG9ydCBlbnVtIFN5c3RlbUV2ZW50VHlwZSB7XG4gICAgTUVTU0FHRV9ERUxJVkVSRUQgPSAnay5tZXNzYWdlLmRlbGl2ZXJlZCcsXG4gICAgTUVTU0FHRV9PUEVORUQgPSAnay5tZXNzYWdlLm9wZW5lZCcsXG4gICAgUFVTSF9SRUdJU1RFUkVEID0gJ2sucHVzaC5kZXZpY2VSZWdpc3RlcmVkJyxcbiAgICBJTlNUQUxMX1RSQUNLRUQgPSAnay5zdGF0cy5pbnN0YWxsVHJhY2tlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVEVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0ZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGlvbkNsZWFyZWQnXG59XG5cbmV4cG9ydCBlbnVtIFByb21wdFR5cGVOYW1lIHtcbiAgICBCRUxMID0gJ2JlbGwnLFxuICAgIEFMRVJUID0gJ2FsZXJ0JyxcbiAgICBCQU5ORVIgPSAnYmFubmVyJyxcbiAgICBERExfQkFOTkVSID0gJ2RkbF9iYW5uZXInXG59XG5cbi8vIE5vdGUgZHVwbGljYXRlICdpbicgdnMgJ0lOJyBkdWUgdG8gbWlzYWxpZ25tZW50IGluIHNlcnZlciBjb25maWcgYW5kIHB1Ymxpc2hlZCBkb2NzIGZvciBtYW51YWwgY29uZmlnXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvciA9ICdpbicgfCAnSU4nIHwgJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XG5leHBvcnQgdHlwZSBGaWx0ZXJWYWx1ZSA9IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIFByb3BGaWx0ZXIgPSBbc3RyaW5nLCBGaWx0ZXJPcGVyYXRvciwgRmlsdGVyVmFsdWVdO1xuXG5pbnRlcmZhY2UgUHJvbXB0VHJpZ2dlciB7XG4gICAgZXZlbnQ6IHN0cmluZztcbiAgICBhZnRlclNlY29uZHM/OiBudW1iZXI7XG4gICAgZmlsdGVycz86IFByb3BGaWx0ZXJbXTtcbn1cblxuaW50ZXJmYWNlIFByb21wdE92ZXJsYXlDb25maWcge1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgbGFiZWxzOiB7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgYm9keTogc3RyaW5nO1xuICAgIH07XG4gICAgbGlua3M/OiB7IGxhYmVsOiBzdHJpbmc7IHVybDogc3RyaW5nIH1bXTtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgc2hhZGU6IHN0cmluZztcbiAgICAgICAgc3RyaXA6IHN0cmluZztcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgUHJvbXB0U2lsZW50T3ZlcmxheUNvbmZpZyA9IE5lc3RlZFBpY2s8XG4gICAgUHJvbXB0T3ZlcmxheUNvbmZpZyxcbiAgICAnbGFiZWxzJyxcbiAgICAnYm9keSdcbj4gJlxuICAgIE5lc3RlZFBpY2s8UHJvbXB0T3ZlcmxheUNvbmZpZywgJ2NvbG9ycycsICd0ZXh0Jz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZyB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnIHtcbiAgICBiZzogc3RyaW5nO1xuICAgIGZnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkZnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbmZpZyB7XG4gICAgbGFiZWxzOiBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnO1xuICAgIGNvbG9yczogQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnIHtcbiAgICBwcmVzZW50ZWRVdWlkczogc3RyaW5nW10gfCAnYWxsJztcbiAgICBjaGVja2VkVXVpZHM6IHN0cmluZ1tdIHwgJ25vbmUnIHwgJ2FsbCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdElubGluZSc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xuICAgIGRpYWxvZ0NvbmZpZzogQ2hhbm5lbERpYWxvZ0NvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsU3ViQWN0aW9uIHtcbiAgICB0eXBlOiAnc3Vic2NyaWJlVG9DaGFubmVsJztcbiAgICBjaGFubmVsVXVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBVaUFjdGlvblR5cGUge1xuICAgIERFQ0xJTkUgPSAnZGVjbGluZScsXG4gICAgUkVNSU5EID0gJ3JlbWluZCcsXG4gICAgRERMX09QRU5fU1RPUkUgPSAnb3BlblN0b3JlJyxcbiAgICBERExfT1BFTl9ERUVQTElOSyA9ICdvcGVuRGVlcGxpbmsnXG59XG5cbmludGVyZmFjZSBEZWNsaW5lUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuREVDTElORTtcbn1cblxuaW50ZXJmYWNlIFJlbWluZFByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLlJFTUlORDtcbiAgICBkZWxheTogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZztcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0QWN0aW9uID1cbiAgICB8IENoYW5uZWxTdWJBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcblxuZXhwb3J0IGVudW0gUmVtaW5kZXJUaW1lVW5pdCB7XG4gICAgSE9VUlMgPSAnaG91cnMnLFxuICAgIERBWVMgPSAnZGF5cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRpbWVVbml0OiBSZW1pbmRlclRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGRlY2xpbmU6IERlY2xpbmVQcm9tcHRBY3Rpb24gfCBSZW1pbmRQcm9tcHRBY3Rpb247XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTWFza0NvbmZpZyB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0UG9zaXRpb24ge1xuICAgIFRPUF9MRUZUID0gJ3RvcC1sZWZ0JyxcbiAgICBUT1BfQ0VOVEVSID0gJ3RvcC1jZW50ZXInLFxuICAgIFRPUF9SSUdIVCA9ICd0b3AtcmlnaHQnLFxuICAgIENFTlRFUl9MRUZUID0gJ2NlbnRlci1sZWZ0JyxcbiAgICBDRU5URVIgPSAnY2VudGVyJyxcbiAgICBDRU5URVJfUklHSFQgPSAnY2VudGVyLXJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVCA9ICdib3R0b20tbGVmdCcsXG4gICAgQk9UVE9NX0NFTlRFUiA9ICdib3R0b20tY2VudGVyJyxcbiAgICBCT1RUT01fUklHSFQgPSAnYm90dG9tLXJpZ2h0JyxcbiAgICBUT1AgPSAndG9wJyxcbiAgICBCT1RUT00gPSAnYm90dG9tJ1xufVxuXG5pbnRlcmZhY2UgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lO1xuICAgIHRyaWdnZXI6IFByb21wdFRyaWdnZXI7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xuICAgIG92ZXJsYXk/OiBQcm9tcHRPdmVybGF5Q29uZmlnO1xuICAgIHNpbGVudE92ZXJsYXk/OiBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnO1xuICAgIGFjdGlvbnM/OiBQcm9tcHRBY3Rpb25bXTtcbn1cblxuaW50ZXJmYWNlIFdpdGhJbWFnZVVybCB7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUb29sdGlwQ29uZmlnIHtcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHN1YnNjcmliZTogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgRGlhbG9nTGFiZWxDb25maWcgPSB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nTGFiZWxDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0xhYmVsQ29uZmlnXG4+O1xuXG50eXBlIERpYWxvZ0NvbG9yQ29uZmlnID0ge1xuICAgIGZnOiBzdHJpbmc7XG4gICAgYmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uRmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uQmc6IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb25GZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkJnOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nQ29sb3JDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0NvbG9yQ29uZmlnXG4+O1xuXG5pbnRlcmZhY2UgVG9hc3RNZXNzYWdlIHtcbiAgICB0aGFua3NGb3JTdWJzY3JpYmluZzogc3RyaW5nO1xufVxuXG4vLyBCRUxMXG5cbnR5cGUgQmVsbExhYmVsQ29uZmlnID0gVG9hc3RNZXNzYWdlICYgVG9vbHRpcENvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBCZWxsQ29sb3JDb25maWcge1xuICAgIGJlbGw6IHtcbiAgICAgICAgZmc6IHN0cmluZztcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxQcm9tcHRDb25maWcgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CRUxMO1xuICAgIGxhYmVscz86IEJlbGxMYWJlbENvbmZpZztcbiAgICBjb2xvcnM/OiBCZWxsQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLkJPVFRPTV9MRUZUIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NX1JJR0hUO1xufVxuXG4vLyBBTEVSVFxuXG50eXBlIEFsZXJ0TGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBBbGVydENvbG9yQ29uZmlnID0gTmFtZWREaWFsb2dDb2xvckNvbmZpZzxQcm9tcHRUeXBlTmFtZS5BTEVSVD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5BTEVSVDtcbiAgICBsYWJlbHM6IEFsZXJ0TGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBBbGVydENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5DRU5URVI7XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gQkFOTkVSXG5cbnR5cGUgQmFubmVyTGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj4gJlxuICAgIFRvYXN0TWVzc2FnZTtcbnR5cGUgQmFubmVyQ29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkFOTkVSO1xuICAgIGxhYmVsczogQmFubmVyTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBCYW5uZXJDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uVE9QIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NO1xuICAgIGJhY2tncm91bmRNYXNrPzogQmFja2dyb3VuZE1hc2tDb25maWc7XG59XG5cbi8vIERETCBCQU5ORVJcblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRpbmcge1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG59XG5cbnR5cGUgRGRsRGlhbG9nQ29sb3JDb25maWcgPSBEaWFsb2dDb2xvckNvbmZpZyAmIHsgcmF0aW5nRmc6IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBPcGVuU3RvcmVVaUFjdGlvbiA9IHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZGVlcExpbmtVcmw6IHN0cmluZztcbn07XG50eXBlIE9wZW5EZWVwTGlua1VpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRGRsVWlBY3Rpb25zID0gUHJvbXB0VWlBY3Rpb25zICYge1xuICAgIHVpQWN0aW9uczoge1xuICAgICAgICBhY2NlcHQ6IE9wZW5TdG9yZVVpQWN0aW9uIHwgT3BlbkRlZXBMaW5rVWlBY3Rpb247XG4gICAgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGRsQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIERkbFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuRERMX0JBTk5FUjtcbiAgICBsYWJlbHM6IERpYWxvZ0xhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogRGRsRGlhbG9nQ29sb3JDb25maWc7XG4gICAgYXBwUmF0aW5nPzogQXBwUmF0aW5nO1xufVxuXG5leHBvcnQgdHlwZSBQdXNoUHJvbXB0Q29uZmlnID1cbiAgICB8IEJlbGxQcm9tcHRDb25maWdcbiAgICB8IEFsZXJ0UHJvbXB0Q29uZmlnXG4gICAgfCBCYW5uZXJQcm9tcHRDb25maWc7XG5cbmV4cG9ydCB0eXBlIERkbFByb21wdENvbmZpZyA9IERkbEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnID0gUHVzaFByb21wdENvbmZpZyB8IERkbFByb21wdENvbmZpZztcbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZ3M8VCBleHRlbmRzIFByb21wdENvbmZpZz4gPSBSZWNvcmQ8c3RyaW5nLCBUPjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gICAgcHVibGljS2V5OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBwcm9tcHRzPzogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPjtcbiAgICBzYWZhcmlQdXNoSWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBTREtGZWF0dXJlIHtcbiAgICBQVVNIID0gJ3B1c2gnLFxuICAgIERETCA9ICdkZGwnXG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCcsXG4gICAgRVZFTlRTID0gJ2V2ZW50cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICByZWdpb246IHN0cmluZztcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBzZWNyZXRLZXk6IHN0cmluZztcbiAgICB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICAgIHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gICAgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdFJlbWluZGVyID1cbiAgICB8IHtcbiAgICAgICAgICBkZWNsaW5lZE9uOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCAnc3VwcHJlc3NlZCc7XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF1dGhIZWFkZXI6IHN0cmluZztcbiAgICByZWFkb25seSBzZXJ2aWNlV29ya2VyUGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIHJlYWRvbmx5IGF1dG9SZXN1YnNjcmliZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBmZWF0dXJlczogU0RLRmVhdHVyZVtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBTZGtFdmVudEhhbmRsZXJbXSB9O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsTWFwOiB7IFtrZXkgaW4gU2VydmljZV06IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBjb25maWcuc2VjcmV0S2V5O1xuICAgICAgICB0aGlzLnZhcGlkUHVibGljS2V5ID0gY29uZmlnLnZhcGlkUHVibGljS2V5O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3RoaXMuYXBpS2V5fToke3RoaXMuc2VjcmV0S2V5fWApfWA7XG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclBhdGggPSBjb25maWcuc2VydmljZVdvcmtlclBhdGggPz8gJy93b3JrZXIuanMnO1xuICAgICAgICB0aGlzLnB1c2hQcm9tcHRzID0gY29uZmlnLnB1c2hQcm9tcHRzID8/ICdhdXRvJztcbiAgICAgICAgdGhpcy5hdXRvUmVzdWJzY3JpYmUgPSBjb25maWcuYXV0b1Jlc3Vic2NyaWJlID8/IHRydWU7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBjb25maWcuZmVhdHVyZXMgPz8gW1NES0ZlYXR1cmUuUFVTSF07XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuXG4gICAgICAgIHRoaXMudXJsTWFwID0ge1xuICAgICAgICAgICAgW1NlcnZpY2UuUFVTSF06IFwiaHR0cHM6Ly9wdXNoLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5FVkVOVFNdOiBcImh0dHBzOi8vZXZlbnRzLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5ERExdOiBcImh0dHBzOi8vbGlua3MtXCIgKyBjb25maWcucmVnaW9uICsgXCIua3VtdWxvcy5jb21cIixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmVhdHVyZShmZWF0dXJlOiBTREtGZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICAgIH1cblxuICAgIHVybEZvclNlcnZpY2Uoc2VydmljZTogU2VydmljZSkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxNYXBbc2VydmljZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbJ3JlZ2lvbicsICdhcGlLZXknLCAnc2VjcmV0S2V5JywgJ3ZhcGlkUHVibGljS2V5J107XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldCgnaW5zdGFsbElkJywgdXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKCk6IFByb21pc2U8VXNlcklkPiB7XG4gICAgcmV0dXJuIGdldDxVc2VySWQgfCB1bmRlZmluZWQ+KCd1c2VySWQnKS50aGVuKFxuICAgICAgICB1c2VySWQgPT4gdXNlcklkID8/IGdldEluc3RhbGxJZCgpXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc29jaWF0ZVVzZXIoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGlkOiBVc2VySWQsXG4gICAgYXR0cmlidXRlcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBzZXQoJ3VzZXJJZCcsIGlkKTtcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgYXR0cmlidXRlc1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5VU0VSX0FTU09DSUFURUQsIHByb3BzKS50aGVuKF8gPT4ge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJVc2VyQXNzb2NpYXRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5VU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQsIHtcbiAgICAgICAgb2xkVXNlcklkZW50aWZpZXI6IGN1cnJlbnRVc2VySWRcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWwoJ3VzZXJJZCcpO1xufVxuXG5leHBvcnQgdHlwZSBLdW11bG9zRXZlbnQgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBkYXRhPzogUHJvcHNPYmplY3Q7XG59O1xuXG5leHBvcnQgdHlwZSBFdmVudFBheWxvYWQgPSBLdW11bG9zRXZlbnRbXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrRXZlbnQoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgaW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICBjb25zdCBldmVudHM6IEV2ZW50UGF5bG9hZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHV1aWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcyxcbiAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGN0eC5icm9hZGNhc3QoJ2V2ZW50VHJhY2tlZCcsIGV2ZW50cyk7XG5cbiAgICBpZiAoIWlzU3lzdGVtRXZlbnQodHlwZSkpe1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5FVkVOVFMpfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gaXNTeXN0ZW1FdmVudCh0eXBlOiBzdHJpbmcpe1xuICAgIHJldHVybiAoPGFueT5PYmplY3QpLnZhbHVlcyhTeXN0ZW1FdmVudFR5cGUpLmluY2x1ZGVzKHR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tJbnN0YWxsRGV0YWlscyhjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgIGJ1bmRsZTogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCcsIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgICAgICB0YXJnZXQ6IDIgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgfSxcbiAgICAgICAgc2RrOiB7XG4gICAgICAgICAgICBpZDogU0RLX1RZUEUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBTREtfVkVSU0lPTlxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgfSxcbiAgICAgICAgb3M6IHtcbiAgICAgICAgICAgIC8vIERldGVjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBzZXJ2ZXItc2lkZSBmcm9tIFVBIGRhdGFcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2U6IHtcbiAgICAgICAgICAgIC8vIFdpbGwgYmUgaGFuZGxlZCBvbiBiZXN0LWVmZm9ydCBiYXNpcyBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgbmFtZTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIHR6OlxuICAgICAgICAgICAgICAgIHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICA/IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGlzU2ltdWxhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsZTogbmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFzaFBhcnRzID0gW1xuICAgICAgICBTREtfVkVSU0lPTixcbiAgICAgICAgcGF5bG9hZC5hcHAuYnVuZGxlLFxuICAgICAgICBwYXlsb2FkLmRldmljZS50eixcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubG9jYWxlLFxuICAgICAgICBwYXlsb2FkLmRldmljZS5uYW1lXG4gICAgXTtcbiAgICBjb25zdCBoYXNoID0gY3lyYjUzKGhhc2hQYXJ0cy5qb2luKCd8JykpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ2RldGFpbHNIYXNoJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nSGFzaCA9PT0gaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBTeXN0ZW1FdmVudFR5cGUuSU5TVEFMTF9UUkFDS0VELCBwYXlsb2FkKVxuICAgICAgICAudGhlbigoKSA9PiBzZXQoJ2RldGFpbHNIYXNoJywgaGFzaCkpXG4gICAgICAgIC50aGVuKCgpID0+IHZvaWQgMCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbExpc3RJdGVtIHtcbiAgICBjaGFubmVsOiBDaGFubmVsO1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgYWxsQ2hhbm5lbHM6IENoYW5uZWxbXSxcbiAgICBzZWxlY3Rpb25Db25maWc6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZ1xuKSB7XG4gICAgcmV0dXJuIGFsbENoYW5uZWxzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICBjID0+XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIClcbiAgICAgICAgLm1hcDxDaGFubmVsTGlzdEl0ZW0+KGMgPT4gKHtcbiAgICAgICAgICAgIGNoYW5uZWw6IHsgLi4uYyB9LFxuICAgICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgICAgICBjLnN1YnNjcmliZWQudmFsdWVPZigpIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgfSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbnMge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTeXN0ZW1FdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgcGFyc2VRdWVyeVN0cmluZyB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IFNhZmFyaVB1c2hNYW5hZ2VyIGZyb20gJy4vc2FmYXJpJztcbmltcG9ydCBXM2NQdXNoTWFuYWdlciBmcm9tICcuL3czYyc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgPSAnc3Vic2NyaWJlZCcgfCAndW5zdWJzY3JpYmVkJyB8ICdibG9ja2VkJztcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgICBXM0MgPSAzLFxuICAgIFNBRkFSSSA9IDRcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICAgIFBVU0ggPSAxXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE9wc01hbmFnZXIge1xuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+O1xuICAgIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKGN0eDogQ29udGV4dCk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBpc05hdGl2ZVByb21wdFNob3duKCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoUGF5bG9hZCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgICdrLm1lc3NhZ2UnOiB7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNIO1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICB1cmw6IHN0cmluZyB8IG51bGw7XG4gICAgaW1hZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgaWNvbjogc3RyaW5nIHwgbnVsbDtcbn1cblxubGV0IG1hbmFnZXI6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQdXNoT3BzTWFuYWdlcihcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+IHtcbiAgICBpZiAobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyID09PSAnc2FmYXJpJykge1xuICAgICAgICBtYW5hZ2VyID0gbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCkudGhlbihcbiAgICAgICAgICAgIGNmZyA9PiBuZXcgU2FmYXJpUHVzaE1hbmFnZXIoY2ZnKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9taXNlLnJlc29sdmUobmV3IFczY1B1c2hNYW5hZ2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW5hZ2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tPcGVuRnJvbVF1ZXJ5KGN0eDogQ29udGV4dCkge1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgIT09ICdzYWZhcmknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKCk7XG5cbiAgICBpZiAoIXBhcmFtcz8uWydrbmlkJ10pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQoY3R4LCBTeXN0ZW1FdmVudFR5cGUuTUVTU0FHRV9PUEVORUQsIHtcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSCxcbiAgICAgICAgaWQ6IE51bWJlcihwYXJhbXNbJ2tuaWQnXSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3QgeyAnay5tZXNzYWdlJzogXywgLi4udXNlckRhdGEgfSA9IHBheWxvYWQuZGF0YTtcblxuICAgIGNvbnN0IHB1c2g6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uID0ge1xuICAgICAgICBpZDogcGF5bG9hZC5kYXRhWydrLm1lc3NhZ2UnXS5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogcGF5bG9hZC50aXRsZSxcbiAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5tc2csXG4gICAgICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgICAgICB1cmw6IHBheWxvYWQudXJsID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaWNvblVybDogcGF5bG9hZC5pY29uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaW1hZ2VVcmw6IHBheWxvYWQuaW1hZ2UgPz8gdW5kZWZpbmVkXG4gICAgfTtcbiAgICByZXR1cm4gcHVzaDtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBTZXJ2aWNlLFxuICAgIFN5c3RlbUV2ZW50VHlwZSxcbiAgICB0cmFja0V2ZW50XG59IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGN5cmI1MywgZGVmZXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9wdXNoJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vc2FmYXJpLyR7Y3R4LmFwaUtleX1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5TQUZBUkksXG4gICAgICAgICAgICB0b2tlbjogcGVybS5kZXZpY2VUb2tlbixcbiAgICAgICAgICAgIGJ1bmRsZUlkOiBjZmcuc2FmYXJpUHVzaElkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaFRva2VuSGFzaCcsIHRva2VuSGFzaCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cblxuICAgIGFzeW5jIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU3lzdGVtRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MywgZ2V0QnJvd3Nlck5hbWUgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5jb25zdCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTID0gMTAwMDtcblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj4ge1xuICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpO1xuXG4gICAgaWYgKCF3b3JrZXJSZWcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG59XG5cbmZ1bmN0aW9uIGhhc2hTdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0LCBzdWI6IFB1c2hTdWJzY3JpcHRpb24pOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHtzdWIuZW5kcG9pbnR9YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFczY1B1c2hNYW5hZ2VyIGltcGxlbWVudHMgUHVzaE9wc01hbmFnZXIge1xuICAgIGFzeW5jIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLCBhYm9ydGluZy4uLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdQdXNoIG5vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViICYmICFoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcbiAgICAgICAgY29uc3QgZXhwaXJ5ID0gc3ViLmV4cGlyYXRpb25UaW1lO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZW5kcG9pbnRIYXNoICYmXG4gICAgICAgICAgICAoIWV4aXN0aW5nRXhwaXJ5IHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlczQyxcbiAgICAgICAgICAgIHRva2VuOiBzdWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgZXhwaXJ5KTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxpbXBvcnQoJy4nKS5QdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBzdWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFjdHguYXV0b1Jlc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IG5vdCBlbmFibGVkLCBhYm9ydGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICBgQXV0by1yZXN1YnNjcmliZTogcGVybWlzc2lvbiBub3QgZ3JhbnRlZCwgYWJvcnRpbmc6ICR7cGVybX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgbGV0IGV4aXN0aW5nU3ViSGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViKSB7XG4gICAgICAgICAgICBleGlzdGluZ1N1Ykhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgZXhpc3RpbmdTdWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGV4aXN0aW5nU3ViSGFzaCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdTdWIgJiZcbiAgICAgICAgICAgIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikgJiZcbiAgICAgICAgICAgIChleGlzdGluZ0V4cGlyeSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaWJlOiBhbHJlYWR5IGhhdmUgYSBub24tZXhwaXJlZCBlbmRwb2ludCBoYXNoIGZvciBzYW1lIHN1YiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBhdHRlbXB0aW5nIHJlc3Vic2NyaXB0aW9uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgYnJvd3Nlck5hbWUgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgICAgIGlmICgnY2hyb21lJyAhPT0gYnJvd3Nlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmx1ckV2ZW50RmlyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tGb3JCbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChibHVyRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhbmNlbEJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG4gICAgICAgICAgICAgICAgYmx1ckV2ZW50RmlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSwgQkxVUl9FVkVOVF9USU1FT1VUX01JTExJUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgeyBvbkRPTVJlYWR5IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdEZyYW1lQ29udGFpbmVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3RGcmFtZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBjb250YWluZXJzOiBSb290RnJhbWVDb250YWluZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gJ2t1bXVsb3MtdWktcm9vdCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuXG4gICAgICAgIG9uRE9NUmVhZHkoKCkgPT4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXIobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lci5lbGVtZW50LmlkID0gYGt1bXVsb3MtdWktcm9vdC0ke25hbWV9YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lci5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTYsIEpha2UgQXJjaGliYWxkXG5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuLy8gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICByZWFkb25seSBfZGJwOiBQcm9taXNlPElEQkRhdGFiYXNlPjtcblxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9ICdrZXl2YWwtc3RvcmUnLCByZWFkb25seSBzdG9yZU5hbWUgPSAna2V5dmFsJykge1xuICAgICAgICB0aGlzLl9kYnAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcGVucmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCAxKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShvcGVucmVxLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgc2V0dXA6IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgc3RvcmVcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5yZXEucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfd2l0aElEQlN0b3JlKFxuICAgICAgICB0eXBlOiBJREJUcmFuc2FjdGlvbk1vZGUsXG4gICAgICAgIGNhbGxiYWNrOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlKSA9PiB2b2lkXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYnAudGhlbihcbiAgICAgICAgICAgIGRiID0+XG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IHN0b3JlOiBTdG9yZTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFN0b3JlKCkge1xuICAgIGlmICghc3RvcmUpIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFR5cGU+KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTxUeXBlPiB7XG4gICAgbGV0IHJlcTogSURCUmVxdWVzdDtcbiAgICByZXR1cm4gc3RvcmVcbiAgICAgICAgLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xuICAgICAgICAgICAgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHJlcS5yZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgdmFsdWU6IGFueSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwoXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5cyhzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTxJREJWYWxpZEtleVtdPiB7XG4gICAgY29uc3Qga2V5czogSURCVmFsaWRLZXlbXSA9IFtdO1xuXG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgd291bGQgYmUgc3RvcmUuZ2V0QWxsS2V5cygpLCBidXQgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEVkZ2Ugb3IgU2FmYXJpLlxuICAgICAgICAgICAgLy8gQW5kIG9wZW5LZXlDdXJzb3IgaXNuJ3Qgc3VwcG9ydGVkIGJ5IFNhZmFyaS5cbiAgICAgICAgICAgIChzdG9yZS5vcGVuS2V5Q3Vyc29yIHx8IHN0b3JlLm9wZW5DdXJzb3IpLmNhbGwoXG4gICAgICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICAgICkub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3VsdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGtleXMucHVzaCh0aGlzLnJlc3VsdC5rZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0LmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBrZXlzKTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRSZW1pbmRlclxufSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge1xuICAgIFN0b3JlLFxuICAgIGRlbCBhcyBpZGJEZWwsXG4gICAgZ2V0IGFzIGlkYkdldCxcbiAgICBzZXQgYXMgaWRiU2V0XG59IGZyb20gJy4vaWRiLWtleXZhbCc7XG5cbmltcG9ydCB7IFB1c2hQYXlsb2FkIH0gZnJvbSAnLi4vcHVzaCc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCdrdW11bG9zJywgJ2RlZmF1bHQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUPihrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGlkYkdldChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldDxUIGV4dGVuZHMgYW55PihrZXk6IElEQlZhbGlkS2V5LCB2YWx1ZTogVCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJTZXQoa2V5LCB2YWx1ZSwgc3RvcmUpLnRoZW4oKCkgPT4gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKGtleTogSURCVmFsaWRLZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gaWRiRGVsKGtleSwgc3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdENvbmZpZyhjb25maWc6IENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPENvbmZpZ3VyYXRpb24+IHtcbiAgICByZXR1cm4gc2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnLCB7XG4gICAgICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbixcbiAgICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgICBzZWNyZXRLZXk6IGNvbmZpZy5zZWNyZXRLZXksXG4gICAgICAgIHZhcGlkUHVibGljS2V5OiBjb25maWcudmFwaWRQdWJsaWNLZXksXG4gICAgICAgIHNlcnZpY2VXb3JrZXJQYXRoOiBjb25maWcuc2VydmljZVdvcmtlclBhdGgsXG4gICAgICAgIGF1dG9SZXN1YnNjcmliZTogY29uZmlnLmF1dG9SZXN1YnNjcmliZSxcbiAgICAgICAgcHVzaFByb21wdHM6IGNvbmZpZy5wdXNoUHJvbXB0c1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdERETENvbmZpZyhcbiAgICBjb25maWc6IERkbFByb21wdENvbmZpZ1tdXG4pOiBQcm9taXNlPERkbFByb21wdENvbmZpZ1tdPiB7XG4gICAgcmV0dXJuIHNldDxEZGxQcm9tcHRDb25maWdbXT4oJ2RkbGNvbmZpZycsIGNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nLFxuICAgIHJlbWluZGVyOiBQcm9tcHRSZW1pbmRlclxuKSB7XG4gICAgcmV0dXJuIHNldChgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWAsIHJlbWluZGVyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBhd2FpdCBnZXQ8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZygpOiBQcm9taXNlPENvbnRleHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gZ2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnKS50aGVuKGNvbmZpZyA9PlxuICAgICAgICBjb25maWcgPyBuZXcgQ29udGV4dChjb25maWcpIDogdW5kZWZpbmVkXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RPcGVuZWRQdXNoUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogUHJvbWlzZTxQdXNoUGF5bG9hZD4ge1xuICAgIHJldHVybiBzZXQoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQoKTogUHJvbWlzZTxcbiAgICBQdXNoUGF5bG9hZCB8IHVuZGVmaW5lZFxuPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldDxQdXNoUGF5bG9hZD4oJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgYXdhaXQgZGVsKCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIHJldHVybiBwYXlsb2FkID8/IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFNES0ZlYXR1cmUgfSBmcm9tICcuL2luZGV4JztcblxudHlwZSBGZWF0dXJlRGVwZW5kZW5jeSA9IHN0cmluZyB8IG9iamVjdCB8IElEQkZhY3RvcnkgfCBQcm9taXNlQ29uc3RydWN0b3IgfCBOb3RpZmljYXRpb24gfCBQdXNoTWFuYWdlciB8IFNlcnZpY2VXb3JrZXJDb250YWluZXIgfCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb247XG5cbmNvbnN0IENPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVMgOiBGZWF0dXJlRGVwZW5kZW5jeVtdID0gW3R5cGVvZiBQcm9taXNlLCB0eXBlb2YgZmV0Y2gsIHR5cGVvZiBpbmRleGVkREJdO1xuXG5jb25zdCBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0sgOiB7W2tleSBpbiBTREtGZWF0dXJlXTogKCkgPT4gYm9vbGVhbn0gPSB7XG4gICAgJ3B1c2gnOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JQdXNoLFxuICAgICdkZGwnOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGxcbn07XG5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKDFlNykudG9TdHJpbmcoKSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKFxuICAgICAgICAvWzAxOF0vZyxcbiAgICAgICAgYyA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE51bWJlcihjKSBeXG4gICAgICAgICAgICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICZcbiAgICAgICAgICAgICAgICAgICAgKDE1ID4+IChOdW1iZXIoYykgLyA0KSkpXG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJyb3dzZXJzID0gWydlZGdlJywgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaSddO1xuXG4gICAgZm9yIChsZXQgYiBvZiBicm93c2Vycykge1xuICAgICAgICBpZiAodWEuaW5kZXhPZihiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZChzZGtGZWF0dXJlcz86IFNES0ZlYXR1cmVbXSkge1xuICAgIHNka0ZlYXR1cmVzID0gc2RrRmVhdHVyZXMgPz8gW107XG4gICAgaWYgKCFzZGtGZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgc2RrRmVhdHVyZXMucHVzaChTREtGZWF0dXJlLlBVU0gpO1xuICAgIH1cblxuICAgIHJldHVybiBzZGtGZWF0dXJlcy5maWx0ZXIoZiA9PiBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0tbZl0oKSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCgpIHtcbiAgICBjb25zdCBjb3JlRGVwZW5kZW5jaWVzID0gWy4uLkNPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVNdO1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKCdzYWZhcmknID09PSBicm93c2VyKSB7XG4gICAgICAgIGNvcmVEZXBlbmRlbmNpZXMucHVzaCh0eXBlb2Ygd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKFxuICAgICAgICAgICAgLi4uW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBOb3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBQdXNoTWFuYWdlclxuICAgICAgICAgICAgXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGwoKSB7XG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llczogRmVhdHVyZURlcGVuZGVuY3lbXSkge1xuICAgIHJldHVybiBjb3JlRGVwZW5kZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKHN1cHBvcnRlZDogYm9vbGVhbiwgZGVwZW5kZW5jeTogRmVhdHVyZURlcGVuZGVuY3kpID0+IHN1cHBvcnRlZCAmJiBkZXBlbmRlbmN5ICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgdHJ1ZVxuICAgICk7XG59XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL2ltdWxcbmNvbnN0IGltdWwgPVxuICAgIE1hdGguaW11bCB8fFxuICAgIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgYiB8PSAwOyAvLyBlbnN1cmUgdGhhdCBvcEIgaXMgYW4gaW50ZWdlci4gb3BBIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb2VyY2VkLlxuICAgICAgICAvLyBmbG9hdGluZyBwb2ludHMgZ2l2ZSB1cyA1MyBiaXRzIG9mIHByZWNpc2lvbiB0byB3b3JrIHdpdGggcGx1cyAxIHNpZ24gYml0XG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaGFuZGxlZCBmb3Igb3VyIGNvbnZpZW5lbmNlOlxuICAgICAgICAvLyAxLiAweDAwM2ZmZmZmIC8qb3BBICYgMHgwMDBmZmZmZiovICogMHg3ZmZmZmZmZiAvKm9wQiovID0gMHgxZmZmZmY3ZmMwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgdmFyIHJlc3VsdCA9IChhICYgMHgwMDNmZmZmZikgKiBiO1xuICAgICAgICAvLyAyLiBXZSBjYW4gcmVtb3ZlIGFuIGludGVnZXIgY29lcnNpb24gZnJvbSB0aGUgc3RhdGVtZW50IGFib3ZlIGJlY2F1c2U6XG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgKyAweGZmYzAwMDAwID0gMHgxZmZmZmZmZjgwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZmZmODAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgaWYgKGEgJiAweGZmYzAwMDAwIC8qIT09IDAqLykgcmVzdWx0ICs9ICgoYSAmIDB4ZmZjMDAwMDApICogYikgfCAwO1xuICAgICAgICByZXR1cm4gcmVzdWx0IHwgMDtcbiAgICB9O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODBcbmV4cG9ydCBmdW5jdGlvbiBjeXJiNTMoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKTogbnVtYmVyIHtcbiAgICBsZXQgaDEgPSAweGRlYWRiZWVmIF4gc2VlZCxcbiAgICAgICAgaDIgPSAweDQxYzZjZTU3IF4gc2VlZDtcbiAgICBmb3IgKGxldCBpID0gMCwgY2g7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaDEgPSBpbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IGltdWwoaDIgXiBjaCwgMTU5NzMzNDY3Nyk7XG4gICAgfVxuICAgIGgxID1cbiAgICAgICAgaW11bChoMSBeIChoMSA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDIgXiAoaDIgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgaDIgPVxuICAgICAgICBpbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICByZXR1cm4gNDI5NDk2NzI5NiAqICgyMDk3MTUxICYgaDIpICsgKGgxID4+PiAwKTtcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHsgbWV0aG9kOiAnR0VUJyB9XG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXhpc3RpbmdIZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzID8/IHt9O1xuXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogY3R4LmF1dGhIZWFkZXIsXG4gICAgICAgIC4uLmV4aXN0aW5nSGVhZGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhlZEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZTogbnVtYmVyLCBzdGF0dXNUZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYGF1dGhlZCBmZXRjaCBmYWlsZWQ6ICR7c3RhdHVzQ29kZX0sICR7c3RhdHVzVGV4dH1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaEpzb248VD4oXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9ucz86IFJlcXVlc3RJbml0XG4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIG9wdGlvbnMpLnRoZW4ociA9PiB7XG4gICAgICAgIGlmICghci5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhlZEZldGNoRXJyb3Ioci5zdGF0dXMsIHIuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gci5qc29uKCk7XG4gICAgfSk7XG59XG5cbi8vIEJhc2VkIG9uIHRoZSBhbHBoYWJldHMgaW4gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQ2NDggVGFibGVzIDEgJiAyXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VXJsRW5jb2RlKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGludHMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGNvbnN0IGJhc2U2NEVuY29kZWQgPSBidG9hKFxuICAgICAgICBpbnRzLnJlZHVjZSgoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksICcnKVxuICAgICk7XG4gICAgY29uc3QgdXJsVmFyaWFudCA9IGJhc2U2NEVuY29kZWRcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgICAgICAucmVwbGFjZSgvPS9nLCAnJyk7XG5cbiAgICByZXR1cm4gdXJsVmFyaWFudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcihcbiAgICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj4ge1xuICAgIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICdTZXJ2aWNlV29ya2VyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLCBhYm9ydGluZy4uLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIocGF0aCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyPFQ+KCkge1xuICAgIGNvbnN0IGRlZmVycmVkID0ge1xuICAgICAgICByZXNvbHZlOiAobnVsbCBhcyB1bmtub3duKSBhcyAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKG51bGwgYXMgdW5rbm93bikgYXMgKHJlYXNvbj86IGFueSkgPT4gdm9pZCxcbiAgICAgICAgcHJvbWlzZTogKG51bGwgYXMgdW5rbm93bikgYXMgUHJvbWlzZTxUPlxuICAgIH07XG5cbiAgICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhcbiAgICBxczogc3RyaW5nID0gbG9jYXRpb24uc2VhcmNoLFxuICAgIGV4Y2x1ZGVkUXVlcnlLZXlzOiBzdHJpbmdbXSA9IFtdXG4pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcXVlcnkgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocXMubGVuZ3RoID4gMCkge1xuICAgICAgICBxdWVyeSA9IHFzXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgLm1hcCh2YXJzID0+IHZhcnMuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgIC5tYXAocGFpcnMgPT4gcGFpcnMubWFwKGRlY29kZVVSSUNvbXBvbmVudCkpXG4gICAgICAgICAgICAuZmlsdGVyKHBhaXJzID0+IGV4Y2x1ZGVkUXVlcnlLZXlzLmluZGV4T2YocGFpcnNbMF0pID09PSAtMSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHEsIHBhaXIpID0+ICh7IC4uLnEsIFtwYWlyWzBdXTogcGFpclsxXSB9KSwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRE9NUmVhZHkoZm46ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL2FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxtb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDbGllbnRNZXNzYWdlVHlwZSxcbiAgICBGaW5nZXJwcmludENvbXBvbmVudHMsXG4gICAgSG9zdE1lc3NhZ2UsXG4gICAgSG9zdE1lc3NhZ2VUeXBlXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZWZPYmplY3QsIGNyZWF0ZVJlZiwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuY29uc3QgRlBfQ0FQVFVSRV9VUkwgPSAnaHR0cHM6Ly9wZC5hcHAuZGVsaXZlcnknO1xuXG5lbnVtIENhcHR1cmVTdGF0ZSB7XG4gICAgSURMRSxcbiAgICBDQVBUVVJJTkdcbn1cblxuaW50ZXJmYWNlIEZwQ2FwdHVyZVByb3BzIHtcbiAgICBvbkNhcHR1cmVkOiAoY29tcG9uZW50czogRmluZ2VycHJpbnRDb21wb25lbnRzKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRnBDYXB0dXJlU3RhdGUge1xuICAgIGlzUmVhZHk6IGJvb2xlYW47XG4gICAgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZwQ2FwdHVyZSBleHRlbmRzIENvbXBvbmVudDxcbiAgICBGcENhcHR1cmVQcm9wcyxcbiAgICBGcENhcHR1cmVTdGF0ZVxuPiB7XG4gICAgcHJpdmF0ZSBpRnJhbWVSZWY6IFJlZk9iamVjdDxIVE1MSUZyYW1lRWxlbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRnBDYXB0dXJlUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaUZyYW1lUmVmID0gY3JlYXRlUmVmPEhUTUxJRnJhbWVFbGVtZW50PigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1JlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgIGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlLklETEVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoXzogRnBDYXB0dXJlUHJvcHMsIG5leHRTdGF0ZTogRnBDYXB0dXJlU3RhdGUpIHtcbiAgICAgICAgY29uc3QgeyBpc1JlYWR5LCBjYXB0dXJlU3RhdGUgfSA9IG5leHRTdGF0ZTtcbiAgICAgICAgY29uc3QgcHJldkNhcHR1cmVTdGF0ZSA9IHRoaXMuc3RhdGUuY2FwdHVyZVN0YXRlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzUmVhZHkgJiZcbiAgICAgICAgICAgIGNhcHR1cmVTdGF0ZSA9PT0gQ2FwdHVyZVN0YXRlLkNBUFRVUklORyAmJlxuICAgICAgICAgICAgcHJldkNhcHR1cmVTdGF0ZSA9PT0gQ2FwdHVyZVN0YXRlLklETEVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogSG9zdE1lc3NhZ2VUeXBlLlJFUVVFU1RfRklOR0VSUFJJTlRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVlc3RGcCgpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGBGcENhcHVyZTogcmVxdWVzdGluZyBmcCBjYXB0dXJlYCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2FwdHVyZVN0YXRlICE9PSBDYXB0dXJlU3RhdGUuSURMRSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRnBDYXB0dXJlLnJlcXVlc3RGcDogY2FwdHVyZVN0YXRlIG5vdCBJRExFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuQ0FQVFVSSU5HIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25NZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICBgRnBDYXB1cmU6IG1lc3NhZ2UgJHtlLmRhdGEudHlwZX0gcmVjZWl2ZWQgZnJvbSAke2Uub3JpZ2lufWBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZS5kYXRhO1xuXG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gRlBfQ0FQVFVSRV9VUkwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENsaWVudE1lc3NhZ2VUeXBlLlJFQURZOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1JlYWR5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDbGllbnRNZXNzYWdlVHlwZS5GSU5HRVJQUklOVF9HRU5FUkFURUQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlLklETEUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FwdHVyZWQobWVzc2FnZS5kYXRhLmNvbXBvbmVudHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgZGlzcGF0Y2hNZXNzYWdlID0gKG1lc3NhZ2U6IEhvc3RNZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgIGBGcENhcHVyZTogZGlzcGF0Y2hpbmcgJHttZXNzYWdlLnR5cGV9IG1lc3NhZ2UgdG8gY2FwdHVyZSBmcmFtZWBcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB3aW5kb3cgPSB0aGlzLmlGcmFtZVJlZi5jdXJyZW50Py5jb250ZW50V2luZG93O1xuXG4gICAgICAgIGlmICghd2luZG93KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgRlBfQ0FQVFVSRV9VUkwpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLmlGcmFtZVJlZn1cbiAgICAgICAgICAgICAgICBzcmM9e0ZQX0NBUFRVUkVfVVJMfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFNlcnZpY2UsIGdldEluc3RhbGxJZCB9IGZyb20gJy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBGaW5nZXJwcmludENvbXBvbmVudHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGF1dGhlZEZldGNoIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kQ2xpY2tSZXF1ZXN0KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBiYW5uZXJVaWQ6IHN0cmluZyxcbiAgICBmaW5nZXJwcmludDogRmluZ2VycHJpbnRDb21wb25lbnRzXG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgdXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5EREwpfS92MS9iYW5uZXJzLyR7YmFubmVyVWlkfS90YXBzYDtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgd2ViSW5zdGFsbElkLFxuICAgICAgICAgICAgZmluZ2VycHJpbnRcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsIlxudHlwZSBNZXNzYWdlPFQsIEQgPSBuZXZlcj4gPVxuICAgIHwge1xuICAgICAgICB0eXBlOiBUO1xuICAgIH1cbiAgICB8IHsgdHlwZTogVDsgZGF0YTogRCB9O1xuXG5leHBvcnQgZW51bSBIb3N0TWVzc2FnZVR5cGUge1xuICAgIFJFUVVFU1RfRklOR0VSUFJJTlQgPSAnUkVRVUVTVF9GSU5HRVJQUklOVCcsXG59XG5cbmV4cG9ydCBlbnVtIENsaWVudE1lc3NhZ2VUeXBlIHtcbiAgICBSRUFEWSA9ICdSRUFEWScsXG4gICAgRklOR0VSUFJJTlRfR0VORVJBVEVEID0gJ0ZJTkdFUlBSSU5UX0dFTkVSQVRFRCcsXG59XG5cbmV4cG9ydCB0eXBlIEZpbmdlcnByaW50Q29tcG9uZW50cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmV4cG9ydCB0eXBlIEhvc3RNZXNzYWdlID0gTWVzc2FnZTxIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVD47XG5cbmV4cG9ydCB0eXBlIENsaWVudE1lc3NhZ2UgPVxuICAgIHwgTWVzc2FnZTxDbGllbnRNZXNzYWdlVHlwZS5SRUFEWT5cbiAgICB8IE1lc3NhZ2U8XG4gICAgICAgIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRCxcbiAgICAgICAgeyBjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMgfVxuICAgID47XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBQcm9wc09iamVjdCxcbiAgICBTREtGZWF0dXJlLFxuICAgIFVzZXJJZCxcbiAgICBhc3NlcnRDb25maWdWYWxpZCxcbiAgICBhc3NvY2lhdGVVc2VyLFxuICAgIHRyYWNrRXZlbnQsXG4gICAgdHJhY2tJbnN0YWxsRGV0YWlsc1xufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHsgV29ya2VyTWVzc2FnZVR5cGUsIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UgfSBmcm9tICcuL3dvcmtlci9tZXNzYWdpbmcnO1xuaW1wb3J0IHtcbiAgICBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCxcbiAgICBwZXJzaXN0Q29uZmlnXG59IGZyb20gJy4vY29yZS9zdG9yYWdlJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uLFxuICAgIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkLFxuICAgIHRyYWNrT3BlbkZyb21RdWVyeVxufSBmcm9tICcuL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBpc01vYmlsZSwgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIH0gZnJvbSAnLi9jb3JlL3V0aWxzJztcblxuaW1wb3J0IERkbE1hbmFnZXIgZnJvbSAnLi9wcm9tcHRzL2RkbC9tYW5hZ2VyJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXIgfSBmcm9tICcuL3Byb21wdHMnO1xuaW1wb3J0IFJvb3RGcmFtZSBmcm9tICcuL2NvcmUvcm9vdC1mcmFtZSc7XG5cbmludGVyZmFjZSBLdW11bG9zQ29uZmlnIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XG4gICAgb25QdXNoUmVjZWl2ZWQ/OiAocGF5bG9hZDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24pID0+IHZvaWQ7XG4gICAgb25QdXNoT3BlbmVkPzogKHBheWxvYWQ6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLdW11bG9zIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogS3VtdWxvc0NvbmZpZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlV29ya2VyUmVnPzogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb21wdE1hbmFnZXI/OiBQcm9tcHRNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGRsTWFuYWdlcj86IERkbE1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSByb290RnJhbWU6IFJvb3RGcmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChjb25maWcpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChjb25maWcpO1xuXG4gICAgICAgIHBlcnNpc3RDb25maWcoY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucm9vdEZyYW1lID0gbmV3IFJvb3RGcmFtZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUmVnID0gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9tcHRNYW5hZ2VyID0gbmV3IFByb21wdE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RnJhbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNGZWF0dXJlKFNES0ZlYXR1cmUuRERMKSkge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAnRGRsTWFuYWdlcjogRERMIGZlYXR1cmUgc3VwcG9ydCBvbmx5IGF2YWlsYWJsZSBvbiBtb2JpbGUgZGV2aWNlcy4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGRsTWFuYWdlciA9IG5ldyBEZGxNYW5hZ2VyKHRoaXMuY29udGV4dCwgdGhpcy5yb290RnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXNzb2NpYXRlVXNlcihpZGVudGlmaWVyOiBVc2VySWQsIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYXNzb2NpYXRlVXNlcih0aGlzLmNvbnRleHQsIGlkZW50aWZpZXIsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQodHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNrRXZlbnQodGhpcy5jb250ZXh0LCB0eXBlLCBwcm9wZXJ0aWVzKS50aGVuKF8gPT4gdm9pZCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1nciA9IGF3YWl0IGdldFB1c2hPcHNNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1nclxuICAgICAgICAgICAgLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnZ3JhbnRlZCcgIT09IHBlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1nci5wdXNoUmVnaXN0ZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Xb3JrZXJNZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGUuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZS5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25QdXNoUmVjZWl2ZWQ/LihwdXNoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgYXN5bmMgbWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk7XG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHVzaCA9IG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKHBheWxvYWQpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaE9wZW5lZD8uKHB1c2gpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBCZWxsUHJvbXB0Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMLCBpbnZlcnNlUG9zaXRpb24sIFByb21wdFVpUHJvcHMsIFRvb2x0aXAgfSBmcm9tIFwiLi4vdWlcIjtcblxuZXhwb3J0IGNsYXNzIEJlbGwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbXB0VWlQcm9wczxCZWxsUHJvbXB0Q29uZmlnPiwgbmV2ZXI+IHtcbiAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtcHJvbXB0LSR7dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9IGt1bXVsb3MtYmVsbC1jb250YWluZXIga3VtdWxvcy1iZWxsLWNvbnRhaW5lci0ke3RoaXMucHJvcHMuY29uZmlnLnBvc2l0aW9ufWA7XG4gICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgdG9vbHRpcFBvcyA9IGludmVyc2VQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgY29uc3QgYmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmJnO1xuICAgICAgY29uc3QgZmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmZnO1xuXG4gICAgICBjb25zdCBiZWxsU3R5bGUgPSB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGZnQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iZWxsLWlubmVyIGt1bXVsb3MtdG9vbHRpcC1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2JlbGxTdHlsZSBhcyBhbnl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS44OSAyIDIgMnptNi02di01YzAtMy4wNy0xLjY0LTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjYzIDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17ZmdDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcG9zaXRpb249e3Rvb2x0aXBQb3N9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcubGFiZWxzPy50b29sdGlwPy5zdWJzY3JpYmUgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBEZGxCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UG9zaXRpb24sXG4gICAgVWlBY3Rpb25UeXBlXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBSYXRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FwcC1yYXRpbmcnO1xuaW1wb3J0IERlZXBsaW5rQnV0dG9uIGZyb20gJy4vZGVlcGxpbmstYnV0dG9uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhbm5lckljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9LFxuICAgIGNsb3NlSWNvblN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgaGVpZ2h0OiAxMlxuICAgIH1cbn07XG5cbmNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2t1bXVsb3MtcHJvbXB0JyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29udGFpbmVyJyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29tcGFjdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0JyxcbiAgICAna3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0J1xuXTtcblxuY29uc3QgU0hPV19DT1BZX1RPQVNUX0RFTEFZID0gMTAwMDtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG4gICAgb25Db25maXJtOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6IChjb25maWc6IERkbEJhbm5lclByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBkaW1lbnNpb25zOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEZGxCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRGRsQmFubmVyUHJvcHMsXG4gICAge1xuICAgICAgICBzaG93Q29weVRvYXN0OiBib29sZWFuO1xuICAgIH1cbj4ge1xuICAgIHByaXZhdGUgY29udGFpbmVyUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERkbEJhbm5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZiA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2hvd0NvcHlUb2FzdDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaW1lbnNpb25zKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25maXJtID0gKGFjdGlvblR5cGU6IFVpQWN0aW9uVHlwZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93Q29weVRvYXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvcHlUb2FzdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29weVRvYXN0OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICB9LCBTSE9XX0NPUFlfVE9BU1RfREVMQVkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGdldENzc0NsYXNzZXMocHJvbXB0UG9zaXRpb246IFByb21wdFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAuLi5DTEFTU0VTLFxuICAgICAgICAgICAgYGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7cHJvbXB0UG9zaXRpb259YFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIFtQcm9tcHRQb3NpdGlvbi5UT1AsIFByb21wdFBvc2l0aW9uLkJPVFRPTV0uaW5jbHVkZXMocHJvbXB0UG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGBrdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtJHtwcm9tcHRQb3NpdGlvbn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24sIGxhYmVscywgY29sb3JzLCBpbWFnZVVybCwgYXBwUmF0aW5nIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgYWNjZXB0QWN0aW9uIH0gPSBsYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkZnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkZnLFxuICAgICAgICAgICAgcmF0aW5nRmdcbiAgICAgICAgfSA9IGNvbG9ycztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDc3NDbGFzc2VzKHBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWNsaW5lQWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY3Rpb25TdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogYWNjZXB0QWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYW5uZXJJY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuYmFubmVySWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzPXtjbGFzc2VzfSByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGVjbGluZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2FuY2VsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJiMxMDAwNjtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJJY29uU3R5bGV9IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItaWNvblwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYm9keVwiPntib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YXBwUmF0aW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdDb3VudD17YXBwUmF0aW5nLnJhdGluZ0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzPXthcHBSYXRpbmcucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyYXRpbmdGZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8RGVlcGxpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEFjdGlvbnM9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dDb3B5VG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy10b2FzdFwiPkxpbmsgQ29waWVkPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBEZGxVaUFjdGlvbnMsIFVpQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgY29weSBmcm9tICdjbGlwYm9hcmQtY29weSc7XG5cbmludGVyZmFjZSBEZWVwbGlua0J1dHRvblByb3BzIHtcbiAgICBzdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwcm9tcHRBY3Rpb25zOiBEZGxVaUFjdGlvbnM7XG4gICAgb25BY3Rpb246IChhY3Rpb25UeXBlOiBVaUFjdGlvblR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZXBsaW5rQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIERlZXBsaW5rQnV0dG9uUHJvcHMsXG4gICAgbmV2ZXJcbj4ge1xuICAgIHByaXZhdGUgaGFuZGxlQWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB1aUFjdGlvbnM6IHsgYWNjZXB0IH1cbiAgICAgICAgfSA9IHRoaXMucHJvcHMucHJvbXB0QWN0aW9ucztcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICBjb3B5KGFjY2VwdC5kZWVwTGlua1VybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuYWJsZSB0byBjYXB0dXJlIGRlZXBsaW5rIHVybCBmb3IgZGVmZXJyZWQgYXBwIHBpY2t1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgSGFuZGxlIERlZXBMaW5rIEFjdGlvbjogdW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlICcke2FjY2VwdFsndHlwZSddfSdgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzOiBjc3NDbGFzcywgdGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y3NzQ2xhc3N9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVBY3Rpb259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFNka0V2ZW50XG59IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHtcbiAgICBsb2FkRGRsQ29uZmlnLFxuICAgIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZVxufSBmcm9tICcuLi8uLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciB9IGZyb20gJy4uL3Byb21wdC1yZW1pbmRlcic7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBzZW5kQ2xpY2tSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZnAnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi4vdHJpZ2dlcnMnO1xuXG5leHBvcnQgZW51bSBEZGxNYW5hZ2VyU3RhdGUge1xuICAgIExPQURJTkcgPSAnbG9hZGluZycsXG4gICAgUkVBRFkgPSAncmVhZHknXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERkbE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRkbENvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuICAgIHByaXZhdGUgY29uZmlnPzogUmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPjtcbiAgICBwcml2YXRlIGFjdGl2ZUNvbmZpZ3M/OiBEZGxQcm9tcHRDb25maWdbXSA9IFtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJpZ2dlckZpbHRlcjogUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPERkbFByb21wdENvbmZpZz47XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRGRsTWFuYWdlcjogaW5pdGlhbGlzaW5nJyk7XG5cbiAgICAgICAgdGhpcy5kZGxDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdkZGwnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckZpbHRlciA9IG5ldyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8RGRsUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIChfOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29uZmlncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGNvbXBvbmVudHM/OiBGaW5nZXJwcmludENvbXBvbmVudHNcbiAgICApID0+IHtcbiAgICAgICAgaWYgKCEhY29tcG9uZW50cykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZENsaWNrUmVxdWVzdCh0aGlzLmNvbnRleHQsIHByb21wdC51dWlkLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZShwcm9tcHQudXVpZCk7XG5cbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG5cbiAgICAgICAgdGhpcy5wZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb24ocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNhbmNlbGxlZCA9IChwcm9tcHQ6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQpO1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoaWRlUHJvbXB0KHByb21wdDogRGRsUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ29uZmlncyA9IHRoaXMuYWN0aXZlQ29uZmlncz8uZmlsdGVyKFxuICAgICAgICAgICAgYyA9PiBjLnV1aWQgIT09IHByb21wdC51dWlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbihjb25maWc6IERkbFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb24gPSBjb25maWcudWlBY3Rpb25zLmFjY2VwdDtcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdEFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi51cmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi5kZWVwTGlua1VybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXIucGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uOiBVbnN1cHBvcnRlZCBhY2NlcHQgYWN0aW9uIHR5cGUsIHVuYWJsZSB0byBwZXJmb3JtIHJlZGlyZWN0aW9uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBEZGxNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIERkbE1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IERkbE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gYXdhaXQgdGhpcy5sb2FkQ29uZmlnKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5SRUFEWTpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHRoaXMuYWN0aXZlQ29uZmlncz8uc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghcHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5yZW5kZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKHByb21wdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlciA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdCBhcyBEZGxQcm9tcHRDb25maWd9XG4gICAgICAgICAgICAgICAgY29udGV4dD17dGhpcy5jb250ZXh0fVxuICAgICAgICAgICAgICAgIG9uQmFubmVyQ29uZmlybT17dGhpcy5vbkJhbm5lckNvbmZpcm19XG4gICAgICAgICAgICAgICAgb25CYW5uZXJDYW5jZWxsZWQ9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpIHtcbiAgICAgICAgcmVuZGVyKG51bGwsIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlQWN0aXZlQ29uZmlncygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZENvbmZpZ3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJGaWx0ZXIuZmlsdGVyUHJvbXB0cyhcbiAgICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hlZENvbmZpZ3MuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbmZpZ3M/LmluZGV4T2YoYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ3MucHVzaChjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlnKCk6IFByb21pc2U8XG4gICAgICAgIFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz4gfCB1bmRlZmluZWRcbiAgICA+IHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IGF3YWl0IGxvYWREZGxDb25maWcodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjb25maWdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlncy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPj4oKGJhZywgYykgPT4ge1xuICAgICAgICAgICAgYmFnW2MudXVpZF0gPSBjO1xuICAgICAgICAgICAgcmV0dXJuIGJhZztcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCwgRnJhZ21lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgRGRsUHJvbXB0Q29uZmlnLCBVaUFjdGlvblR5cGUsIENvbnRleHQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IERkbEJhbm5lciB9IGZyb20gJy4vZGRsLWJhbm5lcic7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7IFByb21wdFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgRnBDYXB0dXJlIGZyb20gJy4uLy4uL2ZwL2ZwLWNhcHR1cmUnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWc7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBvbkJhbm5lckNvbmZpcm06IChcbiAgICAgICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGZpbmdlcnByaW50Q29tcG9uZW50cz86IEZpbmdlcnByaW50Q29tcG9uZW50c1xuICAgICkgPT4gdm9pZDtcbiAgICBvbkJhbm5lckNhbmNlbGxlZDogKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgcmVxdWVzdEZwQ2FwdHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWkgZXh0ZW5kcyBDb21wb25lbnQ8VWlQcm9wcywgVWlTdGF0ZT4ge1xuICAgIHByaXZhdGUgc2l0ZU1hcmdpbj86IG51bWJlcjtcbiAgICBwcml2YXRlIHNpdGVUcmFuc2l0aW9uPzogc3RyaW5nO1xuICAgIHByaXZhdGUgZnBSZWY6IFJlZk9iamVjdDxGcENhcHR1cmU+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFVpUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXF1ZXN0RnBDYXB0dXJlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZnBSZWYgPSBjcmVhdGVSZWY8RnBDYXB0dXJlPigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EaW1lbnNpb25zID0gKF9iYW5uZXJXaWR0aDogbnVtYmVyLCBiYW5uZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2l0ZU1hcmdpbiA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICAgICAgPyAnbWFyZ2luLXRvcCdcbiAgICAgICAgICAgICAgICAgICAgOiAnbWFyZ2luLWJvdHRvbSdcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zaXRlVHJhbnNpdGlvbiA9IGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLkJPVFRPTSkge1xuICAgICAgICAgICAgYmFubmVySGVpZ2h0ICs9IDIwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gYmFubmVySGVpZ2h0ICsgdGhpcy5zaXRlTWFyZ2luO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4zNzVzIGVhc2UgMHMnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW1xuICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgPyAnbWFyZ2luVG9wJ1xuICAgICAgICAgICAgICAgIDogJ21hcmdpbkJvdHRvbSdcbiAgICAgICAgXSA9IGAke29mZnNldH1weGA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDb25maXJtID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvbiA9IGNvbmZpZy51aUFjdGlvbnMuYWNjZXB0O1xuXG4gICAgICAgIHN3aXRjaCAoYWNjZXB0QWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFOlxuICAgICAgICAgICAgICAgIHRoaXMuZnBSZWYuY3VycmVudD8ucmVxdWVzdEZwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VpLm9uQmFubmVyQ29uZmlybTogVW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlLCB1bmFibGUgdG8gY29uZmlybSBiYW5uZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ2FuY2VsbGVkID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDYW5jZWxsZWQoY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkNhcHR1cmVGcCA9IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJhbm5lckNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcsIGNvbXBvbmVudHMpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9keVN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc2l0ZVRyYW5zaXRpb24gPz8gJyc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtcbiAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgID8gJ21hcmdpblRvcCdcbiAgICAgICAgICAgICAgICA6ICdtYXJnaW5Cb3R0b20nXG4gICAgICAgIF0gPSB0aGlzLnNpdGVNYXJnaW4gPyBgJHt0aGlzLnNpdGVNYXJnaW59cHhgIDogJyc7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPERkbEJhbm5lclxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5vbkJhbm5lckNhbmNlbGxlZH1cbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9ucz17dGhpcy5vbkRpbWVuc2lvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RnBDYXB0dXJlIHJlZj17dGhpcy5mcFJlZn0gb25DYXB0dXJlZD17dGhpcy5vbkNhcHR1cmVGcH0gLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge1xuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbHNEaWFsb2dQcm9wcyB7XG4gICAgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcbiAgICBvbkNvbmZpcm06IChjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsc0RpYWxvZ1Byb3BzLFxuICAgIENoYW5uZWxEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxzRGlhbG9nUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnMpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckRpYWxvZyA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHthY3Rpb24uZGlhbG9nQ29uZmlnLnBvc2l0aW9ufWA7XG5cbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb25maXJtQWN0aW9uIH0gPSBhY3Rpb24uZGlhbG9nQ29uZmlnLmxhYmVscztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5jb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uZmlybUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogY29uZmlybUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpQ29udGV4dD8ucGxhdGZvcm1Db25maWcuaWNvblVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvblwiXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29uZmlybUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJEaWFsb2d9PC9VSUNvbnRleHQuQ29uc3VtZXI+O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBDaGFubmVsTGlzdEl0ZW0gfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0UHJvcHMge1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXTtcbiAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkOiAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbExpc3RTdGF0ZSB7XG4gICAgY2hhbm5lbHM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIENoYW5uZWxMaXN0UHJvcHMsXG4gICAgQ2hhbm5lbExpc3RTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxMaXN0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsczogWy4uLnRoaXMucHJvcHMuY2hhbm5lbExpc3RdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkKHRoaXMuc3RhdGUuY2hhbm5lbHMpO1xuICAgIH1cblxuICAgIG9uQ2hhbm5lbENoZWNrQ2hhbmdlKGNoYW5uZWxVdWlkOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3RhdGUuY2hhbm5lbHMuZmluZChcbiAgICAgICAgICAgIGMgPT4gYy5jaGFubmVsLnV1aWQgPT09IGNoYW5uZWxVdWlkXG4gICAgICAgICk7XG4gICAgICAgIGl0ZW0hLmNoZWNrZWQgPSBjaGVja2VkO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnN0YXRlLmNoYW5uZWxzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNoYW5uZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoYW5uZWwudXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hhbm5lbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGguSlNYLlRhcmdldGVkRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5uZWxDaGVja0NoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbm5lbC51dWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUHJvbXB0VWlQcm9wcyB9IGZyb20gJy4uL3VpJztcbmltcG9ydCB7XG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nU3RhdGUge1xuICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBQcm9tcHRVaVByb3BzPEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnPixcbiAgICBEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb21wdFVpUHJvcHM8QWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc+KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgb25SZXF1ZXN0Q2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWQodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckFsZXJ0ID0gKHVpQ29udGV4dD86IFVJQ29udGV4dFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHVpQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLXByb21wdC0ke3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfSBrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRhaW5lciBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke2NvbmZpZy5wb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgZGVjbGluZUFjdGlvbiwgYWNjZXB0QWN0aW9uIH0gPVxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUXG4gICAgICAgICAgICAgICAgPyBjb25maWcubGFiZWxzLmFsZXJ0XG4gICAgICAgICAgICAgICAgOiBjb25maWcubGFiZWxzLmJhbm5lcjtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25GZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmNvbG9ycy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmNvbG9ycy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVjbGluZUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGFjY2VwdEFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvbmZpZy5pbWFnZVVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7Y29uZmlnLmltYWdlVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0taWNvbmB9XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWhlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYm9keWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q9e2dldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0Q2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FjY2VwdEFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VUlDb250ZXh0LkNvbnN1bWVyPnt0aGlzLnJlbmRlckFsZXJ0fTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgU2RrRXZlbnQsXG4gICAgUGxhdGZvcm1Db25maWcsXG4gICAgQ2hhbm5lbFN1YkFjdGlvbixcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24sXG4gICAgQ2hhbm5lbExpc3RJdGVtLFxuICAgIFB1c2hQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlncyxcbiAgICBQcm9tcHRDb25maWdcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgZ2V0UHVzaE9wc01hbmFnZXIsIHtcbiAgICBQdXNoT3BzTWFuYWdlcixcbiAgICBQdXNoU3Vic2NyaXB0aW9uU3RhdGVcbn0gZnJvbSAnLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcbmltcG9ydCBLdW11bG9zIGZyb20gJy4uJztcbmltcG9ydCBVaSBmcm9tICcuL3VpJztcbmltcG9ydCB7IFByb21wdFRyaWdnZXJFdmVudEZpbHRlciB9IGZyb20gJy4vdHJpZ2dlcnMnO1xuaW1wb3J0IHsgVUlDb250ZXh0IH0gZnJvbSAnLi91aS1jb250ZXh0JztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvcmUvY29uZmlnJztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCB7IG1heWJlUGVyc2lzdFJlbWluZGVyIH0gZnJvbSAnLi9wcm9tcHQtcmVtaW5kZXInO1xuaW1wb3J0IHsgZGVmZXJQcm9tcHRBY3RpdmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFByb21wdE1hbmFnZXJTdGF0ZSA9XG4gICAgfCAnbG9hZGluZydcbiAgICB8ICdyZWFkeSdcbiAgICB8ICdyZXF1ZXN0aW5nJ1xuICAgIHwgJ3JlcXVlc3Rpbmctc2lsZW50J1xuICAgIHwgJ3JlcXVlc3Rpbmctc2lsZW50LWRpc21pc3NlZCdcbiAgICB8ICdwb3N0YWN0aW9uJztcblxuLy8gbG9hZGluZyAtPiByZWFkeVxuLy8gcmVhZHkgLT4gcmVxdWVzdGluZ1xuLy8gcmVxdWVzdGluZyAtPiByZWFkeVxuLy8gcmVhZHkgLT4gcG9zdGFjdGlvblxuLy8gcG9zdGFjdGlvbiAtPiByZWFkeVxuXG5leHBvcnQgY2xhc3MgUHJvbXB0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBrdW11bG9zQ2xpZW50OiBLdW11bG9zO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHB1c2hDb250YWluZXI6IFJvb3RGcmFtZUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyaWdnZXJGaWx0ZXI6IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxQdXNoUHJvbXB0Q29uZmlnPjtcblxuICAgIHByaXZhdGUgc3RhdGU/OiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25TdGF0ZT86IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcml2YXRlIHByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz47XG4gICAgcHJpdmF0ZSBhY3RpdmVQcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW107XG4gICAgcHJpdmF0ZSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PzogUHVzaFByb21wdENvbmZpZztcbiAgICBwcml2YXRlIHB1c2hPcHNNYW5hZ2VyPzogUHVzaE9wc01hbmFnZXI7XG4gICAgcHJpdmF0ZSBjaGFubmVsczogQ2hhbm5lbFtdO1xuICAgIHByaXZhdGUgdWk/OiBVaTtcbiAgICBwcml2YXRlIHBsYXRmb3JtQ29uZmlnPzogUGxhdGZvcm1Db25maWc7XG4gICAgcHJpdmF0ZSBjdXJyZW50UG9zdEFjdGlvbj86IFByb21wdEFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogS3VtdWxvcywgY3R4OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICB0aGlzLnByb21wdHMgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzID0gW107XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRmlsdGVyID0gbmV3IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxQdXNoUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIHRoaXMub25FdmVudFRyYWNrZWRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnB1c2hDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdwdXNoJyk7XG4gICAgICAgIHRoaXMua3VtdWxvc0NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2xvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXZlbnRUcmFja2VkID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnUHJvbXB0IHRyaWdnZXIgc2F3IGV2ZW50JywgZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09ICdyZWFkeScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnTm90IHJlYWR5LCB3YWl0aW5nIG9uIHF1ZXVlJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2YWx1YXRlVHJpZ2dlcnMoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZURlZmVycmVkUHJvbXB0ID0gKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVQcm9tcHQocHJvbXB0IGFzIFB1c2hQcm9tcHRDb25maWcpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9IGFzeW5jIChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5zdGF0ZSB8fCAncmVxdWVzdGluZy1zaWxlbnQnID09PSB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSBwcm9tcHQ7XG5cbiAgICAgICAgdGhpcy5wdXNoT3BzTWFuYWdlcj8uaXNOYXRpdmVQcm9tcHRTaG93bigpLnRoZW4oaXNOYXRpdmVQcm9tcHRTaG93biA9PiB7XG4gICAgICAgICAgICBpZiAoaXNOYXRpdmVQcm9tcHRTaG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlcXVlc3RpbmcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVxdWVzdGluZy1zaWxlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXI/LnJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0ID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGFjdGlvbjogUHJvbXB0QWN0aW9uXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnICE9PSBhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ID0gcHJvbXB0O1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3N0QWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3Bvc3RhY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblByb21wdEFjY2VwdGVkID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uUmVxdWVzdE5hdGl2ZVByb21wdChwcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICdzdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVQcm9tcHRBY3Rpb25zKHByb21wdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVVzZXJDaGFubmVsU2VsZWN0aW9uKGNoYW5uZWxTZWxlY3Rpb25zKTtcblxuICAgICAgICAgICAgdGhpcy51aT8uc2hvd1RvYXN0KHByb21wdC5sYWJlbHM/LnRoYW5rc0ZvclN1YnNjcmliaW5nISk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblBvc3RBY3Rpb25Db25maXJtID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgdGhpcy5oaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qcm9tcHREZWNsaW5lZCA9IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0KTtcbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25EaXNtaXNzT3ZlcmxheSA9IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlcXVlc3Rpbmctc2lsZW50LWRpc21pc3NlZCcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uU3RhdGUgfSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG5cbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvblN0YXRlICE9PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzLmZvckVhY2gocCA9PiB0aGlzLmhpZGVQcm9tcHQocCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVQcm9tcHRBY3Rpb25zKHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBpZiAoIXByb21wdC5hY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ1dpbGwgaGFuZGxlIGFjdGlvbnM6ICcsIHByb21wdC5hY3Rpb25zKTtcblxuICAgICAgICBjb25zdCBjaGFubmVsU3ViTWdyID0gdGhpcy5rdW11bG9zQ2xpZW50LmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCBjaGFubmVsU3ViTWdyLmxpc3RDaGFubmVscygpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMocHJvbXB0KTtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMocHJvbXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxTdWJBY3Rpb25zKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWdcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8Q2hhbm5lbFN1YkFjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgQ2hhbm5lbFN1YkFjdGlvbiA9PlxuICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHV1aWRzVG9TdWJzY3JpYmUgPSBhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbHRvU3ViID0gdGhpcy5jaGFubmVscy5maW5kKFxuICAgICAgICAgICAgICAgICAgICBjID0+IGMudXVpZCA9PT0gYWN0aW9uLmNoYW5uZWxVdWlkICYmIGMuc3Vic2NyaWJlZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbHRvU3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gc3Vic2NyaWJlIHRvIGNoYW5uZWwgJyR7YWN0aW9uLmNoYW5uZWxVdWlkfScgYXMgaXQgZG9lcyBub3QgZXhpc3RgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24uY2hhbm5lbFV1aWQpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMua3VtdWxvc0NsaWVudFxuICAgICAgICAgICAgLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXVpZHNUb1N1YnNjcmliZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9zdCBhY3Rpb25zIG9ubHkgYXBwbHkgdG8gYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25zXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8VXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24+KFxuICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjdXJyZW50bHkgb25seSBleHBlY3RpbmcgMSBjb25maWd1cmVkIGB1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZ2AgYWN0aW9uXG4gICAgICAgIHRoaXMub25SZXF1ZXN0UG9zdEFjdGlvblByb21wdChwcm9tcHQsIGFjdGlvbnNbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbFNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmt1bXVsb3NDbGllbnQuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiAhY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci51bnN1YnNjcmliZSh1bnN1YnNjcmliZXMpO1xuXG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiBjcy5jaGVja2VkKVxuICAgICAgICAgICAgLm1hcChjcyA9PiBjcy5jaGFubmVsLnV1aWQpO1xuICAgICAgICBhd2FpdCBjaGFubmVsU3ViTWdyLnN1YnNjcmliZShzdWJzY3JpYmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvblN0YXRlIHx8ICF0aGlzLnN0YXRlIHx8ICF0aGlzLnBsYXRmb3JtQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VUlDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1Db25maWc6IHRoaXMucGxhdGZvcm1Db25maWcsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0OiB0aGlzLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyID0+ICh0aGlzLnVpID0gcil9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdHM9e3RoaXMuYWN0aXZlUHJvbXB0c31cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9zdEFjdGlvbkNvbmZpcm09e3RoaXMub25Qb3N0QWN0aW9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzT3ZlcmxheT17dGhpcy5vbkRpc21pc3NPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PXt0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uPXt0aGlzLmN1cnJlbnRQb3N0QWN0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1VJQ29udGV4dC5Qcm92aWRlcj4sXG4gICAgICAgICAgICB0aGlzLnB1c2hDb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZXZhbHVhdGVUcmlnZ2VycygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLnByb21wdHMsXG4gICAgICAgICAgICBwcm9tcHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0cyhtYXRjaGVkUHJvbXB0cyk7XG4gICAgfVxuXG4gICAgcHJvbXB0QWN0aW9uTmVlZHNUYWtlbihwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxzVG9TdWIgPVxuICAgICAgICAgICAgcHJvbXB0LmFjdGlvbnNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIENoYW5uZWxTdWJBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4gYS5jaGFubmVsVXVpZCkgPz8gW107XG4gICAgICAgIGNvbnN0IG5lZWRzVG9TdWIgPVxuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYyA9PiBjaGFubmVsc1RvU3ViLmluY2x1ZGVzKGMudXVpZCkgJiYgIWMuc3Vic2NyaWJlZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmIChuZWVkc1RvU3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE8gaXMgaWRlbnRpdHkgb2sgZm9yIGNvbXBhcmlzb24gaGVyZS4uLiBtaWdodCBuZWVkIHRvIHVzZSBJRFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMucHVzaChwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHRzKHByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1dpbGwgYWN0aXZhdGUgcHJvbXB0czogJywgcHJvbXB0cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9tcHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5hY3RpdmF0ZURlZmVycmVkUHJvbXB0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1NldHRpbmcgcHJvbXB0IG1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm9uRW50ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25FbnRlcihzdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXIgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXIuaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcm9tcHRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMua3VtdWxvc0NsaWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKVxuICAgICAgICAgICAgICAgICAgICAubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8uZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0YWN0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3RpbmcnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUHJvbXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wbGF0Zm9ybUNvbmZpZy5wdWJsaWNLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb21wdHMgY29uZmlnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4udGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdHMgPSB7IC4uLih0aGlzLnBsYXRmb3JtQ29uZmlnLnByb21wdHMgfHwge30pIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLnByb21wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5uZWxPcCA9IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRzW2lkXS5hY3Rpb25zPy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gYS50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgICk/Lmxlbmd0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGhhc0NoYW5uZWxPcCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCB0aGlzLmt1bXVsb3NDbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCwgSlNYIH0gZnJvbSAncHJlYWN0JztcblxuaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrUHJvcHMge1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIGJsdXJDbGFzcz86IHN0cmluZztcbiAgICBzdHlsZT86IEpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tTdGF0ZSB7XG4gICAgYmx1ckNsYXNzZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZE1hc2sgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQmFja2dyb3VuZE1hc2tQcm9wcyxcbiAgICBCYWNrZ3JvdW5kTWFza1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFja2dyb3VuZE1hc2tQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYmx1ckNsYXNzZXMgPSB0aGlzLnByb3BzLmJsdXJDbGFzcz8uc3BsaXQoJyAnKSA/PyBbXTtcbiAgICAgICAgYmx1ckNsYXNzZXMucHVzaCgna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1cicpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBibHVyQ2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZUJsdXJTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBibHVyQ2xhc3NlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBibHVyQ2xhc3Nlcy5mb3JFYWNoKGJsdXJDbGFzcyA9PiB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGJsdXJDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYmx1ckNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYmx1ckNsYXNzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lcywgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2snXTtcblxuICAgICAgICBpZiAoISFjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgUHVzaFByb21wdENvbmZpZywgUG9pbnQsIERpbWVuc2lvbnMgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgaXNNb2JpbGUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEJhY2tncm91bmRNYXNrIH0gZnJvbSAnLi9iYWNrZ3JvdW5kLW1hc2snO1xuaW1wb3J0IHsgU3ZnUG9pbnRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3ZnLXBvaW50ZXInO1xuXG5jb25zdCBsb2NhbFN0eWxlcyA9IHtcbiAgICBtYXNrOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH1cbn07XG5cbmNvbnN0IFBPSU5URVJfU1RBUlRfT0ZGU0VUOiBQb2ludCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDUwXG59O1xuXG5jb25zdCBQT0lOVEVSX0VORF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IC0xNzUsXG4gICAgeTogNzVcbn07XG5cbmNvbnN0IENPTlRST0xfUE9JTlRfT0ZGU0VUOiBQb2ludCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDUwMFxufTtcblxuaW50ZXJmYWNlIE92ZXJsYXlTaWxlbnRQcm9wcyB7XG4gICAgcHJvbXB0U3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgb25EaXNtaXNzPzogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE92ZXJsYXlTaWxlbnRTdGF0ZSB7XG4gICAgd2luZG93RGltZW5zaW9uczogRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlTaWxlbnQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgT3ZlcmxheVNpbGVudFByb3BzLFxuICAgIE92ZXJsYXlTaWxlbnRTdGF0ZVxuPiB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbmRvd0RpbWVuc2lvbnM6IHsgd2lkdGgsIGhlaWdodCB9IH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm9tcHRTdGF0ZSwgcHJvbXB0LCBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJvbXB0IHx8XG4gICAgICAgICAgICBwcm9tcHRTdGF0ZSAhPT0gJ3JlcXVlc3Rpbmctc2lsZW50JyB8fFxuICAgICAgICAgICAgIXByb21wdC5zaWxlbnRPdmVybGF5IHx8XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBwcm9tcHQuc2lsZW50T3ZlcmxheTtcbiAgICAgICAgY29uc3QgYm9keUxhYmVsID0gb3ZlcmxheS5sYWJlbHMuYm9keTtcbiAgICAgICAgY29uc3QgY29sb3IgPSBvdmVybGF5LmNvbG9ycy50ZXh0O1xuXG4gICAgICAgIGNvbnN0IG1hc2tTdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLmxvY2FsU3R5bGVzLm1hc2ssXG4gICAgICAgICAgICBjb2xvclxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBibHVyQ2xhc3M9XCJrdW11bG9zLW92ZXJsYXktYmx1clwiXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLW92ZXJsYXkga3VtdWxvcy1vdmVybGF5LSR7Z2V0QnJvd3Nlck5hbWUoKX1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXttYXNrU3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJhY2tncm91bmRNYXNrQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9pbnRlcihjb2xvcil9XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJrdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dFwiPntib2R5TGFiZWx9PC9wPlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclBvaW50ZXIoY29sb3I6IHN0cmluZykge1xuICAgICAgICBjb25zdCB7IHdpbmRvd0RpbWVuc2lvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgcG9pbnRlclN0YXJ0OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHdpbmRvd0RpbWVuc2lvbnMud2lkdGggLyAyICsgUE9JTlRFUl9TVEFSVF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IHdpbmRvd0RpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIFBPSU5URVJfU1RBUlRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwb2ludGVyRW5kOiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHdpbmRvd0RpbWVuc2lvbnMud2lkdGggKyBQT0lOVEVSX0VORF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IFBPSU5URVJfRU5EX09GRlNFVC55XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29udHJvbFBvaW50OiBQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHBvaW50ZXJFbmQueCArIENPTlRST0xfUE9JTlRfT0ZGU0VULngsXG4gICAgICAgICAgICB5OiBwb2ludGVyU3RhcnQueSArIENPTlRST0xfUE9JTlRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgPFN2Z1BvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgYXJlYT17d2luZG93RGltZW5zaW9uc31cbiAgICAgICAgICAgICAgICAgICAgcXVhZEN1cnZlUG9pbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwMTogcG9pbnRlclN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcDI6IGNvbnRyb2xQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAzOiBwb2ludGVyRW5kXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJhY2tncm91bmRNYXNrQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvbXB0LCBvbkRpc21pc3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFwcm9tcHQgfHwgIW9uRGlzbWlzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb25EaXNtaXNzKHByb21wdCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IFB1c2hQcm9tcHRDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL2JhY2tncm91bmQtbWFzayc7XG5cbmludGVyZmFjZSBPdmVybGF5UHJvcHMge1xuICAgIHByb21wdFN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcHJvbXB0PzogUHVzaFByb21wdENvbmZpZztcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudDxPdmVybGF5UHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZycgfHxcbiAgICAgICAgICAgICFwcm9tcHQub3ZlcmxheSB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0Lm92ZXJsYXk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc2hhZGUsXG4gICAgICAgICAgICBjb2xvcjogb3ZlcmxheS5jb2xvcnMudGV4dFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgLy8gbWFpbnRhaW5zIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBleGlzdGluZyBibHVyIGNsYXNzIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB3YXMgYmVpbmcgYXBwbGllZCBkaXJlY3RseSBieSB0aGlzIGNvbXBvbmVudCBwcmV2aW91c2x5XG4gICAgICAgICAgICAgICAgYmx1ckNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWJsdXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LXN0cmlwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc3RyaXAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NCAzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e292ZXJsYXkuY29sb3JzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjIuNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDEyLjU3LDExLjEyXG4gICAgICAgICAgIEMgMTIuNTcsMTEuMTIgNi44NCwyMC44MiA0LjEzLDIxLjAxXG4gICAgICAgICAgICAgMS40MiwyMS4yMSAyMC43MSwyOC42NyAyNi42MiwyOC42N00gNC4yMywyMS4wMVxuICAgICAgICAgICBDIDQuMjMsMjEuMDEgNTMuOTYsMTQuOTEgNjAuNjUsMy40N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkuaWNvblVybCAmJiA8aW1nIHNyYz17b3ZlcmxheS5pY29uVXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57b3ZlcmxheS5sYWJlbHMuaGVhZGluZ308L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvdmVybGF5LmxhYmVscy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5saW5rcz8ubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwZXJzaXN0UHJvbXB0UmVtaW5kZXIsIGdldFByb21wdFJlbWluZGVyIH0gZnJvbSAnLi4vY29yZS9zdG9yYWdlJztcblxuaW1wb3J0IHtcbiAgICBQcm9tcHRVaUFjdGlvbnMsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnLFxuICAgIFJlbWluZGVyVGltZVVuaXRcbn0gZnJvbSAnLi4vY29yZSc7XG5cbmNvbnN0IFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVMgPSB7XG4gICAgW1JlbWluZGVyVGltZVVuaXQuSE9VUlNdOiAxMDAwICogNjAgKiA2MCxcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5EQVlTXTogMTAwMCAqIDYwICogNjAgKiAyNFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdDogUHJvbXB0Q29uZmlnKSB7XG4gICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdCBhcyBQcm9tcHRVaUFjdGlvbnM7XG5cbiAgICBpZiAoIXVpQWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB0eXBlIH0gPSB1aUFjdGlvbnMuZGVjbGluZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5SRU1JTkQ6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCB7XG4gICAgICAgICAgICAgICAgZGVjbGluZWRPbjogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRFQ0xJTkU6XG4gICAgICAgICAgICByZXR1cm4gcGVyc2lzdFByb21wdFJlbWluZGVyKHByb21wdC51dWlkLCAnc3VwcHJlc3NlZCcpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgVW5zdXBwb3J0ZWQgZGVjbGluZSBhY3Rpb24gdHlwZSAke3R5cGV9IHN1cHBvcnRlZCBmb3IgcHJvbXB0ICR7cHJvbXB0LnV1aWR9LCBmYWxsIGJhY2sgdG8gYWx3YXlzIHNob3cgdGhpcyBwcm9tcHQgd2hlbiBkZWNsaW5lZGBcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNQcm9tcHRTdXBwcmVzc2VkKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZW1pbmRlciA9IGF3YWl0IGdldFByb21wdFJlbWluZGVyKHByb21wdC51dWlkKTtcblxuICAgIGlmICghcmVtaW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnc3VwcHJlc3NlZCcgPT09IHJlbWluZGVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghKCd1aUFjdGlvbnMnIGluIHByb21wdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdWlBY3Rpb25zIH0gPSBwcm9tcHQ7XG5cbiAgICBpZiAodWlBY3Rpb25zLmRlY2xpbmUudHlwZSAhPT0gVWlBY3Rpb25UeXBlLlJFTUlORCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFoYXNQcm9tcHRSZW1pbmRlckVsYXBzZWQoXG4gICAgICAgIHJlbWluZGVyLmRlY2xpbmVkT24sXG4gICAgICAgIHVpQWN0aW9ucy5kZWNsaW5lLmRlbGF5XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb21wdFJlbWluZGVyRWxhcHNlZChcbiAgICBkZWNsaW5lZE9uTWlsbGlzOiBudW1iZXIsXG4gICAgZGVsYXlDb25maWc6IFByb21wdFJlbWluZGVyRGVsYXlDb25maWdcbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIERhdGUubm93KCkgLSBkZWNsaW5lZE9uTWlsbGlzID5cbiAgICAgICAgUkVNSU5ERVJfVElNRV9VTklUX1RPX01JTExJU1tkZWxheUNvbmZpZy50aW1lVW5pdF0gKlxuICAgICAgICAgICAgZGVsYXlDb25maWcuZHVyYXRpb25cbiAgICApO1xufVxuIiwiaW1wb3J0IHtcbiAgICBGaWx0ZXJWYWx1ZSxcbiAgICBLdW11bG9zRXZlbnQsXG4gICAgUHJvcEZpbHRlcixcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlncyxcbiAgICBDb250ZXh0LFxuICAgIFNka0V2ZW50LFxuICAgIEV2ZW50UGF5bG9hZFxufSBmcm9tICcuLi9jb3JlJztcblxuaW1wb3J0IHsgZXNjYXBlUmVnRXhwIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBpc1Byb21wdFN1cHByZXNzZWQgfSBmcm9tICcuL3Byb21wdC1yZW1pbmRlcic7XG5cbmZ1bmN0aW9uIHByb3BJbihmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbHRlclZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRlc3RzID0gZmlsdGVyVmFsdWUubWFwKHYgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IGBeJHtlc2NhcGVSZWdFeHAodikucmVwbGFjZSgvXFxcXFxcKi9nLCAnLionKX0kYDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmaWx0ZXJNYXRjaGVkID0gdGVzdHMucmVkdWNlKFxuICAgICAgICAgICAgKG1hdGNoZWQsIG1hdGNoZXIpID0+IG1hdGNoZWQgfHwgbWF0Y2hlci50ZXN0KFN0cmluZyhwcm9wVmFsdWUpKSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlck1hdGNoZWQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZmlsdGVyVmFsdWUuaW5kZXhPZihwcm9wVmFsdWUgYXMgYW55KSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJvcEVxKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmlsdGVyVmFsdWUgPT0gcHJvcFZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wR3QoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPiBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0ZShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEx0KGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlIDwgZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BMdGUoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPD0gZmlsdGVyVmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyTWF0Y2hlZChcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICBldmVudDogS3VtdWxvc0V2ZW50XG4pOiBib29sZWFuIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gcHJvbXB0LnRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlci5ldmVudCAhPT0gZXZlbnQudHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0cmlnZ2VyLmZpbHRlcnM/Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBhbGxQcm9wRmlsdGVyc01hdGNoID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXIuZmlsdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBbcHJvcCwgb3AsIGZpbHRlclRlc3RWYWx1ZV0gPSB0cmlnZ2VyLmZpbHRlcnNbaV0gYXMgUHJvcEZpbHRlcjtcblxuICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSBldmVudC5kYXRhW3Byb3BdO1xuXG4gICAgICAgIGxldCBmaWx0ZXJNYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICAgICAgY2FzZSAnaW4nOlxuICAgICAgICAgICAgY2FzZSAnSU4nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wSW4oZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BFcShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEd0KGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEd0ZShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEx0KGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEx0ZShmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBmaWx0ZXIgb3BlcmF0b3I6ICR7b3B9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGxQcm9wRmlsdGVyc01hdGNoID0gYWxsUHJvcEZpbHRlcnNNYXRjaCAmJiBmaWx0ZXJNYXRjaGVkO1xuICAgIH1cblxuICAgIHJldHVybiBhbGxQcm9wRmlsdGVyc01hdGNoO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFQgZXh0ZW5kcyBQcm9tcHRDb25maWc+IHtcbiAgICBwcml2YXRlIGV2ZW50UXVldWU6IEV2ZW50UGF5bG9hZCA9IFtdO1xuICAgIHByaXZhdGUgZXZlbnRSZWNlaXZlZENhbGxiYWNrPzogKGU6IFNka0V2ZW50KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCBldmVudFJlY2VpdmVkQ2FsbGJhY2s/OiAoZTogU2RrRXZlbnQpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5ldmVudFJlY2VpdmVkQ2FsbGJhY2sgPSBldmVudFJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgIGN0eC5zdWJzY3JpYmUoJ2V2ZW50VHJhY2tlZCcsIHRoaXMuaGFuZGxlU2RrRXZlbnQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbHRlclByb21wdHMoXG4gICAgICAgIHByb21wdHM6IFByb21wdENvbmZpZ3M8VD4sXG4gICAgICAgIGZpbHRlcjogKHByb21wdDogVCkgPT4gYm9vbGVhbiA9IChfOiBUKSA9PiB0cnVlXG4gICAgKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gW107XG4gICAgICAgIGZvciAobGV0IGlkIGluIHByb21wdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHByb21wdHNbaWRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50UXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRRdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHRTdXBwcmVzc2VkID0gYXdhaXQgaXNQcm9tcHRTdXBwcmVzc2VkKHByb21wdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFwcm9tcHRTdXBwcmVzc2VkICYmXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJNYXRjaGVkKHByb21wdCwgZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcihwcm9tcHQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9tcHRzLnB1c2gocHJvbXB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbXTtcblxuICAgICAgICAvLyBDYXN0IG5lY2Vzc2FyeSB0byBuYXJyb3cgdGhlIHR5cGUgZnJvbSB0aGUgY29uc3RyYWludC5cbiAgICAgICAgLy8gU2VlbXMgdGhlIFRTIGNvbXBpbGVyIGlzbid0IHF1aXRlIHNtYXJ0IGVub3VnaCB3aGVuIGhhbmRsaW5nXG4gICAgICAgIC8vIHRoZSAnVCBleHRlbmRzIFByb21wdENvbmZpZycgY29uc3RyYWludC5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRQcm9tcHRzIGFzIFRbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNka0V2ZW50ID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGUuZGF0YSBhcyBFdmVudFBheWxvYWQ7XG5cbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlLnB1c2goLi4uZXZlbnRzKTtcblxuICAgICAgICB0aGlzLmV2ZW50UmVjZWl2ZWRDYWxsYmFjaz8uKGUpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi4vY29yZS9jaGFubmVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDb250ZXh0U3RhdGUge1xuICAgIHBsYXRmb3JtQ29uZmlnOiBQbGF0Zm9ybUNvbmZpZztcbiAgICBjaGFubmVsTGlzdDogQ2hhbm5lbFtdO1xufVxuXG5leHBvcnQgY29uc3QgVUlDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVSUNvbnRleHRTdGF0ZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIGgsIEpTWCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBBbGVydFByb21wdENvbmZpZyxcbiAgICBCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0QWN0aW9uLFxuICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uLFxuICAgIENoYW5uZWxMaXN0SXRlbVxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXJTdGF0ZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEJlbGwgfSBmcm9tICcuL2JlbGwnO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IHsgQ2hhbm5lbHNEaWFsb2cgfSBmcm9tICcuL2RpYWxvZy9jaGFubmVscy1kaWFsb2cnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL292ZXJsYXkvYmFja2dyb3VuZC1tYXNrJztcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuL292ZXJsYXkvcHVzaC1wZXJtcyc7XG5pbXBvcnQgeyBPdmVybGF5U2lsZW50IH0gZnJvbSAnLi9vdmVybGF5L3B1c2gtcGVybXMtc2lsZW50JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMID0gJ1N1YnNjcmliZSBmb3Igbm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlUG9zaXRpb24ocG9zOiBzdHJpbmcpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICByZXR1cm4gcG9zLmluZGV4T2YoJ2xlZnQnKSA+IC0xID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRVaVByb3BzPFQgZXh0ZW5kcyBQdXNoUHJvbXB0Q29uZmlnPiB7XG4gICAgY29uZmlnOiBUO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBhY3Rpb24/OiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbjtcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gICAgcG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ29tcG9uZW50PFRvb2x0aXBQcm9wcywgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLXRvb2x0aXAga3VtdWxvcy10b29sdGlwLSR7dGhpcy5wcm9wcy5wb3NpdGlvbn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBUb2FzdCBleHRlbmRzIENvbXBvbmVudDx7IG1lc3NhZ2U6IHN0cmluZyB9LCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJrdW11bG9zLXRvYXN0XCI+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj47XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgcHJvbXB0czogUHVzaFByb21wdENvbmZpZ1tdO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBvblBvc3RBY3Rpb25Db25maXJtOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvbkRpc21pc3NPdmVybGF5OiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgdG9hc3RRdWV1ZTogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIFVpU3RhdGU+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVWlQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVxdWV1ZVRvYXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IHRoaXMuc3RhdGUudG9hc3RRdWV1ZS5zbGljZSgxKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2hvd1RvYXN0KG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlIHx8ICFtZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiBbLi4udGhpcy5zdGF0ZS50b2FzdFF1ZXVlLCBtZXNzYWdlXVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZGVxdWV1ZVRvYXN0LCAzMjAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMubWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHJvbXB0cy5tYXAodGhpcy5yZW5kZXJQcm9tcHQsIHRoaXMpfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUG9zdEFjdGlvbigpfVxuXG4gICAgICAgICAgICAgICAgeyFpc01vYmlsZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHshaXNNb2JpbGUoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPdmVybGF5U2lsZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHQ9e3RoaXMucHJvcHMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXt0aGlzLnByb3BzLm9uRGlzbWlzc092ZXJsYXl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvYXN0UXVldWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdCBtZXNzYWdlPXt0aGlzLnN0YXRlLnRvYXN0UXVldWVbMF19IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1heWJlUmVuZGVyUHJvbXB0QmFja2dyb3VuZE1hc2soKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUgfHxcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nLXNpbGVudCcgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHByb21wdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZmlyc3RQcm9tcHRXaXRoTWFzayA9IHByb21wdHMuZmlsdGVyKFxuICAgICAgICAgICAgcCA9PlxuICAgICAgICAgICAgICAgIChwLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgICAgIHAudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgICAgICEhcC5iYWNrZ3JvdW5kTWFza1xuICAgICAgICApWzBdIGFzIEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnO1xuXG4gICAgICAgIGlmICghZmlyc3RQcm9tcHRXaXRoTWFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZmlyc3RQcm9tcHRXaXRoTWFzay5iYWNrZ3JvdW5kTWFzayEuY29sb3JzLmJnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIDxCYWNrZ3JvdW5kTWFzayBzdHlsZT17c3R5bGV9IC8+O1xuICAgIH1cblxuICAgIHJlbmRlclByb21wdChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJ3JlcXVlc3RpbmcnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSB8fFxuICAgICAgICAgICAgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocHJvbXB0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2JlbGwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0RGVjbGluZWQ9e3RoaXMucHJvcHMub25Qcm9tcHREZWNsaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAnYWxlcnQnOlxuICAgICAgICAgICAgY2FzZSAnYmFubmVyJzpcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gcHJvbXB0LmFjdGlvbnM/LmZpbmQ8XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvblxuICAgICAgICAgICAgICAgICAgICA+KFxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogUHJvbXB0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQb3N0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50UG9zdEFjdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyAhPT0gcHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJyAhPT0gY3VycmVudFBvc3RBY3Rpb24/LnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhY2tncm91bmRNYXNrID0gbnVsbDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgdW5kZWZpbmVkICE9PSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LmJhY2tncm91bmRNYXNrXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgbWFza0NvbmZpZyA9IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kTWFzayA9IChcbiAgICAgICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBtYXNrQ29uZmlnLmNvbG9ycy5iZyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7YmFja2dyb3VuZE1hc2t9XG4gICAgICAgICAgICAgICAgPENoYW5uZWxzRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17Y3VycmVudFBvc3RBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17Y2hhbm5lbFNlbGVjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBvc3RBY3Rpb25Db25maXJtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlclByb21wdEFjdGl2YXRpb24oXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgYWN0aXZhdGVGbjogKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB2b2lkXG4pIHtcbiAgICBpZiAoXG4gICAgICAgIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyA8IDBcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgJ0RlZmVycmluZyBwcm9tcHQgYWN0aXZhdGlvbiBieSAnICsgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzXG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoYWN0aXZhdGVGbiwgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzICogMTAwMCwgcHJvbXB0KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG5leHBvcnQgZW51bSBXb3JrZXJNZXNzYWdlVHlwZSB7XG4gICAgS1B1c2hSZWNlaXZlZCA9ICdLUHVzaFJlY2VpdmVkJ1xufVxuZXhwb3J0IHR5cGUgV29ya2VyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkO1xuICAgIGRhdGE6IFB1c2hQYXlsb2FkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZGF0YTogYW55KTogZGF0YSBpcyBXb3JrZXJNZXNzYWdlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgV29ya2VyTWVzc2FnZVR5cGVbKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZV0gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=