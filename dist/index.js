!(function(t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define([], e)
        : 'object' == typeof exports
        ? (exports.kumulos = e())
        : (t.kumulos = e());
})(window, function() {
    return (function(t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, r) {
                n.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (n.t = function(t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function(e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function(t) {
                var e =
                    t && t.__esModule
                        ? function() {
                              return t.default;
                          }
                        : function() {
                              return t;
                          };
                return n.d(e, 'a', e), e;
            }),
            (n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 15))
        );
    })([
        function(t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'render', function() {
                    return L;
                }),
                n.d(e, 'hydrate', function() {
                    return F;
                }),
                n.d(e, 'createElement', function() {
                    return h;
                }),
                n.d(e, 'h', function() {
                    return h;
                }),
                n.d(e, 'Fragment', function() {
                    return v;
                }),
                n.d(e, 'createRef', function() {
                    return m;
                }),
                n.d(e, 'isValidElement', function() {
                    return o;
                }),
                n.d(e, 'Component', function() {
                    return y;
                }),
                n.d(e, 'cloneElement', function() {
                    return j;
                }),
                n.d(e, 'createContext', function() {
                    return B;
                }),
                n.d(e, 'toChildArray', function() {
                    return C;
                }),
                n.d(e, 'options', function() {
                    return r;
                });
            var r,
                o,
                i,
                s,
                u,
                a,
                c = {},
                l = [],
                p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
            function f(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function d(t) {
                var e = t.parentNode;
                e && e.removeChild(t);
            }
            function h(t, e, n) {
                var r,
                    o,
                    i,
                    s = arguments,
                    u = {};
                for (i in e)
                    'key' == i
                        ? (r = e[i])
                        : 'ref' == i
                        ? (o = e[i])
                        : (u[i] = e[i]);
                if (arguments.length > 3)
                    for (n = [n], i = 3; i < arguments.length; i++)
                        n.push(s[i]);
                if (
                    (null != n && (u.children = n),
                    'function' == typeof t && null != t.defaultProps)
                )
                    for (i in t.defaultProps)
                        void 0 === u[i] && (u[i] = t.defaultProps[i]);
                return _(t, u, r, o, null);
            }
            function _(t, e, n, o, i) {
                var s = {
                    type: t,
                    props: e,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == i ? ++r.__v : i
                };
                return null != r.vnode && r.vnode(s), s;
            }
            function m() {
                return { current: null };
            }
            function v(t) {
                return t.children;
            }
            function y(t, e) {
                (this.props = t), (this.context = e);
            }
            function b(t, e) {
                if (null == e)
                    return t.__ ? b(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return 'function' == typeof t.type ? b(t) : null;
            }
            function g(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (
                        t.__e = t.__c.base = null, e = 0;
                        e < t.__k.length;
                        e++
                    )
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break;
                        }
                    return g(t);
                }
            }
            function k(t) {
                ((!t.__d && (t.__d = !0) && i.push(t) && !x.__r++) ||
                    u !== r.debounceRendering) &&
                    ((u = r.debounceRendering) || s)(x);
            }
            function x() {
                for (var t; (x.__r = i.length); )
                    (t = i.sort(function(t, e) {
                        return t.__v.__b - e.__v.__b;
                    })),
                        (i = []),
                        t.some(function(t) {
                            var e, n, r, o, i, s;
                            t.__d &&
                                ((i = (o = (e = t).__v).__e),
                                (s = e.__P) &&
                                    ((n = []),
                                    ((r = f({}, o)).__v = o.__v + 1),
                                    O(
                                        s,
                                        o,
                                        r,
                                        e.__n,
                                        void 0 !== s.ownerSVGElement,
                                        null != o.__h ? [i] : null,
                                        n,
                                        null == i ? b(o) : i,
                                        o.__h
                                    ),
                                    D(n, o),
                                    o.__e != i && g(o)));
                        });
            }
            function w(t, e, n, r, o, i, s, u, a, p) {
                var f,
                    d,
                    h,
                    m,
                    y,
                    g,
                    k,
                    x = (r && r.__k) || l,
                    w = x.length;
                for (n.__k = [], f = 0; f < e.length; f++)
                    if (
                        null !=
                        (m = n.__k[f] =
                            null == (m = e[f]) || 'boolean' == typeof m
                                ? null
                                : 'string' == typeof m ||
                                  'number' == typeof m ||
                                  'bigint' == typeof m
                                ? _(null, m, null, null, m)
                                : Array.isArray(m)
                                ? _(v, { children: m }, null, null, null)
                                : m.__b > 0
                                ? _(m.type, m.props, m.key, null, m.__v)
                                : m)
                    ) {
                        if (
                            ((m.__ = n),
                            (m.__b = n.__b + 1),
                            null === (h = x[f]) ||
                                (h && m.key == h.key && m.type === h.type))
                        )
                            x[f] = void 0;
                        else
                            for (d = 0; d < w; d++) {
                                if (
                                    (h = x[d]) &&
                                    m.key == h.key &&
                                    m.type === h.type
                                ) {
                                    x[d] = void 0;
                                    break;
                                }
                                h = null;
                            }
                        O(t, m, (h = h || c), o, i, s, u, a, p),
                            (y = m.__e),
                            (d = m.ref) &&
                                h.ref != d &&
                                (k || (k = []),
                                h.ref && k.push(h.ref, null, m),
                                k.push(d, m.__c || y, m)),
                            null != y
                                ? (null == g && (g = y),
                                  'function' == typeof m.type &&
                                  null != m.__k &&
                                  m.__k === h.__k
                                      ? (m.__d = a = P(m, a, t))
                                      : (a = S(t, m, h, x, y, a)),
                                  p || 'option' !== n.type
                                      ? 'function' == typeof n.type &&
                                        (n.__d = a)
                                      : (t.value = ''))
                                : a &&
                                  h.__e == a &&
                                  a.parentNode != t &&
                                  (a = b(h));
                    }
                for (n.__e = g, f = w; f--; )
                    null != x[f] &&
                        ('function' == typeof n.type &&
                            null != x[f].__e &&
                            x[f].__e == n.__d &&
                            (n.__d = b(r, f + 1)),
                        U(x[f], x[f]));
                if (k) for (f = 0; f < k.length; f++) N(k[f], k[++f], k[++f]);
            }
            function P(t, e, n) {
                var r, o;
                for (r = 0; r < t.__k.length; r++)
                    (o = t.__k[r]) &&
                        ((o.__ = t),
                        (e =
                            'function' == typeof o.type
                                ? P(o, e, n)
                                : S(n, o, o, t.__k, o.__e, e)));
                return e;
            }
            function C(t, e) {
                return (
                    (e = e || []),
                    null == t ||
                        'boolean' == typeof t ||
                        (Array.isArray(t)
                            ? t.some(function(t) {
                                  C(t, e);
                              })
                            : e.push(t)),
                    e
                );
            }
            function S(t, e, n, r, o, i) {
                var s, u, a;
                if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0);
                else if (null == n || o != i || null == o.parentNode)
                    t: if (null == i || i.parentNode !== t)
                        t.appendChild(o), (s = null);
                    else {
                        for (
                            u = i, a = 0;
                            (u = u.nextSibling) && a < r.length;
                            a += 2
                        )
                            if (u == o) break t;
                        t.insertBefore(o, i), (s = i);
                    }
                return void 0 !== s ? s : o.nextSibling;
            }
            function E(t, e, n) {
                '-' === e[0]
                    ? t.setProperty(e, n)
                    : (t[e] =
                          null == n
                              ? ''
                              : 'number' != typeof n || p.test(e)
                              ? n
                              : n + 'px');
            }
            function A(t, e, n, r, o) {
                var i;
                t: if ('style' === e)
                    if ('string' == typeof n) t.style.cssText = n;
                    else {
                        if (
                            ('string' == typeof r && (t.style.cssText = r = ''),
                            r)
                        )
                            for (e in r) (n && e in n) || E(t.style, e, '');
                        if (n)
                            for (e in n)
                                (r && n[e] === r[e]) || E(t.style, e, n[e]);
                    }
                else if ('o' === e[0] && 'n' === e[1])
                    (i = e !== (e = e.replace(/Capture$/, ''))),
                        (e =
                            e.toLowerCase() in t
                                ? e.toLowerCase().slice(2)
                                : e.slice(2)),
                        t.l || (t.l = {}),
                        (t.l[e + i] = n),
                        n
                            ? r || t.addEventListener(e, i ? T : R, i)
                            : t.removeEventListener(e, i ? T : R, i);
                else if ('dangerouslySetInnerHTML' !== e) {
                    if (o)
                        e = e.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
                    else if (
                        'href' !== e &&
                        'list' !== e &&
                        'form' !== e &&
                        'tabIndex' !== e &&
                        'download' !== e &&
                        e in t
                    )
                        try {
                            t[e] = null == n ? '' : n;
                            break t;
                        } catch (t) {}
                    'function' == typeof n ||
                        (null != n &&
                        (!1 !== n || ('a' === e[0] && 'r' === e[1]))
                            ? t.setAttribute(e, n)
                            : t.removeAttribute(e));
                }
            }
            function R(t) {
                this.l[t.type + !1](r.event ? r.event(t) : t);
            }
            function T(t) {
                this.l[t.type + !0](r.event ? r.event(t) : t);
            }
            function O(t, e, n, o, i, s, u, a, c) {
                var l,
                    p,
                    d,
                    h,
                    _,
                    m,
                    b,
                    g,
                    k,
                    x,
                    P,
                    C = e.type;
                if (void 0 !== e.constructor) return null;
                null != n.__h &&
                    ((c = n.__h),
                    (a = e.__e = n.__e),
                    (e.__h = null),
                    (s = [a])),
                    (l = r.__b) && l(e);
                try {
                    t: if ('function' == typeof C) {
                        if (
                            ((g = e.props),
                            (k = (l = C.contextType) && o[l.__c]),
                            (x = l ? (k ? k.props.value : l.__) : o),
                            n.__c
                                ? (b = (p = e.__c = n.__c).__ = p.__E)
                                : ('prototype' in C && C.prototype.render
                                      ? (e.__c = p = new C(g, x))
                                      : ((e.__c = p = new y(g, x)),
                                        (p.constructor = C),
                                        (p.render = I)),
                                  k && k.sub(p),
                                  (p.props = g),
                                  p.state || (p.state = {}),
                                  (p.context = x),
                                  (p.__n = o),
                                  (d = p.__d = !0),
                                  (p.__h = [])),
                            null == p.__s && (p.__s = p.state),
                            null != C.getDerivedStateFromProps &&
                                (p.__s == p.state && (p.__s = f({}, p.__s)),
                                f(p.__s, C.getDerivedStateFromProps(g, p.__s))),
                            (h = p.props),
                            (_ = p.state),
                            d)
                        )
                            null == C.getDerivedStateFromProps &&
                                null != p.componentWillMount &&
                                p.componentWillMount(),
                                null != p.componentDidMount &&
                                    p.__h.push(p.componentDidMount);
                        else {
                            if (
                                (null == C.getDerivedStateFromProps &&
                                    g !== h &&
                                    null != p.componentWillReceiveProps &&
                                    p.componentWillReceiveProps(g, x),
                                (!p.__e &&
                                    null != p.shouldComponentUpdate &&
                                    !1 ===
                                        p.shouldComponentUpdate(g, p.__s, x)) ||
                                    e.__v === n.__v)
                            ) {
                                (p.props = g),
                                    (p.state = p.__s),
                                    e.__v !== n.__v && (p.__d = !1),
                                    (p.__v = e),
                                    (e.__e = n.__e),
                                    (e.__k = n.__k),
                                    e.__k.forEach(function(t) {
                                        t && (t.__ = e);
                                    }),
                                    p.__h.length && u.push(p);
                                break t;
                            }
                            null != p.componentWillUpdate &&
                                p.componentWillUpdate(g, p.__s, x),
                                null != p.componentDidUpdate &&
                                    p.__h.push(function() {
                                        p.componentDidUpdate(h, _, m);
                                    });
                        }
                        (p.context = x),
                            (p.props = g),
                            (p.state = p.__s),
                            (l = r.__r) && l(e),
                            (p.__d = !1),
                            (p.__v = e),
                            (p.__P = t),
                            (l = p.render(p.props, p.state, p.context)),
                            (p.state = p.__s),
                            null != p.getChildContext &&
                                (o = f(f({}, o), p.getChildContext())),
                            d ||
                                null == p.getSnapshotBeforeUpdate ||
                                (m = p.getSnapshotBeforeUpdate(h, _)),
                            (P =
                                null != l && l.type === v && null == l.key
                                    ? l.props.children
                                    : l),
                            w(
                                t,
                                Array.isArray(P) ? P : [P],
                                e,
                                n,
                                o,
                                i,
                                s,
                                u,
                                a,
                                c
                            ),
                            (p.base = e.__e),
                            (e.__h = null),
                            p.__h.length && u.push(p),
                            b && (p.__E = p.__ = null),
                            (p.__e = !1);
                    } else
                        null == s && e.__v === n.__v
                            ? ((e.__k = n.__k), (e.__e = n.__e))
                            : (e.__e = M(n.__e, e, n, o, i, s, u, c));
                    (l = r.diffed) && l(e);
                } catch (t) {
                    (e.__v = null),
                        (c || null != s) &&
                            ((e.__e = a),
                            (e.__h = !!c),
                            (s[s.indexOf(a)] = null)),
                        r.__e(t, e, n);
                }
            }
            function D(t, e) {
                r.__c && r.__c(e, t),
                    t.some(function(e) {
                        try {
                            (t = e.__h),
                                (e.__h = []),
                                t.some(function(t) {
                                    t.call(e);
                                });
                        } catch (t) {
                            r.__e(t, e.__v);
                        }
                    });
            }
            function M(t, e, n, r, o, i, s, u) {
                var a,
                    p,
                    f,
                    h,
                    _ = n.props,
                    m = e.props,
                    v = e.type,
                    y = 0;
                if (('svg' === v && (o = !0), null != i))
                    for (; y < i.length; y++)
                        if (
                            (a = i[y]) &&
                            (a === t ||
                                (v ? a.localName == v : 3 == a.nodeType))
                        ) {
                            (t = a), (i[y] = null);
                            break;
                        }
                if (null == t) {
                    if (null === v) return document.createTextNode(m);
                    (t = o
                        ? document.createElementNS(
                              'http://www.w3.org/2000/svg',
                              v
                          )
                        : document.createElement(v, m.is && m)),
                        (i = null),
                        (u = !1);
                }
                if (null === v) _ === m || (u && t.data === m) || (t.data = m);
                else {
                    if (
                        ((i = i && l.slice.call(t.childNodes)),
                        (p = (_ = n.props || c).dangerouslySetInnerHTML),
                        (f = m.dangerouslySetInnerHTML),
                        !u)
                    ) {
                        if (null != i)
                            for (_ = {}, h = 0; h < t.attributes.length; h++)
                                _[t.attributes[h].name] = t.attributes[h].value;
                        (f || p) &&
                            ((f &&
                                ((p && f.__html == p.__html) ||
                                    f.__html === t.innerHTML)) ||
                                (t.innerHTML = (f && f.__html) || ''));
                    }
                    if (
                        ((function(t, e, n, r, o) {
                            var i;
                            for (i in n)
                                'children' === i ||
                                    'key' === i ||
                                    i in e ||
                                    A(t, i, null, n[i], r);
                            for (i in e)
                                (o && 'function' != typeof e[i]) ||
                                    'children' === i ||
                                    'key' === i ||
                                    'value' === i ||
                                    'checked' === i ||
                                    n[i] === e[i] ||
                                    A(t, i, e[i], n[i], r);
                        })(t, m, _, o, u),
                        f)
                    )
                        e.__k = [];
                    else if (
                        ((y = e.props.children),
                        w(
                            t,
                            Array.isArray(y) ? y : [y],
                            e,
                            n,
                            r,
                            o && 'foreignObject' !== v,
                            i,
                            s,
                            t.firstChild,
                            u
                        ),
                        null != i)
                    )
                        for (y = i.length; y--; ) null != i[y] && d(i[y]);
                    u ||
                        ('value' in m &&
                            void 0 !== (y = m.value) &&
                            (y !== t.value || ('progress' === v && !y)) &&
                            A(t, 'value', y, _.value, !1),
                        'checked' in m &&
                            void 0 !== (y = m.checked) &&
                            y !== t.checked &&
                            A(t, 'checked', y, _.checked, !1));
                }
                return t;
            }
            function N(t, e, n) {
                try {
                    'function' == typeof t ? t(e) : (t.current = e);
                } catch (t) {
                    r.__e(t, n);
                }
            }
            function U(t, e, n) {
                var o, i, s;
                if (
                    (r.unmount && r.unmount(t),
                    (o = t.ref) &&
                        ((o.current && o.current !== t.__e) || N(o, null, e)),
                    n ||
                        'function' == typeof t.type ||
                        (n = null != (i = t.__e)),
                    (t.__e = t.__d = void 0),
                    null != (o = t.__c))
                ) {
                    if (o.componentWillUnmount)
                        try {
                            o.componentWillUnmount();
                        } catch (t) {
                            r.__e(t, e);
                        }
                    o.base = o.__P = null;
                }
                if ((o = t.__k))
                    for (s = 0; s < o.length; s++) o[s] && U(o[s], e, n);
                null != i && d(i);
            }
            function I(t, e, n) {
                return this.constructor(t, n);
            }
            function L(t, e, n) {
                var o, i, s;
                r.__ && r.__(t, e),
                    (i = (o = 'function' == typeof n)
                        ? null
                        : (n && n.__k) || e.__k),
                    (s = []),
                    O(
                        e,
                        (t = ((!o && n) || e).__k = h(v, null, [t])),
                        i || c,
                        c,
                        void 0 !== e.ownerSVGElement,
                        !o && n
                            ? [n]
                            : i
                            ? null
                            : e.firstChild
                            ? l.slice.call(e.childNodes)
                            : null,
                        s,
                        !o && n ? n : i ? i.__e : e.firstChild,
                        o
                    ),
                    D(s, t);
            }
            function F(t, e) {
                L(t, e, F);
            }
            function j(t, e, n) {
                var r,
                    o,
                    i,
                    s = arguments,
                    u = f({}, t.props);
                for (i in e)
                    'key' == i
                        ? (r = e[i])
                        : 'ref' == i
                        ? (o = e[i])
                        : (u[i] = e[i]);
                if (arguments.length > 3)
                    for (n = [n], i = 3; i < arguments.length; i++)
                        n.push(s[i]);
                return (
                    null != n && (u.children = n),
                    _(t.type, u, r || t.key, o || t.ref, null)
                );
            }
            function B(t, e) {
                var n = {
                    __c: (e = '__cC' + a++),
                    __: t,
                    Consumer: function(t, e) {
                        return t.children(e);
                    },
                    Provider: function(t) {
                        var n, r;
                        return (
                            this.getChildContext ||
                                ((n = []),
                                ((r = {})[e] = this),
                                (this.getChildContext = function() {
                                    return r;
                                }),
                                (this.shouldComponentUpdate = function(t) {
                                    this.props.value !== t.value && n.some(k);
                                }),
                                (this.sub = function(t) {
                                    n.push(t);
                                    var e = t.componentWillUnmount;
                                    t.componentWillUnmount = function() {
                                        n.splice(n.indexOf(t), 1),
                                            e && e.call(t);
                                    };
                                })),
                            t.children
                        );
                    }
                };
                return (n.Provider.__ = n.Consumer.contextType = n);
            }
            (r = {
                __e: function(t, e) {
                    for (var n, r, o; (e = e.__); )
                        if ((n = e.__c) && !n.__)
                            try {
                                if (
                                    ((r = n.constructor) &&
                                        null != r.getDerivedStateFromError &&
                                        (n.setState(
                                            r.getDerivedStateFromError(t)
                                        ),
                                        (o = n.__d)),
                                    null != n.componentDidCatch &&
                                        (n.componentDidCatch(t), (o = n.__d)),
                                    o)
                                )
                                    return (n.__E = n);
                            } catch (e) {
                                t = e;
                            }
                    throw t;
                },
                __v: 0
            }),
                (o = function(t) {
                    return null != t && void 0 === t.constructor;
                }),
                (y.prototype.setState = function(t, e) {
                    var n;
                    (n =
                        null != this.__s && this.__s !== this.state
                            ? this.__s
                            : (this.__s = f({}, this.state))),
                        'function' == typeof t && (t = t(f({}, n), this.props)),
                        t && f(n, t),
                        null != t &&
                            this.__v &&
                            (e && this.__h.push(e), k(this));
                }),
                (y.prototype.forceUpdate = function(t) {
                    this.__v &&
                        ((this.__e = !0), t && this.__h.push(t), k(this));
                }),
                (y.prototype.render = v),
                (i = []),
                (s =
                    'function' == typeof Promise
                        ? Promise.prototype.then.bind(Promise.resolve())
                        : setTimeout),
                (x.__r = 0),
                (a = 0);
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__assign) ||
                    function() {
                        return (r =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                o =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                i =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0),
                (e.getChannelDialogChannels = e.trackInstallDetails = e.trackEvent = e.clearUserAssociation = e.associateUser = e.getUserId = e.getInstallId = e.assertConfigValid = e.Context = e.SDKFeature = e.PromptPosition = e.ReminderTimeUnit = e.UiActionType = e.PromptTypeName = e.EventType = e.FP_CAPTURE_URL = e.DDL_BASE_URL = e.PUSH_BASE_URL = void 0);
            var s,
                u,
                a = n(2),
                c = n(3),
                l = '1.9.0';
            (e.PUSH_BASE_URL = 'https://push.kumulos.com'),
                (e.DDL_BASE_URL = 'https://links.kumulos.com'),
                (e.FP_CAPTURE_URL = 'https://pd.app.delivery'),
                (function(t) {
                    (t.MESSAGE_DELIVERED = 'k.message.delivered'),
                        (t.MESSAGE_OPENED = 'k.message.opened'),
                        (t.PUSH_REGISTERED = 'k.push.deviceRegistered'),
                        (t.INSTALL_TRACKED = 'k.stats.installTracked'),
                        (t.USER_ASSOCIATED = 'k.stats.userAssociated'),
                        (t.USER_ASSOCIATION_CLEARED =
                            'k.stats.userAssociationCleared'),
                        (t.PAGE_VIEWED = 'k.pageViewed');
                })((s = e.EventType || (e.EventType = {}))),
                (function(t) {
                    (t.BELL = 'bell'),
                        (t.ALERT = 'alert'),
                        (t.BANNER = 'banner'),
                        (t.DDL_BANNER = 'ddl_banner');
                })(e.PromptTypeName || (e.PromptTypeName = {})),
                (function(t) {
                    (t.DECLINE = 'decline'),
                        (t.REMIND = 'remind'),
                        (t.DDL_OPEN_STORE = 'openStore'),
                        (t.DDL_OPEN_DEEPLINK = 'openDeeplink');
                })(e.UiActionType || (e.UiActionType = {})),
                (function(t) {
                    (t.HOURS = 'hours'), (t.DAYS = 'days');
                })(e.ReminderTimeUnit || (e.ReminderTimeUnit = {})),
                (function(t) {
                    (t.TOP_LEFT = 'top-left'),
                        (t.TOP_CENTER = 'top-center'),
                        (t.TOP_RIGHT = 'top-right'),
                        (t.CENTER_LEFT = 'center-left'),
                        (t.CENTER = 'center'),
                        (t.CENTER_RIGHT = 'center-right'),
                        (t.BOTTOM_LEFT = 'bottom-left'),
                        (t.BOTTOM_CENTER = 'bottom-center'),
                        (t.BOTTOM_RIGHT = 'bottom-right'),
                        (t.TOP = 'top'),
                        (t.BOTTOM = 'bottom');
                })(e.PromptPosition || (e.PromptPosition = {})),
                (function(t) {
                    (t.PUSH = 'push'), (t.DDL = 'ddl');
                })((u = e.SDKFeature || (e.SDKFeature = {})));
            var p = (function() {
                function t(t) {
                    var e, n, r, o;
                    (this.apiKey = t.apiKey),
                        (this.secretKey = t.secretKey),
                        (this.vapidPublicKey = t.vapidPublicKey),
                        (this.authHeader =
                            'Basic ' +
                            btoa(this.apiKey + ':' + this.secretKey)),
                        (this.serviceWorkerPath =
                            null !== (e = t.serviceWorkerPath) && void 0 !== e
                                ? e
                                : '/worker.js'),
                        (this.pushPrompts =
                            null !== (n = t.pushPrompts) && void 0 !== n
                                ? n
                                : 'auto'),
                        (this.autoResubscribe =
                            null === (r = t.autoResubscribe) ||
                            void 0 === r ||
                            r),
                        (this.features =
                            null !== (o = t.features) && void 0 !== o
                                ? o
                                : [u.PUSH]),
                        (this.subscribers = {});
                }
                return (
                    (t.prototype.subscribe = function(t, e) {
                        this.subscribers[t] || (this.subscribers[t] = []),
                            this.subscribers[t].indexOf(e) > -1 ||
                                this.subscribers[t].push(e);
                    }),
                    (t.prototype.broadcast = function(t, e) {
                        if (this.subscribers[t])
                            for (var n = 0; n < this.subscribers[t].length; ++n)
                                this.subscribers[t][n]({ type: t, data: e });
                    }),
                    (t.prototype.hasFeature = function(t) {
                        return this.features.includes(t);
                    }),
                    t
                );
            })();
            (e.Context = p),
                (e.assertConfigValid = function(t) {
                    if ('object' != typeof t) throw 'Config must be an object';
                    var e =
                        Array.isArray(t.features) && t.features.length
                            ? t.features
                            : void 0;
                    if (!e || e.includes(u.PUSH))
                        return (function(t) {
                            for (
                                var e = 0,
                                    n = [
                                        'apiKey',
                                        'secretKey',
                                        'vapidPublicKey'
                                    ];
                                e < n.length;
                                e++
                            ) {
                                var r = n[e];
                                if (
                                    'string' != typeof t[r] ||
                                    0 === t[r].length
                                )
                                    throw "Required configuration key '" +
                                        r +
                                        "' must be non-empty string";
                            }
                            if (
                                t.serviceWorkerPath &&
                                'string' != typeof t.serviceWorkerPath &&
                                0 === t.serviceWorkerPath.length
                            )
                                throw "Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)";
                            if (
                                t.onPushReceived &&
                                'function' != typeof t.onPushReceived
                            )
                                throw "Optional configuration key 'onPushReceived' must be a function";
                            if (
                                t.onPushOpened &&
                                'function' != typeof t.onPushOpened
                            )
                                throw "Optional configuration key 'onPushOpened' must be a function";
                        })(t);
                });
            var f = void 0;
            function d() {
                return (
                    f ||
                    (f = c.get('installId').then(function(t) {
                        return t || c.set('installId', a.uuidv4());
                    }))
                );
            }
            function h() {
                return c.get('userId').then(function(t) {
                    return null != t ? t : d();
                });
            }
            function _(t, e, n) {
                return o(this, void 0, void 0, function() {
                    var r, o, s, u;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, d()];
                            case 1:
                                return (r = i.sent()), [4, h()];
                            case 2:
                                return (
                                    (o = i.sent()),
                                    (s = [
                                        {
                                            type: e,
                                            uuid: a.uuidv4(),
                                            timestamp: Date.now(),
                                            data: n,
                                            userId: o
                                        }
                                    ]),
                                    (u =
                                        'https://events.kumulos.com/v1/app-installs/' +
                                        r +
                                        '/events'),
                                    t.broadcast('eventTracked', s),
                                    [
                                        2,
                                        a.authedFetch(t, u, {
                                            method: 'POST',
                                            body: JSON.stringify(s)
                                        })
                                    ]
                                );
                        }
                    });
                });
            }
            (e.getInstallId = d),
                (e.getUserId = h),
                (e.associateUser = function(t, e, n) {
                    return o(this, void 0, void 0, function() {
                        var r;
                        return i(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, c.set('userId', e)];
                                case 1:
                                    return (
                                        o.sent(),
                                        (r = { id: e, attributes: n }),
                                        [
                                            2,
                                            _(
                                                t,
                                                s.USER_ASSOCIATED,
                                                r
                                            ).then(function(t) {})
                                        ]
                                    );
                            }
                        });
                    });
                }),
                (e.clearUserAssociation = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e;
                        return i(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, h()];
                                case 1:
                                    return (
                                        (e = n.sent()),
                                        _(t, s.USER_ASSOCIATION_CLEARED, {
                                            oldUserIdentifier: e
                                        }),
                                        [2, c.del('userId')]
                                    );
                            }
                        });
                    });
                }),
                (e.trackEvent = _),
                (e.trackInstallDetails = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e, n, r, o;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    (e = {
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
                                            e.app.bundle,
                                            e.device.tz,
                                            e.device.locale,
                                            e.device.name
                                        ]),
                                        (r = a.cyrb53(n.join('|'))),
                                        (i.label = 1);
                                case 1:
                                    return (
                                        i.trys.push([1, 3, , 4]),
                                        [4, c.get('detailsHash')]
                                    );
                                case 2:
                                    return i.sent() === r
                                        ? [2, Promise.resolve()]
                                        : [3, 4];
                                case 3:
                                    return (
                                        (o = i.sent()), [2, Promise.reject(o)]
                                    );
                                case 4:
                                    return [
                                        2,
                                        _(t, s.INSTALL_TRACKED, e)
                                            .then(function() {
                                                return c.set('detailsHash', r);
                                            })
                                            .then(function() {})
                                    ];
                            }
                        });
                    });
                }),
                (e.getChannelDialogChannels = function(t, e) {
                    return t
                        .filter(function(t) {
                            return (
                                'all' === e.presentedUuids ||
                                e.presentedUuids.includes(t.uuid)
                            );
                        })
                        .map(function(t) {
                            return {
                                channel: r({}, t),
                                checked:
                                    t.subscribed.valueOf() ||
                                    'all' === e.checkedUuids ||
                                    e.checkedUuids.includes(t.uuid)
                            };
                        });
                });
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__assign) ||
                    function() {
                        return (i =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                s =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    };
            (e.__esModule = !0),
                (e.isMobile = e.onDOMReady = e.parseQueryString = e.defer = e.registerServiceWorker = e.base64UrlEncode = e.authedFetchJson = e.AuthedFetchError = e.authedFetch = e.escapeRegExp = e.cyrb53 = e.isBrowserSupported = e.getBrowserName = e.uuidv4 = void 0);
            var u = n(1),
                a = [typeof Promise, typeof fetch, typeof indexedDB],
                c = {
                    push: function() {
                        var t,
                            e = s(a);
                        'safari' === l()
                            ? e.push(
                                  typeof (null === (t = window.safari) ||
                                  void 0 === t
                                      ? void 0
                                      : t.pushNotification)
                              )
                            : e.push.apply(e, [
                                  typeof Notification,
                                  typeof navigator.serviceWorker,
                                  typeof PushManager
                              ]);
                        return p(e);
                    },
                    ddl: function() {
                        return p(a);
                    }
                };
            function l() {
                for (
                    var t = navigator.userAgent.toLowerCase(),
                        e = 0,
                        n = ['edge', 'firefox', 'chrome', 'safari'];
                    e < n.length;
                    e++
                ) {
                    var r = n[e];
                    if (t.indexOf(r) > -1) return r;
                }
                return '';
            }
            function p(t) {
                return t.reduce(function(t, e) {
                    return t && 'undefined' !== e;
                }, !0);
            }
            (e.uuidv4 = function() {
                return 'undefined' == typeof crypto
                    ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                          /[xy]/g,
                          function(t) {
                              var e = (16 * Math.random()) | 0;
                              return ('x' == t ? e : (3 & e) | 8).toString(16);
                          }
                      )
                    : ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
                          /[018]/g,
                          function(t) {
                              return (
                                  Number(t) ^
                                  (crypto.getRandomValues(
                                      new Uint8Array(1)
                                  )[0] &
                                      (15 >> (Number(t) / 4)))
                              ).toString(16);
                          }
                      );
            }),
                (e.getBrowserName = l),
                (e.isBrowserSupported = function(t) {
                    return (
                        (t = null != t ? t : []).length ||
                            t.push(u.SDKFeature.PUSH),
                        t.filter(function(t) {
                            return c[t]();
                        }).length > 0
                    );
                });
            var f =
                Math.imul ||
                function(t, e) {
                    var n = (4194303 & t) * (e |= 0);
                    return (
                        4290772992 & t && (n += ((4290772992 & t) * e) | 0),
                        0 | n
                    );
                };
            function d(t, e, n) {
                var r;
                void 0 === n && (n = { method: 'GET' });
                var o = null !== (r = n.headers) && void 0 !== r ? r : {};
                return (
                    (n.headers = i(
                        {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: t.authHeader
                        },
                        o
                    )),
                    fetch(e, n)
                );
            }
            (e.cyrb53 = function(t, e) {
                void 0 === e && (e = 0);
                for (
                    var n = 3735928559 ^ e,
                        r = 1103547991 ^ e,
                        o = 0,
                        i = void 0;
                    o < t.length;
                    o++
                )
                    (i = t.charCodeAt(o)),
                        (n = f(n ^ i, 2654435761)),
                        (r = f(r ^ i, 1597334677));
                return (
                    (n =
                        f(n ^ (n >>> 16), 2246822507) ^
                        f(r ^ (r >>> 13), 3266489909)),
                    4294967296 *
                        (2097151 &
                            (r =
                                f(r ^ (r >>> 16), 2246822507) ^
                                f(n ^ (n >>> 13), 3266489909))) +
                        (n >>> 0)
                );
            }),
                (e.escapeRegExp = function(t) {
                    return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }),
                (e.authedFetch = d);
            var h = (function(t) {
                function e(e, n) {
                    return (
                        t.call(this, 'authed fetch failed: ' + e + ', ' + n) ||
                        this
                    );
                }
                return o(e, t), e;
            })(Error);
            (e.AuthedFetchError = h),
                (e.authedFetchJson = function(t, e, n) {
                    return d(t, e, n).then(function(t) {
                        if (!t.ok) throw new h(t.status, t.statusText);
                        return t.json();
                    });
                }),
                (e.base64UrlEncode = function(t) {
                    var e = new Uint8Array(t);
                    return btoa(
                        e.reduce(function(t, e) {
                            return t + String.fromCharCode(e);
                        }, '')
                    )
                        .replace(/\+/g, '-')
                        .replace(/\//g, '_')
                        .replace(/=/g, '');
                }),
                (e.registerServiceWorker = function(t) {
                    return 'serviceWorker' in navigator
                        ? navigator.serviceWorker.register(t).then(function() {
                              return navigator.serviceWorker.ready;
                          })
                        : Promise.reject(
                              'ServiceWorker is not supported in this browser, aborting...'
                          );
                }),
                (e.defer = function() {
                    var t = { resolve: null, reject: null, promise: null };
                    return (
                        (t.promise = new Promise(function(e, n) {
                            (t.resolve = e), (t.reject = n);
                        })),
                        t
                    );
                }),
                (e.parseQueryString = function(t, e) {
                    void 0 === t && (t = location.search),
                        void 0 === e && (e = []);
                    var n = void 0;
                    return (
                        t.length > 0 &&
                            (n = t
                                .substring(1)
                                .split('&')
                                .map(function(t) {
                                    return t.split('=');
                                })
                                .map(function(t) {
                                    return t.map(decodeURIComponent);
                                })
                                .filter(function(t) {
                                    return -1 === e.indexOf(t[0]);
                                })
                                .reduce(function(t, e) {
                                    var n;
                                    return i(
                                        i({}, t),
                                        (((n = {})[e[0]] = e[1]), n)
                                    );
                                }, {})),
                        n
                    );
                }),
                (e.onDOMReady = function(t) {
                    'loading' !== document.readyState
                        ? t()
                        : document.addEventListener('DOMContentLoaded', t);
                }),
                (e.isMobile = function() {
                    return /android|iPhone|iPad|iPod|mobile/i.test(
                        navigator.userAgent
                    );
                });
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0),
                (e.getMostRecentlyOpenedPushPayload = e.persistOpenedPushPayload = e.getContextFromStoredConfig = e.getPromptReminder = e.persistPromptReminder = e.persistDDLConfig = e.persistConfig = e.del = e.set = e.get = void 0);
            var i = n(1),
                s = n(16),
                u = new s.Store('kumulos', 'default');
            function a(t) {
                return s.get(t, u);
            }
            function c(t, e) {
                return s.set(t, e, u).then(function() {
                    return e;
                });
            }
            function l(t) {
                return s.del(t, u);
            }
            (e.get = a),
                (e.set = c),
                (e.del = l),
                (e.persistConfig = function(t) {
                    return c('config', {
                        apiKey: t.apiKey,
                        secretKey: t.secretKey,
                        vapidPublicKey: t.vapidPublicKey,
                        serviceWorkerPath: t.serviceWorkerPath,
                        autoResubscribe: t.autoResubscribe,
                        pushPrompts: t.pushPrompts
                    });
                }),
                (e.persistDDLConfig = function(t) {
                    return c('ddlconfig', t);
                }),
                (e.persistPromptReminder = function(t, e) {
                    return c('reminder.' + t, e);
                }),
                (e.getPromptReminder = function(t) {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a('reminder.' + t)];
                                case 1:
                                    return [2, e.sent()];
                            }
                        });
                    });
                }),
                (e.getContextFromStoredConfig = function() {
                    return a('config').then(function(t) {
                        return t ? new i.Context(t) : void 0;
                    });
                }),
                (e.persistOpenedPushPayload = function(t) {
                    return c('mostRecentOpenedPushPayload', t);
                }),
                (e.getMostRecentlyOpenedPushPayload = function() {
                    return r(this, void 0, void 0, function() {
                        var t;
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [
                                        4,
                                        a('mostRecentOpenedPushPayload')
                                    ];
                                case 1:
                                    return (
                                        (t = e.sent()),
                                        [4, l('mostRecentOpenedPushPayload')]
                                    );
                                case 2:
                                    return (
                                        e.sent(), [2, null != t ? t : void 0]
                                    );
                            }
                        });
                    });
                });
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__assign) ||
                    function() {
                        return (r =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                o =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            (e.__esModule = !0),
                (e.notificationFromPayload = e.trackOpenFromQuery = e.MessageType = e.TokenType = void 0);
            var i,
                s,
                u = n(1),
                a = n(2),
                c = o(n(18)),
                l = o(n(19)),
                p = n(5);
            !(function(t) {
                (t[(t.W3C = 3)] = 'W3C'), (t[(t.SAFARI = 4)] = 'SAFARI');
            })(e.TokenType || (e.TokenType = {})),
                (function(t) {
                    t[(t.PUSH = 1)] = 'PUSH';
                })((i = e.MessageType || (e.MessageType = {}))),
                (e.default = function(t) {
                    if (s) return s;
                    var e = a.getBrowserName();
                    return (s =
                        'safari' === e
                            ? p.loadPlatformConfig(t).then(function(t) {
                                  return new c.default(t);
                              })
                            : Promise.resolve(new l.default()));
                }),
                (e.trackOpenFromQuery = function(t) {
                    if ('safari' === a.getBrowserName()) {
                        var e = a.parseQueryString();
                        (null == e ? void 0 : e.knid) &&
                            u.trackEvent(t, u.EventType.MESSAGE_OPENED, {
                                type: i.PUSH,
                                id: Number(e.knid)
                            });
                    }
                }),
                (e.notificationFromPayload = function(t) {
                    var e,
                        n,
                        o,
                        i = r({}, t.data);
                    return (
                        delete i['k.message'],
                        {
                            id: t.data['k.message'].data.id,
                            title: t.title,
                            message: t.msg,
                            data: i,
                            url:
                                null !== (e = t.url) && void 0 !== e
                                    ? e
                                    : void 0,
                            iconUrl:
                                null !== (n = t.icon) && void 0 !== n
                                    ? n
                                    : void 0,
                            imageUrl:
                                null !== (o = t.image) && void 0 !== o
                                    ? o
                                    : void 0
                        }
                    );
                });
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0),
                (e.deleteDdlBannerConfigFromCache = e.loadDdlConfig = e.loadPlatformConfig = void 0);
            var i,
                s = n(1),
                u = n(3),
                a = n(2),
                c = function(t) {
                    return {
                        CONFIG_CACHE_KEY: t + 'Config',
                        CONFIG_CACHE_KEY_UPDATED: t + 'ConfigUpdated'
                    };
                };
            function l(t, e, n) {
                var i;
                return r(this, void 0, void 0, function() {
                    var r, s, l, p, f;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return (
                                    (r = c(e)), [4, u.get(r.CONFIG_CACHE_KEY)]
                                );
                            case 1:
                                return (
                                    (s = o.sent()),
                                    [4, u.get(r.CONFIG_CACHE_KEY_UPDATED)]
                                );
                            case 2:
                                if (
                                    ((l =
                                        null !== (i = o.sent()) && void 0 !== i
                                            ? i
                                            : 0),
                                    (p = !1),
                                    !(Date.now() - l > 36e5))
                                )
                                    return [3, 6];
                                o.label = 3;
                            case 3:
                                return (
                                    o.trys.push([3, 5, , 6]),
                                    [4, a.authedFetchJson(n, t)]
                                );
                            case 4:
                                return (s = o.sent()), (p = !0), [3, 6];
                            case 5:
                                return (f = o.sent()), console.warn(f), [3, 6];
                            case 6:
                                return p
                                    ? [4, u.set(r.CONFIG_CACHE_KEY, s)]
                                    : [3, 9];
                            case 7:
                                return (
                                    o.sent(),
                                    [
                                        4,
                                        u.set(
                                            r.CONFIG_CACHE_KEY_UPDATED,
                                            Date.now()
                                        )
                                    ]
                                );
                            case 8:
                                o.sent(), (o.label = 9);
                            case 9:
                                return [2, s];
                        }
                    });
                });
            }
            !(function(t) {
                (t.PLATFORM = 'platform'), (t.DDL = 'ddl');
            })(i || (i = {})),
                (e.loadPlatformConfig = function(t) {
                    var e;
                    return r(this, void 0, void 0, function() {
                        return o(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [
                                        4,
                                        l(
                                            s.PUSH_BASE_URL + '/v1/web/config',
                                            i.PLATFORM,
                                            t
                                        )
                                    ];
                                case 1:
                                    return [
                                        2,
                                        null !== (e = n.sent()) && void 0 !== e
                                            ? e
                                            : {}
                                    ];
                            }
                        });
                    });
                }),
                (e.loadDdlConfig = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n;
                        return o(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, s.getInstallId()];
                                case 1:
                                    (e = r.sent()), (r.label = 2);
                                case 2:
                                    return (
                                        r.trys.push([2, 4, , 5]),
                                        [
                                            4,
                                            l(
                                                s.DDL_BASE_URL +
                                                    '/v1/banners?webInstallId=' +
                                                    e,
                                                i.DDL,
                                                t
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
                (e.deleteDdlBannerConfigFromCache = function(t) {
                    return r(this, void 0, void 0, function() {
                        var e, n;
                        return o(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return (
                                        (e = c(i.DDL)),
                                        [4, u.get(e.CONFIG_CACHE_KEY)]
                                    );
                                case 1:
                                    return (n = r.sent())
                                        ? ((n = n.filter(function(e) {
                                              return e.uuid !== t;
                                          })),
                                          [4, u.set(e.CONFIG_CACHE_KEY, n)])
                                        : [2];
                                case 2:
                                    return r.sent(), [2];
                            }
                        });
                    });
                });
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0), (e.UIContext = void 0);
            var r = n(0);
            e.UIContext = r.createContext(void 0);
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                i =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0),
                (e.hasPromptReminderElapsed = e.isPromptSuppressed = e.maybePersistReminder = void 0);
            var s = n(3),
                u = n(1),
                a =
                    (((r = {})[u.ReminderTimeUnit.HOURS] = 36e5),
                    (r[u.ReminderTimeUnit.DAYS] = 864e5),
                    r);
            function c(t, e) {
                return Date.now() - t > a[e.timeUnit] * e.duration;
            }
            (e.maybePersistReminder = function(t) {
                var e = t.uiActions;
                if (e) {
                    var n = e.decline.type;
                    switch (n) {
                        case u.UiActionType.REMIND:
                            return s.persistPromptReminder(t.uuid, {
                                declinedOn: Date.now()
                            });
                        case u.UiActionType.DECLINE:
                            return s.persistPromptReminder(
                                t.uuid,
                                'suppressed'
                            );
                        default:
                            return console.warn(
                                'Unsupported decline action type ' +
                                    n +
                                    ' supported for prompt ' +
                                    t.uuid +
                                    ', fall back to always show this prompt when declined'
                            );
                    }
                }
            }),
                (e.isPromptSuppressed = function(t) {
                    return o(this, void 0, void 0, function() {
                        var e, n;
                        return i(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, s.getPromptReminder(t.uuid)];
                                case 1:
                                    return (e = r.sent())
                                        ? 'suppressed' === e
                                            ? [2, !0]
                                            : (n = t.uiActions).decline.type !==
                                              u.UiActionType.REMIND
                                            ? [2, !1]
                                            : [
                                                  2,
                                                  !c(
                                                      e.declinedOn,
                                                      n.decline.delay
                                                  )
                                              ]
                                        : [2, !1];
                            }
                        });
                    });
                }),
                (e.hasPromptReminderElapsed = c);
        },
        function(t, e, n) {
            'use strict';
            n.r(e);
            var r,
                o,
                i,
                s = n(0),
                u = 0,
                a = [],
                c = s.options.__b,
                l = s.options.__r,
                p = s.options.diffed,
                f = s.options.__c,
                d = s.options.unmount;
            function h(t, e) {
                s.options.__h && s.options.__h(o, t, u || e), (u = 0);
                var n = o.__H || (o.__H = { __: [], __h: [] });
                return t >= n.__.length && n.__.push({}), n.__[t];
            }
            function _(t) {
                return (u = 1), m(O, t);
            }
            function m(t, e, n) {
                var i = h(r++, 2);
                return (
                    (i.t = t),
                    i.__c ||
                        ((i.__ = [
                            n ? n(e) : O(void 0, e),
                            function(t) {
                                var e = i.t(i.__[0], t);
                                i.__[0] !== e &&
                                    ((i.__ = [e, i.__[1]]), i.__c.setState({}));
                            }
                        ]),
                        (i.__c = o)),
                    i.__
                );
            }
            function v(t, e) {
                var n = h(r++, 3);
                !s.options.__s &&
                    T(n.__H, e) &&
                    ((n.__ = t), (n.__H = e), o.__H.__h.push(n));
            }
            function y(t, e) {
                var n = h(r++, 4);
                !s.options.__s &&
                    T(n.__H, e) &&
                    ((n.__ = t), (n.__H = e), o.__h.push(n));
            }
            function b(t) {
                return (
                    (u = 5),
                    k(function() {
                        return { current: t };
                    }, [])
                );
            }
            function g(t, e, n) {
                (u = 6),
                    y(
                        function() {
                            'function' == typeof t
                                ? t(e())
                                : t && (t.current = e());
                        },
                        null == n ? n : n.concat(t)
                    );
            }
            function k(t, e) {
                var n = h(r++, 7);
                return (
                    T(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)),
                    n.__
                );
            }
            function x(t, e) {
                return (
                    (u = 8),
                    k(function() {
                        return t;
                    }, e)
                );
            }
            function w(t) {
                var e = o.context[t.__c],
                    n = h(r++, 9);
                return (
                    (n.__c = t),
                    e
                        ? (null == n.__ && ((n.__ = !0), e.sub(o)),
                          e.props.value)
                        : t.__
                );
            }
            function P(t, e) {
                s.options.useDebugValue &&
                    s.options.useDebugValue(e ? e(t) : t);
            }
            function C(t) {
                var e = h(r++, 10),
                    n = _();
                return (
                    (e.__ = t),
                    o.componentDidCatch ||
                        (o.componentDidCatch = function(t) {
                            e.__ && e.__(t), n[1](t);
                        }),
                    [
                        n[0],
                        function() {
                            n[1](void 0);
                        }
                    ]
                );
            }
            function S() {
                a.forEach(function(t) {
                    if (t.__P)
                        try {
                            t.__H.__h.forEach(A),
                                t.__H.__h.forEach(R),
                                (t.__H.__h = []);
                        } catch (e) {
                            (t.__H.__h = []), s.options.__e(e, t.__v);
                        }
                }),
                    (a = []);
            }
            (s.options.__b = function(t) {
                (o = null), c && c(t);
            }),
                (s.options.__r = function(t) {
                    l && l(t), (r = 0);
                    var e = (o = t.__c).__H;
                    e && (e.__h.forEach(A), e.__h.forEach(R), (e.__h = []));
                }),
                (s.options.diffed = function(t) {
                    p && p(t);
                    var e = t.__c;
                    e &&
                        e.__H &&
                        e.__H.__h.length &&
                        ((1 !== a.push(e) &&
                            i === s.options.requestAnimationFrame) ||
                            (
                                (i = s.options.requestAnimationFrame) ||
                                function(t) {
                                    var e,
                                        n = function() {
                                            clearTimeout(r),
                                                E && cancelAnimationFrame(e),
                                                setTimeout(t);
                                        },
                                        r = setTimeout(n, 100);
                                    E && (e = requestAnimationFrame(n));
                                }
                            )(S)),
                        (o = void 0);
                }),
                (s.options.__c = function(t, e) {
                    e.some(function(t) {
                        try {
                            t.__h.forEach(A),
                                (t.__h = t.__h.filter(function(t) {
                                    return !t.__ || R(t);
                                }));
                        } catch (n) {
                            e.some(function(t) {
                                t.__h && (t.__h = []);
                            }),
                                (e = []),
                                s.options.__e(n, t.__v);
                        }
                    }),
                        f && f(t, e);
                }),
                (s.options.unmount = function(t) {
                    d && d(t);
                    var e = t.__c;
                    if (e && e.__H)
                        try {
                            e.__H.__.forEach(A);
                        } catch (t) {
                            s.options.__e(t, e.__v);
                        }
                });
            var E = 'function' == typeof requestAnimationFrame;
            function A(t) {
                var e = o;
                'function' == typeof t.__c && t.__c(), (o = e);
            }
            function R(t) {
                var e = o;
                (t.__c = t.__()), (o = e);
            }
            function T(t, e) {
                return (
                    !t ||
                    t.length !== e.length ||
                    e.some(function(e, n) {
                        return e !== t[n];
                    })
                );
            }
            function O(t, e) {
                return 'function' == typeof e ? e(t) : e;
            }
            function D(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            function M(t, e) {
                for (var n in t) if ('__source' !== n && !(n in e)) return !0;
                for (var r in e)
                    if ('__source' !== r && t[r] !== e[r]) return !0;
                return !1;
            }
            function N(t) {
                this.props = t;
            }
            function U(t, e) {
                function n(t) {
                    var n = this.props.ref,
                        r = n == t.ref;
                    return (
                        !r && n && (n.call ? n(null) : (n.current = null)),
                        e ? !e(this.props, t) || !r : M(this.props, t)
                    );
                }
                function r(e) {
                    return (
                        (this.shouldComponentUpdate = n),
                        Object(s.createElement)(t, e)
                    );
                }
                return (
                    (r.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
                    (r.prototype.isReactComponent = !0),
                    (r.__f = !0),
                    r
                );
            }
            n.d(e, 'version', function() {
                return yt;
            }),
                n.d(e, 'Children', function() {
                    return B;
                }),
                n.d(e, 'render', function() {
                    return tt;
                }),
                n.d(e, 'hydrate', function() {
                    return et;
                }),
                n.d(e, 'unmountComponentAtNode', function() {
                    return xt;
                }),
                n.d(e, 'createPortal', function() {
                    return $;
                }),
                n.d(e, 'createFactory', function() {
                    return bt;
                }),
                n.d(e, 'cloneElement', function() {
                    return kt;
                }),
                n.d(e, 'isValidElement', function() {
                    return gt;
                }),
                n.d(e, 'findDOMNode', function() {
                    return wt;
                }),
                n.d(e, 'PureComponent', function() {
                    return N;
                }),
                n.d(e, 'memo', function() {
                    return U;
                }),
                n.d(e, 'forwardRef', function() {
                    return F;
                }),
                n.d(e, 'unstable_batchedUpdates', function() {
                    return Pt;
                }),
                n.d(e, 'StrictMode', function() {
                    return Ct;
                }),
                n.d(e, 'Suspense', function() {
                    return q;
                }),
                n.d(e, 'SuspenseList', function() {
                    return z;
                }),
                n.d(e, 'lazy', function() {
                    return G;
                }),
                n.d(
                    e,
                    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
                    function() {
                        return lt;
                    }
                ),
                n.d(e, 'unstable_ImmediatePriority', function() {
                    return pt;
                }),
                n.d(e, 'unstable_UserBlockingPriority', function() {
                    return ft;
                }),
                n.d(e, 'unstable_NormalPriority', function() {
                    return dt;
                }),
                n.d(e, 'unstable_LowPriority', function() {
                    return ht;
                }),
                n.d(e, 'unstable_IdlePriority', function() {
                    return _t;
                }),
                n.d(e, 'unstable_runWithPriority', function() {
                    return mt;
                }),
                n.d(e, 'unstable_now', function() {
                    return vt;
                }),
                n.d(e, 'useState', function() {
                    return _;
                }),
                n.d(e, 'useReducer', function() {
                    return m;
                }),
                n.d(e, 'useEffect', function() {
                    return v;
                }),
                n.d(e, 'useLayoutEffect', function() {
                    return y;
                }),
                n.d(e, 'useRef', function() {
                    return b;
                }),
                n.d(e, 'useImperativeHandle', function() {
                    return g;
                }),
                n.d(e, 'useMemo', function() {
                    return k;
                }),
                n.d(e, 'useCallback', function() {
                    return x;
                }),
                n.d(e, 'useContext', function() {
                    return w;
                }),
                n.d(e, 'useDebugValue', function() {
                    return P;
                }),
                n.d(e, 'useErrorBoundary', function() {
                    return C;
                }),
                n.d(e, 'createElement', function() {
                    return s.createElement;
                }),
                n.d(e, 'createContext', function() {
                    return s.createContext;
                }),
                n.d(e, 'createRef', function() {
                    return s.createRef;
                }),
                n.d(e, 'Fragment', function() {
                    return s.Fragment;
                }),
                n.d(e, 'Component', function() {
                    return s.Component;
                }),
                ((N.prototype = new s.Component()).isPureReactComponent = !0),
                (N.prototype.shouldComponentUpdate = function(t, e) {
                    return M(this.props, t) || M(this.state, e);
                });
            var I = s.options.__b;
            s.options.__b = function(t) {
                t.type &&
                    t.type.__f &&
                    t.ref &&
                    ((t.props.ref = t.ref), (t.ref = null)),
                    I && I(t);
            };
            var L =
                ('undefined' != typeof Symbol &&
                    Symbol.for &&
                    Symbol.for('react.forward_ref')) ||
                3911;
            function F(t) {
                function e(e, n) {
                    var r = D({}, e);
                    return (
                        delete r.ref,
                        t(
                            r,
                            (n = e.ref || n) &&
                                ('object' != typeof n || 'current' in n)
                                ? n
                                : null
                        )
                    );
                }
                return (
                    (e.$$typeof = L),
                    (e.render = e),
                    (e.prototype.isReactComponent = e.__f = !0),
                    (e.displayName =
                        'ForwardRef(' + (t.displayName || t.name) + ')'),
                    e
                );
            }
            var j = function(t, e) {
                    return null == t
                        ? null
                        : Object(s.toChildArray)(
                              Object(s.toChildArray)(t).map(e)
                          );
                },
                B = {
                    map: j,
                    forEach: j,
                    count: function(t) {
                        return t ? Object(s.toChildArray)(t).length : 0;
                    },
                    only: function(t) {
                        var e = Object(s.toChildArray)(t);
                        if (1 !== e.length) throw 'Children.only';
                        return e[0];
                    },
                    toArray: s.toChildArray
                },
                H = s.options.__e;
            s.options.__e = function(t, e, n) {
                if (t.then)
                    for (var r, o = e; (o = o.__); )
                        if ((r = o.__c) && r.__c)
                            return (
                                null == e.__e &&
                                    ((e.__e = n.__e), (e.__k = n.__k)),
                                r.__c(t, e)
                            );
                H(t, e, n);
            };
            var W = s.options.unmount;
            function q() {
                (this.__u = 0), (this.t = null), (this.__b = null);
            }
            function K(t) {
                var e = t.__.__c;
                return e && e.__e && e.__e(t);
            }
            function G(t) {
                var e, n, r;
                function o(o) {
                    if (
                        (e ||
                            (e = t()).then(
                                function(t) {
                                    n = t.default || t;
                                },
                                function(t) {
                                    r = t;
                                }
                            ),
                        r)
                    )
                        throw r;
                    if (!n) throw e;
                    return Object(s.createElement)(n, o);
                }
                return (o.displayName = 'Lazy'), (o.__f = !0), o;
            }
            function z() {
                (this.u = null), (this.o = null);
            }
            (s.options.unmount = function(t) {
                var e = t.__c;
                e && e.__R && e.__R(),
                    e && !0 === t.__h && (t.type = null),
                    W && W(t);
            }),
                ((q.prototype = new s.Component()).__c = function(t, e) {
                    var n = e.__c,
                        r = this;
                    null == r.t && (r.t = []), r.t.push(n);
                    var o = K(r.__v),
                        i = !1,
                        s = function() {
                            i || ((i = !0), (n.__R = null), o ? o(u) : u());
                        };
                    n.__R = s;
                    var u = function() {
                            if (!--r.__u) {
                                if (r.state.__e) {
                                    var t = r.state.__e;
                                    r.__v.__k[0] = (function t(e, n, r) {
                                        return (
                                            e &&
                                                ((e.__v = null),
                                                (e.__k =
                                                    e.__k &&
                                                    e.__k.map(function(e) {
                                                        return t(e, n, r);
                                                    })),
                                                e.__c &&
                                                    e.__c.__P === n &&
                                                    (e.__e &&
                                                        r.insertBefore(
                                                            e.__e,
                                                            e.__d
                                                        ),
                                                    (e.__c.__e = !0),
                                                    (e.__c.__P = r))),
                                            e
                                        );
                                    })(t, t.__c.__P, t.__c.__O);
                                }
                                var e;
                                for (
                                    r.setState({ __e: (r.__b = null) });
                                    (e = r.t.pop());

                                )
                                    e.forceUpdate();
                            }
                        },
                        a = !0 === e.__h;
                    r.__u++ || a || r.setState({ __e: (r.__b = r.__v.__k[0]) }),
                        t.then(s, s);
                }),
                (q.prototype.componentWillUnmount = function() {
                    this.t = [];
                }),
                (q.prototype.render = function(t, e) {
                    if (this.__b) {
                        if (this.__v.__k) {
                            var n = document.createElement('div'),
                                r = this.__v.__k[0].__c;
                            this.__v.__k[0] = (function t(e, n, r) {
                                return (
                                    e &&
                                        (e.__c &&
                                            e.__c.__H &&
                                            (e.__c.__H.__.forEach(function(t) {
                                                'function' == typeof t.__c &&
                                                    t.__c();
                                            }),
                                            (e.__c.__H = null)),
                                        null != (e = D({}, e)).__c &&
                                            (e.__c.__P === r && (e.__c.__P = n),
                                            (e.__c = null)),
                                        (e.__k =
                                            e.__k &&
                                            e.__k.map(function(e) {
                                                return t(e, n, r);
                                            }))),
                                    e
                                );
                            })(this.__b, n, (r.__O = r.__P));
                        }
                        this.__b = null;
                    }
                    var o =
                        e.__e &&
                        Object(s.createElement)(s.Fragment, null, t.fallback);
                    return (
                        o && (o.__h = null),
                        [
                            Object(s.createElement)(
                                s.Fragment,
                                null,
                                e.__e ? null : t.children
                            ),
                            o
                        ]
                    );
                });
            var V = function(t, e, n) {
                if (
                    (++n[1] === n[0] && t.o.delete(e),
                    t.props.revealOrder &&
                        ('t' !== t.props.revealOrder[0] || !t.o.size))
                )
                    for (n = t.u; n; ) {
                        for (; n.length > 3; ) n.pop()();
                        if (n[1] < n[0]) break;
                        t.u = n = n[2];
                    }
            };
            function Y(t) {
                return (
                    (this.getChildContext = function() {
                        return t.context;
                    }),
                    t.children
                );
            }
            function Q(t) {
                var e = this,
                    n = t.i;
                (e.componentWillUnmount = function() {
                    Object(s.render)(null, e.l), (e.l = null), (e.i = null);
                }),
                    e.i && e.i !== n && e.componentWillUnmount(),
                    t.__v
                        ? (e.l ||
                              ((e.i = n),
                              (e.l = {
                                  nodeType: 1,
                                  parentNode: n,
                                  childNodes: [],
                                  appendChild: function(t) {
                                      this.childNodes.push(t),
                                          e.i.appendChild(t);
                                  },
                                  insertBefore: function(t, n) {
                                      this.childNodes.push(t),
                                          e.i.appendChild(t);
                                  },
                                  removeChild: function(t) {
                                      this.childNodes.splice(
                                          this.childNodes.indexOf(t) >>> 1,
                                          1
                                      ),
                                          e.i.removeChild(t);
                                  }
                              })),
                          Object(s.render)(
                              Object(s.createElement)(
                                  Y,
                                  { context: e.context },
                                  t.__v
                              ),
                              e.l
                          ))
                        : e.l && e.componentWillUnmount();
            }
            function $(t, e) {
                return Object(s.createElement)(Q, { __v: t, i: e });
            }
            ((z.prototype = new s.Component()).__e = function(t) {
                var e = this,
                    n = K(e.__v),
                    r = e.o.get(t);
                return (
                    r[0]++,
                    function(o) {
                        var i = function() {
                            e.props.revealOrder ? (r.push(o), V(e, t, r)) : o();
                        };
                        n ? n(i) : i();
                    }
                );
            }),
                (z.prototype.render = function(t) {
                    (this.u = null), (this.o = new Map());
                    var e = Object(s.toChildArray)(t.children);
                    t.revealOrder && 'b' === t.revealOrder[0] && e.reverse();
                    for (var n = e.length; n--; )
                        this.o.set(e[n], (this.u = [1, 0, this.u]));
                    return t.children;
                }),
                (z.prototype.componentDidUpdate = z.prototype.componentDidMount = function() {
                    var t = this;
                    this.o.forEach(function(e, n) {
                        V(t, n, e);
                    });
                });
            var J =
                    ('undefined' != typeof Symbol &&
                        Symbol.for &&
                        Symbol.for('react.element')) ||
                    60103,
                Z = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                X = function(t) {
                    return ('undefined' != typeof Symbol &&
                    'symbol' == typeof Symbol()
                        ? /fil|che|rad/i
                        : /fil|che|ra/i
                    ).test(t);
                };
            function tt(t, e, n) {
                return (
                    null == e.__k && (e.textContent = ''),
                    Object(s.render)(t, e),
                    'function' == typeof n && n(),
                    t ? t.__c : null
                );
            }
            function et(t, e, n) {
                return (
                    Object(s.hydrate)(t, e),
                    'function' == typeof n && n(),
                    t ? t.__c : null
                );
            }
            (s.Component.prototype.isReactComponent = {}),
                [
                    'componentWillMount',
                    'componentWillReceiveProps',
                    'componentWillUpdate'
                ].forEach(function(t) {
                    Object.defineProperty(s.Component.prototype, t, {
                        configurable: !0,
                        get: function() {
                            return this['UNSAFE_' + t];
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                configurable: !0,
                                writable: !0,
                                value: e
                            });
                        }
                    });
                });
            var nt = s.options.event;
            function rt() {}
            function ot() {
                return this.cancelBubble;
            }
            function it() {
                return this.defaultPrevented;
            }
            s.options.event = function(t) {
                return (
                    nt && (t = nt(t)),
                    (t.persist = rt),
                    (t.isPropagationStopped = ot),
                    (t.isDefaultPrevented = it),
                    (t.nativeEvent = t)
                );
            };
            var st,
                ut = {
                    configurable: !0,
                    get: function() {
                        return this.class;
                    }
                },
                at = s.options.vnode;
            s.options.vnode = function(t) {
                var e = t.type,
                    n = t.props,
                    r = n;
                if ('string' == typeof e) {
                    for (var o in ((r = {}), n)) {
                        var i = n[o];
                        ('value' === o && 'defaultValue' in n && null == i) ||
                            ('defaultValue' === o &&
                            'value' in n &&
                            null == n.value
                                ? (o = 'value')
                                : 'download' === o && !0 === i
                                ? (i = '')
                                : /ondoubleclick/i.test(o)
                                ? (o = 'ondblclick')
                                : /^onchange(textarea|input)/i.test(o + e) &&
                                  !X(n.type)
                                ? (o = 'oninput')
                                : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
                                ? (o = o.toLowerCase())
                                : Z.test(o)
                                ? (o = o
                                      .replace(/[A-Z0-9]/, '-$&')
                                      .toLowerCase())
                                : null === i && (i = void 0),
                            (r[o] = i));
                    }
                    'select' == e &&
                        r.multiple &&
                        Array.isArray(r.value) &&
                        (r.value = Object(s.toChildArray)(n.children).forEach(
                            function(t) {
                                t.props.selected =
                                    -1 != r.value.indexOf(t.props.value);
                            }
                        )),
                        'select' == e &&
                            null != r.defaultValue &&
                            (r.value = Object(s.toChildArray)(
                                n.children
                            ).forEach(function(t) {
                                t.props.selected = r.multiple
                                    ? -1 !=
                                      r.defaultValue.indexOf(t.props.value)
                                    : r.defaultValue == t.props.value;
                            })),
                        (t.props = r);
                }
                e &&
                    n.class != n.className &&
                    ((ut.enumerable = 'className' in n),
                    null != n.className && (r.class = n.className),
                    Object.defineProperty(r, 'className', ut)),
                    (t.$$typeof = J),
                    at && at(t);
            };
            var ct = s.options.__r;
            s.options.__r = function(t) {
                ct && ct(t), (st = t.__c);
            };
            var lt = {
                    ReactCurrentDispatcher: {
                        current: {
                            readContext: function(t) {
                                return st.__n[t.__c].props.value;
                            }
                        }
                    }
                },
                pt = 1,
                ft = 2,
                dt = 3,
                ht = 4,
                _t = 5;
            function mt(t, e) {
                return e();
            }
            var vt =
                    'object' == typeof performance &&
                    'function' == typeof performance.now
                        ? performance.now.bind(performance)
                        : function() {
                              return Date.now();
                          },
                yt = '16.8.0';
            function bt(t) {
                return s.createElement.bind(null, t);
            }
            function gt(t) {
                return !!t && t.$$typeof === J;
            }
            function kt(t) {
                return gt(t) ? s.cloneElement.apply(null, arguments) : t;
            }
            function xt(t) {
                return !!t.__k && (Object(s.render)(null, t), !0);
            }
            function wt(t) {
                return (t && (t.base || (1 === t.nodeType && t))) || null;
            }
            var Pt = function(t, e) {
                    return t(e);
                },
                Ct = s.Fragment;
            e.default = {
                useState: _,
                useReducer: m,
                useEffect: v,
                useLayoutEffect: y,
                useRef: b,
                useImperativeHandle: g,
                useMemo: k,
                useCallback: x,
                useContext: w,
                useDebugValue: P,
                version: '16.8.0',
                Children: B,
                render: tt,
                hydrate: et,
                unmountComponentAtNode: xt,
                createPortal: $,
                createElement: s.createElement,
                createContext: s.createContext,
                createFactory: bt,
                cloneElement: kt,
                createRef: s.createRef,
                Fragment: s.Fragment,
                isValidElement: gt,
                findDOMNode: wt,
                Component: s.Component,
                PureComponent: N,
                memo: U,
                forwardRef: F,
                unstable_batchedUpdates: Pt,
                StrictMode: s.Fragment,
                Suspense: q,
                SuspenseList: z,
                lazy: G,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: lt
            };
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    };
            (e.__esModule = !0),
                (e.Tooltip = e.inversePosition = e.DEFAULT_SUBSCRIBE_LABEL = void 0);
            var s = n(0),
                u = n(1),
                a = n(8),
                c = n(2),
                l = n(22),
                p = n(23),
                f = n(24);
            (e.DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications'),
                (e.inversePosition = function(t) {
                    return t.indexOf('left') > -1 ? 'right' : 'left';
                });
            var d = (function(t) {
                function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    o(e, t),
                    (e.prototype.render = function() {
                        return s.h(
                            'div',
                            {
                                class:
                                    'kumulos-tooltip kumulos-tooltip-' +
                                    this.props.position
                            },
                            this.props.children
                        );
                    }),
                    e
                );
            })(s.Component);
            e.Tooltip = d;
            var h = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            var t,
                                e = this.props,
                                n = e.promptState,
                                r = e.prompt,
                                o = e.subscriptionState;
                            if (
                                !r ||
                                'requesting' !== n ||
                                !r.overlay ||
                                'unsubscribed' !== o
                            )
                                return null;
                            var i = r.overlay,
                                u = {
                                    background: i.colors.shade,
                                    color: i.colors.text
                                };
                            return s.h(
                                m,
                                {
                                    style: u,
                                    blurClass: 'kumulos-overlay-blur',
                                    class:
                                        'kumulos-overlay kumulos-overlay-' +
                                        c.getBrowserName()
                                },
                                s.h(
                                    'div',
                                    {
                                        class: 'kumulos-overlay-strip',
                                        style: { background: i.colors.strip }
                                    },
                                    s.h(
                                        'div',
                                        {
                                            class:
                                                'kumulos-overlay-content-container'
                                        },
                                        s.h(
                                            'svg',
                                            {
                                                xmlns:
                                                    'http://www.w3.org/2000/svg',
                                                width: '65',
                                                height: '35',
                                                viewBox: '0 0 64 33'
                                            },
                                            s.h('path', {
                                                fill: 'none',
                                                stroke: i.colors.text,
                                                'stroke-width': '2.5px',
                                                'stroke-linecap': 'round',
                                                d:
                                                    'M 12.57,11.12\n           C 12.57,11.12 6.84,20.82 4.13,21.01\n             1.42,21.21 20.71,28.67 26.62,28.67M 4.23,21.01\n           C 4.23,21.01 53.96,14.91 60.65,3.47'
                                            })
                                        ),
                                        i.iconUrl &&
                                            s.h('img', { src: i.iconUrl }),
                                        s.h(
                                            'div',
                                            {
                                                class: 'kumulos-overlay-content'
                                            },
                                            s.h('h3', null, i.labels.heading),
                                            s.h('p', null, i.labels.body),
                                            null === (t = i.links) ||
                                                void 0 === t
                                                ? void 0
                                                : t.map(function(t) {
                                                      return s.h(
                                                          'a',
                                                          {
                                                              href: t.url,
                                                              target: '_blank'
                                                          },
                                                          t.label
                                                      );
                                                  })
                                        )
                                    )
                                )
                            );
                        }),
                        e
                    );
                })(s.Component),
                _ = (function(t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            return s.h(
                                'div',
                                { class: 'kumulos-toast' },
                                this.props.message
                            );
                        }),
                        e
                    );
                })(s.Component),
                m = (function(t) {
                    function e(e) {
                        var n,
                            r,
                            o = t.call(this, e) || this,
                            i =
                                null !==
                                    (r =
                                        null === (n = o.props.blurClass) ||
                                        void 0 === n
                                            ? void 0
                                            : n.split(' ')) && void 0 !== r
                                    ? r
                                    : [];
                        return (
                            i.push('kumulos-background-mask-blur'),
                            (o.state = { blurClasses: i }),
                            o
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.updateBlurState = function() {
                            this.state.blurClasses.forEach(function(t) {
                                document.body.classList.contains(t) ||
                                    document.body.classList.add(t);
                            });
                        }),
                        (e.prototype.componentDidMount = function() {
                            this.updateBlurState();
                        }),
                        (e.prototype.componentDidUpdate = function() {
                            this.updateBlurState();
                        }),
                        (e.prototype.componentWillUnmount = function() {
                            this.state.blurClasses.forEach(function(t) {
                                return document.body.classList.remove(t);
                            });
                        }),
                        (e.prototype.render = function() {
                            var t = this.props,
                                e = t.class,
                                n = t.style,
                                r = ['kumulos-background-mask'];
                            return (
                                e && r.push(e),
                                s.h(
                                    'div',
                                    { style: n, class: r.join(' ') },
                                    this.props.children
                                )
                            );
                        }),
                        e
                    );
                })(s.Component),
                v = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.dequeueToast = function() {
                                n.setState({
                                    toastQueue: n.state.toastQueue.slice(1)
                                });
                            }),
                            (n.state = { toastQueue: [] }),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.showToast = function(t) {
                            t &&
                                t.length &&
                                (this.setState({
                                    toastQueue: i(this.state.toastQueue, [t])
                                }),
                                setTimeout(this.dequeueToast, 3200));
                        }),
                        (e.prototype.render = function() {
                            return a.createPortal(
                                s.h(
                                    s.Fragment,
                                    null,
                                    this.maybeRenderPromptBackgroundMask(),
                                    this.props.prompts.map(
                                        this.renderPrompt,
                                        this
                                    ),
                                    this.renderPostAction(),
                                    !c.isMobile() &&
                                        s.h(h, {
                                            promptState: this.props
                                                .promptManagerState,
                                            prompt: this.props
                                                .currentlyRequestingPrompt,
                                            subscriptionState: this.props
                                                .subscriptionState
                                        }),
                                    this.state.toastQueue.length > 0 &&
                                        s.h(_, {
                                            message: this.state.toastQueue[0]
                                        })
                                ),
                                document.body
                            );
                        }),
                        (e.prototype.maybeRenderPromptBackgroundMask = function() {
                            if ('requesting' === this.props.promptManagerState)
                                return null;
                            var t = this.props.prompts.filter(function(t) {
                                return (
                                    (t.type === u.PromptTypeName.ALERT ||
                                        t.type === u.PromptTypeName.BANNER) &&
                                    !!t.backgroundMask
                                );
                            })[0];
                            if (!t) return null;
                            var e = {
                                backgroundColor: t.backgroundMask.colors.bg
                            };
                            return s.h(m, { style: e });
                        }),
                        (e.prototype.renderPrompt = function(t) {
                            var e;
                            if ('requesting' === this.props.promptManagerState)
                                return null;
                            if ('postaction' === this.props.promptManagerState)
                                return null;
                            switch (t.type) {
                                case 'bell':
                                    return s.h(l.Bell, {
                                        config: t,
                                        subscriptionState: this.props
                                            .subscriptionState,
                                        promptManagerState: this.props
                                            .promptManagerState,
                                        onPromptAccepted: this.props
                                            .onPromptAccepted,
                                        onPromptDeclined: this.props
                                            .onPromptDeclined
                                    });
                                case 'alert':
                                case 'banner':
                                    var n = void 0;
                                    return (
                                        t.type === u.PromptTypeName.ALERT &&
                                            (n =
                                                null === (e = t.actions) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.find(function(t) {
                                                          return (
                                                              'userChannelSelectInline' ===
                                                              t.type
                                                          );
                                                      })),
                                        s.h(p.Dialog, {
                                            config: t,
                                            subscriptionState: this.props
                                                .subscriptionState,
                                            promptManagerState: this.props
                                                .promptManagerState,
                                            onPromptAccepted: this.props
                                                .onPromptAccepted,
                                            onPromptDeclined: this.props
                                                .onPromptDeclined,
                                            action: n
                                        })
                                    );
                                default:
                                    return null;
                            }
                        }),
                        (e.prototype.renderPostAction = function() {
                            var t = this,
                                e = this.props,
                                n = e.promptManagerState,
                                r = e.currentPostAction,
                                o = e.currentlyRequestingPrompt;
                            if ('postaction' !== n) return null;
                            if (!o) return null;
                            if (
                                'userChannelSelectDialog' !==
                                (null == r ? void 0 : r.type)
                            )
                                return null;
                            var i = null;
                            if (
                                (o.type === u.PromptTypeName.ALERT ||
                                    o.type === u.PromptTypeName.BANNER) &&
                                void 0 !== o.backgroundMask
                            ) {
                                var a = o.backgroundMask;
                                i = s.h(m, {
                                    style: { backgroundColor: a.colors.bg }
                                });
                            }
                            return s.h(
                                s.Fragment,
                                null,
                                i,
                                s.h(f.ChannelsDialog, {
                                    action: r,
                                    onConfirm: function(e) {
                                        t.props.onPostActionConfirm(o, e);
                                    }
                                })
                            );
                        }),
                        e
                    );
                })(s.Component);
            e.default = v;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    };
            (e.__esModule = !0), (e.ChannelsList = void 0);
            var s = n(0),
                u = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.state = { channels: i(n.props.channelList) }),
                            n.props.onChannelSelectionChanged(n.state.channels),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.onChannelCheckChange = function(t, e) {
                            var n = this;
                            (this.state.channels.find(function(e) {
                                return e.channel.uuid === t;
                            }).checked = e),
                                this.setState(
                                    { channels: i(this.state.channels) },
                                    function() {
                                        return n.props.onChannelSelectionChanged(
                                            n.state.channels
                                        );
                                    }
                                );
                        }),
                        (e.prototype.render = function() {
                            var t = this,
                                e = this.state.channels;
                            return e.length
                                ? s.h(
                                      'div',
                                      {
                                          class:
                                              'kumulos-channel-list-container'
                                      },
                                      e.map(function(e) {
                                          return s.h(
                                              'label',
                                              {
                                                  key: e.channel.uuid,
                                                  className:
                                                      'kumulos-checkbox-container'
                                              },
                                              e.channel.name,
                                              s.h('input', {
                                                  type: 'checkbox',
                                                  readOnly: !0,
                                                  checked: e.checked,
                                                  onClick: function(n) {
                                                      t.onChannelCheckChange(
                                                          e.channel.uuid,
                                                          n.currentTarget
                                                              .checked
                                                      );
                                                  }
                                              }),
                                              s.h('span', {
                                                  className: 'kumulos-checkbox'
                                              })
                                          );
                                      })
                                  )
                                : null;
                        }),
                        e
                    );
                })(s.Component);
            e.ChannelsList = u;
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0),
                (e.PromptTriggerEventFilter = e.triggerMatched = void 0);
            var i = n(2),
                s = n(7);
            function u(t, e) {
                return (
                    !!Array.isArray(t) &&
                    ('string' == typeof e
                        ? t
                              .map(function(t) {
                                  var e =
                                      '^' +
                                      i.escapeRegExp(t).replace(/\\\*/g, '.*') +
                                      '$';
                                  return new RegExp(e, 'g');
                              })
                              .reduce(function(t, n) {
                                  return t || n.test(String(e));
                              }, !1)
                        : 'number' == typeof e && t.indexOf(e) > -1)
                );
            }
            function a(t, e) {
                return t == e;
            }
            function c(t, e) {
                return e > t;
            }
            function l(t, e) {
                return e >= t;
            }
            function p(t, e) {
                return e < t;
            }
            function f(t, e) {
                return e <= t;
            }
            function d(t, e) {
                var n,
                    r = t.trigger;
                if (r.event !== e.type) return !1;
                if (
                    !(null === (n = r.filters) || void 0 === n
                        ? void 0
                        : n.length)
                )
                    return !0;
                if (!e.data) return !1;
                for (var o = !0, i = 0; i < r.filters.length; ++i) {
                    var s = r.filters[i],
                        d = s[0],
                        h = s[1],
                        _ = s[2],
                        m = e.data[d],
                        v = !1;
                    switch (h) {
                        case 'in':
                        case 'IN':
                            v = u(_, m);
                            break;
                        case '=':
                            v = a(_, m);
                            break;
                        case '>':
                            v = c(_, m);
                            break;
                        case '>=':
                            v = l(_, m);
                            break;
                        case '<':
                            v = p(_, m);
                            break;
                        case '<=':
                            v = f(_, m);
                            break;
                        default:
                            console.warn('Unknown filter operator: ' + h);
                    }
                    o = o && v;
                }
                return o;
            }
            e.triggerMatched = d;
            var h = (function() {
                function t(t, e) {
                    var n = this;
                    (this.eventQueue = []),
                        (this.handleSdkEvent = function(t) {
                            var e,
                                r,
                                o = t.data;
                            (e = n.eventQueue).push.apply(e, o),
                                null === (r = n.eventReceivedCallback) ||
                                    void 0 === r ||
                                    r.call(n, t);
                        }),
                        (this.eventReceivedCallback = e),
                        t.subscribe('eventTracked', this.handleSdkEvent);
                }
                return (
                    (t.prototype.filterPrompts = function(t, e) {
                        return (
                            void 0 === e &&
                                (e = function(t) {
                                    return !0;
                                }),
                            r(this, void 0, void 0, function() {
                                var n, r, i, u, a, c, l, p;
                                return o(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            for (i in ((n = []), (r = []), t))
                                                r.push(i);
                                            (u = 0), (o.label = 1);
                                        case 1:
                                            if (!(u < r.length)) return [3, 6];
                                            (a = r[u]),
                                                (c = t[a]),
                                                (l = 0),
                                                (o.label = 2);
                                        case 2:
                                            return l < this.eventQueue.length
                                                ? ((p = this.eventQueue[l]),
                                                  [4, s.isPromptSuppressed(c)])
                                                : [3, 5];
                                        case 3:
                                            !o.sent() &&
                                                d(c, p) &&
                                                e(c) &&
                                                n.push(c),
                                                (o.label = 4);
                                        case 4:
                                            return ++l, [3, 2];
                                        case 5:
                                            return u++, [3, 1];
                                        case 6:
                                            return (
                                                (this.eventQueue = []), [2, n]
                                            );
                                    }
                                });
                            })
                        );
                    }),
                    t
                );
            })();
            e.PromptTriggerEventFilter = h;
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0),
                (e.deferPromptActivation = void 0),
                (e.deferPromptActivation = function(t, e) {
                    return (
                        !(
                            void 0 === t.trigger.afterSeconds ||
                            t.trigger.afterSeconds < 0
                        ) &&
                        (t.trigger.afterSeconds,
                        setTimeout(e, 1e3 * t.trigger.afterSeconds, t),
                        !0)
                    );
                });
        },
        function(t, e, n) {
            'use strict';
            t.exports = function(t) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = (function(t, e) {
                                var n = t[1] || '',
                                    r = t[3];
                                if (!r) return n;
                                if (e && 'function' == typeof btoa) {
                                    var o =
                                            ((s = r),
                                            (u = btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(s)
                                                    )
                                                )
                                            )),
                                            (a = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                u
                                            )),
                                            '/*# '.concat(a, ' */')),
                                        i = r.sources.map(function(t) {
                                            return '/*# sourceURL='
                                                .concat(r.sourceRoot)
                                                .concat(t, ' */');
                                        });
                                    return [n]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n');
                                }
                                var s, u, a;
                                return [n].join('\n');
                            })(e, t);
                            return e[2]
                                ? '@media '.concat(e[2], ' {').concat(n, '}')
                                : n;
                        }).join('');
                    }),
                    (e.i = function(t, n) {
                        'string' == typeof t && (t = [[null, t, '']]);
                        for (var r = 0; r < t.length; r++) {
                            var o = [].concat(t[r]);
                            n &&
                                (o[2]
                                    ? (o[2] = ''
                                          .concat(n, ' and ')
                                          .concat(o[2]))
                                    : (o[2] = n)),
                                e.push(o);
                        }
                    }),
                    e
                );
            };
        },
        function(t, e, n) {
            'use strict';
            var r,
                o = {},
                i = function() {
                    return (
                        'undefined' == typeof r &&
                            (r = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            )),
                        r
                    );
                },
                s = (function() {
                    var t = {};
                    return function(e) {
                        if ('undefined' == typeof t[e]) {
                            var n = document.querySelector(e);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })();
            function u(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        s = e.base ? i[0] + e.base : i[0],
                        u = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[s]
                        ? r[s].parts.push(u)
                        : n.push((r[s] = { id: s, parts: [u] }));
                }
                return n;
            }
            function a(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        i = o[r.id],
                        s = 0;
                    if (i) {
                        for (i.refs++; s < i.parts.length; s++)
                            i.parts[s](r.parts[s]);
                        for (; s < r.parts.length; s++)
                            i.parts.push(m(r.parts[s], e));
                    } else {
                        for (var u = []; s < r.parts.length; s++)
                            u.push(m(r.parts[s], e));
                        o[r.id] = { id: r.id, refs: 1, parts: u };
                    }
                }
            }
            function c(t) {
                var e = document.createElement('style');
                if ('undefined' == typeof t.attributes.nonce) {
                    var r = n.nc;
                    r && (t.attributes.nonce = r);
                }
                if (
                    (Object.keys(t.attributes).forEach(function(n) {
                        e.setAttribute(n, t.attributes[n]);
                    }),
                    'function' == typeof t.insert)
                )
                    t.insert(e);
                else {
                    var o = s(t.insert || 'head');
                    if (!o)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    o.appendChild(e);
                }
                return e;
            }
            var l,
                p =
                    ((l = []),
                    function(t, e) {
                        return (l[t] = e), l.filter(Boolean).join('\n');
                    });
            function f(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = p(e, o);
                else {
                    var i = document.createTextNode(o),
                        s = t.childNodes;
                    s[e] && t.removeChild(s[e]),
                        s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
                }
            }
            function d(t, e, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if (
                    (o && t.setAttribute('media', o),
                    i &&
                        btoa &&
                        (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                            btoa(
                                unescape(encodeURIComponent(JSON.stringify(i)))
                            ),
                            ' */'
                        )),
                    t.styleSheet)
                )
                    t.styleSheet.cssText = r;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(r));
                }
            }
            var h = null,
                _ = 0;
            function m(t, e) {
                var n, r, o;
                if (e.singleton) {
                    var i = _++;
                    (n = h || (h = c(e))),
                        (r = f.bind(null, n, i, !1)),
                        (o = f.bind(null, n, i, !0));
                } else
                    (n = c(e)),
                        (r = d.bind(null, n, e)),
                        (o = function() {
                            !(function(t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        });
                return (
                    r(t),
                    function(e) {
                        if (e) {
                            if (
                                e.css === t.css &&
                                e.media === t.media &&
                                e.sourceMap === t.sourceMap
                            )
                                return;
                            r((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function(t, e) {
                ((e = e || {}).attributes =
                    'object' == typeof e.attributes ? e.attributes : {}),
                    e.singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton = i());
                var n = u(t, e);
                return (
                    a(n, e),
                    function(t) {
                        for (var r = [], i = 0; i < n.length; i++) {
                            var s = n[i],
                                c = o[s.id];
                            c && (c.refs--, r.push(c));
                        }
                        t && a(u(t, e), e);
                        for (var l = 0; l < r.length; l++) {
                            var p = r[l];
                            if (0 === p.refs) {
                                for (var f = 0; f < p.parts.length; f++)
                                    p.parts[f]();
                                delete o[p.id];
                            }
                        }
                    }
                );
            };
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__createBinding) ||
                    (Object.create
                        ? function(t, e, n, r) {
                              void 0 === r && (r = n),
                                  Object.defineProperty(t, r, {
                                      enumerable: !0,
                                      get: function() {
                                          return e[n];
                                      }
                                  });
                          }
                        : function(t, e, n, r) {
                              void 0 === r && (r = n), (t[r] = e[n]);
                          }),
                o =
                    (this && this.__setModuleDefault) ||
                    (Object.create
                        ? function(t, e) {
                              Object.defineProperty(t, 'default', {
                                  enumerable: !0,
                                  value: e
                              });
                          }
                        : function(t, e) {
                              t.default = e;
                          }),
                i =
                    (this && this.__importStar) ||
                    function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t)
                                Object.hasOwnProperty.call(t, n) && r(e, t, n);
                        return o(e, t), e;
                    },
                s =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                u =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    },
                a =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            e.__esModule = !0;
            var c = n(1),
                l = n(17),
                p = n(3),
                f = i(n(4)),
                d = n(20),
                h = n(21),
                _ = n(2),
                m = a(n(25)),
                v = a(n(28)),
                y = (function() {
                    function t(t) {
                        var e = this;
                        if (
                            ((this.onWorkerMessage = function(t) {
                                var n, r;
                                if (
                                    t.origin === location.origin &&
                                    l.isKumulosWorkerMessage(t.data)
                                )
                                    switch (t.data.type) {
                                        case l.WorkerMessageType.KPushReceived:
                                            var o = f.notificationFromPayload(
                                                t.data.data
                                            );
                                            null ===
                                                (r = (n = e.config)
                                                    .onPushReceived) ||
                                                void 0 === r ||
                                                r.call(n, o);
                                    }
                            }),
                            c.assertConfigValid(t),
                            (this.config = t),
                            (this.context = new c.Context(t)),
                            p.persistConfig(t),
                            c.trackInstallDetails(this.context),
                            (this.rootFrame = new m.default()),
                            this.context.hasFeature(c.SDKFeature.PUSH) &&
                                (f.trackOpenFromQuery(this.context),
                                (this.serviceWorkerReg = _.registerServiceWorker(
                                    this.context.serviceWorkerPath
                                )),
                                (this.promptManager = new h.PromptManager(
                                    this,
                                    this.context,
                                    this.rootFrame
                                )),
                                'serviceWorker' in navigator &&
                                    navigator.serviceWorker.addEventListener(
                                        'message',
                                        this.onWorkerMessage
                                    ),
                                this.maybeFireOpenedHandler()),
                            this.context.hasFeature(c.SDKFeature.DDL))
                        ) {
                            if (!_.isMobile()) return;
                            this.ddlManager = new v.default(
                                this.context,
                                this.rootFrame
                            );
                        }
                    }
                    return (
                        (t.prototype.getInstallId = function() {
                            return c.getInstallId();
                        }),
                        (t.prototype.getCurrentUserIdentifier = function() {
                            return c.getUserId();
                        }),
                        (t.prototype.associateUser = function(t, e) {
                            return c.associateUser(this.context, t, e);
                        }),
                        (t.prototype.clearUserAssociation = function() {
                            return c.clearUserAssociation(this.context);
                        }),
                        (t.prototype.trackEvent = function(t, e) {
                            return c
                                .trackEvent(this.context, t, e)
                                .then(function(t) {});
                        }),
                        (t.prototype.pushRegister = function() {
                            return s(this, void 0, void 0, function() {
                                var t,
                                    e = this;
                                return u(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, f.default(this.context)];
                                        case 1:
                                            return [
                                                2,
                                                (t = n.sent())
                                                    .requestNotificationPermission(
                                                        this.context
                                                    )
                                                    .then(function(t) {
                                                        if ('granted' !== t)
                                                            return Promise.reject(
                                                                'Notification permission not granted'
                                                            );
                                                    })
                                                    .then(function() {
                                                        return t.pushRegister(
                                                            e.context
                                                        );
                                                    })
                                            ];
                                    }
                                });
                            });
                        }),
                        (t.prototype.getChannelSubscriptionManager = function() {
                            return (
                                this.channelSubscriptionManager ||
                                    (this.channelSubscriptionManager = new d.ChannelSubscriptionManager(
                                        this.context
                                    )),
                                this.channelSubscriptionManager
                            );
                        }),
                        (t.prototype.maybeFireOpenedHandler = function() {
                            var t, e;
                            return s(this, void 0, void 0, function() {
                                var n, r;
                                return u(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [
                                                4,
                                                p.getMostRecentlyOpenedPushPayload()
                                            ];
                                        case 1:
                                            return (n = o.sent())
                                                ? ((r = f.notificationFromPayload(
                                                      n
                                                  )),
                                                  null ===
                                                      (e = (t = this.config)
                                                          .onPushOpened) ||
                                                      void 0 === e ||
                                                      e.call(t, r),
                                                  [2])
                                                : [2];
                                    }
                                });
                            });
                        }),
                        t
                    );
                })();
            e.default = y;
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0),
                (e.keys = e.clear = e.del = e.set = e.get = e.Store = void 0);
            var r,
                o = (function() {
                    function t(t, e) {
                        void 0 === t && (t = 'keyval-store'),
                            void 0 === e && (e = 'keyval'),
                            (this.storeName = e),
                            (this._dbp = new Promise(function(n, r) {
                                var o = indexedDB.open(t, 1);
                                (o.onerror = function() {
                                    return r(o.error);
                                }),
                                    (o.onsuccess = function() {
                                        return n(o.result);
                                    }),
                                    (o.onupgradeneeded = function() {
                                        o.result.createObjectStore(e);
                                    });
                            }));
                    }
                    return (
                        (t.prototype._withIDBStore = function(t, e) {
                            var n = this;
                            return this._dbp.then(function(r) {
                                return new Promise(function(o, i) {
                                    var s = r.transaction(n.storeName, t);
                                    (s.oncomplete = function() {
                                        return o();
                                    }),
                                        (s.onabort = s.onerror = function() {
                                            return i(s.error);
                                        }),
                                        e(s.objectStore(n.storeName));
                                });
                            });
                        }),
                        t
                    );
                })();
            function i() {
                return r || (r = new o()), r;
            }
            (e.Store = o),
                (e.get = function(t, e) {
                    var n;
                    return (
                        void 0 === e && (e = i()),
                        e
                            ._withIDBStore('readonly', function(e) {
                                n = e.get(t);
                            })
                            .then(function() {
                                return n.result;
                            })
                    );
                }),
                (e.set = function(t, e, n) {
                    return (
                        void 0 === n && (n = i()),
                        n._withIDBStore('readwrite', function(n) {
                            n.put(e, t);
                        })
                    );
                }),
                (e.del = function(t, e) {
                    return (
                        void 0 === e && (e = i()),
                        e._withIDBStore('readwrite', function(e) {
                            e.delete(t);
                        })
                    );
                }),
                (e.clear = function(t) {
                    return (
                        void 0 === t && (t = i()),
                        t._withIDBStore('readwrite', function(t) {
                            t.clear();
                        })
                    );
                }),
                (e.keys = function(t) {
                    void 0 === t && (t = i());
                    var e = [];
                    return t
                        ._withIDBStore('readonly', function(t) {
                            (t.openKeyCursor || t.openCursor).call(
                                t
                            ).onsuccess = function() {
                                this.result &&
                                    (e.push(this.result.key),
                                    this.result.continue());
                            };
                        })
                        .then(function() {
                            return e;
                        });
                });
        },
        function(t, e, n) {
            'use strict';
            var r;
            (e.__esModule = !0),
                (e.isKumulosWorkerMessage = e.WorkerMessageType = void 0),
                (function(t) {
                    t.KPushReceived = 'KPushReceived';
                })((r = e.WorkerMessageType || (e.WorkerMessageType = {}))),
                (e.isKumulosWorkerMessage = function(t) {
                    return void 0 !== t.type && void 0 !== r[t.type];
                });
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            e.__esModule = !0;
            var i = n(1),
                s = n(4),
                u = n(2),
                a = n(3),
                c = n(5);
            function l(t, e) {
                return u.cyrb53(t.apiKey + ':' + e);
            }
            var p = (function() {
                function t(t) {
                    this.cfg = t;
                }
                return (
                    (t.prototype.requestNotificationPermission = function(t) {
                        var e,
                            n = i.PUSH_BASE_URL + '/safari/' + t.apiKey,
                            r = u.defer();
                        return (
                            null === (e = window.safari) ||
                                void 0 === e ||
                                e.pushNotification.requestPermission(
                                    n,
                                    this.cfg.safariPushId,
                                    {},
                                    function(t) {
                                        r.resolve(t.permission);
                                    }
                                ),
                            r.promise
                        );
                    }),
                    (t.prototype.pushRegister = function(t) {
                        var e;
                        return r(this, void 0, void 0, function() {
                            var n, r, u, p;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, c.loadPlatformConfig(t)];
                                    case 1:
                                        return (
                                            (n = o.sent()),
                                            (r =
                                                null === (e = window.safari) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.pushNotification.permission(
                                                          n.safariPushId
                                                      )) && r.deviceToken
                                                ? [4, a.get('pushTokenHash')]
                                                : [2]
                                        );
                                    case 2:
                                        return (
                                            (u = o.sent()),
                                            (p = l(t, r.deviceToken)),
                                            u === p
                                                ? [2]
                                                : [
                                                      4,
                                                      i.trackEvent(
                                                          t,
                                                          i.EventType
                                                              .PUSH_REGISTERED,
                                                          {
                                                              type:
                                                                  s.TokenType
                                                                      .SAFARI,
                                                              token:
                                                                  r.deviceToken,
                                                              bundleId:
                                                                  n.safariPushId
                                                          }
                                                      )
                                                  ]
                                        );
                                    case 3:
                                        return (
                                            o.sent(),
                                            [4, a.set('pushTokenHash', p)]
                                        );
                                    case 4:
                                        return o.sent(), [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.requestPermissionAndRegisterForPush = function(
                        t
                    ) {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.requestNotificationPermission(
                                                t
                                            )
                                        ];
                                    case 1:
                                        switch (e.sent()) {
                                            case 'default':
                                                return [2, 'unsubscribed'];
                                            case 'denied':
                                                return [2, 'blocked'];
                                        }
                                        e.label = 2;
                                    case 2:
                                        return (
                                            e.trys.push([2, 4, , 5]),
                                            [4, this.pushRegister(t)]
                                        );
                                    case 3:
                                        return e.sent(), [2, 'subscribed'];
                                    case 4:
                                        return e.sent(), [2, 'unsubscribed'];
                                    case 5:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.getCurrentSubscriptionState = function(t) {
                        var e, n;
                        return r(this, void 0, void 0, function() {
                            var r, i, s, u;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, c.loadPlatformConfig(t)];
                                    case 1:
                                        return (
                                            (r = o.sent()),
                                            (i =
                                                null === (e = window.safari) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.pushNotification.permission(
                                                          r.safariPushId
                                                      )) &&
                                            'denied' !==
                                                (null == i
                                                    ? void 0
                                                    : i.permission)
                                                ? [4, a.get('pushTokenHash')]
                                                : [2, 'blocked']
                                        );
                                    case 2:
                                        return (
                                            (s = o.sent()),
                                            (u = l(
                                                t,
                                                null !== (n = i.deviceToken) &&
                                                    void 0 !== n
                                                    ? n
                                                    : ''
                                            )),
                                            s === u &&
                                            'granted' === i.permission
                                                ? [2, 'subscribed']
                                                : [2, 'unsubscribed']
                                        );
                                }
                            });
                        });
                    }),
                    (t.prototype.handleAutoResubscription = function(t) {
                        var e;
                        return r(this, void 0, void 0, function() {
                            var n, r, i, s;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t.autoResubscribe &&
                                            this.cfg.safariPushId
                                            ? [4, c.loadPlatformConfig(t)]
                                            : [2];
                                    case 1:
                                        return (
                                            (n = o.sent()),
                                            (r =
                                                null === (e = window.safari) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.pushNotification.permission(
                                                          n.safariPushId
                                                      )) &&
                                            'granted' === r.permission &&
                                            r.deviceToken
                                                ? [4, a.get('pushTokenHash')]
                                                : [2]
                                        );
                                    case 2:
                                        return (
                                            (i = o.sent()),
                                            (s = l(t, r.deviceToken)),
                                            i === s
                                                ? [2]
                                                : [2, this.pushRegister(t)]
                                        );
                                }
                            });
                        });
                    }),
                    t
                );
            })();
            e.default = p;
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            e.__esModule = !0;
            var i = n(1),
                s = n(4),
                u = n(2),
                a = n(3);
            function c(t, e) {
                var n = e.options.applicationServerKey;
                return !!n && u.base64UrlEncode(n) === t;
            }
            function l() {
                return r(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [
                                    4,
                                    navigator.serviceWorker.getRegistration()
                                ];
                            case 1:
                                return t.sent()
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
            function p(t, e) {
                return u.cyrb53(t.apiKey + ':' + e.endpoint);
            }
            var f = (function() {
                function t() {}
                return (
                    (t.prototype.requestNotificationPermission = function(t) {
                        return r(this, void 0, void 0, function() {
                            var t;
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if ('undefined' == typeof Notification)
                                            return [
                                                2,
                                                Promise.reject(
                                                    'Notifications are not supported in this browser, aborting...'
                                                )
                                            ];
                                        e.label = 1;
                                    case 1:
                                        return (
                                            e.trys.push([1, 3, , 4]),
                                            [
                                                4,
                                                Notification.requestPermission()
                                            ]
                                        );
                                    case 2:
                                        return [2, e.sent()];
                                    case 3:
                                        return (
                                            (t = e.sent()),
                                            console.error(t),
                                            [2, Promise.reject(t)]
                                        );
                                    case 4:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.pushRegister = function(t) {
                        return r(this, void 0, void 0, function() {
                            var e, n, r, u, f, d, h;
                            return o(this, function(o) {
                                switch (o.label) {
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
                                            (e = o.sent()).pushManager.getSubscription()
                                        ];
                                    case 2:
                                        return !(n = o.sent()) ||
                                            c(t.vapidPublicKey, n)
                                            ? [3, 4]
                                            : [
                                                  4,
                                                  null == n
                                                      ? void 0
                                                      : n.unsubscribe()
                                              ];
                                    case 3:
                                        o.sent(), (o.label = 4);
                                    case 4:
                                        return [
                                            4,
                                            e.pushManager.subscribe({
                                                applicationServerKey:
                                                    t.vapidPublicKey,
                                                userVisibleOnly: !0
                                            })
                                        ];
                                    case 5:
                                        return (
                                            (r = o.sent()),
                                            (u = p(t, r)),
                                            (f = r.expirationTime),
                                            [4, a.get('pushEndpointHash')]
                                        );
                                    case 6:
                                        return (
                                            (d = o.sent()),
                                            [4, a.get('pushExpiresAt')]
                                        );
                                    case 7:
                                        return (
                                            (h = o.sent()),
                                            d === u && (!h || h > Date.now())
                                                ? [2]
                                                : [
                                                      4,
                                                      i.trackEvent(
                                                          t,
                                                          i.EventType
                                                              .PUSH_REGISTERED,
                                                          {
                                                              type:
                                                                  s.TokenType
                                                                      .W3C,
                                                              token: r
                                                          }
                                                      )
                                                  ]
                                        );
                                    case 8:
                                        return (
                                            o.sent(),
                                            [4, a.set('pushEndpointHash', u)]
                                        );
                                    case 9:
                                        return (
                                            o.sent(),
                                            [4, a.set('pushExpiresAt', f)]
                                        );
                                    case 10:
                                        return o.sent(), [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.requestPermissionAndRegisterForPush = function(
                        t
                    ) {
                        return r(this, void 0, void 0, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [
                                            4,
                                            this.requestNotificationPermission(
                                                t
                                            )
                                        ];
                                    case 1:
                                        switch (e.sent()) {
                                            case 'default':
                                                return [2, 'unsubscribed'];
                                            case 'denied':
                                                return [2, 'blocked'];
                                        }
                                        e.label = 2;
                                    case 2:
                                        return (
                                            e.trys.push([2, 4, , 5]),
                                            [4, this.pushRegister(t)]
                                        );
                                    case 3:
                                        return e.sent(), [2, 'subscribed'];
                                    case 4:
                                        return e.sent(), [2, 'unsubscribed'];
                                    case 5:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.getCurrentSubscriptionState = function(t) {
                        return r(this, void 0, void 0, function() {
                            var e, n, r;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return 'denied' ===
                                            (e = Notification.permission)
                                            ? [2, 'blocked']
                                            : [4, l()];
                                    case 1:
                                        return [
                                            4,
                                            null == (n = o.sent())
                                                ? void 0
                                                : n.pushManager.getSubscription()
                                        ];
                                    case 2:
                                        return (r = o.sent()) &&
                                            'granted' === e &&
                                            c(t.vapidPublicKey, r)
                                            ? [2, 'subscribed']
                                            : [2, 'unsubscribed'];
                                }
                            });
                        });
                    }),
                    (t.prototype.handleAutoResubscription = function(t) {
                        return r(this, void 0, void 0, function() {
                            var e, n, r, i;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t.autoResubscribe
                                            ? 'granted' !==
                                              Notification.permission
                                                ? [2]
                                                : [4, a.get('pushEndpointHash')]
                                            : [2];
                                    case 1:
                                        return (
                                            (e = o.sent()),
                                            [4, a.get('pushExpiresAt')]
                                        );
                                    case 2:
                                        return (n = o.sent()), [4, l()];
                                    case 3:
                                        return [
                                            4,
                                            o
                                                .sent()
                                                .pushManager.getSubscription()
                                        ];
                                    case 4:
                                        if (
                                            ((r = o.sent()),
                                            (i = void 0),
                                            r && (i = p(t, r)),
                                            void 0 !== e &&
                                                e === i &&
                                                r &&
                                                c(t.vapidPublicKey, r) &&
                                                (null == n || n > Date.now()))
                                        )
                                            return [2];
                                        try {
                                            return [2, this.pushRegister(t)];
                                        } catch (t) {
                                            console.error(t);
                                        }
                                        return [2];
                                }
                            });
                        });
                    }),
                    t
                );
            })();
            e.default = f;
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0), (e.ChannelSubscriptionManager = void 0);
            var r = n(1),
                o = n(2),
                i = (function() {
                    function t(t) {
                        this.context = t;
                    }
                    return (
                        (t.prototype.makeSubscriptionRequest = function(t, e) {
                            var n = this;
                            return r.getInstallId().then(function(i) {
                                var s =
                                        r.PUSH_BASE_URL +
                                        '/v1/app-installs/' +
                                        i +
                                        '/channels/subscriptions',
                                    u = { uuids: e },
                                    a = { method: t, body: JSON.stringify(u) };
                                return o.authedFetch(n.context, s, a);
                            });
                        }),
                        (t.prototype.subscribe = function(t) {
                            return this.makeSubscriptionRequest('POST', t);
                        }),
                        (t.prototype.unsubscribe = function(t) {
                            return this.makeSubscriptionRequest('DELETE', t);
                        }),
                        (t.prototype.setSubscriptions = function(t) {
                            return this.makeSubscriptionRequest('PUT', t);
                        }),
                        (t.prototype.clearSubscriptions = function() {
                            return this.setSubscriptions([]);
                        }),
                        (t.prototype.listChannels = function() {
                            var t = this;
                            return r.getInstallId().then(function(e) {
                                var n =
                                    r.PUSH_BASE_URL +
                                    '/v1/app-installs/' +
                                    e +
                                    '/channels';
                                return o.authedFetchJson(t.context, n);
                            });
                        }),
                        (t.prototype.createChannel = function(t) {
                            var e = this;
                            return !t.showInPortal || (t.name && t.name.length)
                                ? r.getInstallId().then(function(n) {
                                      var i = r.PUSH_BASE_URL + '/v1/channels',
                                          s = {
                                              uuid: t.uuid,
                                              name: t.name,
                                              showInPortal: Boolean(
                                                  t.showInPortal
                                              ),
                                              meta: t.meta,
                                              installId: void 0
                                          };
                                      t.subscribe && (s.installId = n);
                                      var u = {
                                          method: 'POST',
                                          body: JSON.stringify(s)
                                      };
                                      return o.authedFetchJson(e.context, i, u);
                                  })
                                : Promise.reject({
                                      error:
                                          'Name is required for channel creation when showInPortal is true'
                                  });
                        }),
                        t
                    );
                })();
            e.ChannelSubscriptionManager = i;
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__assign) ||
                    function() {
                        return (r =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                o =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                i =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    },
                s =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            (e.__esModule = !0), (e.PromptManager = void 0);
            var u = s(n(4)),
                a = n(0),
                c = s(n(9)),
                l = n(11),
                p = n(6),
                f = n(5),
                d = n(7),
                h = n(12),
                _ = (function() {
                    function t(t, e, n) {
                        var r = this;
                        (this.onEventTracked = function(t) {
                            'ready' === r.state && r.evaluateTriggers();
                        }),
                            (this.activateDeferredPrompt = function(t) {
                                r.activatePrompt(t), r.render();
                            }),
                            (this.onRequestNativePrompt = function(t) {
                                return o(r, void 0, void 0, function() {
                                    var e, n;
                                    return i(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return 'requesting' ===
                                                    this.state
                                                    ? [2]
                                                    : ((this.currentlyRequestingPrompt = t),
                                                      this.setState(
                                                          'requesting'
                                                      ),
                                                      (e = this),
                                                      [
                                                          4,
                                                          null ===
                                                              (n = this
                                                                  .pushOpsManager) ||
                                                          void 0 === n
                                                              ? void 0
                                                              : n.requestPermissionAndRegisterForPush(
                                                                    this.context
                                                                )
                                                      ]);
                                            case 1:
                                                return (
                                                    (e.subscriptionState = r.sent()),
                                                    this.setState('ready'),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (this.onRequestPostActionPrompt = function(t, e) {
                                return o(r, void 0, void 0, function() {
                                    return i(this, function(n) {
                                        return (
                                            'postaction' === this.state ||
                                                'userChannelSelectDialog' !==
                                                    e.type ||
                                                ((this.currentlyRequestingPrompt = t),
                                                (this.currentPostAction = e),
                                                this.setState('postaction')),
                                            [2]
                                        );
                                    });
                                });
                            }),
                            (this.onPromptAccepted = function(t, e) {
                                return o(r, void 0, void 0, function() {
                                    var n, r;
                                    return i(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return 'unsubscribed' !==
                                                    this.subscriptionState
                                                    ? [3, 2]
                                                    : [
                                                          4,
                                                          this.onRequestNativePrompt(
                                                              t
                                                          )
                                                      ];
                                            case 1:
                                                o.sent(), (o.label = 2);
                                            case 2:
                                                return (
                                                    this.hideAndSuppressPrompts(
                                                        t
                                                    ),
                                                    [
                                                        4,
                                                        this.handlePromptActions(
                                                            t
                                                        )
                                                    ]
                                                );
                                            case 3:
                                                return (
                                                    o.sent(),
                                                    [
                                                        4,
                                                        this.handleUserChannelSelection(
                                                            e
                                                        )
                                                    ]
                                                );
                                            case 4:
                                                return (
                                                    o.sent(),
                                                    'subscribed' ===
                                                        this
                                                            .subscriptionState &&
                                                        (null ===
                                                            (n = this.ui) ||
                                                            void 0 === n ||
                                                            n.showToast(
                                                                null ===
                                                                    (r =
                                                                        t.labels) ||
                                                                    void 0 === r
                                                                    ? void 0
                                                                    : r.thanksForSubscribing
                                                            )),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (this.onPostActionConfirm = function(t, e) {
                                return o(r, void 0, void 0, function() {
                                    return i(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [
                                                    4,
                                                    this.handleUserChannelSelection(
                                                        e
                                                    )
                                                ];
                                            case 1:
                                                return (
                                                    n.sent(),
                                                    this.setState('ready'),
                                                    this.hideAndSuppressPrompts(
                                                        t
                                                    ),
                                                    [2]
                                                );
                                        }
                                    });
                                });
                            }),
                            (this.onPromptDeclined = function(t) {
                                d.maybePersistReminder(t), r.hidePrompt(t);
                            }),
                            (this.prompts = {}),
                            (this.activePrompts = []),
                            (this.channels = []),
                            (this.triggerFilter = new l.PromptTriggerEventFilter(
                                e,
                                this.onEventTracked
                            )),
                            (this.pushContainer = n.createContainer('push')),
                            (this.kumulosClient = t),
                            (this.context = e),
                            this.setState('loading');
                    }
                    return (
                        (t.prototype.hideAndSuppressPrompts = function(t) {
                            var e = this,
                                n = this.subscriptionState;
                            this.hidePrompt(t),
                                'unsubscribed' !== n &&
                                    this.activePrompts.forEach(function(t) {
                                        return e.hidePrompt(t);
                                    });
                        }),
                        (t.prototype.handlePromptActions = function(t) {
                            return o(this, void 0, void 0, function() {
                                var e, n;
                                return i(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t.actions
                                                ? (t.actions,
                                                  (e = this.kumulosClient.getChannelSubscriptionManager()),
                                                  (n = this),
                                                  [4, e.listChannels()])
                                                : [2];
                                        case 1:
                                            return (
                                                (n.channels = r.sent()),
                                                [
                                                    4,
                                                    this.handleChannelSubActions(
                                                        t
                                                    )
                                                ]
                                            );
                                        case 2:
                                            return (
                                                r.sent(),
                                                [
                                                    4,
                                                    this.handleChannelPostActions(
                                                        t
                                                    )
                                                ]
                                            );
                                        case 3:
                                            return r.sent(), [2];
                                    }
                                });
                            });
                        }),
                        (t.prototype.handleChannelSubActions = function(t) {
                            return o(this, void 0, void 0, function() {
                                var e,
                                    n,
                                    r = this;
                                return i(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return void 0 === t.actions
                                                ? [2]
                                                : ((e = t.actions.filter(
                                                      function(t) {
                                                          return (
                                                              'subscribeToChannel' ===
                                                              t.type
                                                          );
                                                      }
                                                  )),
                                                  (n = e
                                                      .filter(function(t) {
                                                          return (
                                                              void 0 !==
                                                                  r.channels.find(
                                                                      function(
                                                                          e
                                                                      ) {
                                                                          return (
                                                                              e.uuid ===
                                                                                  t.channelUuid &&
                                                                              !1 ===
                                                                                  e.subscribed
                                                                          );
                                                                      }
                                                                  ) ||
                                                              (t.channelUuid,
                                                              !1)
                                                          );
                                                      })
                                                      .map(function(t) {
                                                          return t.channelUuid;
                                                      })),
                                                  [
                                                      4,
                                                      this.kumulosClient
                                                          .getChannelSubscriptionManager()
                                                          .subscribe(n)
                                                  ]);
                                        case 1:
                                            return o.sent(), [2];
                                    }
                                });
                            });
                        }),
                        (t.prototype.handleChannelPostActions = function(t) {
                            return o(this, void 0, void 0, function() {
                                var e;
                                return i(this, function(n) {
                                    return void 0 === t.actions
                                        ? [2]
                                        : (e = t.actions.filter(function(t) {
                                              return (
                                                  'userChannelSelectDialog' ===
                                                  t.type
                                              );
                                          })).length
                                        ? (this.onRequestPostActionPrompt(
                                              t,
                                              e[0]
                                          ),
                                          [2])
                                        : [2];
                                });
                            });
                        }),
                        (t.prototype.handleUserChannelSelection = function(t) {
                            return o(this, void 0, void 0, function() {
                                var e, n, r;
                                return i(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return void 0 === t
                                                ? [2]
                                                : ((e = this.kumulosClient.getChannelSubscriptionManager()),
                                                  (n = t
                                                      .filter(function(t) {
                                                          return !t.checked;
                                                      })
                                                      .map(function(t) {
                                                          return t.channel.uuid;
                                                      })),
                                                  [4, e.unsubscribe(n)]);
                                        case 1:
                                            return (
                                                o.sent(),
                                                (r = t
                                                    .filter(function(t) {
                                                        return t.checked;
                                                    })
                                                    .map(function(t) {
                                                        return t.channel.uuid;
                                                    })),
                                                [4, e.subscribe(r)]
                                            );
                                        case 2:
                                            return o.sent(), [2];
                                    }
                                });
                            });
                        }),
                        (t.prototype.render = function() {
                            var t = this;
                            this.subscriptionState &&
                                this.state &&
                                this.platformConfig &&
                                a.render(
                                    a.h(
                                        p.UIContext.Provider,
                                        {
                                            value: {
                                                platformConfig: this
                                                    .platformConfig,
                                                channelList: this.channels
                                            }
                                        },
                                        a.h(c.default, {
                                            ref: function(e) {
                                                return (t.ui = e);
                                            },
                                            prompts: this.activePrompts,
                                            subscriptionState: this
                                                .subscriptionState,
                                            promptManagerState: this.state,
                                            onPromptAccepted: this
                                                .onPromptAccepted,
                                            onPromptDeclined: this
                                                .onPromptDeclined,
                                            onPostActionConfirm: this
                                                .onPostActionConfirm,
                                            currentlyRequestingPrompt: this
                                                .currentlyRequestingPrompt,
                                            currentPostAction: this
                                                .currentPostAction
                                        })
                                    ),
                                    this.pushContainer.element
                                );
                        }),
                        (t.prototype.evaluateTriggers = function() {
                            return o(this, void 0, void 0, function() {
                                var t,
                                    e = this;
                                return i(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.triggerFilter.filterPrompts(
                                                    this.prompts,
                                                    function(t) {
                                                        return e.promptActionNeedsTaken(
                                                            t
                                                        );
                                                    }
                                                )
                                            ];
                                        case 1:
                                            return (
                                                (t = n.sent()),
                                                this.activatePrompts(t),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }),
                        (t.prototype.promptActionNeedsTaken = function(t) {
                            var e, n;
                            if ('unsubscribed' === this.subscriptionState)
                                return !0;
                            var r =
                                null !==
                                    (n =
                                        null === (e = t.actions) || void 0 === e
                                            ? void 0
                                            : e
                                                  .filter(function(t) {
                                                      return (
                                                          'subscribeToChannel' ===
                                                          t.type
                                                      );
                                                  })
                                                  .map(function(t) {
                                                      return t.channelUuid;
                                                  })) && void 0 !== n
                                    ? n
                                    : [];
                            return !!(
                                this.channels.filter(function(t) {
                                    return r.includes(t.uuid) && !t.subscribed;
                                }).length > 0
                            );
                        }),
                        (t.prototype.hidePrompt = function(t) {
                            var e = this.activePrompts.indexOf(t);
                            this.activePrompts.splice(e, 1), this.render();
                        }),
                        (t.prototype.activatePrompt = function(t) {
                            this.activePrompts.indexOf(t) > -1 ||
                                this.activePrompts.push(t);
                        }),
                        (t.prototype.activatePrompts = function(t) {
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                h.deferPromptActivation(
                                    n,
                                    this.activateDeferredPrompt
                                ) || this.activatePrompt(n);
                            }
                            this.render();
                        }),
                        (t.prototype.setState = function(t) {
                            (this.state = t), this.onEnter(t);
                        }),
                        (t.prototype.onEnter = function(t) {
                            var e;
                            return o(this, void 0, void 0, function() {
                                var n, r, o, s;
                                return i(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            switch (t) {
                                                case 'loading':
                                                    return [3, 1];
                                                case 'requesting':
                                                    return [3, 7];
                                                case 'ready':
                                                    return [3, 8];
                                                case 'postaction':
                                                    return [3, 11];
                                            }
                                            return [3, 12];
                                        case 1:
                                            return (
                                                (n = this),
                                                [4, u.default(this.context)]
                                            );
                                        case 2:
                                            return (
                                                (n.pushOpsManager = i.sent()),
                                                [
                                                    4,
                                                    this.pushOpsManager.handleAutoResubscription(
                                                        this.context
                                                    )
                                                ]
                                            );
                                        case 3:
                                            return (
                                                i.sent(),
                                                (r = this),
                                                [
                                                    4,
                                                    this.pushOpsManager.getCurrentSubscriptionState(
                                                        this.context
                                                    )
                                                ]
                                            );
                                        case 4:
                                            return (
                                                (r.subscriptionState = i.sent()),
                                                [4, this.loadPrompts()]
                                            );
                                        case 5:
                                            return (
                                                i.sent(),
                                                (o = this),
                                                [
                                                    4,
                                                    this.kumulosClient
                                                        .getChannelSubscriptionManager()
                                                        .listChannels()
                                                ]
                                            );
                                        case 6:
                                            return (
                                                (o.channels = i.sent()),
                                                this.setState('ready'),
                                                [3, 12]
                                            );
                                        case 7:
                                            return this.render(), [3, 12];
                                        case 8:
                                            return (
                                                (this.currentlyRequestingPrompt = void 0),
                                                (this.currentPostAction = void 0),
                                                (s = this),
                                                [
                                                    4,
                                                    null ===
                                                        (e = this
                                                            .pushOpsManager) ||
                                                    void 0 === e
                                                        ? void 0
                                                        : e.getCurrentSubscriptionState(
                                                              this.context
                                                          )
                                                ]
                                            );
                                        case 9:
                                            return (
                                                (s.subscriptionState = i.sent()),
                                                [4, this.evaluateTriggers()]
                                            );
                                        case 10:
                                            return (
                                                i.sent(), this.render(), [3, 12]
                                            );
                                        case 11:
                                            return this.render(), [3, 12];
                                        case 12:
                                            return [2];
                                    }
                                });
                            });
                        }),
                        (t.prototype.loadPrompts = function() {
                            var t, e;
                            return o(this, void 0, void 0, function() {
                                var n, o, s, u, a, c;
                                return i(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return (
                                                (n = this),
                                                [
                                                    4,
                                                    f.loadPlatformConfig(
                                                        this.context
                                                    )
                                                ]
                                            );
                                        case 1:
                                            if (
                                                ((n.platformConfig = i.sent()),
                                                !this.platformConfig.publicKey)
                                            )
                                                return (
                                                    console.error(
                                                        'Failed to load prompts config'
                                                    ),
                                                    [2]
                                                );
                                            for (s in ('auto' !==
                                            this.context.pushPrompts
                                                ? (this.prompts = r(
                                                      {},
                                                      this.context.pushPrompts
                                                  ))
                                                : (this.prompts = r(
                                                      {},
                                                      this.platformConfig
                                                          .prompts || {}
                                                  )),
                                            (o = []),
                                            this.prompts))
                                                o.push(s);
                                            (u = 0), (i.label = 2);
                                        case 2:
                                            if (!(u < o.length)) return [3, 8];
                                            if (
                                                ((a = o[u]),
                                                !Boolean(
                                                    null ===
                                                        (e =
                                                            null ===
                                                                (t = this
                                                                    .prompts[a]
                                                                    .actions) ||
                                                            void 0 === t
                                                                ? void 0
                                                                : t.filter(
                                                                      function(
                                                                          t
                                                                      ) {
                                                                          return (
                                                                              'subscribeToChannel' ===
                                                                              t.type
                                                                          );
                                                                      }
                                                                  )) ||
                                                        void 0 === e
                                                        ? void 0
                                                        : e.length
                                                ))
                                            )
                                                return [3, 7];
                                            i.label = 3;
                                        case 3:
                                            return (
                                                i.trys.push([3, 5, , 6]),
                                                (c = this),
                                                [
                                                    4,
                                                    this.kumulosClient
                                                        .getChannelSubscriptionManager()
                                                        .listChannels()
                                                ]
                                            );
                                        case 4:
                                            return (
                                                (c.channels = i.sent()), [3, 6]
                                            );
                                        case 5:
                                            return i.sent(), [3, 6];
                                        case 6:
                                            return [3, 8];
                                        case 7:
                                            return u++, [3, 2];
                                        case 8:
                                            return [2, Promise.resolve()];
                                    }
                                });
                            });
                        }),
                        t
                    );
                })();
            e.PromptManager = _;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    });
            (e.__esModule = !0), (e.Bell = void 0);
            var i = n(0),
                s = n(9),
                u = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.onRequestNativePrompt = function() {
                                e.props.onPromptAccepted(e.props.config);
                            }),
                            e
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                u,
                                a,
                                c =
                                    'kumulos-prompt kumulos-prompt-' +
                                    this.props.promptManagerState +
                                    ' kumulos-bell-container kumulos-bell-container-' +
                                    this.props.config.position,
                                l = this.props.config,
                                p = s.inversePosition(l.position),
                                f =
                                    null ===
                                        (e =
                                            null === (t = l.colors) ||
                                            void 0 === t
                                                ? void 0
                                                : t.bell) || void 0 === e
                                        ? void 0
                                        : e.bg,
                                d =
                                    null ===
                                        (r =
                                            null === (n = l.colors) ||
                                            void 0 === n
                                                ? void 0
                                                : n.bell) || void 0 === r
                                        ? void 0
                                        : r.fg,
                                h = { borderColor: d, backgroundColor: f };
                            return i.h(
                                'div',
                                { class: c },
                                i.h(
                                    'div',
                                    {
                                        class:
                                            'kumulos-bell-inner kumulos-tooltip-parent'
                                    },
                                    i.h(
                                        'div',
                                        {
                                            class: 'kumulos-bell',
                                            onClick: this.onRequestNativePrompt,
                                            style: h
                                        },
                                        i.h(
                                            'svg',
                                            {
                                                viewBox: '0 0 24 24',
                                                xmlns:
                                                    'http://www.w3.org/2000/svg'
                                            },
                                            i.h('path', {
                                                d:
                                                    'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
                                                fill: d
                                            })
                                        )
                                    ),
                                    i.h(
                                        s.Tooltip,
                                        { position: p },
                                        null !==
                                            (a =
                                                null ===
                                                    (u =
                                                        null ===
                                                            (o = l.labels) ||
                                                        void 0 === o
                                                            ? void 0
                                                            : o.tooltip) ||
                                                void 0 === u
                                                    ? void 0
                                                    : u.subscribe) &&
                                            void 0 !== a
                                            ? a
                                            : s.DEFAULT_SUBSCRIBE_LABEL
                                    )
                                )
                            );
                        }),
                        e
                    );
                })(i.Component);
            e.Bell = u;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__assign) ||
                    function() {
                        return (i =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                s =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    };
            (e.__esModule = !0), (e.Dialog = void 0);
            var u = n(0),
                a = n(1),
                c = n(6),
                l = n(10),
                p = {
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                },
                f = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.onRequestNativePrompt = function() {
                                n.props.onPromptAccepted(
                                    n.props.config,
                                    n.state.channelSelections
                                );
                            }),
                            (n.onRequestCancel = function() {
                                n.props.onPromptDeclined(n.props.config);
                            }),
                            (n.onSelectedChannelChanged = function(t) {
                                n.setState({ channelSelections: s(t) });
                            }),
                            (n.renderAlert = function(t) {
                                if (void 0 === t) return null;
                                var e = n.props.config,
                                    r =
                                        'kumulos-prompt kumulos-prompt-' +
                                        n.props.promptManagerState +
                                        ' kumulos-' +
                                        e.type +
                                        '-container kumulos-prompt-position-' +
                                        e.position,
                                    o =
                                        e.type === a.PromptTypeName.ALERT
                                            ? e.labels.alert
                                            : e.labels.banner,
                                    s = o.heading,
                                    c = o.body,
                                    f = o.declineAction,
                                    d = o.acceptAction,
                                    h =
                                        e.type === a.PromptTypeName.ALERT
                                            ? e.colors.alert
                                            : e.colors.banner,
                                    _ = h.bg,
                                    m = h.fg,
                                    v = h.acceptActionBg,
                                    y = h.acceptActionFg,
                                    b = { backgroundColor: _, color: m },
                                    g = {
                                        backgroundColor: h.declineActionBg,
                                        color: h.declineActionFg
                                    },
                                    k = { backgroundColor: v, color: y },
                                    x = i(i({}, p), {
                                        backgroundImage:
                                            'url(' +
                                            t.platformConfig.iconUrl +
                                            ')'
                                    });
                                return u.h(
                                    'div',
                                    { style: b, className: r },
                                    u.h('div', {
                                        style: x,
                                        className: 'kumulos-' + e.type + '-icon'
                                    }),
                                    u.h(
                                        'div',
                                        {
                                            className:
                                                'kumulos-' + e.type + '-content'
                                        },
                                        u.h(
                                            'div',
                                            {
                                                className:
                                                    'kumulos-' +
                                                    e.type +
                                                    '-header'
                                            },
                                            u.h('h1', null, s)
                                        ),
                                        u.h(
                                            'div',
                                            {
                                                className:
                                                    'kumulos-' +
                                                    e.type +
                                                    '-body'
                                            },
                                            c,
                                            n.props.action &&
                                                u.h(l.ChannelsList, {
                                                    channelList: a.getChannelDialogChannels(
                                                        t.channelList,
                                                        n.props.action.channels
                                                    ),
                                                    onChannelSelectionChanged:
                                                        n.onSelectedChannelChanged
                                                })
                                        )
                                    ),
                                    u.h(
                                        'div',
                                        {
                                            className:
                                                'kumulos-' + e.type + '-actions'
                                        },
                                        u.h(
                                            'button',
                                            {
                                                type: 'button',
                                                style: g,
                                                className:
                                                    'kumulos-action-button kumulos-action-button-cancel',
                                                onClick: n.onRequestCancel
                                            },
                                            f
                                        ),
                                        u.h(
                                            'button',
                                            {
                                                type: 'button',
                                                style: k,
                                                className:
                                                    'kumulos-action-button kumulos-action-button-confirm',
                                                onClick: n.onRequestNativePrompt
                                            },
                                            d
                                        )
                                    )
                                );
                            }),
                            (n.state = { channelSelections: [] }),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            return u.h(
                                c.UIContext.Consumer,
                                null,
                                this.renderAlert
                            );
                        }),
                        e
                    );
                })(u.Component);
            e.Dialog = f;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__assign) ||
                    function() {
                        return (i =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                s =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    };
            (e.__esModule = !0), (e.ChannelsDialog = void 0);
            var u = n(0),
                a = n(1),
                c = n(6),
                l = n(10),
                p = {
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                },
                f = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.onConfirm = function() {
                                n.props.onConfirm(n.state.channelSelections);
                            }),
                            (n.onSelectedChannelChanged = function(t) {
                                n.setState({ channelSelections: s(t) });
                            }),
                            (n.renderDialog = function(t) {
                                if (void 0 === t) return null;
                                var e = n.props.action,
                                    r =
                                        'kumulos-prompt kumulos-channel-dialog-container kumulos-prompt-position-' +
                                        e.dialogConfig.position,
                                    o = e.dialogConfig.labels,
                                    s = o.heading,
                                    c = o.confirmAction,
                                    f = e.dialogConfig.colors,
                                    d = { backgroundColor: f.bg, color: f.fg },
                                    h = {
                                        backgroundColor: f.confirmActionBg,
                                        color: f.confirmActionFg
                                    },
                                    _ = i(i({}, p), {
                                        backgroundImage:
                                            'url(' +
                                            (null == t
                                                ? void 0
                                                : t.platformConfig.iconUrl) +
                                            ')'
                                    });
                                return u.h(
                                    'div',
                                    { style: d, className: r },
                                    u.h('div', {
                                        style: _,
                                        className: 'kumulos-channel-dialog-icon'
                                    }),
                                    u.h(
                                        'div',
                                        {
                                            className:
                                                'kumulos-channel-dialog-content'
                                        },
                                        u.h(
                                            'div',
                                            {
                                                className:
                                                    'kumulos-channel-dialog-header'
                                            },
                                            u.h('h1', null, s)
                                        ),
                                        u.h(
                                            'div',
                                            {
                                                className:
                                                    'kumulos-channel-dialog-body'
                                            },
                                            u.h(l.ChannelsList, {
                                                channelList: a.getChannelDialogChannels(
                                                    t.channelList,
                                                    n.props.action.channels
                                                ),
                                                onChannelSelectionChanged:
                                                    n.onSelectedChannelChanged
                                            })
                                        )
                                    ),
                                    u.h(
                                        'div',
                                        {
                                            className:
                                                'kumulos-channel-dialog-actions'
                                        },
                                        u.h(
                                            'button',
                                            {
                                                type: 'button',
                                                style: h,
                                                className:
                                                    'kumulos-action-button kumulos-action-button-confirm',
                                                onClick: n.onConfirm
                                            },
                                            c
                                        )
                                    )
                                );
                            }),
                            (n.state = { channelSelections: [] }),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            return u.h(
                                c.UIContext.Consumer,
                                null,
                                this.renderDialog
                            );
                        }),
                        e
                    );
                })(u.Component);
            e.ChannelsDialog = f;
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0), n(26);
            var r = n(2),
                o = (function() {
                    function t() {
                        var t = this;
                        (this.element = document.createElement('div')),
                            (this.element.id = 'kumulos-ui-root'),
                            (this.containers = []),
                            r.onDOMReady(function() {
                                return document.body.appendChild(t.element);
                            });
                    }
                    return (
                        (t.prototype.createContainer = function(t) {
                            var e = {
                                name: t,
                                element: document.createElement('div')
                            };
                            return (
                                (e.element.id = 'kumulos-ui-root-' + t),
                                this.element.appendChild(e.element),
                                this.containers.push(e),
                                e
                            );
                        }),
                        t
                    );
                })();
            e.default = o;
        },
        function(t, e, n) {
            var r = n(27);
            'string' == typeof (r = r.__esModule ? r.default : r) &&
                (r = [[t.i, r, '']]);
            var o = { insert: 'head', singleton: !1 };
            n(14)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (e = n(13)(!1)).push([
                t.i,
                "@keyframes kumulos-anim-shake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-2px, 0, 0)}40%,60%{transform:translate3d(2px, 0, 0)}}@keyframes kumulos-anim-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes kumulos-reveal-left{0%{opacity:0;transform:translate(10px, -50%)}100%{opacity:1;transform:translate(0px, -50%)}}@keyframes kumulos-reveal-right{0%{opacity:0;transform:translate(-10px, -50%)}100%{opacity:1;transform:translate(0px, -50%)}}@keyframes kumulos-toast-in-out{0%{opacity:0;transform:translate3d(-50%, 100%, 0)}100%{opacity:1;transform:translateY(-50%, 0, 0)}}@keyframes kumulos-slide-down{0%{transform:translate3d(0, -100%, 0)}100%{transform:translateY(0, 0, 0)}}@keyframes kumulos-slide-up{0%{transform:translate3d(0, 100%, 0)}100%{transform:translateY(0, 0, 0)}}.kumulos-tooltip-parent .kumulos-tooltip{display:none}.kumulos-tooltip-parent:hover .kumulos-tooltip{display:block}.kumulos-tooltip{background:#222;position:absolute;top:50%;padding:8px 12px;font:14px helvetica, sans-serif;color:#eee;border-radius:6px;white-space:nowrap;z-index:1100;pointer-events:none;transform:translateY(-50%);will-change:opacity, transform}.kumulos-tooltip:after{content:\"\";width:0;height:0;position:absolute;top:50%;right:100%;border:solid transparent;border-width:8px;margin-top:-8px}.kumulos-tooltip-right{left:calc(100% + 12px);animation:kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1)}.kumulos-tooltip-right:after{border-right-color:#222;right:100%}.kumulos-tooltip-left{right:calc(100% + 12px);animation:kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1)}.kumulos-tooltip-left:after{border-left-color:#222;left:100%}.kumulos-toast{display:inline-block;position:fixed;bottom:0;left:50%;transform:translateX(-50%);background:#222;z-index:1100;padding:12px;font-size:16px;font-family:helvetica,sans-serif;color:#eee;border-radius:8px 8px 0 0;animation:kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1)}.kumulos-prompt{box-sizing:border-box;z-index:1000}.kumulos-prompt *,.kumulos-prompt *:before,.kumulos-prompt *:after{box-sizing:inherit}.kumulos-action-button{border:none;margin-left:10px;padding:7px 10px;min-width:100px;text-transform:uppercase;font-size:14px;font-weight:600}.kumulos-action-button:hover{cursor:pointer}.kumulos-action-button-cancel{background:none;color:#555}.kumulos-action-button-cancel:hover{background:#eee}.kumulos-action-button-confirm{border-radius:3px;box-shadow:1px 3px 3px rgba(0,0,0,0.54);background:#4c88e0;color:#fff}.kumulos-action-button-confirm:hover{opacity:0.8}.kumulos-checkbox-container{display:block;position:relative;padding-left:30px;margin-bottom:12px;cursor:pointer;user-select:none;line-height:20px;font-size:0.9em;font-weight:bold}.kumulos-checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.kumulos-checkbox{box-sizing:border-box;position:absolute;top:0;left:0;height:20px;width:20px;border-radius:3px;border:1px solid #ddd}.kumulos-checkbox-container:hover input ~ .kumulos-checkbox{border-color:#aaa;display:block}.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after{display:block;border-color:#aaa;box-shadow:none}.kumulos-checkbox:after{content:'';position:absolute;display:none}.kumulos-checkbox-container input:checked ~ .kumulos-checkbox{border-color:#aaa}.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after{display:block;border-color:#222;box-shadow:2px 2px 2px 0px rgba(0,0,0,0.3)}.kumulos-checkbox-container .kumulos-checkbox:after{left:10px;top:-7px;width:8px;height:20px;border:solid #000;border-width:0 3px 3px 0;transform:rotate(45deg)}.kumulos-banner-container{display:flex;flex-direction:row;flex-flow:wrap;position:fixed;left:0;width:100%;min-height:80px;padding:10px;font-family:helvetica,sans-serif;backface-visibility:hidden;box-shadow:0 0 3px 1px rgba(0,0,0,0.54)}.kumulos-banner-container.kumulos-prompt-position-top{top:0;animation:kumulos-slide-down 0.4s ease}.kumulos-banner-container.kumulos-prompt-position-bottom{bottom:0;top:unset;animation:kumulos-slide-up 0.4s ease}@media only screen and (min-device-width: 480px){.kumulos-banner-container{flex-flow:initial}}.kumulos-banner-icon{width:65px;height:65px;margin-right:10px}.kumulos-banner-content{display:flex;flex-direction:column;flex:1}.kumulos-banner-header{display:flex;font-size:12px;line-height:14px}.kumulos-banner-header h1{font-size:inherit;font-weight:bold;margin:0 0 3px 0}@media only screen and (min-device-width: 480px){.kumulos-banner-header{font-size:18px}}.kumulos-banner-body{display:flex;flex-grow:2;align-items:flex-start;font-size:12px;line-height:14px;overflow:hidden;margin-top:10px}@media only screen and (min-device-width: 480px){.kumulos-banner-body{font-size:14px}}.kumulos-banner-actions{display:flex;align-self:center;justify-self:flex-end;width:100%;justify-content:flex-end;margin-top:10px}@media only screen and (min-device-width: 480px){.kumulos-banner-actions{width:auto;margin-top:0}}.kumulos-banner-compact .kumulos-banner-body{margin-top:0}.kumulos-banner-compact .kumulos-banner-actions{width:auto;margin-top:0}.kumulos-banner-compact .kumulos-banner-close{display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;margin-right:10px}@supports (padding: max(0px)){.kumulos-safe-area-inset-pad-left{padding-left:max(10px, env(safe-area-inset-left))}.kumulos-safe-area-inset-pad-right{padding-right:max(10px, env(safe-area-inset-right))}.kumulos-safe-area-inset-pad-top{padding-top:max(10px, env(safe-area-inset-top))}.kumulos-safe-area-inset-pad-bottom{padding-bottom:max(10px, env(safe-area-inset-bottom))}}.kumulos-bell-container{position:fixed}.kumulos-bell-container-bottom-left{bottom:15px;left:15px}.kumulos-bell-container-bottom-right{bottom:15px;right:15px}.kumulos-bell{transition:transform 0.2s cubic-bezier(0.23, 1, 0.32, 1),box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);border-radius:100%;border-color:#fff;background:#4c88e0;box-shadow:1px 2px 2px 0 rgba(0,0,0,0.54);width:60px;height:60px;padding:10px;transform:scale(0.9);cursor:pointer;animation:kumulos-anim-fade-in 0.2s ease-in;backface-visibility:hidden}.kumulos-bell:hover{transform:scale(1);box-shadow:1px 2px 3px 1px rgba(0,0,0,0.54)}.kumulos-bell:active{transform:scale(0.8);box-shadow:1px 2px 2px 0 rgba(0,0,0,0.54)}.kumulos-bell svg{fill:#fff;animation:kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;animation-delay:0.3s}.kumulos-bell:before{content:'';display:block;width:85%;height:85%;border:solid 1px;border-radius:100%;border-color:inherit;position:absolute;top:0;left:0;margin:7.5% 0 0 7.5%}.kumulos-bell-inner{border-radius:100%}.kumulos-channel-dialog-container,.kumulos-alert-container{position:fixed;top:0;left:0;width:100%;height:100%;max-height:100%;padding:20px;display:flex;flex-direction:row;flex-wrap:wrap;font-family:helvetica,sans-serif;animation:kumulos-anim-fade-in 0.2s ease-in;backface-visibility:hidden}@media only screen and (min-device-width: 480px){.kumulos-channel-dialog-container,.kumulos-alert-container{left:50%;width:500px;min-height:250px;margin-left:-250px;box-shadow:0 0 3px 1px rgba(0,0,0,0.54);height:auto}.kumulos-channel-dialog-container.kumulos-prompt-position-top-center,.kumulos-alert-container.kumulos-prompt-position-top-center{border-radius:0 0 3px 3px}.kumulos-channel-dialog-container.kumulos-prompt-position-center,.kumulos-alert-container.kumulos-prompt-position-center{border-radius:3px;top:120px}}.kumulos-channel-dialog-icon,.kumulos-alert-icon{order:2;width:60px;height:60px;align-self:flex-start}.kumulos-channel-dialog-content,.kumulos-alert-content{display:flex;order:1;flex-direction:column;flex:1;margin-right:10px}.kumulos-channel-dialog-header,.kumulos-alert-header{display:flex;font-size:18px;margin-bottom:20px}.kumulos-channel-dialog-header h1,.kumulos-alert-header h1{font-size:inherit;font-weight:400;margin:0}.kumulos-channel-dialog-body,.kumulos-alert-body{flex:1;white-space:pre-wrap;overflow-y:auto}.kumulos-channel-dialog-actions,.kumulos-alert-actions{display:flex;justify-content:flex-end;margin-top:20px;order:3;width:100%;height:30px;align-self:flex-end}.kumulos-channel-list-container{margin:20px 0}body.kumulos-background-mask-blur{overflow:hidden}.kumulos-background-mask-blur>*:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask){filter:blur(3px)}.kumulos-background-mask{position:fixed;top:0;left:0;height:100%;width:100%;z-index:900;background-color:rgba(0,0,0,0.3);display:block}.kumulos-overlay-blur>*:not(.kumulos-overlay){filter:blur(3px)}.kumulos-overlay{box-sizing:border-box;z-index:2000}.kumulos-overlay *,.kumulos-overlay *:before,.kumulos-overlay *:after{box-sizing:inherit}.kumulos-overlay-strip{display:flex;box-shadow:0 0 6px 0 rgba(0,0,0,0.8);min-height:150px}.kumulos-overlay-strip:before{display:block;content:'';width:calc(500px + 12%);max-width:660px}.kumulos-overlay-content-container{display:flex;max-width:38%;padding:1em;font:14px helvetica, sans-serif}.kumulos-overlay-content-container *{margin:0}.kumulos-overlay-content-container svg{margin:55px 1.7em 0 0;stroke:none;fill:rgba(0,0,0,0.8);flex-shrink:0}.kumulos-overlay-content-container img{width:55px;height:55px;flex-shrink:0}.kumulos-overlay-content-container h3,.kumulos-overlay-content-container p,.kumulos-overlay-content-container a{color:inherit}.kumulos-overlay-content-container h3{font-size:1.3em;font-weight:bold}.kumulos-overlay-content-container a{margin-right:0.65em;opacity:0.8;text-decoration:none}.kumulos-overlay .kumulos-overlay-content{margin-left:0.75em}.kumulos-overlay .kumulos-overlay-content p{margin:0.5em 0}.kumulos-overlay-chrome .kumulos-overlay-strip:before{width:440px}.kumulos-overlay-edge .kumulos-overlay-strip:before{display:none}.kumulos-overlay-edge .kumulos-overlay-strip{position:absolute;bottom:0;width:100%;padding-bottom:60px;justify-content:center}.kumulos-overlay-edge .kumulos-overlay-content-container{min-width:675px}.kumulos-overlay-edge .kumulos-overlay-content-container svg{order:1;transform:rotate(-30deg)}.kumulos-overlay-safari .kumulos-overlay-strip:before{width:calc(50% + 212px);max-width:100%}@media (max-width: 900px){.kumulos-overlay{display:none}}\n",
                ''
            ]),
                (t.exports = e);
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    },
                i =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            (e.__esModule = !0), (e.DdlManagerState = void 0);
            var s,
                u = n(0),
                a = n(1),
                c = i(n(29)),
                l = n(5),
                p = n(7),
                f = n(12),
                d = n(38),
                h = n(11);
            !(function(t) {
                (t.LOADING = 'loading'), (t.READY = 'ready');
            })((s = e.DdlManagerState || (e.DdlManagerState = {})));
            var _ = (function() {
                function t(t, e) {
                    var n = this;
                    (this.activeConfigs = []),
                        (this.onBannerConfirm = function(t, e) {
                            return r(n, void 0, void 0, function() {
                                return o(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e
                                                ? [
                                                      4,
                                                      d.sendClickRequest(
                                                          this.context,
                                                          t.uuid,
                                                          e
                                                      )
                                                  ]
                                                : [3, 2];
                                        case 1:
                                            n.sent(), (n.label = 2);
                                        case 2:
                                            return [
                                                4,
                                                l.deleteDdlBannerConfigFromCache(
                                                    t.uuid
                                                )
                                            ];
                                        case 3:
                                            return (
                                                n.sent(),
                                                this.hidePrompt(t),
                                                this.performClientRedirection(
                                                    t
                                                ),
                                                [2]
                                            );
                                    }
                                });
                            });
                        }),
                        (this.onBannerCancelled = function(t) {
                            p.maybePersistReminder(t), n.hidePrompt(t);
                        }),
                        (this.render = function(t) {
                            u.render(
                                u.h(c.default, {
                                    config: t,
                                    context: n.context,
                                    onBannerConfirm: n.onBannerConfirm,
                                    onBannerCancelled: n.onBannerCancelled
                                }),
                                n.ddlContainer.element
                            );
                        }),
                        (this.ddlContainer = e.createContainer('ddl')),
                        (this.context = t),
                        (this.triggerFilter = new h.PromptTriggerEventFilter(
                            t,
                            function(t) {
                                n.updateActiveConfigs(), n.setState(s.READY);
                            }
                        )),
                        this.setState(s.LOADING);
                }
                return (
                    (t.prototype.hidePrompt = function(t) {
                        var e;
                        (this.activeConfigs =
                            null === (e = this.activeConfigs) || void 0 === e
                                ? void 0
                                : e.filter(function(e) {
                                      return e.uuid !== t.uuid;
                                  })),
                            this.setState(s.READY);
                    }),
                    (t.prototype.performClientRedirection = function(t) {
                        var e = t.uiActions.accept;
                        switch (e.type) {
                            case a.UiActionType.DDL_OPEN_STORE:
                                window.location.href = e.url;
                                break;
                            case a.UiActionType.DDL_OPEN_DEEPLINK:
                                window.location.href = e.deepLinkUrl;
                                break;
                            default:
                                console.error(
                                    'DdlManager.performClientRedirection: Unsupported accept action type, unable to perform redirection'
                                );
                        }
                    }),
                    (t.prototype.setState = function(t) {
                        this.onEnter(t);
                    }),
                    (t.prototype.onEnter = function(t) {
                        var e;
                        return r(this, void 0, void 0, function() {
                            var n, r;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        switch (t) {
                                            case s.LOADING:
                                                return [3, 1];
                                            case s.READY:
                                                return [3, 3];
                                        }
                                        return [3, 5];
                                    case 1:
                                        return (
                                            (n = this), [4, this.loadConfig()]
                                        );
                                    case 2:
                                        return (
                                            (n.config = o.sent()),
                                            this.config
                                                ? (this.setState(s.READY),
                                                  [3, 5])
                                                : [2]
                                        );
                                    case 3:
                                        return [4, this.updateActiveConfigs()];
                                    case 4:
                                        return (
                                            o.sent(),
                                            (r =
                                                null ===
                                                    (e = this.activeConfigs) ||
                                                void 0 === e
                                                    ? void 0
                                                    : e.shift())
                                                ? (f.deferPromptActivation(
                                                      r,
                                                      this.render
                                                  ) || this.render(r),
                                                  [3, 5])
                                                : (this.renderEmpty(), [2])
                                        );
                                    case 5:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (t.prototype.renderEmpty = function() {
                        u.render(null, this.ddlContainer.element);
                    }),
                    (t.prototype.updateActiveConfigs = function() {
                        return r(this, void 0, void 0, function() {
                            var t = this;
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.config
                                            ? [
                                                  4,
                                                  this.triggerFilter.filterPrompts(
                                                      this.config
                                                  )
                                              ]
                                            : [2];
                                    case 1:
                                        return (
                                            e.sent().forEach(function(e) {
                                                var n;
                                                -1 ===
                                                    (null ===
                                                        (n = t.activeConfigs) ||
                                                    void 0 === n
                                                        ? void 0
                                                        : n.indexOf(e)) &&
                                                    t.activeConfigs.push(e);
                                            }),
                                            [2]
                                        );
                                }
                            });
                        });
                    }),
                    (t.prototype.loadConfig = function() {
                        return r(this, void 0, void 0, function() {
                            var t;
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [
                                            4,
                                            l.loadDdlConfig(this.context)
                                        ];
                                    case 1:
                                        return void 0 === (t = e.sent())
                                            ? [2]
                                            : [
                                                  2,
                                                  t.reduce(function(t, e) {
                                                      return (t[e.uuid] = e), t;
                                                  }, {})
                                              ];
                                }
                            });
                        });
                    }),
                    t
                );
            })();
            e.default = _;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            e.__esModule = !0;
            var s = n(0),
                u = n(1),
                a = n(30),
                c = n(8),
                l = n(1),
                p = i(n(36)),
                f = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.onDimensions = function(t, e) {
                                var r = n.props.config,
                                    o = window.getComputedStyle(
                                        document.body,
                                        null
                                    );
                                (n.siteMargin = parseFloat(
                                    o.getPropertyValue(
                                        (null == r ? void 0 : r.position) ===
                                            l.PromptPosition.TOP
                                            ? 'margin-top'
                                            : 'margin-bottom'
                                    )
                                )),
                                    (n.siteTransition = o.getPropertyValue(
                                        'transition'
                                    )),
                                    (null == r ? void 0 : r.position) ===
                                        l.PromptPosition.BOTTOM && (e += 20);
                                var i = e + n.siteMargin;
                                (document.body.style.transition =
                                    'all 0.375s ease 0s'),
                                    (document.body.style[
                                        (null == r ? void 0 : r.position) ===
                                        l.PromptPosition.TOP
                                            ? 'marginTop'
                                            : 'marginBottom'
                                    ] = i + 'px');
                            }),
                            (n.onBannerConfirm = function(t) {
                                var e;
                                switch (t.uiActions.accept.type) {
                                    case u.UiActionType.DDL_OPEN_STORE:
                                        null === (e = n.fpRef.current) ||
                                            void 0 === e ||
                                            e.requestFp();
                                        break;
                                    case u.UiActionType.DDL_OPEN_DEEPLINK:
                                        n.resetBodyStyles(),
                                            n.props.onBannerConfirm(
                                                n.props.config
                                            );
                                        break;
                                    default:
                                        console.error(
                                            'Ui.onBannerConfirm: Unsupported accept action type, unable to confirm banner'
                                        );
                                }
                            }),
                            (n.onBannerCancelled = function(t) {
                                n.resetBodyStyles(),
                                    n.props.onBannerCancelled(t);
                            }),
                            (n.onCaptureFp = function(t) {
                                n.resetBodyStyles(),
                                    n.props.onBannerConfirm(n.props.config, t);
                            }),
                            (n.state = { requestFpCapture: !1 }),
                            (n.fpRef = s.createRef()),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.resetBodyStyles = function() {
                            var t,
                                e = this.props.config;
                            (document.body.style.transition =
                                null !== (t = this.siteTransition) &&
                                void 0 !== t
                                    ? t
                                    : ''),
                                (document.body.style[
                                    (null == e ? void 0 : e.position) ===
                                    l.PromptPosition.TOP
                                        ? 'marginTop'
                                        : 'marginBottom'
                                ] = this.siteMargin
                                    ? this.siteMargin + 'px'
                                    : '');
                        }),
                        (e.prototype.componentWillUnmount = function() {
                            this.resetBodyStyles();
                        }),
                        (e.prototype.render = function() {
                            return this.props.config
                                ? c.createPortal(
                                      s.h(
                                          s.Fragment,
                                          null,
                                          s.h(a.DdlBanner, {
                                              config: this.props.config,
                                              onConfirm: this.onBannerConfirm,
                                              onCancel: this.onBannerCancelled,
                                              dimensions: this.onDimensions
                                          }),
                                          s.h(p.default, {
                                              ref: this.fpRef,
                                              onCaptured: this.onCaptureFp
                                          })
                                      ),
                                      document.body
                                  )
                                : null;
                        }),
                        e
                    );
                })(s.Component);
            e.default = f;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__assign) ||
                    function() {
                        return (i =
                            Object.assign ||
                            function(t) {
                                for (
                                    var e, n = 1, r = arguments.length;
                                    n < r;
                                    n++
                                )
                                    for (var o in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            o
                                        ) && (t[o] = e[o]);
                                return t;
                            }).apply(this, arguments);
                    },
                s =
                    (this && this.__spreadArrays) ||
                    function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                            t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (
                                var i = arguments[e], s = 0, u = i.length;
                                s < u;
                                s++, o++
                            )
                                r[o] = i[s];
                        return r;
                    },
                u =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            (e.__esModule = !0), (e.DdlBanner = void 0);
            var a = n(0),
                c = n(1),
                l = u(n(31)),
                p = n(33),
                f = {
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                },
                d = [
                    'kumulos-prompt',
                    'kumulos-banner-container',
                    'kumulos-banner-compact',
                    'kumulos-safe-area-inset-pad-left',
                    'kumulos-safe-area-inset-pad-right'
                ],
                h = (function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (
                            (n.onConfirm = function() {
                                n.props.onConfirm(n.props.config);
                            }),
                            (n.onCancel = function() {
                                n.props.onCancel(n.props.config);
                            }),
                            (n.containerRef = a.createRef()),
                            n
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.componentDidMount = function() {
                            if (this.containerRef.current) {
                                var t = this.containerRef.current,
                                    e = t.clientWidth,
                                    n = t.clientHeight;
                                this.props.dimensions(e, n);
                            }
                        }),
                        (e.prototype.getCssClasses = function(t) {
                            var e = s(d, ['kumulos-prompt-position-' + t]);
                            return (
                                [
                                    c.PromptPosition.TOP,
                                    c.PromptPosition.BOTTOM
                                ].includes(t) &&
                                    e.push('kumulos-safe-area-inset-pad-' + t),
                                e.join(' ')
                            );
                        }),
                        (e.prototype.render = function() {
                            var t = this.props.config,
                                e = t.position,
                                n = t.labels,
                                r = t.colors,
                                o = t.imageUrl,
                                s = t.appRating,
                                u = n.heading,
                                c = n.body,
                                d = n.acceptAction,
                                h = r.bg,
                                _ = r.fg,
                                m = r.acceptActionBg,
                                v = r.acceptActionFg,
                                y = r.declineActionBg,
                                b = r.declineActionFg,
                                g = r.ratingFg,
                                k = this.getCssClasses(e),
                                x = { backgroundColor: h, color: _ },
                                w = { backgroundColor: y, color: b },
                                P = { backgroundColor: m, color: v },
                                C = i(i({}, f), {
                                    backgroundImage: 'url(' + o + ')'
                                });
                            return a.h(
                                'div',
                                { style: x, class: k, ref: this.containerRef },
                                a.h(
                                    'div',
                                    {
                                        class: 'kumulos-banner-close',
                                        style: w,
                                        onTouchEnd: this.onCancel
                                    },
                                    '✖'
                                ),
                                a.h('div', {
                                    style: C,
                                    class: 'kumulos-banner-icon'
                                }),
                                a.h(
                                    'div',
                                    { class: 'kumulos-banner-content' },
                                    a.h(
                                        'div',
                                        { class: 'kumulos-banner-header' },
                                        a.h('h1', null, u)
                                    ),
                                    a.h(
                                        'div',
                                        { class: 'kumulos-banner-body' },
                                        c
                                    ),
                                    s &&
                                        a.h(p.AppRating, {
                                            ratingCount: s.ratingCount,
                                            stars: s.rating,
                                            color: g
                                        })
                                ),
                                a.h(
                                    'div',
                                    { class: 'kumulos-banner-actions' },
                                    a.h(l.default, {
                                        style: P,
                                        class:
                                            'kumulos-action-button kumulos-action-button-confirm',
                                        text: d,
                                        promptActions: t,
                                        onAction: this.onConfirm
                                    })
                                )
                            );
                        }),
                        e
                    );
                })(a.Component);
            e.DdlBanner = h;
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    }),
                i =
                    (this && this.__importDefault) ||
                    function(t) {
                        return t && t.__esModule ? t : { default: t };
                    };
            e.__esModule = !0;
            var s = n(0),
                u = i(n(32)),
                a = n(1),
                c = (function(t) {
                    function e() {
                        var e =
                            (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.handleAction = function() {
                                var t = e.props.promptActions.uiActions.accept;
                                switch (t.type) {
                                    case a.UiActionType.DDL_OPEN_STORE:
                                        u.default(t.deepLinkUrl)
                                            .then(e.props.onAction)
                                            .catch(function(t) {
                                                console.error(
                                                    'Unable to capture deeplink url for deferred app pickup',
                                                    t
                                                );
                                            });
                                        break;
                                    case a.UiActionType.DDL_OPEN_DEEPLINK:
                                        e.props.onAction();
                                        break;
                                    default:
                                        return console.error(
                                            "Handle DeepLink Action: unsupported accept action type '" +
                                                t.type +
                                                "'"
                                        );
                                }
                            }),
                            e
                        );
                    }
                    return (
                        o(e, t),
                        (e.prototype.render = function() {
                            var t = this.props,
                                e = t.style,
                                n = t.class,
                                r = t.text;
                            return s.h(
                                'button',
                                {
                                    type: 'button',
                                    style: e,
                                    class: n,
                                    onTouchEnd: this.handleAction
                                },
                                r
                            );
                        }),
                        e
                    );
                })(s.Component);
            e.default = c;
        },
        function(t, e) {
            function n() {
                return new DOMException(
                    'The request is not allowed',
                    'NotAllowedError'
                );
            }
            t.exports = async function(t) {
                try {
                    await (async function(t) {
                        if (!navigator.clipboard) throw n();
                        return navigator.clipboard.writeText(t);
                    })(t);
                } catch (e) {
                    try {
                        await (async function(t) {
                            const e = document.createElement('span');
                            (e.textContent = t),
                                (e.style.whiteSpace = 'pre'),
                                (e.style.webkitUserSelect = 'auto'),
                                (e.style.userSelect = 'all'),
                                document.body.appendChild(e);
                            const r = window.getSelection(),
                                o = window.document.createRange();
                            r.removeAllRanges(), o.selectNode(e), r.addRange(o);
                            let i = !1;
                            try {
                                i = window.document.execCommand('copy');
                            } finally {
                                r.removeAllRanges(),
                                    window.document.body.removeChild(e);
                            }
                            if (!i) throw n();
                        })(t);
                    } catch (t) {
                        throw t || e || n();
                    }
                }
            };
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0), (e.AppRating = void 0);
            var r = n(0);
            function o(t) {
                var e;
                return (
                    (e =
                        'on' === t.state
                            ? r.h('span', null, '★')
                            : 'half' === t.state
                            ? r.h(
                                  'div',
                                  null,
                                  r.h('span', null, '☆'),
                                  r.h(
                                      'span',
                                      { class: 'kumulos-rating-halfstar' },
                                      '★'
                                  )
                              )
                            : r.h('span', null, '☆')),
                    r.h('div', { class: 'kumulos-rating-star' }, e)
                );
            }
            n(34),
                (e.AppRating = function(t) {
                    var e = t.stars;
                    t.ratingCount;
                    var n = { color: t.color };
                    return r.h(
                        'div',
                        { class: 'kumulos-rating', style: n },
                        (function() {
                            for (var t = [], n = 1; n <= 5; n++)
                                t.push(
                                    r.h(o, {
                                        state:
                                            e >= n
                                                ? 'on'
                                                : e < n && e > n - 1
                                                ? 'half'
                                                : 'off'
                                    })
                                );
                            return t;
                        })(),
                        r.h(
                            'span',
                            { class: 'kumulos-rating-count' },
                            '(',
                            t.ratingCount,
                            ')'
                        )
                    );
                });
        },
        function(t, e, n) {
            var r = n(35);
            'string' == typeof (r = r.__esModule ? r.default : r) &&
                (r = [[t.i, r, '']]);
            var o = { insert: 'head', singleton: !1 };
            n(14)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (e = n(13)(!1)).push([
                t.i,
                '.kumulos-rating{display:flex;height:20px;font-size:16px;align-items:center;margin-top:3px}.kumulos-rating .kumulos-rating-star{position:relative}.kumulos-rating .kumulos-rating-star .kumulos-rating-halfstar{position:absolute;left:0;top:0;width:50%;overflow:hidden}.kumulos-rating .kumulos-rating-count{font-size:12px;margin-left:3px}\n',
                ''
            ]),
                (t.exports = e);
        },
        function(t, e, n) {
            'use strict';
            var r,
                o =
                    (this && this.__extends) ||
                    ((r = function(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e;
                                }) ||
                            function(t, e) {
                                for (var n in e)
                                    e.hasOwnProperty(n) && (t[n] = e[n]);
                            })(t, e);
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t;
                        }
                        r(t, e),
                            (t.prototype =
                                null === e
                                    ? Object.create(e)
                                    : ((n.prototype = e.prototype), new n()));
                    });
            e.__esModule = !0;
            var i,
                s = n(0),
                u = n(8),
                a = n(37),
                c = n(1);
            !(function(t) {
                (t[(t.IDLE = 0)] = 'IDLE'),
                    (t[(t.CAPTURING = 1)] = 'CAPTURING');
            })(i || (i = {}));
            var l = (function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return (
                        (n.onMessage = function(t) {
                            t.data.type, t.origin;
                            var e = t.data;
                            if (t.origin === c.FP_CAPTURE_URL)
                                switch (e.type) {
                                    case a.ClientMessageType.READY:
                                        n.setState({ isReady: !0 });
                                        break;
                                    case a.ClientMessageType
                                        .FINGERPRINT_GENERATED:
                                        n.setState(
                                            { captureState: i.IDLE },
                                            function() {
                                                n.props.onCaptured(
                                                    e.data.components
                                                );
                                            }
                                        );
                                }
                        }),
                        (n.dispatchMessage = function(t) {
                            var e;
                            t.type;
                            var r =
                                null === (e = n.iFrameRef.current) ||
                                void 0 === e
                                    ? void 0
                                    : e.contentWindow;
                            r && r.postMessage(t, c.FP_CAPTURE_URL);
                        }),
                        (n.iFrameRef = s.createRef()),
                        (n.state = { isReady: !1, captureState: i.IDLE }),
                        n
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.componentDidMount = function() {
                        window.addEventListener('message', this.onMessage);
                    }),
                    (e.prototype.componentWillUnmount = function() {
                        window.removeEventListener('message', this.onMessage);
                    }),
                    (e.prototype.componentWillUpdate = function(t, e) {
                        var n = e.isReady,
                            r = e.captureState,
                            o = this.state.captureState;
                        n &&
                            r === i.CAPTURING &&
                            o === i.IDLE &&
                            this.dispatchMessage({
                                type: a.HostMessageType.REQUEST_FINGERPRINT
                            });
                    }),
                    (e.prototype.requestFp = function() {
                        this.state.captureState === i.IDLE
                            ? this.setState({ captureState: i.CAPTURING })
                            : console.error(
                                  'FpCapture.requestFp: captureState not IDLE'
                              );
                    }),
                    (e.prototype.render = function() {
                        return u.createPortal(
                            s.h('iframe', {
                                ref: this.iFrameRef,
                                src: c.FP_CAPTURE_URL,
                                style: { width: 0, height: 0 }
                            }),
                            document.body
                        );
                    }),
                    e
                );
            })(s.Component);
            e.default = l;
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0),
                (e.ClientMessageType = e.HostMessageType = void 0),
                (function(t) {
                    t.REQUEST_FINGERPRINT = 'REQUEST_FINGERPRINT';
                })(e.HostMessageType || (e.HostMessageType = {})),
                (function(t) {
                    (t.READY = 'READY'),
                        (t.FINGERPRINT_GENERATED = 'FINGERPRINT_GENERATED');
                })(e.ClientMessageType || (e.ClientMessageType = {}));
        },
        function(t, e, n) {
            'use strict';
            var r =
                    (this && this.__awaiter) ||
                    function(t, e, n, r) {
                        return new (n || (n = Promise))(function(o, i) {
                            function s(t) {
                                try {
                                    a(r.next(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function u(t) {
                                try {
                                    a(r.throw(t));
                                } catch (t) {
                                    i(t);
                                }
                            }
                            function a(t) {
                                var e;
                                t.done
                                    ? o(t.value)
                                    : ((e = t.value),
                                      e instanceof n
                                          ? e
                                          : new n(function(t) {
                                                t(e);
                                            })).then(s, u);
                            }
                            a((r = r.apply(t, e || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function(t, e) {
                        var n,
                            r,
                            o,
                            i,
                            s = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1];
                                },
                                trys: [],
                                ops: []
                            };
                        return (
                            (i = { next: u(0), throw: u(1), return: u(2) }),
                            'function' == typeof Symbol &&
                                (i[Symbol.iterator] = function() {
                                    return this;
                                }),
                            i
                        );
                        function u(i) {
                            return function(u) {
                                return (function(i) {
                                    if (n)
                                        throw new TypeError(
                                            'Generator is already executing.'
                                        );
                                    for (; s; )
                                        try {
                                            if (
                                                ((n = 1),
                                                r &&
                                                    (o =
                                                        2 & i[0]
                                                            ? r.return
                                                            : i[0]
                                                            ? r.throw ||
                                                              ((o = r.return) &&
                                                                  o.call(r),
                                                              0)
                                                            : r.next) &&
                                                    !(o = o.call(r, i[1])).done)
                                            )
                                                return o;
                                            switch (
                                                ((r = 0),
                                                o && (i = [2 & i[0], o.value]),
                                                i[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return (
                                                        s.label++,
                                                        {
                                                            value: i[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    s.label++,
                                                        (r = i[1]),
                                                        (i = [0]);
                                                    continue;
                                                case 7:
                                                    (i = s.ops.pop()),
                                                        s.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !((o = s.trys),
                                                        (o =
                                                            o.length > 0 &&
                                                            o[o.length - 1]) ||
                                                            (6 !== i[0] &&
                                                                2 !== i[0]))
                                                    ) {
                                                        s = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === i[0] &&
                                                        (!o ||
                                                            (i[1] > o[0] &&
                                                                i[1] < o[3]))
                                                    ) {
                                                        s.label = i[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === i[0] &&
                                                        s.label < o[1]
                                                    ) {
                                                        (s.label = o[1]),
                                                            (o = i);
                                                        break;
                                                    }
                                                    if (o && s.label < o[2]) {
                                                        (s.label = o[2]),
                                                            s.ops.push(i);
                                                        break;
                                                    }
                                                    o[2] && s.ops.pop(),
                                                        s.trys.pop();
                                                    continue;
                                            }
                                            i = e.call(t, s);
                                        } catch (t) {
                                            (i = [6, t]), (r = 0);
                                        } finally {
                                            n = o = 0;
                                        }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                })([i, u]);
                            };
                        }
                    };
            (e.__esModule = !0), (e.sendClickRequest = void 0);
            var i = n(1),
                s = n(2);
            e.sendClickRequest = function(t, e, n) {
                return r(this, void 0, void 0, function() {
                    var r, u;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return (
                                    (r =
                                        i.DDL_BASE_URL +
                                        '/v1/banners/' +
                                        e +
                                        '/taps'),
                                    [4, i.getInstallId()]
                                );
                            case 1:
                                return (
                                    (u = o.sent()),
                                    [
                                        2,
                                        s.authedFetch(t, r, {
                                            method: 'POST',
                                            body: JSON.stringify({
                                                webInstallId: u,
                                                fingerprint: n
                                            })
                                        })
                                    ]
                                );
                        }
                    });
                });
            };
        }
    ]);
});
