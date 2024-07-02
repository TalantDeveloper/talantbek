(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    6840: function (t, e, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return i(8490)
        }])
    }, 8490: function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, {
            default: function () {
                return r3
            }
        });
        var n, r = i(5893), s = i(6364), o = i.n(s), a = i(7294), l = i(9008), u = i.n(l), h = i(4298), c = i.n(h),
            d = i(1163);
        let p = {delta: 0, timestamp: 0, isProcessing: !1}, m = !0, f = !1,
            g = ["read", "update", "preRender", "render", "postRender"], v = g.reduce((t, e) => (t[e] = function (t) {
                let e = [], i = [], n = 0, r = !1, s = !1, o = new WeakSet, a = {
                    schedule: (t, s = !1, a = !1) => {
                        let l = a && r, u = l ? e : i;
                        return s && o.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (n = e.length)), t
                    }, cancel: t => {
                        let e = i.indexOf(t);
                        -1 !== e && i.splice(e, 1), o.delete(t)
                    }, process: l => {
                        if (r) {
                            s = !0;
                            return
                        }
                        if (r = !0, [e, i] = [i, e], i.length = 0, n = e.length) for (let i = 0; i < n; i++) {
                            let n = e[i];
                            n(l), o.has(n) && (a.schedule(n), t())
                        }
                        r = !1, s && (s = !1, a.process(l))
                    }
                };
                return a
            }(() => f = !0), t), {}), y = t => v[t].process(p), x = t => {
                f = !1, p.delta = m ? 1e3 / 60 : Math.max(Math.min(t - p.timestamp, 40), 1), p.timestamp = t, p.isProcessing = !0, g.forEach(y), p.isProcessing = !1, f && (m = !1, requestAnimationFrame(x))
            }, P = () => {
                f = !0, m = !0, p.isProcessing || requestAnimationFrame(x)
            }, b = g.reduce((t, e) => {
                let i = v[e];
                return t[e] = (t, e = !1, n = !1) => (f || P(), i.schedule(t, e, n)), t
            }, {});

        function w(t) {
            g.forEach(e => v[e].cancel(t))
        }

        function T(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }

        function A(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }

        class V {
            constructor() {
                this.subscriptions = []
            }

            add(t) {
                return T(this.subscriptions, t), () => A(this.subscriptions, t)
            }

            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n) this.subscriptions[0](t, e, i); else for (let r = 0; r < n; r++) {
                        let n = this.subscriptions[r];
                        n && n(t, e, i)
                    }
                }
            }

            getSize() {
                return this.subscriptions.length
            }

            clear() {
                this.subscriptions.length = 0
            }
        }

        let S = t => !isNaN(parseFloat(t));

        class E {
            constructor(t, e = {}) {
                this.version = "10.12.5", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                    this.prev = this.current, this.current = t;
                    let {delta: i, timestamp: n} = p;
                    this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, b.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }, this.scheduleVelocityCheck = () => b.postRender(this.velocityCheck), this.velocityCheck = ({timestamp: t}) => {
                    t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = S(this.current), this.owner = e.owner
            }

            onChange(t) {
                return this.on("change", t)
            }

            on(t, e) {
                this.events[t] || (this.events[t] = new V);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(), b.read(() => {
                        this.events.change.getSize() || this.stop()
                    })
                } : i
            }

            clearListeners() {
                for (let t in this.events) this.events[t].clear()
            }

            attach(t, e) {
                this.passiveEffect = t, this.stopPassiveEffect = e
            }

            set(t, e = !0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }

            setWithVelocity(t, e, i) {
                this.set(e), this.prev = t, this.timeDelta = i
            }

            jump(t) {
                this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
            }

            get() {
                return this.current
            }

            getPrevious() {
                return this.prev
            }

            getVelocity() {
                var t, e;
                return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
            }

            start(t) {
                return this.stop(), new Promise(e => {
                    this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                }).then(() => {
                    this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                })
            }

            stop() {
                this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
            }

            isAnimating() {
                return !!this.animation
            }

            clearAnimation() {
                delete this.animation
            }

            destroy() {
                this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }

        function C(t, e) {
            return new E(t, e)
        }

        let M = (0, a.createContext)({transformPagePoint: t => t, isStatic: !1, reducedMotion: "never"});

        function k(t) {
            let e = (0, a.useRef)(null);
            return null === e.current && (e.current = t()), e.current
        }

        function D(t) {
            let e = k(() => C(t)), {isStatic: i} = (0, a.useContext)(M);
            if (i) {
                let [, i] = (0, a.useState)(t);
                (0, a.useEffect)(() => e.on("change", i), [])
            }
            return e
        }

        let R = (0, a.createContext)({}), L = (0, a.createContext)(null), j = "undefined" != typeof document,
            F = j ? a.useLayoutEffect : a.useEffect, B = (0, a.createContext)({strict: !1});

        function O(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }

        function I(t) {
            return "string" == typeof t || Array.isArray(t)
        }

        function N(t) {
            return "object" == typeof t && "function" == typeof t.start
        }

        let U = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
            $ = ["initial", ...U];

        function W(t) {
            return N(t.animate) || $.some(e => I(t[e]))
        }

        function z(t) {
            return !!(W(t) || t.variants)
        }

        function H(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }

        let _ = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }, X = {};
        for (let t in _) X[t] = {isEnabled: e => _[t].some(t => !!e[t])};
        let Y = {hasAnimatedSinceResize: !0, hasEverUpdated: !1}, G = 1, q = (0, a.createContext)({}),
            Z = (0, a.createContext)({}), K = Symbol.for("motionComponentSymbol"),
            J = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

        function Q(t) {
            if ("string" != typeof t || t.includes("-")) ; else if (J.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
            return !1
        }

        let tt = {},
            te = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
            ti = new Set(te);

        function tn(t, {layout: e, layoutId: i}) {
            return ti.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!tt[t] || "opacity" === t)
        }

        let tr = t => !!(t && t.getVelocity),
            ts = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"},
            to = te.length, ta = t => e => "string" == typeof e && e.startsWith(t), tl = ta("--"), tu = ta("var(--"),
            th = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
            tc = (t, e, i) => Math.min(Math.max(i, t), e),
            td = {test: t => "number" == typeof t, parse: parseFloat, transform: t => t},
            tp = {...td, transform: t => tc(0, 1, t)}, tm = {...td, default: 1}, tf = t => Math.round(1e5 * t) / 1e5,
            tg = /(-)?([\d]*\.?[\d])+/g,
            tv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
            ty = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

        function tx(t) {
            return "string" == typeof t
        }

        let tP = t => ({
                test: e => tx(e) && e.endsWith(t) && 1 === e.split(" ").length,
                parse: parseFloat,
                transform: e => `${e}${t}`
            }), tb = tP("deg"), tw = tP("%"), tT = tP("px"), tA = tP("vh"), tV = tP("vw"),
            tS = {...tw, parse: t => tw.parse(t) / 100, transform: t => tw.transform(100 * t)},
            tE = {...td, transform: Math.round}, tC = {
                borderWidth: tT,
                borderTopWidth: tT,
                borderRightWidth: tT,
                borderBottomWidth: tT,
                borderLeftWidth: tT,
                borderRadius: tT,
                radius: tT,
                borderTopLeftRadius: tT,
                borderTopRightRadius: tT,
                borderBottomRightRadius: tT,
                borderBottomLeftRadius: tT,
                width: tT,
                maxWidth: tT,
                height: tT,
                maxHeight: tT,
                size: tT,
                top: tT,
                right: tT,
                bottom: tT,
                left: tT,
                padding: tT,
                paddingTop: tT,
                paddingRight: tT,
                paddingBottom: tT,
                paddingLeft: tT,
                margin: tT,
                marginTop: tT,
                marginRight: tT,
                marginBottom: tT,
                marginLeft: tT,
                rotate: tb,
                rotateX: tb,
                rotateY: tb,
                rotateZ: tb,
                scale: tm,
                scaleX: tm,
                scaleY: tm,
                scaleZ: tm,
                skew: tb,
                skewX: tb,
                skewY: tb,
                distance: tT,
                translateX: tT,
                translateY: tT,
                translateZ: tT,
                x: tT,
                y: tT,
                z: tT,
                perspective: tT,
                transformPerspective: tT,
                opacity: tp,
                originX: tS,
                originY: tS,
                originZ: tT,
                zIndex: tE,
                fillOpacity: tp,
                strokeOpacity: tp,
                numOctaves: tE
            };

        function tM(t, e, i, n) {
            let {style: r, vars: s, transform: o, transformOrigin: a} = t, l = !1, u = !1, h = !0;
            for (let t in e) {
                let i = e[t];
                if (tl(t)) {
                    s[t] = i;
                    continue
                }
                let n = tC[t], c = th(i, n);
                if (ti.has(t)) {
                    if (l = !0, o[t] = c, !h) continue;
                    i !== (n.default || 0) && (h = !1)
                } else t.startsWith("origin") ? (u = !0, a[t] = c) : r[t] = c
            }
            if (!e.transform && (l || n ? r.transform = function (t, {
                enableHardwareAcceleration: e = !0,
                allowTransformNone: i = !0
            }, n, r) {
                let s = "";
                for (let e = 0; e < to; e++) {
                    let i = te[e];
                    if (void 0 !== t[i]) {
                        let e = ts[i] || i;
                        s += `${e}(${t[i]}) `
                    }
                }
                return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
            }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                let {originX: t = "50%", originY: e = "50%", originZ: i = 0} = a;
                r.transformOrigin = `${t} ${e} ${i}`
            }
        }

        let tk = () => ({style: {}, transform: {}, transformOrigin: {}, vars: {}});

        function tD(t, e, i) {
            for (let n in e) tr(e[n]) || tn(n, i) || (t[n] = e[n])
        }

        function tR(t, e, i) {
            let n = {}, r = function (t, e, i) {
                let n = t.style || {}, r = {};
                return tD(r, n, t), Object.assign(r, function ({transformTemplate: t}, e, i) {
                    return (0, a.useMemo)(() => {
                        let n = tk();
                        return tM(n, e, {enableHardwareAcceleration: !i}, t), Object.assign({}, n.vars, n.style)
                    }, [e])
                }(t, e, i)), t.transformValues ? t.transformValues(r) : r
            }(t, e, i);
            return t.drag && !1 !== t.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n
        }

        let tL = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

        function tj(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || tL.has(t)
        }

        let tF = t => !tj(t);
        try {
            (n = require("@emotion/is-prop-valid").default) && (tF = t => t.startsWith("on") ? !tj(t) : n(t))
        } catch (t) {
        }

        function tB(t, e, i) {
            return "string" == typeof t ? t : tT.transform(e + i * t)
        }

        let tO = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
            tI = {offset: "strokeDashoffset", array: "strokeDasharray"};

        function tN(t, {
            attrX: e,
            attrY: i,
            attrScale: n,
            originX: r,
            originY: s,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: l = 0,
            ...u
        }, h, c, d) {
            if (tM(t, u, h, d), c) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style, t.style = {};
            let {attrs: p, style: m, dimensions: f} = t;
            p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function (t, e, i) {
                let n = tB(e, t.x, t.width), r = tB(i, t.y, t.height);
                return `${n} ${r}`
            }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function (t, e, i = 1, n = 0, r = !0) {
                t.pathLength = 1;
                let s = r ? tO : tI;
                t[s.offset] = tT.transform(-n);
                let o = tT.transform(e), a = tT.transform(i);
                t[s.array] = `${o} ${a}`
            }(p, o, a, l, !1)
        }

        let tU = () => ({...tk(), attrs: {}}), t$ = t => "string" == typeof t && "svg" === t.toLowerCase();

        function tW(t, e, i, n) {
            let r = (0, a.useMemo)(() => {
                let i = tU();
                return tN(i, e, {enableHardwareAcceleration: !1}, t$(n), t.transformTemplate), {
                    ...i.attrs,
                    style: {...i.style}
                }
            }, [e]);
            if (t.style) {
                let e = {};
                tD(e, t.style, t), r.style = {...e, ...r.style}
            }
            return r
        }

        let tz = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

        function tH(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
        }

        let t_ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

        function tX(t, e, i, n) {
            for (let i in tH(t, e, void 0, n), e.attrs) t.setAttribute(t_.has(i) ? i : tz(i), e.attrs[i])
        }

        function tY(t, e) {
            let {style: i} = t, n = {};
            for (let r in i) (tr(i[r]) || e.style && tr(e.style[r]) || tn(r, t)) && (n[r] = i[r]);
            return n
        }

        function tG(t, e) {
            let i = tY(t, e);
            for (let n in t) if (tr(t[n]) || tr(e[n])) {
                let e = -1 !== te.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                i[e] = t[n]
            }
            return i
        }

        function tq(t, e, i, n = {}, r = {}) {
            return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
        }

        let tZ = t => Array.isArray(t), tK = t => !!(t && "object" == typeof t && t.mix && t.toValue),
            tJ = t => tZ(t) ? t[t.length - 1] || 0 : t;

        function tQ(t) {
            let e = tr(t) ? t.get() : t;
            return tK(e) ? e.toValue() : e
        }

        let t0 = t => (e, i) => {
            let n = (0, a.useContext)(R), r = (0, a.useContext)(L),
                s = () => (function ({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i}, n, r, s) {
                    let o = {
                        latestValues: function (t, e, i, n) {
                            let r = {}, s = n(t, {});
                            for (let t in s) r[t] = tQ(s[t]);
                            let {initial: o, animate: a} = t, l = W(t), u = z(t);
                            e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                            let h = !!i && !1 === i.initial;
                            h = h || !1 === o;
                            let c = h ? a : o;
                            if (c && "boolean" != typeof c && !N(c)) {
                                let e = Array.isArray(c) ? c : [c];
                                e.forEach(e => {
                                    let i = tq(t, e);
                                    if (!i) return;
                                    let {transitionEnd: n, transition: s, ...o} = i;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = h ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (r[t] = e)
                                    }
                                    for (let t in n) r[t] = n[t]
                                })
                            }
                            return r
                        }(n, r, s, t), renderState: e()
                    };
                    return i && (o.mount = t => i(n, t, o)), o
                })(t, e, n, r);
            return i ? s() : k(s)
        }, t1 = {
            useVisualState: t0({
                scrapeMotionValuesFromProps: tG,
                createRenderState: tU,
                onMount: (t, e, {renderState: i, latestValues: n}) => {
                    try {
                        i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (t) {
                        i.dimensions = {x: 0, y: 0, width: 0, height: 0}
                    }
                    tN(i, n, {enableHardwareAcceleration: !1}, t$(e.tagName), t.transformTemplate), tX(e, i)
                }
            })
        }, t5 = {useVisualState: t0({scrapeMotionValuesFromProps: tY, createRenderState: tk})};

        function t2(t, e, i, n = {passive: !0}) {
            return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
        }

        let t3 = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

        function t9(t, e = "page") {
            return {point: {x: t[e + "X"], y: t[e + "Y"]}}
        }

        let t4 = t => e => t3(e) && t(e, t9(e));

        function t6(t, e, i, n) {
            return t2(t, e, t4(i), n)
        }

        let t8 = (t, e) => i => e(t(i)), t7 = (...t) => t.reduce(t8);

        function et(t) {
            let e = null;
            return () => {
                let i = () => {
                    e = null
                };
                return null === e && (e = t, i)
            }
        }

        let ee = et("dragHorizontal"), ei = et("dragVertical");

        function en(t) {
            let e = !1;
            if ("y" === t) e = ei(); else if ("x" === t) e = ee(); else {
                let t = ee(), i = ei();
                t && i ? e = () => {
                    t(), i()
                } : (t && t(), i && i())
            }
            return e
        }

        function er() {
            let t = en(!0);
            return !t || (t(), !1)
        }

        class es {
            constructor(t) {
                this.isMounted = !1, this.node = t
            }

            update() {
            }
        }

        function eo(t, e) {
            let i = "onHover" + (e ? "Start" : "End"), n = (n, r) => {
                if ("touch" === n.type || er()) return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[i] && b.update(() => s[i](n, r))
            };
            return t6(t.current, "pointer" + (e ? "enter" : "leave"), n, {passive: !t.getProps()[i]})
        }

        let ea = (t, e) => !!e && (t === e || ea(t, e.parentElement)), el = t => t;

        function eu(t, e) {
            if (!e) return;
            let i = new PointerEvent("pointer" + t);
            e(i, t9(i))
        }

        let eh = new WeakMap, ec = new WeakMap, ed = t => {
            let e = eh.get(t.target);
            e && e(t)
        }, ep = t => {
            t.forEach(ed)
        }, em = {some: 0, all: 1};

        function ef(t, e) {
            if (!Array.isArray(e)) return !1;
            let i = e.length;
            if (i !== t.length) return !1;
            for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
            return !0
        }

        function eg(t, e, i) {
            let n = t.getProps();
            return tq(n, e, void 0 !== i ? i : n.custom, function (t) {
                let e = {};
                return t.values.forEach((t, i) => e[i] = t.get()), e
            }(t), function (t) {
                let e = {};
                return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
            }(t))
        }

        let ev = "data-" + tz("framerAppearId"), ey = t => 1e3 * t, ex = t => t / 1e3, eP = {current: !1},
            eb = t => Array.isArray(t) && "number" == typeof t[0],
            ew = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`, eT = {
                linear: "linear",
                ease: "ease",
                easeIn: "ease-in",
                easeOut: "ease-out",
                easeInOut: "ease-in-out",
                circIn: ew([0, .65, .55, 1]),
                circOut: ew([.55, 0, 1, .45]),
                backIn: ew([.31, .01, .66, -.59]),
                backOut: ew([.33, 1.53, .69, .99])
            }, eA = {waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")}, eV = {}, eS = {};
        for (let t in eA) eS[t] = () => (void 0 === eV[t] && (eV[t] = eA[t]()), eV[t]);
        let eE = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

        function eC(t, e, i, n) {
            if (t === e && i === n) return el;
            let r = e => (function (t, e, i, n, r) {
                let s, o;
                let a = 0;
                do (s = eE(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            })(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : eE(r(t), e, n)
        }

        let eM = eC(.42, 0, 1, 1), ek = eC(0, 0, .58, 1), eD = eC(.42, 0, .58, 1),
            eR = t => Array.isArray(t) && "number" != typeof t[0],
            eL = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ej = t => e => 1 - t(1 - e),
            eF = t => 1 - Math.sin(Math.acos(t)), eB = ej(eF), eO = eL(eB), eI = eC(.33, 1.53, .69, .99), eN = ej(eI),
            eU = eL(eN), e$ = t => (t *= 2) < 1 ? .5 * eN(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))), eW = {
                linear: el,
                easeIn: eM,
                easeInOut: eD,
                easeOut: ek,
                circIn: eF,
                circInOut: eO,
                circOut: eB,
                backIn: eN,
                backInOut: eU,
                backOut: eI,
                anticipate: e$
            }, ez = t => {
                if (Array.isArray(t)) {
                    el(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                    let [e, i, n, r] = t;
                    return eC(e, i, n, r)
                }
                return "string" == typeof t ? (el(void 0 !== eW[t], `Invalid easing type '${t}'`), eW[t]) : t
            },
            eH = (t, e) => i => !!(tx(i) && ty.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
            e_ = (t, e, i) => n => {
                if (!tx(n)) return n;
                let [r, s, o, a] = n.match(tg);
                return {
                    [t]: parseFloat(r),
                    [e]: parseFloat(s),
                    [i]: parseFloat(o),
                    alpha: void 0 !== a ? parseFloat(a) : 1
                }
            }, eX = t => tc(0, 255, t), eY = {...td, transform: t => Math.round(eX(t))}, eG = {
                test: eH("rgb", "red"),
                parse: e_("red", "green", "blue"),
                transform: ({
                                red: t,
                                green: e,
                                blue: i,
                                alpha: n = 1
                            }) => "rgba(" + eY.transform(t) + ", " + eY.transform(e) + ", " + eY.transform(i) + ", " + tf(tp.transform(n)) + ")"
            }, eq = {
                test: eH("#"), parse: function (t) {
                    let e = "", i = "", n = "", r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                }, transform: eG.transform
            }, eZ = {
                test: eH("hsl", "hue"),
                parse: e_("hue", "saturation", "lightness"),
                transform: ({
                                hue: t,
                                saturation: e,
                                lightness: i,
                                alpha: n = 1
                            }) => "hsla(" + Math.round(t) + ", " + tw.transform(tf(e)) + ", " + tw.transform(tf(i)) + ", " + tf(tp.transform(n)) + ")"
            }, eK = {
                test: t => eG.test(t) || eq.test(t) || eZ.test(t),
                parse: t => eG.test(t) ? eG.parse(t) : eZ.test(t) ? eZ.parse(t) : eq.parse(t),
                transform: t => tx(t) ? t : t.hasOwnProperty("red") ? eG.transform(t) : eZ.transform(t)
            }, eJ = (t, e, i) => -i * t + i * e + t;

        function eQ(t, e, i) {
            return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        let e0 = (t, e, i) => {
            let n = t * t;
            return Math.sqrt(Math.max(0, i * (e * e - n) + n))
        }, e1 = [eq, eG, eZ], e5 = t => e1.find(e => e.test(t));

        function e2(t) {
            let e = e5(t);
            el(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let i = e.parse(t);
            return e === eZ && (i = function ({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360, i /= 100;
                let r = 0, s = 0, o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e, a = 2 * i - n;
                    r = eQ(a, n, t + 1 / 3), s = eQ(a, n, t), o = eQ(a, n, t - 1 / 3)
                } else r = s = o = i;
                return {red: Math.round(255 * r), green: Math.round(255 * s), blue: Math.round(255 * o), alpha: n}
            }(i)), i
        }

        let e3 = (t, e) => {
                let i = e2(t), n = e2(e), r = {...i};
                return t => (r.red = e0(i.red, n.red, t), r.green = e0(i.green, n.green, t), r.blue = e0(i.blue, n.blue, t), r.alpha = eJ(i.alpha, n.alpha, t), eG.transform(r))
            }, e9 = {
                regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                countKey: "Vars",
                token: "${v}",
                parse: el
            }, e4 = {regex: tv, countKey: "Colors", token: "${c}", parse: eK.parse},
            e6 = {regex: tg, countKey: "Numbers", token: "${n}", parse: td.parse};

        function e8(t, {regex: e, countKey: i, token: n, parse: r}) {
            let s = t.tokenised.match(e);
            s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...s.map(r)))
        }

        function e7(t) {
            let e = t.toString(), i = {value: e, tokenised: e, values: [], numVars: 0, numColors: 0, numNumbers: 0};
            return i.value.includes("var(--") && e8(i, e9), e8(i, e4), e8(i, e6), i
        }

        function it(t) {
            return e7(t).values
        }

        function ie(t) {
            let {values: e, numColors: i, numVars: n, tokenised: r} = e7(t), s = e.length;
            return t => {
                let e = r;
                for (let r = 0; r < s; r++) e = r < n ? e.replace(e9.token, t[r]) : r < n + i ? e.replace(e4.token, eK.transform(t[r])) : e.replace(e6.token, tf(t[r]));
                return e
            }
        }

        let ii = t => "number" == typeof t ? 0 : t, ir = {
            test: function (t) {
                var e, i;
                return isNaN(t) && tx(t) && ((null === (e = t.match(tg)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tv)) || void 0 === i ? void 0 : i.length) || 0) > 0
            }, parse: it, createTransformer: ie, getAnimatableNone: function (t) {
                let e = it(t), i = ie(t);
                return i(e.map(ii))
            }
        }, is = (t, e) => i => `${i > 0 ? e : t}`;

        function io(t, e) {
            return "number" == typeof t ? i => eJ(t, e, i) : eK.test(t) ? e3(t, e) : t.startsWith("var(") ? is(t, e) : iu(t, e)
        }

        let ia = (t, e) => {
            let i = [...t], n = i.length, r = t.map((t, i) => io(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++) i[e] = r[e](t);
                return i
            }
        }, il = (t, e) => {
            let i = {...t, ...e}, n = {};
            for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = io(t[r], e[r]));
            return t => {
                for (let e in n) i[e] = n[e](t);
                return i
            }
        }, iu = (t, e) => {
            let i = ir.createTransformer(e), n = e7(t), r = e7(e),
                s = n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers;
            return s ? t7(ia(n.values, r.values), i) : (el(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), is(t, e))
        }, ih = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }, ic = (t, e) => i => eJ(t, e, i);

        function id(t, e, {clamp: i = !0, ease: n, mixer: r} = {}) {
            let s = t.length;
            if (el(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
            t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
            let o = function (t, e, i) {
                let n = [], r = i || function (t) {
                    if ("number" == typeof t) ; else if ("string" == typeof t) return eK.test(t) ? e3 : iu; else if (Array.isArray(t)) return ia; else if ("object" == typeof t) return il;
                    return ic
                }(t[0]), s = t.length - 1;
                for (let i = 0; i < s; i++) {
                    let s = r(t[i], t[i + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[i] || el : e;
                        s = t7(t, s)
                    }
                    n.push(s)
                }
                return n
            }(e, n, r), a = o.length, l = e => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++) ;
                let n = ih(t[i], t[i + 1], e);
                return o[i](n)
            };
            return i ? e => l(tc(t[0], t[s - 1], e)) : l
        }

        function ip({duration: t = 300, keyframes: e, times: i, ease: n = "easeInOut"}) {
            let r = eR(n) ? n.map(ez) : ez(n), s = {done: !1, value: e[0]},
                o = (i && i.length === e.length ? i : function (t) {
                    let e = [0];
                    return function (t, e) {
                        let i = t[t.length - 1];
                        for (let n = 1; n <= e; n++) {
                            let r = ih(0, e, n);
                            t.push(eJ(i, 1, r))
                        }
                    }(e, t.length - 1), e
                }(e)).map(e => e * t),
                a = id(o, e, {ease: Array.isArray(r) ? r : e.map(() => r || eD).splice(0, e.length - 1)});
            return {calculatedDuration: t, next: e => (s.value = a(e), s.done = e >= t, s)}
        }

        function im(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s), (r = e - s) ? n * (1e3 / r) : 0
        }

        function ig(t, e) {
            return t * Math.sqrt(1 - e * e)
        }

        let iv = ["duration", "bounce"], iy = ["stiffness", "damping", "mass"];

        function ix(t, e) {
            return e.some(e => void 0 !== t[e])
        }

        function iP({keyframes: t, restDelta: e, restSpeed: i, ...n}) {
            let r;
            let s = t[0], o = t[t.length - 1], a = {done: !1, value: s}, {
                    stiffness: l,
                    damping: u,
                    mass: h,
                    velocity: c,
                    duration: d,
                    isResolvedFromDuration: p
                } = function (t) {
                    let e = {velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t};
                    if (!ix(t, iy) && ix(t, iv)) {
                        let i = function ({duration: t = 800, bounce: e = .25, velocity: i = 0, mass: n = 1}) {
                            let r, s;
                            el(t <= ey(10), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = tc(.05, 1, o), t = tc(.01, 10, ex(t)), o < 1 ? (r = e => {
                                let n = e * o, r = n * t, s = ig(e, o);
                                return .001 - (n - i) / s * Math.exp(-r)
                            }, s = e => {
                                let n = e * o, s = n * t, a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                    l = ig(Math.pow(e, 2), o), u = -r(e) + .001 > 0 ? -1 : 1;
                                return u * ((s * i + i - a) * Math.exp(-s)) / l
                            }) : (r = e => {
                                let n = Math.exp(-e * t), r = (e - i) * t + 1;
                                return -.001 + n * r
                            }, s = e => {
                                let n = Math.exp(-e * t), r = (i - e) * (t * t);
                                return n * r
                            });
                            let a = 5 / t, l = function (t, e, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                return n
                            }(r, s, a);
                            if (t = ey(t), isNaN(l)) return {stiffness: 100, damping: 10, duration: t};
                            {
                                let e = Math.pow(l, 2) * n;
                                return {stiffness: e, damping: 2 * o * Math.sqrt(n * e), duration: t}
                            }
                        }(t);
                        (e = {...e, ...i, velocity: 0, mass: 1}).isResolvedFromDuration = !0
                    }
                    return e
                }(n), m = c ? -ex(c) : 0, f = u / (2 * Math.sqrt(l * h)), g = o - s, v = ex(Math.sqrt(l / h)),
                y = 5 > Math.abs(g);
            if (i || (i = y ? .01 : 2), e || (e = y ? .005 : .5), f < 1) {
                let t = ig(v, f);
                r = e => o - Math.exp(-f * v * e) * ((m + f * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
            } else if (1 === f) r = t => o - Math.exp(-v * t) * (g + (m + v * g) * t); else {
                let t = v * Math.sqrt(f * f - 1);
                r = e => {
                    let i = Math.min(t * e, 300);
                    return o - Math.exp(-f * v * e) * ((m + f * v * g) * Math.sinh(i) + t * g * Math.cosh(i)) / t
                }
            }
            return {
                calculatedDuration: p && d || null, next: t => {
                    let n = r(t);
                    if (p) a.done = t >= d; else {
                        let s = m;
                        0 !== t && (s = f < 1 ? im(r, t, n) : 0);
                        let l = Math.abs(s) <= i, u = Math.abs(o - n) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? o : n, a
                }
            }
        }

        function ib({
                        keyframes: t,
                        velocity: e = 0,
                        power: i = .8,
                        timeConstant: n = 325,
                        bounceDamping: r = 10,
                        bounceStiffness: s = 500,
                        modifyTarget: o,
                        min: a,
                        max: l,
                        restDelta: u = .5,
                        restSpeed: h
                    }) {
            let c, d;
            let p = t[0], m = {done: !1, value: p}, f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l, v = i * e,
                y = p + v, x = void 0 === o ? y : o(y);
            x !== y && (v = x - p);
            let P = t => -v * Math.exp(-t / n), b = t => x + P(t), w = t => {
                let e = P(t), i = b(t);
                m.done = Math.abs(e) <= u, m.value = m.done ? x : i
            }, T = t => {
                f(m.value) && (c = t, d = iP({
                    keyframes: [m.value, g(m.value)],
                    velocity: im(b, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            };
            return T(0), {
                calculatedDuration: null, next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0, w(t), T(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), m)
                }
            }
        }

        let iw = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => b.update(e, !0),
                stop: () => w(e),
                now: () => p.isProcessing ? p.timestamp : performance.now()
            }
        };

        function iT(t) {
            let e = 0, i = t.next(e);
            for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }

        let iA = {decay: ib, inertia: ib, tween: ip, keyframes: ip, spring: iP};

        function iV({
                        autoplay: t = !0,
                        delay: e = 0,
                        driver: i = iw,
                        keyframes: n,
                        type: r = "keyframes",
                        repeat: s = 0,
                        repeatDelay: o = 0,
                        repeatType: a = "loop",
                        onPlay: l,
                        onStop: u,
                        onComplete: h,
                        onUpdate: c,
                        ...d
                    }) {
            let p, m, f, g, v, y = 1, x = !1, P = () => {
                p && p(), m = new Promise(t => {
                    p = t
                })
            };
            P();
            let b = iA[r] || ip;
            b !== ip && "number" != typeof n[0] && (g = id([0, 100], n, {clamp: !1}), n = [0, 100]);
            let w = b({...d, keyframes: n});
            "mirror" === a && (v = b({...d, keyframes: [...n].reverse(), velocity: -(d.velocity || 0)}));
            let T = "idle", A = null, V = null, S = null;
            null === w.calculatedDuration && s && (w.calculatedDuration = iT(w));
            let {calculatedDuration: E} = w, C = 1 / 0, M = 1 / 0;
            null !== E && (M = (C = E + o) * (s + 1) - o);
            let k = 0, D = t => {
                if (null === V) return;
                y > 0 && (V = Math.min(V, t)), k = null !== A ? A : (t - V) * y;
                let i = k - e, r = i < 0;
                k = Math.max(i, 0), "finished" === T && null === A && (k = M);
                let l = k, u = w;
                if (s) {
                    let t = k / C, e = Math.floor(t), i = t % 1;
                    !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                    let n = !!(e % 2);
                    n && ("reverse" === a ? (i = 1 - i, o && (i -= o / C)) : "mirror" === a && (u = v));
                    let r = tc(0, 1, i);
                    k > M && (r = "reverse" === a && n ? 1 : 0), l = r * C
                }
                let h = r ? {done: !1, value: n[0]} : u.next(l);
                g && (h.value = g(h.value));
                let {done: d} = h;
                r || null === E || (d = k >= M);
                let p = null === A && ("finished" === T || "running" === T && d || y < 0 && k <= 0);
                return c && c(h.value), p && j(), h
            }, R = () => {
                f && f.stop(), f = void 0
            }, L = () => {
                T = "idle", R(), P(), V = S = null
            }, j = () => {
                T = "finished", h && h(), R(), P()
            }, F = () => {
                if (x) return;
                f || (f = i(D));
                let t = f.now();
                l && l(), null !== A ? V = t - A : V && "finished" !== T || (V = t), S = V, A = null, T = "running", f.start()
            };
            t && F();
            let B = {
                then: (t, e) => m.then(t, e), get time() {
                    return ex(k)
                }, set time(newTime) {
                    k = newTime = ey(newTime), null === A && f && 0 !== y ? V = f.now() - newTime / y : A = newTime
                }, get duration() {
                    let t = null === w.calculatedDuration ? iT(w) : w.calculatedDuration;
                    return ex(t)
                }, get speed() {
                    return y
                }, set speed(newSpeed) {
                    if (newSpeed === y || !f) return;
                    y = newSpeed, B.time = ex(k)
                }, get state() {
                    return T
                }, play: F, pause: () => {
                    T = "paused", A = k
                }, stop: () => {
                    x = !0, "idle" !== T && (T = "idle", u && u(), L())
                }, cancel: () => {
                    null !== S && D(S), L()
                }, complete: () => {
                    T = "finished"
                }, sample: t => (V = 0, D(t))
            };
            return B
        }

        let iS = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
            iE = (t, e) => "spring" === e.type || "backgroundColor" === t || !function t(e) {
                return !!(!e || "string" == typeof e && eT[e] || eb(e) || Array.isArray(e) && e.every(t))
            }(e.ease), iC = {type: "spring", stiffness: 500, damping: 25, restSpeed: 10},
            iM = t => ({type: "spring", stiffness: 550, damping: 0 === t ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
            ik = {type: "keyframes", duration: .8}, iD = {type: "keyframes", ease: [.25, .1, .35, 1], duration: .3},
            iR = (t, {keyframes: e}) => e.length > 2 ? ik : ti.has(t) ? t.startsWith("scale") ? iM(e[1]) : iC : iD,
            iL = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && ir.test(e) && !e.startsWith("url(")),
            ij = new Set(["brightness", "contrast", "saturate", "opacity"]);

        function iF(t) {
            let [e, i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e) return t;
            let [n] = i.match(tg) || [];
            if (!n) return t;
            let r = i.replace(n, ""), s = ij.has(e) ? 1 : 0;
            return n !== i && (s *= 100), e + "(" + s + r + ")"
        }

        let iB = /([a-z-]*)\(.*?\)/g, iO = {
            ...ir, getAnimatableNone: t => {
                let e = t.match(iB);
                return e ? e.map(iF).join(" ") : t
            }
        }, iI = {
            ...tC,
            color: eK,
            backgroundColor: eK,
            outlineColor: eK,
            fill: eK,
            stroke: eK,
            borderColor: eK,
            borderTopColor: eK,
            borderRightColor: eK,
            borderBottomColor: eK,
            borderLeftColor: eK,
            filter: iO,
            WebkitFilter: iO
        }, iN = t => iI[t];

        function iU(t, e) {
            let i = iN(t);
            return i !== iO && (i = ir), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }

        function i$(t) {
            return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }

        function iW(t) {
            return "number" == typeof t ? 0 : iU("", t)
        }

        function iz(t, e) {
            return t[e] || t.default || t
        }

        let iH = (t, e, i, n = {}) => r => {
            let s = iz(n, t) || {}, o = s.delay || n.delay || 0, {elapsed: a = 0} = n;
            a -= ey(o);
            let l = function (t, e, i, n) {
                let r = iL(e, i), s = void 0 !== n.from ? n.from : t.get();
                return ("none" === s && r && "string" == typeof i ? s = iU(e, i) : i$(s) && "string" == typeof i ? s = iW(i) : !Array.isArray(i) && i$(i) && "string" == typeof s && (i = iW(s)), Array.isArray(i)) ? function (t, [...e]) {
                    for (let i = 0; i < e.length; i++) null === e[i] && (e[i] = 0 === i ? t : e[i - 1]);
                    return e
                }(s, i) : [s, i]
            }(e, t, i, s), u = l[0], h = l[l.length - 1], c = iL(t, u), d = iL(t, h);
            el(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
            let p = {
                keyframes: l, velocity: e.getVelocity(), ease: "easeOut", ...s, delay: -a, onUpdate: t => {
                    e.set(t), s.onUpdate && s.onUpdate(t)
                }, onComplete: () => {
                    r(), s.onComplete && s.onComplete()
                }
            };
            if (!function ({
                               when: t,
                               delay: e,
                               delayChildren: i,
                               staggerChildren: n,
                               staggerDirection: r,
                               repeat: s,
                               repeatType: o,
                               repeatDelay: a,
                               from: l,
                               elapsed: u,
                               ...h
                           }) {
                return !!Object.keys(h).length
            }(s) && (p = {...p, ...iR(t, p)}), p.duration && (p.duration = ey(p.duration)), p.repeatDelay && (p.repeatDelay = ey(p.repeatDelay)), !c || !d || eP.current || !1 === s.type) return function ({
                                                                                                                                                                                                                keyframes: t,
                                                                                                                                                                                                                delay: e,
                                                                                                                                                                                                                onUpdate: i,
                                                                                                                                                                                                                onComplete: n
                                                                                                                                                                                                            }) {
                let r = () => (i && i(t[t.length - 1]), n && n(), {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: el,
                    pause: el,
                    stop: el,
                    then: t => (t(), Promise.resolve()),
                    cancel: el,
                    complete: el
                });
                return e ? iV({keyframes: [0, 1], duration: 0, delay: e, onComplete: r}) : r()
            }(p);
            if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let i = function (t, e, {onUpdate: i, onComplete: n, ...r}) {
                    let s, o;
                    let a = eS.waapi() && iS.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type;
                    if (!a) return !1;
                    let l = !1, u = () => {
                        o = new Promise(t => {
                            s = t
                        })
                    };
                    u();
                    let {keyframes: h, duration: c = 300, ease: d, times: p} = r;
                    if (iE(e, r)) {
                        let t = iV({...r, repeat: 0, delay: 0}), e = {done: !1, value: h[0]}, i = [], n = 0;
                        for (; !e.done && n < 2e4;) i.push((e = t.sample(n)).value), n += 10;
                        p = void 0, h = i, c = n - 10, d = "linear"
                    }
                    let m = function (t, e, i, {
                        delay: n = 0,
                        duration: r,
                        repeat: s = 0,
                        repeatType: o = "loop",
                        ease: a,
                        times: l
                    } = {}) {
                        let u = {[e]: i};
                        l && (u.offset = l);
                        let h = function t(e) {
                            if (e) return eb(e) ? ew(e) : Array.isArray(e) ? e.map(t) : eT[e]
                        }(a);
                        return Array.isArray(h) && (u.easing = h), t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, h, {...r, duration: c, ease: d, times: p}), f = () => m.cancel(), g = () => {
                        b.update(f), s(), u()
                    };
                    return m.onfinish = () => {
                        t.set(function (t, {repeat: e, repeatType: i = "loop"}) {
                            let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                            return t[n]
                        }(h, r)), n && n(), g()
                    }, {
                        then: (t, e) => o.then(t, e), get time() {
                            return ex(m.currentTime || 0)
                        }, set time(newTime) {
                            m.currentTime = ey(newTime)
                        }, get speed() {
                            return m.playbackRate
                        }, set speed(newSpeed) {
                            m.playbackRate = newSpeed
                        }, get duration() {
                            return ex(c)
                        }, play: () => {
                            l || (m.play(), w(f))
                        }, pause: () => m.pause(), stop: () => {
                            if (l = !0, "idle" === m.playState) return;
                            let {currentTime: e} = m;
                            if (e) {
                                let i = iV({...r, autoplay: !1});
                                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                            }
                            g()
                        }, complete: () => m.finish(), cancel: g
                    }
                }(e, t, p);
                if (i) return i
            }
            return iV(p)
        };

        function i_(t) {
            return !!(tr(t) && t.add)
        }

        let iX = t => /^\-?\d*\.?\d+$/.test(t), iY = t => /^0[^.\s]+$/.test(t), iG = t => e => e.test(t),
            iq = [td, tT, tw, tb, tV, tA, {test: t => "auto" === t, parse: t => t}], iZ = t => iq.find(iG(t)),
            iK = [...iq, eK, ir], iJ = t => iK.find(iG(t));

        function iQ(t, e, {delay: i = 0, transitionOverride: n, type: r} = {}) {
            let {transition: s = t.getDefaultTransition(), transitionEnd: o, ...a} = t.makeTargetAnimatable(e),
                l = t.getValue("willChange");
            n && (s = n);
            let u = [], h = r && t.animationState && t.animationState.getState()[r];
            for (let e in a) {
                let n = t.getValue(e), r = a[e];
                if (!n || void 0 === r || h && function ({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1, n
                }(h, e)) continue;
                let o = {delay: i, elapsed: 0, ...s};
                if (window.HandoffAppearAnimations && !n.hasAnimated) {
                    let i = t.getProps()[ev];
                    i && (o.elapsed = window.HandoffAppearAnimations(i, e, n, b))
                }
                n.start(iH(e, n, r, t.shouldReduceMotion && ti.has(e) ? {type: !1} : o));
                let c = n.animation;
                i_(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c)
            }
            return o && Promise.all(u).then(() => {
                o && function (t, e) {
                    let i = eg(t, e), {
                        transitionEnd: n = {},
                        transition: r = {},
                        ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                    for (let e in s = {...s, ...n}) {
                        var o;
                        let i = tJ(s[e]);
                        o = e, t.hasValue(o) ? t.getValue(o).set(i) : t.addValue(o, C(i))
                    }
                }(t, o)
            }), u
        }

        function i0(t, e, i = {}) {
            let n = eg(t, e, i.custom), {transition: r = t.getDefaultTransition() || {}} = n || {};
            i.transitionOverride && (r = i.transitionOverride);
            let s = n ? () => Promise.all(iQ(t, n, i)) : () => Promise.resolve(),
                o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                    let {delayChildren: s = 0, staggerChildren: o, staggerDirection: a} = r;
                    return function (t, e, i = 0, n = 0, r = 1, s) {
                        let o = [], a = (t.variantChildren.size - 1) * n,
                            l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                        return Array.from(t.variantChildren).sort(i1).forEach((t, n) => {
                            t.notify("AnimationStart", e), o.push(i0(t, e, {
                                ...s,
                                delay: i + l(n)
                            }).then(() => t.notify("AnimationComplete", e)))
                        }), Promise.all(o)
                    }(t, e, s + n, o, a, i)
                } : () => Promise.resolve(), {when: a} = r;
            if (!a) return Promise.all([s(), o(i.delay)]);
            {
                let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                return t().then(() => e())
            }
        }

        function i1(t, e) {
            return t.sortNodePosition(e)
        }

        let i5 = [...U].reverse(), i2 = U.length;

        function i3(t = !1) {
            return {isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
        }

        let i9 = 0, i4 = (t, e) => Math.abs(t - e);

        class i6 {
            constructor(t, e, {transformPagePoint: i} = {}) {
                if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let t = nt(this.lastMoveEventInfo, this.history), e = null !== this.startEvent,
                        i = function (t, e) {
                            let i = i4(t.x, e.x), n = i4(t.y, e.y);
                            return Math.sqrt(i ** 2 + n ** 2)
                        }(t.offset, {x: 0, y: 0}) >= 3;
                    if (!e && !i) return;
                    let {point: n} = t, {timestamp: r} = p;
                    this.history.push({...n, timestamp: r});
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = i8(e, this.transformPagePoint), b.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let {onEnd: i, onSessionEnd: n} = this.handlers,
                        r = nt("pointercancel" === t.type ? this.lastMoveEventInfo : i8(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r), n && n(t, r)
                }, !t3(t)) return;
                this.handlers = e, this.transformPagePoint = i;
                let n = t9(t), r = i8(n, this.transformPagePoint), {point: s} = r, {timestamp: o} = p;
                this.history = [{...s, timestamp: o}];
                let {onSessionStart: a} = e;
                a && a(t, nt(r, this.history)), this.removeListeners = t7(t6(window, "pointermove", this.handlePointerMove), t6(window, "pointerup", this.handlePointerUp), t6(window, "pointercancel", this.handlePointerUp))
            }

            updateHandlers(t) {
                this.handlers = t
            }

            end() {
                this.removeListeners && this.removeListeners(), w(this.updatePoint)
            }
        }

        function i8(t, e) {
            return e ? {point: e(t.point)} : t
        }

        function i7(t, e) {
            return {x: t.x - e.x, y: t.y - e.y}
        }

        function nt({point: t}, e) {
            return {
                point: t, delta: i7(t, ne(e)), offset: i7(t, e[0]), velocity: function (t, e) {
                    if (t.length < 2) return {x: 0, y: 0};
                    let i = t.length - 1, n = null, r = ne(t);
                    for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > ey(.1)));) i--;
                    if (!n) return {x: 0, y: 0};
                    let s = ex(r.timestamp - n.timestamp);
                    if (0 === s) return {x: 0, y: 0};
                    let o = {x: (r.x - n.x) / s, y: (r.y - n.y) / s};
                    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                }(e, 0)
            }
        }

        function ne(t) {
            return t[t.length - 1]
        }

        function ni(t) {
            return t.max - t.min
        }

        function nn(t, e = 0, i = .01) {
            return Math.abs(t - e) <= i
        }

        function nr(t, e, i, n = .5) {
            t.origin = n, t.originPoint = eJ(e.min, e.max, t.origin), t.scale = ni(i) / ni(e), (nn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eJ(i.min, i.max, t.origin) - t.originPoint, (nn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }

        function ns(t, e, i, n) {
            nr(t.x, e.x, i.x, n ? n.originX : void 0), nr(t.y, e.y, i.y, n ? n.originY : void 0)
        }

        function no(t, e, i) {
            t.min = i.min + e.min, t.max = t.min + ni(e)
        }

        function na(t, e, i) {
            t.min = e.min - i.min, t.max = t.min + ni(e)
        }

        function nl(t, e, i) {
            na(t.x, e.x, i.x), na(t.y, e.y, i.y)
        }

        function nu(t, e, i) {
            return {min: void 0 !== e ? t.min + e : void 0, max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0}
        }

        function nh(t, e) {
            let i = e.min - t.min, n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {min: i, max: n}
        }

        function nc(t, e, i) {
            return {min: nd(t, e), max: nd(t, i)}
        }

        function nd(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }

        let np = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}), nm = () => ({x: np(), y: np()}),
            nf = () => ({min: 0, max: 0}), ng = () => ({x: nf(), y: nf()});

        function nv(t) {
            return [t("x"), t("y")]
        }

        function ny({top: t, left: e, right: i, bottom: n}) {
            return {x: {min: e, max: i}, y: {min: t, max: n}}
        }

        function nx(t) {
            return void 0 === t || 1 === t
        }

        function nP({scale: t, scaleX: e, scaleY: i}) {
            return !nx(t) || !nx(e) || !nx(i)
        }

        function nb(t) {
            return nP(t) || nw(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }

        function nw(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }

        function nT(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
        }

        function nA(t, e = 0, i = 1, n, r) {
            t.min = nT(t.min, e, i, n, r), t.max = nT(t.max, e, i, n, r)
        }

        function nV(t, {x: e, y: i}) {
            nA(t.x, e.translate, e.scale, e.originPoint), nA(t.y, i.translate, i.scale, i.originPoint)
        }

        function nS(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }

        function nE(t, e) {
            t.min = t.min + e, t.max = t.max + e
        }

        function nC(t, e, [i, n, r]) {
            let s = void 0 !== e[r] ? e[r] : .5, o = eJ(t.min, t.max, s);
            nA(t, e[i], e[n], o, e.scale)
        }

        let nM = ["x", "scaleX", "originX"], nk = ["y", "scaleY", "originY"];

        function nD(t, e) {
            nC(t.x, e, nM), nC(t.y, e, nk)
        }

        function nR(t, e) {
            return ny(function (t, e) {
                if (!e) return t;
                let i = e({x: t.left, y: t.top}), n = e({x: t.right, y: t.bottom});
                return {top: i.y, left: i.x, bottom: n.y, right: n.x}
            }(t.getBoundingClientRect(), e))
        }

        let nL = new WeakMap;

        class nj {
            constructor(t) {
                this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                    x: 0,
                    y: 0
                }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ng(), this.visualElement = t
            }

            start(t, {snapToCursor: e = !1} = {}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent) return;
                let n = t => {
                    this.stopAnimation(), e && this.snapToCursor(t9(t, "page").point)
                }, r = (t, e) => {
                    let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                    if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = en(i), !this.openGlobalLock)) return;
                    this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nv(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (tw.test(e)) {
                            let {projection: i} = this.visualElement;
                            if (i && i.layout) {
                                let n = i.layout.layoutBox[t];
                                if (n) {
                                    let t = ni(n);
                                    e = t * (parseFloat(e) / 100)
                                }
                            }
                        }
                        this.originPoint[t] = e
                    }), r && b.update(() => r(t, e), !1, !0);
                    let {animationState: s} = this.visualElement;
                    s && s.setActive("whileDrag", !0)
                }, s = (t, e) => {
                    let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                    if (!i && !this.openGlobalLock) return;
                    let {offset: o} = e;
                    if (n && null === this.currentDirection) {
                        this.currentDirection = function (t, e = 10) {
                            let i = null;
                            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                        }(o), null !== this.currentDirection && r && r(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                }, o = (t, e) => this.stop(t, e);
                this.panSession = new i6(t, {
                    onSessionStart: n,
                    onStart: r,
                    onMove: s,
                    onSessionEnd: o
                }, {transformPagePoint: this.visualElement.getTransformPagePoint()})
            }

            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(), !i) return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && b.update(() => r(t, e))
            }

            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
            }

            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !nF(t, n, this.currentDirection)) return;
                let r = this.getAxisMotionValue(t), s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function (t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? eJ(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? eJ(i, t, n.max) : Math.min(t, i)), t
                }(s, this.constraints[t], this.elastic[t])), r.set(s)
            }

            resolveConstraints() {
                let {
                    dragConstraints: t,
                    dragElastic: e
                } = this.getProps(), {layout: i} = this.visualElement.projection || {}, n = this.constraints;
                t && O(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function (t, {
                    top: e,
                    left: i,
                    bottom: n,
                    right: r
                }) {
                    return {x: nu(t.x, i, r), y: nu(t.y, e, n)}
                }(i.layoutBox, t) : this.constraints = !1, this.elastic = function (t = .35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35), {
                        x: nc(t, "left", "right"),
                        y: nc(t, "top", "bottom")
                    }
                }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && nv(t => {
                    this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                    }(i.layoutBox[t], this.constraints[t]))
                })
            }

            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !O(e)) return !1;
                let n = e.current;
                el(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout) return !1;
                let s = function (t, e, i) {
                        let n = nR(t, i), {scroll: r} = e;
                        return r && (nE(n.x, r.offset.x), nE(n.y, r.offset.y)), n
                    }(n, r.root, this.visualElement.getTransformPagePoint()),
                    o = {x: nh((t = r.layout.layoutBox).x, s.x), y: nh(t.y, s.y)};
                if (i) {
                    let t = i(function ({x: t, y: e}) {
                        return {top: e.min, right: t.max, bottom: e.max, left: t.min}
                    }(o));
                    this.hasMutatedConstraints = !!t, t && (o = ny(t))
                }
                return o
            }

            startAnimation(t) {
                let {
                    drag: e,
                    dragMomentum: i,
                    dragElastic: n,
                    dragTransition: r,
                    dragSnapToOrigin: s,
                    onDragTransitionEnd: o
                } = this.getProps(), a = this.constraints || {}, l = nv(o => {
                    if (!nF(o, e, this.currentDirection)) return;
                    let l = a && a[o] || {};
                    s && (l = {min: 0, max: 0});
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10, ...r, ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                });
                return Promise.all(l).then(o)
            }

            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return i.start(iH(t, i, 0, e))
            }

            stopAnimation() {
                nv(t => this.getAxisMotionValue(t).stop())
            }

            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase(), i = this.visualElement.getProps(), n = i[e];
                return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }

            snapToCursor(t) {
                nv(e => {
                    let {drag: i} = this.getProps();
                    if (!nF(e, i, this.currentDirection)) return;
                    let {projection: n} = this.visualElement, r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - eJ(i, s, .5))
                    }
                })
            }

            scalePositionWithinConstraints() {
                if (!this.visualElement.current) return;
                let {drag: t, dragConstraints: e} = this.getProps(), {projection: i} = this.visualElement;
                if (!O(e) || !i || !this.constraints) return;
                this.stopAnimation();
                let n = {x: 0, y: 0};
                nv(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let i = e.get();
                        n[t] = function (t, e) {
                            let i = .5, n = ni(t), r = ni(e);
                            return r > n ? i = ih(e.min, e.max - n, t.min) : n > r && (i = ih(t.min, t.max - r, e.min)), tc(0, 1, i)
                        }({min: i, max: i}, this.constraints[t])
                    }
                });
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nv(e => {
                    if (!nF(e, t, null)) return;
                    let i = this.getAxisMotionValue(e), {min: r, max: s} = this.constraints[e];
                    i.set(eJ(r, s, n[e]))
                })
            }

            addListeners() {
                if (!this.visualElement.current) return;
                nL.set(this.visualElement, this);
                let t = this.visualElement.current, e = t6(t, "pointerdown", t => {
                    let {drag: e, dragListener: i = !0} = this.getProps();
                    e && i && this.start(t)
                }), i = () => {
                    let {dragConstraints: t} = this.getProps();
                    O(t) && (this.constraints = this.resolveRefConstraints())
                }, {projection: n} = this.visualElement, r = n.addEventListener("measure", i);
                n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), i();
                let s = t2(window, "resize", () => this.scalePositionWithinConstraints()),
                    o = n.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                        this.isDragging && e && (nv(e => {
                            let i = this.getAxisMotionValue(e);
                            i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                        }), this.visualElement.render())
                    });
                return () => {
                    s(), e(), r(), o && o()
                }
            }

            getProps() {
                let t = this.visualElement.getProps(), {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: n = !1,
                    dragConstraints: r = !1,
                    dragElastic: s = .35,
                    dragMomentum: o = !0
                } = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }

        function nF(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }

        let nB = t => (e, i) => {
            t && b.update(() => t(e, i))
        };

        function nO(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }

        let nI = {
            correct: (t, e) => {
                if (!e.target) return t;
                if ("string" == typeof t) {
                    if (!tT.test(t)) return t;
                    t = parseFloat(t)
                }
                let i = nO(t, e.target.x), n = nO(t, e.target.y);
                return `${i}% ${n}%`
            }
        };

        class nN extends a.Component {
            componentDidMount() {
                let {
                    visualElement: t,
                    layoutGroup: e,
                    switchLayoutGroup: i,
                    layoutId: n
                } = this.props, {projection: r} = t;
                Object.assign(tt, n$), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }), r.setOptions({...r.options, onExitComplete: () => this.safeToRemove()})), Y.hasEverUpdated = !0
            }

            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props, s = i.projection;
                return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || b.postRender(() => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }))), null
            }

            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
            }

            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props, {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
            }

            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }

            render() {
                return null
            }
        }

        function nU(t) {
            let [e, i] = function () {
                let t = (0, a.useContext)(L);
                if (null === t) return [!0, null];
                let {isPresent: e, onExitComplete: i, register: n} = t, r = (0, a.useId)();
                (0, a.useEffect)(() => n(r), []);
                let s = () => i && i(r);
                return !e && i ? [!1, s] : [!0]
            }(), n = (0, a.useContext)(q);
            return a.createElement(nN, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0, a.useContext)(Z),
                isPresent: e,
                safeToRemove: i
            })
        }

        let n$ = {
                borderRadius: {
                    ...nI,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: nI,
                borderTopRightRadius: nI,
                borderBottomLeftRadius: nI,
                borderBottomRightRadius: nI,
                boxShadow: {
                    correct: (t, {treeScale: e, projectionDelta: i}) => {
                        let n = ir.parse(t);
                        if (n.length > 5) return t;
                        let r = ir.createTransformer(t), s = "number" != typeof n[0] ? 1 : 0, o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        n[0 + s] /= o, n[1 + s] /= a;
                        let l = eJ(o, a, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            }, nW = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], nz = nW.length,
            nH = t => "string" == typeof t ? parseFloat(t) : t, n_ = t => "number" == typeof t || tT.test(t);

        function nX(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }

        let nY = nq(0, .5, eB), nG = nq(.5, .95, el);

        function nq(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i(ih(t, e, n))
        }

        function nZ(t, e) {
            t.min = e.min, t.max = e.max
        }

        function nK(t, e) {
            nZ(t.x, e.x), nZ(t.y, e.y)
        }

        function nJ(t, e, i, n, r) {
            return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
        }

        function nQ(t, e, [i, n, r], s, o) {
            !function (t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                if (tw.test(e)) {
                    e = parseFloat(e);
                    let t = eJ(o.min, o.max, e / 100);
                    e = t - o.min
                }
                if ("number" != typeof e) return;
                let a = eJ(s.min, s.max, n);
                t === s && (a -= e), t.min = nJ(t.min, e, i, a, r), t.max = nJ(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }

        let n0 = ["x", "scaleX", "originX"], n1 = ["y", "scaleY", "originY"];

        function n5(t, e, i, n) {
            nQ(t.x, e, n0, i ? i.x : void 0, n ? n.x : void 0), nQ(t.y, e, n1, i ? i.y : void 0, n ? n.y : void 0)
        }

        function n2(t) {
            return 0 === t.translate && 1 === t.scale
        }

        function n3(t) {
            return n2(t.x) && n2(t.y)
        }

        function n9(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }

        function n4(t) {
            return ni(t.x) / ni(t.y)
        }

        class n6 {
            constructor() {
                this.members = []
            }

            add(t) {
                T(this.members, t), t.scheduleRender()
            }

            remove(t) {
                if (A(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }

            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i) return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e), !0)
            }

            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                    i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }

            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                })
            }

            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                })
            }

            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }

        function n8(t, e, i) {
            let n = "", r = t.x.translate / e.x, s = t.y.translate / e.y;
            if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), i) {
                let {rotate: t, rotateX: e, rotateY: r} = i;
                t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), r && (n += `rotateY(${r}deg) `)
            }
            let o = t.x.scale * e.x, a = t.y.scale * e.y;
            return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none"
        }

        let n7 = (t, e) => t.depth - e.depth;

        class rt {
            constructor() {
                this.children = [], this.isDirty = !1
            }

            add(t) {
                T(this.children, t), this.isDirty = !0
            }

            remove(t) {
                A(this.children, t), this.isDirty = !0
            }

            forEach(t) {
                this.isDirty && this.children.sort(n7), this.isDirty = !1, this.children.forEach(t)
            }
        }

        let re = ["", "X", "Y", "Z"], ri = 0,
            rn = {type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0};

        function rr({
                        attachResizeListener: t,
                        defaultParent: e,
                        measureScroll: i,
                        checkIsScrollRoot: n,
                        resetTransform: r
                    }) {
            return class {
                constructor(t, i = {}, n = null == e ? void 0 : e()) {
                    this.id = ri++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                        x: 1,
                        y: 1
                    }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                    }, this.updateProjection = () => {
                        rn.totalNodes = rn.resolvedTargetDeltas = rn.recalculatedProjection = 0, this.nodes.forEach(ra), this.nodes.forEach(rp), this.nodes.forEach(rm), this.nodes.forEach(rl), window.MotionDebug && window.MotionDebug.record(rn)
                    }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = i, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                    for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new rt)
                }

                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new V), this.eventHandlers.get(t).add(e)
                }

                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }

                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }

                registerPotentialNode(t, e) {
                    this.potentialNodes.set(t, e)
                }

                mount(e, i = !1) {
                    if (this.instance) return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (r || n) && (this.isLayoutDirty = !0), t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0, i && i(), i = function (t, e) {
                                let i = performance.now(), n = ({timestamp: r}) => {
                                    let s = r - i;
                                    s >= e && (w(n), t(s - e))
                                };
                                return b.read(n, !0), () => w(n)
                            }(n, 250), Y.hasAnimatedSinceResize && (Y.hasAnimatedSinceResize = !1, this.nodes.forEach(rd))
                        })
                    }
                    n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                                                                                                                                                        delta: t,
                                                                                                                                                        hasLayoutChanged: e,
                                                                                                                                                        hasRelativeTargetChanged: i,
                                                                                                                                                        layout: n
                                                                                                                                                    }) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0, this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || rP, {
                            onLayoutAnimationStart: o,
                            onLayoutAnimationComplete: a
                        } = s.getProps(), l = !this.targetLayout || !n9(this.targetLayout, n) || i, u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                            let e = {...iz(r, "layout"), onPlay: o, onComplete: a};
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                        } else e || 0 !== this.animationProgress || rd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    })
                }

                unmount() {
                    this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, w(this.updateProjection)
                }

                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }

                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }

                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }

                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }

                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(rf), this.animationId++)
                }

                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }

                willUpdate(t = !0) {
                    if (this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i) return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                }

                didUpdate() {
                    let t = this.isUpdateBlocked();
                    if (t) {
                        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rh);
                        return
                    }
                    this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(rb), this.potentialNodes.clear()), this.nodes.forEach(rc), this.nodes.forEach(rs), this.nodes.forEach(ro), this.clearAllSnapshots(), v.update.process(p), v.preRender.process(p), v.render.process(p))
                }

                clearAllSnapshots() {
                    this.nodes.forEach(ru), this.sharedNodes.forEach(rg)
                }

                scheduleUpdateProjection() {
                    b.preRender(this.updateProjection, !1, !0)
                }

                scheduleCheckAfterUnmount() {
                    b.postRender(() => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    })
                }

                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }

                updateLayout() {
                    if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                    if (this.resumeFrom && !this.resumeFrom.instance) for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.updateScroll()
                    }
                    let t = this.layout;
                    this.layout = this.measure(!1), this.layoutCorrected = ng(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }

                updateScroll(t = "measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: n(this.instance),
                        offset: i(this.instance)
                    })
                }

                resetTransform() {
                    if (!r) return;
                    let t = this.isLayoutDirty || this.shouldResetTransform,
                        e = this.projectionDelta && !n3(this.projectionDelta), i = this.getTransformTemplate(),
                        n = i ? i(this.latestValues, "") : void 0, s = n !== this.prevTransformTemplateValue;
                    t && (e || nb(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                }

                measure(t = !0) {
                    var e;
                    let i = this.measurePageBox(), n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)), rw((e = n).x), rw(e.y), {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }

                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t) return ng();
                    let e = t.measureViewportBox(), {scroll: i} = this.root;
                    return i && (nE(e.x, i.offset.x), nE(e.y, i.offset.y)), e
                }

                removeElementScroll(t) {
                    let e = ng();
                    nK(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        let n = this.path[i], {scroll: r, options: s} = n;
                        if (n !== this.root && r && s.layoutScroll) {
                            if (r.isRoot) {
                                nK(e, t);
                                let {scroll: i} = this.root;
                                i && (nE(e.x, -i.offset.x), nE(e.y, -i.offset.y))
                            }
                            nE(e.x, r.offset.x), nE(e.y, r.offset.y)
                        }
                    }
                    return e
                }

                applyTransform(t, e = !1) {
                    let i = ng();
                    nK(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && nD(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }), nb(n.latestValues) && nD(i, n.latestValues)
                    }
                    return nb(this.latestValues) && nD(i, this.latestValues), i
                }

                removeTransform(t) {
                    let e = ng();
                    nK(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !nb(i.latestValues)) continue;
                        nP(i.latestValues) && i.updateSnapshot();
                        let n = ng(), r = i.measurePageBox();
                        nK(n, r), n5(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return nb(this.latestValues) && n5(e, this.latestValues), e
                }

                setTargetDelta(t) {
                    this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                }

                setOptions(t) {
                    this.options = {...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade}
                }

                clearMeasurements() {
                    this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                }

                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== p.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }

                resolveTargetDelta(t = !1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s,
                        a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                    if (a) return;
                    let {layout: l, layoutId: u} = this.options;
                    if (this.layout && (l || u)) {
                        if (this.resolvedRelativeTargetAt = p.timestamp, !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ng(), this.relativeTargetOrigin = ng(), nl(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nK(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = ng(), this.targetWithTransforms = ng()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, no(i.x, n.x, r.x), no(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nK(this.target, this.layout.layoutBox), nV(this.target, this.targetDelta)) : nK(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ng(), this.relativeTargetOrigin = ng(), nl(this.relativeTargetOrigin, this.target, t.target), nK(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            rn.resolvedTargetDeltas++
                        }
                    }
                }

                getClosestProjectingParent() {
                    return !this.parent || nP(this.parent.latestValues) || nw(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }

                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }

                calcProjection() {
                    var t;
                    let e = this.getLead(), i = !!this.resumingFrom || this !== e, n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === p.timestamp && (n = !1), n) return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                    nK(this.layoutCorrected, this.layout.layoutBox), function (t, e, i, n = !1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let o = r.instance;
                                (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && nD(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }), s && (e.x *= s.x.scale, e.y *= s.y.scale, nV(t, s)), n && nb(r.latestValues) && nD(t, r.latestValues))
                            }
                            e.x = nS(e.x), e.y = nS(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i);
                    let {target: o} = e;
                    if (!o) return;
                    this.projectionDelta || (this.projectionDelta = nm(), this.projectionDeltaWithTransform = nm());
                    let a = this.treeScale.x, l = this.treeScale.y, u = this.projectionTransform;
                    ns(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.projectionTransform = n8(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== l) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o)), rn.recalculatedProjection++
                }

                hide() {
                    this.isVisible = !1
                }

                show() {
                    this.isVisible = !0
                }

                scheduleRender(t = !0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }

                setAnimationOrigin(t, e = !1) {
                    let i;
                    let n = this.snapshot, r = n ? n.latestValues : {}, s = {...this.latestValues}, o = nm();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                    let a = ng(), l = n ? n.source : void 0, u = this.layout ? this.layout.source : void 0, h = l !== u,
                        c = this.getStack(), d = !c || c.members.length <= 1,
                        p = !!(h && !d && !0 === this.options.crossfade && !this.path.some(rx));
                    this.animationProgress = 0, this.mixTargetDelta = e => {
                        var n, l;
                        let u = e / 1e3;
                        rv(o.x, t.x, u), rv(o.y, t.y, u), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (nl(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), n = this.relativeTarget, l = this.relativeTargetOrigin, ry(n.x, l.x, a.x, u), ry(n.y, l.y, a.y, u), i && n9(this.relativeTarget, i) && (this.isProjectionDirty = !1), i || (i = ng()), nK(i, this.relativeTarget)), h && (this.animationValues = s, function (t, e, i, n, r, s) {
                            r ? (t.opacity = eJ(0, void 0 !== i.opacity ? i.opacity : 1, nY(n)), t.opacityExit = eJ(void 0 !== e.opacity ? e.opacity : 1, 0, nG(n))) : s && (t.opacity = eJ(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < nz; r++) {
                                let s = `border${nW[r]}Radius`, o = nX(e, s), a = nX(i, s);
                                if (void 0 === o && void 0 === a) continue;
                                o || (o = 0), a || (a = 0);
                                let l = 0 === o || 0 === a || n_(o) === n_(a);
                                l ? (t[s] = Math.max(eJ(nH(o), nH(a), n), 0), (tw.test(a) || tw.test(o)) && (t[s] += "%")) : t[s] = a
                            }
                            (e.rotate || i.rotate) && (t.rotate = eJ(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, u, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = u
                    }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }

                startAnimation(t) {
                    this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (w(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = b.update(() => {
                        Y.hasAnimatedSinceResize = !0, this.currentAnimation = function (t, e, i) {
                            let n = tr(t) ? t : C(t);
                            return n.start(iH("", n, 1e3, i)), n.animation
                        }(0, 0, {
                            ...t, onUpdate: e => {
                                this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                            }, onComplete: () => {
                                t.onComplete && t.onComplete(), this.completeAnimation()
                            }
                        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                    })
                }

                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                }

                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                }

                applyTransformsToTarget() {
                    let t = this.getLead(), {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && rT(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || ng();
                            let e = ni(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                            let n = ni(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min, i.y.max = i.y.min + n
                        }
                        nK(e, i), nD(e, r), ns(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }

                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new n6);
                    let i = this.sharedNodes.get(t);
                    i.add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }

                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }

                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }

                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }

                getStack() {
                    let {layoutId: t} = this.options;
                    if (t) return this.root.sharedNodes.get(t)
                }

                promote({needsReset: t, transition: e, preserveFollowOpacity: i} = {}) {
                    let n = this.getStack();
                    n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({transition: e})
                }

                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }

                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t) return;
                    let e = !1, {latestValues: i} = t;
                    if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                    let n = {};
                    for (let e = 0; e < re.length; e++) {
                        let r = "rotate" + re[e];
                        i[r] && (n[r] = i[r], t.setStaticValue(r, 0))
                    }
                    for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                    t.scheduleRender()
                }

                getProjectionStyles(t = {}) {
                    var e, i;
                    let n = {};
                    if (!this.instance || this.isSVG) return n;
                    if (!this.isVisible) return {visibility: "hidden"};
                    n.visibility = "";
                    let r = this.getTransformTemplate();
                    if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tQ(t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tQ(t.pointerEvents) || ""), this.hasProjected && !nb(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(), n.transform = n8(this.projectionDeltaWithTransform, this.treeScale, o), r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, tt) {
                        if (void 0 === o[t]) continue;
                        let {correct: e, applyTo: i} = tt[t], r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++) n[i[e]] = r
                        } else n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? tQ(t.pointerEvents) || "" : "none"), n
                }

                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }

                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }), this.root.nodes.forEach(rh), this.root.sharedNodes.clear()
                }
            }
        }

        function rs(t) {
            t.updateLayout()
        }

        function ro(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout, {animationType: r} = t.options,
                    s = i.source !== t.layout.source;
                "size" === r ? nv(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t], r = ni(n);
                    n.min = e[t].min, n.max = n.min + r
                }) : rT(r, i.layoutBox, e) && nv(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n], o = ni(e[n]);
                    r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                });
                let o = nm();
                ns(o, e, i.layoutBox);
                let a = nm();
                s ? ns(a, t.applyTransform(n, !0), i.measuredBox) : ns(a, e, i.layoutBox);
                let l = !n3(o), u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = ng();
                            nl(o, i.layoutBox, r.layoutBox);
                            let a = ng();
                            nl(a, e, s.layoutBox), n9(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }

        function ra(t) {
            rn.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }

        function rl(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }

        function ru(t) {
            t.clearSnapshot()
        }

        function rh(t) {
            t.clearMeasurements()
        }

        function rc(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
        }

        function rd(t) {
            t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
        }

        function rp(t) {
            t.resolveTargetDelta()
        }

        function rm(t) {
            t.calcProjection()
        }

        function rf(t) {
            t.resetRotation()
        }

        function rg(t) {
            t.removeLeadSnapshot()
        }

        function rv(t, e, i) {
            t.translate = eJ(e.translate, 0, i), t.scale = eJ(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
        }

        function ry(t, e, i, n) {
            t.min = eJ(e.min, i.min, n), t.max = eJ(e.max, i.max, n)
        }

        function rx(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }

        let rP = {duration: .45, ease: [.4, 0, .1, 1]};

        function rb(t, e) {
            let i = t.root;
            for (let e = t.path.length - 1; e >= 0; e--) if (t.path[e].instance) {
                i = t.path[e];
                break
            }
            let n = i && i !== t.root ? i.instance : document, r = n.querySelector(`[data-projection-id="${e}"]`);
            r && t.mount(r, !0)
        }

        function rw(t) {
            t.min = Math.round(t.min), t.max = Math.round(t.max)
        }

        function rT(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !nn(n4(e), n4(i), .2)
        }

        let rA = rr({
            attachResizeListener: (t, e) => t2(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        }), rV = {current: void 0}, rS = rr({
            measureScroll: t => ({x: t.scrollLeft, y: t.scrollTop}), defaultParent: () => {
                if (!rV.current) {
                    let t = new rA(0, {});
                    t.mount(window), t.setOptions({layoutScroll: !0}), rV.current = t
                }
                return rV.current
            }, resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }, checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        }), rE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

        function rC(t, e, i = 1) {
            el(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let [n, r] = function (t) {
                let e = rE.exec(t);
                if (!e) return [,];
                let [, i, n] = e;
                return [i, n]
            }(t);
            if (!n) return;
            let s = window.getComputedStyle(e).getPropertyValue(n);
            return s ? s.trim() : tu(r) ? rC(r, e, i + 1) : r
        }

        let rM = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), rk = t => rM.has(t),
            rD = t => Object.keys(t).some(rk), rR = t => t === td || t === tT,
            rL = (t, e) => parseFloat(t.split(", ")[e]), rj = (t, e) => (i, {transform: n}) => {
                if ("none" === n || !n) return 0;
                let r = n.match(/^matrix3d\((.+)\)$/);
                if (r) return rL(r[1], e);
                {
                    let e = n.match(/^matrix\((.+)\)$/);
                    return e ? rL(e[1], t) : 0
                }
            }, rF = new Set(["x", "y", "z"]), rB = te.filter(t => !rF.has(t)), rO = {
                width: ({x: t}, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({y: t}, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {top: e}) => parseFloat(e),
                left: (t, {left: e}) => parseFloat(e),
                bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
                right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
                x: rj(4, 13),
                y: rj(5, 14)
            }, rI = (t, e, i) => {
                let n = e.measureViewportBox(), r = e.current, s = getComputedStyle(r), {display: o} = s, a = {};
                "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                    a[t] = rO[t](n, s)
                }), e.render();
                let l = e.measureViewportBox();
                return i.forEach(i => {
                    let n = e.getValue(i);
                    n && n.jump(a[i]), t[i] = rO[i](l, s)
                }), t
            }, rN = (t, e, i = {}, n = {}) => {
                e = {...e}, n = {...n};
                let r = Object.keys(e).filter(rk), s = [], o = !1, a = [];
                if (r.forEach(r => {
                    let l;
                    let u = t.getValue(r);
                    if (!t.hasValue(r)) return;
                    let h = i[r], c = iZ(h), d = e[r];
                    if (tZ(d)) {
                        let t = d.length, e = null === d[0] ? 1 : 0;
                        c = iZ(h = d[e]);
                        for (let i = e; i < t && null !== d[i]; i++) l ? el(iZ(d[i]) === l, "All keyframes must be of the same type") : el((l = iZ(d[i])) === c || rR(c) && rR(l), "Keyframes must be of the same dimension as the current value")
                    } else l = iZ(d);
                    if (c !== l) {
                        if (rR(c) && rR(l)) {
                            let t = u.get();
                            "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === tT && (e[r] = d.map(parseFloat))
                        } else (null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function (t) {
                            let e = [];
                            return rB.forEach(i => {
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                            }), e.length && t.render(), e
                        }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                    }
                }), !a.length) return {target: e, transitionEnd: n};
                {
                    let i = a.indexOf("height") >= 0 ? window.pageYOffset : null, r = rI(e, t, a);
                    return s.length && s.forEach(([e, i]) => {
                        t.getValue(e).set(i)
                    }), t.render(), j && null !== i && window.scrollTo({top: i}), {target: r, transitionEnd: n}
                }
            }, rU = (t, e, i, n) => {
                var r, s;
                let o = function (t, {...e}, i) {
                    let n = t.current;
                    if (!(n instanceof Element)) return {target: e, transitionEnd: i};
                    for (let r in i && (i = {...i}), t.values.forEach(t => {
                        let e = t.get();
                        if (!tu(e)) return;
                        let i = rC(e, n);
                        i && t.set(i)
                    }), e) {
                        let t = e[r];
                        if (!tu(t)) continue;
                        let s = rC(t, n);
                        s && (e[r] = s, i || (i = {}), void 0 === i[r] && (i[r] = t))
                    }
                    return {target: e, transitionEnd: i}
                }(t, e, n);
                return e = o.target, n = o.transitionEnd, r = e, s = n, rD(r) ? rN(t, r, i, s) : {
                    target: r,
                    transitionEnd: s
                }
            }, r$ = {current: null}, rW = {current: !1}, rz = new WeakMap, rH = Object.keys(X), r_ = rH.length,
            rX = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
            rY = $.length;

        class rG {
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, visualState: r}, s = {}) {
                this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                    this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }, this.scheduleRender = () => b.render(this.render, !1, !0);
                let {latestValues: o, renderState: a} = r;
                this.latestValues = o, this.baseTarget = {...o}, this.initialValues = e.initial ? {...o} : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = W(e), this.isVariantNode = z(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== o[t] && tr(e) && (e.set(o[t], !1), i_(l) && l.add(t))
                }
            }

            scrapeMotionValuesFromProps(t, e) {
                return {}
            }

            mount(t) {
                this.current = t, rz.set(t, this), this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), rW.current || function () {
                    if (rW.current = !0, j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)"), e = () => r$.current = t.matches;
                            t.addListener(e), e()
                        } else r$.current = !1
                    }
                }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r$.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
            }

            unmount() {
                for (let t in rz.delete(this.current), this.projection && this.projection.unmount(), w(this.notifyUpdate), w(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                for (let t in this.features) this.features[t].unmount();
                this.current = null
            }

            bindToMotionValue(t, e) {
                let i = ti.has(t), n = e.on("change", e => {
                    this.latestValues[t] = e, this.props.onUpdate && b.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                }), r = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, () => {
                    n(), r()
                })
            }

            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }

            loadFeatures({children: t, ...e}, i, n, r, s) {
                let o, a;
                for (let t = 0; t < r_; t++) {
                    let i = rH[t], {isEnabled: n, Feature: r, ProjectionNode: s, MeasureLayout: l} = X[i];
                    s && (o = s), n(e) && (!this.features[i] && r && (this.features[i] = new r(this)), l && (a = l))
                }
                if (!this.projection && o) {
                    this.projection = new o(r, this.latestValues, this.parent && this.parent.projection);
                    let {layoutId: t, layout: i, drag: n, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: i,
                        alwaysMeasureLayout: !!n || a && O(a),
                        visualElement: this,
                        scheduleRender: () => this.scheduleRender(),
                        animationType: "string" == typeof i ? i : "both",
                        initialPromotionConfig: s,
                        layoutScroll: l,
                        layoutRoot: u
                    })
                }
                return a
            }

            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update(this.props, this.prevProps) : (e.mount(), e.isMounted = !0)
                }
            }

            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }

            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ng()
            }

            getStaticValue(t) {
                return this.latestValues[t]
            }

            setStaticValue(t, e) {
                this.latestValues[t] = e
            }

            makeTargetAnimatable(t, e = !0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }

            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                for (let e = 0; e < rX.length; e++) {
                    let i = rX[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function (t, e, i) {
                    let {willChange: n} = e;
                    for (let r in e) {
                        let s = e[r], o = i[r];
                        if (tr(s)) t.addValue(r, s), i_(n) && n.add(r); else if (tr(o)) t.addValue(r, C(s, {owner: t})), i_(n) && n.remove(r); else if (o !== s) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                e.hasAnimated || e.set(s)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, C(void 0 !== e ? e : s, {owner: t}))
                            }
                        }
                    }
                    for (let n in i) void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
            }

            getProps() {
                return this.props
            }

            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }

            getDefaultTransition() {
                return this.props.transition
            }

            getTransformPagePoint() {
                return this.props.transformPagePoint
            }

            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }

            getVariantContext(t = !1) {
                if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                }
                let e = {};
                for (let t = 0; t < rY; t++) {
                    let i = $[t], n = this.props[i];
                    (I(n) || !1 === n) && (e[i] = n)
                }
                return e
            }

            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
            }

            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
            }

            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
            }

            hasValue(t) {
                return this.values.has(t)
            }

            getValue(t, e) {
                if (this.props.values && this.props.values[t]) return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = C(e, {owner: this}), this.addValue(t, i)), i
            }

            readValue(t) {
                return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }

            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }

            getBaseTarget(t) {
                var e;
                let {initial: i} = this.props,
                    n = "string" == typeof i || "object" == typeof i ? null === (e = tq(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                if (i && void 0 !== n) return n;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || tr(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
            }

            on(t, e) {
                return this.events[t] || (this.events[t] = new V), this.events[t].add(e)
            }

            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }

        class rq extends rG {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }

            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }

            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t], delete i[t]
            }

            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...i}, {transformValues: n}, r) {
                let s = function (t, e, i) {
                    let n = {};
                    for (let r in t) {
                        let t = function (t, e) {
                            if (!e) return;
                            let i = e[t] || e.default || e;
                            return i.from
                        }(r, e);
                        if (void 0 !== t) n[r] = t; else {
                            let t = i.getValue(r);
                            t && (n[r] = t.get())
                        }
                    }
                    return n
                }(i, t || {}, this);
                if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                    !function (t, e, i) {
                        var n, r;
                        let s = Object.keys(e).filter(e => !t.hasValue(e)), o = s.length;
                        if (o) for (let a = 0; a < o; a++) {
                            let o = s[a], l = e[o], u = null;
                            Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (n = i[o]) && void 0 !== n ? n : t.readValue(o)) && void 0 !== r ? r : e[o]), null != u && ("string" == typeof u && (iX(u) || iY(u)) ? u = parseFloat(u) : !iJ(u) && ir.test(l) && (u = iU(o, l)), t.addValue(o, C(u, {owner: t})), void 0 === i[o] && (i[o] = u), null !== u && t.setBaseTarget(o, u))
                        }
                    }(this, i, s);
                    let t = rU(this, i, s, e);
                    e = t.transitionEnd, i = t.target
                }
                return {transition: t, transitionEnd: e, ...i}
            }
        }

        class rZ extends rq {
            readValueFromInstance(t, e) {
                if (ti.has(e)) {
                    let t = iN(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t), n = (tl(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }

            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return nR(t, e)
            }

            build(t, e, i, n) {
                tM(t, e, i, n.transformTemplate)
            }

            scrapeMotionValuesFromProps(t, e) {
                return tY(t, e)
            }

            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                let {children: t} = this.props;
                tr(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }))
            }

            renderInstance(t, e, i, n) {
                tH(t, e, i, n)
            }
        }

        class rK extends rq {
            constructor() {
                super(...arguments), this.isSVGTag = !1
            }

            getBaseTargetFromProps(t, e) {
                return t[e]
            }

            readValueFromInstance(t, e) {
                if (ti.has(e)) {
                    let t = iN(e);
                    return t && t.default || 0
                }
                return e = t_.has(e) ? e : tz(e), t.getAttribute(e)
            }

            measureInstanceViewportBox() {
                return ng()
            }

            scrapeMotionValuesFromProps(t, e) {
                return tG(t, e)
            }

            build(t, e, i, n) {
                tN(t, e, i, this.isSVGTag, n.transformTemplate)
            }

            renderInstance(t, e, i, n) {
                tX(t, e, i, n)
            }

            mount(t) {
                this.isSVGTag = t$(t.tagName), super.mount(t)
            }
        }

        let rJ = (t, e) => Q(t) ? new rK(e, {enableHardwareAcceleration: !1}) : new rZ(e, {enableHardwareAcceleration: !0}),
            rQ = {
                animation: {
                    Feature: class extends es {
                        constructor(t) {
                            super(t), t.animationState || (t.animationState = function (t) {
                                let e = e => Promise.all(e.map(({
                                                                    animation: e,
                                                                    options: i
                                                                }) => (function (t, e, i = {}) {
                                    let n;
                                    if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                        let r = e.map(e => i0(t, e, i));
                                        n = Promise.all(r)
                                    } else if ("string" == typeof e) n = i0(t, e, i); else {
                                        let r = "function" == typeof e ? eg(t, e, i.custom) : e;
                                        n = Promise.all(iQ(t, r, i))
                                    }
                                    return n.then(() => t.notify("AnimationComplete", e))
                                })(t, e, i))), i = {
                                    animate: i3(!0),
                                    whileInView: i3(),
                                    whileHover: i3(),
                                    whileTap: i3(),
                                    whileDrag: i3(),
                                    whileFocus: i3(),
                                    exit: i3()
                                }, n = !0, r = (e, i) => {
                                    let n = eg(t, i);
                                    if (n) {
                                        let {transition: t, transitionEnd: i, ...r} = n;
                                        e = {...e, ...r, ...i}
                                    }
                                    return e
                                };

                                function s(s, o) {
                                    let a = t.getProps(), l = t.getVariantContext(!0) || {}, u = [], h = new Set,
                                        c = {}, d = 1 / 0;
                                    for (let e = 0; e < i2; e++) {
                                        var p;
                                        let m = i5[e], f = i[m], g = void 0 !== a[m] ? a[m] : l[m], v = I(g),
                                            y = m === o ? f.isActive : null;
                                        !1 === y && (d = e);
                                        let x = g === l[m] && g !== a[m] && v;
                                        if (x && n && t.manuallyAnimateOnMount && (x = !1), f.protectedKeys = {...c}, !f.isActive && null === y || !g && !f.prevProp || N(g) || "boolean" == typeof g) continue;
                                        let P = (p = f.prevProp, "string" == typeof g ? g !== p : !!Array.isArray(g) && !ef(g, p)),
                                            b = P || m === o && f.isActive && !x && v || e > d && v,
                                            w = Array.isArray(g) ? g : [g], T = w.reduce(r, {});
                                        !1 === y && (T = {});
                                        let {prevResolvedValues: A = {}} = f, V = {...A, ...T}, S = t => {
                                            b = !0, h.delete(t), f.needsAnimating[t] = !0
                                        };
                                        for (let t in V) {
                                            let e = T[t], i = A[t];
                                            c.hasOwnProperty(t) || (e !== i ? tZ(e) && tZ(i) ? !ef(e, i) || P ? S(t) : f.protectedKeys[t] = !0 : void 0 !== e ? S(t) : h.add(t) : void 0 !== e && h.has(t) ? S(t) : f.protectedKeys[t] = !0)
                                        }
                                        f.prevProp = g, f.prevResolvedValues = T, f.isActive && (c = {...c, ...T}), n && t.blockInitialAnimation && (b = !1), b && !x && u.push(...w.map(t => ({
                                            animation: t,
                                            options: {type: m, ...s}
                                        })))
                                    }
                                    if (h.size) {
                                        let e = {};
                                        h.forEach(i => {
                                            let n = t.getBaseTarget(i);
                                            void 0 !== n && (e[i] = n)
                                        }), u.push({animation: e})
                                    }
                                    let m = !!u.length;
                                    return n && !1 === a.initial && !t.manuallyAnimateOnMount && (m = !1), n = !1, m ? e(u) : Promise.resolve()
                                }

                                return {
                                    animateChanges: s, setActive: function (e, n, r) {
                                        var o;
                                        if (i[e].isActive === n) return Promise.resolve();
                                        null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                            var i;
                                            return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                        }), i[e].isActive = n;
                                        let a = s(r, e);
                                        for (let t in i) i[t].protectedKeys = {};
                                        return a
                                    }, setAnimateFunction: function (i) {
                                        e = i(t)
                                    }, getState: () => i
                                }
                            }(t))
                        }

                        updateAnimationControlsSubscription() {
                            let {animate: t} = this.node.getProps();
                            this.unmount(), N(t) && (this.unmount = t.subscribe(this.node))
                        }

                        mount() {
                            this.updateAnimationControlsSubscription()
                        }

                        update() {
                            let {animate: t} = this.node.getProps(), {animate: e} = this.node.prevProps || {};
                            t !== e && this.updateAnimationControlsSubscription()
                        }

                        unmount() {
                        }
                    }
                }, exit: {
                    Feature: class extends es {
                        constructor() {
                            super(...arguments), this.id = i9++
                        }

                        update() {
                            if (!this.node.presenceContext) return;
                            let {
                                isPresent: t,
                                onExitComplete: e,
                                custom: i
                            } = this.node.presenceContext, {isPresent: n} = this.node.prevPresenceContext || {};
                            if (!this.node.animationState || t === n) return;
                            let r = this.node.animationState.setActive("exit", !t, {custom: null != i ? i : this.node.getProps().custom});
                            e && !t && r.then(() => e(this.id))
                        }

                        mount() {
                            let {register: t} = this.node.presenceContext || {};
                            t && (this.unmount = t(this.id))
                        }

                        unmount() {
                        }
                    }
                }, inView: {
                    Feature: class extends es {
                        constructor() {
                            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                        }

                        startObserver() {
                            this.unmount();
                            let {viewport: t = {}} = this.node.getProps(), {
                                root: e,
                                margin: i,
                                amount: n = "some",
                                once: r
                            } = t, s = {
                                root: e ? e.current : void 0,
                                rootMargin: i,
                                threshold: "number" == typeof n ? n : em[n]
                            }, o = t => {
                                let {isIntersecting: e} = t;
                                if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps(), s = e ? i : n;
                                s && s(t)
                            };
                            return function (t, e, i) {
                                let n = function ({root: t, ...e}) {
                                    let i = t || document;
                                    ec.has(i) || ec.set(i, {});
                                    let n = ec.get(i), r = JSON.stringify(e);
                                    return n[r] || (n[r] = new IntersectionObserver(ep, {root: t, ...e})), n[r]
                                }(e);
                                return eh.set(t, i), n.observe(t), () => {
                                    eh.delete(t), n.unobserve(t)
                                }
                            }(this.node.current, s, o)
                        }

                        mount() {
                            this.startObserver()
                        }

                        update() {
                            if ("undefined" == typeof IntersectionObserver) return;
                            let {props: t, prevProps: e} = this.node,
                                i = ["amount", "margin", "root"].some(function ({viewport: t = {}}, {viewport: e = {}} = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                            i && this.startObserver()
                        }

                        unmount() {
                        }
                    }
                }, tap: {
                    Feature: class extends es {
                        constructor() {
                            super(...arguments), this.removeStartListeners = el, this.removeEndListeners = el, this.removeAccessibleListeners = el, this.startPointerPress = (t, e) => {
                                if (this.removeEndListeners(), this.isPressing) return;
                                let i = this.node.getProps(), n = (t, e) => {
                                        if (!this.checkPressEnd()) return;
                                        let {onTap: i, onTapCancel: n} = this.node.getProps();
                                        b.update(() => {
                                            ea(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                        })
                                    }, r = t6(window, "pointerup", n, {passive: !(i.onTap || i.onPointerUp)}),
                                    s = t6(window, "pointercancel", (t, e) => this.cancelPress(t, e), {passive: !(i.onTapCancel || i.onPointerCancel)});
                                this.removeEndListeners = t7(r, s), this.startPress(t, e)
                            }, this.startAccessiblePress = () => {
                                let t = t => {
                                    if ("Enter" !== t.key || this.isPressing) return;
                                    let e = t => {
                                        "Enter" === t.key && this.checkPressEnd() && eu("up", (t, e) => {
                                            let {onTap: i} = this.node.getProps();
                                            i && b.update(() => i(t, e))
                                        })
                                    };
                                    this.removeEndListeners(), this.removeEndListeners = t2(this.node.current, "keyup", e), eu("down", (t, e) => {
                                        this.startPress(t, e)
                                    })
                                }, e = t2(this.node.current, "keydown", t), i = () => {
                                    this.isPressing && eu("cancel", (t, e) => this.cancelPress(t, e))
                                }, n = t2(this.node.current, "blur", i);
                                this.removeAccessibleListeners = t7(e, n)
                            }
                        }

                        startPress(t, e) {
                            this.isPressing = !0;
                            let {onTapStart: i, whileTap: n} = this.node.getProps();
                            n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && b.update(() => i(t, e))
                        }

                        checkPressEnd() {
                            this.removeEndListeners(), this.isPressing = !1;
                            let t = this.node.getProps();
                            return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !er()
                        }

                        cancelPress(t, e) {
                            if (!this.checkPressEnd()) return;
                            let {onTapCancel: i} = this.node.getProps();
                            i && b.update(() => i(t, e))
                        }

                        mount() {
                            let t = this.node.getProps(),
                                e = t6(this.node.current, "pointerdown", this.startPointerPress, {passive: !(t.onTapStart || t.onPointerStart)}),
                                i = t2(this.node.current, "focus", this.startAccessiblePress);
                            this.removeStartListeners = t7(e, i)
                        }

                        unmount() {
                            this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                        }
                    }
                }, focus: {
                    Feature: class extends es {
                        constructor() {
                            super(...arguments), this.isActive = !1
                        }

                        onFocus() {
                            let t = !1;
                            try {
                                t = this.node.current.matches(":focus-visible")
                            } catch (e) {
                                t = !0
                            }
                            t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                        }

                        onBlur() {
                            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                        }

                        mount() {
                            this.unmount = t7(t2(this.node.current, "focus", () => this.onFocus()), t2(this.node.current, "blur", () => this.onBlur()))
                        }

                        unmount() {
                        }
                    }
                }, hover: {
                    Feature: class extends es {
                        mount() {
                            this.unmount = t7(eo(this.node, !0), eo(this.node, !1))
                        }

                        unmount() {
                        }
                    }
                }, pan: {
                    Feature: class extends es {
                        constructor() {
                            super(...arguments), this.removePointerDownListener = el
                        }

                        onPointerDown(t) {
                            this.session = new i6(t, this.createPanHandlers(), {transformPagePoint: this.node.getTransformPagePoint()})
                        }

                        createPanHandlers() {
                            let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                            return {
                                onSessionStart: nB(t), onStart: nB(e), onMove: i, onEnd: (t, e) => {
                                    delete this.session, n && b.update(() => n(t, e))
                                }
                            }
                        }

                        mount() {
                            this.removePointerDownListener = t6(this.node.current, "pointerdown", t => this.onPointerDown(t))
                        }

                        update() {
                            this.session && this.session.updateHandlers(this.createPanHandlers())
                        }

                        unmount() {
                            this.removePointerDownListener(), this.session && this.session.end()
                        }
                    }
                }, drag: {
                    Feature: class extends es {
                        constructor(t) {
                            super(t), this.removeGroupControls = el, this.removeListeners = el, this.controls = new nj(t)
                        }

                        mount() {
                            let {dragControls: t} = this.node.getProps();
                            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || el
                        }

                        unmount() {
                            this.removeGroupControls(), this.removeListeners()
                        }
                    }, ProjectionNode: rS, MeasureLayout: nU
                }, layout: {ProjectionNode: rS, MeasureLayout: nU}
            }, r0 = function (t) {
                function e(e, i = {}) {
                    return function ({
                                         preloadedFeatures: t,
                                         createVisualElement: e,
                                         useRender: i,
                                         useVisualState: n,
                                         Component: r
                                     }) {
                        t && function (t) {
                            for (let e in t) X[e] = {...X[e], ...t[e]}
                        }(t);
                        let s = (0, a.forwardRef)(function (s, o) {
                            var l, u;
                            let h;
                            let c = {
                                ...(0, a.useContext)(M), ...s, layoutId: function ({layoutId: t}) {
                                    let e = (0, a.useContext)(q).id;
                                    return e && void 0 !== t ? e + "-" + t : t
                                }(s)
                            }, {isStatic: d} = c, p = function (t) {
                                let {initial: e, animate: i} = function (t, e) {
                                    if (W(t)) {
                                        let {initial: e, animate: i} = t;
                                        return {initial: !1 === e || I(e) ? e : void 0, animate: I(i) ? i : void 0}
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, a.useContext)(R));
                                return (0, a.useMemo)(() => ({initial: e, animate: i}), [H(e), H(i)])
                            }(s), m = d ? void 0 : k(() => {
                                if (Y.hasEverUpdated) return G++
                            }), f = n(s, d);
                            if (!d && j) {
                                p.visualElement = function (t, e, i, n) {
                                    let {visualElement: r} = (0, a.useContext)(R), s = (0, a.useContext)(B),
                                        o = (0, a.useContext)(L), l = (0, a.useContext)(M).reducedMotion,
                                        u = (0, a.useRef)();
                                    n = n || s.renderer, !u.current && n && (u.current = n(t, {
                                        visualState: e,
                                        parent: r,
                                        props: i,
                                        presenceContext: o,
                                        blockInitialAnimation: !!o && !1 === o.initial,
                                        reducedMotionConfig: l
                                    }));
                                    let h = u.current;
                                    (0, a.useInsertionEffect)(() => {
                                        h && h.update(i, o)
                                    }), F(() => {
                                        h && h.render()
                                    }), (0, a.useEffect)(() => {
                                        h && h.updateFeatures()
                                    });
                                    let c = window.HandoffAppearAnimations ? F : a.useEffect;
                                    return c(() => {
                                        h && h.animationState && h.animationState.animateChanges()
                                    }), h
                                }(r, f, c, e);
                                let i = (0, a.useContext)(Z), n = (0, a.useContext)(B).strict;
                                p.visualElement && (h = p.visualElement.loadFeatures(c, n, t, m, i))
                            }
                            return a.createElement(R.Provider, {value: p}, h && p.visualElement ? a.createElement(h, {visualElement: p.visualElement, ...c}) : null, i(r, s, m, (l = p.visualElement, u = o, (0, a.useCallback)(t => {
                                t && f.mount && f.mount(t), l && (t ? l.mount(t) : l.unmount()), u && ("function" == typeof u ? u(t) : O(u) && (u.current = t))
                            }, [l])), f, d, p.visualElement))
                        });
                        return s[K] = r, s
                    }(t(e, i))
                }

                if ("undefined" == typeof Proxy) return e;
                let i = new Map;
                return new Proxy(e, {get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))})
            }((t, e) => (function (t, {forwardMotionProps: e = !1}, i, n) {
                let r = Q(t) ? t1 : t5;
                return {
                    ...r, preloadedFeatures: i, useRender: function (t = !1) {
                        let e = (e, i, n, r, {latestValues: s}, o) => {
                            let l = Q(e) ? tW : tR, u = l(i, s, o, e), h = function (t, e, i) {
                                    let n = {};
                                    for (let r in t) ("values" !== r || "object" != typeof t.values) && (tF(r) || !0 === i && tj(r) || !e && !tj(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                    return n
                                }(i, "string" == typeof e, t), c = {...h, ...u, ref: r}, {children: d} = i,
                                p = (0, a.useMemo)(() => tr(d) ? d.get() : d, [d]);
                            return n && (c["data-projection-id"] = n), (0, a.createElement)(e, {...c, children: p})
                        };
                        return e
                    }(e), createVisualElement: n, Component: t
                }
            })(t, e, rQ, rJ)), r1 = "G-4FFCWEC2WB", r5 = t => {
                r1 && window.gtag("config", r1, {page_path: t})
            };

        function r2() {
            var t, e;
            let i = (t = ["\n            radial-gradient(\n              600px circle at ", "px ", "px,\n              rgba(29, 78, 216, 0.15),\n              transparent 80%\n            )\n          "], e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {raw: {value: Object.freeze(e)}})));
            return r2 = function () {
                return i
            }, i
        }

        function r3(t) {
            let {Component: e, pageProps: i} = t, n = (0, d.useRouter)();
            (0, a.useEffect)(() => {
                let t = t => {
                    r5(t)
                };
                return n.events.on("routeChangeComplete", t), () => {
                    n.events.off("routeChangeComplete", t)
                }
            }, [n.events]);
            let s = D(0), l = D(0);
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u(), {children: (0, r.jsx)("script", {dangerouslySetInnerHTML: {__html: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', '".concat(r1, "', {\n                page_path: window.location.pathname,\n              });\n            ")}})}), (0, r.jsx)(c(), {
                        strategy: "afterInteractive",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(r1)
                    })]
                }), (0, r.jsxs)("div", {
                    className: "".concat(o().variable, " group/spotlight relative"),
                    onMouseMove: function (t) {
                        let {currentTarget: e, clientX: i, clientY: n} = t;
                        if (window.innerWidth < 1024) return;
                        let {left: r, top: o} = e.getBoundingClientRect();
                        s.set(i - r), l.set(n - o)
                    },
                    children: [(0, r.jsx)(r0.div, {
                        className: "pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute",
                        style: {
                            background: function (t, ...e) {
                                let i = t.length;
                                return function (t, e) {
                                    let i = D(e()), n = () => i.set(e());
                                    return n(), F(() => {
                                        let e = () => b.update(n, !1, !0), i = t.map(t => t.on("change", e));
                                        return () => {
                                            i.forEach(t => t()), w(n)
                                        }
                                    }), i
                                }(e.filter(tr), function () {
                                    let n = "";
                                    for (let r = 0; r < i; r++) {
                                        n += t[r];
                                        let i = e[r];
                                        i && (n += tr(i) ? i.get() : i)
                                    }
                                    return n
                                })
                            }(r2(), s, l)
                        }
                    }), (0, r.jsxs)("div", {
                        className: "mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0",
                        children: [(0, r.jsx)("a", {
                            href: "#content",
                            className: "absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0",
                            children: "Skip to Content"
                        }), (0, r.jsx)(e, {...i})]
                    })]
                })]
            })
        }

        i(7952)
    }, 7952: function () {
    }, 6364: function (t) {
        t.exports = {
            style: {fontFamily: "'__inter_20b187', '__inter_Fallback_20b187'"},
            className: "__className_20b187",
            variable: "__variable_20b187"
        }
    }, 9008: function (t, e, i) {
        t.exports = i(2636)
    }, 1163: function (t, e, i) {
        t.exports = i(6885)
    }, 4298: function (t, e, i) {
        t.exports = i(5442)
    }
}, function (t) {
    var e = function (e) {
        return t(t.s = e)
    };
    t.O(0, [774, 179], function () {
        return e(6840), e(6885)
    }), _N_E = t.O()
}]);