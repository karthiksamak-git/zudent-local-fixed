(this["webpackJsonp@devias-io/material-kit-pro-react"] = this["webpackJsonp@devias-io/material-kit-pro-react"] || []).push([
    [18], {
        1249: function(e, t, a) {
            "use strict";
            a.r(t);
            a(637), a(651), a(676), a(677), a(678), a(679), a(680), a(681), a(682), a(683), a(684);
            var n = a(0),
                i = a.n(n),
                o = a(19),
                r = a.n(o),
                d = a(186),
                s = a(588),
                c = a(22),
                _ = a.n(c),
                l = a(33),
                u = a.n(l);
            const p = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function m(e, t) {
                navigator.serviceWorker.register(e).then(e => {
                    e.onupdatefound = () => {
                        const a = e.installing;
                        null != a && (a.onstatechange = () => {
                            "installed" === a.state && (navigator.serviceWorker.controller ? t && t.onUpdate && t.onUpdate(e) : t && t.onSuccess && t.onSuccess(e))
                        })
                    }
                }).catch(e => {})
            }
            var g = a(29),
                b = a.n(g);
            const y = "LIGHT",
                f = {
                    direction: "ltr",
                    responsiveFontSizes: !0,
                    theme: "ONE_DARK"
                },
                h = e => {
                    window.localStorage.setItem("settings", JSON.stringify(e))
                },
                $ = Object(n.createContext)({
                    settings: f,
                    saveSettings: () => {}
                }),
                S = e => {
                    let {
                        settings: t,
                        children: a
                    } = e;
                    const [o, r] = Object(n.useState)(t || f);
                    return Object(n.useEffect)(() => {
                        const e = (() => {
                            let e = null;
                            try {
                                const t = window.localStorage.getItem("settings");
                                t && (e = JSON.parse(t))
                            } catch (t) {}
                            return e
                        })();
                        e && r(e)
                    }, []), Object(n.useEffect)(() => {
                        document.dir = o.direction
                    }, [o]), i.a.createElement($.Provider, {
                        value: {
                            settings: o,
                            saveSettings: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                const t = b.a.merge({}, o, e);
                                r(t), h(t)
                            }
                        }
                    }, a)
                };
            $.Consumer;
            var k = $,
                E = a(36),
                x = a(70),
                w = a(54),
                v = a(554),
                j = a.n(v),
                I = a(484),
                O = a(99),
                P = a(1391),
                C = a(1367),
                A = a(1389),
                T = a(1398),
                R = a(1296),
                z = a(594),
                N = a(1286);
            const q = Object(z.a)(() => Object(N.a)({
                "@global": {
                    "*": {
                        boxSizing: "border-box",
                        margin: 0,
                        padding: 0
                    },
                    html: {
                        "-webkit-font-smoothing": "antialiased",
                        "-moz-osx-font-smoothing": "grayscale",
                        height: "100%",
                        width: "100%"
                    },
                    body: {
                        height: "100%",
                        width: "100%"
                    },
                    "#root": {
                        height: "100%",
                        width: "100%"
                    }
                }
            }));
            var M = () => (q(), null);
            var D = () => {
                const e = Object(E.h)();
                return Object(n.useEffect)(() => {
                    window.scrollTo(0, 0)
                }, [e.pathname]), null
            };
            var B = () => (D(), null),
                L = a(334);
            const F = Object({
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
            }).REACT_APP_GA_MEASUREMENT_ID;
            var U = () => i.a.createElement(L.Helmet, null, i.a.createElement("script", {
                    async: !0,
                    src: "https://www.googletagmanager.com/gtag/js?id=" + F
                }), i.a.createElement("script", null, `\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '${F}');\n        `)),
                Q = a(1257),
                G = a(1392);

            function W(e) {
                return i.a.createElement(G.a, Object.assign({
                    elevation: 6,
                    variant: "filled"
                }, e))
            }
            var K = function(e) {
                    class t extends n.Component {
                        constructor() {
                            super(...arguments), this.state = {
                                isDisconnected: !1
                            }, this.handleConnectionChange = () => {
                                if ("online" !== (navigator.onLine ? "online" : "offline")) return this.setState({
                                    isDisconnected: !0
                                }); {
                                    const e = setInterval(() => {
                                        fetch("//google.com", {
                                            mode: "no-cors"
                                        }).then(() => {
                                            this.setState({
                                                isDisconnected: !1
                                            }, () => clearInterval(e))
                                        }).catch(() => this.setState({
                                            isDisconnected: !0
                                        }))
                                    }, 2e3)
                                }
                            }
                        }
                        componentDidMount() {
                            this.handleConnectionChange(), window.addEventListener("online", this.handleConnectionChange), window.addEventListener("offline", this.handleConnectionChange)
                        }
                        componentWillUnmount() {
                            window.removeEventListener("online", this.handleConnectionChange), window.removeEventListener("offline", this.handleConnectionChange)
                        }
                        render() {
                            const {
                                isDisconnected: e
                            } = this.state;
                            return i.a.createElement("div", null, e && i.a.createElement(Q.a, null, i.a.createElement(W, {
                                severity: "error"
                            }, "This is a success message!")))
                        }
                    }
                    return t
                },
                H = a(239);
            var J = () => Object(n.useContext)(k),
                V = a(34),
                Y = a(590),
                Z = a(1395);
            const X = {
                    direction: "ltr",
                    typography: {
                        h1: {
                            fontWeight: 500,
                            fontSize: 35,
                            letterSpacing: "-0.24px"
                        },
                        h2: {
                            fontWeight: 500,
                            fontSize: 29,
                            letterSpacing: "-0.24px"
                        },
                        h3: {
                            fontWeight: 500,
                            fontSize: 24,
                            letterSpacing: "-0.06px"
                        },
                        h4: {
                            fontWeight: 500,
                            fontSize: 20,
                            letterSpacing: "-0.06px"
                        },
                        h5: {
                            fontWeight: 500,
                            fontSize: 16,
                            letterSpacing: "-0.05px"
                        },
                        h6: {
                            fontWeight: 500,
                            fontSize: 14,
                            letterSpacing: "-0.05px"
                        },
                        overline: {
                            fontWeight: 500
                        }
                    },
                    overrides: {
                        MuiLinearProgress: {
                            root: {
                                borderRadius: 3,
                                overflow: "hidden"
                            }
                        },
                        MuiListItemIcon: {
                            root: {
                                minWidth: 32
                            }
                        },
                        MuiChip: {
                            root: {
                                backgroundColor: "rgba(0,0,0,0.075)"
                            }
                        }
                    }
                },
                ee = [{
                    name: y,
                    overrides: {
                        MuiInputBase: {
                            input: {
                                "&::placeholder": {
                                    opacity: 1,
                                    color: V.a.blueGrey[600]
                                }
                            }
                        }
                    },
                    palette: {
                        type: "light",
                        action: {
                            active: V.a.blueGrey[600]
                        },
                        background: {
                            default: V.a.common.white,
                            dark: "#f4f6f8",
                            paper: V.a.common.white
                        },
                        primary: {
                            main: V.a.indigo[600]
                        },
                        secondary: {
                            main: "#5850EC"
                        },
                        text: {
                            primary: V.a.blueGrey[900],
                            secondary: V.a.blueGrey[600]
                        }
                    },
                    shadows: ["none", "0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)", "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)", "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]
                }];
            var te = a(39),
                ae = a(595),
                ne = a(371),
                ie = a(332),
                oe = a.n(ie),
                re = a(63),
                de = a(1377),
                se = a(8),
                ce = a(576),
                _e = a.n(ce),
                le = a(15),
                ue = a(1374),
                pe = a(1267),
                me = a(127),
                ge = a(597),
                be = a(1375),
                ye = a(1376),
                fe = a(1368),
                he = a(1378),
                $e = a(1364),
                Se = a(1397),
                ke = a(1394),
                Ee = a(338),
                xe = a(331),
                we = a(56),
                ve = a(326),
                je = a(1315),
                Ie = a(1371);
            const Oe = Object(z.a)(e => ({
                avatar: {
                    height: 32,
                    width: 32,
                    marginRight: e.spacing(1)
                },
                popover: {
                    width: 200
                }
            }));
            var Pe = () => {
                    const e = Oe(),
                        t = Object(E.g)(),
                        a = Object(n.useRef)(null),
                        {
                            user: o,
                            logout: r
                        } = Object(re.a)(),
                        {
                            enqueueSnackbar: d
                        } = Object(O.b)(),
                        [s, c] = Object(n.useState)(!1),
                        _ = () => {
                            c(!1)
                        },
                        l = async () => {
                            try {
                                _(), await r(), t.push("/login")
                            } catch (e) {
                                d("Unable to logout", {
                                    variant: "error"
                                })
                            }
                        };
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement(me.a, {
                        display: "flex",
                        alignItems: "center",
                        component: ve.a,
                        onClick: () => {
                            c(!0)
                        },
                        ref: a
                    }, i.a.createElement(Se.a, {
                        alt: "User",
                        className: e.avatar,
                        src: Image
                    }, Object(Ee.a)("" + o["custom:full_name"])), i.a.createElement(ke.a, {
                        smDown: !0
                    }, i.a.createElement(ge.a, {
                        variant: "h6",
                        color: "textPrimary"
                    }, Object(xe.a)("" + o["custom:full_name"])))), i.a.createElement(je.a, {
                        onClose: _,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        keepMounted: !0,
                        PaperProps: {
                            className: e.popover
                        },
                        getContentAnchorEl: null,
                        anchorEl: a.current,
                        open: s
                    }, "alumni" === o.user_group ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Ie.a, {
                        component: we.a,
                        to: "/app/admin/profile"
                    }, "My Profile"), i.a.createElement(Ie.a, null, "Alumni Fund"), i.a.createElement(Ie.a, {
                        onClick: l
                    }, "Logout")) : i.a.createElement(i.a.Fragment, null, i.a.createElement(Ie.a, {
                        component: we.a,
                        to: "/app/admin/resume"
                    }, "My Resume"), i.a.createElement(Ie.a, {
                        onClick: l
                    }, "Logout"))))
                },
                Ce = a(243),
                Ae = a.n(Ce),
                Te = a(314),
                Re = a.n(Te),
                ze = a(268),
                Ne = a.n(ze),
                qe = a(570),
                Me = a.n(qe),
                De = a(1263),
                Be = a(1256),
                Le = a(357),
                Fe = a.n(Le),
                Ue = a(566),
                Qe = a.n(Ue);
            const Ge = Object(z.a)(e => ({
                    item: {
                        display: "block",
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    itemLeaf: {
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    button: {
                        color: e.palette.text.secondary,
                        padding: "10px 8px",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        letterSpacing: 0,
                        width: "100%"
                    },
                    buttonLeaf: {
                        color: e.palette.text.secondary,
                        padding: "10px 8px",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        letterSpacing: 0,
                        width: "100%",
                        fontWeight: e.typography.fontWeightRegular,
                        "&.depth-0": {
                            "& $title": {
                                fontWeight: e.typography.fontWeightMedium
                            }
                        }
                    },
                    icon: {
                        display: "flex",
                        alignItems: "center",
                        marginRight: e.spacing(1)
                    },
                    title: {
                        marginRight: "auto"
                    },
                    active: {
                        color: e.palette.secondary.main,
                        "& $title": {
                            fontWeight: e.typography.fontWeightMedium
                        },
                        "& $icon": {
                            color: e.palette.secondary.main
                        }
                    }
                })),
                We = e => {
                    let {
                        children: t,
                        className: a,
                        depth: o,
                        href: r,
                        icon: d,
                        info: s,
                        open: c,
                        title: _,
                        ...l
                    } = e;
                    const u = Ge(),
                        [p, m] = Object(n.useState)(c),
                        g = () => {
                            m(e => !e)
                        };
                    let b = 8;
                    o > 0 && (b = 32 + 8 * o);
                    const y = {
                        paddingLeft: b
                    };
                    return t ? i.a.createElement(De.a, Object.assign({
                        className: Object(se.a)(u.item, a),
                        disableGutters: !0,
                        key: _
                    }, l), i.a.createElement(C.a, {
                        className: u.button,
                        onClick: g,
                        style: y
                    }, d && i.a.createElement(d, {
                        className: u.icon,
                        size: "20"
                    }), i.a.createElement("span", {
                        className: u.title
                    }, _), p ? i.a.createElement(Qe.a, null) : i.a.createElement(Fe.a, null)), i.a.createElement(Be.a, { in: p
                    }, t)) : i.a.createElement(De.a, Object.assign({
                        className: Object(se.a)(u.itemLeaf, a),
                        disableGutters: !0,
                        key: _
                    }, l), i.a.createElement(C.a, {
                        activeClassName: u.active,
                        className: Object(se.a)(u.buttonLeaf, "depth-" + o),
                        component: we.b,
                        exact: !0,
                        style: y,
                        to: r
                    }, d && i.a.createElement(d, {
                        className: u.icon,
                        size: "20"
                    }), i.a.createElement("span", {
                        className: u.title
                    }, _), s && i.a.createElement(s, null)))
                };
            We.defaultProps = {
                open: !1
            };
            var Ke = We,
                He = a(1372),
                Je = a(155),
                Ve = a(1268),
                Ye = a(1373),
                Ze = a(75),
                Xe = a(84);
            const et = u.a.create();
            et.interceptors.response.use(e => e, e => Promise.reject(e.response && e.response.data || "Something went wrong"));
            const tt = Object(Ze.b)({
                    name: "calendar",
                    initialState: {
                        events: [],
                        isModalOpen: !1,
                        selectedEventId: null,
                        selectedRange: null
                    },
                    reducers: {
                        getEvents(e, t) {
                            const {
                                events: a
                            } = t.payload;
                            e.events = a
                        },
                        createEvent(e, t) {
                            const {
                                event: a
                            } = t.payload;
                            e.events = [...e.events, a]
                        },
                        selectEvent(e, t) {
                            const {
                                eventId: a = null
                            } = t.payload;
                            e.isModalOpen = !0, e.selectedEventId = a
                        },
                        updateEvent(e, t) {
                            const {
                                event: a
                            } = t.payload;
                            e.events = b.a.map(e.events, e => e.id === a.id ? a : e)
                        },
                        deleteEvent(e, t) {
                            const {
                                eventId: a
                            } = t.payload;
                            e.events = b.a.reject(e.events, {
                                id: a
                            })
                        },
                        selectRange(e, t) {
                            const {
                                start: a,
                                end: n
                            } = t.payload;
                            e.isModalOpen = !0, e.selectedRange = {
                                start: a,
                                end: n
                            }
                        },
                        openModal(e) {
                            e.isModalOpen = !0
                        },
                        closeModal(e) {
                            e.isModalOpen = !1, e.selectedEventId = null, e.selectedRange = null
                        }
                    }
                }),
                at = tt.reducer;
            var nt = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "id";
                return e.reduce((e, a) => (e[a[t]] = a, e), {})
            };
            const it = Object(Ze.b)({
                    name: "chat",
                    initialState: {
                        activeThreadId: null,
                        contacts: {
                            byId: {},
                            allIds: []
                        },
                        threads: {
                            byId: {},
                            allIds: []
                        },
                        participants: [],
                        recipients: []
                    },
                    reducers: {
                        getContacts(e, t) {
                            const {
                                contacts: a
                            } = t.payload;
                            e.contacts.byId = nt(a), e.contacts.allIds = Object.keys(e.contacts.byId)
                        },
                        getThreads(e, t) {
                            const {
                                threads: a
                            } = t.payload;
                            e.threads.byId = nt(a), e.threads.allIds = Object.keys(e.threads.byId)
                        },
                        getThread(e, t) {
                            const {
                                thread: a
                            } = t.payload;
                            a ? (e.threads.byId[a.id] = a, e.activeThreadId = a.id, e.threads.allIds.includes(a.id) || e.threads.allIds.push(a.id)) : e.activeThreadId = null
                        },
                        markThreadAsSeen(e, t) {
                            const {
                                threadId: a
                            } = t.payload, n = e.threads.byId[a];
                            n && (n.unreadCount = 0)
                        },
                        resetActiveThread(e) {
                            e.activeThreadId = null
                        },
                        getParticipants(e, t) {
                            const {
                                participants: a
                            } = t.payload;
                            e.participants = a
                        },
                        addRecipient(e, t) {
                            const {
                                recipient: a
                            } = t.payload;
                            e.recipients.find(e => e.id === a.id) || e.recipients.push(a)
                        },
                        removeRecipient(e, t) {
                            const {
                                recipientId: a
                            } = t.payload;
                            e.recipients = e.recipients.filter(e => e.id !== a)
                        }
                    }
                }),
                ot = it.reducer;
            var rt = a(1390);
            const dt = Object(Ze.b)({
                    name: "kanban",
                    initialState: {
                        isLoaded: !1,
                        lists: {
                            byId: {},
                            allIds: []
                        },
                        cards: {
                            byId: {},
                            allIds: []
                        },
                        members: {
                            byId: {},
                            allIds: []
                        }
                    },
                    reducers: {
                        getBoard(e, t) {
                            const {
                                board: a
                            } = t.payload;
                            e.lists.byId = nt(a.lists), e.lists.allIds = Object.keys(e.lists.byId), e.cards.byId = nt(a.cards), e.cards.allIds = Object.keys(e.cards.byId), e.members.byId = nt(a.members), e.members.allIds = Object.keys(e.members.byId), e.isLoaded = !0
                        },
                        createList(e, t) {
                            const {
                                list: a
                            } = t.payload;
                            e.lists.byId[a.id] = a, e.lists.allIds.push(a.id)
                        },
                        updateList(e, t) {
                            const {
                                list: a
                            } = t.payload;
                            e.lists.byId[a.id] = a
                        },
                        clearList(e, t) {
                            const {
                                listId: a
                            } = t.payload, {
                                cardIds: n
                            } = e.lists.byId[a];
                            e.lists.byId[a].cardIds = [], e.cards.byId = b.a.omit(e.cards.byId, n), b.a.pull(e.cards.allIds, ...n)
                        },
                        deleteList(e, t) {
                            const {
                                listId: a
                            } = t.payload;
                            e.lists.byId = b.a.omit(e.lists.byId, a), b.a.pull(e.lists.allIds, a)
                        },
                        createCard(e, t) {
                            const {
                                card: a
                            } = t.payload;
                            e.cards.byId[a.id] = a, e.cards.allIds.push(a.id), e.lists.byId[a.listId].cardIds.push(a.id)
                        },
                        updateCard(e, t) {
                            const {
                                card: a
                            } = t.payload;
                            b.a.merge(e.cards.byId[a.id], a)
                        },
                        moveCard(e, t) {
                            const {
                                cardId: a,
                                position: n,
                                listId: i
                            } = t.payload, {
                                listId: o
                            } = e.cards.byId[a];
                            b.a.pull(e.lists.byId[o].cardIds, a), i ? (e.cards.byId[a].listId = i, e.lists.byId[i].cardIds.splice(n, 0, a)) : e.lists.byId[o].cardIds.splice(n, 0, a)
                        },
                        deleteCard(e, t) {
                            const {
                                cardId: a
                            } = t.payload, {
                                listId: n
                            } = e.cards.byId[a];
                            e.cards.byId = b.a.omit(e.cards.byId, a), b.a.pull(e.cards.allIds, a), b.a.pull(e.lists.byId[n].cardIds, a)
                        },
                        addComment(e, t) {
                            const {
                                comment: a
                            } = t.payload;
                            e.cards.byId[a.cardId].comments.push(a)
                        },
                        addChecklist(e, t) {
                            const {
                                cardId: a,
                                checklist: n
                            } = t.payload;
                            e.cards.byId[a].checklists.push(n)
                        },
                        updateChecklist(e, t) {
                            const {
                                cardId: a,
                                checklist: n
                            } = t.payload, i = e.cards.byId[a];
                            i.checklists = b.a.map(i.checklists, e => e.id === n.id ? n : e)
                        },
                        deleteChecklist(e, t) {
                            const {
                                cardId: a,
                                checklistId: n
                            } = t.payload, i = e.cards.byId[a];
                            i.checklists = b.a.reject(i.checklists, {
                                id: n
                            })
                        },
                        addCheckItem(e, t) {
                            const {
                                cardId: a,
                                checklistId: n,
                                checkItem: i
                            } = t.payload, o = e.cards.byId[a];
                            b.a.assign(o, {
                                checklists: b.a.map(o.checklists, e => (e.id === n && b.a.assign(e, {
                                    checkItems: [...e.checkItems, i]
                                }), e))
                            })
                        },
                        updateCheckItem(e, t) {
                            const {
                                cardId: a,
                                checklistId: n,
                                checkItem: i
                            } = t.payload, o = e.cards.byId[a];
                            o.checklists = b.a.map(o.checklists, e => (e.id === n && b.a.assign(e, {
                                checkItems: b.a.map(e.checkItems, e => e.id === i.id ? i : e)
                            }), e))
                        },
                        deleteCheckItem(e, t) {
                            const {
                                cardId: a,
                                checklistId: n,
                                checkItemId: i
                            } = t.payload, o = e.cards.byId[a];
                            o.checklists = b.a.map(o.checklists, e => (e.id === n && b.a.assign(e, {
                                checkItems: b.a.reject(e.checkItems, {
                                    id: i
                                })
                            }), e))
                        }
                    }
                }),
                st = dt.reducer;
            const ct = Object(Ze.b)({
                    name: "mail",
                    initialState: {
                        mails: {
                            byId: {},
                            allIds: []
                        },
                        labels: [],
                        isSidebarOpen: !1,
                        isComposeOpen: !1
                    },
                    reducers: {
                        getLabels(e, t) {
                            const {
                                labels: a
                            } = t.payload;
                            e.labels = a
                        },
                        getMails(e, t) {
                            const {
                                mails: a
                            } = t.payload;
                            e.mails.byId = nt(a), e.mails.allIds = Object.keys(e.mails.byId)
                        },
                        getMail(e, t) {
                            const {
                                mail: a
                            } = t.payload;
                            e.mails.byId[a.id] = a, e.mails.allIds.includes(a.id) || e.mails.allIds.push(a.id)
                        },
                        openSidebar(e) {
                            e.isSidebarOpen = !0
                        },
                        closeSidebar(e) {
                            e.isSidebarOpen = !1
                        },
                        openCompose(e) {
                            e.isComposeOpen = !0
                        },
                        closeCompose(e) {
                            e.isComposeOpen = !1
                        }
                    }
                }),
                _t = ct.reducer;
            const lt = Object(Ze.b)({
                    name: "notifications",
                    initialState: {
                        get_students: []
                    },
                    reducers: {
                        getNotifications(e, t) {
                            const {
                                get_students: a
                            } = t.payload;
                            e.notifications = a
                        }
                    }
                }),
                ut = lt.reducer;
            var pt = Object(Xe.combineReducers)({
                calendar: at,
                chat: ot,
                form: rt.a,
                kanban: st,
                mail: _t,
                notifications: ut
            });
            const mt = Object(Ze.a)({
                reducer: pt,
                devTools: !0
            });
            d.c;
            var gt = mt;
            const bt = Object(z.a)(e => ({
                popover: {
                    width: 320
                },
                icon: {
                    backgroundColor: e.palette.secondary.main,
                    color: e.palette.secondary.contrastText
                }
            }));
            var yt = () => {
                    const e = bt(),
                        t = Object(n.useRef)(null),
                        a = Object(d.b)(),
                        [o, r] = Object(n.useState)(!1);
                    return Object(n.useEffect)(() => {
                        a(async e => {
                            e(lt.actions.getNotifications([]))
                        })
                    }, [a]), i.a.createElement(i.a.Fragment, null, i.a.createElement(He.a, {
                        title: "Notifications"
                    }, i.a.createElement($e.a, {
                        ref: t,
                        onClick: () => {
                            r(!0)
                        },
                        color: "black"
                    }, i.a.createElement(Je.a, null, i.a.createElement(Ye.a, null)))), i.a.createElement(Ve.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        classes: {
                            paper: e.popover
                        },
                        anchorEl: t.current,
                        onClose: () => {
                            r(!1)
                        },
                        open: o
                    }, i.a.createElement(me.a, {
                        p: 2
                    }, i.a.createElement(ge.a, {
                        variant: "h5",
                        color: "textPrimary"
                    }, "Notifications")), i.a.createElement(me.a, {
                        p: 2,
                        alignItems: "center"
                    }, i.a.createElement(ge.a, {
                        variant: "h6",
                        color: "textPrimary"
                    }, "There are no notifications"))))
                },
                ft = a(575),
                ht = a.n(ft),
                $t = a(573),
                St = a.n($t),
                kt = a(574),
                Et = a.n(kt),
                xt = a(379),
                wt = a.n(xt),
                vt = a(244),
                jt = a.n(vt),
                It = a(571),
                Ot = a.n(It),
                Pt = a(370),
                Ct = a.n(Pt),
                At = a(572),
                Tt = a.n(At),
                Rt = a(245),
                zt = a.n(Rt);
            const Nt = Object(le.a)({
                    root: {
                        backgroundColor: "#FFFFFF",
                        boxShadow: "none",
                        borderBottom: "1px solid #e0e0e0"
                    }
                })(ue.a),
                qt = {
                    items: [{
                        title: "Registrations",
                        href: "/app/admin/events",
                        icon: Re.a,
                        items: [{
                            title: "Events",
                            href: "/app/admin/newevents"
                        }, {
                            title: "Participants",
                            href: "/app/admin/neweventStudents"
                        }]
                    }, {
                        title: "Admin",
                        href: "/app/admin/neweventDepartments",
                        icon: Me.a,
                        items: [{
                            title: "Institutions",
                            href: "/app/admin/neweventDepartments"
                        }, {
                            title: "Participants",
                            href: "/app/admin/neweventAllParticipants"
                        }]
                    }]
                },
                Mt = {
                    items: [{
                        title: "Registrations",
                        href: "/app/admin/events",
                        icon: Re.a,
                        items: [{
                            title: "Events",
                            href: "/app/admin/newevents"
                        }, {
                            title: "Participants",
                            href: "/app/admin/neweventStudents"
                        }]
                    }]
                },
                Dt = {
                    items: [{
                        title: "Courses",
                        href: "/app/admin/academics",
                        icon: jt.a
                    }, {
                        title: "Calender",
                        href: "/app/admin/calendar",
                        icon: Ot.a
                    }, {
                        title: "Fee Payments",
                        href: "/app/admin/payments",
                        icon: Ae.a
                    }, {
                        title: "Exams",
                        href: "/app/admin/exams",
                        icon: zt.a
                    }, {
                        title: "Certificates",
                        href: "/app/admin/certificates",
                        icon: wt.a
                    }, {
                        title: "Documents",
                        href: "/app/admin/documents",
                        icon: Ct.a
                    }, {
                        title: "Feedbacks",
                        href: "/app/admin/feedback",
                        icon: Ne.a
                    }, {
                        title: "Clubs",
                        href: "/app/admin/groups",
                        icon: Tt.a
                    }]
                },
                Bt = {
                    items: [{
                        title: "My Profile",
                        href: "/app/admin/profile",
                        icon: St.a
                    }]
                };

            function Lt(e) {
                let {
                    items: t,
                    pathname: a,
                    depth: n = 0
                } = e;
                return i.a.createElement(pe.a, {
                    disablePadding: !0
                }, t.reduce((e, t) => function(e) {
                    let {
                        acc: t,
                        pathname: a,
                        item: n,
                        depth: o
                    } = e;
                    const r = n.title + o;
                    if (n.items) {
                        const e = Object(E.f)(a, {
                            path: n.href,
                            exact: !1
                        });
                        t.push(i.a.createElement(Ke, {
                            depth: o,
                            icon: n.icon,
                            info: n.info,
                            key: r,
                            open: Boolean(e),
                            title: n.title
                        }, Lt({
                            depth: o + 1,
                            pathname: a,
                            items: n.items
                        })))
                    } else t.push(i.a.createElement(Ke, {
                        depth: o,
                        href: n.href,
                        icon: n.icon,
                        info: n.info,
                        key: r,
                        title: n.title
                    }));
                    return t
                }({
                    acc: e,
                    item: t,
                    pathname: a,
                    depth: n
                }), []))
            }
            const Ft = Object(z.a)(e => ({
                root: {
                    display: "flex"
                },
                root1: {
                    display: "flex",
                    paddingLeft: 256
                },
                desktopDrawer: {
                    width: 256,
                    height: "100%"
                },
                appBar: {
                    transition: e.transitions.create(["margin", "width"], {
                        easing: e.transitions.easing.sharp,
                        duration: {
                            enteringScreen: 225,
                            leavingScreen: 195
                        }
                    })
                },
                menuButton: {
                    marginRight: e.spacing(2),
                    color: "#000000"
                },
                hide: {
                    display: "none"
                },
                content: {
                    flexGrow: 1,
                    padding: e.spacing(3),
                    transition: e.transitions.create("margin", {
                        easing: e.transitions.easing.sharp,
                        duration: e.transitions.duration.leavingScreen
                    })
                },
                contentShift: {
                    transition: e.transitions.create("margin", {
                        easing: e.transitions.easing.easeOut,
                        duration: e.transitions.duration.enteringScreen
                    }),
                    marginLeft: 0
                },
                action: {
                    marginBottom: e.spacing(1)
                }
            }));
            const Ut = e => {
                let {
                    className: t,
                    open: a,
                    setOpen: o,
                    isMobileNavOpen: r,
                    openMobile: d,
                    ...s
                } = e;
                const c = Ft(),
                    _ = Object(E.h)(),
                    {
                        user: l,
                        image: u
                    } = Object(re.a)(),
                    p = Object(te.a)(),
                    m = Object(ae.a)(p.breakpoints.down("xs")),
                    g = () => {
                        a ? (o(!1), window.localStorage.setItem("drawer", !1)) : (o(!0), window.localStorage.setItem("drawer", !0))
                    };
                Object(n.useEffect)(() => {
                    window.addEventListener("storage", e => {
                        "false" === e.currentTarget.localStorage.drawer && o(!1)
                    })
                }), window.localStorage.setItem("test", "123"), window.dispatchEvent(new Event("storage"));
                const b = i.a.createElement(me.a, {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }, i.a.createElement(oe.a, {
                    options: {
                        suppressScrollX: !0
                    }
                }, i.a.createElement(me.a, {
                    p: 2
                }, i.a.createElement(me.a, {
                    mb: 2,
                    mt: 1,
                    ml: 1,
                    display: "flex"
                }, i.a.createElement(Et.a, null), i.a.createElement(me.a, {
                    mr: 1
                }), i.a.createElement(me.a, null, i.a.createElement(ge.a, {
                    variant: "body1",
                    color: "textPrimary"
                }, i.a.createElement("strong", null, "Student"), " Module"))), "admin" === l.user_group ? i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(pe.a, {
                    key: qt.subheader,
                    subheader: i.a.createElement(be.a, {
                        disableGutters: !0,
                        disableSticky: !0
                    }, qt.subheader)
                }, Lt({
                    items: qt.items,
                    pathname: _.pathname
                })), i.a.createElement(me.a, {
                    mt: -1
                })) : "guest" === l.user_group ? i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, {
                    key: Mt.subheader,
                    subheader: i.a.createElement(be.a, {
                        disableGutters: !0,
                        disableSticky: !0
                    }, Mt.subheader)
                }, Lt({
                    items: Mt.items,
                    pathname: _.pathname
                }))) : i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, {
                    key: Bt.subheader,
                    subheader: i.a.createElement(be.a, {
                        disableGutters: !0,
                        disableSticky: !0
                    }, Bt.subheader)
                }, Lt({
                    items: Bt.items,
                    pathname: _.pathname
                })), i.a.createElement(me.a, {
                    mt: -1
                }), i.a.createElement(pe.a, {
                    key: Dt.subheader,
                    subheader: i.a.createElement(be.a, {
                        disableGutters: !0,
                        disableSticky: !0
                    }, Dt.subheader)
                }, Lt({
                    items: Dt.items,
                    pathname: _.pathname
                })))), i.a.createElement(ye.a, null)), i.a.createElement(me.a, {
                    flexGrow: 1
                }), i.a.createElement(ye.a, null));
                return i.a.createElement("div", {
                    className: c.root
                }, m ? i.a.createElement(i.a.Fragment, null, i.a.createElement(fe.a, {
                    classes: {
                        paper: c.desktopDrawer
                    },
                    variant: "persistent",
                    anchor: "left",
                    open: !1
                }, b)) : i.a.createElement(i.a.Fragment, null, i.a.createElement(de.a, null), i.a.createElement(Nt, Object.assign({
                    className: a ? c.root1 : c.root
                }, s), i.a.createElement(he.a, {
                    className: c.toolbar
                }, !0 === a && i.a.createElement($e.a, {
                    color: "inherit",
                    "aria-label": "open drawer",
                    onClick: g,
                    edge: "start",
                    className: Object(se.a)(c.menuButton, a)
                }, i.a.createElement(ht.a, {
                    fontSize: "large"
                })), !1 === a && i.a.createElement($e.a, {
                    color: "inherit",
                    "aria-label": "open drawer",
                    onClick: g,
                    edge: "start",
                    className: Object(se.a)(c.menuButton, a)
                }, i.a.createElement(_e.a, {
                    fontSize: "large"
                })), i.a.createElement(me.a, {
                    display: "flex"
                }, i.a.createElement(Se.a, {
                    src: u,
                    className: c.avatar
                }), i.a.createElement(me.a, {
                    ml: 1
                }), i.a.createElement(ke.a, {
                    smDown: !0
                }, i.a.createElement(me.a, {
                    ml: .5
                }, i.a.createElement(me.a, {
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    alignContent: "end"
                }, i.a.createElement(ge.a, {
                    variant: "h6",
                    textAlign: "left",
                    color: "textPrimary"
                }, "" + l["custom:organization_name"]), i.a.createElement(me.a, {
                    mr: 1
                })), i.a.createElement(me.a, {
                    display: "flex",
                    mt: -.2
                }, i.a.createElement(ge.a, {
                    variant: "body2",
                    textAlign: "left",
                    color: "textSecondary"
                }, "" + l["custom:institution_name"]))))), i.a.createElement(me.a, {
                    ml: 2,
                    flexGrow: 1
                }), i.a.createElement(yt, null), i.a.createElement(me.a, {
                    ml: 2
                }, i.a.createElement(Pe, null)))), i.a.createElement(fe.a, {
                    classes: {
                        paper: c.desktopDrawer
                    },
                    variant: "persistent",
                    anchor: "left",
                    open: a
                }, b)))
            };
            Ut.defaultProps = {
                onMobileNavOpen: () => {}
            };
            var Qt = Ut;
            const Gt = Object(z.a)(e => ({
                root: {
                    backgroundColor: e.palette.background.dark,
                    height: "100%",
                    overflow: "hidden",
                    width: "100%"
                },
                wrapper: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 64,
                    [e.breakpoints.up("lg")]: {
                        paddingLeft: 256,
                        transitionDuration: 500
                    }
                },
                wrapper1: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 64,
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                mobile: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 0,
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                contentContainer: {
                    flex: "1 1 auto",
                    overflow: "auto"
                }
            }));
            var Wt = e => {
                let {
                    children: t
                } = e;
                const a = Gt(),
                    [o, r] = Object(n.useState)(!1),
                    [d, s] = Object(n.useState)(!0),
                    c = Object(te.a)(),
                    _ = Object(ae.a)(c.breakpoints.down("xs"));
                return i.a.createElement("div", {
                    className: a.root
                }, i.a.createElement(Qt, {
                    open: d,
                    setOpen: s,
                    isMobileNavOpen: o,
                    onMobileNavOpen: () => r(!0)
                }), _ && i.a.createElement(ne.a, {
                    onMobileClose: () => r(!1),
                    openMobile: o
                }), _ ? i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                    className: a.mobile
                }, i.a.createElement("div", {
                    className: a.contentContainer
                }, i.a.createElement("div", {
                    className: a.content
                }, t)))) : i.a.createElement("div", {
                    className: d ? a.wrapper : a.wrapper1
                }, i.a.createElement("div", {
                    className: a.contentContainer
                }, i.a.createElement("div", {
                    className: a.content
                }, t))))
            };
            const Kt = Object(z.a)(e => ({
                root: {
                    backgroundColor: e.palette.background.dark,
                    height: "100%",
                    overflow: "hidden",
                    width: "100%"
                },
                wrapper: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 64,
                    [e.breakpoints.up("lg")]: {
                        paddingLeft: 256,
                        transitionDuration: 500
                    }
                },
                wrapper1: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 64,
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                mobile: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 0,
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                contentContainer: {
                    flex: "1 1 auto",
                    overflow: "auto"
                }
            }));
            var Ht = e => {
                let {
                    children: t
                } = e;
                const a = Kt(),
                    [o, r] = Object(n.useState)(!1),
                    [d, s] = Object(n.useState)(!0),
                    c = Object(te.a)(),
                    _ = Object(ae.a)(c.breakpoints.down("xs"));
                return i.a.createElement("div", {
                    className: a.root
                }, i.a.createElement(Qt, {
                    open: d,
                    setOpen: s,
                    isMobileNavOpen: o,
                    onMobileNavOpen: () => r(!0)
                }), _ ? i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                    className: a.mobile
                }, i.a.createElement("div", {
                    className: a.contentContainer
                }, i.a.createElement("div", {
                    className: a.content
                }, t)))) : i.a.createElement("div", {
                    className: d ? a.wrapper : a.wrapper1
                }, i.a.createElement("div", {
                    className: a.contentContainer
                }, i.a.createElement("div", {
                    className: a.content
                }, t))))
            };
            Object(z.a)(e => ({
                root: {
                    backgroundColor: e.palette.background.dark,
                    height: "100%",
                    overflow: "hidden",
                    width: "100%"
                },
                wrapper: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                wrapper1: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                mobile: {
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    paddingTop: 0,
                    transitionDuration: 500,
                    [e.breakpoints.up("lg")]: {
                        transitionDuration: 500
                    }
                },
                contentContainer: {
                    flex: "1 1 auto",
                    overflow: "auto"
                }
            }));
            var Jt = e => {
                let {
                    children: t
                } = e;
                const {
                    isAuthenticated: a
                } = Object(re.a)(), {
                    message: n
                } = Object(re.a)();
                return a ? a && "UserNotConfirmed" == n ? i.a.createElement(E.a, {
                    to: "/confirmSignUpp"
                }) : a && "NEW_PASSWORD_REQUIRED" == n ? i.a.createElement(E.a, {
                    to: "/reset_password"
                }) : i.a.createElement(i.a.Fragment, null, t) : i.a.createElement(E.a, {
                    to: "/login"
                })
            };
            var Vt = e => {
                    let {
                        children: t
                    } = e;
                    const {
                        isAuthenticated: a,
                        user: n
                    } = Object(re.a)();
                    return a ? i.a.createElement(E.a, {
                        to: "" + (n && ("admin" === n.user_group || "guest" === n.user_group) ? "/app/admin/newevents" : "/app/admin/campus")
                    }) : i.a.createElement(i.a.Fragment, null, t)
                },
                Yt = a(240);
            const Zt = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return i.a.createElement(n.Suspense, {
                    fallback: i.a.createElement(Yt.a, {
                        open: !0
                    })
                }, i.a.createElement(E.d, null, e.map((e, t) => {
                    const a = e.guard || n.Fragment,
                        o = e.layout || n.Fragment,
                        r = e.component;
                    return i.a.createElement(E.b, {
                        key: t,
                        path: e.path,
                        exact: e.exact,
                        render: t => i.a.createElement(a, null, i.a.createElement(o, null, e.routes ? Zt(e.routes) : i.a.createElement(r, t)))
                    })
                })))
            };
            var Xt = [{
                    exact: !0,
                    path: "/404",
                    component: Object(n.lazy)(() => a.e(84).then(a.bind(null, 2017)))
                }, {
                    exact: !0,
                    path: "/accessdenied",
                    component: Object(n.lazy)(() => a.e(83).then(a.bind(null, 2018)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/login",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(10), a.e(16)]).then(a.bind(null, 1940)))
                }, {
                    exact: !0,
                    path: "/privacy_policy",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(82)]).then(a.bind(null, 2027)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/apply/:admission_id",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(63), a.e(86)]).then(a.bind(null, 2028)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/signUp",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(64), a.e(87)]).then(a.bind(null, 2029)))
                }, {
                    exact: !0,
                    path: "/login-unprotected",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(10), a.e(81)]).then(a.bind(null, 2030)))
                }, {
                    exact: !0,
                    path: "/reset_password",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(79)]).then(a.bind(null, 2031)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/forgot",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(70)]).then(a.bind(null, 2032)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/confirm",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(67)]).then(a.bind(null, 2033)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/confirmSignUp",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(71)]).then(a.bind(null, 2034)))
                }, {
                    exact: !0,
                    guard: Vt,
                    path: "/confirmSignUpp",
                    component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(72)]).then(a.bind(null, 2035)))
                }, {
                    path: "/app/admin/academics/assignment",
                    guard: Jt,
                    layout: Ht,
                    routes: [{
                        exact: !0,
                        path: "/app/admin/academics/assignment/:course/:task_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(43), a.e(57)]).then(a.bind(null, 2067)))
                    }]
                }, {
                    path: "/app",
                    guard: Jt,
                    layout: Wt,
                    routes: [{
                        exact: !0,
                        path: "/app/admin/idcard",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(3), a.e(49), a.e(53)]).then(a.bind(null, 2079)))
                    }, {
                        exact: !0,
                        path: "/app/admin/calendar",
                        component: Object(n.lazy)(() => Promise.all([a.e(8), a.e(34), a.e(80)]).then(a.bind(null, 2080)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/TechnicalSkills",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(47)]).then(a.bind(null, 2061)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Internships",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(9), a.e(31)]).then(a.bind(null, 2057)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Projects",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(9), a.e(29)]).then(a.bind(null, 2062)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Accomplishments",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(4), a.e(27)]).then(a.bind(null, 2050)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Social",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(52)]).then(a.bind(null, 2068)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Language",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(51)]).then(a.bind(null, 2063)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(4), a.e(28)]).then(a.bind(null, 2049)))
                    }, {
                        exact: !0,
                        path: "/app/admin/certificates",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(24)]).then(a.bind(null, 2052)))
                    }, {
                        exact: !0,
                        path: "/app/admin/documents",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(7), a.e(8), a.e(32)]).then(a.bind(null, 2072)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academics",
                        component: Object(n.lazy)(() => Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(30)]).then(a.bind(null, 2053)))
                    }, {
                        exact: !0,
                        path: "/app/admin/courses",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(14), a.e(36)]).then(a.bind(null, 2069)))
                    }, {
                        exact: !0,
                        path: "/app/admin/courseSearch",
                        component: Object(n.lazy)(() => Promise.all([a.e(1), a.e(37), a.e(65)]).then(a.bind(null, 2058)))
                    }, {
                        exact: !0,
                        path: "/app/admin/courses/:course",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(14), a.e(69)]).then(a.bind(null, 1961)))
                    }, {
                        exact: !0,
                        path: "/app/admin/more",
                        component: Object(n.lazy)(() => Promise.all([a.e(3), a.e(15), a.e(62)]).then(a.bind(null, 2081)))
                    }, {
                        exact: !0,
                        path: "/app/admin/campus",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(15), a.e(46)]).then(a.bind(null, 2041)))
                    }, {
                        exact: !0,
                        path: "/app/admin/profile/Experience",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(5), a.e(9), a.e(35)]).then(a.bind(null, 2059)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academics/:course/:term",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(4), a.e(7), a.e(12)]).then(a.bind(null, 2073)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academics/summer/:course/:term",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(4), a.e(7), a.e(12)]).then(a.bind(null, 2073)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academic/:course/:term",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(4), a.e(7), a.e(8), a.e(13)]).then(a.bind(null, 2074)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academic/summer/:course/:term",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(4), a.e(7), a.e(8), a.e(13)]).then(a.bind(null, 2074)))
                    }, {
                        exact: !0,
                        path: "/app/admin/academics/lab/:course_code",
                        component: Object(n.lazy)(() => Promise.all([a.e(50), a.e(85)]).then(a.bind(null, 2082)))
                    }, {
                        exact: !0,
                        path: "/app/admin/payments",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(22)]).then(a.bind(null, 2054)))
                    }, {
                        exact: !0,
                        path: "/app/admin/payments/:order_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(6), a.e(11)]).then(a.bind(null, 1926)))
                    }, {
                        exact: !0,
                        path: "/app/admin/notifytesting",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(23)]).then(a.bind(null, 2051)))
                    }, {
                        exact: !0,
                        path: "/app/admin/notifytesting/:id",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(4), a.e(66)]).then(a.bind(null, 2042)))
                    }, {
                        exact: !0,
                        path: "/app/admin/notifications",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(75), a.e(77)]).then(a.bind(null, 2083)))
                    }, {
                        exact: !0,
                        path: "/app/admin/exams",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(21)]).then(a.bind(null, 2060)))
                    }, {
                        exact: !0,
                        path: "/app/admin/exams/:order_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(6), a.e(25)]).then(a.bind(null, 1934)))
                    }, {
                        exact: !0,
                        path: "/app/admin/exams/payments/:order_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(6), a.e(11)]).then(a.bind(null, 1926)))
                    }, {
                        exact: !0,
                        path: "/app/admin/manage_order/:order_id/:tab_value",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(4), a.e(17), a.e(33)]).then(a.bind(null, 2075)))
                    }, {
                        exact: !0,
                        path: "/app/admin/transactions/:transaction_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(3), a.e(4), a.e(17), a.e(26)]).then(a.bind(null, 2084)))
                    }, {
                        exact: !0,
                        path: "/app/admin/resume",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(40), a.e(48)]).then(a.bind(null, 2070)))
                    }, {
                        exact: !0,
                        path: "/app/admin/feedback",
                        component: Object(n.lazy)(() => a.e(58).then(a.bind(null, 2076)))
                    }, {
                        exact: !0,
                        path: "/app/admin/groups",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(44)]).then(a.bind(null, 2077)))
                    }, {
                        exact: !0,
                        path: "/app/admin/account",
                        component: Object(n.lazy)(() => Promise.all([a.e(2), a.e(7), a.e(68), a.e(45)]).then(a.bind(null, 2085)))
                    }, {
                        exact: !0,
                        path: "/app/admin/feedback/:id",
                        component: Object(n.lazy)(() => Promise.all([a.e(74), a.e(76)]).then(a.bind(null, 2086)))
                    }, {
                        exact: !0,
                        path: "/app/admin/feedback/:id/:course_code/form/:feedback_obj_id",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(59), a.e(73)]).then(a.bind(null, 2087)))
                    }, {
                        exact: !0,
                        path: "/app/admin/institution",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(4), a.e(54), a.e(78)]).then(a.bind(null, 2055)))
                    }, {
                        exact: !0,
                        path: "/app/fee/order/:id/success",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(6), a.e(39), a.e(61)]).then(a.bind(null, 2088)))
                    }, {
                        exact: !0,
                        path: "/app/fee/exam/order/:id/success",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(6), a.e(42), a.e(56)]).then(a.bind(null, 2089)))
                    }, {
                        exact: !0,
                        path: "/app/fee/order/:id/failure",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(6), a.e(38), a.e(60)]).then(a.bind(null, 2090)))
                    }, {
                        exact: !0,
                        path: "/app/fee/exam/order/:id/failure",
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(6), a.e(41), a.e(55)]).then(a.bind(null, 2091)))
                    }]
                }, {
                    path: "*",
                    routes: [{
                        exact: !0,
                        path: "/",
                        guard: Vt,
                        component: Object(n.lazy)(() => Promise.all([a.e(0), a.e(1), a.e(10), a.e(16)]).then(a.bind(null, 1940)))
                    }, {
                        component: () => i.a.createElement(E.a, {
                            to: "/404"
                        })
                    }]
                }],
                ea = a(189);
            a(1266), a(1379);
            Object(z.a)(e => ({
                root: {
                    backgroundColor: e.palette.common.black,
                    color: e.palette.common.white,
                    maxWidth: 600,
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    margin: e.spacing(3),
                    padding: e.spacing(3),
                    outline: "none",
                    zIndex: 2e3
                },
                action: {
                    backgroundColor: e.palette.common.white,
                    color: e.palette.common.black
                }
            }));
            var ta = a(591),
                aa = a(1386),
                na = a(1387),
                ia = a(1388),
                oa = a(335),
                ra = a(523),
                da = a(253),
                sa = a(329),
                ca = a(328),
                _a = a(252),
                la = a.n(_a);
            const ua = Object(n.forwardRef)((function(e, t) {
                    return i.a.createElement(ta.a, Object.assign({
                        direction: "up",
                        ref: t
                    }, e))
                })),
                pa = Object(z.a)(e => ({
                    root: {
                        maxWidth: 420,
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        outline: "none",
                        zIndex: 2e3,
                        padding: e.spacing(3),
                        backgroundColor: e.palette.background.paper
                    }
                }));
            var ma = () => {
                pa();
                const e = Object(ea.a)(),
                    [t, a] = Object(n.useState)(!1),
                    {
                        saveSettings: o
                    } = J(),
                    [r, d] = Object(n.useState)(""),
                    {
                        user: s
                    } = Object(re.a)(),
                    [c, l] = Object(n.useState)(null),
                    [p, m] = Object(n.useState)(!0),
                    g = Object(n.useCallback)(async () => {
                        try {
                            m(!0), l(null);
                            const {
                                data: e
                            } = await ca.a.query({
                                query: sa.Eb,
                                variables: {
                                    user_email: "" + s.email
                                },
                                fetchPolicy: "cache-first"
                            }).then(e => e);
                            l(e.get_student_by_email), m(!1)
                        } catch (e) {}
                    }, [e]);
                Object(n.useEffect)(() => {
                    g()
                }, [g]);
                const b = () => {
                        const e = navigator.userAgent.toLowerCase();
                        console.log("UA", e, la.a), e.includes("android") && e.includes("chrome") ? (console.log("hit android chrome"), window.location.href = `intent://settings/siteDetails?site=${window.location.origin}#Intent;scheme=chrome;package=com.android.chrome;end`, alert("Please enable notifications in Settings:\nSettings \u2192 Notifications \u2192 Zudent \u2192 Allow Notifications.")) : e.includes("chrome") ? (console.log("hit chrome"), alert('\ud83d\udd14 Please enable notifications:\n1. Click the lock icon in the address bar.\n2. Go to "Site settings".\n3. Set Notifications to Allow.')) : e.includes("iphone") || e.includes("ipad") ? (console.log("hit iphone"), alert("\ud83d\udd14 Please enable notifications in iOS Settings:\nSettings \u2192 Notifications \u2192 Zudent \u2192 Allow Notifications.")) : (console.log("hit browser"), alert("Please enable notifications in Settings:\nSettings \u2192 Notifications \u2192 Zudent \u2192 Allow Notifications."))
                    },
                    y = Object(ra.a)({
                        apiKey: "AIzaSyC1BnBoAf1NB2ccwTp1L6w9UHeZjFxrKEU",
                        authDomain: "rove-erp.firebaseapp.com",
                        projectId: "rove-erp",
                        storageBucket: "rove-erp.firebasestorage.app",
                        messagingSenderId: "695569836848",
                        appId: "1:695569836848:web:d0399e38922bffd905f6f5",
                        measurementId: "G-12FSTEGQC8"
                    });
                Object(n.useEffect)(() => {
                    !/iphone|ipad|ipod/i.test(navigator.userAgent) || window.matchMedia("(display-mode: standalone)").matches || "undefined" !== typeof navigator.standalone && !0 === navigator.standalone ? "undefined" !== typeof Notification && !p && c && ("granted" === Notification.permission || "default" === Notification.permission && a(!0)) : console.log("[DEBUG] Skipping Firebase Messaging \u2014 unsupported on iOS Safari browser")
                }, [p, c]);
                const f = async () => {
                    console.log("subscription");
                    try {
                        const e = Object(da.a)(y);
                        let t = await Object(da.b)(e, {
                            vapidKey: "BG_uNxdrgE2K5CKgn4bow2Igzqh1LJU3NJKZYLf8biyzUEiPXC2isLt1SMb6HQEyt1HNBV9jAx2eUlbjmad-ppU"
                        });
                        if (t || (console.warn("FCM token null, retrying in 2 seconds..."), await new Promise(e => setTimeout(e, 2e3)), t = await Object(da.b)(e, {
                                vapidKey: "BG_uNxdrgE2K5CKgn4bow2Igzqh1LJU3NJKZYLf8biyzUEiPXC2isLt1SMb6HQEyt1HNBV9jAx2eUlbjmad-ppU"
                            })), t) {
                            console.log("FCM Token:", t);
                            const e = {
                                fcm_token: t,
                                device_info: la.a.description,
                                institution_id: s["custom:institution_id"],
                                student_id: c._id,
                                field: "subscribe_notiification",
                                userId: s.Username
                            };
                            console.log(e);
                            let a = await u.a.post("https://d0a6a43wu7.execute-api.ap-south-1.amazonaws.com/prod/subscribe_push_notification", {
                                fcm_token: t,
                                device_info: la.a.description,
                                institution_id: s["custom:institution_id"],
                                student_id: c._id,
                                field: "subscribe_notiification",
                                userId: s.Username
                            });
                            console.log(a)
                        } else console.log("No registration token available.")
                    } catch (e) {
                        console.log(e), console.log("An error occurred while retrieving token. ", e)
                    }
                };
                return t ? i.a.createElement(i.a.Fragment, null, !p && i.a.createElement(aa.a, {
                    open: t,
                    TransitionComponent: ua,
                    keepMounted: !0,
                    PaperProps: {
                        style: {
                            padding: 16
                        }
                    }
                }, i.a.createElement(na.a, {
                    style: {
                        fontWeight: "bold"
                    }
                }, "Enable Notifications"), i.a.createElement(ia.a, null, i.a.createElement(ge.a, {
                    variant: "body2",
                    color: "textSecondary"
                }, "Turn on notifications to get instant updates about courses, exams, results, and deadlines.")), i.a.createElement(me.a, {
                    display: "flex",
                    justifyContent: "center",
                    my: 2
                }, i.a.createElement(oa.a, {
                    color: "blue",
                    variant: "contained",
                    size: "medium",
                    onClick: async () => {
                        if ("default" === Notification.permission) {
                            const e = await Notification.requestPermission();
                            "granted" === e ? (console.log("\u2705 Permission granted, now register token with backend"), d("Notifications enabled!"), _.a.set("settingsUpdated", "true"), f(), a(!1)) : "denied" === e && b()
                        } else "denied" === Notification.permission && b()
                    },
                    label: "Enable"
                })))) : null
            };
            var ga = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 768;
                    const [t, a] = Object(n.useState)(window.innerWidth <= e);
                    return Object(n.useEffect)(() => {
                        const t = () => {
                            a(window.innerWidth <= e)
                        };
                        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
                    }, [e]), t
                },
                ba = a(587),
                ya = a.n(ba);
            var fa = () => i.a.createElement(me.a, {
                style: {
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 24,
                    background: "linear-gradient(135deg, #e3f2fd, #fff)",
                    textAlign: "center"
                }
            }, i.a.createElement(ya.a, {
                style: {
                    fontSize: 90,
                    color: "#1976d2",
                    marginBottom: 20
                }
            }), i.a.createElement(ge.a, {
                variant: "h4",
                style: {
                    fontWeight: 700,
                    marginBottom: 16
                }
            }, "Mobile View Only"), i.a.createElement(ge.a, {
                variant: "body1",
                style: {
                    maxWidth: 420,
                    color: "#555",
                    marginBottom: 24
                }
            }, "This app is optimised for mobile devices. Please open it on your mobile phone for the best experience."));
            const ha = Object(w.b)({
                    plugins: [...Object(P.a)().plugins, j()()]
                }),
                $a = Object(x.a)();
            var Sa = () => {
                const {
                    enqueueSnackbar: e
                } = Object(O.b)(), {
                    settings: t
                } = J(), a = (Object(ea.a)(), function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = ee.find(t => t.name === e.theme);
                    t || ([t] = ee);
                    let a = Object(Y.a)(b.a.merge({}, X, t, {
                        direction: e.direction
                    }));
                    return e.responsiveFontSizes && (a = Object(Z.a)(a)), a
                }({
                    direction: t.direction,
                    responsiveFontSizes: t.responsiveFontSizes,
                    theme: t.theme
                })), n = () => {
                    window.location.reload(!1)
                };
                window.addEventListener("offline", (function(t) {
                    e("Internet not Connected", {
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "center",
                            autoHideDuration: null
                        },
                        autoHideDuration: null,
                        variant: "error",
                        action: i.a.createElement(C.a, {
                            onClick: n
                        }, "Refresh")
                    })
                })), window.addEventListener("online", (function(e) {}));
                return ga() ? i.a.createElement(A.a, {
                    theme: a
                }, i.a.createElement(T.b, {
                    jss: ha
                }, i.a.createElement(R.a, {
                    utils: I.a
                }, i.a.createElement(O.a, {
                    dense: !1,
                    maxSnack: 3
                }, i.a.createElement(E.c, {
                    history: $a
                }, i.a.createElement(H.a, null, i.a.createElement(M, null), i.a.createElement(B, null), i.a.createElement(U, null), i.a.createElement(ma, null), i.a.createElement(K, null), Zt(Xt))))))) : i.a.createElement(fa, null)
            };
            a(261);
            a(512).config();
            const ka = a(1247);
            Object(s.a)();
            let Ea = "",
                xa = "";
            u.a.interceptors.request.use(e => {
                    const t = _.a.get("accessToken"),
                        a = _.a.get("idToken"),
                        n = _.a.get("rfsrt");
                    return t && (e.headers = {
                        Authorization: "accessToken " + t,
                        IdToken: a,
                        RefreshToken: n
                    }), e
                }), ka.default(u.a, async e => {
                    const t = _.a.get("rfsrt"),
                        a = {
                            headers: {
                                rfsrt: t
                            },
                            withCredentials: !0,
                            skipAuthRefresh: !0
                        },
                        n = {
                            rfsrt: t,
                            app_name: "student"
                        };
                    return await u.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/tokenRefresh", n, {
                        options: a
                    }).then(t => (Ea = t.data.auth.access_token, xa = t.data.auth.id_token, e.response.config.headers.Authorization = "accessToken " + xa, _.a.set("accessToken", Ea), _.a.set("idToken", xa), Promise.resolve()))
                }, {
                    pauseInstanceWhileRefreshing: !0
                }), "development" !== Object({
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
                }).REACT_APP_NODE_ENV && (console.log = () => {}), r.a.render(i.a.createElement(d.a, {
                    store: gt
                }, i.a.createElement(S, null, i.a.createElement(O.a, {
                    dense: !1,
                    maxSnack: 3
                }, i.a.createElement(Sa, null)))), document.getElementById("root")),
                function(e) {
                    if ("projection" === Object({
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
                        }).REACT_APP_NODE_ENV && "serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", () => {
                            const t = "/service-worker.js";
                            p ? (! function(e, t) {
                                fetch(e).then(a => {
                                    const n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then(e => {
                                        e.unregister().then(() => {
                                            window.location.reload()
                                        })
                                    }) : m(e, t)
                                }).catch(() => {})
                            }(t, e), navigator.serviceWorker.ready.then(() => {})) : m(t, e)
                        })
                    }
                }()
        },
        161: function(e) {
            e.exports = JSON.parse('{"nav_top_bar":{"navbar_background_color":"#002352","navbar_button_hover":"#173660","navbar_divider_color":"#173660","textColor":"#ffffff","topbar_background_color":"#FFFFFF","topbar_menu_button_color":"#000000","typography_topbar_heading":"textPrimary","typography_topbar_sub_heading":"textSecondary","topbar_selection_icon_color":"#002F6D","topbar_selection_background_color":"#f4f6f8"},"login_page":{"backgroundImage":"url(/static/backgroundplain1.png)","textColor":"#ffffff","button_color":"#062213","detail_text_color":"#385F92","leftImage":"url(/static/1.png)","rightImage":"url(/static/2.png)"},"signup_page":{"backgroundImage":"url(/static/2.png)","leftImage":"url(/static/1.png)","rightImage":"url(/static/2.png)"},"all_pages":{"default":"#ffffff","background":"#f4f6f8","dashboard_view_button_background":"#eeeeee","dashboard_view_card_background":"#ffffff"},"Header":{"marginTop":60}}')
        },
        189: function(e, t, a) {
            "use strict";
            var n = a(0);
            t.a = () => {
                const e = Object(n.useRef)(!0);
                return Object(n.useEffect)(() => () => {
                    e.current = !1
                }, []), e
            }
        },
        239: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return y
            }));
            var n = a(0),
                i = a.n(n),
                o = a(240),
                r = a(22),
                d = a.n(r),
                s = a(261),
                c = a.n(s),
                _ = a(33),
                l = a.n(_),
                u = a(36);
            a(512).config();
            const p = {
                    isAuthenticated: !1,
                    isInitialised: !1,
                    user: null,
                    summary: null,
                    image: null
                },
                m = (e, t, a) => {
                    e ? (d.a.set("accessToken", e), l.a.defaults.headers.common.Authorization = "Bearer " + e, l.a.defaults.headers.common.refreshToken = t, l.a.defaults.headers.common.idToken = a) : (d.a.remove("accessToken"), d.a.remove("rfsrt"), d.a.remove("idToken"), delete l.a.defaults.headers.common.Authorization)
                },
                g = (e, t) => {
                    switch (t.type) {
                        case "INITIALISE":
                            {
                                const {
                                    isAuthenticated: a,
                                    user: n,
                                    institution: i,
                                    image: o
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: a,
                                    isInitialised: !0,
                                    user: n,
                                    institution: i,
                                    image: o
                                }
                            }
                        case "LOGIN":
                            {
                                const {
                                    user: a,
                                    message: n,
                                    image: i,
                                    institution: o
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: !0,
                                    user: a,
                                    institution: o,
                                    message: n,
                                    image: i
                                }
                            }
                        case "NEW_PASSWORD":
                            {
                                const {
                                    user: a,
                                    message: n
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: !0,
                                    user: a,
                                    message: n
                                }
                            }
                        case "SIGN_UP":
                            {
                                const {
                                    user: a,
                                    message: n
                                } = t.payload;
                                return { ...e,
                                    user: a,
                                    message: n
                                }
                            }
                        case "ADMISSION_SCHEDULE":
                            {
                                const {
                                    user: a,
                                    message: n
                                } = t.payload;
                                return { ...e,
                                    user: a,
                                    message: n
                                }
                            }
                        case "CONFIRM_SIGN_UP":
                            {
                                const {
                                    user: a,
                                    message: n
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: !0,
                                    user: a,
                                    message: n
                                }
                            }
                        case "LOGOUT":
                            return { ...e,
                                isAuthenticated: !1,
                                user: null,
                                image: null
                            };
                        case "ERROR":
                            {
                                const {
                                    err: a
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: !1,
                                    err: a
                                }
                            }
                        case "REGISTER":
                            {
                                const {
                                    user: a
                                } = t.payload;
                                return { ...e,
                                    isAuthenticated: !0,
                                    user: a
                                }
                            }
                        case "FORGOT_PASSWORD":
                        case "CONFIRM_FORGOT_PASSWORD":
                            return { ...e,
                                isAuthenticated: !1,
                                user: null,
                                image: null
                            };
                        default:
                            return { ...e
                            }
                    }
                },
                b = Object(n.createContext)({ ...p,
                    method: "JWT",
                    login: () => Promise.resolve(),
                    reset_password: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    register: () => Promise.resolve(),
                    forgot_password: () => Promise.resolve(),
                    confirm_forgot_password: () => Promise.resolve(),
                    signUp: () => Promise.resolve(),
                    applyStudent: () => Promise.resolve(),
                    getAdmissionDetails: () => Promise.resolve()
                }),
                y = e => {
                    let {
                        children: t
                    } = e;
                    const a = Object(u.g)(),
                        [r, s] = Object(n.useReducer)(g, p);
                    const _ = new c.a.S3,
                        y = e => {
                            var t = "";
                            return [].slice.call(new Uint8Array(e)).forEach(e => t += String.fromCharCode(e)), window.btoa(t)
                        };
                    return Object(n.useEffect)(() => {
                        (async () => {
                            try {
                                const n = d.a.get("accessToken");
                                if (n && (e => !!e)(n)) {
                                    let i;
                                    m(n), i = await l.a.get("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/test/continuity"), console.log("response", i);
                                    const o = i.data.payload;
                                    var e = await _.getObject({
                                            Bucket: "erpinstitution",
                                            Key: `${i.data.payload["custom:institution_id"]}/logo/${i.data.payload["custom:institution_id"]}`
                                        }).promise().then(e => e || null).catch(e => {}),
                                        t = null,
                                        a = null;
                                    void 0 !== e && (a = `data:${e.contentType};base64,`, t = y(e.Body)), s({
                                        type: "INITIALISE",
                                        payload: {
                                            isAuthenticated: !0,
                                            user: o,
                                            institution: "",
                                            image: a + t
                                        }
                                    })
                                } else s({
                                    type: "INITIALISE",
                                    payload: {
                                        isAuthenticated: !1,
                                        user: null,
                                        institution: null
                                    }
                                })
                            } catch (n) {
                                s({
                                    type: "INITIALISE",
                                    payload: {
                                        isAuthenticated: !1,
                                        user: null,
                                        institution: null
                                    }
                                })
                            }
                        })()
                    }, []), r.isInitialised ? i.a.createElement(b.Provider, {
                        value: { ...r,
                            method: "JWT",
                            login: async (e, t) => {
                                let a;
                                e && window.localStorage.setItem("user_email_for_confirmsignup_login", e), a = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/signin", {
                                    user_email: e,
                                    password: t,
                                    app_name: "student"
                                }), console.log("response", a), a.data.session_key && (window.localStorage.setItem("session", a.data.session_key), window.localStorage.setItem("username", e), s({
                                    type: "LOGIN",
                                    payload: {
                                        message: a.data.message
                                    }
                                })), m(a.data.access_token, a.data.refresh_token, a.data.id_token), d.a.set("rfsrt", a.data.refresh_token), d.a.set("idToken", a.data.id_token);
                                var n = await _.getObject({
                                    Bucket: "erpinstitution",
                                    Key: ""
                                }).promise().then(e => e || null).catch(e => {});
                                if (void 0 === n) s({
                                    type: "LOGIN",
                                    payload: {
                                        user: a.data.payload || "",
                                        message: a.data.message,
                                        image: null,
                                        isAuthenticated: !0
                                    }
                                }), window.location.reload();
                                else {
                                    var i = `data:${n.contentType};base64,`,
                                        o = y(n.Body);
                                    s({
                                        type: "LOGIN",
                                        payload: {
                                            user: a.data.payload,
                                            message: a.data.message,
                                            image: i + o,
                                            isAuthenticated: !0
                                        }
                                    }), window.location.reload()
                                }
                            },
                            logout: async () => {
                                await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/logout").then(e => {
                                    m(null)
                                }).catch(e => {
                                    m(null)
                                }), s({
                                    type: "LOGOUT"
                                })
                            },
                            register: async (e, t, a) => {
                                const n = await l.a.post("/api/account/register", {
                                        email: e,
                                        name: t,
                                        password: a
                                    }),
                                    {
                                        accessToken: i,
                                        user: o
                                    } = n.data;
                                window.localStorage.setItem("accessToken", i), s({
                                    type: "REGISTER",
                                    payload: {
                                        user: o
                                    }
                                })
                            },
                            reset_password: async e => {
                                let t;
                                const a = {
                                    session_key: window.localStorage.getItem("session"),
                                    user_email: window.localStorage.getItem("username"),
                                    password: e,
                                    app_name: "student"
                                };
                                t = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/newPassword", a), window.localStorage.removeItem("session"), window.localStorage.removeItem("username"), d.a.set("rfsrt", t.data.refresh_token), d.a.set("idToken", t.data.id_token), s({
                                    type: "NEW_PASSWORD",
                                    payload: {
                                        user: t.data.payload,
                                        message: t.data.message,
                                        isAuthenticated: !0
                                    }
                                })
                            },
                            forgot_password: async e => {
                                let t;
                                const n = {
                                    user_email: e,
                                    app_name: "student"
                                };
                                t = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/forgotPassword", n), a.push("/confirm"), window.localStorage.setItem("user_email", e), s({
                                    type: "FORGOT_PASSWORD",
                                    payload: {
                                        user: t.data.payload
                                    }
                                })
                            },
                            confirm_forgot_password: async (e, t, a) => {
                                try {
                                    let n;
                                    const i = {
                                        user_email: e,
                                        code: t,
                                        password: a,
                                        app_name: "student"
                                    };
                                    n = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/confirmForgotPassword", i), s({
                                        type: "CONFIRM_FORGOT_PASSWORD",
                                        payload: {
                                            user: n.data.payload
                                        }
                                    })
                                } catch (n) {
                                    s({
                                        type: "ERROR",
                                        payload: {
                                            err: n.response.data.message
                                        }
                                    })
                                }
                            },
                            signUp: async (e, t, n) => {
                                let i;
                                window.localStorage.setItem("signupusername", t);
                                const o = {
                                    user_email: t,
                                    app_name: "student",
                                    student_name: e,
                                    password: n
                                };
                                i = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/signup", o), a.push("/confirmSignUp"), window.localStorage.setItem("user_email", t), s({
                                    type: "SIGN_UP",
                                    payload: {
                                        user: i.data.payload
                                    }
                                })
                            },
                            applyStudent: async e => {
                                let t;
                                window.localStorage.setItem("signupusername", e.user_email), t = await l.a.post("https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/apply_admission", e), a.push("/confirmSignUp"), s({
                                    type: "SIGN_UP",
                                    payload: {
                                        user: t.data.payload
                                    }
                                })
                            },
                            getAdmissionDetails: async e => {
                                let t;
                                t = await l.a.post("https://d0a6a43wu7.execute-api.ap-south-1.amazonaws.com/prod/decrypt_admission_id", e), s({
                                    type: "ADMISSION_SCHEDULE",
                                    payload: {
                                        user: t.data
                                    }
                                })
                            }
                        }
                    }, t) : i.a.createElement(o.a, {
                        open: !0
                    })
                };
            t.b = b
        },
        240: function(e, t, a) {
            "use strict";
            var n = a(0),
                i = a.n(n),
                o = a(594),
                r = a(39),
                d = a(595),
                s = a(127),
                c = a(312),
                _ = a.n(c),
                l = a(602),
                u = a(1259);
            const p = Object(o.a)(e => ({
                root: {
                    alignItems: "center",
                    backgroundColor: e.palette.background.dark,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    left: 0,
                    padding: e.spacing(3),
                    position: "fixed",
                    top: 0,
                    width: "100%"
                },
                backdrop: {
                    zIndex: e.zIndex.drawer + 1,
                    color: "#fff",
                    backgroundColor: Object(u.a)(e.palette.background.default, .5)
                }
            }));
            t.a = e => {
                let {
                    handleClose: t,
                    open: a,
                    text: n
                } = e;
                const o = p(),
                    c = Object(r.a)(),
                    u = Object(d.a)(c.breakpoints.down("xs"));
                return i.a.createElement(s.a, {
                    style: {
                        backgroundColor: "transparent"
                    },
                    maxWidth: "xs",
                    onClose: t,
                    open: a,
                    BackdropComponent: l.a
                }, i.a.createElement("div", {
                    style: {
                        backgroundColor: "transparent",
                        outline: "none"
                    }
                }, i.a.createElement(l.a, {
                    className: o.backdrop,
                    open: a
                }, u ? i.a.createElement(s.a, {
                    justifyContent: "center",
                    m: 3,
                    display: "flex",
                    justifyItems: "center",
                    padding: "5px",
                    mb: n ? 1 : 3
                }, i.a.createElement("img", {
                    src: _.a,
                    alt: "",
                    height: 40,
                    width: 40
                })) : i.a.createElement(s.a, {
                    justifyContent: "center",
                    m: 5,
                    display: "flex",
                    justifyItems: "center",
                    padding: "5px",
                    mb: n ? 1 : 5
                }, i.a.createElement("img", {
                    src: _.a,
                    alt: "",
                    height: 40,
                    width: 40
                })))))
            }
        },
        294: function(e, t) {},
        312: function(e, t, a) {
            e.exports = a.p + "static/media/CircularLoader.a21746f5.gif"
        },
        328: function(e, t, a) {
            "use strict";
            var n = a(175),
                i = a(225),
                o = a(586),
                r = a(255),
                d = a(10),
                s = a(43);
            var c = {
                aws_appsync_graphqlEndpoint: "https://studentapidev.rovelabs.com/graphql",
                aws_appsync_region: "ap-south-1",
                aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
                aws_appsync_apiKey: "da2-memdzawmgzak7gq74rfxf6u5ba"
            };
            var _ = {
                    aws_appsync_graphqlEndpoint: "https://studentapi.rovelabs.com/graphql",
                    aws_appsync_region: "ap-south-1",
                    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
                    aws_appsync_apiKey: "da2-lgiofkk2e5eqbd53j4vrbxhf6y"
                },
                l = a(22),
                u = a.n(l),
                p = a(33),
                m = a.n(p),
                g = a(317),
                b = a.n(g),
                y = _.aws_appsync_graphqlEndpoint,
                f = _.aws_appsync_region,
                h = {
                    type: _.aws_appsync_authenticationType,
                    jwtToken: async () => "" + u.a.get("idToken")
                },
                $ = "https://jwa0stlj67.execute-api.ap-south-1.amazonaws.com/prod/tokenRefresh";
            const S = new r.HttpLink({
                    uri: y
                }),
                k = Object(o.a)(e => {
                    var t;
                    let {
                        graphQLErrors: a,
                        networkError: n,
                        operation: i,
                        forward: o
                    } = e;
                    if (a && "Token has expired." === (null === (t = a[0]) || void 0 === t ? void 0 : t.message)) return new d.a(async e => {
                        try {
                            const n = u.a.get("rfsrt"),
                                r = {
                                    headers: {
                                        rfsrt: n
                                    },
                                    withCredentials: !0,
                                    skipAuthRefresh: !0
                                },
                                d = {
                                    rfsrt: n,
                                    app_name: "student"
                                },
                                s = await m.a.post($, d, {
                                    options: r
                                });
                            var t = s.data.data.AccessToken,
                                a = s.data.data.IdToken;
                            u.a.set("accessToken", t), u.a.set("idToken", a), i.setContext({
                                headers: {
                                    authorization: a
                                }
                            });
                            const c = {
                                next: e.next.bind(e),
                                error: e.error.bind(e),
                                complete: e.complete.bind(e)
                            };
                            o(i).subscribe(c)
                        } catch (n) {
                            e.error(n)
                        }
                    })
                }),
                E = s.a.from([Object(n.createAuthLink)({
                    url: y,
                    region: f,
                    auth: h
                }), k, Object(i.createSubscriptionHandshakeLink)({
                    url: y,
                    region: f,
                    auth: h
                }, S)]),
                x = new r.ApolloClient({
                    link: E,
                    cache: new r.InMemoryCache({
                        addTypename: !1
                    }),
                    defaultOptions: {
                        watchQuery: {
                            fetchPolicy: "network-only"
                        },
                        query: {
                            fetchPolicy: "network-only"
                        }
                    }
                }),
                w = (new b.a({
                    url: c.aws_appsync_graphqlEndpoint,
                    region: c.aws_appsync_region,
                    auth: {
                        type: c.aws_appsync_authenticationType,
                        jwtToken: async () => "" + u.a.get("idToken")
                    },
                    cacheOptions: {
                        addTypename: !1
                    },
                    disableOffline: !0
                }), new b.a({
                    url: _.aws_appsync_graphqlEndpoint,
                    region: _.aws_appsync_region,
                    auth: {
                        type: _.aws_appsync_authenticationType,
                        jwtToken: async () => "" + u.a.get("idToken")
                    },
                    cacheOptions: {
                        addTypename: !1
                    },
                    disableOffline: !0
                })),
                v = "development" === Object({
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
                }).REACT_APP_NODE_ENV ? w : x;
            t.a = v
        },
        329: function(e, t, a) {
            "use strict";
            a.d(t, "Eb", (function() {
                return i
            })), a.d(t, "yb", (function() {
                return o
            })), a.d(t, "Y", (function() {
                return r
            })), a.d(t, "cb", (function() {
                return d
            })), a.d(t, "Nb", (function() {
                return s
            })), a.d(t, "ab", (function() {
                return c
            })), a.d(t, "Vb", (function() {
                return _
            })), a.d(t, "eb", (function() {
                return l
            })), a.d(t, "Gb", (function() {
                return u
            })), a.d(t, "Zb", (function() {
                return p
            })), a.d(t, "bc", (function() {
                return m
            })), a.d(t, "Mb", (function() {
                return g
            })), a.d(t, "Qb", (function() {
                return b
            })), a.d(t, "Fb", (function() {
                return y
            })), a.d(t, "Pb", (function() {
                return f
            })), a.d(t, "db", (function() {
                return h
            })), a.d(t, "Hb", (function() {
                return $
            })), a.d(t, "Ib", (function() {
                return S
            })), a.d(t, "Jb", (function() {
                return k
            })), a.d(t, "wb", (function() {
                return E
            })), a.d(t, "Rb", (function() {
                return x
            })), a.d(t, "Ab", (function() {
                return w
            })), a.d(t, "a", (function() {
                return v
            })), a.d(t, "gc", (function() {
                return j
            })), a.d(t, "n", (function() {
                return I
            })), a.d(t, "m", (function() {
                return O
            })), a.d(t, "H", (function() {
                return P
            })), a.d(t, "b", (function() {
                return C
            })), a.d(t, "hc", (function() {
                return A
            })), a.d(t, "p", (function() {
                return T
            })), a.d(t, "I", (function() {
                return R
            })), a.d(t, "o", (function() {
                return z
            })), a.d(t, "jc", (function() {
                return N
            })), a.d(t, "f", (function() {
                return q
            })), a.d(t, "x", (function() {
                return M
            })), a.d(t, "w", (function() {
                return D
            })), a.d(t, "M", (function() {
                return B
            })), a.d(t, "lc", (function() {
                return L
            })), a.d(t, "h", (function() {
                return F
            })), a.d(t, "B", (function() {
                return U
            })), a.d(t, "A", (function() {
                return Q
            })), a.d(t, "O", (function() {
                return G
            })), a.d(t, "mc", (function() {
                return W
            })), a.d(t, "k", (function() {
                return K
            })), a.d(t, "F", (function() {
                return H
            })), a.d(t, "E", (function() {
                return J
            })), a.d(t, "R", (function() {
                return V
            })), a.d(t, "nc", (function() {
                return Y
            })), a.d(t, "l", (function() {
                return Z
            })), a.d(t, "q", (function() {
                return X
            })), a.d(t, "G", (function() {
                return ee
            })), a.d(t, "S", (function() {
                return te
            })), a.d(t, "X", (function() {
                return ae
            })), a.d(t, "Cb", (function() {
                return ne
            })), a.d(t, "Db", (function() {
                return ie
            })), a.d(t, "Yb", (function() {
                return oe
            })), a.d(t, "fb", (function() {
                return re
            })), a.d(t, "Bb", (function() {
                return de
            })), a.d(t, "T", (function() {
                return se
            })), a.d(t, "W", (function() {
                return ce
            })), a.d(t, "c", (function() {
                return _e
            })), a.d(t, "s", (function() {
                return le
            })), a.d(t, "r", (function() {
                return ue
            })), a.d(t, "J", (function() {
                return pe
            })), a.d(t, "lb", (function() {
                return me
            })), a.d(t, "nb", (function() {
                return ge
            })), a.d(t, "jb", (function() {
                return be
            })), a.d(t, "gb", (function() {
                return ye
            })), a.d(t, "ac", (function() {
                return fe
            })), a.d(t, "mb", (function() {
                return he
            })), a.d(t, "kb", (function() {
                return $e
            })), a.d(t, "ib", (function() {
                return Se
            })), a.d(t, "vb", (function() {
                return ke
            })), a.d(t, "U", (function() {
                return Ee
            })), a.d(t, "ob", (function() {
                return xe
            })), a.d(t, "d", (function() {
                return we
            })), a.d(t, "ic", (function() {
                return ve
            })), a.d(t, "t", (function() {
                return je
            })), a.d(t, "u", (function() {
                return Ie
            })), a.d(t, "K", (function() {
                return Oe
            })), a.d(t, "Lb", (function() {
                return Pe
            })), a.d(t, "Wb", (function() {
                return Ce
            })), a.d(t, "Kb", (function() {
                return Ae
            })), a.d(t, "kc", (function() {
                return Te
            })), a.d(t, "g", (function() {
                return Re
            })), a.d(t, "y", (function() {
                return ze
            })), a.d(t, "z", (function() {
                return Ne
            })), a.d(t, "N", (function() {
                return qe
            })), a.d(t, "dc", (function() {
                return Me
            })), a.d(t, "ub", (function() {
                return De
            })), a.d(t, "fc", (function() {
                return Be
            })), a.d(t, "cc", (function() {
                return Le
            })), a.d(t, "qb", (function() {
                return Fe
            })), a.d(t, "e", (function() {
                return Ue
            })), a.d(t, "v", (function() {
                return Qe
            })), a.d(t, "L", (function() {
                return Ge
            })), a.d(t, "zb", (function() {
                return We
            })), a.d(t, "j", (function() {
                return Ke
            })), a.d(t, "D", (function() {
                return He
            })), a.d(t, "Q", (function() {
                return Je
            })), a.d(t, "ec", (function() {
                return Ve
            })), a.d(t, "i", (function() {
                return Ye
            })), a.d(t, "C", (function() {
                return Ze
            })), a.d(t, "P", (function() {
                return Xe
            })), a.d(t, "Tb", (function() {
                return et
            })), a.d(t, "V", (function() {
                return tt
            })), a.d(t, "rb", (function() {
                return at
            })), a.d(t, "bb", (function() {
                return nt
            })), a.d(t, "Ob", (function() {
                return it
            })), a.d(t, "Z", (function() {
                return ot
            })), a.d(t, "xb", (function() {
                return rt
            })), a.d(t, "hb", (function() {
                return dt
            })), a.d(t, "Xb", (function() {
                return st
            })), a.d(t, "sb", (function() {
                return ct
            })), a.d(t, "Sb", (function() {
                return _t
            })), a.d(t, "tb", (function() {
                return lt
            })), a.d(t, "Ub", (function() {
                return ut
            })), a.d(t, "pb", (function() {
                return pt
            }));
            var n = a(5);
            const i = n.a `
  query MyQuery($user_email: String!) {
    get_student_by_email(user_email: $user_email) {
      _id
      applicant_id
      temp_usn
      usn
      student_name
      user_email
      personal_email
      user_contact
      user_contact_verified
      user_id
      institution_id
      institution_name
      institution_short_name
      organization_id
      organization_name
      stage
      status
      created_at
      updated_at
      core_detail_verify
      entrance_exam_verify
      contact_detail_verify
      parent_detail_verify
      education_detail_verify
      admitted_at
      final_verify
      language_selected
      father_details {
        name
        email
        pan_no
        mobile_no
        address_line1
        address_line2
        pincode
        city
        state
        annual_income
        pan_no
      }
      mother_details {
        name
      }
      college_details {
        aggregate
        board
        name
        subject_marks {
          max_marks
          min_marks
          obtained_marks
          subject_name
        }
        max_marks
        marks_obtained
      }
      updated_by {
        user_name
      }
      created_by {
        user_name
        user_id
      }
      admitted_by {
        user_id
        user_name
      }
      verified_by {
        user_id
        user_name
      }
      school_details {
        aggregate
        board
        marks_obtained
        max_marks
        subject_marks {
          max_marks
          min_marks
          subject_name
          obtained_marks
        }
        name
      }
      documents_submitted {
        duplicate
        name
        original
      }
      current_address {
        address_line1
        address_line2
        city
        country
        district
        pincode
        state
      }
      core_detail {
        adm_batch
        admission_type
        current_term
        admission_year
        fee_batch
        program
        year_of_study
        program_name
        quota
        school_level
        stream
        claimed_seat_category
        alloted_seat_category
      }

      permanent_address {
        address_line1
        address_line2
        country
        state
        district
        city
        pincode
      }

      personal_detail {
        aadhar_no
        area
        birth_country
        birth_place
        birth_state
        blood_group
        caste
        domicile_state
        date_of_birth
        disability_type
        gender
        is_economically_backward
        is_handicap
        is_nri
        mother_tongue
        nationality
        religion
        sub_caste
        emergency_contact_no
      }
    }
  }
`,
                o = n.a `
  query MyQuery($student_id: String! , $record_per_page : Int , $page_no : Int) {
    get_sent_notifications_by_student_id(student_id: $student_id , record_per_page : $record_per_page , page_no : $page_no) {
      title
      body
      status
      created_at
    }
    get_sent_notifications_count_by_student_id(student_id: $student_id) {
      count
    }
  }
`,
                r = n.a `
  query MyQuery($_id: String!) {
    get_course_by_id(_id: $_id) {
      section
      term
      program
      academic_year
      batch_name
      course_category
      course_type
      course_code
      course_name
      faculty_name
      attendance_freeze
    }
  }
`,
                d = n.a `
  query MyQuery($_id: String!) {
    get_course_group_by_id(_id: $_id) {
      section
      term
      
      academic_year
      
      course_category
      course_type
      course_code
      course_name
      faculty_name
      
    }
  }
`,
                s = n.a `
        query GetSummerCourseCo($course_reg_id: String) {
            get_summer_course_co(course_reg_id: $course_reg_id) {
              _id
                course_co {
                _id
                co_code
                co_value
      }
            }
          }
`,
                c = n.a `
  query MyQuery($batch_name: String!, $program: String!, $course_code: String!) {
    get_course_co(batch_name: $batch_name, program: $program, course_code: $course_code) {
      course_co {
        co_code
        co_value
      }
    }
  }
`,
                _ = n.a `
     query get_transaction_by_id($_id: String!) {
          get_transaction_by_id(_id: $_id) {
            _id
            payment_id
            pay_amount
            pay_status
            method
            mode
            user_email
            user_contact
            net_amount
            usn
            fee_category
            student_name
            refund_status
            amount_refunded
            created_at
            receipt_no
            captured_date
            offline_ref
            total_amount
            bank
            dd_cheque_date
            payments {
              method
              bank
              dd_cheque_date
              offline_ref
              pay_amount
            }
            order_id {
              order_id
              fee_due_amount
              fee_paid_amount
              academic_year
              fee_order_amount
              year_of_study
              _id
              term
              fee_type
            }
            created_by {
              user_email
              user_name
            }

            pay_records {
              amount_paid
              fee_head
            }
          }
        }
`,
                l = n.a `
  query MyQuery($course_reg_id: String!) {
    get_course_rules(course_reg_id: $course_reg_id) {
      _id
            activity_nos
            asmt_nos
            cie_agg_type
            course_code
            cie_weightage
            course_reg_id
            course_name
            max_cie_marks
            ia_nos
            max_see_marks
            max_total_marks
            min_cie_marks
            min_see_marks
            min_total_marks
            prescribed_activity_marks
            prescribed_asmt_marks
            prescribed_ia_marks
            see_weightage
            min_ia_marks
            min_asmt_marks
            min_activity_marks
    }
  }
`,
                u = n.a `
  query MyQuery(
    $student_id: String!
    $course_code: String!
    $term: Int!
    $course_reg_id: String!
  ) {
    get_student_course_cie(
      student_id: $student_id
      course_code: $course_code
      term: $term
      course_reg_id: $course_reg_id
    ) {
      total_cie
      ia_result {
       ia_doc
      due_date
        max_marks
        obtained_marks
        sr_no
        obtained_ia_marks
        task_name
        test_name
        test_date
        qp_status
        template_type
        job_pack_name
        max_marks
        status
        task_id
        student_response_collect
        question_list {
          sub_question_num
          sub_question_max_mark
          question_num
          score
        }
      }
      student_feedback {
        feedback_name
        feedback_status
      }
      result_entry {
        cie_marks
        grade
        grade_points
        result
        result_entered
        see_marks
      }
    }
  }
`,
                p = n.a `
  query MyQuery($student_id: String!, $course_code: String!, $term: Int!,$app_name:String) {
    student_wise_attendance(
      student_id: $student_id
      course_code: $course_code
      term: $term
      app_name: $app_name
    ) {
      classes_attended
      classes_held
      course_code
      course_name
      percentage_value
      disable_attendance_view
    }
  }
`,
                m = n.a `
  query MyQuery($student_id: String!, $_id: String!) {
    summer_group_wise_attendance(
      student_id: $student_id
      _id: $_id
    ) {
      classes_attended
      classes_held
      course_code
      course_name
      disable_attendance_view
      percentage_value
      
    }
  }
`,
                g = (n.a `
  query MyQuery(
    $term: Int!
    $course_code: String!
    $academic_year: String!
    $program: String!
    $section: String!
  ) {
    get_class_dates(
      academic_year: $academic_year
      course_code: $course_code
      program: $program
      section: $section
      term: $term
    ) {
      class_date
      end_time
      start_time
    }
  }
`, n.a `
  query MyQuery($student_id: String!, $term: Int!, $course_code: String!) {
    student_wise_attendance_detailed(
      student_id: $student_id
      course_code: $course_code
      term: $term
    ) {
      class_date
      start_time
      end_time
      courses {
        course_code
        attended
      }
    }
  }
`),
                b = n.a `
  query MyQuery($student_id: String!, $term: Int!, $course_code: String!) {
    summer_student_wise_attendance_detailed(
      student_id: $student_id
      course_code: $course_code
      term: $term
    ) {
      class_date
      start_time
      end_time
      courses {
        course_code
        attended
      }
    }
  }
`,
                y = n.a `
  query MyQuery($student_id: String!, $term: String!) {
    get_student_courses(student_id: $student_id, term: $term) {
      courses {
      faculty_name
        course_reg_id
        course_code
        course_name
        course_type
        total_cie
       
      }
    }
  }
`,
                f = n.a `
  query MyQuery($student_id: String!, $term: String!) {
    get_summer_student_courses(student_id: $student_id, term: $term) {
      courses {
      faculty_name
        course_reg_id
        course_code
        course_name
        course_type
        total_cie
       
      }
    }
  }
`,
                h = n.a `
  query MyQuery($_id: String!) {
    get_course_reg_by_student(student_id: $_id) {
      term
    }
  }
`,
                $ = (n.a `
  query MyQuery($_id: String!) {
    get_summer_student_courses(student_id: $_id) {
      term
    }
  }
`, n.a `
  query MyQuery($student_id: String!, $task_id: String!) {
    get_student_course_ia(student_id: $student_id, task_id: $task_id) {
      _id
      ia_no
      usn
      attended
      course_code
      course_category
      ia_doc
      doc_name
      doc_uploaded_at
      status
      obtained_ia_marks
      marks {
        attended
        question_num
        score
        selected
        sub_question_num
      }
      ia_breakup {
        question_num
        selected
        sub_question {
          attended
          score
          sub_question_num
        }
      }
    }
  }
`),
                S = (n.a `
  query MyQuery($student_id: String!, $course_code: String!) {
    get_student_course_asmt(
      student_id: $student_id
      course_code: $course_code
    ) {
      asmt_no
      asmt_marks
      course_code
      max_marks
    }
  }
`, n.a `
  query MyQuery($student_id: String!, $course_code: String!) {
    get_student_course_info(
      student_id: $student_id
      course_code: $course_code
    ) {
      asmt_avg
      classes_attended
      classes_held
      ia_avg
    }
  }
`),
                k = n.a `
  query MyQuery($student_id: String!, $course_code: String!) {
    get_student_lab_ia(student_id: $student_id, course_code: $course_code) {
      course_code
      student_name
      term
      usn
      obtained_ia_marks
      ia_no
      max_marks
      marks {
        score
        component
      }
    }
  }
`,
                E = (n.a `
  query MyQuery(
    $student_id: String!
    $course_code: String!
    $term: Int!
    $activity_no: Int!
    $academic_year: String!
  ) {
    get_student_course_activity(
      student_id: $student_id
      course_code: $course_code
      term: $term
      activity_no: $activity_no
      academic_year: $academic_year
    ) {
      _id
      activity_doc
      doc_name
      doc_uploaded_at
      status
      activity_marks
    }
  }
`, n.a `
  query MyQuery(
    $course_code: String!
    $term: Int!
    $activity_no: Int!
    $batch_name: String!
    $section: String!
  ) {
    get_activity_pattern(
      course_code: $course_code
      batch_name: $batch_name
      section: $section
      sr_no: $activity_no
      term: $term
    ) {
      activity_doc
      activity_num
      due_date
      description
      total_marks
      student_response_collect
    }
  }
`, n.a `
  query MyQuery($task_id: String!) {
    get_question_paper(task_id: $task_id) {
      _id
      template_type
      institution_id
      course_code
      batch_name
      test_num
      test_type
      test_term
      test_date
      status
      pattern
      qp_doc
      marks
      total_marks
      due_date
      due_date
      student_response_collect
      description
    }
  }
`),
                x = n.a `
  query MyQuery($task_id: String!) {
    get_task_by_obj_id(task_id: $task_id) {
      _id
      batch_name
      institution_id
      term
      sr_no
      task_name
      job_pack_name
      program
    }
  }
`,
                w = n.a `
  query MyQuery($user_email: String!) {
    get_std_by_email(user_email: $user_email) {
      _id
      summary
      skills {
        _id
        proficiency
        skill_name
        verified
      }
      project {
        _id
        title
        domain
        from_date
        to_date
        associated_with
        status
        description
        doc {
          _id
          file_path
          uploaded_date
        }
      }
      social_profile {
        _id
        social_media
        profile_link
        icon
      }
      languages_known {
        _id
        language_name
        proficiency
      }
      experience {
        _id
        currently_working
        description
        exp_type
        from_date
        industry
        location
        org_name
        title
        to_date
        doc {
          _id
          file_path
          uploaded_date
        }
      }
      internship {
        _id
        company_name
        title
        location
        from_date
        to_date
        doc {
          _id
          file_path
          uploaded_date
        }
      }
      certification {
        _id
        course_name
        issuing_authority
        certification_url
        certification_date
        licence_number
        has_expiry
        expiry_date
        has_score
        score
        score_type
        total_score
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
      conference {
        _id
        title
        organizer
        event_date
        location
        description
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
      patent {
        _id
        title
        patent_office
        patent_number
        patent_status
        filing_date
        description
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
      publication {
        _id
        title
        publisher
        publication_date
        url
        description
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
      test_score {
        _id
        test_name
        score_type
        score_obtained
        total_score
        rank
        percentile
        test_date
        associated_with
        description
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
      workshop {
        _id
        title
        organizer
        event_date
        location
        description
        doc {
          _id
          file_path
          uploaded_date
        }
        verified
      }
    }
  }
`,
                v = n.a `
  mutation add_certification(
    $_id: String!
    $certification: certification_obj_input
  ) {
    add_certification(_id: $_id, certification: $certification) {
      _id
    }
  }
`,
                j = n.a `
  mutation upload_certification_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_certification_doc(
      _id: $_id
      doc: $doc
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                I = n.a `
  mutation delete_certification_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_certification_doc(
      _id: $_id
      doc_id: $doc_id
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                O = n.a `
  mutation delete_certification($certification_id: String!, $_id: String!) {
    delete_certification(certification_id: $certification_id, _id: $_id) {
      _id
    }
  }
`,
                P = n.a `
  mutation edit_certification(
    $_id: String!
    $certification: certification_obj_input
    $certification_id: String!
  ) {
    edit_certification(
      _id: $_id
      certification: $certification
      certification_id: $certification_id
    ) {
      _id
    }
  }
`,
                C = n.a `
  mutation add_conference($_id: String!, $conference: conference_obj_input) {
    add_conference(_id: $_id, conference: $conference) {
      _id
    }
  }
`,
                A = n.a `
  mutation upload_conference_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_conference_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                T = n.a `
  mutation delete_conference_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_conference_doc(
      _id: $_id
      doc_id: $doc_id
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                R = n.a `
  mutation edit_conference(
    $_id: String!
    $conference: conference_obj_input
    $conference_id: String!
  ) {
    edit_conference(
      _id: $_id
      conference: $conference
      conference_id: $conference_id
    ) {
      _id
    }
  }
`,
                z = n.a `
  mutation delete_conference($conference_id: String!, $_id: String!) {
    delete_conference(conference_id: $conference_id, _id: $_id) {
      _id
    }
  }
`,
                N = n.a `
  mutation upload_patent_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_patent_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                q = n.a `
  mutation add_patent($_id: String!, $patent: patent_obj_input) {
    add_patent(_id: $_id, patent: $patent) {
      _id
    }
  }
`,
                M = n.a `
  mutation delete_patent_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_patent_doc(_id: $_id, doc_id: $doc_id, entity_id: $entity_id) {
      _id
    }
  }
`,
                D = n.a `
  mutation delete_patent($patent_id: String!, $_id: String!) {
    delete_patent(patent_id: $patent_id, _id: $_id) {
      _id
    }
  }
`,
                B = n.a `
  mutation edit_patent(
    $_id: String!
    $patent: patent_obj_input
    $patent_id: String!
  ) {
    edit_patent(_id: $_id, patent: $patent, patent_id: $patent_id) {
      _id
    }
  }
`,
                L = n.a `
  mutation upload_publication_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_publication_doc(
      _id: $_id
      doc: $doc
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                F = n.a `
  mutation add_publication($_id: String!, $publication: publication_obj_input) {
    add_publication(_id: $_id, publication: $publication) {
      _id
    }
  }
`,
                U = n.a `
  mutation delete_publication_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_publication_doc(
      _id: $_id
      doc_id: $doc_id
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                Q = n.a `
  mutation delete_publication($publication_id: String!, $_id: String!) {
    delete_publication(publication_id: $publication_id, _id: $_id) {
      _id
    }
  }
`,
                G = n.a `
  mutation edit_publication(
    $_id: String!
    $publication: publication_obj_input
    $publication_id: String!
  ) {
    edit_publication(
      _id: $_id
      publication: $publication
      publication_id: $publication_id
    ) {
      _id
    }
  }
`,
                W = n.a `
  mutation upload_test_score_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_test_score_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                K = n.a `
  mutation add_test_score($_id: String!, $test_score: test_score_obj_input) {
    add_test_score(_id: $_id, test_score: $test_score) {
      _id
    }
  }
`,
                H = n.a `
  mutation delete_test_score_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_test_score_doc(
      _id: $_id
      doc_id: $doc_id
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                J = n.a `
  mutation delete_test_score($test_score_id: String!, $_id: String!) {
    delete_test_score(test_score_id: $test_score_id, _id: $_id) {
      _id
    }
  }
`,
                V = n.a `
  mutation edit_test_score(
    $_id: String!
    $test_score: test_score_obj_input
    $test_score_id: String!
  ) {
    edit_test_score(
      _id: $_id
      test_score: $test_score
      test_score_id: $test_score_id
    ) {
      _id
    }
  }
`,
                Y = n.a `
  mutation upload_workshop_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_workshop_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                Z = n.a `
  mutation add_workshop($_id: String!, $workshop: workshop_obj_input) {
    add_workshop(_id: $_id, workshop: $workshop) {
      _id
    }
  }
`,
                X = n.a `
  mutation delete_workshop_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_workshop_doc(_id: $_id, doc_id: $doc_id, entity_id





      : $entity_id) {
      _id
    }
  }
`,
                ee = n.a `
  mutation delete_workshop($workshop_id: String!, $_id: String!) {
    delete_workshop(workshop_id: $workshop_id, _id: $_id) {
      _id
    }
  }
`,
                te = n.a `
  mutation edit_workshop(
    $_id: String!
    $workshop: workshop_obj_input
    $workshop_id: String!
  ) {
    edit_workshop(_id: $_id, workshop: $workshop, workshop_id: $workshop_id) {
      _id
    }
  }
`,
                ae = n.a `
  query get_certificates($student_id: String!
   $module_name : String , $app_name : String , $status : String
   $enable_student : Boolean
  ) {
    get_certificates(student_id: $student_id) {
      _id
      certificate_name
      status
      request_date
      generated_date
      usn
    }


    get_admission_forms(status : $status
              module_name : $module_name
              app_name : $app_name
enable_student : $enable_student
              ) {
              _id
                 form_name
                 description
                 status
                 created_at
                  property_layout {
      prop_name
      prop_type
      prop_key
      prop_value
      prop_required
      prop_editable
      prop_validation_regex
      prop_dropdown_values {
        drop_name
        drop_value
        drop_hex_code
      }
    }
                  created_by {
      user_name
    }
        notes {
          time
          version
          blocks {
            id
            type 
            withHeadings
            data {
              caption
              level
              stretched
              style
              text
              withBackground
              withBorder
              file {
                url
              }
              items {
                checked
                text
              }
            }
            content
          }
        }
              }
  }
`,
                ne = n.a `

 query get_student_admission_certificate($student_id: String! ,$_id: String!) {
            get_student_admission_certificate(student_id : $student_id , _id: $_id) {
              prop_dropdown_values {
      drop_name
      drop_value
      drop_hex_code
    }
    prop_editable
    prop_name
    prop_key
    prop_required
    prop_type
    prop_validation_regex
    prop_value
  
            }
          }`,
                ie = n.a `

 query get_student_admission_certificate_pdf($certificate_id: String! ,$form_name: String!) {
            get_student_admission_certificate_pdf(certificate_id : $certificate_id , form_name: $form_name) {
                  time
                  version
                  blocks {
                    id
                    type
                    withHeadings
                    data {
                      caption
                      level
                      stretched
                      style
                      text
                      withBackground
                      withBorder
                        file {
                            url
                        }
                      items {
                        checked
                        text
                      }
                  }
                  content
                }
  
            }
          }`,
                oe = n.a `
  mutation MyMutation(
                $student_name: String
                $usn: String
                $student_id: String,
                $certificate_name: String,
                $status: String,
                $payload: [custom_array_input]
                $section : String,
              ) {
                request_certificate(
                  usn: $usn
                  student_name: $student_name
                  student_id: $student_id
                  certificate_name: $certificate_name,
                  section: $section
                  status: $status,
                  payload: $payload
                ) {
                  _id
                  
                }
              }
`,
                re = n.a `
  query get_documents_student {
    get_documents_student {
     title
    file_path
    uploaded_at
    }
  }

`,
                de = n.a `
  query MyQuery($stream_code: String!) {
    get_stream_by_id(stream_code: $stream_code) {
      term_details {
        term_no
        term_name
        year
      }
      institution {
        address {
          city
          country
          postal_code
          state
          street
          street_2
        }
        contact {
          fax
          mobile
          phone
          website
          secondary_email
        }
        institution_name
        organization_name
        description_1
        description_2
        description_3
        logo_url
        director_name

        principal_name
        short_name
      }
    }
  }
`,
                se = n.a `
  query MyQuery($stream_code: String!) {
    get_academic_year_by_stream(stream_code: $stream_code, status: "active") {
      _id
      stream_code
      year_name
      status
      start_date
      end_date
    }
  }
`,
                ce = n.a `
  query get_certificate_payload($_id: String!) {
    get_certificate_payload(_id: $_id) {
      _id
      body
      ref_no
      generated_date
      request_date
      payload {
        key
        value
      }
    }
  }
`,
                _e = (n.a `
  mutation upload_experience_doc(
    $_id: String!
    $doc: doc_obj_input
    $experience_id: String!
  ) {
    upload_experience_doc(_id: $_id, doc: $doc, experience_id: $experience_id) {
      _id
    }
  }
`, n.a `
  mutation add_experience($_id: String!, $experience: experience_obj_input) {
    add_experience(_id: $_id, experience: $experience) {
      _id
    }
  }
`),
                le = n.a `
  mutation delete_experience_doc(
    $_id: String!
    $doc_id: String!
    $experience_id: String!
  ) {
    delete_experience_doc(
      _id: $_id
      doc_id: $doc_id
      experience_id: $experience_id
    ) {
      _id
    }
  }
`,
                ue = n.a `
  mutation delete_experience($experience_id: String!, $_id: String!) {
    delete_experience(experience_id: $experience_id, _id: $_id) {
      _id
    }
  }
`,
                pe = n.a `
  mutation edit_experience(
    $_id: String!
    $experience: experience_obj_input
    $experience_id: String!
  ) {
    edit_experience(
      _id: $_id
      experience: $experience
      experience_id: $experience_id
    ) {
      _id
    }
  }
`,
                me = n.a `
  query MyQuery($student_id: String!) {
    get_feedback_schedules(student_id: $student_id) {
      feedback_name
      feedback_status
      feedback_type
      term
      academic_year
      _id
    }
  }
`,
                ge = n.a `
  query MyQuery($student_id: String!) {
    get_group(student_id: $student_id) {
      _id
	    group_name       
	    member 
	    group_id 
	    global_id
	    crm_app_id 
      description
      in_trash
      status
	    app_name 
      group_category
      group_type
      group_term
	    module_name 
	    created_at 
	    updated_at 
	    customer_code
      form_layout_id 
	    customer_name
      registration_status
    }
  }
`,
                be = n.a `
  query MyQuery($_id: String!) {
    get_feedback_by_id(_id: $_id) {
      _id
      academic_year
      feedback_name
      feedback_type
      term
      feedback {
        _id
        course_code
        course_name
        faculty_email
        faculty_name
        status
        course_status
      }
    }
  }
`,
                ye = n.a `
  query MyQuery($user_email: String!) {
    get_employee_by_email(user_email: $user_email) {
      _id
      user_email
      user_id {
        _id
      }
      work_detail {
        designation
        department
      }
    }
  }
`,
                fe = n.a `
  mutation submit_feedback(
    $course_code: String!
    $feedback_obj_id: String!
    $feedback_id: String!
    $status: String!
    $user_email: String!
    $feedback_breakup: [feedback_question_obj_input]
  ) {
    submit_feedback(
      course_code: $course_code
      feedback_id: $feedback_id
      feedback_obj_id: $feedback_obj_id
      status: $status
      user_email: $user_email
      feedback_breakup: $feedback_breakup
    ) {
      _id
    }
  }
`,
                he = n.a `
  query MyQuery($course_code: String!, $feedback_id: String!) {
    get_feedback_schedule_by_id(
      feedback_id: $feedback_id
      course_code: $course_code
    ) {
      question_list {
        question_num
        question_value
        score
        answer
        question_type
        options {
          que_option
          que_score
        }
      }
    }
  }
`,
                $e = n.a `
  query MyQuery($feedback_id: String!) {
    get_feedback_by_id(_id: $feedback_id) {
      _id
      academic_year
      feedback_name
      feedback_type
      term
    }
  }
`,
                Se = n.a `
  query MyQuery($course_code: String!, $feedback_id: String!) {
    get_feedback_by_course(
      course_code: $course_code
      feedback_id: $feedback_id
    ) {
      course_code
      course_name
      faculty_email
      faculty_name

      feedback_breakup {
        score
        question_num
        _id
      }
      status
    }
  }
`,
                ke = n.a `
  query MyQuery(
    $program_code: String!
  
  ) {
    get_program_by_code(program_code: $program_code) {
      _id
      initial_intake
      year_of_start
      current_intake
      updated_by {
        user_id
        user_name
      }
      updated_At
      program_code
      program_name
      vision
      accrediation_status {
        _id
        name
        previous_visit
        status
        upcoming_visit
      }
      mission {
        _id
        detail
        code
      }
      peo {
        _id
        code
        detail
      }
    }
  }
`,
                Ee = n.a `
  query MyQuery(
    $batch_name: String!
    $stream_code: String!  
  ) {
    get_batch_by_name(batch_name: $batch_name, stream_code: $stream_code) {
      status
      po {
        code
        detail
      }
    }
  }
`,
                xe = n.a `
query get_tenant_by_id($institution_id : String) {
  get_tenant_by_id(institution_id: $institution_id) {
    _id
    address {
      city
      country
      state
      postal_code
      street_2
      street
    }
    contact {
      fax
      mobile
      phone
      secondary_email
      website
    }
    institution_id
    institution_name
    organization_name
    
    
    
  }
}
`,
                we = n.a `
  mutation add_internship($_id: String!, $internship: internship_obj_input) {
    add_internship(_id: $_id, internship: $internship) {
      _id
    }
  }
`,
                ve = n.a `
  mutation upload_internship_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_internship_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                je = n.a `
  mutation delete_internship($internship_id: String!, $_id: String!) {
    delete_internship(internship_id: $internship_id, _id: $_id) {
      _id
    }
  }
`,
                Ie = n.a `
  mutation delete_internship_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_internship_doc(
      _id: $_id
      doc_id: $doc_id
      entity_id: $entity_id
    ) {
      _id
    }
  }
`,
                Oe = n.a `
  mutation edit_internship(
    $_id: String!
    $internship: internship_obj_input
    $internship_id: String!
  ) {
    edit_internship(
      _id: $_id
      internship: $internship
      internship_id: $internship_id
    ) {
      _id
    }
  }
`,
                Pe = n.a `
  query MyQuery($student_id: String!) {
    get_student_orders_agg(student_id: $student_id) {
      due_amount
      paid_amount
      student_batch
      student_id
      usn
      student_name
      student_program
      student_status
      total_amount
      user_email
      student_quota
      father_contact
      mother_contact
      user_contact
      student_term
    }
  }
`,
                Ce = n.a `
  query MyQuery($student_id: String!) {
    get_wallet_by_student(student_id: $student_id) {
      wallet_amount
    }
  }
`,
                Ae = n.a `
  query get_student_orders($student_id: String!,$fee_type: String) {
    get_student_orders(student_id: $student_id
    fee_type:$fee_type) {
      _id
      exam_name
      academic_year
      student_batch
      student_name
      student_program
      student_status
      term
      user_email
      usn
      order_status
      order_id
      fee_due_amount
      fee_paid_amount
      fee_order_amount
      created_at
      captured_date
      fee_category
      fee_type
      year_of_study
      emi_status
      onhold
      confirm_status
      
      fee_schedule_id {
        fee_category
        term
        reval_status
      }
    }
  }
`,
                Te = n.a `
  mutation upload_project_doc(
    $_id: String!
    $doc: doc_obj_input
    $entity_id: String!
  ) {
    upload_project_doc(_id: $_id, doc: $doc, entity_id: $entity_id) {
      _id
    }
  }
`,
                Re = n.a `
  mutation add_project($_id: String!, $project: project_obj_input) {
    add_project(_id: $_id, project: $project) {
      _id
    }
  }
`,
                ze = n.a `
  mutation delete_project($project_id: String!, $_id: String!) {
    delete_project(project_id: $project_id, _id: $_id) {
      _id
    }
  }
`,
                Ne = n.a `
  mutation delete_project_doc(
    $_id: String!
    $doc_id: String!
    $entity_id: String!
  ) {
    delete_project_doc(_id: $_id, doc_id: $doc_id, entity_id: $entity_id) {
      _id
    }
  }
`,
                qe = n.a `
  mutation edit_project(
    $_id: String!
    $project: project_obj_input
    $project_id: String!
  ) {
    edit_project(_id: $_id, project: $project, project_id: $project_id) {
      _id
    }
  }
`,
                Me = n.a `
  mutation update_student($_id: String!, $profile_picture_updated: Boolean!) {
    update_student(
      _id: $_id

      profile_picture_updated: $profile_picture_updated
    ) {
      _id
    }
  }
`,
                De = n.a `
  query MyQuery($user_email: String!) {
    get_profile_progress(user_email: $user_email) {
      profile_progress
      core_detail_updated
      contact_detail_updated
      summary_updated
      language_updated
      social_profile_updated
      profile_picture_updated
    }
  }
`,
                Be = n.a `
  mutation update_user_contact($user_contact: String!, $user_email: String!) {
    update_user_contact(user_contact: $user_contact, user_email: $user_email) {
      _id
    }
  }
`,
                Le = n.a `
  mutation update_personal_email(
    $personal_email: String!
    $user_email: String!
  ) {
    update_personal_email(
      personal_email: $personal_email
      user_email: $user_email
    ) {
      _id
    }
  }
`,
                Fe = n.a `
  query MyQuery {
    get_languages {
      language_name
    }
  }
`,
                Ue = n.a `
  mutation add_languages_known(
    $_id: String!
    $languages_known: languages_known_obj_input
  ) {
    add_languages_known(_id: $_id, languages_known: $languages_known) {
      _id
    }
  }
`,
                Qe = n.a `
  mutation delete_languages_known($languages_known_id: String!, $_id: String!) {
    delete_languages_known(languages_known_id: $languages_known_id, _id: $_id) {
      _id
    }
  }
`,
                Ge = n.a `
  mutation edit_languages_known(
    $_id: String!
    $languages_known: languages_known_obj_input
    $languages_known_id: String!
  ) {
    edit_languages_known(
      _id: $_id
      languages_known: $languages_known
      languages_known_id: $languages_known_id
    ) {
      _id
    }
  }
`,
                We = n.a `
  query MyQuery {
    get_social_profile {
      social_media
    }
  }
`,
                Ke = n.a `
  mutation add_social_profile(
    $_id: String!
    $social_profile: social_profile_obj_input
  ) {
    add_social_profile(_id: $_id, social_profile: $social_profile) {
      _id
    }
  }
`,
                He = n.a `
  mutation delete_social_profile($social_profile_id: String!, $_id: String!) {
    delete_social_profile(social_profile_id: $social_profile_id, _id: $_id) {
      _id
    }
  }
`,
                Je = n.a `
  mutation edit_social_profile(
    $_id: String!
    $social_profile: social_profile_obj_input
    $social_profile_id: String!
  ) {
    edit_social_profile(
      _id: $_id
      social_profile: $social_profile
      social_profile_id: $social_profile_id
    ) {
      _id
    }
  }
`,
                Ve = n.a `
  mutation update_summary($_id: String!, $summary: String!) {
    update_summary(_id: $_id, summary: $summary) {
      _id
    }
  }
`,
                Ye = (n.a `
  query MyQuery($student_id: String!) {
    get_exams_by_student(student_id: $student_id) {
      _id
      exam {
        academic_year
        course_code
        course_name
        end_time
        start_time
        status
        term
        test_date
        test_name
        total_marks
      }
      is_started
      status
      completed_at
    }
  }
`, n.a `
  subscription MySubscription($exam_id: String!) {
    onExamChange(exam_id: $exam_id) {
      status
      _id
      exam_id
    }
  }
`, n.a `
  query MyQuery($exam_reg_id: String!) {
    get_exams_reg_by_id(exam_reg_id: $exam_reg_id) {
      _id
      exam {
        _id
        academic_year
        course_code
        course_name
        end_time
        start_time
        status
        term
        test_date
        test_name
        total_marks
        questions {
          question_no
        }
      }
      scored_marks
      answers {
        question_no
      }
      is_started
      status
    }
  }
`, n.a `
  query MyQuery($student_id: String!, $exam_id: String!) {
    get_seating_by_student(student_id: $student_id, exam_id: $exam_id) {
      student_obj {
        attended
        student_id
        usn
      }
      room_no
      block_no
      status
    }
  }
`, n.a `
  mutation start_exam($exam_reg_id: String!) {
    start_exam(exam_reg_id: $exam_reg_id) {
      _id
      exam_id
    }
  }
`, n.a `
  query MyQuery($exam_reg_id: String!) {
    get_exams_reg_by_id(exam_reg_id: $exam_reg_id) {
      _id
      exam {
        academic_year
        course_code
        course_name
        end_time
        start_time
        status
        term
        test_date
        test_name
        total_marks
        questions {
          question_no
        }
      }
      is_started
      status
      answers {
        is_opened
        question_no
        selected_option
      }
    }
  }
`, n.a `
  query MyQuery($exam_id: String!) {
    get_exam_by_id(exam_id: $exam_id) {
      _id
      academic_year
      course_code
      course_name
      end_time
      start_time
      status
      term
      test_date
      test_name
      total_marks
      questions {
        marks
        question_no
        question_type
        question_value
        correct_option
        options {
          option_id
          option_value
        }
      }
    }
  }
`, n.a `
  query MyQuery($exam_id: String!) {
    get_exam_by_id(exam_id: $exam_id) {
      _id
      academic_year
      course_code
      course_name
      end_time
      start_time
      status
      term
      test_date
      test_name
      total_marks
      questions {
        marks
        question_no
        question_type
        question_value
        options {
          option_id
          option_value
        }
      }
    }
  }
`, n.a `
  mutation mark_answer(
    $exam_reg_id: String!
    $selected_option: String!
    $question_no: Int!
  ) {
    mark_answer(
      selected_option: $selected_option
      exam_reg_id: $exam_reg_id
      question_no: $question_no
    ) {
      _id
    }
  }
`, n.a `
  mutation submit_exam($exam_reg_id: String!) {
    submit_exam(exam_reg_id: $exam_reg_id) {
      _id
      exam_id
      status
      student_id
      scored_marks
    }
  }
`, n.a `
  mutation add_skill($_id: String!, $skills: skills_obj_input) {
    add_skill(_id: $_id, skills: $skills) {
      _id
    }
  }
`),
                Ze = n.a `
  mutation delete_skill($skill_id: String!, $_id: String!) {
    delete_skill(skill_id: $skill_id, _id: $_id) {
      _id
    }
  }
`,
                Xe = n.a `
  mutation edit_skill(
    $_id: String!
    $skills: skills_obj_input
    $skill_id: String!
  ) {
    edit_skill(_id: $_id, skills: $skills, skill_id: $skill_id) {
      _id
    }
  }
`,
                et = n.a `
  query MyQuery($student_id: String!, $from_date: String!, $to_date: String!) {
    get_time_table_by_student(
      to_date: $to_date
      from_date: $from_date
      student_id: $student_id
    ) {
      day
      day_no
      date
      data {
        course_code
        end_time
        start_time
        faculty_name
        program
        section
        term
      }
    }
  }
`,
                tt = n.a `
  query MyQuery(
    $student_id: String!
    $from_date: String!
    $to_date: String!
    $event_type: String!
  ) {
    get_calendar_events_by_student(
      student_id: $student_id
      from_date: $from_date
      to_date: $to_date
      event_type: $event_type
    ) {
      date
      day
      day_no
      events {
        event_end_date
        event_end_time
        event_name
        event_description
        color
        event_card_pic
        timings
        frequency
        event_venue
        event_type
        event_start_time
        event_start_date
        posted_by {
          user_email
          user_name
        }
      }
    }
  }
`,
                at = n.a `
  query MyQuery($course_reg_id: String!) {
    get_lesson_plan(course_reg_id: $course_reg_id) {
      unit_no
      _id
      lessons {
        _id
        completed_date
        planned_date
        status
        topic
        date
      }
    }
  }
`,
                nt = (n.a `query MyQuery($course_reg_id: String!) {
        get_summer_lesson_plan(course_reg_id: $course_reg_id) {
          _id
          unit_no
          completion_percentage
          date
          lessons {
            _id
            topic
            planned_date
            completed_date
            status
            reason
            co
            teaching_methodology
           youtube_vedio_id
            date
          }
        }
}

`, n.a `
query MyQuery($course_reg_id: String!) {
  get_course_detail(course_reg_id: $course_reg_id) {
    _id
    documents {
      description
      _id
      title
      uploaded_date
      doc_info {
        doc_id
        file_path
        file_name
      }
    }
  }
}
`),
                it = n.a `
           query MyQuery($course_reg_id: String!) {
      get_summer_course_details(course_reg_id: $course_reg_id) {
        _id
        documents {
          _id
          title
          description
          uploaded_date
          doc_info {
            _id
            file_name
            file_path
            doc_id
          }
        }
      }
    }
        `,
                ot = n.a `
  query MyQuery($course_reg_id: String!) {
    get_course_by_id(_id: $course_reg_id) {
      section
      term
      program
      academic_year
      batch_name
      course_category
      course_type
      course_code
      course_name
      faculty_name
      attendance_freeze
    }
  }
`,
                rt = n.a `
  query get_receipt_by_no($receipt_no: String!) {
    get_receipt_by_no(receipt_no: $receipt_no) {
      payment_id
      pay_amount
      pay_status
      method
      mode
      user_email
      user_contact
      net_amount
      usn
      fee_category
      student_name
      refund_status
      amount_refunded
      created_at
      receipt_no
      captured_date
      offline_ref
      total_amount
      bank
      dd_cheque_date
      payments {
        method
        bank
        dd_cheque_date
        offline_ref
        pay_amount
        fee
      }
      order_id {
        order_id
        fee_due_amount
        fee_paid_amount
        fee_order_amount
        _id
        fee_type
        term
      }
      created_by {
        user_email
        user_name
      }
      student_id {
        user_contact
        core_detail {
          academic_batch
          academic_year
          adm_batch
          admission_type
          alloted_seat_category
          admission_year
          claimed_seat_category
          current_term
          exam_batch
          fee_batch
          program
          quota
          school_level
          stream
        }
        entrance_exam {
          reg_no
          rank
          fee_paid
          admission_order_no
          admission_order_date
          issued_date
          allotment_date
          last_date_joining
        }
      }
      pay_records {
        amount_paid
        fee_head
      }
    }
  }
`,
                dt = n.a `
  query get_exam_order_by_id($_id: String! ) {
    get_exam_order_by_id(_id: $_id) {
      regular_courses {
        _id
        course_name
        course_code
        fee_head
        fee_head_priority
        fee_head_amount
        fee_head_paid
        fee_head_due
        fee_head_discount
        fee_head_status
        selected
        editable
        photocopy
        reval
        course_term
        course_type
        applied
        course_credits
      }
      backlog_courses {
        _id
        course_name
        fee_head
        fee_head_priority
        course_code
        fee_head_amount
        fee_head_paid
        fee_head_due
        fee_head_discount
        fee_head_status
        selected
        editable
        photocopy
        reval
        course_term
        course_type
        applied
        course_credits
      }
      fee_setting {
        fee_head
        fee_head_amount
        editable
        selected
      }
    }
  }
`,
                st = (n.a `
  query MyQuery($user_email: String!, $semester: String!) {
    get_academics(semester: $semester, user_email: $user_email) {
      semester
      final_marks {
        credits
        external_marks
        grade
        grade_point
        internal_marks
        subject_code
        subject_name
        total_marks
      }
    }
  }
`, n.a `
  mutation MyMutation(
    $student_id: String
    $student_name: String
    $usn: String
    $certificate_name: String
    $status: String
    $payload: [custom_array_input]
    $section: String
  ) {
    request_certificate(
      usn: $usn
      student_name: $student_name
      student_id: $student_id
      certificate_name: $certificate_name
      status: $status
      section: $section
      payload: $payload
    ) {
      _id
    }
  }
`),
                ct = n.a `
  query MyQuery($lesson_plan_id: String!) {
    get_lesson_plan_by_id(lesson_plan_id: $lesson_plan_id) {
      _id
      topic
      unit_no
      doc {
        _id
        file_name
        file_path
      }
    }
  }
`,
                _t = n.a `
  query get_terms_condition_by_name($terms_type: String!) {
    get_terms_condition_by_name(terms_type: $terms_type) {
      terms_array
    }
  }
`,
                lt = n.a `
  query MyQuery($_id: String!) {
    get_order_by_id(_id: $_id) {
      _id
      order_id
      fee_type
      term
      reval_status
      update_course
      confirm_status
      year_of_study
      student_name
      fee_order_amount
      order_status
      student_program
      fee_category
      fee_paid_amount
      fee_due_amount
      created_at
      attempts
      min_amount
      partial_pay
      academic_year
      order_id
      usn
      onhold
      user_email
      created_by {
        user_email
        user_name
      }
      student_id {
        user_contact
        core_detail {
           academic_batch
                academic_year
                adm_batch
                admission_type
                alloted_seat_category
                admission_year
                claimed_seat_category
                current_term
                exam_batch
                fee_batch
                program
                quota
                school_level
                stream
        }
        _id
        core_detail {
          program
        }
      }
      term
      fee_schedule_id {
        fee_sched_status
        term
        reval_status
      }
      fee_particulars {
        _id
        fee_head
        fee_head_priority
        fee_head_amount
        fee_head_paid
        fee_head_due
        fee_head_discount
        fee_head_status
      }
    }
  }
`,
                ut = n.a `
  query MyQuery($order_id: String!) {
    get_transactions(order_id: $order_id) {
      _id
      payment_id
      pay_amount
      created_at
      pay_status
      pay_records {
        amount_paid
        fee_head
      }

      captured_date
      receipt_no
      usn
      student_name
      student_id {
        user_contact
        core_detail {
          academic_batch
          academic_year
          adm_batch
          admission_type
          alloted_seat_category
          admission_year
          claimed_seat_category
          current_term
          exam_batch
          fee_batch
          program
          quota
          school_level
          stream
        }
        entrance_exam {
          reg_no
          rank
          fee_paid
          admission_order_no
          admission_order_date
          issued_date
          allotment_date
          last_date_joining
        }
      }
    }
  }
`,
                pt = (n.a `
  query MyQuery($_id: String!, $fee_category: String!) {
    get_exam_fee_setting(fee_category: $fee_category, _id: $_id) {
      fee_category
      institution_id
      stream
      fee_structure {
        fee_head
        fee_head_amount
        fee_priority
      }
    }
  }
`, n.a `
query MyQuery($service_type: String!, $service_status: String! , $fee_category : String!) {
  get_integrations_by_institution(service_type: $service_type, service_status: $service_status, fee_category : $fee_category) {
    _id
    selected
    logo_url
    service_category
    service_name
    service_id
    service_type
    status
    description
    description_1
    description_2
    preferance
    mobile_icon_url
    created_by {
      user_name
    }
    created_at
    _id
  }
}
`)
        },
        331: function(e, t, a) {
            "use strict";
            t.a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                for (var t = e.toLowerCase().split(" "), a = 0; a < t.length; a++) t[a] = t[a].charAt(0).toUpperCase() + t[a].substring(1);
                return t.join(" ")
            }
        },
        335: function(e, t, a) {
            "use strict";
            var n = a(0),
                i = a.n(n),
                o = a(1281),
                r = a(26),
                d = a(127),
                s = a(325),
                c = a(156),
                _ = a(1275),
                l = a(1274),
                u = a(1284),
                p = a(1280),
                m = a(1283),
                g = a(1282),
                b = a(161);
            t.a = e => {
                let {
                    startIcon: t,
                    endIcon: a,
                    size: n,
                    disabled: y,
                    onClick: f,
                    label: h,
                    color: $,
                    variant: S,
                    icon: k,
                    options: E,
                    target: x,
                    href: w,
                    to: v,
                    loading: j,
                    ref: I,
                    type: O,
                    component: P,
                    ...C
                } = e;
                const A = (e => {
                        const t = {
                            small: {
                                paddingRight: "10px",
                                paddingLeft: "10px",
                                paddingTop: "3px",
                                paddingBottom: "3px",
                                iconSize: "16px",
                                loadingSize: 16,
                                iconPadding: "3px"
                            },
                            medium: {
                                paddingRight: "12px",
                                paddingLeft: "12px",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                iconSize: "20px",
                                loadingSize: 18,
                                iconPadding: "5px"
                            },
                            large: {
                                paddingRight: "14px",
                                paddingLeft: "14px",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                                iconSize: "22px",
                                loadingSize: 20,
                                iconPadding: "5px"
                            }
                        };
                        return t[e] || t.medium
                    })(n),
                    T = (e => ({
                        blue: {
                            backgroundColor: b.nav_top_bar.navbar_background_color,
                            hover: Object(r.c)(b.nav_top_bar.navbar_background_color, .8)
                        },
                        green: {
                            backgroundColor: "#2e7d32",
                            hover: Object(r.c)("#2e7d32", .8)
                        },
                        black: {
                            backgroundColor: "#000000",
                            hover: Object(r.c)("#000000", .8)
                        },
                        grey: {
                            backgroundColor: "#808080",
                            hover: Object(r.c)("#808080", .8)
                        },
                        red: {
                            backgroundColor: "#c62828",
                            hover: Object(r.c)("#c62828", .8)
                        },
                        yellow: {
                            backgroundColor: "#fbc02d",
                            hover: Object(r.c)("#fbc02d", .8)
                        }
                    }[e] || {
                        backgroundColor: e || b.nav_top_bar.navbar_background_color,
                        hover: Object(r.c)(e || b.nav_top_bar.navbar_background_color, .8)
                    }))($),
                    R = y || j,
                    [z, N] = i.a.useState(!1),
                    q = i.a.useRef(null),
                    [M, D] = i.a.useState(1),
                    B = e => {
                        q.current && q.current.contains(e.target) || N(!1)
                    };
                console.log(z);
                return i.a.createElement(i.a.Fragment, null, i.a.createElement(o.a, {
                    component: P,
                    to: v,
                    ref: I || q,
                    href: w,
                    target: x,
                    disabled: R,
                    variant: S,
                    onClick: () => {
                        E ? N(e => !e) : f && f()
                    },
                    size: n,
                    type: O,
                    sx: {
                        backgroundColor: R ? "" : "contained" == S ? T.backgroundColor : "",
                        "&:hover": {
                            backgroundColor: R ? "" : "contained" == S ? T.hover : "",
                            borderColor: R || "no-border" === S ? "" : T.backgroundColor,
                            border: "contained" === S || "no-border" === S ? "" : "1px solid " + T.backgroundColor
                        },
                        borderColor: R ? "" : "outlined" == S ? "#9e9e9e" : "",
                        color: R ? "" : "outlined" == S || "text" == S ? T.backgroundColor : "",
                        paddingTop: A.paddingTop,
                        paddingBottom: A.paddingBottom,
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none"
                    },
                    loadingPosition: "start"
                }, null == t && null == a && j && i.a.createElement(d.a, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                        paddingRight: A.iconPadding
                    }
                }, i.a.createElement(s.a, {
                    color: "disabled",
                    size: A.loadingSize
                })), t && i.a.createElement(d.a, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                        paddingRight: A.iconPadding
                    }
                }, j ? i.a.createElement(s.a, {
                    color: "disabled",
                    size: A.loadingSize
                }) : i.a.createElement(c.a, {
                    icon: t,
                    style: {
                        fontSize: A.iconSize
                    }
                })), h && i.a.createElement("span", null, h), k && i.a.createElement(c.a, {
                    icon: k,
                    style: {
                        fontSize: A.iconSize
                    }
                }), a && i.a.createElement(d.a, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                        paddingLeft: A.iconPadding
                    }
                }, j ? i.a.createElement(s.a, {
                    color: "disabled",
                    size: A.loadingSize
                }) : i.a.createElement(c.a, {
                    icon: a,
                    style: {
                        fontSize: A.iconSize
                    }
                }))), i.a.createElement(p.a, {
                    sx: {
                        zIndex: 1
                    },
                    open: z,
                    anchorEl: q.current,
                    role: void 0,
                    transition: !0,
                    disablePortal: !0
                }, e => {
                    let {
                        TransitionProps: t,
                        placement: a
                    } = e;
                    return i.a.createElement(l.a, Object.assign({}, t, {
                        style: {
                            transformOrigin: "bottom" === a ? "right top" : "right bottom"
                        }
                    }), i.a.createElement(u.a, null, i.a.createElement(_.a, {
                        onClickAway: B
                    }, i.a.createElement(g.a, {
                        id: "split-button-menu",
                        autoFocusItem: !0
                    }, E.map((e, t) => i.a.createElement(m.a, {
                        key: e,
                        onClick: () => e.onClick()
                    }, e.icon && i.a.createElement(i.a.Fragment, null, i.a.createElement(c.a, {
                        icon: e.icon,
                        style: {
                            fontSize: "20px"
                        }
                    }), i.a.createElement(d.a, {
                        mr: 1
                    })), e.option))))))
                }))
            }
        },
        338: function(e, t, a) {
            "use strict";
            t.a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.replace(/\s+/, " ").split(" ").slice(0, 2).map(e => e && e[0].toUpperCase()).join("")
            }
        },
        371: function(e, t, a) {
            "use strict";
            var n = a(0),
                i = a.n(n),
                o = a(36),
                r = a(127),
                d = a(594),
                s = a(1368),
                c = a(1267),
                _ = a(63),
                l = a(56),
                u = a(8),
                p = a(1263),
                m = a(1367),
                g = a(597);
            const b = Object(d.a)(e => ({
                    item: {
                        display: "flex",
                        alignItems: "center",
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    itemLeaf: {
                        display: "flex",
                        alignItems: "center",
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    button: {
                        color: e.palette.text.secondary,
                        justifyContent: "center",
                        textTransform: "none",
                        letterSpacing: 0,
                        width: "100%",
                        textAlign: "center"
                    },
                    buttonLeaf: {
                        color: e.palette.text.secondary,
                        borderTopWidth: 2,
                        justifyContent: "center",
                        textTransform: "none",
                        letterSpacing: 0,
                        width: "100%",
                        fontWeight: e.typography.fontWeightRegular,
                        "&.depth-0": {
                            "& $title": {
                                fontWeight: e.typography.fontWeightMedium
                            }
                        },
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center"
                    },
                    root2: {
                        width: "100%",
                        height: 2,
                        backgroundColor: e.palette.text.secondary,
                        marginTop: 0
                    },
                    icon: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: 25
                    },
                    title: {
                        marginRight: "auto",
                        whiteSpace: "nowrap",
                        fontSize: 5
                    },
                    active: {
                        color: e.palette.secondary.main,
                        borderTop: "2px solid " + e.palette.secondary.main,
                        "& $title": {
                            fontWeight: e.typography.fontWeightMedium
                        },
                        "& $icon": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: e.palette.primary.main,
                            fontWeight: "bold",
                            fontSize: 25
                        },
                        background: e.palette.background.dark,
                        height: "100%"
                    },
                    caption: {
                        fontSize: 10,
                        fontWeight: 200
                    }
                })),
                y = e => {
                    let {
                        children: t,
                        className: a,
                        depth: o,
                        href: d,
                        icon: s,
                        info: c,
                        open: _,
                        title: y,
                        ...f
                    } = e;
                    const h = b(),
                        [$, S] = Object(n.useState)(_),
                        k = () => {
                            S(e => !e)
                        };
                    let E = 8;
                    o > 0 && (E = 32 + 8 * o);
                    const x = {
                        padding: E
                    };
                    return t ? i.a.createElement(p.a, Object.assign({
                        className: Object(u.a)(h.item, a),
                        disableGutters: !0,
                        key: y
                    }, f), i.a.createElement(m.a, {
                        className: h.button,
                        onClick: k,
                        style: x
                    }, s && i.a.createElement(s, {
                        className: h.icon,
                        size: "30"
                    }))) : i.a.createElement(p.a, Object.assign({
                        className: Object(u.a)(h.itemLeaf, a),
                        disableGutters: !0,
                        key: y
                    }, f), i.a.createElement(m.a, {
                        activeClassName: h.active,
                        className: Object(u.a)(h.buttonLeaf, "depth-" + o),
                        component: l.b,
                        to: d,
                        fullHeight: !0,
                        elevation: 10
                    }, i.a.createElement(r.a, {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    }, s && i.a.createElement(s, {
                        className: h.icon
                    }), i.a.createElement(r.a, {
                        mt: -.1
                    }), i.a.createElement(g.a, {
                        variant: "caption",
                        className: h.caption,
                        style: {
                            fontWeight: "bold"
                        }
                    }, y))))
                };
            y.defaultProps = {
                open: !1
            };
            var f = y,
                h = a(560),
                $ = a.n(h),
                S = a(562),
                k = a.n(S),
                E = a(563),
                x = a.n(E),
                w = a(561),
                v = a.n(w),
                j = a(564),
                I = a.n(j),
                O = a(243),
                P = a.n(O),
                C = a(513),
                A = a.n(C),
                T = a(244),
                R = a.n(T),
                z = a(245),
                N = a.n(z),
                q = a(565),
                M = a.n(q);
            $.a, v.a, k.a, x.a, I.a;
            const D = [{
                items: [{
                    title: "Campus",
                    href: "/app/admin/campus",
                    icon: M.a
                }, {
                    title: "Profile",
                    href: "/app/admin/profile",
                    icon: A.a
                }, {
                    title: "Payments",
                    href: "/app/admin/payments",
                    icon: P.a
                }, {
                    title: "Courses",
                    href: "/app/admin/academics",
                    icon: R.a
                }, {
                    title: "Exams",
                    href: "/app/admin/exams",
                    icon: N.a
                }]
            }];

            function B(e) {
                let {
                    items: t,
                    pathname: a,
                    depth: n = 0
                } = e;
                return i.a.createElement(r.a, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }, t.map(e => {
                    const t = e.title + n;
                    if (e.items) {
                        const r = Object(o.f)(a, {
                            path: e.href + "/*",
                            exact: !1
                        });
                        return i.a.createElement(f, {
                            depth: n,
                            icon: e.icon,
                            info: e.info,
                            key: t,
                            open: Boolean(r),
                            title: e.title
                        }, B({
                            depth: n + 1,
                            pathname: a,
                            items: e.items
                        }))
                    }
                    return i.a.createElement(f, {
                        depth: n,
                        href: e.href,
                        icon: e.icon,
                        info: e.info,
                        key: t,
                        title: e.title
                    })
                }))
            }
            const L = Object(d.a)(() => ({
                mobileDrawer: {
                    width: "100%",
                    height: 55,
                    position: "fixed",
                    bottom: 0,
                    left: 0
                },
                desktopDrawer: {
                    width: "100%",
                    height: 60,
                    borderTop: "none",
                    position: "fixed",
                    boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.06)",
                    paddingTop: 0,
                    bottom: 0,
                    left: 0
                },
                avatar: {
                    cursor: "pointer",
                    width: 64,
                    height: 64
                }
            }));
            t.a = e => {
                let {
                    onMobileClose: t,
                    openMobile: a
                } = e;
                const d = L(),
                    l = Object(o.h)(),
                    {
                        user: u
                    } = Object(_.a)();
                return Object(n.useEffect)(() => {
                    a && t && t()
                }, [l.pathname]), i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, {
                    anchor: "bottom",
                    classes: {
                        paper: d.desktopDrawer
                    },
                    open: !0,
                    variant: "persistent",
                    style: {
                        overflowY: "hidden"
                    }
                }, "alumni" === u.user_group ? i.a.createElement(r.a, {
                    display: "flex",
                    style: {
                        overflowY: "hidden"
                    },
                    flexGrow: 1,
                    p: 0,
                    m: 0,
                    marginTop: -1,
                    paddingBottom: -1,
                    justifyContent: "center",
                    flexDirection: "row"
                }, D.map(e => i.a.createElement(c.a, {
                    key: e.subheader,
                    style: {
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "100%"
                    },
                    length: D.length
                }, B({
                    items: e.items,
                    pathname: l.pathname
                })))) : i.a.createElement(r.a, {
                    display: "flex",
                    style: {
                        overflowY: "hidden"
                    },
                    flexGrow: 1,
                    p: 0,
                    m: 0,
                    marginTop: -1,
                    mpaddingBottom: -1,
                    justifyContent: "center",
                    flexDirection: "row"
                }, D.map(e => i.a.createElement(c.a, {
                    key: e.subheader,
                    style: {
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "100%"
                    },
                    length: D.length
                }, B({
                    items: e.items,
                    pathname: l.pathname
                }))))))
            }
        },
        63: function(e, t, a) {
            "use strict";
            var n = a(0),
                i = a(239);
            t.a = () => Object(n.useContext)(i.b)
        },
        636: function(e, t, a) {
            e.exports = a(1249)
        },
        684: function(e, t, a) {}
    },
    [
        [636, 19, 20]
    ]
]);