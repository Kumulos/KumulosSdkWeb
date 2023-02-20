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
        var deliveryTracked = (0, core_1.trackEvent)(ctx, core_1.EventType.MESSAGE_DELIVERED, {
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
        var openTracked = (0, core_1.trackEvent)(ctx, core_1.EventType.MESSAGE_OPENED, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW1vdmUtd29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFNVztBQUNYLG9GQUFxQztBQUVyQyx3RUFBMEM7QUFFMUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxHQUFXLElBQUssUUFBQztJQUNuQyxnQkFBZ0IsRUFBRSxVQUFHLEdBQUcsV0FBUTtJQUNoQyx3QkFBd0IsRUFBRSxVQUFHLEdBQUcsa0JBQWU7Q0FDbEQsQ0FBQyxFQUhvQyxDQUdwQyxDQUFDO0FBRUgsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFNUMsSUFBSyxlQUdKO0FBSEQsV0FBSyxlQUFlO0lBQ2hCLHdDQUFxQjtJQUNyQiw4QkFBVztBQUNmLENBQUMsRUFISSxlQUFlLEtBQWYsZUFBZSxRQUduQjtBQUVELFNBQWUsVUFBVSxDQUNyQixHQUFXLEVBQ1gsUUFBZ0IsRUFDaEIsR0FBWTs7Ozs7OztvQkFFTixTQUFTLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QixxQkFBTSxpQkFBRyxFQUFjLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7b0JBQTNELE1BQU0sR0FBRyxTQUFrRDtvQkFHMUQscUJBQU0saUJBQUcsRUFBUyxTQUFTLENBQUMsd0JBQXdCLENBQUM7O29CQURwRCxZQUFZLEdBQ2QsT0FBQyxTQUFxRCxDQUFDLG1DQUFJLENBQUM7b0JBQzVELG1CQUFtQixHQUFHLEtBQUssQ0FBQzt5QkFFNUIsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsR0FBNUMsd0JBQTRDO29CQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Ozs7b0JBRzdDLHFCQUFNLDJCQUFlLEVBQWMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7b0JBQXJELE1BQU0sR0FBRyxTQUE0QyxDQUFDO29CQUN0RCxtQkFBbUIsR0FBRyxJQUFJLENBQUM7Ozs7b0JBRTNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUM7Ozt5QkFLcEIsbUJBQW1CLEVBQW5CLHdCQUFtQjtvQkFDbkIscUJBQU0saUJBQUcsRUFBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDOztvQkFBN0MsU0FBNkMsQ0FBQztvQkFDOUMscUJBQU0saUJBQUcsRUFBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztvQkFBekQsU0FBeUQsQ0FBQzs7d0JBRzlELHNCQUFPLE1BQU0sRUFBQzs7OztDQUNqQjtBQUVELFNBQXNCLGtCQUFrQixDQUNwQyxHQUFZOzs7Ozt3QkFHUCxxQkFBTSxVQUFVLENBQ2IsVUFBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQU8sQ0FBQyxJQUFJLENBQUMsbUJBQWdCLEVBQ2xELGVBQWUsQ0FBQyxRQUFRLEVBQ3hCLEdBQUcsQ0FDTjt3QkFMTCxzQkFBTyxDQUNILE9BQUMsU0FJQSxDQUFDLG1DQUFJLEVBQUUsQ0FDWCxFQUFDOzs7O0NBQ0w7QUFWRCxnREFVQztBQUVELFNBQXNCLGFBQWEsQ0FDL0IsR0FBWTs7Ozs7d0JBRVMscUJBQU0sbUJBQVksR0FBRTs7b0JBQW5DLFlBQVksR0FBRyxTQUFvQjs7OztvQkFHOUIscUJBQU0sVUFBVSxDQUNuQixVQUFHLEdBQUcsQ0FBQyxhQUFhLENBQ2hCLFVBQU8sQ0FBQyxHQUFHLENBQ2Qsc0NBQTRCLFlBQVksQ0FBRSxFQUMzQyxlQUFlLENBQUMsR0FBRyxFQUNuQixHQUFHLENBQ047d0JBTkQsc0JBQU8sU0FNTixFQUFDOzs7b0JBRUYsT0FBTyxDQUFDLElBQUksQ0FDUiwrREFBK0QsRUFDL0QsS0FBRyxDQUNOLENBQUM7Ozs7OztDQUdUO0FBcEJELHNDQW9CQztBQUVELFNBQXNCLDhCQUE4QixDQUNoRCxVQUFrQjs7Ozs7O29CQUVaLFNBQVMsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV0QyxxQkFBTSxpQkFBRyxFQUFvQixTQUFTLENBQUMsZ0JBQWdCLENBQUM7O29CQUFsRSxPQUFPLEdBQUcsU0FBd0Q7b0JBRXRFLElBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ1Ysc0JBQU87cUJBQ1Y7b0JBRUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFyQixDQUFxQixDQUFDLENBQUM7b0JBRXJELHFCQUFNLGlCQUFHLEVBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQzs7b0JBQTlDLFNBQThDLENBQUM7Ozs7O0NBQ2xEO0FBZEQsd0VBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0Qsd0VBQXNEO0FBQ3RELG9GQUEwQztBQUkxQyxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDckIsdUZBQXVGO0FBQ3ZGLElBQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDO0FBdUJyQyxvQkFBb0I7QUFDcEIsSUFBWSxTQU9YO0FBUEQsV0FBWSxTQUFTO0lBQ2pCLHNEQUF5QztJQUN6QyxnREFBbUM7SUFDbkMsd0RBQTJDO0lBQzNDLHVEQUEwQztJQUMxQyx1REFBMEM7SUFDMUMsd0VBQTJEO0FBQy9ELENBQUMsRUFQVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQU9wQjtBQUVELElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN0QiwrQkFBYTtJQUNiLGlDQUFlO0lBQ2YsbUNBQWlCO0lBQ2pCLDJDQUF5QjtBQUM3QixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUF5RUQsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLG1DQUFtQjtJQUNuQixpQ0FBaUI7SUFDakIsNENBQTRCO0lBQzVCLGtEQUFrQztBQUN0QyxDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFnQkQsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLG1DQUFlO0lBQ2YsaUNBQWE7QUFDakIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBbUJELElBQVksY0FZWDtBQVpELFdBQVksY0FBYztJQUN0Qix1Q0FBcUI7SUFDckIsMkNBQXlCO0lBQ3pCLHlDQUF1QjtJQUN2Qiw2Q0FBMkI7SUFDM0IsbUNBQWlCO0lBQ2pCLCtDQUE2QjtJQUM3Qiw2Q0FBMkI7SUFDM0IsaURBQStCO0lBQy9CLCtDQUE2QjtJQUM3Qiw2QkFBVztJQUNYLG1DQUFpQjtBQUNyQixDQUFDLEVBWlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFZekI7QUE0SkQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ2xCLDJCQUFhO0lBQ2IseUJBQVc7QUFDZixDQUFDLEVBSFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFHckI7QUFFRCxJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDZix3QkFBYTtJQUNiLHNCQUFXO0lBQ1gsNEJBQWlCO0FBQ3JCLENBQUMsRUFKVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFJbEI7QUF1QkQ7SUFhSSxpQkFBWSxNQUFxQjs7O1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQVMsSUFBSSxDQUFDLFVBQUcsSUFBSSxDQUFDLE1BQU0sY0FBSSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFNLENBQUMsaUJBQWlCLG1DQUFJLFlBQVksQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQU0sQ0FBQyxXQUFXLG1DQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQU0sQ0FBQyxlQUFlLG1DQUFJLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQU0sQ0FBQyxRQUFRLG1DQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNO1lBQ1AsR0FBQyxPQUFPLENBQUMsSUFBSSxJQUFHLHVCQUFnQixNQUFNLENBQUMsTUFBTSxpQkFBYztZQUMzRCxHQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUcseUJBQWtCLE1BQU0sQ0FBQyxNQUFNLGlCQUFjO1lBQy9ELEdBQUMsT0FBTyxDQUFDLEdBQUcsSUFBRyx3QkFBaUIsTUFBTSxDQUFDLE1BQU0saUJBQWM7ZUFDOUQsQ0FBQztJQUNOLENBQUM7SUFFRCwyQkFBUyxHQUFULFVBQVUsS0FBbUIsRUFBRSxPQUF3QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0MsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFTLEdBQVQsVUFBVSxLQUFtQixFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUk7YUFDUCxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsT0FBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLE9BQWdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFoRVksMEJBQU87QUFrRXBCLFNBQWdCLGlCQUFpQixDQUFDLE1BQVc7SUFDekMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIsTUFBTSwwQkFBMEIsQ0FBQztLQUNwQztJQUVELElBQU0sUUFBUSxHQUNWLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUNwRCxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDakIsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVwQixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pELE9BQU8scUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEM7QUFDTCxDQUFDO0FBYkQsOENBYUM7QUFFRCxTQUFTLHFCQUFxQixDQUFDLE1BQVc7SUFDdEMsSUFBTSxtQkFBbUIsR0FBRztRQUN4QixRQUFRO1FBQ1IsUUFBUTtRQUNSLFdBQVc7UUFDWCxnQkFBZ0I7S0FDbkIsQ0FBQztJQUNGLEtBQW1CLFVBQW1CLEVBQW5CLDJDQUFtQixFQUFuQixpQ0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtRQUFuQyxJQUFNLElBQUk7UUFDWCxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvRCxNQUFNLHNDQUErQixJQUFJLCtCQUE0QixDQUFDO1NBQ3pFO0tBQ0o7SUFFRCxJQUNJLE1BQU0sQ0FBQyxpQkFBaUI7UUFDeEIsT0FBTyxNQUFNLENBQUMsaUJBQWlCLEtBQUssUUFBUTtRQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdkM7UUFDRSxNQUFNLHVGQUF1RixDQUFDO0tBQ2pHO0lBRUQsSUFBSSxNQUFNLENBQUMsY0FBYyxJQUFJLE9BQU8sTUFBTSxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUU7UUFDdEUsTUFBTSxnRUFBZ0UsQ0FBQztLQUMxRTtJQUVELElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEtBQUssVUFBVSxFQUFFO1FBQ2xFLE1BQU0sOERBQThELENBQUM7S0FDeEU7QUFDTCxDQUFDO0FBRUQsSUFBSSxnQkFBZ0IsR0FBbUMsU0FBUyxDQUFDO0FBRWpFLFNBQWdCLFlBQVk7SUFDeEIsSUFBSSxnQkFBZ0IsRUFBRTtRQUNsQixPQUFPLGdCQUFnQixDQUFDO0tBQzNCO0lBRUQsZ0JBQWdCLEdBQUcsaUJBQUcsRUFBd0IsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRCxtQkFBUztRQUNMLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLFlBQVksQ0FBQyxrQkFBTSxHQUFFLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUMsQ0FDSixDQUFDO0lBRUYsT0FBTyxnQkFBZ0IsQ0FBQztBQUM1QixDQUFDO0FBaEJELG9DQWdCQztBQUVELFNBQWdCLFlBQVksQ0FBQyxTQUFvQjtJQUM3QyxnQkFBZ0IsR0FBRyxpQkFBRyxFQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUUvQyxPQUFPLGdCQUFnQixDQUFDO0FBQzVCLENBQUM7QUFKRCxvQ0FJQztBQUVELFNBQWdCLFNBQVM7SUFDckIsT0FBTyxpQkFBRyxFQUFxQixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3pDLGdCQUFNLElBQUksYUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksWUFBWSxFQUFFLEVBQXhCLENBQXdCLENBQ3JDLENBQUM7QUFDTixDQUFDO0FBSkQsOEJBSUM7QUFFRCxTQUFzQixhQUFhLENBQy9CLEdBQVksRUFDWixFQUFVLEVBQ1YsVUFBd0I7Ozs7O3dCQUV4QixxQkFBTSxpQkFBRyxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7O29CQUF2QixTQUF1QixDQUFDO29CQUVsQixLQUFLLEdBQUc7d0JBQ1YsRUFBRTt3QkFDRixVQUFVO3FCQUNiLENBQUM7b0JBRUYsc0JBQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUssQ0FBQyxDQUFDLEVBQUM7Ozs7Q0FDMUU7QUFiRCxzQ0FhQztBQUVELFNBQXNCLG9CQUFvQixDQUFDLEdBQVk7Ozs7O3dCQUM3QixxQkFBTSxTQUFTLEVBQUU7O29CQUFqQyxhQUFhLEdBQUcsU0FBaUI7b0JBRXZDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixFQUFFO3dCQUNoRCxpQkFBaUIsRUFBRSxhQUFhO3FCQUNuQyxDQUFDLENBQUM7b0JBRUgsc0JBQU8saUJBQUcsRUFBQyxRQUFRLENBQUMsRUFBQzs7OztDQUN4QjtBQVJELG9EQVFDO0FBWUQsU0FBc0IsVUFBVSxDQUM1QixHQUFZLEVBQ1osSUFBWSxFQUNaLFVBQXdCOzs7Ozt3QkFFTixxQkFBTSxZQUFZLEVBQUU7O29CQUFoQyxTQUFTLEdBQUcsU0FBb0I7b0JBQ3ZCLHFCQUFNLFNBQVMsRUFBRTs7b0JBQTFCLE1BQU0sR0FBRyxTQUFpQjtvQkFFMUIsTUFBTSxHQUFpQjt3QkFDekI7NEJBQ0ksSUFBSTs0QkFDSixJQUFJLEVBQUUsa0JBQU0sR0FBRTs0QkFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDckIsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLE1BQU07eUJBQ1Q7cUJBQ0osQ0FBQztvQkFFRixHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFFdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDdEIsc0JBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFDO3FCQUM1QjtvQkFFSyxHQUFHLEdBQUcsVUFBRyxHQUFHLENBQUMsYUFBYSxDQUM1QixPQUFPLENBQUMsTUFBTSxDQUNqQiw4QkFBb0IsU0FBUyxZQUFTLENBQUM7b0JBQ3hDLHNCQUFPLHVCQUFXLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTs0QkFDekIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO3lCQUMvQixDQUFDLEVBQUM7Ozs7Q0FDTjtBQS9CRCxnQ0ErQkM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZO0lBQy9CLE9BQWEsTUFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELFNBQXNCLG1CQUFtQixDQUNyQyxHQUFZLEVBQ1osa0JBQTJCOzs7Ozs7b0JBRXJCLFVBQVUsR0FBRyxrQkFBa0IsSUFBSSxtQkFBbUIsQ0FBQztvQkFDdkQsT0FBTyxHQUFHO3dCQUNaLEdBQUcsRUFBRTs0QkFDRCxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUk7NEJBQ3JCLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixNQUFNLEVBQUUsQ0FBQyxDQUFDLDBCQUEwQjt5QkFDdkM7d0JBQ0QsR0FBRyxFQUFFOzRCQUNELEVBQUUsRUFBRSxRQUFROzRCQUNaLE9BQU8sRUFBRSxVQUFVO3lCQUN0Qjt3QkFDRCxPQUFPLEVBQUU7NEJBQ0wsRUFBRSxFQUFFLENBQUM7NEJBQ0wsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTO3lCQUMvQjt3QkFDRCxFQUFFLEVBQUU7NEJBQ0EsdURBQXVEOzRCQUN2RCxFQUFFLEVBQUUsQ0FBQzs0QkFDTCxPQUFPLEVBQUUsT0FBTzt5QkFDbkI7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKLG1EQUFtRDs0QkFDbkQsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTOzRCQUN6QixFQUFFLEVBQ0UsT0FBTyxJQUFJLEtBQUssV0FBVztnQ0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSTtnQ0FDMUQsQ0FBQyxDQUFDLElBQUk7NEJBQ2QsV0FBVyxFQUFFLEtBQUs7NEJBQ2xCLE1BQU0sRUFBRSxTQUFTLENBQUMsUUFBUTt5QkFDN0I7cUJBQ0osQ0FBQztvQkFFSSxTQUFTLEdBQUc7d0JBQ2QsVUFBVTt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07d0JBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNO3dCQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUk7cUJBQ3RCLENBQUM7b0JBQ0ksSUFBSSxHQUFHLGtCQUFNLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O29CQUdoQixxQkFBTSxpQkFBRyxFQUFTLGFBQWEsQ0FBQzs7b0JBQS9DLFlBQVksR0FBRyxTQUFnQztvQkFFckQsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO3dCQUN2QixzQkFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUM7cUJBQzVCOzs7O29CQUVELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLEVBQUM7d0JBRzdCLHNCQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7eUJBQ3JELElBQUksQ0FBQyxjQUFNLHdCQUFHLEVBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxJQUFJLENBQUMsY0FBTSxZQUFLLENBQUMsRUFBTixDQUFNLENBQUMsRUFBQzs7OztDQUMzQjtBQTFERCxrREEwREM7QUFPRCxTQUFnQix3QkFBd0IsQ0FDcEMsV0FBc0IsRUFDdEIsZUFBNEM7SUFFNUMsT0FBTyxXQUFXO1NBQ2IsTUFBTSxDQUNILFdBQUM7UUFDRyxzQkFBZSxDQUFDLGNBQWMsS0FBSyxLQUFLO1lBQ3hDLGVBQWUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFEL0MsQ0FDK0MsQ0FDdEQ7U0FDQSxHQUFHLENBQWtCLFdBQUMsSUFBSSxRQUFDO1FBQ3hCLE9BQU8sZUFBTyxDQUFDLENBQUU7UUFDakIsT0FBTyxFQUNILENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3RCLGVBQWUsQ0FBQyxZQUFZLEtBQUssS0FBSztZQUN0QyxlQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3BELENBQUMsRUFOeUIsQ0FNekIsQ0FBQyxDQUFDO0FBQ1osQ0FBQztBQWpCRCw0REFpQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNscEJELCtEQUFvRDtBQUNwRCx5RUFBNEQ7QUFFNUQsaUdBQXlDO0FBQ3pDLHdGQUFtQztBQUNuQyw0RUFBK0M7QUFJL0MsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLHVDQUFPO0lBQ1AsNkNBQVU7QUFDZCxDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRCxJQUFZLFdBRVg7QUFGRCxXQUFZLFdBQVc7SUFDbkIsNkNBQVE7QUFDWixDQUFDLEVBRlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFFdEI7QUE0Q0QsSUFBSSxPQUFnQyxDQUFDO0FBRXJDLFNBQXdCLGlCQUFpQixDQUNyQyxHQUFZO0lBRVosSUFBSSxPQUFPLEVBQUU7UUFDVCxPQUFPLE9BQU8sQ0FBQztLQUNsQjtJQUVELElBQU0sT0FBTyxHQUFHLDBCQUFjLEdBQUUsQ0FBQztJQUVqQyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDdEIsT0FBTyxHQUFHLCtCQUFrQixFQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbEMsYUFBRyxJQUFJLFdBQUksbUJBQWlCLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQ3BDLENBQUM7S0FDTDtTQUFNO1FBQ0gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBYyxFQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFsQkQsdUNBa0JDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsR0FBWTtJQUMzQyxJQUFNLE9BQU8sR0FBRywwQkFBYyxHQUFFLENBQUM7SUFFakMsSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQ3RCLE9BQU87S0FDVjtJQUVELElBQU0sTUFBTSxHQUFHLDRCQUFnQixHQUFFLENBQUM7SUFFbEMsSUFBSSxDQUFDLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRyxNQUFNLENBQUMsR0FBRTtRQUNuQixPQUFPO0tBQ1Y7SUFFRCxrQkFBVSxFQUFDLEdBQUcsRUFBRSxhQUFTLENBQUMsY0FBYyxFQUFFO1FBQ3RDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtRQUN0QixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBakJELGdEQWlCQztBQUVELFNBQWdCLHVCQUF1QixDQUNuQyxPQUFvQjs7SUFFcEIsSUFBTSxLQUFrQyxPQUFPLENBQUMsSUFBSSxFQUEvQixDQUFDLG9CQUFLLFFBQVEsY0FBN0IsYUFBK0IsQ0FBZSxDQUFDO0lBRXJELElBQU0sSUFBSSxHQUE0QjtRQUNsQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7UUFDcEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1FBQ3BCLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLGFBQU8sQ0FBQyxHQUFHLG1DQUFJLFNBQVM7UUFDN0IsT0FBTyxFQUFFLGFBQU8sQ0FBQyxJQUFJLG1DQUFJLFNBQVM7UUFDbEMsUUFBUSxFQUFFLGFBQU8sQ0FBQyxLQUFLLG1DQUFJLFNBQVM7S0FDdkMsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFmRCwwREFlQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRCwrREFBNkU7QUFDN0Usa0VBQThDO0FBQzlDLHlFQUF5QztBQUN6QyxxRkFBc0M7QUFHdEMsNEVBQStDO0FBRS9DLFNBQVMsU0FBUyxDQUFDLEdBQVksRUFBRSxLQUFhO0lBQzFDLE9BQU8sa0JBQU0sRUFBQyxVQUFHLEdBQUcsQ0FBQyxNQUFNLGNBQUksS0FBSyxDQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQ7SUFFSSwyQkFBWSxHQUFtQjtRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0QseURBQTZCLEdBQTdCLFVBQ0ksR0FBWTs7UUFFWixJQUFNLE1BQU0sR0FBRyxVQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBTyxDQUFDLElBQUksQ0FBQyxxQkFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FDWixDQUFDO1FBRUgsSUFBTSxRQUFRLEdBQUcsaUJBQUssR0FBMEIsQ0FBQztRQUVqRCxZQUFNLENBQUMsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FDN0MsTUFBTSxFQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBc0IsRUFDL0IsRUFBRSxFQUNGLGNBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FDSixDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFSyx3Q0FBWSxHQUFsQixVQUFtQixHQUFZOzs7Ozs7NEJBQ2YscUJBQU0sK0JBQWtCLEVBQUMsR0FBRyxDQUFDOzt3QkFBbkMsR0FBRyxHQUFHLFNBQTZCO3dCQUNuQyxJQUFJLEdBQUcsWUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUNuRCxHQUFHLENBQUMsWUFBc0IsQ0FDN0IsQ0FBQzt3QkFFRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDNUIsc0JBQU87eUJBQ1Y7d0JBRXlCLHFCQUFNLGlCQUFHLEVBQVMsZUFBZSxDQUFDOzt3QkFBdEQsaUJBQWlCLEdBQUcsU0FBa0M7d0JBQ3RELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFFbkQsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7NEJBQ2pDLHNCQUFPO3lCQUNWO3dCQUVELHFCQUFNLGtCQUFVLEVBQUMsR0FBRyxFQUFFLGFBQVMsQ0FBQyxlQUFlLEVBQUU7Z0NBQzdDLElBQUksRUFBRSxZQUFTLENBQUMsTUFBTTtnQ0FDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO2dDQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLFlBQVk7NkJBQzdCLENBQUM7O3dCQUpGLFNBSUUsQ0FBQzt3QkFFSCxxQkFBTSxpQkFBRyxFQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7O3dCQUFyQyxTQUFxQyxDQUFDOzs7OztLQUN6QztJQUVLLCtEQUFtQyxHQUF6QyxVQUNJLEdBQVk7Ozs7OzRCQUVDLHFCQUFNLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUM7O3dCQUFwRCxJQUFJLEdBQUcsU0FBNkM7d0JBRTFELFFBQVEsSUFBSSxFQUFFOzRCQUNWLEtBQUssU0FBUztnQ0FDVixzQkFBTyxjQUFjLEVBQUM7NEJBQzFCLEtBQUssUUFBUTtnQ0FDVCxzQkFBTyxTQUFTLEVBQUM7eUJBQ3hCOzs7O3dCQUdHLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDOzt3QkFBNUIsU0FBNEIsQ0FBQzt3QkFDN0Isc0JBQU8sWUFBWSxFQUFDOzs7d0JBRXBCLHNCQUFPLGNBQWMsRUFBQzs7Ozs7S0FFN0I7SUFFSyx1REFBMkIsR0FBakMsVUFDSSxHQUFZOzs7Ozs7NEJBRUEscUJBQU0sK0JBQWtCLEVBQUMsR0FBRyxDQUFDOzt3QkFBbkMsR0FBRyxHQUFHLFNBQTZCO3dCQUNuQyxJQUFJLEdBQUcsWUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLENBQUMsVUFBVSxDQUNuRCxHQUFHLENBQUMsWUFBc0IsQ0FDN0IsQ0FBQzt3QkFFRixJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLE1BQUssUUFBUSxFQUFFOzRCQUN4QyxzQkFBTyxTQUFTLEVBQUM7eUJBQ3BCO3dCQUV5QixxQkFBTSxpQkFBRyxFQUFTLGVBQWUsQ0FBQzs7d0JBQXRELGlCQUFpQixHQUFHLFNBQWtDO3dCQUN0RCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFJLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUMsQ0FBQzt3QkFFekQsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7NEJBQ2xFLHNCQUFPLFlBQVksRUFBQzt5QkFDdkI7d0JBRUQsc0JBQU8sY0FBYyxFQUFDOzs7O0tBQ3pCO0lBRUssb0RBQXdCLEdBQTlCLFVBQStCLEdBQVk7Ozs7Ozs7d0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7NEJBQ2hELHNCQUFPO3lCQUNWO3dCQUVXLHFCQUFNLCtCQUFrQixFQUFDLEdBQUcsQ0FBQzs7d0JBQW5DLEdBQUcsR0FBRyxTQUE2Qjt3QkFDbkMsSUFBSSxHQUFHLFlBQU0sQ0FBQyxNQUFNLDBDQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FDbkQsR0FBRyxDQUFDLFlBQXNCLENBQzdCLENBQUM7d0JBRUYsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQzdELE9BQU8sQ0FBQyxJQUFJLENBQ1IsbUVBQW1FLENBQ3RFLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRXlCLHFCQUFNLGlCQUFHLEVBQVMsZUFBZSxDQUFDOzt3QkFBdEQsaUJBQWlCLEdBQUcsU0FBa0M7d0JBQ3RELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFFbkQsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7NEJBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQ1IseUVBQXlFLENBQzVFLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRUQsc0JBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQzs7OztLQUNqQztJQUVLLCtDQUFtQixHQUF6Qjs7O2dCQUNJLHNCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUM7OztLQUNoQztJQUNMLHdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SUQsK0RBQW9EO0FBQ3BELGtFQUFxRTtBQUNyRSx5RUFBbUU7QUFDbkUscUZBQXNDO0FBRXRDLElBQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDO0FBRXZDLFNBQVMsVUFBVSxDQUFDLFFBQWdCLEVBQUUsWUFBOEI7SUFDaEUsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztJQUVqRSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0lBRUQsSUFBTSxNQUFNLEdBQUcsMkJBQWUsRUFBQyxjQUFjLENBQUMsQ0FBQztJQUUvQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQWUseUJBQXlCLENBQUMsVUFBa0I7Ozs7OztvQkFDakQsY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUUvQyxxQkFBTSxTQUFTLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7O29CQUF6RSxTQUFTLEdBQUcsU0FBNkQ7b0JBRS9FLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ1osc0JBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFDO3FCQUMzRDtvQkFFRCxzQkFBTyxTQUFTLEVBQUM7Ozs7Q0FDcEI7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQVksRUFBRSxHQUFxQjtJQUN6RCxPQUFPLGtCQUFNLEVBQUMsVUFBRyxHQUFHLENBQUMsTUFBTSxjQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRDtJQUFBO0lBdUxBLENBQUM7SUF0TFMsc0RBQTZCLEdBQW5DLFVBQ0ksR0FBWTs7Ozs7O3dCQUVaLElBQUksT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFOzRCQUNyQyxzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUNqQiw4REFBOEQsQ0FDakUsRUFBQzt5QkFDTDs7Ozt3QkFHa0IscUJBQU0sWUFBWSxDQUFDLGlCQUFpQixFQUFFOzt3QkFBL0MsTUFBTSxHQUFHLFNBQXNDO3dCQUVyRCxzQkFBTyxNQUFNLEVBQUM7Ozt3QkFFZCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDO3dCQUNqQixzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxFQUFDOzs7OztLQUVoQztJQUVLLHFDQUFZLEdBQWxCLFVBQW1CLEdBQVk7Ozs7Ozt3QkFDM0IsSUFBSSxDQUFDLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxFQUFFOzRCQUM1QixzQkFBTyxPQUFPLENBQUMsTUFBTSxDQUNqQixzREFBc0QsQ0FDekQsRUFBQzt5QkFDTDt3QkFFaUIscUJBQU0seUJBQXlCLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDOzt3QkFBbEUsU0FBUyxHQUFHLFNBQXNEO3dCQUNwRCxxQkFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTs7d0JBQTNELFdBQVcsR0FBRyxTQUE2Qzs2QkFFN0QsWUFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLEdBQTNELHdCQUEyRDt3QkFDM0QscUJBQU0sWUFBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFdBQVcsRUFBRTs7d0JBQWhDLFNBQWdDLENBQUM7OzRCQUd6QixxQkFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQzs0QkFDOUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLGNBQWM7NEJBQ3hDLGVBQWUsRUFBRSxJQUFJO3lCQUN4QixDQUFDOzt3QkFISSxHQUFHLEdBQUcsU0FHVjt3QkFFSSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQzt3QkFFTCxxQkFBTSxpQkFBRyxFQUFTLGtCQUFrQixDQUFDOzt3QkFBNUQsb0JBQW9CLEdBQUcsU0FBcUM7d0JBQzNDLHFCQUFNLGlCQUFHLEVBQzVCLGVBQWUsQ0FDbEI7O3dCQUZLLGNBQWMsR0FBRyxTQUV0Qjt3QkFFRCxJQUNJLG9CQUFvQixLQUFLLFlBQVk7NEJBQ3JDLENBQUMsQ0FBQyxjQUFjLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNsRDs0QkFDRSxzQkFBTzt5QkFDVjt3QkFFRCxxQkFBTSxrQkFBVSxFQUFDLEdBQUcsRUFBRSxhQUFTLENBQUMsZUFBZSxFQUFFO2dDQUM3QyxJQUFJLEVBQUUsWUFBUyxDQUFDLEdBQUc7Z0NBQ25CLEtBQUssRUFBRSxHQUFHOzZCQUNiLENBQUM7O3dCQUhGLFNBR0UsQ0FBQzt3QkFFSCxxQkFBTSxpQkFBRyxFQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQzs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLHFCQUFNLGlCQUFHLEVBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQzs7d0JBQWxDLFNBQWtDLENBQUM7Ozs7O0tBQ3RDO0lBRUssNERBQW1DLEdBQXpDLFVBQ0ksR0FBWTs7Ozs7NEJBRUMscUJBQU0sSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQzs7d0JBQXBELElBQUksR0FBRyxTQUE2Qzt3QkFFMUQsUUFBUSxJQUFJLEVBQUU7NEJBQ1YsS0FBSyxTQUFTO2dDQUNWLHNCQUFPLGNBQWMsRUFBQzs0QkFDMUIsS0FBSyxRQUFRO2dDQUNULHNCQUFPLFNBQVMsRUFBQzt5QkFDeEI7Ozs7d0JBR0cscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7O3dCQUE1QixTQUE0QixDQUFDO3dCQUM3QixzQkFBTyxZQUFZLEVBQUM7Ozt3QkFFcEIsc0JBQU8sY0FBYyxFQUFDOzs7OztLQUU3QjtJQUVLLG9EQUEyQixHQUFqQyxVQUNJLEdBQVk7Ozs7Ozt3QkFFTixJQUFJLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQzt3QkFFckMsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFOzRCQUNuQixzQkFBTyxTQUFTLEVBQUM7eUJBQ3BCO3dCQUVXLHFCQUFNLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQzs7d0JBQTVELEdBQUcsR0FBRyxTQUFzRDt3QkFDdEQscUJBQU0sSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFdBQVcsQ0FBQyxlQUFlLEVBQUU7O3dCQUE5QyxHQUFHLEdBQUcsU0FBd0M7d0JBRXBELElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUU7NEJBQ2xFLHNCQUFPLFlBQVksRUFBQzt5QkFDdkI7d0JBRUQsc0JBQU8sY0FBYyxFQUFDOzs7O0tBQ3pCO0lBRUssaURBQXdCLEdBQTlCLFVBQStCLEdBQVk7Ozs7Ozt3QkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUU7NEJBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQzs0QkFDeEQsc0JBQU87eUJBQ1Y7d0JBRUssSUFBSSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7d0JBRXJDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLElBQUksQ0FDUiw4REFBdUQsSUFBSSxDQUFFLENBQ2hFLENBQUM7NEJBQ0Ysc0JBQU87eUJBQ1Y7d0JBRTRCLHFCQUFNLGlCQUFHLEVBQVMsa0JBQWtCLENBQUM7O3dCQUE1RCxvQkFBb0IsR0FBRyxTQUFxQzt3QkFDM0MscUJBQU0saUJBQUcsRUFDNUIsZUFBZSxDQUNsQjs7d0JBRkssY0FBYyxHQUFHLFNBRXRCO3dCQUVpQixxQkFBTSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7O3dCQUFsRSxTQUFTLEdBQUcsU0FBc0Q7d0JBQ3BELHFCQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFOzt3QkFBM0QsV0FBVyxHQUFHLFNBQTZDO3dCQUU3RCxlQUFlLEdBQUcsU0FBUyxDQUFDO3dCQUNoQyxJQUFJLFdBQVcsRUFBRTs0QkFDYixlQUFlLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3lCQUN4RDt3QkFFRCxJQUNJLG9CQUFvQixLQUFLLFNBQVM7NEJBQ2xDLG9CQUFvQixLQUFLLGVBQWU7NEJBQ3hDLFdBQVc7NEJBQ1gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDOzRCQUMzQyxDQUFDLGNBQWMsS0FBSyxJQUFJO2dDQUNwQixjQUFjLEtBQUssU0FBUztnQ0FDNUIsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUNsQzs0QkFDRSxPQUFPLENBQUMsSUFBSSxDQUNSLG1GQUFtRixDQUN0RixDQUFDOzRCQUNGLHNCQUFPO3lCQUNWO3dCQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQzt3QkFFNUQsSUFBSTs0QkFDQSxzQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFDO3lCQUNqQzt3QkFBQyxPQUFPLENBQUMsRUFBRTs0QkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjs7Ozs7S0FDSjtJQUVELDRDQUFtQixHQUFuQjtRQUNJLElBQU0sV0FBVyxHQUFHLDBCQUFjLEdBQUUsQ0FBQztRQUVyQyxJQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxpQkFBTztZQUN0QixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFFM0IsSUFBTSxZQUFZLEdBQUc7Z0JBQ2pCLElBQUksY0FBYyxFQUFFO29CQUNoQixPQUFPO2lCQUNWO2dCQUVELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUV0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUU5QyxJQUFNLGlCQUFpQixHQUFHLFVBQVUsQ0FBQztnQkFDakMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFORCxpQ0FBaUM7OztBQUVqQyxrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLDBDQUEwQztBQUUxQyxpREFBaUQ7QUFFakQsc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSwyRUFBMkU7QUFDM0Usc0VBQXNFO0FBQ3RFLGlDQUFpQztBQUNqQztJQUdJLGVBQVksTUFBdUIsRUFBVyxTQUFvQjtRQUF0RCxnREFBdUI7UUFBVyxnREFBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFNLGFBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUM7WUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFNLGNBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQXZCLENBQXVCLENBQUM7WUFFbEQsaURBQWlEO1lBQ2pELE9BQU8sQ0FBQyxlQUFlLEdBQUc7Z0JBQ3RCLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUNJLElBQXdCLEVBQ3hCLFFBQXlDO1FBRjdDLGlCQWNDO1FBVkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsWUFBRTtZQUNFLFdBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzlCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekQsV0FBVyxDQUFDLFVBQVUsR0FBRyxjQUFNLGNBQU8sRUFBRSxFQUFULENBQVMsQ0FBQztnQkFDekMsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxHQUFHO29CQUN4QyxhQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFBekIsQ0FBeUIsQ0FBQztnQkFDOUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDO1FBTkYsQ0FNRSxDQUNULENBQUM7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUEvQlksc0JBQUs7QUFpQ2xCLElBQUksS0FBWSxDQUFDO0FBRWpCLFNBQVMsZUFBZTtJQUNwQixJQUFJLENBQUMsS0FBSztRQUFFLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFnQixHQUFHLENBQ2YsR0FBZ0IsRUFDaEIsS0FBeUI7SUFBekIsZ0NBQVEsZUFBZSxFQUFFO0lBRXpCLElBQUksR0FBZSxDQUFDO0lBQ3BCLE9BQU8sS0FBSztTQUNQLGFBQWEsQ0FBQyxVQUFVLEVBQUUsZUFBSztRQUM1QixHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsY0FBTSxVQUFHLENBQUMsTUFBTSxFQUFWLENBQVUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFWRCxrQkFVQztBQUVELFNBQWdCLEdBQUcsQ0FDZixHQUFnQixFQUNoQixLQUFVLEVBQ1YsS0FBeUI7SUFBekIsZ0NBQVEsZUFBZSxFQUFFO0lBRXpCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBSztRQUN6QyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFSRCxrQkFRQztBQUVELFNBQWdCLEdBQUcsQ0FDZixHQUFnQixFQUNoQixLQUF5QjtJQUF6QixnQ0FBUSxlQUFlLEVBQUU7SUFFekIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFLO1FBQ3pDLEtBQUssQ0FBQyxRQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsa0JBT0M7QUFFRCxTQUFnQixLQUFLLENBQUMsS0FBeUI7SUFBekIsZ0NBQVEsZUFBZSxFQUFFO0lBQzNDLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBSztRQUN6QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsc0JBSUM7QUFFRCxTQUFnQixJQUFJLENBQUMsS0FBeUI7SUFBekIsZ0NBQVEsZUFBZSxFQUFFO0lBQzFDLElBQU0sSUFBSSxHQUFrQixFQUFFLENBQUM7SUFFL0IsT0FBTyxLQUFLO1NBQ1AsYUFBYSxDQUFDLFVBQVUsRUFBRSxlQUFLO1FBQzVCLDhFQUE4RTtRQUM5RSwrQ0FBK0M7UUFDL0MsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQzFDLEtBQUssQ0FDUixDQUFDLFNBQVMsR0FBRztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVEsR0FBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxjQUFNLFdBQUksRUFBSixDQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBaEJELG9CQWdCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0QseUVBS2tCO0FBQ2xCLCtGQUtzQjtBQUl0QixJQUFNLEtBQUssR0FBRyxJQUFJLGtCQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRTlDLFNBQWdCLEdBQUcsQ0FBSSxHQUFnQjtJQUNuQyxPQUFPLG9CQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFGRCxrQkFFQztBQUVELFNBQWdCLEdBQUcsQ0FBZ0IsR0FBZ0IsRUFBRSxLQUFRO0lBQ3pELE9BQU8sb0JBQU0sRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLFlBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixHQUFHLENBQUMsR0FBZ0I7SUFDaEMsT0FBTyxvQkFBTSxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsTUFBcUI7SUFDL0MsT0FBTyxHQUFHLENBQWdCLFFBQVEsRUFBRTtRQUNoQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztRQUMzQixjQUFjLEVBQUUsTUFBTSxDQUFDLGNBQWM7UUFDckMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtRQUMzQyxlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7UUFDdkMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQ2xDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFWRCxzQ0FVQztBQUVELFNBQWdCLGdCQUFnQixDQUM1QixNQUF5QjtJQUV6QixPQUFPLEdBQUcsQ0FBb0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLHFCQUFxQixDQUNqQyxVQUFrQixFQUNsQixRQUF3QjtJQUV4QixPQUFPLEdBQUcsQ0FBQyxtQkFBWSxVQUFVLENBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBTEQsc0RBS0M7QUFFRCxTQUFzQixpQkFBaUIsQ0FDbkMsVUFBa0I7Ozs7d0JBRVgscUJBQU0sR0FBRyxDQUE2QixtQkFBWSxVQUFVLENBQUUsQ0FBQzt3QkFBdEUsc0JBQU8sU0FBK0QsRUFBQzs7OztDQUMxRTtBQUpELDhDQUlDO0FBRUQsU0FBZ0IsMEJBQTBCO0lBQ3RDLE9BQU8sR0FBRyxDQUFnQixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07UUFDM0MsYUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLGVBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztJQUF4QyxDQUF3QyxDQUMzQyxDQUFDO0FBQ04sQ0FBQztBQUpELGdFQUlDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQ3BDLE9BQW9CO0lBRXBCLE9BQU8sR0FBRyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFKRCw0REFJQztBQUVELFNBQXNCLGdDQUFnQzs7Ozs7d0JBR2xDLHFCQUFNLEdBQUcsQ0FBYyw2QkFBNkIsQ0FBQzs7b0JBQS9ELE9BQU8sR0FBRyxTQUFxRDtvQkFFckUscUJBQU0sR0FBRyxDQUFDLDZCQUE2QixDQUFDOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFFekMsc0JBQU8sT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksU0FBUyxFQUFDOzs7O0NBQy9CO0FBUkQsNEVBUUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkQsd0VBQThDO0FBSTlDLElBQU0seUJBQXlCLEdBQXlCLENBQUMsT0FBTyxPQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQztBQUV6RyxJQUFNLHdCQUF3QixHQUEwQztJQUNwRSxNQUFNLEVBQUUseUJBQXlCO0lBQ2pDLEtBQUssRUFBRSx3QkFBd0I7Q0FDbEMsQ0FBQztBQUVGLDJDQUEyQztBQUMzQyxTQUFnQixNQUFNO0lBQ2xCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQy9CLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUMzRCxDQUFDO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUM1QixDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FDMUQsUUFBUSxFQUNSLFdBQUM7UUFDRyxRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBSmQsQ0FJYyxDQUNyQixDQUFDO0FBQ04sQ0FBQztBQXBCRCx3QkFvQkM7QUFFRCxTQUFnQixjQUFjO0lBQzFCLElBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsSUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV6RCxLQUFjLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO1FBQW5CLElBQUksQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQztTQUNaO0tBQ0o7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFYRCx3Q0FXQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLFdBQTBCO0lBQ3pELFdBQVcsR0FBRyxXQUFXLGFBQVgsV0FBVyxjQUFYLFdBQVcsR0FBSSxFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSwrQkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUE3QixDQUE2QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBUEQsZ0RBT0M7QUFFRCxTQUFTLHlCQUF5Qjs7SUFDOUIsSUFBTSxnQkFBZ0IscUJBQU8seUJBQXlCLE9BQUMsQ0FBQztJQUN4RCxJQUFNLE9BQU8sR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUVqQyxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7UUFDdEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sYUFBTSxDQUFDLE1BQU0sMENBQUUsZ0JBQWdCLEVBQUMsQ0FBQztLQUNqRTtTQUFNO1FBQ0gsZ0JBQWdCLENBQUMsSUFBSSxPQUFyQixnQkFBZ0IsRUFDVDtZQUNDLE9BQU8sWUFBWTtZQUNuQixPQUFPLFNBQVMsQ0FBQyxhQUFhO1lBQzlCLE9BQU8sV0FBVztTQUNyQixFQUNIO0tBQ0w7SUFFRCxPQUFPLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxTQUFTLHdCQUF3QjtJQUM3QixPQUFPLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxnQkFBcUM7SUFDeEQsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQzFCLFVBQUMsU0FBa0IsRUFBRSxVQUE2QixJQUFLLGdCQUFTLElBQUksVUFBVSxLQUFLLFdBQVcsRUFBdkMsQ0FBdUMsRUFDOUYsSUFBSSxDQUNQLENBQUM7QUFDTixDQUFDO0FBRUQsaUdBQWlHO0FBQ2pHLElBQU0sSUFBSSxHQUNOLElBQUksQ0FBQyxJQUFJO0lBQ1QsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUNULENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvRUFBb0U7UUFDNUUsNEVBQTRFO1FBQzVFLDZDQUE2QztRQUM3Qyw2RUFBNkU7UUFDN0UscUVBQXFFO1FBQ3JFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyx5RUFBeUU7UUFDekUsc0RBQXNEO1FBQ3RELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUztZQUFFLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxPQUFPLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0FBRU4sdUNBQXVDO0FBQ3ZDLFNBQWdCLE1BQU0sQ0FBQyxHQUFXLEVBQUUsSUFBUTtJQUFSLCtCQUFRO0lBQ3hDLElBQUksRUFBRSxHQUFHLFVBQVUsR0FBRyxJQUFJLEVBQ3RCLEVBQUUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsV0FBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxFQUFFLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0IsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsRUFBRTtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RSxFQUFFO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLE9BQU8sVUFBVSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFiRCx3QkFhQztBQUVELG9GQUFvRjtBQUNwRixTQUFnQixZQUFZLENBQUMsR0FBVztJQUNwQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUN2QixHQUFZLEVBQ1osR0FBZ0IsRUFDaEIsT0FBd0M7O0lBQXhDLHNDQUF5QixNQUFNLEVBQUUsS0FBSyxFQUFFO0lBRXhDLElBQU0sZUFBZSxHQUFHLGFBQU8sQ0FBQyxPQUFPLG1DQUFJLEVBQUUsQ0FBQztJQUU5QyxPQUFPLENBQUMsT0FBTyxjQUNYLGNBQWMsRUFBRSxrQkFBa0IsRUFDbEMsTUFBTSxFQUFFLGtCQUFrQixFQUMxQixhQUFhLEVBQUUsR0FBRyxDQUFDLFVBQVUsSUFDMUIsZUFBZSxDQUNyQixDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFmRCxrQ0FlQztBQUVEO0lBQXNDLG9DQUFLO0lBQ3ZDLDBCQUFZLFVBQWtCLEVBQUUsVUFBa0I7ZUFDOUMsa0JBQU0sK0JBQXdCLFVBQVUsZUFBSyxVQUFVLENBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLENBSnFDLEtBQUssR0FJMUM7QUFKWSw0Q0FBZ0I7QUFNN0IsU0FBZ0IsZUFBZSxDQUMzQixHQUFZLEVBQ1osR0FBZ0IsRUFDaEIsT0FBcUI7SUFFckIsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNQLE1BQU0sSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVpELDBDQVlDO0FBRUQsNkVBQTZFO0FBQzdFLFNBQWdCLGVBQWUsQ0FBQyxNQUFtQjtJQUMvQyxJQUFNLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSSxJQUFLLFdBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFoQyxDQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUNwRSxDQUFDO0lBQ0YsSUFBTSxVQUFVLEdBQUcsYUFBYTtTQUMzQixPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNuQixPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXZCLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFYRCwwQ0FXQztBQUVELFNBQXNCLHFCQUFxQixDQUFDLFVBQWtCOzs7Ozs7b0JBQzFELElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxTQUFTLENBQUMsRUFBRTt3QkFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO3dCQUM3RSxzQkFBTztxQkFDVjtvQkFFSyxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7Ozs7b0JBRTFELHFCQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzs7b0JBQW5ELFNBQW1ELENBQUM7Ozs7b0JBRXBELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7Ozs7OztDQUV4QjtBQVpELHNEQVlDO0FBRUQsU0FBZ0IsS0FBSztJQUNqQixJQUFNLFFBQVEsR0FBRztRQUNiLE9BQU8sRUFBRyxJQUF3RDtRQUNsRSxNQUFNLEVBQUcsSUFBMEM7UUFDbkQsT0FBTyxFQUFHLElBQThCO0tBQzNDLENBQUM7SUFFRixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDN0MsUUFBZ0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ25DLFFBQWdCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFiRCxzQkFhQztBQUVELFNBQWdCLGdCQUFnQixDQUM1QixFQUE0QixFQUM1QixpQkFBZ0M7SUFEaEMsMEJBQWEsUUFBUSxDQUFDLE1BQU07SUFDNUIsMERBQWdDO0lBRWhDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUV0QixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsS0FBSyxHQUFHLEVBQUU7YUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLENBQUM7YUFDNUIsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQTdCLENBQTZCLENBQUM7YUFDM0MsTUFBTSxDQUFDLGVBQUssSUFBSSx3QkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7YUFDM0QsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLElBQUk7O1lBQUssOEJBQU0sQ0FBQyxnQkFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFHO1FBQTlCLENBQThCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEU7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBakJELDRDQWlCQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxFQUFjO0lBQ3JDLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDbkMsRUFBRSxFQUFFLENBQUM7S0FDUjtTQUFNO1FBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQU5ELGdDQU1DO0FBRUQsU0FBZ0IsUUFBUTtJQUNwQixPQUFPLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQUZELDRCQUVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDek9ELHVFQU1pQjtBQUNqQiwwRkFJeUI7QUFFekIsc0ZBQWdEO0FBQ2hELDBFQUE4QztBQUM5QyxrR0FBNkM7QUFLN0MsU0FBUyxXQUFXLENBQUMsRUFBeUI7SUFDMUMsT0FBTyx3Q0FBMEIsR0FBRSxDQUFDLElBQUksQ0FBQyxhQUFHO1FBQ3hDLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFFRCw0QkFBaUIsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckMsT0FBTywyQkFBYSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07WUFDL0MsR0FBRyxHQUFHLElBQUksY0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsNEZBQTRGO0FBQzVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7SUFDN0Isb0VBQW9FO0lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVILHFFQUFxRTtBQUNyRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGVBQUs7SUFDbkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQUs7SUFDL0IsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQUc7O1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBRUQsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsT0FBTztTQUNWO1FBRUQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFNLGVBQWUsR0FBRyxxQkFBVSxFQUFDLEdBQUcsRUFBRSxnQkFBUyxDQUFDLGlCQUFpQixFQUFFO1lBQ2pFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixFQUFFLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQU0sc0JBQXNCLEdBQUcsK0JBQW1CLEVBQUM7WUFDL0MsSUFBSSxFQUFFLDZCQUFpQixDQUFDLGFBQWE7WUFDckMsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUN4RCxPQUFPLENBQUMsS0FBSyxFQUNiO1lBQ0ksSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2pCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLGFBQU8sQ0FBQyxJQUFJLG1DQUFJLFNBQVM7WUFDL0IsS0FBSyxFQUFFLGFBQU8sQ0FBQyxLQUFLLG1DQUFJLFNBQVM7WUFDakMsa0JBQWtCLEVBQUUsSUFBSTtTQUMzQixDQUNKLENBQUM7UUFFRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDZixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLGVBQWU7U0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLGVBQUs7SUFDNUMsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQUc7O1FBQ2pDLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFeEMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsT0FBTztTQUNWO1FBRUQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUVELFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsSUFBTSxXQUFXLEdBQUcscUJBQVUsRUFBQyxHQUFHLEVBQUUsZ0JBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDMUQsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3RCLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxHQUFHLEdBQUcsYUFBTyxDQUFDLEdBQUcsbUNBQUksR0FBRyxDQUFDO1FBRS9CLElBQU0sZ0JBQWdCLEdBQUcsc0NBQXdCLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsZUFBSztJQUNqRCxJQUFJLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ3ZDLDBCQUEwQjtRQUMxQixPQUFPO0tBQ1Y7SUFFRCxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBRztRQUNqQyw0QkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBRyxJQUFJLFVBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUM7SUFBekQsQ0FBeUQsQ0FDNUQsQ0FBQztJQUVGLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbkpILElBQVksaUJBRVg7QUFGRCxXQUFZLGlCQUFpQjtJQUN6QixvREFBK0I7QUFDbkMsQ0FBQyxFQUZXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRTVCO0FBTUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBUztJQUM1QyxPQUFPLENBQ0YsSUFBc0IsQ0FBQyxJQUFJLEtBQUssU0FBUztRQUMxQyxpQkFBaUIsQ0FBRSxJQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FDaEUsQ0FBQztBQUNOLENBQUM7QUFMRCx3REFLQzs7Ozs7Ozs7Ozs7Ozs7QUNURCxTQUFnQixpQkFBaUIsQ0FBQyxLQUFvQixFQUFFLE1BQWM7SUFDbEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRkQsOENBRUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FBQyxLQUFvQjtJQUNwRCxJQUFNLFNBQVMsR0FBRyxVQUFDLE1BQWMsSUFBSyx3QkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQWhDLENBQWdDLENBQUM7SUFFdkUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBTztRQUN2QyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELGtEQU1DOzs7Ozs7O1VDaEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvcHVzaC9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3NhZmFyaS50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3czYy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9zdG9yYWdlL2lkYi1rZXl2YWwudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvd29ya2VyL2luZGV4LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy93b3JrZXIvbWVzc2FnaW5nLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy93b3JrZXIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgZ2V0SW5zdGFsbElkXG59IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2V0Q2FjaGVLZXlzID0gKGtleTogc3RyaW5nKSA9PiAoe1xuICAgIENPTkZJR19DQUNIRV9LRVk6IGAke2tleX1Db25maWdgLFxuICAgIENPTkZJR19DQUNIRV9LRVlfVVBEQVRFRDogYCR7a2V5fUNvbmZpZ1VwZGF0ZWRgXG59KTtcblxuY29uc3QgTUFYX0NBQ0hFX0FHRV9NUyA9IDEgKiA2MCAqIDYwICogMTAwMDtcblxuZW51bSBDb25maWdDYWNoZVR5cGUge1xuICAgIFBMQVRGT1JNID0gJ3BsYXRmb3JtJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnPFRDb25maWdUeXBlPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWNoZUtleTogc3RyaW5nLFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxUQ29uZmlnVHlwZT4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhjYWNoZUtleSk7XG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IGdldDxUQ29uZmlnVHlwZT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgY29uc3QgbGFzdExvYWRUaW1lID1cbiAgICAgICAgKGF3YWl0IGdldDxudW1iZXI+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQpKSA/PyAwO1xuICAgIGxldCB1cGRhdGVkUmVtb3RlQ29uZmlnID0gZmFsc2U7XG5cbiAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RMb2FkVGltZSA+IE1BWF9DQUNIRV9BR0VfTVMpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdDb25maWcgbmV2ZXIgc3luY2VkL3N0YWxlLCBzeW5jaW5nIG5vdy4uLicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25maWcgPSBhd2FpdCBhdXRoZWRGZXRjaEpzb248VENvbmZpZ1R5cGU+KGN0eCwgdXJsKTtcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVkUmVtb3RlQ29uZmlnKSB7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlnKTtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQsIERhdGUubm93KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGxhdGZvcm1Db25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGF3YWl0IGxvYWRDb25maWc8UGxhdGZvcm1Db25maWc+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvd2ViL2NvbmZpZ2AsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuUExBVEZPUk0sXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKSkgPz8ge31cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERkbENvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10gfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkQ29uZmlnPERkbFByb21wdENvbmZpZ1tdPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFxuICAgICAgICAgICAgICAgIFNlcnZpY2UuRERMXG4gICAgICAgICAgICApfS92MS9iYW5uZXJzP3dlYkluc3RhbGxJZD0ke3dlYkluc3RhbGxJZH1gLFxuICAgICAgICAgICAgQ29uZmlnQ2FjaGVUeXBlLkRETCxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgbG9hZERkbENvbmZpZzogZmFpbGVkIHRvIGxvYWQgRGVmZXJyZWQgRGVlcExpbmsgY29uZmlndXJhdGlvbmAsXG4gICAgICAgICAgICBlcnJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdW5kZWZpbmVkIHJldHVybiAvIG5vIGNvbmZpZ1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZShcbiAgICBiYW5uZXJVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhDb25maWdDYWNoZVR5cGUuRERMKTtcblxuICAgIGxldCBjb25maWdzID0gYXdhaXQgZ2V0PERkbFByb21wdENvbmZpZ1tdPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSk7XG5cbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ3MgPSBjb25maWdzLmZpbHRlcihjID0+IGMudXVpZCAhPT0gYmFubmVyVXVpZCk7XG5cbiAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVksIGNvbmZpZ3MpO1xufVxuIiwiaW1wb3J0IHsgYXV0aGVkRmV0Y2gsIGN5cmI1MywgdXVpZHY0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBkZWwsIGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4vY2hhbm5lbHMnO1xuXG5jb25zdCBTREtfVFlQRSA9IDEwNDtcbi8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggb3B0aW1vdmUgU0RLIG5vdCBpbmNsdWRpbmcgdmVyc2lvbiBpbiBPcHRpbW9iaWxlIGNvbmZpZ1xuY29uc3QgREVGQVVMVF9TREtfVkVSU0lPTiA9ICcyLjAuMTcnO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbnR5cGUgTmVzdGVkUGljazxULCBLMSBleHRlbmRzIGtleW9mIFQsIEsyIGV4dGVuZHMga2V5b2YgVFtLMV0+ID0ge1xuICAgIFtQMSBpbiBLMV06IHtcbiAgICAgICAgW1AyIGluIEsyXTogVFtLMV1bUDJdO1xuICAgIH07XG59O1xuXG4vL29ubHkgc3lzdGVtIGV2ZW50c1xuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICBNRVNTQUdFX0RFTElWRVJFRCA9ICdrLm1lc3NhZ2UuZGVsaXZlcmVkJyxcbiAgICBNRVNTQUdFX09QRU5FRCA9ICdrLm1lc3NhZ2Uub3BlbmVkJyxcbiAgICBQVVNIX1JFR0lTVEVSRUQgPSAnay5wdXNoLmRldmljZVJlZ2lzdGVyZWQnLFxuICAgIElOU1RBTExfVFJBQ0tFRCA9ICdrLnN0YXRzLmluc3RhbGxUcmFja2VkJyxcbiAgICBVU0VSX0FTU09DSUFURUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0aW9uQ2xlYXJlZCdcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0VHlwZU5hbWUge1xuICAgIEJFTEwgPSAnYmVsbCcsXG4gICAgQUxFUlQgPSAnYWxlcnQnLFxuICAgIEJBTk5FUiA9ICdiYW5uZXInLFxuICAgIERETF9CQU5ORVIgPSAnZGRsX2Jhbm5lcidcbn1cblxuLy8gTm90ZSBkdXBsaWNhdGUgJ2luJyB2cyAnSU4nIGR1ZSB0byBtaXNhbGlnbm1lbnQgaW4gc2VydmVyIGNvbmZpZyBhbmQgcHVibGlzaGVkIGRvY3MgZm9yIG1hbnVhbCBjb25maWdcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9yID0gJ2luJyB8ICdJTicgfCAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcbmV4cG9ydCB0eXBlIEZpbHRlclZhbHVlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUHJvcEZpbHRlciA9IFtzdHJpbmcsIEZpbHRlck9wZXJhdG9yLCBGaWx0ZXJWYWx1ZV07XG5cbmludGVyZmFjZSBQcm9tcHRUcmlnZ2VyIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGFmdGVyU2Vjb25kcz86IG51bWJlcjtcbiAgICBmaWx0ZXJzPzogUHJvcEZpbHRlcltdO1xufVxuXG5pbnRlcmZhY2UgUHJvbXB0T3ZlcmxheUNvbmZpZyB7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsaW5rcz86IHsgbGFiZWw6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xuICAgIGNvbG9yczoge1xuICAgICAgICBzaGFkZTogc3RyaW5nO1xuICAgICAgICBzdHJpcDogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnID0gTmVzdGVkUGljazxcbiAgICBQcm9tcHRPdmVybGF5Q29uZmlnLFxuICAgICdsYWJlbHMnLFxuICAgICdib2R5J1xuPiAmXG4gICAgTmVzdGVkUGljazxQcm9tcHRPdmVybGF5Q29uZmlnLCAnY29sb3JzJywgJ3RleHQnPjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnIHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWcge1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uQmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uRmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29uZmlnIHtcbiAgICBsYWJlbHM6IENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWc7XG4gICAgY29sb3JzOiBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWcge1xuICAgIHByZXNlbnRlZFV1aWRzOiBzdHJpbmdbXSB8ICdhbGwnO1xuICAgIGNoZWNrZWRVdWlkczogc3RyaW5nW10gfCAnbm9uZScgfCAnYWxsJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG4gICAgZGlhbG9nQ29uZmlnOiBDaGFubmVsRGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTdWJBY3Rpb24ge1xuICAgIHR5cGU6ICdzdWJzY3JpYmVUb0NoYW5uZWwnO1xuICAgIGNoYW5uZWxVdWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVpQWN0aW9uVHlwZSB7XG4gICAgREVDTElORSA9ICdkZWNsaW5lJyxcbiAgICBSRU1JTkQgPSAncmVtaW5kJyxcbiAgICBERExfT1BFTl9TVE9SRSA9ICdvcGVuU3RvcmUnLFxuICAgIERETF9PUEVOX0RFRVBMSU5LID0gJ29wZW5EZWVwbGluaydcbn1cblxuaW50ZXJmYWNlIERlY2xpbmVQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERUNMSU5FO1xufVxuXG5pbnRlcmZhY2UgUmVtaW5kUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuUkVNSU5EO1xuICAgIGRlbGF5OiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRBY3Rpb24gPVxuICAgIHwgQ2hhbm5lbFN1YkFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uO1xuXG5leHBvcnQgZW51bSBSZW1pbmRlclRpbWVVbml0IHtcbiAgICBIT1VSUyA9ICdob3VycycsXG4gICAgREFZUyA9ICdkYXlzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGltZVVuaXQ6IFJlbWluZGVyVGltZVVuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgZGVjbGluZTogRGVjbGluZVByb21wdEFjdGlvbiB8IFJlbWluZFByb21wdEFjdGlvbjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrQ29uZmlnIHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRQb3NpdGlvbiB7XG4gICAgVE9QX0xFRlQgPSAndG9wLWxlZnQnLFxuICAgIFRPUF9DRU5URVIgPSAndG9wLWNlbnRlcicsXG4gICAgVE9QX1JJR0hUID0gJ3RvcC1yaWdodCcsXG4gICAgQ0VOVEVSX0xFRlQgPSAnY2VudGVyLWxlZnQnLFxuICAgIENFTlRFUiA9ICdjZW50ZXInLFxuICAgIENFTlRFUl9SSUdIVCA9ICdjZW50ZXItcmlnaHQnLFxuICAgIEJPVFRPTV9MRUZUID0gJ2JvdHRvbS1sZWZ0JyxcbiAgICBCT1RUT01fQ0VOVEVSID0gJ2JvdHRvbS1jZW50ZXInLFxuICAgIEJPVFRPTV9SSUdIVCA9ICdib3R0b20tcmlnaHQnLFxuICAgIFRPUCA9ICd0b3AnLFxuICAgIEJPVFRPTSA9ICdib3R0b20nXG59XG5cbmludGVyZmFjZSBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWU7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG4gICAgb3ZlcmxheT86IFByb21wdE92ZXJsYXlDb25maWc7XG4gICAgc2lsZW50T3ZlcmxheT86IFByb21wdFNpbGVudE92ZXJsYXlDb25maWc7XG4gICAgYWN0aW9ucz86IFByb21wdEFjdGlvbltdO1xufVxuXG5pbnRlcmZhY2UgV2l0aEltYWdlVXJsIHtcbiAgICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBDb25maWcge1xuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBEaWFsb2dMYWJlbENvbmZpZyA9IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb246IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb246IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dMYWJlbENvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nTGFiZWxDb25maWdcbj47XG5cbnR5cGUgRGlhbG9nQ29sb3JDb25maWcgPSB7XG4gICAgZmc6IHN0cmluZztcbiAgICBiZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25GZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25CZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uQmc6IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dDb2xvckNvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nQ29sb3JDb25maWdcbj47XG5cbmludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG59XG5cbi8vIEJFTExcblxudHlwZSBCZWxsTGFiZWxDb25maWcgPSBUb2FzdE1lc3NhZ2UgJiBUb29sdGlwQ29uZmlnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxDb2xvckNvbmZpZyB7XG4gICAgYmVsbDoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbFByb21wdENvbmZpZyBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJFTEw7XG4gICAgbGFiZWxzPzogQmVsbExhYmVsQ29uZmlnO1xuICAgIGNvbG9ycz86IEJlbGxDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uQk9UVE9NX0xFRlQgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT01fUklHSFQ7XG59XG5cbi8vIEFMRVJUXG5cbnR5cGUgQWxlcnRMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEFsZXJ0Q29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkFMRVJUO1xuICAgIGxhYmVsczogQWxlcnRMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEFsZXJ0Q29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkNFTlRFUjtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBCQU5ORVJcblxudHlwZSBCYW5uZXJMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBCYW5uZXJDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPjtcblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CQU5ORVI7XG4gICAgbGFiZWxzOiBCYW5uZXJMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEJhbm5lckNvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT007XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gRERMIEJBTk5FUlxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZyB7XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgcmF0aW5nQ291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBEZGxEaWFsb2dDb2xvckNvbmZpZyA9IERpYWxvZ0NvbG9yQ29uZmlnICYgeyByYXRpbmdGZzogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIE9wZW5TdG9yZVVpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcbnR5cGUgT3BlbkRlZXBMaW5rVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZGxVaUFjdGlvbnMgPSBQcm9tcHRVaUFjdGlvbnMgJiB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGFjY2VwdDogT3BlblN0b3JlVWlBY3Rpb24gfCBPcGVuRGVlcExpbmtVaUFjdGlvbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgRGRsVWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5ERExfQkFOTkVSO1xuICAgIGxhYmVsczogRGlhbG9nTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBEZGxEaWFsb2dDb2xvckNvbmZpZztcbiAgICBhcHBSYXRpbmc/OiBBcHBSYXRpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFB1c2hQcm9tcHRDb25maWcgPVxuICAgIHwgQmVsbFByb21wdENvbmZpZ1xuICAgIHwgQWxlcnRQcm9tcHRDb25maWdcbiAgICB8IEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgRGRsUHJvbXB0Q29uZmlnID0gRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWcgPSBQdXNoUHJvbXB0Q29uZmlnIHwgRGRsUHJvbXB0Q29uZmlnO1xuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnczxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiA9IFJlY29yZDxzdHJpbmcsIFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtQ29uZmlnIHtcbiAgICBwdWJsaWNLZXk6IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIHByb21wdHM/OiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHNhZmFyaVB1c2hJZD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFNES0ZlYXR1cmUge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJyxcbiAgICBFVkVOVFMgPSAnZXZlbnRzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHNlY3JldEtleTogc3RyaW5nO1xuICAgIHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gICAgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgICBmZWF0dXJlcz86IFNES0ZlYXR1cmVbXTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0UmVtaW5kZXIgPVxuICAgIHwge1xuICAgICAgICAgIGRlY2xpbmVkT246IG51bWJlcjtcbiAgICAgIH1cbiAgICB8ICdzdXBwcmVzc2VkJztcblxudHlwZSBTZGtFdmVudFR5cGUgPSAnZXZlbnRUcmFja2VkJztcbmV4cG9ydCB0eXBlIFNka0V2ZW50PFQgPSBhbnk+ID0geyB0eXBlOiBTZGtFdmVudFR5cGU7IGRhdGE6IFQgfTtcbnR5cGUgU2RrRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBTZGtFdmVudCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlY3JldEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXV0aEhlYWRlcjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJQYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgcmVhZG9ubHkgYXV0b1Jlc3Vic2NyaWJlOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGZlYXR1cmVzOiBTREtGZWF0dXJlW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IFNka0V2ZW50SGFuZGxlcltdIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxNYXA6IHsgW2tleSBpbiBTZXJ2aWNlXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICAgICAgICB0aGlzLnNlY3JldEtleSA9IGNvbmZpZy5zZWNyZXRLZXk7XG4gICAgICAgIHRoaXMudmFwaWRQdWJsaWNLZXkgPSBjb25maWcudmFwaWRQdWJsaWNLZXk7XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dGhpcy5hcGlLZXl9OiR7dGhpcy5zZWNyZXRLZXl9YCl9YDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUGF0aCA9IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCA/PyAnL3dvcmtlci5qcyc7XG4gICAgICAgIHRoaXMucHVzaFByb21wdHMgPSBjb25maWcucHVzaFByb21wdHMgPz8gJ2F1dG8nO1xuICAgICAgICB0aGlzLmF1dG9SZXN1YnNjcmliZSA9IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUgPz8gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGNvbmZpZy5mZWF0dXJlcyA/PyBbU0RLRmVhdHVyZS5QVVNIXTtcblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG5cbiAgICAgICAgdGhpcy51cmxNYXAgPSB7XG4gICAgICAgICAgICBbU2VydmljZS5QVVNIXTogYGh0dHBzOi8vcHVzaC0ke2NvbmZpZy5yZWdpb259Lmt1bXVsb3MuY29tYCxcbiAgICAgICAgICAgIFtTZXJ2aWNlLkVWRU5UU106IGBodHRwczovL2V2ZW50cy0ke2NvbmZpZy5yZWdpb259Lmt1bXVsb3MuY29tYCxcbiAgICAgICAgICAgIFtTZXJ2aWNlLkRETF06IGBodHRwczovL2xpbmtzLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKGV2ZW50OiBTZGtFdmVudFR5cGUsIGhhbmRsZXI6IFNka0V2ZW50SGFuZGxlcikge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmluZGV4T2YoaGFuZGxlcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3QoZXZlbnQ6IFNka0V2ZW50VHlwZSwgZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdW2ldKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBldmVudCxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZlYXR1cmUoZmVhdHVyZTogU0RLRmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKTtcbiAgICB9XG5cbiAgICB1cmxGb3JTZXJ2aWNlKHNlcnZpY2U6IFNlcnZpY2UpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxNYXBbc2VydmljZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbXG4gICAgICAgICdyZWdpb24nLFxuICAgICAgICAnYXBpS2V5JyxcbiAgICAgICAgJ3NlY3JldEtleScsXG4gICAgICAgICd2YXBpZFB1YmxpY0tleSdcbiAgICBdO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiByZXF1aXJlZFN0cmluZ1Byb3BzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnW3Byb3BdICE9PSAnc3RyaW5nJyB8fCBjb25maWdbcHJvcF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBgUmVxdWlyZWQgY29uZmlndXJhdGlvbiBrZXkgJyR7cHJvcH0nIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ2A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICBjb25maWcuc2VydmljZVdvcmtlclBhdGgubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ3NlcnZpY2VXb3JrZXJQYXRoJyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmcgKGlmIHN1cHBsaWVkKVwiO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QdXNoUmVjZWl2ZWQgJiYgdHlwZW9mIGNvbmZpZy5vblB1c2hSZWNlaXZlZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hSZWNlaXZlZCcgbXVzdCBiZSBhIGZ1bmN0aW9uXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hPcGVuZWQgJiYgdHlwZW9mIGNvbmZpZy5vblB1c2hPcGVuZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnb25QdXNoT3BlbmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG59XG5cbmxldCBpbnN0YWxsSWRQcm9taXNlOiBQcm9taXNlPEluc3RhbGxJZD4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YWxsSWQoKTogUHJvbWlzZTxJbnN0YWxsSWQ+IHtcbiAgICBpZiAoaW5zdGFsbElkUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFsbElkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpbnN0YWxsSWRQcm9taXNlID0gZ2V0PEluc3RhbGxJZCB8IHVuZGVmaW5lZD4oJ2luc3RhbGxJZCcpLnRoZW4oXG4gICAgICAgIGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBpZiAoIWluc3RhbGxJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnN0YWxsSWQodXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5zdGFsbElkKGluc3RhbGxJZDogSW5zdGFsbElkKTogUHJvbWlzZTxJbnN0YWxsSWQ+IHtcbiAgICBpbnN0YWxsSWRQcm9taXNlID0gc2V0KCdpbnN0YWxsSWQnLCBpbnN0YWxsSWQpO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICByZXR1cm4gZ2V0PFVzZXJJZCB8IHVuZGVmaW5lZD4oJ3VzZXJJZCcpLnRoZW4oXG4gICAgICAgIHVzZXJJZCA9PiB1c2VySWQgPz8gZ2V0SW5zdGFsbElkKClcbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzb2NpYXRlVXNlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgaWQ6IFVzZXJJZCxcbiAgICBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHNldCgndXNlcklkJywgaWQpO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRFRCwgcHJvcHMpLnRoZW4oXyA9PiB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclVzZXJBc3NvY2lhdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCwge1xuICAgICAgICBvbGRVc2VySWRlbnRpZmllcjogY3VycmVudFVzZXJJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbCgndXNlcklkJyk7XG59XG5cbmV4cG9ydCB0eXBlIEt1bXVsb3NFdmVudCA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRhdGE/OiBQcm9wc09iamVjdDtcbn07XG5cbmV4cG9ydCB0eXBlIEV2ZW50UGF5bG9hZCA9IEt1bXVsb3NFdmVudFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tFdmVudChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCBpbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRQYXlsb2FkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdXVpZDogdXVpZHY0KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY3R4LmJyb2FkY2FzdCgnZXZlbnRUcmFja2VkJywgZXZlbnRzKTtcblxuICAgIGlmICghaXNTeXN0ZW1FdmVudCh0eXBlKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoXG4gICAgICAgIFNlcnZpY2UuRVZFTlRTXG4gICAgKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9ldmVudHNgO1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXZlbnRzKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc1N5c3RlbUV2ZW50KHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiAoPGFueT5PYmplY3QpLnZhbHVlcyhFdmVudFR5cGUpLmluY2x1ZGVzKHR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tJbnN0YWxsRGV0YWlscyhcbiAgICBjdHg6IENvbnRleHQsXG4gICAgb3B0aW9uYWxTZGtWZXJzaW9uPzogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZGtWZXJzaW9uID0gb3B0aW9uYWxTZGtWZXJzaW9uIHx8IERFRkFVTFRfU0RLX1ZFUlNJT047XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICBidW5kbGU6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnLCAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICAgICAgdGFyZ2V0OiAyIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgIH0sXG4gICAgICAgIHNkazoge1xuICAgICAgICAgICAgaWQ6IFNES19UWVBFLFxuICAgICAgICAgICAgdmVyc2lvbjogc2RrVmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgfSxcbiAgICAgICAgb3M6IHtcbiAgICAgICAgICAgIC8vIERldGVjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBzZXJ2ZXItc2lkZSBmcm9tIFVBIGRhdGFcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2U6IHtcbiAgICAgICAgICAgIC8vIFdpbGwgYmUgaGFuZGxlZCBvbiBiZXN0LWVmZm9ydCBiYXNpcyBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgbmFtZTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIHR6OlxuICAgICAgICAgICAgICAgIHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICA/IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGlzU2ltdWxhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsZTogbmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFzaFBhcnRzID0gW1xuICAgICAgICBzZGtWZXJzaW9uLFxuICAgICAgICBwYXlsb2FkLmFwcC5idW5kbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLnR6LFxuICAgICAgICBwYXlsb2FkLmRldmljZS5sb2NhbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLm5hbWVcbiAgICBdO1xuICAgIGNvbnN0IGhhc2ggPSBjeXJiNTMoaGFzaFBhcnRzLmpvaW4oJ3wnKSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0hhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPignZGV0YWlsc0hhc2gnKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdIYXNoID09PSBoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5JTlNUQUxMX1RSQUNLRUQsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKCgpID0+IHNldCgnZGV0YWlsc0hhc2gnLCBoYXNoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdm9pZCAwKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsTGlzdEl0ZW0ge1xuICAgIGNoYW5uZWw6IENoYW5uZWw7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxEaWFsb2dDaGFubmVscyhcbiAgICBhbGxDaGFubmVsczogQ2hhbm5lbFtdLFxuICAgIHNlbGVjdGlvbkNvbmZpZzogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnXG4pIHtcbiAgICByZXR1cm4gYWxsQ2hhbm5lbHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIGMgPT5cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgKVxuICAgICAgICAubWFwPENoYW5uZWxMaXN0SXRlbT4oYyA9PiAoe1xuICAgICAgICAgICAgY2hhbm5lbDogeyAuLi5jIH0sXG4gICAgICAgICAgICBjaGVja2VkOlxuICAgICAgICAgICAgICAgIGMuc3Vic2NyaWJlZC52YWx1ZU9mKCkgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICB9KSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgU2FmYXJpUHVzaE1hbmFnZXIgZnJvbSAnLi9zYWZhcmknO1xuaW1wb3J0IFczY1B1c2hNYW5hZ2VyIGZyb20gJy4vdzNjJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCB0eXBlIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSA9ICdzdWJzY3JpYmVkJyB8ICd1bnN1YnNjcmliZWQnIHwgJ2Jsb2NrZWQnO1xuXG5leHBvcnQgZW51bSBUb2tlblR5cGUge1xuICAgIFczQyA9IDMsXG4gICAgU0FGQVJJID0gNFxufVxuXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgUFVTSCA9IDFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoT3BzTWFuYWdlciB7XG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj47XG4gICAgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG4gICAgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBnZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoY3R4OiBDb250ZXh0KTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBpbWFnZVVybD86IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hQYXlsb2FkIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1zZzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgJ2subWVzc2FnZSc6IHtcbiAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlBVU0g7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICAgIHVybDogc3RyaW5nIHwgbnVsbDtcbiAgICBpbWFnZTogc3RyaW5nIHwgbnVsbDtcbiAgICBpY29uOiBzdHJpbmcgfCBudWxsO1xufVxuXG5sZXQgbWFuYWdlcjogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFB1c2hPcHNNYW5hZ2VyKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxQdXNoT3BzTWFuYWdlcj4ge1xuICAgIGlmIChtYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgPT09ICdzYWZhcmknKSB7XG4gICAgICAgIG1hbmFnZXIgPSBsb2FkUGxhdGZvcm1Db25maWcoY3R4KS50aGVuKFxuICAgICAgICAgICAgY2ZnID0+IG5ldyBTYWZhcmlQdXNoTWFuYWdlcihjZmcpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFuYWdlciA9IFByb21pc2UucmVzb2x2ZShuZXcgVzNjUHVzaE1hbmFnZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja09wZW5Gcm9tUXVlcnkoY3R4OiBDb250ZXh0KSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciAhPT0gJ3NhZmFyaScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcblxuICAgIGlmICghcGFyYW1zPy5bJ2tuaWQnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX09QRU5FRCwge1xuICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNILFxuICAgICAgICBpZDogTnVtYmVyKHBhcmFtc1sna25pZCddKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdCB7ICdrLm1lc3NhZ2UnOiBfLCAuLi51c2VyRGF0YSB9ID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgY29uc3QgcHVzaDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24gPSB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmRhdGFbJ2subWVzc2FnZSddLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlLFxuICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLm1zZyxcbiAgICAgICAgZGF0YTogdXNlckRhdGEsXG4gICAgICAgIHVybDogcGF5bG9hZC51cmwgPz8gdW5kZWZpbmVkLFxuICAgICAgICBpY29uVXJsOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICBpbWFnZVVybDogcGF5bG9hZC5pbWFnZSA/PyB1bmRlZmluZWRcbiAgICB9O1xuICAgIHJldHVybiBwdXNoO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCBQbGF0Zm9ybUNvbmZpZywgU2VydmljZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGN5cmI1MywgZGVmZXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9wdXNoJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vc2FmYXJpLyR7XG4gICAgICAgICAgICBjdHguYXBpS2V5XG4gICAgICAgIH1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5TQUZBUkksXG4gICAgICAgICAgICB0b2tlbjogcGVybS5kZXZpY2VUb2tlbixcbiAgICAgICAgICAgIGJ1bmRsZUlkOiBjZmcuc2FmYXJpUHVzaElkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaFRva2VuSGFzaCcsIHRva2VuSGFzaCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cblxuICAgIGFzeW5jIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MywgZ2V0QnJvd3Nlck5hbWUgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5jb25zdCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTID0gMTAwMDtcblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKHdvcmtlclBhdGg6IHN0cmluZyk6IFByb21pc2U8U2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbj4ge1xuICAgIGNvbnN0IHBhdGhXaXRoT3JpZ2luID0gbmV3IFVSTCh3b3JrZXJQYXRoLCBsb2NhdGlvbi5vcmlnaW4pLmhyZWY7IFxuXG4gICAgY29uc3Qgd29ya2VyUmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKHBhdGhXaXRoT3JpZ2luKTtcblxuICAgIGlmICghd29ya2VyUmVnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTm8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmtlclJlZztcbn1cblxuZnVuY3Rpb24gaGFzaFN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQsIHN1YjogUHVzaFN1YnNjcmlwdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGN5cmI1MyhgJHtjdHguYXBpS2V5fToke3N1Yi5lbmRwb2ludH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVzNjUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgYXN5bmMgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgJ1B1c2ggbm90aWZpY2F0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKGN0eC5zZXJ2aWNlV29ya2VyUGF0aCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1N1YiAmJiAhaGFzU2FtZUtleShjdHgudmFwaWRQdWJsaWNLZXksIGV4aXN0aW5nU3ViKSkge1xuICAgICAgICAgICAgYXdhaXQgZXhpc3RpbmdTdWI/LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiBjdHgudmFwaWRQdWJsaWNLZXksXG4gICAgICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZW5kcG9pbnRIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIHN1Yik7XG4gICAgICAgIGNvbnN0IGV4cGlyeSA9IHN1Yi5leHBpcmF0aW9uVGltZTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGVuZHBvaW50SGFzaCAmJlxuICAgICAgICAgICAgKCFleGlzdGluZ0V4cGlyeSB8fCBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5XM0MsXG4gICAgICAgICAgICB0b2tlbjogc3ViXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaEVuZHBvaW50SGFzaCcsIGVuZHBvaW50SGFzaCk7XG4gICAgICAgIGF3YWl0IHNldCgncHVzaEV4cGlyZXNBdCcsIGV4cGlyeSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8aW1wb3J0KCcuJykuUHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoY3R4LnNlcnZpY2VXb3JrZXJQYXRoKTtcbiAgICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnPy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoc3ViICYmIHBlcm0gPT09ICdncmFudGVkJyAmJiBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgc3ViKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBub3QgZW5hYmxlZCwgYWJvcnRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgYEF1dG8tcmVzdWJzY3JpYmU6IHBlcm1pc3Npb24gbm90IGdyYW50ZWQsIGFib3J0aW5nOiAke3Blcm19YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKGN0eC5zZXJ2aWNlV29ya2VyUGF0aCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGxldCBleGlzdGluZ1N1Ykhhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChleGlzdGluZ1N1Yikge1xuICAgICAgICAgICAgZXhpc3RpbmdTdWJIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIGV4aXN0aW5nU3ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBleGlzdGluZ1N1Ykhhc2ggJiZcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViICYmXG4gICAgICAgICAgICBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpICYmXG4gICAgICAgICAgICAoZXhpc3RpbmdFeHBpcnkgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmliZTogYWxyZWFkeSBoYXZlIGEgbm9uLWV4cGlyZWQgZW5kcG9pbnQgaGFzaCBmb3Igc2FtZSBzdWIsIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnQXV0by1yZXN1YnNjcmliZTogYXR0ZW1wdGluZyByZXN1YnNjcmlwdGlvbicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJOYW1lID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgICAgICBpZiAoJ2Nocm9tZScgIT09IGJyb3dzZXJOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJsdXJFdmVudEZpcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmx1ckV2ZW50RmlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYW5jZWxCbHVyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIGJsdXJFdmVudEZpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCbHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2hlY2tGb3JCbHVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIEJMVVJfRVZFTlRfVElNRU9VVF9NSUxMSVMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgMjAxNiwgSmFrZSBBcmNoaWJhbGRcblxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4vLyAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICAgIHJlYWRvbmx5IF9kYnA6IFByb21pc2U8SURCRGF0YWJhc2U+O1xuXG4gICAgY29uc3RydWN0b3IoZGJOYW1lID0gJ2tleXZhbC1zdG9yZScsIHJlYWRvbmx5IHN0b3JlTmFtZSA9ICdrZXl2YWwnKSB7XG4gICAgICAgIHRoaXMuX2RicCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5yZXEgPSBpbmRleGVkREIub3BlbihkYk5hbWUsIDEpO1xuICAgICAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG9wZW5yZXEuZXJyb3IpO1xuICAgICAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcblxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSBzZXR1cDogY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBzdG9yZVxuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlbnJlcS5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF93aXRoSURCU3RvcmUoXG4gICAgICAgIHR5cGU6IElEQlRyYW5zYWN0aW9uTW9kZSxcbiAgICAgICAgY2FsbGJhY2s6IChzdG9yZTogSURCT2JqZWN0U3RvcmUpID0+IHZvaWRcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RicC50aGVuKFxuICAgICAgICAgICAgZGIgPT5cbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWUsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgc3RvcmU6IFN0b3JlO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0U3RvcmUoKSB7XG4gICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBuZXcgU3RvcmUoKTtcbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VHlwZT4oXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICBzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpXG4pOiBQcm9taXNlPFR5cGU+IHtcbiAgICBsZXQgcmVxOiBJREJSZXF1ZXN0O1xuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICByZXEgPSBzdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcmVxLnJlc3VsdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQoXG4gICAga2V5OiBJREJWYWxpZEtleSxcbiAgICB2YWx1ZTogYW55LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XG4gICAgICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlzKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpOiBQcm9taXNlPElEQlZhbGlkS2V5W10+IHtcbiAgICBjb25zdCBrZXlzOiBJREJWYWxpZEtleVtdID0gW107XG5cbiAgICByZXR1cm4gc3RvcmVcbiAgICAgICAgLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyB3b3VsZCBiZSBzdG9yZS5nZXRBbGxLZXlzKCksIGJ1dCBpdCBpc24ndCBzdXBwb3J0ZWQgYnkgRWRnZSBvciBTYWZhcmkuXG4gICAgICAgICAgICAvLyBBbmQgb3BlbktleUN1cnNvciBpc24ndCBzdXBwb3J0ZWQgYnkgU2FmYXJpLlxuICAgICAgICAgICAgKHN0b3JlLm9wZW5LZXlDdXJzb3IgfHwgc3RvcmUub3BlbkN1cnNvcikuY2FsbChcbiAgICAgICAgICAgICAgICBzdG9yZVxuICAgICAgICAgICAgKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVzdWx0KSByZXR1cm47XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHRoaXMucmVzdWx0LmtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IGtleXMpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFJlbWluZGVyXG59IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7XG4gICAgU3RvcmUsXG4gICAgZGVsIGFzIGlkYkRlbCxcbiAgICBnZXQgYXMgaWRiR2V0LFxuICAgIHNldCBhcyBpZGJTZXRcbn0gZnJvbSAnLi9pZGIta2V5dmFsJztcblxuaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9wdXNoJztcblxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoJ2t1bXVsb3MnLCAnZGVmYXVsdCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFQ+KGtleTogSURCVmFsaWRLZXkpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiR2V0KGtleSwgc3RvcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQgZXh0ZW5kcyBhbnk+KGtleTogSURCVmFsaWRLZXksIHZhbHVlOiBUKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGlkYlNldChrZXksIHZhbHVlLCBzdG9yZSkudGhlbigoKSA9PiB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwoa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBpZGJEZWwoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0Q29uZmlnKGNvbmZpZzogQ29uZmlndXJhdGlvbik6IFByb21pc2U8Q29uZmlndXJhdGlvbj4ge1xuICAgIHJldHVybiBzZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycsIHtcbiAgICAgICAgcmVnaW9uOiBjb25maWcucmVnaW9uLFxuICAgICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICAgIHNlY3JldEtleTogY29uZmlnLnNlY3JldEtleSxcbiAgICAgICAgdmFwaWRQdWJsaWNLZXk6IGNvbmZpZy52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgc2VydmljZVdvcmtlclBhdGg6IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCxcbiAgICAgICAgYXV0b1Jlc3Vic2NyaWJlOiBjb25maWcuYXV0b1Jlc3Vic2NyaWJlLFxuICAgICAgICBwdXNoUHJvbXB0czogY29uZmlnLnB1c2hQcm9tcHRzXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0RERMQ29uZmlnKFxuICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnW11cbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10+IHtcbiAgICByZXR1cm4gc2V0PERkbFByb21wdENvbmZpZ1tdPignZGRsY29uZmlnJywgY29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmcsXG4gICAgcmVtaW5kZXI6IFByb21wdFJlbWluZGVyXG4pIHtcbiAgICByZXR1cm4gc2V0KGByZW1pbmRlci4ke3Byb21wdFV1aWR9YCwgcmVtaW5kZXIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvbXB0UmVtaW5kZXIoXG4gICAgcHJvbXB0VXVpZDogc3RyaW5nXG4pOiBQcm9taXNlPFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGF3YWl0IGdldDxQcm9tcHRSZW1pbmRlciB8IHVuZGVmaW5lZD4oYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnKCk6IFByb21pc2U8Q29udGV4dCB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiBnZXQ8Q29uZmlndXJhdGlvbj4oJ2NvbmZpZycpLnRoZW4oY29uZmlnID0+XG4gICAgICAgIGNvbmZpZyA/IG5ldyBDb250ZXh0KGNvbmZpZykgOiB1bmRlZmluZWRcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdE9wZW5lZFB1c2hQYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBQcm9taXNlPFB1c2hQYXlsb2FkPiB7XG4gICAgcmV0dXJuIHNldCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJywgcGF5bG9hZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCgpOiBQcm9taXNlPFxuICAgIFB1c2hQYXlsb2FkIHwgdW5kZWZpbmVkXG4+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZ2V0PFB1c2hQYXlsb2FkPignbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICBhd2FpdCBkZWwoJ21vc3RSZWNlbnRPcGVuZWRQdXNoUGF5bG9hZCcpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQgPz8gdW5kZWZpbmVkO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU0RLRmVhdHVyZSB9IGZyb20gJy4vaW5kZXgnO1xuXG50eXBlIEZlYXR1cmVEZXBlbmRlbmN5ID0gc3RyaW5nIHwgb2JqZWN0IHwgSURCRmFjdG9yeSB8IFByb21pc2VDb25zdHJ1Y3RvciB8IE5vdGlmaWNhdGlvbiB8IFB1c2hNYW5hZ2VyIHwgU2VydmljZVdvcmtlckNvbnRhaW5lciB8IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbjtcblxuY29uc3QgQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyA6IEZlYXR1cmVEZXBlbmRlbmN5W10gPSBbdHlwZW9mIFByb21pc2UsIHR5cGVvZiBmZXRjaCwgdHlwZW9mIGluZGV4ZWREQl07XG5cbmNvbnN0IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDSyA6IHtba2V5IGluIFNES0ZlYXR1cmVdOiAoKSA9PiBib29sZWFufSA9IHtcbiAgICAncHVzaCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2gsXG4gICAgJ2RkbCc6IGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbFxufTtcblxuLy8gU2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oXG4gICAgICAgICAgICBjXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgICAgICAgICAgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgoMWU3KS50b1N0cmluZygpICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoXG4gICAgICAgIC9bMDE4XS9nLFxuICAgICAgICBjID0+XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgTnVtYmVyKGMpIF5cbiAgICAgICAgICAgICAgICAoY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJlxuICAgICAgICAgICAgICAgICAgICAoMTUgPj4gKE51bWJlcihjKSAvIDQpKSlcbiAgICAgICAgICAgICkudG9TdHJpbmcoMTYpXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYnJvd3NlcnMgPSBbJ2VkZ2UnLCAnZmlyZWZveCcsICdjaHJvbWUnLCAnc2FmYXJpJ107XG5cbiAgICBmb3IgKGxldCBiIG9mIGJyb3dzZXJzKSB7XG4gICAgICAgIGlmICh1YS5pbmRleE9mKGIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkKHNka0ZlYXR1cmVzPzogU0RLRmVhdHVyZVtdKSB7XG4gICAgc2RrRmVhdHVyZXMgPSBzZGtGZWF0dXJlcyA/PyBbXTtcbiAgICBpZiAoIXNka0ZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICBzZGtGZWF0dXJlcy5wdXNoKFNES0ZlYXR1cmUuUFVTSCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNka0ZlYXR1cmVzLmZpbHRlcihmID0+IEZFQVRVUkVfREVQRU5ERU5DWV9DSEVDS1tmXSgpKS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JQdXNoKCkge1xuICAgIGNvbnN0IGNvcmVEZXBlbmRlbmNpZXMgPSBbLi4uQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFU107XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoJ3NhZmFyaScgPT09IGJyb3dzZXIpIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKHR5cGVvZiB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2goXG4gICAgICAgICAgICAuLi5bXG4gICAgICAgICAgICAgICAgdHlwZW9mIE5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIsXG4gICAgICAgICAgICAgICAgdHlwZW9mIFB1c2hNYW5hZ2VyXG4gICAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llcyk7XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZEZvckRkbCgpIHtcbiAgICByZXR1cm4gY2hlY2tSZXF1aXJlZChDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSZXF1aXJlZChjb3JlRGVwZW5kZW5jaWVzOiBGZWF0dXJlRGVwZW5kZW5jeVtdKSB7XG4gICAgcmV0dXJuIGNvcmVEZXBlbmRlbmNpZXMucmVkdWNlKFxuICAgICAgICAoc3VwcG9ydGVkOiBib29sZWFuLCBkZXBlbmRlbmN5OiBGZWF0dXJlRGVwZW5kZW5jeSkgPT4gc3VwcG9ydGVkICYmIGRlcGVuZGVuY3kgIT09ICd1bmRlZmluZWQnLFxuICAgICAgICB0cnVlXG4gICAgKTtcbn1cblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvaW11bFxuY29uc3QgaW11bCA9XG4gICAgTWF0aC5pbXVsIHx8XG4gICAgZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBiIHw9IDA7IC8vIGVuc3VyZSB0aGF0IG9wQiBpcyBhbiBpbnRlZ2VyLiBvcEEgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvZXJjZWQuXG4gICAgICAgIC8vIGZsb2F0aW5nIHBvaW50cyBnaXZlIHVzIDUzIGJpdHMgb2YgcHJlY2lzaW9uIHRvIHdvcmsgd2l0aCBwbHVzIDEgc2lnbiBiaXRcbiAgICAgICAgLy8gYXV0b21hdGljYWxseSBoYW5kbGVkIGZvciBvdXIgY29udmllbmVuY2U6XG4gICAgICAgIC8vIDEuIDB4MDAzZmZmZmYgLypvcEEgJiAweDAwMGZmZmZmKi8gKiAweDdmZmZmZmZmIC8qb3BCKi8gPSAweDFmZmZmZjdmYzAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmN2ZjMDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICB2YXIgcmVzdWx0ID0gKGEgJiAweDAwM2ZmZmZmKSAqIGI7XG4gICAgICAgIC8vIDIuIFdlIGNhbiByZW1vdmUgYW4gaW50ZWdlciBjb2Vyc2lvbiBmcm9tIHRoZSBzdGF0ZW1lbnQgYWJvdmUgYmVjYXVzZTpcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSArIDB4ZmZjMDAwMDAgPSAweDFmZmZmZmZmODAwMDAxXG4gICAgICAgIC8vICAgIDB4MWZmZmZmZmY4MDAwMDEgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvKjB4MWZmZmZmZmZmZmZmZmYqL1xuICAgICAgICBpZiAoYSAmIDB4ZmZjMDAwMDAgLyohPT0gMCovKSByZXN1bHQgKz0gKChhICYgMHhmZmMwMDAwMCkgKiBiKSB8IDA7XG4gICAgICAgIHJldHVybiByZXN1bHQgfCAwO1xuICAgIH07XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MjE3MTQ4MFxuZXhwb3J0IGZ1bmN0aW9uIGN5cmI1MyhzdHI6IHN0cmluZywgc2VlZCA9IDApOiBudW1iZXIge1xuICAgIGxldCBoMSA9IDB4ZGVhZGJlZWYgXiBzZWVkLFxuICAgICAgICBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkO1xuICAgIGZvciAobGV0IGkgPSAwLCBjaDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoMSA9IGltdWwoaDEgXiBjaCwgMjY1NDQzNTc2MSk7XG4gICAgICAgIGgyID0gaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KTtcbiAgICB9XG4gICAgaDEgPVxuICAgICAgICBpbXVsKGgxIF4gKGgxID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gaW11bChoMiBeIChoMiA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICBoMiA9XG4gICAgICAgIGltdWwoaDIgXiAoaDIgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgxIF4gKGgxID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIHJldHVybiA0Mjk0OTY3Mjk2ICogKDIwOTcxNTEgJiBoMikgKyAoaDEgPj4+IDApO1xufVxuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL1JlZ3VsYXJfRXhwcmVzc2lvbnNcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0geyBtZXRob2Q6ICdHRVQnIH1cbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBleGlzdGluZ0hlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPz8ge307XG5cbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBjdHguYXV0aEhlYWRlcixcbiAgICAgICAgLi4uZXhpc3RpbmdIZWFkZXJzXG4gICAgfTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0aGVkRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlOiBudW1iZXIsIHN0YXR1c1RleHQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihgYXV0aGVkIGZldGNoIGZhaWxlZDogJHtzdGF0dXNDb2RlfSwgJHtzdGF0dXNUZXh0fWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhlZEZldGNoSnNvbjxUPihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICBvcHRpb25zPzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwgb3B0aW9ucykudGhlbihyID0+IHtcbiAgICAgICAgaWYgKCFyLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQXV0aGVkRmV0Y2hFcnJvcihyLnN0YXR1cywgci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICB9KTtcbn1cblxuLy8gQmFzZWQgb24gdGhlIGFscGhhYmV0cyBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0OCBUYWJsZXMgMSAmIDJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlNjRVcmxFbmNvZGUoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaW50cyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmFzZTY0RW5jb2RlZCA9IGJ0b2EoXG4gICAgICAgIGludHMucmVkdWNlKChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXG4gICAgKTtcbiAgICBjb25zdCB1cmxWYXJpYW50ID0gYmFzZTY0RW5jb2RlZFxuICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgIC5yZXBsYWNlKC89L2csICcnKTtcblxuICAgIHJldHVybiB1cmxWYXJpYW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKHdvcmtlclBhdGg6IHN0cmluZyl7XG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignU2VydmljZVdvcmtlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRQYXRoID0gbmV3IFVSTCh3b3JrZXJQYXRoLCBsb2NhdGlvbi5vcmlnaW4pLmhyZWY7IFxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHVwZGF0ZWRQYXRoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXI8VD4oKSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB7XG4gICAgICAgIHJlc29sdmU6IChudWxsIGFzIHVua25vd24pIGFzICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZCxcbiAgICAgICAgcmVqZWN0OiAobnVsbCBhcyB1bmtub3duKSBhcyAocmVhc29uPzogYW55KSA9PiB2b2lkLFxuICAgICAgICBwcm9taXNlOiAobnVsbCBhcyB1bmtub3duKSBhcyBQcm9taXNlPFQ+XG4gICAgfTtcblxuICAgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChkZWZlcnJlZCBhcyBhbnkpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKFxuICAgIHFzOiBzdHJpbmcgPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgZXhjbHVkZWRRdWVyeUtleXM6IHN0cmluZ1tdID0gW11cbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCB1bmRlZmluZWQge1xuICAgIGxldCBxdWVyeSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChxcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHF1ZXJ5ID0gcXNcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAubWFwKHZhcnMgPT4gdmFycy5zcGxpdCgnPScpKVxuICAgICAgICAgICAgLm1hcChwYWlycyA9PiBwYWlycy5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KSlcbiAgICAgICAgICAgIC5maWx0ZXIocGFpcnMgPT4gZXhjbHVkZWRRdWVyeUtleXMuaW5kZXhPZihwYWlyc1swXSkgPT09IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgocSwgcGFpcikgPT4gKHsgLi4ucSwgW3BhaXJbMF1dOiBwYWlyWzFdIH0pLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25ET01SZWFkeShmbjogKCkgPT4gdm9pZCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAvYW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfG1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBFdmVudFR5cGUsXG4gICAgYXNzZXJ0Q29uZmlnVmFsaWQsXG4gICAgdHJhY2tFdmVudFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7XG4gICAgZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcsXG4gICAgcGVyc2lzdENvbmZpZyxcbiAgICBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWRcbn0gZnJvbSAnLi4vY29yZS9zdG9yYWdlJztcblxuaW1wb3J0IHsgV29ya2VyTWVzc2FnZVR5cGUgfSBmcm9tICcuL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBicm9hZGNhc3RGcm9tV29ya2VyIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZ2V0UHVzaE9wc01hbmFnZXIgZnJvbSAnLi4vY29yZS9wdXNoJztcblxuLy8gTGl0dGxlIGJpdCBvZiBhIGhhY2ssIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNDg3NyNpc3N1ZWNvbW1lbnQtMzQwMjc5MjkzXG5kZWNsYXJlIHZhciBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgJiB7IEtVTVVMT1NfSU5JVD86IENvbmZpZ3VyYXRpb24gfTtcblxuZnVuY3Rpb24gd2l0aENvbnRleHQoZm46IChjdHg6IENvbnRleHQpID0+IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBnZXRDb250ZXh0RnJvbVN0b3JlZENvbmZpZygpLnRoZW4oY3R4ID0+IHtcbiAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGN0eCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGYuS1VNVUxPU19JTklUKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChzZWxmLktVTVVMT1NfSU5JVCk7XG5cbiAgICAgICAgcmV0dXJuIHBlcnNpc3RDb25maWcoc2VsZi5LVU1VTE9TX0lOSVQpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgICAgICAgIGN0eCA9IG5ldyBDb250ZXh0KGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gZm4oY3R4KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZVdvcmtlckdsb2JhbFNjb3BlL3NraXBXYWl0aW5nXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoKSA9PiB7XG4gICAgLy8gTUROOiBUaGUgcHJvbWlzZSB0aGF0IHNraXBXYWl0aW5nKCkgcmV0dXJucyBjYW4gYmUgc2FmZWx5IGlnbm9yZWRcbiAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG59KTtcblxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DbGllbnRzL2NsYWltXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLmpzb24oKTtcblxuICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBwYXlsb2FkLmRhdGE7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhWydrLm1lc3NhZ2UnXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBkYXRhWydrLm1lc3NhZ2UnXTtcbiAgICAgICAgY29uc3QgZGVsaXZlcnlUcmFja2VkID0gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX0RFTElWRVJFRCwge1xuICAgICAgICAgICAgdHlwZTogbWVzc2FnZURhdGEudHlwZSxcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlRGF0YS5kYXRhLmlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlY2VpdmVkRXZlbnRCcm9hZGNhc3QgPSBicm9hZGNhc3RGcm9tV29ya2VyKHtcbiAgICAgICAgICAgIHR5cGU6IFdvcmtlck1lc3NhZ2VUeXBlLktQdXNoUmVjZWl2ZWQsXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblNob3duID0gc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihcbiAgICAgICAgICAgIHBheWxvYWQudGl0bGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYm9keTogcGF5bG9hZC5tc2csXG4gICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBpY29uOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGltYWdlOiBwYXlsb2FkLmltYWdlID8/IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uU2hvd24sXG4gICAgICAgICAgICByZWNlaXZlZEV2ZW50QnJvYWRjYXN0LFxuICAgICAgICAgICAgZGVsaXZlcnlUcmFja2VkXG4gICAgICAgIF0pO1xuICAgIH0pO1xuXG4gICAgZXZlbnQud2FpdFVudGlsKHdvcmtDb21wbGV0ZWQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3Qgd29ya0NvbXBsZXRlZCA9IHdpdGhDb250ZXh0KGN0eCA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGV2ZW50Lm5vdGlmaWNhdGlvbjtcblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gbm90aWZpY2F0aW9uLmRhdGE7XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVsnay5tZXNzYWdlJ10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gZGF0YVsnay5tZXNzYWdlJ107XG4gICAgICAgIGNvbnN0IG9wZW5UcmFja2VkID0gdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX09QRU5FRCwge1xuICAgICAgICAgICAgdHlwZTogbWVzc2FnZURhdGEudHlwZSxcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlRGF0YS5kYXRhLmlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IHBheWxvYWQudXJsID8/ICcvJztcblxuICAgICAgICBjb25zdCBwYXlsb2FkUGVyc2lzdGVkID0gcGVyc2lzdE9wZW5lZFB1c2hQYXlsb2FkKHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBwYXlsb2FkUGVyc2lzdGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2luZG93T3BlbmVkID0gc2VsZi5jbGllbnRzLm9wZW5XaW5kb3codXJsKTtcblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFt3aW5kb3dPcGVuZWQsIG9wZW5UcmFja2VkXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZXZlbnQud2FpdFVudGlsKHdvcmtDb21wbGV0ZWQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN1YnNjcmlwdGlvbmNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdncmFudGVkJykge1xuICAgICAgICAvLyBUT0RPIG1hcmsgdW5zdWJzY3JpYmVkP1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd29ya0NvbXBsZXRlZCA9IHdpdGhDb250ZXh0KGN0eCA9PlxuICAgICAgICBnZXRQdXNoT3BzTWFuYWdlcihjdHgpLnRoZW4obWdyID0+IG1nci5wdXNoUmVnaXN0ZXIoY3R4KSlcbiAgICApO1xuXG4gICAgZXZlbnQud2FpdFVudGlsKHdvcmtDb21wbGV0ZWQpO1xufSk7XG4iLCJpbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL2NvcmUvcHVzaCc7XG5cbmV4cG9ydCBlbnVtIFdvcmtlck1lc3NhZ2VUeXBlIHtcbiAgICBLUHVzaFJlY2VpdmVkID0gJ0tQdXNoUmVjZWl2ZWQnXG59XG5leHBvcnQgdHlwZSBXb3JrZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IFdvcmtlck1lc3NhZ2VUeXBlLktQdXNoUmVjZWl2ZWQ7XG4gICAgZGF0YTogUHVzaFBheWxvYWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNLdW11bG9zV29ya2VyTWVzc2FnZShkYXRhOiBhbnkpOiBkYXRhIGlzIFdvcmtlck1lc3NhZ2Uge1xuICAgIHJldHVybiAoXG4gICAgICAgIChkYXRhIGFzIFdvcmtlck1lc3NhZ2UpLnR5cGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBXb3JrZXJNZXNzYWdlVHlwZVsoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlXSAhPT0gdW5kZWZpbmVkXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFdvcmtlck1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2luZyc7XG5cbi8vIExpdHRsZSBiaXQgb2YgYSBoYWNrLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTQ4NzcjaXNzdWVjb21tZW50LTM0MDI3OTI5M1xuZGVjbGFyZSB2YXIgc2VsZjogU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICYgeyBLVU1VTE9TX0lOSVQ/OiBDb25maWd1cmF0aW9uIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0RXZlbnRUb0NsaWVudChldmVudDogV29ya2VyTWVzc2FnZSwgY2xpZW50OiBDbGllbnQpOiB2b2lkIHtcbiAgICBjbGllbnQucG9zdE1lc3NhZ2UoZXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvYWRjYXN0RnJvbVdvcmtlcihldmVudDogV29ya2VyTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBvc3RFdmVudCA9IChjbGllbnQ6IENsaWVudCkgPT4gcG9zdEV2ZW50VG9DbGllbnQoZXZlbnQsIGNsaWVudCk7XG5cbiAgICByZXR1cm4gc2VsZi5jbGllbnRzLm1hdGNoQWxsKCkudGhlbihjbGllbnRzID0+IHtcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKHBvc3RFdmVudCk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvd29ya2VyL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9