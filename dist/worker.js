!(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                    enumerable: !0,
                    value: e
                }),
                2 & t && 'string' != typeof e)
            )
                for (var i in e)
                    n.d(
                        r,
                        i,
                        function(t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 5));
})([
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__assign) ||
                function() {
                    return (r =
                        Object.assign ||
                        function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i
                                    ) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
            i =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                a(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            try {
                                a(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof n
                                      ? t
                                      : new n(function(e) {
                                            e(t);
                                        })).then(s, u);
                        }
                        a((r = r.apply(e, t || [])).next());
                    });
                },
            o =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return (
                        (o = { next: u(0), throw: u(1), return: u(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function u(o) {
                        return function(u) {
                            return (function(o) {
                                if (n)
                                    throw new TypeError(
                                        'Generator is already executing.'
                                    );
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i =
                                                    2 & o[0]
                                                        ? r.return
                                                        : o[0]
                                                        ? r.throw ||
                                                          ((i = r.return) &&
                                                              i.call(r),
                                                          0)
                                                        : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((r = 0),
                                            i && (o = [2 & o[0], i.value]),
                                            o[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    { value: o[1], done: !1 }
                                                );
                                            case 5:
                                                s.label++,
                                                    (r = o[1]),
                                                    (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !((i = s.trys),
                                                    (i =
                                                        i.length > 0 &&
                                                        i[i.length - 1]) ||
                                                        (6 !== o[0] &&
                                                            2 !== o[0]))
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === o[0] &&
                                                    (!i ||
                                                        (o[1] > i[0] &&
                                                            o[1] < i[3]))
                                                ) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (
                                                    6 === o[0] &&
                                                    s.label < i[1]
                                                ) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && s.label < i[2]) {
                                                    (s.label = i[2]),
                                                        s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                };
                            })([o, u]);
                        };
                    }
                };
        (t.__esModule = !0),
            (t.getChannelDialogChannels = t.trackInstallDetails = t.trackEvent = t.clearUserAssociation = t.associateUser = t.getUserId = t.getInstallId = t.assertConfigValid = t.Context = t.SDKFeature = t.PromptPosition = t.ReminderTimeUnit = t.UiActionType = t.PromptTypeName = t.EventType = t.FP_CAPTURE_URL = t.DDL_BASE_URL = t.PUSH_BASE_URL = void 0);
        var s,
            u,
            a = n(1),
            c = n(2),
            l = '1.9.0';
        (t.PUSH_BASE_URL = 'https://push.kumulos.com'),
            (t.DDL_BASE_URL = 'https://links.kumulos.com'),
            (t.FP_CAPTURE_URL = 'https://pd.app.delivery'),
            (function(e) {
                (e.MESSAGE_DELIVERED = 'k.message.delivered'),
                    (e.MESSAGE_OPENED = 'k.message.opened'),
                    (e.PUSH_REGISTERED = 'k.push.deviceRegistered'),
                    (e.INSTALL_TRACKED = 'k.stats.installTracked'),
                    (e.USER_ASSOCIATED = 'k.stats.userAssociated'),
                    (e.USER_ASSOCIATION_CLEARED =
                        'k.stats.userAssociationCleared'),
                    (e.PAGE_VIEWED = 'k.pageViewed');
            })((s = t.EventType || (t.EventType = {}))),
            (function(e) {
                (e.BELL = 'bell'),
                    (e.ALERT = 'alert'),
                    (e.BANNER = 'banner'),
                    (e.DDL_BANNER = 'ddl_banner');
            })(t.PromptTypeName || (t.PromptTypeName = {})),
            (function(e) {
                (e.DECLINE = 'decline'),
                    (e.REMIND = 'remind'),
                    (e.DDL_OPEN_STORE = 'openStore'),
                    (e.DDL_OPEN_DEEPLINK = 'openDeeplink');
            })(t.UiActionType || (t.UiActionType = {})),
            (function(e) {
                (e.HOURS = 'hours'), (e.DAYS = 'days');
            })(t.ReminderTimeUnit || (t.ReminderTimeUnit = {})),
            (function(e) {
                (e.TOP_LEFT = 'top-left'),
                    (e.TOP_CENTER = 'top-center'),
                    (e.TOP_RIGHT = 'top-right'),
                    (e.CENTER_LEFT = 'center-left'),
                    (e.CENTER = 'center'),
                    (e.CENTER_RIGHT = 'center-right'),
                    (e.BOTTOM_LEFT = 'bottom-left'),
                    (e.BOTTOM_CENTER = 'bottom-center'),
                    (e.BOTTOM_RIGHT = 'bottom-right'),
                    (e.TOP = 'top'),
                    (e.BOTTOM = 'bottom');
            })(t.PromptPosition || (t.PromptPosition = {})),
            (function(e) {
                (e.PUSH = 'push'), (e.DDL = 'ddl');
            })((u = t.SDKFeature || (t.SDKFeature = {})));
        var f = (function() {
            function e(e) {
                var t, n, r, i;
                (this.apiKey = e.apiKey),
                    (this.secretKey = e.secretKey),
                    (this.vapidPublicKey = e.vapidPublicKey),
                    (this.authHeader =
                        'Basic ' + btoa(this.apiKey + ':' + this.secretKey)),
                    (this.serviceWorkerPath =
                        null !== (t = e.serviceWorkerPath) && void 0 !== t
                            ? t
                            : '/worker.js'),
                    (this.pushPrompts =
                        null !== (n = e.pushPrompts) && void 0 !== n
                            ? n
                            : 'auto'),
                    (this.autoResubscribe =
                        null === (r = e.autoResubscribe) || void 0 === r || r),
                    (this.features =
                        null !== (i = e.features) && void 0 !== i
                            ? i
                            : [u.PUSH]),
                    (this.subscribers = {});
            }
            return (
                (e.prototype.subscribe = function(e, t) {
                    this.subscribers[e] || (this.subscribers[e] = []),
                        this.subscribers[e].indexOf(t) > -1 ||
                            this.subscribers[e].push(t);
                }),
                (e.prototype.broadcast = function(e, t) {
                    if (this.subscribers[e])
                        for (var n = 0; n < this.subscribers[e].length; ++n)
                            this.subscribers[e][n]({ type: e, data: t });
                }),
                (e.prototype.hasFeature = function(e) {
                    return this.features.includes(e);
                }),
                e
            );
        })();
        (t.Context = f),
            (t.assertConfigValid = function(e) {
                if ('object' != typeof e) throw 'Config must be an object';
                var t =
                    Array.isArray(e.features) && e.features.length
                        ? e.features
                        : void 0;
                if (!t || t.includes(u.PUSH))
                    return (function(e) {
                        for (
                            var t = 0,
                                n = ['apiKey', 'secretKey', 'vapidPublicKey'];
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if ('string' != typeof e[r] || 0 === e[r].length)
                                throw "Required configuration key '" +
                                    r +
                                    "' must be non-empty string";
                        }
                        if (
                            e.serviceWorkerPath &&
                            'string' != typeof e.serviceWorkerPath &&
                            0 === e.serviceWorkerPath.length
                        )
                            throw "Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)";
                        if (
                            e.onPushReceived &&
                            'function' != typeof e.onPushReceived
                        )
                            throw "Optional configuration key 'onPushReceived' must be a function";
                        if (
                            e.onPushOpened &&
                            'function' != typeof e.onPushOpened
                        )
                            throw "Optional configuration key 'onPushOpened' must be a function";
                    })(e);
            });
        var d = void 0;
        function p() {
            return (
                d ||
                (d = c.get('installId').then(function(e) {
                    return e || c.set('installId', a.uuidv4());
                }))
            );
        }
        function h() {
            return c.get('userId').then(function(e) {
                return null != e ? e : p();
            });
        }
        function v(e, t, n) {
            return i(this, void 0, void 0, function() {
                var r, i, s, u;
                return o(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, p()];
                        case 1:
                            return (r = o.sent()), [4, h()];
                        case 2:
                            return (
                                (i = o.sent()),
                                (s = [
                                    {
                                        type: t,
                                        uuid: a.uuidv4(),
                                        timestamp: Date.now(),
                                        data: n,
                                        userId: i
                                    }
                                ]),
                                (u =
                                    'https://events.kumulos.com/v1/app-installs/' +
                                    r +
                                    '/events'),
                                e.broadcast('eventTracked', s),
                                [
                                    2,
                                    a.authedFetch(e, u, {
                                        method: 'POST',
                                        body: JSON.stringify(s)
                                    })
                                ]
                            );
                    }
                });
            });
        }
        (t.getInstallId = p),
            (t.getUserId = h),
            (t.associateUser = function(e, t, n) {
                return i(this, void 0, void 0, function() {
                    var r;
                    return o(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, c.set('userId', t)];
                            case 1:
                                return (
                                    i.sent(),
                                    (r = { id: t, attributes: n }),
                                    [
                                        2,
                                        v(
                                            e,
                                            s.USER_ASSOCIATED,
                                            r
                                        ).then(function(e) {})
                                    ]
                                );
                        }
                    });
                });
            }),
            (t.clearUserAssociation = function(e) {
                return i(this, void 0, void 0, function() {
                    var t;
                    return o(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, h()];
                            case 1:
                                return (
                                    (t = n.sent()),
                                    v(e, s.USER_ASSOCIATION_CLEARED, {
                                        oldUserIdentifier: t
                                    }),
                                    [2, c.del('userId')]
                                );
                        }
                    });
                });
            }),
            (t.trackEvent = v),
            (t.trackInstallDetails = function(e) {
                return i(this, void 0, void 0, function() {
                    var t, n, r, i;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                (t = {
                                    app: {
                                        bundle: location.host,
                                        version: '0.0.0',
                                        target: 2
                                    },
                                    sdk: { id: 10, version: l },
                                    runtime: {
                                        id: 8,
                                        version: navigator.userAgent
                                    },
                                    os: { id: 0, version: '0.0.0' },
                                    device: {
                                        name: navigator.userAgent,
                                        tz:
                                            ('undefined' != typeof Intl &&
                                                Intl.DateTimeFormat().resolvedOptions()
                                                    .timeZone) ||
                                            null,
                                        isSimulator: !1,
                                        locale: navigator.language
                                    }
                                }),
                                    (n = [
                                        l,
                                        t.app.bundle,
                                        t.device.tz,
                                        t.device.locale,
                                        t.device.name
                                    ]),
                                    (r = a.cyrb53(n.join('|'))),
                                    (o.label = 1);
                            case 1:
                                return (
                                    o.trys.push([1, 3, , 4]),
                                    [4, c.get('detailsHash')]
                                );
                            case 2:
                                return o.sent() === r
                                    ? [2, Promise.resolve()]
                                    : [3, 4];
                            case 3:
                                return (i = o.sent()), [2, Promise.reject(i)];
                            case 4:
                                return [
                                    2,
                                    v(e, s.INSTALL_TRACKED, t)
                                        .then(function() {
                                            return c.set('detailsHash', r);
                                        })
                                        .then(function() {})
                                ];
                        }
                    });
                });
            }),
            (t.getChannelDialogChannels = function(e, t) {
                return e
                    .filter(function(e) {
                        return (
                            'all' === t.presentedUuids ||
                            t.presentedUuids.includes(e.uuid)
                        );
                    })
                    .map(function(e) {
                        return {
                            channel: r({}, e),
                            checked:
                                e.subscribed.valueOf() ||
                                'all' === t.checkedUuids ||
                                t.checkedUuids.includes(e.uuid)
                        };
                    });
            });
    },
    function(e, t, n) {
        'use strict';
        var r,
            i =
                (this && this.__extends) ||
                ((r = function(e, t) {
                    return (r =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function(e, t) {
                                e.__proto__ = t;
                            }) ||
                        function(e, t) {
                            for (var n in t)
                                t.hasOwnProperty(n) && (e[n] = t[n]);
                        })(e, t);
                }),
                function(e, t) {
                    function n() {
                        this.constructor = e;
                    }
                    r(e, t),
                        (e.prototype =
                            null === t
                                ? Object.create(t)
                                : ((n.prototype = t.prototype), new n()));
                }),
            o =
                (this && this.__assign) ||
                function() {
                    return (o =
                        Object.assign ||
                        function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i
                                    ) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
            s =
                (this && this.__spreadArrays) ||
                function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                        e += arguments[t].length;
                    var r = Array(e),
                        i = 0;
                    for (t = 0; t < n; t++)
                        for (
                            var o = arguments[t], s = 0, u = o.length;
                            s < u;
                            s++, i++
                        )
                            r[i] = o[s];
                    return r;
                };
        (t.__esModule = !0),
            (t.isMobile = t.onDOMReady = t.parseQueryString = t.defer = t.registerServiceWorker = t.base64UrlEncode = t.authedFetchJson = t.AuthedFetchError = t.authedFetch = t.escapeRegExp = t.cyrb53 = t.isBrowserSupported = t.getBrowserName = t.uuidv4 = void 0);
        var u = n(0),
            a = [typeof Promise, typeof fetch, typeof indexedDB],
            c = {
                push: function() {
                    var e,
                        t = s(a);
                    'safari' === l()
                        ? t.push(
                              typeof (null === (e = window.safari) ||
                              void 0 === e
                                  ? void 0
                                  : e.pushNotification)
                          )
                        : t.push.apply(t, [
                              typeof Notification,
                              typeof navigator.serviceWorker,
                              typeof PushManager
                          ]);
                    return f(t);
                },
                ddl: function() {
                    return f(a);
                }
            };
        function l() {
            for (
                var e = navigator.userAgent.toLowerCase(),
                    t = 0,
                    n = ['edge', 'firefox', 'chrome', 'safari'];
                t < n.length;
                t++
            ) {
                var r = n[t];
                if (e.indexOf(r) > -1) return r;
            }
            return '';
        }
        function f(e) {
            return e.reduce(function(e, t) {
                return e && 'undefined' !== t;
            }, !0);
        }
        (t.uuidv4 = function() {
            return 'undefined' == typeof crypto
                ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                      /[xy]/g,
                      function(e) {
                          var t = (16 * Math.random()) | 0;
                          return ('x' == e ? t : (3 & t) | 8).toString(16);
                      }
                  )
                : ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
                      /[018]/g,
                      function(e) {
                          return (
                              Number(e) ^
                              (crypto.getRandomValues(new Uint8Array(1))[0] &
                                  (15 >> (Number(e) / 4)))
                          ).toString(16);
                      }
                  );
        }),
            (t.getBrowserName = l),
            (t.isBrowserSupported = function(e) {
                return (
                    (e = null != e ? e : []).length ||
                        e.push(u.SDKFeature.PUSH),
                    e.filter(function(e) {
                        return c[e]();
                    }).length > 0
                );
            });
        var d =
            Math.imul ||
            function(e, t) {
                var n = (4194303 & e) * (t |= 0);
                return (
                    4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n
                );
            };
        function p(e, t, n) {
            var r;
            void 0 === n && (n = { method: 'GET' });
            var i = null !== (r = n.headers) && void 0 !== r ? r : {};
            return (
                (n.headers = o(
                    {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: e.authHeader
                    },
                    i
                )),
                fetch(t, n)
            );
        }
        (t.cyrb53 = function(e, t) {
            void 0 === t && (t = 0);
            for (
                var n = 3735928559 ^ t, r = 1103547991 ^ t, i = 0, o = void 0;
                i < e.length;
                i++
            )
                (o = e.charCodeAt(i)),
                    (n = d(n ^ o, 2654435761)),
                    (r = d(r ^ o, 1597334677));
            return (
                (n =
                    d(n ^ (n >>> 16), 2246822507) ^
                    d(r ^ (r >>> 13), 3266489909)),
                4294967296 *
                    (2097151 &
                        (r =
                            d(r ^ (r >>> 16), 2246822507) ^
                            d(n ^ (n >>> 13), 3266489909))) +
                    (n >>> 0)
            );
        }),
            (t.escapeRegExp = function(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }),
            (t.authedFetch = p);
        var h = (function(e) {
            function t(t, n) {
                return (
                    e.call(this, 'authed fetch failed: ' + t + ', ' + n) || this
                );
            }
            return i(t, e), t;
        })(Error);
        (t.AuthedFetchError = h),
            (t.authedFetchJson = function(e, t, n) {
                return p(e, t, n).then(function(e) {
                    if (!e.ok) throw new h(e.status, e.statusText);
                    return e.json();
                });
            }),
            (t.base64UrlEncode = function(e) {
                var t = new Uint8Array(e);
                return btoa(
                    t.reduce(function(e, t) {
                        return e + String.fromCharCode(t);
                    }, '')
                )
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=/g, '');
            }),
            (t.registerServiceWorker = function(e) {
                return 'serviceWorker' in navigator
                    ? navigator.serviceWorker.register(e).then(function() {
                          return navigator.serviceWorker.ready;
                      })
                    : Promise.reject(
                          'ServiceWorker is not supported in this browser, aborting...'
                      );
            }),
            (t.defer = function() {
                var e = { resolve: null, reject: null, promise: null };
                return (
                    (e.promise = new Promise(function(t, n) {
                        (e.resolve = t), (e.reject = n);
                    })),
                    e
                );
            }),
            (t.parseQueryString = function(e, t) {
                void 0 === e && (e = location.search), void 0 === t && (t = []);
                var n = void 0;
                return (
                    e.length > 0 &&
                        (n = e
                            .substring(1)
                            .split('&')
                            .map(function(e) {
                                return e.split('=');
                            })
                            .map(function(e) {
                                return e.map(decodeURIComponent);
                            })
                            .filter(function(e) {
                                return -1 === t.indexOf(e[0]);
                            })
                            .reduce(function(e, t) {
                                var n;
                                return o(
                                    o({}, e),
                                    (((n = {})[t[0]] = t[1]), n)
                                );
                            }, {})),
                    n
                );
            }),
            (t.onDOMReady = function(e) {
                'loading' !== document.readyState
                    ? e()
                    : document.addEventListener('DOMContentLoaded', e);
            }),
            (t.isMobile = function() {
                return /android|iPhone|iPad|iPod|mobile/i.test(
                    navigator.userAgent
                );
            });
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                a(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            try {
                                a(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof n
                                      ? t
                                      : new n(function(e) {
                                            e(t);
                                        })).then(s, u);
                        }
                        a((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return (
                        (o = { next: u(0), throw: u(1), return: u(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function u(o) {
                        return function(u) {
                            return (function(o) {
                                if (n)
                                    throw new TypeError(
                                        'Generator is already executing.'
                                    );
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i =
                                                    2 & o[0]
                                                        ? r.return
                                                        : o[0]
                                                        ? r.throw ||
                                                          ((i = r.return) &&
                                                              i.call(r),
                                                          0)
                                                        : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((r = 0),
                                            i && (o = [2 & o[0], i.value]),
                                            o[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    { value: o[1], done: !1 }
                                                );
                                            case 5:
                                                s.label++,
                                                    (r = o[1]),
                                                    (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !((i = s.trys),
                                                    (i =
                                                        i.length > 0 &&
                                                        i[i.length - 1]) ||
                                                        (6 !== o[0] &&
                                                            2 !== o[0]))
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === o[0] &&
                                                    (!i ||
                                                        (o[1] > i[0] &&
                                                            o[1] < i[3]))
                                                ) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (
                                                    6 === o[0] &&
                                                    s.label < i[1]
                                                ) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && s.label < i[2]) {
                                                    (s.label = i[2]),
                                                        s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                };
                            })([o, u]);
                        };
                    }
                };
        (t.__esModule = !0),
            (t.getMostRecentlyOpenedPushPayload = t.persistOpenedPushPayload = t.getContextFromStoredConfig = t.getPromptReminder = t.persistPromptReminder = t.persistDDLConfig = t.persistConfig = t.del = t.set = t.get = void 0);
        var o = n(0),
            s = n(6),
            u = new s.Store('kumulos', 'default');
        function a(e) {
            return s.get(e, u);
        }
        function c(e, t) {
            return s.set(e, t, u).then(function() {
                return t;
            });
        }
        function l(e) {
            return s.del(e, u);
        }
        (t.get = a),
            (t.set = c),
            (t.del = l),
            (t.persistConfig = function(e) {
                return c('config', {
                    apiKey: e.apiKey,
                    secretKey: e.secretKey,
                    vapidPublicKey: e.vapidPublicKey,
                    serviceWorkerPath: e.serviceWorkerPath,
                    autoResubscribe: e.autoResubscribe,
                    pushPrompts: e.pushPrompts
                });
            }),
            (t.persistDDLConfig = function(e) {
                return c('ddlconfig', e);
            }),
            (t.persistPromptReminder = function(e, t) {
                return c('reminder.' + e, t);
            }),
            (t.getPromptReminder = function(e) {
                return r(this, void 0, void 0, function() {
                    return i(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, a('reminder.' + e)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t.getContextFromStoredConfig = function() {
                return a('config').then(function(e) {
                    return e ? new o.Context(e) : void 0;
                });
            }),
            (t.persistOpenedPushPayload = function(e) {
                return c('mostRecentOpenedPushPayload', e);
            }),
            (t.getMostRecentlyOpenedPushPayload = function() {
                return r(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, a('mostRecentOpenedPushPayload')];
                            case 1:
                                return (
                                    (e = t.sent()),
                                    [4, l('mostRecentOpenedPushPayload')]
                                );
                            case 2:
                                return t.sent(), [2, null != e ? e : void 0];
                        }
                    });
                });
            });
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__assign) ||
                function() {
                    return (r =
                        Object.assign ||
                        function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        i
                                    ) && (e[i] = t[i]);
                            return e;
                        }).apply(this, arguments);
                },
            i =
                (this && this.__importDefault) ||
                function(e) {
                    return e && e.__esModule ? e : { default: e };
                };
        (t.__esModule = !0),
            (t.notificationFromPayload = t.trackOpenFromQuery = t.MessageType = t.TokenType = void 0);
        var o,
            s,
            u = n(0),
            a = n(1),
            c = i(n(9)),
            l = i(n(10)),
            f = n(4);
        !(function(e) {
            (e[(e.W3C = 3)] = 'W3C'), (e[(e.SAFARI = 4)] = 'SAFARI');
        })(t.TokenType || (t.TokenType = {})),
            (function(e) {
                e[(e.PUSH = 1)] = 'PUSH';
            })((o = t.MessageType || (t.MessageType = {}))),
            (t.default = function(e) {
                if (s) return s;
                var t = a.getBrowserName();
                return (s =
                    'safari' === t
                        ? f.loadPlatformConfig(e).then(function(e) {
                              return new c.default(e);
                          })
                        : Promise.resolve(new l.default()));
            }),
            (t.trackOpenFromQuery = function(e) {
                if ('safari' === a.getBrowserName()) {
                    var t = a.parseQueryString();
                    (null == t ? void 0 : t.knid) &&
                        u.trackEvent(e, u.EventType.MESSAGE_OPENED, {
                            type: o.PUSH,
                            id: Number(t.knid)
                        });
                }
            }),
            (t.notificationFromPayload = function(e) {
                var t,
                    n,
                    i,
                    o = r({}, e.data);
                return (
                    delete o['k.message'],
                    {
                        id: e.data['k.message'].data.id,
                        title: e.title,
                        message: e.msg,
                        data: o,
                        url: null !== (t = e.url) && void 0 !== t ? t : void 0,
                        iconUrl:
                            null !== (n = e.icon) && void 0 !== n ? n : void 0,
                        imageUrl:
                            null !== (i = e.image) && void 0 !== i ? i : void 0
                    }
                );
            });
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                a(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            try {
                                a(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof n
                                      ? t
                                      : new n(function(e) {
                                            e(t);
                                        })).then(s, u);
                        }
                        a((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return (
                        (o = { next: u(0), throw: u(1), return: u(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function u(o) {
                        return function(u) {
                            return (function(o) {
                                if (n)
                                    throw new TypeError(
                                        'Generator is already executing.'
                                    );
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i =
                                                    2 & o[0]
                                                        ? r.return
                                                        : o[0]
                                                        ? r.throw ||
                                                          ((i = r.return) &&
                                                              i.call(r),
                                                          0)
                                                        : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((r = 0),
                                            i && (o = [2 & o[0], i.value]),
                                            o[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    { value: o[1], done: !1 }
                                                );
                                            case 5:
                                                s.label++,
                                                    (r = o[1]),
                                                    (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !((i = s.trys),
                                                    (i =
                                                        i.length > 0 &&
                                                        i[i.length - 1]) ||
                                                        (6 !== o[0] &&
                                                            2 !== o[0]))
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === o[0] &&
                                                    (!i ||
                                                        (o[1] > i[0] &&
                                                            o[1] < i[3]))
                                                ) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (
                                                    6 === o[0] &&
                                                    s.label < i[1]
                                                ) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && s.label < i[2]) {
                                                    (s.label = i[2]),
                                                        s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                };
                            })([o, u]);
                        };
                    }
                };
        (t.__esModule = !0),
            (t.deleteDdlBannerConfigFromCache = t.loadDdlConfig = t.loadPlatformConfig = void 0);
        var o,
            s = n(0),
            u = n(2),
            a = n(1),
            c = function(e) {
                return {
                    CONFIG_CACHE_KEY: e + 'Config',
                    CONFIG_CACHE_KEY_UPDATED: e + 'ConfigUpdated'
                };
            };
        function l(e, t, n) {
            var o;
            return r(this, void 0, void 0, function() {
                var r, s, l, f, d;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return (r = c(t)), [4, u.get(r.CONFIG_CACHE_KEY)];
                        case 1:
                            return (
                                (s = i.sent()),
                                [4, u.get(r.CONFIG_CACHE_KEY_UPDATED)]
                            );
                        case 2:
                            if (
                                ((l =
                                    null !== (o = i.sent()) && void 0 !== o
                                        ? o
                                        : 0),
                                (f = !1),
                                !(Date.now() - l > 36e5))
                            )
                                return [3, 6];
                            i.label = 3;
                        case 3:
                            return (
                                i.trys.push([3, 5, , 6]),
                                [4, a.authedFetchJson(n, e)]
                            );
                        case 4:
                            return (s = i.sent()), (f = !0), [3, 6];
                        case 5:
                            return (d = i.sent()), console.warn(d), [3, 6];
                        case 6:
                            return f
                                ? [4, u.set(r.CONFIG_CACHE_KEY, s)]
                                : [3, 9];
                        case 7:
                            return (
                                i.sent(),
                                [
                                    4,
                                    u.set(
                                        r.CONFIG_CACHE_KEY_UPDATED,
                                        Date.now()
                                    )
                                ]
                            );
                        case 8:
                            i.sent(), (i.label = 9);
                        case 9:
                            return [2, s];
                    }
                });
            });
        }
        !(function(e) {
            (e.PLATFORM = 'platform'), (e.DDL = 'ddl');
        })(o || (o = {})),
            (t.loadPlatformConfig = function(e) {
                var t;
                return r(this, void 0, void 0, function() {
                    return i(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [
                                    4,
                                    l(
                                        s.PUSH_BASE_URL + '/v1/web/config',
                                        o.PLATFORM,
                                        e
                                    )
                                ];
                            case 1:
                                return [
                                    2,
                                    null !== (t = n.sent()) && void 0 !== t
                                        ? t
                                        : {}
                                ];
                        }
                    });
                });
            }),
            (t.loadDdlConfig = function(e) {
                return r(this, void 0, void 0, function() {
                    var t, n;
                    return i(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, s.getInstallId()];
                            case 1:
                                (t = r.sent()), (r.label = 2);
                            case 2:
                                return (
                                    r.trys.push([2, 4, , 5]),
                                    [
                                        4,
                                        l(
                                            s.DDL_BASE_URL +
                                                '/v1/banners?webInstallId=' +
                                                t,
                                            o.DDL,
                                            e
                                        )
                                    ]
                                );
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                return (
                                    (n = r.sent()),
                                    console.warn(
                                        'loadDdlConfig: failed to load Deferred DeepLink configuration',
                                        n.message
                                    ),
                                    [3, 5]
                                );
                            case 5:
                                return [2];
                        }
                    });
                });
            }),
            (t.deleteDdlBannerConfigFromCache = function(e) {
                return r(this, void 0, void 0, function() {
                    var t, n;
                    return i(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return (
                                    (t = c(o.DDL)),
                                    [4, u.get(t.CONFIG_CACHE_KEY)]
                                );
                            case 1:
                                return (n = r.sent())
                                    ? ((n = n.filter(function(t) {
                                          return t.uuid !== e;
                                      })),
                                      [4, u.set(t.CONFIG_CACHE_KEY, n)])
                                    : [2];
                            case 2:
                                return r.sent(), [2];
                        }
                    });
                });
            });
    },
    function(e, t, n) {
        'use strict';
        var r =
            (this && this.__importDefault) ||
            function(e) {
                return e && e.__esModule ? e : { default: e };
            };
        t.__esModule = !0;
        var i = n(0),
            o = n(2),
            s = n(7),
            u = n(8),
            a = r(n(3));
        function c(e) {
            return o.getContextFromStoredConfig().then(function(t) {
                return t
                    ? e(t)
                    : self.KUMULOS_INIT
                    ? (i.assertConfigValid(self.KUMULOS_INIT),
                      o.persistConfig(self.KUMULOS_INIT).then(function(n) {
                          return (t = new i.Context(n)), e(t);
                      }))
                    : void 0;
            });
        }
        self.addEventListener('install', function() {
            self.skipWaiting();
        }),
            self.addEventListener('activate', function(e) {
                e.waitUntil(self.clients.claim());
            }),
            self.addEventListener('push', function(e) {
                var t = c(function(t) {
                    var n, r;
                    if (e.data) {
                        var o = e.data.json();
                        if (o) {
                            var a = o.data;
                            if (a && a['k.message']) {
                                var c = a['k.message'],
                                    l = i.trackEvent(
                                        t,
                                        i.EventType.MESSAGE_DELIVERED,
                                        { type: c.type, id: c.data.id }
                                    ),
                                    f = u.broadcastFromWorker({
                                        type: s.WorkerMessageType.KPushReceived,
                                        data: o
                                    }),
                                    d = self.registration.showNotification(
                                        o.title,
                                        {
                                            body: o.msg,
                                            data: o,
                                            icon:
                                                null !== (n = o.icon) &&
                                                void 0 !== n
                                                    ? n
                                                    : void 0,
                                            image:
                                                null !== (r = o.image) &&
                                                void 0 !== r
                                                    ? r
                                                    : void 0,
                                            requireInteraction: !0
                                        }
                                    );
                                return Promise.all([d, f, l]);
                            }
                        }
                    }
                });
                e.waitUntil(t);
            }),
            self.addEventListener('notificationclick', function(e) {
                var t = c(function(t) {
                    var n,
                        r = e.notification,
                        s = r.data;
                    if (s) {
                        var u = s.data;
                        if (u && u['k.message']) {
                            r.close();
                            var a = u['k.message'],
                                c = i.trackEvent(
                                    t,
                                    i.EventType.MESSAGE_OPENED,
                                    { type: a.type, id: a.data.id }
                                ),
                                l =
                                    null !== (n = s.url) && void 0 !== n
                                        ? n
                                        : '/';
                            return o
                                .persistOpenedPushPayload(s)
                                .then(function() {
                                    var e = self.clients.openWindow(l);
                                    return Promise.all([e, c]);
                                });
                        }
                    }
                });
                e.waitUntil(t);
            }),
            self.addEventListener('pushsubscriptionchange', function(e) {
                if ('granted' === Notification.permission) {
                    var t = c(function(e) {
                        return a.default(e).then(function(t) {
                            return t.pushRegister(e);
                        });
                    });
                    e.waitUntil(t);
                }
            });
    },
    function(e, t, n) {
        'use strict';
        (t.__esModule = !0),
            (t.keys = t.clear = t.del = t.set = t.get = t.Store = void 0);
        var r,
            i = (function() {
                function e(e, t) {
                    void 0 === e && (e = 'keyval-store'),
                        void 0 === t && (t = 'keyval'),
                        (this.storeName = t),
                        (this._dbp = new Promise(function(n, r) {
                            var i = indexedDB.open(e, 1);
                            (i.onerror = function() {
                                return r(i.error);
                            }),
                                (i.onsuccess = function() {
                                    return n(i.result);
                                }),
                                (i.onupgradeneeded = function() {
                                    i.result.createObjectStore(t);
                                });
                        }));
                }
                return (
                    (e.prototype._withIDBStore = function(e, t) {
                        var n = this;
                        return this._dbp.then(function(r) {
                            return new Promise(function(i, o) {
                                var s = r.transaction(n.storeName, e);
                                (s.oncomplete = function() {
                                    return i();
                                }),
                                    (s.onabort = s.onerror = function() {
                                        return o(s.error);
                                    }),
                                    t(s.objectStore(n.storeName));
                            });
                        });
                    }),
                    e
                );
            })();
        function o() {
            return r || (r = new i()), r;
        }
        (t.Store = i),
            (t.get = function(e, t) {
                var n;
                return (
                    void 0 === t && (t = o()),
                    t
                        ._withIDBStore('readonly', function(t) {
                            n = t.get(e);
                        })
                        .then(function() {
                            return n.result;
                        })
                );
            }),
            (t.set = function(e, t, n) {
                return (
                    void 0 === n && (n = o()),
                    n._withIDBStore('readwrite', function(n) {
                        n.put(t, e);
                    })
                );
            }),
            (t.del = function(e, t) {
                return (
                    void 0 === t && (t = o()),
                    t._withIDBStore('readwrite', function(t) {
                        t.delete(e);
                    })
                );
            }),
            (t.clear = function(e) {
                return (
                    void 0 === e && (e = o()),
                    e._withIDBStore('readwrite', function(e) {
                        e.clear();
                    })
                );
            }),
            (t.keys = function(e) {
                void 0 === e && (e = o());
                var t = [];
                return e
                    ._withIDBStore('readonly', function(e) {
                        (e.openKeyCursor || e.openCursor).call(
                            e
                        ).onsuccess = function() {
                            this.result &&
                                (t.push(this.result.key),
                                this.result.continue());
                        };
                    })
                    .then(function() {
                        return t;
                    });
            });
    },
    function(e, t, n) {
        'use strict';
        var r;
        (t.__esModule = !0),
            (t.isKumulosWorkerMessage = t.WorkerMessageType = void 0),
            (function(e) {
                e.KPushReceived = 'KPushReceived';
            })((r = t.WorkerMessageType || (t.WorkerMessageType = {}))),
            (t.isKumulosWorkerMessage = function(e) {
                return void 0 !== e.type && void 0 !== r[e.type];
            });
    },
    function(e, t, n) {
        'use strict';
        function r(e, t) {
            t.postMessage(e);
        }
        (t.__esModule = !0),
            (t.broadcastFromWorker = t.postEventToClient = void 0),
            (t.postEventToClient = r),
            (t.broadcastFromWorker = function(e) {
                var t = function(t) {
                    return r(e, t);
                };
                return self.clients.matchAll().then(function(e) {
                    e.forEach(t);
                });
            });
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                a(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            try {
                                a(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof n
                                      ? t
                                      : new n(function(e) {
                                            e(t);
                                        })).then(s, u);
                        }
                        a((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return (
                        (o = { next: u(0), throw: u(1), return: u(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function u(o) {
                        return function(u) {
                            return (function(o) {
                                if (n)
                                    throw new TypeError(
                                        'Generator is already executing.'
                                    );
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i =
                                                    2 & o[0]
                                                        ? r.return
                                                        : o[0]
                                                        ? r.throw ||
                                                          ((i = r.return) &&
                                                              i.call(r),
                                                          0)
                                                        : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((r = 0),
                                            i && (o = [2 & o[0], i.value]),
                                            o[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    { value: o[1], done: !1 }
                                                );
                                            case 5:
                                                s.label++,
                                                    (r = o[1]),
                                                    (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !((i = s.trys),
                                                    (i =
                                                        i.length > 0 &&
                                                        i[i.length - 1]) ||
                                                        (6 !== o[0] &&
                                                            2 !== o[0]))
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === o[0] &&
                                                    (!i ||
                                                        (o[1] > i[0] &&
                                                            o[1] < i[3]))
                                                ) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (
                                                    6 === o[0] &&
                                                    s.label < i[1]
                                                ) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && s.label < i[2]) {
                                                    (s.label = i[2]),
                                                        s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                };
                            })([o, u]);
                        };
                    }
                };
        t.__esModule = !0;
        var o = n(0),
            s = n(3),
            u = n(1),
            a = n(2),
            c = n(4);
        function l(e, t) {
            return u.cyrb53(e.apiKey + ':' + t);
        }
        var f = (function() {
            function e(e) {
                this.cfg = e;
            }
            return (
                (e.prototype.requestNotificationPermission = function(e) {
                    var t,
                        n = o.PUSH_BASE_URL + '/safari/' + e.apiKey,
                        r = u.defer();
                    return (
                        null === (t = window.safari) ||
                            void 0 === t ||
                            t.pushNotification.requestPermission(
                                n,
                                this.cfg.safariPushId,
                                {},
                                function(e) {
                                    r.resolve(e.permission);
                                }
                            ),
                        r.promise
                    );
                }),
                (e.prototype.pushRegister = function(e) {
                    var t;
                    return r(this, void 0, void 0, function() {
                        var n, r, u, f;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, c.loadPlatformConfig(e)];
                                case 1:
                                    return (
                                        (n = i.sent()),
                                        (r =
                                            null === (t = window.safari) ||
                                            void 0 === t
                                                ? void 0
                                                : t.pushNotification.permission(
                                                      n.safariPushId
                                                  )) && r.deviceToken
                                            ? [4, a.get('pushTokenHash')]
                                            : [2]
                                    );
                                case 2:
                                    return (
                                        (u = i.sent()),
                                        (f = l(e, r.deviceToken)),
                                        u === f
                                            ? [2]
                                            : [
                                                  4,
                                                  o.trackEvent(
                                                      e,
                                                      o.EventType
                                                          .PUSH_REGISTERED,
                                                      {
                                                          type:
                                                              s.TokenType
                                                                  .SAFARI,
                                                          token: r.deviceToken,
                                                          bundleId:
                                                              n.safariPushId
                                                      }
                                                  )
                                              ]
                                    );
                                case 3:
                                    return (
                                        i.sent(), [4, a.set('pushTokenHash', f)]
                                    );
                                case 4:
                                    return i.sent(), [2];
                            }
                        });
                    });
                }),
                (e.prototype.requestPermissionAndRegisterForPush = function(e) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [
                                        4,
                                        this.requestNotificationPermission(e)
                                    ];
                                case 1:
                                    switch (t.sent()) {
                                        case 'default':
                                            return [2, 'unsubscribed'];
                                        case 'denied':
                                            return [2, 'blocked'];
                                    }
                                    t.label = 2;
                                case 2:
                                    return (
                                        t.trys.push([2, 4, , 5]),
                                        [4, this.pushRegister(e)]
                                    );
                                case 3:
                                    return t.sent(), [2, 'subscribed'];
                                case 4:
                                    return t.sent(), [2, 'unsubscribed'];
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.getCurrentSubscriptionState = function(e) {
                    var t, n;
                    return r(this, void 0, void 0, function() {
                        var r, o, s, u;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, c.loadPlatformConfig(e)];
                                case 1:
                                    return (
                                        (r = i.sent()),
                                        (o =
                                            null === (t = window.safari) ||
                                            void 0 === t
                                                ? void 0
                                                : t.pushNotification.permission(
                                                      r.safariPushId
                                                  )) &&
                                        'denied' !==
                                            (null == o ? void 0 : o.permission)
                                            ? [4, a.get('pushTokenHash')]
                                            : [2, 'blocked']
                                    );
                                case 2:
                                    return (
                                        (s = i.sent()),
                                        (u = l(
                                            e,
                                            null !== (n = o.deviceToken) &&
                                                void 0 !== n
                                                ? n
                                                : ''
                                        )),
                                        s === u && 'granted' === o.permission
                                            ? [2, 'subscribed']
                                            : [2, 'unsubscribed']
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.handleAutoResubscription = function(e) {
                    var t;
                    return r(this, void 0, void 0, function() {
                        var n, r, o, s;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return e.autoResubscribe &&
                                        this.cfg.safariPushId
                                        ? [4, c.loadPlatformConfig(e)]
                                        : [2];
                                case 1:
                                    return (
                                        (n = i.sent()),
                                        (r =
                                            null === (t = window.safari) ||
                                            void 0 === t
                                                ? void 0
                                                : t.pushNotification.permission(
                                                      n.safariPushId
                                                  )) &&
                                        'granted' === r.permission &&
                                        r.deviceToken
                                            ? [4, a.get('pushTokenHash')]
                                            : [2]
                                    );
                                case 2:
                                    return (
                                        (o = i.sent()),
                                        (s = l(e, r.deviceToken)),
                                        o === s
                                            ? [2]
                                            : [2, this.pushRegister(e)]
                                    );
                            }
                        });
                    });
                }),
                e
            );
        })();
        t.default = f;
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                a(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            try {
                                a(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            var t;
                            e.done
                                ? i(e.value)
                                : ((t = e.value),
                                  t instanceof n
                                      ? t
                                      : new n(function(e) {
                                            e(t);
                                        })).then(s, u);
                        }
                        a((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: []
                        };
                    return (
                        (o = { next: u(0), throw: u(1), return: u(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function u(o) {
                        return function(u) {
                            return (function(o) {
                                if (n)
                                    throw new TypeError(
                                        'Generator is already executing.'
                                    );
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i =
                                                    2 & o[0]
                                                        ? r.return
                                                        : o[0]
                                                        ? r.throw ||
                                                          ((i = r.return) &&
                                                              i.call(r),
                                                          0)
                                                        : r.next) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (
                                            ((r = 0),
                                            i && (o = [2 & o[0], i.value]),
                                            o[0])
                                        ) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    { value: o[1], done: !1 }
                                                );
                                            case 5:
                                                s.label++,
                                                    (r = o[1]),
                                                    (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !((i = s.trys),
                                                    (i =
                                                        i.length > 0 &&
                                                        i[i.length - 1]) ||
                                                        (6 !== o[0] &&
                                                            2 !== o[0]))
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (
                                                    3 === o[0] &&
                                                    (!i ||
                                                        (o[1] > i[0] &&
                                                            o[1] < i[3]))
                                                ) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (
                                                    6 === o[0] &&
                                                    s.label < i[1]
                                                ) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && s.label < i[2]) {
                                                    (s.label = i[2]),
                                                        s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(),
                                                    s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                };
                            })([o, u]);
                        };
                    }
                };
        t.__esModule = !0;
        var o = n(0),
            s = n(3),
            u = n(1),
            a = n(2);
        function c(e, t) {
            var n = t.options.applicationServerKey;
            return !!n && u.base64UrlEncode(n) === e;
        }
        function l() {
            return r(this, void 0, void 0, function() {
                return i(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [
                                4,
                                navigator.serviceWorker.getRegistration()
                            ];
                        case 1:
                            return e.sent()
                                ? [2, navigator.serviceWorker.ready]
                                : [
                                      2,
                                      Promise.reject(
                                          'No service worker registration'
                                      )
                                  ];
                    }
                });
            });
        }
        function f(e, t) {
            return u.cyrb53(e.apiKey + ':' + t.endpoint);
        }
        var d = (function() {
            function e() {}
            return (
                (e.prototype.requestNotificationPermission = function(e) {
                    return r(this, void 0, void 0, function() {
                        var e;
                        return i(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if ('undefined' == typeof Notification)
                                        return [
                                            2,
                                            Promise.reject(
                                                'Notifications are not supported in this browser, aborting...'
                                            )
                                        ];
                                    t.label = 1;
                                case 1:
                                    return (
                                        t.trys.push([1, 3, , 4]),
                                        [4, Notification.requestPermission()]
                                    );
                                case 2:
                                    return [2, t.sent()];
                                case 3:
                                    return (
                                        (e = t.sent()),
                                        console.error(e),
                                        [2, Promise.reject(e)]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.pushRegister = function(e) {
                    return r(this, void 0, void 0, function() {
                        var t, n, r, u, d, p, h;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 'PushManager' in window
                                        ? [4, l()]
                                        : [
                                              2,
                                              Promise.reject(
                                                  'Push notifications are not supported in this browser'
                                              )
                                          ];
                                case 1:
                                    return [
                                        4,
                                        (t = i.sent()).pushManager.getSubscription()
                                    ];
                                case 2:
                                    return !(n = i.sent()) ||
                                        c(e.vapidPublicKey, n)
                                        ? [3, 4]
                                        : [
                                              4,
                                              null == n
                                                  ? void 0
                                                  : n.unsubscribe()
                                          ];
                                case 3:
                                    i.sent(), (i.label = 4);
                                case 4:
                                    return [
                                        4,
                                        t.pushManager.subscribe({
                                            applicationServerKey:
                                                e.vapidPublicKey,
                                            userVisibleOnly: !0
                                        })
                                    ];
                                case 5:
                                    return (
                                        (r = i.sent()),
                                        (u = f(e, r)),
                                        (d = r.expirationTime),
                                        [4, a.get('pushEndpointHash')]
                                    );
                                case 6:
                                    return (
                                        (p = i.sent()),
                                        [4, a.get('pushExpiresAt')]
                                    );
                                case 7:
                                    return (
                                        (h = i.sent()),
                                        p === u && (!h || h > Date.now())
                                            ? [2]
                                            : [
                                                  4,
                                                  o.trackEvent(
                                                      e,
                                                      o.EventType
                                                          .PUSH_REGISTERED,
                                                      {
                                                          type: s.TokenType.W3C,
                                                          token: r
                                                      }
                                                  )
                                              ]
                                    );
                                case 8:
                                    return (
                                        i.sent(),
                                        [4, a.set('pushEndpointHash', u)]
                                    );
                                case 9:
                                    return (
                                        i.sent(), [4, a.set('pushExpiresAt', d)]
                                    );
                                case 10:
                                    return i.sent(), [2];
                            }
                        });
                    });
                }),
                (e.prototype.requestPermissionAndRegisterForPush = function(e) {
                    return r(this, void 0, void 0, function() {
                        return i(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [
                                        4,
                                        this.requestNotificationPermission(e)
                                    ];
                                case 1:
                                    switch (t.sent()) {
                                        case 'default':
                                            return [2, 'unsubscribed'];
                                        case 'denied':
                                            return [2, 'blocked'];
                                    }
                                    t.label = 2;
                                case 2:
                                    return (
                                        t.trys.push([2, 4, , 5]),
                                        [4, this.pushRegister(e)]
                                    );
                                case 3:
                                    return t.sent(), [2, 'subscribed'];
                                case 4:
                                    return t.sent(), [2, 'unsubscribed'];
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.getCurrentSubscriptionState = function(e) {
                    return r(this, void 0, void 0, function() {
                        var t, n, r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 'denied' ===
                                        (t = Notification.permission)
                                        ? [2, 'blocked']
                                        : [4, l()];
                                case 1:
                                    return [
                                        4,
                                        null == (n = i.sent())
                                            ? void 0
                                            : n.pushManager.getSubscription()
                                    ];
                                case 2:
                                    return (r = i.sent()) &&
                                        'granted' === t &&
                                        c(e.vapidPublicKey, r)
                                        ? [2, 'subscribed']
                                        : [2, 'unsubscribed'];
                            }
                        });
                    });
                }),
                (e.prototype.handleAutoResubscription = function(e) {
                    return r(this, void 0, void 0, function() {
                        var t, n, r, o;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return e.autoResubscribe
                                        ? 'granted' !== Notification.permission
                                            ? [2]
                                            : [4, a.get('pushEndpointHash')]
                                        : [2];
                                case 1:
                                    return (
                                        (t = i.sent()),
                                        [4, a.get('pushExpiresAt')]
                                    );
                                case 2:
                                    return (n = i.sent()), [4, l()];
                                case 3:
                                    return [
                                        4,
                                        i.sent().pushManager.getSubscription()
                                    ];
                                case 4:
                                    if (
                                        ((r = i.sent()),
                                        (o = void 0),
                                        r && (o = f(e, r)),
                                        void 0 !== t &&
                                            t === o &&
                                            r &&
                                            c(e.vapidPublicKey, r) &&
                                            (null == n || n > Date.now()))
                                    )
                                        return [2];
                                    try {
                                        return [2, this.pushRegister(e)];
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    return [2];
                            }
                        });
                    });
                }),
                e
            );
        })();
        t.default = d;
    }
]);
