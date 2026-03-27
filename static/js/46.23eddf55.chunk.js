(this["webpackJsonp@devias-io/material-kit-pro-react"] = this["webpackJsonp@devias-io/material-kit-pro-react"] || []).push([
    [46], {
        1411: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(334),
                i = a(36);
            const c = function() {
                "production" === Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "695569836848",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "rove-erp.firebasestorage.app",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "G-12FSTEGQC8",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "rove-erp.firebaseapp.com",
                    REACT_APP_VAPID_KEY: "BG_uNxdrgE2K5CKgn4bow2Igzqh1LJU3NJKZYLf8biyzUEiPXC2isLt1SMb6HQEyt1HNBV9jAx2eUlbjmad-ppU",
                    REACT_APP_ENV: "prod",
                    REACT_APP_FIREBASE_PROJECT_ID: "rove-erp",
                    REACT_APP_FIREBASE_APP_ID: "1:695569836848:web:d0399e38922bffd905f6f5",
                    REACT_APP_FIREBASE_API_KEY: "AIzaSyC1BnBoAf1NB2ccwTp1L6w9UHeZjFxrKEU"
                }).REACT_APP_NODE_ENV && window.gtag && window.gtag(...arguments)
            };
            var l = e => {
                c("config", Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "695569836848",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "rove-erp.firebasestorage.app",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "G-12FSTEGQC8",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "rove-erp.firebaseapp.com",
                    REACT_APP_VAPID_KEY: "BG_uNxdrgE2K5CKgn4bow2Igzqh1LJU3NJKZYLf8biyzUEiPXC2isLt1SMb6HQEyt1HNBV9jAx2eUlbjmad-ppU",
                    REACT_APP_ENV: "prod",
                    REACT_APP_FIREBASE_PROJECT_ID: "rove-erp",
                    REACT_APP_FIREBASE_APP_ID: "1:695569836848:web:d0399e38922bffd905f6f5",
                    REACT_APP_FIREBASE_API_KEY: "AIzaSyC1BnBoAf1NB2ccwTp1L6w9UHeZjFxrKEU"
                }).REACT_APP_GA_MEASUREMENT_ID, e)
            };
            const s = Object(n.forwardRef)((e, t) => {
                let {
                    children: a,
                    title: c = "",
                    ...s
                } = e;
                const p = Object(i.h)(),
                    d = Object(n.useCallback)(() => {
                        l({
                            page_path: p.pathname
                        })
                    });
                return Object(n.useEffect)(() => {
                    d()
                }, [d]), r.a.createElement("div", Object.assign({
                    ref: t
                }, s), r.a.createElement(o.Helmet, null, r.a.createElement("title", null, c)), a)
            });
            t.a = s
        },
        1412: function(e, t, a) {
            "use strict";
            var n = a(15),
                r = a(1528);
            const o = Object(n.a)(e => ({
                root: {
                    backgroundColor: e.palette.background.white,
                    borderRadius: "12px",
                    elevation: 12,
                    borderWidth: 0,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.02)"
                }
            }))(r.a);
            t.a = o
        },
        1441: function(e, t, a) {
            "use strict";
            var n = a(33),
                r = a.n(n);
            t.a = async (e, t) => {
                try {
                    const a = "https://documentapi.rovelabs.com/prod/get_document",
                        n = await r.a.get(a, {
                            params: {
                                entityName: e,
                                key: t
                            }
                        });
                    return console.log(n.data), n.data.url
                } catch (a) {
                    throw console.error(a), a
                }
            }
        },
        1483: function(e, t, a) {
            "use strict";
            var n = a(261),
                r = a.n(n);
            t.a = async e => {
                let t, a;
                const n = new r.a.S3;
                var o = encodeURIComponent(e) + "/" + encodeURIComponent("logo") + "/" + e;
                return t = await async function(e) {
                    return await n.getObject({
                        Bucket: "erpinstitution",
                        Key: e
                    }).promise().then(e => e || null).catch(e => {})
                }(o), void 0 === t || null === t ? (a = null, a) : (a = `data:${t.contentType};base64,` + (e => {
                    var t = "";
                    return [].slice.call(new Uint8Array(e)).forEach(e => t += String.fromCharCode(e)), window.btoa(t)
                })(t.Body), a)
            }
        },
        1525: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(594),
                i = a(39),
                c = a(595),
                l = a(127),
                s = a(1491),
                p = a(597),
                d = a(1766),
                m = a(36),
                u = a(329),
                b = a(63),
                g = a(189),
                h = a(328),
                f = a(1441);
            const E = Object(o.a)(e => ({
                sticky: {
                    position: "fixed",
                    top: 64,
                    left: 256,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.06)",
                    right: 0,
                    zIndex: 1e3,
                    backgroundColor: "#D9EAF6"
                },
                sticky1: {
                    position: "fixed",
                    top: 64,
                    left: 0,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.06)",
                    right: 0,
                    zIndex: 1e3,
                    backgroundColor: "#D9EAF6"
                },
                mobile: {
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                    paddingTop: -2,
                    paddingBottom: 2,
                    backgroundColor: "#D9EAF6"
                },
                backgroundImage: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "150px",
                    height: "100px",
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "150px 100px",
                    opacity: .5,
                    zIndex: 0
                },
                contentWrapper: {
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                    width: "100%"
                }
            }));
            t.a = e => {
                let {
                    header: t,
                    subHeader: a,
                    setHeight: o,
                    loading: x,
                    buttonComponent: y
                } = e;
                const v = E(),
                    _ = (Object(m.g)(), window.localStorage.getItem("drawer")),
                    w = Object(i.a)(),
                    O = Object(c.a)(w.breakpoints.down("xs")),
                    {
                        user: j
                    } = Object(b.a)(),
                    S = Object(g.a)(),
                    [C, A] = Object(n.useState)([]),
                    [R, I] = Object(n.useState)(_),
                    [k, P] = Object(n.useState)(null);
                Object(n.useEffect)(() => {
                    const e = () => {
                        I(window.localStorage.getItem("drawer"))
                    };
                    return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                }, []);
                const T = encodeURIComponent("profile_picture") + "/",
                    N = Object(n.useCallback)(async () => {
                        try {
                            const {
                                data: e
                            } = await h.a.query({
                                query: u.Eb,
                                variables: {
                                    user_email: "" + j.email
                                },
                                fetchPolicy: "cache-first"
                            });
                            S.current && (A(e.get_student_by_email), (async e => {
                                try {
                                    const t = T + e,
                                        a = await Object(f.a)("student_accomplishment", t);
                                    console.log("Fetched Image URL:", a), P(a)
                                } catch (t) {
                                    console.error("Error fetching document:", t)
                                }
                            })(e.get_student_by_email._id))
                        } catch (e) {
                            console.error(e)
                        }
                    }, [S]);
                return Object(n.useEffect)(() => {
                    N()
                }, [N]), Object(n.useEffect)(() => {
                    console.log("Image State:", k)
                }, [k]), r.a.createElement(l.a, {
                    className: O ? v.mobile : "true" === R ? v.sticky : v.sticky1,
                    style: {
                        position: "relative"
                    }
                }, r.a.createElement("div", {
                    className: v.backgroundImage,
                    style: {
                        backgroundImage: "url(/static/pngegg.png)"
                    }
                }), r.a.createElement("div", {
                    className: v.contentWrapper
                }, r.a.createElement(s.a, {
                    maxWidth: !1
                }, r.a.createElement(l.a, {
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    my: O ? 2.3 : 2
                }, r.a.createElement(l.a, null, r.a.createElement(p.a, {
                    variant: "h2"
                }, x ? r.a.createElement(d.a, {
                    animation: "wave",
                    width: "150px"
                }) : t), r.a.createElement(l.a, {
                    mt: 1
                }), r.a.createElement(p.a, {
                    variant: "body2",
                    color: "textSecondary",
                    style: {
                        fontSize: "14px"
                    }
                }, x ? r.a.createElement(d.a, {
                    animation: "wave",
                    width: "150px"
                }) : a), y && r.a.createElement(l.a, {
                    mt: 1,
                    ml: -.5
                }, r.a.createElement(l.a, {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap"
                }, x ? r.a.createElement(d.a, {
                    width: 100,
                    height: 30
                }) : y))), r.a.createElement(l.a, {
                    flexGrow: 1
                })))))
            }
        },
        1532: function(e, t, a) {
            "use strict";

            function n(e) {
                var t, a, r = "";
                if ("string" == typeof e || "number" == typeof e) r += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e)) {
                        var o = e.length;
                        for (t = 0; t < o; t++) e[t] && (a = n(e[t])) && (r && (r += " "), r += a)
                    } else
                        for (a in e) e[a] && (r && (r += " "), r += a);
                return r
            }
            t.a = function() {
                for (var e, t, a = 0, r = "", o = arguments.length; a < o; a++)(e = arguments[a]) && (t = n(e)) && (r && (r += " "), r += t);
                return r
            }
        },
        1595: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(594),
                i = a(39),
                c = a(595),
                l = a(127),
                s = a(1491),
                p = a(597),
                d = a(36),
                m = a(2078),
                u = a(329),
                b = a(63),
                g = a(189),
                h = a(328),
                f = (a(331), a(338)),
                E = a(1441);
            a(156), a(1483);
            const x = Object(o.a)(e => ({
                sticky: {
                    position: "fixed",
                    top: 64,
                    left: 256,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.06)",
                    right: 0,
                    zIndex: 1e3,
                    backgroundColor: e.palette.background.default
                },
                sticky1: {
                    position: "fixed",
                    top: 64,
                    left: 0,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.06)",
                    right: 0,
                    zIndex: 1e3,
                    backgroundColor: e.palette.background.default
                },
                mobile: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1e3,
                    backgroundColor: "#D9EAF6"
                }
            }));
            t.a = e => {
                let {
                    setMenuOpen: t,
                    header: a,
                    subHeader: o,
                    setHeight: y,
                    buttonComponent: v
                } = e;
                const _ = x();
                Object(d.g)();
                const w = window.localStorage.getItem("drawer"),
                    O = Object(i.a)(),
                    j = Object(c.a)(O.breakpoints.down("xs")),
                    {
                        user: S
                    } = Object(b.a)(),
                    C = Object(g.a)(),
                    [A, R] = Object(n.useState)(!1),
                    [I, k] = Object(n.useState)([]),
                    [P, T] = Object(n.useState)(null),
                    [N, B] = Object(n.useState)(!0),
                    U = Object(n.useCallback)(e => {
                        null !== e && y(e.getBoundingClientRect().height)
                    }),
                    [D, W] = Object(n.useState)(w);
                window.addEventListener("storage", () => {
                    W(window.localStorage.getItem("drawer"))
                });
                const [L, z] = Object(n.useState)(null);
                var F = encodeURIComponent("profile_picture") + "/";
                const M = Object(n.useCallback)(async () => {
                    try {
                        const {
                            data: e
                        } = await h.a.query({
                            query: u.Eb,
                            variables: {
                                user_email: "" + S.email
                            },
                            fetchPolicy: "cache-first"
                        }).then(e => e);
                        C.current && (k(e.get_student_by_email), (async e => {
                            try {
                                var t = F + e;
                                const a = await Object(E.a)("student_accomplishment", t);
                                console.log(a), z(a)
                            } catch (a) {
                                console.error("Error fetching document:", a)
                            }
                        })(e.get_student_by_email._id), (async e => {
                            try {
                                const e = await Object(E.a)("logo", encodeURIComponent(S["custom:institution_id"]) + "/" + encodeURIComponent("logo") + "/" + encodeURIComponent(S["custom:institution_id"]));
                                console.log(e), T(e), B(!1)
                            } catch (t) {
                                console.error("Error fetching document:", t)
                            }
                        })()), R(!1)
                    } catch (e) {}
                }, [C]);
                return Object(n.useEffect)(() => {
                    M()
                }, [M]), r.a.createElement(l.a, {
                    className: j ? _.mobile : "true" === D ? _.sticky : _.sticky1,
                    ref: U,
                    style: {
                        minHeight: "50px"
                    }
                }, r.a.createElement("div", null, r.a.createElement(s.a, {
                    maxWidth: !1
                }, r.a.createElement(l.a, {
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    my: 1.5
                }, N ? r.a.createElement(m.a, {
                    variant: "rounded",
                    sx: {
                        bgcolor: "#bfddf5",
                        height: "35px",
                        width: "35px"
                    }
                }, r.a.createElement(p.a, {
                    variant: "body2",
                    style: {
                        fontSize: "17px",
                        color: "#2b6080"
                    }
                }, Object(f.a)("" + S["custom:institution_name"]))) : r.a.createElement(m.a, {
                    variant: "rounded",
                    sx: {
                        bgcolor: "#bfddf5",
                        height: "35px",
                        width: "35px"
                    },
                    src: P
                }), r.a.createElement(l.a, {
                    mr: 1
                }), r.a.createElement(l.a, null, r.a.createElement(p.a, {
                    variant: "h6",
                    style: {
                        lineHeight: 1
                    }
                }, "" + (I && I.institution_short_name ? I.institution_short_name : "")), r.a.createElement(p.a, {
                    variant: "body2",
                    color: "textSecondary",
                    style: {
                        fontSize: "12px"
                    }
                }, "" + (I && I.core_detail ? I.core_detail.stream : ""))), r.a.createElement(l.a, {
                    flexGrow: 1
                }), r.a.createElement(m.a, {
                    sx: {
                        bgcolor: "#bfddf5",
                        height: "35px",
                        width: "35px"
                    },
                    variant: "rounded",
                    onClick: () => t(!0)
                }, r.a.createElement(l.a, {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        textAlign: "center",
                        padding: 0
                    }
                }, r.a.createElement(p.a, {
                    variant: "body2",
                    style: {
                        fontSize: "17px",
                        color: "#2b6080"
                    }
                }, Object(f.a)("" + S["custom:full_name"]))))))))
            }
        },
        1600: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(1801),
                i = a(1283),
                c = a(1817),
                l = a(1811),
                s = a(156),
                p = a(99),
                d = a(36),
                m = a(63);
            t.a = () => {
                const {
                    enqueueSnackbar: e
                } = Object(p.b)(), {
                    logout: t
                } = Object(m.a)(), a = Object(d.g)();
                return r.a.createElement(o.a, {
                    height: "100px",
                    mt: 1.5
                }, r.a.createElement(i.a, {
                    key: "1"
                }, r.a.createElement(o.a, {
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    onClick: () => {
                        a.push("/app/admin/account")
                    }
                }, r.a.createElement(s.a, {
                    icon: "material-symbols:settings-outline-rounded",
                    style: {
                        fontSize: "26px"
                    }
                }), r.a.createElement(o.a, {
                    mr: 2
                }), r.a.createElement(o.a, null, r.a.createElement(c.a, {
                    variant: "body1"
                }, "Account Settings")))), r.a.createElement(o.a, {
                    px: 2,
                    py: 1
                }, r.a.createElement(l.a, null)), r.a.createElement(i.a, {
                    key: "2"
                }, r.a.createElement(o.a, {
                    onClick: async () => {
                        try {
                            await t(), a.push("/login")
                        } catch (n) {
                            e("Unable to logout", {
                                variant: "error"
                            })
                        }
                    },
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center"
                }, r.a.createElement(s.a, {
                    icon: "material-symbols:logout-rounded",
                    style: {
                        fontSize: "26px"
                    }
                }), r.a.createElement(o.a, {
                    mr: 2
                }), r.a.createElement(o.a, null, r.a.createElement(c.a, {
                    variant: "body1"
                }, "Logout")))))
            }
        },
        1801: function(e, t, a) {
            "use strict";
            var n = a(1),
                r = a(12),
                o = a(0),
                i = a(1532),
                c = a(263),
                l = a(139),
                s = a(486),
                p = a(609),
                d = a(14);
            const m = ["className", "component"];
            var u = a(1261),
                b = a(589),
                g = a(194),
                h = a(1262);
            var f = Object(h.a)("MuiBox", ["root"]);
            const E = Object(b.a)(),
                x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const {
                        themeId: t,
                        defaultTheme: a,
                        defaultClassName: u = "MuiBox-root",
                        generateClassName: b
                    } = e, g = Object(c.default)("div", {
                        shouldForwardProp: e => "theme" !== e && "sx" !== e && "as" !== e
                    })(l.a), h = o.forwardRef((function(e, o) {
                        const c = Object(p.a)(a),
                            l = Object(s.a)(e),
                            {
                                className: h,
                                component: f = "div"
                            } = l,
                            E = Object(r.a)(l, m);
                        return Object(d.jsx)(g, Object(n.a)({
                            as: f,
                            ref: o,
                            className: Object(i.a)(h, b ? b(u) : u),
                            theme: t && c[t] || c
                        }, E))
                    }));
                    return h
                }({
                    themeId: g.a,
                    defaultTheme: E,
                    defaultClassName: f.root,
                    generateClassName: u.a.generate
                });
            t.a = x
        },
        1811: function(e, t, a) {
            "use strict";
            var n = a(12),
                r = a(1),
                o = a(0),
                i = a(31),
                c = a(1365),
                l = a(57),
                s = a(47),
                p = a(1400),
                d = a(1299),
                m = a(14);
            const u = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"],
                b = Object(s.a)("div", {
                    name: "MuiDivider",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: a
                        } = e;
                        return [t.root, a.absolute && t.absolute, t[a.variant], a.light && t.light, "vertical" === a.orientation && t.vertical, a.flexItem && t.flexItem, a.children && t.withChildren, a.children && "vertical" === a.orientation && t.withChildrenVertical, "right" === a.textAlign && "vertical" !== a.orientation && t.textAlignRight, "left" === a.textAlign && "vertical" !== a.orientation && t.textAlignLeft]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return Object(r.a)({
                        margin: 0,
                        flexShrink: 0,
                        borderWidth: 0,
                        borderStyle: "solid",
                        borderColor: (t.vars || t).palette.divider,
                        borderBottomWidth: "thin"
                    }, a.absolute && {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%"
                    }, a.light && {
                        borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : Object(l.alpha)(t.palette.divider, .08)
                    }, "inset" === a.variant && {
                        marginLeft: 72
                    }, "middle" === a.variant && "horizontal" === a.orientation && {
                        marginLeft: t.spacing(2),
                        marginRight: t.spacing(2)
                    }, "middle" === a.variant && "vertical" === a.orientation && {
                        marginTop: t.spacing(1),
                        marginBottom: t.spacing(1)
                    }, "vertical" === a.orientation && {
                        height: "100%",
                        borderBottomWidth: 0,
                        borderRightWidth: "thin"
                    }, a.flexItem && {
                        alignSelf: "stretch",
                        height: "auto"
                    })
                }, e => {
                    let {
                        ownerState: t
                    } = e;
                    return Object(r.a)({}, t.children && {
                        display: "flex",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        border: 0,
                        borderTopStyle: "solid",
                        borderLeftStyle: "solid",
                        "&::before, &::after": {
                            content: '""',
                            alignSelf: "center"
                        }
                    })
                }, e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return Object(r.a)({}, a.children && "vertical" !== a.orientation && {
                        "&::before, &::after": {
                            width: "100%",
                            borderTop: "thin solid " + (t.vars || t).palette.divider,
                            borderTopStyle: "inherit"
                        }
                    })
                }, e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return Object(r.a)({}, a.children && "vertical" === a.orientation && {
                        flexDirection: "column",
                        "&::before, &::after": {
                            height: "100%",
                            borderLeft: "thin solid " + (t.vars || t).palette.divider,
                            borderLeftStyle: "inherit"
                        }
                    })
                }, e => {
                    let {
                        ownerState: t
                    } = e;
                    return Object(r.a)({}, "right" === t.textAlign && "vertical" !== t.orientation && {
                        "&::before": {
                            width: "90%"
                        },
                        "&::after": {
                            width: "10%"
                        }
                    }, "left" === t.textAlign && "vertical" !== t.orientation && {
                        "&::before": {
                            width: "10%"
                        },
                        "&::after": {
                            width: "90%"
                        }
                    })
                }),
                g = Object(s.a)("span", {
                    name: "MuiDivider",
                    slot: "Wrapper",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: a
                        } = e;
                        return [t.wrapper, "vertical" === a.orientation && t.wrapperVertical]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return Object(r.a)({
                        display: "inline-block",
                        paddingLeft: `calc(${t.spacing(1)} * 1.2)`,
                        paddingRight: `calc(${t.spacing(1)} * 1.2)`
                    }, "vertical" === a.orientation && {
                        paddingTop: `calc(${t.spacing(1)} * 1.2)`,
                        paddingBottom: `calc(${t.spacing(1)} * 1.2)`
                    })
                }),
                h = o.forwardRef((function(e, t) {
                    const a = Object(p.a)({
                            props: e,
                            name: "MuiDivider"
                        }),
                        {
                            absolute: o = !1,
                            children: l,
                            className: s,
                            component: h = (l ? "div" : "hr"),
                            flexItem: f = !1,
                            light: E = !1,
                            orientation: x = "horizontal",
                            role: y = ("hr" !== h ? "separator" : void 0),
                            textAlign: v = "center",
                            variant: _ = "fullWidth"
                        } = a,
                        w = Object(n.a)(a, u),
                        O = Object(r.a)({}, a, {
                            absolute: o,
                            component: h,
                            flexItem: f,
                            light: E,
                            orientation: x,
                            role: y,
                            textAlign: v,
                            variant: _
                        }),
                        j = (e => {
                            const {
                                absolute: t,
                                children: a,
                                classes: n,
                                flexItem: r,
                                light: o,
                                orientation: i,
                                textAlign: l,
                                variant: s
                            } = e, p = {
                                root: ["root", t && "absolute", s, o && "light", "vertical" === i && "vertical", r && "flexItem", a && "withChildren", a && "vertical" === i && "withChildrenVertical", "right" === l && "vertical" !== i && "textAlignRight", "left" === l && "vertical" !== i && "textAlignLeft"],
                                wrapper: ["wrapper", "vertical" === i && "wrapperVertical"]
                            };
                            return Object(c.a)(p, d.b, n)
                        })(O);
                    return Object(m.jsx)(b, Object(r.a)({
                        as: h,
                        className: Object(i.a)(j.root, s),
                        role: y,
                        ref: t,
                        ownerState: O
                    }, w, {
                        children: l ? Object(m.jsx)(g, {
                            className: j.wrapper,
                            ownerState: O,
                            children: l
                        }) : null
                    }))
                }));
            h.muiSkipListHighlight = !0, t.a = h
        },
        1817: function(e, t, a) {
            "use strict";
            var n = a(12),
                r = a(1),
                o = a(0),
                i = a(31),
                c = a(486),
                l = a(1365),
                s = a(47),
                p = a(1400),
                d = a(48),
                m = a(1262),
                u = a(596);

            function b(e) {
                return Object(u.a)("MuiTypography", e)
            }
            Object(m.a)("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
            var g = a(14);
            const h = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
                f = Object(s.a)("span", {
                    name: "MuiTypography",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: a
                        } = e;
                        return [t.root, a.variant && t[a.variant], "inherit" !== a.align && t["align" + Object(d.a)(a.align)], a.noWrap && t.noWrap, a.gutterBottom && t.gutterBottom, a.paragraph && t.paragraph]
                    }
                })(e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return Object(r.a)({
                        margin: 0
                    }, "inherit" === a.variant && {
                        font: "inherit"
                    }, "inherit" !== a.variant && t.typography[a.variant], "inherit" !== a.align && {
                        textAlign: a.align
                    }, a.noWrap && {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }, a.gutterBottom && {
                        marginBottom: "0.35em"
                    }, a.paragraph && {
                        marginBottom: 16
                    })
                }),
                E = {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    subtitle1: "h6",
                    subtitle2: "h6",
                    body1: "p",
                    body2: "p",
                    inherit: "p"
                },
                x = {
                    primary: "primary.main",
                    textPrimary: "text.primary",
                    secondary: "secondary.main",
                    textSecondary: "text.secondary",
                    error: "error.main"
                },
                y = o.forwardRef((function(e, t) {
                    const a = Object(p.a)({
                            props: e,
                            name: "MuiTypography"
                        }),
                        o = (e => x[e] || e)(a.color),
                        s = Object(c.a)(Object(r.a)({}, a, {
                            color: o
                        })),
                        {
                            align: m = "inherit",
                            className: u,
                            component: y,
                            gutterBottom: v = !1,
                            noWrap: _ = !1,
                            paragraph: w = !1,
                            variant: O = "body1",
                            variantMapping: j = E
                        } = s,
                        S = Object(n.a)(s, h),
                        C = Object(r.a)({}, s, {
                            align: m,
                            color: o,
                            className: u,
                            component: y,
                            gutterBottom: v,
                            noWrap: _,
                            paragraph: w,
                            variant: O,
                            variantMapping: j
                        }),
                        A = y || (w ? "p" : j[O] || E[O]) || "span",
                        R = (e => {
                            const {
                                align: t,
                                gutterBottom: a,
                                noWrap: n,
                                paragraph: r,
                                variant: o,
                                classes: i
                            } = e, c = {
                                root: ["root", o, "inherit" !== e.align && "align" + Object(d.a)(t), a && "gutterBottom", n && "noWrap", r && "paragraph"]
                            };
                            return Object(l.a)(c, b, i)
                        })(C);
                    return Object(g.jsx)(f, Object(r.a)({
                        as: A,
                        ref: t,
                        ownerState: C,
                        className: Object(i.a)(R.root, u)
                    }, S))
                }));
            t.a = y
        },
        1917: function(e, t, a) {
            "use strict";
            var n = a(15),
                r = a(1877);
            const o = Object(n.a)({
                paper: {
                    borderRadius: "16px 16px 0px 0px",
                    top: "50% !important",
                    bottom: "60px"
                }
            })(r.a);
            t.a = o
        },
        1918: function(e, t, a) {
            "use strict";
            var n = a(0),
                r = a.n(n),
                o = a(127),
                i = a(597),
                c = a(1766),
                l = a(1412),
                s = a(156);
            t.a = e => {
                let {
                    classes: t,
                    loading: a,
                    description: p,
                    date: d,
                    head_text: m,
                    onClick: u,
                    title2: b,
                    amount1: g,
                    amount2: h
                } = e;
                const [f, E] = Object(n.useState)(!1);
                return r.a.createElement(o.a, {
                    onClick: u,
                    style: {
                        minWidth: "270px",
                        marginRight: "16px"
                    }
                }, r.a.createElement(l.a, {
                    py: 2
                }, r.a.createElement(o.a, {
                    py: 2,
                    px: .5
                }, r.a.createElement(o.a, {
                    pt: 0,
                    pl: 1,
                    pr: 2,
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center"
                }, r.a.createElement(s.a, {
                    icon: "mdi:building",
                    fontSize: "20px",
                    color: "#ffc107"
                }), r.a.createElement(o.a, {
                    mr: 1
                }), r.a.createElement(i.a, {
                    style: {
                        marginTop: 1
                    },
                    variant: "caption"
                }, a ? r.a.createElement(c.a, {
                    width: 50
                }) : d)), r.a.createElement(o.a, {
                    mt: 1
                }), r.a.createElement(o.a, {
                    pt: 0,
                    pl: 1,
                    pr: 2
                }, r.a.createElement(i.a, {
                    variant: "body2",
                    style: {
                        fontWeight: "bold",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }, a ? r.a.createElement(c.a, {
                    width: 50
                }) : m)), r.a.createElement(o.a, {
                    mt: 1
                }), r.a.createElement(o.a, {
                    pt: 0,
                    pl: 1,
                    pr: 2
                }, r.a.createElement(i.a, {
                    variant: "body2",
                    style: {
                        fontSize: "13px",
                        display: "-webkit-box",
                        WebkitLineClamp: f ? "unset" : 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }, a ? r.a.createElement(c.a, {
                    width: 100
                }) : p)))))
            }
        },
        2041: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(594),
                i = a(591),
                c = a(39),
                l = a(595),
                s = a(127),
                p = a(1491),
                d = a(597),
                m = a(1613),
                u = a(1379),
                b = a(155),
                g = a(1376),
                h = a(1411),
                f = (a(8), a(261)),
                E = a.n(f),
                x = a(56),
                y = a(379),
                v = a.n(y),
                _ = a(36),
                w = a(63),
                O = a(99),
                j = a(1525),
                S = (a(1917), a(371), a(1955)),
                C = a.n(S),
                A = a(1954),
                R = a.n(A),
                I = a(370),
                k = a.n(I),
                P = a(1304),
                T = a.n(P),
                N = a(268),
                B = a.n(N),
                U = a(1595),
                D = a(1770),
                W = a(1600),
                L = a(1918),
                z = a(156),
                F = a(329),
                M = a(328),
                H = a(189),
                K = a(330),
                G = a.n(K);
            const V = Object(o.a)(e => ({
                root: {
                    backgroundColor: e.palette.background.white,
                    paddingBottom: e.spacing(3)
                },
                avatar: {
                    backgroundColor: "#eeeeee",
                    color: "#1565c0",
                    height: 55,
                    width: 55,
                    borderRadius: "16px"
                }
            }));
            r.a.forwardRef((function(e, t) {
                return r.a.createElement(i.a, Object.assign({
                    direction: "left",
                    ref: t
                }, e))
            }));
            t.default = e => {
                let {
                    className: t,
                    ...a
                } = e;
                const o = V(),
                    {
                        logout: i
                    } = Object(w.a)(),
                    {
                        enqueueSnackbar: f
                    } = Object(O.b)(),
                    y = Object(_.g)(),
                    [S, A] = Object(n.useState)(!1),
                    [I, P] = Object(n.useState)(!0),
                    [N, K] = Object(n.useState)(0),
                    [q, J] = Object(n.useState)(!1),
                    {
                        user: Y
                    } = Object(w.a)(),
                    $ = Object(H.a)(),
                    [Q, Z] = Object(n.useState)(!0),
                    [X, ee] = Object(n.useState)([{}, {}, {}, {}]),
                    te = Object(n.useCallback)(async () => {
                        try {
                            const {
                                data: e
                            } = await M.a.query({
                                query: F.Eb,
                                variables: {
                                    user_email: "" + Y.email
                                },
                                fetchPolicy: "cache-first"
                            }).then(e => e);
                            console.log(e), re(e.get_student_by_email._id)
                        } catch (e) {
                            console.log(e)
                        }
                    }, []),
                    [ae, ne] = Object(n.useState)([]),
                    re = Object(n.useCallback)(async e => {
                        try {
                            const {
                                data: t
                            } = await M.a.query({
                                query: F.yb,
                                variables: {
                                    student_id: e,
                                    record_per_page: 5,
                                    page_no: 1
                                },
                                fetchPolicy: "cache-first"
                            }).then(e => e);
                            console.log(t), ne(t.get_sent_notifications_by_student_id), Z(!1)
                        } catch (t) {
                            console.log(t)
                        }
                    }, [$]);
                Object(n.useEffect)(() => {
                    te()
                }, [te]);
                const [oe, ie] = Object(n.useState)([{
                    title: "Academics",
                    departments: [{
                        appName: "Certificates",
                        description: "View and request certificates.",
                        appUrl: "/app/admin/certificates",
                        icon: v.a
                    }, {
                        appName: "Resume",
                        description: "View and add resume.",
                        appUrl: "/app/admin/resume",
                        icon: R.a
                    }, {
                        appName: "Documents",
                        description: "View generated documents",
                        appUrl: "/app/admin/documents",
                        icon: k.a
                    }, {
                        appName: "Feedback",
                        description: "Manage Feedbacks",
                        appUrl: "/app/admin/feedback",
                        icon: B.a
                    }, {
                        appName: "Groups",
                        description: "Register to Groups",
                        appUrl: "/app/admin/groups",
                        icon: T.a
                    }, {
                        appName: "Account",
                        description: "Account Settings",
                        appUrl: "/app/admin/account",
                        icon: C.a
                    }]
                }]), [ce, le] = (new E.a.S3, Object(n.useState)(!1)), [se, pe] = Object(n.useState)(0), de = Object(c.a)(), me = Object(l.a)(de.breakpoints.down("xs")), ue = window.innerHeight, be = () => {
                    console.log("hittt"), y.push("/app/admin/notifications")
                };
                return r.a.createElement(h.a, {
                    className: o.root,
                    title: "Campus"
                }, r.a.createElement(U.a, {
                    setHeight: K,
                    setMenuOpen: J
                }), r.a.createElement(s.a, {
                    style: {
                        width: "100%",
                        backgroundColor: "#ffffff"
                    },
                    marginTop: N + "px"
                }, r.a.createElement(j.a, {
                    header: "Campus",
                    subHeader: "All the campus actions available here.",
                    setHeight: K
                }), r.a.createElement(s.a, {
                    style: {
                        height: ue - N - 110
                    },
                    pt: 2
                }, r.a.createElement(p.a, {
                    maxWidth: !1
                }, me ? r.a.createElement(r.a.Fragment, null, r.a.createElement(d.a, {
                    variant: "h5"
                }, " Institution Actions "), r.a.createElement(s.a, {
                    mt: 4,
                    px: 1
                }, r.a.createElement(m.a, {
                    container: !0,
                    spacing: 3
                }, oe.map(e => r.a.createElement(s.a, {
                    key: e.title,
                    mb: 4
                }, r.a.createElement(m.a, {
                    container: !0,
                    spacing: 3
                }, e.departments.map(e => {
                    const t = e.icon;
                    return r.a.createElement(m.a, {
                        item: !0,
                        xs: 3,
                        key: e.appUrl
                    }, r.a.createElement(u.a, {
                        underline: "none",
                        component: x.a,
                        to: e.appUrl
                    }, r.a.createElement(s.a, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }, r.a.createElement(s.a, {
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10%",
                        bgcolor: "#e0e9f5ff",
                        mb: 1
                    }, r.a.createElement(b.a, {
                        style: {
                            color: "#00316cff"
                        },
                        fontSize: "medium"
                    }, r.a.createElement(t, {
                        fontSize: "medium"
                    }))), r.a.createElement(d.a, {
                        variant: "caption",
                        color: "textSecondary",
                        align: "center"
                    }, e.appName))))
                }))))))) : r.a.createElement(r.a.Fragment, null)), r.a.createElement(g.a, null), r.a.createElement(s.a, {
                    mt: 0,
                    style: {
                        zIndex: 1e4
                    },
                    px: 2,
                    pt: 2
                }, r.a.createElement(s.a, {
                    mb: 1,
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center"
                }, r.a.createElement(d.a, {
                    variant: "h5"
                }, "Notifications"), r.a.createElement(s.a, {
                    mr: 1
                }), r.a.createElement(z.a, {
                    style: {
                        marginTop: .8
                    },
                    icon: "weui:arrow-filled",
                    fontSize: "22px",
                    color: "#000000"
                })), r.a.createElement(s.a, {
                    style: {
                        overflowX: "auto",
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        padding: "8px 0",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            height: "8px"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                            borderRadius: "4px"
                        }
                    }
                }, (Q ? X : ae).map(e => r.a.createElement(L.a, {
                    onClick: be,
                    classes: o,
                    loading: Q,
                    head_text: e.title,
                    date: G()(e.created_at).fromNow(),
                    description: e.body
                })), r.a.createElement(s.a, {
                    ml: 1
                }), r.a.createElement(s.a, {
                    onClick: () => {
                        y.push("/app/admin/notifications")
                    },
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }, r.a.createElement(s.a, {
                    mb: 1,
                    style: {
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#ffffff"
                    }
                }, r.a.createElement(z.a, {
                    icon: "weui:arrow-filled",
                    fontSize: "22px",
                    color: "#000000"
                })), r.a.createElement(d.a, {
                    variant: "caption",
                    color: "textSecondary"
                }, "See all")))))), r.a.createElement(D.a, {
                    anchor: "bottom",
                    open: q,
                    onClose: () => J(!1),
                    PaperProps: {
                        sx: {
                            height: "30%",
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16
                        }
                    }
                }, r.a.createElement(W.a, null)))
            }
        }
    }
]);