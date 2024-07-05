(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[506], {
    4910: function (e, t, n) {
        "use strict";
        let r, o;

        function i() {
            return (i = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        n.d(t, {
            x8: function () {
                return te
            }, VY: function () {
                return e6
            }, aV: function () {
                return e8
            }, h_: function () {
                return e5
            }, fC: function () {
                return e7
            }, Dx: function () {
                return e9
            }, xz: function () {
                return e4
            }
        });
        var a, l, u, c, s, d, f = n(7294), p = n.t(f, 2);

        function m(e, t, {checkForDefaultPrevented: n = !0} = {}) {
            return function (r) {
                if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
            }
        }

        function v(...e) {
            return t => e.forEach(e => {
                var n;
                "function" == typeof (n = e) ? n(t) : null != n && (n.current = t)
            })
        }

        function h(...e) {
            return (0, f.useCallback)(v(...e), e)
        }

        let g = (null == globalThis ? void 0 : globalThis.document) ? f.useLayoutEffect : () => {
        }, E = p["useId".toString()] || (() => void 0), y = 0;

        function b(e) {
            let [t, n] = f.useState(E());
            return g(() => {
                e || n(e => null != e ? e : String(y++))
            }, [e]), e || (t ? `radix-${t}` : "")
        }

        function w(e) {
            let t = (0, f.useRef)(e);
            return (0, f.useEffect)(() => {
                t.current = e
            }), (0, f.useMemo)(() => (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
            }, [])
        }

        var C = n(3935);
        let S = (0, f.forwardRef)((e, t) => {
            let {children: n, ...r} = e, o = f.Children.toArray(n), a = o.find(P);
            if (a) {
                let e = a.props.children,
                    n = o.map(t => t !== a ? t : f.Children.count(e) > 1 ? f.Children.only(null) : (0, f.isValidElement)(e) ? e.props.children : null);
                return (0, f.createElement)(O, i({}, r, {ref: t}), (0, f.isValidElement)(e) ? (0, f.cloneElement)(e, void 0, n) : null)
            }
            return (0, f.createElement)(O, i({}, r, {ref: t}), n)
        });
        S.displayName = "Slot";
        let O = (0, f.forwardRef)((e, t) => {
            let {children: n, ...r} = e;
            return (0, f.isValidElement)(n) ? (0, f.cloneElement)(n, {
                ...function (e, t) {
                    let n = {...t};
                    for (let r in t) {
                        let o = e[r], i = t[r], a = /^on[A-Z]/.test(r);
                        a ? o && i ? n[r] = (...e) => {
                            i(...e), o(...e)
                        } : o && (n[r] = o) : "style" === r ? n[r] = {...o, ...i} : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                    }
                    return {...e, ...n}
                }(r, n.props), ref: v(t, n.ref)
            }) : f.Children.count(n) > 1 ? f.Children.only(null) : null
        });
        O.displayName = "SlotClone";
        let _ = ({children: e}) => (0, f.createElement)(f.Fragment, null, e);

        function P(e) {
            return (0, f.isValidElement)(e) && e.type === _
        }

        let R = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
            let n = (0, f.forwardRef)((e, n) => {
                let {asChild: r, ...o} = e, a = r ? S : t;
                return (0, f.useEffect)(() => {
                    window[Symbol.for("radix-ui")] = !0
                }, []), (0, f.createElement)(a, i({}, o, {ref: n}))
            });
            return n.displayName = `Primitive.${t}`, {...e, [t]: n}
        }, {}), N = "dismissableLayer.update", T = (0, f.createContext)({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }), D = (0, f.forwardRef)((e, t) => {
            var n;
            let {
                    disableOutsidePointerEvents: o = !1,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: l,
                    onFocusOutside: u,
                    onInteractOutside: c,
                    onDismiss: s,
                    ...d
                } = e, p = (0, f.useContext)(T), [v, g] = (0, f.useState)(null),
                E = null !== (n = null == v ? void 0 : v.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, y] = (0, f.useState)({}),
                b = h(t, e => g(e)),
                C = Array.from(p.layers), [S] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
                O = C.indexOf(S), _ = v ? C.indexOf(v) : -1, P = p.layersWithOutsidePointerEventsDisabled.size > 0,
                D = _ >= O, M = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                    let n = w(e), r = (0, f.useRef)(!1), o = (0, f.useRef)(() => {
                    });
                    return (0, f.useEffect)(() => {
                        let e = e => {
                            if (e.target && !r.current) {
                                let r = {originalEvent: e};

                                function i() {
                                    A("dismissableLayer.pointerDownOutside", n, r, {discrete: !0})
                                }

                                "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, {once: !0})) : i()
                            }
                            r.current = !1
                        }, i = window.setTimeout(() => {
                            t.addEventListener("pointerdown", e)
                        }, 0);
                        return () => {
                            window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                        }
                    }, [t, n]), {onPointerDownCapture: () => r.current = !0}
                }(e => {
                    let t = e.target, n = [...p.branches].some(e => e.contains(t));
                    !D || n || (null == l || l(e), null == c || c(e), e.defaultPrevented || null == s || s())
                }, E), L = function (e, t = null == globalThis ? void 0 : globalThis.document) {
                    let n = w(e), r = (0, f.useRef)(!1);
                    return (0, f.useEffect)(() => {
                        let e = e => {
                            e.target && !r.current && A("dismissableLayer.focusOutside", n, {originalEvent: e}, {discrete: !1})
                        };
                        return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                    }, [t, n]), {onFocusCapture: () => r.current = !0, onBlurCapture: () => r.current = !1}
                }(e => {
                    let t = e.target, n = [...p.branches].some(e => e.contains(t));
                    n || (null == u || u(e), null == c || c(e), e.defaultPrevented || null == s || s())
                }, E);
            return !function (e, t = null == globalThis ? void 0 : globalThis.document) {
                let n = w(e);
                (0, f.useEffect)(() => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    };
                    return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                }, [n, t])
            }(e => {
                let t = _ === p.layers.size - 1;
                t && (null == a || a(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
            }, E), (0, f.useEffect)(() => {
                if (v) return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (r = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(v)), p.layers.add(v), x(), () => {
                    o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (E.body.style.pointerEvents = r)
                }
            }, [v, E, o, p]), (0, f.useEffect)(() => () => {
                v && (p.layers.delete(v), p.layersWithOutsidePointerEventsDisabled.delete(v), x())
            }, [v, p]), (0, f.useEffect)(() => {
                let e = () => y({});
                return document.addEventListener(N, e), () => document.removeEventListener(N, e)
            }, []), (0, f.createElement)(R.div, i({}, d, {
                ref: b,
                style: {pointerEvents: P ? D ? "auto" : "none" : void 0, ...e.style},
                onFocusCapture: m(e.onFocusCapture, L.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, L.onBlurCapture),
                onPointerDownCapture: m(e.onPointerDownCapture, M.onPointerDownCapture)
            }))
        });

        function x() {
            let e = new CustomEvent(N);
            document.dispatchEvent(e)
        }

        function A(e, t, n, {discrete: r}) {
            let o = n.originalEvent.target, i = new CustomEvent(e, {bubbles: !1, cancelable: !0, detail: n});
            (t && o.addEventListener(e, t, {once: !0}), r) ? o && (0, C.flushSync)(() => o.dispatchEvent(i)) : o.dispatchEvent(i)
        }

        let M = "focusScope.autoFocusOnMount", L = "focusScope.autoFocusOnUnmount", k = {bubbles: !1, cancelable: !0},
            I = (0, f.forwardRef)((e, t) => {
                let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...l
                    } = e, [u, c] = (0, f.useState)(null), s = w(o), d = w(a), p = (0, f.useRef)(null), m = h(t, e => c(e)),
                    v = (0, f.useRef)({
                        paused: !1, pause() {
                            this.paused = !0
                        }, resume() {
                            this.paused = !1
                        }
                    }).current;
                (0, f.useEffect)(() => {
                    if (r) {
                        function e(e) {
                            if (v.paused || !u) return;
                            let t = e.target;
                            u.contains(t) ? p.current = t : W(p.current, {select: !0})
                        }

                        function t(e) {
                            v.paused || !u || u.contains(e.relatedTarget) || W(p.current, {select: !0})
                        }

                        return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                        }
                    }
                }, [r, u, v.paused]), (0, f.useEffect)(() => {
                    if (u) {
                        z.add(v);
                        let e = document.activeElement, t = u.contains(e);
                        if (!t) {
                            let t = new CustomEvent(M, k);
                            u.addEventListener(M, s), u.dispatchEvent(t), t.defaultPrevented || (function (e, {select: t = !1} = {}) {
                                let n = document.activeElement;
                                for (let r of e) if (W(r, {select: t}), document.activeElement !== n) return
                            }(F(u).filter(e => "A" !== e.tagName), {select: !0}), document.activeElement === e && W(u))
                        }
                        return () => {
                            u.removeEventListener(M, s), setTimeout(() => {
                                let t = new CustomEvent(L, k);
                                u.addEventListener(L, d), u.dispatchEvent(t), t.defaultPrevented || W(null != e ? e : document.body, {select: !0}), u.removeEventListener(L, d), z.remove(v)
                            }, 0)
                        }
                    }
                }, [u, s, d, v]);
                let g = (0, f.useCallback)(e => {
                    if (!n && !r || v.paused) return;
                    let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey, o = document.activeElement;
                    if (t && o) {
                        let t = e.currentTarget, [r, i] = function (e) {
                            let t = F(e), n = j(t, e), r = j(t.reverse(), e);
                            return [n, r]
                        }(t);
                        r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && W(i, {select: !0})) : (e.preventDefault(), n && W(r, {select: !0})) : o === t && e.preventDefault()
                    }
                }, [n, r, v.paused]);
                return (0, f.createElement)(R.div, i({tabIndex: -1}, l, {ref: m, onKeyDown: g}))
            });

        function F(e) {
            let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode();) t.push(n.currentNode);
            return t
        }

        function j(e, t) {
            for (let n of e) if (!function (e, {upTo: t}) {
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                for (; e && (void 0 === t || e !== t);) {
                    if ("none" === getComputedStyle(e).display) return !0;
                    e = e.parentElement
                }
                return !1
            }(n, {upTo: t})) return n
        }

        function W(e, {select: t = !1} = {}) {
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({preventScroll: !0}), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
            }
        }

        let z = (o = [], {
            add(e) {
                let t = o[0];
                e !== t && (null == t || t.pause()), (o = B(o, e)).unshift(e)
            }, remove(e) {
                var t;
                null === (t = (o = B(o, e))[0]) || void 0 === t || t.resume()
            }
        });

        function B(e, t) {
            let n = [...e], r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1), n
        }

        let U = (0, f.forwardRef)((e, t) => {
            var n;
            let {
                container: r = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                ...o
            } = e;
            return r ? C.createPortal((0, f.createElement)(R.div, i({}, o, {ref: t})), r) : null
        }), K = e => {
            let {present: t, children: n} = e, r = function (e) {
                var t;
                let [n, r] = (0, f.useState)(), o = (0, f.useRef)({}), i = (0, f.useRef)(e),
                    a = (0, f.useRef)("none"), [l, u] = (t = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        }, unmountSuspended: {MOUNT: "mounted", ANIMATION_END: "unmounted"}, unmounted: {MOUNT: "mounted"}
                    }, (0, f.useReducer)((e, n) => {
                        let r = t[e][n];
                        return null != r ? r : e
                    }, e ? "mounted" : "unmounted"));
                return (0, f.useEffect)(() => {
                    let e = Y(o.current);
                    a.current = "mounted" === l ? e : "none"
                }, [l]), g(() => {
                    let t = o.current, n = i.current;
                    if (n !== e) {
                        let r = a.current, o = Y(t);
                        e ? u("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? u("UNMOUNT") : n && r !== o ? u("ANIMATION_OUT") : u("UNMOUNT"), i.current = e
                    }
                }, [e, u]), g(() => {
                    if (n) {
                        let e = e => {
                            let t = Y(o.current), r = t.includes(e.animationName);
                            e.target === n && r && (0, C.flushSync)(() => u("ANIMATION_END"))
                        }, t = e => {
                            e.target === n && (a.current = Y(o.current))
                        };
                        return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                            n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                        }
                    }
                    u("ANIMATION_END")
                }, [n, u]), {
                    isPresent: ["mounted", "unmountSuspended"].includes(l), ref: (0, f.useCallback)(e => {
                        e && (o.current = getComputedStyle(e)), r(e)
                    }, [])
                }
            }(t), o = "function" == typeof n ? n({present: r.isPresent}) : f.Children.only(n), i = h(r.ref, o.ref);
            return "function" == typeof n || r.isPresent ? (0, f.cloneElement)(o, {ref: i}) : null
        };

        function Y(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }

        K.displayName = "Presence";
        let $ = 0;

        function V() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
        }

        var q = function () {
            return (q = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

        function X(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }

        var Z = "right-scroll-bar-position", H = "width-before-scroll-bar",
            G = (void 0 === a && (a = {}), (void 0 === l && (l = function (e) {
                return e
            }), u = [], c = !1, s = {
                read: function () {
                    if (c) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return u.length ? u[u.length - 1] : null
                }, useMedium: function (e) {
                    var t = l(e, c);
                    return u.push(t), function () {
                        u = u.filter(function (e) {
                            return e !== t
                        })
                    }
                }, assignSyncMedium: function (e) {
                    for (c = !0; u.length;) {
                        var t = u;
                        u = [], t.forEach(e)
                    }
                    u = {
                        push: function (t) {
                            return e(t)
                        }, filter: function () {
                            return u
                        }
                    }
                }, assignMedium: function (e) {
                    c = !0;
                    var t = [];
                    if (u.length) {
                        var n = u;
                        u = [], n.forEach(e), t = u
                    }
                    var r = function () {
                        var n = t;
                        t = [], n.forEach(e)
                    }, o = function () {
                        return Promise.resolve().then(r)
                    };
                    o(), u = {
                        push: function (e) {
                            t.push(e), o()
                        }, filter: function (e) {
                            return t = t.filter(e), u
                        }
                    }
                }
            }).options = q({async: !0, ssr: !1}, a), s), J = function () {
            }, Q = f.forwardRef(function (e, t) {
                var n, r, o, i = f.useRef(null),
                    a = f.useState({onScrollCapture: J, onWheelCapture: J, onTouchMoveCapture: J}), l = a[0], u = a[1],
                    c = e.forwardProps, s = e.children, d = e.className, p = e.removeScrollBar, m = e.enabled, v = e.shards,
                    h = e.sideCar, g = e.noIsolation, E = e.inert, y = e.allowPinchZoom, b = e.as,
                    w = X(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                    C = (n = [i, t], r = function (e) {
                        return n.forEach(function (t) {
                            var n;
                            return "function" == typeof (n = t) ? n(e) : n && (n.current = e), n
                        })
                    }, (o = (0, f.useState)(function () {
                        return {
                            value: null, callback: r, facade: {
                                get current() {
                                    return o.value
                                }, set current(value) {
                                    var e = o.value;
                                    e !== value && (o.value = value, o.callback(value, e))
                                }
                            }
                        }
                    })[0]).callback = r, o.facade), S = q(q({}, w), l);
                return f.createElement(f.Fragment, null, m && f.createElement(h, {
                    sideCar: G,
                    removeScrollBar: p,
                    shards: v,
                    noIsolation: g,
                    inert: E,
                    setCallbacks: u,
                    allowPinchZoom: !!y,
                    lockRef: i
                }), c ? f.cloneElement(f.Children.only(s), q(q({}, S), {ref: C})) : f.createElement(void 0 === b ? "div" : b, q({}, S, {
                    className: d,
                    ref: C
                }), s))
            });
        Q.defaultProps = {enabled: !0, removeScrollBar: !0, inert: !1}, Q.classNames = {fullWidth: H, zeroRight: Z};
        var ee = function (e) {
            var t = e.sideCar, n = X(e, ["sideCar"]);
            if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r) throw Error("Sidecar medium not found");
            return f.createElement(r, q({}, n))
        };
        ee.isSideCarExport = !0;
        var et = function () {
            var e = 0, t = null;
            return {
                add: function (r) {
                    if (0 == e && (t = function () {
                        if (!document) return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = d || n.nc;
                        return t && e.setAttribute("nonce", t), e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                }, remove: function () {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
            }
        }, en = function () {
            var e = et();
            return function (t, n) {
                f.useEffect(function () {
                    return e.add(t), function () {
                        e.remove()
                    }
                }, [t && n])
            }
        }, er = function () {
            var e = en();
            return function (t) {
                return e(t.styles, t.dynamic), null
            }
        }, eo = {left: 0, top: 0, right: 0, gap: 0}, ei = function (e) {
            return parseInt(e || "", 10) || 0
        }, ea = function (e) {
            var t = window.getComputedStyle(document.body), n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [ei(n), ei(r), ei(o)]
        }, el = function (e) {
            if (void 0 === e && (e = "margin"), "undefined" == typeof window) return eo;
            var t = ea(e), n = document.documentElement.clientWidth, r = window.innerWidth;
            return {left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0])}
        }, eu = er(), ec = function (e, t, n, r) {
            var o = e.left, i = e.top, a = e.right, l = e.gap;
            return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Z, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(H, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(Z, " .").concat(Z, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(H, " .").concat(H, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        }, es = function (e) {
            var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = void 0 === r ? "margin" : r,
                i = f.useMemo(function () {
                    return el(o)
                }, [o]);
            return f.createElement(eu, {styles: ec(i, !t, o, n ? "" : "!important")})
        }, ed = !1;
        if ("undefined" != typeof window) try {
            var ef = Object.defineProperty({}, "passive", {
                get: function () {
                    return ed = !0, !0
                }
            });
            window.addEventListener("test", ef, ef), window.removeEventListener("test", ef, ef)
        } catch (e) {
            ed = !1
        }
        var ep = !!ed && {passive: !1}, em = function (e, t) {
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }, ev = function (e, t) {
            var n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), eh(e, n)) {
                    var r = eg(e, n);
                    if (r[1] > r[2]) return !0
                }
                n = n.parentNode
            } while (n && n !== document.body);
            return !1
        }, eh = function (e, t) {
            return "v" === e ? em(t, "overflowY") : em(t, "overflowX")
        }, eg = function (e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }, eE = function (e, t, n, r, o) {
            var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1), l = a * r,
                u = n.target, c = t.contains(u), s = !1, d = l > 0, f = 0, p = 0;
            do {
                var m = eg(e, u), v = m[0], h = m[1] - m[2] - a * v;
                (v || h) && eh(e, u) && (f += h, p += v), u = u.parentNode
            } while (!c && u !== document.body || c && (t.contains(u) || t === u));
            return d && (o && 0 === f || !o && l > f) ? s = !0 : !d && (o && 0 === p || !o && -l > p) && (s = !0), s
        }, ey = function (e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }, eb = function (e) {
            return [e.deltaX, e.deltaY]
        }, ew = function (e) {
            return e && "current" in e ? e.current : e
        }, eC = 0, eS = [], eO = (G.useMedium(function (e) {
            var t = f.useRef([]), n = f.useRef([0, 0]), r = f.useRef(), o = f.useState(eC++)[0],
                i = f.useState(function () {
                    return er()
                })[0], a = f.useRef(e);
            f.useEffect(function () {
                a.current = e
            }, [e]), f.useEffect(function () {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function (e, t, n) {
                        if (n || 2 == arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    })([e.lockRef.current], (e.shards || []).map(ew), !0).filter(Boolean);
                    return t.forEach(function (e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }), function () {
                        document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function (e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var l = f.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                var o, i = ey(e), l = n.current, u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                    c = "deltaY" in e ? e.deltaY : l[1] - i[1], s = e.target, d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type) return !1;
                var f = ev(d, s);
                if (!f) return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v", f = ev(d, s)), !f) return !1;
                if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                var p = r.current || o;
                return eE(p, t, e, "h" === p ? u : c, !0)
            }, []), u = f.useCallback(function (e) {
                if (eS.length && eS[eS.length - 1] === i) {
                    var n = "deltaY" in e ? eb(e) : ey(e), r = t.current.filter(function (t) {
                        var r;
                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (a.current.shards || []).map(ew).filter(Boolean).filter(function (t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, []), c = f.useCallback(function (e, n, r, o) {
                var i = {name: e, delta: n, target: r, should: o};
                t.current.push(i), setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                        return e !== i
                    })
                }, 1)
            }, []), s = f.useCallback(function (e) {
                n.current = ey(e), r.current = void 0
            }, []), d = f.useCallback(function (t) {
                c(t.type, eb(t), t.target, l(t, e.lockRef.current))
            }, []), p = f.useCallback(function (t) {
                c(t.type, ey(t), t.target, l(t, e.lockRef.current))
            }, []);
            f.useEffect(function () {
                return eS.push(i), e.setCallbacks({
                    onScrollCapture: d,
                    onWheelCapture: d,
                    onTouchMoveCapture: p
                }), document.addEventListener("wheel", u, ep), document.addEventListener("touchmove", u, ep), document.addEventListener("touchstart", s, ep), function () {
                    eS = eS.filter(function (e) {
                        return e !== i
                    }), document.removeEventListener("wheel", u, ep), document.removeEventListener("touchmove", u, ep), document.removeEventListener("touchstart", s, ep)
                }
            }, []);
            var m = e.removeScrollBar, v = e.inert;
            return f.createElement(f.Fragment, null, v ? f.createElement(i, {styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")}) : null, m ? f.createElement(es, {gapMode: "margin"}) : null)
        }), ee), e_ = f.forwardRef(function (e, t) {
            return f.createElement(Q, q({}, e, {ref: t, sideCar: eO}))
        });
        e_.classNames = Q.classNames;
        var eP = new WeakMap, eR = new WeakMap, eN = {}, eT = 0, eD = function (e) {
            return e && (e.host || eD(e.parentNode))
        }, ex = function (e, t, n, r) {
            var o = (Array.isArray(e) ? e : [e]).map(function (e) {
                if (t.contains(e)) return e;
                var n = eD(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
            }).filter(function (e) {
                return !!e
            });
            eN[n] || (eN[n] = new WeakMap);
            var i = eN[n], a = [], l = new Set, u = new Set(o), c = function (e) {
                !e || l.has(e) || (l.add(e), c(e.parentNode))
            };
            o.forEach(c);
            var s = function (e) {
                !e || u.has(e) || Array.prototype.forEach.call(e.children, function (e) {
                    if (l.has(e)) s(e); else {
                        var t = e.getAttribute(r), o = null !== t && "false" !== t, u = (eP.get(e) || 0) + 1,
                            c = (i.get(e) || 0) + 1;
                        eP.set(e, u), i.set(e, c), a.push(e), 1 === u && o && eR.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                    }
                })
            };
            return s(t), l.clear(), eT++, function () {
                a.forEach(function (e) {
                    var t = eP.get(e) - 1, o = i.get(e) - 1;
                    eP.set(e, t), i.set(e, o), t || (eR.has(e) || e.removeAttribute(r), eR.delete(e)), o || e.removeAttribute(n)
                }), --eT || (eP = new WeakMap, eP = new WeakMap, eR = new WeakMap, eN = {})
            }
        }, eA = function (e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e]),
                o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ex(r, o, n, "aria-hidden")) : function () {
                return null
            }
        };
        let eM = "Dialog", [eL, ek] = function (e, t = []) {
            let n = [], r = () => {
                let t = n.map(e => (0, f.createContext)(e));
                return function (n) {
                    let r = (null == n ? void 0 : n[e]) || t;
                    return (0, f.useMemo)(() => ({[`__scope${e}`]: {...n, [e]: r}}), [n, r])
                }
            };
            return r.scopeName = e, [function (t, r) {
                let o = (0, f.createContext)(r), i = n.length;

                function a(t) {
                    let {scope: n, children: r, ...a} = t, l = (null == n ? void 0 : n[e][i]) || o,
                        u = (0, f.useMemo)(() => a, Object.values(a));
                    return (0, f.createElement)(l.Provider, {value: u}, r)
                }

                return n = [...n, r], a.displayName = t + "Provider", [a, function (n, a) {
                    let l = (null == a ? void 0 : a[e][i]) || o, u = (0, f.useContext)(l);
                    if (u) return u;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }]
            }, function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                    let n = e.map(e => ({useScope: e(), scopeName: e.scopeName}));
                    return function (e) {
                        let r = n.reduce((t, {useScope: n, scopeName: r}) => {
                            let o = n(e), i = o[`__scope${r}`];
                            return {...t, ...i}
                        }, {});
                        return (0, f.useMemo)(() => ({[`__scope${t.scopeName}`]: r}), [r])
                    }
                };
                return n.scopeName = t.scopeName, n
            }(r, ...t)]
        }(eM), [eI, eF] = eL(eM), ej = e => {
            let {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: a = !0} = e,
                l = (0, f.useRef)(null), u = (0, f.useRef)(null), [c = !1, s] = function ({
                                                                                              prop: e,
                                                                                              defaultProp: t,
                                                                                              onChange: n = () => {
                                                                                              }
                                                                                          }) {
                    let [r, o] = function ({defaultProp: e, onChange: t}) {
                        let n = (0, f.useState)(e), [r] = n, o = (0, f.useRef)(r), i = w(t);
                        return (0, f.useEffect)(() => {
                            o.current !== r && (i(r), o.current = r)
                        }, [r, o, i]), n
                    }({defaultProp: t, onChange: n}), i = void 0 !== e, a = w(n), l = (0, f.useCallback)(t => {
                        if (i) {
                            let n = "function" == typeof t ? t(e) : t;
                            n !== e && a(n)
                        } else o(t)
                    }, [i, e, o, a]);
                    return [i ? e : r, l]
                }({prop: r, defaultProp: o, onChange: i});
            return (0, f.createElement)(eI, {
                scope: t,
                triggerRef: l,
                contentRef: u,
                contentId: b(),
                titleId: b(),
                descriptionId: b(),
                open: c,
                onOpenChange: s,
                onOpenToggle: (0, f.useCallback)(() => s(e => !e), [s]),
                modal: a
            }, n)
        }, eW = (0, f.forwardRef)((e, t) => {
            let {__scopeDialog: n, ...r} = e, o = eF("DialogTrigger", n), a = h(t, o.triggerRef);
            return (0, f.createElement)(R.button, i({
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": o.open,
                "aria-controls": o.contentId,
                "data-state": e1(o.open)
            }, r, {ref: a, onClick: m(e.onClick, o.onOpenToggle)}))
        }), ez = "DialogPortal", [eB, eU] = eL(ez, {forceMount: void 0}), eK = e => {
            let {__scopeDialog: t, forceMount: n, children: r, container: o} = e, i = eF(ez, t);
            return (0, f.createElement)(eB, {
                scope: t,
                forceMount: n
            }, f.Children.map(r, e => (0, f.createElement)(K, {present: n || i.open}, (0, f.createElement)(U, {
                asChild: !0,
                container: o
            }, e))))
        }, eY = "DialogOverlay", e$ = (0, f.forwardRef)((e, t) => {
            let n = eU(eY, e.__scopeDialog), {forceMount: r = n.forceMount, ...o} = e, a = eF(eY, e.__scopeDialog);
            return a.modal ? (0, f.createElement)(K, {present: r || a.open}, (0, f.createElement)(eV, i({}, o, {ref: t}))) : null
        }), eV = (0, f.forwardRef)((e, t) => {
            let {__scopeDialog: n, ...r} = e, o = eF(eY, n);
            return (0, f.createElement)(e_, {
                as: S,
                allowPinchZoom: !0,
                shards: [o.contentRef]
            }, (0, f.createElement)(R.div, i({"data-state": e1(o.open)}, r, {
                ref: t,
                style: {pointerEvents: "auto", ...r.style}
            })))
        }), eq = "DialogContent", eX = (0, f.forwardRef)((e, t) => {
            let n = eU(eq, e.__scopeDialog), {forceMount: r = n.forceMount, ...o} = e, a = eF(eq, e.__scopeDialog);
            return (0, f.createElement)(K, {present: r || a.open}, a.modal ? (0, f.createElement)(eZ, i({}, o, {ref: t})) : (0, f.createElement)(eH, i({}, o, {ref: t})))
        }), eZ = (0, f.forwardRef)((e, t) => {
            let n = eF(eq, e.__scopeDialog), r = (0, f.useRef)(null), o = h(t, n.contentRef, r);
            return (0, f.useEffect)(() => {
                let e = r.current;
                if (e) return eA(e)
            }, []), (0, f.createElement)(eG, i({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: m(e.onCloseAutoFocus, e => {
                    var t;
                    e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                }),
                onPointerDownOutside: m(e.onPointerDownOutside, e => {
                    let t = e.detail.originalEvent, n = 0 === t.button && !0 === t.ctrlKey, r = 2 === t.button || n;
                    r && e.preventDefault()
                }),
                onFocusOutside: m(e.onFocusOutside, e => e.preventDefault())
            }))
        }), eH = (0, f.forwardRef)((e, t) => {
            let n = eF(eq, e.__scopeDialog), r = (0, f.useRef)(!1);
            return (0, f.createElement)(eG, i({}, e, {
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t => {
                    var o, i;
                    null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), r.current = !1
                },
                onInteractOutside: t => {
                    var o, i;
                    null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current = !0);
                    let a = t.target, l = null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(a);
                    l && t.preventDefault()
                }
            }))
        }), eG = (0, f.forwardRef)((e, t) => {
            let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...l} = e, u = eF(eq, n),
                c = (0, f.useRef)(null), s = h(t, c);
            return (0, f.useEffect)(() => {
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : V()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : V()), $++, () => {
                    1 === $ && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), $--
                }
            }, []), (0, f.createElement)(f.Fragment, null, (0, f.createElement)(I, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: a
            }, (0, f.createElement)(D, i({
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": e1(u.open)
            }, l, {ref: s, onDismiss: () => u.onOpenChange(!1)}))), !1)
        }), eJ = "DialogTitle", eQ = (0, f.forwardRef)((e, t) => {
            let {__scopeDialog: n, ...r} = e, o = eF(eJ, n);
            return (0, f.createElement)(R.h2, i({id: o.titleId}, r, {ref: t}))
        }), e0 = (0, f.forwardRef)((e, t) => {
            let {__scopeDialog: n, ...r} = e, o = eF("DialogClose", n);
            return (0, f.createElement)(R.button, i({type: "button"}, r, {
                ref: t,
                onClick: m(e.onClick, () => o.onOpenChange(!1))
            }))
        });

        function e1(e) {
            return e ? "open" : "closed"
        }

        let [e3, e2] = function (e, t) {
                let n = (0, f.createContext)(t);

                function r(e) {
                    let {children: t, ...r} = e, o = (0, f.useMemo)(() => r, Object.values(r));
                    return (0, f.createElement)(n.Provider, {value: o}, t)
                }

                return r.displayName = e + "Provider", [r, function (r) {
                    let o = (0, f.useContext)(n);
                    if (o) return o;
                    if (void 0 !== t) return t;
                    throw Error(`\`${r}\` must be used within \`${e}\``)
                }]
            }("DialogTitleWarning", {contentName: eq, titleName: eJ, docsSlug: "dialog"}), e7 = ej, e4 = eW, e5 = eK,
            e8 = e$, e6 = eX, e9 = eQ, te = e0
    }, 3740: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return b
            }
        });
        let r = n(4788), o = n(8754), i = n(1757), a = n(224), l = i._(n(7294)), u = o._(n(2636)), c = n(7757),
            s = n(3735), d = n(3341);
        n(4210);
        let f = o._(n(7746)), p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

        function m(e) {
            return void 0 !== e.default
        }

        function v(e) {
            return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }

        function h(e, t, n, o, i, a, l) {
            if (!e || e["data-loaded-src"] === t) return;
            e["data-loaded-src"] = t;
            let u = "decode" in e ? e.decode() : Promise.resolve();
            u.catch(() => {
            }).then(() => {
                if (e.parentElement && e.isConnected) {
                    if ("blur" === n && a(!0), null == o ? void 0 : o.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {writable: !1, value: e});
                        let n = !1, i = !1;
                        o.current(r._({}, t, {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => i,
                            persist: () => {
                            },
                            preventDefault: () => {
                                n = !0, t.preventDefault()
                            },
                            stopPropagation: () => {
                                i = !0, t.stopPropagation()
                            }
                        }))
                    }
                    (null == i ? void 0 : i.current) && i.current(e)
                }
            })
        }

        function g(e) {
            let [t, n] = l.version.split("."), r = parseInt(t, 10), o = parseInt(n, 10);
            return r > 18 || 18 === r && o >= 3 ? {fetchPriority: e} : {fetchpriority: e}
        }

        let E = (0, l.forwardRef)((e, t) => {
            var {
                    imgAttributes: n,
                    heightInt: o,
                    widthInt: i,
                    qualityInt: u,
                    className: c,
                    imgStyle: s,
                    blurStyle: d,
                    isLazy: f,
                    fetchPriority: p,
                    fill: m,
                    placeholder: v,
                    loading: E,
                    srcString: y,
                    config: b,
                    unoptimized: w,
                    loader: C,
                    onLoadRef: S,
                    onLoadingCompleteRef: O,
                    setBlurComplete: _,
                    setShowAltText: P,
                    onLoad: R,
                    onError: N
                } = e,
                T = a._(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fetchPriority", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
            return E = f ? "lazy" : E, l.default.createElement(l.default.Fragment, null, l.default.createElement("img", r._({}, T, g(p), {
                loading: E,
                width: i,
                height: o,
                decoding: "async",
                "data-nimg": m ? "fill" : "1",
                className: c,
                style: r._({}, s, d)
            }, n, {
                ref: (0, l.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (N && (e.src = e.src), e.complete && h(e, y, v, S, O, _, w))
                }, [y, v, S, O, _, N, w, t]), onLoad: e => {
                    let t = e.currentTarget;
                    h(t, y, v, S, O, _, w)
                }, onError: e => {
                    P(!0), "blur" === v && _(!0), N && N(e)
                }
            })))
        }), y = (0, l.forwardRef)((e, t) => {
            let n, o;
            var i, {
                    src: h,
                    sizes: y,
                    unoptimized: b = !1,
                    priority: w = !1,
                    loading: C,
                    className: S,
                    quality: O,
                    width: _,
                    height: P,
                    fill: R,
                    style: N,
                    onLoad: T,
                    onLoadingComplete: D,
                    placeholder: x = "empty",
                    blurDataURL: A,
                    fetchPriority: M,
                    layout: L,
                    objectFit: k,
                    objectPosition: I,
                    lazyBoundary: F,
                    lazyRoot: j
                } = e,
                W = a._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
            let z = (0, l.useContext)(d.ImageConfigContext), B = (0, l.useMemo)(() => {
                let e = p || z || s.imageConfigDefault, t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    n = e.deviceSizes.sort((e, t) => e - t);
                return r._({}, e, {allSizes: t, deviceSizes: n})
            }, [z]), U = W, K = U.loader || f.default;
            delete U.loader;
            let Y = "__next_img_default" in K;
            if (Y) {
                if ("custom" === B.loader) throw Error('Image with src "'.concat(h, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
            } else {
                let e = K;
                K = t => {
                    let {config: n} = t, r = a._(t, ["config"]);
                    return e(r)
                }
            }
            if (L) {
                "fill" === L && (R = !0);
                let e = {intrinsic: {maxWidth: "100%", height: "auto"}, responsive: {width: "100%", height: "auto"}}[L];
                e && (N = r._({}, N, e));
                let t = {responsive: "100vw", fill: "100vw"}[L];
                t && !y && (y = t)
            }
            let $ = "", V = v(_), q = v(P);
            if ("object" == typeof (i = h) && (m(i) || void 0 !== i.src)) {
                let e = m(h) ? h.default : h;
                if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                if (n = e.blurWidth, o = e.blurHeight, A = A || e.blurDataURL, $ = e.src, !R) {
                    if (V || q) {
                        if (V && !q) {
                            let t = V / e.width;
                            q = Math.round(e.height * t)
                        } else if (!V && q) {
                            let t = q / e.height;
                            V = Math.round(e.width * t)
                        }
                    } else V = e.width, q = e.height
                }
            }
            let X = !w && ("lazy" === C || void 0 === C);
            (!(h = "string" == typeof h ? h : $) || h.startsWith("data:") || h.startsWith("blob:")) && (b = !0, X = !1), B.unoptimized && (b = !0), Y && h.endsWith(".svg") && !B.dangerouslyAllowSVG && (b = !0), w && (M = "high");
            let [Z, H] = (0, l.useState)(!1), [G, J] = (0, l.useState)(!1), Q = v(O), ee = Object.assign(R ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: k,
                    objectPosition: I
                } : {}, G ? {} : {color: "transparent"}, N), et = "blur" === x && A && !Z ? {
                    backgroundSize: ee.objectFit || "cover",
                    backgroundPosition: ee.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat((0, c.getImageBlurSvg)({
                        widthInt: V,
                        heightInt: q,
                        blurWidth: n,
                        blurHeight: o,
                        blurDataURL: A,
                        objectFit: ee.objectFit
                    }), '")')
                } : {}, en = function (e) {
                    let {config: t, src: n, unoptimized: r, width: o, quality: i, sizes: a, loader: l} = e;
                    if (r) return {src: n, srcSet: void 0, sizes: void 0};
                    let {widths: u, kind: c} = function (e, t, n) {
                        let {deviceSizes: r, allSizes: o} = e;
                        if (n) {
                            let e = /(^|\s)(1?\d?\d)vw/g, t = [];
                            for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                            if (t.length) {
                                let e = .01 * Math.min(...t);
                                return {widths: o.filter(t => t >= r[0] * e), kind: "w"}
                            }
                            return {widths: o, kind: "w"}
                        }
                        if ("number" != typeof t) return {widths: r, kind: "w"};
                        let i = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                        return {widths: i, kind: "x"}
                    }(t, o, a), s = u.length - 1;
                    return {
                        sizes: a || "w" !== c ? a : "100vw",
                        srcSet: u.map((e, r) => "".concat(l({
                            config: t,
                            src: n,
                            quality: i,
                            width: e
                        }), " ").concat("w" === c ? e : r + 1).concat(c)).join(", "),
                        src: l({config: t, src: n, quality: i, width: u[s]})
                    }
                }({config: B, src: h, unoptimized: b, width: V, quality: Q, sizes: y, loader: K}), er = h,
                eo = (0, l.useRef)(T);
            (0, l.useEffect)(() => {
                eo.current = T
            }, [T]);
            let ei = (0, l.useRef)(D);
            (0, l.useEffect)(() => {
                ei.current = D
            }, [D]);
            let ea = r._({
                isLazy: X,
                imgAttributes: en,
                heightInt: q,
                widthInt: V,
                qualityInt: Q,
                className: S,
                imgStyle: ee,
                blurStyle: et,
                loading: C,
                config: B,
                fetchPriority: M,
                fill: R,
                unoptimized: b,
                placeholder: x,
                loader: K,
                srcString: er,
                onLoadRef: eo,
                onLoadingCompleteRef: ei,
                setBlurComplete: H,
                setShowAltText: J
            }, U);
            return l.default.createElement(l.default.Fragment, null, l.default.createElement(E, r._({}, ea, {ref: t})), w ? l.default.createElement(u.default, null, l.default.createElement("link", r._({
                key: "__nimg-" + en.src + en.srcSet + en.sizes,
                rel: "preload",
                as: "image",
                href: en.srcSet ? void 0 : en.src,
                imageSrcSet: en.srcSet,
                imageSizes: en.sizes,
                crossOrigin: U.crossOrigin
            }, g(M)))) : null)
        }), b = y;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 7757: function (e, t) {
        "use strict";

        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: o, blurDataURL: i, objectFit: a} = e, l = r || t,
                u = o || n,
                c = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return l && u ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l, " ").concat(u, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(c, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none", "' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
                return n
            }
        })
    }, 7746: function (e, t) {
        "use strict";

        function n(e) {
            let {config: t, src: n, width: r, quality: o} = e;
            return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return r
            }
        }), n.__next_img_default = !0;
        let r = n
    }, 5675: function (e, t, n) {
        e.exports = n(3740)
    }
}]);