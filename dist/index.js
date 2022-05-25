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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/prompts/styles/_anims.scss","webpack://./src/styles.scss","webpack://./src/prompts/styles/_tooltip.scss","webpack://./src/prompts/styles/_variables.scss","webpack://./src/prompts/styles/_toast.scss","webpack://./src/prompts/styles/_prompts.scss","webpack://./src/prompts/styles/_buttons.scss","webpack://./src/prompts/styles/_checkbox.scss","webpack://./src/prompts/styles/_banner.scss","webpack://./src/prompts/styles/_banner.compact.scss","webpack://./src/prompts/styles/_safe-area-inset-pad.scss","webpack://./src/prompts/bell/bell.scss","webpack://./src/prompts/dialog/dialog.scss","webpack://./src/prompts/background-mask.scss","webpack://./src/prompts/overlay.scss"],"names":[],"mappings":"AACA;EACI;IAEI,kCAAA;ECDN;EDIE;IAEI,iCAAA;ECHN;EDME;IAGI,kCAAA;ECNN;EDSE;IAEI,iCAAA;ECRN;AACF;ADWA;EACI;IACI,UAAA;ECTN;EDYE;IACI,UAAA;ECVN;AACF;ADaA;EACI;IACI,UAAA;IACA,gCAAA;ECXN;EDcE;IACI,UAAA;IACA,+BAAA;ECZN;AACF;ADeA;EACI;IACI,UAAA;IACA,iCAAA;ECbN;EDgBE;IACI,UAAA;IACA,+BAAA;ECdN;AACF;ADiBA;EACI;IACI,UAAA;IACA,qCAAA;ECfN;EDkBE;IACI,UAAA;IACA,kCAAA;EChBN;AACF;ADmBA;EACI;IACI,mCAAA;ECjBN;EDoBE;IACI,+BAAA;EClBN;AACF;ADqBA;EACI;IACI,kCAAA;ECnBN;EDsBE;IACI,+BAAA;ECpBN;AACF;AClEI;EACI,aAAA;ADoER;ACjEI;EACI,cAAA;ADmER;;AC/DA;EACI,gBCViB;EDWjB,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,gCAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,oBAAA;EACA,2BAAA;EACA,+BAAA;ADkEJ;AChEI;EACI,WAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,yBAAA;EACA,iBAAA;EACA,gBAAA;ADkER;AC/DI;EACI,uBAAA;EACA,mEAAA;ADiER;AC/DQ;EACI,wBCxCS;EDyCT,WAAA;ADiEZ;AC7DI;EACI,wBAAA;EACA,kEAAA;AD+DR;AC7DQ;EACI,uBClDS;EDmDT,UAAA;AD+DZ;;AGnHA;EACI,qBAAA;EACA,eAAA;EACA,SAAA;EACA,SAAA;EACA,2BAAA;EACA,gBDLiB;ECMjB,aAAA;EACA,aAAA;EACA,eAAA;EACA,kCDLU;ECMV,WAAA;EACA,0BAAA;EACA,oEAAA;AHsHJ;;AInIA;EACI,sBAAA;EAQA,aFEW;AF6Hf;AIrII;;;EAGI,mBAAA;AJuIR;;AK7IA;EACI,YAAA;EAEA,iBAAA;EACA,iBAAA;EAEA,gBAAA;EAEA,yBAAA;EACA,eHDgB;EGEhB,gBAAA;AL6IJ;AK3II;EACI,eAAA;AL6IR;;AKzIA;EACI,gBAAA;EACA,WAAA;AL4IJ;AK1II;EACI,gBAAA;AL4IR;;AKxIA;EACI,kBAAA;EACA,2CAAA;EAEA,mBAAA;EACA,WAAA;AL0IJ;AKxII;EACI,YAAA;AL0IR;;AM5KA;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AN+KJ;;AM5KA;EACI,kBAAA;EACA,UAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;AN+KJ;;AM5KA;EACI,sBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;AN+KJ;;AM5KA;EACI,kBAAA;EACA,cAAA;AN+KJ;;AM5KA;EACI,cAAA;EACA,kBAAA;EACA,gBAAA;AN+KJ;;AM5KA;EACI,WAAA;EACA,kBAAA;EACA,aAAA;AN+KJ;;AM5KA;EACI,kBAAA;AN+KJ;;AM5KA;EACI,cAAA;EACA,kBAAA;EACA,8CAAA;AN+KJ;;AM5KA;EACI,UAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,wBAAA;AN+KJ;;AOhPA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EAEA,eAAA;EACA,OAAA;EAEA,WAAA;EACA,gBAAA;EAEA,aLQmB;EKNnB,kCLRU;EKUV,2BAAA;EAEA,2CAAA;AP6OJ;AO3OI;EACI,MAAA;EACA,uCAAA;AP6OR;AO1OI;EACI,SAAA;EACA,UAAA;EACA,qCAAA;AP4OR;;AOxOA;EACI;IACI,kBAAA;EP2ON;AACF;AOxOA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AP0OJ;;AOvOA;EACI,aAAA;EACA,sBAAA;EACA,OAAA;AP0OJ;;AOvOA;EACI,aAAA;EACA,eLtCgC;EKuChC,iBLnCgC;AF6QpC;AOxOI;EACI,kBAAA;EACA,iBAAA;EACA,iBAAA;AP0OR;;AOtOA;EACI;IACI,eLzDgB;EFkStB;AACF;AOtOA;EACI,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eLvD8B;EKwD9B,iBLvDgC;EKwDhC,gBAAA;EACA,gBAAA;APwOJ;;AOrOA;EACI;IACI,eLxEU;EFgThB;AACF;AOrOA;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;APuOJ;;AOpOA;EACI;IACI,WAAA;IACA,aAAA;EPuON;AACF;AQtUI;EACI,aAAA;ARwUR;AQrUI;EACI,WAAA;EACA,aAAA;ARuUR;AQpUI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;ARsUR;;AStVA;EACI;IACI,kDAAA;ETyVN;;ESvVE;IACI,oDAAA;ET0VN;;ESxVE;IACI,gDAAA;ET2VN;;ESzVE;IACI,sDAAA;ET4VN;AACF;AUxWA;EACI,eAAA;AV0WJ;AUxWI;EACI,YAAA;EACA,UAAA;AV0WR;AUvWI;EACI,YAAA;EACA,WAAA;AVyWR;;AUrWA;EACI,yGAAA;EAGA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,6CAAA;EAEA,WAAA;EACA,YAAA;EAEA,aAAA;EAIA,qBAAA;EAEA,eAAA;EAYA,4CAAA;EACA,2BAAA;AVqVJ;AUhWI;EACI,mBAAA;EACA,+CAAA;AVkWR;AU/VI;EACI,qBAAA;EACA,6CAAA;AViWR;AU3VI;EACI,UAAA;EACA,4EAAA;EACA,qBAAA;AV6VR;AU1VI;EACI,WAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EAEA,qBAAA;EAEA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,qBAAA;AV0VR;;AUtVA;EACI,mBAAA;AVyVJ;;AWhaA;;EAEI,eAAA;EAEA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EAEA,aAAA;EACA,mBAAA;EACA,eAAA;EAEA,kCTVU;ESYV,4CAAA;EACA,2BAAA;AX+ZJ;;AW5ZA;EACI;;IAEI,SAAA;IAEA,YAAA;IACA,iBAAA;IACA,mBAAA;IAEA,2CAAA;IAEA,YAAA;EX4ZN;EW1ZM;;IACI,0BAAA;EX6ZV;EW1ZM;;IACI,kBAAA;IACA,UAAA;EX6ZV;AACF;AWzZA;;EAEI,QAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AX2ZJ;;AWxZA;;EAEI,aAAA;EACA,QAAA;EACA,sBAAA;EACA,OAAA;EACA,kBAAA;AX2ZJ;;AWxZA;;EAEI,aAAA;EACA,eT3DoB;ES4DpB,mBAAA;AX2ZJ;AWzZI;;EACI,kBAAA;EACA,gBAAA;EACA,SAAA;AX4ZR;;AWxZA;;EAEI,OAAA;EACA,qBAAA;EACA,gBAAA;AX2ZJ;;AWxZA;;EAEI,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;AX2ZJ;;AWxZA;EACI,cAAA;AX2ZJ;;AYzfA;EACI,gBAAA;AZ4fJ;;AYzfA;EAEI,iBAAA;AZ2fJ;;AYxfA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EAEA,YVNS;EUQT,oCAAA;EAEA,cAAA;AZwfJ;;Aa5gBA;EACI,iBAAA;Ab+gBJ;;Aa5gBA;EACI,sBAAA;EAQA,aAAA;AbwgBJ;Aa9gBI;;;EAGI,mBAAA;AbghBR;Aa3gBI;EACI,aAAA;EASA,wCAAA;EACA,iBAAA;AbqgBR;Aa7gBQ;EACI,cAAA;EACA,WAAA;EACA,wBAAA;EACA,gBAAA;Ab+gBZ;AaxgBI;EACI,aAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,kCX7BM;AFuiBd;AaxgBQ;EACI,SAAA;Ab0gBZ;AavgBQ;EACI,sBAAA;EACA,YAAA;EACA,wBAAA;EACA,cAAA;AbygBZ;AatgBQ;EACI,WAAA;EACA,YAAA;EACA,cAAA;AbwgBZ;AargBQ;;;EAGI,cAAA;AbugBZ;AapgBQ;EACI,gBAAA;EACA,iBAAA;AbsgBZ;AangBQ;EACI,oBAAA;EACA,YAAA;EACA,qBAAA;AbqgBZ;AajgBI;EACI,mBAAA;AbmgBR;AajgBQ;EACI,eAAA;AbmgBZ;Aa/fI;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;AbigBR;Aa9fI;EACI,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kCXrFM;AFqlBd;;Aa3fI;EACI,YAAA;Ab8fR;;AazfI;EACI,aAAA;Ab4fR;AazfI;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,oBAAA;EACA,uBAAA;Ab2fR;AaxfI;EACI,gBAAA;Ab0fR;AaxfQ;EACI,QAAA;EACA,yBAAA;Ab0fZ;;AapfI;EACI,wBAAA;EACA,eAAA;AbufR;;AanfA;EACI;IACI,aAAA;EbsfN;AACF","sourcesContent":["// Based on https://css-tricks.com/snippets/css/shake-css-keyframe-animation/\n@keyframes kumulos-anim-shake {\n    10%,\n    90% {\n        transform: translate3d(-1px, 0, 0);\n    }\n\n    20%,\n    80% {\n        transform: translate3d(2px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translate3d(-2px, 0, 0);\n    }\n\n    40%,\n    60% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes kumulos-anim-fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes kumulos-reveal-left {\n    0% {\n        opacity: 0;\n        transform: translate(10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-reveal-right {\n    0% {\n        opacity: 0;\n        transform: translate(-10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-toast-in-out {\n    0% {\n        opacity: 0;\n        transform: translate3d(-50%, 100%, 0);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate3d(-50%, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-down {\n    0% {\n        transform: translate3d(0, -100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-up {\n    0% {\n        transform: translate3d(0, 100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n","@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}",".kumulos-tooltip-parent {\n    .kumulos-tooltip {\n        display: none;\n    }\n\n    &:hover .kumulos-tooltip {\n        display: block;\n    }\n}\n\n.kumulos-tooltip {\n    background: $tooltip-background;\n    position: absolute;\n    top: 50%;\n    padding: 8px 12px;\n    font: 14px helvetica, sans-serif;\n    color: #eee;\n    border-radius: 6px;\n    white-space: nowrap;\n    z-index: 1100;\n    pointer-events: none;\n    transform: translateY(-50%);\n    will-change: opacity, transform;\n\n    &:after {\n        content: \"\";\n        width: 0;\n        height: 0;\n        position: absolute;\n        top: 50%;\n        right: 100%;\n        border: solid transparent;\n        border-width: 8px;\n        margin-top: -8px;\n    }\n\n    &-right {\n        left: calc(100% + 12px);\n        animation: kumulos-reveal-right 0.2s $quintEasing;\n\n        &:after {\n            border-right-color: $tooltip-background;\n            right: 100%;\n        }\n    }\n\n    &-left {\n        right: calc(100% + 12px);\n        animation: kumulos-reveal-left 0.2s $quintEasing;\n\n        &:after {\n            border-left-color: $tooltip-background;\n            left: 100%;\n        }\n    }\n}\n","$shadow-color: rgba(0, 0, 0, 0.54);\n$tooltip-background: #222;\n// https://easings.net/en#easeOutQuint\n$quintEasing: cubic-bezier(0.23, 1, 0.32, 1);\n\n$defaultFont: helvetica, sans-serif;\n$defaultHeaderFontSize: 18px;\n$defaultBodySize: 14px;\n$defaultButtonSize: 14px;\n\n$maskZIndex: 900;\n$promptZIndex: 1000;\n\n$defaultBannerHeaderFontSizeMobile: 12px;\n$defaultBannerHeaderLineHeightMobile: 14px;\n\n$defaultBannerBodyFontSizeMobile: 12px;\n$defaultBannerBodyLineHeightMobile: 14px;\n\n$defaultBannerPadding: 10px;",".kumulos-toast {\n    display: inline-block;\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: $tooltip-background;\n    z-index: 1100;\n    padding: 12px;\n    font-size: 16px;\n    font-family: $defaultFont;\n    color: #eee;\n    border-radius: 8px 8px 0 0;\n    animation: kumulos-toast-in-out 0.25s $quintEasing;\n}\n",".kumulos-prompt {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: $promptZIndex;\n}\n",".kumulos-action-button {\n    border: none;\n\n    margin-left: 10px;\n    padding: 7px 10px;\n\n    min-width: 100px;\n\n    text-transform: uppercase;\n    font-size: $defaultButtonSize;\n    font-weight: 600;\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.kumulos-action-button-cancel {\n    background: none;\n    color: #555;\n\n    &:hover {\n        background: #eee;\n    }\n}\n\n.kumulos-action-button-confirm {\n    border-radius: 3px;\n    box-shadow: 1px 3px 3px $shadow-color;\n\n    background: rgb(76, 136, 224);\n    color: #fff;\n\n    &:hover {\n        opacity: 0.8;\n    }\n}\n",".kumulos-checkbox-container {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    user-select: none;\n    line-height: 20px;\n    font-size: 0.9em;\n    font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n.kumulos-checkbox {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n    border-color: #aaa;\n    display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #aaa;\n    box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n    border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #222;\n    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n    left: 10px;\n    top: -7px;\n    width: 8px;\n    height: 20px;\n    border: solid #000;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n",".kumulos-banner-container {\n    display: flex;\n    flex-direction: row;\n    flex-flow: wrap;\n\n    position: fixed;\n    left: 0;\n\n    width: 100%;\n    min-height: 80px;\n\n    padding: $defaultBannerPadding;\n\n    font-family: $defaultFont;\n\n    backface-visibility: hidden;\n\n    box-shadow: 0 0 3px 1px $shadow-color;\n\n    &.kumulos-prompt-position-top {\n        top: 0;\n        animation: kumulos-slide-down 0.4s ease;\n    }\n\n    &.kumulos-prompt-position-bottom {\n        bottom: 0;\n        top: unset;\n        animation: kumulos-slide-up 0.4s ease;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-container {\n        flex-flow: initial;\n    }\n}\n\n.kumulos-banner-icon {\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.kumulos-banner-content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.kumulos-banner-header {\n    display: flex;\n    font-size: $defaultBannerHeaderFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n\n    h1 {\n        font-size: inherit;\n        font-weight: bold;\n        margin: 0 0 3px 0;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-header {\n        font-size: $defaultHeaderFontSize;\n    }\n}\n\n.kumulos-banner-body {\n    display: flex;\n    flex-grow: 2;\n    align-items: flex-start;\n    font-size: $defaultBannerBodyFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n    overflow: hidden;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-body {\n        font-size: $defaultBodySize;\n    }\n}\n\n.kumulos-banner-actions {\n    display: flex;\n    align-self: center;\n    justify-self: flex-end;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n}\n",".kumulos-banner-compact {\n    .kumulos-banner-body {\n        margin-top: 0;\n    }\n\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n\n    .kumulos-banner-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin-right: 10px;\n    }\n}\n","@supports(padding: unquote('max(0px)')) {\n    .kumulos-safe-area-inset-pad-left {\n        padding-left: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-left))');\n    }\n    .kumulos-safe-area-inset-pad-right {\n        padding-right: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-right))');\n    }\n    .kumulos-safe-area-inset-pad-top {\n        padding-top: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-top))');\n    }\n    .kumulos-safe-area-inset-pad-bottom {\n        padding-bottom: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-bottom))');\n    }\n}\n",".kumulos-bell-container {\n    position: fixed;\n\n    &-bottom-left {\n        bottom: 15px;\n        left: 15px;\n    }\n\n    &-bottom-right {\n        bottom: 15px;\n        right: 15px;\n    }\n}\n\n.kumulos-bell {\n    transition: transform 0.2s $quintEasing,\n        box-shadow 0.2s $quintEasing;\n\n    border-radius: 100%;\n    border-color: #fff;\n    background: rgb(76, 136, 224);\n    box-shadow: 1px 2px 2px 0 $shadow-color;\n\n    width: 60px;\n    height: 60px;\n\n    padding: 10px;\n\n    // Note the scale/width/height in all states have been chosen such that they resolve to whole numbers.\n    // This helps reduce blur of the SVG icon due to resterisation in Webkit.\n    transform: scale(0.9);\n\n    cursor: pointer;\n\n    &:hover {\n        transform: scale(1);\n        box-shadow: 1px 2px 3px 1px $shadow-color;\n    }\n\n    &:active {\n        transform: scale(0.8);\n        box-shadow: 1px 2px 2px 0 $shadow-color;\n    }\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n\n    svg {\n        fill: #fff;\n        animation: kumulos-anim-shake 0.4s cubic-bezier(.36, .07, .19, .97) both;\n        animation-delay: 0.3s;\n    }\n\n    &:before {\n        content: '';\n        display: block;\n        width: 85%;\n        height: 85%;\n        border: solid 1px;\n        border-radius: 100%;\n        ;\n        border-color: inherit;\n        ;\n        position: absolute;\n        top: 0;\n        left: 0;\n        margin: 7.5% 0 0 7.5%;\n    }\n}\n\n.kumulos-bell-inner {\n    border-radius: 100%;\n}\n",".kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    font-family: $defaultFont;\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-channel-dialog-container,\n    .kumulos-alert-container {\n        left: 50%;\n\n        width: 500px;\n        min-height: 250px;\n        margin-left: -250px;\n\n        box-shadow: 0 0 3px 1px $shadow-color;\n\n        height: auto;\n\n        &.kumulos-prompt-position-top-center {\n            border-radius: 0 0 3px 3px;\n        }\n\n        &.kumulos-prompt-position-center {\n            border-radius: 3px;\n            top: 120px;\n        }\n    }\n}\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n    order: 2;\n    width: 60px;\n    height: 60px;\n    align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n    display: flex;\n    order: 1;\n    flex-direction: column;\n    flex: 1;\n    margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n    display: flex;\n    font-size: $defaultHeaderFontSize;\n    margin-bottom: 20px;\n\n    h1 {\n        font-size: inherit;\n        font-weight: 400;\n        margin: 0;\n    }\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n    flex: 1;\n    white-space: pre-wrap;\n    overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 20px;\n    order: 3;\n    width: 100%;\n    height: 30px;\n    align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n    margin: 20px 0;\n}\n","body.kumulos-background-mask-blur {\n    overflow: hidden;\n}\n\n.kumulos-background-mask-blur\n    > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n    filter: blur(3px);\n}\n\n.kumulos-background-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\n    z-index: $maskZIndex;\n\n    background-color: rgba(0, 0, 0, 0.3);\n\n    display: block;\n}\n",".kumulos-overlay-blur > *:not(.kumulos-overlay) {\n    filter: blur(3px);\n}\n\n.kumulos-overlay {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: 2000;\n\n    &-strip {\n        display: flex;\n\n        &:before {\n            display: block;\n            content: '';\n            width: calc(500px + 12%);\n            max-width: 660px;\n        }\n\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n        min-height: 150px;\n    }\n\n    &-content-container {\n        display: flex;\n        max-width: 38%;\n        padding: 1em;\n        font-size: 14px;\n        font-family: $defaultFont;\n\n        * {\n            margin: 0;\n        }\n\n        svg {\n            margin: 55px 1.7em 0 0;\n            stroke: none;\n            fill: rgba(0, 0, 0, 0.8);\n            flex-shrink: 0;\n        }\n\n        img {\n            width: 55px;\n            height: 55px;\n            flex-shrink: 0;\n        }\n\n        h3,\n        p,\n        a {\n            color: inherit;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            font-weight: bold;\n        }\n\n        a {\n            margin-right: 0.65em;\n            opacity: 0.8;\n            text-decoration: none;\n        }\n    }\n\n    .kumulos-overlay-content {\n        margin-left: 0.75em;\n\n        p {\n            margin: 0.5em 0;\n        }\n    }\n\n    .kumulos-silent-overlay-indicator {\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 1;\n    }\n\n    .kumulos-silent-overlay-content-text {\n        max-width: 500px;\n        text-align: center;\n        font-size: 1.3em;\n        font-family: $defaultFont;\n    }\n}\n\n.kumulos-overlay-chrome {\n    .kumulos-overlay-strip:before {\n        width: 440px;\n    }\n}\n\n.kumulos-overlay-edge {\n    .kumulos-overlay-strip:before {\n        display: none;\n    }\n\n    .kumulos-overlay-strip {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        padding-bottom: 60px;\n        justify-content: center;\n    }\n\n    .kumulos-overlay-content-container {\n        min-width: 675px;\n\n        svg {\n            order: 1;\n            transform: rotate(-30deg);\n        }\n    }\n}\n\n.kumulos-overlay-safari {\n    .kumulos-overlay-strip:before {\n        width: calc(50% + 212px);\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 900px) {\n    .kumulos-overlay {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
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
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.setInstallId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.Service = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.EventType = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_VERSION = '1.11.1';
var SDK_TYPE = 10;
//only system events
var EventType;
(function (EventType) {
    EventType["MESSAGE_DELIVERED"] = "k.message.delivered";
    EventType["MESSAGE_OPENED"] = "k.message.opened";
    EventType["PUSH_REGISTERED"] = "k.push.deviceRegistered";
    EventType["INSTALL_TRACKED"] = "k.stats.installTracked";
    EventType["USER_ASSOCIATED"] = "k.stats.userAssociated";
    EventType["USER_ASSOCIATION_CLEARED"] = "k.stats.userAssociationCleared";
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
    return Object.values(EventType).includes(type);
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
                case 4: return [2 /*return*/, trackEvent(ctx, EventType.INSTALL_TRACKED, payload)
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
    (0, __1.trackEvent)(ctx, __1.EventType.MESSAGE_OPENED, {
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
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.EventType.PUSH_REGISTERED, {
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
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.EventType.PUSH_REGISTERED, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxlQUFlLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxX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QUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLWNvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2FwcC1yYXRpbmcuc2Nzcz9mYmQxIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvc3ZnLXBvaW50ZXIudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvY29uZmlnLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC9zYWZhcmkudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvdzNjLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9yb290LWZyYW1lLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9zdG9yYWdlL2lkYi1rZXl2YWwudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3N0b3JhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZnAvZnAtY2FwdHVyZS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9mcC9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2ZwL3R5cGVzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2JlbGwvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvZGRsLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC9kZWVwbGluay1idXR0b24udHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvbWFuYWdlci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC91aS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9jaGFubmVscy1kaWFsb2cudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kaWFsb2cvY2hhbm5lbHMtbGlzdC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvb3ZlcmxheS9iYWNrZ3JvdW5kLW1hc2sudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9vdmVybGF5L3B1c2gtcGVybXMtc2lsZW50LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvb3ZlcmxheS9wdXNoLXBlcm1zLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvcHJvbXB0LXJlbWluZGVyLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy90cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWktY29udGV4dC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWkudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3dvcmtlci9tZXNzYWdpbmcudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia3VtdWxvc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qISBjbGlwYm9hcmQtY29weS4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZ2xvYmFsIERPTUV4Y2VwdGlvbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaXBib2FyZENvcHlcblxuZnVuY3Rpb24gbWFrZUVycm9yICgpIHtcbiAgcmV0dXJuIG5ldyBET01FeGNlcHRpb24oJ1RoZSByZXF1ZXN0IGlzIG5vdCBhbGxvd2VkJywgJ05vdEFsbG93ZWRFcnJvcicpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlDbGlwYm9hcmRBcGkgKHRleHQpIHtcbiAgLy8gVXNlIHRoZSBBc3luYyBDbGlwYm9hcmQgQVBJIHdoZW4gYXZhaWxhYmxlLiBSZXF1aXJlcyBhIHNlY3VyZSBicm93c2luZ1xuICAvLyBjb250ZXh0IChpLmUuIEhUVFBTKVxuICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKVxuICB9XG4gIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5RXhlY0NvbW1hbmQgKHRleHQpIHtcbiAgLy8gUHV0IHRoZSB0ZXh0IHRvIGNvcHkgaW50byBhIDxzcGFuPlxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgLy8gUHJlc2VydmUgY29uc2VjdXRpdmUgc3BhY2VzIGFuZCBuZXdsaW5lc1xuICBzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJ1xuICBzcGFuLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnYXV0bydcbiAgc3Bhbi5zdHlsZS51c2VyU2VsZWN0ID0gJ2FsbCdcblxuICAvLyBBZGQgdGhlIDxzcGFuPiB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pXG5cbiAgLy8gTWFrZSBhIHNlbGVjdGlvbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByYW5nZSBvZiB0ZXh0IHNlbGVjdGVkIGJ5IHRoZSB1c2VyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICBjb25zdCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICByYW5nZS5zZWxlY3ROb2RlKHNwYW4pXG4gIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcblxuICAvLyBDb3B5IHRleHQgdG8gdGhlIGNsaXBib2FyZFxuICBsZXQgc3VjY2VzcyA9IGZhbHNlXG4gIHRyeSB7XG4gICAgc3VjY2VzcyA9IHdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gIH0gZmluYWxseSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pXG4gIH1cblxuICBpZiAoIXN1Y2Nlc3MpIHRocm93IG1ha2VFcnJvcigpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNsaXBib2FyZENvcHkgKHRleHQpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb3B5Q2xpcGJvYXJkQXBpKHRleHQpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIC4uLk90aGVyd2lzZSwgdXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCkgZmFsbGJhY2tcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29weUV4ZWNDb21tYW5kKHRleHQpXG4gICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgdGhyb3cgKGVycjIgfHwgZXJyIHx8IG1ha2VFcnJvcigpKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIua3VtdWxvcy1yYXRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcbi5rdW11bG9zLXJhdGluZyAua3VtdWxvcy1yYXRpbmctc3RhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rdW11bG9zLXJhdGluZyAua3VtdWxvcy1yYXRpbmctc3RhciAua3VtdWxvcy1yYXRpbmctaGFsZnN0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLWNvdW50IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmt1bXVsb3MtcmF0aW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG5cXG4gICAgLmt1bXVsb3MtcmF0aW5nLXN0YXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLXJhdGluZy1jb3VudCB7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLXNoYWtlIHtcXG4gIDEwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXG4gIH1cXG4gIDIwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcbiAgMzAlLCA1MCUsIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICB9XFxuICA0MCUsIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1sZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXJldmVhbC1yaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtdG9hc3QtaW4tb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtZG93biB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS11cCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXBhcmVudDpob3ZlciAua3VtdWxvcy10b29sdGlwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy10b29sdGlwIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgZm9udDogMTRweCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB6LWluZGV4OiAxMTAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogOHB4O1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1yaWdodCB7XFxuICBsZWZ0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQ6YWZ0ZXIge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyO1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtbGVmdCB7XFxuICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLWxlZnQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtbGVmdDphZnRlciB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzIyMjtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLXRvYXN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICB6LWluZGV4OiAxMTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXRvYXN0LWluLW91dCAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcblxcbi5rdW11bG9zLXByb21wdCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuLmt1bXVsb3MtcHJvbXB0ICosXFxuLmt1bXVsb3MtcHJvbXB0ICo6YmVmb3JlLFxcbi5rdW11bG9zLXByb21wdCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogIzIyMjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAtN3B4O1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQgIzAwMDtcXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWZsb3c6IHdyYXA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICB0b3A6IDA7XFxuICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtZG93biAwLjRzIGVhc2U7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogdW5zZXQ7XFxuICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtdXAgMC40cyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZmxvdzogaW5pdGlhbDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWljb24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMCAzcHggMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5Ac3VwcG9ydHMgKHBhZGRpbmc6IG1heCgwcHgpKSB7XFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWxlZnQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtcmlnaHQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC10b3Age1xcbiAgICBwYWRkaW5nLXRvcDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWJvdHRvbSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDE1cHg7XFxuICBsZWZ0OiAxNXB4O1xcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tcmlnaHQge1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5rdW11bG9zLWJlbGwge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtYmVsbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbCBzdmcge1xcbiAgZmlsbDogI2ZmZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcbi5rdW11bG9zLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHRvcDogMTIwcHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb24sXFxuLmt1bXVsb3MtYWxlcnQtaWNvbiB7XFxuICBvcmRlcjogMjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIgaDEsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9ucyxcXG4ua3VtdWxvcy1hbGVydC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG9yZGVyOiAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuYm9keS5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgKixcXG4ua3VtdWxvcy1vdmVybGF5ICo6YmVmb3JlLFxcbi5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICBtYXgtd2lkdGg6IDY2MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDM4JTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDU1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHAsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCBwIHtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0IHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ0MHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDY3NXB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgb3JkZXI6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LXNhZmFyaSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYW5pbXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3Rvb2x0aXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL190b2FzdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3Byb21wdHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fY2hlY2tib3guc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19iYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19iYW5uZXIuY29tcGFjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3NhZmUtYXJlYS1pbnNldC1wYWQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvYmVsbC9iZWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2RpYWxvZy9kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvYmFja2dyb3VuZC1tYXNrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL292ZXJsYXkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJO0lBRUksa0NBQUE7RUNETjtFRElFO0lBRUksaUNBQUE7RUNITjtFRE1FO0lBR0ksa0NBQUE7RUNOTjtFRFNFO0lBRUksaUNBQUE7RUNSTjtBQUNGO0FEV0E7RUFDSTtJQUNJLFVBQUE7RUNUTjtFRFlFO0lBQ0ksVUFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VDWE47RURjRTtJQUNJLFVBQUE7SUFDQSwrQkFBQTtFQ1pOO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDYk47RURnQkU7SUFDSSxVQUFBO0lBQ0EsK0JBQUE7RUNkTjtBQUNGO0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUNBQUE7RUNmTjtFRGtCRTtJQUNJLFVBQUE7SUFDQSxrQ0FBQTtFQ2hCTjtBQUNGO0FEbUJBO0VBQ0k7SUFDSSxtQ0FBQTtFQ2pCTjtFRG9CRTtJQUNJLCtCQUFBO0VDbEJOO0FBQ0Y7QURxQkE7RUFDSTtJQUNJLGtDQUFBO0VDbkJOO0VEc0JFO0lBQ0ksK0JBQUE7RUNwQk47QUFDRjtBQ2xFSTtFQUNJLGFBQUE7QURvRVI7QUNqRUk7RUFDSSxjQUFBO0FEbUVSOztBQy9EQTtFQUNJLGdCQ1ZpQjtFRFdqQixrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FEa0VKO0FDaEVJO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRGtFUjtBQy9ESTtFQUNJLHVCQUFBO0VBQ0EsbUVBQUE7QURpRVI7QUMvRFE7RUFDSSx3QkN4Q1M7RUR5Q1QsV0FBQTtBRGlFWjtBQzdESTtFQUNJLHdCQUFBO0VBQ0Esa0VBQUE7QUQrRFI7QUM3RFE7RUFDSSx1QkNsRFM7RURtRFQsVUFBQTtBRCtEWjs7QUduSEE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JETGlCO0VDTWpCLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtDRExVO0VDTVYsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0VBQUE7QUhzSEo7O0FJbklBO0VBQ0ksc0JBQUE7RUFRQSxhRkVXO0FGNkhmO0FJcklJOzs7RUFHSSxtQkFBQTtBSnVJUjs7QUs3SUE7RUFDSSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxlSERnQjtFR0VoQixnQkFBQTtBTDZJSjtBSzNJSTtFQUNJLGVBQUE7QUw2SVI7O0FLeklBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FMNElKO0FLMUlJO0VBQ0ksZ0JBQUE7QUw0SVI7O0FLeElBO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtBTDBJSjtBS3hJSTtFQUNJLFlBQUE7QUwwSVI7O0FNNUtBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBTitLSjs7QU01S0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QU4rS0o7O0FNNUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FOK0tKOztBTTVLQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBTitLSjs7QU01S0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBTitLSjs7QU01S0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FOK0tKOztBTTVLQTtFQUNJLGtCQUFBO0FOK0tKOztBTTVLQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FOK0tKOztBTTVLQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QU4rS0o7O0FPaFBBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxPQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0VBRUEsYUxRbUI7RUtObkIsa0NMUlU7RUtVViwyQkFBQTtFQUVBLDJDQUFBO0FQNk9KO0FPM09JO0VBQ0ksTUFBQTtFQUNBLHVDQUFBO0FQNk9SO0FPMU9JO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBUDRPUjs7QU94T0E7RUFDSTtJQUNJLGtCQUFBO0VQMk9OO0FBQ0Y7QU94T0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FQME9KOztBT3ZPQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QVAwT0o7O0FPdk9BO0VBQ0ksYUFBQTtFQUNBLGVMdENnQztFS3VDaEMsaUJMbkNnQztBRjZRcEM7QU94T0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QVAwT1I7O0FPdE9BO0VBQ0k7SUFDSSxlTHpEZ0I7RUZrU3RCO0FBQ0Y7QU90T0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUx2RDhCO0VLd0Q5QixpQkx2RGdDO0VLd0RoQyxnQkFBQTtFQUNBLGdCQUFBO0FQd09KOztBT3JPQTtFQUNJO0lBQ0ksZUx4RVU7RUZnVGhCO0FBQ0Y7QU9yT0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FQdU9KOztBT3BPQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RVB1T047QUFDRjtBUXRVSTtFQUNJLGFBQUE7QVJ3VVI7QVFyVUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBUnVVUjtBUXBVSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QVJzVVI7O0FTdFZBO0VBQ0k7SUFDSSxrREFBQTtFVHlWTjs7RVN2VkU7SUFDSSxvREFBQTtFVDBWTjs7RVN4VkU7SUFDSSxnREFBQTtFVDJWTjs7RVN6VkU7SUFDSSxzREFBQTtFVDRWTjtBQUNGO0FVeFdBO0VBQ0ksZUFBQTtBVjBXSjtBVXhXSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FWMFdSO0FVdldJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QVZ5V1I7O0FVcldBO0VBQ0kseUdBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUlBLHFCQUFBO0VBRUEsZUFBQTtFQVlBLDRDQUFBO0VBQ0EsMkJBQUE7QVZxVko7QVVoV0k7RUFDSSxtQkFBQTtFQUNBLCtDQUFBO0FWa1dSO0FVL1ZJO0VBQ0kscUJBQUE7RUFDQSw2Q0FBQTtBVmlXUjtBVTNWSTtFQUNJLFVBQUE7RUFDQSw0RUFBQTtFQUNBLHFCQUFBO0FWNlZSO0FVMVZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtBVjBWUjs7QVV0VkE7RUFDSSxtQkFBQTtBVnlWSjs7QVdoYUE7O0VBRUksZUFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsa0NUVlU7RVNZViw0Q0FBQTtFQUNBLDJCQUFBO0FYK1pKOztBVzVaQTtFQUNJOztJQUVJLFNBQUE7SUFFQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUVBLDJDQUFBO0lBRUEsWUFBQTtFWDRaTjtFVzFaTTs7SUFDSSwwQkFBQTtFWDZaVjtFVzFaTTs7SUFDSSxrQkFBQTtJQUNBLFVBQUE7RVg2WlY7QUFDRjtBV3paQTs7RUFFSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBWDJaSjs7QVd4WkE7O0VBRUksYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBWDJaSjs7QVd4WkE7O0VBRUksYUFBQTtFQUNBLGVUM0RvQjtFUzREcEIsbUJBQUE7QVgyWko7QVd6Wkk7O0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QVg0WlI7O0FXeFpBOztFQUVJLE9BQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FYMlpKOztBV3haQTs7RUFFSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FYMlpKOztBV3haQTtFQUNJLGNBQUE7QVgyWko7O0FZemZBO0VBQ0ksZ0JBQUE7QVo0Zko7O0FZemZBO0VBRUksaUJBQUE7QVoyZko7O0FZeGZBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxZVk5TO0VVUVQsb0NBQUE7RUFFQSxjQUFBO0Fad2ZKOztBYTVnQkE7RUFDSSxpQkFBQTtBYitnQko7O0FhNWdCQTtFQUNJLHNCQUFBO0VBUUEsYUFBQTtBYndnQko7QWE5Z0JJOzs7RUFHSSxtQkFBQTtBYmdoQlI7QWEzZ0JJO0VBQ0ksYUFBQTtFQVNBLHdDQUFBO0VBQ0EsaUJBQUE7QWJxZ0JSO0FhN2dCUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBYitnQlo7QWF4Z0JJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDWDdCTTtBRnVpQmQ7QWF4Z0JRO0VBQ0ksU0FBQTtBYjBnQlo7QWF2Z0JRO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FieWdCWjtBYXRnQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QWJ3Z0JaO0FhcmdCUTs7O0VBR0ksY0FBQTtBYnVnQlo7QWFwZ0JRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBYnNnQlo7QWFuZ0JRO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QWJxZ0JaO0FhamdCSTtFQUNJLG1CQUFBO0FibWdCUjtBYWpnQlE7RUFDSSxlQUFBO0FibWdCWjtBYS9mSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FiaWdCUjtBYTlmSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDWHJGTTtBRnFsQmQ7O0FhM2ZJO0VBQ0ksWUFBQTtBYjhmUjs7QWF6Zkk7RUFDSSxhQUFBO0FiNGZSO0FhemZJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QWIyZlI7QWF4Zkk7RUFDSSxnQkFBQTtBYjBmUjtBYXhmUTtFQUNJLFFBQUE7RUFDQSx5QkFBQTtBYjBmWjs7QWFwZkk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QWJ1ZlI7O0FhbmZBO0VBQ0k7SUFDSSxhQUFBO0Vic2ZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gQmFzZWQgb24gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3Mvc2hha2UtY3NzLWtleWZyYW1lLWFuaW1hdGlvbi9cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAgIDEwJSxcXG4gICAgOTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMjAlLFxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSxcXG4gICAgNTAlLFxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA0MCUsXFxuICAgIDYwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDEwMCUsIDApO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCIsXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQge1xcbiAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyMjtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMjI7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG5cXG4ua3VtdWxvcy1wcm9tcHQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5rdW11bG9zLXByb21wdCAqLFxcbi5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4ua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm06aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICMyMjI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogLTdweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwMDA7XFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1mbG93OiB3cmFwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3Age1xcbiAgdG9wOiAwO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICB0b3A6IHVuc2V0O1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICBmbGV4LWZsb3c6IGluaXRpYWw7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1pY29uIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDAgM3B4IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1yaWdodDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtdG9wIHtcXG4gICAgcGFkZGluZy10b3A6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XFxuICB9XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgbGVmdDogMTVweDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5rdW11bG9zLWJlbGw6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGwgc3ZnIHtcXG4gIGZpbGw6ICNmZmY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1zaGFrZSAwLjRzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODUlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogNy41JSAwIDAgNy41JTtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbC1pbm5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgb3JkZXI6IDI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnQsXFxuLmt1bXVsb3MtYWxlcnQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyIGgxLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgZmxleDogMTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvcmRlcjogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbmJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciA+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5ICosXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmJlZm9yZSxcXG4ua3VtdWxvcy1vdmVybGF5ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgbWF4LXdpZHRoOiA2NjBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiAzOCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBwLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQgcCB7XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiA0NDBweDtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA2NzVweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG9yZGVyOiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5rdW11bG9zLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIixcIi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IHtcXG4gICAgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy10b29sdGlwIHtcXG4gICAgYmFja2dyb3VuZDogJHRvb2x0aXAtYmFja2dyb3VuZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB6LWluZGV4OiAxMTAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcblxcbiAgICAmOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgfVxcblxcbiAgICAmLXJpZ2h0IHtcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1yaWdodCAwLjJzICRxdWludEVhc2luZztcXG5cXG4gICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRvb2x0aXAtYmFja2dyb3VuZDtcXG4gICAgICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLWxlZnQge1xcbiAgICAgICAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgJHF1aW50RWFzaW5nO1xcblxcbiAgICAgICAgJjphZnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgICAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIiRzaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuJHRvb2x0aXAtYmFja2dyb3VuZDogIzIyMjtcXG4vLyBodHRwczovL2Vhc2luZ3MubmV0L2VuI2Vhc2VPdXRRdWludFxcbiRxdWludEVhc2luZzogY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcblxcbiRkZWZhdWx0Rm9udDogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiRkZWZhdWx0SGVhZGVyRm9udFNpemU6IDE4cHg7XFxuJGRlZmF1bHRCb2R5U2l6ZTogMTRweDtcXG4kZGVmYXVsdEJ1dHRvblNpemU6IDE0cHg7XFxuXFxuJG1hc2taSW5kZXg6IDkwMDtcXG4kcHJvbXB0WkluZGV4OiAxMDAwO1xcblxcbiRkZWZhdWx0QmFubmVySGVhZGVyRm9udFNpemVNb2JpbGU6IDEycHg7XFxuJGRlZmF1bHRCYW5uZXJIZWFkZXJMaW5lSGVpZ2h0TW9iaWxlOiAxNHB4O1xcblxcbiRkZWZhdWx0QmFubmVyQm9keUZvbnRTaXplTW9iaWxlOiAxMnB4O1xcbiRkZWZhdWx0QmFubmVyQm9keUxpbmVIZWlnaHRNb2JpbGU6IDE0cHg7XFxuXFxuJGRlZmF1bHRCYW5uZXJQYWRkaW5nOiAxMHB4O1wiLFwiLmt1bXVsb3MtdG9hc3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgYmFja2dyb3VuZDogJHRvb2x0aXAtYmFja2dyb3VuZDtcXG4gICAgei1pbmRleDogMTEwMDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcbiAgICBjb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgJHF1aW50RWFzaW5nO1xcbn1cXG5cIixcIi5rdW11bG9zLXByb21wdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgICosXFxuICAgICo6YmVmb3JlLFxcbiAgICAqOmFmdGVyIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgei1pbmRleDogJHByb21wdFpJbmRleDtcXG59XFxuXCIsXCIua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XFxuXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCdXR0b25TaXplO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiAjNTU1O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3gtc2hhZG93OiAxcHggM3B4IDNweCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDEzNiwgMjI0KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblwiLFwiLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblwiLFwiLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogODBweDtcXG5cXG4gICAgcGFkZGluZzogJGRlZmF1bHRCYW5uZXJQYWRkaW5nO1xcblxcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcblxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICRzaGFkb3ctY29sb3I7XFxuXFxuICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB0b3A6IHVuc2V0O1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZmxvdzogaW5pdGlhbDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEJhbm5lckhlYWRlckZvbnRTaXplTW9iaWxlO1xcbiAgICBsaW5lLWhlaWdodDogJGRlZmF1bHRCYW5uZXJCb2R5TGluZUhlaWdodE1vYmlsZTtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW46IDAgMCAzcHggMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRIZWFkZXJGb250U2l6ZTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCYW5uZXJCb2R5Rm9udFNpemVNb2JpbGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAkZGVmYXVsdEJhbm5lckJvZHlMaW5lSGVpZ2h0TW9iaWxlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0Qm9keVNpemU7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG59XFxuXCIsXCIua3VtdWxvcy1iYW5uZXItY29tcGFjdCB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG59XFxuXCIsXCJAc3VwcG9ydHMocGFkZGluZzogdW5xdW90ZSgnbWF4KDBweCknKSkge1xcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWxlZnQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB1bnF1b3RlKCdtYXgoJyArICRkZWZhdWx0QmFubmVyUGFkZGluZyArICcsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpJyk7XFxuICAgIH1cXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnF1b3RlKCdtYXgoJyArICRkZWZhdWx0QmFubmVyUGFkZGluZyArICcsIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKScpO1xcbiAgICB9XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtdG9wIHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiB1bnF1b3RlKCdtYXgoJyArICRkZWZhdWx0QmFubmVyUGFkZGluZyArICcsIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSknKTtcXG4gICAgfVxcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLWJvdHRvbSB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpJyk7XFxuICAgIH1cXG59XFxuXCIsXCIua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gICAgJi1ib3R0b20tbGVmdCB7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICBsZWZ0OiAxNXB4O1xcbiAgICB9XFxuXFxuICAgICYtYm90dG9tLXJpZ2h0IHtcXG4gICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJlbGwge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyAkcXVpbnRFYXNpbmcsXFxuICAgICAgICBib3gtc2hhZG93IDAuMnMgJHF1aW50RWFzaW5nO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NiwgMTM2LCAyMjQpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwICRzaGFkb3ctY29sb3I7XFxuXFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8vIE5vdGUgdGhlIHNjYWxlL3dpZHRoL2hlaWdodCBpbiBhbGwgc3RhdGVzIGhhdmUgYmVlbiBjaG9zZW4gc3VjaCB0aGF0IHRoZXkgcmVzb2x2ZSB0byB3aG9sZSBudW1iZXJzLlxcbiAgICAvLyBUaGlzIGhlbHBzIHJlZHVjZSBibHVyIG9mIHRoZSBTVkcgaWNvbiBkdWUgdG8gcmVzdGVyaXNhdGlvbiBpbiBXZWJraXQuXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwICRzaGFkb3ctY29sb3I7XFxuICAgIH1cXG5cXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gICAgc3ZnIHtcXG4gICAgICAgIGZpbGw6ICNmZmY7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1zaGFrZSAwLjRzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIGJvdGg7XFxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxuICAgIH1cXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBoZWlnaHQ6IDg1JTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICAgIDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gICAgICAgIDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW46IDcuNSUgMCAwIDcuNSU7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmVsbC1pbm5lciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblwiLFwiLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuXFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4gICAgLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG5cXG4gICAgICAgIHdpZHRoOiA1MDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICRzaGFkb3ctY29sb3I7XFxuXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgICAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICB0b3A6IDEyMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb24sXFxuLmt1bXVsb3MtYWxlcnQtaWNvbiB7XFxuICAgIG9yZGVyOiAyO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50LFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvcmRlcjogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEhlYWRlckZvbnRTaXplO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9ucyxcXG4ua3VtdWxvcy1hbGVydC1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgb3JkZXI6IDM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblwiLFwiYm9keS5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXJcXG4gICAgPiAqOm5vdCgua3VtdWxvcy1wcm9tcHQpOm5vdCgua3VtdWxvcy1vdmVybGF5KTpub3QoLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrKSB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2sge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgei1pbmRleDogJG1hc2taSW5kZXg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLFwiLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAgICosXFxuICAgICo6YmVmb3JlLFxcbiAgICAqOmFmdGVyIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgei1pbmRleDogMjAwMDtcXG5cXG4gICAgJi1zdHJpcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwMHB4ICsgMTIlKTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY2MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgICYtY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1heC13aWR0aDogMzglO1xcbiAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG5cXG4gICAgICAgICoge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgbWFyZ2luOiA1NXB4IDEuN2VtIDAgMDtcXG4gICAgICAgICAgICBzdHJva2U6IG5vbmU7XFxuICAgICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMyxcXG4gICAgICAgIHAsXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgzIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjY1ZW07XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMC41ZW0gMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0IHtcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWNocm9tZSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiA0NDBweDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2Uge1xcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiA2NzVweDtcXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgb3JkZXI6IDE7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LXNhZmFyaSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSArIDIxMnB4KTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGZ9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBkLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6ZChkKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9kKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PWQobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6ZH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1kKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCx6PWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBIKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBaPWguZXZlbnQ7ZnVuY3Rpb24gWSgpe31mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIHEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIFomJihuPVoobikpLG4ucGVyc2lzdD1ZLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9JCxuLmlzRGVmYXVsdFByZXZlbnRlZD1xLG4ubmF0aXZlRXZlbnQ9bn07dmFyIEcsSj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSz1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB1PS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIG8gaW4gcj17fSxlKXt2YXIgaT1lW29dO1YmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PW8mJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1pfHwoXCJkZWZhdWx0VmFsdWVcIj09PW8mJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/bz1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09byYmITA9PT1pP2k9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3Qobyk/bz1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3Qobyt0KSYmIXooZS50eXBlKT9vPVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdChvKT9vPW8udG9Mb3dlckNhc2UoKTp1JiZQLnRlc3Qobyk/bz1vLnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1pJiYoaT12b2lkIDApLHJbb109aSl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9ZChlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXIsZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihKLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEopKX1uLiQkdHlwZW9mPWosSyYmSyhuKX07dmFyIFE9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7USYmUShuKSxHPW4uX19jfTt2YXIgWD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIEcuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sbm49XCIxNy4wLjJcIjtmdW5jdGlvbiB0bihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gZW4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBybihuKXtyZXR1cm4gZW4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiB1bihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiBvbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxjbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj12O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmMsdXNlRGVidWdWYWx1ZTpmLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjpCLGh5ZHJhdGU6SCx1bm1vdW50Q29tcG9uZW50QXROb2RlOnVuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTp0bixjbG9uZUVsZW1lbnQ6cm4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6dixpc1ZhbGlkRWxlbWVudDplbixmaW5kRE9NTm9kZTpvbixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6Y24sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6bG4sU3RyaWN0TW9kZTp2LFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlh9O2V4cG9ydHtubiBhcyB2ZXJzaW9uLGsgYXMgQ2hpbGRyZW4sQiBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLHVuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsdG4gYXMgY3JlYXRlRmFjdG9yeSxybiBhcyBjbG9uZUVsZW1lbnQsZW4gYXMgaXNWYWxpZEVsZW1lbnQsb24gYXMgZmluZERPTU5vZGUsRSBhcyBQdXJlQ29tcG9uZW50LGcgYXMgbWVtbyx4IGFzIGZvcndhcmRSZWYsY24gYXMgZmx1c2hTeW5jLGxuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLGZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxGIGFzIGxhenksWCBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwidmFyIG4sbCx1LGksdCxyLG8sZixlPXt9LGM9W10scz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGEobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gaChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KGwsdSxpKXt2YXIgdCxyLG8sZj17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4geShsLGYsdCxyLG51bGwpfWZ1bmN0aW9uIHkobixpLHQscixvKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK3U6b307cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBwKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBfKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGsobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2sobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ayhuKTpudWxsfWZ1bmN0aW9uIGIobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBiKG4pfX1mdW5jdGlvbiBtKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxyKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQscixvO24uX19kJiYocj0odD0obD1uKS5fX3YpLl9fZSwobz1sLl9fUCkmJih1PVtdLChpPWEoe30sdCkpLl9fdj10Ll9fdisxLGoobyx0LGksbC5fX24sdm9pZCAwIT09by5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W3JdOm51bGwsdSxudWxsPT1yP2sodCk6cix0Ll9faCkseih1LHQpLHQuX19lIT1yJiZiKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxyLG8sZixzLGEpe3ZhciBoLHYscCxfLGIsbSxnLHc9aSYmaS5fX2t8fGMsQT13Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP3kobnVsbCxfLG51bGwsbnVsbCxfKTpBcnJheS5pc0FycmF5KF8pP3koZCx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/eShfLnR5cGUsXy5wcm9wcyxfLmtleSxudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PShwPXdbaF0pfHxwJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl3W2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxBO3YrKyl7aWYoKHA9d1t2XSkmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXt3W3ZdPXZvaWQgMDticmVha31wPW51bGx9aihuLF8scD1wfHxlLHQscixvLGYscyxhKSxiPV8uX19lLCh2PV8ucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLF8pLGcucHVzaCh2LF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXtmb3IodmFyIGksdD1uLl9fayxyPTA7dCYmcjx0Lmxlbmd0aDtyKyspKGk9dFtyXSkmJihpLl9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGU/eChpLGwsdSk6UCh1LGksaSx0LGkuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LHIpe3ZhciBvLGYsZTtpZih2b2lkIDAhPT1sLl9fZClvPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPXJ8fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PXJ8fHIucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxvPW51bGw7ZWxzZXtmb3IoZj1yLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LHIpLG89cn1yZXR1cm4gdm9pZCAwIT09bz9vOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciByO2ZvcihyIGluIHUpXCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fHIgaW4gbHx8SChuLHIsbnVsbCx1W3JdLGkpO2ZvcihyIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtyXXx8XCJjaGlsZHJlblwiPT09cnx8XCJrZXlcIj09PXJ8fFwidmFsdWVcIj09PXJ8fFwiY2hlY2tlZFwiPT09cnx8dVtyXT09PWxbcl18fEgobixyLGxbcl0sdVtyXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIHI7bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pcj1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK3JdPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxyP1Q6SSxyKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQscixvLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxvPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LHIsbyxmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxyLG8sZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9bykmJih1Ll9fZT1lLHUuX19oPSEhYyxvW28uaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQscixvLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYocj0hMCksbnVsbCE9bylmb3IoO188by5sZW5ndGg7XysrKWlmKChzPW9bX10pJiZcInNldEF0dHJpYnV0ZVwiaW4gcz09ISFkJiYoZD9zLmxvY2FsTmFtZT09PWQ6Mz09PXMubm9kZVR5cGUpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09eS52YWx1ZXx8XyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxyO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZOKHRbcl0sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgcixvLGY7bC5fXyYmbC5fXyh1LGkpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIXImJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLG98fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhciYmdD9bdF06bz9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIXImJnQ/dDpvP28uX19lOmkuZmlyc3RDaGlsZCxyKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LHIsbyxmPWEoe30sbC5wcm9wcyk7Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LEEoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIEEobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBGKG4sdCl7cmV0dXJuIG89OCxBKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIFQobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLmM9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBkKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9bnVsbH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxBIGFzIHVzZU1lbW8sRiBhcyB1c2VDYWxsYmFjayxUIGFzIHVzZUNvbnRleHQsZCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC1yYXRpbmcuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC1yYXRpbmcuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0ICcuL2FwcC1yYXRpbmcuc2Nzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0aW5nUHJvcHMge1xuICAgIHN0YXJzOiBudW1iZXI7XG4gICAgcmF0aW5nQ291bnQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwUmF0aW5nKHByb3BzOiBBcHBSYXRpbmdQcm9wcykge1xuICAgIGNvbnN0IHsgc3RhcnMsIHJhdGluZ0NvdW50IH0gPSBwcm9wcztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YXJzKCkge1xuICAgICAgICBjb25zdCBzdGFyRWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgICAgICAgc3RhckVscy5wdXNoKFxuICAgICAgICAgICAgICAgIDxBcHBSYXRpbmdTdGFyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzID49IGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXJzIDwgaSAmJiBzdGFycyA+IGkgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaGFsZidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdvZmYnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFyRWxzO1xuICAgIH1cblxuICAgIGNvbnN0IHJhdGluZ1N0eWxlID0ge1xuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nXCIgc3R5bGU9e3JhdGluZ1N0eWxlfT5cbiAgICAgICAgICAgIHtjcmVhdGVTdGFycygpfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrdW11bG9zLXJhdGluZy1jb3VudFwiPih7cHJvcHMucmF0aW5nQ291bnR9KTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuaW50ZXJmYWNlIEFwcFJhdGluZ1N0YXJQcm9wcyB7XG4gICAgc3RhdGU6ICdvbicgfCAnaGFsZicgfCAnb2ZmJztcbn1cblxuZnVuY3Rpb24gQXBwUmF0aW5nU3Rhcihwcm9wczogQXBwUmF0aW5nU3RhclByb3BzKSB7XG4gICAgbGV0IHN0YXJFbDtcblxuICAgIGlmIChwcm9wcy5zdGF0ZSA9PT0gJ29uJykge1xuICAgICAgICBzdGFyRWwgPSA8c3Bhbj4mIzk3MzM7PC9zcGFuPjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnN0YXRlID09PSAnaGFsZicpIHtcbiAgICAgICAgc3RhckVsID0gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4mIzk3MzQ7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3VtdWxvcy1yYXRpbmctaGFsZnN0YXJcIj4mIzk3MzM7PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhckVsID0gPHNwYW4+JiM5NzM0Ozwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJrdW11bG9zLXJhdGluZy1zdGFyXCI+e3N0YXJFbH08L2Rpdj47XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgRGltZW5zaW9ucywgUG9pbnQgfSBmcm9tICcuLi9jb3JlJztcblxuaW50ZXJmYWNlIFF1YWRyYXRpY0N1cnZlUG9pbnRzIHtcbiAgICBwMTogUG9pbnQ7XG4gICAgcDI6IFBvaW50O1xuICAgIHAzOiBQb2ludDtcbn1cblxuaW50ZXJmYWNlIFN2Z1BvaW50ZXJQcm9wcyB7XG4gICAgYXJlYTogRGltZW5zaW9ucztcbiAgICBxdWFkQ3VydmVQb2ludHM6IFF1YWRyYXRpY0N1cnZlUG9pbnRzO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IFBJX0hBTEYgPSBNYXRoLlBJIC8gMjtcbmNvbnN0IFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCA9IDUwO1xuY29uc3QgUE9JTlRFUl9DVVJWRV9DVFJMX1BPSU5UX0RJU1QgPSAxNTA7XG5cbmZ1bmN0aW9uIGNhbGNQb2ludGVySGVhZEN1cnZlQ29vcmRzRnJvbUN0cmxBbmRUYXJnZXQoXG4gICAgY3RybFBvaW50OiBQb2ludCxcbiAgICB0YXJnZXQ6IFBvaW50XG4pOiBRdWFkcmF0aWNDdXJ2ZVBvaW50cyB7XG4gICAgY29uc3QgcG9pbnRlckRpclJhZHMgPVxuICAgICAgICBNYXRoLmF0YW4yKGN0cmxQb2ludC54IC0gY3RybFBvaW50LngsIHRhcmdldC55IC0gdGFyZ2V0LnkpICsgUElfSEFMRjtcblxuICAgIGNvbnN0IGRpclZlYzogUG9pbnQgPSB7XG4gICAgICAgIHg6IE1hdGguY29zKHBvaW50ZXJEaXJSYWRzKSxcbiAgICAgICAgeTogLU1hdGguc2luKHBvaW50ZXJEaXJSYWRzKVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJ2ZUN0cmxQb2ludDogUG9pbnQgPSB7XG4gICAgICAgIHg6IGRpclZlYy54ICogUE9JTlRFUl9DVVJWRV9DVFJMX1BPSU5UX0RJU1QsXG4gICAgICAgIHk6IGRpclZlYy55ICogUE9JTlRFUl9DVVJWRV9DVFJMX1BPSU5UX0RJU1RcbiAgICB9O1xuXG4gICAgY29uc3QgcG9pbnRlck9mZnNldDogUG9pbnQgPSB7XG4gICAgICAgIHg6IC1jdXJ2ZUN0cmxQb2ludC54ICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNULFxuICAgICAgICB5OiAtZGlyVmVjLnkgKiBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1RcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVTdGFydDogUG9pbnQgPSB7XG4gICAgICAgIHg6XG4gICAgICAgICAgICBNYXRoLmNvcyhwb2ludGVyRGlyUmFkcyAtIFBJX0hBTEYpICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUICtcbiAgICAgICAgICAgIHBvaW50ZXJPZmZzZXQueCxcbiAgICAgICAgeTpcbiAgICAgICAgICAgIC1NYXRoLnNpbihwb2ludGVyRGlyUmFkcyAtIFBJX0hBTEYpICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUICtcbiAgICAgICAgICAgIHBvaW50ZXJPZmZzZXQueVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJ2ZUVuZDogUG9pbnQgPSB7XG4gICAgICAgIHg6XG4gICAgICAgICAgICBNYXRoLmNvcyhwb2ludGVyRGlyUmFkcyArIFBJX0hBTEYpICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUICtcbiAgICAgICAgICAgIHBvaW50ZXJPZmZzZXQueCxcbiAgICAgICAgeTpcbiAgICAgICAgICAgIC1NYXRoLnNpbihwb2ludGVyRGlyUmFkcyArIFBJX0hBTEYpICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUICtcbiAgICAgICAgICAgIHBvaW50ZXJPZmZzZXQueVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwMTogY3VydmVTdGFydCxcbiAgICAgICAgcDI6IGN1cnZlQ3RybFBvaW50LFxuICAgICAgICBwMzogY3VydmVFbmRcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3ZnUG9pbnRlcih7IGFyZWEsIHF1YWRDdXJ2ZVBvaW50cywgY29sb3IgfTogU3ZnUG9pbnRlclByb3BzKSB7XG4gICAgY29uc3QgeyBwMSwgcDIsIHAzIH0gPSBxdWFkQ3VydmVQb2ludHM7XG4gICAgY29uc3QgbGluZVBhdGggPSBgTSAke3AxLnh9ICR7cDEueX0gUSAke3AyLnh9ICR7cDIueX0gJHtwMy54fSAke3AzLnl9YDtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgcDE6IGgxLFxuICAgICAgICBwMjogaDIsXG4gICAgICAgIHAzOiBoM1xuICAgIH0gPSBjYWxjUG9pbnRlckhlYWRDdXJ2ZUNvb3Jkc0Zyb21DdHJsQW5kVGFyZ2V0KHAyLCBwMyk7XG4gICAgY29uc3QgaGVhZFBhdGggPSBgTSAke3AzLnggKyBoMS54fSAke3AzLnkgKyBoMS55fSBRICR7cDMueCArIGgyLnh9ICR7cDMueSArXG4gICAgICAgIGgyLnl9ICR7cDMueCArIGgzLnh9ICR7cDMueSArIGgzLnl9YDtcblxuICAgIGNvbnN0IHN0cm9rZVN0eWxlID0ge1xuICAgICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgICBmaWxsOiAnbm9uZSdcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgdmlld0JveD17YDAgMCAke2FyZWEud2lkdGh9ICR7YXJlYS5oZWlnaHR9YH1cbiAgICAgICAgICAgIHdpZHRoPXtgJHthcmVhLndpZHRofXB4YH1cbiAgICAgICAgICAgIGhlaWdodD17YCR7YXJlYS5oZWlnaHR9cHhgfVxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXtzdHJva2VTdHlsZX0gZD17bGluZVBhdGh9IC8+XG4gICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9e3N0cm9rZVN0eWxlfSBkPXtoZWFkUGF0aH0gLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFByb3BzT2JqZWN0LCBTZXJ2aWNlLCBnZXRJbnN0YWxsSWQgfSBmcm9tICcuJztcbmltcG9ydCB7IGF1dGhlZEZldGNoLCBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBIdHRwTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWwge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHN1YnNjcmliZWQ6IEJvb2xlYW47XG4gICAgbWV0YT86IFByb3BzT2JqZWN0IHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsU3BlYyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHN1YnNjcmliZTogYm9vbGVhbjtcbiAgICBtZXRhPzogUHJvcHNPYmplY3QgfCBudWxsO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgc2hvd0luUG9ydGFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuICAgIH1cblxuICAgIHByaXZhdGUgbWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogSHR0cE1ldGhvZCxcbiAgICAgICAgdXVpZHM6IHN0cmluZ1tdXG4gICAgKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb250ZXh0LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVscy9zdWJzY3JpcHRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoKHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BPU1QnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gdGhlIGNoYW5uZWxzIGdpdmVuIGJ5IHVuaXF1ZSBJRFxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ0RFTEVURScsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbnMgY2hhbm5lbCBzdWJzY3JpcHRpb25zIHRvIHRob3NlIGdpdmVuIGJ5IHVuaXF1ZSBJRC5cbiAgICAgKlxuICAgICAqIEFueSBvdGhlciBzdWJzY3JpcHRpb25zIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBzZXRTdWJzY3JpcHRpb25zKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BVVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBleGlzdGluZyBpbnN0YWxsYXRpb24ncyBjaGFubmVsIHN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBjbGVhclN1YnNjcmlwdGlvbnMoKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJzY3JpcHRpb25zKFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0cyB0aGUgY2hhbm5lbHMgYXZhaWxhYmxlIHRvIHRoaXMgaW5zdGFsbGF0aW9uIGFsb25nIHdpdGggc3Vic2NyaXB0aW9uIHN0YXR1c1xuICAgICAqL1xuICAgIGxpc3RDaGFubmVscygpOiBQcm9taXNlPENoYW5uZWxbXT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb250ZXh0LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVsc2A7XG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2hKc29uPENoYW5uZWxbXT4odGhpcy5jb250ZXh0LCB1cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHVzaCBjaGFubmVsIGFuZCBvcHRpb25hbGx5IHN1YnNjcmliZXMgdGhlIGN1cnJlbnQgaW5zdGFsbGF0aW9uLlxuICAgICAqXG4gICAgICogTmFtZSBpcyBvcHRpb25hbCwgYnV0IHJlcXVpcmVkIGlmIHNob3dJblBvcnRhbCBpcyB0cnVlLlxuICAgICAqL1xuICAgIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbFNwZWM6IENoYW5uZWxTcGVjKTogUHJvbWlzZTxDaGFubmVsPiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNoYW5uZWxTcGVjLnNob3dJblBvcnRhbCAmJlxuICAgICAgICAgICAgKCFjaGFubmVsU3BlYy5uYW1lIHx8ICFjaGFubmVsU3BlYy5uYW1lLmxlbmd0aClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICAgICAgICAnTmFtZSBpcyByZXF1aXJlZCBmb3IgY2hhbm5lbCBjcmVhdGlvbiB3aGVuIHNob3dJblBvcnRhbCBpcyB0cnVlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb250ZXh0LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvY2hhbm5lbHNgO1xuXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHV1aWQ6IGNoYW5uZWxTcGVjLnV1aWQsXG4gICAgICAgICAgICAgICAgbmFtZTogY2hhbm5lbFNwZWMubmFtZSxcbiAgICAgICAgICAgICAgICBzaG93SW5Qb3J0YWw6IEJvb2xlYW4oY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsKSxcbiAgICAgICAgICAgICAgICBtZXRhOiBjaGFubmVsU3BlYy5tZXRhLFxuICAgICAgICAgICAgICAgIGluc3RhbGxJZDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoY2hhbm5lbFNwZWMuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgKHBhcmFtcyBhcyBhbnkpLmluc3RhbGxJZCA9IGluc3RhbGxJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gYXV0aGVkRmV0Y2hKc29uPENoYW5uZWw+KHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBTZXJ2aWNlLFxuICAgIGdldEluc3RhbGxJZFxufSBmcm9tICcuJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdldENhY2hlS2V5cyA9IChrZXk6IHN0cmluZykgPT4gKHtcbiAgICBDT05GSUdfQ0FDSEVfS0VZOiBgJHtrZXl9Q29uZmlnYCxcbiAgICBDT05GSUdfQ0FDSEVfS0VZX1VQREFURUQ6IGAke2tleX1Db25maWdVcGRhdGVkYFxufSk7XG5cbmNvbnN0IE1BWF9DQUNIRV9BR0VfTVMgPSAxICogNjAgKiA2MCAqIDEwMDA7XG5cbmVudW0gQ29uZmlnQ2FjaGVUeXBlIHtcbiAgICBQTEFURk9STSA9ICdwbGF0Zm9ybScsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZzxUQ29uZmlnVHlwZT4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FjaGVLZXk6IHN0cmluZyxcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8VENvbmZpZ1R5cGU+IHtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBnZXRDYWNoZUtleXMoY2FjaGVLZXkpO1xuICAgIGxldCBjb25maWcgPSBhd2FpdCBnZXQ8VENvbmZpZ1R5cGU+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGNvbnN0IGxhc3RMb2FkVGltZSA9XG4gICAgICAgIChhd2FpdCBnZXQ8bnVtYmVyPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVEKSkgPz8gMDtcbiAgICBsZXQgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IGZhbHNlO1xuXG4gICAgaWYgKERhdGUubm93KCkgLSBsYXN0TG9hZFRpbWUgPiBNQVhfQ0FDSEVfQUdFX01TKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnQ29uZmlnIG5ldmVyIHN5bmNlZC9zdGFsZSwgc3luY2luZyBub3cuLi4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uZmlnID0gYXdhaXQgYXV0aGVkRmV0Y2hKc29uPFRDb25maWdUeXBlPihjdHgsIHVybCk7XG4gICAgICAgICAgICB1cGRhdGVkUmVtb3RlQ29uZmlnID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgLy8gTm9vcCAoZmFsbGJhY2sgdG8gbG9jYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlZFJlbW90ZUNvbmZpZykge1xuICAgICAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVksIGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVELCBEYXRlLm5vdygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXRmb3JtQ29uZmlnKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQbGF0Zm9ybUNvbmZpZz4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIChhd2FpdCBsb2FkQ29uZmlnPFBsYXRmb3JtQ29uZmlnPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuUFVTSCl9L3YxL3dlYi9jb25maWdgLFxuICAgICAgICAgICAgQ29uZmlnQ2FjaGVUeXBlLlBMQVRGT1JNLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICkpID8/IHt9XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZGxDb25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPERkbFByb21wdENvbmZpZ1tdIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3Qgd2ViSW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgbG9hZENvbmZpZzxEZGxQcm9tcHRDb25maWdbXT4oXG4gICAgICAgICAgICBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLkRETCl9L3YxL2Jhbm5lcnM/d2ViSW5zdGFsbElkPSR7d2ViSW5zdGFsbElkfWAsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuRERMLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBsb2FkRGRsQ29uZmlnOiBmYWlsZWQgdG8gbG9hZCBEZWZlcnJlZCBEZWVwTGluayBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICApO1xuICAgICAgICAvLyB1bmRlZmluZWQgcmV0dXJuIC8gbm8gY29uZmlnXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGRsQmFubmVyQ29uZmlnRnJvbUNhY2hlKFxuICAgIGJhbm5lclV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKENvbmZpZ0NhY2hlVHlwZS5EREwpO1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBhd2FpdCBnZXQ8RGRsUHJvbXB0Q29uZmlnW10+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncyA9IGNvbmZpZ3MuZmlsdGVyKGMgPT4gYy51dWlkICE9PSBiYW5uZXJVdWlkKTtcblxuICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlncyk7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi9jaGFubmVscyc7XG5cbmNvbnN0IFNES19WRVJTSU9OID0gJzEuMTEuMSc7XG5jb25zdCBTREtfVFlQRSA9IDEwO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbnR5cGUgTmVzdGVkUGljazxULCBLMSBleHRlbmRzIGtleW9mIFQsIEsyIGV4dGVuZHMga2V5b2YgVFtLMV0+ID0ge1xuICAgIFtQMSBpbiBLMV06IHtcbiAgICAgICAgW1AyIGluIEsyXTogVFtLMV1bUDJdO1xuICAgIH07XG59O1xuXG4vL29ubHkgc3lzdGVtIGV2ZW50c1xuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICBNRVNTQUdFX0RFTElWRVJFRCA9ICdrLm1lc3NhZ2UuZGVsaXZlcmVkJyxcbiAgICBNRVNTQUdFX09QRU5FRCA9ICdrLm1lc3NhZ2Uub3BlbmVkJyxcbiAgICBQVVNIX1JFR0lTVEVSRUQgPSAnay5wdXNoLmRldmljZVJlZ2lzdGVyZWQnLFxuICAgIElOU1RBTExfVFJBQ0tFRCA9ICdrLnN0YXRzLmluc3RhbGxUcmFja2VkJyxcbiAgICBVU0VSX0FTU09DSUFURUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0aW9uQ2xlYXJlZCdcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0VHlwZU5hbWUge1xuICAgIEJFTEwgPSAnYmVsbCcsXG4gICAgQUxFUlQgPSAnYWxlcnQnLFxuICAgIEJBTk5FUiA9ICdiYW5uZXInLFxuICAgIERETF9CQU5ORVIgPSAnZGRsX2Jhbm5lcidcbn1cblxuLy8gTm90ZSBkdXBsaWNhdGUgJ2luJyB2cyAnSU4nIGR1ZSB0byBtaXNhbGlnbm1lbnQgaW4gc2VydmVyIGNvbmZpZyBhbmQgcHVibGlzaGVkIGRvY3MgZm9yIG1hbnVhbCBjb25maWdcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9yID0gJ2luJyB8ICdJTicgfCAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcbmV4cG9ydCB0eXBlIEZpbHRlclZhbHVlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUHJvcEZpbHRlciA9IFtzdHJpbmcsIEZpbHRlck9wZXJhdG9yLCBGaWx0ZXJWYWx1ZV07XG5cbmludGVyZmFjZSBQcm9tcHRUcmlnZ2VyIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGFmdGVyU2Vjb25kcz86IG51bWJlcjtcbiAgICBmaWx0ZXJzPzogUHJvcEZpbHRlcltdO1xufVxuXG5pbnRlcmZhY2UgUHJvbXB0T3ZlcmxheUNvbmZpZyB7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsaW5rcz86IHsgbGFiZWw6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xuICAgIGNvbG9yczoge1xuICAgICAgICBzaGFkZTogc3RyaW5nO1xuICAgICAgICBzdHJpcDogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnID0gTmVzdGVkUGljazxcbiAgICBQcm9tcHRPdmVybGF5Q29uZmlnLFxuICAgICdsYWJlbHMnLFxuICAgICdib2R5J1xuPiAmXG4gICAgTmVzdGVkUGljazxQcm9tcHRPdmVybGF5Q29uZmlnLCAnY29sb3JzJywgJ3RleHQnPjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnIHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWcge1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uQmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uRmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29uZmlnIHtcbiAgICBsYWJlbHM6IENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWc7XG4gICAgY29sb3JzOiBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWcge1xuICAgIHByZXNlbnRlZFV1aWRzOiBzdHJpbmdbXSB8ICdhbGwnO1xuICAgIGNoZWNrZWRVdWlkczogc3RyaW5nW10gfCAnbm9uZScgfCAnYWxsJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG4gICAgZGlhbG9nQ29uZmlnOiBDaGFubmVsRGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTdWJBY3Rpb24ge1xuICAgIHR5cGU6ICdzdWJzY3JpYmVUb0NoYW5uZWwnO1xuICAgIGNoYW5uZWxVdWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVpQWN0aW9uVHlwZSB7XG4gICAgREVDTElORSA9ICdkZWNsaW5lJyxcbiAgICBSRU1JTkQgPSAncmVtaW5kJyxcbiAgICBERExfT1BFTl9TVE9SRSA9ICdvcGVuU3RvcmUnLFxuICAgIERETF9PUEVOX0RFRVBMSU5LID0gJ29wZW5EZWVwbGluaydcbn1cblxuaW50ZXJmYWNlIERlY2xpbmVQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERUNMSU5FO1xufVxuXG5pbnRlcmZhY2UgUmVtaW5kUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuUkVNSU5EO1xuICAgIGRlbGF5OiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRBY3Rpb24gPVxuICAgIHwgQ2hhbm5lbFN1YkFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uO1xuXG5leHBvcnQgZW51bSBSZW1pbmRlclRpbWVVbml0IHtcbiAgICBIT1VSUyA9ICdob3VycycsXG4gICAgREFZUyA9ICdkYXlzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGltZVVuaXQ6IFJlbWluZGVyVGltZVVuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgZGVjbGluZTogRGVjbGluZVByb21wdEFjdGlvbiB8IFJlbWluZFByb21wdEFjdGlvbjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrQ29uZmlnIHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRQb3NpdGlvbiB7XG4gICAgVE9QX0xFRlQgPSAndG9wLWxlZnQnLFxuICAgIFRPUF9DRU5URVIgPSAndG9wLWNlbnRlcicsXG4gICAgVE9QX1JJR0hUID0gJ3RvcC1yaWdodCcsXG4gICAgQ0VOVEVSX0xFRlQgPSAnY2VudGVyLWxlZnQnLFxuICAgIENFTlRFUiA9ICdjZW50ZXInLFxuICAgIENFTlRFUl9SSUdIVCA9ICdjZW50ZXItcmlnaHQnLFxuICAgIEJPVFRPTV9MRUZUID0gJ2JvdHRvbS1sZWZ0JyxcbiAgICBCT1RUT01fQ0VOVEVSID0gJ2JvdHRvbS1jZW50ZXInLFxuICAgIEJPVFRPTV9SSUdIVCA9ICdib3R0b20tcmlnaHQnLFxuICAgIFRPUCA9ICd0b3AnLFxuICAgIEJPVFRPTSA9ICdib3R0b20nXG59XG5cbmludGVyZmFjZSBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWU7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG4gICAgb3ZlcmxheT86IFByb21wdE92ZXJsYXlDb25maWc7XG4gICAgc2lsZW50T3ZlcmxheT86IFByb21wdFNpbGVudE92ZXJsYXlDb25maWc7XG4gICAgYWN0aW9ucz86IFByb21wdEFjdGlvbltdO1xufVxuXG5pbnRlcmZhY2UgV2l0aEltYWdlVXJsIHtcbiAgICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBDb25maWcge1xuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBEaWFsb2dMYWJlbENvbmZpZyA9IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb246IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb246IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dMYWJlbENvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nTGFiZWxDb25maWdcbj47XG5cbnR5cGUgRGlhbG9nQ29sb3JDb25maWcgPSB7XG4gICAgZmc6IHN0cmluZztcbiAgICBiZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25GZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25CZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uQmc6IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dDb2xvckNvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nQ29sb3JDb25maWdcbj47XG5cbmludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG59XG5cbi8vIEJFTExcblxudHlwZSBCZWxsTGFiZWxDb25maWcgPSBUb2FzdE1lc3NhZ2UgJiBUb29sdGlwQ29uZmlnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxDb2xvckNvbmZpZyB7XG4gICAgYmVsbDoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbFByb21wdENvbmZpZyBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJFTEw7XG4gICAgbGFiZWxzPzogQmVsbExhYmVsQ29uZmlnO1xuICAgIGNvbG9ycz86IEJlbGxDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uQk9UVE9NX0xFRlQgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT01fUklHSFQ7XG59XG5cbi8vIEFMRVJUXG5cbnR5cGUgQWxlcnRMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEFsZXJ0Q29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkFMRVJUO1xuICAgIGxhYmVsczogQWxlcnRMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEFsZXJ0Q29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkNFTlRFUjtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBCQU5ORVJcblxudHlwZSBCYW5uZXJMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBCYW5uZXJDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPjtcblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CQU5ORVI7XG4gICAgbGFiZWxzOiBCYW5uZXJMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEJhbm5lckNvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT007XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gRERMIEJBTk5FUlxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZyB7XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgcmF0aW5nQ291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBEZGxEaWFsb2dDb2xvckNvbmZpZyA9IERpYWxvZ0NvbG9yQ29uZmlnICYgeyByYXRpbmdGZzogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIE9wZW5TdG9yZVVpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcbnR5cGUgT3BlbkRlZXBMaW5rVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZGxVaUFjdGlvbnMgPSBQcm9tcHRVaUFjdGlvbnMgJiB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGFjY2VwdDogT3BlblN0b3JlVWlBY3Rpb24gfCBPcGVuRGVlcExpbmtVaUFjdGlvbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgRGRsVWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5ERExfQkFOTkVSO1xuICAgIGxhYmVsczogRGlhbG9nTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBEZGxEaWFsb2dDb2xvckNvbmZpZztcbiAgICBhcHBSYXRpbmc/OiBBcHBSYXRpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFB1c2hQcm9tcHRDb25maWcgPVxuICAgIHwgQmVsbFByb21wdENvbmZpZ1xuICAgIHwgQWxlcnRQcm9tcHRDb25maWdcbiAgICB8IEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgRGRsUHJvbXB0Q29uZmlnID0gRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWcgPSBQdXNoUHJvbXB0Q29uZmlnIHwgRGRsUHJvbXB0Q29uZmlnO1xuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnczxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiA9IFJlY29yZDxzdHJpbmcsIFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtQ29uZmlnIHtcbiAgICBwdWJsaWNLZXk6IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIHByb21wdHM/OiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHNhZmFyaVB1c2hJZD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFNES0ZlYXR1cmUge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJyxcbiAgICBFVkVOVFMgPSAnZXZlbnRzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHNlY3JldEtleTogc3RyaW5nO1xuICAgIHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gICAgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgICBmZWF0dXJlcz86IFNES0ZlYXR1cmVbXTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0UmVtaW5kZXIgPVxuICAgIHwge1xuICAgICAgICAgIGRlY2xpbmVkT246IG51bWJlcjtcbiAgICAgIH1cbiAgICB8ICdzdXBwcmVzc2VkJztcblxudHlwZSBTZGtFdmVudFR5cGUgPSAnZXZlbnRUcmFja2VkJztcbmV4cG9ydCB0eXBlIFNka0V2ZW50PFQgPSBhbnk+ID0geyB0eXBlOiBTZGtFdmVudFR5cGU7IGRhdGE6IFQgfTtcbnR5cGUgU2RrRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBTZGtFdmVudCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlY3JldEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXV0aEhlYWRlcjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJQYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgcmVhZG9ubHkgYXV0b1Jlc3Vic2NyaWJlOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGZlYXR1cmVzOiBTREtGZWF0dXJlW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IFNka0V2ZW50SGFuZGxlcltdIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxNYXA6IHsgW2tleSBpbiBTZXJ2aWNlXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICAgICAgICB0aGlzLnNlY3JldEtleSA9IGNvbmZpZy5zZWNyZXRLZXk7XG4gICAgICAgIHRoaXMudmFwaWRQdWJsaWNLZXkgPSBjb25maWcudmFwaWRQdWJsaWNLZXk7XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dGhpcy5hcGlLZXl9OiR7dGhpcy5zZWNyZXRLZXl9YCl9YDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUGF0aCA9IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCA/PyAnL3dvcmtlci5qcyc7XG4gICAgICAgIHRoaXMucHVzaFByb21wdHMgPSBjb25maWcucHVzaFByb21wdHMgPz8gJ2F1dG8nO1xuICAgICAgICB0aGlzLmF1dG9SZXN1YnNjcmliZSA9IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUgPz8gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGNvbmZpZy5mZWF0dXJlcyA/PyBbU0RLRmVhdHVyZS5QVVNIXTtcblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG5cbiAgICAgICAgdGhpcy51cmxNYXAgPSB7XG4gICAgICAgICAgICBbU2VydmljZS5QVVNIXTogXCJodHRwczovL3B1c2gtXCIgKyBjb25maWcucmVnaW9uICsgXCIua3VtdWxvcy5jb21cIixcbiAgICAgICAgICAgIFtTZXJ2aWNlLkVWRU5UU106IFwiaHR0cHM6Ly9ldmVudHMtXCIgKyBjb25maWcucmVnaW9uICsgXCIua3VtdWxvcy5jb21cIixcbiAgICAgICAgICAgIFtTZXJ2aWNlLkRETF06IFwiaHR0cHM6Ly9saW5rcy1cIiArIGNvbmZpZy5yZWdpb24gKyBcIi5rdW11bG9zLmNvbVwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN1YnNjcmliZShldmVudDogU2RrRXZlbnRUeXBlLCBoYW5kbGVyOiBTZGtFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5pbmRleE9mKGhhbmRsZXIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KGV2ZW50OiBTZGtFdmVudFR5cGUsIGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XVtpXSh7XG4gICAgICAgICAgICAgICAgdHlwZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNGZWF0dXJlKGZlYXR1cmU6IFNES0ZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSk7XG4gICAgfVxuXG4gICAgdXJsRm9yU2VydmljZShzZXJ2aWNlOiBTZXJ2aWNlKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybE1hcFtzZXJ2aWNlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyAnQ29uZmlnIG11c3QgYmUgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoY29uZmlnLmZlYXR1cmVzKSAmJiBjb25maWcuZmVhdHVyZXMubGVuZ3RoXG4gICAgICAgICAgICA/IGNvbmZpZy5mZWF0dXJlc1xuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWZlYXR1cmVzIHx8IGZlYXR1cmVzLmluY2x1ZGVzKFNES0ZlYXR1cmUuUFVTSCkpIHtcbiAgICAgICAgcmV0dXJuIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UHVzaENvbmZpZ1ZhbGlkKGNvbmZpZzogYW55KSB7XG4gICAgY29uc3QgcmVxdWlyZWRTdHJpbmdQcm9wcyA9IFsncmVnaW9uJywgJ2FwaUtleScsICdzZWNyZXRLZXknLCAndmFwaWRQdWJsaWNLZXknXTtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcmVxdWlyZWRTdHJpbmdQcm9wcykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ1twcm9wXSAhPT0gJ3N0cmluZycgfHwgY29uZmlnW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgYFJlcXVpcmVkIGNvbmZpZ3VyYXRpb24ga2V5ICcke3Byb3B9JyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICBjb25maWcuc2VydmljZVdvcmtlclBhdGggJiZcbiAgICAgICAgdHlwZW9mIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdzZXJ2aWNlV29ya2VyUGF0aCcgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nIChpZiBzdXBwbGllZClcIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaFJlY2VpdmVkICYmIHR5cGVvZiBjb25maWcub25QdXNoUmVjZWl2ZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnb25QdXNoUmVjZWl2ZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QdXNoT3BlbmVkICYmIHR5cGVvZiBjb25maWcub25QdXNoT3BlbmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaE9wZW5lZCcgbXVzdCBiZSBhIGZ1bmN0aW9uXCI7XG4gICAgfVxufVxuXG5sZXQgaW5zdGFsbElkUHJvbWlzZTogUHJvbWlzZTxJbnN0YWxsSWQ+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xubGV0IGluc3RhbGxJZFNldHRpbmdQcm9taXNlOiBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFsbElkKCk6IFByb21pc2U8SW5zdGFsbElkPiB7XG4gICAgaWYgKGluc3RhbGxJZFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG4gICAgfVxuXG4gICAgaW5zdGFsbElkUHJvbWlzZSA9IGdldDxJbnN0YWxsSWQgfCB1bmRlZmluZWQ+KCdpbnN0YWxsSWQnKS50aGVuKFxuICAgICAgICBpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnN0YWxsSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0SW5zdGFsbElkKHV1aWR2NCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbGxJZDtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gaW5zdGFsbElkUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEluc3RhbGxJZChpbnN0YWxsSWQ6IEluc3RhbGxJZCkgOiBQcm9taXNlPEluc3RhbGxJZD57XG4gICAgcmV0dXJuIHNldCgnaW5zdGFsbElkJywgaW5zdGFsbElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJZCgpOiBQcm9taXNlPFVzZXJJZD4ge1xuICAgIHJldHVybiBnZXQ8VXNlcklkIHwgdW5kZWZpbmVkPigndXNlcklkJykudGhlbihcbiAgICAgICAgdXNlcklkID0+IHVzZXJJZCA/PyBnZXRJbnN0YWxsSWQoKVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NvY2lhdGVVc2VyKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBpZDogVXNlcklkLFxuICAgIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgc2V0KCd1c2VySWQnLCBpZCk7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGF0dHJpYnV0ZXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVEVELCBwcm9wcykudGhlbihfID0+IHt9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyVXNlckFzc29jaWF0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVELCB7XG4gICAgICAgIG9sZFVzZXJJZGVudGlmaWVyOiBjdXJyZW50VXNlcklkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVsKCd1c2VySWQnKTtcbn1cblxuZXhwb3J0IHR5cGUgS3VtdWxvc0V2ZW50ID0ge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZGF0YT86IFByb3BzT2JqZWN0O1xufTtcblxuZXhwb3J0IHR5cGUgRXZlbnRQYXlsb2FkID0gS3VtdWxvc0V2ZW50W107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0V2ZW50KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgcHJvcGVydGllcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFBheWxvYWQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB1dWlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjdHguYnJvYWRjYXN0KCdldmVudFRyYWNrZWQnLCBldmVudHMpO1xuXG4gICAgaWYgKCFpc1N5c3RlbUV2ZW50KHR5cGUpKXtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuRVZFTlRTKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9ldmVudHNgO1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXZlbnRzKVxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGlzU3lzdGVtRXZlbnQodHlwZTogc3RyaW5nKXtcbiAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS52YWx1ZXMoRXZlbnRUeXBlKS5pbmNsdWRlcyh0eXBlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrSW5zdGFsbERldGFpbHMoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICBidW5kbGU6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnLCAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICAgICAgdGFyZ2V0OiAyIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgIH0sXG4gICAgICAgIHNkazoge1xuICAgICAgICAgICAgaWQ6IFNES19UWVBFLFxuICAgICAgICAgICAgdmVyc2lvbjogU0RLX1ZFUlNJT05cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICB2ZXJzaW9uOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgIH0sXG4gICAgICAgIG9zOiB7XG4gICAgICAgICAgICAvLyBEZXRlY3Rpb24gd2lsbCBiZSBwZXJmb3JtZWQgc2VydmVyLXNpZGUgZnJvbSBVQSBkYXRhXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCdcbiAgICAgICAgfSxcbiAgICAgICAgZGV2aWNlOiB7XG4gICAgICAgICAgICAvLyBXaWxsIGJlIGhhbmRsZWQgb24gYmVzdC1lZmZvcnQgYmFzaXMgc2VydmVyLXNpZGVcbiAgICAgICAgICAgIG5hbWU6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgICAgICB0ejpcbiAgICAgICAgICAgICAgICB0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgPyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBpc1NpbXVsYXRvcjogZmFsc2UsXG4gICAgICAgICAgICBsb2NhbGU6IG5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhc2hQYXJ0cyA9IFtcbiAgICAgICAgU0RLX1ZFUlNJT04sXG4gICAgICAgIHBheWxvYWQuYXBwLmJ1bmRsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UudHosXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLmxvY2FsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubmFtZVxuICAgIF07XG4gICAgY29uc3QgaGFzaCA9IGN5cmI1MyhoYXNoUGFydHMuam9pbignfCcpKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdkZXRhaWxzSGFzaCcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0hhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLklOU1RBTExfVFJBQ0tFRCwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0KCdkZXRhaWxzSGFzaCcsIGhhc2gpKVxuICAgICAgICAudGhlbigoKSA9PiB2b2lkIDApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxMaXN0SXRlbSB7XG4gICAgY2hhbm5lbDogQ2hhbm5lbDtcbiAgICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgIGFsbENoYW5uZWxzOiBDaGFubmVsW10sXG4gICAgc2VsZWN0aW9uQ29uZmlnOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWdcbikge1xuICAgIHJldHVybiBhbGxDaGFubmVsc1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgYyA9PlxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICApXG4gICAgICAgIC5tYXA8Q2hhbm5lbExpc3RJdGVtPihjID0+ICh7XG4gICAgICAgICAgICBjaGFubmVsOiB7IC4uLmMgfSxcbiAgICAgICAgICAgIGNoZWNrZWQ6XG4gICAgICAgICAgICAgICAgYy5zdWJzY3JpYmVkLnZhbHVlT2YoKSB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUsIHBhcnNlUXVlcnlTdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBTYWZhcmlQdXNoTWFuYWdlciBmcm9tICcuL3NhZmFyaSc7XG5pbXBvcnQgVzNjUHVzaE1hbmFnZXIgZnJvbSAnLi93M2MnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvblN0YXRlID0gJ3N1YnNjcmliZWQnIHwgJ3Vuc3Vic2NyaWJlZCcgfCAnYmxvY2tlZCc7XG5cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgVzNDID0gMyxcbiAgICBTQUZBUkkgPSA0XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBQVVNIID0gMVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPjtcbiAgICBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShjdHg6IENvbnRleHQpOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGltYWdlVXJsPzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaFBheWxvYWQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICAnay5tZXNzYWdlJzoge1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSDtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgdXJsOiBzdHJpbmcgfCBudWxsO1xuICAgIGltYWdlOiBzdHJpbmcgfCBudWxsO1xuICAgIGljb246IHN0cmluZyB8IG51bGw7XG59XG5cbmxldCBtYW5hZ2VyOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHVzaE9wc01hbmFnZXIoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPiB7XG4gICAgaWYgKG1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciA9PT0gJ3NhZmFyaScpIHtcbiAgICAgICAgbWFuYWdlciA9IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpLnRoZW4oXG4gICAgICAgICAgICBjZmcgPT4gbmV3IFNhZmFyaVB1c2hNYW5hZ2VyKGNmZylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYW5hZ2VyID0gUHJvbWlzZS5yZXNvbHZlKG5ldyBXM2NQdXNoTWFuYWdlcigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrT3BlbkZyb21RdWVyeShjdHg6IENvbnRleHQpIHtcbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyICE9PSAnc2FmYXJpJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xuXG4gICAgaWYgKCFwYXJhbXM/Llsna25pZCddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLk1FU1NBR0VfT1BFTkVELCB7XG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0gsXG4gICAgICAgIGlkOiBOdW1iZXIocGFyYW1zWydrbmlkJ10pXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGNvbnN0IHsgJ2subWVzc2FnZSc6IF8sIC4uLnVzZXJEYXRhIH0gPSBwYXlsb2FkLmRhdGE7XG5cbiAgICBjb25zdCBwdXNoOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgaWQ6IHBheWxvYWQuZGF0YVsnay5tZXNzYWdlJ10uZGF0YS5pZCxcbiAgICAgICAgdGl0bGU6IHBheWxvYWQudGl0bGUsXG4gICAgICAgIG1lc3NhZ2U6IHBheWxvYWQubXNnLFxuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgICAgdXJsOiBwYXlsb2FkLnVybCA/PyB1bmRlZmluZWQsXG4gICAgICAgIGljb25Vcmw6IHBheWxvYWQuaWNvbiA/PyB1bmRlZmluZWQsXG4gICAgICAgIGltYWdlVXJsOiBwYXlsb2FkLmltYWdlID8/IHVuZGVmaW5lZFxuICAgIH07XG4gICAgcmV0dXJuIHB1c2g7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRXZlbnRUeXBlLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgdHJhY2tFdmVudFxufSBmcm9tICcuLic7XG5pbXBvcnQgeyBQdXNoT3BzTWFuYWdlciwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBjeXJiNTMsIGRlZmVyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vcHVzaCc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBoYXNoVG9rZW4oY3R4OiBDb250ZXh0LCB0b2tlbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7dG9rZW59YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhZmFyaVB1c2hNYW5hZ2VyIGltcGxlbWVudHMgUHVzaE9wc01hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2ZnOiBQbGF0Zm9ybUNvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihjZmc6IFBsYXRmb3JtQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY2ZnID0gY2ZnO1xuICAgIH1cbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgICAgIGNvbnN0IHN2Y1VybCA9IGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuUFVTSCl9L3NhZmFyaS8ke2N0eC5hcGlLZXl9YDtcblxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IGRlZmVyPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+KCk7XG5cbiAgICAgICAgd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihcbiAgICAgICAgICAgIHN2Y1VybCxcbiAgICAgICAgICAgIHRoaXMuY2ZnLnNhZmFyaVB1c2hJZCBhcyBzdHJpbmcsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBlcm0pO1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocGVybS5wZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGNmZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpO1xuICAgICAgICBjb25zdCBwZXJtID0gd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKFxuICAgICAgICAgICAgY2ZnLnNhZmFyaVB1c2hJZCBhcyBzdHJpbmdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXBlcm0gfHwgIXBlcm0uZGV2aWNlVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbik7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgICAgICB0eXBlOiBUb2tlblR5cGUuU0FGQVJJLFxuICAgICAgICAgICAgdG9rZW46IHBlcm0uZGV2aWNlVG9rZW4sXG4gICAgICAgICAgICBidW5kbGVJZDogY2ZnLnNhZmFyaVB1c2hJZFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hUb2tlbkhhc2gnLCB0b2tlbkhhc2gpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gYXdhaXQgdGhpcy5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihjdHgpO1xuXG4gICAgICAgIHN3aXRjaCAocGVybSkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IGNmZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpO1xuICAgICAgICBjb25zdCBwZXJtID0gd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKFxuICAgICAgICAgICAgY2ZnLnNhZmFyaVB1c2hJZCBhcyBzdHJpbmdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXBlcm0gfHwgcGVybT8ucGVybWlzc2lvbiA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4gPz8gJycpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoICYmIHBlcm0ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFjdHguYXV0b1Jlc3Vic2NyaWJlIHx8ICF0aGlzLmNmZy5zYWZhcmlQdXNoSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNmZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpO1xuICAgICAgICBjb25zdCBwZXJtID0gd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKFxuICAgICAgICAgICAgY2ZnLnNhZmFyaVB1c2hJZCBhcyBzdHJpbmdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXBlcm0gfHwgcGVybS5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcgfHwgIXBlcm0uZGV2aWNlVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmlwdGlvbjogcGVybWlzc2lvbiBub3QgZ3JhbnRlZCBvciBubyB0b2tlbiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBhbHJlYWR5IGhhdmUgYSB0b2tlbiBoYXNoIGZvciBzYW1lIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICB9XG5cbiAgICBhc3luYyBpc05hdGl2ZVByb21wdFNob3duKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBQdXNoU3Vic2NyaXB0aW9uU3RhdGUsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYmFzZTY0VXJsRW5jb2RlLCBjeXJiNTMsIGdldEJyb3dzZXJOYW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9zdG9yYWdlJztcblxuY29uc3QgQkxVUl9FVkVOVF9USU1FT1VUX01JTExJUyA9IDEwMDA7XG5cbmZ1bmN0aW9uIGhhc1NhbWVLZXkodmFwaWRLZXk6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBQdXNoU3Vic2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhpc3RpbmdTdWJLZXkgPSBzdWJzY3JpcHRpb24ub3B0aW9ucy5hcHBsaWNhdGlvblNlcnZlcktleTtcblxuICAgIGlmICghZXhpc3RpbmdTdWJLZXkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YktleSA9IGJhc2U2NFVybEVuY29kZShleGlzdGluZ1N1YktleSk7XG5cbiAgICByZXR1cm4gc3ViS2V5ID09PSB2YXBpZEtleTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcbiAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKTtcblxuICAgIGlmICghd29ya2VyUmVnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTm8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5O1xufVxuXG5mdW5jdGlvbiBoYXNoU3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCwgc3ViOiBQdXNoU3Vic2NyaXB0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7c3ViLmVuZHBvaW50fWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXM2NQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICBhc3luYyByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnUHVzaCBub3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1N1YiAmJiAhaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIGV4aXN0aW5nU3ViKSkge1xuICAgICAgICAgICAgYXdhaXQgZXhpc3RpbmdTdWI/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiBjdHgudmFwaWRQdWJsaWNLZXksXG4gICAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZW5kcG9pbnRIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIHN1Yik7XG4gICAgICAgIGNvbnN0IGV4cGlyeSA9IHN1Yi5leHBpcmF0aW9uVGltZTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGVuZHBvaW50SGFzaCAmJlxuICAgICAgICAgICAgKCFleGlzdGluZ0V4cGlyeSB8fCBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5XM0MsXG4gICAgICAgICAgICB0b2tlbjogc3ViXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaEVuZHBvaW50SGFzaCcsIGVuZHBvaW50SGFzaCk7XG4gICAgICAgIGF3YWl0IHNldCgncHVzaEV4cGlyZXNBdCcsIGV4cGlyeSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8aW1wb3J0KCcuJykuUHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTtcbiAgICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnPy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoc3ViICYmIHBlcm0gPT09ICdncmFudGVkJyAmJiBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgc3ViKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBub3QgZW5hYmxlZCwgYWJvcnRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgYEF1dG8tcmVzdWJzY3JpYmU6IHBlcm1pc3Npb24gbm90IGdyYW50ZWQsIGFib3J0aW5nOiAke3Blcm19YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGxldCBleGlzdGluZ1N1Ykhhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChleGlzdGluZ1N1Yikge1xuICAgICAgICAgICAgZXhpc3RpbmdTdWJIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIGV4aXN0aW5nU3ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBleGlzdGluZ1N1Ykhhc2ggJiZcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViICYmXG4gICAgICAgICAgICBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpICYmXG4gICAgICAgICAgICAoZXhpc3RpbmdFeHBpcnkgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmliZTogYWxyZWFkeSBoYXZlIGEgbm9uLWV4cGlyZWQgZW5kcG9pbnQgaGFzaCBmb3Igc2FtZSBzdWIsIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnQXV0by1yZXN1YnNjcmliZTogYXR0ZW1wdGluZyByZXN1YnNjcmlwdGlvbicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJOYW1lID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgICAgICBpZiAoJ2Nocm9tZScgIT09IGJyb3dzZXJOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJsdXJFdmVudEZpcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmx1ckV2ZW50RmlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYW5jZWxCbHVyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIGJsdXJFdmVudEZpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCbHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2hlY2tGb3JCbHVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIEJMVVJfRVZFTlRfVElNRU9VVF9NSUxMSVMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHsgb25ET01SZWFkeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RGcmFtZUNvbnRhaW5lciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290RnJhbWUge1xuICAgIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyczogUm9vdEZyYW1lQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9ICdrdW11bG9zLXVpLXJvb3QnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgICBvbkRPTVJlYWR5KCgpID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuZWxlbWVudC5pZCA9IGBrdW11bG9zLXVpLXJvb3QtJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UmVtaW5kZXJcbn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXG4gICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgc2VjcmV0S2V5OiBjb25maWcuc2VjcmV0S2V5LFxuICAgICAgICB2YXBpZFB1YmxpY0tleTogY29uZmlnLnZhcGlkUHVibGljS2V5LFxuICAgICAgICBzZXJ2aWNlV29ya2VyUGF0aDogY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLFxuICAgICAgICBhdXRvUmVzdWJzY3JpYmU6IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUsXG4gICAgICAgIHB1c2hQcm9tcHRzOiBjb25maWcucHVzaFByb21wdHNcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RERExDb25maWcoXG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWdbXVxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXT4ge1xuICAgIHJldHVybiBzZXQ8RGRsUHJvbXB0Q29uZmlnW10+KCdkZGxjb25maWcnLCBjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZyxcbiAgICByZW1pbmRlcjogUHJvbXB0UmVtaW5kZXJcbikge1xuICAgIHJldHVybiBzZXQoYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gLCByZW1pbmRlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0PFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPihgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKTogUHJvbWlzZTxDb250ZXh0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGdldDxDb25maWd1cmF0aW9uPignY29uZmlnJykudGhlbihjb25maWcgPT5cbiAgICAgICAgY29uZmlnID8gbmV3IENvbnRleHQoY29uZmlnKSA6IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IFByb21pc2U8UHVzaFBheWxvYWQ+IHtcbiAgICByZXR1cm4gc2V0KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk6IFByb21pc2U8XG4gICAgUHVzaFBheWxvYWQgfCB1bmRlZmluZWRcbj4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXQ8UHVzaFBheWxvYWQ+KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIGF3YWl0IGRlbCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICByZXR1cm4gcGF5bG9hZCA/PyB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTREtGZWF0dXJlIH0gZnJvbSAnLi9pbmRleCc7XG5cbnR5cGUgRmVhdHVyZURlcGVuZGVuY3kgPSBzdHJpbmcgfCBvYmplY3QgfCBJREJGYWN0b3J5IHwgUHJvbWlzZUNvbnN0cnVjdG9yIHwgTm90aWZpY2F0aW9uIHwgUHVzaE1hbmFnZXIgfCBTZXJ2aWNlV29ya2VyQ29udGFpbmVyIHwgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uO1xuXG5jb25zdCBDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTIDogRmVhdHVyZURlcGVuZGVuY3lbXSA9IFt0eXBlb2YgUHJvbWlzZSwgdHlwZW9mIGZldGNoLCB0eXBlb2YgaW5kZXhlZERCXTtcblxuY29uc3QgRkVBVFVSRV9ERVBFTkRFTkNZX0NIRUNLIDoge1trZXkgaW4gU0RLRmVhdHVyZV06ICgpID0+IGJvb2xlYW59ID0ge1xuICAgICdwdXNoJzogaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCxcbiAgICAnZGRsJzogaXNCcm93c2VyU3VwcG9ydGVkRm9yRGRsXG59O1xuXG4vLyBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXG5leHBvcnQgZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihcbiAgICAgICAgICAgIGNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCgxZTcpLnRvU3RyaW5nKCkgKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZShcbiAgICAgICAgL1swMThdL2csXG4gICAgICAgIGMgPT5cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICBOdW1iZXIoYykgXlxuICAgICAgICAgICAgICAgIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmXG4gICAgICAgICAgICAgICAgICAgICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpKVxuICAgICAgICAgICAgKS50b1N0cmluZygxNilcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBicm93c2VycyA9IFsnZWRnZScsICdmaXJlZm94JywgJ2Nocm9tZScsICdzYWZhcmknXTtcblxuICAgIGZvciAobGV0IGIgb2YgYnJvd3NlcnMpIHtcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoYikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWQoc2RrRmVhdHVyZXM/OiBTREtGZWF0dXJlW10pIHtcbiAgICBzZGtGZWF0dXJlcyA9IHNka0ZlYXR1cmVzID8/IFtdO1xuICAgIGlmICghc2RrRmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgIHNka0ZlYXR1cmVzLnB1c2goU0RLRmVhdHVyZS5QVVNIKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2RrRmVhdHVyZXMuZmlsdGVyKGYgPT4gRkVBVFVSRV9ERVBFTkRFTkNZX0NIRUNLW2ZdKCkpLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2goKSB7XG4gICAgY29uc3QgY29yZURlcGVuZGVuY2llcyA9IFsuLi5DT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTXTtcbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmICgnc2FmYXJpJyA9PT0gYnJvd3Nlcikge1xuICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2godHlwZW9mIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcmVEZXBlbmRlbmNpZXMucHVzaChcbiAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICB0eXBlb2YgTm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcixcbiAgICAgICAgICAgICAgICB0eXBlb2YgUHVzaE1hbmFnZXJcbiAgICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tSZXF1aXJlZChjb3JlRGVwZW5kZW5jaWVzKTtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yRGRsKCkge1xuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKENPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVMpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXM6IEZlYXR1cmVEZXBlbmRlbmN5W10pIHtcbiAgICByZXR1cm4gY29yZURlcGVuZGVuY2llcy5yZWR1Y2UoXG4gICAgICAgIChzdXBwb3J0ZWQ6IGJvb2xlYW4sIGRlcGVuZGVuY3k6IEZlYXR1cmVEZXBlbmRlbmN5KSA9PiBzdXBwb3J0ZWQgJiYgZGVwZW5kZW5jeSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIHRydWVcbiAgICApO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG5jb25zdCBpbXVsID1cbiAgICBNYXRoLmltdWwgfHxcbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGIgfD0gMDsgLy8gZW5zdXJlIHRoYXQgb3BCIGlzIGFuIGludGVnZXIuIG9wQSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29lcmNlZC5cbiAgICAgICAgLy8gZmxvYXRpbmcgcG9pbnRzIGdpdmUgdXMgNTMgYml0cyBvZiBwcmVjaXNpb24gdG8gd29yayB3aXRoIHBsdXMgMSBzaWduIGJpdFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgZm9yIG91ciBjb252aWVuZW5jZTpcbiAgICAgICAgLy8gMS4gMHgwMDNmZmZmZiAvKm9wQSAmIDB4MDAwZmZmZmYqLyAqIDB4N2ZmZmZmZmYgLypvcEIqLyA9IDB4MWZmZmZmN2ZjMDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIHZhciByZXN1bHQgPSAoYSAmIDB4MDAzZmZmZmYpICogYjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChhICYgMHhmZmMwMDAwMCAvKiE9PSAwKi8pIHJlc3VsdCArPSAoKGEgJiAweGZmYzAwMDAwKSAqIGIpIHwgMDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwXG5leHBvcnQgZnVuY3Rpb24gY3lyYjUzKHN0cjogc3RyaW5nLCBzZWVkID0gMCk6IG51bWJlciB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBpbXVsKGgyIF4gY2gsIDE1OTczMzQ2NzcpO1xuICAgIH1cbiAgICBoMSA9XG4gICAgICAgIGltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID1cbiAgICAgICAgaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgcmV0dXJuIDQyOTQ5NjcyOTYgKiAoMjA5NzE1MSAmIGgyKSArIChoMSA+Pj4gMCk7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2goXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IG1ldGhvZDogJ0dFVCcgfVxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/PyB7fTtcblxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGN0eC5hdXRoSGVhZGVyLFxuICAgICAgICAuLi5leGlzdGluZ0hlYWRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZWRGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU6IG51bWJlciwgc3RhdHVzVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGBhdXRoZWQgZmV0Y2ggZmFpbGVkOiAke3N0YXR1c0NvZGV9LCAke3N0YXR1c1RleHR9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2hKc29uPFQ+KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdFxuKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCBvcHRpb25zKS50aGVuKHIgPT4ge1xuICAgICAgICBpZiAoIXIub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoZWRGZXRjaEVycm9yKHIuc3RhdHVzLCByLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHIuanNvbigpO1xuICAgIH0pO1xufVxuXG4vLyBCYXNlZCBvbiB0aGUgYWxwaGFiZXRzIGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0NjQ4IFRhYmxlcyAxICYgMlxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFVybEVuY29kZShidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbnRzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBiYXNlNjRFbmNvZGVkID0gYnRvYShcbiAgICAgICAgaW50cy5yZWR1Y2UoKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLCAnJylcbiAgICApO1xuICAgIGNvbnN0IHVybFZhcmlhbnQgPSBiYXNlNjRFbmNvZGVkXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgJycpO1xuXG4gICAgcmV0dXJuIHVybFZhcmlhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VXb3JrZXIoXG4gICAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnU2VydmljZVdvcmtlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIHtcbiAgICBjb25zdCBkZWZlcnJlZCA9IHtcbiAgICAgICAgcmVzb2x2ZTogKG51bGwgYXMgdW5rbm93bikgYXMgKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLFxuICAgICAgICByZWplY3Q6IChudWxsIGFzIHVua25vd24pIGFzIChyZWFzb24/OiBhbnkpID0+IHZvaWQsXG4gICAgICAgIHByb21pc2U6IChudWxsIGFzIHVua25vd24pIGFzIFByb21pc2U8VD5cbiAgICB9O1xuXG4gICAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcoXG4gICAgcXM6IHN0cmluZyA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICBleGNsdWRlZFF1ZXJ5S2V5czogc3RyaW5nW10gPSBbXVxuKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHF1ZXJ5ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcXVlcnkgPSBxc1xuICAgICAgICAgICAgLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgICAgIC5tYXAodmFycyA9PiB2YXJzLnNwbGl0KCc9JykpXG4gICAgICAgICAgICAubWFwKHBhaXJzID0+IHBhaXJzLm1hcChkZWNvZGVVUklDb21wb25lbnQpKVxuICAgICAgICAgICAgLmZpbHRlcihwYWlycyA9PiBleGNsdWRlZFF1ZXJ5S2V5cy5pbmRleE9mKHBhaXJzWzBdKSA9PT0gLTEpXG4gICAgICAgICAgICAucmVkdWNlKChxLCBwYWlyKSA9PiAoeyAuLi5xLCBbcGFpclswXV06IHBhaXJbMV0gfSksIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRPTVJlYWR5KGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9hbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8bW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ2xpZW50TWVzc2FnZVR5cGUsXG4gICAgRmluZ2VycHJpbnRDb21wb25lbnRzLFxuICAgIEhvc3RNZXNzYWdlLFxuICAgIEhvc3RNZXNzYWdlVHlwZVxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYsIGggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmNvbnN0IEZQX0NBUFRVUkVfVVJMID0gJ2h0dHBzOi8vcGQuYXBwLmRlbGl2ZXJ5JztcblxuZW51bSBDYXB0dXJlU3RhdGUge1xuICAgIElETEUsXG4gICAgQ0FQVFVSSU5HXG59XG5cbmludGVyZmFjZSBGcENhcHR1cmVQcm9wcyB7XG4gICAgb25DYXB0dXJlZDogKGNvbXBvbmVudHM6IEZpbmdlcnByaW50Q29tcG9uZW50cykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEZwQ2FwdHVyZVN0YXRlIHtcbiAgICBpc1JlYWR5OiBib29sZWFuO1xuICAgIGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcENhcHR1cmUgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRnBDYXB0dXJlUHJvcHMsXG4gICAgRnBDYXB0dXJlU3RhdGVcbj4ge1xuICAgIHByaXZhdGUgaUZyYW1lUmVmOiBSZWZPYmplY3Q8SFRNTElGcmFtZUVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEZwQ2FwdHVyZVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmlGcmFtZVJlZiA9IGNyZWF0ZVJlZjxIVE1MSUZyYW1lRWxlbWVudD4oKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5JRExFXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKF86IEZwQ2FwdHVyZVByb3BzLCBuZXh0U3RhdGU6IEZwQ2FwdHVyZVN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHsgaXNSZWFkeSwgY2FwdHVyZVN0YXRlIH0gPSBuZXh0U3RhdGU7XG4gICAgICAgIGNvbnN0IHByZXZDYXB0dXJlU3RhdGUgPSB0aGlzLnN0YXRlLmNhcHR1cmVTdGF0ZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1JlYWR5ICYmXG4gICAgICAgICAgICBjYXB0dXJlU3RhdGUgPT09IENhcHR1cmVTdGF0ZS5DQVBUVVJJTkcgJiZcbiAgICAgICAgICAgIHByZXZDYXB0dXJlU3RhdGUgPT09IENhcHR1cmVTdGF0ZS5JRExFXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEhvc3RNZXNzYWdlVHlwZS5SRVFVRVNUX0ZJTkdFUlBSSU5UXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0RnAoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhgRnBDYXB1cmU6IHJlcXVlc3RpbmcgZnAgY2FwdHVyZWApO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhcHR1cmVTdGF0ZSAhPT0gQ2FwdHVyZVN0YXRlLklETEUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZwQ2FwdHVyZS5yZXF1ZXN0RnA6IGNhcHR1cmVTdGF0ZSBub3QgSURMRScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcHR1cmVTdGF0ZTogQ2FwdHVyZVN0YXRlLkNBUFRVUklORyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZwQ2FwdXJlOiBtZXNzYWdlICR7ZS5kYXRhLnR5cGV9IHJlY2VpdmVkIGZyb20gJHtlLm9yaWdpbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGUuZGF0YTtcblxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IEZQX0NBUFRVUkVfVVJMKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDbGllbnRNZXNzYWdlVHlwZS5SRUFEWTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZWFkeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TWVzc2FnZVR5cGUuRklOR0VSUFJJTlRfR0VORVJBVEVEOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5JRExFIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNhcHR1cmVkKG1lc3NhZ2UuZGF0YS5jb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGRpc3BhdGNoTWVzc2FnZSA9IChtZXNzYWdlOiBIb3N0TWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICBgRnBDYXB1cmU6IGRpc3BhdGNoaW5nICR7bWVzc2FnZS50eXBlfSBtZXNzYWdlIHRvIGNhcHR1cmUgZnJhbWVgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5pRnJhbWVSZWYuY3VycmVudD8uY29udGVudFdpbmRvdztcblxuICAgICAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIEZQX0NBUFRVUkVfVVJMKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pRnJhbWVSZWZ9XG4gICAgICAgICAgICAgICAgc3JjPXtGUF9DQVBUVVJFX1VSTH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMCwgaGVpZ2h0OiAwIH19XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTZXJ2aWNlLCBnZXRJbnN0YWxsSWQgfSBmcm9tICcuLi9jb3JlJztcblxuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBhdXRoZWRGZXRjaCB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZENsaWNrUmVxdWVzdChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgYmFubmVyVWlkOiBzdHJpbmcsXG4gICAgZmluZ2VycHJpbnQ6IEZpbmdlcnByaW50Q29tcG9uZW50c1xuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHVybCA9IGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuRERMKX0vdjEvYmFubmVycy8ke2Jhbm5lclVpZH0vdGFwc2A7XG4gICAgY29uc3Qgd2ViSW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG5cbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHdlYkluc3RhbGxJZCxcbiAgICAgICAgICAgIGZpbmdlcnByaW50XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG4iLCJcbnR5cGUgTWVzc2FnZTxULCBEID0gbmV2ZXI+ID1cbiAgICB8IHtcbiAgICAgICAgdHlwZTogVDtcbiAgICB9XG4gICAgfCB7IHR5cGU6IFQ7IGRhdGE6IEQgfTtcblxuZXhwb3J0IGVudW0gSG9zdE1lc3NhZ2VUeXBlIHtcbiAgICBSRVFVRVNUX0ZJTkdFUlBSSU5UID0gJ1JFUVVFU1RfRklOR0VSUFJJTlQnLFxufVxuXG5leHBvcnQgZW51bSBDbGllbnRNZXNzYWdlVHlwZSB7XG4gICAgUkVBRFkgPSAnUkVBRFknLFxuICAgIEZJTkdFUlBSSU5UX0dFTkVSQVRFRCA9ICdGSU5HRVJQUklOVF9HRU5FUkFURUQnLFxufVxuXG5leHBvcnQgdHlwZSBGaW5nZXJwcmludENvbXBvbmVudHMgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG5leHBvcnQgdHlwZSBIb3N0TWVzc2FnZSA9IE1lc3NhZ2U8SG9zdE1lc3NhZ2VUeXBlLlJFUVVFU1RfRklOR0VSUFJJTlQ+O1xuXG5leHBvcnQgdHlwZSBDbGllbnRNZXNzYWdlID1cbiAgICB8IE1lc3NhZ2U8Q2xpZW50TWVzc2FnZVR5cGUuUkVBRFk+XG4gICAgfCBNZXNzYWdlPFxuICAgICAgICBDbGllbnRNZXNzYWdlVHlwZS5GSU5HRVJQUklOVF9HRU5FUkFURUQsXG4gICAgICAgIHsgY29tcG9uZW50czogRmluZ2VycHJpbnRDb21wb25lbnRzIH1cbiAgICA+O1xuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgSW5zdGFsbElkLFxuICAgIFByb3BzT2JqZWN0LFxuICAgIFNES0ZlYXR1cmUsXG4gICAgVXNlcklkLFxuICAgIGFzc2VydENvbmZpZ1ZhbGlkLFxuICAgIGFzc29jaWF0ZVVzZXIsXG4gICAgZ2V0SW5zdGFsbElkLFxuICAgIGdldFVzZXJJZCxcbiAgICBzZXRJbnN0YWxsSWQsXG4gICAgdHJhY2tFdmVudCxcbiAgICB0cmFja0luc3RhbGxEZXRhaWxzXG59IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgeyBXb3JrZXJNZXNzYWdlVHlwZSwgaXNLdW11bG9zV29ya2VyTWVzc2FnZSB9IGZyb20gJy4vd29ya2VyL21lc3NhZ2luZyc7XG5pbXBvcnQge1xuICAgIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkLFxuICAgIHBlcnNpc3RDb25maWcsXG4gICAgc2V0XG59IGZyb20gJy4vY29yZS9zdG9yYWdlJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uLFxuICAgIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkLFxuICAgIHRyYWNrT3BlbkZyb21RdWVyeVxufSBmcm9tICcuL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBpc01vYmlsZSwgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIH0gZnJvbSAnLi9jb3JlL3V0aWxzJztcblxuaW1wb3J0IERkbE1hbmFnZXIgZnJvbSAnLi9wcm9tcHRzL2RkbC9tYW5hZ2VyJztcbmltcG9ydCB7IFByb21wdE1hbmFnZXIgfSBmcm9tICcuL3Byb21wdHMnO1xuaW1wb3J0IFJvb3RGcmFtZSBmcm9tICcuL2NvcmUvcm9vdC1mcmFtZSc7XG5cbmludGVyZmFjZSBLdW11bG9zQ29uZmlnIGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XG4gICAgb25QdXNoUmVjZWl2ZWQ/OiAocGF5bG9hZDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24pID0+IHZvaWQ7XG4gICAgb25QdXNoT3BlbmVkPzogKHBheWxvYWQ6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uKSA9PiB2b2lkO1xuICAgIGluc3RhbGxJZDogSW5zdGFsbElkO1xuICAgIHVzZXJJZD86IFVzZXJJZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS3VtdWxvcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25maWc6IEt1bXVsb3NDb25maWc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZVdvcmtlclJlZz86IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj47XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9tcHRNYW5hZ2VyPzogUHJvbXB0TWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRkbE1hbmFnZXI/OiBEZGxNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcm9vdEZyYW1lOiBSb290RnJhbWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEt1bXVsb3NDb25maWcpIHtcbiAgICAgICAgYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnKTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoY29uZmlnKTtcblxuICAgICAgICB0aGlzLm1heWJlUGVyc2lzdEluc3RhbGxJZEFuZFVzZXJJZChjb25maWcpO1xuICAgICAgICBwZXJzaXN0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucm9vdEZyYW1lID0gbmV3IFJvb3RGcmFtZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUmVnID0gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9tcHRNYW5hZ2VyID0gbmV3IFByb21wdE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RnJhbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNGZWF0dXJlKFNES0ZlYXR1cmUuRERMKSkge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAnRGRsTWFuYWdlcjogRERMIGZlYXR1cmUgc3VwcG9ydCBvbmx5IGF2YWlsYWJsZSBvbiBtb2JpbGUgZGV2aWNlcy4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGRsTWFuYWdlciA9IG5ldyBEZGxNYW5hZ2VyKHRoaXMuY29udGV4dCwgdGhpcy5yb290RnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBtYXliZVBlcnNpc3RJbnN0YWxsSWRBbmRVc2VySWQoY29uZmlnOiBLdW11bG9zQ29uZmlnKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBnZXRJbnN0YWxsSWQoKVxuICAgICAgICAgICAgLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFsbElkICE9PSBjb25maWcuaW5zdGFsbElkKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5zdGFsbElkKGNvbmZpZy5pbnN0YWxsSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb25maWcudXNlcklkID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgZ2V0VXNlcklkKClcbiAgICAgICAgICAgIC50aGVuKHVzZXJJZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCAhPT0gY29uZmlnLnVzZXJJZCl7XG4gICAgICAgICAgICAgICAgICAgIGFzc29jaWF0ZVVzZXIodGhpcy5jb250ZXh0LCBjb25maWcudXNlcklkISk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgYXNzb2NpYXRlVXNlcihpZGVudGlmaWVyOiBVc2VySWQsIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYXNzb2NpYXRlVXNlcih0aGlzLmNvbnRleHQsIGlkZW50aWZpZXIsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQodHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNrRXZlbnQodGhpcy5jb250ZXh0LCB0eXBlLCBwcm9wZXJ0aWVzKS50aGVuKF8gPT4gdm9pZCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1nciA9IGF3YWl0IGdldFB1c2hPcHNNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1nclxuICAgICAgICAgICAgLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnZ3JhbnRlZCcgIT09IHBlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1nci5wdXNoUmVnaXN0ZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Xb3JrZXJNZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGUuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZS5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25QdXNoUmVjZWl2ZWQ/LihwdXNoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgYXN5bmMgbWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk7XG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHVzaCA9IG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKHBheWxvYWQpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaE9wZW5lZD8uKHB1c2gpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBCZWxsUHJvbXB0Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMLCBpbnZlcnNlUG9zaXRpb24sIFByb21wdFVpUHJvcHMsIFRvb2x0aXAgfSBmcm9tIFwiLi4vdWlcIjtcblxuZXhwb3J0IGNsYXNzIEJlbGwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbXB0VWlQcm9wczxCZWxsUHJvbXB0Q29uZmlnPiwgbmV2ZXI+IHtcbiAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtcHJvbXB0LSR7dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9IGt1bXVsb3MtYmVsbC1jb250YWluZXIga3VtdWxvcy1iZWxsLWNvbnRhaW5lci0ke3RoaXMucHJvcHMuY29uZmlnLnBvc2l0aW9ufWA7XG4gICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgdG9vbHRpcFBvcyA9IGludmVyc2VQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgY29uc3QgYmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmJnO1xuICAgICAgY29uc3QgZmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmZnO1xuXG4gICAgICBjb25zdCBiZWxsU3R5bGUgPSB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGZnQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iZWxsLWlubmVyIGt1bXVsb3MtdG9vbHRpcC1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2JlbGxTdHlsZSBhcyBhbnl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS44OSAyIDIgMnptNi02di01YzAtMy4wNy0xLjY0LTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjYzIDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17ZmdDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcG9zaXRpb249e3Rvb2x0aXBQb3N9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcubGFiZWxzPy50b29sdGlwPy5zdWJzY3JpYmUgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBEZGxCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UG9zaXRpb24sXG4gICAgVWlBY3Rpb25UeXBlXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBSYXRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FwcC1yYXRpbmcnO1xuaW1wb3J0IERlZXBsaW5rQnV0dG9uIGZyb20gJy4vZGVlcGxpbmstYnV0dG9uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhbm5lckljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9LFxuICAgIGNsb3NlSWNvblN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgaGVpZ2h0OiAxMlxuICAgIH1cbn07XG5cbmNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2t1bXVsb3MtcHJvbXB0JyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29udGFpbmVyJyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29tcGFjdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0JyxcbiAgICAna3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0J1xuXTtcblxuY29uc3QgU0hPV19DT1BZX1RPQVNUX0RFTEFZID0gMTAwMDtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG4gICAgb25Db25maXJtOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6IChjb25maWc6IERkbEJhbm5lclByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBkaW1lbnNpb25zOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEZGxCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRGRsQmFubmVyUHJvcHMsXG4gICAge1xuICAgICAgICBzaG93Q29weVRvYXN0OiBib29sZWFuO1xuICAgIH1cbj4ge1xuICAgIHByaXZhdGUgY29udGFpbmVyUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERkbEJhbm5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZiA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2hvd0NvcHlUb2FzdDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaW1lbnNpb25zKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25maXJtID0gKGFjdGlvblR5cGU6IFVpQWN0aW9uVHlwZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93Q29weVRvYXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvcHlUb2FzdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29weVRvYXN0OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICB9LCBTSE9XX0NPUFlfVE9BU1RfREVMQVkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGdldENzc0NsYXNzZXMocHJvbXB0UG9zaXRpb246IFByb21wdFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAuLi5DTEFTU0VTLFxuICAgICAgICAgICAgYGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7cHJvbXB0UG9zaXRpb259YFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIFtQcm9tcHRQb3NpdGlvbi5UT1AsIFByb21wdFBvc2l0aW9uLkJPVFRPTV0uaW5jbHVkZXMocHJvbXB0UG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGBrdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtJHtwcm9tcHRQb3NpdGlvbn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24sIGxhYmVscywgY29sb3JzLCBpbWFnZVVybCwgYXBwUmF0aW5nIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgYWNjZXB0QWN0aW9uIH0gPSBsYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkZnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkZnLFxuICAgICAgICAgICAgcmF0aW5nRmdcbiAgICAgICAgfSA9IGNvbG9ycztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDc3NDbGFzc2VzKHBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWNsaW5lQWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY3Rpb25TdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogYWNjZXB0QWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYW5uZXJJY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuYmFubmVySWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzPXtjbGFzc2VzfSByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGVjbGluZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2FuY2VsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJiMxMDAwNjtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJJY29uU3R5bGV9IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItaWNvblwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYm9keVwiPntib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YXBwUmF0aW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdDb3VudD17YXBwUmF0aW5nLnJhdGluZ0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzPXthcHBSYXRpbmcucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyYXRpbmdGZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8RGVlcGxpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEFjdGlvbnM9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dDb3B5VG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy10b2FzdFwiPkxpbmsgQ29waWVkPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBEZGxVaUFjdGlvbnMsIFVpQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgY29weSBmcm9tICdjbGlwYm9hcmQtY29weSc7XG5cbmludGVyZmFjZSBEZWVwbGlua0J1dHRvblByb3BzIHtcbiAgICBzdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwcm9tcHRBY3Rpb25zOiBEZGxVaUFjdGlvbnM7XG4gICAgb25BY3Rpb246IChhY3Rpb25UeXBlOiBVaUFjdGlvblR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZXBsaW5rQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIERlZXBsaW5rQnV0dG9uUHJvcHMsXG4gICAgbmV2ZXJcbj4ge1xuICAgIHByaXZhdGUgaGFuZGxlQWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB1aUFjdGlvbnM6IHsgYWNjZXB0IH1cbiAgICAgICAgfSA9IHRoaXMucHJvcHMucHJvbXB0QWN0aW9ucztcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICBjb3B5KGFjY2VwdC5kZWVwTGlua1VybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuYWJsZSB0byBjYXB0dXJlIGRlZXBsaW5rIHVybCBmb3IgZGVmZXJyZWQgYXBwIHBpY2t1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgSGFuZGxlIERlZXBMaW5rIEFjdGlvbjogdW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlICcke2FjY2VwdFsndHlwZSddfSdgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzOiBjc3NDbGFzcywgdGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y3NzQ2xhc3N9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVBY3Rpb259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFNka0V2ZW50XG59IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHtcbiAgICBsb2FkRGRsQ29uZmlnLFxuICAgIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZVxufSBmcm9tICcuLi8uLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciB9IGZyb20gJy4uL3Byb21wdC1yZW1pbmRlcic7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBzZW5kQ2xpY2tSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZnAnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi4vdHJpZ2dlcnMnO1xuXG5leHBvcnQgZW51bSBEZGxNYW5hZ2VyU3RhdGUge1xuICAgIExPQURJTkcgPSAnbG9hZGluZycsXG4gICAgUkVBRFkgPSAncmVhZHknXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERkbE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRkbENvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuICAgIHByaXZhdGUgY29uZmlnPzogUmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPjtcbiAgICBwcml2YXRlIGFjdGl2ZUNvbmZpZ3M/OiBEZGxQcm9tcHRDb25maWdbXSA9IFtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJpZ2dlckZpbHRlcjogUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPERkbFByb21wdENvbmZpZz47XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRGRsTWFuYWdlcjogaW5pdGlhbGlzaW5nJyk7XG5cbiAgICAgICAgdGhpcy5kZGxDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdkZGwnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckZpbHRlciA9IG5ldyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8RGRsUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIChfOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29uZmlncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGNvbXBvbmVudHM/OiBGaW5nZXJwcmludENvbXBvbmVudHNcbiAgICApID0+IHtcbiAgICAgICAgaWYgKCEhY29tcG9uZW50cykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZENsaWNrUmVxdWVzdCh0aGlzLmNvbnRleHQsIHByb21wdC51dWlkLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZShwcm9tcHQudXVpZCk7XG5cbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG5cbiAgICAgICAgdGhpcy5wZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb24ocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNhbmNlbGxlZCA9IChwcm9tcHQ6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQpO1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoaWRlUHJvbXB0KHByb21wdDogRGRsUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ29uZmlncyA9IHRoaXMuYWN0aXZlQ29uZmlncz8uZmlsdGVyKFxuICAgICAgICAgICAgYyA9PiBjLnV1aWQgIT09IHByb21wdC51dWlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbihjb25maWc6IERkbFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb24gPSBjb25maWcudWlBY3Rpb25zLmFjY2VwdDtcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdEFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi51cmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi5kZWVwTGlua1VybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXIucGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uOiBVbnN1cHBvcnRlZCBhY2NlcHQgYWN0aW9uIHR5cGUsIHVuYWJsZSB0byBwZXJmb3JtIHJlZGlyZWN0aW9uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBEZGxNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIERkbE1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IERkbE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gYXdhaXQgdGhpcy5sb2FkQ29uZmlnKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5SRUFEWTpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHRoaXMuYWN0aXZlQ29uZmlncz8uc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghcHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5yZW5kZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKHByb21wdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlciA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdCBhcyBEZGxQcm9tcHRDb25maWd9XG4gICAgICAgICAgICAgICAgY29udGV4dD17dGhpcy5jb250ZXh0fVxuICAgICAgICAgICAgICAgIG9uQmFubmVyQ29uZmlybT17dGhpcy5vbkJhbm5lckNvbmZpcm19XG4gICAgICAgICAgICAgICAgb25CYW5uZXJDYW5jZWxsZWQ9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpIHtcbiAgICAgICAgcmVuZGVyKG51bGwsIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlQWN0aXZlQ29uZmlncygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZENvbmZpZ3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJGaWx0ZXIuZmlsdGVyUHJvbXB0cyhcbiAgICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hlZENvbmZpZ3MuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbmZpZ3M/LmluZGV4T2YoYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ3MucHVzaChjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlnKCk6IFByb21pc2U8XG4gICAgICAgIFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz4gfCB1bmRlZmluZWRcbiAgICA+IHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IGF3YWl0IGxvYWREZGxDb25maWcodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjb25maWdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlncy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPj4oKGJhZywgYykgPT4ge1xuICAgICAgICAgICAgYmFnW2MudXVpZF0gPSBjO1xuICAgICAgICAgICAgcmV0dXJuIGJhZztcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCwgRnJhZ21lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgRGRsUHJvbXB0Q29uZmlnLCBVaUFjdGlvblR5cGUsIENvbnRleHQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IERkbEJhbm5lciB9IGZyb20gJy4vZGRsLWJhbm5lcic7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7IFByb21wdFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgRnBDYXB0dXJlIGZyb20gJy4uLy4uL2ZwL2ZwLWNhcHR1cmUnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWc7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBvbkJhbm5lckNvbmZpcm06IChcbiAgICAgICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGZpbmdlcnByaW50Q29tcG9uZW50cz86IEZpbmdlcnByaW50Q29tcG9uZW50c1xuICAgICkgPT4gdm9pZDtcbiAgICBvbkJhbm5lckNhbmNlbGxlZDogKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgcmVxdWVzdEZwQ2FwdHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWkgZXh0ZW5kcyBDb21wb25lbnQ8VWlQcm9wcywgVWlTdGF0ZT4ge1xuICAgIHByaXZhdGUgc2l0ZU1hcmdpbj86IG51bWJlcjtcbiAgICBwcml2YXRlIHNpdGVUcmFuc2l0aW9uPzogc3RyaW5nO1xuICAgIHByaXZhdGUgZnBSZWY6IFJlZk9iamVjdDxGcENhcHR1cmU+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFVpUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXF1ZXN0RnBDYXB0dXJlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZnBSZWYgPSBjcmVhdGVSZWY8RnBDYXB0dXJlPigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EaW1lbnNpb25zID0gKF9iYW5uZXJXaWR0aDogbnVtYmVyLCBiYW5uZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2l0ZU1hcmdpbiA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICAgICAgPyAnbWFyZ2luLXRvcCdcbiAgICAgICAgICAgICAgICAgICAgOiAnbWFyZ2luLWJvdHRvbSdcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zaXRlVHJhbnNpdGlvbiA9IGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLkJPVFRPTSkge1xuICAgICAgICAgICAgYmFubmVySGVpZ2h0ICs9IDIwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gYmFubmVySGVpZ2h0ICsgdGhpcy5zaXRlTWFyZ2luO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4zNzVzIGVhc2UgMHMnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW1xuICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgPyAnbWFyZ2luVG9wJ1xuICAgICAgICAgICAgICAgIDogJ21hcmdpbkJvdHRvbSdcbiAgICAgICAgXSA9IGAke29mZnNldH1weGA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDb25maXJtID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvbiA9IGNvbmZpZy51aUFjdGlvbnMuYWNjZXB0O1xuXG4gICAgICAgIHN3aXRjaCAoYWNjZXB0QWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFOlxuICAgICAgICAgICAgICAgIHRoaXMuZnBSZWYuY3VycmVudD8ucmVxdWVzdEZwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VpLm9uQmFubmVyQ29uZmlybTogVW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlLCB1bmFibGUgdG8gY29uZmlybSBiYW5uZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ2FuY2VsbGVkID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDYW5jZWxsZWQoY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkNhcHR1cmVGcCA9IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJhbm5lckNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcsIGNvbXBvbmVudHMpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9keVN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc2l0ZVRyYW5zaXRpb24gPz8gJyc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtcbiAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgID8gJ21hcmdpblRvcCdcbiAgICAgICAgICAgICAgICA6ICdtYXJnaW5Cb3R0b20nXG4gICAgICAgIF0gPSB0aGlzLnNpdGVNYXJnaW4gPyBgJHt0aGlzLnNpdGVNYXJnaW59cHhgIDogJyc7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPERkbEJhbm5lclxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5vbkJhbm5lckNhbmNlbGxlZH1cbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9ucz17dGhpcy5vbkRpbWVuc2lvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RnBDYXB0dXJlIHJlZj17dGhpcy5mcFJlZn0gb25DYXB0dXJlZD17dGhpcy5vbkNhcHR1cmVGcH0gLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge1xuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbHNEaWFsb2dQcm9wcyB7XG4gICAgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcbiAgICBvbkNvbmZpcm06IChjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsc0RpYWxvZ1Byb3BzLFxuICAgIENoYW5uZWxEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxzRGlhbG9nUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnMpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckRpYWxvZyA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHthY3Rpb24uZGlhbG9nQ29uZmlnLnBvc2l0aW9ufWA7XG5cbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb25maXJtQWN0aW9uIH0gPSBhY3Rpb24uZGlhbG9nQ29uZmlnLmxhYmVscztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5jb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uZmlybUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogY29uZmlybUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpQ29udGV4dD8ucGxhdGZvcm1Db25maWcuaWNvblVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvblwiXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29uZmlybUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJEaWFsb2d9PC9VSUNvbnRleHQuQ29uc3VtZXI+O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBDaGFubmVsTGlzdEl0ZW0gfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0UHJvcHMge1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXTtcbiAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkOiAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbExpc3RTdGF0ZSB7XG4gICAgY2hhbm5lbHM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIENoYW5uZWxMaXN0UHJvcHMsXG4gICAgQ2hhbm5lbExpc3RTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxMaXN0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsczogWy4uLnRoaXMucHJvcHMuY2hhbm5lbExpc3RdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkKHRoaXMuc3RhdGUuY2hhbm5lbHMpO1xuICAgIH1cblxuICAgIG9uQ2hhbm5lbENoZWNrQ2hhbmdlKGNoYW5uZWxVdWlkOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3RhdGUuY2hhbm5lbHMuZmluZChcbiAgICAgICAgICAgIGMgPT4gYy5jaGFubmVsLnV1aWQgPT09IGNoYW5uZWxVdWlkXG4gICAgICAgICk7XG4gICAgICAgIGl0ZW0hLmNoZWNrZWQgPSBjaGVja2VkO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnN0YXRlLmNoYW5uZWxzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNoYW5uZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoYW5uZWwudXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hhbm5lbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGguSlNYLlRhcmdldGVkRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5uZWxDaGVja0NoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbm5lbC51dWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUHJvbXB0VWlQcm9wcyB9IGZyb20gJy4uL3VpJztcbmltcG9ydCB7XG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nU3RhdGUge1xuICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBQcm9tcHRVaVByb3BzPEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnPixcbiAgICBEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb21wdFVpUHJvcHM8QWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc+KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgb25SZXF1ZXN0Q2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWQodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckFsZXJ0ID0gKHVpQ29udGV4dD86IFVJQ29udGV4dFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHVpQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLXByb21wdC0ke3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfSBrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRhaW5lciBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke2NvbmZpZy5wb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgZGVjbGluZUFjdGlvbiwgYWNjZXB0QWN0aW9uIH0gPVxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUXG4gICAgICAgICAgICAgICAgPyBjb25maWcubGFiZWxzLmFsZXJ0XG4gICAgICAgICAgICAgICAgOiBjb25maWcubGFiZWxzLmJhbm5lcjtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25GZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmNvbG9ycy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmNvbG9ycy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVjbGluZUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGFjY2VwdEFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvbmZpZy5pbWFnZVVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7Y29uZmlnLmltYWdlVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0taWNvbmB9XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWhlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYm9keWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q9e2dldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0Q2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FjY2VwdEFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VUlDb250ZXh0LkNvbnN1bWVyPnt0aGlzLnJlbmRlckFsZXJ0fTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDaGFubmVsLCBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB9IGZyb20gJy4uL2NvcmUvY2hhbm5lbHMnO1xuaW1wb3J0IHtcbiAgICBDaGFubmVsTGlzdEl0ZW0sXG4gICAgQ2hhbm5lbFN1YkFjdGlvbixcbiAgICBDb250ZXh0LFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFByb21wdEFjdGlvbixcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlncyxcbiAgICBQdXNoUHJvbXB0Q29uZmlnLFxuICAgIFNka0V2ZW50LFxuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyLCB7XG4gICAgUHVzaE9wc01hbmFnZXIsXG4gICAgUHVzaFN1YnNjcmlwdGlvblN0YXRlXG59IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgS3VtdWxvcyBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXIgfSBmcm9tICcuL3RyaWdnZXJzJztcbmltcG9ydCB7IFVJQ29udGV4dCB9IGZyb20gJy4vdWktY29udGV4dCc7XG5pbXBvcnQgVWkgZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IG1heWJlUGVyc2lzdFJlbWluZGVyIH0gZnJvbSAnLi9wcm9tcHQtcmVtaW5kZXInO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRNYW5hZ2VyU3RhdGUgPVxuICAgIHwgJ2xvYWRpbmcnXG4gICAgfCAncmVhZHknXG4gICAgfCAncmVxdWVzdGluZydcbiAgICB8ICdyZXF1ZXN0aW5nLXNpbGVudCdcbiAgICB8ICdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnXG4gICAgfCAncG9zdGFjdGlvbic7XG5cbi8vIGxvYWRpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHJlcXVlc3Rpbmdcbi8vIHJlcXVlc3RpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHBvc3RhY3Rpb25cbi8vIHBvc3RhY3Rpb24gLT4gcmVhZHlcblxuZXhwb3J0IGNsYXNzIFByb21wdE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkga3VtdWxvc0NsaWVudDogS3VtdWxvcztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwdXNoQ29udGFpbmVyOiBSb290RnJhbWVDb250YWluZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmlnZ2VyRmlsdGVyOiBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8UHVzaFByb21wdENvbmZpZz47XG5cbiAgICBwcml2YXRlIHN0YXRlPzogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uU3RhdGU/OiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJpdmF0ZSBwcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHByaXZhdGUgYWN0aXZlUHJvbXB0czogUHVzaFByb21wdENvbmZpZ1tdO1xuICAgIHByaXZhdGUgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgcHJpdmF0ZSBwdXNoT3BzTWFuYWdlcj86IFB1c2hPcHNNYW5hZ2VyO1xuICAgIHByaXZhdGUgY2hhbm5lbHM6IENoYW5uZWxbXTtcbiAgICBwcml2YXRlIHVpPzogVWk7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUNvbmZpZz86IFBsYXRmb3JtQ29uZmlnO1xuICAgIHByaXZhdGUgY3VycmVudFBvc3RBY3Rpb24/OiBQcm9tcHRBY3Rpb247XG4gICAgcHJpdmF0ZSBjaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcj86IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBLdW11bG9zLCBjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIHRoaXMucHJvbXB0cyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xuICAgICAgICB0aGlzLnRyaWdnZXJGaWx0ZXIgPSBuZXcgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFB1c2hQcm9tcHRDb25maWc+KFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJhY2tlZFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucHVzaENvbnRhaW5lciA9IHJvb3RGcmFtZS5jcmVhdGVDb250YWluZXIoJ3B1c2gnKTtcbiAgICAgICAgdGhpcy5rdW11bG9zQ2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnbG9hZGluZycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTogQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgPSBuZXcgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkV2ZW50VHJhY2tlZCA9IChlOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1Byb21wdCB0cmlnZ2VyIHNhdyBldmVudCcsIGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVhZHknKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ05vdCByZWFkeSwgd2FpdGluZyBvbiBxdWV1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYWN0aXZhdGVEZWZlcnJlZFByb21wdCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCBhcyBQdXNoUHJvbXB0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSBhc3luYyAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMuc3RhdGUgfHwgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ID0gcHJvbXB0O1xuXG4gICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXI/LmlzTmF0aXZlUHJvbXB0U2hvd24oKS50aGVuKGlzTmF0aXZlUHJvbXB0U2hvd24gPT4ge1xuICAgICAgICAgICAgaWYgKGlzTmF0aXZlUHJvbXB0U2hvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlcXVlc3Rpbmctc2lsZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5yZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlYWR5Jyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0UG9zdEFjdGlvblByb21wdCA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBhY3Rpb246IFByb21wdEFjdGlvblxuICAgICkgPT4ge1xuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nID09PSB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJyAhPT0gYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdwb3N0YWN0aW9uJyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qcm9tcHRBY2NlcHRlZCA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAnc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUHJvbXB0QWN0aW9ucyhwcm9tcHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMudWk/LnNob3dUb2FzdChwcm9tcHQubGFiZWxzPy50aGFua3NGb3JTdWJzY3JpYmluZyEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qb3N0QWN0aW9uQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oY2hhbm5lbFNlbGVjdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlYWR5Jyk7XG4gICAgICAgIHRoaXMuaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUHJvbXB0RGVjbGluZWQgPSAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdCk7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uRGlzbWlzc092ZXJsYXkgPSAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCB7IHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuXG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5mb3JFYWNoKHAgPT4gdGhpcy5oaWRlUHJvbXB0KHApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUHJvbXB0QWN0aW9ucyhwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKCFwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdXaWxsIGhhbmRsZSBhY3Rpb25zOiAnLCBwcm9tcHQuYWN0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IGNoYW5uZWxTdWJNZ3IubGlzdENoYW5uZWxzKCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsU3ViQWN0aW9ucyhwcm9tcHQpO1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxDaGFubmVsU3ViQWN0aW9uPihcbiAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdXVpZHNUb1N1YnNjcmliZSA9IGFjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsdG9TdWIgPSB0aGlzLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGMgPT4gYy51dWlkID09PSBhY3Rpb24uY2hhbm5lbFV1aWQgJiYgYy5zdWJzY3JpYmVkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsdG9TdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFVuYWJsZSB0byBzdWJzY3JpYmUgdG8gY2hhbm5lbCAnJHthY3Rpb24uY2hhbm5lbFV1aWR9JyBhcyBpdCBkb2VzIG5vdCBleGlzdGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5jaGFubmVsVXVpZCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpLnN1YnNjcmliZSh1dWlkc1RvU3Vic2NyaWJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHByb21wdC5hY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwb3N0IGFjdGlvbnMgb25seSBhcHBseSB0byBgdXNlckNoYW5uZWxTZWxlY3REaWFsb2dgIGFjdGlvbnNcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IGV4cGVjdGluZyAxIGNvbmZpZ3VyZWQgYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25cbiAgICAgICAgdGhpcy5vblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0KHByb21wdCwgYWN0aW9uc1swXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsU2VsZWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiAhY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci51bnN1YnNjcmliZSh1bnN1YnNjcmliZXMpO1xuXG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiBjcy5jaGVja2VkKVxuICAgICAgICAgICAgLm1hcChjcyA9PiBjcy5jaGFubmVsLnV1aWQpO1xuICAgICAgICBhd2FpdCBjaGFubmVsU3ViTWdyLnN1YnNjcmliZShzdWJzY3JpYmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvblN0YXRlIHx8ICF0aGlzLnN0YXRlIHx8ICF0aGlzLnBsYXRmb3JtQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VUlDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1Db25maWc6IHRoaXMucGxhdGZvcm1Db25maWcsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0OiB0aGlzLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyID0+ICh0aGlzLnVpID0gcil9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdHM9e3RoaXMuYWN0aXZlUHJvbXB0c31cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9zdEFjdGlvbkNvbmZpcm09e3RoaXMub25Qb3N0QWN0aW9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzT3ZlcmxheT17dGhpcy5vbkRpc21pc3NPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PXt0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uPXt0aGlzLmN1cnJlbnRQb3N0QWN0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1VJQ29udGV4dC5Qcm92aWRlcj4sXG4gICAgICAgICAgICB0aGlzLnB1c2hDb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZXZhbHVhdGVUcmlnZ2VycygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLnByb21wdHMsXG4gICAgICAgICAgICBwcm9tcHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0cyhtYXRjaGVkUHJvbXB0cyk7XG4gICAgfVxuXG4gICAgcHJvbXB0QWN0aW9uTmVlZHNUYWtlbihwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxzVG9TdWIgPVxuICAgICAgICAgICAgcHJvbXB0LmFjdGlvbnNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIENoYW5uZWxTdWJBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4gYS5jaGFubmVsVXVpZCkgPz8gW107XG4gICAgICAgIGNvbnN0IG5lZWRzVG9TdWIgPVxuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYyA9PiBjaGFubmVsc1RvU3ViLmluY2x1ZGVzKGMudXVpZCkgJiYgIWMuc3Vic2NyaWJlZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmIChuZWVkc1RvU3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE8gaXMgaWRlbnRpdHkgb2sgZm9yIGNvbXBhcmlzb24gaGVyZS4uLiBtaWdodCBuZWVkIHRvIHVzZSBJRFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMucHVzaChwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHRzKHByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1dpbGwgYWN0aXZhdGUgcHJvbXB0czogJywgcHJvbXB0cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9tcHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5hY3RpdmF0ZURlZmVycmVkUHJvbXB0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1NldHRpbmcgcHJvbXB0IG1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm9uRW50ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25FbnRlcihzdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXIgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXIuaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcm9tcHRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVhZHknOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3N0QWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5nZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3RhY3Rpb24nOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZyc6XG4gICAgICAgICAgICBjYXNlICdyZXF1ZXN0aW5nLXNpbGVudCc6XG4gICAgICAgICAgICBjYXNlICdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQcm9tcHRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnBsYXRmb3JtQ29uZmlnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtQ29uZmlnLnB1YmxpY0tleSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcHJvbXB0cyBjb25maWcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQucHVzaFByb21wdHMgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgdGhpcy5wcm9tcHRzID0geyAuLi50aGlzLmNvbnRleHQucHVzaFByb21wdHMgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4uKHRoaXMucGxhdGZvcm1Db25maWcucHJvbXB0cyB8fCB7fSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMucHJvbXB0cykge1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hhbm5lbE9wID0gQm9vbGVhbihcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdHNbaWRdLmFjdGlvbnM/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgYSA9PiBhLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICAgICAgICAgKT8ubGVuZ3RoXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoaGFzQ2hhbm5lbE9wKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoLCBKU1ggfSBmcm9tICdwcmVhY3QnO1xuXG5pbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tQcm9wcyB7XG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgYmx1ckNsYXNzPzogc3RyaW5nO1xuICAgIHN0eWxlPzogSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kTWFza1N0YXRlIHtcbiAgICBibHVyQ2xhc3Nlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTWFzayBleHRlbmRzIENvbXBvbmVudDxcbiAgICBCYWNrZ3JvdW5kTWFza1Byb3BzLFxuICAgIEJhY2tncm91bmRNYXNrU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYWNrZ3JvdW5kTWFza1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBibHVyQ2xhc3NlcyA9IHRoaXMucHJvcHMuYmx1ckNsYXNzPy5zcGxpdCgnICcpID8/IFtdO1xuICAgICAgICBibHVyQ2xhc3Nlcy5wdXNoKCdrdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJsdXJDbGFzc2VzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlQmx1clN0YXRlKCkge1xuICAgICAgICBjb25zdCB7IGJsdXJDbGFzc2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+IHtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoYmx1ckNsYXNzKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChibHVyQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCbHVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmx1ckNsYXNzZXMuZm9yRWFjaChibHVyQ2xhc3MgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShibHVyQ2xhc3MpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzOiBjbGFzc05hbWVzLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydrdW11bG9zLWJhY2tncm91bmQtbWFzayddO1xuXG4gICAgICAgIGlmICghIWNsYXNzTmFtZXMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBQdXNoUHJvbXB0Q29uZmlnLCBQb2ludCwgRGltZW5zaW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBpc01vYmlsZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL2JhY2tncm91bmQtbWFzayc7XG5pbXBvcnQgeyBTdmdQb2ludGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdmctcG9pbnRlcic7XG5cbmNvbnN0IGxvY2FsU3R5bGVzID0ge1xuICAgIG1hc2s6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfVxufTtcblxuY29uc3QgUE9JTlRFUl9TVEFSVF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IDAsXG4gICAgeTogNTBcbn07XG5cbmNvbnN0IFBPSU5URVJfRU5EX09GRlNFVDogUG9pbnQgPSB7XG4gICAgeDogLTE3NSxcbiAgICB5OiA3NVxufTtcblxuY29uc3QgQ09OVFJPTF9QT0lOVF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IDAsXG4gICAgeTogNTAwXG59O1xuXG5pbnRlcmZhY2UgT3ZlcmxheVNpbGVudFByb3BzIHtcbiAgICBwcm9tcHRTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBvbkRpc21pc3M/OiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgT3ZlcmxheVNpbGVudFN0YXRlIHtcbiAgICB3aW5kb3dEaW1lbnNpb25zOiBEaW1lbnNpb25zO1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNpbGVudCBleHRlbmRzIENvbXBvbmVudDxcbiAgICBPdmVybGF5U2lsZW50UHJvcHMsXG4gICAgT3ZlcmxheVNpbGVudFN0YXRlXG4+IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2luZG93RGltZW5zaW9uczogeyB3aWR0aCwgaGVpZ2h0IH0gfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZy1zaWxlbnQnIHx8XG4gICAgICAgICAgICAhcHJvbXB0LnNpbGVudE92ZXJsYXkgfHxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlICE9PSAndW5zdWJzY3JpYmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHByb21wdC5zaWxlbnRPdmVybGF5O1xuICAgICAgICBjb25zdCBib2R5TGFiZWwgPSBvdmVybGF5LmxhYmVscy5ib2R5O1xuICAgICAgICBjb25zdCBjb2xvciA9IG92ZXJsYXkuY29sb3JzLnRleHQ7XG5cbiAgICAgICAgY29uc3QgbWFza1N0eWxlID0ge1xuICAgICAgICAgICAgLi4ubG9jYWxTdHlsZXMubWFzayxcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgIGJsdXJDbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1ibHVyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3Mtb3ZlcmxheSBrdW11bG9zLW92ZXJsYXktJHtnZXRCcm93c2VyTmFtZSgpfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e21hc2tTdHlsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQmFja2dyb3VuZE1hc2tDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb2ludGVyKGNvbG9yKX1cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0XCI+e2JvZHlMYWJlbH08L3A+XG4gICAgICAgICAgICA8L0JhY2tncm91bmRNYXNrPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyUG9pbnRlcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgd2luZG93RGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBwb2ludGVyU3RhcnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogd2luZG93RGltZW5zaW9ucy53aWR0aCAvIDIgKyBQT0lOVEVSX1NUQVJUX09GRlNFVC54LFxuICAgICAgICAgICAgeTogd2luZG93RGltZW5zaW9ucy5oZWlnaHQgLyAyICsgUE9JTlRFUl9TVEFSVF9PRkZTRVQueVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBvaW50ZXJFbmQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogd2luZG93RGltZW5zaW9ucy53aWR0aCArIFBPSU5URVJfRU5EX09GRlNFVC54LFxuICAgICAgICAgICAgeTogUE9JTlRFUl9FTkRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb250cm9sUG9pbnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogcG9pbnRlckVuZC54ICsgQ09OVFJPTF9QT0lOVF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IHBvaW50ZXJTdGFydC55ICsgQ09OVFJPTF9QT0lOVF9PRkZTRVQueVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICA8U3ZnUG9pbnRlclxuICAgICAgICAgICAgICAgICAgICBhcmVhPXt3aW5kb3dEaW1lbnNpb25zfVxuICAgICAgICAgICAgICAgICAgICBxdWFkQ3VydmVQb2ludHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHAxOiBwb2ludGVyU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwMjogY29udHJvbFBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcDM6IHBvaW50ZXJFbmRcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFja2dyb3VuZE1hc2tDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwcm9tcHQsIG9uRGlzbWlzcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIXByb21wdCB8fCAhb25EaXNtaXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvbkRpc21pc3MocHJvbXB0KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgUHVzaFByb21wdENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWFzayB9IGZyb20gJy4vYmFja2dyb3VuZC1tYXNrJztcblxuaW50ZXJmYWNlIE92ZXJsYXlQcm9wcyB7XG4gICAgcHJvbXB0U3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG59XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50PE92ZXJsYXlQcm9wcywgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbXB0U3RhdGUsIHByb21wdCwgc3Vic2NyaXB0aW9uU3RhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByb21wdCB8fFxuICAgICAgICAgICAgcHJvbXB0U3RhdGUgIT09ICdyZXF1ZXN0aW5nJyB8fFxuICAgICAgICAgICAgIXByb21wdC5vdmVybGF5IHx8XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBwcm9tcHQub3ZlcmxheTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBvdmVybGF5LmNvbG9ycy5zaGFkZSxcbiAgICAgICAgICAgIGNvbG9yOiBvdmVybGF5LmNvbG9ycy50ZXh0XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAvLyBtYWludGFpbnMgYmFja3dhcmRzIGNvbXBhdCB3aXRoIGV4aXN0aW5nIGJsdXIgY2xhc3MgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHdhcyBiZWluZyBhcHBsaWVkIGRpcmVjdGx5IGJ5IHRoaXMgY29tcG9uZW50IHByZXZpb3VzbHlcbiAgICAgICAgICAgICAgICBibHVyQ2xhc3M9XCJrdW11bG9zLW92ZXJsYXktYmx1clwiXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLW92ZXJsYXkga3VtdWxvcy1vdmVybGF5LSR7Z2V0QnJvd3Nlck5hbWUoKX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktc3RyaXBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBvdmVybGF5LmNvbG9ycy5zdHJpcCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDMzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17b3ZlcmxheS5jb2xvcnMudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMi41cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gMTIuNTcsMTEuMTJcbiAgICAgICAgICAgQyAxMi41NywxMS4xMiA2Ljg0LDIwLjgyIDQuMTMsMjEuMDFcbiAgICAgICAgICAgICAxLjQyLDIxLjIxIDIwLjcxLDI4LjY3IDI2LjYyLDI4LjY3TSA0LjIzLDIxLjAxXG4gICAgICAgICAgIEMgNC4yMywyMS4wMSA1My45NiwxNC45MSA2MC42NSwzLjQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5pY29uVXJsICYmIDxpbWcgc3JjPXtvdmVybGF5Lmljb25Vcmx9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntvdmVybGF5LmxhYmVscy5oZWFkaW5nfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e292ZXJsYXkubGFiZWxzLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdmVybGF5LmxpbmtzPy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2wudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JhY2tncm91bmRNYXNrPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHBlcnNpc3RQcm9tcHRSZW1pbmRlciwgZ2V0UHJvbXB0UmVtaW5kZXIgfSBmcm9tICcuLi9jb3JlL3N0b3JhZ2UnO1xuXG5pbXBvcnQge1xuICAgIFByb21wdFVpQWN0aW9ucyxcbiAgICBVaUFjdGlvblR5cGUsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcsXG4gICAgUmVtaW5kZXJUaW1lVW5pdFxufSBmcm9tICcuLi9jb3JlJztcblxuY29uc3QgUkVNSU5ERVJfVElNRV9VTklUX1RPX01JTExJUyA9IHtcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5IT1VSU106IDEwMDAgKiA2MCAqIDYwLFxuICAgIFtSZW1pbmRlclRpbWVVbml0LkRBWVNdOiAxMDAwICogNjAgKiA2MCAqIDI0XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICBjb25zdCB7IHVpQWN0aW9ucyB9ID0gcHJvbXB0IGFzIFByb21wdFVpQWN0aW9ucztcblxuICAgIGlmICghdWlBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IHVpQWN0aW9ucy5kZWNsaW5lO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLlJFTUlORDpcbiAgICAgICAgICAgIHJldHVybiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQsIHtcbiAgICAgICAgICAgICAgICBkZWNsaW5lZE9uOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuREVDTElORTpcbiAgICAgICAgICAgIHJldHVybiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQsICdzdXBwcmVzc2VkJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBkZWNsaW5lIGFjdGlvbiB0eXBlICR7dHlwZX0gc3VwcG9ydGVkIGZvciBwcm9tcHQgJHtwcm9tcHQudXVpZH0sIGZhbGwgYmFjayB0byBhbHdheXMgc2hvdyB0aGlzIHByb21wdCB3aGVuIGRlY2xpbmVkYFxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1Byb21wdFN1cHByZXNzZWQoXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlbWluZGVyID0gYXdhaXQgZ2V0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQpO1xuXG4gICAgaWYgKCFyZW1pbmRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCdzdXBwcmVzc2VkJyA9PT0gcmVtaW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCEoJ3VpQWN0aW9ucycgaW4gcHJvbXB0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdDtcblxuICAgIGlmICh1aUFjdGlvbnMuZGVjbGluZS50eXBlICE9PSBVaUFjdGlvblR5cGUuUkVNSU5EKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWhhc1Byb21wdFJlbWluZGVyRWxhcHNlZChcbiAgICAgICAgcmVtaW5kZXIuZGVjbGluZWRPbixcbiAgICAgICAgdWlBY3Rpb25zLmRlY2xpbmUuZGVsYXlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJvbXB0UmVtaW5kZXJFbGFwc2VkKFxuICAgIGRlY2xpbmVkT25NaWxsaXM6IG51bWJlcixcbiAgICBkZWxheUNvbmZpZzogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZ1xuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgRGF0ZS5ub3coKSAtIGRlY2xpbmVkT25NaWxsaXMgPlxuICAgICAgICBSRU1JTkRFUl9USU1FX1VOSVRfVE9fTUlMTElTW2RlbGF5Q29uZmlnLnRpbWVVbml0XSAqXG4gICAgICAgICAgICBkZWxheUNvbmZpZy5kdXJhdGlvblxuICAgICk7XG59XG4iLCJpbXBvcnQge1xuICAgIEZpbHRlclZhbHVlLFxuICAgIEt1bXVsb3NFdmVudCxcbiAgICBQcm9wRmlsdGVyLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWdzLFxuICAgIENvbnRleHQsXG4gICAgU2RrRXZlbnQsXG4gICAgRXZlbnRQYXlsb2FkXG59IGZyb20gJy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IGlzUHJvbXB0U3VwcHJlc3NlZCB9IGZyb20gJy4vcHJvbXB0LXJlbWluZGVyJztcblxuZnVuY3Rpb24gcHJvcEluKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGVzdHMgPSBmaWx0ZXJWYWx1ZS5tYXAodiA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gYF4ke2VzY2FwZVJlZ0V4cCh2KS5yZXBsYWNlKC9cXFxcXFwqL2csICcuKicpfSRgO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlck1hdGNoZWQgPSB0ZXN0cy5yZWR1Y2UoXG4gICAgICAgICAgICAobWF0Y2hlZCwgbWF0Y2hlcikgPT4gbWF0Y2hlZCB8fCBtYXRjaGVyLnRlc3QoU3RyaW5nKHByb3BWYWx1ZSkpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyTWF0Y2hlZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJWYWx1ZS5pbmRleE9mKHByb3BWYWx1ZSBhcyBhbnkpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwcm9wRXEoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmaWx0ZXJWYWx1ZSA9PSBwcm9wVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BHdChmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wR3RlKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlID49IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHQoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPCBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEx0ZShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJNYXRjaGVkKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnLFxuICAgIGV2ZW50OiBLdW11bG9zRXZlbnRcbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRyaWdnZXIgPSBwcm9tcHQudHJpZ2dlcjtcblxuICAgIGlmICh0cmlnZ2VyLmV2ZW50ICE9PSBldmVudC50eXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRyaWdnZXIuZmlsdGVycz8ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlci5maWx0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IFtwcm9wLCBvcCwgZmlsdGVyVGVzdFZhbHVlXSA9IHRyaWdnZXIuZmlsdGVyc1tpXSBhcyBQcm9wRmlsdGVyO1xuXG4gICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGV2ZW50LmRhdGFbcHJvcF07XG5cbiAgICAgICAgbGV0IGZpbHRlck1hdGNoZWQgPSBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICBjYXNlICdJTic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BJbihmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEVxKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3QoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3RlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHQoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHRlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGZpbHRlciBvcGVyYXRvcjogJHtvcH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSBhbGxQcm9wRmlsdGVyc01hdGNoICYmIGZpbHRlck1hdGNoZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFByb3BGaWx0ZXJzTWF0Y2g7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8VCBleHRlbmRzIFByb21wdENvbmZpZz4ge1xuICAgIHByaXZhdGUgZXZlbnRRdWV1ZTogRXZlbnRQYXlsb2FkID0gW107XG4gICAgcHJpdmF0ZSBldmVudFJlY2VpdmVkQ2FsbGJhY2s/OiAoZTogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIGV2ZW50UmVjZWl2ZWRDYWxsYmFjaz86IChlOiBTZGtFdmVudCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmV2ZW50UmVjZWl2ZWRDYWxsYmFjayA9IGV2ZW50UmVjZWl2ZWRDYWxsYmFjaztcbiAgICAgICAgY3R4LnN1YnNjcmliZSgnZXZlbnRUcmFja2VkJywgdGhpcy5oYW5kbGVTZGtFdmVudCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmlsdGVyUHJvbXB0cyhcbiAgICAgICAgcHJvbXB0czogUHJvbXB0Q29uZmlnczxUPixcbiAgICAgICAgZmlsdGVyOiAocHJvbXB0OiBUKSA9PiBib29sZWFuID0gKF86IFQpID0+IHRydWVcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0V2YWx1YXRpbmcgcHJvbXB0IHRyaWdnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZFByb21wdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gcHJvbXB0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpZF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdFN1cHByZXNzZWQgPSBhd2FpdCBpc1Byb21wdFN1cHByZXNzZWQocHJvbXB0KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIXByb21wdFN1cHByZXNzZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck1hdGNoZWQocHJvbXB0LCBldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHByb21wdClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFByb21wdHMucHVzaChwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuXG4gICAgICAgIC8vIENhc3QgbmVjZXNzYXJ5IHRvIG5hcnJvdyB0aGUgdHlwZSBmcm9tIHRoZSBjb25zdHJhaW50LlxuICAgICAgICAvLyBTZWVtcyB0aGUgVFMgY29tcGlsZXIgaXNuJ3QgcXVpdGUgc21hcnQgZW5vdWdoIHdoZW4gaGFuZGxpbmdcbiAgICAgICAgLy8gdGhlICdUIGV4dGVuZHMgUHJvbXB0Q29uZmlnJyBjb25zdHJhaW50LlxuICAgICAgICByZXR1cm4gbWF0Y2hlZFByb21wdHMgYXMgVFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU2RrRXZlbnQgPSAoZTogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gZS5kYXRhIGFzIEV2ZW50UGF5bG9hZDtcblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUucHVzaCguLi5ldmVudHMpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRSZWNlaXZlZENhbGxiYWNrPy4oZSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbnRleHRTdGF0ZSB7XG4gICAgcGxhdGZvcm1Db25maWc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsW107XG59XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVJQ29udGV4dFN0YXRlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgaCwgSlNYIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHtcbiAgICBQdXNoUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIEFsZXJ0UHJvbXB0Q29uZmlnLFxuICAgIEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24sXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmVsbCB9IGZyb20gJy4vYmVsbCc7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgeyBDaGFubmVsc0RpYWxvZyB9IGZyb20gJy4vZGlhbG9nL2NoYW5uZWxzLWRpYWxvZyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWFzayB9IGZyb20gJy4vb3ZlcmxheS9iYWNrZ3JvdW5kLW1hc2snO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheS9wdXNoLXBlcm1zJztcbmltcG9ydCB7IE92ZXJsYXlTaWxlbnQgfSBmcm9tICcuL292ZXJsYXkvcHVzaC1wZXJtcy1zaWxlbnQnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUwgPSAnU3Vic2NyaWJlIGZvciBub3RpZmljYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2VQb3NpdGlvbihwb3M6IHN0cmluZyk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiBwb3MuaW5kZXhPZignbGVmdCcpID4gLTEgPyAncmlnaHQnIDogJ2xlZnQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpUHJvcHM8VCBleHRlbmRzIFB1c2hQcm9tcHRDb25maWc+IHtcbiAgICBjb25maWc6IFQ7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBvblByb21wdEFjY2VwdGVkOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIGFjdGlvbj86IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uO1xufVxuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgICBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuZXhwb3J0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3MtdG9vbHRpcCBrdW11bG9zLXRvb2x0aXAtJHt0aGlzLnByb3BzLnBvc2l0aW9ufWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0sIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PjtcbiAgICB9XG59XG5cbmludGVyZmFjZSBVaVByb3BzIHtcbiAgICBwcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW107XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBvblByb21wdEFjY2VwdGVkOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uUG9zdEFjdGlvbkNvbmZpcm06IChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB2b2lkO1xuICAgIG9uRGlzbWlzc092ZXJsYXk6IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgY3VycmVudFBvc3RBY3Rpb24/OiBQcm9tcHRBY3Rpb247XG59XG5cbmludGVyZmFjZSBVaVN0YXRlIHtcbiAgICB0b2FzdFF1ZXVlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWkgZXh0ZW5kcyBDb21wb25lbnQ8VWlQcm9wcywgVWlTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBVaVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXF1ZXVlVG9hc3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogdGhpcy5zdGF0ZS50b2FzdFF1ZXVlLnNsaWNlKDEpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzaG93VG9hc3QobWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IFsuLi50aGlzLnN0YXRlLnRvYXN0UXVldWUsIG1lc3NhZ2VdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5kZXF1ZXVlVG9hc3QsIDMyMDApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5tYXliZVJlbmRlclByb21wdEJhY2tncm91bmRNYXNrKCl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9tcHRzLm1hcCh0aGlzLnJlbmRlclByb21wdCwgdGhpcyl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0QWN0aW9uKCl9XG5cbiAgICAgICAgICAgICAgICB7IWlzTW9iaWxlKCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0U3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0PXt0aGlzLnByb3BzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgeyFpc01vYmlsZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlTaWxlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9e3RoaXMucHJvcHMub25EaXNtaXNzT3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG9hc3RRdWV1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0IG1lc3NhZ2U9e3RoaXMuc3RhdGUudG9hc3RRdWV1ZVswXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GcmFnbWVudD4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJ3JlcXVlc3RpbmcnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSB8fFxuICAgICAgICAgICAgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgcHJvbXB0cyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBmaXJzdFByb21wdFdpdGhNYXNrID0gcHJvbXB0cy5maWx0ZXIoXG4gICAgICAgICAgICBwID0+XG4gICAgICAgICAgICAgICAgKHAudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQgfHxcbiAgICAgICAgICAgICAgICAgICAgcC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5CQU5ORVIpICYmXG4gICAgICAgICAgICAgICAgISFwLmJhY2tncm91bmRNYXNrXG4gICAgICAgIClbMF0gYXMgQWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc7XG5cbiAgICAgICAgaWYgKCFmaXJzdFByb21wdFdpdGhNYXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmaXJzdFByb21wdFdpdGhNYXNrLmJhY2tncm91bmRNYXNrIS5jb2xvcnMuYmdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gPEJhY2tncm91bmRNYXNrIHN0eWxlPXtzdHlsZX0gLz47XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAncmVxdWVzdGluZycgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlIHx8XG4gICAgICAgICAgICAncmVxdWVzdGluZy1zaWxlbnQnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChwcm9tcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmVsbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgICAgICBjYXNlICdiYW5uZXInOlxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb246IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBwcm9tcHQuYWN0aW9ucz8uZmluZDxcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgID4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICk6IGFjdGlvbiBpcyBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdEFjY2VwdGVkPXt0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclBvc3RBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uLFxuICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nICE9PSBwcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnICE9PSBjdXJyZW50UG9zdEFjdGlvbj8udHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFja2dyb3VuZE1hc2sgPSBudWxsO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5CQU5ORVIpICYmXG4gICAgICAgICAgICB1bmRlZmluZWQgIT09IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2tcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBtYXNrQ29uZmlnID0gY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC5iYWNrZ3JvdW5kTWFzaztcbiAgICAgICAgICAgIGJhY2tncm91bmRNYXNrID0gKFxuICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IG1hc2tDb25maWcuY29sb3JzLmJnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kTWFza31cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbHNEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtjdXJyZW50UG9zdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtjaGFubmVsU2VsZWN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUG9zdEFjdGlvbkNvbmZpcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRDb25maWcgfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyUHJvbXB0QWN0aXZhdGlvbihcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICBhY3RpdmF0ZUZuOiAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHZvaWRcbikge1xuICAgIGlmIChcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzIDwgMFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnRGVmZXJyaW5nIHByb21wdCBhY3RpdmF0aW9uIGJ5ICcgKyBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHNcbiAgICApO1xuXG4gICAgc2V0VGltZW91dChhY3RpdmF0ZUZuLCBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgKiAxMDAwLCBwcm9tcHQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5cbmV4cG9ydCBlbnVtIFdvcmtlck1lc3NhZ2VUeXBlIHtcbiAgICBLUHVzaFJlY2VpdmVkID0gJ0tQdXNoUmVjZWl2ZWQnXG59XG5leHBvcnQgdHlwZSBXb3JrZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IFdvcmtlck1lc3NhZ2VUeXBlLktQdXNoUmVjZWl2ZWQ7XG4gICAgZGF0YTogUHVzaFBheWxvYWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNLdW11bG9zV29ya2VyTWVzc2FnZShkYXRhOiBhbnkpOiBkYXRhIGlzIFdvcmtlck1lc3NhZ2Uge1xuICAgIHJldHVybiAoXG4gICAgICAgIChkYXRhIGFzIFdvcmtlck1lc3NhZ2UpLnR5cGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBXb3JrZXJNZXNzYWdlVHlwZVsoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlXSAhPT0gdW5kZWZpbmVkXG4gICAgKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==