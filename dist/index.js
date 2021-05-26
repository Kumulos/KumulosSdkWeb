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

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

    this.resolveOptions(options);
    this.initSelection();
  }
  /**
   * Defines base properties passed from constructor.
   * @param {Object} options
   */


  _createClass(ClipboardAction, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = options.action;
      this.container = options.container;
      this.emitter = options.emitter;
      this.target = options.target;
      this.text = options.text;
      this.trigger = options.trigger;
      this.selectedText = '';
    }
    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

  }, {
    key: "initSelection",
    value: function initSelection() {
      if (this.text) {
        this.selectFake();
      } else if (this.target) {
        this.selectTarget();
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     */

  }, {
    key: "createFakeElement",
    value: function createFakeElement() {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.fakeElem.setAttribute('readonly', '');
      this.fakeElem.value = this.text;
      return this.fakeElem;
    }
    /**
     * Get's the value of fakeElem,
     * and makes a selection on it.
     */

  }, {
    key: "selectFake",
    value: function selectFake() {
      var _this = this;

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
    }
    /**
     * Selects the content from element passed on `target` property.
     */

  }, {
    key: "selectTarget",
    value: function selectTarget() {
      this.selectedText = select_default()(this.target);
      this.copyText();
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

          this._target = target;
        } else {
          throw new Error('Invalid "target" value, use a valid Element');
        }
      }
    }
    /**
     * Gets the `target` property.
     * @return {String|HTMLElement}
     */
    ,
    get: function get() {
      return this._target;
    }
  }]);

  return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    clipboard_classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var is = __webpack_require__(879);
var delegate = __webpack_require__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(134);
/******/ })()
.default;
});

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
exports.push([module.i, "@keyframes kumulos-anim-shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-2px, 0, 0); }\n  40%,\n  60% {\n    transform: translate3d(2px, 0, 0); } }\n\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%); }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%); } }\n\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0); }\n  100% {\n    opacity: 1;\n    transform: translateY(-50%, 0, 0); } }\n\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    transform: translateY(0, 0, 0); } }\n\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    transform: translateY(0, 0, 0); } }\n\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none; }\n\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block; }\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform; }\n  .kumulos-tooltip:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: 50%;\n    right: 100%;\n    border: solid transparent;\n    border-width: 8px;\n    margin-top: -8px; }\n  .kumulos-tooltip-right {\n    left: calc(100% + 12px);\n    animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-right:after {\n      border-right-color: #222;\n      right: 100%; }\n  .kumulos-tooltip-left {\n    right: calc(100% + 12px);\n    animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1); }\n    .kumulos-tooltip-left:after {\n      border-left-color: #222;\n      left: 100%; }\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1); }\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000; }\n  .kumulos-prompt *,\n  .kumulos-prompt *:before,\n  .kumulos-prompt *:after {\n    box-sizing: inherit; }\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600; }\n  .kumulos-action-button:hover {\n    cursor: pointer; }\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555; }\n  .kumulos-action-button-cancel:hover {\n    background: #eee; }\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff; }\n  .kumulos-action-button-confirm:hover {\n    opacity: 0.8; }\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold; }\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd; }\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block; }\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none; }\n\n.kumulos-checkbox:after {\n  content: '';\n  position: absolute;\n  display: none; }\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa; }\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3); }\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54); }\n  .kumulos-banner-container.kumulos-prompt-position-top {\n    top: 0;\n    animation: kumulos-slide-down 0.4s ease; }\n  .kumulos-banner-container.kumulos-prompt-position-bottom {\n    bottom: 0;\n    top: unset;\n    animation: kumulos-slide-up 0.4s ease; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial; } }\n\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px; }\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1; }\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px; }\n  .kumulos-banner-header h1 {\n    font-size: inherit;\n    font-weight: bold;\n    margin: 0 0 3px 0; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px; } }\n\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px; } }\n\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0; } }\n\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0; }\n\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0; }\n\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px; }\n\n.kumulos-banner-compact .kumulos-banner-rating {\n  display: flex;\n  height: 20px;\n  font-size: 38px;\n  color: rgba(128, 128, 0, 0.8); }\n\n.kumulos-bell-container {\n  position: fixed; }\n  .kumulos-bell-container-bottom-left {\n    bottom: 15px;\n    left: 15px; }\n  .kumulos-bell-container-bottom-right {\n    bottom: 15px;\n    right: 15px; }\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden; }\n  .kumulos-bell:hover {\n    transform: scale(1);\n    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54); }\n  .kumulos-bell:active {\n    transform: scale(0.8);\n    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54); }\n  .kumulos-bell svg {\n    fill: #fff;\n    animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n    animation-delay: 0.3s; }\n  .kumulos-bell:before {\n    content: '';\n    display: block;\n    width: 85%;\n    height: 85%;\n    border: solid 1px;\n    border-radius: 100%;\n    border-color: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 7.5% 0 0 7.5%; }\n\n.kumulos-bell-inner {\n  border-radius: 100%; }\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden; }\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n  .kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto; }\n    .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n    .kumulos-alert-container.kumulos-prompt-position-top-center {\n      border-radius: 0 0 3px 3px; }\n    .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n    .kumulos-alert-container.kumulos-prompt-position-center {\n      border-radius: 3px;\n      top: 120px; } }\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start; }\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px; }\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px; }\n  .kumulos-channel-dialog-header h1,\n  .kumulos-alert-header h1 {\n    font-size: inherit;\n    font-weight: 400;\n    margin: 0; }\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto; }\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end; }\n\n.kumulos-channel-list-container {\n  margin: 20px 0; }\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden; }\n\n.kumulos-background-mask-blur\n> *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px); }\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block; }\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px); }\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000; }\n  .kumulos-overlay *,\n  .kumulos-overlay *:before,\n  .kumulos-overlay *:after {\n    box-sizing: inherit; }\n  .kumulos-overlay-strip {\n    display: flex;\n    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n    min-height: 150px; }\n    .kumulos-overlay-strip:before {\n      display: block;\n      content: '';\n      width: calc(500px + 12%);\n      max-width: 660px; }\n  .kumulos-overlay-content-container {\n    display: flex;\n    max-width: 38%;\n    padding: 1em;\n    font: 14px helvetica, sans-serif; }\n    .kumulos-overlay-content-container * {\n      margin: 0; }\n    .kumulos-overlay-content-container svg {\n      margin: 55px 1.7em 0 0;\n      stroke: none;\n      fill: rgba(0, 0, 0, 0.8);\n      flex-shrink: 0; }\n    .kumulos-overlay-content-container img {\n      width: 55px;\n      height: 55px;\n      flex-shrink: 0; }\n    .kumulos-overlay-content-container h3,\n    .kumulos-overlay-content-container p,\n    .kumulos-overlay-content-container a {\n      color: inherit; }\n    .kumulos-overlay-content-container h3 {\n      font-size: 1.3em;\n      font-weight: bold; }\n    .kumulos-overlay-content-container a {\n      margin-right: 0.65em;\n      opacity: 0.8;\n      text-decoration: none; }\n  .kumulos-overlay .kumulos-overlay-content {\n    margin-left: 0.75em; }\n    .kumulos-overlay .kumulos-overlay-content p {\n      margin: 0.5em 0; }\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px; }\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none; }\n\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center; }\n\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px; }\n  .kumulos-overlay-edge .kumulos-overlay-content-container svg {\n    order: 1;\n    transform: rotate(-30deg); }\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%; }\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none; } }\n\nbody {\n  padding: 1em 11px 12px 13px; }\n", ""]);
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
/*! exports provided: createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, unstable_ImmediatePriority, unstable_UserBlockingPriority, unstable_NormalPriority, unstable_LowPriority, unstable_IdlePriority, unstable_runWithPriority, unstable_now, useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
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
exports.loadConfig = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
function loadConfig(ctx) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var config, MAX_AGE_MS, lastLoadTime, updatedRemoteConfig, url, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, storage_1.get('platformConfig')];
                case 1:
                    config = (_a = (_c.sent())) !== null && _a !== void 0 ? _a : {};
                    MAX_AGE_MS = 1 * 60 * 60 * 1000;
                    return [4 /*yield*/, storage_1.get('platformConfigUpdated')];
                case 2:
                    lastLoadTime = (_b = (_c.sent())) !== null && _b !== void 0 ? _b : 0;
                    updatedRemoteConfig = false;
                    if (!(Date.now() - lastLoadTime > MAX_AGE_MS)) return [3 /*break*/, 6];
                    console.info('Config never synced/stale, syncing now...');
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 5, , 6]);
                    url = _1.PUSH_BASE_URL + "/v1/web/config";
                    return [4 /*yield*/, utils_1.authedFetchJson(ctx, url)];
                case 4:
                    config = _c.sent();
                    updatedRemoteConfig = true;
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _c.sent();
                    console.warn(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    if (!updatedRemoteConfig) return [3 /*break*/, 9];
                    return [4 /*yield*/, storage_1.set('platformConfig', config)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, storage_1.set('platformConfigUpdated', Date.now())];
                case 8:
                    _c.sent();
                    _c.label = 9;
                case 9: return [2 /*return*/, config];
            }
        });
    });
}
exports.loadConfig = loadConfig;


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
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.EventType = exports.PUSH_BASE_URL = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_VERSION = '1.8.0';
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
var PromptTypeName;
(function (PromptTypeName) {
    PromptTypeName["BELL"] = "bell";
    PromptTypeName["ALERT"] = "alert";
    PromptTypeName["BANNER"] = "banner";
    PromptTypeName["CHANNEL"] = "channel";
})(PromptTypeName = exports.PromptTypeName || (exports.PromptTypeName = {}));
var UiActionType;
(function (UiActionType) {
    UiActionType["DECLINE"] = "decline";
    UiActionType["REMIND"] = "remind";
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
        var _a, _b, _c;
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = "Basic " + btoa(this.apiKey + ":" + this.secretKey);
        this.serviceWorkerPath = (_a = config.serviceWorkerPath) !== null && _a !== void 0 ? _a : '/worker.js';
        this.pushPrompts = (_b = config.pushPrompts) !== null && _b !== void 0 ? _b : 'auto';
        this.autoResubscribe = (_c = config.autoResubscribe) !== null && _c !== void 0 ? _c : true;
        this.features = config.features;
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
        if (!this.features) {
            // TODO: backwards compat, (for consistency) as push side of things
            // prob wont query this as it stands currently
            return feature === SDKFeature.PUSH ? true : false;
        }
        return this.features.includes(feature);
    };
    return Context;
}());
exports.Context = Context;
function assertConfigValid(config) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }
    var features = Array.isArray(config.features)
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
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var manager;
function getPushOpsManager(ctx) {
    if (manager) {
        return manager;
    }
    var browser = utils_1.getBrowserName();
    if (browser === 'safari') {
        manager = config_1.loadConfig(ctx).then(function (cfg) { return new safari_1["default"](cfg); });
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
                    case 0: return [4 /*yield*/, config_1.loadConfig(ctx)];
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
                    case 0: return [4 /*yield*/, config_1.loadConfig(ctx)];
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
                        return [4 /*yield*/, config_1.loadConfig(ctx)];
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
var RootFrame = /** @class */ (function () {
    function RootFrame() {
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';
        this.containers = [];
        document.body.appendChild(this.element);
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
exports.getMostRecentlyOpenedPushPayload = exports.persistOpenedPushPayload = exports.getContextFromStoredConfig = exports.getPromptReminder = exports.persistPromptReminder = exports.persistConfig = exports.del = exports.set = exports.get = void 0;
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
exports.configHasDDLFeature = exports.isMobile = exports.onDOMReady = exports.parseQueryString = exports.defer = exports.registerServiceWorker = exports.base64UrlEncode = exports.authedFetchJson = exports.authedFetch = exports.escapeRegExp = exports.cyrb53 = exports.isBrowserSupported = exports.getBrowserName = exports.uuidv4 = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
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
function isBrowserSupported() {
    var _a;
    var requiredThings = [typeof Promise, typeof fetch, typeof indexedDB];
    var browser = getBrowserName();
    if ('safari' === browser) {
        requiredThings.push(typeof ((_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification));
    }
    else {
        requiredThings.push.apply(requiredThings, [
            typeof Notification,
            typeof navigator.serviceWorker,
            typeof PushManager
        ]);
    }
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
    var _a;
    if (options === void 0) { options = { method: 'GET' }; }
    var existingHeaders = (_a = options.headers) !== null && _a !== void 0 ? _a : {};
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
function configHasDDLFeature(config) {
    return (config &&
        Array.isArray(config.features) &&
        config.features.includes(_1.SDKFeature.DDL));
}
exports.configHasDDLFeature = configHasDDLFeature;


/***/ }),

/***/ "./src/ddl/api.ts":
/*!************************!*\
  !*** ./src/ddl/api.ts ***!
  \************************/
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
exports.fetchDDLConfig = void 0;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
function fetchDDLConfig(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var config;
        return __generator(this, function (_a) {
            config = {
                uuid: 'link1',
                type: core_1.PromptTypeName.BANNER,
                feature: core_1.SDKFeature.DDL,
                labels: {
                    thanksForSubscribing: '',
                    banner: {
                        heading: 'Creek Cycles App',
                        body: '20% off all purchases with code 20Appy',
                        declineAction: '',
                        acceptAction: '20% off'
                    }
                },
                colors: {
                    banner: {
                        bg: 'rgba(255,255,0,1)',
                        fg: 'rgba(0,0,0,1)',
                        declineActionFg: '',
                        declineActionBg: '',
                        acceptActionFg: 'rgba(255,255,255,1)',
                        acceptActionBg: 'rgba(0,0,0,1)'
                    }
                },
                position: core_1.PromptPosition.TOP,
                storeUrl: 'https://play.google.com/store/apps/details?id=com.kumulos.companion',
                canonicalLinkUrl: 'https://reactnative.lnk.click/deep-1',
                imageUrl: '',
                trigger: {
                    event: 'k.pageViewed'
                },
                uiActions: {
                    decline: {
                        type: core_1.UiActionType.REMIND,
                        delay: {
                            duration: 1,
                            timeUnit: core_1.ReminderTimeUnit.DAYS
                        }
                    }
                }
            };
            return [2 /*return*/, Promise.resolve([config])];
        });
    });
}
exports.fetchDDLConfig = fetchDDLConfig;


/***/ }),

/***/ "./src/ddl/ddl-banner.tsx":
/*!********************************!*\
  !*** ./src/ddl/ddl-banner.tsx ***!
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
exports.DDLBanner = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var deeplink_button_1 = __importDefault(__webpack_require__(/*! ./deeplink-button */ "./src/ddl/deeplink-button.tsx"));
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/ddl/ui-context.ts");
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
var DDLBanner = /** @class */ (function (_super) {
    __extends(DDLBanner, _super);
    function DDLBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function () {
            _this.props.onConfirm(_this.props.config);
        };
        _this.onCancel = function () {
            _this.props.onCancel(_this.props.config);
        };
        _this.renderBanner = function (uiContext) {
            var config = _this.props.config;
            if (config.feature !== core_1.SDKFeature.DDL) {
                return null;
            }
            var canonicalLinkUrl = config.canonicalLinkUrl, position = config.position, labels = config.labels, colors = config.colors;
            var _a = labels.banner, heading = _a.heading, body = _a.body, acceptAction = _a.acceptAction;
            var _b = colors.banner, bg = _b.bg, fg = _b.fg, acceptActionBg = _b.acceptActionBg, acceptActionFg = _b.acceptActionFg;
            var classes = "kumulos-prompt kumulos-banner-container kumulos-banner-compact kumulos-prompt-position-" + position;
            var containerStyle = {
                backgroundColor: bg,
                color: fg
            };
            var actionStyle = {
                backgroundColor: acceptActionBg,
                color: acceptActionFg
            };
            var bannerIconStyle = __assign(__assign({}, styles.bannerIconStyle), { backgroundImage: "url(" + (uiContext === null || uiContext === void 0 ? void 0 : uiContext.platformConfig.iconUrl) + ")" });
            return (preact_1.h("div", { style: containerStyle, "class": classes, ref: _this.containerRef },
                preact_1.h("div", { "class": "kumulos-banner-close", onTouchEnd: _this.onCancel },
                    preact_1.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 121.31 122.876", style: styles.closeIconStyle },
                        preact_1.h("g", null,
                            preact_1.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z" })))),
                preact_1.h("div", { style: bannerIconStyle, "class": "kumulos-banner-icon" }),
                preact_1.h("div", { "class": "kumulos-banner-content" },
                    preact_1.h("div", { "class": "kumulos-banner-header" },
                        preact_1.h("h1", null, heading)),
                    preact_1.h("div", { "class": "kumulos-banner-body" }, body),
                    preact_1.h("div", { "class": "kumulos-banner-rating" }, "*****")),
                preact_1.h("div", { "class": "kumulos-banner-actions" },
                    preact_1.h(deeplink_button_1["default"], { style: actionStyle, "class": "kumulos-action-button kumulos-action-button-confirm", text: acceptAction, linkUrl: canonicalLinkUrl, onAction: _this.onConfirm }))));
        };
        _this.containerRef = preact_1.createRef();
        return _this;
    }
    DDLBanner.prototype.componentDidMount = function () {
        if (!this.containerRef.current) {
            return;
        }
        var _a = this.containerRef.current, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        this.props.dimensions(clientWidth, clientHeight);
    };
    DDLBanner.prototype.render = function () {
        return preact_1.h(ui_context_1.UIContext.Consumer, null, this.renderBanner);
    };
    return DDLBanner;
}(preact_1.Component));
exports.DDLBanner = DDLBanner;


/***/ }),

/***/ "./src/ddl/deeplink-button.tsx":
/*!*************************************!*\
  !*** ./src/ddl/deeplink-button.tsx ***!
  \*************************************/
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
var clipboard_1 = __importDefault(__webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js"));
var DeeplinkButton = /** @class */ (function (_super) {
    __extends(DeeplinkButton, _super);
    function DeeplinkButton(props) {
        var _this = _super.call(this, props) || this;
        _this.onTouchEnd = function () {
            _this.clipboard = new clipboard_1["default"](_this.btnRef.current);
            _this.clipboard.on('success', function (e) { return _this.props.onAction(); });
        };
        _this.btnRef = preact_1.createRef();
        return _this;
    }
    DeeplinkButton.prototype.componentWillUnmount = function () {
        var _a;
        (_a = this.clipboard) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    DeeplinkButton.prototype.render = function () {
        var _a = this.props, style = _a.style, cssClass = _a["class"], text = _a.text, linkUrl = _a.linkUrl;
        return (preact_1.h("button", { ref: this.btnRef, type: "button", style: style, "class": cssClass, onTouchEnd: this.onTouchEnd, "data-clipboard-text": linkUrl }, text));
    };
    return DeeplinkButton;
}(preact_1.Component));
exports["default"] = DeeplinkButton;


/***/ }),

