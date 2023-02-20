(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kumulos"] = factory();
	else
		root["kumulos"] = factory();
})(self, () => {
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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: rgb(76, 136, 224);\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: rgb(76, 136, 224);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n  .kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n  .kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n  .kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/prompts/styles/_anims.scss","webpack://./src/styles.scss","webpack://./src/prompts/styles/_tooltip.scss","webpack://./src/prompts/styles/_variables.scss","webpack://./src/prompts/styles/_toast.scss","webpack://./src/prompts/styles/_prompts.scss","webpack://./src/prompts/styles/_buttons.scss","webpack://./src/prompts/styles/_checkbox.scss","webpack://./src/prompts/styles/_banner.scss","webpack://./src/prompts/styles/_banner.compact.scss","webpack://./src/prompts/styles/_safe-area-inset-pad.scss","webpack://./src/prompts/bell/bell.scss","webpack://./src/prompts/dialog/dialog.scss","webpack://./src/prompts/background-mask.scss","webpack://./src/prompts/overlay.scss"],"names":[],"mappings":"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","sourcesContent":["// Based on https://css-tricks.com/snippets/css/shake-css-keyframe-animation/\n@keyframes kumulos-anim-shake {\n    10%,\n    90% {\n        transform: translate3d(-1px, 0, 0);\n    }\n\n    20%,\n    80% {\n        transform: translate3d(2px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translate3d(-2px, 0, 0);\n    }\n\n    40%,\n    60% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes kumulos-anim-fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes kumulos-reveal-left {\n    0% {\n        opacity: 0;\n        transform: translate(10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-reveal-right {\n    0% {\n        opacity: 0;\n        transform: translate(-10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-toast-in-out {\n    0% {\n        opacity: 0;\n        transform: translate3d(-50%, 100%, 0);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate3d(-50%, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-down {\n    0% {\n        transform: translate3d(0, -100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-up {\n    0% {\n        transform: translate3d(0, 100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n","@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: rgb(76, 136, 224);\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: rgb(76, 136, 224);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n  .kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n  .kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n  .kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}",".kumulos-tooltip-parent {\n    .kumulos-tooltip {\n        display: none;\n    }\n\n    &:hover .kumulos-tooltip {\n        display: block;\n    }\n}\n\n.kumulos-tooltip {\n    background: $tooltip-background;\n    position: absolute;\n    top: 50%;\n    padding: 8px 12px;\n    font: 14px helvetica, sans-serif;\n    color: #eee;\n    border-radius: 6px;\n    white-space: nowrap;\n    z-index: 1100;\n    pointer-events: none;\n    transform: translateY(-50%);\n    will-change: opacity, transform;\n\n    &:after {\n        content: \"\";\n        width: 0;\n        height: 0;\n        position: absolute;\n        top: 50%;\n        right: 100%;\n        border: solid transparent;\n        border-width: 8px;\n        margin-top: -8px;\n    }\n\n    &-right {\n        left: calc(100% + 12px);\n        animation: kumulos-reveal-right 0.2s $quintEasing;\n\n        &:after {\n            border-right-color: $tooltip-background;\n            right: 100%;\n        }\n    }\n\n    &-left {\n        right: calc(100% + 12px);\n        animation: kumulos-reveal-left 0.2s $quintEasing;\n\n        &:after {\n            border-left-color: $tooltip-background;\n            left: 100%;\n        }\n    }\n}\n","$shadow-color: rgba(0, 0, 0, 0.54);\n$tooltip-background: #222;\n// https://easings.net/en#easeOutQuint\n$quintEasing: cubic-bezier(0.23, 1, 0.32, 1);\n\n$defaultFont: helvetica, sans-serif;\n$defaultHeaderFontSize: 18px;\n$defaultBodySize: 14px;\n$defaultButtonSize: 14px;\n\n$maskZIndex: 900;\n$promptZIndex: 1000;\n\n$defaultBannerHeaderFontSizeMobile: 12px;\n$defaultBannerHeaderLineHeightMobile: 14px;\n\n$defaultBannerBodyFontSizeMobile: 12px;\n$defaultBannerBodyLineHeightMobile: 14px;\n\n$defaultBannerPadding: 10px;",".kumulos-toast {\n    display: inline-block;\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: $tooltip-background;\n    z-index: 1100;\n    padding: 12px;\n    font-size: 16px;\n    font-family: $defaultFont;\n    color: #eee;\n    border-radius: 8px 8px 0 0;\n    animation: kumulos-toast-in-out 0.25s $quintEasing;\n}\n",".kumulos-prompt {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: $promptZIndex;\n}\n",".kumulos-action-button {\n    border: none;\n\n    margin-left: 10px;\n    padding: 7px 10px;\n\n    min-width: 100px;\n\n    text-transform: uppercase;\n    font-size: $defaultButtonSize;\n    font-weight: 600;\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.kumulos-action-button-cancel {\n    background: none;\n    color: #555;\n\n    &:hover {\n        background: #eee;\n    }\n}\n\n.kumulos-action-button-confirm {\n    border-radius: 3px;\n    box-shadow: 1px 3px 3px $shadow-color;\n\n    background: rgb(76, 136, 224);\n    color: #fff;\n\n    &:hover {\n        opacity: 0.8;\n    }\n}\n",".kumulos-checkbox-container {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    user-select: none;\n    line-height: 20px;\n    font-size: 0.9em;\n    font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n.kumulos-checkbox {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n    border-color: #aaa;\n    display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #aaa;\n    box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n    border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #222;\n    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n    left: 10px;\n    top: -7px;\n    width: 8px;\n    height: 20px;\n    border: solid #000;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n",".kumulos-banner-container {\n    display: flex;\n    flex-direction: row;\n    flex-flow: wrap;\n\n    position: fixed;\n    left: 0;\n\n    width: 100%;\n    min-height: 80px;\n\n    padding: $defaultBannerPadding;\n\n    font-family: $defaultFont;\n\n    backface-visibility: hidden;\n\n    box-shadow: 0 0 3px 1px $shadow-color;\n\n    &.kumulos-prompt-position-top {\n        top: 0;\n        animation: kumulos-slide-down 0.4s ease;\n    }\n\n    &.kumulos-prompt-position-bottom {\n        bottom: 0;\n        top: unset;\n        animation: kumulos-slide-up 0.4s ease;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-container {\n        flex-flow: initial;\n    }\n}\n\n.kumulos-banner-icon {\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.kumulos-banner-content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.kumulos-banner-header {\n    display: flex;\n    font-size: $defaultBannerHeaderFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n\n    h1 {\n        font-size: inherit;\n        font-weight: bold;\n        margin: 0 0 3px 0;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-header {\n        font-size: $defaultHeaderFontSize;\n    }\n}\n\n.kumulos-banner-body {\n    display: flex;\n    flex-grow: 2;\n    align-items: flex-start;\n    font-size: $defaultBannerBodyFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n    overflow: hidden;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-body {\n        font-size: $defaultBodySize;\n    }\n}\n\n.kumulos-banner-actions {\n    display: flex;\n    align-self: center;\n    justify-self: flex-end;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n}\n",".kumulos-banner-compact {\n    .kumulos-banner-body {\n        margin-top: 0;\n    }\n\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n\n    .kumulos-banner-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin-right: 10px;\n    }\n}\n","@supports(padding: unquote('max(0px)')) {\n    .kumulos-safe-area-inset-pad-left {\n        padding-left: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-left))');\n    }\n    .kumulos-safe-area-inset-pad-right {\n        padding-right: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-right))');\n    }\n    .kumulos-safe-area-inset-pad-top {\n        padding-top: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-top))');\n    }\n    .kumulos-safe-area-inset-pad-bottom {\n        padding-bottom: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-bottom))');\n    }\n}\n",".kumulos-bell-container {\n    position: fixed;\n\n    &-bottom-left {\n        bottom: 15px;\n        left: 15px;\n    }\n\n    &-bottom-right {\n        bottom: 15px;\n        right: 15px;\n    }\n}\n\n.kumulos-bell {\n    transition: transform 0.2s $quintEasing,\n        box-shadow 0.2s $quintEasing;\n\n    border-radius: 100%;\n    border-color: #fff;\n    background: rgb(76, 136, 224);\n    box-shadow: 1px 2px 2px 0 $shadow-color;\n\n    width: 60px;\n    height: 60px;\n\n    padding: 10px;\n\n    // Note the scale/width/height in all states have been chosen such that they resolve to whole numbers.\n    // This helps reduce blur of the SVG icon due to resterisation in Webkit.\n    transform: scale(0.9);\n\n    cursor: pointer;\n\n    &:hover {\n        transform: scale(1);\n        box-shadow: 1px 2px 3px 1px $shadow-color;\n    }\n\n    &:active {\n        transform: scale(0.8);\n        box-shadow: 1px 2px 2px 0 $shadow-color;\n    }\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n\n    svg {\n        fill: #fff;\n        animation: kumulos-anim-shake 0.4s cubic-bezier(.36, .07, .19, .97) both;\n        animation-delay: 0.3s;\n    }\n\n    &:before {\n        content: '';\n        display: block;\n        width: 85%;\n        height: 85%;\n        border: solid 1px;\n        border-radius: 100%;\n        ;\n        border-color: inherit;\n        ;\n        position: absolute;\n        top: 0;\n        left: 0;\n        margin: 7.5% 0 0 7.5%;\n    }\n}\n\n.kumulos-bell-inner {\n    border-radius: 100%;\n}\n",".kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    font-family: $defaultFont;\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-channel-dialog-container,\n    .kumulos-alert-container {\n        left: 50%;\n\n        width: 500px;\n        min-height: 250px;\n        margin-left: -250px;\n\n        box-shadow: 0 0 3px 1px $shadow-color;\n\n        height: auto;\n\n        &.kumulos-prompt-position-top-center {\n            border-radius: 0 0 3px 3px;\n        }\n\n        &.kumulos-prompt-position-center {\n            border-radius: 3px;\n            top: 120px;\n        }\n    }\n}\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n    order: 2;\n    width: 60px;\n    height: 60px;\n    align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n    display: flex;\n    order: 1;\n    flex-direction: column;\n    flex: 1;\n    margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n    display: flex;\n    font-size: $defaultHeaderFontSize;\n    margin-bottom: 20px;\n\n    h1 {\n        font-size: inherit;\n        font-weight: 400;\n        margin: 0;\n    }\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n    flex: 1;\n    white-space: pre-wrap;\n    overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 20px;\n    order: 3;\n    width: 100%;\n    height: 30px;\n    align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n    margin: 20px 0;\n}\n","body.kumulos-background-mask-blur {\n    overflow: hidden;\n}\n\n.kumulos-background-mask-blur\n    > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n    filter: blur(3px);\n}\n\n.kumulos-background-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\n    z-index: $maskZIndex;\n\n    background-color: rgba(0, 0, 0, 0.3);\n\n    display: block;\n}\n",".kumulos-overlay-blur > *:not(.kumulos-overlay) {\n    filter: blur(3px);\n}\n\n.kumulos-overlay {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: 2000;\n\n    &-strip {\n        display: flex;\n\n        &:before {\n            display: block;\n            content: '';\n            width: calc(500px + 12%);\n            max-width: 660px;\n        }\n\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n        min-height: 150px;\n    }\n\n    &-content-container {\n        display: flex;\n        max-width: 38%;\n        padding: 1em;\n        font-size: 14px;\n        font-family: $defaultFont;\n\n        * {\n            margin: 0;\n        }\n\n        svg {\n            margin: 55px 1.7em 0 0;\n            stroke: none;\n            fill: rgba(0, 0, 0, 0.8);\n            flex-shrink: 0;\n        }\n\n        img {\n            width: 55px;\n            height: 55px;\n            flex-shrink: 0;\n        }\n\n        h3,\n        p,\n        a {\n            color: inherit;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            font-weight: bold;\n        }\n\n        a {\n            margin-right: 0.65em;\n            opacity: 0.8;\n            text-decoration: none;\n        }\n    }\n\n    .kumulos-overlay-content {\n        margin-left: 0.75em;\n\n        p {\n            margin: 0.5em 0;\n        }\n    }\n\n    .kumulos-silent-overlay-indicator {\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 1;\n    }\n\n    .kumulos-silent-overlay-content-text {\n        max-width: 500px;\n        text-align: center;\n        font-size: 1.3em;\n        font-family: $defaultFont;\n    }\n}\n\n.kumulos-overlay-chrome {\n    .kumulos-overlay-strip:before {\n        width: 440px;\n    }\n}\n\n.kumulos-overlay-edge {\n    .kumulos-overlay-strip:before {\n        display: none;\n    }\n\n    .kumulos-overlay-strip {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        padding-bottom: 60px;\n        justify-content: center;\n    }\n\n    .kumulos-overlay-content-container {\n        min-width: 675px;\n\n        svg {\n            order: 1;\n            transform: rotate(-30deg);\n        }\n    }\n}\n\n.kumulos-overlay-safari {\n    .kumulos-overlay-strip:before {\n        width: calc(50% + 212px);\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 900px) {\n    .kumulos-overlay {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
/* harmony export */   "Children": () => (/* binding */ O),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "PureComponent": () => (/* binding */ w),
/* harmony export */   "StrictMode": () => (/* binding */ vn),
/* harmony export */   "Suspense": () => (/* binding */ D),
/* harmony export */   "SuspenseList": () => (/* binding */ V),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ rn),
/* harmony export */   "cloneElement": () => (/* binding */ cn),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   "createFactory": () => (/* binding */ on),
/* harmony export */   "createPortal": () => (/* binding */ j),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ bn),
/* harmony export */   "findDOMNode": () => (/* binding */ an),
/* harmony export */   "flushSync": () => (/* binding */ hn),
/* harmony export */   "forwardRef": () => (/* binding */ k),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "isValidElement": () => (/* binding */ ln),
/* harmony export */   "lazy": () => (/* binding */ M),
/* harmony export */   "memo": () => (/* binding */ R),
/* harmony export */   "render": () => (/* binding */ Y),
/* harmony export */   "startTransition": () => (/* binding */ dn),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ fn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ sn),
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   "useDeferredValue": () => (/* binding */ pn),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   "useId": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   "useInsertionEffect": () => (/* binding */ yn),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   "useSyncExternalStore": () => (/* binding */ _n),
/* harmony export */   "useTransition": () => (/* binding */ mn),
/* harmony export */   "version": () => (/* binding */ un)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}function w(n){this.props=n}function R(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(w.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var x=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),x&&x(n)};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=N,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},O={map:A,forEach:A,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},T=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r)};var I=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function M(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function V(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n)},(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function P(n){return this.getChildContext=function(){return n.context},n.children}function $(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount()}function j(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)($,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u()};e?e(o):o()}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t)})};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H="undefined"!=typeof document,Z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function Y(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function q(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var G=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function J(){}function K(){return this.cancelBubble}function Q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n};var X,nn={configurable:!0,get:function(){return this.class}},tn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];H&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Z(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&B.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l)}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==t&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),n.props=u,e.class!=e.className&&(nn.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",nn))}n.$$typeof=z,tn&&tn(n)};var en=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){en&&en(n),X=n.__c};var rn={ReactCurrentDispatcher:{current:{readContext:function(n){return X.__n[n.__c].props.value}}}},un="17.0.2";function on(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function ln(n){return!!n&&n.$$typeof===z}function cn(n){return ln(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function fn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function an(n){return n&&(n.base||1===n.nodeType&&n)||null}var sn=function(n,t){return n(t)},hn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;function dn(n){n()}function pn(n){return n}function mn(){return[!1,dn]}var yn=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;function _n(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.v=t,E(u.__,t())||o({h:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return E(u.__,u.v())||o({h:u}),n(function(){E(u.__,u.v())||o({h:u})})},[n]),e}var bn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:yn,useTransition:mn,useDeferredValue:pn,useSyncExternalStore:_n,startTransition:dn,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"17.0.2",Children:O,render:Y,hydrate:q,unmountComponentAtNode:fn,createPortal:j,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:on,cloneElement:cn,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:ln,findDOMNode:an,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:w,memo:R,forwardRef:k,flushSync:hn,unstable_batchedUpdates:sn,StrictMode:vn,Suspense:D,SuspenseList:V,lazy:M,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:rn};
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
/* harmony export */   "Component": () => (/* binding */ x),
/* harmony export */   "Fragment": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ F),
/* harmony export */   "createContext": () => (/* binding */ G),
/* harmony export */   "createElement": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ d),
/* harmony export */   "h": () => (/* binding */ y),
/* harmony export */   "hydrate": () => (/* binding */ E),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "options": () => (/* binding */ l),
/* harmony export */   "render": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ j)
/* harmony export */ });
var n,l,u,i,t,r,o,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p(l,f,t,r,null)}function p(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function d(){return{current:null}}function _(n){return n.children}function k(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||g(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||g(n,r,l[r],u[r],i)}function b(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function g(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||b(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||b(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?w:m,r):n.removeEventListener(l,r?w:m,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u))}}function m(n){t=!0;try{return this.l[n.type+!1](l.event?l.event(n):n)}finally{t=!1}}function w(n){t=!0;try{return this.l[n.type+!0](l.event?l.event(n):n)}finally{t=!1}}function x(n,l){this.props=n,this.context=l}function A(n,l){if(null==l)return n.__?A(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?A(n):null}function P(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return P(n)}}function C(n){t?setTimeout(n):f(n)}function T(n){(!n.__d&&(n.__d=!0)&&r.push(n)&&!$.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||C)($)}function $(){var n,l,u,i,t,o,f,e;for(r.sort(function(n,l){return n.__v.__b-l.__v.__b});n=r.shift();)n.__d&&(l=r.length,i=void 0,t=void 0,f=(o=(u=n).__v).__e,(e=u.__P)&&(i=[],(t=h({},o)).__v=o.__v+1,M(e,o,t,u.__n,void 0!==e.ownerSVGElement,null!=o.__h?[f]:null,i,null==f?A(o):f,o.__h),N(i,o),o.__e!=f&&P(o)),r.length>l&&r.sort(function(n,l){return n.__v.__b-l.__v.__b}));$.__r=0}function H(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,b,g,m=i&&i.__k||s,w=m.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p(null,d,null,null,d):Array.isArray(d)?p(_,{children:d},null,null,null):d.__b>0?p(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=m[h])||y&&d.key==y.key&&d.type===y.type)m[h]=void 0;else for(v=0;v<w;v++){if((y=m[v])&&d.key==y.key&&d.type===y.type){m[v]=void 0;break}y=null}M(n,d,y=y||c,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(g||(g=[]),y.ref&&g.push(y.ref,null,d),g.push(v,d.__c||k,d)),null!=k?(null==b&&(b=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=I(d,e,n):e=z(n,d,y,m,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=A(y))}for(u.__e=b,h=w;h--;)null!=m[h]&&("function"==typeof u.type&&null!=m[h].__e&&m[h].__e==u.__d&&(u.__d=L(i).nextSibling),q(m[h],m[h]));if(g)for(h=0;h<g.length;h++)S(g[h],g[++h],g[++h])}function I(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?I(i,l,u):z(u,i,i,t,i.__e,l));return l}function j(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){j(n,l)}):l.push(n)),l}function z(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function L(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=L(u)))return i;return null}function M(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,k,b,g,m,w,A,P,C,T,$=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof $){if(b=u.props,g=(s=$.contextType)&&t[s.__c],m=s?g?g.props.value:s.__:t,i.__c?k=(a=u.__c=i.__c).__=a.__E:("prototype"in $&&$.prototype.render?u.__c=a=new $(b,m):(u.__c=a=new x(b,m),a.constructor=$,a.render=B),g&&g.sub(a),a.props=b,a.state||(a.state={}),a.context=m,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=$.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,$.getDerivedStateFromProps(b,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==$.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==$.getDerivedStateFromProps&&b!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,m),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,m)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=b,a.state=a.__s,a.__d=!1),u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,m),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d)})}if(a.context=m,a.props=b,a.__P=n,A=l.__r,P=0,"prototype"in $&&$.prototype.render){for(a.state=a.__s,a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[]}else do{a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++P<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),T=null!=s&&s.type===_&&null==s.key?s.props.children:s,H(n,Array.isArray(T)?T:[T],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),k&&(a.__E=a.__=null),a.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=O(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function N(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function O(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1}if(null===d)y===p||e&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||c).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(k(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,H(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&A(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&g(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&g(l,"checked",_,y.checked,!1))}return l}function S(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function q(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||S(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&q(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v(n.__e),n.__=n.__e=n.__d=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],M(i,u=(!r&&t||i).__k=y(_,null,[u]),o||c,c,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),N(f,u)}function E(n,l){D(n,l,E)}function F(l,u,i){var t,r,o,f=h({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),p(l.type,f,t||l.key,r||l.ref,null)}function G(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,T(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},t=!1,x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),T(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),T(this))},x.prototype.render=_,r=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$.__r=0,e=0;
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
/* harmony export */   "useCallback": () => (/* binding */ T),
/* harmony export */   "useContext": () => (/* binding */ q),
/* harmony export */   "useDebugValue": () => (/* binding */ x),
/* harmony export */   "useEffect": () => (/* binding */ h),
/* harmony export */   "useErrorBoundary": () => (/* binding */ P),
/* harmony export */   "useId": () => (/* binding */ V),
/* harmony export */   "useImperativeHandle": () => (/* binding */ A),
/* harmony export */   "useLayoutEffect": () => (/* binding */ s),
/* harmony export */   "useMemo": () => (/* binding */ F),
/* harmony export */   "useReducer": () => (/* binding */ y),
/* harmony export */   "useRef": () => (/* binding */ _),
/* harmony export */   "useState": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,l=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,m=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(n){return o=1,y(B,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))}}return o.__N||o.__}function h(u,i){var o=d(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o))}function s(u,i){var o=d(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o))}function _(n){return o=5,F(function(){return{current:n}},[])}function A(n,t,r){o=6,s(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T(n,t){return o=8,F(function(){return n},t)}function q(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r?r(t):t)}function P(n){var u=d(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[]}catch(r){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){r=null,e&&e(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((i=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return!n.__||w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),l&&l(t,r)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n)}catch(n){r=n}}),u.__H=void 0,r&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,u.__v))};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r))}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function w(n){var t=r;n.__c=n.__(),r=t}function z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return"function"==typeof t?t(n):t}
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var SDK_TYPE = 104;
// Backwards compatibility with optimove SDK not including version in Optimobile config
var DEFAULT_SDK_VERSION = '2.0.17';
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
            _a[Service.PUSH] = "https://push-".concat(config.region, ".kumulos.com"),
            _a[Service.EVENTS] = "https://events-".concat(config.region, ".kumulos.com"),
            _a[Service.DDL] = "https://links-".concat(config.region, ".kumulos.com"),
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
    var requiredStringProps = [
        'region',
        'apiKey',
        'secretKey',
        'vapidPublicKey'
    ];
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
            return setInstallId((0, utils_1.uuidv4)());
        }
        return installId;
    });
    return installIdPromise;
}
exports.getInstallId = getInstallId;
function setInstallId(installId) {
    installIdPromise = (0, storage_1.set)('installId', installId);
    return installIdPromise;
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
function trackInstallDetails(ctx, optionalSdkVersion) {
    return __awaiter(this, void 0, void 0, function () {
        var sdkVersion, payload, hashParts, hash, existingHash, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sdkVersion = optionalSdkVersion || DEFAULT_SDK_VERSION;
                    payload = {
                        app: {
                            bundle: location.host,
                            version: '0.0.0',
                            target: 2 // TODO read from context?
                        },
                        sdk: {
                            id: SDK_TYPE,
                            version: sdkVersion
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
                        sdkVersion,
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
function getActiveServiceWorkerReg(workerPath) {
    return __awaiter(this, void 0, void 0, function () {
        var pathWithOrigin, workerReg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pathWithOrigin = new URL(workerPath, location.origin).href;
                    return [4 /*yield*/, navigator.serviceWorker.getRegistration(pathWithOrigin)];
                case 1:
                    workerReg = _a.sent();
                    if (!workerReg) {
                        return [2 /*return*/, Promise.reject('No service worker registration')];
                    }
                    return [2 /*return*/, workerReg];
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
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
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
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
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
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
function registerServiceWorker(workerPath) {
    return __awaiter(this, void 0, void 0, function () {
        var updatedPath, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('serviceWorker' in navigator)) {
                        console.error('ServiceWorker is not supported in this browser, aborting...');
                        return [2 /*return*/];
                    }
                    updatedPath = new URL(workerPath, location.origin).href;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.serviceWorker.register(updatedPath)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    function Kumulos(context, config) {
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
        this.context = context;
        this.config = config;
        this.rootFrame = new root_frame_1["default"]();
    }
    Kumulos.buildInstance = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var context, kumulos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, core_1.assertConfigValid)(config);
                        context = new core_1.Context(config);
                        return [4 /*yield*/, Kumulos.maybePersistInstallIdAndUserId(context, config)];
                    case 1:
                        _a.sent();
                        kumulos = new Kumulos(context, config);
                        kumulos.initialize();
                        return [2 /*return*/, kumulos];
                }
            });
        });
    };
    Kumulos.prototype.initialize = function () {
        (0, storage_1.persistConfig)(this.config);
        (0, core_1.trackInstallDetails)(this.context, this.config.sdkVersion);
        if (this.context.hasFeature(core_1.SDKFeature.PUSH)) {
            this.initializePushFeature();
        }
        if (this.context.hasFeature(core_1.SDKFeature.DDL)) {
            if (!(0, utils_1.isMobile)()) {
                console.info('DdlManager: DDL feature support only available on mobile devices.');
                return;
            }
            this.ddlManager = new manager_1["default"](this.context, this.rootFrame);
        }
    };
    Kumulos.prototype.initializePushFeature = function () {
        (0, push_1.trackOpenFromQuery)(this.context);
        (0, utils_1.registerServiceWorker)(this.context.serviceWorkerPath);
        new prompts_1.PromptManager(this, this.context, this.rootFrame);
        this.maybeAddMessageEventListenerToSW();
        this.maybeFireOpenedHandler();
    };
    Kumulos.prototype.maybeAddMessageEventListenerToSW = function () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', this.onWorkerMessage);
        }
    };
    Kumulos.maybePersistInstallIdAndUserId = function (context, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, core_1.getInstallId)().then(function (installId) {
                            if (installId !== config.originalVisitorId) {
                                return (0, core_1.setInstallId)(config.originalVisitorId);
                            }
                        })];
                    case 1:
                        _a.sent();
                        if (config.customerId === undefined) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, core_1.getUserId)().then(function (userId) {
                                if (userId !== config.customerId) {
                                    return (0, core_1.associateUser)(context, config.customerId);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
            return __generator(this, function (_a) {
                return [2 /*return*/];
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
            var _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case 'loading': return [3 /*break*/, 1];
                            case 'ready': return [3 /*break*/, 6];
                            case 'postaction': return [3 /*break*/, 9];
                            case 'requesting': return [3 /*break*/, 9];
                            case 'requesting-silent': return [3 /*break*/, 9];
                            case 'requesting-silent-dismissed': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 10];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, (0, push_1["default"])(this.context)];
                    case 2:
                        _c.pushOpsManager = _f.sent();
                        return [4 /*yield*/, this.pushOpsManager.handleAutoResubscription(this.context)];
                    case 3:
                        _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.pushOpsManager.getCurrentSubscriptionState(this.context)];
                    case 4:
                        _d.subscriptionState = _f.sent();
                        return [4 /*yield*/, this.loadPrompts()];
                    case 5:
                        _f.sent();
                        // Note: channels irrelevant for optimove apps
                        //this.channels = await this.getChannelSubscriptionManager().listChannels();
                        this.setState('ready');
                        return [3 /*break*/, 10];
                    case 6:
                        this.currentlyRequestingPrompt = undefined;
                        this.currentPostAction = undefined;
                        _e = this;
                        return [4 /*yield*/, ((_a = this.pushOpsManager) === null || _a === void 0 ? void 0 : _a.getCurrentSubscriptionState(this.context))];
                    case 7:
                        _e.subscriptionState = _f.sent();
                        return [4 /*yield*/, this.evaluateTriggers()];
                    case 8:
                        _f.sent();
                        this.render();
                        return [3 /*break*/, 10];
                    case 9:
                        this.render();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.loadPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(this.context)];
                    case 1:
                        _a.platformConfig = _b.sent();
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
                        //Note: no prompts with such action can be created from ui for optimove apps
                        // for (let id in this.prompts) {
                        //     const hasChannelOp = Boolean(
                        //         this.prompts[id].actions?.filter(
                        //             a => a.type === 'subscribeToChannel'
                        //         )?.length
                        //     );
                        //     if (hasChannelOp) {
                        //         try {
                        //             this.channels = await this.getChannelSubscriptionManager().listChannels();
                        //         } catch (e) {
                        //             // Noop
                        //         }
                        //         break;
                        //     }
                        // }
                        return [2 /*return*/, Promise.resolve()];
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
        var _this = this;
        var _a, _b;
        _this = _super.call(this, props) || this;
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
            var matchedPrompts, _a, _b, _c, _i, id, prompt_1, i, event_1, promptSuppressed;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        matchedPrompts = [];
                        _a = prompts;
                        _b = [];
                        for (_c in _a)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 6];
                        _c = _b[_i];
                        if (!(_c in _a)) return [3 /*break*/, 5];
                        id = _c;
                        prompt_1 = prompts[id];
                        i = 0;
                        _d.label = 2;
                    case 2:
                        if (!(i < this.eventQueue.length)) return [3 /*break*/, 5];
                        event_1 = this.eventQueue[i];
                        return [4 /*yield*/, (0, prompt_reminder_1.isPromptSuppressed)(prompt_1)];
                    case 3:
                        promptSuppressed = _d.sent();
                        if (!promptSuppressed &&
                            triggerMatched(prompt_1, event_1) &&
                            filter(prompt_1)) {
                            matchedPrompts.push(prompt_1);
                        }
                        _d.label = 4;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxlQUFlLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksZUFBZSxhQUFhLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLE9BQU8sU0FBUyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxX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TyxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbkUsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQWxCRCxzREFrQkM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCxJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDekIsb0RBQStCO0FBQ25DLENBQUMsRUFGVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUU1QjtBQU1ELFNBQWdCLHNCQUFzQixDQUFDLElBQVM7SUFDNUMsT0FBTyxDQUNGLElBQXNCLENBQUMsSUFBSSxLQUFLLFNBQVM7UUFDMUMsaUJBQWlCLENBQUUsSUFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQ2hFLENBQUM7QUFDTixDQUFDO0FBTEQsd0RBS0M7Ozs7Ozs7VUNmRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLWNvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvYXBwLXJhdGluZy5zY3NzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2FwcC1yYXRpbmcuc2Nzcz9mYmQxIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvbXBvbmVudHMvc3ZnLXBvaW50ZXIudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvY29uZmlnLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcHVzaC9zYWZhcmkudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvdzNjLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9yb290LWZyYW1lLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9zdG9yYWdlL2lkYi1rZXl2YWwudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3N0b3JhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZnAvZnAtY2FwdHVyZS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9mcC9pbmRleC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2ZwL3R5cGVzLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2JlbGwvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvZGRsLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC9kZWVwbGluay1idXR0b24udHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kZGwvbWFuYWdlci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RkbC91aS50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9jaGFubmVscy1kaWFsb2cudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9kaWFsb2cvY2hhbm5lbHMtbGlzdC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvb3ZlcmxheS9iYWNrZ3JvdW5kLW1hc2sudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9vdmVybGF5L3B1c2gtcGVybXMtc2lsZW50LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvb3ZlcmxheS9wdXNoLXBlcm1zLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvcHJvbXB0LXJlbWluZGVyLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy90cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWktY29udGV4dC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWkudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3dvcmtlci9tZXNzYWdpbmcudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va3VtdWxvcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2t1bXVsb3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia3VtdWxvc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiEgY2xpcGJvYXJkLWNvcHkuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGdsb2JhbCBET01FeGNlcHRpb24gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGlwYm9hcmRDb3B5XG5cbmZ1bmN0aW9uIG1ha2VFcnJvciAoKSB7XG4gIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCcsICdOb3RBbGxvd2VkRXJyb3InKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5Q2xpcGJvYXJkQXBpICh0ZXh0KSB7XG4gIC8vIFVzZSB0aGUgQXN5bmMgQ2xpcGJvYXJkIEFQSSB3aGVuIGF2YWlsYWJsZS4gUmVxdWlyZXMgYSBzZWN1cmUgYnJvd3NpbmdcbiAgLy8gY29udGV4dCAoaS5lLiBIVFRQUylcbiAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgdGhyb3cgbWFrZUVycm9yKClcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUV4ZWNDb21tYW5kICh0ZXh0KSB7XG4gIC8vIFB1dCB0aGUgdGV4dCB0byBjb3B5IGludG8gYSA8c3Bhbj5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIC8vIFByZXNlcnZlIGNvbnNlY3V0aXZlIHNwYWNlcyBhbmQgbmV3bGluZXNcbiAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSdcbiAgc3Bhbi5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ2F1dG8nXG4gIHNwYW4uc3R5bGUudXNlclNlbGVjdCA9ICdhbGwnXG5cbiAgLy8gQWRkIHRoZSA8c3Bhbj4gdG8gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxuXG4gIC8vIE1ha2UgYSBzZWxlY3Rpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcmFuZ2Ugb2YgdGV4dCBzZWxlY3RlZCBieSB0aGUgdXNlclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3QgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShzcGFuKVxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG5cbiAgLy8gQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuICB0cnkge1xuICAgIHN1Y2Nlc3MgPSB3aW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIENsZWFudXBcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuKVxuICB9XG5cbiAgaWYgKCFzdWNjZXNzKSB0aHJvdyBtYWtlRXJyb3IoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbGlwYm9hcmRDb3B5ICh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUNsaXBib2FyZEFwaSh0ZXh0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAuLi5PdGhlcndpc2UsIHVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgpIGZhbGxiYWNrXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvcHlFeGVjQ29tbWFuZCh0ZXh0KVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIHRocm93IChlcnIyIHx8IGVyciB8fCBtYWtlRXJyb3IoKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmt1bXVsb3MtcmF0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIgLmt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtcmF0aW5nIC5rdW11bG9zLXJhdGluZy1jb3VudCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2FwcC1yYXRpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rdW11bG9zLXJhdGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuXFxuICAgIC5rdW11bG9zLXJhdGluZy1zdGFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIC5rdW11bG9zLXJhdGluZy1oYWxmc3RhciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1yYXRpbmctY291bnQge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQge1xcbiAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyMjtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMjI7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG5cXG4ua3VtdWxvcy1wcm9tcHQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5rdW11bG9zLXByb21wdCAqLFxcbi5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4ua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiB1bnNldDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDNweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgIHBhZGRpbmctbGVmdDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xcbiAgfVxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XFxuICB9XFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcXG4gIH1cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtYmVsbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbCBzdmcge1xcbiAgZmlsbDogI2ZmZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcbi5rdW11bG9zLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4gIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuICAua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlcixcXG4gIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHRvcDogMTIwcHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb24sXFxuLmt1bXVsb3MtYWxlcnQtaWNvbiB7XFxuICBvcmRlcjogMjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIgaDEsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9ucyxcXG4ua3VtdWxvcy1hbGVydC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG9yZGVyOiAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuYm9keS5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgKixcXG4ua3VtdWxvcy1vdmVybGF5ICo6YmVmb3JlLFxcbi5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICBtYXgtd2lkdGg6IDY2MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDM4JTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDU1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHAsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCBwIHtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0IHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ0MHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDY3NXB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgb3JkZXI6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LXNhZmFyaSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYW5pbXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3Rvb2x0aXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL190b2FzdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3Byb21wdHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fY2hlY2tib3guc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19iYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19iYW5uZXIuY29tcGFjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX3NhZmUtYXJlYS1pbnNldC1wYWQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvYmVsbC9iZWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2RpYWxvZy9kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvYmFja2dyb3VuZC1tYXNrLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL292ZXJsYXkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJO0lBRUksa0NBQUE7RUNETjtFRElFO0lBRUksaUNBQUE7RUNITjtFRE1FO0lBR0ksa0NBQUE7RUNOTjtFRFNFO0lBRUksaUNBQUE7RUNSTjtBQUNGO0FEV0E7RUFDSTtJQUNJLFVBQUE7RUNUTjtFRFlFO0lBQ0ksVUFBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VDWE47RURjRTtJQUNJLFVBQUE7SUFDQSwrQkFBQTtFQ1pOO0FBQ0Y7QURlQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDYk47RURnQkU7SUFDSSxVQUFBO0lBQ0EsK0JBQUE7RUNkTjtBQUNGO0FEaUJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUNBQUE7RUNmTjtFRGtCRTtJQUNJLFVBQUE7SUFDQSxrQ0FBQTtFQ2hCTjtBQUNGO0FEbUJBO0VBQ0k7SUFDSSxtQ0FBQTtFQ2pCTjtFRG9CRTtJQUNJLCtCQUFBO0VDbEJOO0FBQ0Y7QURxQkE7RUFDSTtJQUNJLGtDQUFBO0VDbkJOO0VEc0JFO0lBQ0ksK0JBQUE7RUNwQk47QUFDRjtBQ2xFSTtFQUNJLGFBQUE7QURvRVI7QUNqRUk7RUFDSSxjQUFBO0FEbUVSOztBQy9EQTtFQUNJLGdCQ1ZpQjtFRFdqQixrQkFB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XCI6W1wiLy8gQmFzZWQgb24gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3Mvc2hha2UtY3NzLWtleWZyYW1lLWFuaW1hdGlvbi9cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAgIDEwJSxcXG4gICAgOTAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMjAlLFxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDMwJSxcXG4gICAgNTAlLFxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA0MCUsXFxuICAgIDYwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDEwMCUsIDApO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCIsXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQge1xcbiAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyMjtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMjI7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG5cXG4ua3VtdWxvcy1wcm9tcHQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5rdW11bG9zLXByb21wdCAqLFxcbi5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4ua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiB1bnNldDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDNweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgIHBhZGRpbmctbGVmdDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xcbiAgfVxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XFxuICB9XFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcXG4gIH1cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtYmVsbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGw6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbCBzdmcge1xcbiAgZmlsbDogI2ZmZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcbi5rdW11bG9zLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4gIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuICAua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlcixcXG4gIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHRvcDogMTIwcHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb24sXFxuLmt1bXVsb3MtYWxlcnQtaWNvbiB7XFxuICBvcmRlcjogMjtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXIgaDEsXFxuLmt1bXVsb3MtYWxlcnQtaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHksXFxuLmt1bXVsb3MtYWxlcnQtYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYWN0aW9ucyxcXG4ua3VtdWxvcy1hbGVydC1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG9yZGVyOiAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuYm9keS5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDIwMDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgKixcXG4ua3VtdWxvcy1vdmVybGF5ICo6YmVmb3JlLFxcbi5rdW11bG9zLW92ZXJsYXkgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICBtYXgtd2lkdGg6IDY2MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDM4JTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDU1cHg7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHAsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBhIHtcXG4gIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCBwIHtcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0IHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IDQ0MHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDY3NXB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgb3JkZXI6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LXNhZmFyaSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLFwiLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQge1xcbiAgICAua3VtdWxvcy10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciAua3VtdWxvcy10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgICBiYWNrZ3JvdW5kOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgZm9udDogMTRweCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHotaW5kZXg6IDExMDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxuXFxuICAgICY6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgICB9XFxuXFxuICAgICYtcmlnaHQge1xcbiAgICAgICAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgJHF1aW50RWFzaW5nO1xcblxcbiAgICAgICAgJjphZnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYtbGVmdCB7XFxuICAgICAgICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLWxlZnQgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHRvb2x0aXAtYmFja2dyb3VuZDtcXG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4kdG9vbHRpcC1iYWNrZ3JvdW5kOiAjMjIyO1xcbi8vIGh0dHBzOi8vZWFzaW5ncy5uZXQvZW4jZWFzZU91dFF1aW50XFxuJHF1aW50RWFzaW5nOiBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuXFxuJGRlZmF1bHRGb250OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuJGRlZmF1bHRIZWFkZXJGb250U2l6ZTogMThweDtcXG4kZGVmYXVsdEJvZHlTaXplOiAxNHB4O1xcbiRkZWZhdWx0QnV0dG9uU2l6ZTogMTRweDtcXG5cXG4kbWFza1pJbmRleDogOTAwO1xcbiRwcm9tcHRaSW5kZXg6IDEwMDA7XFxuXFxuJGRlZmF1bHRCYW5uZXJIZWFkZXJGb250U2l6ZU1vYmlsZTogMTJweDtcXG4kZGVmYXVsdEJhbm5lckhlYWRlckxpbmVIZWlnaHRNb2JpbGU6IDE0cHg7XFxuXFxuJGRlZmF1bHRCYW5uZXJCb2R5Rm9udFNpemVNb2JpbGU6IDEycHg7XFxuJGRlZmF1bHRCYW5uZXJCb2R5TGluZUhlaWdodE1vYmlsZTogMTRweDtcXG5cXG4kZGVmYXVsdEJhbm5lclBhZGRpbmc6IDEwcHg7XCIsXCIua3VtdWxvcy10b2FzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICB6LWluZGV4OiAxMTAwO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXRvYXN0LWluLW91dCAwLjI1cyAkcXVpbnRFYXNpbmc7XFxufVxcblwiLFwiLmt1bXVsb3MtcHJvbXB0IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgKixcXG4gICAgKjpiZWZvcmUsXFxuICAgICo6YWZ0ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICB6LWluZGV4OiAkcHJvbXB0WkluZGV4O1xcbn1cXG5cIixcIi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcXG5cXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG5cXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEJ1dHRvblNpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6ICM1NTU7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggM3B4ICRzaGFkb3ctY29sb3I7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYig3NiwgMTM2LCAyMjQpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG59XFxuXCIsXCIua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItY29sb3I6ICMyMjI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogLTdweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICMwMDA7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXCIsXCIua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcblxcbiAgICBwYWRkaW5nOiAkZGVmYXVsdEJhbm5lclBhZGRpbmc7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuXFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3Age1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tYm90dG9tIHtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRvcDogdW5zZXQ7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtdXAgMC40cyBlYXNlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1pY29uIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QmFubmVySGVhZGVyRm9udFNpemVNb2JpbGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAkZGVmYXVsdEJhbm5lckJvZHlMaW5lSGVpZ2h0TW9iaWxlO1xcblxcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbjogMCAwIDNweCAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdEhlYWRlckZvbnRTaXplO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZm9udC1zaXplOiAkZGVmYXVsdEJhbm5lckJvZHlGb250U2l6ZU1vYmlsZTtcXG4gICAgbGluZS1oZWlnaHQ6ICRkZWZhdWx0QmFubmVyQm9keUxpbmVIZWlnaHRNb2JpbGU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCb2R5U2l6ZTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWJhbm5lci1jb21wYWN0IHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3MtYmFubmVyLWNsb3NlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgfVxcbn1cXG5cIixcIkBzdXBwb3J0cyhwYWRkaW5nOiB1bnF1b3RlKCdtYXgoMHB4KScpKSB7XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSknKTtcXG4gICAgfVxcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0IHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkpJyk7XFxuICAgIH1cXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC10b3Age1xcbiAgICAgICAgcGFkZGluZy10b3A6IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKScpO1xcbiAgICB9XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB1bnF1b3RlKCdtYXgoJyArICRkZWZhdWx0QmFubmVyUGFkZGluZyArICcsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSknKTtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICAmLWJvdHRvbS1sZWZ0IHtcXG4gICAgICAgIGJvdHRvbTogMTVweDtcXG4gICAgICAgIGxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgJi1ib3R0b20tcmlnaHQge1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzICRxdWludEVhc2luZyxcXG4gICAgICAgIGJveC1zaGFkb3cgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLy8gTm90ZSB0aGUgc2NhbGUvd2lkdGgvaGVpZ2h0IGluIGFsbCBzdGF0ZXMgaGF2ZSBiZWVuIGNob3NlbiBzdWNoIHRoYXQgdGhleSByZXNvbHZlIHRvIHdob2xlIG51bWJlcnMuXFxuICAgIC8vIFRoaXMgaGVscHMgcmVkdWNlIGJsdXIgb2YgdGhlIFNWRyBpY29uIGR1ZSB0byByZXN0ZXJpc2F0aW9uIGluIFdlYmtpdC5cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgJHNoYWRvdy1jb2xvcjtcXG4gICAgfVxcblxcbiAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICBzdmcge1xcbiAgICAgICAgZmlsbDogI2ZmZjtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLXNoYWtlIDAuNHMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG4gICAgfVxcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIGhlaWdodDogODUlO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG1hcmdpbjogNy41JSAwIDAgNy41JTtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXCIsXCIua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG5cXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbiAgICAua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICAgICAgbGVmdDogNTAlO1xcblxcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcblxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAgIHRvcDogMTIwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnQsXFxuLmt1bXVsb3MtYWxlcnQtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlcixcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0SGVhZGVyRm9udFNpemU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keSxcXG4ua3VtdWxvcy1hbGVydC1ib2R5IHtcXG4gICAgZmxleDogMTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBvcmRlcjogMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXCIsXCJib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1clxcbiAgICA+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzayB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB6LWluZGV4OiAkbWFza1pJbmRleDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsXCIua3VtdWxvcy1vdmVybGF5LWJsdXIgPiAqOm5vdCgua3VtdWxvcy1vdmVybGF5KSB7XFxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gICAgKixcXG4gICAgKjpiZWZvcmUsXFxuICAgICo6YWZ0ZXIge1xcbiAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICB6LWluZGV4OiAyMDAwO1xcblxcbiAgICAmLXN0cmlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNjYwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgJi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzOCU7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcblxcbiAgICAgICAgKiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgICAgICAgICAgIHN0cm9rZTogbm9uZTtcXG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgzLFxcbiAgICAgICAgcCxcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDMge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xcblxcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDQ0MHB4O1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBtaW4td2lkdGg6IDY3NXB4O1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnR7Q29tcG9uZW50IGFzIG4sY3JlYXRlRWxlbWVudCBhcyB0LG9wdGlvbnMgYXMgZSx0b0NoaWxkQXJyYXkgYXMgcixGcmFnbWVudCBhcyB1LHJlbmRlciBhcyBvLGh5ZHJhdGUgYXMgaSxjcmVhdGVDb250ZXh0IGFzIGwsY3JlYXRlUmVmIGFzIGMsY2xvbmVFbGVtZW50IGFzIGZ9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e0NvbXBvbmVudCxGcmFnbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZUVsZW1lbnQsY3JlYXRlUmVmfWZyb21cInByZWFjdFwiO2ltcG9ydHt1c2VTdGF0ZSBhcyBhLHVzZUlkIGFzIHMsdXNlUmVkdWNlciBhcyBoLHVzZUVmZmVjdCBhcyB2LHVzZUxheW91dEVmZmVjdCBhcyBkLHVzZVJlZiBhcyBwLHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbSx1c2VNZW1vIGFzIHksdXNlQ2FsbGJhY2sgYXMgXyx1c2VDb250ZXh0IGFzIGIsdXNlRGVidWdWYWx1ZSBhcyBTfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtmdW5jdGlvbiBnKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuLHQpe3JldHVybiBuPT09dCYmKDAhPT1ufHwxL249PTEvdCl8fG4hPW4mJnQhPXR9ZnVuY3Rpb24gdyhuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gUihuLGUpe2Z1bmN0aW9uIHIobil7dmFyIHQ9dGhpcy5wcm9wcy5yZWYscj10PT1uLnJlZjtyZXR1cm4hciYmdCYmKHQuY2FsbD90KG51bGwpOnQuY3VycmVudD1udWxsKSxlPyFlKHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiB1KGUpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1yLHQobixlKX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCx1Ll9fZj0hMCx1fSh3LnByb3RvdHlwZT1uZXcgbikuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsdy5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgeD1lLl9fYjtlLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCkseCYmeChuKX07dmFyIE49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIGsobil7ZnVuY3Rpb24gdCh0KXt2YXIgZT1nKHt9LHQpO3JldHVybiBkZWxldGUgZS5yZWYsbihlLHQucmVmfHxudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1OLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBBPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpyKHIobikubWFwKHQpKX0sTz17bWFwOkEsZm9yRWFjaDpBLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3IobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9cihuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpyfSxUPWUuX19lO2UuX19lPWZ1bmN0aW9uKG4sdCxlLHIpe2lmKG4udGhlbilmb3IodmFyIHUsbz10O289by5fXzspaWYoKHU9by5fX2MpJiZ1Ll9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksdS5fX2Mobix0KTtUKG4sdCxlLHIpfTt2YXIgST1lLnVubW91bnQ7ZnVuY3Rpb24gTChuLHQsZSl7cmV0dXJuIG4mJihuLl9fYyYmbi5fX2MuX19IJiYobi5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSxuLl9fYy5fX0g9bnVsbCksbnVsbCE9KG49Zyh7fSxuKSkuX19jJiYobi5fX2MuX19QPT09ZSYmKG4uX19jLl9fUD10KSxuLl9fYz1udWxsKSxuLl9faz1uLl9fayYmbi5fX2subWFwKGZ1bmN0aW9uKG4pe3JldHVybiBMKG4sdCxlKX0pKSxufWZ1bmN0aW9uIFUobix0LGUpe3JldHVybiBuJiYobi5fX3Y9bnVsbCxuLl9faz1uLl9fayYmbi5fX2subWFwKGZ1bmN0aW9uKG4pe3JldHVybiBVKG4sdCxlKX0pLG4uX19jJiZuLl9fYy5fX1A9PT10JiYobi5fX2UmJmUuaW5zZXJ0QmVmb3JlKG4uX19lLG4uX19kKSxuLl9fYy5fX2U9ITAsbi5fX2MuX19QPWUpKSxufWZ1bmN0aW9uIEQoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gRihuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2EmJnQuX19hKG4pfWZ1bmN0aW9uIE0obil7dmFyIGUscix1O2Z1bmN0aW9uIG8obyl7aWYoZXx8KGU9bigpKS50aGVuKGZ1bmN0aW9uKG4pe3I9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXt1PW59KSx1KXRocm93IHU7aWYoIXIpdGhyb3cgZTtyZXR1cm4gdChyLG8pfXJldHVybiBvLmRpc3BsYXlOYW1lPVwiTGF6eVwiLG8uX19mPSEwLG99ZnVuY3Rpb24gVigpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWUudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLEkmJkkobil9LChELnByb3RvdHlwZT1uZXcgbikuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9RihyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fYSl7dmFyIG49ci5zdGF0ZS5fX2E7ci5fX3YuX19rWzBdPVUobixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19hOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fYTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sRC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLGUpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbz10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1MKHRoaXMuX19iLHIsby5fX089by5fX1ApfXRoaXMuX19iPW51bGx9dmFyIGk9ZS5fX2EmJnQodSxudWxsLG4uZmFsbGJhY2spO3JldHVybiBpJiYoaS5fX2g9bnVsbCksW3QodSxudWxsLGUuX19hP251bGw6bi5jaGlsZHJlbiksaV19O3ZhciBXPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIFAobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiAkKG4pe3ZhciBlPXRoaXMscj1uLmk7ZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe28obnVsbCxlLmwpLGUubD1udWxsLGUuaT1udWxsfSxlLmkmJmUuaSE9PXImJmUuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8oZS5sfHwoZS5pPXIsZS5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6cixjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sdCl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSxlLmkucmVtb3ZlQ2hpbGQobil9fSksbyh0KFAse2NvbnRleHQ6ZS5jb250ZXh0fSxuLl9fdiksZS5sKSk6ZS5sJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gaihuLGUpe3ZhciByPXQoJCx7X192Om4saTplfSk7cmV0dXJuIHIuY29udGFpbmVySW5mbz1lLHJ9KFYucHJvdG90eXBlPW5ldyBuKS5fX2E9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPUYodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFcodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxWLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9cihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sVi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPVYucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1cobixlLHQpfSl9O3ZhciB6PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxCPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8aW1hZ2V8bGV0dGVyfGxpZ2h0aW5nfG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxwb2ludGVyfHNoYXBlfHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHRyYW5zZm9ybXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLEg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LFo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBZKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLG8obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIHEobix0LGUpe3JldHVybiBpKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1uLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLnByb3RvdHlwZSx0LHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX0pfSk7dmFyIEc9ZS5ldmVudDtmdW5jdGlvbiBKKCl7fWZ1bmN0aW9uIEsoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gUSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9ZS5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gRyYmKG49RyhuKSksbi5wZXJzaXN0PUosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1LLG4uaXNEZWZhdWx0UHJldmVudGVkPVEsbi5uYXRpdmVFdmVudD1ufTt2YXIgWCxubj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sdG49ZS52bm9kZTtlLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMsdT1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgbz0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBpIGluIHU9e30sZSl7dmFyIGw9ZVtpXTtIJiZcImNoaWxkcmVuXCI9PT1pJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1pJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09bHx8KFwiZGVmYXVsdFZhbHVlXCI9PT1pJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP2k9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PWkmJiEwPT09bD9sPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KGkpP2k9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkrdCkmJiFaKGUudHlwZSk/aT1cIm9uaW5wdXRcIjovXm9uZm9jdXMkL2kudGVzdChpKT9pPVwib25mb2N1c2luXCI6L15vbmJsdXIkL2kudGVzdChpKT9pPVwib25mb2N1c291dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChpKT9pPWkudG9Mb3dlckNhc2UoKTpvJiZCLnRlc3QoaSk/aT1pLnJlcGxhY2UoL1tBLVowLTldL2csXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09bCYmKGw9dm9pZCAwKSwvXm9uaW5wdXQkL2kudGVzdChpKSYmKGk9aS50b0xvd2VyQ2FzZSgpLHVbaV0mJihpPVwib25pbnB1dENhcHR1cmVcIikpLHVbaV09bCl9XCJzZWxlY3RcIj09dCYmdS5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheSh1LnZhbHVlKSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT11LmRlZmF1bHRWYWx1ZSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9dS5tdWx0aXBsZT8tMSE9dS5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTp1LmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXUsZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihubi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYodS5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHUsXCJjbGFzc05hbWVcIixubikpfW4uJCR0eXBlb2Y9eix0biYmdG4obil9O3ZhciBlbj1lLl9fcjtlLl9fcj1mdW5jdGlvbihuKXtlbiYmZW4obiksWD1uLl9fY307dmFyIHJuPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gWC5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSx1bj1cIjE3LjAuMlwiO2Z1bmN0aW9uIG9uKG4pe3JldHVybiB0LmJpbmQobnVsbCxuKX1mdW5jdGlvbiBsbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT16fWZ1bmN0aW9uIGNuKG4pe3JldHVybiBsbihuKT9mLmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIGZuKG4pe3JldHVybiEhbi5fX2smJihvKG51bGwsbiksITApfWZ1bmN0aW9uIGFuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIHNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHZuPXU7ZnVuY3Rpb24gZG4obil7bigpfWZ1bmN0aW9uIHBuKG4pe3JldHVybiBufWZ1bmN0aW9uIG1uKCl7cmV0dXJuWyExLGRuXX12YXIgeW49ZDtmdW5jdGlvbiBfbihuLHQpe3ZhciBlPXQoKSxyPWEoe2g6e19fOmUsdjp0fX0pLHU9clswXS5oLG89clsxXTtyZXR1cm4gZChmdW5jdGlvbigpe3UuX189ZSx1LnY9dCxFKHUuX18sdCgpKXx8byh7aDp1fSl9LFtuLGUsdF0pLHYoZnVuY3Rpb24oKXtyZXR1cm4gRSh1Ll9fLHUudigpKXx8byh7aDp1fSksbihmdW5jdGlvbigpe0UodS5fXyx1LnYoKSl8fG8oe2g6dX0pfSl9LFtuXSksZX12YXIgYm49e3VzZVN0YXRlOmEsdXNlSWQ6cyx1c2VSZWR1Y2VyOmgsdXNlRWZmZWN0OnYsdXNlTGF5b3V0RWZmZWN0OmQsdXNlSW5zZXJ0aW9uRWZmZWN0OnluLHVzZVRyYW5zaXRpb246bW4sdXNlRGVmZXJyZWRWYWx1ZTpwbix1c2VTeW5jRXh0ZXJuYWxTdG9yZTpfbixzdGFydFRyYW5zaXRpb246ZG4sdXNlUmVmOnAsdXNlSW1wZXJhdGl2ZUhhbmRsZTptLHVzZU1lbW86eSx1c2VDYWxsYmFjazpfLHVzZUNvbnRleHQ6Yix1c2VEZWJ1Z1ZhbHVlOlMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOk8scmVuZGVyOlksaHlkcmF0ZTpxLHVubW91bnRDb21wb25lbnRBdE5vZGU6Zm4sY3JlYXRlUG9ydGFsOmosY3JlYXRlRWxlbWVudDp0LGNyZWF0ZUNvbnRleHQ6bCxjcmVhdGVGYWN0b3J5Om9uLGNsb25lRWxlbWVudDpjbixjcmVhdGVSZWY6YyxGcmFnbWVudDp1LGlzVmFsaWRFbGVtZW50OmxuLGZpbmRET01Ob2RlOmFuLENvbXBvbmVudDpuLFB1cmVDb21wb25lbnQ6dyxtZW1vOlIsZm9yd2FyZFJlZjprLGZsdXNoU3luYzpobix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpzbixTdHJpY3RNb2RlOnZuLFN1c3BlbnNlOkQsU3VzcGVuc2VMaXN0OlYsbGF6eTpNLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOnJufTtleHBvcnR7TyBhcyBDaGlsZHJlbix3IGFzIFB1cmVDb21wb25lbnQsdm4gYXMgU3RyaWN0TW9kZSxEIGFzIFN1c3BlbnNlLFYgYXMgU3VzcGVuc2VMaXN0LHJuIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELGNuIGFzIGNsb25lRWxlbWVudCxvbiBhcyBjcmVhdGVGYWN0b3J5LGogYXMgY3JlYXRlUG9ydGFsLGJuIGFzIGRlZmF1bHQsYW4gYXMgZmluZERPTU5vZGUsaG4gYXMgZmx1c2hTeW5jLGsgYXMgZm9yd2FyZFJlZixxIGFzIGh5ZHJhdGUsbG4gYXMgaXNWYWxpZEVsZW1lbnQsTSBhcyBsYXp5LFIgYXMgbWVtbyxZIGFzIHJlbmRlcixkbiBhcyBzdGFydFRyYW5zaXRpb24sZm4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxzbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxwbiBhcyB1c2VEZWZlcnJlZFZhbHVlLHluIGFzIHVzZUluc2VydGlvbkVmZmVjdCxfbiBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxtbiBhcyB1c2VUcmFuc2l0aW9uLHVuIGFzIHZlcnNpb259O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQscixvLGYsZSxjPXt9LHM9W10sYT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIGgobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gdihuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB5KGwsdSxpKXt2YXIgdCxyLG8sZj17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gcChsLGYsdCxyLG51bGwpfWZ1bmN0aW9uIHAobixpLHQscixvKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK3U6b307cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBkKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gXyhuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBrKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxnKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8ZyhuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uIGIobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxhLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBnKG4sbCx1LGksdCl7dmFyIHI7bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHxiKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fGIobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pcj1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK3JdPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP3c6bSxyKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxyP3c6bSxyKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcIndpZHRoXCIhPT1sJiZcImhlaWdodFwiIT09bCYmXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJi0xPT1sLmluZGV4T2YoXCItXCIpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBtKG4pe3Q9ITA7dHJ5e3JldHVybiB0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZmluYWxseXt0PSExfX1mdW5jdGlvbiB3KG4pe3Q9ITA7dHJ5e3JldHVybiB0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZmluYWxseXt0PSExfX1mdW5jdGlvbiB4KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIEEobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP0Eobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/QShuKTpudWxsfWZ1bmN0aW9uIFAobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBQKG4pfX1mdW5jdGlvbiBDKG4pe3Q/c2V0VGltZW91dChuKTpmKG4pfWZ1bmN0aW9uIFQobil7KCFuLl9fZCYmKG4uX19kPSEwKSYmci5wdXNoKG4pJiYhJC5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fEMpKCQpfWZ1bmN0aW9uICQoKXt2YXIgbixsLHUsaSx0LG8sZixlO2ZvcihyLnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pO249ci5zaGlmdCgpOyluLl9fZCYmKGw9ci5sZW5ndGgsaT12b2lkIDAsdD12b2lkIDAsZj0obz0odT1uKS5fX3YpLl9fZSwoZT11Ll9fUCkmJihpPVtdLCh0PWgoe30sbykpLl9fdj1vLl9fdisxLE0oZSxvLHQsdS5fX24sdm9pZCAwIT09ZS5vd25lclNWR0VsZW1lbnQsbnVsbCE9by5fX2g/W2ZdOm51bGwsaSxudWxsPT1mP0Eobyk6ZixvLl9faCksTihpLG8pLG8uX19lIT1mJiZQKG8pKSxyLmxlbmd0aD5sJiZyLnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pKTskLl9fcj0wfWZ1bmN0aW9uIEgobixsLHUsaSx0LHIsbyxmLGUsYSl7dmFyIGgsdix5LGQsayxiLGcsbT1pJiZpLl9fa3x8cyx3PW0ubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KGQ9dS5fX2tbaF09bnVsbD09KGQ9bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgZD9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBkfHxcIm51bWJlclwiPT10eXBlb2YgZHx8XCJiaWdpbnRcIj09dHlwZW9mIGQ/cChudWxsLGQsbnVsbCxudWxsLGQpOkFycmF5LmlzQXJyYXkoZCk/cChfLHtjaGlsZHJlbjpkfSxudWxsLG51bGwsbnVsbCk6ZC5fX2I+MD9wKGQudHlwZSxkLnByb3BzLGQua2V5LGQucmVmP2QucmVmOm51bGwsZC5fX3YpOmQpKXtpZihkLl9fPXUsZC5fX2I9dS5fX2IrMSxudWxsPT09KHk9bVtoXSl8fHkmJmQua2V5PT15LmtleSYmZC50eXBlPT09eS50eXBlKW1baF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PHc7disrKXtpZigoeT1tW3ZdKSYmZC5rZXk9PXkua2V5JiZkLnR5cGU9PT15LnR5cGUpe21bdl09dm9pZCAwO2JyZWFrfXk9bnVsbH1NKG4sZCx5PXl8fGMsdCxyLG8sZixlLGEpLGs9ZC5fX2UsKHY9ZC5yZWYpJiZ5LnJlZiE9diYmKGd8fChnPVtdKSx5LnJlZiYmZy5wdXNoKHkucmVmLG51bGwsZCksZy5wdXNoKHYsZC5fX2N8fGssZCkpLG51bGwhPWs/KG51bGw9PWImJihiPWspLFwiZnVuY3Rpb25cIj09dHlwZW9mIGQudHlwZSYmZC5fX2s9PT15Ll9faz9kLl9fZD1lPUkoZCxlLG4pOmU9eihuLGQseSxtLGssZSksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9ZSkpOmUmJnkuX19lPT1lJiZlLnBhcmVudE5vZGUhPW4mJihlPUEoeSkpfWZvcih1Ll9fZT1iLGg9dztoLS07KW51bGwhPW1baF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPW1baF0uX19lJiZtW2hdLl9fZT09dS5fX2QmJih1Ll9fZD1MKGkpLm5leHRTaWJsaW5nKSxxKG1baF0sbVtoXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylTKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24gSShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP0koaSxsLHUpOnoodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gaihuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe2oobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiB6KG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MSlpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEwobil7dmFyIGwsdSxpO2lmKG51bGw9PW4udHlwZXx8XCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSlyZXR1cm4gbi5fX2U7aWYobi5fX2spZm9yKGw9bi5fX2subGVuZ3RoLTE7bD49MDtsLS0paWYoKHU9bi5fX2tbbF0pJiYoaT1MKHUpKSlyZXR1cm4gaTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBNKG4sdSxpLHQscixvLGYsZSxjKXt2YXIgcyxhLHYseSxwLGQsayxiLGcsbSx3LEEsUCxDLFQsJD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgJCl7aWYoYj11LnByb3BzLGc9KHM9JC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLG09cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2s9KGE9dS5fX2M9aS5fX2MpLl9fPWEuX19FOihcInByb3RvdHlwZVwiaW4gJCYmJC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWE9bmV3ICQoYixtKToodS5fX2M9YT1uZXcgeChiLG0pLGEuY29uc3RydWN0b3I9JCxhLnJlbmRlcj1CKSxnJiZnLnN1YihhKSxhLnByb3BzPWIsYS5zdGF0ZXx8KGEuc3RhdGU9e30pLGEuY29udGV4dD1tLGEuX19uPXQsdj1hLl9fZD0hMCxhLl9faD1bXSxhLl9zYj1bXSksbnVsbD09YS5fX3MmJihhLl9fcz1hLnN0YXRlKSxudWxsIT0kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGEuX19zPT1hLnN0YXRlJiYoYS5fX3M9aCh7fSxhLl9fcykpLGgoYS5fX3MsJC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoYixhLl9fcykpKSx5PWEucHJvcHMscD1hLnN0YXRlLGEuX192PXUsdiludWxsPT0kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9YS5jb21wb25lbnRXaWxsTW91bnQmJmEuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9YS5jb21wb25lbnREaWRNb3VudCYmYS5fX2gucHVzaChhLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PSQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZiIT09eSYmbnVsbCE9YS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZhLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYixtKSwhYS5fX2UmJm51bGwhPWEuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWEuc2hvdWxkQ29tcG9uZW50VXBkYXRlKGIsYS5fX3MsbSl8fHUuX192PT09aS5fX3Ype2Zvcih1Ll9fdiE9PWkuX192JiYoYS5wcm9wcz1iLGEuc3RhdGU9YS5fX3MsYS5fX2Q9ITEpLHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSx3PTA7dzxhLl9zYi5sZW5ndGg7dysrKWEuX19oLnB1c2goYS5fc2Jbd10pO2EuX3NiPVtdLGEuX19oLmxlbmd0aCYmZi5wdXNoKGEpO2JyZWFrIG59bnVsbCE9YS5jb21wb25lbnRXaWxsVXBkYXRlJiZhLmNvbXBvbmVudFdpbGxVcGRhdGUoYixhLl9fcyxtKSxudWxsIT1hLmNvbXBvbmVudERpZFVwZGF0ZSYmYS5fX2gucHVzaChmdW5jdGlvbigpe2EuY29tcG9uZW50RGlkVXBkYXRlKHkscCxkKX0pfWlmKGEuY29udGV4dD1tLGEucHJvcHM9YixhLl9fUD1uLEE9bC5fX3IsUD0wLFwicHJvdG90eXBlXCJpbiAkJiYkLnByb3RvdHlwZS5yZW5kZXIpe2ZvcihhLnN0YXRlPWEuX19zLGEuX19kPSExLEEmJkEodSkscz1hLnJlbmRlcihhLnByb3BzLGEuc3RhdGUsYS5jb250ZXh0KSxDPTA7QzxhLl9zYi5sZW5ndGg7QysrKWEuX19oLnB1c2goYS5fc2JbQ10pO2EuX3NiPVtdfWVsc2UgZG97YS5fX2Q9ITEsQSYmQSh1KSxzPWEucmVuZGVyKGEucHJvcHMsYS5zdGF0ZSxhLmNvbnRleHQpLGEuc3RhdGU9YS5fX3N9d2hpbGUoYS5fX2QmJisrUDwyNSk7YS5zdGF0ZT1hLl9fcyxudWxsIT1hLmdldENoaWxkQ29udGV4dCYmKHQ9aChoKHt9LHQpLGEuZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoZD1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLFQ9bnVsbCE9cyYmcy50eXBlPT09XyYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLEgobixBcnJheS5pc0FycmF5KFQpP1Q6W1RdLHUsaSx0LHIsbyxmLGUsYyksYS5iYXNlPXUuX19lLHUuX19oPW51bGwsYS5fX2gubGVuZ3RoJiZmLnB1c2goYSksayYmKGEuX19FPWEuX189bnVsbCksYS5fX2U9ITF9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TyhpLl9fZSx1LGksdCxyLG8sZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9bykmJih1Ll9fZT1lLHUuX19oPSEhYyxvW28uaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiBOKG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBPKGwsdSxpLHQscixvLGYsZSl7dmFyIHMsYSxoLHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYocj0hMCksbnVsbCE9bylmb3IoO188by5sZW5ndGg7XysrKWlmKChzPW9bX10pJiZcInNldEF0dHJpYnV0ZVwiaW4gcz09ISFkJiYoZD9zLmxvY2FsTmFtZT09PWQ6Mz09PXMubm9kZVR5cGUpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGU9ITF9aWYobnVsbD09PWQpeT09PXB8fGUmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8YykuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFlKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsoaHx8YSkmJihoJiYoYSYmaC5fX2h0bWw9PWEuX19odG1sfHxoLl9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9aWYoayhsLHAseSxyLGUpLGgpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sSChsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJkEoaSwwKSxlKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmdihvW19dKTtlfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV98fFwib3B0aW9uXCI9PT1kJiZfIT09eS52YWx1ZSkmJmcobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJmcobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIFMobix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gcShuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxTKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbCxuLl9fYz12b2lkIDB9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJnEodFtyXSx1LGl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fHYobi5fX2UpLG4uX189bi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIEIobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRCh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10sTShpLHU9KCFyJiZ0fHxpKS5fX2s9eShfLG51bGwsW3VdKSxvfHxjLGMsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQsciksTihmLHUpfWZ1bmN0aW9uIEUobixsKXtEKG4sbCxFKX1mdW5jdGlvbiBGKGwsdSxpKXt2YXIgdCxyLG8sZj1oKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHAobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitlKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShmdW5jdGlvbihuKXtuLl9fZT0hMCxUKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1zLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSxpKXtmb3IodmFyIHQscixvO2w9bC5fXzspaWYoKHQ9bC5fX2MpJiYhdC5fXyl0cnl7aWYoKHI9dC5jb25zdHJ1Y3RvcikmJm51bGwhPXIuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodC5zZXRTdGF0ZShyLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksbz10Ll9fZCksbnVsbCE9dC5jb21wb25lbnREaWRDYXRjaCYmKHQuY29tcG9uZW50RGlkQ2F0Y2gobixpfHx7fSksbz10Ll9fZCksbylyZXR1cm4gdC5fX0U9dH1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSx0PSExLHgucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWgoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihoKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZoKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9zYi5wdXNoKGwpLFQodGhpcykpfSx4LnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksVCh0aGlzKSl9LHgucHJvdG90eXBlLnJlbmRlcj1fLHI9W10sZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCwkLl9fcj0wLGU9MDtleHBvcnR7eCBhcyBDb21wb25lbnQsXyBhcyBGcmFnbWVudCxGIGFzIGNsb25lRWxlbWVudCxHIGFzIGNyZWF0ZUNvbnRleHQseSBhcyBjcmVhdGVFbGVtZW50LGQgYXMgY3JlYXRlUmVmLHkgYXMgaCxFIGFzIGh5ZHJhdGUsaSBhcyBpc1ZhbGlkRWxlbWVudCxsIGFzIG9wdGlvbnMsRCBhcyByZW5kZXIsaiBhcyB0b0NoaWxkQXJyYXl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQscix1LGksbz0wLGY9W10sYz1bXSxlPW4uX19iLGE9bi5fX3Isdj1uLmRpZmZlZCxsPW4uX19jLG09bi51bm1vdW50O2Z1bmN0aW9uIGQodCx1KXtuLl9faCYmbi5fX2gocix0LG98fHUpLG89MDt2YXIgaT1yLl9fSHx8KHIuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7X19WOmN9KSxpLl9fW3RdfWZ1bmN0aW9uIHAobil7cmV0dXJuIG89MSx5KEIsbil9ZnVuY3Rpb24geShuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkIodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXtyLnU9ITA7dmFyIGY9ci5zaG91bGRDb21wb25lbnRVcGRhdGU7ci5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFmfHxmLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighZnx8Zi5jYWxsKHRoaXMsbix0LHIpKX19cmV0dXJuIG8uX19OfHxvLl9ffWZ1bmN0aW9uIGgodSxpKXt2YXIgbz1kKHQrKywzKTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX0guX19oLnB1c2gobykpfWZ1bmN0aW9uIHModSxpKXt2YXIgbz1kKHQrKyw0KTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX2gucHVzaChvKSl9ZnVuY3Rpb24gXyhuKXtyZXR1cm4gbz01LEYoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIEEobix0LHIpe289NixzKGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj8obih0KCkpLGZ1bmN0aW9uKCl7cmV0dXJuIG4obnVsbCl9KTpuPyhuLmN1cnJlbnQ9dCgpLGZ1bmN0aW9uKCl7cmV0dXJuIG4uY3VycmVudD1udWxsfSk6dm9pZCAwfSxudWxsPT1yP3I6ci5jb25jYXQobikpfWZ1bmN0aW9uIEYobixyKXt2YXIgdT1kKHQrKyw3KTtyZXR1cm4geih1Ll9fSCxyKT8odS5fX1Y9bigpLHUuaT1yLHUuX19oPW4sdS5fX1YpOnUuX199ZnVuY3Rpb24gVChuLHQpe3JldHVybiBvPTgsRihmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBxKG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1kKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24geCh0LHIpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHI/cih0KTp0KX1mdW5jdGlvbiBQKG4pe3ZhciB1PWQodCsrLDEwKSxpPXAoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIFYoKXt2YXIgbj1kKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gYigpe2Zvcih2YXIgdDt0PWYuc2hpZnQoKTspaWYodC5fX1AmJnQuX19IKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChrKSx0Ll9fSC5fX2guZm9yRWFjaCh3KSx0Ll9fSC5fX2g9W119Y2F0Y2gocil7dC5fX0guX19oPVtdLG4uX19lKHIsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sbi5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uX19WPWMsbi5fX049bi5pPXZvaWQgMH0pKTooaS5fX2guZm9yRWFjaChrKSxpLl9faC5mb3JFYWNoKHcpLGkuX19oPVtdKSksdT1yfSxuLmRpZmZlZD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiYoby5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2gobykmJmk9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8aikoYikpLG8uX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLl9fViE9PWMmJihuLl9fPW4uX19WKSxuLmk9dm9pZCAwLG4uX19WPWN9KSksdT1yPW51bGx9LG4uX19jPWZ1bmN0aW9uKHQscil7ci5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGspLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8dyhuKX0pfWNhdGNoKHUpe3Iuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHI9W10sbi5fX2UodSx0Ll9fdil9fSksbCYmbCh0LHIpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7bSYmbSh0KTt2YXIgcix1PXQuX19jO3UmJnUuX19IJiYodS5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ayhuKX1jYXRjaChuKXtyPW59fSksdS5fX0g9dm9pZCAwLHImJm4uX19lKHIsdS5fX3YpKX07dmFyIGc9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGoobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxnJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24gayhuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiB3KG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEIobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7VCBhcyB1c2VDYWxsYmFjayxxIGFzIHVzZUNvbnRleHQseCBhcyB1c2VEZWJ1Z1ZhbHVlLGggYXMgdXNlRWZmZWN0LFAgYXMgdXNlRXJyb3JCb3VuZGFyeSxWIGFzIHVzZUlkLEEgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxzIGFzIHVzZUxheW91dEVmZmVjdCxGIGFzIHVzZU1lbW8seSBhcyB1c2VSZWR1Y2VyLF8gYXMgdXNlUmVmLHAgYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCAnLi9hcHAtcmF0aW5nLnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZ1Byb3BzIHtcbiAgICBzdGFyczogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFJhdGluZyhwcm9wczogQXBwUmF0aW5nUHJvcHMpIHtcbiAgICBjb25zdCB7IHN0YXJzLCByYXRpbmdDb3VudCB9ID0gcHJvcHM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGFycygpIHtcbiAgICAgICAgY29uc3Qgc3RhckVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJFbHMucHVzaChcbiAgICAgICAgICAgICAgICA8QXBwUmF0aW5nU3RhclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycyA+PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGFycyA8IGkgJiYgc3RhcnMgPiBpIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hhbGYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhckVscztcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLXJhdGluZ1wiIHN0eWxlPXtyYXRpbmdTdHlsZX0+XG4gICAgICAgICAgICB7Y3JlYXRlU3RhcnMoKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3VtdWxvcy1yYXRpbmctY291bnRcIj4oe3Byb3BzLnJhdGluZ0NvdW50fSk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmludGVyZmFjZSBBcHBSYXRpbmdTdGFyUHJvcHMge1xuICAgIHN0YXRlOiAnb24nIHwgJ2hhbGYnIHwgJ29mZic7XG59XG5cbmZ1bmN0aW9uIEFwcFJhdGluZ1N0YXIocHJvcHM6IEFwcFJhdGluZ1N0YXJQcm9wcykge1xuICAgIGxldCBzdGFyRWw7XG5cbiAgICBpZiAocHJvcHMuc3RhdGUgPT09ICdvbicpIHtcbiAgICAgICAgc3RhckVsID0gPHNwYW4+JiM5NzMzOzwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwcm9wcy5zdGF0ZSA9PT0gJ2hhbGYnKSB7XG4gICAgICAgIHN0YXJFbCA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+JiM5NzM0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyXCI+JiM5NzMzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJFbCA9IDxzcGFuPiYjOTczNDs8L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwia3VtdWxvcy1yYXRpbmctc3RhclwiPntzdGFyRWx9PC9kaXY+O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IERpbWVuc2lvbnMsIFBvaW50IH0gZnJvbSAnLi4vY29yZSc7XG5cbmludGVyZmFjZSBRdWFkcmF0aWNDdXJ2ZVBvaW50cyB7XG4gICAgcDE6IFBvaW50O1xuICAgIHAyOiBQb2ludDtcbiAgICBwMzogUG9pbnQ7XG59XG5cbmludGVyZmFjZSBTdmdQb2ludGVyUHJvcHMge1xuICAgIGFyZWE6IERpbWVuc2lvbnM7XG4gICAgcXVhZEN1cnZlUG9pbnRzOiBRdWFkcmF0aWNDdXJ2ZVBvaW50cztcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBQSV9IQUxGID0gTWF0aC5QSSAvIDI7XG5jb25zdCBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgPSA1MDtcbmNvbnN0IFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUID0gMTUwO1xuXG5mdW5jdGlvbiBjYWxjUG9pbnRlckhlYWRDdXJ2ZUNvb3Jkc0Zyb21DdHJsQW5kVGFyZ2V0KFxuICAgIGN0cmxQb2ludDogUG9pbnQsXG4gICAgdGFyZ2V0OiBQb2ludFxuKTogUXVhZHJhdGljQ3VydmVQb2ludHMge1xuICAgIGNvbnN0IHBvaW50ZXJEaXJSYWRzID1cbiAgICAgICAgTWF0aC5hdGFuMihjdHJsUG9pbnQueCAtIGN0cmxQb2ludC54LCB0YXJnZXQueSAtIHRhcmdldC55KSArIFBJX0hBTEY7XG5cbiAgICBjb25zdCBkaXJWZWM6IFBvaW50ID0ge1xuICAgICAgICB4OiBNYXRoLmNvcyhwb2ludGVyRGlyUmFkcyksXG4gICAgICAgIHk6IC1NYXRoLnNpbihwb2ludGVyRGlyUmFkcylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVDdHJsUG9pbnQ6IFBvaW50ID0ge1xuICAgICAgICB4OiBkaXJWZWMueCAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNULFxuICAgICAgICB5OiBkaXJWZWMueSAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IHBvaW50ZXJPZmZzZXQ6IFBvaW50ID0ge1xuICAgICAgICB4OiAtY3VydmVDdHJsUG9pbnQueCAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCxcbiAgICAgICAgeTogLWRpclZlYy55ICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnZlU3RhcnQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVFbmQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcDE6IGN1cnZlU3RhcnQsXG4gICAgICAgIHAyOiBjdXJ2ZUN0cmxQb2ludCxcbiAgICAgICAgcDM6IGN1cnZlRW5kXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN2Z1BvaW50ZXIoeyBhcmVhLCBxdWFkQ3VydmVQb2ludHMsIGNvbG9yIH06IFN2Z1BvaW50ZXJQcm9wcykge1xuICAgIGNvbnN0IHsgcDEsIHAyLCBwMyB9ID0gcXVhZEN1cnZlUG9pbnRzO1xuICAgIGNvbnN0IGxpbmVQYXRoID0gYE0gJHtwMS54fSAke3AxLnl9IFEgJHtwMi54fSAke3AyLnl9ICR7cDMueH0gJHtwMy55fWA7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHAxOiBoMSxcbiAgICAgICAgcDI6IGgyLFxuICAgICAgICBwMzogaDNcbiAgICB9ID0gY2FsY1BvaW50ZXJIZWFkQ3VydmVDb29yZHNGcm9tQ3RybEFuZFRhcmdldChwMiwgcDMpO1xuICAgIGNvbnN0IGhlYWRQYXRoID0gYE0gJHtwMy54ICsgaDEueH0gJHtwMy55ICsgaDEueX0gUSAke3AzLnggKyBoMi54fSAke3AzLnkgK1xuICAgICAgICBoMi55fSAke3AzLnggKyBoMy54fSAke3AzLnkgKyBoMy55fWA7XG5cbiAgICBjb25zdCBzdHJva2VTdHlsZSA9IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHZpZXdCb3g9e2AwIDAgJHthcmVhLndpZHRofSAke2FyZWEuaGVpZ2h0fWB9XG4gICAgICAgICAgICB3aWR0aD17YCR7YXJlYS53aWR0aH1weGB9XG4gICAgICAgICAgICBoZWlnaHQ9e2Ake2FyZWEuaGVpZ2h0fXB4YH1cbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17c3Ryb2tlU3R5bGV9IGQ9e2xpbmVQYXRofSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXtzdHJva2VTdHlsZX0gZD17aGVhZFBhdGh9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBQcm9wc09iamVjdCwgU2VydmljZSwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBhdXRoZWRGZXRjaCwgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBzdWJzY3JpYmVkOiBCb29sZWFuO1xuICAgIG1ldGE/OiBQcm9wc09iamVjdCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFNwZWMge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgbWV0YT86IFByb3BzT2JqZWN0IHwgbnVsbDtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHNob3dJblBvcnRhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IEh0dHBNZXRob2QsXG4gICAgICAgIHV1aWRzOiBzdHJpbmdbXVxuICAgICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29udGV4dC51cmxGb3JTZXJ2aWNlKFxuICAgICAgICAgICAgICAgIFNlcnZpY2UuUFVTSFxuICAgICAgICAgICAgKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVscy9zdWJzY3JpcHRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoKHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BPU1QnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gdGhlIGNoYW5uZWxzIGdpdmVuIGJ5IHVuaXF1ZSBJRFxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ0RFTEVURScsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbnMgY2hhbm5lbCBzdWJzY3JpcHRpb25zIHRvIHRob3NlIGdpdmVuIGJ5IHVuaXF1ZSBJRC5cbiAgICAgKlxuICAgICAqIEFueSBvdGhlciBzdWJzY3JpcHRpb25zIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBzZXRTdWJzY3JpcHRpb25zKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BVVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBleGlzdGluZyBpbnN0YWxsYXRpb24ncyBjaGFubmVsIHN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBjbGVhclN1YnNjcmlwdGlvbnMoKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJzY3JpcHRpb25zKFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0cyB0aGUgY2hhbm5lbHMgYXZhaWxhYmxlIHRvIHRoaXMgaW5zdGFsbGF0aW9uIGFsb25nIHdpdGggc3Vic2NyaXB0aW9uIHN0YXR1c1xuICAgICAqL1xuICAgIGxpc3RDaGFubmVscygpOiBQcm9taXNlPENoYW5uZWxbXT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb250ZXh0LnVybEZvclNlcnZpY2UoXG4gICAgICAgICAgICAgICAgU2VydmljZS5QVVNIXG4gICAgICAgICAgICApfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzYDtcbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbFtdPih0aGlzLmNvbnRleHQsIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwdXNoIGNoYW5uZWwgYW5kIG9wdGlvbmFsbHkgc3Vic2NyaWJlcyB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24uXG4gICAgICpcbiAgICAgKiBOYW1lIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgaWYgc2hvd0luUG9ydGFsIGlzIHRydWUuXG4gICAgICovXG4gICAgY3JlYXRlQ2hhbm5lbChjaGFubmVsU3BlYzogQ2hhbm5lbFNwZWMpOiBQcm9taXNlPENoYW5uZWw+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsICYmXG4gICAgICAgICAgICAoIWNoYW5uZWxTcGVjLm5hbWUgfHwgIWNoYW5uZWxTcGVjLm5hbWUubGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICdOYW1lIGlzIHJlcXVpcmVkIGZvciBjaGFubmVsIGNyZWF0aW9uIHdoZW4gc2hvd0luUG9ydGFsIGlzIHRydWUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbnRleHQudXJsRm9yU2VydmljZShcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLlBVU0hcbiAgICAgICAgICAgICl9L3YxL2NoYW5uZWxzYDtcblxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkOiBjaGFubmVsU3BlYy51dWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGNoYW5uZWxTcGVjLm5hbWUsXG4gICAgICAgICAgICAgICAgc2hvd0luUG9ydGFsOiBCb29sZWFuKGNoYW5uZWxTcGVjLnNob3dJblBvcnRhbCksXG4gICAgICAgICAgICAgICAgbWV0YTogY2hhbm5lbFNwZWMubWV0YSxcbiAgICAgICAgICAgICAgICBpbnN0YWxsSWQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGNoYW5uZWxTcGVjLnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIChwYXJhbXMgYXMgYW55KS5pbnN0YWxsSWQgPSBpbnN0YWxsSWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoSnNvbjxDaGFubmVsPih0aGlzLmNvbnRleHQsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUGxhdGZvcm1Db25maWcsXG4gICAgU2VydmljZSxcbiAgICBnZXRJbnN0YWxsSWRcbn0gZnJvbSAnLic7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IGF1dGhlZEZldGNoSnNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnZXRDYWNoZUtleXMgPSAoa2V5OiBzdHJpbmcpID0+ICh7XG4gICAgQ09ORklHX0NBQ0hFX0tFWTogYCR7a2V5fUNvbmZpZ2AsXG4gICAgQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVEOiBgJHtrZXl9Q29uZmlnVXBkYXRlZGBcbn0pO1xuXG5jb25zdCBNQVhfQ0FDSEVfQUdFX01TID0gMSAqIDYwICogNjAgKiAxMDAwO1xuXG5lbnVtIENvbmZpZ0NhY2hlVHlwZSB7XG4gICAgUExBVEZPUk0gPSAncGxhdGZvcm0nLFxuICAgIERETCA9ICdkZGwnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWc8VENvbmZpZ1R5cGU+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhY2hlS2V5OiBzdHJpbmcsXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFRDb25maWdUeXBlPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKGNhY2hlS2V5KTtcbiAgICBsZXQgY29uZmlnID0gYXdhaXQgZ2V0PFRDb25maWdUeXBlPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSk7XG5cbiAgICBjb25zdCBsYXN0TG9hZFRpbWUgPVxuICAgICAgICAoYXdhaXQgZ2V0PG51bWJlcj4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVlfVVBEQVRFRCkpID8/IDA7XG4gICAgbGV0IHVwZGF0ZWRSZW1vdGVDb25maWcgPSBmYWxzZTtcblxuICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdExvYWRUaW1lID4gTUFYX0NBQ0hFX0FHRV9NUykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0NvbmZpZyBuZXZlciBzeW5jZWQvc3RhbGUsIHN5bmNpbmcgbm93Li4uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbmZpZyA9IGF3YWl0IGF1dGhlZEZldGNoSnNvbjxUQ29uZmlnVHlwZT4oY3R4LCB1cmwpO1xuICAgICAgICAgICAgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgICAgIC8vIE5vb3AgKGZhbGxiYWNrIHRvIGxvY2FsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZWRSZW1vdGVDb25maWcpIHtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZLCBjb25maWcpO1xuICAgICAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVlfVVBEQVRFRCwgRGF0ZS5ub3coKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGF0Zm9ybUNvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UGxhdGZvcm1Db25maWc+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoYXdhaXQgbG9hZENvbmZpZzxQbGF0Zm9ybUNvbmZpZz4oXG4gICAgICAgICAgICBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS92MS93ZWIvY29uZmlnYCxcbiAgICAgICAgICAgIENvbmZpZ0NhY2hlVHlwZS5QTEFURk9STSxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICApKSA/PyB7fVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGRsQ29uZmlnKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHdlYkluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRDb25maWc8RGRsUHJvbXB0Q29uZmlnW10+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoXG4gICAgICAgICAgICAgICAgU2VydmljZS5ERExcbiAgICAgICAgICAgICl9L3YxL2Jhbm5lcnM/d2ViSW5zdGFsbElkPSR7d2ViSW5zdGFsbElkfWAsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuRERMLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBsb2FkRGRsQ29uZmlnOiBmYWlsZWQgdG8gbG9hZCBEZWZlcnJlZCBEZWVwTGluayBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICApO1xuICAgICAgICAvLyB1bmRlZmluZWQgcmV0dXJuIC8gbm8gY29uZmlnXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGRsQmFubmVyQ29uZmlnRnJvbUNhY2hlKFxuICAgIGJhbm5lclV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKENvbmZpZ0NhY2hlVHlwZS5EREwpO1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBhd2FpdCBnZXQ8RGRsUHJvbXB0Q29uZmlnW10+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncyA9IGNvbmZpZ3MuZmlsdGVyKGMgPT4gYy51dWlkICE9PSBiYW5uZXJVdWlkKTtcblxuICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlncyk7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi9jaGFubmVscyc7XG5cbmNvbnN0IFNES19UWVBFID0gMTA0O1xuLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBvcHRpbW92ZSBTREsgbm90IGluY2x1ZGluZyB2ZXJzaW9uIGluIE9wdGltb2JpbGUgY29uZmlnXG5jb25zdCBERUZBVUxUX1NES19WRVJTSU9OID0gJzIuMC4xNyc7XG5cbmV4cG9ydCB0eXBlIEluc3RhbGxJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZztcblxudHlwZSBKc29uaXNoID1cbiAgICB8IHN0cmluZ1xuICAgIHwgbnVtYmVyXG4gICAgfCBib29sZWFuXG4gICAgfCBudWxsXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfVxuICAgIHwgeyB0b0pTT046ICgpID0+IGFueSB9XG4gICAgfCBKc29uaXNoW11cbiAgICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUHJvcHNPYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfTtcblxudHlwZSBOZXN0ZWRQaWNrPFQsIEsxIGV4dGVuZHMga2V5b2YgVCwgSzIgZXh0ZW5kcyBrZXlvZiBUW0sxXT4gPSB7XG4gICAgW1AxIGluIEsxXToge1xuICAgICAgICBbUDIgaW4gSzJdOiBUW0sxXVtQMl07XG4gICAgfTtcbn07XG5cbi8vb25seSBzeXN0ZW0gZXZlbnRzXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICAgIE1FU1NBR0VfREVMSVZFUkVEID0gJ2subWVzc2FnZS5kZWxpdmVyZWQnLFxuICAgIE1FU1NBR0VfT1BFTkVEID0gJ2subWVzc2FnZS5vcGVuZWQnLFxuICAgIFBVU0hfUkVHSVNURVJFRCA9ICdrLnB1c2guZGV2aWNlUmVnaXN0ZXJlZCcsXG4gICAgSU5TVEFMTF9UUkFDS0VEID0gJ2suc3RhdHMuaW5zdGFsbFRyYWNrZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGVkJyxcbiAgICBVU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRpb25DbGVhcmVkJ1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRUeXBlTmFtZSB7XG4gICAgQkVMTCA9ICdiZWxsJyxcbiAgICBBTEVSVCA9ICdhbGVydCcsXG4gICAgQkFOTkVSID0gJ2Jhbm5lcicsXG4gICAgRERMX0JBTk5FUiA9ICdkZGxfYmFubmVyJ1xufVxuXG4vLyBOb3RlIGR1cGxpY2F0ZSAnaW4nIHZzICdJTicgZHVlIHRvIG1pc2FsaWdubWVudCBpbiBzZXJ2ZXIgY29uZmlnIGFuZCBwdWJsaXNoZWQgZG9jcyBmb3IgbWFudWFsIGNvbmZpZ1xuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3IgPSAnaW4nIHwgJ0lOJyB8ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nO1xuZXhwb3J0IHR5cGUgRmlsdGVyVmFsdWUgPSBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIHwgc3RyaW5nW107XG5leHBvcnQgdHlwZSBQcm9wRmlsdGVyID0gW3N0cmluZywgRmlsdGVyT3BlcmF0b3IsIEZpbHRlclZhbHVlXTtcblxuaW50ZXJmYWNlIFByb21wdFRyaWdnZXIge1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgYWZ0ZXJTZWNvbmRzPzogbnVtYmVyO1xuICAgIGZpbHRlcnM/OiBQcm9wRmlsdGVyW107XG59XG5cbmludGVyZmFjZSBQcm9tcHRPdmVybGF5Q29uZmlnIHtcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGxhYmVsczoge1xuICAgICAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgICAgIGJvZHk6IHN0cmluZztcbiAgICB9O1xuICAgIGxpbmtzPzogeyBsYWJlbDogc3RyaW5nOyB1cmw6IHN0cmluZyB9W107XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHNoYWRlOiBzdHJpbmc7XG4gICAgICAgIHN0cmlwOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICB9O1xufVxuXG50eXBlIFByb21wdFNpbGVudE92ZXJsYXlDb25maWcgPSBOZXN0ZWRQaWNrPFxuICAgIFByb21wdE92ZXJsYXlDb25maWcsXG4gICAgJ2xhYmVscycsXG4gICAgJ2JvZHknXG4+ICZcbiAgICBOZXN0ZWRQaWNrPFByb21wdE92ZXJsYXlDb25maWcsICdjb2xvcnMnLCAndGV4dCc+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWcge1xuICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZyB7XG4gICAgYmc6IHN0cmluZztcbiAgICBmZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25CZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25GZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb25maWcge1xuICAgIGxhYmVsczogQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZztcbiAgICBjb2xvcnM6IENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZyB7XG4gICAgcHJlc2VudGVkVXVpZHM6IHN0cmluZ1tdIHwgJ2FsbCc7XG4gICAgY2hlY2tlZFV1aWRzOiBzdHJpbmdbXSB8ICdub25lJyB8ICdhbGwnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZyc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbiAgICBkaWFsb2dDb25maWc6IENoYW5uZWxEaWFsb2dDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFN1YkFjdGlvbiB7XG4gICAgdHlwZTogJ3N1YnNjcmliZVRvQ2hhbm5lbCc7XG4gICAgY2hhbm5lbFV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVWlBY3Rpb25UeXBlIHtcbiAgICBERUNMSU5FID0gJ2RlY2xpbmUnLFxuICAgIFJFTUlORCA9ICdyZW1pbmQnLFxuICAgIERETF9PUEVOX1NUT1JFID0gJ29wZW5TdG9yZScsXG4gICAgRERMX09QRU5fREVFUExJTksgPSAnb3BlbkRlZXBsaW5rJ1xufVxuXG5pbnRlcmZhY2UgRGVjbGluZVByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRFQ0xJTkU7XG59XG5cbmludGVyZmFjZSBSZW1pbmRQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5SRU1JTkQ7XG4gICAgZGVsYXk6IFByb21wdFJlbWluZGVyRGVsYXlDb25maWc7XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdEFjdGlvbiA9XG4gICAgfCBDaGFubmVsU3ViQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb247XG5cbmV4cG9ydCBlbnVtIFJlbWluZGVyVGltZVVuaXQge1xuICAgIEhPVVJTID0gJ2hvdXJzJyxcbiAgICBEQVlTID0gJ2RheXMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZyB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB0aW1lVW5pdDogUmVtaW5kZXJUaW1lVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHVpQWN0aW9uczoge1xuICAgICAgICBkZWNsaW5lOiBEZWNsaW5lUHJvbXB0QWN0aW9uIHwgUmVtaW5kUHJvbXB0QWN0aW9uO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tDb25maWcge1xuICAgIGNvbG9yczoge1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBlbnVtIFByb21wdFBvc2l0aW9uIHtcbiAgICBUT1BfTEVGVCA9ICd0b3AtbGVmdCcsXG4gICAgVE9QX0NFTlRFUiA9ICd0b3AtY2VudGVyJyxcbiAgICBUT1BfUklHSFQgPSAndG9wLXJpZ2h0JyxcbiAgICBDRU5URVJfTEVGVCA9ICdjZW50ZXItbGVmdCcsXG4gICAgQ0VOVEVSID0gJ2NlbnRlcicsXG4gICAgQ0VOVEVSX1JJR0hUID0gJ2NlbnRlci1yaWdodCcsXG4gICAgQk9UVE9NX0xFRlQgPSAnYm90dG9tLWxlZnQnLFxuICAgIEJPVFRPTV9DRU5URVIgPSAnYm90dG9tLWNlbnRlcicsXG4gICAgQk9UVE9NX1JJR0hUID0gJ2JvdHRvbS1yaWdodCcsXG4gICAgVE9QID0gJ3RvcCcsXG4gICAgQk9UVE9NID0gJ2JvdHRvbSdcbn1cblxuaW50ZXJmYWNlIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZTtcbiAgICB0cmlnZ2VyOiBQcm9tcHRUcmlnZ2VyO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbiAgICBvdmVybGF5PzogUHJvbXB0T3ZlcmxheUNvbmZpZztcbiAgICBzaWxlbnRPdmVybGF5PzogUHJvbXB0U2lsZW50T3ZlcmxheUNvbmZpZztcbiAgICBhY3Rpb25zPzogUHJvbXB0QWN0aW9uW107XG59XG5cbmludGVyZmFjZSBXaXRoSW1hZ2VVcmwge1xuICAgIGltYWdlVXJsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVG9vbHRpcENvbmZpZyB7XG4gICAgdG9vbHRpcDoge1xuICAgICAgICBzdWJzY3JpYmU6IHN0cmluZztcbiAgICB9O1xufVxuXG50eXBlIERpYWxvZ0xhYmVsQ29uZmlnID0ge1xuICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbjogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFQgZXh0ZW5kcyBQcm9tcHRUeXBlTmFtZT4gPSBSZWNvcmQ8XG4gICAgVCxcbiAgICBEaWFsb2dMYWJlbENvbmZpZ1xuPjtcblxudHlwZSBEaWFsb2dDb2xvckNvbmZpZyA9IHtcbiAgICBmZzogc3RyaW5nO1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbkZnOiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uRmc6IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb25CZzogc3RyaW5nO1xufTtcblxudHlwZSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFQgZXh0ZW5kcyBQcm9tcHRUeXBlTmFtZT4gPSBSZWNvcmQ8XG4gICAgVCxcbiAgICBEaWFsb2dDb2xvckNvbmZpZ1xuPjtcblxuaW50ZXJmYWNlIFRvYXN0TWVzc2FnZSB7XG4gICAgdGhhbmtzRm9yU3Vic2NyaWJpbmc6IHN0cmluZztcbn1cblxuLy8gQkVMTFxuXG50eXBlIEJlbGxMYWJlbENvbmZpZyA9IFRvYXN0TWVzc2FnZSAmIFRvb2x0aXBDb25maWc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbENvbG9yQ29uZmlnIHtcbiAgICBiZWxsOiB7XG4gICAgICAgIGZnOiBzdHJpbmc7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWxsUHJvbXB0Q29uZmlnIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkVMTDtcbiAgICBsYWJlbHM/OiBCZWxsTGFiZWxDb25maWc7XG4gICAgY29sb3JzPzogQmVsbENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5CT1RUT01fTEVGVCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcbn1cblxuLy8gQUxFUlRcblxudHlwZSBBbGVydExhYmVsQ29uZmlnID0gTmFtZWREaWFsb2dMYWJlbENvbmZpZzxQcm9tcHRUeXBlTmFtZS5BTEVSVD4gJlxuICAgIFRvYXN0TWVzc2FnZTtcbnR5cGUgQWxlcnRDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQUxFUlQ7XG4gICAgbGFiZWxzOiBBbGVydExhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogQWxlcnRDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uVE9QIHwgUHJvbXB0UG9zaXRpb24uQ0VOVEVSO1xuICAgIGJhY2tncm91bmRNYXNrPzogQmFja2dyb3VuZE1hc2tDb25maWc7XG59XG5cbi8vIEJBTk5FUlxuXG50eXBlIEJhbm5lckxhYmVsQ29uZmlnID0gTmFtZWREaWFsb2dMYWJlbENvbmZpZzxQcm9tcHRUeXBlTmFtZS5CQU5ORVI+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEJhbm5lckNvbG9yQ29uZmlnID0gTmFtZWREaWFsb2dDb2xvckNvbmZpZzxQcm9tcHRUeXBlTmFtZS5CQU5ORVI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhbm5lclByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJBTk5FUjtcbiAgICBsYWJlbHM6IEJhbm5lckxhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogQmFubmVyQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTTtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBEREwgQkFOTkVSXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0aW5nIHtcbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICByYXRpbmdDb3VudDogbnVtYmVyO1xufVxuXG50eXBlIERkbERpYWxvZ0NvbG9yQ29uZmlnID0gRGlhbG9nQ29sb3JDb25maWcgJiB7IHJhdGluZ0ZnOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgT3BlblN0b3JlVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xudHlwZSBPcGVuRGVlcExpbmtVaUFjdGlvbiA9IHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks7XG4gICAgZGVlcExpbmtVcmw6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERkbFVpQWN0aW9ucyA9IFByb21wdFVpQWN0aW9ucyAmIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgYWNjZXB0OiBPcGVuU3RvcmVVaUFjdGlvbiB8IE9wZW5EZWVwTGlua1VpQWN0aW9uO1xuICAgIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERkbEJhbm5lclByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBEZGxVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkRETF9CQU5ORVI7XG4gICAgbGFiZWxzOiBEaWFsb2dMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IERkbERpYWxvZ0NvbG9yQ29uZmlnO1xuICAgIGFwcFJhdGluZz86IEFwcFJhdGluZztcbn1cblxuZXhwb3J0IHR5cGUgUHVzaFByb21wdENvbmZpZyA9XG4gICAgfCBCZWxsUHJvbXB0Q29uZmlnXG4gICAgfCBBbGVydFByb21wdENvbmZpZ1xuICAgIHwgQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBEZGxQcm9tcHRDb25maWcgPSBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG5cbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZyA9IFB1c2hQcm9tcHRDb25maWcgfCBEZGxQcm9tcHRDb25maWc7XG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWdzPFQgZXh0ZW5kcyBQcm9tcHRDb25maWc+ID0gUmVjb3JkPHN0cmluZywgVD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhdGZvcm1Db25maWcge1xuICAgIHB1YmxpY0tleTogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgcHJvbXB0cz86IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz47XG4gICAgc2FmYXJpUHVzaElkPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gU0RLRmVhdHVyZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5leHBvcnQgZW51bSBTZXJ2aWNlIHtcbiAgICBQVVNIID0gJ3B1c2gnLFxuICAgIERETCA9ICdkZGwnLFxuICAgIEVWRU5UUyA9ICdldmVudHMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG4gICAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gICAgdmFwaWRQdWJsaWNLZXk6IHN0cmluZztcbiAgICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgICBwdXNoUHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPiB8ICdhdXRvJztcbiAgICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICAgIGZlYXR1cmVzPzogU0RLRmVhdHVyZVtdO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRSZW1pbmRlciA9XG4gICAgfCB7XG4gICAgICAgICAgZGVjbGluZWRPbjogbnVtYmVyO1xuICAgICAgfVxuICAgIHwgJ3N1cHByZXNzZWQnO1xuXG50eXBlIFNka0V2ZW50VHlwZSA9ICdldmVudFRyYWNrZWQnO1xuZXhwb3J0IHR5cGUgU2RrRXZlbnQ8VCA9IGFueT4gPSB7IHR5cGU6IFNka0V2ZW50VHlwZTsgZGF0YTogVCB9O1xudHlwZSBTZGtFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IFNka0V2ZW50KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcmVhZG9ubHkgYXBpS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2VjcmV0S2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdmFwaWRQdWJsaWNLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBhdXRoSGVhZGVyOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2VydmljZVdvcmtlclBhdGg6IHN0cmluZztcbiAgICByZWFkb25seSBwdXNoUHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPiB8ICdhdXRvJztcbiAgICByZWFkb25seSBhdXRvUmVzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgZmVhdHVyZXM6IFNES0ZlYXR1cmVbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogU2RrRXZlbnRIYW5kbGVyW10gfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybE1hcDogeyBba2V5IGluIFNlcnZpY2VdOiBzdHJpbmcgfTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG4gICAgICAgIHRoaXMuc2VjcmV0S2V5ID0gY29uZmlnLnNlY3JldEtleTtcbiAgICAgICAgdGhpcy52YXBpZFB1YmxpY0tleSA9IGNvbmZpZy52YXBpZFB1YmxpY0tleTtcbiAgICAgICAgdGhpcy5hdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt0aGlzLmFwaUtleX06JHt0aGlzLnNlY3JldEtleX1gKX1gO1xuICAgICAgICB0aGlzLnNlcnZpY2VXb3JrZXJQYXRoID0gY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoID8/ICcvd29ya2VyLmpzJztcbiAgICAgICAgdGhpcy5wdXNoUHJvbXB0cyA9IGNvbmZpZy5wdXNoUHJvbXB0cyA/PyAnYXV0byc7XG4gICAgICAgIHRoaXMuYXV0b1Jlc3Vic2NyaWJlID0gY29uZmlnLmF1dG9SZXN1YnNjcmliZSA/PyB0cnVlO1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gY29uZmlnLmZlYXR1cmVzID8/IFtTREtGZWF0dXJlLlBVU0hdO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcblxuICAgICAgICB0aGlzLnVybE1hcCA9IHtcbiAgICAgICAgICAgIFtTZXJ2aWNlLlBVU0hdOiBgaHR0cHM6Ly9wdXNoLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gLFxuICAgICAgICAgICAgW1NlcnZpY2UuRVZFTlRTXTogYGh0dHBzOi8vZXZlbnRzLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gLFxuICAgICAgICAgICAgW1NlcnZpY2UuRERMXTogYGh0dHBzOi8vbGlua3MtJHtjb25maWcucmVnaW9ufS5rdW11bG9zLmNvbWBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmVhdHVyZShmZWF0dXJlOiBTREtGZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICAgIH1cblxuICAgIHVybEZvclNlcnZpY2Uoc2VydmljZTogU2VydmljZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybE1hcFtzZXJ2aWNlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyAnQ29uZmlnIG11c3QgYmUgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoY29uZmlnLmZlYXR1cmVzKSAmJiBjb25maWcuZmVhdHVyZXMubGVuZ3RoXG4gICAgICAgICAgICA/IGNvbmZpZy5mZWF0dXJlc1xuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWZlYXR1cmVzIHx8IGZlYXR1cmVzLmluY2x1ZGVzKFNES0ZlYXR1cmUuUFVTSCkpIHtcbiAgICAgICAgcmV0dXJuIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UHVzaENvbmZpZ1ZhbGlkKGNvbmZpZzogYW55KSB7XG4gICAgY29uc3QgcmVxdWlyZWRTdHJpbmdQcm9wcyA9IFtcbiAgICAgICAgJ3JlZ2lvbicsXG4gICAgICAgICdhcGlLZXknLFxuICAgICAgICAnc2VjcmV0S2V5JyxcbiAgICAgICAgJ3ZhcGlkUHVibGljS2V5J1xuICAgIF07XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEluc3RhbGxJZCh1dWlkdjQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsSWQ7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnN0YWxsSWQoaW5zdGFsbElkOiBJbnN0YWxsSWQpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGluc3RhbGxJZFByb21pc2UgPSBzZXQoJ2luc3RhbGxJZCcsIGluc3RhbGxJZCk7XG5cbiAgICByZXR1cm4gaW5zdGFsbElkUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJZCgpOiBQcm9taXNlPFVzZXJJZD4ge1xuICAgIHJldHVybiBnZXQ8VXNlcklkIHwgdW5kZWZpbmVkPigndXNlcklkJykudGhlbihcbiAgICAgICAgdXNlcklkID0+IHVzZXJJZCA/PyBnZXRJbnN0YWxsSWQoKVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NvY2lhdGVVc2VyKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBpZDogVXNlcklkLFxuICAgIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgc2V0KCd1c2VySWQnLCBpZCk7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGF0dHJpYnV0ZXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVEVELCBwcm9wcykudGhlbihfID0+IHt9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyVXNlckFzc29jaWF0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVELCB7XG4gICAgICAgIG9sZFVzZXJJZGVudGlmaWVyOiBjdXJyZW50VXNlcklkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVsKCd1c2VySWQnKTtcbn1cblxuZXhwb3J0IHR5cGUgS3VtdWxvc0V2ZW50ID0ge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZGF0YT86IFByb3BzT2JqZWN0O1xufTtcblxuZXhwb3J0IHR5cGUgRXZlbnRQYXlsb2FkID0gS3VtdWxvc0V2ZW50W107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0V2ZW50KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgcHJvcGVydGllcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFBheWxvYWQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB1dWlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjdHguYnJvYWRjYXN0KCdldmVudFRyYWNrZWQnLCBldmVudHMpO1xuXG4gICAgaWYgKCFpc1N5c3RlbUV2ZW50KHR5cGUpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShcbiAgICAgICAgU2VydmljZS5FVkVOVFNcbiAgICApfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzU3lzdGVtRXZlbnQodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICg8YW55Pk9iamVjdCkudmFsdWVzKEV2ZW50VHlwZSkuaW5jbHVkZXModHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0luc3RhbGxEZXRhaWxzKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBvcHRpb25hbFNka1ZlcnNpb24/OiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNka1ZlcnNpb24gPSBvcHRpb25hbFNka1ZlcnNpb24gfHwgREVGQVVMVF9TREtfVkVSU0lPTjtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgIGJ1bmRsZTogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCcsIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgICAgICB0YXJnZXQ6IDIgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgfSxcbiAgICAgICAgc2RrOiB7XG4gICAgICAgICAgICBpZDogU0RLX1RZUEUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBzZGtWZXJzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICB9LFxuICAgICAgICBvczoge1xuICAgICAgICAgICAgLy8gRGV0ZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIHNlcnZlci1zaWRlIGZyb20gVUEgZGF0YVxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIG9uIGJlc3QtZWZmb3J0IGJhc2lzIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBuYW1lOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgdHo6XG4gICAgICAgICAgICAgICAgdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgID8gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgaXNTaW11bGF0b3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNoUGFydHMgPSBbXG4gICAgICAgIHNka1ZlcnNpb24sXG4gICAgICAgIHBheWxvYWQuYXBwLmJ1bmRsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UudHosXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLmxvY2FsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubmFtZVxuICAgIF07XG4gICAgY29uc3QgaGFzaCA9IGN5cmI1MyhoYXNoUGFydHMuam9pbignfCcpKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdkZXRhaWxzSGFzaCcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0hhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLklOU1RBTExfVFJBQ0tFRCwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0KCdkZXRhaWxzSGFzaCcsIGhhc2gpKVxuICAgICAgICAudGhlbigoKSA9PiB2b2lkIDApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxMaXN0SXRlbSB7XG4gICAgY2hhbm5lbDogQ2hhbm5lbDtcbiAgICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgIGFsbENoYW5uZWxzOiBDaGFubmVsW10sXG4gICAgc2VsZWN0aW9uQ29uZmlnOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWdcbikge1xuICAgIHJldHVybiBhbGxDaGFubmVsc1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgYyA9PlxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICApXG4gICAgICAgIC5tYXA8Q2hhbm5lbExpc3RJdGVtPihjID0+ICh7XG4gICAgICAgICAgICBjaGFubmVsOiB7IC4uLmMgfSxcbiAgICAgICAgICAgIGNoZWNrZWQ6XG4gICAgICAgICAgICAgICAgYy5zdWJzY3JpYmVkLnZhbHVlT2YoKSB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUsIHBhcnNlUXVlcnlTdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBTYWZhcmlQdXNoTWFuYWdlciBmcm9tICcuL3NhZmFyaSc7XG5pbXBvcnQgVzNjUHVzaE1hbmFnZXIgZnJvbSAnLi93M2MnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvblN0YXRlID0gJ3N1YnNjcmliZWQnIHwgJ3Vuc3Vic2NyaWJlZCcgfCAnYmxvY2tlZCc7XG5cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgVzNDID0gMyxcbiAgICBTQUZBUkkgPSA0XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBQVVNIID0gMVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPjtcbiAgICBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShjdHg6IENvbnRleHQpOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGltYWdlVXJsPzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaFBheWxvYWQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICAnay5tZXNzYWdlJzoge1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSDtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgdXJsOiBzdHJpbmcgfCBudWxsO1xuICAgIGltYWdlOiBzdHJpbmcgfCBudWxsO1xuICAgIGljb246IHN0cmluZyB8IG51bGw7XG59XG5cbmxldCBtYW5hZ2VyOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHVzaE9wc01hbmFnZXIoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPiB7XG4gICAgaWYgKG1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciA9PT0gJ3NhZmFyaScpIHtcbiAgICAgICAgbWFuYWdlciA9IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpLnRoZW4oXG4gICAgICAgICAgICBjZmcgPT4gbmV3IFNhZmFyaVB1c2hNYW5hZ2VyKGNmZylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYW5hZ2VyID0gUHJvbWlzZS5yZXNvbHZlKG5ldyBXM2NQdXNoTWFuYWdlcigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrT3BlbkZyb21RdWVyeShjdHg6IENvbnRleHQpIHtcbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyICE9PSAnc2FmYXJpJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xuXG4gICAgaWYgKCFwYXJhbXM/Llsna25pZCddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLk1FU1NBR0VfT1BFTkVELCB7XG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0gsXG4gICAgICAgIGlkOiBOdW1iZXIocGFyYW1zWydrbmlkJ10pXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGNvbnN0IHsgJ2subWVzc2FnZSc6IF8sIC4uLnVzZXJEYXRhIH0gPSBwYXlsb2FkLmRhdGE7XG5cbiAgICBjb25zdCBwdXNoOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiA9IHtcbiAgICAgICAgaWQ6IHBheWxvYWQuZGF0YVsnay5tZXNzYWdlJ10uZGF0YS5pZCxcbiAgICAgICAgdGl0bGU6IHBheWxvYWQudGl0bGUsXG4gICAgICAgIG1lc3NhZ2U6IHBheWxvYWQubXNnLFxuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgICAgdXJsOiBwYXlsb2FkLnVybCA/PyB1bmRlZmluZWQsXG4gICAgICAgIGljb25Vcmw6IHBheWxvYWQuaWNvbiA/PyB1bmRlZmluZWQsXG4gICAgICAgIGltYWdlVXJsOiBwYXlsb2FkLmltYWdlID8/IHVuZGVmaW5lZFxuICAgIH07XG4gICAgcmV0dXJuIHB1c2g7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmVudFR5cGUsIFBsYXRmb3JtQ29uZmlnLCBTZXJ2aWNlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgY3lyYjUzLCBkZWZlciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uL3B1c2gnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZnVuY3Rpb24gaGFzaFRva2VuKGN0eDogQ29udGV4dCwgdG9rZW46IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3Rva2VufWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYWZhcmlQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNmZzogUGxhdGZvcm1Db25maWc7XG4gICAgY29uc3RydWN0b3IoY2ZnOiBQbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICB0aGlzLmNmZyA9IGNmZztcbiAgICB9XG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBjb25zdCBzdmNVcmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS9zYWZhcmkvJHtcbiAgICAgICAgICAgIGN0eC5hcGlLZXlcbiAgICAgICAgfWA7XG5cbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcjxOb3RpZmljYXRpb25QZXJtaXNzaW9uPigpO1xuXG4gICAgICAgIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICBzdmNVcmwsXG4gICAgICAgICAgICB0aGlzLmNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBwZXJtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJtKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHBlcm0ucGVybWlzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8ICFwZXJtLmRldmljZVRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlNBRkFSSSxcbiAgICAgICAgICAgIHRva2VuOiBwZXJtLmRldmljZVRva2VuLFxuICAgICAgICAgICAgYnVuZGxlSWQ6IGNmZy5zYWZhcmlQdXNoSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoVG9rZW5IYXNoJywgdG9rZW5IYXNoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8IHBlcm0/LnBlcm1pc3Npb24gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuID8/ICcnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCAmJiBwZXJtLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSB8fCAhdGhpcy5jZmcuc2FmYXJpUHVzaElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8IHBlcm0ucGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnIHx8ICFwZXJtLmRldmljZVRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IHBlcm1pc3Npb24gbm90IGdyYW50ZWQgb3Igbm8gdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbik7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2gpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmlwdGlvbjogYWxyZWFkeSBoYXZlIGEgdG9rZW4gaGFzaCBmb3Igc2FtZSB0b2tlbiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBQdXNoT3BzTWFuYWdlciwgUHVzaFN1YnNjcmlwdGlvblN0YXRlLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGJhc2U2NFVybEVuY29kZSwgY3lyYjUzLCBnZXRCcm93c2VyTmFtZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vc3RvcmFnZSc7XG5cbmNvbnN0IEJMVVJfRVZFTlRfVElNRU9VVF9NSUxMSVMgPSAxMDAwO1xuXG5mdW5jdGlvbiBoYXNTYW1lS2V5KHZhcGlkS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4aXN0aW5nU3ViS2V5ID0gc3Vic2NyaXB0aW9uLm9wdGlvbnMuYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG5cbiAgICBpZiAoIWV4aXN0aW5nU3ViS2V5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJLZXkgPSBiYXNlNjRVcmxFbmNvZGUoZXhpc3RpbmdTdWJLZXkpO1xuXG4gICAgcmV0dXJuIHN1YktleSA9PT0gdmFwaWRLZXk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcod29ya2VyUGF0aDogc3RyaW5nKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3QgcGF0aFdpdGhPcmlnaW4gPSBuZXcgVVJMKHdvcmtlclBhdGgsIGxvY2F0aW9uLm9yaWdpbikuaHJlZjsgXG5cbiAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24ocGF0aFdpdGhPcmlnaW4pO1xuXG4gICAgaWYgKCF3b3JrZXJSZWcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29ya2VyUmVnO1xufVxuXG5mdW5jdGlvbiBoYXNoU3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCwgc3ViOiBQdXNoU3Vic2NyaXB0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7c3ViLmVuZHBvaW50fWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXM2NQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICBhc3luYyByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnUHVzaCBub3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoY3R4LnNlcnZpY2VXb3JrZXJQYXRoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViICYmICFoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcbiAgICAgICAgY29uc3QgZXhwaXJ5ID0gc3ViLmV4cGlyYXRpb25UaW1lO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZW5kcG9pbnRIYXNoICYmXG4gICAgICAgICAgICAoIWV4aXN0aW5nRXhwaXJ5IHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlczQyxcbiAgICAgICAgICAgIHRva2VuOiBzdWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgZXhwaXJ5KTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxpbXBvcnQoJy4nKS5QdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZyhjdHguc2VydmljZVdvcmtlclBhdGgpO1xuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBzdWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFjdHguYXV0b1Jlc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IG5vdCBlbmFibGVkLCBhYm9ydGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICBgQXV0by1yZXN1YnNjcmliZTogcGVybWlzc2lvbiBub3QgZ3JhbnRlZCwgYWJvcnRpbmc6ICR7cGVybX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoY3R4LnNlcnZpY2VXb3JrZXJQYXRoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgbGV0IGV4aXN0aW5nU3ViSGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViKSB7XG4gICAgICAgICAgICBleGlzdGluZ1N1Ykhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgZXhpc3RpbmdTdWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGV4aXN0aW5nU3ViSGFzaCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdTdWIgJiZcbiAgICAgICAgICAgIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikgJiZcbiAgICAgICAgICAgIChleGlzdGluZ0V4cGlyeSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaWJlOiBhbHJlYWR5IGhhdmUgYSBub24tZXhwaXJlZCBlbmRwb2ludCBoYXNoIGZvciBzYW1lIHN1YiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBhdHRlbXB0aW5nIHJlc3Vic2NyaXB0aW9uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgYnJvd3Nlck5hbWUgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgICAgIGlmICgnY2hyb21lJyAhPT0gYnJvd3Nlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmx1ckV2ZW50RmlyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tGb3JCbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChibHVyRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhbmNlbEJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG4gICAgICAgICAgICAgICAgYmx1ckV2ZW50RmlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSwgQkxVUl9FVkVOVF9USU1FT1VUX01JTExJUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgeyBvbkRPTVJlYWR5IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdEZyYW1lQ29udGFpbmVyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb3RGcmFtZSB7XG4gICAgcHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHB1YmxpYyByZWFkb25seSBjb250YWluZXJzOiBSb290RnJhbWVDb250YWluZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gJ2t1bXVsb3MtdWktcm9vdCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuXG4gICAgICAgIG9uRE9NUmVhZHkoKCkgPT4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250YWluZXIobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lci5lbGVtZW50LmlkID0gYGt1bXVsb3MtdWktcm9vdC0ke25hbWV9YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lci5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IDIwMTYsIEpha2UgQXJjaGliYWxkXG5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuLy8gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICByZWFkb25seSBfZGJwOiBQcm9taXNlPElEQkRhdGFiYXNlPjtcblxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9ICdrZXl2YWwtc3RvcmUnLCByZWFkb25seSBzdG9yZU5hbWUgPSAna2V5dmFsJykge1xuICAgICAgICB0aGlzLl9kYnAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcGVucmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCAxKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgICAgIG9wZW5yZXEub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShvcGVucmVxLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgc2V0dXA6IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgc3RvcmVcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wZW5yZXEucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfd2l0aElEQlN0b3JlKFxuICAgICAgICB0eXBlOiBJREJUcmFuc2FjdGlvbk1vZGUsXG4gICAgICAgIGNhbGxiYWNrOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlKSA9PiB2b2lkXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYnAudGhlbihcbiAgICAgICAgICAgIGRiID0+XG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IHRyYW5zYWN0aW9uLm9uZXJyb3IgPSAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IHN0b3JlOiBTdG9yZTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFN0b3JlKCkge1xuICAgIGlmICghc3RvcmUpIHN0b3JlID0gbmV3IFN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFR5cGU+KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTxUeXBlPiB7XG4gICAgbGV0IHJlcTogSURCUmVxdWVzdDtcbiAgICByZXR1cm4gc3RvcmVcbiAgICAgICAgLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xuICAgICAgICAgICAgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHJlcS5yZXN1bHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgdmFsdWU6IGFueSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwoXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gc3RvcmUuX3dpdGhJREJTdG9yZSgncmVhZHdyaXRlJywgc3RvcmUgPT4ge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5cyhzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTxJREJWYWxpZEtleVtdPiB7XG4gICAgY29uc3Qga2V5czogSURCVmFsaWRLZXlbXSA9IFtdO1xuXG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIC8vIFRoaXMgd291bGQgYmUgc3RvcmUuZ2V0QWxsS2V5cygpLCBidXQgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEVkZ2Ugb3IgU2FmYXJpLlxuICAgICAgICAgICAgLy8gQW5kIG9wZW5LZXlDdXJzb3IgaXNuJ3Qgc3VwcG9ydGVkIGJ5IFNhZmFyaS5cbiAgICAgICAgICAgIChzdG9yZS5vcGVuS2V5Q3Vyc29yIHx8IHN0b3JlLm9wZW5DdXJzb3IpLmNhbGwoXG4gICAgICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICAgICkub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlc3VsdCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGtleXMucHVzaCh0aGlzLnJlc3VsdC5rZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0LmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiBrZXlzKTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRSZW1pbmRlclxufSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQge1xuICAgIFN0b3JlLFxuICAgIGRlbCBhcyBpZGJEZWwsXG4gICAgZ2V0IGFzIGlkYkdldCxcbiAgICBzZXQgYXMgaWRiU2V0XG59IGZyb20gJy4vaWRiLWtleXZhbCc7XG5cbmltcG9ydCB7IFB1c2hQYXlsb2FkIH0gZnJvbSAnLi4vcHVzaCc7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCdrdW11bG9zJywgJ2RlZmF1bHQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUPihrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGlkYkdldChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldDxUIGV4dGVuZHMgYW55PihrZXk6IElEQlZhbGlkS2V5LCB2YWx1ZTogVCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJTZXQoa2V5LCB2YWx1ZSwgc3RvcmUpLnRoZW4oKCkgPT4gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKGtleTogSURCVmFsaWRLZXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gaWRiRGVsKGtleSwgc3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdENvbmZpZyhjb25maWc6IENvbmZpZ3VyYXRpb24pOiBQcm9taXNlPENvbmZpZ3VyYXRpb24+IHtcbiAgICByZXR1cm4gc2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnLCB7XG4gICAgICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbixcbiAgICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgICBzZWNyZXRLZXk6IGNvbmZpZy5zZWNyZXRLZXksXG4gICAgICAgIHZhcGlkUHVibGljS2V5OiBjb25maWcudmFwaWRQdWJsaWNLZXksXG4gICAgICAgIHNlcnZpY2VXb3JrZXJQYXRoOiBjb25maWcuc2VydmljZVdvcmtlclBhdGgsXG4gICAgICAgIGF1dG9SZXN1YnNjcmliZTogY29uZmlnLmF1dG9SZXN1YnNjcmliZSxcbiAgICAgICAgcHVzaFByb21wdHM6IGNvbmZpZy5wdXNoUHJvbXB0c1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdERETENvbmZpZyhcbiAgICBjb25maWc6IERkbFByb21wdENvbmZpZ1tdXG4pOiBQcm9taXNlPERkbFByb21wdENvbmZpZ1tdPiB7XG4gICAgcmV0dXJuIHNldDxEZGxQcm9tcHRDb25maWdbXT4oJ2RkbGNvbmZpZycsIGNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nLFxuICAgIHJlbWluZGVyOiBQcm9tcHRSZW1pbmRlclxuKSB7XG4gICAgcmV0dXJuIHNldChgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWAsIHJlbWluZGVyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBhd2FpdCBnZXQ8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZygpOiBQcm9taXNlPENvbnRleHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gZ2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnKS50aGVuKGNvbmZpZyA9PlxuICAgICAgICBjb25maWcgPyBuZXcgQ29udGV4dChjb25maWcpIDogdW5kZWZpbmVkXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RPcGVuZWRQdXNoUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogUHJvbWlzZTxQdXNoUGF5bG9hZD4ge1xuICAgIHJldHVybiBzZXQoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQoKTogUHJvbWlzZTxcbiAgICBQdXNoUGF5bG9hZCB8IHVuZGVmaW5lZFxuPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldDxQdXNoUGF5bG9hZD4oJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgYXdhaXQgZGVsKCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIHJldHVybiBwYXlsb2FkID8/IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFNES0ZlYXR1cmUgfSBmcm9tICcuL2luZGV4JztcblxudHlwZSBGZWF0dXJlRGVwZW5kZW5jeSA9IHN0cmluZyB8IG9iamVjdCB8IElEQkZhY3RvcnkgfCBQcm9taXNlQ29uc3RydWN0b3IgfCBOb3RpZmljYXRpb24gfCBQdXNoTWFuYWdlciB8IFNlcnZpY2VXb3JrZXJDb250YWluZXIgfCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb247XG5cbmNvbnN0IENPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVMgOiBGZWF0dXJlRGVwZW5kZW5jeVtdID0gW3R5cGVvZiBQcm9taXNlLCB0eXBlb2YgZmV0Y2gsIHR5cGVvZiBpbmRleGVkREJdO1xuXG5jb25zdCBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0sgOiB7W2tleSBpbiBTREtGZWF0dXJlXTogKCkgPT4gYm9vbGVhbn0gPSB7XG4gICAgJ3B1c2gnOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JQdXNoLFxuICAgICdkZGwnOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGxcbn07XG5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKDFlNykudG9TdHJpbmcoKSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKFxuICAgICAgICAvWzAxOF0vZyxcbiAgICAgICAgYyA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE51bWJlcihjKSBeXG4gICAgICAgICAgICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICZcbiAgICAgICAgICAgICAgICAgICAgKDE1ID4+IChOdW1iZXIoYykgLyA0KSkpXG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJyb3dzZXJzID0gWydlZGdlJywgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaSddO1xuXG4gICAgZm9yIChsZXQgYiBvZiBicm93c2Vycykge1xuICAgICAgICBpZiAodWEuaW5kZXhPZihiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZChzZGtGZWF0dXJlcz86IFNES0ZlYXR1cmVbXSkge1xuICAgIHNka0ZlYXR1cmVzID0gc2RrRmVhdHVyZXMgPz8gW107XG4gICAgaWYgKCFzZGtGZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgc2RrRmVhdHVyZXMucHVzaChTREtGZWF0dXJlLlBVU0gpO1xuICAgIH1cblxuICAgIHJldHVybiBzZGtGZWF0dXJlcy5maWx0ZXIoZiA9PiBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0tbZl0oKSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCgpIHtcbiAgICBjb25zdCBjb3JlRGVwZW5kZW5jaWVzID0gWy4uLkNPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVNdO1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKCdzYWZhcmknID09PSBicm93c2VyKSB7XG4gICAgICAgIGNvcmVEZXBlbmRlbmNpZXMucHVzaCh0eXBlb2Ygd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKFxuICAgICAgICAgICAgLi4uW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBOb3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBQdXNoTWFuYWdlclxuICAgICAgICAgICAgXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGwoKSB7XG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llczogRmVhdHVyZURlcGVuZGVuY3lbXSkge1xuICAgIHJldHVybiBjb3JlRGVwZW5kZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKHN1cHBvcnRlZDogYm9vbGVhbiwgZGVwZW5kZW5jeTogRmVhdHVyZURlcGVuZGVuY3kpID0+IHN1cHBvcnRlZCAmJiBkZXBlbmRlbmN5ICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgdHJ1ZVxuICAgICk7XG59XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL2ltdWxcbmNvbnN0IGltdWwgPVxuICAgIE1hdGguaW11bCB8fFxuICAgIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgYiB8PSAwOyAvLyBlbnN1cmUgdGhhdCBvcEIgaXMgYW4gaW50ZWdlci4gb3BBIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb2VyY2VkLlxuICAgICAgICAvLyBmbG9hdGluZyBwb2ludHMgZ2l2ZSB1cyA1MyBiaXRzIG9mIHByZWNpc2lvbiB0byB3b3JrIHdpdGggcGx1cyAxIHNpZ24gYml0XG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaGFuZGxlZCBmb3Igb3VyIGNvbnZpZW5lbmNlOlxuICAgICAgICAvLyAxLiAweDAwM2ZmZmZmIC8qb3BBICYgMHgwMDBmZmZmZiovICogMHg3ZmZmZmZmZiAvKm9wQiovID0gMHgxZmZmZmY3ZmMwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgdmFyIHJlc3VsdCA9IChhICYgMHgwMDNmZmZmZikgKiBiO1xuICAgICAgICAvLyAyLiBXZSBjYW4gcmVtb3ZlIGFuIGludGVnZXIgY29lcnNpb24gZnJvbSB0aGUgc3RhdGVtZW50IGFib3ZlIGJlY2F1c2U6XG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgKyAweGZmYzAwMDAwID0gMHgxZmZmZmZmZjgwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZmZmODAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgaWYgKGEgJiAweGZmYzAwMDAwIC8qIT09IDAqLykgcmVzdWx0ICs9ICgoYSAmIDB4ZmZjMDAwMDApICogYikgfCAwO1xuICAgICAgICByZXR1cm4gcmVzdWx0IHwgMDtcbiAgICB9O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODBcbmV4cG9ydCBmdW5jdGlvbiBjeXJiNTMoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKTogbnVtYmVyIHtcbiAgICBsZXQgaDEgPSAweGRlYWRiZWVmIF4gc2VlZCxcbiAgICAgICAgaDIgPSAweDQxYzZjZTU3IF4gc2VlZDtcbiAgICBmb3IgKGxldCBpID0gMCwgY2g7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaDEgPSBpbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IGltdWwoaDIgXiBjaCwgMTU5NzMzNDY3Nyk7XG4gICAgfVxuICAgIGgxID1cbiAgICAgICAgaW11bChoMSBeIChoMSA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDIgXiAoaDIgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgaDIgPVxuICAgICAgICBpbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICByZXR1cm4gNDI5NDk2NzI5NiAqICgyMDk3MTUxICYgaDIpICsgKGgxID4+PiAwKTtcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHsgbWV0aG9kOiAnR0VUJyB9XG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXhpc3RpbmdIZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzID8/IHt9O1xuXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogY3R4LmF1dGhIZWFkZXIsXG4gICAgICAgIC4uLmV4aXN0aW5nSGVhZGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhlZEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzQ29kZTogbnVtYmVyLCBzdGF0dXNUZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYGF1dGhlZCBmZXRjaCBmYWlsZWQ6ICR7c3RhdHVzQ29kZX0sICR7c3RhdHVzVGV4dH1gKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaEpzb248VD4oXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9ucz86IFJlcXVlc3RJbml0XG4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIG9wdGlvbnMpLnRoZW4ociA9PiB7XG4gICAgICAgIGlmICghci5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEF1dGhlZEZldGNoRXJyb3Ioci5zdGF0dXMsIHIuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gci5qc29uKCk7XG4gICAgfSk7XG59XG5cbi8vIEJhc2VkIG9uIHRoZSBhbHBoYWJldHMgaW4gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQ2NDggVGFibGVzIDEgJiAyXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VXJsRW5jb2RlKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGludHMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGNvbnN0IGJhc2U2NEVuY29kZWQgPSBidG9hKFxuICAgICAgICBpbnRzLnJlZHVjZSgoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksICcnKVxuICAgICk7XG4gICAgY29uc3QgdXJsVmFyaWFudCA9IGJhc2U2NEVuY29kZWRcbiAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAnLScpXG4gICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgICAgICAucmVwbGFjZSgvPS9nLCAnJyk7XG5cbiAgICByZXR1cm4gdXJsVmFyaWFudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcih3b3JrZXJQYXRoOiBzdHJpbmcpe1xuICAgIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlcnZpY2VXb3JrZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUGF0aCA9IG5ldyBVUkwod29ya2VyUGF0aCwgbG9jYXRpb24ub3JpZ2luKS5ocmVmOyBcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcih1cGRhdGVkUGF0aCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyPFQ+KCkge1xuICAgIGNvbnN0IGRlZmVycmVkID0ge1xuICAgICAgICByZXNvbHZlOiAobnVsbCBhcyB1bmtub3duKSBhcyAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKG51bGwgYXMgdW5rbm93bikgYXMgKHJlYXNvbj86IGFueSkgPT4gdm9pZCxcbiAgICAgICAgcHJvbWlzZTogKG51bGwgYXMgdW5rbm93bikgYXMgUHJvbWlzZTxUPlxuICAgIH07XG5cbiAgICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhcbiAgICBxczogc3RyaW5nID0gbG9jYXRpb24uc2VhcmNoLFxuICAgIGV4Y2x1ZGVkUXVlcnlLZXlzOiBzdHJpbmdbXSA9IFtdXG4pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcXVlcnkgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocXMubGVuZ3RoID4gMCkge1xuICAgICAgICBxdWVyeSA9IHFzXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgLm1hcCh2YXJzID0+IHZhcnMuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgIC5tYXAocGFpcnMgPT4gcGFpcnMubWFwKGRlY29kZVVSSUNvbXBvbmVudCkpXG4gICAgICAgICAgICAuZmlsdGVyKHBhaXJzID0+IGV4Y2x1ZGVkUXVlcnlLZXlzLmluZGV4T2YocGFpcnNbMF0pID09PSAtMSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHEsIHBhaXIpID0+ICh7IC4uLnEsIFtwYWlyWzBdXTogcGFpclsxXSB9KSwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRE9NUmVhZHkoZm46ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL2FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxtb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDbGllbnRNZXNzYWdlVHlwZSxcbiAgICBGaW5nZXJwcmludENvbXBvbmVudHMsXG4gICAgSG9zdE1lc3NhZ2UsXG4gICAgSG9zdE1lc3NhZ2VUeXBlXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZWZPYmplY3QsIGNyZWF0ZVJlZiwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuXG5jb25zdCBGUF9DQVBUVVJFX1VSTCA9ICdodHRwczovL3BkLmFwcC5kZWxpdmVyeSc7XG5cbmVudW0gQ2FwdHVyZVN0YXRlIHtcbiAgICBJRExFLFxuICAgIENBUFRVUklOR1xufVxuXG5pbnRlcmZhY2UgRnBDYXB0dXJlUHJvcHMge1xuICAgIG9uQ2FwdHVyZWQ6IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGcENhcHR1cmVTdGF0ZSB7XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnBDYXB0dXJlIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIEZwQ2FwdHVyZVByb3BzLFxuICAgIEZwQ2FwdHVyZVN0YXRlXG4+IHtcbiAgICBwcml2YXRlIGlGcmFtZVJlZjogUmVmT2JqZWN0PEhUTUxJRnJhbWVFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGcENhcHR1cmVQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pRnJhbWVSZWYgPSBjcmVhdGVSZWY8SFRNTElGcmFtZUVsZW1lbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShfOiBGcENhcHR1cmVQcm9wcywgbmV4dFN0YXRlOiBGcENhcHR1cmVTdGF0ZSkge1xuICAgICAgICBjb25zdCB7IGlzUmVhZHksIGNhcHR1cmVTdGF0ZSB9ID0gbmV4dFN0YXRlO1xuICAgICAgICBjb25zdCBwcmV2Q2FwdHVyZVN0YXRlID0gdGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNSZWFkeSAmJlxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuQ0FQVFVSSU5HICYmXG4gICAgICAgICAgICBwcmV2Q2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWVzdEZwKCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYEZwQ2FwdXJlOiByZXF1ZXN0aW5nIGZwIGNhcHR1cmVgKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGUgIT09IENhcHR1cmVTdGF0ZS5JRExFKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGcENhcHR1cmUucmVxdWVzdEZwOiBjYXB0dXJlU3RhdGUgbm90IElETEUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5DQVBUVVJJTkcgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgIGBGcENhcHVyZTogbWVzc2FnZSAke2UuZGF0YS50eXBlfSByZWNlaXZlZCBmcm9tICR7ZS5vcmlnaW59YFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XG5cbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBGUF9DQVBUVVJFX1VSTCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TWVzc2FnZVR5cGUuUkVBRFk6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUmVhZHk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DYXB0dXJlZChtZXNzYWdlLmRhdGEuY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaE1lc3NhZ2UgPSAobWVzc2FnZTogSG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZwQ2FwdXJlOiBkaXNwYXRjaGluZyAke21lc3NhZ2UudHlwZX0gbWVzc2FnZSB0byBjYXB0dXJlIGZyYW1lYFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuaUZyYW1lUmVmLmN1cnJlbnQ/LmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBGUF9DQVBUVVJFX1VSTCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaUZyYW1lUmVmfVxuICAgICAgICAgICAgICAgIHNyYz17RlBfQ0FQVFVSRV9VUkx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU2VydmljZSwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2ggfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRDbGlja1JlcXVlc3QoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGJhbm5lclVpZDogc3RyaW5nLFxuICAgIGZpbmdlcnByaW50OiBGaW5nZXJwcmludENvbXBvbmVudHNcbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShcbiAgICAgICAgU2VydmljZS5ERExcbiAgICApfS92MS9iYW5uZXJzLyR7YmFubmVyVWlkfS90YXBzYDtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgd2ViSW5zdGFsbElkLFxuICAgICAgICAgICAgZmluZ2VycHJpbnRcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsIlxudHlwZSBNZXNzYWdlPFQsIEQgPSBuZXZlcj4gPVxuICAgIHwge1xuICAgICAgICB0eXBlOiBUO1xuICAgIH1cbiAgICB8IHsgdHlwZTogVDsgZGF0YTogRCB9O1xuXG5leHBvcnQgZW51bSBIb3N0TWVzc2FnZVR5cGUge1xuICAgIFJFUVVFU1RfRklOR0VSUFJJTlQgPSAnUkVRVUVTVF9GSU5HRVJQUklOVCcsXG59XG5cbmV4cG9ydCBlbnVtIENsaWVudE1lc3NhZ2VUeXBlIHtcbiAgICBSRUFEWSA9ICdSRUFEWScsXG4gICAgRklOR0VSUFJJTlRfR0VORVJBVEVEID0gJ0ZJTkdFUlBSSU5UX0dFTkVSQVRFRCcsXG59XG5cbmV4cG9ydCB0eXBlIEZpbmdlcnByaW50Q29tcG9uZW50cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmV4cG9ydCB0eXBlIEhvc3RNZXNzYWdlID0gTWVzc2FnZTxIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVD47XG5cbmV4cG9ydCB0eXBlIENsaWVudE1lc3NhZ2UgPVxuICAgIHwgTWVzc2FnZTxDbGllbnRNZXNzYWdlVHlwZS5SRUFEWT5cbiAgICB8IE1lc3NhZ2U8XG4gICAgICAgIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRCxcbiAgICAgICAgeyBjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMgfVxuICAgID47XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBJbnN0YWxsSWQsXG4gICAgUHJvcHNPYmplY3QsXG4gICAgU0RLRmVhdHVyZSxcbiAgICBVc2VySWQsXG4gICAgYXNzZXJ0Q29uZmlnVmFsaWQsXG4gICAgYXNzb2NpYXRlVXNlcixcbiAgICBnZXRJbnN0YWxsSWQsXG4gICAgZ2V0VXNlcklkLFxuICAgIHNldEluc3RhbGxJZCxcbiAgICB0cmFja0V2ZW50LFxuICAgIHRyYWNrSW5zdGFsbERldGFpbHNcbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IFdvcmtlck1lc3NhZ2VUeXBlLCBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlIH0gZnJvbSAnLi93b3JrZXIvbWVzc2FnaW5nJztcbmltcG9ydCB7XG4gICAgZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQsXG4gICAgcGVyc2lzdENvbmZpZyxcbiAgICBzZXRcbn0gZnJvbSAnLi9jb3JlL3N0b3JhZ2UnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyLCB7XG4gICAgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24sXG4gICAgbm90aWZpY2F0aW9uRnJvbVBheWxvYWQsXG4gICAgdHJhY2tPcGVuRnJvbVF1ZXJ5XG59IGZyb20gJy4vY29yZS9wdXNoJztcbmltcG9ydCB7IGlzTW9iaWxlLCByZWdpc3RlclNlcnZpY2VXb3JrZXIgfSBmcm9tICcuL2NvcmUvdXRpbHMnO1xuXG5pbXBvcnQgRGRsTWFuYWdlciBmcm9tICcuL3Byb21wdHMvZGRsL21hbmFnZXInO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlciB9IGZyb20gJy4vcHJvbXB0cyc7XG5pbXBvcnQgUm9vdEZyYW1lIGZyb20gJy4vY29yZS9yb290LWZyYW1lJztcblxuaW50ZXJmYWNlIEt1bXVsb3NDb25maWcgZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgICBvblB1c2hSZWNlaXZlZD86IChwYXlsb2FkOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcbiAgICBvblB1c2hPcGVuZWQ/OiAocGF5bG9hZDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24pID0+IHZvaWQ7XG4gICAgb3JpZ2luYWxWaXNpdG9ySWQ6IEluc3RhbGxJZDtcbiAgICBjdXN0b21lcklkPzogVXNlcklkO1xuICAgIHNka1ZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEt1bXVsb3Mge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBLdW11bG9zQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RGcmFtZTogUm9vdEZyYW1lO1xuXG4gICAgcHJpdmF0ZSBkZGxNYW5hZ2VyPzogRGRsTWFuYWdlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYnVpbGRJbnN0YW5jZShjb25maWc6IEt1bXVsb3NDb25maWcpIHtcbiAgICAgICAgYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnKTtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgS3VtdWxvcy5tYXliZVBlcnNpc3RJbnN0YWxsSWRBbmRVc2VySWQoY29udGV4dCwgY29uZmlnKTtcblxuICAgICAgICBjb25zdCBrdW11bG9zID0gbmV3IEt1bXVsb3MoY29udGV4dCwgY29uZmlnKTtcbiAgICAgICAga3VtdWxvcy5pbml0aWFsaXplKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ga3VtdWxvcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENvbnRleHQsIGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5yb290RnJhbWUgPSBuZXcgUm9vdEZyYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplKCkge1xuICAgICAgICBwZXJzaXN0Q29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQsIHRoaXMuY29uZmlnLnNka1ZlcnNpb24pO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0Lmhhc0ZlYXR1cmUoU0RLRmVhdHVyZS5QVVNIKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUHVzaEZlYXR1cmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLkRETCkpIHtcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXI6IERETCBmZWF0dXJlIHN1cHBvcnQgb25seSBhdmFpbGFibGUgb24gbW9iaWxlIGRldmljZXMuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRkbE1hbmFnZXIgPSBuZXcgRGRsTWFuYWdlcih0aGlzLmNvbnRleHQsIHRoaXMucm9vdEZyYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVB1c2hGZWF0dXJlKCkge1xuICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aCk7XG5cbiAgICAgICAgbmV3IFByb21wdE1hbmFnZXIoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgdGhpcy5yb290RnJhbWVcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1heWJlQWRkTWVzc2FnZUV2ZW50TGlzdGVuZXJUb1NXKCk7XG4gICAgICAgIHRoaXMubWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWF5YmVBZGRNZXNzYWdlRXZlbnRMaXN0ZW5lclRvU1coKSB7XG4gICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIG1heWJlUGVyc2lzdEluc3RhbGxJZEFuZFVzZXJJZChcbiAgICAgICAgY29udGV4dDogQ29udGV4dCxcbiAgICAgICAgY29uZmlnOiBLdW11bG9zQ29uZmlnXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmIChpbnN0YWxsSWQgIT09IGNvbmZpZy5vcmlnaW5hbFZpc2l0b3JJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnN0YWxsSWQoY29uZmlnLm9yaWdpbmFsVmlzaXRvcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5jdXN0b21lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGdldFVzZXJJZCgpLnRoZW4odXNlcklkID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VySWQgIT09IGNvbmZpZy5jdXN0b21lcklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc29jaWF0ZVVzZXIoY29udGV4dCwgY29uZmlnLmN1c3RvbWVySWQhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzb2NpYXRlVXNlcihpZGVudGlmaWVyOiBVc2VySWQsIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYXNzb2NpYXRlVXNlcih0aGlzLmNvbnRleHQsIGlkZW50aWZpZXIsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQodHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNrRXZlbnQodGhpcy5jb250ZXh0LCB0eXBlLCBwcm9wZXJ0aWVzKS50aGVuKF8gPT4gdm9pZCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1nciA9IGF3YWl0IGdldFB1c2hPcHNNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1nclxuICAgICAgICAgICAgLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnZ3JhbnRlZCcgIT09IHBlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1nci5wdXNoUmVnaXN0ZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Xb3JrZXJNZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGUuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZS5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25QdXNoUmVjZWl2ZWQ/LihwdXNoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgYXN5bmMgbWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk7XG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHVzaCA9IG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKHBheWxvYWQpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaE9wZW5lZD8uKHB1c2gpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBCZWxsUHJvbXB0Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMLCBpbnZlcnNlUG9zaXRpb24sIFByb21wdFVpUHJvcHMsIFRvb2x0aXAgfSBmcm9tIFwiLi4vdWlcIjtcblxuZXhwb3J0IGNsYXNzIEJlbGwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbXB0VWlQcm9wczxCZWxsUHJvbXB0Q29uZmlnPiwgbmV2ZXI+IHtcbiAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtcHJvbXB0LSR7dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9IGt1bXVsb3MtYmVsbC1jb250YWluZXIga3VtdWxvcy1iZWxsLWNvbnRhaW5lci0ke3RoaXMucHJvcHMuY29uZmlnLnBvc2l0aW9ufWA7XG4gICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgdG9vbHRpcFBvcyA9IGludmVyc2VQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgY29uc3QgYmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmJnO1xuICAgICAgY29uc3QgZmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmZnO1xuXG4gICAgICBjb25zdCBiZWxsU3R5bGUgPSB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGZnQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iZWxsLWlubmVyIGt1bXVsb3MtdG9vbHRpcC1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2JlbGxTdHlsZSBhcyBhbnl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS44OSAyIDIgMnptNi02di01YzAtMy4wNy0xLjY0LTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjYzIDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17ZmdDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcG9zaXRpb249e3Rvb2x0aXBQb3N9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcubGFiZWxzPy50b29sdGlwPy5zdWJzY3JpYmUgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBEZGxCYW5uZXJQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UG9zaXRpb24sXG4gICAgVWlBY3Rpb25UeXBlXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBSYXRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FwcC1yYXRpbmcnO1xuaW1wb3J0IERlZXBsaW5rQnV0dG9uIGZyb20gJy4vZGVlcGxpbmstYnV0dG9uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhbm5lckljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9LFxuICAgIGNsb3NlSWNvblN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgaGVpZ2h0OiAxMlxuICAgIH1cbn07XG5cbmNvbnN0IENMQVNTRVMgPSBbXG4gICAgJ2t1bXVsb3MtcHJvbXB0JyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29udGFpbmVyJyxcbiAgICAna3VtdWxvcy1iYW5uZXItY29tcGFjdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0JyxcbiAgICAna3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0J1xuXTtcblxuY29uc3QgU0hPV19DT1BZX1RPQVNUX0RFTEFZID0gMTAwMDtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG4gICAgb25Db25maXJtOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25DYW5jZWw6IChjb25maWc6IERkbEJhbm5lclByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBkaW1lbnNpb25zOiAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEZGxCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRGRsQmFubmVyUHJvcHMsXG4gICAge1xuICAgICAgICBzaG93Q29weVRvYXN0OiBib29sZWFuO1xuICAgIH1cbj4ge1xuICAgIHByaXZhdGUgY29udGFpbmVyUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERkbEJhbm5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZiA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc2hvd0NvcHlUb2FzdDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaW1lbnNpb25zKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25maXJtID0gKGFjdGlvblR5cGU6IFVpQWN0aW9uVHlwZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93Q29weVRvYXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVHlwZSA9PT0gVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvcHlUb2FzdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29weVRvYXN0OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICB9LCBTSE9XX0NPUFlfVE9BU1RfREVMQVkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGdldENzc0NsYXNzZXMocHJvbXB0UG9zaXRpb246IFByb21wdFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICAgICAuLi5DTEFTU0VTLFxuICAgICAgICAgICAgYGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7cHJvbXB0UG9zaXRpb259YFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIFtQcm9tcHRQb3NpdGlvbi5UT1AsIFByb21wdFBvc2l0aW9uLkJPVFRPTV0uaW5jbHVkZXMocHJvbXB0UG9zaXRpb24pXG4gICAgICAgICkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGBrdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtJHtwcm9tcHRQb3NpdGlvbn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHsgcG9zaXRpb24sIGxhYmVscywgY29sb3JzLCBpbWFnZVVybCwgYXBwUmF0aW5nIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgYWNjZXB0QWN0aW9uIH0gPSBsYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkZnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgZGVjbGluZUFjdGlvbkZnLFxuICAgICAgICAgICAgcmF0aW5nRmdcbiAgICAgICAgfSA9IGNvbG9ycztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRDc3NDbGFzc2VzKHBvc2l0aW9uKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXG4gICAgICAgICAgICBjb2xvcjogZmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkZWNsaW5lQWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhY3Rpb25TdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogYWNjZXB0QWN0aW9uRmdcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiYW5uZXJJY29uU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5zdHlsZXMuYmFubmVySWNvblN0eWxlLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzPXtjbGFzc2VzfSByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGVjbGluZUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLm9uQ2FuY2VsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJiMxMDAwNjtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJJY29uU3R5bGV9IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItaWNvblwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYm9keVwiPntib2R5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YXBwUmF0aW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBSYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdDb3VudD17YXBwUmF0aW5nLnJhdGluZ0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzPXthcHBSYXRpbmcucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyYXRpbmdGZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8RGVlcGxpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdEFjdGlvbnM9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dDb3B5VG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy10b2FzdFwiPkxpbmsgQ29waWVkPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBEZGxVaUFjdGlvbnMsIFVpQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5pbXBvcnQgY29weSBmcm9tICdjbGlwYm9hcmQtY29weSc7XG5cbmludGVyZmFjZSBEZWVwbGlua0J1dHRvblByb3BzIHtcbiAgICBzdHlsZTogaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBwcm9tcHRBY3Rpb25zOiBEZGxVaUFjdGlvbnM7XG4gICAgb25BY3Rpb246IChhY3Rpb25UeXBlOiBVaUFjdGlvblR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZXBsaW5rQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIERlZXBsaW5rQnV0dG9uUHJvcHMsXG4gICAgbmV2ZXJcbj4ge1xuICAgIHByaXZhdGUgaGFuZGxlQWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB1aUFjdGlvbnM6IHsgYWNjZXB0IH1cbiAgICAgICAgfSA9IHRoaXMucHJvcHMucHJvbXB0QWN0aW9ucztcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICBjb3B5KGFjY2VwdC5kZWVwTGlua1VybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VuYWJsZSB0byBjYXB0dXJlIGRlZXBsaW5rIHVybCBmb3IgZGVmZXJyZWQgYXBwIHBpY2t1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgSGFuZGxlIERlZXBMaW5rIEFjdGlvbjogdW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlICcke2FjY2VwdFsndHlwZSddfSdgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzOiBjc3NDbGFzcywgdGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzcz17Y3NzQ2xhc3N9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVBY3Rpb259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgVWlBY3Rpb25UeXBlLFxuICAgIFNka0V2ZW50XG59IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHtcbiAgICBsb2FkRGRsQ29uZmlnLFxuICAgIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZVxufSBmcm9tICcuLi8uLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciB9IGZyb20gJy4uL3Byb21wdC1yZW1pbmRlcic7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBzZW5kQ2xpY2tSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZnAnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi4vdHJpZ2dlcnMnO1xuXG5leHBvcnQgZW51bSBEZGxNYW5hZ2VyU3RhdGUge1xuICAgIExPQURJTkcgPSAnbG9hZGluZycsXG4gICAgUkVBRFkgPSAncmVhZHknXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERkbE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRkbENvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuICAgIHByaXZhdGUgY29uZmlnPzogUmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPjtcbiAgICBwcml2YXRlIGFjdGl2ZUNvbmZpZ3M/OiBEZGxQcm9tcHRDb25maWdbXSA9IFtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJpZ2dlckZpbHRlcjogUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPERkbFByb21wdENvbmZpZz47XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRGRsTWFuYWdlcjogaW5pdGlhbGlzaW5nJyk7XG5cbiAgICAgICAgdGhpcy5kZGxDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdkZGwnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMudHJpZ2dlckZpbHRlciA9IG5ldyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8RGRsUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIChfOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ29uZmlncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGNvbXBvbmVudHM/OiBGaW5nZXJwcmludENvbXBvbmVudHNcbiAgICApID0+IHtcbiAgICAgICAgaWYgKCEhY29tcG9uZW50cykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZENsaWNrUmVxdWVzdCh0aGlzLmNvbnRleHQsIHByb21wdC51dWlkLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZShwcm9tcHQudXVpZCk7XG5cbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG5cbiAgICAgICAgdGhpcy5wZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb24ocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNhbmNlbGxlZCA9IChwcm9tcHQ6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQpO1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoaWRlUHJvbXB0KHByb21wdDogRGRsUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ29uZmlncyA9IHRoaXMuYWN0aXZlQ29uZmlncz8uZmlsdGVyKFxuICAgICAgICAgICAgYyA9PiBjLnV1aWQgIT09IHByb21wdC51dWlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRGRsTWFuYWdlclN0YXRlLlJFQURZKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbihjb25maWc6IERkbFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb24gPSBjb25maWcudWlBY3Rpb25zLmFjY2VwdDtcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdEFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi51cmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFjY2VwdEFjdGlvbi5kZWVwTGlua1VybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXIucGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uOiBVbnN1cHBvcnRlZCBhY2NlcHQgYWN0aW9uIHR5cGUsIHVuYWJsZSB0byBwZXJmb3JtIHJlZGlyZWN0aW9uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBEZGxNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIERkbE1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IERkbE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5MT0FESU5HOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gYXdhaXQgdGhpcy5sb2FkQ29uZmlnKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERkbE1hbmFnZXJTdGF0ZS5SRUFEWTpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHRoaXMuYWN0aXZlQ29uZmlncz8uc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghcHJvbXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5yZW5kZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKHByb21wdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlciA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdCBhcyBEZGxQcm9tcHRDb25maWd9XG4gICAgICAgICAgICAgICAgY29udGV4dD17dGhpcy5jb250ZXh0fVxuICAgICAgICAgICAgICAgIG9uQmFubmVyQ29uZmlybT17dGhpcy5vbkJhbm5lckNvbmZpcm19XG4gICAgICAgICAgICAgICAgb25CYW5uZXJDYW5jZWxsZWQ9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpIHtcbiAgICAgICAgcmVuZGVyKG51bGwsIHRoaXMuZGRsQ29udGFpbmVyLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlQWN0aXZlQ29uZmlncygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZENvbmZpZ3MgPSBhd2FpdCB0aGlzLnRyaWdnZXJGaWx0ZXIuZmlsdGVyUHJvbXB0cyhcbiAgICAgICAgICAgIHRoaXMuY29uZmlnXG4gICAgICAgICk7XG5cbiAgICAgICAgbWF0Y2hlZENvbmZpZ3MuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbmZpZ3M/LmluZGV4T2YoYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ3MucHVzaChjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlnKCk6IFByb21pc2U8XG4gICAgICAgIFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz4gfCB1bmRlZmluZWRcbiAgICA+IHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IGF3YWl0IGxvYWREZGxDb25maWcodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjb25maWdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlncy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgRGRsUHJvbXB0Q29uZmlnPj4oKGJhZywgYykgPT4ge1xuICAgICAgICAgICAgYmFnW2MudXVpZF0gPSBjO1xuICAgICAgICAgICAgcmV0dXJuIGJhZztcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCwgRnJhZ21lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgRGRsUHJvbXB0Q29uZmlnLCBVaUFjdGlvblR5cGUsIENvbnRleHQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IERkbEJhbm5lciB9IGZyb20gJy4vZGRsLWJhbm5lcic7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7IFByb21wdFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgRnBDYXB0dXJlIGZyb20gJy4uLy4uL2ZwL2ZwLWNhcHR1cmUnO1xuaW1wb3J0IHsgRmluZ2VycHJpbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZnAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWc7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBvbkJhbm5lckNvbmZpcm06IChcbiAgICAgICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWcsXG4gICAgICAgIGZpbmdlcnByaW50Q29tcG9uZW50cz86IEZpbmdlcnByaW50Q29tcG9uZW50c1xuICAgICkgPT4gdm9pZDtcbiAgICBvbkJhbm5lckNhbmNlbGxlZDogKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgVWlTdGF0ZSB7XG4gICAgcmVxdWVzdEZwQ2FwdHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWkgZXh0ZW5kcyBDb21wb25lbnQ8VWlQcm9wcywgVWlTdGF0ZT4ge1xuICAgIHByaXZhdGUgc2l0ZU1hcmdpbj86IG51bWJlcjtcbiAgICBwcml2YXRlIHNpdGVUcmFuc2l0aW9uPzogc3RyaW5nO1xuICAgIHByaXZhdGUgZnBSZWY6IFJlZk9iamVjdDxGcENhcHR1cmU+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFVpUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXF1ZXN0RnBDYXB0dXJlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZnBSZWYgPSBjcmVhdGVSZWY8RnBDYXB0dXJlPigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25EaW1lbnNpb25zID0gKF9iYW5uZXJXaWR0aDogbnVtYmVyLCBiYW5uZXJIZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgbnVsbCk7XG4gICAgICAgIHRoaXMuc2l0ZU1hcmdpbiA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcbiAgICAgICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICAgICAgPyAnbWFyZ2luLXRvcCdcbiAgICAgICAgICAgICAgICAgICAgOiAnbWFyZ2luLWJvdHRvbSdcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zaXRlVHJhbnNpdGlvbiA9IGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgaWYgKGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLkJPVFRPTSkge1xuICAgICAgICAgICAgYmFubmVySGVpZ2h0ICs9IDIwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gYmFubmVySGVpZ2h0ICsgdGhpcy5zaXRlTWFyZ2luO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4zNzVzIGVhc2UgMHMnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW1xuICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgPyAnbWFyZ2luVG9wJ1xuICAgICAgICAgICAgICAgIDogJ21hcmdpbkJvdHRvbSdcbiAgICAgICAgXSA9IGAke29mZnNldH1weGA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDb25maXJtID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvbiA9IGNvbmZpZy51aUFjdGlvbnMuYWNjZXB0O1xuXG4gICAgICAgIHN3aXRjaCAoYWNjZXB0QWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFOlxuICAgICAgICAgICAgICAgIHRoaXMuZnBSZWYuY3VycmVudD8ucmVxdWVzdEZwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VpLm9uQmFubmVyQ29uZmlybTogVW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlLCB1bmFibGUgdG8gY29uZmlybSBiYW5uZXInXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ2FuY2VsbGVkID0gKGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDYW5jZWxsZWQoY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkNhcHR1cmVGcCA9IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJhbm5lckNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcsIGNvbXBvbmVudHMpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHJlc2V0Qm9keVN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc2l0ZVRyYW5zaXRpb24gPz8gJyc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtcbiAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgID8gJ21hcmdpblRvcCdcbiAgICAgICAgICAgICAgICA6ICdtYXJnaW5Cb3R0b20nXG4gICAgICAgIF0gPSB0aGlzLnNpdGVNYXJnaW4gPyBgJHt0aGlzLnNpdGVNYXJnaW59cHhgIDogJyc7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPERkbEJhbm5lclxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMuY29uZmlnfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5vbkJhbm5lckNhbmNlbGxlZH1cbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9ucz17dGhpcy5vbkRpbWVuc2lvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RnBDYXB0dXJlIHJlZj17dGhpcy5mcFJlZn0gb25DYXB0dXJlZD17dGhpcy5vbkNhcHR1cmVGcH0gLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge1xuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbHNEaWFsb2dQcm9wcyB7XG4gICAgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcbiAgICBvbkNvbmZpcm06IChjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsc0RpYWxvZ1Byb3BzLFxuICAgIENoYW5uZWxEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxzRGlhbG9nUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnMpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckRpYWxvZyA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHthY3Rpb24uZGlhbG9nQ29uZmlnLnBvc2l0aW9ufWA7XG5cbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb25maXJtQWN0aW9uIH0gPSBhY3Rpb24uZGlhbG9nQ29uZmlnLmxhYmVscztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5jb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uZmlybUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogY29uZmlybUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpQ29udGV4dD8ucGxhdGZvcm1Db25maWcuaWNvblVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvblwiXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29uZmlybUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJEaWFsb2d9PC9VSUNvbnRleHQuQ29uc3VtZXI+O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBDaGFubmVsTGlzdEl0ZW0gfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0UHJvcHMge1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXTtcbiAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkOiAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbExpc3RTdGF0ZSB7XG4gICAgY2hhbm5lbHM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIENoYW5uZWxMaXN0UHJvcHMsXG4gICAgQ2hhbm5lbExpc3RTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxMaXN0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsczogWy4uLnRoaXMucHJvcHMuY2hhbm5lbExpc3RdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkKHRoaXMuc3RhdGUuY2hhbm5lbHMpO1xuICAgIH1cblxuICAgIG9uQ2hhbm5lbENoZWNrQ2hhbmdlKGNoYW5uZWxVdWlkOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3RhdGUuY2hhbm5lbHMuZmluZChcbiAgICAgICAgICAgIGMgPT4gYy5jaGFubmVsLnV1aWQgPT09IGNoYW5uZWxVdWlkXG4gICAgICAgICk7XG4gICAgICAgIGl0ZW0hLmNoZWNrZWQgPSBjaGVja2VkO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnN0YXRlLmNoYW5uZWxzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNoYW5uZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoYW5uZWwudXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hhbm5lbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGguSlNYLlRhcmdldGVkRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5uZWxDaGVja0NoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbm5lbC51dWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUHJvbXB0VWlQcm9wcyB9IGZyb20gJy4uL3VpJztcbmltcG9ydCB7XG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nU3RhdGUge1xuICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBQcm9tcHRVaVByb3BzPEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnPixcbiAgICBEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb21wdFVpUHJvcHM8QWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc+KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgb25SZXF1ZXN0Q2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWQodGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckFsZXJ0ID0gKHVpQ29udGV4dD86IFVJQ29udGV4dFN0YXRlKSA9PiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHVpQ29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLXByb21wdC0ke3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfSBrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRhaW5lciBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke2NvbmZpZy5wb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgZGVjbGluZUFjdGlvbiwgYWNjZXB0QWN0aW9uIH0gPVxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUXG4gICAgICAgICAgICAgICAgPyBjb25maWcubGFiZWxzLmFsZXJ0XG4gICAgICAgICAgICAgICAgOiBjb25maWcubGFiZWxzLmJhbm5lcjtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25GZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmNvbG9ycy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmNvbG9ycy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVjbGluZUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGFjY2VwdEFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2NvbmZpZy5pbWFnZVVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7Y29uZmlnLmltYWdlVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0taWNvbmB9XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWhlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYm9keWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q9e2dldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0Q2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FjY2VwdEFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VUlDb250ZXh0LkNvbnN1bWVyPnt0aGlzLnJlbmRlckFsZXJ0fTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDaGFubmVsLCBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB9IGZyb20gJy4uL2NvcmUvY2hhbm5lbHMnO1xuaW1wb3J0IHtcbiAgICBDaGFubmVsTGlzdEl0ZW0sXG4gICAgQ2hhbm5lbFN1YkFjdGlvbixcbiAgICBDb250ZXh0LFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFByb21wdEFjdGlvbixcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlncyxcbiAgICBQdXNoUHJvbXB0Q29uZmlnLFxuICAgIFNka0V2ZW50LFxuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IFJvb3RGcmFtZSwgeyBSb290RnJhbWVDb250YWluZXIgfSBmcm9tICcuLi9jb3JlL3Jvb3QtZnJhbWUnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyLCB7XG4gICAgUHVzaE9wc01hbmFnZXIsXG4gICAgUHVzaFN1YnNjcmlwdGlvblN0YXRlXG59IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgS3VtdWxvcyBmcm9tICcuLic7XG5pbXBvcnQgeyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXIgfSBmcm9tICcuL3RyaWdnZXJzJztcbmltcG9ydCB7IFVJQ29udGV4dCB9IGZyb20gJy4vdWktY29udGV4dCc7XG5pbXBvcnQgVWkgZnJvbSAnLi91aSc7XG5pbXBvcnQgeyBkZWZlclByb21wdEFjdGl2YXRpb24gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IG1heWJlUGVyc2lzdFJlbWluZGVyIH0gZnJvbSAnLi9wcm9tcHQtcmVtaW5kZXInO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRNYW5hZ2VyU3RhdGUgPVxuICAgIHwgJ2xvYWRpbmcnXG4gICAgfCAncmVhZHknXG4gICAgfCAncmVxdWVzdGluZydcbiAgICB8ICdyZXF1ZXN0aW5nLXNpbGVudCdcbiAgICB8ICdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnXG4gICAgfCAncG9zdGFjdGlvbic7XG5cbi8vIGxvYWRpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHJlcXVlc3Rpbmdcbi8vIHJlcXVlc3RpbmcgLT4gcmVhZHlcbi8vIHJlYWR5IC0+IHBvc3RhY3Rpb25cbi8vIHBvc3RhY3Rpb24gLT4gcmVhZHlcblxuZXhwb3J0IGNsYXNzIFByb21wdE1hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkga3VtdWxvc0NsaWVudDogS3VtdWxvcztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwdXNoQ29udGFpbmVyOiBSb290RnJhbWVDb250YWluZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmlnZ2VyRmlsdGVyOiBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8UHVzaFByb21wdENvbmZpZz47XG5cbiAgICBwcml2YXRlIHN0YXRlPzogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uU3RhdGU/OiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJpdmF0ZSBwcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHByaXZhdGUgYWN0aXZlUHJvbXB0czogUHVzaFByb21wdENvbmZpZ1tdO1xuICAgIHByaXZhdGUgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgcHJpdmF0ZSBwdXNoT3BzTWFuYWdlcj86IFB1c2hPcHNNYW5hZ2VyO1xuICAgIHByaXZhdGUgY2hhbm5lbHM6IENoYW5uZWxbXTtcbiAgICBwcml2YXRlIHVpPzogVWk7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUNvbmZpZz86IFBsYXRmb3JtQ29uZmlnO1xuICAgIHByaXZhdGUgY3VycmVudFBvc3RBY3Rpb24/OiBQcm9tcHRBY3Rpb247XG4gICAgcHJpdmF0ZSBjaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcj86IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBLdW11bG9zLCBjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIHRoaXMucHJvbXB0cyA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xuICAgICAgICB0aGlzLnRyaWdnZXJGaWx0ZXIgPSBuZXcgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFB1c2hQcm9tcHRDb25maWc+KFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJhY2tlZFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucHVzaENvbnRhaW5lciA9IHJvb3RGcmFtZS5jcmVhdGVDb250YWluZXIoJ3B1c2gnKTtcbiAgICAgICAgdGhpcy5rdW11bG9zQ2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjdHg7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnbG9hZGluZycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTogQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgPSBuZXcgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkV2ZW50VHJhY2tlZCA9IChlOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1Byb21wdCB0cmlnZ2VyIHNhdyBldmVudCcsIGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVhZHknKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ05vdCByZWFkeSwgd2FpdGluZyBvbiBxdWV1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYWN0aXZhdGVEZWZlcnJlZFByb21wdCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCBhcyBQdXNoUHJvbXB0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3ROYXRpdmVQcm9tcHQgPSBhc3luYyAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMuc3RhdGUgfHwgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0ID0gcHJvbXB0O1xuXG4gICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXI/LmlzTmF0aXZlUHJvbXB0U2hvd24oKS50aGVuKGlzTmF0aXZlUHJvbXB0U2hvd24gPT4ge1xuICAgICAgICAgICAgaWYgKGlzTmF0aXZlUHJvbXB0U2hvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlcXVlc3Rpbmctc2lsZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5yZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlYWR5Jyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0UG9zdEFjdGlvblByb21wdCA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBhY3Rpb246IFByb21wdEFjdGlvblxuICAgICkgPT4ge1xuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nID09PSB0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJyAhPT0gYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdwb3N0YWN0aW9uJyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qcm9tcHRBY2NlcHRlZCA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQpO1xuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAnc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUHJvbXB0QWN0aW9ucyhwcm9tcHQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMudWk/LnNob3dUb2FzdChwcm9tcHQubGFiZWxzPy50aGFua3NGb3JTdWJzY3JpYmluZyEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qb3N0QWN0aW9uQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oY2hhbm5lbFNlbGVjdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ3JlYWR5Jyk7XG4gICAgICAgIHRoaXMuaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUHJvbXB0RGVjbGluZWQgPSAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIG1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdCk7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uRGlzbWlzc092ZXJsYXkgPSAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCB7IHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuXG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5mb3JFYWNoKHAgPT4gdGhpcy5oaWRlUHJvbXB0KHApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUHJvbXB0QWN0aW9ucyhwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgLy8gTm90ZTogbm8gcHJvbXB0cyB3aXRoIHN1Y2ggYWN0aW9uIGNhbiBiZSBjcmVhdGVkIGZyb20gdWkgZm9yIG9wdGltb3ZlIGFwcHNcbiAgICAgICAgLy8gaWYgKCFwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gY29uc29sZS5pbmZvKCdXaWxsIGhhbmRsZSBhY3Rpb25zOiAnLCBwcm9tcHQuYWN0aW9ucyk7XG5cbiAgICAgICAgLy8gY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgLy8gdGhpcy5jaGFubmVscyA9IGF3YWl0IGNoYW5uZWxTdWJNZ3IubGlzdENoYW5uZWxzKCk7XG5cbiAgICAgICAgLy8gYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsU3ViQWN0aW9ucyhwcm9tcHQpO1xuICAgICAgICAvLyBhd2FpdCB0aGlzLmhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxDaGFubmVsU3ViQWN0aW9uPihcbiAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdXVpZHNUb1N1YnNjcmliZSA9IGFjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsdG9TdWIgPSB0aGlzLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGMgPT4gYy51dWlkID09PSBhY3Rpb24uY2hhbm5lbFV1aWQgJiYgYy5zdWJzY3JpYmVkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsdG9TdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFVuYWJsZSB0byBzdWJzY3JpYmUgdG8gY2hhbm5lbCAnJHthY3Rpb24uY2hhbm5lbFV1aWR9JyBhcyBpdCBkb2VzIG5vdCBleGlzdGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5jaGFubmVsVXVpZCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpLnN1YnNjcmliZSh1dWlkc1RvU3Vic2NyaWJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHByb21wdC5hY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwb3N0IGFjdGlvbnMgb25seSBhcHBseSB0byBgdXNlckNoYW5uZWxTZWxlY3REaWFsb2dgIGFjdGlvbnNcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGN1cnJlbnRseSBvbmx5IGV4cGVjdGluZyAxIGNvbmZpZ3VyZWQgYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25cbiAgICAgICAgdGhpcy5vblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0KHByb21wdCwgYWN0aW9uc1swXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsU2VsZWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiAhY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci51bnN1YnNjcmliZSh1bnN1YnNjcmliZXMpO1xuXG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXMgPSBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcihjcyA9PiBjcy5jaGVja2VkKVxuICAgICAgICAgICAgLm1hcChjcyA9PiBjcy5jaGFubmVsLnV1aWQpO1xuICAgICAgICBhd2FpdCBjaGFubmVsU3ViTWdyLnN1YnNjcmliZShzdWJzY3JpYmVzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvblN0YXRlIHx8ICF0aGlzLnN0YXRlIHx8ICF0aGlzLnBsYXRmb3JtQ29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VUlDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm1Db25maWc6IHRoaXMucGxhdGZvcm1Db25maWcsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0OiB0aGlzLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VWlcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyID0+ICh0aGlzLnVpID0gcil9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdHM9e3RoaXMuYWN0aXZlUHJvbXB0c31cbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9zdEFjdGlvbkNvbmZpcm09e3RoaXMub25Qb3N0QWN0aW9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzT3ZlcmxheT17dGhpcy5vbkRpc21pc3NPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PXt0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uPXt0aGlzLmN1cnJlbnRQb3N0QWN0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1VJQ29udGV4dC5Qcm92aWRlcj4sXG4gICAgICAgICAgICB0aGlzLnB1c2hDb250YWluZXIuZWxlbWVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZXZhbHVhdGVUcmlnZ2VycygpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdFdmFsdWF0aW5nIHByb21wdCB0cmlnZ2VycycpO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQcm9tcHRzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLnByb21wdHMsXG4gICAgICAgICAgICBwcm9tcHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0cyhtYXRjaGVkUHJvbXB0cyk7XG4gICAgfVxuXG4gICAgcHJvbXB0QWN0aW9uTmVlZHNUYWtlbihwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxzVG9TdWIgPVxuICAgICAgICAgICAgcHJvbXB0LmFjdGlvbnNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIENoYW5uZWxTdWJBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4gYS5jaGFubmVsVXVpZCkgPz8gW107XG4gICAgICAgIGNvbnN0IG5lZWRzVG9TdWIgPVxuICAgICAgICAgICAgdGhpcy5jaGFubmVscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYyA9PiBjaGFubmVsc1RvU3ViLmluY2x1ZGVzKGMudXVpZCkgJiYgIWMuc3Vic2NyaWJlZFxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmIChuZWVkc1RvU3ViKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbXB0cy5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE8gaXMgaWRlbnRpdHkgb2sgZm9yIGNvbXBhcmlzb24gaGVyZS4uLiBtaWdodCBuZWVkIHRvIHVzZSBJRFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMucHVzaChwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHRzKHByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1dpbGwgYWN0aXZhdGUgcHJvbXB0czogJywgcHJvbXB0cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9tcHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCwgdGhpcy5hY3RpdmF0ZURlZmVycmVkUHJvbXB0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ1NldHRpbmcgcHJvbXB0IG1hbmFnZXIgc3RhdGU6JyArIHN0YXRlKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm9uRW50ZXIoc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25FbnRlcihzdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMucHVzaE9wc01hbmFnZXIgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXIuaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQcm9tcHRzKCk7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogY2hhbm5lbHMgaXJyZWxldmFudCBmb3Igb3B0aW1vdmUgYXBwc1xuICAgICAgICAgICAgICAgIC8vdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVhZHknOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3N0QWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU3RhdGUgPSBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5nZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3RhY3Rpb24nOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZyc6XG4gICAgICAgICAgICBjYXNlICdyZXF1ZXN0aW5nLXNpbGVudCc6XG4gICAgICAgICAgICBjYXNlICdyZXF1ZXN0aW5nLXNpbGVudC1kaXNtaXNzZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQcm9tcHRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnBsYXRmb3JtQ29uZmlnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtQ29uZmlnLnB1YmxpY0tleSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcHJvbXB0cyBjb25maWcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQucHVzaFByb21wdHMgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgdGhpcy5wcm9tcHRzID0geyAuLi50aGlzLmNvbnRleHQucHVzaFByb21wdHMgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4uKHRoaXMucGxhdGZvcm1Db25maWcucHJvbXB0cyB8fCB7fSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm90ZTogbm8gcHJvbXB0cyB3aXRoIHN1Y2ggYWN0aW9uIGNhbiBiZSBjcmVhdGVkIGZyb20gdWkgZm9yIG9wdGltb3ZlIGFwcHNcbiAgICAgICAgLy8gZm9yIChsZXQgaWQgaW4gdGhpcy5wcm9tcHRzKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBoYXNDaGFubmVsT3AgPSBCb29sZWFuKFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvbXB0c1tpZF0uYWN0aW9ucz8uZmlsdGVyKFxuICAgICAgICAvLyAgICAgICAgICAgICBhID0+IGEudHlwZSA9PT0gJ3N1YnNjcmliZVRvQ2hhbm5lbCdcbiAgICAgICAgLy8gICAgICAgICApPy5sZW5ndGhcbiAgICAgICAgLy8gICAgICk7XG5cbiAgICAgICAgLy8gICAgIGlmIChoYXNDaGFubmVsT3ApIHtcbiAgICAgICAgLy8gICAgICAgICB0cnkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzID0gYXdhaXQgdGhpcy5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpLmxpc3RDaGFubmVscygpO1xuICAgICAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gTm9vcFxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIEpTWCB9IGZyb20gJ3ByZWFjdCc7XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kTWFza1Byb3BzIHtcbiAgICBjbGFzcz86IHN0cmluZztcbiAgICBibHVyQ2xhc3M/OiBzdHJpbmc7XG4gICAgc3R5bGU/OiBKU1guQ1NTUHJvcGVydGllcztcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrU3RhdGUge1xuICAgIGJsdXJDbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRNYXNrIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIEJhY2tncm91bmRNYXNrUHJvcHMsXG4gICAgQmFja2dyb3VuZE1hc2tTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IEJhY2tncm91bmRNYXNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGJsdXJDbGFzc2VzID0gdGhpcy5wcm9wcy5ibHVyQ2xhc3M/LnNwbGl0KCcgJykgPz8gW107XG4gICAgICAgIGJsdXJDbGFzc2VzLnB1c2goJ2t1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXInKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYmx1ckNsYXNzZXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGVCbHVyU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgYmx1ckNsYXNzZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgYmx1ckNsYXNzZXMuZm9yRWFjaChibHVyQ2xhc3MgPT4ge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhibHVyQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGJsdXJDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCbHVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5ibHVyQ2xhc3Nlcy5mb3JFYWNoKGJsdXJDbGFzcyA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGJsdXJDbGFzcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xhc3M6IGNsYXNzTmFtZXMsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2t1bXVsb3MtYmFja2dyb3VuZC1tYXNrJ107XG5cbiAgICAgICAgaWYgKCEhY2xhc3NOYW1lcykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3M9e2NsYXNzZXMuam9pbignICcpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IFB1c2hQcm9tcHRDb25maWcsIFBvaW50LCBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyU3RhdGUgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUsIGlzTW9iaWxlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWFzayB9IGZyb20gJy4vYmFja2dyb3VuZC1tYXNrJztcbmltcG9ydCB7IFN2Z1BvaW50ZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N2Zy1wb2ludGVyJztcblxuY29uc3QgbG9jYWxTdHlsZXMgPSB7XG4gICAgbWFzazoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG59O1xuXG5jb25zdCBQT0lOVEVSX1NUQVJUX09GRlNFVDogUG9pbnQgPSB7XG4gICAgeDogMCxcbiAgICB5OiA1MFxufTtcblxuY29uc3QgUE9JTlRFUl9FTkRfT0ZGU0VUOiBQb2ludCA9IHtcbiAgICB4OiAtMTc1LFxuICAgIHk6IDc1XG59O1xuXG5jb25zdCBDT05UUk9MX1BPSU5UX09GRlNFVDogUG9pbnQgPSB7XG4gICAgeDogMCxcbiAgICB5OiA1MDBcbn07XG5cbmludGVyZmFjZSBPdmVybGF5U2lsZW50UHJvcHMge1xuICAgIHByb21wdFN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcHJvbXB0PzogUHVzaFByb21wdENvbmZpZztcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIG9uRGlzbWlzcz86IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBPdmVybGF5U2lsZW50U3RhdGUge1xuICAgIHdpbmRvd0RpbWVuc2lvbnM6IERpbWVuc2lvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5U2lsZW50IGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIE92ZXJsYXlTaWxlbnRQcm9wcyxcbiAgICBPdmVybGF5U2lsZW50U3RhdGVcbj4ge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5kb3dEaW1lbnNpb25zOiB7IHdpZHRoLCBoZWlnaHQgfSB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbXB0U3RhdGUsIHByb21wdCwgc3Vic2NyaXB0aW9uU3RhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByb21wdCB8fFxuICAgICAgICAgICAgcHJvbXB0U3RhdGUgIT09ICdyZXF1ZXN0aW5nLXNpbGVudCcgfHxcbiAgICAgICAgICAgICFwcm9tcHQuc2lsZW50T3ZlcmxheSB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0LnNpbGVudE92ZXJsYXk7XG4gICAgICAgIGNvbnN0IGJvZHlMYWJlbCA9IG92ZXJsYXkubGFiZWxzLmJvZHk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gb3ZlcmxheS5jb2xvcnMudGV4dDtcblxuICAgICAgICBjb25zdCBtYXNrU3R5bGUgPSB7XG4gICAgICAgICAgICAuLi5sb2NhbFN0eWxlcy5tYXNrLFxuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJhY2tncm91bmRNYXNrXG4gICAgICAgICAgICAgICAgYmx1ckNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWJsdXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17bWFza1N0eWxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CYWNrZ3JvdW5kTWFza0NsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvaW50ZXIoY29sb3IpfVxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwia3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHRcIj57Ym9keUxhYmVsfTwvcD5cbiAgICAgICAgICAgIDwvQmFja2dyb3VuZE1hc2s+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJQb2ludGVyKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgeyB3aW5kb3dEaW1lbnNpb25zIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHBvaW50ZXJTdGFydDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiB3aW5kb3dEaW1lbnNpb25zLndpZHRoIC8gMiArIFBPSU5URVJfU1RBUlRfT0ZGU0VULngsXG4gICAgICAgICAgICB5OiB3aW5kb3dEaW1lbnNpb25zLmhlaWdodCAvIDIgKyBQT0lOVEVSX1NUQVJUX09GRlNFVC55XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcG9pbnRlckVuZDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiB3aW5kb3dEaW1lbnNpb25zLndpZHRoICsgUE9JTlRFUl9FTkRfT0ZGU0VULngsXG4gICAgICAgICAgICB5OiBQT0lOVEVSX0VORF9PRkZTRVQueVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xQb2ludDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBwb2ludGVyRW5kLnggKyBDT05UUk9MX1BPSU5UX09GRlNFVC54LFxuICAgICAgICAgICAgeTogcG9pbnRlclN0YXJ0LnkgKyBDT05UUk9MX1BPSU5UX09GRlNFVC55XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgIDxTdmdQb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIGFyZWE9e3dpbmRvd0RpbWVuc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgIHF1YWRDdXJ2ZVBvaW50cz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcDE6IHBvaW50ZXJTdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAyOiBjb250cm9sUG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwMzogcG9pbnRlckVuZFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CYWNrZ3JvdW5kTWFza0NsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHByb21wdCwgb25EaXNtaXNzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghcHJvbXB0IHx8ICFvbkRpc21pc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRGlzbWlzcyhwcm9tcHQpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBQdXNoUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyU3RhdGUgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IEJhY2tncm91bmRNYXNrIH0gZnJvbSAnLi9iYWNrZ3JvdW5kLW1hc2snO1xuXG5pbnRlcmZhY2UgT3ZlcmxheVByb3BzIHtcbiAgICBwcm9tcHRTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbn1cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQ8T3ZlcmxheVByb3BzLCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwcm9tcHRTdGF0ZSwgcHJvbXB0LCBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJvbXB0IHx8XG4gICAgICAgICAgICBwcm9tcHRTdGF0ZSAhPT0gJ3JlcXVlc3RpbmcnIHx8XG4gICAgICAgICAgICAhcHJvbXB0Lm92ZXJsYXkgfHxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlICE9PSAndW5zdWJzY3JpYmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHByb21wdC5vdmVybGF5O1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG92ZXJsYXkuY29sb3JzLnNoYWRlLFxuICAgICAgICAgICAgY29sb3I6IG92ZXJsYXkuY29sb3JzLnRleHRcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJhY2tncm91bmRNYXNrXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIC8vIG1haW50YWlucyBiYWNrd2FyZHMgY29tcGF0IHdpdGggZXhpc3RpbmcgYmx1ciBjbGFzcyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gd2FzIGJlaW5nIGFwcGxpZWQgZGlyZWN0bHkgYnkgdGhpcyBjb21wb25lbnQgcHJldmlvdXNseVxuICAgICAgICAgICAgICAgIGJsdXJDbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1ibHVyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3Mtb3ZlcmxheSBrdW11bG9zLW92ZXJsYXktJHtnZXRCcm93c2VyTmFtZSgpfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1zdHJpcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IG92ZXJsYXkuY29sb3JzLnN0cmlwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQgMzNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtvdmVybGF5LmNvbG9ycy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyLjVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAxMi41NywxMS4xMlxuICAgICAgICAgICBDIDEyLjU3LDExLjEyIDYuODQsMjAuODIgNC4xMywyMS4wMVxuICAgICAgICAgICAgIDEuNDIsMjEuMjEgMjAuNzEsMjguNjcgMjYuNjIsMjguNjdNIDQuMjMsMjEuMDFcbiAgICAgICAgICAgQyA0LjIzLDIxLjAxIDUzLjk2LDE0LjkxIDYwLjY1LDMuNDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvdmVybGF5Lmljb25VcmwgJiYgPGltZyBzcmM9e292ZXJsYXkuaWNvblVybH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e292ZXJsYXkubGFiZWxzLmhlYWRpbmd9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57b3ZlcmxheS5sYWJlbHMuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkubGlua3M/Lm1hcChsID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2wubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmFja2dyb3VuZE1hc2s+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcGVyc2lzdFByb21wdFJlbWluZGVyLCBnZXRQcm9tcHRSZW1pbmRlciB9IGZyb20gJy4uL2NvcmUvc3RvcmFnZSc7XG5cbmltcG9ydCB7XG4gICAgUHJvbXB0VWlBY3Rpb25zLFxuICAgIFVpQWN0aW9uVHlwZSxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZyxcbiAgICBSZW1pbmRlclRpbWVVbml0XG59IGZyb20gJy4uL2NvcmUnO1xuXG5jb25zdCBSRU1JTkRFUl9USU1FX1VOSVRfVE9fTUlMTElTID0ge1xuICAgIFtSZW1pbmRlclRpbWVVbml0LkhPVVJTXTogMTAwMCAqIDYwICogNjAsXG4gICAgW1JlbWluZGVyVGltZVVuaXQuREFZU106IDEwMDAgKiA2MCAqIDYwICogMjRcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQ6IFByb21wdENvbmZpZykge1xuICAgIGNvbnN0IHsgdWlBY3Rpb25zIH0gPSBwcm9tcHQgYXMgUHJvbXB0VWlBY3Rpb25zO1xuXG4gICAgaWYgKCF1aUFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdHlwZSB9ID0gdWlBY3Rpb25zLmRlY2xpbmU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuUkVNSU5EOlxuICAgICAgICAgICAgcmV0dXJuIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihwcm9tcHQudXVpZCwge1xuICAgICAgICAgICAgICAgIGRlY2xpbmVkT246IERhdGUubm93KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERUNMSU5FOlxuICAgICAgICAgICAgcmV0dXJuIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihwcm9tcHQudXVpZCwgJ3N1cHByZXNzZWQnKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYFVuc3VwcG9ydGVkIGRlY2xpbmUgYWN0aW9uIHR5cGUgJHt0eXBlfSBzdXBwb3J0ZWQgZm9yIHByb21wdCAke3Byb21wdC51dWlkfSwgZmFsbCBiYWNrIHRvIGFsd2F5cyBzaG93IHRoaXMgcHJvbXB0IHdoZW4gZGVjbGluZWRgXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzUHJvbXB0U3VwcHJlc3NlZChcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZ1xuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVtaW5kZXIgPSBhd2FpdCBnZXRQcm9tcHRSZW1pbmRlcihwcm9tcHQudXVpZCk7XG5cbiAgICBpZiAoIXJlbWluZGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoJ3N1cHByZXNzZWQnID09PSByZW1pbmRlcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoISgndWlBY3Rpb25zJyBpbiBwcm9tcHQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVpQWN0aW9ucyB9ID0gcHJvbXB0O1xuXG4gICAgaWYgKHVpQWN0aW9ucy5kZWNsaW5lLnR5cGUgIT09IFVpQWN0aW9uVHlwZS5SRU1JTkQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhaGFzUHJvbXB0UmVtaW5kZXJFbGFwc2VkKFxuICAgICAgICByZW1pbmRlci5kZWNsaW5lZE9uLFxuICAgICAgICB1aUFjdGlvbnMuZGVjbGluZS5kZWxheVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcm9tcHRSZW1pbmRlckVsYXBzZWQoXG4gICAgZGVjbGluZWRPbk1pbGxpczogbnVtYmVyLFxuICAgIGRlbGF5Q29uZmlnOiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnXG4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBEYXRlLm5vdygpIC0gZGVjbGluZWRPbk1pbGxpcyA+XG4gICAgICAgIFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVNbZGVsYXlDb25maWcudGltZVVuaXRdICpcbiAgICAgICAgICAgIGRlbGF5Q29uZmlnLmR1cmF0aW9uXG4gICAgKTtcbn1cbiIsImltcG9ydCB7XG4gICAgRmlsdGVyVmFsdWUsXG4gICAgS3VtdWxvc0V2ZW50LFxuICAgIFByb3BGaWx0ZXIsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdENvbmZpZ3MsXG4gICAgQ29udGV4dCxcbiAgICBTZGtFdmVudCxcbiAgICBFdmVudFBheWxvYWRcbn0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgaXNQcm9tcHRTdXBwcmVzc2VkIH0gZnJvbSAnLi9wcm9tcHQtcmVtaW5kZXInO1xuXG5mdW5jdGlvbiBwcm9wSW4oZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0ZXN0cyA9IGZpbHRlclZhbHVlLm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBgXiR7ZXNjYXBlUmVnRXhwKHYpLnJlcGxhY2UoL1xcXFxcXCovZywgJy4qJyl9JGA7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyTWF0Y2hlZCA9IHRlc3RzLnJlZHVjZShcbiAgICAgICAgICAgIChtYXRjaGVkLCBtYXRjaGVyKSA9PiBtYXRjaGVkIHx8IG1hdGNoZXIudGVzdChTdHJpbmcocHJvcFZhbHVlKSksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJNYXRjaGVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluZGV4T2YocHJvcFZhbHVlIGFzIGFueSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHByb3BFcShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbHRlclZhbHVlID09IHByb3BWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0KGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlID4gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BHdGUoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPj0gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BMdChmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHRlKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlIDw9IGZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlck1hdGNoZWQoXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgZXZlbnQ6IEt1bXVsb3NFdmVudFxuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHByb21wdC50cmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIuZXZlbnQgIT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdHJpZ2dlci5maWx0ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC5kYXRhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyLmZpbHRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgW3Byb3AsIG9wLCBmaWx0ZXJUZXN0VmFsdWVdID0gdHJpZ2dlci5maWx0ZXJzW2ldIGFzIFByb3BGaWx0ZXI7XG5cbiAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gZXZlbnQuZGF0YVtwcm9wXTtcblxuICAgICAgICBsZXQgZmlsdGVyTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIGNhc2UgJ0lOJzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEluKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wRXEoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gZmlsdGVyIG9wZXJhdG9yOiAke29wfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IGFsbFByb3BGaWx0ZXJzTWF0Y2ggJiYgZmlsdGVyTWF0Y2hlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsUHJvcEZpbHRlcnNNYXRjaDtcbn1cblxuZXhwb3J0IGNsYXNzIFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiB7XG4gICAgcHJpdmF0ZSBldmVudFF1ZXVlOiBFdmVudFBheWxvYWQgPSBbXTtcbiAgICBwcml2YXRlIGV2ZW50UmVjZWl2ZWRDYWxsYmFjaz86IChlOiBTZGtFdmVudCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ29udGV4dCwgZXZlbnRSZWNlaXZlZENhbGxiYWNrPzogKGU6IFNka0V2ZW50KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZXZlbnRSZWNlaXZlZENhbGxiYWNrID0gZXZlbnRSZWNlaXZlZENhbGxiYWNrO1xuICAgICAgICBjdHguc3Vic2NyaWJlKCdldmVudFRyYWNrZWQnLCB0aGlzLmhhbmRsZVNka0V2ZW50KTtcbiAgICB9XG5cbiAgICBhc3luYyBmaWx0ZXJQcm9tcHRzKFxuICAgICAgICBwcm9tcHRzOiBQcm9tcHRDb25maWdzPFQ+LFxuICAgICAgICBmaWx0ZXI6IChwcm9tcHQ6IFQpID0+IGJvb2xlYW4gPSAoXzogVCkgPT4gdHJ1ZVxuICAgICk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRXZhbHVhdGluZyBwcm9tcHQgdHJpZ2dlcnMnKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVkUHJvbXB0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpZCBpbiBwcm9tcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSBwcm9tcHRzW2lkXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ldmVudFF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50UXVldWVbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbXB0U3VwcHJlc3NlZCA9IGF3YWl0IGlzUHJvbXB0U3VwcHJlc3NlZChwcm9tcHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhcHJvbXB0U3VwcHJlc3NlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTWF0Y2hlZChwcm9tcHQsIGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIocHJvbXB0KVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUHJvbXB0cy5wdXNoKHByb21wdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG5cbiAgICAgICAgLy8gQ2FzdCBuZWNlc3NhcnkgdG8gbmFycm93IHRoZSB0eXBlIGZyb20gdGhlIGNvbnN0cmFpbnQuXG4gICAgICAgIC8vIFNlZW1zIHRoZSBUUyBjb21waWxlciBpc24ndCBxdWl0ZSBzbWFydCBlbm91Z2ggd2hlbiBoYW5kbGluZ1xuICAgICAgICAvLyB0aGUgJ1QgZXh0ZW5kcyBQcm9tcHRDb25maWcnIGNvbnN0cmFpbnQuXG4gICAgICAgIHJldHVybiBtYXRjaGVkUHJvbXB0cyBhcyBUW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVTZGtFdmVudCA9IChlOiBTZGtFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBldmVudHMgPSBlLmRhdGEgYXMgRXZlbnRQYXlsb2FkO1xuXG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZS5wdXNoKC4uLmV2ZW50cyk7XG5cbiAgICAgICAgdGhpcy5ldmVudFJlY2VpdmVkQ2FsbGJhY2s/LihlKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4uL2NvcmUvY2hhbm5lbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVJQ29udGV4dFN0YXRlIHtcbiAgICBwbGF0Zm9ybUNvbmZpZzogUGxhdGZvcm1Db25maWc7XG4gICAgY2hhbm5lbExpc3Q6IENoYW5uZWxbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFVJQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VUlDb250ZXh0U3RhdGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50LCBoLCBKU1ggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQge1xuICAgIFB1c2hQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0VHlwZU5hbWUsXG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdEFjdGlvbixcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbixcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyU3RhdGUgfSBmcm9tICcuJztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBCZWxsIH0gZnJvbSAnLi9iZWxsJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcbmltcG9ydCB7IENoYW5uZWxzRGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cvY2hhbm5lbHMtZGlhbG9nJztcbmltcG9ydCB7IEJhY2tncm91bmRNYXNrIH0gZnJvbSAnLi9vdmVybGF5L2JhY2tncm91bmQtbWFzayc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5L3B1c2gtcGVybXMnO1xuaW1wb3J0IHsgT3ZlcmxheVNpbGVudCB9IGZyb20gJy4vb3ZlcmxheS9wdXNoLXBlcm1zLXNpbGVudCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NVQlNDUklCRV9MQUJFTCA9ICdTdWJzY3JpYmUgZm9yIG5vdGlmaWNhdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZVBvc2l0aW9uKHBvczogc3RyaW5nKTogJ2xlZnQnIHwgJ3JpZ2h0JyB7XG4gICAgcmV0dXJuIHBvcy5pbmRleE9mKCdsZWZ0JykgPiAtMSA/ICdyaWdodCcgOiAnbGVmdCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlQcm9wczxUIGV4dGVuZHMgUHVzaFByb21wdENvbmZpZz4ge1xuICAgIGNvbmZpZzogVDtcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByb21wdE1hbmFnZXJTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIG9uUHJvbXB0QWNjZXB0ZWQ6IChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB2b2lkO1xuICAgIG9uUHJvbXB0RGVjbGluZWQ6IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgYWN0aW9uPzogVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb247XG59XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICAgIHBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudDxUb29sdGlwUHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy10b29sdGlwIGt1bXVsb3MtdG9vbHRpcC0ke3RoaXMucHJvcHMucG9zaXRpb259YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBDb21wb25lbnQ8eyBtZXNzYWdlOiBzdHJpbmcgfSwgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzPVwia3VtdWxvcy10b2FzdFwiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+O1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIFVpUHJvcHMge1xuICAgIHByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXTtcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByb21wdE1hbmFnZXJTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIG9uUHJvbXB0QWNjZXB0ZWQ6IChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB2b2lkO1xuICAgIG9uUHJvbXB0RGVjbGluZWQ6IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgb25Qb3N0QWN0aW9uQ29uZmlybTogKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25EaXNtaXNzT3ZlcmxheTogKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4gdm9pZDtcbiAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PzogUHVzaFByb21wdENvbmZpZztcbiAgICBjdXJyZW50UG9zdEFjdGlvbj86IFByb21wdEFjdGlvbjtcbn1cblxuaW50ZXJmYWNlIFVpU3RhdGUge1xuICAgIHRvYXN0UXVldWU6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaSBleHRlbmRzIENvbXBvbmVudDxVaVByb3BzLCBVaVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFVpUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlcXVldWVUb2FzdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiB0aGlzLnN0YXRlLnRvYXN0UXVldWUuc2xpY2UoMSlcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNob3dUb2FzdChtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogWy4uLnRoaXMuc3RhdGUudG9hc3RRdWV1ZSwgbWVzc2FnZV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLmRlcXVldWVUb2FzdCwgMzIwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLm1heWJlUmVuZGVyUHJvbXB0QmFja2dyb3VuZE1hc2soKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb21wdHMubWFwKHRoaXMucmVuZGVyUHJvbXB0LCB0aGlzKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvc3RBY3Rpb24oKX1cblxuICAgICAgICAgICAgICAgIHshaXNNb2JpbGUoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHQ9e3RoaXMucHJvcHMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7IWlzTW9iaWxlKCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVNpbGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0U3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0PXt0aGlzLnByb3BzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17dGhpcy5wcm9wcy5vbkRpc21pc3NPdmVybGF5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2FzdFF1ZXVlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VG9hc3QgbWVzc2FnZT17dGhpcy5zdGF0ZS50b2FzdFF1ZXVlWzBdfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtYXliZVJlbmRlclByb21wdEJhY2tncm91bmRNYXNrKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAncmVxdWVzdGluZycgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlIHx8XG4gICAgICAgICAgICAncmVxdWVzdGluZy1zaWxlbnQnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBwcm9tcHRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0UHJvbXB0V2l0aE1hc2sgPSBwcm9tcHRzLmZpbHRlcihcbiAgICAgICAgICAgIHAgPT5cbiAgICAgICAgICAgICAgICAocC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCB8fFxuICAgICAgICAgICAgICAgICAgICBwLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkJBTk5FUikgJiZcbiAgICAgICAgICAgICAgICAhIXAuYmFja2dyb3VuZE1hc2tcbiAgICAgICAgKVswXSBhcyBBbGVydFByb21wdENvbmZpZyB8IEJhbm5lclByb21wdENvbmZpZztcblxuICAgICAgICBpZiAoIWZpcnN0UHJvbXB0V2l0aE1hc2spIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZpcnN0UHJvbXB0V2l0aE1hc2suYmFja2dyb3VuZE1hc2shLmNvbG9ycy5iZ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiA8QmFja2dyb3VuZE1hc2sgc3R5bGU9e3N0eWxlfSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXJQcm9tcHQocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUgfHxcbiAgICAgICAgICAgICdyZXF1ZXN0aW5nLXNpbGVudCcgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHByb21wdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdiZWxsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8QmVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdEFjY2VwdGVkPXt0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgJ2FsZXJ0JzpcbiAgICAgICAgICAgIGNhc2UgJ2Jhbm5lcic6XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbjogVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24gfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvbXB0LnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHByb21wdC5hY3Rpb25zPy5maW5kPFxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPihcbiAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFByb21wdEFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKTogYWN0aW9uIGlzIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICd1c2VyQ2hhbm5lbFNlbGVjdElubGluZSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0RGVjbGluZWQ9e3RoaXMucHJvcHMub25Qcm9tcHREZWNsaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyUG9zdEFjdGlvbigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlLFxuICAgICAgICAgICAgY3VycmVudFBvc3RBY3Rpb24sXG4gICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgIT09IHByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZycgIT09IGN1cnJlbnRQb3N0QWN0aW9uPy50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kTWFzayA9IG51bGw7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQgfHxcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkJBTk5FUikgJiZcbiAgICAgICAgICAgIHVuZGVmaW5lZCAhPT0gY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC5iYWNrZ3JvdW5kTWFza1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tDb25maWcgPSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LmJhY2tncm91bmRNYXNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZE1hc2sgPSAoXG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRNYXNrXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogbWFza0NvbmZpZy5jb2xvcnMuYmcgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2JhY2tncm91bmRNYXNrfVxuICAgICAgICAgICAgICAgIDxDaGFubmVsc0RpYWxvZ1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2N1cnJlbnRQb3N0QWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2NoYW5uZWxTZWxlY3Rpb25zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Qb3N0QWN0aW9uQ29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb21wdENvbmZpZyB9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXJQcm9tcHRBY3RpdmF0aW9uKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnLFxuICAgIGFjdGl2YXRlRm46IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4gdm9pZFxuKSB7XG4gICAgaWYgKFxuICAgICAgICBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgPCAwXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICdEZWZlcnJpbmcgcHJvbXB0IGFjdGl2YXRpb24gYnkgJyArIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kc1xuICAgICk7XG5cbiAgICBzZXRUaW1lb3V0KGFjdGl2YXRlRm4sIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyAqIDEwMDAsIHByb21wdCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IFB1c2hQYXlsb2FkIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcblxuZXhwb3J0IGVudW0gV29ya2VyTWVzc2FnZVR5cGUge1xuICAgIEtQdXNoUmVjZWl2ZWQgPSAnS1B1c2hSZWNlaXZlZCdcbn1cbmV4cG9ydCB0eXBlIFdvcmtlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDtcbiAgICBkYXRhOiBQdXNoUGF5bG9hZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGRhdGE6IGFueSk6IGRhdGEgaXMgV29ya2VyTWVzc2FnZSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIFdvcmtlck1lc3NhZ2VUeXBlWyhkYXRhIGFzIFdvcmtlck1lc3NhZ2UpLnR5cGVdICE9PSB1bmRlZmluZWRcbiAgICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=