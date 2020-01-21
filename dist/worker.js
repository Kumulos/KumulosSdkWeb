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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/worker.ts":
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! ./core */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ./core/storage */ "./src/core/storage/index.ts");
var push_1 = __webpack_require__(/*! ./core/push */ "./src/core/push.ts");
function withContext(fn) {
    return storage_1.getContextFromStoredConfig().then(function (ctx) { return (ctx ? fn(ctx) : undefined); });
}
// See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
self.addEventListener('install', function () {
    // MDN: The promise that skipWaiting() returns can be safely ignored
    self.skipWaiting();
});
// See https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('push', function (event) {
    var workCompleted = withContext(function (ctx) {
        var _a, _b;
        if (!event.data) {
            return;
        }
        var payload = event.data.json();
        if (!payload) {
            return;
        }
        var data = payload.data;
        if (!data || !data['k.message']) {
            return;
        }
        var messageData = data['k.message'];
        var deliveryTracked = core_1.trackEvent(ctx, core_1.EventType.MESSAGE_DELIVERED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var notificationShown = self.registration.showNotification(payload.title, {
            body: payload.msg,
            data: payload,
            icon: (_a = payload.icon, (_a !== null && _a !== void 0 ? _a : undefined)),
            image: (_b = payload.image, (_b !== null && _b !== void 0 ? _b : undefined)),
            requireInteraction: true
        });
        return Promise.all([deliveryTracked, notificationShown]);
    });
    event.waitUntil(workCompleted);
});
self.addEventListener('notificationclick', function (event) {
    var workCompleted = withContext(function (ctx) {
        var _a;
        var notification = event.notification;
        var payload = notification.data;
        if (!payload) {
            return;
        }
        var data = payload.data;
        if (!data || !data['k.message']) {
            return;
        }
        notification.close();
        var messageData = data['k.message'];
        var openTracked = core_1.trackEvent(ctx, core_1.EventType.MESSAGE_OPENED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var url = (_a = payload.url, (_a !== null && _a !== void 0 ? _a : '/'));
        var windowOpened = self.clients.openWindow(url);
        return Promise.all([openTracked, windowOpened]);
    });
    event.waitUntil(workCompleted);
});
self.addEventListener('pushsubscriptionchange', function (event) {
    if (Notification.permission !== 'granted') {
        // TODO mark unsubscribed?
        return;
    }
    var workCompleted = withContext(function (ctx) {
        return push_1.pushRegister(ctx, self.registration);
    });
    event.waitUntil(workCompleted);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcHVzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdG9yYWdlL2lkYi1rZXl2YWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSx3RUFBc0Q7QUFDdEQsb0ZBQTBDO0FBRTFDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixJQUFNLFFBQVEsR0FBRyxF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R0FBRyxDQUFDLENBQUM7UUFFbEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixFQUFFLGVBQUs7SUFDakQsSUFBSSxZQUFZLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUN2QywwQkFBMEI7UUFDMUIsT0FBTztLQUNWO0lBRUQsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQUc7UUFDakMsT0FBTyxtQkFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Indvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dvcmtlci50c1wiKTtcbiIsImltcG9ydCB7IGF1dGhlZEZldGNoLCBjeXJiNTMsIHV1aWR2NCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVsLCBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IFNES19WRVJTSU9OID0gJzEuMi4yJztcbmNvbnN0IFNES19UWVBFID0gMTA7XG5jb25zdCBFVkVOVFNfQkFTRV9VUkwgPSAnaHR0cHM6Ly9ldmVudHMua3VtdWxvcy5jb20nO1xuZXhwb3J0IGNvbnN0IFBVU0hfQkFTRV9VUkwgPSAnaHR0cHM6Ly9wdXNoLmt1bXVsb3MuY29tJztcblxuZXhwb3J0IHR5cGUgSW5zdGFsbElkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVXNlcklkID0gc3RyaW5nO1xuXG50eXBlIEpzb25pc2ggPVxuICAgIHwgc3RyaW5nXG4gICAgfCBudW1iZXJcbiAgICB8IGJvb2xlYW5cbiAgICB8IG51bGxcbiAgICB8IHsgW2tleTogc3RyaW5nXTogSnNvbmlzaCB9XG4gICAgfCB7IHRvSlNPTjogKCkgPT4gYW55IH1cbiAgICB8IEpzb25pc2hbXVxuICAgIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgdHlwZSBQcm9wc09iamVjdCA9IHsgW2tleTogc3RyaW5nXTogSnNvbmlzaCB9O1xuXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICAgIE1FU1NBR0VfREVMSVZFUkVEID0gJ2subWVzc2FnZS5kZWxpdmVyZWQnLFxuICAgIE1FU1NBR0VfT1BFTkVEID0gJ2subWVzc2FnZS5vcGVuZWQnLFxuICAgIFBVU0hfUkVHSVNURVJFRCA9ICdrLnB1c2guZGV2aWNlUmVnaXN0ZXJlZCcsXG4gICAgSU5TVEFMTF9UUkFDS0VEID0gJ2suc3RhdHMuaW5zdGFsbFRyYWNrZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGVkJyxcbiAgICBVU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRpb25DbGVhcmVkJyxcbiAgICBQQUdFX1ZJRVdFRCA9ICdrLnBhZ2VWaWV3ZWQnXG59XG5cbi8vIE5vdGUgZHVwbGljYXRlICdpbicgdnMgJ0lOJyBkdWUgdG8gbWlzYWxpZ25tZW50IGluIHNlcnZlciBjb25maWcgYW5kIHB1Ymxpc2hlZCBkb2NzIGZvciBtYW51YWwgY29uZmlnXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvciA9ICdpbicgfCAnSU4nIHwgJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XG5leHBvcnQgdHlwZSBGaWx0ZXJWYWx1ZSA9IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIFByb3BGaWx0ZXIgPSBbc3RyaW5nLCBGaWx0ZXJPcGVyYXRvciwgRmlsdGVyVmFsdWVdO1xuXG5pbnRlcmZhY2UgUHJvbXB0VHJpZ2dlciB7XG4gICAgZXZlbnQ6IHN0cmluZztcbiAgICBhZnRlclNlY29uZHM/OiBudW1iZXI7XG4gICAgZmlsdGVycz86IFByb3BGaWx0ZXJbXTtcbn1cblxuaW50ZXJmYWNlIFByb21wdE92ZXJsYXlDb25maWcge1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgbGFiZWxzOiB7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgYm9keTogc3RyaW5nO1xuICAgIH07XG4gICAgbGlua3M6IHsgbGFiZWw6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xuICAgIGNvbG9yczoge1xuICAgICAgICBzaGFkZTogc3RyaW5nO1xuICAgICAgICBzdHJpcDogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxuaW50ZXJmYWNlIEJlbGxQcm9tcHRDb25maWcge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0eXBlOiAnYmVsbCc7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBsYWJlbHM/OiB7XG4gICAgICAgIHRvb2x0aXA/OiB7XG4gICAgICAgICAgICBzdWJzY3JpYmU/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb2xvcnM/OiB7XG4gICAgICAgIGJlbGw/OiB7XG4gICAgICAgICAgICBiZz86IHN0cmluZztcbiAgICAgICAgICAgIGZnPzogc3RyaW5nO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcG9zaXRpb246ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcbiAgICBvdmVybGF5PzogUHJvbXB0T3ZlcmxheUNvbmZpZztcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnID0gQmVsbFByb21wdENvbmZpZztcbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZ3MgPSB7IFtrZXk6IHN0cmluZ106IFByb21wdENvbmZpZyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHNlY3JldEtleTogc3RyaW5nO1xuICAgIHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gICAgcHVzaFByb21wdHM/OiBQcm9tcHRDb25maWdzIHwgJ2F1dG8nO1xuICAgIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG59XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF1dGhIZWFkZXI6IHN0cmluZztcbiAgICByZWFkb25seSBzZXJ2aWNlV29ya2VyUGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHB1c2hQcm9tcHRzOiB7IFtrZXk6IHN0cmluZ106IFByb21wdENvbmZpZyB9IHwgJ2F1dG8nO1xuICAgIHJlYWRvbmx5IGF1dG9SZXN1YnNjcmliZTogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogU2RrRXZlbnRIYW5kbGVyW10gfTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG4gICAgICAgIHRoaXMuc2VjcmV0S2V5ID0gY29uZmlnLnNlY3JldEtleTtcbiAgICAgICAgdGhpcy52YXBpZFB1YmxpY0tleSA9IGNvbmZpZy52YXBpZFB1YmxpY0tleTtcbiAgICAgICAgdGhpcy5hdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt0aGlzLmFwaUtleX06JHt0aGlzLnNlY3JldEtleX1gKX1gO1xuICAgICAgICB0aGlzLnNlcnZpY2VXb3JrZXJQYXRoID0gY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoID8/ICcvd29ya2VyLmpzJztcbiAgICAgICAgdGhpcy5wdXNoUHJvbXB0cyA9IGNvbmZpZy5wdXNoUHJvbXB0cyA/PyAnYXV0byc7XG4gICAgICAgIHRoaXMuYXV0b1Jlc3Vic2NyaWJlID0gY29uZmlnLmF1dG9SZXN1YnNjcmliZSA/PyB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZWRTdHJpbmdQcm9wcyA9IFsnYXBpS2V5JywgJ3NlY3JldEtleScsICd2YXBpZFB1YmxpY0tleSddO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiByZXF1aXJlZFN0cmluZ1Byb3BzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnW3Byb3BdICE9PSAnc3RyaW5nJyB8fCBjb25maWdbcHJvcF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBgUmVxdWlyZWQgY29uZmlndXJhdGlvbiBrZXkgJyR7cHJvcH0nIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ2A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICBjb25maWcuc2VydmljZVdvcmtlclBhdGgubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ3NlcnZpY2VXb3JrZXJQYXRoJyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmcgKGlmIHN1cHBsaWVkKVwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldCgnaW5zdGFsbElkJywgdXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKCk6IFByb21pc2U8VXNlcklkPiB7XG4gICAgcmV0dXJuIGdldDxVc2VySWQgfCB1bmRlZmluZWQ+KCd1c2VySWQnKS50aGVuKFxuICAgICAgICB1c2VySWQgPT4gdXNlcklkID8/IGdldEluc3RhbGxJZCgpXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc29jaWF0ZVVzZXIoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGlkOiBVc2VySWQsXG4gICAgYXR0cmlidXRlcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBzZXQoJ3VzZXJJZCcsIGlkKTtcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgYXR0cmlidXRlc1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5VU0VSX0FTU09DSUFURUQsIHByb3BzKS50aGVuKF8gPT4ge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJVc2VyQXNzb2NpYXRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5VU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQsIHtcbiAgICAgICAgb2xkVXNlcklkZW50aWZpZXI6IGN1cnJlbnRVc2VySWRcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWwoJ3VzZXJJZCcpO1xufVxuXG5leHBvcnQgdHlwZSBLdW11bG9zRXZlbnQgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBkYXRhPzogUHJvcHNPYmplY3Q7XG59O1xuXG5leHBvcnQgdHlwZSBFdmVudFBheWxvYWQgPSBLdW11bG9zRXZlbnRbXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrRXZlbnQoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBpbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRQYXlsb2FkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdXVpZDogdXVpZHY0KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3QgdXJsID0gYCR7RVZFTlRTX0JBU0VfVVJMfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG5cbiAgICBjdHguYnJvYWRjYXN0KCdldmVudFRyYWNrZWQnLCBldmVudHMpO1xuXG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0luc3RhbGxEZXRhaWxzKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGFwcDoge1xuICAgICAgICAgICAgYnVuZGxlOiBsb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJywgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgICAgIHRhcmdldDogMiAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICB9LFxuICAgICAgICBzZGs6IHtcbiAgICAgICAgICAgIGlkOiBTREtfVFlQRSxcbiAgICAgICAgICAgIHZlcnNpb246IFNES19WRVJTSU9OXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICB9LFxuICAgICAgICBvczoge1xuICAgICAgICAgICAgLy8gRGV0ZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIHNlcnZlci1zaWRlIGZyb20gVUEgZGF0YVxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIG9uIGJlc3QtZWZmb3J0IGJhc2lzIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBuYW1lOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgdHo6XG4gICAgICAgICAgICAgICAgdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgID8gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgaXNTaW11bGF0b3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYXNoUGFydHMgPSBbXG4gICAgICAgIFNES19WRVJTSU9OLFxuICAgICAgICBwYXlsb2FkLmFwcC5idW5kbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLnR6LFxuICAgICAgICBwYXlsb2FkLmRldmljZS5sb2NhbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLm5hbWVcbiAgICBdO1xuICAgIGNvbnN0IGhhc2ggPSBjeXJiNTMoaGFzaFBhcnRzLmpvaW4oJ3wnKSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0hhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPignZGV0YWlsc0hhc2gnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdIYXNoID09PSBoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5JTlNUQUxMX1RSQUNLRUQsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKCgpID0+IHNldCgnZGV0YWlsc0hhc2gnLCBoYXNoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdm9pZCAwKTtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgYmFzZTY0VXJsRW5jb2RlLCBjeXJiNTMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvblN0YXRlID0gJ3N1YnNjcmliZWQnIHwgJ3Vuc3Vic2NyaWJlZCcgfCAnYmxvY2tlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VXb3JrZXIoXG4gICAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnU2VydmljZVdvcmtlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ05vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLCBhYm9ydGluZy4uLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1c2hSZWdpc3RlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgd29ya2VyUmVnOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgJ1B1c2ggbm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICBpZiAoZXhpc3RpbmdTdWIgJiYgIWhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LGV4aXN0aW5nU3ViKSkge1xuICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlXG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmRwb2ludCA9IHN1Yi5lbmRwb2ludDtcbiAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBjeXJiNTMoZW5kcG9pbnQpO1xuICAgIGNvbnN0IGV4cGlyeSA9IHN1Yi5leHBpcmF0aW9uVGltZTtcblxuICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGVuZHBvaW50SGFzaCAmJlxuICAgICAgICAoIWV4aXN0aW5nRXhwaXJ5IHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgIHR5cGU6IDMsXG4gICAgICAgIHRva2VuOiBzdWJcbiAgICB9KTtcblxuICAgIGF3YWl0IHNldCgncHVzaEVuZHBvaW50SGFzaCcsIGVuZHBvaW50SGFzaCk7XG4gICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgZXhwaXJ5KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICBjb25zdCBwZXJtID0gYXdhaXQgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKTtcblxuICAgIHN3aXRjaCAocGVybSkge1xuICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgY2FzZSAnZGVuaWVkJzpcbiAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG5cbiAgICBpZiAoIXJlZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwdXNoUmVnaXN0ZXIoY3R4LCByZWcpO1xuICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTpzdHJpbmcsIHN1YnNjcmlwdGlvbjpQdXNoU3Vic2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhpc3RpbmdTdWJLZXkgPSBzdWJzY3JpcHRpb24ub3B0aW9ucy5hcHBsaWNhdGlvblNlcnZlcktleTtcblxuICAgIGlmICghZXhpc3RpbmdTdWJLZXkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YktleSA9IGJhc2U2NFVybEVuY29kZShleGlzdGluZ1N1YktleSk7XG5cbiAgICByZXR1cm4gc3ViS2V5ID09PSB2YXBpZEtleTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShjdHg6Q29udGV4dCk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG4gICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnPy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBzdWIpKSB7XG4gICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eCA6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgIGlmIChwZXJtICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ0VuZHBvaW50SGFzaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIChleGlzdGluZ0V4cGlyeSA9PT0gbnVsbCB8fCBleGlzdGluZ0V4cGlyeSA9PT0gdW5kZWZpbmVkIHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpO1xuXG4gICAgICAgIGlmICghcmVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIHdvcmtlciwgYWJvcnRpbmcgYXV0by1yZXN1YnNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHB1c2hSZWdpc3RlcihjdHgsIHJlZyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBDb250ZXh0IH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywgY29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnKCk6IFByb21pc2U8Q29udGV4dCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBnZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycpLnRoZW4oY29uZmlnID0+XG4gICAgICAgIGNvbmZpZyA/IG5ldyBDb250ZXh0KGNvbmZpZykgOiB1bmRlZmluZWRcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuXCI7XG5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKDFlNykudG9TdHJpbmcoKSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKFxuICAgICAgICAvWzAxOF0vZyxcbiAgICAgICAgYyA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE51bWJlcihjKSBeXG4gICAgICAgICAgICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICZcbiAgICAgICAgICAgICAgICAgICAgKDE1ID4+IChOdW1iZXIoYykgLyA0KSkpXG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVxdWlyZWRUaGluZ3MgPSBbXG4gICAgICAgIHR5cGVvZiBQcm9taXNlLFxuICAgICAgICB0eXBlb2YgZmV0Y2gsXG4gICAgICAgIHR5cGVvZiBOb3RpZmljYXRpb24sXG4gICAgICAgIHR5cGVvZiBpbmRleGVkREIsXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcixcbiAgICAgICAgdHlwZW9mIFB1c2hNYW5hZ2VyXG4gICAgXTtcblxuICAgIHJldHVybiByZXF1aXJlZFRoaW5ncy5yZWR1Y2UoXG4gICAgICAgIChzdXBwb3J0ZWQ6IGJvb2xlYW4sIHRoaW5nKSA9PiBzdXBwb3J0ZWQgJiYgdGhpbmcgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICB0cnVlXG4gICAgKTtcbn1cblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvaW11bFxuY29uc3QgaW11bCA9XG4gICAgTWF0aC5pbXVsIHx8XG4gICAgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBiIHw9IDA7IC8vIGVuc3VyZSB0aGF0IG9wQiBpcyBhbiBpbnRlZ2VyLiBvcEEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvZXJjZWQuXG4gICAgICAgIC8vIGZsb2F0aW5nIHBvaW50cyBnaXZlIHVzIDUzIGJpdHMgb2YgcHJlY2lzaW9uIHRvIHdvcmsgd2l0aCBwbHVzIDEgc2lnbiBiaXRcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBoYW5kbGVkIGZvciBvdXIgY29udmllbmVuY2U6XG4gICAgICAgIC8vIDEuIDB4MDAzZmZmZmYgLypvcEEgJiAweDAwMGZmZmZmKi8gKiAweDdmZmZmZmZmIC8qb3BCKi8gPSAweDFmZmZmZjdmYzAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICB2YXIgcmVzdWx0ID0gKGEgJiAweDAwM2ZmZmZmKSAqIGI7XG4gICAgICAgIC8vIDIuIFdlIGNhbiByZW1vdmUgYW4gaW50ZWdlciBjb2Vyc2lvbiBmcm9tIHRoZSBzdGF0ZW1lbnQgYWJvdmUgYmVjYXVzZTpcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSArIDB4ZmZjMDAwMDAgPSAweDFmZmZmZmZmODAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmZmY4MDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICBpZiAoYSAmIDB4ZmZjMDAwMDAgLyohPT0gMCovKSByZXN1bHQgKz0gKChhICYgMHhmZmMwMDAwMCkgKiBiKSB8IDA7XG4gICAgICAgIHJldHVybiByZXN1bHQgfCAwO1xuICAgIH07XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MjE3MTQ4MFxuZXhwb3J0IGZ1bmN0aW9uIGN5cmI1MyhzdHI6IHN0cmluZywgc2VlZCA9IDApOiBudW1iZXIge1xuICAgIGxldCBoMSA9IDB4ZGVhZGJlZWYgXiBzZWVkLFxuICAgICAgICBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBjaDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoMSA9IGltdWwoaDEgXiBjaCwgMjY1NDQzNTc2MSk7XG4gICAgICAgIGgyID0gaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPVxuICAgICAgICBpbXVsKGgxIF4gKGgxID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMiBeIChoMiA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICBoMiA9XG4gICAgICAgIGltdWwoaDIgXiAoaDIgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgxIF4gKGgxID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnNcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoKFxuICAgIGN0eDpDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7bWV0aG9kOiAnR0VUJ31cbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBleGlzdGluZ0hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPz8ge307XG5cbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBjdHguYXV0aEhlYWRlcixcbiAgICAgICAgLi4uZXhpc3RpbmdIZWFkZXJzXG4gICAgfTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2hKc29uPFQ+KGN0eDpDb250ZXh0LHVybDpSZXF1ZXN0SW5mbyxvcHRpb25zPzpSZXF1ZXN0SW5pdCkgOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gYXV0aGVkRmV0Y2goY3R4LCB1cmwsIG9wdGlvbnMpLnRoZW4ociA9PiByLmpzb24oKSk7XG59XG5cbi8vIEJhc2VkIG9uIHRoZSBhbHBoYWJldHMgaW4gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzQ2NDggVGFibGVzIDEgJiAyXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VXJsRW5jb2RlKGJ1ZmZlcjpBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaW50cyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmFzZTY0RW5jb2RlZCA9IGJ0b2EoaW50cy5yZWR1Y2UoKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLCAnJykpO1xuICAgIGNvbnN0IHVybFZhcmlhbnQgPSBiYXNlNjRFbmNvZGVkLnJlcGxhY2UoJysnLCAnLScpLnJlcGxhY2UoJy8nLCAnXycpLnJlcGxhY2UoJz0nLCAnJyk7XG5cbiAgICByZXR1cm4gdXJsVmFyaWFudDtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4vY29yZSc7XG5cbmltcG9ydCB7IGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnIH0gZnJvbSAnLi9jb3JlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgcHVzaFJlZ2lzdGVyIH0gZnJvbSAnLi9jb3JlL3B1c2gnO1xuXG4vLyBMaXR0bGUgYml0IG9mIGEgaGFjaywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE0ODc3I2lzc3VlY29tbWVudC0zNDAyNzkyOTNcbmRlY2xhcmUgdmFyIHNlbGY6IFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTtcblxuZnVuY3Rpb24gd2l0aENvbnRleHQoZm46IChjdHg6IENvbnRleHQpID0+IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZygpLnRoZW4oY3R4ID0+IChjdHggPyBmbihjdHgpIDogdW5kZWZpbmVkKSk7XG59XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZVdvcmtlckdsb2JhbFNjb3BlL3NraXBXYWl0aW5nXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoKSA9PiB7XG4gICAgLy8gTUROOiBUaGUgcHJvbWlzZSB0aGF0IHNraXBXYWl0aW5nKCkgcmV0dXJucyBjYW4gYmUgc2FmZWx5IGlnbm9yZWRcbiAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG59KTtcblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbGllbnRzL2NsYWltXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLmpzb24oKTtcblxuICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhWydrLm1lc3NhZ2UnXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBkYXRhWydrLm1lc3NhZ2UnXTtcbiAgICAgICAgY29uc3QgZGVsaXZlcnlUcmFja2VkID0gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX0RFTElWRVJFRCwge1xuICAgICAgICAgICAgdHlwZTogbWVzc2FnZURhdGEudHlwZSxcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlRGF0YS5kYXRhLmlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblNob3duID0gc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICAgIHBheWxvYWQudGl0bGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYm9keTogcGF5bG9hZC5tc2csXG4gICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBpY29uOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGltYWdlOiBwYXlsb2FkLmltYWdlID8/IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2RlbGl2ZXJ5VHJhY2tlZCwgbm90aWZpY2F0aW9uU2hvd25dKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LndhaXRVbnRpbCh3b3JrQ29tcGxldGVkKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT4ge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBldmVudC5ub3RpZmljYXRpb247XG5cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IG5vdGlmaWNhdGlvbi5kYXRhO1xuXG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQuZGF0YTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbJ2subWVzc2FnZSddKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IGRhdGFbJ2subWVzc2FnZSddO1xuICAgICAgICBjb25zdCBvcGVuVHJhY2tlZCA9IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuTUVTU0FHRV9PUEVORUQsIHtcbiAgICAgICAgICAgIHR5cGU6IG1lc3NhZ2VEYXRhLnR5cGUsXG4gICAgICAgICAgICBpZDogbWVzc2FnZURhdGEuZGF0YS5pZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cmwgPSBwYXlsb2FkLnVybCA/PyAnLyc7XG5cbiAgICAgICAgY29uc3Qgd2luZG93T3BlbmVkID0gc2VsZi5jbGllbnRzLm9wZW5XaW5kb3codXJsKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW29wZW5UcmFja2VkLCB3aW5kb3dPcGVuZWRdKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LndhaXRVbnRpbCh3b3JrQ29tcGxldGVkKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgLy8gVE9ETyBtYXJrIHVuc3Vic2NyaWJlZD9cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT4ge1xuICAgICAgICByZXR1cm4gcHVzaFJlZ2lzdGVyKGN0eCwgc2VsZi5yZWdpc3RyYXRpb24pO1xuICAgIH0pO1xuXG4gICAgZXZlbnQud2FpdFVudGlsKHdvcmtDb21wbGV0ZWQpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9