/***/ "./src/ddl/manager.tsx":
/*!*****************************!*\
  !*** ./src/ddl/manager.tsx ***!
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
exports.DDLManagerState = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var index_1 = __webpack_require__(/*! ../core/index */ "./src/core/index.ts");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/ddl/ui.tsx"));
var api_1 = __webpack_require__(/*! ./api */ "./src/ddl/api.ts");
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/ddl/ui-context.ts");
var config_1 = __webpack_require__(/*! ../core/config */ "./src/core/config.ts");
var DDLManagerState;
(function (DDLManagerState) {
    DDLManagerState["LOADING"] = "loading";
    DDLManagerState["READY"] = "ready";
})(DDLManagerState = exports.DDLManagerState || (exports.DDLManagerState = {}));
var DDLManager = /** @class */ (function () {
    function DDLManager(client, ctx, rootFrame) {
        var _this = this;
        this.onBannerConfirm = function (config) {
            if (config.feature !== index_1.SDKFeature.DDL) {
                return;
            }
            _this.clearPrompt(config);
            window.location.href = config.storeUrl;
        };
        this.onBannerCancelled = function (config) {
            _this.clearPrompt(config);
        };
        this.rootContainer = rootFrame.createContainer('ddl');
        this.kumulosClient = client;
        this.context = ctx;
        console.info('DDLManager: initialising');
        this.createInjectionContainer();
        this.setState(DDLManagerState.LOADING);
    }
    DDLManager.prototype.createInjectionContainer = function () {
        this.containerEl = document.createElement('div');
        this.containerEl.className = 'kumulos-ddl-injection-container';
        document.body.prepend(this.containerEl);
    };
    DDLManager.prototype.clearPrompt = function (config) {
        var _a;
        this.config = (_a = this.config) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c.uuid !== config.uuid; });
        this.setState(DDLManagerState.READY);
    };
    DDLManager.prototype.setState = function (state) {
        console.info('Setting DDL manager state:' + state);
        this.state = state;
        this.onEnter(state);
    };
    DDLManager.prototype.onEnter = function (state) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, config_2;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case DDLManagerState.LOADING: return [3 /*break*/, 1];
                            case DDLManagerState.READY: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.loadDDLConfig()];
                    case 2:
                        _c.sent();
                        this.setState(DDLManagerState.READY);
                        return [3 /*break*/, 4];
                    case 3:
                        config_2 = (_a = this.config) === null || _a === void 0 ? void 0 : _a.shift();
                        if (config_2) {
                            setTimeout(function () { return _this.render(config_2); }, 2000);
                        }
                        else {
                            this.render();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DDLManager.prototype.render = function (config) {
        preact_1.render(preact_1.h(ui_context_1.UIContext.Provider, { value: { platformConfig: this.platformConfig } },
            preact_1.h(ui_1["default"], { config: config, onBannerConfirm: this.onBannerConfirm, onBannerCancelled: this.onBannerCancelled })), this.rootContainer.element);
    };
    DDLManager.prototype.loadDDLConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, config_1.loadConfig(this.context)];
                    case 1:
                        _a.platformConfig = _c.sent();
                        _b = this;
                        return [4 /*yield*/, api_1.fetchDDLConfig(this.context)];
                    case 2:
                        _b.config = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DDLManager;
}());
exports["default"] = DDLManager;


/***/ }),

/***/ "./src/ddl/ui-context.ts":
/*!*******************************!*\
  !*** ./src/ddl/ui-context.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.UIContext = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
exports.UIContext = preact_1.createContext(undefined);


/***/ }),

