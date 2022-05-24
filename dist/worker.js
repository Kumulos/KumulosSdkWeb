/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
    SystemEventType["PAGE_VIEWED"] = "k.pageViewed";
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

/***/ "./src/core/storage/idb-keyval.ts":
/*!****************************************!*\
  !*** ./src/core/storage/idb-keyval.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {


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

/***/ "./src/worker/index.ts":
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var messaging_1 = __webpack_require__(/*! ./messaging */ "./src/worker/messaging.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/worker/utils.ts");
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
function withContext(fn) {
    return (0, storage_1.getContextFromStoredConfig)().then(function (ctx) {
        if (ctx) {
            return fn(ctx);
        }
        if (!self.KUMULOS_INIT) {
            return;
        }
        (0, core_1.assertConfigValid)(self.KUMULOS_INIT);
        return (0, storage_1.persistConfig)(self.KUMULOS_INIT).then(function (config) {
            ctx = new core_1.Context(config);
            return fn(ctx);
        });
    });
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
        var deliveryTracked = (0, core_1.trackEvent)(ctx, core_1.SystemEventType.MESSAGE_DELIVERED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var receivedEventBroadcast = (0, utils_1.broadcastFromWorker)({
            type: messaging_1.WorkerMessageType.KPushReceived,
            data: payload
        });
        var notificationShown = self.registration.showNotification(payload.title, {
            body: payload.msg,
            data: payload,
            icon: (_a = payload.icon) !== null && _a !== void 0 ? _a : undefined,
            image: (_b = payload.image) !== null && _b !== void 0 ? _b : undefined,
            requireInteraction: true
        });
        return Promise.all([
            notificationShown,
            receivedEventBroadcast,
            deliveryTracked
        ]);
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
        var openTracked = (0, core_1.trackEvent)(ctx, core_1.SystemEventType.MESSAGE_OPENED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var url = (_a = payload.url) !== null && _a !== void 0 ? _a : '/';
        var payloadPersisted = (0, storage_1.persistOpenedPushPayload)(payload);
        return payloadPersisted.then(function () {
            var windowOpened = self.clients.openWindow(url);
            return Promise.all([windowOpened, openTracked]);
        });
    });
    event.waitUntil(workCompleted);
});
self.addEventListener('pushsubscriptionchange', function (event) {
    if (Notification.permission !== 'granted') {
        // TODO mark unsubscribed?
        return;
    }
    var workCompleted = withContext(function (ctx) {
        return (0, push_1["default"])(ctx).then(function (mgr) { return mgr.pushRegister(ctx); });
    });
    event.waitUntil(workCompleted);
});


/***/ }),

/***/ "./src/worker/messaging.ts":
/*!*********************************!*\
  !*** ./src/worker/messaging.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


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


/***/ }),

