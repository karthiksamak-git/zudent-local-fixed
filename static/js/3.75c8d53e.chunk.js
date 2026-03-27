(this["webpackJsonp@devias-io/material-kit-pro-react"] = this["webpackJsonp@devias-io/material-kit-pro-react"] || []).push([
    [3], {
        1766: function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(0),
                a = n(12),
                i = n(31),
                s = n(107),
                c = n(1365);

            function l(e) {
                return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || ""
            }

            function d(e) {
                return parseFloat(e)
            }
            var u = n(1259),
                p = n(47),
                h = n(1400),
                b = n(1262),
                f = n(596);

            function m(e) {
                return Object(f.a)("MuiSkeleton", e)
            }
            Object(b.a)("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
            var v = n(14);
            const g = ["animation", "className", "component", "height", "style", "variant", "width"];
            let O, j, x, k, y = e => e;
            const E = Object(s.c)(O || (O = y `
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),
                w = Object(s.c)(j || (j = y `
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),
                R = Object(p.a)("span", {
                    name: "MuiSkeleton",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.root, t[n.variant], !1 !== n.animation && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: n
                    } = e;
                    const o = l(t.shape.borderRadius) || "px",
                        a = d(t.shape.borderRadius);
                    return Object(r.a)({
                        display: "block",
                        backgroundColor: t.vars ? t.vars.palette.Skeleton.bg : Object(u.a)(t.palette.text.primary, "light" === t.palette.mode ? .11 : .13),
                        height: "1.2em"
                    }, "text" === n.variant && {
                        marginTop: 0,
                        marginBottom: 0,
                        height: "auto",
                        transformOrigin: "0 55%",
                        transform: "scale(1, 0.60)",
                        borderRadius: `${a}${o}/${Math.round(a/.6*10)/10}${o}`,
                        "&:empty:before": {
                            content: '"\\00a0"'
                        }
                    }, "circular" === n.variant && {
                        borderRadius: "50%"
                    }, "rounded" === n.variant && {
                        borderRadius: (t.vars || t).shape.borderRadius
                    }, n.hasChildren && {
                        "& > *": {
                            visibility: "hidden"
                        }
                    }, n.hasChildren && !n.width && {
                        maxWidth: "fit-content"
                    }, n.hasChildren && !n.height && {
                        height: "auto"
                    })
                }, e => {
                    let {
                        ownerState: t
                    } = e;
                    return "pulse" === t.animation && Object(s.b)(x || (x = y `
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), E)
                }, e => {
                    let {
                        ownerState: t,
                        theme: n
                    } = e;
                    return "wave" === t.animation && Object(s.b)(k || (k = y `
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), w, (n.vars || n).palette.action.hover)
                });
            var S = o.forwardRef((function(e, t) {
                const n = Object(h.a)({
                        props: e,
                        name: "MuiSkeleton"
                    }),
                    {
                        animation: o = "pulse",
                        className: s,
                        component: l = "span",
                        height: d,
                        style: u,
                        variant: p = "text",
                        width: b
                    } = n,
                    f = Object(a.a)(n, g),
                    O = Object(r.a)({}, n, {
                        animation: o,
                        component: l,
                        variant: p,
                        hasChildren: Boolean(f.children)
                    }),
                    j = (e => {
                        const {
                            classes: t,
                            variant: n,
                            animation: r,
                            hasChildren: o,
                            width: a,
                            height: i
                        } = e, s = {
                            root: ["root", n, r, o && "withChildren", o && !a && "fitContent", o && !i && "heightAuto"]
                        };
                        return Object(c.a)(s, m, t)
                    })(O);
                return Object(v.jsx)(R, Object(r.a)({
                    as: l,
                    ref: t,
                    className: Object(i.a)(j.root, s),
                    ownerState: O
                }, f, {
                    style: Object(r.a)({
                        width: b,
                        height: d
                    }, u)
                }))
            }));
            let T = !1;
            t.a = o.forwardRef((function(e, t) {
                return T || (console.warn(["MUI: The Skeleton component was moved from the lab to the core.", "", "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join("\n")), T = !0), Object(v.jsx)(S, Object(r.a)({
                    ref: t
                }, e))
            }))
        },
        1770: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return D
            })), n.d(t, "b", (function() {
                return F
            }));
            var r = n(12),
                o = n(1),
                a = n(0),
                i = n(31),
                s = n(1365),
                c = n(1803),
                l = n(2066),
                d = n(179),
                u = n(324),
                p = n(343),
                h = n(72),
                b = n(160),
                f = n(104),
                m = n(341),
                v = n(14);
            const g = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

            function O(e, t, n) {
                var r;
                const o = function(e, t, n) {
                    const r = t.getBoundingClientRect(),
                        o = n && n.getBoundingClientRect(),
                        a = Object(m.a)(t);
                    let i;
                    if (t.fakeTransform) i = t.fakeTransform;
                    else {
                        const e = a.getComputedStyle(t);
                        i = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform")
                    }
                    let s = 0,
                        c = 0;
                    if (i && "none" !== i && "string" === typeof i) {
                        const e = i.split("(")[1].split(")")[0].split(",");
                        s = parseInt(e[4], 10), c = parseInt(e[5], 10)
                    }
                    return "left" === e ? o ? `translateX(${o.right+s-r.left}px)` : `translateX(${a.innerWidth+s-r.left}px)` : "right" === e ? o ? `translateX(-${r.right-o.left-s}px)` : `translateX(-${r.left+r.width-s}px)` : "up" === e ? o ? `translateY(${o.bottom+c-r.top}px)` : `translateY(${a.innerHeight+c-r.top}px)` : o ? `translateY(-${r.top-o.top+r.height-c}px)` : `translateY(-${r.top+r.height-c}px)`
                }(e, t, "function" === typeof(r = n) ? r() : r);
                o && (t.style.webkitTransform = o, t.style.transform = o)
            }
            var j = a.forwardRef((function(e, t) {
                    const n = Object(b.a)(),
                        i = {
                            enter: n.transitions.easing.easeOut,
                            exit: n.transitions.easing.sharp
                        },
                        s = {
                            enter: n.transitions.duration.enteringScreen,
                            exit: n.transitions.duration.leavingScreen
                        },
                        {
                            addEndListener: c,
                            appear: l = !0,
                            children: j,
                            container: x,
                            direction: k = "down",
                            easing: y = i,
                            in: E,
                            onEnter: w,
                            onEntered: R,
                            onEntering: S,
                            onExit: T,
                            onExited: P,
                            onExiting: C,
                            style: A,
                            timeout: M = s,
                            TransitionComponent: I = d.a
                        } = e,
                        N = Object(r.a)(e, g),
                        B = a.useRef(null),
                        D = Object(h.a)(Object(u.a)(j), B, t),
                        F = e => t => {
                            e && (void 0 === t ? e(B.current) : e(B.current, t))
                        },
                        L = F((e, t) => {
                            O(k, e, x), Object(f.b)(e), w && w(e, t)
                        }),
                        $ = F((e, t) => {
                            const r = Object(f.a)({
                                timeout: M,
                                style: A,
                                easing: y
                            }, {
                                mode: "enter"
                            });
                            e.style.webkitTransition = n.transitions.create("-webkit-transform", Object(o.a)({}, r)), e.style.transition = n.transitions.create("transform", Object(o.a)({}, r)), e.style.webkitTransform = "none", e.style.transform = "none", S && S(e, t)
                        }),
                        K = F(R),
                        Y = F(C),
                        z = F(e => {
                            const t = Object(f.a)({
                                timeout: M,
                                style: A,
                                easing: y
                            }, {
                                mode: "exit"
                            });
                            e.style.webkitTransition = n.transitions.create("-webkit-transform", t), e.style.transition = n.transitions.create("transform", t), O(k, e, x), T && T(e)
                        }),
                        X = F(e => {
                            e.style.webkitTransition = "", e.style.transition = "", P && P(e)
                        }),
                        U = a.useCallback(() => {
                            B.current && O(k, B.current, x)
                        }, [k, x]);
                    return a.useEffect(() => {
                        if (E || "down" === k || "right" === k) return;
                        const e = Object(p.a)(() => {
                                B.current && O(k, B.current, x)
                            }),
                            t = Object(m.a)(B.current);
                        return t.addEventListener("resize", e), () => {
                            e.clear(), t.removeEventListener("resize", e)
                        }
                    }, [k, E, x]), a.useEffect(() => {
                        E || U()
                    }, [E, U]), Object(v.jsx)(I, Object(o.a)({
                        nodeRef: B,
                        onEnter: L,
                        onEntered: K,
                        onEntering: $,
                        onExit: z,
                        onExited: X,
                        onExiting: Y,
                        addEndListener: e => {
                            c && c(B.current, e)
                        },
                        appear: l,
                        in: E,
                        timeout: M
                    }, N, {
                        children: (e, t) => a.cloneElement(j, Object(o.a)({
                            ref: D,
                            style: Object(o.a)({
                                visibility: "exited" !== e || E ? void 0 : "hidden"
                            }, A, j.props.style)
                        }, t))
                    }))
                })),
                x = n(1284),
                k = n(48),
                y = n(1400),
                E = n(47),
                w = n(222),
                R = n(1262),
                S = n(596);

            function T(e) {
                return Object(S.a)("MuiDrawer", e)
            }
            Object(R.a)("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
            const P = ["BackdropProps"],
                C = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"],
                A = (e, t) => {
                    const {
                        ownerState: n
                    } = e;
                    return [t.root, ("permanent" === n.variant || "persistent" === n.variant) && t.docked, t.modal]
                },
                M = Object(E.a)(l.a, {
                    name: "MuiDrawer",
                    slot: "Root",
                    overridesResolver: A
                })(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        zIndex: (t.vars || t).zIndex.drawer
                    }
                }),
                I = Object(E.a)("div", {
                    shouldForwardProp: w.a,
                    name: "MuiDrawer",
                    slot: "Docked",
                    skipVariantsResolver: !1,
                    overridesResolver: A
                })({
                    flex: "0 0 auto"
                }),
                N = Object(E.a)(x.a, {
                    name: "MuiDrawer",
                    slot: "Paper",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.paper, t["paperAnchor" + Object(k.a)(n.anchor)], "temporary" !== n.variant && t["paperAnchorDocked" + Object(k.a)(n.anchor)]]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: n
                    } = e;
                    return Object(o.a)({
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        flex: "1 0 auto",
                        zIndex: (t.vars || t).zIndex.drawer,
                        WebkitOverflowScrolling: "touch",
                        position: "fixed",
                        top: 0,
                        outline: 0
                    }, "left" === n.anchor && {
                        left: 0
                    }, "top" === n.anchor && {
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "auto",
                        maxHeight: "100%"
                    }, "right" === n.anchor && {
                        right: 0
                    }, "bottom" === n.anchor && {
                        top: "auto",
                        left: 0,
                        bottom: 0,
                        right: 0,
                        height: "auto",
                        maxHeight: "100%"
                    }, "left" === n.anchor && "temporary" !== n.variant && {
                        borderRight: "1px solid " + (t.vars || t).palette.divider
                    }, "top" === n.anchor && "temporary" !== n.variant && {
                        borderBottom: "1px solid " + (t.vars || t).palette.divider
                    }, "right" === n.anchor && "temporary" !== n.variant && {
                        borderLeft: "1px solid " + (t.vars || t).palette.divider
                    }, "bottom" === n.anchor && "temporary" !== n.variant && {
                        borderTop: "1px solid " + (t.vars || t).palette.divider
                    })
                }),
                B = {
                    left: "right",
                    right: "left",
                    top: "down",
                    bottom: "up"
                };

            function D(e) {
                return -1 !== ["left", "right"].indexOf(e)
            }

            function F(e, t) {
                let {
                    direction: n
                } = e;
                return "rtl" === n && D(t) ? B[t] : t
            }
            const L = a.forwardRef((function(e, t) {
                const n = Object(y.a)({
                        props: e,
                        name: "MuiDrawer"
                    }),
                    l = Object(b.a)(),
                    d = Object(c.a)(),
                    u = {
                        enter: l.transitions.duration.enteringScreen,
                        exit: l.transitions.duration.leavingScreen
                    },
                    {
                        anchor: p = "left",
                        BackdropProps: h,
                        children: f,
                        className: m,
                        elevation: g = 16,
                        hideBackdrop: O = !1,
                        ModalProps: {
                            BackdropProps: x
                        } = {},
                        onClose: E,
                        open: w = !1,
                        PaperProps: R = {},
                        SlideProps: S,
                        TransitionComponent: A = j,
                        transitionDuration: D = u,
                        variant: L = "temporary"
                    } = n,
                    $ = Object(r.a)(n.ModalProps, P),
                    K = Object(r.a)(n, C),
                    Y = a.useRef(!1);
                a.useEffect(() => {
                    Y.current = !0
                }, []);
                const z = F({
                        direction: d ? "rtl" : "ltr"
                    }, p),
                    X = p,
                    U = Object(o.a)({}, n, {
                        anchor: X,
                        elevation: g,
                        open: w,
                        variant: L
                    }, K),
                    H = (e => {
                        const {
                            classes: t,
                            anchor: n,
                            variant: r
                        } = e, o = {
                            root: ["root"],
                            docked: [("permanent" === r || "persistent" === r) && "docked"],
                            modal: ["modal"],
                            paper: ["paper", "paperAnchor" + Object(k.a)(n), "temporary" !== r && "paperAnchorDocked" + Object(k.a)(n)]
                        };
                        return Object(s.a)(o, T, t)
                    })(U),
                    W = Object(v.jsx)(N, Object(o.a)({
                        elevation: "temporary" === L ? g : 0,
                        square: !0
                    }, R, {
                        className: Object(i.a)(H.paper, R.className),
                        ownerState: U,
                        children: f
                    }));
                if ("permanent" === L) return Object(v.jsx)(I, Object(o.a)({
                    className: Object(i.a)(H.root, H.docked, m),
                    ownerState: U,
                    ref: t
                }, K, {
                    children: W
                }));
                const q = Object(v.jsx)(A, Object(o.a)({ in: w,
                    direction: B[z],
                    timeout: D,
                    appear: Y.current
                }, S, {
                    children: W
                }));
                return "persistent" === L ? Object(v.jsx)(I, Object(o.a)({
                    className: Object(i.a)(H.root, H.docked, m),
                    ownerState: U,
                    ref: t
                }, K, {
                    children: q
                })) : Object(v.jsx)(M, Object(o.a)({
                    BackdropProps: Object(o.a)({}, h, x, {
                        transitionDuration: D
                    }),
                    className: Object(i.a)(H.root, H.modal, m),
                    open: w,
                    ownerState: U,
                    onClose: E,
                    hideBackdrop: O,
                    ref: t
                }, K, $, {
                    children: q
                }))
            }));
            t.a = L
        },
        1803: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n(1), n(12);
            var r = n(0);
            n(14);
            const o = r.createContext();
            const a = () => {
                const e = r.useContext(o);
                return null != e && e
            }
        },
        2066: function(e, t, n) {
            "use strict";
            var r = n(12),
                o = n(1),
                a = n(0),
                i = n(31),
                s = n(1365),
                c = n(1380),
                l = n(258),
                d = n(324),
                u = n(188),
                p = n(14);
            const h = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

            function b(e) {
                const t = [],
                    n = [];
                return Array.from(e.querySelectorAll(h)).forEach((e, r) => {
                    const o = function(e) {
                        const t = parseInt(e.getAttribute("tabindex") || "", 10);
                        return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
                    }(e); - 1 !== o && function(e) {
                        return !(e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function(e) {
                            if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                            if (!e.name) return !1;
                            const t = t => e.ownerDocument.querySelector('input[type="radio"]' + t);
                            let n = t(`[name="${e.name}"]:checked`);
                            return n || (n = t(`[name="${e.name}"]`)), n !== e
                        }(e))
                    }(e) && (0 === o ? t.push(e) : n.push({
                        documentOrder: r,
                        tabIndex: o,
                        node: e
                    }))
                }), n.sort((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex).map(e => e.node).concat(t)
            }

            function f() {
                return !0
            }
            var m = function(e) {
                    const {
                        children: t,
                        disableAutoFocus: n = !1,
                        disableEnforceFocus: r = !1,
                        disableRestoreFocus: o = !1,
                        getTabbable: i = b,
                        isEnabled: s = f,
                        open: c
                    } = e, h = a.useRef(!1), m = a.useRef(null), v = a.useRef(null), g = a.useRef(null), O = a.useRef(null), j = a.useRef(!1), x = a.useRef(null), k = Object(l.a)(Object(d.a)(t), x), y = a.useRef(null);
                    a.useEffect(() => {
                        c && x.current && (j.current = !n)
                    }, [n, c]), a.useEffect(() => {
                        if (!c || !x.current) return;
                        const e = Object(u.a)(x.current);
                        return x.current.contains(e.activeElement) || (x.current.hasAttribute("tabIndex") || x.current.setAttribute("tabIndex", "-1"), j.current && x.current.focus()), () => {
                            o || (g.current && g.current.focus && (h.current = !0, g.current.focus()), g.current = null)
                        }
                    }, [c]), a.useEffect(() => {
                        if (!c || !x.current) return;
                        const e = Object(u.a)(x.current),
                            t = t => {
                                y.current = t, !r && s() && "Tab" === t.key && e.activeElement === x.current && t.shiftKey && (h.current = !0, v.current && v.current.focus())
                            },
                            n = () => {
                                const t = x.current;
                                if (null === t) return;
                                if (!e.hasFocus() || !s() || h.current) return void(h.current = !1);
                                if (t.contains(e.activeElement)) return;
                                if (r && e.activeElement !== m.current && e.activeElement !== v.current) return;
                                if (e.activeElement !== O.current) O.current = null;
                                else if (null !== O.current) return;
                                if (!j.current) return;
                                let n = [];
                                if (e.activeElement !== m.current && e.activeElement !== v.current || (n = i(x.current)), n.length > 0) {
                                    var o, a;
                                    const e = Boolean((null == (o = y.current) ? void 0 : o.shiftKey) && "Tab" === (null == (a = y.current) ? void 0 : a.key)),
                                        t = n[0],
                                        r = n[n.length - 1];
                                    "string" !== typeof t && "string" !== typeof r && (e ? r.focus() : t.focus())
                                } else t.focus()
                            };
                        e.addEventListener("focusin", n), e.addEventListener("keydown", t, !0);
                        const o = setInterval(() => {
                            e.activeElement && "BODY" === e.activeElement.tagName && n()
                        }, 50);
                        return () => {
                            clearInterval(o), e.removeEventListener("focusin", n), e.removeEventListener("keydown", t, !0)
                        }
                    }, [n, r, o, s, c, i]);
                    const E = e => {
                        null === g.current && (g.current = e.relatedTarget), j.current = !0
                    };
                    return Object(p.jsxs)(a.Fragment, {
                        children: [Object(p.jsx)("div", {
                            tabIndex: c ? 0 : -1,
                            onFocus: E,
                            ref: m,
                            "data-testid": "sentinelStart"
                        }), a.cloneElement(t, {
                            ref: k,
                            onFocus: e => {
                                null === g.current && (g.current = e.relatedTarget), j.current = !0, O.current = e.target;
                                const n = t.props.onFocus;
                                n && n(e)
                            }
                        }), Object(p.jsx)("div", {
                            tabIndex: c ? 0 : -1,
                            onFocus: E,
                            ref: v,
                            "data-testid": "sentinelEnd"
                        })]
                    })
                },
                v = n(1382),
                g = n(47),
                O = n(1400),
                j = n(602),
                x = n(598),
                k = n(1264),
                y = n(1381),
                E = n(1265),
                w = n(1383);

            function R(e, t) {
                t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
            }

            function S(e) {
                return parseInt(Object(E.a)(e).getComputedStyle(e).paddingRight, 10) || 0
            }

            function T(e, t, n, r, o) {
                const a = [t, n, ...r];
                [].forEach.call(e.children, e => {
                    const t = -1 === a.indexOf(e),
                        n = ! function(e) {
                            const t = -1 !== ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName),
                                n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
                            return t || n
                        }(e);
                    t && n && R(e, o)
                })
            }

            function P(e, t) {
                let n = -1;
                return e.some((e, r) => !!t(e) && (n = r, !0)), n
            }

            function C(e, t) {
                const n = [],
                    r = e.container;
                if (!t.disableScrollLock) {
                    if (function(e) {
                            const t = Object(u.a)(e);
                            return t.body === e ? Object(E.a)(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                        }(r)) {
                        const e = Object(w.a)(Object(u.a)(r));
                        n.push({
                            value: r.style.paddingRight,
                            property: "padding-right",
                            el: r
                        }), r.style.paddingRight = S(r) + e + "px";
                        const t = Object(u.a)(r).querySelectorAll(".mui-fixed");
                        [].forEach.call(t, t => {
                            n.push({
                                value: t.style.paddingRight,
                                property: "padding-right",
                                el: t
                            }), t.style.paddingRight = S(t) + e + "px"
                        })
                    }
                    let e;
                    if (r.parentNode instanceof DocumentFragment) e = Object(u.a)(r).body;
                    else {
                        const t = r.parentElement,
                            n = Object(E.a)(r);
                        e = "HTML" === (null == t ? void 0 : t.nodeName) && "scroll" === n.getComputedStyle(t).overflowY ? t : r
                    }
                    n.push({
                        value: e.style.overflow,
                        property: "overflow",
                        el: e
                    }, {
                        value: e.style.overflowX,
                        property: "overflow-x",
                        el: e
                    }, {
                        value: e.style.overflowY,
                        property: "overflow-y",
                        el: e
                    }), e.style.overflow = "hidden"
                }
                return () => {
                    n.forEach(e => {
                        let {
                            value: t,
                            el: n,
                            property: r
                        } = e;
                        t ? n.style.setProperty(r, t) : n.style.removeProperty(r)
                    })
                }
            }
            const A = new class {
                constructor() {
                    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
                }
                add(e, t) {
                    let n = this.modals.indexOf(e);
                    if (-1 !== n) return n;
                    n = this.modals.length, this.modals.push(e), e.modalRef && R(e.modalRef, !1);
                    const r = function(e) {
                        const t = [];
                        return [].forEach.call(e.children, e => {
                            "true" === e.getAttribute("aria-hidden") && t.push(e)
                        }), t
                    }(t);
                    T(t, e.mount, e.modalRef, r, !0);
                    const o = P(this.containers, e => e.container === t);
                    return -1 !== o ? (this.containers[o].modals.push(e), n) : (this.containers.push({
                        modals: [e],
                        container: t,
                        restore: null,
                        hiddenSiblings: r
                    }), n)
                }
                mount(e, t) {
                    const n = P(this.containers, t => -1 !== t.modals.indexOf(e)),
                        r = this.containers[n];
                    r.restore || (r.restore = C(r, t))
                }
                remove(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    const n = this.modals.indexOf(e);
                    if (-1 === n) return n;
                    const r = P(this.containers, t => -1 !== t.modals.indexOf(e)),
                        o = this.containers[r];
                    if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(n, 1), 0 === o.modals.length) o.restore && o.restore(), e.modalRef && R(e.modalRef, t), T(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1), this.containers.splice(r, 1);
                    else {
                        const e = o.modals[o.modals.length - 1];
                        e.modalRef && R(e.modalRef, !1)
                    }
                    return n
                }
                isTopModal(e) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
                }
            };
            var M = function(e) {
                    const {
                        container: t,
                        disableEscapeKeyDown: n = !1,
                        disableScrollLock: r = !1,
                        manager: i = A,
                        closeAfterTransition: s = !1,
                        onTransitionEnter: c,
                        onTransitionExited: d,
                        children: p,
                        onClose: h,
                        open: b,
                        rootRef: f
                    } = e, m = a.useRef({}), v = a.useRef(null), g = a.useRef(null), O = Object(l.a)(g, f), [j, E] = a.useState(!b), w = function(e) {
                        return !!e && e.props.hasOwnProperty("in")
                    }(p);
                    let S = !0;
                    "false" !== e["aria-hidden"] && !1 !== e["aria-hidden"] || (S = !1);
                    const T = () => (m.current.modalRef = g.current, m.current.mount = v.current, m.current),
                        P = () => {
                            i.mount(T(), {
                                disableScrollLock: r
                            }), g.current && (g.current.scrollTop = 0)
                        },
                        C = Object(x.a)(() => {
                            const e = function(e) {
                                return "function" === typeof e ? e() : e
                            }(t) || Object(u.a)(v.current).body;
                            i.add(T(), e), g.current && P()
                        }),
                        M = a.useCallback(() => i.isTopModal(T()), [i]),
                        I = Object(x.a)(e => {
                            v.current = e, e && (b && M() ? P() : g.current && R(g.current, S))
                        }),
                        N = a.useCallback(() => {
                            i.remove(T(), S)
                        }, [S, i]);
                    a.useEffect(() => () => {
                        N()
                    }, [N]), a.useEffect(() => {
                        b ? C() : w && s || N()
                    }, [b, N, w, s, C]);
                    const B = e => t => {
                            var r;
                            null == (r = e.onKeyDown) || r.call(e, t), "Escape" === t.key && 229 !== t.which && M() && (n || (t.stopPropagation(), h && h(t, "escapeKeyDown")))
                        },
                        D = e => t => {
                            var n;
                            null == (n = e.onClick) || n.call(e, t), t.target === t.currentTarget && h && h(t, "backdropClick")
                        };
                    return {
                        getRootProps: function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const n = Object(y.a)(e);
                            delete n.onTransitionEnter, delete n.onTransitionExited;
                            const r = Object(o.a)({}, n, t);
                            return Object(o.a)({
                                role: "presentation"
                            }, r, {
                                onKeyDown: B(r),
                                ref: O
                            })
                        },
                        getBackdropProps: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const t = e;
                            return Object(o.a)({
                                "aria-hidden": !0
                            }, t, {
                                onClick: D(t),
                                open: b
                            })
                        },
                        getTransitionProps: () => ({
                            onEnter: Object(k.a)(() => {
                                E(!1), c && c()
                            }, null == p ? void 0 : p.props.onEnter),
                            onExited: Object(k.a)(() => {
                                E(!0), d && d(), s && N()
                            }, null == p ? void 0 : p.props.onExited)
                        }),
                        rootRef: O,
                        portalRef: I,
                        isTopModal: M,
                        exited: j,
                        hasTransition: w
                    }
                },
                I = n(1262),
                N = n(596);

            function B(e) {
                return Object(N.a)("MuiModal", e)
            }
            Object(I.a)("MuiModal", ["root", "hidden", "backdrop"]);
            const D = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"],
                F = Object(g.a)("div", {
                    name: "MuiModal",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: n
                        } = e;
                        return [t.root, !n.open && n.exited && t.hidden]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: n
                    } = e;
                    return Object(o.a)({
                        position: "fixed",
                        zIndex: (t.vars || t).zIndex.modal,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        left: 0
                    }, !n.open && n.exited && {
                        visibility: "hidden"
                    })
                }),
                L = Object(g.a)(j.a, {
                    name: "MuiModal",
                    slot: "Backdrop",
                    overridesResolver: (e, t) => t.backdrop
                })({
                    zIndex: -1
                }),
                $ = a.forwardRef((function(e, t) {
                    var n, l, d, u, h, b;
                    const f = Object(O.a)({
                            name: "MuiModal",
                            props: e
                        }),
                        {
                            BackdropComponent: g = L,
                            BackdropProps: j,
                            className: x,
                            closeAfterTransition: k = !1,
                            children: y,
                            container: E,
                            component: w,
                            components: R = {},
                            componentsProps: S = {},
                            disableAutoFocus: T = !1,
                            disableEnforceFocus: P = !1,
                            disableEscapeKeyDown: C = !1,
                            disablePortal: A = !1,
                            disableRestoreFocus: I = !1,
                            disableScrollLock: N = !1,
                            hideBackdrop: $ = !1,
                            keepMounted: K = !1,
                            onBackdropClick: Y,
                            open: z,
                            slotProps: X,
                            slots: U
                        } = f,
                        H = Object(r.a)(f, D),
                        W = Object(o.a)({}, f, {
                            closeAfterTransition: k,
                            disableAutoFocus: T,
                            disableEnforceFocus: P,
                            disableEscapeKeyDown: C,
                            disablePortal: A,
                            disableRestoreFocus: I,
                            disableScrollLock: N,
                            hideBackdrop: $,
                            keepMounted: K
                        }),
                        {
                            getRootProps: q,
                            getBackdropProps: V,
                            getTransitionProps: J,
                            portalRef: G,
                            isTopModal: _,
                            exited: Q,
                            hasTransition: Z
                        } = M(Object(o.a)({}, W, {
                            rootRef: t
                        })),
                        ee = Object(o.a)({}, W, {
                            exited: Q
                        }),
                        te = (e => {
                            const {
                                open: t,
                                exited: n,
                                classes: r
                            } = e, o = {
                                root: ["root", !t && n && "hidden"],
                                backdrop: ["backdrop"]
                            };
                            return Object(s.a)(o, B, r)
                        })(ee),
                        ne = {};
                    if (void 0 === y.props.tabIndex && (ne.tabIndex = "-1"), Z) {
                        const {
                            onEnter: e,
                            onExited: t
                        } = J();
                        ne.onEnter = e, ne.onExited = t
                    }
                    const re = null != (n = null != (l = null == U ? void 0 : U.root) ? l : R.Root) ? n : F,
                        oe = null != (d = null != (u = null == U ? void 0 : U.backdrop) ? u : R.Backdrop) ? d : g,
                        ae = null != (h = null == X ? void 0 : X.root) ? h : S.root,
                        ie = null != (b = null == X ? void 0 : X.backdrop) ? b : S.backdrop,
                        se = Object(c.a)({
                            elementType: re,
                            externalSlotProps: ae,
                            externalForwardedProps: H,
                            getSlotProps: q,
                            additionalProps: {
                                ref: t,
                                as: w
                            },
                            ownerState: ee,
                            className: Object(i.a)(x, null == ae ? void 0 : ae.className, null == te ? void 0 : te.root, !ee.open && ee.exited && (null == te ? void 0 : te.hidden))
                        }),
                        ce = Object(c.a)({
                            elementType: oe,
                            externalSlotProps: ie,
                            additionalProps: j,
                            getSlotProps: e => V(Object(o.a)({}, e, {
                                onClick: t => {
                                    Y && Y(t), null != e && e.onClick && e.onClick(t)
                                }
                            })),
                            className: Object(i.a)(null == ie ? void 0 : ie.className, null == j ? void 0 : j.className, null == te ? void 0 : te.backdrop),
                            ownerState: ee
                        });
                    return K || z || Z && !Q ? Object(p.jsx)(v.a, {
                        ref: G,
                        container: E,
                        disablePortal: A,
                        children: Object(p.jsxs)(re, Object(o.a)({}, se, {
                            children: [!$ && g ? Object(p.jsx)(oe, Object(o.a)({}, ce)) : null, Object(p.jsx)(m, {
                                disableEnforceFocus: P,
                                disableAutoFocus: T,
                                disableRestoreFocus: I,
                                isEnabled: _,
                                open: z,
                                children: a.cloneElement(y, ne)
                            })]
                        }))
                    }) : null
                }));
            t.a = $
        }
    }
]);