/***/ "./src/ddl/ui.tsx":
/*!************************!*\
  !*** ./src/ddl/ui.tsx ***!
  \************************/
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
var ddl_banner_1 = __webpack_require__(/*! ./ddl-banner */ "./src/ddl/ddl-banner.tsx");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDimensions = function (_bannerWidth, bannerHeight) {
            var config = _this.props.config;
            var bodyStyle = window.getComputedStyle(document.body, null);
            _this.siteMargin = parseFloat(bodyStyle.getPropertyValue((config === null || config === void 0 ? void 0 : config.position) === core_1.PromptPosition.TOP
                ? 'margin-top'
                : 'margin-bottom'));
            _this.siteTransition = bodyStyle.getPropertyValue('transition');
            if ((config === null || config === void 0 ? void 0 : config.position) === core_1.PromptPosition.BOTTOM) {
                bannerHeight += 20;
            }
            var offset = bannerHeight + _this.siteMargin;
            document.body.style.transition = 'all 0.375s ease 0s';
            document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_1.PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'] = offset + "px";
        };
        _this.onBannerConfirm = function (config) {
            _this.resetBodyStyles();
            _this.props.onBannerConfirm(config);
        };
        _this.onBannerCancelled = function (config) {
            _this.resetBodyStyles();
            _this.props.onBannerCancelled(config);
        };
        return _this;
    }
    Ui.prototype.resetBodyStyles = function () {
        var _a;
        var config = this.props.config;
        document.body.style.transition = (_a = this.siteTransition) !== null && _a !== void 0 ? _a : '';
        document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_1.PromptPosition.TOP
            ? 'marginTop'
            : 'marginBottom'] = this.siteMargin ? this.siteMargin + "px" : '';
    };
    Ui.prototype.renderBanner = function () { };
    Ui.prototype.render = function () {
        if (!this.props.config) {
            return null;
        }
        return compat_1.createPortal(preact_1.h(ddl_banner_1.DDLBanner, { config: this.props.config, onConfirm: this.onBannerConfirm, onCancel: this.onBannerCancelled, dimensions: this.onDimensions }), document.body);
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


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
var manager_1 = __importDefault(__webpack_require__(/*! ./ddl/manager */ "./src/ddl/manager.tsx"));
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
                console.info('DDLManager: DDL feature support only available on mobile devices, aborting.');
                return;
            }
            this.ddlManager = new manager_1["default"](this, this.context, this.rootFrame);
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
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(" + uiContext.platformConfig.iconUrl + ")" });
            return (preact_1.h("div", { style: containerStyle, className: classes },
                preact_1.h("div", { style: iconStyle, className: "kumulos-" + config.type + "-icon" }),
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
var _a;
exports.__esModule = true;
exports.PromptManager = void 0;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ui.tsx"));
var triggers_1 = __webpack_require__(/*! ./triggers */ "./src/prompts/triggers.ts");
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/prompts/ui-context.ts");
var config_1 = __webpack_require__(/*! ../core/config */ "./src/core/config.ts");
var REMINDER_TIME_UNIT_TO_MILLIS = (_a = {},
    _a[core_1.ReminderTimeUnit.HOURS] = 1000 * 60 * 60,
    _a[core_1.ReminderTimeUnit.DAYS] = 1000 * 60 * 60 * 24,
    _a);
// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready
var PromptManager = /** @class */ (function () {
    function PromptManager(client, ctx, rootFrame) {
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
                            //if (prompt.feature === SDKFeature.PUSH) {
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
            _this.maybePersistReminder(prompt);
            _this.hidePrompt(prompt);
        };
        this.prompts = {};
        this.eventQueue = [];
        this.activePrompts = [];
        this.channels = [];
        this.rootContainer = rootFrame.createContainer('push');
        this.kumulosClient = client;
        this.context = ctx;
        ctx.subscribe('eventTracked', this.onEventTracked);
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
            preact_1.h(ui_1["default"], { ref: function (r) { return (_this.ui = r); }, prompts: this.activePrompts, subscriptionState: this.subscriptionState, promptManagerState: this.state, onPromptAccepted: this.onPromptAccepted, onPromptDeclined: this.onPromptDeclined, onPostActionConfirm: this.onPostActionConfirm, currentlyRequestingPrompt: this.currentlyRequestingPrompt, currentPostAction: this.currentPostAction })), this.rootContainer.element);
    };
    PromptManager.prototype.evaluateTriggers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var matchedPrompts, _a, _b, _i, id, prompt_1, i, event_1, promptSuppressed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        matchedPrompts = [];
                        _a = [];
                        for (_b in this.prompts)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        id = _a[_i];
                        prompt_1 = this.prompts[id];
                        i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(i < this.eventQueue.length)) return [3 /*break*/, 5];
                        event_1 = this.eventQueue[i];
                        return [4 /*yield*/, this.isPromptSuppressed(prompt_1)];
                    case 3:
                        promptSuppressed = _c.sent();
                        if (!promptSuppressed &&
                            triggers_1.triggerMatched(prompt_1, event_1) &&
                            this.promptActionNeedsTaken(prompt_1)) {
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
                        this.activatePrompts(matchedPrompts);
                        this.eventQueue = [];
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
    PromptManager.prototype.maybePersistReminder = function (prompt) {
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
    };
    PromptManager.prototype.hidePrompt = function (prompt) {
        var idx = this.activePrompts.indexOf(prompt);
        this.activePrompts.splice(idx, 1);
        this.render();
    };
    PromptManager.prototype.isPromptSuppressed = function (prompt) {
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
                        return [2 /*return*/, !this.hasPromptReminderElapsed(reminder.declinedOn, uiActions.decline.delay)];
                }
            });
        });
    };
    PromptManager.prototype.hasPromptReminderElapsed = function (declinedOnMillis, delayConfig) {
        return (Date.now() - declinedOnMillis >
            REMINDER_TIME_UNIT_TO_MILLIS[delayConfig.timeUnit] *
                delayConfig.duration);
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
                        return [4 /*yield*/, config_1.loadConfig(this.context)];
                    case 1:
                        _c.platformConfig = _g.sent();
                        if (null === this.platformConfig) {
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

/***/ "./src/prompts/triggers.ts":
/*!*********************************!*\
  !*** ./src/prompts/triggers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.triggerMatched = void 0;
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
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
        if (prompt.feature !== core_1.SDKFeature.PUSH) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9rdW11bG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2t1bXVsb3MvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvY2hhbm5lbHMudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9jb3JlL3B1c2gvc2FmYXJpLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9wdXNoL3czYy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvcm9vdC1mcmFtZS50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2NvcmUvc3RvcmFnZS9pZGIta2V5dmFsLnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS9zdG9yYWdlL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2RkbC9hcGkudHMiLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9kZGwvZGRsLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9kZGwvZGVlcGxpbmstYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2RkbC9tYW5hZ2VyLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2RkbC91aS1jb250ZXh0LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvZGRsL3VpLnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy9iZWxsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGlhbG9nL2NoYW5uZWxzLWRpYWxvZy50c3giLCJ3ZWJwYWNrOi8va3VtdWxvcy8uL3NyYy9wcm9tcHRzL2RpYWxvZy9jaGFubmVscy1saXN0LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvZGlhbG9nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvaW5kZXgudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvcHJvbXB0cy90cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWktY29udGV4dC50cyIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3Byb21wdHMvdWkudHN4Iiwid2VicGFjazovL2t1bXVsb3MvLi9zcmMvc3R5bGVzLnNjc3M/MzdmZiIsIndlYnBhY2s6Ly9rdW11bG9zLy4vc3JjL3dvcmtlci9tZXNzYWdpbmcudHMiXSwi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QyxpQkFBUTtZQUNKLGNBQWM7WUFDZixXQUFDLGdDQUFjLElBQ1gsTUFBTSxFQUFFLGlCQUFpQixFQUN6QixTQUFTLEVBQUUsMkJBQWlCO29CQUN4QixLQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMxQix5QkFBeUIsRUFDekIsaUJBQWlCLENBQ3BCLENBQUM7Z0JBQ04sQ0FBQyxHQUNILENBQ0ssQ0FDZCxDQUFDO0lBQ04sQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLENBbkwrQixrQkFBUyxHQW1MeEM7Ozs7Ozs7Ozs7Ozs7QUM5WUQsY0FBYyxtQkFBTyxDQUFDLHFNQUFnRztBQUN0SDs7QUFFQTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLElBQVksaUJBRVg7QUFGRCxXQUFZLGlCQUFpQjtJQUN6QixvREFBK0I7QUFDbkMsQ0FBQyxFQUZXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRTVCO0FBTUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBUztJQUM1QyxPQUFPLENBQ0YsSUFBc0IsQ0FBQyxJQUFJLEtBQUssU0FBUztRQUMxQyxpQkFBaUIsQ0FBRSxJQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FDaEUsQ0FBQztBQUNOLENBQUM7QUFMRCx3REFLQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImt1bXVsb3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia3VtdWxvc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiFcbiAqIGNsaXBib2FyZC5qcyB2Mi4wLjhcbiAqIGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xuICpcbiAqIExpY2Vuc2VkIE1JVCDCqSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gMTM0OlxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIGNsaXBib2FyZDsgfVxufSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzXG52YXIgdGlueV9lbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzkpO1xudmFyIHRpbnlfZW1pdHRlcl9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubih0aW55X2VtaXR0ZXIpO1xuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanNcbnZhciBsaXN0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3MCk7XG52YXIgbGlzdGVuX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGxpc3Rlbik7XG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3NlbGVjdC9zcmMvc2VsZWN0LmpzXG52YXIgc3JjX3NlbGVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oODE3KTtcbnZhciBzZWxlY3RfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oc3JjX3NlbGVjdCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY2xpcGJvYXJkLWFjdGlvbi5qc1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuLyoqXG4gKiBJbm5lciBjbGFzcyB3aGljaCBwZXJmb3JtcyBzZWxlY3Rpb24gZnJvbSBlaXRoZXIgYHRleHRgIG9yIGB0YXJnZXRgXG4gKiBwcm9wZXJ0aWVzIGFuZCB0aGVuIGV4ZWN1dGVzIGNvcHkgb3IgY3V0IG9wZXJhdGlvbnMuXG4gKi9cblxudmFyIENsaXBib2FyZEFjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgIHRoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5pbml0U2VsZWN0aW9uKCk7XG4gIH1cbiAgLyoqXG4gICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAga2V5OiBcInJlc29sdmVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICB0aGlzLmVtaXR0ZXIgPSBvcHRpb25zLmVtaXR0ZXI7XG4gICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgdGhpcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyO1xuICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjaWRlcyB3aGljaCBzZWxlY3Rpb24gc3RyYXRlZ3kgaXMgZ29pbmcgdG8gYmUgYXBwbGllZCBiYXNlZFxuICAgICAqIG9uIHRoZSBleGlzdGVuY2Ugb2YgYHRleHRgIGFuZCBgdGFyZ2V0YCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5pdFNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0aGlzLnNlbGVjdEZha2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUYXJnZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGZha2UgdGV4dGFyZWEgZWxlbWVudCwgc2V0cyBpdHMgdmFsdWUgZnJvbSBgdGV4dGAgcHJvcGVydHksXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVGYWtlRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVGYWtlRWxlbWVudCgpIHtcbiAgICAgIHZhciBpc1JUTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcbiAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG5cbiAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7IC8vIFJlc2V0IGJveCBtb2RlbFxuXG4gICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnOyAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcblxuICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7IC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG5cbiAgICAgIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUudG9wID0gXCJcIi5jb25jYXQoeVBvc2l0aW9uLCBcInB4XCIpO1xuICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgdGhpcy5mYWtlRWxlbS52YWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgIHJldHVybiB0aGlzLmZha2VFbGVtO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQncyB0aGUgdmFsdWUgb2YgZmFrZUVsZW0sXG4gICAgICogYW5kIG1ha2VzIGEgc2VsZWN0aW9uIG9uIGl0LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0RmFrZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGZha2VFbGVtID0gdGhpcy5jcmVhdGVGYWtlRWxlbWVudCgpO1xuXG4gICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmZha2VIYW5kbGVyID0gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spIHx8IHRydWU7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWtlRWxlbSk7XG4gICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkoZmFrZUVsZW0pO1xuICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVtb3ZlcyB0aGUgZmFrZSBlbGVtZW50IGFmdGVyIGFub3RoZXIgY2xpY2sgZXZlbnQsIHRoYXQgd2F5XG4gICAgICogYSB1c2VyIGNhbiBoaXQgYEN0cmwrQ2AgdG8gY29weSBiZWNhdXNlIHNlbGVjdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVGYWtlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZha2UoKSB7XG4gICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mYWtlRWxlbSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZha2VFbGVtKTtcbiAgICAgICAgdGhpcy5mYWtlRWxlbSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIGNvbnRlbnQgZnJvbSBlbGVtZW50IHBhc3NlZCBvbiBgdGFyZ2V0YCBwcm9wZXJ0eS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFRhcmdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkodGhpcy50YXJnZXQpO1xuICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgY29weSBvcGVyYXRpb24gYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29weVRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29weVRleHQoKSB7XG4gICAgICB2YXIgc3VjY2VlZGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzdWNjZWVkZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVJlc3VsdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZXN1bHQoc3VjY2VlZGVkKSB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBmb2N1cyBhd2F5IGZyb20gYHRhcmdldGAgYW5kIGJhY2sgdG8gdGhlIHRyaWdnZXIsIHJlbW92ZXMgY3VycmVudCBzZWxlY3Rpb24uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBgYWN0aW9uYCB0byBiZSBwZXJmb3JtZWQgd2hpY2ggY2FuIGJlIGVpdGhlciAnY29weScgb3IgJ2N1dCcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnJlbW92ZUZha2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aW9uXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnY29weSc7XG4gICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgIGlmICh0aGlzLl9hY3Rpb24gIT09ICdjb3B5JyAmJiB0aGlzLl9hY3Rpb24gIT09ICdjdXQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYGFjdGlvbmAgcHJvcGVydHkuXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgICxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5IHVzaW5nIGFuIGVsZW1lbnRcbiAgICAgKiB0aGF0IHdpbGwgYmUgaGF2ZSBpdHMgY29udGVudCBjb3BpZWQuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRhcmdldFwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgX3R5cGVvZih0YXJnZXQpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjb3B5JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiB2YWx1ZSwgdXNlIGEgdmFsaWQgRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5LlxuICAgICAqIEByZXR1cm4ge1N0cmluZ3xIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICAsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG59KCk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNsaXBib2FyZF9hY3Rpb24gPSAoQ2xpcGJvYXJkQWN0aW9uKTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jbGlwYm9hcmQuanNcbmZ1bmN0aW9uIGNsaXBib2FyZF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IGNsaXBib2FyZF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgY2xpcGJvYXJkX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBjbGlwYm9hcmRfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gY2xpcGJvYXJkX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gY2xpcGJvYXJkX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBjbGlwYm9hcmRfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBjbGlwYm9hcmRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGNsaXBib2FyZF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChjbGlwYm9hcmRfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuXG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gIHZhciBhdHRyaWJ1dGUgPSBcImRhdGEtY2xpcGJvYXJkLVwiLmNvbmNhdChzdWZmaXgpO1xuXG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIHdoaWNoIHRha2VzIG9uZSBvciBtb3JlIGVsZW1lbnRzLCBhZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGVtLFxuICogYW5kIGluc3RhbnRpYXRlcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrLlxuICovXG5cblxudmFyIENsaXBib2FyZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ2xpcGJvYXJkKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgY2xpcGJvYXJkX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgX3RoaXMucmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG5cblxuICBjbGlwYm9hcmRfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgIGtleTogXCJyZXNvbHZlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBvcHRpb25zLnRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGFyZ2V0IDogdGhpcy5kZWZhdWx0VGFyZ2V0O1xuICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNsaXBib2FyZF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXNzZWQgdHJpZ2dlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdGVuQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5fZGVmYXVsdCgpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2sgZXZlbnQuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbmV3IGNsaXBib2FyZF9hY3Rpb24oe1xuICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uKHRyaWdnZXIpLFxuICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQodHJpZ2dlciksXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgIGVtaXR0ZXI6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGBhY3Rpb25gIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRBY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdEFjdGlvbih0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGB0YXJnZXRgIGxvb2t1cCBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRUYXJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRhcmdldCh0cmlnZ2VyKSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1cHBvcnQgb2YgdGhlIGdpdmVuIGFjdGlvbiwgb3IgYWxsIGFjdGlvbnMgaWYgbm8gYWN0aW9uIGlzXG4gICAgICogZ2l2ZW4uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthY3Rpb25dXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0VGV4dFwiLFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBgdGV4dGAgbG9va3VwIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImlzU3VwcG9ydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xuICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgdmFyIHN1cHBvcnQgPSAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtcbiAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN1cHBvcnQgPSBzdXBwb3J0ICYmICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKGFjdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbGlwYm9hcmQ7XG59KCh0aW55X2VtaXR0ZXJfZGVmYXVsdCgpKSk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNsaXBib2FyZCA9IChDbGlwYm9hcmQpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gODI4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG52YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDQzODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oODI4KTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA4Nzk6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAzNzA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NzkpO1xudmFyIGRlbGVnYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MzgpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gODE3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xuICAgIHZhciBzZWxlY3RlZFRleHQ7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAyNzk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbmZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xubW9kdWxlLmV4cG9ydHMuVGlueUVtaXR0ZXIgPSBFO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH1cbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNCk7XG4vKioqKioqLyB9KSgpXG4uZGVmYXVsdDtcbn0pOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsXFxuICA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApOyB9XFxuICAyMCUsXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7IH1cXG4gIDMwJSxcXG4gIDUwJSxcXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7IH1cXG4gIDQwJSxcXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtdG9hc3QtaW4tb3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlLCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLCAwLCAwKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLCAwLCAwKTsgfSB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07IH1cXG4gIC5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtOHB4OyB9XFxuICAua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gICAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7IH1cXG4gICAgLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjIyO1xcbiAgICAgIHJpZ2h0OiAxMDAlOyB9XFxuICAua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgICByaWdodDogY2FsYygxMDAlICsgMTJweCk7XFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTsgfVxcbiAgICAua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgICAgIGxlZnQ6IDEwMCU7IH1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpOyB9XFxuXFxuLmt1bXVsb3MtcHJvbXB0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAua3VtdWxvcy1wcm9tcHQgKixcXG4gIC5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4gIC5rdW11bG9zLXByb21wdCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogIzU1NTsgfVxcbiAgLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTsgfVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICMyMjI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyB9XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWZsb3c6IHdyYXA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlOyB9XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdG9wOiB1bnNldDtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsOyB9IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTsgfVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4OyB9XFxuICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwIDAgM3B4IDA7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDsgfSB9XFxuXFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfSB9XFxuXFxuLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7IH0gfVxcblxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLXJhdGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDAsIDAuOCk7IH1cXG5cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gIC5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICBsZWZ0OiAxNXB4OyB9XFxuICAua3VtdWxvcy1iZWxsLWNvbnRhaW5lci1ib3R0b20tcmlnaHQge1xcbiAgICBib3R0b206IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4OyB9XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAua3VtdWxvcy1iZWxsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cXG4gIC5rdW11bG9zLWJlbGw6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cXG4gIC5rdW11bG9zLWJlbGwgc3ZnIHtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XFxuICAua3VtdWxvcy1iZWxsOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IDcuNSUgMCAwIDcuNSU7IH1cXG5cXG4ua3VtdWxvcy1iZWxsLWlubmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbiAgLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gICAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuICAgIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDsgfVxcbiAgICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyLFxcbiAgICAua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgdG9wOiAxMjBweDsgfSB9XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gIG9yZGVyOiAyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcmRlcjogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyIGgxLFxcbiAgLmt1bXVsb3MtYWxlcnQtaGVhZGVyIGgxIHtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDA7IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgZmxleDogMTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IGF1dG87IH1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbmJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXJcXG4+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpOyB9XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1ibHVyID4gKjpub3QoLmt1bXVsb3Mtb3ZlcmxheSkge1xcbiAgZmlsdGVyOiBibHVyKDNweCk7IH1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwOyB9XFxuICAua3VtdWxvcy1vdmVybGF5ICosXFxuICAua3VtdWxvcy1vdmVybGF5ICo6YmVmb3JlLFxcbiAgLmt1bXVsb3Mtb3ZlcmxheSAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcbiAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4OyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICAgICAgbWF4LXdpZHRoOiA2NjBweDsgfVxcbiAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMzglO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgKiB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gICAgICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgICAgIHN0cm9rZTogbm9uZTtcXG4gICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgZmxleC1zaHJpbms6IDA7IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBpbWcge1xcbiAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICBmbGV4LXNocmluazogMDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzLFxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHAsXFxuICAgIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICAgICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyB7XFxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVlbTsgfVxcbiAgICAua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLW92ZXJsYXktY29udGVudCBwIHtcXG4gICAgICBtYXJnaW46IDAuNWVtIDA7IH1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWNocm9tZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogNDQwcHg7IH1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjc1cHg7IH1cXG4gIC5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICAgIG9yZGVyOiAxO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpOyB9XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxZW0gMTFweCAxMnB4IDEzcHg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tpXSk7XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgZix1c2VEZWJ1Z1ZhbHVlIGFzIGN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBwLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIGQsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpTKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBTKHRoaXMucHJvcHMsbil8fFModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1DKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cChwKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9wKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXAobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRChuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBGKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGY9ITA9PT10Ll9faDtyLl9fdSsrfHxmfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Qyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgTT1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBUKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gaihuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtkKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLGQocyhULHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIEkobix0KXtyZXR1cm4gcyhqLHtfX3Y6bixpOnR9KX0oRi5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksTSh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LEYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1wKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxGLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Ri5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7TShuLGUsdCl9KX07dmFyIFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24geihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxkKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD0kLG4ubmF0aXZlRXZlbnQ9bn07dmFyIHEsRz17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSj1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe2Zvcih2YXIgdSBpbiByPXt9LGUpe3ZhciBvPWVbdV07XCJ2YWx1ZVwiPT09dSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PW98fChcImRlZmF1bHRWYWx1ZVwiPT09dSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT91PVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT11JiYhMD09PW8/bz1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdCh1KT91PVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdCh1K3QpJiYhVihlLnR5cGUpP3U9XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KHUpP3U9dS50b0xvd2VyQ2FzZSgpOlAudGVzdCh1KT91PXUucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PW8mJihvPXZvaWQgMCksclt1XT1vKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1wKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1wKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEcuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsRykpLG4uJCR0eXBlb2Y9VyxKJiZKKG4pfTt2YXIgSz1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtLJiZLKG4pLHE9bi5fX2N9O3ZhciBRPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gcS5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxYPTEsbm49Mix0bj0zLGVuPTQscm49NTtmdW5jdGlvbiB1bihuLHQpe3JldHVybiB0KCl9dmFyIG9uPVwib2JqZWN0XCI9PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdy5iaW5kKHBlcmZvcm1hbmNlKTpmdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpfSxsbj1cIjE2LjguMFwiO2Z1bmN0aW9uIGZuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBjbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1XfWZ1bmN0aW9uIGFuKG4pe3JldHVybiBjbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHNuKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIGhuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIHBuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE2LjguMFwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6c24sY3JlYXRlUG9ydGFsOkksY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OmZuLGNsb25lRWxlbWVudDphbixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmNuLGZpbmRET01Ob2RlOmhuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnBuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpGLGxhenk6RCxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpRfTtleHBvcnR7bG4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxzbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLEkgYXMgY3JlYXRlUG9ydGFsLGZuIGFzIGNyZWF0ZUZhY3RvcnksYW4gYXMgY2xvbmVFbGVtZW50LGNuIGFzIGlzVmFsaWRFbGVtZW50LGhuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLHBuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHZuIGFzIFN0cmljdE1vZGUsTCBhcyBTdXNwZW5zZSxGIGFzIFN1c3BlbnNlTGlzdCxEIGFzIGxhenksUSBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxYIGFzIHVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LG5uIGFzIHVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LHRuIGFzIHVuc3RhYmxlX05vcm1hbFByaW9yaXR5LGVuIGFzIHVuc3RhYmxlX0xvd1ByaW9yaXR5LHJuIGFzIHVuc3RhYmxlX0lkbGVQcmlvcml0eSx1biBhcyB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHksb24gYXMgdW5zdGFibGVfbm93fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsaSx0LG8scj17fSxmPVtdLGU9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBjKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIHMobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gYShuLGwsdSl7dmFyIGksdCxvLHI9YXJndW1lbnRzLGY9e307Zm9yKG8gaW4gbClcImtleVwiPT1vP2k9bFtvXTpcInJlZlwiPT1vP3Q9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7aWYobnVsbCE9dSYmKGYuY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bi5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB2KG4sZixpLHQsbnVsbCl9ZnVuY3Rpb24gdihsLHUsaSx0LG8pe3ZhciByPXt0eXBlOmwscHJvcHM6dSxrZXk6aSxyZWY6dCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrbi5fX3Y6b307cmV0dXJuIG51bGwhPW4udm5vZGUmJm4udm5vZGUocikscn1mdW5jdGlvbiBoKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24geShuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBwKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGQobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2Qobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ZChuKTpudWxsfWZ1bmN0aW9uIF8obil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBfKG4pfX1mdW5jdGlvbiBrKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJnUucHVzaChsKSYmIWIuX19yKyt8fHQhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKCh0PW4uZGVib3VuY2VSZW5kZXJpbmcpfHxpKShiKX1mdW5jdGlvbiBiKCl7Zm9yKHZhciBuO2IuX19yPXUubGVuZ3RoOyluPXUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdT1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPWMoe30sdCkpLl9fdj10Ll9fdisxLEkocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP2QodCk6byx0Ll9faCksVCh1LHQpLHQuX19lIT1vJiZfKHQpKSl9KX1mdW5jdGlvbiBtKG4sbCx1LGksdCxvLGUsYyxzLGEpe3ZhciBoLHAsXyxrLGIsbSx3LEE9aSYmaS5fX2t8fGYsUD1BLmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShrPXUuX19rW2hdPW51bGw9PShrPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIGs/bnVsbDpcInN0cmluZ1wiPT10eXBlb2Yga3x8XCJudW1iZXJcIj09dHlwZW9mIGt8fFwiYmlnaW50XCI9PXR5cGVvZiBrP3YobnVsbCxrLG51bGwsbnVsbCxrKTpBcnJheS5pc0FycmF5KGspP3YoeSx7Y2hpbGRyZW46a30sbnVsbCxudWxsLG51bGwpOmsuX19iPjA/dihrLnR5cGUsay5wcm9wcyxrLmtleSxudWxsLGsuX192KTprKSl7aWYoay5fXz11LGsuX19iPXUuX19iKzEsbnVsbD09PShfPUFbaF0pfHxfJiZrLmtleT09Xy5rZXkmJmsudHlwZT09PV8udHlwZSlBW2hdPXZvaWQgMDtlbHNlIGZvcihwPTA7cDxQO3ArKyl7aWYoKF89QVtwXSkmJmsua2V5PT1fLmtleSYmay50eXBlPT09Xy50eXBlKXtBW3BdPXZvaWQgMDticmVha31fPW51bGx9SShuLGssXz1ffHxyLHQsbyxlLGMscyxhKSxiPWsuX19lLChwPWsucmVmKSYmXy5yZWYhPXAmJih3fHwodz1bXSksXy5yZWYmJncucHVzaChfLnJlZixudWxsLGspLHcucHVzaChwLGsuX19jfHxiLGspKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBrLnR5cGUmJm51bGwhPWsuX19rJiZrLl9faz09PV8uX19rP2suX19kPXM9ZyhrLHMsbik6cz14KG4sayxfLEEsYixzKSxhfHxcIm9wdGlvblwiIT09dS50eXBlP1wiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpOm4udmFsdWU9XCJcIik6cyYmXy5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ZChfKSl9Zm9yKHUuX19lPW0saD1QO2gtLTspbnVsbCE9QVtoXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9QVtoXS5fX2UmJkFbaF0uX19lPT11Ll9fZCYmKHUuX19kPWQoaSxoKzEpKSxMKEFbaF0sQVtoXSkpO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKyl6KHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gZyhuLGwsdSl7dmFyIGksdDtmb3IoaT0wO2k8bi5fX2subGVuZ3RoO2krKykodD1uLl9fa1tpXSkmJih0Ll9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnR5cGU/Zyh0LGwsdSk6eCh1LHQsdCxuLl9fayx0Ll9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gdyhuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3cobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiB4KG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEEobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEMobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxDKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gUChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8ZS50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8UChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHxQKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9IOiQsbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9IOiQsbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gJChsKXt0aGlzLmxbbC50eXBlKyExXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gSChsKXt0aGlzLmxbbC50eXBlKyEwXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gSShsLHUsaSx0LG8scixmLGUscyl7dmFyIGEsdixoLGQsXyxrLGIsZyx3LHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYocz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChhPW4uX19iKSYmYSh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihnPXUucHJvcHMsdz0oYT1QLmNvbnRleHRUeXBlKSYmdFthLl9fY10seD1hP3c/dy5wcm9wcy52YWx1ZTphLl9fOnQsaS5fX2M/Yj0odj11Ll9fYz1pLl9fYykuX189di5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9dj1uZXcgUChnLHgpOih1Ll9fYz12PW5ldyBwKGcseCksdi5jb25zdHJ1Y3Rvcj1QLHYucmVuZGVyPU0pLHcmJncuc3ViKHYpLHYucHJvcHM9Zyx2LnN0YXRlfHwodi5zdGF0ZT17fSksdi5jb250ZXh0PXgsdi5fX249dCxoPXYuX19kPSEwLHYuX19oPVtdKSxudWxsPT12Ll9fcyYmKHYuX19zPXYuc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYodi5fX3M9PXYuc3RhdGUmJih2Ll9fcz1jKHt9LHYuX19zKSksYyh2Ll9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhnLHYuX19zKSkpLGQ9di5wcm9wcyxfPXYuc3RhdGUsaCludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9di5jb21wb25lbnRXaWxsTW91bnQmJnYuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9di5jb21wb25lbnREaWRNb3VudCYmdi5fX2gucHVzaCh2LmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZnIT09ZCYmbnVsbCE9di5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZ2LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoZyx4KSwhdi5fX2UmJm51bGwhPXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlKGcsdi5fX3MseCl8fHUuX192PT09aS5fX3Ype3YucHJvcHM9Zyx2LnN0YXRlPXYuX19zLHUuX192IT09aS5fX3YmJih2Ll9fZD0hMSksdi5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksdi5fX2gubGVuZ3RoJiZmLnB1c2godik7YnJlYWsgbn1udWxsIT12LmNvbXBvbmVudFdpbGxVcGRhdGUmJnYuY29tcG9uZW50V2lsbFVwZGF0ZShnLHYuX19zLHgpLG51bGwhPXYuY29tcG9uZW50RGlkVXBkYXRlJiZ2Ll9faC5wdXNoKGZ1bmN0aW9uKCl7di5jb21wb25lbnREaWRVcGRhdGUoZCxfLGspfSl9di5jb250ZXh0PXgsdi5wcm9wcz1nLHYuc3RhdGU9di5fX3MsKGE9bi5fX3IpJiZhKHUpLHYuX19kPSExLHYuX192PXUsdi5fX1A9bCxhPXYucmVuZGVyKHYucHJvcHMsdi5zdGF0ZSx2LmNvbnRleHQpLHYuc3RhdGU9di5fX3MsbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJih0PWMoYyh7fSx0KSx2LmdldENoaWxkQ29udGV4dCgpKSksaHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShkLF8pKSxBPW51bGwhPWEmJmEudHlwZT09PXkmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxtKGwsQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxvLHIsZixlLHMpLHYuYmFzZT11Ll9fZSx1Ll9faD1udWxsLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLGImJih2Ll9fRT12Ll9fPW51bGwpLHYuX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPWooaS5fX2UsdSxpLHQsbyxyLGYscyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe3UuX192PW51bGwsKHN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIXMscltyLmluZGV4T2YoZSldPW51bGwpLG4uX19lKGwsdSxpKX19ZnVuY3Rpb24gVChsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gaihuLGwsdSxpLHQsbyxlLGMpe3ZhciBhLHYsaCx5LHA9dS5wcm9wcyxkPWwucHJvcHMsXz1sLnR5cGUsaz0wO2lmKFwic3ZnXCI9PT1fJiYodD0hMCksbnVsbCE9bylmb3IoO2s8by5sZW5ndGg7aysrKWlmKChhPW9ba10pJiYoYT09PW58fChfP2EubG9jYWxOYW1lPT1fOjM9PWEubm9kZVR5cGUpKSl7bj1hLG9ba109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09XylyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXyk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfLGQuaXMmJmQpLG89bnVsbCxjPSExfWlmKG51bGw9PT1fKXA9PT1kfHxjJiZuLmRhdGE9PT1kfHwobi5kYXRhPWQpO2Vsc2V7aWYobz1vJiZmLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSx2PShwPXUucHJvcHN8fHIpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IocD17fSx5PTA7eTxuLmF0dHJpYnV0ZXMubGVuZ3RoO3krKylwW24uYXR0cmlidXRlc1t5XS5uYW1lXT1uLmF0dHJpYnV0ZXNbeV0udmFsdWU7KGh8fHYpJiYoaCYmKHYmJmguX19odG1sPT12Ll9faHRtbHx8aC5fX2h0bWw9PT1uLmlubmVySFRNTCl8fChuLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfWlmKEEobixkLHAsdCxjKSxoKWwuX19rPVtdO2Vsc2UgaWYoaz1sLnByb3BzLmNoaWxkcmVuLG0obixBcnJheS5pc0FycmF5KGspP2s6W2tdLGwsdSxpLHQmJlwiZm9yZWlnbk9iamVjdFwiIT09XyxvLGUsbi5maXJzdENoaWxkLGMpLG51bGwhPW8pZm9yKGs9by5sZW5ndGg7ay0tOyludWxsIT1vW2tdJiZzKG9ba10pO2N8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLnZhbHVlKSYmKGshPT1uLnZhbHVlfHxcInByb2dyZXNzXCI9PT1fJiYhaykmJkMobixcInZhbHVlXCIsayxwLnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShrPWQuY2hlY2tlZCkmJmshPT1uLmNoZWNrZWQmJkMobixcImNoZWNrZWRcIixrLHAuY2hlY2tlZCwhMSkpfXJldHVybiBufWZ1bmN0aW9uIHoobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gTChsLHUsaSl7dmFyIHQsbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fHoodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJkwodFtyXSx1LGkpO251bGwhPW8mJnMobyl9ZnVuY3Rpb24gTShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBOKGwsdSxpKXt2YXIgdCxvLGU7bi5fXyYmbi5fXyhsLHUpLG89KHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dS5fX2ssZT1bXSxJKHUsbD0oIXQmJml8fHUpLl9faz1hKHksbnVsbCxbbF0pLG98fHIscix2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCwhdCYmaT9baV06bz9udWxsOnUuZmlyc3RDaGlsZD9mLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKTpudWxsLGUsIXQmJmk/aTpvP28uX19lOnUuZmlyc3RDaGlsZCx0KSxUKGUsbCl9ZnVuY3Rpb24gTyhuLGwpe04obixsLE8pfWZ1bmN0aW9uIFMobixsLHUpe3ZhciBpLHQsbyxyPWFyZ3VtZW50cyxmPWMoe30sbi5wcm9wcyk7Zm9yKG8gaW4gbClcImtleVwiPT1vP2k9bFtvXTpcInJlZlwiPT1vP3Q9bFtvXTpmW29dPWxbb107aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxvPTM7bzxhcmd1bWVudHMubGVuZ3RoO28rKyl1LnB1c2gocltvXSk7cmV0dXJuIG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLHYobi50eXBlLGYsaXx8bi5rZXksdHx8bi5yZWYsbnVsbCl9ZnVuY3Rpb24gcShuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitvKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShrKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn0sX192OjB9LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHAucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihjKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZjKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGsodGhpcykpfSxwLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksayh0aGlzKSl9LHAucHJvdG90eXBlLnJlbmRlcj15LHU9W10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxiLl9fcj0wLG89MDtleHBvcnR7TiBhcyByZW5kZXIsTyBhcyBoeWRyYXRlLGEgYXMgY3JlYXRlRWxlbWVudCxhIGFzIGgseSBhcyBGcmFnbWVudCxoIGFzIGNyZWF0ZVJlZixsIGFzIGlzVmFsaWRFbGVtZW50LHAgYXMgQ29tcG9uZW50LFMgYXMgY2xvbmVFbGVtZW50LHEgYXMgY3JlYXRlQ29udGV4dCx3IGFzIHRvQ2hpbGRBcnJheSxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uX19jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PXZvaWQgMH0sbi5fX2M9ZnVuY3Rpb24odCx1KXt1LnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goZyksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxqKG4pfSl9Y2F0Y2gocil7dS5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdT1bXSxuLl9fZShyLHQuX192KX19KSxhJiZhKHQsdSl9LG4udW5tb3VudD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciB1PXQuX19jO2lmKHUmJnUuX19IKXRyeXt1Ll9fSC5fXy5mb3JFYWNoKGcpfWNhdGNoKHQpe24uX19lKHQsdS5fX3YpfX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgeyBDb250ZXh0LCBQVVNIX0JBU0VfVVJMLCBQcm9wc09iamVjdCwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBhdXRoZWRGZXRjaCwgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBzdWJzY3JpYmVkOiBCb29sZWFuO1xuICAgIG1ldGE/OiBQcm9wc09iamVjdCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFNwZWMge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgbWV0YT86IFByb3BzT2JqZWN0IHwgbnVsbDtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHNob3dJblBvcnRhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IEh0dHBNZXRob2QsXG4gICAgICAgIHV1aWRzOiBzdHJpbmdbXVxuICAgICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke1BVU0hfQkFTRV9VUkx9L3YxL2FwcC1pbnN0YWxscy8ke2luc3RhbGxJZH0vY2hhbm5lbHMvc3Vic2NyaXB0aW9uc2A7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdXVpZHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaCh0aGlzLmNvbnRleHQsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIGNoYW5uZWxzIGdpdmVuIGJ5IHVuaXF1ZSBJRFxuICAgICAqL1xuICAgIHN1YnNjcmliZSh1dWlkczogc3RyaW5nW10pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KCdQT1NUJywgdXVpZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlcyBmcm9tIHRoZSBjaGFubmVscyBnaXZlbiBieSB1bmlxdWUgSURcbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZSh1dWlkczogc3RyaW5nW10pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KCdERUxFVEUnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBpbnN0YWxsYXRpb25zIGNoYW5uZWwgc3Vic2NyaXB0aW9ucyB0byB0aG9zZSBnaXZlbiBieSB1bmlxdWUgSUQuXG4gICAgICpcbiAgICAgKiBBbnkgb3RoZXIgc3Vic2NyaXB0aW9ucyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgICovXG4gICAgc2V0U3Vic2NyaXB0aW9ucyh1dWlkczogc3RyaW5nW10pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KCdQVVQnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvZiB0aGUgZXhpc3RpbmcgaW5zdGFsbGF0aW9uJ3MgY2hhbm5lbCBzdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgY2xlYXJTdWJzY3JpcHRpb25zKCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3Vic2NyaXB0aW9ucyhbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdHMgdGhlIGNoYW5uZWxzIGF2YWlsYWJsZSB0byB0aGlzIGluc3RhbGxhdGlvbiBhbG9uZyB3aXRoIHN1YnNjcmlwdGlvbiBzdGF0dXNcbiAgICAgKi9cbiAgICBsaXN0Q2hhbm5lbHMoKTogUHJvbWlzZTxDaGFubmVsW10+IHtcbiAgICAgICAgcmV0dXJuIGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke1BVU0hfQkFTRV9VUkx9L3YxL2FwcC1pbnN0YWxscy8ke2luc3RhbGxJZH0vY2hhbm5lbHNgO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoSnNvbjxDaGFubmVsW10+KHRoaXMuY29udGV4dCwgdXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHB1c2ggY2hhbm5lbCBhbmQgb3B0aW9uYWxseSBzdWJzY3JpYmVzIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbi5cbiAgICAgKlxuICAgICAqIE5hbWUgaXMgb3B0aW9uYWwsIGJ1dCByZXF1aXJlZCBpZiBzaG93SW5Qb3J0YWwgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBjcmVhdGVDaGFubmVsKGNoYW5uZWxTcGVjOiBDaGFubmVsU3BlYyk6IFByb21pc2U8Q2hhbm5lbD4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaGFubmVsU3BlYy5zaG93SW5Qb3J0YWwgJiZcbiAgICAgICAgICAgICghY2hhbm5lbFNwZWMubmFtZSB8fCAhY2hhbm5lbFNwZWMubmFtZS5sZW5ndGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICAgICAgICBlcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUgaXMgcmVxdWlyZWQgZm9yIGNoYW5uZWwgY3JlYXRpb24gd2hlbiBzaG93SW5Qb3J0YWwgaXMgdHJ1ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke1BVU0hfQkFTRV9VUkx9L3YxL2NoYW5uZWxzYDtcblxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkOiBjaGFubmVsU3BlYy51dWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGNoYW5uZWxTcGVjLm5hbWUsXG4gICAgICAgICAgICAgICAgc2hvd0luUG9ydGFsOiBCb29sZWFuKGNoYW5uZWxTcGVjLnNob3dJblBvcnRhbCksXG4gICAgICAgICAgICAgICAgbWV0YTogY2hhbm5lbFNwZWMubWV0YSxcbiAgICAgICAgICAgICAgICBpbnN0YWxsSWQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGNoYW5uZWxTcGVjLnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIChwYXJhbXMgYXMgYW55KS5pbnN0YWxsSWQgPSBpbnN0YWxsSWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoSnNvbjxDaGFubmVsPih0aGlzLmNvbnRleHQsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFBVU0hfQkFTRV9VUkwsIFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IGF1dGhlZEZldGNoSnNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZyhjdHg6IENvbnRleHQpOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgbGV0IGNvbmZpZyA9IChhd2FpdCBnZXQ8UGxhdGZvcm1Db25maWc+KCdwbGF0Zm9ybUNvbmZpZycpKSA/PyB7fTtcbiAgICBjb25zdCBNQVhfQUdFX01TID0gMSAqIDYwICogNjAgKiAxMDAwO1xuXG4gICAgY29uc3QgbGFzdExvYWRUaW1lID0gKGF3YWl0IGdldDxudW1iZXI+KCdwbGF0Zm9ybUNvbmZpZ1VwZGF0ZWQnKSkgPz8gMDtcbiAgICBsZXQgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IGZhbHNlO1xuXG4gICAgaWYgKERhdGUubm93KCkgLSBsYXN0TG9hZFRpbWUgPiBNQVhfQUdFX01TKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnQ29uZmlnIG5ldmVyIHN5bmNlZC9zdGFsZSwgc3luY2luZyBub3cuLi4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vdjEvd2ViL2NvbmZpZ2A7XG4gICAgICAgICAgICBjb25maWcgPSBhd2FpdCBhdXRoZWRGZXRjaEpzb248UGxhdGZvcm1Db25maWc+KGN0eCwgdXJsKTtcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVkUmVtb3RlQ29uZmlnKSB7XG4gICAgICAgIGF3YWl0IHNldCgncGxhdGZvcm1Db25maWcnLCBjb25maWcpO1xuICAgICAgICBhd2FpdCBzZXQoJ3BsYXRmb3JtQ29uZmlnVXBkYXRlZCcsIERhdGUubm93KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4vY2hhbm5lbHMnO1xuXG5jb25zdCBTREtfVkVSU0lPTiA9ICcxLjguMCc7XG5jb25zdCBTREtfVFlQRSA9IDEwO1xuY29uc3QgRVZFTlRTX0JBU0VfVVJMID0gJ2h0dHBzOi8vZXZlbnRzLmt1bXVsb3MuY29tJztcbmV4cG9ydCBjb25zdCBQVVNIX0JBU0VfVVJMID0gJ2h0dHBzOi8vcHVzaC5rdW11bG9zLmNvbSc7XG5cbmV4cG9ydCB0eXBlIEluc3RhbGxJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZztcblxudHlwZSBKc29uaXNoID1cbiAgICB8IHN0cmluZ1xuICAgIHwgbnVtYmVyXG4gICAgfCBib29sZWFuXG4gICAgfCBudWxsXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfVxuICAgIHwgeyB0b0pTT046ICgpID0+IGFueSB9XG4gICAgfCBKc29uaXNoW11cbiAgICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUHJvcHNPYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfTtcblxuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICBNRVNTQUdFX0RFTElWRVJFRCA9ICdrLm1lc3NhZ2UuZGVsaXZlcmVkJyxcbiAgICBNRVNTQUdFX09QRU5FRCA9ICdrLm1lc3NhZ2Uub3BlbmVkJyxcbiAgICBQVVNIX1JFR0lTVEVSRUQgPSAnay5wdXNoLmRldmljZVJlZ2lzdGVyZWQnLFxuICAgIElOU1RBTExfVFJBQ0tFRCA9ICdrLnN0YXRzLmluc3RhbGxUcmFja2VkJyxcbiAgICBVU0VSX0FTU09DSUFURUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0aW9uQ2xlYXJlZCcsXG4gICAgUEFHRV9WSUVXRUQgPSAnay5wYWdlVmlld2VkJ1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRUeXBlTmFtZSB7XG4gICAgQkVMTCA9ICdiZWxsJyxcbiAgICBBTEVSVCA9ICdhbGVydCcsXG4gICAgQkFOTkVSID0gJ2Jhbm5lcicsXG4gICAgQ0hBTk5FTCA9ICdjaGFubmVsJ1xufVxuXG4vLyBOb3RlIGR1cGxpY2F0ZSAnaW4nIHZzICdJTicgZHVlIHRvIG1pc2FsaWdubWVudCBpbiBzZXJ2ZXIgY29uZmlnIGFuZCBwdWJsaXNoZWQgZG9jcyBmb3IgbWFudWFsIGNvbmZpZ1xuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3IgPSAnaW4nIHwgJ0lOJyB8ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nO1xuZXhwb3J0IHR5cGUgRmlsdGVyVmFsdWUgPSBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIHwgc3RyaW5nW107XG5leHBvcnQgdHlwZSBQcm9wRmlsdGVyID0gW3N0cmluZywgRmlsdGVyT3BlcmF0b3IsIEZpbHRlclZhbHVlXTtcblxuaW50ZXJmYWNlIFByb21wdFRyaWdnZXIge1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgYWZ0ZXJTZWNvbmRzPzogbnVtYmVyO1xuICAgIGZpbHRlcnM/OiBQcm9wRmlsdGVyW107XG59XG5cbmludGVyZmFjZSBQcm9tcHRPdmVybGF5Q29uZmlnIHtcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGxhYmVsczoge1xuICAgICAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgICAgIGJvZHk6IHN0cmluZztcbiAgICB9O1xuICAgIGxpbmtzPzogeyBsYWJlbDogc3RyaW5nOyB1cmw6IHN0cmluZyB9W107XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHNoYWRlOiBzdHJpbmc7XG4gICAgICAgIHN0cmlwOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWcge1xuICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZyB7XG4gICAgYmc6IHN0cmluZztcbiAgICBmZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25CZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25GZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb25maWcge1xuICAgIGxhYmVsczogQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZztcbiAgICBjb2xvcnM6IENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZyB7XG4gICAgcHJlc2VudGVkVXVpZHM6IHN0cmluZ1tdIHwgJ2FsbCc7XG4gICAgY2hlY2tlZFV1aWRzOiBzdHJpbmdbXSB8ICdub25lJyB8ICdhbGwnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZyc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbiAgICBkaWFsb2dDb25maWc6IENoYW5uZWxEaWFsb2dDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFN1YkFjdGlvbiB7XG4gICAgdHlwZTogJ3N1YnNjcmliZVRvQ2hhbm5lbCc7XG4gICAgY2hhbm5lbFV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVWlBY3Rpb25UeXBlIHtcbiAgICBERUNMSU5FID0gJ2RlY2xpbmUnLFxuICAgIFJFTUlORCA9ICdyZW1pbmQnXG59XG5cbmludGVyZmFjZSBEZWNsaW5lUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuREVDTElORTtcbn1cblxuaW50ZXJmYWNlIFJlbWluZFByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLlJFTUlORDtcbiAgICBkZWxheTogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZztcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0QWN0aW9uID1cbiAgICB8IENoYW5uZWxTdWJBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcblxuZXhwb3J0IGVudW0gUmVtaW5kZXJUaW1lVW5pdCB7XG4gICAgSE9VUlMgPSAnaG91cnMnLFxuICAgIERBWVMgPSAnZGF5cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRpbWVVbml0OiBSZW1pbmRlclRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGRlY2xpbmU6IERlY2xpbmVQcm9tcHRBY3Rpb24gfCBSZW1pbmRQcm9tcHRBY3Rpb247XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTWFza0NvbmZpZyB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0UG9zaXRpb24ge1xuICAgIFRPUF9MRUZUID0gJ3RvcC1sZWZ0JyxcbiAgICBUT1BfQ0VOVEVSID0gJ3RvcC1jZW50ZXInLFxuICAgIFRPUF9SSUdIVCA9ICd0b3AtcmlnaHQnLFxuICAgIENFTlRFUl9MRUZUID0gJ2NlbnRlci1sZWZ0JyxcbiAgICBDRU5URVIgPSAnY2VudGVyJyxcbiAgICBDRU5URVJfUklHSFQgPSAnY2VudGVyLXJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVCA9ICdib3R0b20tbGVmdCcsXG4gICAgQk9UVE9NX0NFTlRFUiA9ICdib3R0b20tY2VudGVyJyxcbiAgICBCT1RUT01fUklHSFQgPSAnYm90dG9tLXJpZ2h0JyxcbiAgICBUT1AgPSAndG9wJyxcbiAgICBCT1RUT00gPSAnYm90dG9tJ1xufVxuXG5pbnRlcmZhY2UgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lO1xuICAgIGZlYXR1cmU6IFNES0ZlYXR1cmU7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG4gICAgb3ZlcmxheT86IFByb21wdE92ZXJsYXlDb25maWc7XG4gICAgYWN0aW9ucz86IFByb21wdEFjdGlvbltdO1xufVxuXG5pbnRlcmZhY2UgQmVsbExhYmVsQ29uZmlnIHtcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHN1YnNjcmliZTogc3RyaW5nO1xuICAgIH07XG4gICAgdGhhbmtzRm9yU3Vic2NyaWJpbmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWxsQ29sb3JDb25maWcge1xuICAgIGJlbGw6IHtcbiAgICAgICAgZmc6IHN0cmluZztcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxQcm9tcHRDb25maWcgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CRUxMO1xuICAgIGZlYXR1cmU6IFNES0ZlYXR1cmUuUFVTSDtcbiAgICBsYWJlbHM/OiBCZWxsTGFiZWxDb25maWc7XG4gICAgY29sb3JzPzogQmVsbENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5CT1RUT01fTEVGVCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcbn1cblxuaW50ZXJmYWNlIEFsZXJ0TGFiZWxDb25maWcge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG4gICAgYWxlcnQ6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgICAgIGRlY2xpbmVBY3Rpb246IHN0cmluZztcbiAgICAgICAgYWNjZXB0QWN0aW9uOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydENvbG9yQ29uZmlnIHtcbiAgICBhbGVydDoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgICAgICBkZWNsaW5lQWN0aW9uRmc6IHN0cmluZztcbiAgICAgICAgZGVjbGluZUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgICAgIGFjY2VwdEFjdGlvbkJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb21wdENvbmZpZyBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQUxFUlQ7XG4gICAgZmVhdHVyZTogU0RLRmVhdHVyZS5QVVNIO1xuICAgIGxhYmVsczogQWxlcnRMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEFsZXJ0Q29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkNFTlRFUjtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG5pbnRlcmZhY2UgQmFubmVyTGFiZWxDb25maWcge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG4gICAgYmFubmVyOiB7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgYm9keTogc3RyaW5nO1xuICAgICAgICBkZWNsaW5lQWN0aW9uOiBzdHJpbmc7XG4gICAgICAgIGFjY2VwdEFjdGlvbjogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyQ29sb3JDb25maWcge1xuICAgIGJhbm5lcjoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgICAgICBkZWNsaW5lQWN0aW9uRmc6IHN0cmluZztcbiAgICAgICAgZGVjbGluZUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgICAgIGFjY2VwdEFjdGlvbkJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9tcHRDb25maWcgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLCBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJBTk5FUjtcbiAgICBsYWJlbHM6IEJhbm5lckxhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogQmFubmVyQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTTtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hCYW5uZXJQcm9tcHRDb25maWcgZXh0ZW5kcyBCYW5uZXJQcm9tcHRDb25maWcge1xuICAgIGZlYXR1cmU6IFNES0ZlYXR1cmUuUFVTSDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBERExCYW5uZXJQcm9tcHRDb25maWcgZXh0ZW5kcyBCYW5uZXJQcm9tcHRDb25maWcge1xuICAgIGZlYXR1cmU6IFNES0ZlYXR1cmUuRERMO1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgc3RvcmVVcmw6IHN0cmluZztcbiAgICBjYW5vbmljYWxMaW5rVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZyA9XG4gICAgfCBCZWxsUHJvbXB0Q29uZmlnXG4gICAgfCBBbGVydFByb21wdENvbmZpZ1xuICAgIHwgUHVzaEJhbm5lclByb21wdENvbmZpZ1xuICAgIHwgRERMQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWdzID0geyBba2V5OiBzdHJpbmddOiBQcm9tcHRDb25maWcgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gICAgcHVibGljS2V5OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBwcm9tcHRzOiBQcm9tcHRDb25maWdzO1xuICAgIHNhZmFyaVB1c2hJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gU0RLRmVhdHVyZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHNlY3JldEtleTogc3RyaW5nO1xuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgbm90ZSwgbWFrZSB2YXBpZFB1YmxpY0tleSBvcHRpb25hbCBhbmQgZW5mb3JjZSBjaGVjayBvbmx5IHdoZW5cbiAgICAvLyAgIGEpIG5vIGZlYXR1cmVzIHNwZWNpZmllZCAoZS5nLiBiYWNrd2FyZCBjb21wYXQpXG4gICAgLy8gICBiKSBvciBpZiAncHVzaCcgZmVhdHVyZSBzcGVjaWZpZWQgKHByb3Bvc2VkIGJ1dCB3b3VsZCBrZWVwIGNvbmZpZyBpbnRlcmZhY2UgY29uc2lzdGVudClcbiAgICB2YXBpZFB1YmxpY0tleT86IHN0cmluZztcblxuICAgIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICAgIHB1c2hQcm9tcHRzPzogUHJvbXB0Q29uZmlncyB8ICdhdXRvJztcbiAgICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuXG4gICAgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdFJlbWluZGVyID1cbiAgICB8IHtcbiAgICAgICAgICBkZWNsaW5lZE9uOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCAnc3VwcHJlc3NlZCc7XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleT86IHN0cmluZztcbiAgICByZWFkb25seSBhdXRoSGVhZGVyOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2VydmljZVdvcmtlclBhdGg6IHN0cmluZztcbiAgICByZWFkb25seSBwdXNoUHJvbXB0czogeyBba2V5OiBzdHJpbmddOiBQcm9tcHRDb25maWcgfSB8ICdhdXRvJztcbiAgICByZWFkb25seSBhdXRvUmVzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IFNka0V2ZW50SGFuZGxlcltdIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICAgICAgICB0aGlzLnNlY3JldEtleSA9IGNvbmZpZy5zZWNyZXRLZXk7XG4gICAgICAgIHRoaXMudmFwaWRQdWJsaWNLZXkgPSBjb25maWcudmFwaWRQdWJsaWNLZXk7XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dGhpcy5hcGlLZXl9OiR7dGhpcy5zZWNyZXRLZXl9YCl9YDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUGF0aCA9IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCA/PyAnL3dvcmtlci5qcyc7XG4gICAgICAgIHRoaXMucHVzaFByb21wdHMgPSBjb25maWcucHVzaFByb21wdHMgPz8gJ2F1dG8nO1xuICAgICAgICB0aGlzLmF1dG9SZXN1YnNjcmliZSA9IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUgPz8gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGNvbmZpZy5mZWF0dXJlcztcblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKGV2ZW50OiBTZGtFdmVudFR5cGUsIGhhbmRsZXI6IFNka0V2ZW50SGFuZGxlcikge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmluZGV4T2YoaGFuZGxlcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3QoZXZlbnQ6IFNka0V2ZW50VHlwZSwgZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdW2ldKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBldmVudCxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZlYXR1cmUoZmVhdHVyZTogU0RLRmVhdHVyZSkge1xuICAgICAgICBpZiAoIXRoaXMuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGJhY2t3YXJkcyBjb21wYXQsIChmb3IgY29uc2lzdGVuY3kpIGFzIHB1c2ggc2lkZSBvZiB0aGluZ3NcbiAgICAgICAgICAgIC8vIHByb2Igd29udCBxdWVyeSB0aGlzIGFzIGl0IHN0YW5kcyBjdXJyZW50bHlcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlID09PSBTREtGZWF0dXJlLlBVU0ggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyAnQ29uZmlnIG11c3QgYmUgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlcyA9IEFycmF5LmlzQXJyYXkoY29uZmlnLmZlYXR1cmVzKVxuICAgICAgICA/IGNvbmZpZy5mZWF0dXJlc1xuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmICghZmVhdHVyZXMgfHwgZmVhdHVyZXMuaW5jbHVkZXMoU0RLRmVhdHVyZS5QVVNIKSkge1xuICAgICAgICByZXR1cm4gYXNzZXJ0UHVzaENvbmZpZ1ZhbGlkKGNvbmZpZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBjb25zdCByZXF1aXJlZFN0cmluZ1Byb3BzID0gWydhcGlLZXknLCAnc2VjcmV0S2V5JywgJ3ZhcGlkUHVibGljS2V5J107XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldCgnaW5zdGFsbElkJywgdXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKCk6IFByb21pc2U8VXNlcklkPiB7XG4gICAgcmV0dXJuIGdldDxVc2VySWQgfCB1bmRlZmluZWQ+KCd1c2VySWQnKS50aGVuKFxuICAgICAgICB1c2VySWQgPT4gdXNlcklkID8/IGdldEluc3RhbGxJZCgpXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc29jaWF0ZVVzZXIoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGlkOiBVc2VySWQsXG4gICAgYXR0cmlidXRlcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBzZXQoJ3VzZXJJZCcsIGlkKTtcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgYXR0cmlidXRlc1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5VU0VSX0FTU09DSUFURUQsIHByb3BzKS50aGVuKF8gPT4ge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJVc2VyQXNzb2NpYXRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5VU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQsIHtcbiAgICAgICAgb2xkVXNlcklkZW50aWZpZXI6IGN1cnJlbnRVc2VySWRcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWwoJ3VzZXJJZCcpO1xufVxuXG5leHBvcnQgdHlwZSBLdW11bG9zRXZlbnQgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBkYXRhPzogUHJvcHNPYmplY3Q7XG59O1xuXG5leHBvcnQgdHlwZSBFdmVudFBheWxvYWQgPSBLdW11bG9zRXZlbnRbXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrRXZlbnQoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBpbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRQYXlsb2FkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdXVpZDogdXVpZHY0KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdXJsID0gYCR7RVZFTlRTX0JBU0VfVVJMfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG5cbiAgICBjdHguYnJvYWRjYXN0KCdldmVudFRyYWNrZWQnLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0luc3RhbGxEZXRhaWxzKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGFwcDoge1xuICAgICAgICAgICAgYnVuZGxlOiBsb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJywgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgICAgIHRhcmdldDogMiAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICB9LFxuICAgICAgICBzZGs6IHtcbiAgICAgICAgICAgIGlkOiBTREtfVFlQRSxcbiAgICAgICAgICAgIHZlcnNpb246IFNES19WRVJTSU9OXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICB9LFxuICAgICAgICBvczoge1xuICAgICAgICAgICAgLy8gRGV0ZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIHNlcnZlci1zaWRlIGZyb20gVUEgZGF0YVxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIG9uIGJlc3QtZWZmb3J0IGJhc2lzIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBuYW1lOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgdHo6XG4gICAgICAgICAgICAgICAgdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgID8gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgaXNTaW11bGF0b3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNoUGFydHMgPSBbXG4gICAgICAgIFNES19WRVJTSU9OLFxuICAgICAgICBwYXlsb2FkLmFwcC5idW5kbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLnR6LFxuICAgICAgICBwYXlsb2FkLmRldmljZS5sb2NhbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLm5hbWVcbiAgICBdO1xuICAgIGNvbnN0IGhhc2ggPSBjeXJiNTMoaGFzaFBhcnRzLmpvaW4oJ3wnKSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0hhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPignZGV0YWlsc0hhc2gnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdIYXNoID09PSBoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5JTlNUQUxMX1RSQUNLRUQsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKCgpID0+IHNldCgnZGV0YWlsc0hhc2gnLCBoYXNoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdm9pZCAwKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsTGlzdEl0ZW0ge1xuICAgIGNoYW5uZWw6IENoYW5uZWw7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICBhbGxDaGFubmVsczogQ2hhbm5lbFtdLFxuICAgIHNlbGVjdGlvbkNvbmZpZzogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnXG4pIHtcbiAgICByZXR1cm4gYWxsQ2hhbm5lbHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIGMgPT5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgKVxuICAgICAgICAubWFwPENoYW5uZWxMaXN0SXRlbT4oYyA9PiAoe1xuICAgICAgICAgICAgY2hhbm5lbDogeyAuLi5jIH0sXG4gICAgICAgICAgICBjaGVja2VkOlxuICAgICAgICAgICAgICAgIGMuc3Vic2NyaWJlZC52YWx1ZU9mKCkgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICB9KSk7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgcGFyc2VRdWVyeVN0cmluZyB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IFNhZmFyaVB1c2hNYW5hZ2VyIGZyb20gJy4vc2FmYXJpJztcbmltcG9ydCBXM2NQdXNoTWFuYWdlciBmcm9tICcuL3czYyc7XG5pbXBvcnQgeyBsb2FkQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvblN0YXRlID0gJ3N1YnNjcmliZWQnIHwgJ3Vuc3Vic2NyaWJlZCcgfCAnYmxvY2tlZCc7XG5cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgVzNDID0gMyxcbiAgICBTQUZBUkkgPSA0XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBQVVNIID0gMVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPjtcbiAgICBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShjdHg6IENvbnRleHQpOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoUGF5bG9hZCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgICdrLm1lc3NhZ2UnOiB7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNIO1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICB1cmw6IHN0cmluZyB8IG51bGw7XG4gICAgaW1hZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgaWNvbjogc3RyaW5nIHwgbnVsbDtcbn1cblxubGV0IG1hbmFnZXI6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQdXNoT3BzTWFuYWdlcihcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+IHtcbiAgICBpZiAobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyID09PSAnc2FmYXJpJykge1xuICAgICAgICBtYW5hZ2VyID0gbG9hZENvbmZpZyhjdHgpLnRoZW4oY2ZnID0+IG5ldyBTYWZhcmlQdXNoTWFuYWdlcihjZmcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYW5hZ2VyID0gUHJvbWlzZS5yZXNvbHZlKG5ldyBXM2NQdXNoTWFuYWdlcigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrT3BlbkZyb21RdWVyeShjdHg6IENvbnRleHQpIHtcbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyICE9PSAnc2FmYXJpJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeVN0cmluZygpO1xuXG4gICAgaWYgKCFwYXJhbXM/Llsna25pZCddKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLk1FU1NBR0VfT1BFTkVELCB7XG4gICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0gsXG4gICAgICAgIGlkOiBOdW1iZXIocGFyYW1zWydrbmlkJ10pXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0geyAuLi5wYXlsb2FkLmRhdGEgfTtcbiAgICBkZWxldGUgdXNlckRhdGFbJ2subWVzc2FnZSddO1xuXG4gICAgY29uc3QgcHVzaDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24gPSB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmRhdGFbJ2subWVzc2FnZSddLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlLFxuICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLm1zZyxcbiAgICAgICAgZGF0YTogdXNlckRhdGEsXG4gICAgICAgIHVybDogcGF5bG9hZC51cmwgPz8gdW5kZWZpbmVkLFxuICAgICAgICBpY29uVXJsOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICBpbWFnZVVybDogcGF5bG9hZC5pbWFnZSA/PyB1bmRlZmluZWRcbiAgICB9O1xuICAgIHJldHVybiBwdXNoO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIEV2ZW50VHlwZSxcbiAgICBQVVNIX0JBU0VfVVJMLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIHRyYWNrRXZlbnRcbn0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgY3lyYjUzLCBkZWZlciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uL3B1c2gnO1xuaW1wb3J0IHsgbG9hZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7UFVTSF9CQVNFX1VSTH0vc2FmYXJpLyR7Y3R4LmFwaUtleX1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZENvbmZpZyhjdHgpO1xuICAgICAgICBjb25zdCBwZXJtID0gd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKFxuICAgICAgICAgICAgY2ZnLnNhZmFyaVB1c2hJZCBhcyBzdHJpbmdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXBlcm0gfHwgIXBlcm0uZGV2aWNlVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbik7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgICAgICB0eXBlOiBUb2tlblR5cGUuU0FGQVJJLFxuICAgICAgICAgICAgdG9rZW46IHBlcm0uZGV2aWNlVG9rZW4sXG4gICAgICAgICAgICBidW5kbGVJZDogY2ZnLnNhZmFyaVB1c2hJZFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXQoJ3B1c2hUb2tlbkhhc2gnLCB0b2tlbkhhc2gpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gYXdhaXQgdGhpcy5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihjdHgpO1xuXG4gICAgICAgIHN3aXRjaCAocGVybSkge1xuICAgICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IGNmZyA9IGF3YWl0IGxvYWRDb25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8IHBlcm0/LnBlcm1pc3Npb24gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuID8/ICcnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCAmJiBwZXJtLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSB8fCAhdGhpcy5jZmcuc2FmYXJpUHVzaElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBQdXNoU3Vic2NyaXB0aW9uU3RhdGUsIFRva2VuVHlwZSB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYmFzZTY0VXJsRW5jb2RlLCBjeXJiNTMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5mdW5jdGlvbiBoYXNTYW1lS2V5KHZhcGlkS2V5OiBzdHJpbmcsIHN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4aXN0aW5nU3ViS2V5ID0gc3Vic2NyaXB0aW9uLm9wdGlvbnMuYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG5cbiAgICBpZiAoIWV4aXN0aW5nU3ViS2V5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJLZXkgPSBiYXNlNjRVcmxFbmNvZGUoZXhpc3RpbmdTdWJLZXkpO1xuXG4gICAgcmV0dXJuIHN1YktleSA9PT0gdmFwaWRLZXk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG5cbiAgICBpZiAoIXdvcmtlclJlZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbn1cblxuZnVuY3Rpb24gaGFzaFN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQsIHN1YjogUHVzaFN1YnNjcmlwdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3N1Yi5lbmRwb2ludH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVzNjUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgYXN5bmMgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ1B1c2ggbm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBleGlzdGluZ1N1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdTdWIgJiYgIWhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5ISwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcbiAgICAgICAgY29uc3QgZXhwaXJ5ID0gc3ViLmV4cGlyYXRpb25UaW1lO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZW5kcG9pbnRIYXNoICYmXG4gICAgICAgICAgICAoIWV4aXN0aW5nRXhwaXJ5IHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlczQyxcbiAgICAgICAgICAgIHRva2VuOiBzdWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgZXhwaXJ5KTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxpbXBvcnQoJy4nKS5QdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5ISwgc3ViKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBub3QgZW5hYmxlZCwgYWJvcnRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgYEF1dG8tcmVzdWJzY3JpYmU6IHBlcm1pc3Npb24gbm90IGdyYW50ZWQsIGFib3J0aW5nOiAke3Blcm19YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGxldCBleGlzdGluZ1N1Ykhhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChleGlzdGluZ1N1Yikge1xuICAgICAgICAgICAgZXhpc3RpbmdTdWJIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIGV4aXN0aW5nU3ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBleGlzdGluZ1N1Ykhhc2ggJiZcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViICYmXG4gICAgICAgICAgICBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSEsIGV4aXN0aW5nU3ViKSAmJlxuICAgICAgICAgICAgKGV4aXN0aW5nRXhwaXJ5ID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpYmU6IGFscmVhZHkgaGF2ZSBhIG5vbi1leHBpcmVkIGVuZHBvaW50IGhhc2ggZm9yIHNhbWUgc3ViLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IGF0dGVtcHRpbmcgcmVzdWJzY3JpcHRpb24nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFJlZ2lzdGVyKGN0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHsgb25ET01SZWFkeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RGcmFtZUNvbnRhaW5lciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290RnJhbWUge1xuICAgIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyczogUm9vdEZyYW1lQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9ICdrdW11bG9zLXVpLXJvb3QnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuZWxlbWVudC5pZCA9IGBrdW11bG9zLXVpLXJvb3QtJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBDb250ZXh0LCBQcm9tcHRSZW1pbmRlciwgUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICAgIHNlY3JldEtleTogY29uZmlnLnNlY3JldEtleSxcbiAgICAgICAgdmFwaWRQdWJsaWNLZXk6IGNvbmZpZy52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgc2VydmljZVdvcmtlclBhdGg6IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCxcbiAgICAgICAgYXV0b1Jlc3Vic2NyaWJlOiBjb25maWcuYXV0b1Jlc3Vic2NyaWJlLFxuICAgICAgICBwdXNoUHJvbXB0czogY29uZmlnLnB1c2hQcm9tcHRzXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nLFxuICAgIHJlbWluZGVyOiBQcm9tcHRSZW1pbmRlclxuKSB7XG4gICAgcmV0dXJuIHNldChgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWAsIHJlbWluZGVyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBhd2FpdCBnZXQ8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZygpOiBQcm9taXNlPENvbnRleHQgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gZ2V0PENvbmZpZ3VyYXRpb24+KCdjb25maWcnKS50aGVuKGNvbmZpZyA9PlxuICAgICAgICBjb25maWcgPyBuZXcgQ29udGV4dChjb25maWcpIDogdW5kZWZpbmVkXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RPcGVuZWRQdXNoUGF5bG9hZChcbiAgICBwYXlsb2FkOiBQdXNoUGF5bG9hZFxuKTogUHJvbWlzZTxQdXNoUGF5bG9hZD4ge1xuICAgIHJldHVybiBzZXQoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQoKTogUHJvbWlzZTxcbiAgICBQdXNoUGF5bG9hZCB8IHVuZGVmaW5lZFxuPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldDxQdXNoUGF5bG9hZD4oJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgYXdhaXQgZGVsKCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIHJldHVybiBwYXlsb2FkID8/IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIFNES0ZlYXR1cmUgfSBmcm9tICcuJztcblxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oXG4gICAgICAgICAgICBjXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoMWU3KS50b1N0cmluZygpICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoXG4gICAgICAgIC9bMDE4XS9nLFxuICAgICAgICBjID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKGMpIF5cbiAgICAgICAgICAgICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJlxuICAgICAgICAgICAgICAgICAgICAoMTUgPj4gKE51bWJlcihjKSAvIDQpKSlcbiAgICAgICAgICAgICkudG9TdHJpbmcoMTYpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYnJvd3NlcnMgPSBbJ2VkZ2UnLCAnZmlyZWZveCcsICdjaHJvbWUnLCAnc2FmYXJpJ107XG5cbiAgICBmb3IgKGxldCBiIG9mIGJyb3dzZXJzKSB7XG4gICAgICAgIGlmICh1YS5pbmRleE9mKGIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcXVpcmVkVGhpbmdzID0gW3R5cGVvZiBQcm9taXNlLCB0eXBlb2YgZmV0Y2gsIHR5cGVvZiBpbmRleGVkREJdO1xuXG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoJ3NhZmFyaScgPT09IGJyb3dzZXIpIHtcbiAgICAgICAgcmVxdWlyZWRUaGluZ3MucHVzaCh0eXBlb2Ygd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWlyZWRUaGluZ3MucHVzaChcbiAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICB0eXBlb2YgTm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcixcbiAgICAgICAgICAgICAgICB0eXBlb2YgUHVzaE1hbmFnZXJcbiAgICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxdWlyZWRUaGluZ3MucmVkdWNlKFxuICAgICAgICAoc3VwcG9ydGVkOiBib29sZWFuLCB0aGluZykgPT4gc3VwcG9ydGVkICYmIHRoaW5nICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgdHJ1ZVxuICAgICk7XG59XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL2ltdWxcbmNvbnN0IGltdWwgPVxuICAgIE1hdGguaW11bCB8fFxuICAgIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgYiB8PSAwOyAvLyBlbnN1cmUgdGhhdCBvcEIgaXMgYW4gaW50ZWdlci4gb3BBIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb2VyY2VkLlxuICAgICAgICAvLyBmbG9hdGluZyBwb2ludHMgZ2l2ZSB1cyA1MyBiaXRzIG9mIHByZWNpc2lvbiB0byB3b3JrIHdpdGggcGx1cyAxIHNpZ24gYml0XG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgaGFuZGxlZCBmb3Igb3VyIGNvbnZpZW5lbmNlOlxuICAgICAgICAvLyAxLiAweDAwM2ZmZmZmIC8qb3BBICYgMHgwMDBmZmZmZiovICogMHg3ZmZmZmZmZiAvKm9wQiovID0gMHgxZmZmZmY3ZmMwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgdmFyIHJlc3VsdCA9IChhICYgMHgwMDNmZmZmZikgKiBiO1xuICAgICAgICAvLyAyLiBXZSBjYW4gcmVtb3ZlIGFuIGludGVnZXIgY29lcnNpb24gZnJvbSB0aGUgc3RhdGVtZW50IGFib3ZlIGJlY2F1c2U6XG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgKyAweGZmYzAwMDAwID0gMHgxZmZmZmZmZjgwMDAwMVxuICAgICAgICAvLyAgICAweDFmZmZmZmZmODAwMDAxIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLyoweDFmZmZmZmZmZmZmZmZmKi9cbiAgICAgICAgaWYgKGEgJiAweGZmYzAwMDAwIC8qIT09IDAqLykgcmVzdWx0ICs9ICgoYSAmIDB4ZmZjMDAwMDApICogYikgfCAwO1xuICAgICAgICByZXR1cm4gcmVzdWx0IHwgMDtcbiAgICB9O1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTIxNzE0ODBcbmV4cG9ydCBmdW5jdGlvbiBjeXJiNTMoc3RyOiBzdHJpbmcsIHNlZWQgPSAwKTogbnVtYmVyIHtcbiAgICBsZXQgaDEgPSAweGRlYWRiZWVmIF4gc2VlZCxcbiAgICAgICAgaDIgPSAweDQxYzZjZTU3IF4gc2VlZDtcbiAgICBmb3IgKGxldCBpID0gMCwgY2g7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaDEgPSBpbXVsKGgxIF4gY2gsIDI2NTQ0MzU3NjEpO1xuICAgICAgICBoMiA9IGltdWwoaDIgXiBjaCwgMTU5NzMzNDY3Nyk7XG4gICAgfVxuICAgIGgxID1cbiAgICAgICAgaW11bChoMSBeIChoMSA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDIgXiAoaDIgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgaDIgPVxuICAgICAgICBpbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMSBeIChoMSA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICByZXR1cm4gNDI5NDk2NzI5NiAqICgyMDk3MTUxICYgaDIpICsgKGgxID4+PiAwKTtcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9HdWlkZS9SZWd1bGFyX0V4cHJlc3Npb25zXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZWRGZXRjaChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHsgbWV0aG9kOiAnR0VUJyB9XG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXhpc3RpbmdIZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzID8/IHt9O1xuXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogY3R4LmF1dGhIZWFkZXIsXG4gICAgICAgIC4uLmV4aXN0aW5nSGVhZGVyc1xuICAgIH07XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoSnNvbjxUPihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zPzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwgb3B0aW9ucykudGhlbihyID0+IHIuanNvbigpKTtcbn1cblxuLy8gQmFzZWQgb24gdGhlIGFscGhhYmV0cyBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCBUYWJsZXMgMSAmIDJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxFbmNvZGUoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaW50cyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmFzZTY0RW5jb2RlZCA9IGJ0b2EoXG4gICAgICAgIGludHMucmVkdWNlKChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgKTtcbiAgICBjb25zdCB1cmxWYXJpYW50ID0gYmFzZTY0RW5jb2RlZFxuICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC89L2csICcnKTtcblxuICAgIHJldHVybiB1cmxWYXJpYW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgIHBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ1NlcnZpY2VXb3JrZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihwYXRoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXI8VD4oKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB7XG4gICAgICAgIHJlc29sdmU6IChudWxsIGFzIHVua25vd24pIGFzICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICAgICAgcmVqZWN0OiAobnVsbCBhcyB1bmtub3duKSBhcyAocmVhc29uPzogYW55KSA9PiB2b2lkLFxuICAgICAgICBwcm9taXNlOiAobnVsbCBhcyB1bmtub3duKSBhcyBQcm9taXNlPFQ+XG4gICAgfTtcblxuICAgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKFxuICAgIHFzOiBzdHJpbmcgPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgZXhjbHVkZWRRdWVyeUtleXM6IHN0cmluZ1tdID0gW11cbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQge1xuICAgIGxldCBxdWVyeSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChxcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5ID0gcXNcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAubWFwKHZhcnMgPT4gdmFycy5zcGxpdCgnPScpKVxuICAgICAgICAgICAgLm1hcChwYWlycyA9PiBwYWlycy5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KSlcbiAgICAgICAgICAgIC5maWx0ZXIocGFpcnMgPT4gZXhjbHVkZWRRdWVyeUtleXMuaW5kZXhPZihwYWlyc1swXSkgPT09IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgocSwgcGFpcikgPT4gKHsgLi4ucSwgW3BhaXJbMF1dOiBwYWlyWzFdIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25ET01SZWFkeShmbjogKCkgPT4gdm9pZCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvYW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfG1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdIYXNERExGZWF0dXJlKGNvbmZpZzogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgY29uZmlnICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoY29uZmlnLmZlYXR1cmVzKSAmJlxuICAgICAgICBjb25maWcuZmVhdHVyZXMuaW5jbHVkZXMoU0RLRmVhdHVyZS5EREwpXG4gICAgKTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBQcm9tcHRQb3NpdGlvbixcbiAgICBTREtGZWF0dXJlLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIFJlbWluZGVyVGltZVVuaXQsXG4gICAgVWlBY3Rpb25UeXBlXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgRERMQmFubmVyUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERETENvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8RERMQmFubmVyUHJvbXB0Q29uZmlnW10+IHtcbiAgICBjb25zdCBjb25maWc6IERETEJhbm5lclByb21wdENvbmZpZyA9IHtcbiAgICAgICAgdXVpZDogJ2xpbmsxJyxcbiAgICAgICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkFOTkVSLFxuICAgICAgICBmZWF0dXJlOiBTREtGZWF0dXJlLkRETCwgLy8gaW50ZXJuYWwgdG8gU0RLXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgdGhhbmtzRm9yU3Vic2NyaWJpbmc6ICcnLFxuICAgICAgICAgICAgYmFubmVyOiB7XG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ0NyZWVrIEN5Y2xlcyBBcHAnLFxuICAgICAgICAgICAgICAgIGJvZHk6ICcyMCUgb2ZmIGFsbCBwdXJjaGFzZXMgd2l0aCBjb2RlIDIwQXBweScsXG4gICAgICAgICAgICAgICAgZGVjbGluZUFjdGlvbjogJycsXG4gICAgICAgICAgICAgICAgYWNjZXB0QWN0aW9uOiAnMjAlIG9mZidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICBiYW5uZXI6IHtcbiAgICAgICAgICAgICAgICBiZzogJ3JnYmEoMjU1LDI1NSwwLDEpJyxcbiAgICAgICAgICAgICAgICBmZzogJ3JnYmEoMCwwLDAsMSknLFxuICAgICAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZzogJycsXG4gICAgICAgICAgICAgICAgZGVjbGluZUFjdGlvbkJnOiAnJyxcbiAgICAgICAgICAgICAgICBhY2NlcHRBY3Rpb25GZzogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxuICAgICAgICAgICAgICAgIGFjY2VwdEFjdGlvbkJnOiAncmdiYSgwLDAsMCwxKSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCxcbiAgICAgICAgc3RvcmVVcmw6XG4gICAgICAgICAgICAnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5rdW11bG9zLmNvbXBhbmlvbicsXG4gICAgICAgIGNhbm9uaWNhbExpbmtVcmw6ICdodHRwczovL3JlYWN0bmF0aXZlLmxuay5jbGljay9kZWVwLTEnLFxuICAgICAgICBpbWFnZVVybDogJycsXG4gICAgICAgIHRyaWdnZXI6IHtcbiAgICAgICAgICAgIGV2ZW50OiAnay5wYWdlVmlld2VkJ1xuICAgICAgICB9LFxuICAgICAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgICAgIGRlY2xpbmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBVaUFjdGlvblR5cGUuUkVNSU5ELFxuICAgICAgICAgICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICB0aW1lVW5pdDogUmVtaW5kZXJUaW1lVW5pdC5EQVlTXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW2NvbmZpZ10pO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoLCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBQcm9tcHRDb25maWcsIFNES0ZlYXR1cmUgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCBEZWVwbGlua0J1dHRvbiBmcm9tICcuL2RlZXBsaW5rLWJ1dHRvbic7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi91aS1jb250ZXh0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhbm5lckljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9LFxuICAgIGNsb3NlSWNvblN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgaGVpZ2h0OiAxMlxuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRERMQmFubmVyUHJvcHMge1xuICAgIGNvbmZpZzogUHJvbXB0Q29uZmlnO1xuICAgIG9uQ29uZmlybTogKGNvbmZpZzogUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoY29uZmlnOiBQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgZGltZW5zaW9uczogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRERMQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50PERETEJhbm5lclByb3BzLCBuZXZlcj4ge1xuICAgIHByaXZhdGUgY29udGFpbmVyUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERETEJhbm5lclByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlZiA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaW1lbnNpb25zKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgIH07XG5cbiAgICBvbkNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgfTtcblxuICAgIHJlbmRlckJhbm5lciA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoY29uZmlnLmZlYXR1cmUgIT09IFNES0ZlYXR1cmUuRERMKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgY2Fub25pY2FsTGlua1VybCwgcG9zaXRpb24sIGxhYmVscywgY29sb3JzIH0gPSBjb25maWc7XG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgYm9keSwgYWNjZXB0QWN0aW9uIH0gPSBsYWJlbHMuYmFubmVyO1xuICAgICAgICBjb25zdCB7IGJnLCBmZywgYWNjZXB0QWN0aW9uQmcsIGFjY2VwdEFjdGlvbkZnIH0gPSBjb2xvcnMuYmFubmVyO1xuXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1iYW5uZXItY29udGFpbmVyIGt1bXVsb3MtYmFubmVyLWNvbXBhY3Qga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHtwb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFjdGlvblN0eWxlOiBoLkpTWC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBhY2NlcHRBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGJhbm5lckljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5iYW5uZXJJY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aUNvbnRleHQ/LnBsYXRmb3JtQ29uZmlnLmljb25Vcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzPXtjbGFzc2VzfSByZWY9e3RoaXMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY2xvc2VcIiBvblRvdWNoRW5kPXt0aGlzLm9uQ2FuY2VsfT5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyMS4zMSAxMjIuODc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuY2xvc2VJY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05MC45MTQsNS4yOTZjNi45MjctNy4wMzQsMTguMTg4LTcuMDY1LDI1LjE1NC0wLjA2OCBjNi45NjEsNi45OTUsNi45OTEsMTguMzY5LDAuMDY4LDI1LjM5N0w4NS43NDMsNjEuNDUybDMwLjQyNSwzMC44NTVjNi44NjYsNi45NzgsNi43NzMsMTguMjgtMC4yMDgsMjUuMjQ3IGMtNi45ODMsNi45NjQtMTguMjEsNi45NDYtMjUuMDc0LTAuMDMxTDYwLjY2OSw4Ni44ODFMMzAuMzk1LDExNy41OGMtNi45MjcsNy4wMzQtMTguMTg4LDcuMDY1LTI1LjE1NCwwLjA2OCBjLTYuOTYxLTYuOTk1LTYuOTkyLTE4LjM2OS0wLjA2OC0yNS4zOTdsMzAuMzkzLTMwLjgyN0w1LjE0MiwzMC41NjhjLTYuODY3LTYuOTc4LTYuNzczLTE4LjI4LDAuMjA4LTI1LjI0NyBjNi45ODMtNi45NjMsMTguMjEtNi45NDYsMjUuMDc0LDAuMDMxbDMwLjIxNywzMC42NDNMOTAuOTE0LDUuMjk2TDkwLjkxNCw1LjI5NnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lckljb25TdHlsZX0gY2xhc3M9XCJrdW11bG9zLWJhbm5lci1pY29uXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iYW5uZXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2hlYWRpbmd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1ib2R5XCI+e2JvZHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1yYXRpbmdcIj4qKioqKjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPERlZXBsaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXthY2NlcHRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsPXtjYW5vbmljYWxMaW5rVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb249e3RoaXMub25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxVSUNvbnRleHQuQ29uc3VtZXI+e3RoaXMucmVuZGVyQmFubmVyfTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBDbGlwYm9hcmQgZnJvbSAnY2xpcGJvYXJkJztcblxuaW50ZXJmYWNlIERlZXBsaW5rQnV0dG9uUHJvcHMge1xuICAgIHN0eWxlOiBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgIGNsYXNzOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGxpbmtVcmw6IHN0cmluZztcbiAgICBvbkFjdGlvbjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVlcGxpbmtCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgRGVlcGxpbmtCdXR0b25Qcm9wcyxcbiAgICBuZXZlclxuPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBidG5SZWY6IFJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD47XG4gICAgcHJpdmF0ZSBjbGlwYm9hcmQ/OiBDbGlwYm9hcmQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGVlcGxpbmtCdXR0b25Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5idG5SZWYgPSBjcmVhdGVSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KCk7XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKHRoaXMuYnRuUmVmLmN1cnJlbnQhKTtcbiAgICAgICAgdGhpcy5jbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBlID0+IHRoaXMucHJvcHMub25BY3Rpb24oKSk7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmNsaXBib2FyZD8uZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdHlsZSwgY2xhc3M6IGNzc0NsYXNzLCB0ZXh0LCBsaW5rVXJsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLmJ0blJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3M9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMub25Ub3VjaEVuZH1cbiAgICAgICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10ZXh0PXtsaW5rVXJsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBLdW11bG9zIGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBQcm9tcHRDb25maWcsXG4gICAgU0RLRmVhdHVyZVxufSBmcm9tICcuLi9jb3JlL2luZGV4JztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCBVaSBmcm9tICcuL3VpJztcbmltcG9ydCB7IGZldGNoRERMQ29uZmlnIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgVUlDb250ZXh0IH0gZnJvbSAnLi91aS1jb250ZXh0JztcbmltcG9ydCB7IGxvYWRDb25maWcgfSBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XG5cbmV4cG9ydCBlbnVtIERETE1hbmFnZXJTdGF0ZSB7XG4gICAgTE9BRElORyA9ICdsb2FkaW5nJyxcbiAgICBSRUFEWSA9ICdyZWFkeSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRERMTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBrdW11bG9zQ2xpZW50OiBLdW11bG9zO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RDb250YWluZXI6IFJvb3RGcmFtZUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIGNvbnRhaW5lckVsPzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHN0YXRlITogRERMTWFuYWdlclN0YXRlO1xuICAgIHByaXZhdGUgcGxhdGZvcm1Db25maWchOiBQbGF0Zm9ybUNvbmZpZztcbiAgICBwcml2YXRlIGNvbmZpZz86IFByb21wdENvbmZpZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBLdW11bG9zLCBjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIHRoaXMucm9vdENvbnRhaW5lciA9IHJvb3RGcmFtZS5jcmVhdGVDb250YWluZXIoJ2RkbCcpO1xuICAgICAgICB0aGlzLmt1bXVsb3NDbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcblxuICAgICAgICBjb25zb2xlLmluZm8oJ0RETE1hbmFnZXI6IGluaXRpYWxpc2luZycpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlSW5qZWN0aW9uQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRERMTWFuYWdlclN0YXRlLkxPQURJTkcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW5qZWN0aW9uQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRWwuY2xhc3NOYW1lID0gJ2t1bXVsb3MtZGRsLWluamVjdGlvbi1jb250YWluZXInO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZCh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IChjb25maWc6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBpZiAoY29uZmlnLmZlYXR1cmUgIT09IFNES0ZlYXR1cmUuRERMKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyUHJvbXB0KGNvbmZpZyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuc3RvcmVVcmw7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDYW5jZWxsZWQgPSAoY29uZmlnOiBQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclByb21wdChjb25maWcpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGNsZWFyUHJvbXB0KGNvbmZpZzogUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWc/LmZpbHRlcihjID0+IGMudXVpZCAhPT0gY29uZmlnLnV1aWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKERETE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGF0ZShzdGF0ZTogRERMTWFuYWdlclN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnU2V0dGluZyBEREwgbWFuYWdlciBzdGF0ZTonICsgc3RhdGUpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMub25FbnRlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkVudGVyKHN0YXRlOiBERExNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBERExNYW5hZ2VyU3RhdGUuTE9BRElORzpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRERExDb25maWcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERETE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERETE1hbmFnZXJTdGF0ZS5SRUFEWTpcbiAgICAgICAgICAgICAgICAvLyBUT0RPIC0gbmV3IHN0YXRlIGZvciBtYW5hZ2luZyBtdWx0aXBsZXMgYXMgcHJlY29uZGl0aW9uIHN0YXRlIGZvciAnUkVBRFknXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgYSBzaW5nbGUgKGZpcnN0KSBjb25maWcgZm9yIG5vd1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc/LnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXIoY29uZmlnKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyKGNvbmZpZz86IFByb21wdENvbmZpZykge1xuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgICA8VUlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHBsYXRmb3JtQ29uZmlnOiB0aGlzLnBsYXRmb3JtQ29uZmlnIH19PlxuICAgICAgICAgICAgICAgIDxVaVxuICAgICAgICAgICAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgb25CYW5uZXJDb25maXJtPXt0aGlzLm9uQmFubmVyQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25CYW5uZXJDYW5jZWxsZWQ9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVUlDb250ZXh0LlByb3ZpZGVyPixcbiAgICAgICAgICAgIHRoaXMucm9vdENvbnRhaW5lci5lbGVtZW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkRERMQ29uZmlnKCkge1xuICAgICAgICB0aGlzLnBsYXRmb3JtQ29uZmlnID0gYXdhaXQgbG9hZENvbmZpZyh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IGZldGNoRERMQ29uZmlnKHRoaXMuY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVJQ29udGV4dFN0YXRlIHtcbiAgICBwbGF0Zm9ybUNvbmZpZzogUGxhdGZvcm1Db25maWc7XG59XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVJQ29udGV4dFN0YXRlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgUHJvbXB0Q29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBERExCYW5uZXIgfSBmcm9tICcuL2RkbC1iYW5uZXInO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgeyBQcm9tcHRQb3NpdGlvbiB9IGZyb20gJy4uL2NvcmUnO1xuXG5pbnRlcmZhY2UgVWlQcm9wcyB7XG4gICAgY29uZmlnPzogUHJvbXB0Q29uZmlnO1xuICAgIG9uQmFubmVyQ29uZmlybTogKGNvbmZpZzogUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uQmFubmVyQ2FuY2VsbGVkOiAoY29uZmlnOiBQcm9tcHRDb25maWcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIG5ldmVyPiB7XG4gICAgcHJpdmF0ZSBzaXRlTWFyZ2luPzogbnVtYmVyO1xuICAgIHByaXZhdGUgc2l0ZVRyYW5zaXRpb24/OiBzdHJpbmc7XG5cbiAgICBvbkRpbWVuc2lvbnMgPSAoX2Jhbm5lcldpZHRoOiBudW1iZXIsIGJhbm5lckhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKTtcbiAgICAgICAgdGhpcy5zaXRlTWFyZ2luID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIGJvZHlTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFxuICAgICAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgICAgICA/ICdtYXJnaW4tdG9wJ1xuICAgICAgICAgICAgICAgICAgICA6ICdtYXJnaW4tYm90dG9tJ1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNpdGVUcmFuc2l0aW9uID0gYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24nKTtcblxuICAgICAgICBpZiAoY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uQk9UVE9NKSB7XG4gICAgICAgICAgICBiYW5uZXJIZWlnaHQgKz0gMjA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBiYW5uZXJIZWlnaHQgKyB0aGlzLnNpdGVNYXJnaW47XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwLjM3NXMgZWFzZSAwcyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbXG4gICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICA/ICdtYXJnaW5Ub3AnXG4gICAgICAgICAgICAgICAgOiAnbWFyZ2luQm90dG9tJ1xuICAgICAgICBdID0gYCR7b2Zmc2V0fXB4YDtcbiAgICB9O1xuXG4gICAgb25CYW5uZXJDb25maXJtID0gKGNvbmZpZzogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKGNvbmZpZyk7XG4gICAgfTtcblxuICAgIG9uQmFubmVyQ2FuY2VsbGVkID0gKGNvbmZpZzogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDYW5jZWxsZWQoY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcmVzZXRCb2R5U3R5bGVzKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zaXRlVHJhbnNpdGlvbiA/PyAnJztcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlW1xuICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgPyAnbWFyZ2luVG9wJ1xuICAgICAgICAgICAgICAgIDogJ21hcmdpbkJvdHRvbSdcbiAgICAgICAgXSA9IHRoaXMuc2l0ZU1hcmdpbiA/IGAke3RoaXMuc2l0ZU1hcmdpbn1weGAgOiAnJztcbiAgICB9XG5cbiAgICByZW5kZXJCYW5uZXIoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgICA8RERMQmFubmVyXG4gICAgICAgICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ31cbiAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLm9uQmFubmVyQ2FuY2VsbGVkfVxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9e3RoaXMub25EaW1lbnNpb25zfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgSW5zdGFsbElkLFxuICAgIFByb3BzT2JqZWN0LFxuICAgIFVzZXJJZCxcbiAgICBhc3NlcnRDb25maWdWYWxpZCxcbiAgICBhc3NvY2lhdGVVc2VyLFxuICAgIGNsZWFyVXNlckFzc29jaWF0aW9uLFxuICAgIGdldEluc3RhbGxJZCxcbiAgICBnZXRVc2VySWQsXG4gICAgdHJhY2tFdmVudCxcbiAgICB0cmFja0luc3RhbGxEZXRhaWxzLFxuICAgIFNES0ZlYXR1cmVcbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IFdvcmtlck1lc3NhZ2VUeXBlLCBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlIH0gZnJvbSAnLi93b3JrZXIvbWVzc2FnaW5nJztcbmltcG9ydCB7XG4gICAgZ2V0TW9zdFJlY2VudGx5T3BlbmVkUHVzaFBheWxvYWQsXG4gICAgcGVyc2lzdENvbmZpZ1xufSBmcm9tICcuL2NvcmUvc3RvcmFnZSc7XG5pbXBvcnQgZ2V0UHVzaE9wc01hbmFnZXIsIHtcbiAgICBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbixcbiAgICBub3RpZmljYXRpb25Gcm9tUGF5bG9hZCxcbiAgICB0cmFja09wZW5Gcm9tUXVlcnlcbn0gZnJvbSAnLi9jb3JlL3B1c2gnO1xuXG5pbXBvcnQgeyBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB9IGZyb20gJy4vY29yZS9jaGFubmVscyc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyIH0gZnJvbSAnLi9wcm9tcHRzJztcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZVdvcmtlciwgaXNNb2JpbGUgfSBmcm9tICcuL2NvcmUvdXRpbHMnO1xuaW1wb3J0IFJvb3RGcmFtZSBmcm9tICcuL2NvcmUvcm9vdC1mcmFtZSc7XG5pbXBvcnQgRERMTWFuYWdlciBmcm9tICcuL2RkbC9tYW5hZ2VyJztcblxuaW50ZXJmYWNlIEt1bXVsb3NDb25maWcgZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgICBvblB1c2hSZWNlaXZlZD86IChwYXlsb2FkOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcbiAgICBvblB1c2hPcGVuZWQ/OiAocGF5bG9hZDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEt1bXVsb3Mge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBLdW11bG9zQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJSZWc/OiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvbXB0TWFuYWdlcj86IFByb21wdE1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZGxNYW5hZ2VyPzogRERMTWFuYWdlcjtcbiAgICBwcml2YXRlIGNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyPzogQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSByb290RnJhbWU6IFJvb3RGcmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChjb25maWcpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChjb25maWcpO1xuXG4gICAgICAgIHBlcnNpc3RDb25maWcoY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucm9vdEZyYW1lID0gbmV3IFJvb3RGcmFtZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUmVnID0gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5wcm9tcHRNYW5hZ2VyID0gbmV3IFByb21wdE1hbmFnZXIoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RnJhbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5oYXNGZWF0dXJlKFNES0ZlYXR1cmUuRERMKSkge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAnRERMTWFuYWdlcjogRERMIGZlYXR1cmUgc3VwcG9ydCBvbmx5IGF2YWlsYWJsZSBvbiBtb2JpbGUgZGV2aWNlcywgYWJvcnRpbmcuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRkbE1hbmFnZXIgPSBuZXcgRERMTWFuYWdlcihcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3RGcmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXJJZGVudGlmaWVyKCk6IFByb21pc2U8VXNlcklkPiB7XG4gICAgICAgIHJldHVybiBnZXRVc2VySWQoKTtcbiAgICB9XG5cbiAgICBhc3NvY2lhdGVVc2VyKGlkZW50aWZpZXI6IFVzZXJJZCwgYXR0cmlidXRlcz86IFByb3BzT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBhc3NvY2lhdGVVc2VyKHRoaXMuY29udGV4dCwgaWRlbnRpZmllciwgYXR0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgY2xlYXJVc2VyQXNzb2NpYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBjbGVhclVzZXJBc3NvY2lhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQodHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNrRXZlbnQodGhpcy5jb250ZXh0LCB0eXBlLCBwcm9wZXJ0aWVzKS50aGVuKF8gPT4gdm9pZCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1nciA9IGF3YWl0IGdldFB1c2hPcHNNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIG1nclxuICAgICAgICAgICAgLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnZ3JhbnRlZCcgIT09IHBlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIG5vdCBncmFudGVkJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1nci5wdXNoUmVnaXN0ZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk6IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyID0gbmV3IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Xb3JrZXJNZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGUuZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZS5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25QdXNoUmVjZWl2ZWQ/LihwdXNoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgYXN5bmMgbWF5YmVGaXJlT3BlbmVkSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk7XG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHVzaCA9IG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKHBheWxvYWQpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaE9wZW5lZD8uKHB1c2gpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBCZWxsUHJvbXB0Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcbmltcG9ydCB7IERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMLCBpbnZlcnNlUG9zaXRpb24sIFByb21wdFVpUHJvcHMsIFRvb2x0aXAgfSBmcm9tIFwiLi4vdWlcIjtcblxuZXhwb3J0IGNsYXNzIEJlbGwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvbXB0VWlQcm9wczxCZWxsUHJvbXB0Q29uZmlnPiwgbmV2ZXI+IHtcbiAgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtcHJvbXB0LSR7dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9IGt1bXVsb3MtYmVsbC1jb250YWluZXIga3VtdWxvcy1iZWxsLWNvbnRhaW5lci0ke3RoaXMucHJvcHMuY29uZmlnLnBvc2l0aW9ufWA7XG4gICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgdG9vbHRpcFBvcyA9IGludmVyc2VQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgY29uc3QgYmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmJnO1xuICAgICAgY29uc3QgZmdDb2xvciA9IGNvbmZpZy5jb2xvcnM/LmJlbGw/LmZnO1xuXG4gICAgICBjb25zdCBiZWxsU3R5bGUgPSB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGZnQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3M9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1iZWxsLWlubmVyIGt1bXVsb3MtdG9vbHRpcC1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2JlbGxTdHlsZSBhcyBhbnl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyMmMxLjEgMCAyLS45IDItMmgtNGMwIDEuMS44OSAyIDIgMnptNi02di01YzAtMy4wNy0xLjY0LTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjYzIDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17ZmdDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcG9zaXRpb249e3Rvb2x0aXBQb3N9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb25maWcubGFiZWxzPy50b29sdGlwPy5zdWJzY3JpYmUgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQge1xuICAgIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uLFxuICAgIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyxcbiAgICBDaGFubmVsTGlzdEl0ZW1cbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQsIFVJQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vdWktY29udGV4dCc7XG5pbXBvcnQgeyBDaGFubmVsc0xpc3QgfSBmcm9tICcuL2NoYW5uZWxzLWxpc3QnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaWNvblN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbHNEaWFsb2dQcm9wcyB7XG4gICAgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcbiAgICBvbkNvbmZpcm06IChjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsc0RpYWxvZyBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsc0RpYWxvZ1Byb3BzLFxuICAgIENoYW5uZWxEaWFsb2dTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxzRGlhbG9nUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKHRoaXMuc3RhdGUuY2hhbm5lbFNlbGVjdGlvbnMpO1xuICAgIH07XG5cbiAgICBvblNlbGVjdGVkQ2hhbm5lbENoYW5nZWQgPSAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFsuLi5jaGFubmVsTGlzdF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlckRpYWxvZyA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHthY3Rpb24uZGlhbG9nQ29uZmlnLnBvc2l0aW9ufWA7XG5cbiAgICAgICAgY29uc3QgeyBoZWFkaW5nLCBjb25maXJtQWN0aW9uIH0gPSBhY3Rpb24uZGlhbG9nQ29uZmlnLmxhYmVscztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5jb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uZmlybUFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogY29uZmlybUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VpQ29udGV4dD8ucGxhdGZvcm1Db25maWcuaWNvblVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvblwiXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uY2hhbm5lbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRDaGFubmVsQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29uZmlybUFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJEaWFsb2d9PC9VSUNvbnRleHQuQ29uc3VtZXI+O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBDaGFubmVsTGlzdEl0ZW0gfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0UHJvcHMge1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXTtcbiAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkOiAoY2hhbm5lbExpc3Q6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbm5lbExpc3RTdGF0ZSB7XG4gICAgY2hhbm5lbHM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIENoYW5uZWxMaXN0UHJvcHMsXG4gICAgQ2hhbm5lbExpc3RTdGF0ZVxuPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IENoYW5uZWxMaXN0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFubmVsczogWy4uLnRoaXMucHJvcHMuY2hhbm5lbExpc3RdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkKHRoaXMuc3RhdGUuY2hhbm5lbHMpO1xuICAgIH1cblxuICAgIG9uQ2hhbm5lbENoZWNrQ2hhbmdlKGNoYW5uZWxVdWlkOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3RhdGUuY2hhbm5lbHMuZmluZChcbiAgICAgICAgICAgIGMgPT4gYy5jaGFubmVsLnV1aWQgPT09IGNoYW5uZWxVdWlkXG4gICAgICAgICk7XG4gICAgICAgIGl0ZW0hLmNoZWNrZWQgPSBjaGVja2VkO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnN0YXRlLmNoYW5uZWxzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGFubmVscyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWNoYW5uZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtjaGFubmVscy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNoYW5uZWwudXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hhbm5lbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGguSlNYLlRhcmdldGVkRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5uZWxDaGVja0NoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhbm5lbC51dWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImt1bXVsb3MtY2hlY2tib3hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUHJvbXB0VWlQcm9wcyB9IGZyb20gJy4uL3VpJztcbmltcG9ydCB7XG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgUHVzaEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMsXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVUlDb250ZXh0LCBVSUNvbnRleHRTdGF0ZSB9IGZyb20gJy4uL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbm5lbHNMaXN0IH0gZnJvbSAnLi9jaGFubmVscy1saXN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgUHJvbXB0VWlQcm9wczxBbGVydFByb21wdENvbmZpZyB8IFB1c2hCYW5uZXJQcm9tcHRDb25maWc+LFxuICAgIERpYWxvZ1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvcHM6IFByb21wdFVpUHJvcHM8QWxlcnRQcm9tcHRDb25maWcgfCBQdXNoQmFubmVyUHJvbXB0Q29uZmlnPlxuICAgICkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIG9uUmVxdWVzdENhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgb25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkID0gKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbLi4uY2hhbm5lbExpc3RdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXJBbGVydCA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1wcm9tcHQtJHt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX0ga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHtjb25maWcucG9zaXRpb259YDtcblxuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGJvZHksIGRlY2xpbmVBY3Rpb24sIGFjY2VwdEFjdGlvbiB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmxhYmVscy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmxhYmVscy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uRmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfSA9XG4gICAgICAgICAgICBjb25maWcudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlRcbiAgICAgICAgICAgICAgICA/IGNvbmZpZy5jb2xvcnMuYWxlcnRcbiAgICAgICAgICAgICAgICA6IGNvbmZpZy5jb2xvcnMuYmFubmVyO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRlY2xpbmVBY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBhY2NlcHRBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aUNvbnRleHQucGxhdGZvcm1Db25maWcuaWNvblVybH0pYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0taWNvbmB9XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWhlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntoZWFkaW5nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYm9keWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbExpc3Q9e2dldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpQ29udGV4dC5jaGFubmVsTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0Q2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FjY2VwdEFjdGlvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia3VtdWxvcy1hY3Rpb24tYnV0dG9uIGt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8VUlDb250ZXh0LkNvbnN1bWVyPnt0aGlzLnJlbmRlckFsZXJ0fTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRXZlbnRQYXlsb2FkLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBTZGtFdmVudCxcbiAgICBQcm9tcHRVaUFjdGlvbnMsXG4gICAgUmVtaW5kZXJUaW1lVW5pdCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBVaUFjdGlvblR5cGUsXG4gICAgQ2hhbm5lbFN1YkFjdGlvbixcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24sXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyLCB7XG4gICAgUHVzaE9wc01hbmFnZXIsXG4gICAgUHVzaFN1YnNjcmlwdGlvblN0YXRlXG59IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBoLCByZW5kZXIsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi4vY29yZS9jaGFubmVscyc7XG5pbXBvcnQgS3VtdWxvcyBmcm9tICcuLic7XG5pbXBvcnQgVWkgZnJvbSAnLi91aSc7XG5pbXBvcnQgeyB0cmlnZ2VyTWF0Y2hlZCB9IGZyb20gJy4vdHJpZ2dlcnMnO1xuaW1wb3J0IHsgcGVyc2lzdFByb21wdFJlbWluZGVyLCBnZXRQcm9tcHRSZW1pbmRlciB9IGZyb20gJy4uL2NvcmUvc3RvcmFnZSc7XG5pbXBvcnQgeyBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBVSUNvbnRleHQgfSBmcm9tICcuL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgbG9hZENvbmZpZyB9IGZyb20gJy4uL2NvcmUvY29uZmlnJztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vY29yZS9yb290LWZyYW1lJztcblxuZXhwb3J0IHR5cGUgUHJvbXB0TWFuYWdlclN0YXRlID1cbiAgICB8ICdsb2FkaW5nJ1xuICAgIHwgJ3JlYWR5J1xuICAgIHwgJ3JlcXVlc3RpbmcnXG4gICAgfCAncG9zdGFjdGlvbic7XG5cbmNvbnN0IFJFTUlOREVSX1RJTUVfVU5JVF9UT19NSUxMSVMgPSB7XG4gICAgW1JlbWluZGVyVGltZVVuaXQuSE9VUlNdOiAxMDAwICogNjAgKiA2MCxcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5EQVlTXTogMTAwMCAqIDYwICogNjAgKiAyNFxufTtcblxuLy8gbG9hZGluZyAtPiByZWFkeVxuLy8gcmVhZHkgLT4gcmVxdWVzdGluZ1xuLy8gcmVxdWVzdGluZyAtPiByZWFkeVxuLy8gcmVhZHkgLT4gcG9zdGFjdGlvblxuLy8gcG9zdGFjdGlvbiAtPiByZWFkeVxuXG5leHBvcnQgY2xhc3MgUHJvbXB0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBrdW11bG9zQ2xpZW50OiBLdW11bG9zO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RDb250YWluZXI6IFJvb3RGcmFtZUNvbnRhaW5lcjtcblxuICAgIHByaXZhdGUgc3RhdGU/OiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25TdGF0ZT86IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcml2YXRlIGV2ZW50UXVldWU6IEV2ZW50UGF5bG9hZDtcbiAgICBwcml2YXRlIHByb21wdHM6IHsgW3g6IHN0cmluZ106IFByb21wdENvbmZpZyB9O1xuICAgIHByaXZhdGUgYWN0aXZlUHJvbXB0czogUHJvbXB0Q29uZmlnW107XG4gICAgcHJpdmF0ZSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0PzogUHJvbXB0Q29uZmlnO1xuICAgIHByaXZhdGUgcHVzaE9wc01hbmFnZXI/OiBQdXNoT3BzTWFuYWdlcjtcbiAgICBwcml2YXRlIGNoYW5uZWxzOiBDaGFubmVsW107XG4gICAgcHJpdmF0ZSB1aT86IFVpO1xuICAgIHByaXZhdGUgcGxhdGZvcm1Db25maWc/OiBQbGF0Zm9ybUNvbmZpZztcbiAgICBwcml2YXRlIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBLdW11bG9zLCBjdHg6IENvbnRleHQsIHJvb3RGcmFtZTogUm9vdEZyYW1lKSB7XG4gICAgICAgIHRoaXMucHJvbXB0cyA9IHt9O1xuICAgICAgICB0aGlzLmV2ZW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzID0gW107XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbXTtcblxuICAgICAgICB0aGlzLnJvb3RDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdwdXNoJyk7XG4gICAgICAgIHRoaXMua3VtdWxvc0NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIGN0eC5zdWJzY3JpYmUoJ2V2ZW50VHJhY2tlZCcsIHRoaXMub25FdmVudFRyYWNrZWQpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2xvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXZlbnRUcmFja2VkID0gKGU6IFNka0V2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnUHJvbXB0IHRyaWdnZXIgc2F3IGV2ZW50JywgZSk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gZS5kYXRhIGFzIEV2ZW50UGF5bG9hZDtcblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUucHVzaCguLi5ldmVudHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSAncmVhZHknKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ05vdCByZWFkeSwgd2FpdGluZyBvbiBxdWV1ZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRyaWdnZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgYWN0aXZhdGVEZWZlcnJlZFByb21wdCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gYXN5bmMgKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nJyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXI/LnJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblJlcXVlc3RQb3N0QWN0aW9uUHJvbXB0ID0gYXN5bmMgKFxuICAgICAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICApID0+IHtcbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZycgIT09IGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSBwcm9tcHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc3RBY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncG9zdGFjdGlvbicpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUHJvbXB0QWNjZXB0ZWQgPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vblJlcXVlc3ROYXRpdmVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUHJvbXB0QWN0aW9ucyhwcm9tcHQpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oY2hhbm5lbFNlbGVjdGlvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAnc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIC8vaWYgKHByb21wdC5mZWF0dXJlID09PSBTREtGZWF0dXJlLlBVU0gpIHtcbiAgICAgICAgICAgIHRoaXMudWk/LnNob3dUb2FzdChwcm9tcHQubGFiZWxzPy50aGFua3NGb3JTdWJzY3JpYmluZyEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qb3N0QWN0aW9uQ29uZmlybSA9IGFzeW5jIChcbiAgICAgICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVVc2VyQ2hhbm5lbFNlbGVjdGlvbihjaGFubmVsU2VsZWN0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgdGhpcy5oaWRlQW5kU3VwcHJlc3NQcm9tcHRzKHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Qcm9tcHREZWNsaW5lZCA9IChwcm9tcHQ6IFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLm1heWJlUGVyc2lzdFJlbWluZGVyKHByb21wdCk7XG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgeyBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuZm9yRWFjaChwID0+IHRoaXMuaGlkZVByb21wdChwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKCFwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdXaWxsIGhhbmRsZSBhY3Rpb25zOiAnLCBwcm9tcHQuYWN0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbFN1Yk1nciA9IHRoaXMua3VtdWxvc0NsaWVudC5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gYXdhaXQgY2hhbm5lbFN1Yk1nci5saXN0Q2hhbm5lbHMoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUNoYW5uZWxTdWJBY3Rpb25zKHByb21wdCk7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlQ2hhbm5lbFBvc3RBY3Rpb25zKHByb21wdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDaGFubmVsU3ViQWN0aW9ucyhwcm9tcHQ6IFByb21wdENvbmZpZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHByb21wdC5hY3Rpb25zLmZpbHRlcjxDaGFubmVsU3ViQWN0aW9uPihcbiAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdXVpZHNUb1N1YnNjcmliZSA9IGFjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsdG9TdWIgPSB0aGlzLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGMgPT4gYy51dWlkID09PSBhY3Rpb24uY2hhbm5lbFV1aWQgJiYgYy5zdWJzY3JpYmVkID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSBjaGFubmVsdG9TdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFVuYWJsZSB0byBzdWJzY3JpYmUgdG8gY2hhbm5lbCAnJHthY3Rpb24uY2hhbm5lbFV1aWR9JyBhcyBpdCBkb2VzIG5vdCBleGlzdGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5jaGFubmVsVXVpZCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5rdW11bG9zQ2xpZW50XG4gICAgICAgICAgICAuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1dWlkc1RvU3Vic2NyaWJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxQb3N0QWN0aW9ucyhcbiAgICAgICAgcHJvbXB0OiBQcm9tcHRDb25maWdcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvc3QgYWN0aW9ucyBvbmx5IGFwcGx5IHRvIGB1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZ2AgYWN0aW9uc1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gcHJvbXB0LmFjdGlvbnMuZmlsdGVyPFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uPihcbiAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbiA9PlxuICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFhY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VycmVudGx5IG9ubHkgZXhwZWN0aW5nIDEgY29uZmlndXJlZCBgdXNlckNoYW5uZWxTZWxlY3REaWFsb2dgIGFjdGlvblxuICAgICAgICB0aGlzLm9uUmVxdWVzdFBvc3RBY3Rpb25Qcm9tcHQocHJvbXB0LCBhY3Rpb25zWzBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVVzZXJDaGFubmVsU2VsZWN0aW9uKFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGNoYW5uZWxTZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFubmVsU3ViTWdyID0gdGhpcy5rdW11bG9zQ2xpZW50LmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gIWNzLmNoZWNrZWQpXG4gICAgICAgICAgICAubWFwKGNzID0+IGNzLmNoYW5uZWwudXVpZCk7XG4gICAgICAgIGF3YWl0IGNoYW5uZWxTdWJNZ3IudW5zdWJzY3JpYmUodW5zdWJzY3JpYmVzKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci5zdWJzY3JpYmUoc3Vic2NyaWJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSB8fCAhdGhpcy5zdGF0ZSB8fCAhdGhpcy5wbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVJQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnOiB0aGlzLnBsYXRmb3JtQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdDogdGhpcy5jaGFubmVsc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiAodGhpcy51aSA9IHIpfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRzPXt0aGlzLmFjdGl2ZVByb21wdHN9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICBvblBvc3RBY3Rpb25Db25maXJtPXt0aGlzLm9uUG9zdEFjdGlvbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ9e3RoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc3RBY3Rpb249e3RoaXMuY3VycmVudFBvc3RBY3Rpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVUlDb250ZXh0LlByb3ZpZGVyPixcbiAgICAgICAgICAgIHRoaXMucm9vdENvbnRhaW5lci5lbGVtZW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBldmFsdWF0ZVRyaWdnZXJzKCkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0V2YWx1YXRpbmcgcHJvbXB0IHRyaWdnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZFByb21wdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5wcm9tcHRzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLnByb21wdHNbaWRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50UXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRRdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHRTdXBwcmVzc2VkID0gYXdhaXQgdGhpcy5pc1Byb21wdFN1cHByZXNzZWQocHJvbXB0KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIXByb21wdFN1cHByZXNzZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck1hdGNoZWQocHJvbXB0LCBldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRBY3Rpb25OZWVkc1Rha2VuKHByb21wdClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFByb21wdHMucHVzaChwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVQcm9tcHRzKG1hdGNoZWRQcm9tcHRzKTtcbiAgICAgICAgdGhpcy5ldmVudFF1ZXVlID0gW107XG4gICAgfVxuXG4gICAgcHJvbXB0QWN0aW9uTmVlZHNUYWtlbihwcm9tcHQ6IFByb21wdENvbmZpZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3Vuc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hhbm5lbHNUb1N1YiA9XG4gICAgICAgICAgICBwcm9tcHQuYWN0aW9uc1xuICAgICAgICAgICAgICAgID8uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgQ2hhbm5lbFN1YkFjdGlvbiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoYSA9PiBhLmNoYW5uZWxVdWlkKSA/PyBbXTtcbiAgICAgICAgY29uc3QgbmVlZHNUb1N1YiA9XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBjID0+IGNoYW5uZWxzVG9TdWIuaW5jbHVkZXMoYy51dWlkKSAmJiAhYy5zdWJzY3JpYmVkXG4gICAgICAgICAgICApLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgaWYgKG5lZWRzVG9TdWIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdCBhcyBQcm9tcHRVaUFjdGlvbnM7XG5cbiAgICAgICAgaWYgKCF1aUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdWlBY3Rpb25zLmRlY2xpbmU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5SRU1JTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihwcm9tcHQudXVpZCwge1xuICAgICAgICAgICAgICAgICAgICBkZWNsaW5lZE9uOiBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERUNMSU5FOlxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQsICdzdXBwcmVzc2VkJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBkZWNsaW5lIGFjdGlvbiB0eXBlICR7dHlwZX0gc3VwcG9ydGVkIGZvciBwcm9tcHQgJHtwcm9tcHQudXVpZH0sIGZhbGwgYmFjayB0byBhbHdheXMgc2hvdyB0aGlzIHByb21wdCB3aGVuIGRlY2xpbmVkYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGVQcm9tcHQocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpc1Byb21wdFN1cHByZXNzZWQocHJvbXB0OiBQcm9tcHRDb25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVtaW5kZXIgPSBhd2FpdCBnZXRQcm9tcHRSZW1pbmRlcihwcm9tcHQudXVpZCk7XG5cbiAgICAgICAgaWYgKCFyZW1pbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzdXBwcmVzc2VkJyA9PT0gcmVtaW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdCBhcyBQcm9tcHRVaUFjdGlvbnM7XG5cbiAgICAgICAgaWYgKHVpQWN0aW9ucy5kZWNsaW5lLnR5cGUgIT09IFVpQWN0aW9uVHlwZS5SRU1JTkQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhdGhpcy5oYXNQcm9tcHRSZW1pbmRlckVsYXBzZWQoXG4gICAgICAgICAgICByZW1pbmRlci5kZWNsaW5lZE9uLFxuICAgICAgICAgICAgdWlBY3Rpb25zLmRlY2xpbmUuZGVsYXlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhc1Byb21wdFJlbWluZGVyRWxhcHNlZChcbiAgICAgICAgZGVjbGluZWRPbk1pbGxpczogbnVtYmVyLFxuICAgICAgICBkZWxheUNvbmZpZzogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZ1xuICAgICk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgRGF0ZS5ub3coKSAtIGRlY2xpbmVkT25NaWxsaXMgPlxuICAgICAgICAgICAgUkVNSU5ERVJfVElNRV9VTklUX1RPX01JTExJU1tkZWxheUNvbmZpZy50aW1lVW5pdF0gKlxuICAgICAgICAgICAgICAgIGRlbGF5Q29uZmlnLmR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWZlclByb21wdEFjdGl2YXRpb24ocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICAgICAgaWYgKCFwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgfHwgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgJ0RlZmVycmluZyBwcm9tcHQgYWN0aXZhdGlvbiBieSAnICsgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzXG4gICAgICAgICk7XG5cbiAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVEZWZlcnJlZFByb21wdCxcbiAgICAgICAgICAgIHByb21wdC50cmlnZ2VyLmFmdGVyU2Vjb25kcyAqIDEwMDAsXG4gICAgICAgICAgICBwcm9tcHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlUHJvbXB0KHByb21wdDogUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE8gaXMgaWRlbnRpdHkgb2sgZm9yIGNvbXBhcmlzb24gaGVyZS4uLiBtaWdodCBuZWVkIHRvIHVzZSBJRFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9tcHRzLmluZGV4T2YocHJvbXB0KSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMucHVzaChwcm9tcHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWN0aXZhdGVQcm9tcHRzKHByb21wdHM6IFByb21wdENvbmZpZ1tdKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnV2lsbCBhY3RpdmF0ZSBwcm9tcHRzOiAnLCBwcm9tcHRzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21wdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IHByb21wdHNbaV07XG5cbiAgICAgICAgICAgIGlmIChwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmZXJQcm9tcHRBY3RpdmF0aW9uKHByb21wdCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGF0ZShzdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnU2V0dGluZyBwcm9tcHQgbWFuYWdlciBzdGF0ZTonICsgc3RhdGUpO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMub25FbnRlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkVudGVyKHN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoT3BzTWFuYWdlciA9IGF3YWl0IGdldFB1c2hPcHNNYW5hZ2VyKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlci5oYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9IGF3YWl0IHRoaXMucHVzaE9wc01hbmFnZXIuZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByb21wdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzID0gYXdhaXQgdGhpcy5rdW11bG9zQ2xpZW50XG4gICAgICAgICAgICAgICAgICAgIC5nZXRDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcigpXG4gICAgICAgICAgICAgICAgICAgIC5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8uZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0YWN0aW9uJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUHJvbXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyA9IGF3YWl0IGxvYWRDb25maWcodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5wbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcHJvbXB0cyBjb25maWcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQucHVzaFByb21wdHMgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgdGhpcy5wcm9tcHRzID0geyAuLi50aGlzLmNvbnRleHQucHVzaFByb21wdHMgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4uKHRoaXMucGxhdGZvcm1Db25maWcucHJvbXB0cyB8fCB7fSkgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMucHJvbXB0cykge1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hhbm5lbE9wID0gQm9vbGVhbihcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdHNbaWRdLmFjdGlvbnM/LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgYSA9PiBhLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgICAgICAgICAgKT8ubGVuZ3RoXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoaGFzQ2hhbm5lbE9wKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMua3VtdWxvc0NsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRmlsdGVyVmFsdWUsIEt1bXVsb3NFdmVudCwgUHJvbXB0Q29uZmlnLCBQcm9wRmlsdGVyIH0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG5mdW5jdGlvbiBwcm9wSW4oZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmaWx0ZXJWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0ZXN0cyA9IGZpbHRlclZhbHVlLm1hcCh2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBgXiR7ZXNjYXBlUmVnRXhwKHYpLnJlcGxhY2UoL1xcXFxcXCovZywgJy4qJyl9JGA7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmlsdGVyTWF0Y2hlZCA9IHRlc3RzLnJlZHVjZShcbiAgICAgICAgICAgIChtYXRjaGVkLCBtYXRjaGVyKSA9PiBtYXRjaGVkIHx8IG1hdGNoZXIudGVzdChTdHJpbmcocHJvcFZhbHVlKSksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJNYXRjaGVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlLmluZGV4T2YocHJvcFZhbHVlIGFzIGFueSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHByb3BFcShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpbHRlclZhbHVlID09IHByb3BWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEd0KGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlID4gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BHdGUoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPj0gZmlsdGVyVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BMdChmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHRlKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlIDw9IGZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlck1hdGNoZWQoXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgZXZlbnQ6IEt1bXVsb3NFdmVudFxuKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHByb21wdC50cmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIuZXZlbnQgIT09IGV2ZW50LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdHJpZ2dlci5maWx0ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC5kYXRhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyLmZpbHRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgW3Byb3AsIG9wLCBmaWx0ZXJUZXN0VmFsdWVdID0gdHJpZ2dlci5maWx0ZXJzW2ldIGFzIFByb3BGaWx0ZXI7XG5cbiAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gZXZlbnQuZGF0YVtwcm9wXTtcblxuICAgICAgICBsZXQgZmlsdGVyTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ2luJzpcbiAgICAgICAgICAgIGNhc2UgJ0lOJzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEluKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wRXEoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BHdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdChmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BMdGUoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gZmlsdGVyIG9wZXJhdG9yOiAke29wfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsUHJvcEZpbHRlcnNNYXRjaCA9IGFsbFByb3BGaWx0ZXJzTWF0Y2ggJiYgZmlsdGVyTWF0Y2hlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxsUHJvcEZpbHRlcnNNYXRjaDtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbnRleHRTdGF0ZSB7XG4gICAgcGxhdGZvcm1Db25maWc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsW107XG59XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVJQ29udGV4dFN0YXRlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgaCwgSlNYIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHtcbiAgICBQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0VHlwZU5hbWUsXG4gICAgQWxlcnRQcm9tcHRDb25maWcsXG4gICAgUHVzaEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24sXG4gICAgQ2hhbm5lbExpc3RJdGVtLFxuICAgIFNES0ZlYXR1cmVcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBQcm9tcHRNYW5hZ2VyU3RhdGUgfSBmcm9tICcuJztcbmltcG9ydCB7IFB1c2hTdWJzY3JpcHRpb25TdGF0ZSB9IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBpc01vYmlsZSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmVsbCB9IGZyb20gJy4vYmVsbCc7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgeyBDaGFubmVsc0RpYWxvZyB9IGZyb20gJy4vZGlhbG9nL2NoYW5uZWxzLWRpYWxvZyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NVQlNDUklCRV9MQUJFTCA9ICdTdWJzY3JpYmUgZm9yIG5vdGlmaWNhdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZVBvc2l0aW9uKHBvczogc3RyaW5nKTogJ2xlZnQnIHwgJ3JpZ2h0JyB7XG4gICAgcmV0dXJuIHBvcy5pbmRleE9mKCdsZWZ0JykgPiAtMSA/ICdyaWdodCcgOiAnbGVmdCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlQcm9wczxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiB7XG4gICAgY29uZmlnOiBUO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG4gICAgcHJvbXB0TWFuYWdlclN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGU7XG4gICAgb25Qcm9tcHRBY2NlcHRlZDogKFxuICAgICAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgYWN0aW9uPzogVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb247XG59XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICAgIHBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5leHBvcnQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIENvbXBvbmVudDxUb29sdGlwUHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy10b29sdGlwIGt1bXVsb3MtdG9vbHRpcC0ke3RoaXMucHJvcHMucG9zaXRpb259YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIE92ZXJsYXlQcm9wcyB7XG4gICAgcHJvbXB0U3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcm9tcHQ/OiBQcm9tcHRDb25maWc7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbn1cblxuY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudDxPdmVybGF5UHJvcHMsIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZycgfHxcbiAgICAgICAgICAgICFwcm9tcHQub3ZlcmxheSB8fFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gcHJvbXB0Lm92ZXJsYXk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc2hhZGUsXG4gICAgICAgICAgICBjb2xvcjogb3ZlcmxheS5jb2xvcnMudGV4dFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgLy8gbWFpbnRhaW5zIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBleGlzdGluZyBibHVyIGNsYXNzIHRoYXRcbiAgICAgICAgICAgICAgICAvLyB3YXMgYmVpbmcgYXBwbGllZCBkaXJlY3RseSBieSB0aGlzIGNvbXBvbmVudCBwcmV2aW91c2x5XG4gICAgICAgICAgICAgICAgYmx1ckNsYXNzPVwia3VtdWxvcy1vdmVybGF5LWJsdXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPXtga3VtdWxvcy1vdmVybGF5IGt1bXVsb3Mtb3ZlcmxheS0ke2dldEJyb3dzZXJOYW1lKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia3VtdWxvcy1vdmVybGF5LXN0cmlwXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogb3ZlcmxheS5jb2xvcnMuc3RyaXAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NCAzM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e292ZXJsYXkuY29sb3JzLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjIuNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDEyLjU3LDExLjEyXG4gICAgICAgICAgIEMgMTIuNTcsMTEuMTIgNi44NCwyMC44MiA0LjEzLDIxLjAxXG4gICAgICAgICAgICAgMS40MiwyMS4yMSAyMC43MSwyOC42NyAyNi42MiwyOC42N00gNC4yMywyMS4wMVxuICAgICAgICAgICBDIDQuMjMsMjEuMDEgNTMuOTYsMTQuOTEgNjAuNjUsMy40N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAge292ZXJsYXkuaWNvblVybCAmJiA8aW1nIHNyYz17b3ZlcmxheS5pY29uVXJsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57b3ZlcmxheS5sYWJlbHMuaGVhZGluZ308L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvdmVybGF5LmxhYmVscy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5saW5rcz8ubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kTWFzaz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0sIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PjtcbiAgICB9XG59XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kTWFza1Byb3BzIHtcbiAgICBjbGFzcz86IHN0cmluZztcbiAgICBibHVyQ2xhc3M/OiBzdHJpbmc7XG4gICAgc3R5bGU/OiBKU1guQ1NTUHJvcGVydGllcztcbn1cblxuaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrU3RhdGUge1xuICAgIGJsdXJDbGFzc2VzOiBzdHJpbmdbXTtcbn1cblxuY2xhc3MgQmFja2dyb3VuZE1hc2sgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQmFja2dyb3VuZE1hc2tQcm9wcyxcbiAgICBCYWNrZ3JvdW5kTWFza1N0YXRlXG4+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQmFja2dyb3VuZE1hc2tQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYmx1ckNsYXNzZXMgPSB0aGlzLnByb3BzLmJsdXJDbGFzcz8uc3BsaXQoJyAnKSA/PyBbXTtcbiAgICAgICAgYmx1ckNsYXNzZXMucHVzaCgna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1cicpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBibHVyQ2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZUJsdXJTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBibHVyQ2xhc3NlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBibHVyQ2xhc3Nlcy5mb3JFYWNoKGJsdXJDbGFzcyA9PiB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGJsdXJDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoYmx1ckNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUJsdXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLmJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYmx1ckNsYXNzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzczogY2xhc3NOYW1lcywgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsna3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2snXTtcblxuICAgICAgICBpZiAoISFjbGFzc05hbWVzKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBVaVByb3BzIHtcbiAgICBwcm9tcHRzOiBQcm9tcHRDb25maWdbXTtcbiAgICBzdWJzY3JpcHRpb25TdGF0ZTogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByb21wdE1hbmFnZXJTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIG9uUHJvbXB0QWNjZXB0ZWQ6IChcbiAgICAgICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgb25Qcm9tcHREZWNsaW5lZDogKHByb21wdDogUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uUG9zdEFjdGlvbkNvbmZpcm06IChcbiAgICAgICAgcHJvbXB0OiBQcm9tcHRDb25maWcsXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApID0+IHZvaWQ7XG4gICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFByb21wdENvbmZpZztcbiAgICBjdXJyZW50UG9zdEFjdGlvbj86IFByb21wdEFjdGlvbjtcbn1cblxuaW50ZXJmYWNlIFVpU3RhdGUge1xuICAgIHRvYXN0UXVldWU6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaSBleHRlbmRzIENvbXBvbmVudDxVaVByb3BzLCBVaVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFVpUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlcXVldWVUb2FzdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2FzdFF1ZXVlOiB0aGlzLnN0YXRlLnRvYXN0UXVldWUuc2xpY2UoMSlcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNob3dUb2FzdChtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogWy4uLnRoaXMuc3RhdGUudG9hc3RRdWV1ZSwgbWVzc2FnZV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLmRlcXVldWVUb2FzdCwgMzIwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHt0aGlzLm1heWJlUmVuZGVyUHJvbXB0QmFja2dyb3VuZE1hc2soKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb21wdHMubWFwKHRoaXMucmVuZGVyUHJvbXB0LCB0aGlzKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvc3RBY3Rpb24oKX1cblxuICAgICAgICAgICAgICAgIHshaXNNb2JpbGUoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHQ9e3RoaXMucHJvcHMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG9hc3RRdWV1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0IG1lc3NhZ2U9e3RoaXMuc3RhdGUudG9hc3RRdWV1ZVswXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GcmFnbWVudD4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0aW5nJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBwcm9tcHRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0UHJvbXB0V2l0aE1hc2sgPSBwcm9tcHRzLmZpbHRlcihcbiAgICAgICAgICAgIHAgPT5cbiAgICAgICAgICAgICAgICAocC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCB8fFxuICAgICAgICAgICAgICAgICAgICBwLnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkJBTk5FUikgJiZcbiAgICAgICAgICAgICAgICAhIXAuYmFja2dyb3VuZE1hc2tcbiAgICAgICAgKVswXSBhcyBBbGVydFByb21wdENvbmZpZyB8IFB1c2hCYW5uZXJQcm9tcHRDb25maWc7XG5cbiAgICAgICAgaWYgKCFmaXJzdFByb21wdFdpdGhNYXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmaXJzdFByb21wdFdpdGhNYXNrLmJhY2tncm91bmRNYXNrIS5jb2xvcnMuYmdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gPEJhY2tncm91bmRNYXNrIHN0eWxlPXtzdHlsZX0gLz47XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvbXB0KHByb21wdDogUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIGlmICgncmVxdWVzdGluZycgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncG9zdGFjdGlvbicgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9tcHQuZmVhdHVyZSAhPT0gU0RLRmVhdHVyZS5QVVNIKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAocHJvbXB0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2JlbGwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxCZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnByb3BzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0TWFuYWdlclN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0RGVjbGluZWQ9e3RoaXMucHJvcHMub25Qcm9tcHREZWNsaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAnYWxlcnQnOlxuICAgICAgICAgICAgY2FzZSAnYmFubmVyJzpcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uOiBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gcHJvbXB0LmFjdGlvbnM/LmZpbmQ8XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvblxuICAgICAgICAgICAgICAgICAgICA+KFxuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogUHJvbXB0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICApOiBhY3Rpb24gaXMgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJQb3N0QWN0aW9uKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50UG9zdEFjdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyAhPT0gcHJvbXB0TWFuYWdlclN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJyAhPT0gY3VycmVudFBvc3RBY3Rpb24/LnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhY2tncm91bmRNYXNrID0gbnVsbDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQkFOTkVSKSAmJlxuICAgICAgICAgICAgdW5kZWZpbmVkICE9PSBjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LmJhY2tncm91bmRNYXNrXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgbWFza0NvbmZpZyA9IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kTWFzayA9IChcbiAgICAgICAgICAgICAgICA8QmFja2dyb3VuZE1hc2tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBtYXNrQ29uZmlnLmNvbG9ycy5iZyB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7YmFja2dyb3VuZE1hc2t9XG4gICAgICAgICAgICAgICAgPENoYW5uZWxzRGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17Y3VycmVudFBvc3RBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17Y2hhbm5lbFNlbGVjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblBvc3RBY3Rpb25Db25maXJtKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcbmNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCB7IFB1c2hQYXlsb2FkIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcblxuZXhwb3J0IGVudW0gV29ya2VyTWVzc2FnZVR5cGUge1xuICAgIEtQdXNoUmVjZWl2ZWQgPSAnS1B1c2hSZWNlaXZlZCdcbn1cbmV4cG9ydCB0eXBlIFdvcmtlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDtcbiAgICBkYXRhOiBQdXNoUGF5bG9hZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGRhdGE6IGFueSk6IGRhdGEgaXMgV29ya2VyTWVzc2FnZSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIFdvcmtlck1lc3NhZ2VUeXBlWyhkYXRhIGFzIFdvcmtlck1lc3NhZ2UpLnR5cGVdICE9PSB1bmRlZmluZWRcbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==