/***/ "./src/worker/utils.ts":
/*!*****************************!*\
  !*** ./src/worker/utils.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


exports.__esModule = true;
exports.broadcastFromWorker = exports.postEventToClient = void 0;
function postEventToClient(event, client) {
    client.postMessage(event);
}
exports.postEventToClient = postEventToClient;
function broadcastFromWorker(event) {
    var postEvent = function (client) { return postEventToClient(event, client); };
    return self.clients.matchAll().then(function (clients) {
        clients.forEach(postEvent);
    });
}
exports.broadcastFromWorker = broadcastFromWorker;


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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/worker/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFNVztBQUNYLG9GQUFxQztBQUVyQyx3RUFBMEM7QUFFMUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUFXLElBQUssUUFBQztJQUNuQyxnQkFBZ0IsRUFBRSxVQUFHLEdBQUcsV0FBUTtJQUNoQyx3QkFBd0IsRUFBRSxVQUFHLEdBQUcsa0JBQWU7Q0FDbEQsQ0FBQyxFQUhvQyxDQUdwQyxDQUFDO0FBRUgsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFNUMsSUFBSyxlQUdKO0FBSEQsV0FBSyxlQUFlO0lBQ2hCLHdDQUFxQjtJQUNyQiw4QkFBVztBQUNmLENBQUMsRUFISSxlQUFlLEtBQWYsZUFBZSxRQUduQjtBQUVELFNBQWUsVUFBVSxDQUNyQixHQUFXLEVBQ1gsUUFBZ0IsRUFDaEIsR0FBWTs7Ozs7OztvQkFFTixTQUFTLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QixxQkFBTSxpQkFBRyxFQUFjLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7b0JBQTNELE1BQU0sR0FBRyxTQUFrRDtvQkFHMUQscUJBQU0saUJBQUcsRUFBUyxTQUFTLENBQUMsd0JBQXdCLENBQUM7O29CQURwRCxZQUFZLEdBQ2QsT0FBQyxTQUFxRCxDQUFDLG1DQUFJLENBQUM7b0JBQzVELG1CQUFtQixHQUFHLEtBQUssQ0FBQzt5QkFFNUIsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsR0FBNUMsd0JBQTRDO29CQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Ozs7b0JBRzdDLHFCQUFNLDJCQUFlLEVBQWMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQXJELE1BQU0sR0FBRyxTQUE0QyxDQUFDO29CQUN0RCxtQkFBbUIsR0FBRyxJQUFJLENBQUM7Ozs7b0JBRTNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7Ozt5QkFLcEIsbUJBQW1CLEVBQW5CLHdCQUFtQjtvQkFDbkIscUJBQU0saUJBQUcsRUFBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDOztvQkFBN0MsU0FBNkMsQ0FBQztvQkFDOUMscUJBQU0saUJBQUcsRUFBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztvQkFBekQsU0FBeUQsQ0FBQzs7d0JBRzlELHNCQUFPLE1BQU0sRUFBQzs7OztDQUNqQjtBQUVELFNBQXNCLGtCQUFrQixDQUNwQyxHQUFZOzs7Ozt3QkFHUCxxQkFBTSxVQUFVLENBQ2IsVUFBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQU8sQ0FBQyxJQUFJLENBQUMsbUJBQWdCLEVBQ2xELGVBQWUsQ0FBQyxRQUFRLEVBQ3hCLEdBQUcsQ0FDTjt3QkFMTCxzQkFBTyxDQUNILE9BQUMsU0FJQSxDQUFDLG1DQUFJLEVBQUUsQ0FDWCxFQUFDOzs7O0NBQ0w7QUFWRCxnREFVQztBQUVELFNBQXNCLGFBQWEsQ0FDL0IsR0FBWTs7Ozs7d0JBRVMscUJBQU0sbUJBQVksR0FBRTs7b0JBQW5DLFlBQVksR0FBRyxTQUFvQjs7OztvQkFHOUIscUJBQU0sVUFBVSxDQUNuQixVQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBNEIsWUFBWSxDQUFFLEVBQzNFLGVBQWUsQ0FBQyxHQUFHLEVBQ25CLEdBQUcsQ0FDTjt3QkFKRCxzQkFBTyxTQUlOLEVBQUM7OztvQkFFRixPQUFPLENBQUMsSUFBSSxDQUNSLCtEQUErRCxFQUMvRCxLQUFHLENBQ04sQ0FBQzs7Ozs7O0NBR1Q7QUFsQkQsc0NBa0JDO0FBRUQsU0FBc0IsOEJBQThCLENBQ2hELFVBQWtCOzs7Ozs7b0JBRVosU0FBUyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRXRDLHFCQUFNLGlCQUFHLEVBQW9CLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7b0JBQWxFLE9BQU8sR0FBRyxTQUF3RDtvQkFFdEUsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDVixzQkFBTztxQkFDVjtvQkFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQXJCLENBQXFCLENBQUMsQ0FBQztvQkFFckQscUJBQU0saUJBQUcsRUFBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDOztvQkFBOUMsU0FBOEMsQ0FBQzs7Ozs7Q0FDbEQ7QUFkRCx3RUFjQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHRCx3RUFBc0Q7QUFDdEQsb0ZBQTBDO0FBSTFDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUF1QnBCLElBQVksZUFRWDtBQVJELFdBQVksZUFBZTtJQUN2Qiw0REFBeUM7SUFDekMsc0RBQW1DO0lBQ25DLDhEQUEyQztJQUMzQyw2REFBMEM7SUFDMUMsNkRBQTBDO0lBQzFDLDhFQUEyRDtJQUMzRCwrQ0FBNEI7QUFDaEMsQ0FBQyxFQVJXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBUTFCO0FBRUQsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3RCLCtCQUFhO0lBQ2IsaUNBQWU7SUFDZixtQ0FBaUI7SUFDakIsMkNBQXlCO0FBQzdCLENBQUMsRUFMVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUt6QjtBQXlFRCxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsbUNBQW1CO0lBQ25CLGlDQUFpQjtJQUNqQiw0Q0FBNEI7SUFDNUIsa0RBQWtDO0FBQ3RDLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQWdCRCxJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDeEIsbUNBQWU7SUFDZixpQ0FBYTtBQUNqQixDQUFDLEVBSFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFHM0I7QUFtQkQsSUFBWSxjQVlYO0FBWkQsV0FBWSxjQUFjO0lBQ3RCLHVDQUFxQjtJQUNyQiwyQ0FBeUI7SUFDekIseUNBQXVCO0lBQ3ZCLDZDQUEyQjtJQUMzQixtQ0FBaUI7SUFDakIsK0NBQTZCO0lBQzdCLDZDQUEyQjtJQUMzQixpREFBK0I7SUFDL0IsK0NBQTZCO0lBQzdCLDZCQUFXO0lBQ1gsbUNBQWlCO0FBQ3JCLENBQUMsRUFaVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQVl6QjtBQTRKRCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDbEIsMkJBQWE7SUFDYix5QkFBVztBQUNmLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUVELElBQVksT0FJWDtBQUpELFdBQVksT0FBTztJQUNmLHdCQUFhO0lBQ2Isc0JBQVc7SUFDWCw0QkFBaUI7QUFDckIsQ0FBQyxFQUpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUlsQjtBQXVCRDtJQWFJLGlCQUFZLE1BQXFCOzs7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBUyxJQUFJLENBQUMsVUFBRyxJQUFJLENBQUMsTUFBTSxjQUFJLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQU0sQ0FBQyxpQkFBaUIsbUNBQUksWUFBWSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBTSxDQUFDLFdBQVcsbUNBQUksTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBTSxDQUFDLGVBQWUsbUNBQUksSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBTSxDQUFDLFFBQVEsbUNBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU07WUFDUCxHQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUcsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsY0FBYztZQUNoRSxHQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUcsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFjO1lBQ3BFLEdBQUMsT0FBTyxDQUFDLEdBQUcsSUFBRyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQWM7ZUFDbkUsQ0FBQztJQUNOLENBQUM7SUFFRCwyQkFBUyxHQUFULFVBQVUsS0FBbUIsRUFBRSxPQUF3QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0MsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFTLEdBQVQsVUFBVSxLQUFtQixFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUk7YUFDUCxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsT0FBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLE9BQWdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFoRVksMEJBQU87QUFrRXBCLFNBQWdCLGlCQUFpQixDQUFDLE1BQVc7SUFDekMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIsTUFBTSwwQkFBMEIsQ0FBQztLQUNwQztJQUVELElBQU0sUUFBUSxHQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUNwRCxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDakIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVwQixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pELE9BQU8scUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEM7QUFDTCxDQUFDO0FBYkQsOENBYUM7QUFFRCxTQUFTLHFCQUFxQixDQUFDLE1BQVc7SUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDaEYsS0FBbUIsVUFBbUIsRUFBbkIsMkNBQW1CLEVBQW5CLGlDQUFtQixFQUFuQixJQUFtQixFQUFFO1FBQW5DLElBQU0sSUFBSTtRQUNYLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9ELE1BQU0sc0NBQStCLElBQUksK0JBQTRCLENBQUM7U0FDekU7S0FDSjtJQUVELElBQ0ksTUFBTSxDQUFDLGlCQUFpQjtRQUN4QixPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxRQUFRO1FBQzVDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN2QztRQUNFLE1BQU0sdUZBQXVGLENBQUM7S0FDakc7SUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLElBQUksT0FBTyxNQUFNLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRTtRQUN0RSxNQUFNLGdFQUFnRSxDQUFDO0tBQzFFO0lBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLE9BQU8sTUFBTSxDQUFDLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDbEUsTUFBTSw4REFBOEQsQ0FBQztLQUN4RTtBQUNMLENBQUM7QUFFRCxJQUFJLGdCQUFnQixHQUFtQyxTQUFTLENBQUM7QUFFakUsU0FBZ0IsWUFBWTtJQUN4QixJQUFJLGdCQUFnQixFQUFFO1FBQ2xCLE9BQU8sZ0JBQWdCLENBQUM7S0FDM0I7SUFFRCxnQkFBZ0IsR0FBRyxpQkFBRyxFQUF3QixXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzNELG1CQUFTO1FBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU8saUJBQUcsRUFBQyxXQUFXLEVBQUUsa0JBQU0sR0FBRSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDLENBQ0osQ0FBQztJQUVGLE9BQU8sZ0JBQWdCLENBQUM7QUFDNUIsQ0FBQztBQWhCRCxvQ0FnQkM7QUFFRCxTQUFnQixTQUFTO0lBQ3JCLE9BQU8saUJBQUcsRUFBcUIsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUN6QyxnQkFBTSxJQUFJLGFBQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLFlBQVksRUFBRSxFQUF4QixDQUF3QixDQUNyQyxDQUFDO0FBQ04sQ0FBQztBQUpELDhCQUlDO0FBRUQsU0FBc0IsYUFBYSxDQUMvQixHQUFZLEVBQ1osRUFBVSxFQUNWLFVBQXdCOzs7Ozt3QkFFeEIscUJBQU0saUJBQUcsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDOztvQkFBdkIsU0FBdUIsQ0FBQztvQkFFbEIsS0FBSyxHQUFHO3dCQUNWLEVBQUU7d0JBQ0YsVUFBVTtxQkFDYixDQUFDO29CQUVGLHNCQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFLLENBQUMsQ0FBQyxFQUFDOzs7O0NBQ2hGO0FBYkQsc0NBYUM7QUFFRCxTQUFzQixvQkFBb0IsQ0FBQyxHQUFZOzs7Ozt3QkFDN0IscUJBQU0sU0FBUyxFQUFFOztvQkFBakMsYUFBYSxHQUFHLFNBQWlCO29CQUV2QyxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRTt3QkFDdEQsaUJBQWlCLEVBQUUsYUFBYTtxQkFDbkMsQ0FBQyxDQUFDO29CQUVILHNCQUFPLGlCQUFHLEVBQUMsUUFBUSxDQUFDLEVBQUM7Ozs7Q0FDeEI7QUFSRCxvREFRQztBQVlELFNBQXNCLFVBQVUsQ0FDNUIsR0FBWSxFQUNaLElBQVksRUFDWixVQUF3Qjs7Ozs7d0JBRU4scUJBQU0sWUFBWSxFQUFFOztvQkFBaEMsU0FBUyxHQUFHLFNBQW9CO29CQUN2QixxQkFBTSxTQUFTLEVBQUU7O29CQUExQixNQUFNLEdBQUcsU0FBaUI7b0JBRTFCLE1BQU0sR0FBaUI7d0JBQ3pCOzRCQUNJLElBQUk7NEJBQ0osSUFBSSxFQUFFLGtCQUFNLEdBQUU7NEJBQ2QsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7NEJBQ3JCLElBQUksRUFBRSxVQUFVOzRCQUNoQixNQUFNO3lCQUNUO3FCQUNKLENBQUM7b0JBRUYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUM7d0JBQ3JCLHNCQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQztxQkFDNUI7b0JBRUssR0FBRyxHQUFHLFVBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDhCQUFvQixTQUFTLFlBQVMsQ0FBQztvQkFDdkYsc0JBQU8sdUJBQVcsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFOzRCQUN6QixNQUFNLEVBQUUsTUFBTTs0QkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7eUJBQy9CLENBQUMsRUFBQzs7OztDQUVOO0FBOUJELGdDQThCQztBQUVELFNBQVMsYUFBYSxDQUFDLElBQVk7SUFDL0IsT0FBYSxNQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBc0IsbUJBQW1CLENBQUMsR0FBWTs7Ozs7O29CQUM1QyxPQUFPLEdBQUc7d0JBQ1osR0FBRyxFQUFFOzRCQUNELE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTs0QkFDckIsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsMEJBQTBCO3lCQUN2Qzt3QkFDRCxHQUFHLEVBQUU7NEJBQ0QsRUFBRSxFQUFFLFFBQVE7NEJBQ1osT0FBTyxFQUFFLFdBQVc7eUJBQ3ZCO3dCQUNELE9BQU8sRUFBRTs0QkFDTCxFQUFFLEVBQUUsQ0FBQzs0QkFDTCxPQUFPLEVBQUUsU0FBUyxDQUFDLFNBQVM7eUJBQy9CO3dCQUNELEVBQUUsRUFBRTs0QkFDQSx1REFBdUQ7NEJBQ3ZELEVBQUUsRUFBRSxDQUFDOzRCQUNMLE9BQU8sRUFBRSxPQUFPO3lCQUNuQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osbURBQW1EOzRCQUNuRCxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVM7NEJBQ3pCLEVBQUUsRUFDRSxPQUFPLElBQUksS0FBSyxXQUFXO2dDQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJO2dDQUMxRCxDQUFDLENBQUMsSUFBSTs0QkFDZCxXQUFXLEVBQUUsS0FBSzs0QkFDbEIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxRQUFRO3lCQUM3QjtxQkFDSixDQUFDO29CQUVJLFNBQVMsR0FBRzt3QkFDZCxXQUFXO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTt3QkFDbEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNqQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU07d0JBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSTtxQkFDdEIsQ0FBQztvQkFDSSxJQUFJLEdBQUcsa0JBQU0sRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7b0JBR2hCLHFCQUFNLGlCQUFHLEVBQVMsYUFBYSxDQUFDOztvQkFBL0MsWUFBWSxHQUFHLFNBQWdDO29CQUVyRCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7d0JBQ3ZCLHNCQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBQztxQkFDNUI7Ozs7b0JBRUQsc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUMsRUFBQzt3QkFHN0Isc0JBQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQzt5QkFDM0QsSUFBSSxDQUFDLGNBQU0sd0JBQUcsRUFBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUM7eUJBQ3BDLElBQUksQ0FBQyxjQUFNLFlBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQyxFQUFDOzs7O0NBQzNCO0FBdERELGtEQXNEQztBQU9ELFNBQWdCLHdCQUF3QixDQUNwQyxXQUFzQixFQUN0QixlQUE0QztJQUU1QyxPQUFPLFdBQVc7U0FDYixNQUFNLENBQ0gsV0FBQztRQUNHLHNCQUFlLENBQUMsY0FBYyxLQUFLLEtBQUs7WUFDeEMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUQvQyxDQUMrQyxDQUN0RDtTQUNBLEdBQUcsQ0FBa0IsV0FBQyxJQUFJLFFBQUM7UUFDeEIsT0FBTyxlQUFPLENBQUMsQ0FBRTtRQUNqQixPQUFPLEVBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsZUFBZSxDQUFDLFlBQVksS0FBSyxLQUFLO1lBQ3RDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDcEQsQ0FBQyxFQU55QixDQU16QixDQUFDLENBQUM7QUFDWixDQUFDO0FBakJELDREQWlCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pvQkQsK0RBQTBEO0FBQzFELHlFQUE0RDtBQUU1RCxpR0FBeUM7QUFDekMsd0ZBQW1DO0FBQ25DLDRFQUErQztBQUkvQyxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsdUNBQU87SUFDUCw2Q0FBVTtBQUNkLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELElBQVksV0FFWDtBQUZELFdBQVksV0FBVztJQUNuQiw2Q0FBUTtBQUNaLENBQUMsRUFGVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUV0QjtBQTRDRCxJQUFJLE9BQWdDLENBQUM7QUFFckMsU0FBd0IsaUJBQWlCLENBQ3JDLEdBQVk7SUFFWixJQUFJLE9BQU8sRUFBRTtRQUNULE9BQU8sT0FBTyxDQUFDO0tBQ2xCO0lBRUQsSUFBTSxPQUFPLEdBQUcsMEJBQWMsR0FBRSxDQUFDO0lBRWpDLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUN0QixPQUFPLEdBQUcsK0JBQWtCLEVBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNsQyxhQUFHLElBQUksV0FBSSxtQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsQ0FDcEMsQ0FBQztLQUNMO1NBQU07UUFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQ25EO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQWxCRCx1Q0FrQkM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxHQUFZO0lBQzNDLElBQU0sT0FBTyxHQUFHLDBCQUFjLEdBQUUsQ0FBQztJQUVqQyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDdEIsT0FBTztLQUNWO0lBRUQsSUFBTSxNQUFNLEdBQUcsNEJBQWdCLEdBQUUsQ0FBQztJQUVsQyxJQUFJLENBQUMsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFHLE1BQU0sQ0FBQyxHQUFFO1FBQ25CLE9BQU87S0FDVjtJQUVELGtCQUFVLEVBQUMsR0FBRyxFQUFFLG1CQUFlLENBQUMsY0FBYyxFQUFFO1FBQzVDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtRQUN0QixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBakJELGdEQWlCQztBQUVELFNBQWdCLHVCQUF1QixDQUNuQyxPQUFvQjs7SUFFcEIsSUFBTSxLQUFrQyxPQUFPLENBQUMsSUFBSSxFQUEvQixDQUFDLG9CQUFLLFFBQVEsY0FBN0IsYUFBK0IsQ0FBZSxDQUFDO0lBRXJELElBQU0sSUFBSSxHQUE0QjtRQUNsQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQ3BCLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLGFBQU8sQ0FBQyxHQUFHLG1DQUFJLFNBQVM7UUFDN0IsT0FBTyxFQUFFLGFBQU8sQ0FBQyxJQUFJLG1DQUFJLFNBQVM7UUFDbEMsUUFBUSxFQUFFLGFBQU8sQ0FBQyxLQUFLLG1DQUFJLFNBQVM7S0FDdkMsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFmRCwwREFlQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRCwrREFNWTtBQUNaLGtFQUE4QztBQUM5Qyx5RUFBeUM7QUFDekMscUZBQXNDO0FBR3RDLDRFQUErQztBQUUvQyxTQUFTLFNBQVMsQ0FBQyxHQUFZLEVBQUUsS0FBYTtJQUMxQyxPQUFPLGtCQUFNLEVBQUMsVUFBRyxHQUFHLENBQUMsTUFBTSxjQUFJLEtBQUssQ0FBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVEO0lBRUksMkJBQVksR0FBbUI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELHlEQUE2QixHQUE3QixVQUNJLEdBQVk7O1FBRVosSUFBTSxNQUFNLEdBQUcsVUFBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQU8sQ0FBQyxJQUFJLENBQUMscUJBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBRXpFLElBQU0sUUFBUSxHQUFHLGlCQUFLLEdBQTBCLENBQUM7UUFFakQsWUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsaUJBQWlCLENBQzdDLE1BQU0sRUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQXNCLEVBQy9CLEVBQUUsRUFDRixjQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQ0osQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUssd0NBQVksR0FBbEIsVUFBbUIsR0FBWTs7Ozs7OzRCQUNmLHFCQUFNLCtCQUFrQixFQUFDLEdBQUcsQ0FBQzs7d0JBQW5DLEdBQUcsR0FBRyxTQUE2Qjt3QkFDbkMsSUFBSSxHQUFHLFlBQU0sQ0FBQyxNQUFNLDBDQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FDbkQsR0FBRyxDQUFDLFlBQXNCLENBQzdCLENBQUM7d0JBRUYsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQzVCLHNCQUFPO3lCQUNWO3dCQUV5QixxQkFBTSxpQkFBRyxFQUFTLGVBQWUsQ0FBQzs7d0JBQXRELGlCQUFpQixHQUFHLFNBQWtDO3dCQUN0RCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRW5ELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFOzRCQUNqQyxzQkFBTzt5QkFDVjt3QkFFRCxxQkFBTSxrQkFBVSxFQUFDLEdBQUcsRUFBRSxtQkFBZSxDQUFDLGVBQWUsRUFBRTtnQ0FDbkQsSUFBSSxFQUFFLFlBQVMsQ0FBQyxNQUFNO2dDQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0NBQ3ZCLFFBQVEsRUFBRSxHQUFHLENBQUMsWUFBWTs2QkFDN0IsQ0FBQzs7d0JBSkYsU0FJRSxDQUFDO3dCQUVILHFCQUFNLGlCQUFHLEVBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQzs7d0JBQXJDLFNBQXFDLENBQUM7Ozs7O0tBQ3pDO0lBRUssK0RBQW1DLEdBQXpDLFVBQ0ksR0FBWTs7Ozs7NEJBRUMscUJBQU0sSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7d0JBQXBELElBQUksR0FBRyxTQUE2Qzt3QkFFMUQsUUFBUSxJQUFJLEVBQUU7NEJBQ1YsS0FBSyxTQUFTO2dDQUNWLHNCQUFPLGNBQWMsRUFBQzs0QkFDMUIsS0FBSyxRQUFRO2dDQUNULHNCQUFPLFNBQVMsRUFBQzt5QkFDeEI7Ozs7d0JBR0cscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7O3dCQUE1QixTQUE0QixDQUFDO3dCQUM3QixzQkFBTyxZQUFZLEVBQUM7Ozt3QkFFcEIsc0JBQU8sY0FBYyxFQUFDOzs7OztLQUU3QjtJQUVLLHVEQUEyQixHQUFqQyxVQUNJLEdBQVk7Ozs7Ozs0QkFFQSxxQkFBTSwrQkFBa0IsRUFBQyxHQUFHLENBQUM7O3dCQUFuQyxHQUFHLEdBQUcsU0FBNkI7d0JBQ25DLElBQUksR0FBRyxZQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQ25ELEdBQUcsQ0FBQyxZQUFzQixDQUM3QixDQUFDO3dCQUVGLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsTUFBSyxRQUFRLEVBQUU7NEJBQ3hDLHNCQUFPLFNBQVMsRUFBQzt5QkFDcEI7d0JBRXlCLHFCQUFNLGlCQUFHLEVBQVMsZUFBZSxDQUFDOzt3QkFBdEQsaUJBQWlCLEdBQUcsU0FBa0M7d0JBQ3RELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLFVBQUksQ0FBQyxXQUFXLG1DQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUV6RCxJQUFJLGlCQUFpQixLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTs0QkFDbEUsc0JBQU8sWUFBWSxFQUFDO3lCQUN2Qjt3QkFFRCxzQkFBTyxjQUFjLEVBQUM7Ozs7S0FDekI7SUFFSyxvREFBd0IsR0FBOUIsVUFBK0IsR0FBWTs7Ozs7Ozt3QkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTs0QkFDaEQsc0JBQU87eUJBQ1Y7d0JBRVcscUJBQU0sK0JBQWtCLEVBQUMsR0FBRyxDQUFDOzt3QkFBbkMsR0FBRyxHQUFHLFNBQTZCO3dCQUNuQyxJQUFJLEdBQUcsWUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUNuRCxHQUFHLENBQUMsWUFBc0IsQ0FDN0IsQ0FBQzt3QkFFRixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDN0QsT0FBTyxDQUFDLElBQUksQ0FDUixtRUFBbUUsQ0FDdEUsQ0FBQzs0QkFDRixzQkFBTzt5QkFDVjt3QkFFeUIscUJBQU0saUJBQUcsRUFBUyxlQUFlLENBQUM7O3dCQUF0RCxpQkFBaUIsR0FBRyxTQUFrQzt3QkFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUVuRCxJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRTs0QkFDakMsT0FBTyxDQUFDLElBQUksQ0FDUix5RUFBeUUsQ0FDNUUsQ0FBQzs0QkFDRixzQkFBTzt5QkFDVjt3QkFFRCxzQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFDOzs7O0tBQ2pDO0lBRUssK0NBQW1CLEdBQXpCOzs7Z0JBQ0ksc0JBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQzs7O0tBQ2hDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKRCwrREFBMEQ7QUFDMUQsa0VBQXFFO0FBQ3JFLHlFQUFtRTtBQUNuRSxxRkFBc0M7QUFFdEMsSUFBTSx5QkFBeUIsR0FBRyxJQUFJLENBQUM7QUFFdkMsU0FBUyxVQUFVLENBQUMsUUFBZ0IsRUFBRSxZQUE4QjtJQUNoRSxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0lBRWpFLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxJQUFNLE1BQU0sR0FBRywyQkFBZSxFQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBZSx5QkFBeUI7Ozs7O3dCQUNsQixxQkFBTSxTQUFTLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRTs7b0JBQTNELFNBQVMsR0FBRyxTQUErQztvQkFFakUsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDWixzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLEVBQUM7cUJBQzNEO29CQUVELHNCQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDOzs7O0NBQ3hDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFZLEVBQUUsR0FBcUI7SUFDekQsT0FBTyxrQkFBTSxFQUFDLFVBQUcsR0FBRyxDQUFDLE1BQU0sY0FBSSxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7SUFBQTtJQXVMQSxDQUFDO0lBdExTLHNEQUE2QixHQUFuQyxVQUNJLEdBQVk7Ozs7Ozt3QkFFWixJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTs0QkFDckMsc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FDakIsOERBQThELENBQ2pFLEVBQUM7eUJBQ0w7Ozs7d0JBR2tCLHFCQUFNLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTs7d0JBQS9DLE1BQU0sR0FBRyxTQUFzQzt3QkFFckQsc0JBQU8sTUFBTSxFQUFDOzs7d0JBRWQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQzt3QkFDakIsc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUMsRUFBQzs7Ozs7S0FFaEM7SUFFSyxxQ0FBWSxHQUFsQixVQUFtQixHQUFZOzs7Ozs7d0JBQzNCLElBQUksQ0FBQyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsRUFBRTs0QkFDNUIsc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FDakIsc0RBQXNELENBQ3pELEVBQUM7eUJBQ0w7d0JBRWlCLHFCQUFNLHlCQUF5QixFQUFFOzt3QkFBN0MsU0FBUyxHQUFHLFNBQWlDO3dCQUMvQixxQkFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTs7d0JBQTNELFdBQVcsR0FBRyxTQUE2Qzs2QkFFN0QsWUFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLEdBQTNELHdCQUEyRDt3QkFDM0QscUJBQU0sWUFBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFdBQVcsRUFBRTs7d0JBQWhDLFNBQWdDLENBQUM7OzRCQUd6QixxQkFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQzs0QkFDOUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLGNBQWM7NEJBQ3hDLGVBQWUsRUFBRSxJQUFJO3lCQUN4QixDQUFDOzt3QkFISSxHQUFHLEdBQUcsU0FHVjt3QkFFSSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQzt3QkFFTCxxQkFBTSxpQkFBRyxFQUFTLGtCQUFrQixDQUFDOzt3QkFBNUQsb0JBQW9CLEdBQUcsU0FBcUM7d0JBQzNDLHFCQUFNLGlCQUFHLEVBQzVCLGVBQWUsQ0FDbEI7O3dCQUZLLGNBQWMsR0FBRyxTQUV0Qjt3QkFFRCxJQUNJLG9CQUFvQixLQUFLLFlBQVk7NEJBQ3JDLENBQUMsQ0FBQyxjQUFjLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNsRDs0QkFDRSxzQkFBTzt5QkFDVjt3QkFFRCxxQkFBTSxrQkFBVSxFQUFDLEdBQUcsRUFBRSxtQkFBZSxDQUFDLGVBQWUsRUFBRTtnQ0FDbkQsSUFBSSxFQUFFLFlBQVMsQ0FBQyxHQUFHO2dDQUNuQixLQUFLLEVBQUUsR0FBRzs2QkFDYixDQUFDOzt3QkFIRixTQUdFLENBQUM7d0JBRUgscUJBQU0saUJBQUcsRUFBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUM7O3dCQUEzQyxTQUEyQyxDQUFDO3dCQUM1QyxxQkFBTSxpQkFBRyxFQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7O3dCQUFsQyxTQUFrQyxDQUFDOzs7OztLQUN0QztJQUVLLDREQUFtQyxHQUF6QyxVQUNJLEdBQVk7Ozs7OzRCQUVDLHFCQUFNLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7O3dCQUFwRCxJQUFJLEdBQUcsU0FBNkM7d0JBRTFELFFBQVEsSUFBSSxFQUFFOzRCQUNWLEtBQUssU0FBUztnQ0FDVixzQkFBTyxjQUFjLEVBQUM7NEJBQzFCLEtBQUssUUFBUTtnQ0FDVCxzQkFBTyxTQUFTLEVBQUM7eUJBQ3hCOzs7O3dCQUdHLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDOzt3QkFBNUIsU0FBNEIsQ0FBQzt3QkFDN0Isc0JBQU8sWUFBWSxFQUFDOzs7d0JBRXBCLHNCQUFPLGNBQWMsRUFBQzs7Ozs7S0FFN0I7SUFFSyxvREFBMkIsR0FBakMsVUFDSSxHQUFZOzs7Ozs7d0JBRU4sSUFBSSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7d0JBRXJDLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTs0QkFDbkIsc0JBQU8sU0FBUyxFQUFDO3lCQUNwQjt3QkFFVyxxQkFBTSx5QkFBeUIsRUFBRTs7d0JBQXZDLEdBQUcsR0FBRyxTQUFpQzt3QkFDakMscUJBQU0sSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFdBQVcsQ0FBQyxlQUFlLEVBQUU7O3dCQUE5QyxHQUFHLEdBQUcsU0FBd0M7d0JBRXBELElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUU7NEJBQ2xFLHNCQUFPLFlBQVksRUFBQzt5QkFDdkI7d0JBRUQsc0JBQU8sY0FBYyxFQUFDOzs7O0tBQ3pCO0lBRUssaURBQXdCLEdBQTlCLFVBQStCLEdBQVk7Ozs7Ozt3QkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUU7NEJBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzs0QkFDeEQsc0JBQU87eUJBQ1Y7d0JBRUssSUFBSSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7d0JBRXJDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLElBQUksQ0FDUiw4REFBdUQsSUFBSSxDQUFFLENBQ2hFLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRTRCLHFCQUFNLGlCQUFHLEVBQVMsa0JBQWtCLENBQUM7O3dCQUE1RCxvQkFBb0IsR0FBRyxTQUFxQzt3QkFDM0MscUJBQU0saUJBQUcsRUFDNUIsZUFBZSxDQUNsQjs7d0JBRkssY0FBYyxHQUFHLFNBRXRCO3dCQUVpQixxQkFBTSx5QkFBeUIsRUFBRTs7d0JBQTdDLFNBQVMsR0FBRyxTQUFpQzt3QkFDL0IscUJBQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7O3dCQUEzRCxXQUFXLEdBQUcsU0FBNkM7d0JBRTdELGVBQWUsR0FBRyxTQUFTLENBQUM7d0JBQ2hDLElBQUksV0FBVyxFQUFFOzRCQUNiLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7eUJBQ3hEO3dCQUVELElBQ0ksb0JBQW9CLEtBQUssU0FBUzs0QkFDbEMsb0JBQW9CLEtBQUssZUFBZTs0QkFDeEMsV0FBVzs0QkFDWCxVQUFVLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7NEJBQzNDLENBQUMsY0FBYyxLQUFLLElBQUk7Z0NBQ3BCLGNBQWMsS0FBSyxTQUFTO2dDQUM1QixjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQ2xDOzRCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQ1IsbUZBQW1GLENBQ3RGLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3dCQUU1RCxJQUFJOzRCQUNBLHNCQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUM7eUJBQ2pDO3dCQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3BCOzs7OztLQUNKO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0ksSUFBTSxXQUFXLEdBQUcsMEJBQWMsR0FBRSxDQUFDO1FBRXJDLElBQUksUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLGlCQUFPO1lBQ3RCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztZQUUzQixJQUFNLFlBQVksR0FBRztnQkFDakIsSUFBSSxjQUFjLEVBQUU7b0JBQ2hCLE9BQU87aUJBQ1Y7Z0JBRUQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ2pELGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRXRCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRTlDLElBQU0saUJBQWlCLEdBQUcsVUFBVSxDQUFDO2dCQUNqQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeE5ELGlDQUFpQzs7O0FBRWpDLGtFQUFrRTtBQUNsRSxtRUFBbUU7QUFDbkUsMENBQTBDO0FBRTFDLGlEQUFpRDtBQUVqRCxzRUFBc0U7QUFDdEUsb0VBQW9FO0FBQ3BFLDJFQUEyRTtBQUMzRSxzRUFBc0U7QUFDdEUsaUNBQWlDO0FBQ2pDO0lBR0ksZUFBWSxNQUF1QixFQUFXLFNBQW9CO1FBQXRELGdEQUF1QjtRQUFXLGdEQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwQyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsT0FBTyxHQUFHLGNBQU0sYUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztZQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQU0sY0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztZQUVsRCxpREFBaUQ7WUFDakQsT0FBTyxDQUFDLGVBQWUsR0FBRztnQkFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2QkFBYSxHQUFiLFVBQ0ksSUFBd0IsRUFDeEIsUUFBeUM7UUFGN0MsaUJBY0M7UUFWRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixZQUFFO1lBQ0UsV0FBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDOUIsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxXQUFXLENBQUMsVUFBVSxHQUFHLGNBQU0sY0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDO2dCQUN6QyxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEdBQUc7b0JBQ3hDLGFBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUF6QixDQUF5QixDQUFDO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUM7UUFORixDQU1FLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQS9CWSxzQkFBSztBQWlDbEIsSUFBSSxLQUFZLENBQUM7QUFFakIsU0FBUyxlQUFlO0lBQ3BCLElBQUksQ0FBQyxLQUFLO1FBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDaEMsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQWdCLEdBQUcsQ0FDZixHQUFnQixFQUNoQixLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFFekIsSUFBSSxHQUFlLENBQUM7SUFDcEIsT0FBTyxLQUFLO1NBQ1AsYUFBYSxDQUFDLFVBQVUsRUFBRSxlQUFLO1FBQzVCLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxjQUFNLFVBQUcsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQVZELGtCQVVDO0FBRUQsU0FBZ0IsR0FBRyxDQUNmLEdBQWdCLEVBQ2hCLEtBQVUsRUFDVixLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFFekIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFLO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJELGtCQVFDO0FBRUQsU0FBZ0IsR0FBRyxDQUNmLEdBQWdCLEVBQ2hCLEtBQXlCO0lBQXpCLGdDQUFRLGVBQWUsRUFBRTtJQUV6QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLGVBQUs7UUFDekMsS0FBSyxDQUFDLFFBQU0sRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCxrQkFPQztBQUVELFNBQWdCLEtBQUssQ0FBQyxLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFDM0MsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFLO1FBQ3pDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFKRCxzQkFJQztBQUVELFNBQWdCLElBQUksQ0FBQyxLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFDMUMsSUFBTSxJQUFJLEdBQWtCLEVBQUUsQ0FBQztJQUUvQixPQUFPLEtBQUs7U0FDUCxhQUFhLENBQUMsVUFBVSxFQUFFLGVBQUs7UUFDNUIsOEVBQThFO1FBQzlFLCtDQUErQztRQUMvQyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDMUMsS0FBSyxDQUNSLENBQUMsU0FBUyxHQUFHO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUSxHQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLGNBQU0sV0FBSSxFQUFKLENBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFoQkQsb0JBZ0JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHRCx5RUFLa0I7QUFDbEIsK0ZBS3NCO0FBSXRCLElBQU0sS0FBSyxHQUFHLElBQUksa0JBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFOUMsU0FBZ0IsR0FBRyxDQUFJLEdBQWdCO0lBQ25DLE9BQU8sb0JBQU0sRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUZELGtCQUVDO0FBRUQsU0FBZ0IsR0FBRyxDQUFnQixHQUFnQixFQUFFLEtBQVE7SUFDekQsT0FBTyxvQkFBTSxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sWUFBSyxFQUFMLENBQUssQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFGRCxrQkFFQztBQUVELFNBQWdCLEdBQUcsQ0FBQyxHQUFnQjtJQUNoQyxPQUFPLG9CQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCxrQkFFQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxNQUFxQjtJQUMvQyxPQUFPLEdBQUcsQ0FBZ0IsUUFBUSxFQUFFO1FBQ2hDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtRQUNyQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDckIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1FBQzNCLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYztRQUNyQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCO1FBQzNDLGVBQWUsRUFBRSxNQUFNLENBQUMsZUFBZTtRQUN2QyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDbEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELHNDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQzVCLE1BQXlCO0lBRXpCLE9BQU8sR0FBRyxDQUFvQixXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUpELDRDQUlDO0FBRUQsU0FBZ0IscUJBQXFCLENBQ2pDLFVBQWtCLEVBQ2xCLFFBQXdCO0lBRXhCLE9BQU8sR0FBRyxDQUFDLG1CQUFZLFVBQVUsQ0FBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFMRCxzREFLQztBQUVELFNBQXNCLGlCQUFpQixDQUNuQyxVQUFrQjs7Ozt3QkFFWCxxQkFBTSxHQUFHLENBQTZCLG1CQUFZLFVBQVUsQ0FBRSxDQUFDO3dCQUF0RSxzQkFBTyxTQUErRCxFQUFDOzs7O0NBQzFFO0FBSkQsOENBSUM7QUFFRCxTQUFnQiwwQkFBMEI7SUFDdEMsT0FBTyxHQUFHLENBQWdCLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBTTtRQUMzQyxhQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQXhDLENBQXdDLENBQzNDLENBQUM7QUFDTixDQUFDO0FBSkQsZ0VBSUM7QUFFRCxTQUFnQix3QkFBd0IsQ0FDcEMsT0FBb0I7SUFFcEIsT0FBTyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUpELDREQUlDO0FBRUQsU0FBc0IsZ0NBQWdDOzs7Ozt3QkFHbEMscUJBQU0sR0FBRyxDQUFjLDZCQUE2QixDQUFDOztvQkFBL0QsT0FBTyxHQUFHLFNBQXFEO29CQUVyRSxxQkFBTSxHQUFHLENBQUMsNkJBQTZCLENBQUM7O29CQUF4QyxTQUF3QyxDQUFDO29CQUV6QyxzQkFBTyxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxTQUFTLEVBQUM7Ozs7Q0FDL0I7QUFSRCw0RUFRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRCx3RUFBOEM7QUFJOUMsSUFBTSx5QkFBeUIsR0FBeUIsQ0FBQyxPQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBRXpHLElBQU0sd0JBQXdCLEdBQTBDO0lBQ3BFLE1BQU0sRUFBRSx5QkFBeUI7SUFDakMsS0FBSyxFQUFFLHdCQUF3QjtDQUNsQyxDQUFDO0FBRUYsMkNBQTJDO0FBQzNDLFNBQWdCLE1BQU07SUFDbEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDL0IsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQzNELENBQUM7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN2QyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUVELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUMxRCxRQUFRLEVBQ1IsV0FBQztRQUNHLFFBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFKZCxDQUljLENBQ3JCLENBQUM7QUFDTixDQUFDO0FBcEJELHdCQW9CQztBQUVELFNBQWdCLGNBQWM7SUFDMUIsSUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QyxJQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXpELEtBQWMsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7UUFBbkIsSUFBSSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7S0FDSjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQVhELHdDQVdDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsV0FBMEI7SUFDekQsV0FBVyxHQUFHLFdBQVcsYUFBWCxXQUFXLGNBQVgsV0FBVyxHQUFJLEVBQUUsQ0FBQztJQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLCtCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQTdCLENBQTZCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFQRCxnREFPQztBQUVELFNBQVMseUJBQXlCOztJQUM5QixJQUFNLGdCQUFnQixxQkFBTyx5QkFBeUIsT0FBQyxDQUFDO0lBQ3hELElBQU0sT0FBTyxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBRWpDLElBQUksUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUN0QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxhQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsRUFBQyxDQUFDO0tBQ2pFO1NBQU07UUFDSCxnQkFBZ0IsQ0FBQyxJQUFJLE9BQXJCLGdCQUFnQixFQUNUO1lBQ0MsT0FBTyxZQUFZO1lBQ25CLE9BQU8sU0FBUyxDQUFDLGFBQWE7WUFDOUIsT0FBTyxXQUFXO1NBQ3JCLEVBQ0g7S0FDTDtJQUVELE9BQU8sYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELFNBQVMsd0JBQXdCO0lBQzdCLE9BQU8sYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLGdCQUFxQztJQUN4RCxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FDMUIsVUFBQyxTQUFrQixFQUFFLFVBQTZCLElBQUssZ0JBQVMsSUFBSSxVQUFVLEtBQUssV0FBVyxFQUF2QyxDQUF1QyxFQUM5RixJQUFJLENBQ1AsQ0FBQztBQUNOLENBQUM7QUFFRCxpR0FBaUc7QUFDakcsSUFBTSxJQUFJLEdBQ04sSUFBSSxDQUFDLElBQUk7SUFDVCxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG9FQUFvRTtRQUM1RSw0RUFBNEU7UUFDNUUsNkNBQTZDO1FBQzdDLDZFQUE2RTtRQUM3RSxxRUFBcUU7UUFDckUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLHlFQUF5RTtRQUN6RSxzREFBc0Q7UUFDdEQscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTO1lBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7QUFFTix1Q0FBdUM7QUFDdkMsU0FBZ0IsTUFBTSxDQUFDLEdBQVcsRUFBRSxJQUFRO0lBQVIsK0JBQVE7SUFDeEMsSUFBSSxFQUFFLEdBQUcsVUFBVSxHQUFHLElBQUksRUFDdEIsRUFBRSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxXQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLEVBQUUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDbEM7SUFDRCxFQUFFO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLEVBQUU7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUUsT0FBTyxVQUFVLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQWJELHdCQWFDO0FBRUQsb0ZBQW9GO0FBQ3BGLFNBQWdCLFlBQVksQ0FBQyxHQUFXO0lBQ3BDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixXQUFXLENBQ3ZCLEdBQVksRUFDWixHQUFnQixFQUNoQixPQUF3Qzs7SUFBeEMsc0NBQXlCLE1BQU0sRUFBRSxLQUFLLEVBQUU7SUFFeEMsSUFBTSxlQUFlLEdBQUcsYUFBTyxDQUFDLE9BQU8sbUNBQUksRUFBRSxDQUFDO0lBRTlDLE9BQU8sQ0FBQyxPQUFPLGNBQ1gsY0FBYyxFQUFFLGtCQUFrQixFQUNsQyxNQUFNLEVBQUUsa0JBQWtCLEVBQzFCLGFBQWEsRUFBRSxHQUFHLENBQUMsVUFBVSxJQUMxQixlQUFlLENBQ3JCLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQWZELGtDQWVDO0FBRUQ7SUFBc0Msb0NBQUs7SUFDdkMsMEJBQVksVUFBa0IsRUFBRSxVQUFrQjtlQUM5QyxrQkFBTSwrQkFBd0IsVUFBVSxlQUFLLFVBQVUsQ0FBRSxDQUFDO0lBQzlELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQ0FKcUMsS0FBSyxHQUkxQztBQUpZLDRDQUFnQjtBQU03QixTQUFnQixlQUFlLENBQzNCLEdBQVksRUFDWixHQUFnQixFQUNoQixPQUFxQjtJQUVyQixPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFDO1FBQ3hDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1AsTUFBTSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBWkQsMENBWUM7QUFFRCw2RUFBNkU7QUFDN0UsU0FBZ0IsZUFBZSxDQUFDLE1BQW1CO0lBQy9DLElBQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssV0FBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQWhDLENBQWdDLEVBQUUsRUFBRSxDQUFDLENBQ3BFLENBQUM7SUFDRixJQUFNLFVBQVUsR0FBRyxhQUFhO1NBQzNCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdkIsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQVhELDBDQVdDO0FBRUQsU0FBZ0IscUJBQXFCLENBQ2pDLElBQVk7SUFFWixJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksU0FBUyxDQUFDLEVBQUU7UUFDakMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNqQiw2REFBNkQsQ0FDaEUsQ0FBQztLQUNMO0lBRUQsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFaRCxzREFZQztBQUVELFNBQWdCLEtBQUs7SUFDakIsSUFBTSxRQUFRLEdBQUc7UUFDYixPQUFPLEVBQUcsSUFBd0Q7UUFDbEUsTUFBTSxFQUFHLElBQTBDO1FBQ25ELE9BQU8sRUFBRyxJQUE4QjtLQUMzQyxDQUFDO0lBRUYsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzdDLFFBQWdCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxRQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBYkQsc0JBYUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FDNUIsRUFBNEIsRUFDNUIsaUJBQWdDO0lBRGhDLDBCQUFhLFFBQVEsQ0FBQyxNQUFNO0lBQzVCLDBEQUFnQztJQUVoQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7SUFFdEIsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNmLEtBQUssR0FBRyxFQUFFO2FBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNaLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixHQUFHLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUE3QixDQUE2QixDQUFDO2FBQzNDLE1BQU0sQ0FBQyxlQUFLLElBQUksd0JBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO2FBQzNELE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxJQUFJOztZQUFLLDhCQUFNLENBQUMsZ0JBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBRztRQUE5QixDQUE4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWpCRCw0Q0FpQkM7QUFFRCxTQUFnQixVQUFVLENBQUMsRUFBYztJQUNyQyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ25DLEVBQUUsRUFBRSxDQUFDO0tBQ1I7U0FBTTtRQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFORCxnQ0FNQztBQUVELFNBQWdCLFFBQVE7SUFDcEIsT0FBTyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFGRCw0QkFFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pPRCx1RUFNaUI7QUFDakIsMEZBSXlCO0FBRXpCLHNGQUFnRDtBQUNoRCwwRUFBOEM7QUFDOUMsa0dBQTZDO0FBSzdDLFNBQVMsV0FBVyxDQUFDLEVBQXlCO0lBQzFDLE9BQU8sd0NBQTBCLEdBQUUsQ0FBQyxJQUFJLENBQUMsYUFBRztRQUN4QyxJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBRUQsNEJBQWlCLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJDLE9BQU8sMkJBQWEsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFNO1lBQy9DLEdBQUcsR0FBRyxJQUFJLGNBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELDRGQUE0RjtBQUM1RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFO0lBQzdCLG9FQUFvRTtJQUNwRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxxRUFBcUU7QUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxlQUFLO0lBQ25DLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxlQUFLO0lBQy9CLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFHOztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU87U0FDVjtRQUVELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU87U0FDVjtRQUVELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFFRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsSUFBTSxlQUFlLEdBQUcscUJBQVUsRUFBQyxHQUFHLEVBQUUsc0JBQWUsQ0FBQyxpQkFBaUIsRUFBRTtZQUN2RSxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDdEIsRUFBRSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtTQUMxQixDQUFDLENBQUM7UUFFSCxJQUFNLHNCQUFzQixHQUFHLCtCQUFtQixFQUFDO1lBQy9DLElBQUksRUFBRSw2QkFBaUIsQ0FBQyxhQUFhO1lBQ3JDLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDeEQsT0FBTyxDQUFDLEtBQUssRUFDYjtZQUNJLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRztZQUNqQixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxhQUFPLENBQUMsSUFBSSxtQ0FBSSxTQUFTO1lBQy9CLEtBQUssRUFBRSxhQUFPLENBQUMsS0FBSyxtQ0FBSSxTQUFTO1lBQ2pDLGtCQUFrQixFQUFFLElBQUk7U0FDM0IsQ0FDSixDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2YsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixlQUFlO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxlQUFLO0lBQzVDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFHOztRQUNqQyxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBRXhDLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU87U0FDVjtRQUVELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sV0FBVyxHQUFHLHFCQUFVLEVBQUMsR0FBRyxFQUFFLHNCQUFlLENBQUMsY0FBYyxFQUFFO1lBQ2hFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQU0sR0FBRyxHQUFHLGFBQU8sQ0FBQyxHQUFHLG1DQUFJLEdBQUcsQ0FBQztRQUUvQixJQUFNLGdCQUFnQixHQUFHLHNDQUF3QixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixFQUFFLGVBQUs7SUFDakQsSUFBSSxZQUFZLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUN2QywwQkFBMEI7UUFDMUIsT0FBTztLQUNWO0lBRUQsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQUc7UUFDakMsNEJBQWlCLEVBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSxVQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDO0lBQXpELENBQXlELENBQzVELENBQUM7SUFFRixLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ25KSCxJQUFZLGlCQUVYO0FBRkQsV0FBWSxpQkFBaUI7SUFDekIsb0RBQStCO0FBQ25DLENBQUMsRUFGVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUU1QjtBQU1ELFNBQWdCLHNCQUFzQixDQUFDLElBQVM7SUFDNUMsT0FBTyxDQUNGLElBQXNCLENBQUMsSUFBSSxLQUFLLFNBQVM7UUFDMUMsaUJBQWlCLENBQUUsSUFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQ2hFLENBQUM7QUFDTixDQUFDO0FBTEQsd0RBS0M7Ozs7Ozs7Ozs7Ozs7O0FDVEQsU0FBZ0IsaUJBQWlCLENBQUMsS0FBb0IsRUFBRSxNQUFjO0lBQ2xFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUZELDhDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsS0FBb0I7SUFDcEQsSUFBTSxTQUFTLEdBQUcsVUFBQyxNQUFjLElBQUssd0JBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0lBRXZFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQU87UUFDdkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxrREFNQzs7Ozs7OztVQ2hCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvY29uZmlnLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb3JlL3B1c2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvcHVzaC9zYWZhcmkudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvcHVzaC93M2MudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvc3RvcmFnZS9pZGIta2V5dmFsLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb3JlL3N0b3JhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3dvcmtlci9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvd29ya2VyL21lc3NhZ2luZy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvd29ya2VyL3V0aWxzLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb250ZXh0LFxuICAgIERkbFByb21wdENvbmZpZyxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBTZXJ2aWNlLFxuICAgIGdldEluc3RhbGxJZFxufSBmcm9tICcuJztcbmltcG9ydCB7IGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdldENhY2hlS2V5cyA9IChrZXk6IHN0cmluZykgPT4gKHtcbiAgICBDT05GSUdfQ0FDSEVfS0VZOiBgJHtrZXl9Q29uZmlnYCxcbiAgICBDT05GSUdfQ0FDSEVfS0VZX1VQREFURUQ6IGAke2tleX1Db25maWdVcGRhdGVkYFxufSk7XG5cbmNvbnN0IE1BWF9DQUNIRV9BR0VfTVMgPSAxICogNjAgKiA2MCAqIDEwMDA7XG5cbmVudW0gQ29uZmlnQ2FjaGVUeXBlIHtcbiAgICBQTEFURk9STSA9ICdwbGF0Zm9ybScsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZzxUQ29uZmlnVHlwZT4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FjaGVLZXk6IHN0cmluZyxcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8VENvbmZpZ1R5cGU+IHtcbiAgICBjb25zdCBjYWNoZUtleXMgPSBnZXRDYWNoZUtleXMoY2FjaGVLZXkpO1xuICAgIGxldCBjb25maWcgPSBhd2FpdCBnZXQ8VENvbmZpZ1R5cGU+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGNvbnN0IGxhc3RMb2FkVGltZSA9XG4gICAgICAgIChhd2FpdCBnZXQ8bnVtYmVyPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVEKSkgPz8gMDtcbiAgICBsZXQgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IGZhbHNlO1xuXG4gICAgaWYgKERhdGUubm93KCkgLSBsYXN0TG9hZFRpbWUgPiBNQVhfQ0FDSEVfQUdFX01TKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnQ29uZmlnIG5ldmVyIHN5bmNlZC9zdGFsZSwgc3luY2luZyBub3cuLi4nKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uZmlnID0gYXdhaXQgYXV0aGVkRmV0Y2hKc29uPFRDb25maWdUeXBlPihjdHgsIHVybCk7XG4gICAgICAgICAgICB1cGRhdGVkUmVtb3RlQ29uZmlnID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgLy8gTm9vcCAoZmFsbGJhY2sgdG8gbG9jYWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlZFJlbW90ZUNvbmZpZykge1xuICAgICAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVksIGNvbmZpZyk7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVELCBEYXRlLm5vdygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFBsYXRmb3JtQ29uZmlnKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQbGF0Zm9ybUNvbmZpZz4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIChhd2FpdCBsb2FkQ29uZmlnPFBsYXRmb3JtQ29uZmlnPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFNlcnZpY2UuUFVTSCl9L3YxL3dlYi9jb25maWdgLFxuICAgICAgICAgICAgQ29uZmlnQ2FjaGVUeXBlLlBMQVRGT1JNLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICkpID8/IHt9XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZGxDb25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPERkbFByb21wdENvbmZpZ1tdIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3Qgd2ViSW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgbG9hZENvbmZpZzxEZGxQcm9tcHRDb25maWdbXT4oXG4gICAgICAgICAgICBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLkRETCl9L3YxL2Jhbm5lcnM/d2ViSW5zdGFsbElkPSR7d2ViSW5zdGFsbElkfWAsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuRERMLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBsb2FkRGRsQ29uZmlnOiBmYWlsZWQgdG8gbG9hZCBEZWZlcnJlZCBEZWVwTGluayBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICApO1xuICAgICAgICAvLyB1bmRlZmluZWQgcmV0dXJuIC8gbm8gY29uZmlnXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGRsQmFubmVyQ29uZmlnRnJvbUNhY2hlKFxuICAgIGJhbm5lclV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKENvbmZpZ0NhY2hlVHlwZS5EREwpO1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBhd2FpdCBnZXQ8RGRsUHJvbXB0Q29uZmlnW10+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncyA9IGNvbmZpZ3MuZmlsdGVyKGMgPT4gYy51dWlkICE9PSBiYW5uZXJVdWlkKTtcblxuICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlncyk7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi9jaGFubmVscyc7XG5cbmNvbnN0IFNES19WRVJTSU9OID0gJzEuMTEuMSc7XG5jb25zdCBTREtfVFlQRSA9IDEwO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbnR5cGUgTmVzdGVkUGljazxULCBLMSBleHRlbmRzIGtleW9mIFQsIEsyIGV4dGVuZHMga2V5b2YgVFtLMV0+ID0ge1xuICAgIFtQMSBpbiBLMV06IHtcbiAgICAgICAgW1AyIGluIEsyXTogVFtLMV1bUDJdO1xuICAgIH07XG59O1xuXG5leHBvcnQgZW51bSBTeXN0ZW1FdmVudFR5cGUge1xuICAgIE1FU1NBR0VfREVMSVZFUkVEID0gJ2subWVzc2FnZS5kZWxpdmVyZWQnLFxuICAgIE1FU1NBR0VfT1BFTkVEID0gJ2subWVzc2FnZS5vcGVuZWQnLFxuICAgIFBVU0hfUkVHSVNURVJFRCA9ICdrLnB1c2guZGV2aWNlUmVnaXN0ZXJlZCcsXG4gICAgSU5TVEFMTF9UUkFDS0VEID0gJ2suc3RhdHMuaW5zdGFsbFRyYWNrZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGVkJyxcbiAgICBVU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRpb25DbGVhcmVkJyxcbiAgICBQQUdFX1ZJRVdFRCA9ICdrLnBhZ2VWaWV3ZWQnXG59XG5cbmV4cG9ydCBlbnVtIFByb21wdFR5cGVOYW1lIHtcbiAgICBCRUxMID0gJ2JlbGwnLFxuICAgIEFMRVJUID0gJ2FsZXJ0JyxcbiAgICBCQU5ORVIgPSAnYmFubmVyJyxcbiAgICBERExfQkFOTkVSID0gJ2RkbF9iYW5uZXInXG59XG5cbi8vIE5vdGUgZHVwbGljYXRlICdpbicgdnMgJ0lOJyBkdWUgdG8gbWlzYWxpZ25tZW50IGluIHNlcnZlciBjb25maWcgYW5kIHB1Ymxpc2hlZCBkb2NzIGZvciBtYW51YWwgY29uZmlnXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvciA9ICdpbicgfCAnSU4nIHwgJz0nIHwgJz4nIHwgJzwnIHwgJz49JyB8ICc8PSc7XG5leHBvcnQgdHlwZSBGaWx0ZXJWYWx1ZSA9IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzdHJpbmdbXTtcbmV4cG9ydCB0eXBlIFByb3BGaWx0ZXIgPSBbc3RyaW5nLCBGaWx0ZXJPcGVyYXRvciwgRmlsdGVyVmFsdWVdO1xuXG5pbnRlcmZhY2UgUHJvbXB0VHJpZ2dlciB7XG4gICAgZXZlbnQ6IHN0cmluZztcbiAgICBhZnRlclNlY29uZHM/OiBudW1iZXI7XG4gICAgZmlsdGVycz86IFByb3BGaWx0ZXJbXTtcbn1cblxuaW50ZXJmYWNlIFByb21wdE92ZXJsYXlDb25maWcge1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgbGFiZWxzOiB7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgYm9keTogc3RyaW5nO1xuICAgIH07XG4gICAgbGlua3M/OiB7IGxhYmVsOiBzdHJpbmc7IHVybDogc3RyaW5nIH1bXTtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgc2hhZGU6IHN0cmluZztcbiAgICAgICAgc3RyaXA6IHN0cmluZztcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgUHJvbXB0U2lsZW50T3ZlcmxheUNvbmZpZyA9IE5lc3RlZFBpY2s8XG4gICAgUHJvbXB0T3ZlcmxheUNvbmZpZyxcbiAgICAnbGFiZWxzJyxcbiAgICAnYm9keSdcbj4gJlxuICAgIE5lc3RlZFBpY2s8UHJvbXB0T3ZlcmxheUNvbmZpZywgJ2NvbG9ycycsICd0ZXh0Jz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZyB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnIHtcbiAgICBiZzogc3RyaW5nO1xuICAgIGZnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbkZnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbmZpZyB7XG4gICAgbGFiZWxzOiBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnO1xuICAgIGNvbG9yczogQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnIHtcbiAgICBwcmVzZW50ZWRVdWlkczogc3RyaW5nW10gfCAnYWxsJztcbiAgICBjaGVja2VkVXVpZHM6IHN0cmluZ1tdIHwgJ25vbmUnIHwgJ2FsbCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdElubGluZSc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0RGlhbG9nJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xuICAgIGRpYWxvZ0NvbmZpZzogQ2hhbm5lbERpYWxvZ0NvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsU3ViQWN0aW9uIHtcbiAgICB0eXBlOiAnc3Vic2NyaWJlVG9DaGFubmVsJztcbiAgICBjaGFubmVsVXVpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBVaUFjdGlvblR5cGUge1xuICAgIERFQ0xJTkUgPSAnZGVjbGluZScsXG4gICAgUkVNSU5EID0gJ3JlbWluZCcsXG4gICAgRERMX09QRU5fU1RPUkUgPSAnb3BlblN0b3JlJyxcbiAgICBERExfT1BFTl9ERUVQTElOSyA9ICdvcGVuRGVlcGxpbmsnXG59XG5cbmludGVyZmFjZSBEZWNsaW5lUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuREVDTElORTtcbn1cblxuaW50ZXJmYWNlIFJlbWluZFByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLlJFTUlORDtcbiAgICBkZWxheTogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZztcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0QWN0aW9uID1cbiAgICB8IENoYW5uZWxTdWJBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbjtcblxuZXhwb3J0IGVudW0gUmVtaW5kZXJUaW1lVW5pdCB7XG4gICAgSE9VUlMgPSAnaG91cnMnLFxuICAgIERBWVMgPSAnZGF5cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnIHtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRpbWVVbml0OiBSZW1pbmRlclRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGRlY2xpbmU6IERlY2xpbmVQcm9tcHRBY3Rpb24gfCBSZW1pbmRQcm9tcHRBY3Rpb247XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTWFza0NvbmZpZyB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0UG9zaXRpb24ge1xuICAgIFRPUF9MRUZUID0gJ3RvcC1sZWZ0JyxcbiAgICBUT1BfQ0VOVEVSID0gJ3RvcC1jZW50ZXInLFxuICAgIFRPUF9SSUdIVCA9ICd0b3AtcmlnaHQnLFxuICAgIENFTlRFUl9MRUZUID0gJ2NlbnRlci1sZWZ0JyxcbiAgICBDRU5URVIgPSAnY2VudGVyJyxcbiAgICBDRU5URVJfUklHSFQgPSAnY2VudGVyLXJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVCA9ICdib3R0b20tbGVmdCcsXG4gICAgQk9UVE9NX0NFTlRFUiA9ICdib3R0b20tY2VudGVyJyxcbiAgICBCT1RUT01fUklHSFQgPSAnYm90dG9tLXJpZ2h0JyxcbiAgICBUT1AgPSAndG9wJyxcbiAgICBCT1RUT00gPSAnYm90dG9tJ1xufVxuXG5pbnRlcmZhY2UgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lO1xuICAgIHRyaWdnZXI6IFByb21wdFRyaWdnZXI7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xuICAgIG92ZXJsYXk/OiBQcm9tcHRPdmVybGF5Q29uZmlnO1xuICAgIHNpbGVudE92ZXJsYXk/OiBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnO1xuICAgIGFjdGlvbnM/OiBQcm9tcHRBY3Rpb25bXTtcbn1cblxuaW50ZXJmYWNlIFdpdGhJbWFnZVVybCB7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUb29sdGlwQ29uZmlnIHtcbiAgICB0b29sdGlwOiB7XG4gICAgICAgIHN1YnNjcmliZTogc3RyaW5nO1xuICAgIH07XG59XG5cbnR5cGUgRGlhbG9nTGFiZWxDb25maWcgPSB7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nTGFiZWxDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0xhYmVsQ29uZmlnXG4+O1xuXG50eXBlIERpYWxvZ0NvbG9yQ29uZmlnID0ge1xuICAgIGZnOiBzdHJpbmc7XG4gICAgYmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uRmc6IHN0cmluZztcbiAgICBkZWNsaW5lQWN0aW9uQmc6IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb25GZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkJnOiBzdHJpbmc7XG59O1xuXG50eXBlIE5hbWVkRGlhbG9nQ29sb3JDb25maWc8VCBleHRlbmRzIFByb21wdFR5cGVOYW1lPiA9IFJlY29yZDxcbiAgICBULFxuICAgIERpYWxvZ0NvbG9yQ29uZmlnXG4+O1xuXG5pbnRlcmZhY2UgVG9hc3RNZXNzYWdlIHtcbiAgICB0aGFua3NGb3JTdWJzY3JpYmluZzogc3RyaW5nO1xufVxuXG4vLyBCRUxMXG5cbnR5cGUgQmVsbExhYmVsQ29uZmlnID0gVG9hc3RNZXNzYWdlICYgVG9vbHRpcENvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBCZWxsQ29sb3JDb25maWcge1xuICAgIGJlbGw6IHtcbiAgICAgICAgZmc6IHN0cmluZztcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxQcm9tcHRDb25maWcgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CRUxMO1xuICAgIGxhYmVscz86IEJlbGxMYWJlbENvbmZpZztcbiAgICBjb2xvcnM/OiBCZWxsQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLkJPVFRPTV9MRUZUIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NX1JJR0hUO1xufVxuXG4vLyBBTEVSVFxuXG50eXBlIEFsZXJ0TGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBBbGVydENvbG9yQ29uZmlnID0gTmFtZWREaWFsb2dDb2xvckNvbmZpZzxQcm9tcHRUeXBlTmFtZS5BTEVSVD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5BTEVSVDtcbiAgICBsYWJlbHM6IEFsZXJ0TGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBBbGVydENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5DRU5URVI7XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gQkFOTkVSXG5cbnR5cGUgQmFubmVyTGFiZWxDb25maWcgPSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj4gJlxuICAgIFRvYXN0TWVzc2FnZTtcbnR5cGUgQmFubmVyQ29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkJBTk5FUj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkFOTkVSO1xuICAgIGxhYmVsczogQmFubmVyTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBCYW5uZXJDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uVE9QIHwgUHJvbXB0UG9zaXRpb24uQk9UVE9NO1xuICAgIGJhY2tncm91bmRNYXNrPzogQmFja2dyb3VuZE1hc2tDb25maWc7XG59XG5cbi8vIERETCBCQU5ORVJcblxuZXhwb3J0IGludGVyZmFjZSBBcHBSYXRpbmcge1xuICAgIHJhdGluZzogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG59XG5cbnR5cGUgRGRsRGlhbG9nQ29sb3JDb25maWcgPSBEaWFsb2dDb2xvckNvbmZpZyAmIHsgcmF0aW5nRmc6IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBPcGVuU3RvcmVVaUFjdGlvbiA9IHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZGVlcExpbmtVcmw6IHN0cmluZztcbn07XG50eXBlIE9wZW5EZWVwTGlua1VpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRGRsVWlBY3Rpb25zID0gUHJvbXB0VWlBY3Rpb25zICYge1xuICAgIHVpQWN0aW9uczoge1xuICAgICAgICBhY2NlcHQ6IE9wZW5TdG9yZVVpQWN0aW9uIHwgT3BlbkRlZXBMaW5rVWlBY3Rpb247XG4gICAgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGRsQmFubmVyUHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIERkbFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuRERMX0JBTk5FUjtcbiAgICBsYWJlbHM6IERpYWxvZ0xhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogRGRsRGlhbG9nQ29sb3JDb25maWc7XG4gICAgYXBwUmF0aW5nPzogQXBwUmF0aW5nO1xufVxuXG5leHBvcnQgdHlwZSBQdXNoUHJvbXB0Q29uZmlnID1cbiAgICB8IEJlbGxQcm9tcHRDb25maWdcbiAgICB8IEFsZXJ0UHJvbXB0Q29uZmlnXG4gICAgfCBCYW5uZXJQcm9tcHRDb25maWc7XG5cbmV4cG9ydCB0eXBlIERkbFByb21wdENvbmZpZyA9IERkbEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnID0gUHVzaFByb21wdENvbmZpZyB8IERkbFByb21wdENvbmZpZztcbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZ3M8VCBleHRlbmRzIFByb21wdENvbmZpZz4gPSBSZWNvcmQ8c3RyaW5nLCBUPjtcblxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybUNvbmZpZyB7XG4gICAgcHVibGljS2V5OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBwcm9tcHRzPzogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPjtcbiAgICBzYWZhcmlQdXNoSWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZW51bSBTREtGZWF0dXJlIHtcbiAgICBQVVNIID0gJ3B1c2gnLFxuICAgIERETCA9ICdkZGwnXG59XG5cbmV4cG9ydCBlbnVtIFNlcnZpY2Uge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCcsXG4gICAgRVZFTlRTID0gJ2V2ZW50cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIHtcbiAgICByZWdpb246IHN0cmluZztcbiAgICBhcGlLZXk6IHN0cmluZztcbiAgICBzZWNyZXRLZXk6IHN0cmluZztcbiAgICB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHNlcnZpY2VXb3JrZXJQYXRoPzogc3RyaW5nO1xuICAgIHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIGF1dG9SZXN1YnNjcmliZT86IGJvb2xlYW47XG4gICAgZmVhdHVyZXM/OiBTREtGZWF0dXJlW107XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdFJlbWluZGVyID1cbiAgICB8IHtcbiAgICAgICAgICBkZWNsaW5lZE9uOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCAnc3VwcHJlc3NlZCc7XG5cbnR5cGUgU2RrRXZlbnRUeXBlID0gJ2V2ZW50VHJhY2tlZCc7XG5leHBvcnQgdHlwZSBTZGtFdmVudDxUID0gYW55PiA9IHsgdHlwZTogU2RrRXZlbnRUeXBlOyBkYXRhOiBUIH07XG50eXBlIFNka0V2ZW50SGFuZGxlciA9IChldmVudDogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBhcGlLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBzZWNyZXRLZXk6IHN0cmluZztcbiAgICByZWFkb25seSB2YXBpZFB1YmxpY0tleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF1dGhIZWFkZXI6IHN0cmluZztcbiAgICByZWFkb25seSBzZXJ2aWNlV29ya2VyUGF0aDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHB1c2hQcm9tcHRzOiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+IHwgJ2F1dG8nO1xuICAgIHJlYWRvbmx5IGF1dG9SZXN1YnNjcmliZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBmZWF0dXJlczogU0RLRmVhdHVyZVtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBTZGtFdmVudEhhbmRsZXJbXSB9O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdXJsTWFwOiB7IFtrZXkgaW4gU2VydmljZV06IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgICAgICAgdGhpcy5zZWNyZXRLZXkgPSBjb25maWcuc2VjcmV0S2V5O1xuICAgICAgICB0aGlzLnZhcGlkUHVibGljS2V5ID0gY29uZmlnLnZhcGlkUHVibGljS2V5O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBgQmFzaWMgJHtidG9hKGAke3RoaXMuYXBpS2V5fToke3RoaXMuc2VjcmV0S2V5fWApfWA7XG4gICAgICAgIHRoaXMuc2VydmljZVdvcmtlclBhdGggPSBjb25maWcuc2VydmljZVdvcmtlclBhdGggPz8gJy93b3JrZXIuanMnO1xuICAgICAgICB0aGlzLnB1c2hQcm9tcHRzID0gY29uZmlnLnB1c2hQcm9tcHRzID8/ICdhdXRvJztcbiAgICAgICAgdGhpcy5hdXRvUmVzdWJzY3JpYmUgPSBjb25maWcuYXV0b1Jlc3Vic2NyaWJlID8/IHRydWU7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBjb25maWcuZmVhdHVyZXMgPz8gW1NES0ZlYXR1cmUuUFVTSF07XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuXG4gICAgICAgIHRoaXMudXJsTWFwID0ge1xuICAgICAgICAgICAgW1NlcnZpY2UuUFVTSF06IFwiaHR0cHM6Ly9wdXNoLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5FVkVOVFNdOiBcImh0dHBzOi8vZXZlbnRzLVwiICsgY29uZmlnLnJlZ2lvbiArIFwiLmt1bXVsb3MuY29tXCIsXG4gICAgICAgICAgICBbU2VydmljZS5ERExdOiBcImh0dHBzOi8vbGlua3MtXCIgKyBjb25maWcucmVnaW9uICsgXCIua3VtdWxvcy5jb21cIixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmVhdHVyZShmZWF0dXJlOiBTREtGZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICAgIH1cblxuICAgIHVybEZvclNlcnZpY2Uoc2VydmljZTogU2VydmljZSkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxNYXBbc2VydmljZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbJ3JlZ2lvbicsICdhcGlLZXknLCAnc2VjcmV0S2V5JywgJ3ZhcGlkUHVibGljS2V5J107XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldCgnaW5zdGFsbElkJywgdXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcklkKCk6IFByb21pc2U8VXNlcklkPiB7XG4gICAgcmV0dXJuIGdldDxVc2VySWQgfCB1bmRlZmluZWQ+KCd1c2VySWQnKS50aGVuKFxuICAgICAgICB1c2VySWQgPT4gdXNlcklkID8/IGdldEluc3RhbGxJZCgpXG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFzc29jaWF0ZVVzZXIoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGlkOiBVc2VySWQsXG4gICAgYXR0cmlidXRlcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBzZXQoJ3VzZXJJZCcsIGlkKTtcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgYXR0cmlidXRlc1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5VU0VSX0FTU09DSUFURUQsIHByb3BzKS50aGVuKF8gPT4ge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJVc2VyQXNzb2NpYXRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5VU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQsIHtcbiAgICAgICAgb2xkVXNlcklkZW50aWZpZXI6IGN1cnJlbnRVc2VySWRcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWwoJ3VzZXJJZCcpO1xufVxuXG5leHBvcnQgdHlwZSBLdW11bG9zRXZlbnQgPSB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBkYXRhPzogUHJvcHNPYmplY3Q7XG59O1xuXG5leHBvcnQgdHlwZSBFdmVudFBheWxvYWQgPSBLdW11bG9zRXZlbnRbXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYWNrRXZlbnQoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgaW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICBjb25zdCBldmVudHM6IEV2ZW50UGF5bG9hZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHV1aWQ6IHV1aWR2NCgpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcyxcbiAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGN0eC5icm9hZGNhc3QoJ2V2ZW50VHJhY2tlZCcsIGV2ZW50cyk7XG5cbiAgICBpZiAoIWlzU3lzdGVtRXZlbnQodHlwZSkpe1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5FVkVOVFMpfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gaXNTeXN0ZW1FdmVudCh0eXBlOiBzdHJpbmcpe1xuICAgIHJldHVybiAoPGFueT5PYmplY3QpLnZhbHVlcyhTeXN0ZW1FdmVudFR5cGUpLmluY2x1ZGVzKHR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tJbnN0YWxsRGV0YWlscyhjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgIGJ1bmRsZTogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCcsIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgICAgICB0YXJnZXQ6IDIgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgfSxcbiAgICAgICAgc2RrOiB7XG4gICAgICAgICAgICBpZDogU0RLX1RZUEUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBTREtfVkVSU0lPTlxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgfSxcbiAgICAgICAgb3M6IHtcbiAgICAgICAgICAgIC8vIERldGVjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBzZXJ2ZXItc2lkZSBmcm9tIFVBIGRhdGFcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2U6IHtcbiAgICAgICAgICAgIC8vIFdpbGwgYmUgaGFuZGxlZCBvbiBiZXN0LWVmZm9ydCBiYXNpcyBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgbmFtZTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIHR6OlxuICAgICAgICAgICAgICAgIHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICA/IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGlzU2ltdWxhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsZTogbmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFzaFBhcnRzID0gW1xuICAgICAgICBTREtfVkVSU0lPTixcbiAgICAgICAgcGF5bG9hZC5hcHAuYnVuZGxlLFxuICAgICAgICBwYXlsb2FkLmRldmljZS50eixcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubG9jYWxlLFxuICAgICAgICBwYXlsb2FkLmRldmljZS5uYW1lXG4gICAgXTtcbiAgICBjb25zdCBoYXNoID0gY3lyYjUzKGhhc2hQYXJ0cy5qb2luKCd8JykpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ2RldGFpbHNIYXNoJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nSGFzaCA9PT0gaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBTeXN0ZW1FdmVudFR5cGUuSU5TVEFMTF9UUkFDS0VELCBwYXlsb2FkKVxuICAgICAgICAudGhlbigoKSA9PiBzZXQoJ2RldGFpbHNIYXNoJywgaGFzaCkpXG4gICAgICAgIC50aGVuKCgpID0+IHZvaWQgMCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbExpc3RJdGVtIHtcbiAgICBjaGFubmVsOiBDaGFubmVsO1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgYWxsQ2hhbm5lbHM6IENoYW5uZWxbXSxcbiAgICBzZWxlY3Rpb25Db25maWc6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZ1xuKSB7XG4gICAgcmV0dXJuIGFsbENoYW5uZWxzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICBjID0+XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIClcbiAgICAgICAgLm1hcDxDaGFubmVsTGlzdEl0ZW0+KGMgPT4gKHtcbiAgICAgICAgICAgIGNoYW5uZWw6IHsgLi4uYyB9LFxuICAgICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgICAgICBjLnN1YnNjcmliZWQudmFsdWVPZigpIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgfSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbnMge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTeXN0ZW1FdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgcGFyc2VRdWVyeVN0cmluZyB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IFNhZmFyaVB1c2hNYW5hZ2VyIGZyb20gJy4vc2FmYXJpJztcbmltcG9ydCBXM2NQdXNoTWFuYWdlciBmcm9tICcuL3czYyc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgPSAnc3Vic2NyaWJlZCcgfCAndW5zdWJzY3JpYmVkJyB8ICdibG9ja2VkJztcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgICBXM0MgPSAzLFxuICAgIFNBRkFSSSA9IDRcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICAgIFBVU0ggPSAxXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE9wc01hbmFnZXIge1xuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+O1xuICAgIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKGN0eDogQ29udGV4dCk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBpc05hdGl2ZVByb21wdFNob3duKCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoUGF5bG9hZCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgICdrLm1lc3NhZ2UnOiB7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNIO1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICB1cmw6IHN0cmluZyB8IG51bGw7XG4gICAgaW1hZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgaWNvbjogc3RyaW5nIHwgbnVsbDtcbn1cblxubGV0IG1hbmFnZXI6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQdXNoT3BzTWFuYWdlcihcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+IHtcbiAgICBpZiAobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyID09PSAnc2FmYXJpJykge1xuICAgICAgICBtYW5hZ2VyID0gbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCkudGhlbihcbiAgICAgICAgICAgIGNmZyA9PiBuZXcgU2FmYXJpUHVzaE1hbmFnZXIoY2ZnKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9taXNlLnJlc29sdmUobmV3IFczY1B1c2hNYW5hZ2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW5hZ2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tPcGVuRnJvbVF1ZXJ5KGN0eDogQ29udGV4dCkge1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgIT09ICdzYWZhcmknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKCk7XG5cbiAgICBpZiAoIXBhcmFtcz8uWydrbmlkJ10pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQoY3R4LCBTeXN0ZW1FdmVudFR5cGUuTUVTU0FHRV9PUEVORUQsIHtcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSCxcbiAgICAgICAgaWQ6IE51bWJlcihwYXJhbXNbJ2tuaWQnXSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3QgeyAnay5tZXNzYWdlJzogXywgLi4udXNlckRhdGEgfSA9IHBheWxvYWQuZGF0YTtcblxuICAgIGNvbnN0IHB1c2g6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uID0ge1xuICAgICAgICBpZDogcGF5bG9hZC5kYXRhWydrLm1lc3NhZ2UnXS5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogcGF5bG9hZC50aXRsZSxcbiAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5tc2csXG4gICAgICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgICAgICB1cmw6IHBheWxvYWQudXJsID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaWNvblVybDogcGF5bG9hZC5pY29uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaW1hZ2VVcmw6IHBheWxvYWQuaW1hZ2UgPz8gdW5kZWZpbmVkXG4gICAgfTtcbiAgICByZXR1cm4gcHVzaDtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBTZXJ2aWNlLFxuICAgIFN5c3RlbUV2ZW50VHlwZSxcbiAgICB0cmFja0V2ZW50XG59IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGN5cmI1MywgZGVmZXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9wdXNoJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vc2FmYXJpLyR7Y3R4LmFwaUtleX1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIFN5c3RlbUV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5TQUZBUkksXG4gICAgICAgICAgICB0b2tlbjogcGVybS5kZXZpY2VUb2tlbixcbiAgICAgICAgICAgIGJ1bmRsZUlkOiBjZmcuc2FmYXJpUHVzaElkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaFRva2VuSGFzaCcsIHRva2VuSGFzaCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cblxuICAgIGFzeW5jIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU3lzdGVtRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MywgZ2V0QnJvd3Nlck5hbWUgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5jb25zdCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTID0gMTAwMDtcblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKCk6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj4ge1xuICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpO1xuXG4gICAgaWYgKCF3b3JrZXJSZWcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG59XG5cbmZ1bmN0aW9uIGhhc2hTdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0LCBzdWI6IFB1c2hTdWJzY3JpcHRpb24pOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHtzdWIuZW5kcG9pbnR9YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFczY1B1c2hNYW5hZ2VyIGltcGxlbWVudHMgUHVzaE9wc01hbmFnZXIge1xuICAgIGFzeW5jIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ05vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLCBhYm9ydGluZy4uLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdQdXNoIG5vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViICYmICFoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcbiAgICAgICAgY29uc3QgZXhwaXJ5ID0gc3ViLmV4cGlyYXRpb25UaW1lO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBleGlzdGluZ0VuZHBvaW50SGFzaCA9PT0gZW5kcG9pbnRIYXNoICYmXG4gICAgICAgICAgICAoIWV4aXN0aW5nRXhwaXJ5IHx8IGV4aXN0aW5nRXhwaXJ5ID4gRGF0ZS5ub3coKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlczQyxcbiAgICAgICAgICAgIHRva2VuOiBzdWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgZXhwaXJ5KTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxpbXBvcnQoJy4nKS5QdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IGF3YWl0IHRoaXMucmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oY3R4KTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZygpO1xuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBzdWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFjdHguYXV0b1Jlc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IG5vdCBlbmFibGVkLCBhYm9ydGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICBgQXV0by1yZXN1YnNjcmliZTogcGVybWlzc2lvbiBub3QgZ3JhbnRlZCwgYWJvcnRpbmc6ICR7cGVybX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgbGV0IGV4aXN0aW5nU3ViSGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViKSB7XG4gICAgICAgICAgICBleGlzdGluZ1N1Ykhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgZXhpc3RpbmdTdWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGV4aXN0aW5nU3ViSGFzaCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdTdWIgJiZcbiAgICAgICAgICAgIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikgJiZcbiAgICAgICAgICAgIChleGlzdGluZ0V4cGlyeSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaWJlOiBhbHJlYWR5IGhhdmUgYSBub24tZXhwaXJlZCBlbmRwb2ludCBoYXNoIGZvciBzYW1lIHN1YiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBhdHRlbXB0aW5nIHJlc3Vic2NyaXB0aW9uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgYnJvd3Nlck5hbWUgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgICAgIGlmICgnY2hyb21lJyAhPT0gYnJvd3Nlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmx1ckV2ZW50RmlyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tGb3JCbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChibHVyRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhbmNlbEJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG4gICAgICAgICAgICAgICAgYmx1ckV2ZW50RmlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSwgQkxVUl9FVkVOVF9USU1FT1VUX01JTExJUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UmVtaW5kZXJcbn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXG4gICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgc2VjcmV0S2V5OiBjb25maWcuc2VjcmV0S2V5LFxuICAgICAgICB2YXBpZFB1YmxpY0tleTogY29uZmlnLnZhcGlkUHVibGljS2V5LFxuICAgICAgICBzZXJ2aWNlV29ya2VyUGF0aDogY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLFxuICAgICAgICBhdXRvUmVzdWJzY3JpYmU6IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUsXG4gICAgICAgIHB1c2hQcm9tcHRzOiBjb25maWcucHVzaFByb21wdHNcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RERExDb25maWcoXG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWdbXVxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXT4ge1xuICAgIHJldHVybiBzZXQ8RGRsUHJvbXB0Q29uZmlnW10+KCdkZGxjb25maWcnLCBjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZyxcbiAgICByZW1pbmRlcjogUHJvbXB0UmVtaW5kZXJcbikge1xuICAgIHJldHVybiBzZXQoYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gLCByZW1pbmRlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0PFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPihgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKTogUHJvbWlzZTxDb250ZXh0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGdldDxDb25maWd1cmF0aW9uPignY29uZmlnJykudGhlbihjb25maWcgPT5cbiAgICAgICAgY29uZmlnID8gbmV3IENvbnRleHQoY29uZmlnKSA6IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IFByb21pc2U8UHVzaFBheWxvYWQ+IHtcbiAgICByZXR1cm4gc2V0KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk6IFByb21pc2U8XG4gICAgUHVzaFBheWxvYWQgfCB1bmRlZmluZWRcbj4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXQ8UHVzaFBheWxvYWQ+KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIGF3YWl0IGRlbCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICByZXR1cm4gcGF5bG9hZCA/PyB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTREtGZWF0dXJlIH0gZnJvbSAnLi9pbmRleCc7XG5cbnR5cGUgRmVhdHVyZURlcGVuZGVuY3kgPSBzdHJpbmcgfCBvYmplY3QgfCBJREJGYWN0b3J5IHwgUHJvbWlzZUNvbnN0cnVjdG9yIHwgTm90aWZpY2F0aW9uIHwgUHVzaE1hbmFnZXIgfCBTZXJ2aWNlV29ya2VyQ29udGFpbmVyIHwgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uO1xuXG5jb25zdCBDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTIDogRmVhdHVyZURlcGVuZGVuY3lbXSA9IFt0eXBlb2YgUHJvbWlzZSwgdHlwZW9mIGZldGNoLCB0eXBlb2YgaW5kZXhlZERCXTtcblxuY29uc3QgRkVBVFVSRV9ERVBFTkRFTkNZX0NIRUNLIDoge1trZXkgaW4gU0RLRmVhdHVyZV06ICgpID0+IGJvb2xlYW59ID0ge1xuICAgICdwdXNoJzogaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCxcbiAgICAnZGRsJzogaXNCcm93c2VyU3VwcG9ydGVkRm9yRGRsXG59O1xuXG4vLyBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXG5leHBvcnQgZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihcbiAgICAgICAgICAgIGNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMCxcbiAgICAgICAgICAgICAgICB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCgxZTcpLnRvU3RyaW5nKCkgKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZShcbiAgICAgICAgL1swMThdL2csXG4gICAgICAgIGMgPT5cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICBOdW1iZXIoYykgXlxuICAgICAgICAgICAgICAgIChjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmXG4gICAgICAgICAgICAgICAgICAgICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpKVxuICAgICAgICAgICAgKS50b1N0cmluZygxNilcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3Nlck5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBicm93c2VycyA9IFsnZWRnZScsICdmaXJlZm94JywgJ2Nocm9tZScsICdzYWZhcmknXTtcblxuICAgIGZvciAobGV0IGIgb2YgYnJvd3NlcnMpIHtcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoYikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWQoc2RrRmVhdHVyZXM/OiBTREtGZWF0dXJlW10pIHtcbiAgICBzZGtGZWF0dXJlcyA9IHNka0ZlYXR1cmVzID8/IFtdO1xuICAgIGlmICghc2RrRmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgIHNka0ZlYXR1cmVzLnB1c2goU0RLRmVhdHVyZS5QVVNIKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2RrRmVhdHVyZXMuZmlsdGVyKGYgPT4gRkVBVFVSRV9ERVBFTkRFTkNZX0NIRUNLW2ZdKCkpLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2goKSB7XG4gICAgY29uc3QgY29yZURlcGVuZGVuY2llcyA9IFsuLi5DT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTXTtcbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmICgnc2FmYXJpJyA9PT0gYnJvd3Nlcikge1xuICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2godHlwZW9mIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcmVEZXBlbmRlbmNpZXMucHVzaChcbiAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICB0eXBlb2YgTm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcixcbiAgICAgICAgICAgICAgICB0eXBlb2YgUHVzaE1hbmFnZXJcbiAgICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tSZXF1aXJlZChjb3JlRGVwZW5kZW5jaWVzKTtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yRGRsKCkge1xuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKENPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVMpO1xufVxuXG5mdW5jdGlvbiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXM6IEZlYXR1cmVEZXBlbmRlbmN5W10pIHtcbiAgICByZXR1cm4gY29yZURlcGVuZGVuY2llcy5yZWR1Y2UoXG4gICAgICAgIChzdXBwb3J0ZWQ6IGJvb2xlYW4sIGRlcGVuZGVuY3k6IEZlYXR1cmVEZXBlbmRlbmN5KSA9PiBzdXBwb3J0ZWQgJiYgZGVwZW5kZW5jeSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIHRydWVcbiAgICApO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG5jb25zdCBpbXVsID1cbiAgICBNYXRoLmltdWwgfHxcbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGIgfD0gMDsgLy8gZW5zdXJlIHRoYXQgb3BCIGlzIGFuIGludGVnZXIuIG9wQSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29lcmNlZC5cbiAgICAgICAgLy8gZmxvYXRpbmcgcG9pbnRzIGdpdmUgdXMgNTMgYml0cyBvZiBwcmVjaXNpb24gdG8gd29yayB3aXRoIHBsdXMgMSBzaWduIGJpdFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgZm9yIG91ciBjb252aWVuZW5jZTpcbiAgICAgICAgLy8gMS4gMHgwMDNmZmZmZiAvKm9wQSAmIDB4MDAwZmZmZmYqLyAqIDB4N2ZmZmZmZmYgLypvcEIqLyA9IDB4MWZmZmZmN2ZjMDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIHZhciByZXN1bHQgPSAoYSAmIDB4MDAzZmZmZmYpICogYjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChhICYgMHhmZmMwMDAwMCAvKiE9PSAwKi8pIHJlc3VsdCArPSAoKGEgJiAweGZmYzAwMDAwKSAqIGIpIHwgMDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwXG5leHBvcnQgZnVuY3Rpb24gY3lyYjUzKHN0cjogc3RyaW5nLCBzZWVkID0gMCk6IG51bWJlciB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBpbXVsKGgyIF4gY2gsIDE1OTczMzQ2NzcpO1xuICAgIH1cbiAgICBoMSA9XG4gICAgICAgIGltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID1cbiAgICAgICAgaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgcmV0dXJuIDQyOTQ5NjcyOTYgKiAoMjA5NzE1MSAmIGgyKSArIChoMSA+Pj4gMCk7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2goXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IG1ldGhvZDogJ0dFVCcgfVxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/PyB7fTtcblxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGN0eC5hdXRoSGVhZGVyLFxuICAgICAgICAuLi5leGlzdGluZ0hlYWRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZWRGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU6IG51bWJlciwgc3RhdHVzVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGBhdXRoZWQgZmV0Y2ggZmFpbGVkOiAke3N0YXR1c0NvZGV9LCAke3N0YXR1c1RleHR9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2hKc29uPFQ+KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdFxuKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCBvcHRpb25zKS50aGVuKHIgPT4ge1xuICAgICAgICBpZiAoIXIub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoZWRGZXRjaEVycm9yKHIuc3RhdHVzLCByLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHIuanNvbigpO1xuICAgIH0pO1xufVxuXG4vLyBCYXNlZCBvbiB0aGUgYWxwaGFiZXRzIGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0NjQ4IFRhYmxlcyAxICYgMlxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFVybEVuY29kZShidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbnRzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBiYXNlNjRFbmNvZGVkID0gYnRvYShcbiAgICAgICAgaW50cy5yZWR1Y2UoKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLCAnJylcbiAgICApO1xuICAgIGNvbnN0IHVybFZhcmlhbnQgPSBiYXNlNjRFbmNvZGVkXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgJycpO1xuXG4gICAgcmV0dXJuIHVybFZhcmlhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNlcnZpY2VXb3JrZXIoXG4gICAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAnU2VydmljZVdvcmtlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHBhdGgpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIHtcbiAgICBjb25zdCBkZWZlcnJlZCA9IHtcbiAgICAgICAgcmVzb2x2ZTogKG51bGwgYXMgdW5rbm93bikgYXMgKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkLFxuICAgICAgICByZWplY3Q6IChudWxsIGFzIHVua25vd24pIGFzIChyZWFzb24/OiBhbnkpID0+IHZvaWQsXG4gICAgICAgIHByb21pc2U6IChudWxsIGFzIHVua25vd24pIGFzIFByb21pc2U8VD5cbiAgICB9O1xuXG4gICAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZWZlcnJlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcoXG4gICAgcXM6IHN0cmluZyA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICBleGNsdWRlZFF1ZXJ5S2V5czogc3RyaW5nW10gPSBbXVxuKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHF1ZXJ5ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcXVlcnkgPSBxc1xuICAgICAgICAgICAgLnN1YnN0cmluZygxKVxuICAgICAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgICAgIC5tYXAodmFycyA9PiB2YXJzLnNwbGl0KCc9JykpXG4gICAgICAgICAgICAubWFwKHBhaXJzID0+IHBhaXJzLm1hcChkZWNvZGVVUklDb21wb25lbnQpKVxuICAgICAgICAgICAgLmZpbHRlcihwYWlycyA9PiBleGNsdWRlZFF1ZXJ5S2V5cy5pbmRleE9mKHBhaXJzWzBdKSA9PT0gLTEpXG4gICAgICAgICAgICAucmVkdWNlKChxLCBwYWlyKSA9PiAoeyAuLi5xLCBbcGFpclswXV06IHBhaXJbMV0gfSksIHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRPTVJlYWR5KGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9hbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8bW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cbiIsImltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBDb250ZXh0LFxuICAgIFN5c3RlbUV2ZW50VHlwZSxcbiAgICBhc3NlcnRDb25maWdWYWxpZCxcbiAgICB0cmFja0V2ZW50XG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZyxcbiAgICBwZXJzaXN0Q29uZmlnLFxuICAgIHBlcnNpc3RPcGVuZWRQdXNoUGF5bG9hZFxufSBmcm9tICcuLi9jb3JlL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBXb3JrZXJNZXNzYWdlVHlwZSB9IGZyb20gJy4vbWVzc2FnaW5nJztcbmltcG9ydCB7IGJyb2FkY2FzdEZyb21Xb3JrZXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG4vLyBMaXR0bGUgYml0IG9mIGEgaGFjaywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE0ODc3I2lzc3VlY29tbWVudC0zNDAyNzkyOTNcbmRlY2xhcmUgdmFyIHNlbGY6IFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAmIHsgS1VNVUxPU19JTklUPzogQ29uZmlndXJhdGlvbiB9O1xuXG5mdW5jdGlvbiB3aXRoQ29udGV4dChmbjogKGN0eDogQ29udGV4dCkgPT4gYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnKCkudGhlbihjdHggPT4ge1xuICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZi5LVU1VTE9TX0lOSVQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzc2VydENvbmZpZ1ZhbGlkKHNlbGYuS1VNVUxPU19JTklUKTtcblxuICAgICAgICByZXR1cm4gcGVyc2lzdENvbmZpZyhzZWxmLktVTVVMT1NfSU5JVCkudGhlbihjb25maWcgPT4ge1xuICAgICAgICAgICAgY3R4ID0gbmV3IENvbnRleHQoY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybiBmbihjdHgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUvc2tpcFdhaXRpbmdcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsICgpID0+IHtcbiAgICAvLyBNRE46IFRoZSBwcm9taXNlIHRoYXQgc2tpcFdhaXRpbmcoKSByZXR1cm5zIGNhbiBiZSBzYWZlbHkgaWdub3JlZFxuICAgIHNlbGYuc2tpcFdhaXRpbmcoKTtcbn0pO1xuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NsaWVudHMvY2xhaW1cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG4gICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5jbGFpbSgpKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCBldmVudCA9PiB7XG4gICAgY29uc3Qgd29ya0NvbXBsZXRlZCA9IHdpdGhDb250ZXh0KGN0eCA9PiB7XG4gICAgICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEuanNvbigpO1xuXG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQuZGF0YTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbJ2subWVzc2FnZSddKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IGRhdGFbJ2subWVzc2FnZSddO1xuICAgICAgICBjb25zdCBkZWxpdmVyeVRyYWNrZWQgPSB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLk1FU1NBR0VfREVMSVZFUkVELCB7XG4gICAgICAgICAgICB0eXBlOiBtZXNzYWdlRGF0YS50eXBlLFxuICAgICAgICAgICAgaWQ6IG1lc3NhZ2VEYXRhLmRhdGEuaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVjZWl2ZWRFdmVudEJyb2FkY2FzdCA9IGJyb2FkY2FzdEZyb21Xb3JrZXIoe1xuICAgICAgICAgICAgdHlwZTogV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZCxcbiAgICAgICAgICAgIGRhdGE6IHBheWxvYWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uU2hvd24gPSBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKFxuICAgICAgICAgICAgcGF5bG9hZC50aXRsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib2R5OiBwYXlsb2FkLm1zZyxcbiAgICAgICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGljb246IHBheWxvYWQuaWNvbiA/PyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBheWxvYWQuaW1hZ2UgPz8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBub3RpZmljYXRpb25TaG93bixcbiAgICAgICAgICAgIHJlY2VpdmVkRXZlbnRCcm9hZGNhc3QsXG4gICAgICAgICAgICBkZWxpdmVyeVRyYWNrZWRcbiAgICAgICAgXSk7XG4gICAgfSk7XG5cbiAgICBldmVudC53YWl0VW50aWwod29ya0NvbXBsZXRlZCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB3b3JrQ29tcGxldGVkID0gd2l0aENvbnRleHQoY3R4ID0+IHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZXZlbnQubm90aWZpY2F0aW9uO1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBub3RpZmljYXRpb24uZGF0YTtcblxuICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhWydrLm1lc3NhZ2UnXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBkYXRhWydrLm1lc3NhZ2UnXTtcbiAgICAgICAgY29uc3Qgb3BlblRyYWNrZWQgPSB0cmFja0V2ZW50KGN0eCwgU3lzdGVtRXZlbnRUeXBlLk1FU1NBR0VfT1BFTkVELCB7XG4gICAgICAgICAgICB0eXBlOiBtZXNzYWdlRGF0YS50eXBlLFxuICAgICAgICAgICAgaWQ6IG1lc3NhZ2VEYXRhLmRhdGEuaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gcGF5bG9hZC51cmwgPz8gJy8nO1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWRQZXJzaXN0ZWQgPSBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWQocGF5bG9hZCk7XG5cbiAgICAgICAgcmV0dXJuIHBheWxvYWRQZXJzaXN0ZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3dPcGVuZWQgPSBzZWxmLmNsaWVudHMub3BlbldpbmRvdyh1cmwpO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3dpbmRvd09wZW5lZCwgb3BlblRyYWNrZWRdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBldmVudC53YWl0VW50aWwod29ya0NvbXBsZXRlZCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoc3Vic2NyaXB0aW9uY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgIC8vIFRPRE8gbWFyayB1bnN1YnNjcmliZWQ/XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3b3JrQ29tcGxldGVkID0gd2l0aENvbnRleHQoY3R4ID0+XG4gICAgICAgIGdldFB1c2hPcHNNYW5hZ2VyKGN0eCkudGhlbihtZ3IgPT4gbWdyLnB1c2hSZWdpc3RlcihjdHgpKVxuICAgICk7XG5cbiAgICBldmVudC53YWl0VW50aWwod29ya0NvbXBsZXRlZCk7XG59KTtcbiIsImltcG9ydCB7IFB1c2hQYXlsb2FkIH0gZnJvbSAnLi4vY29yZS9wdXNoJztcblxuZXhwb3J0IGVudW0gV29ya2VyTWVzc2FnZVR5cGUge1xuICAgIEtQdXNoUmVjZWl2ZWQgPSAnS1B1c2hSZWNlaXZlZCdcbn1cbmV4cG9ydCB0eXBlIFdvcmtlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogV29ya2VyTWVzc2FnZVR5cGUuS1B1c2hSZWNlaXZlZDtcbiAgICBkYXRhOiBQdXNoUGF5bG9hZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlKGRhdGE6IGFueSk6IGRhdGEgaXMgV29ya2VyTWVzc2FnZSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIFdvcmtlck1lc3NhZ2VUeXBlWyhkYXRhIGFzIFdvcmtlck1lc3NhZ2UpLnR5cGVdICE9PSB1bmRlZmluZWRcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgV29ya2VyTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnaW5nJztcblxuLy8gTGl0dGxlIGJpdCBvZiBhIGhhY2ssIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNDg3NyNpc3N1ZWNvbW1lbnQtMzQwMjc5MjkzXG5kZWNsYXJlIHZhciBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgJiB7IEtVTVVMT1NfSU5JVD86IENvbmZpZ3VyYXRpb24gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RFdmVudFRvQ2xpZW50KGV2ZW50OiBXb3JrZXJNZXNzYWdlLCBjbGllbnQ6IENsaWVudCk6IHZvaWQge1xuICAgIGNsaWVudC5wb3N0TWVzc2FnZShldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm9hZGNhc3RGcm9tV29ya2VyKGV2ZW50OiBXb3JrZXJNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcG9zdEV2ZW50ID0gKGNsaWVudDogQ2xpZW50KSA9PiBwb3N0RXZlbnRUb0NsaWVudChldmVudCwgY2xpZW50KTtcblxuICAgIHJldHVybiBzZWxmLmNsaWVudHMubWF0Y2hBbGwoKS50aGVuKGNsaWVudHMgPT4ge1xuICAgICAgICBjbGllbnRzLmZvckVhY2gocG9zdEV2ZW50KTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy93b3JrZXIvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=