! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (S, t) {
    "use strict";

    function m(t) {
        return null != t && t === t.window
    }
    var e = [],
        i = Object.getPrototypeOf,
        o = e.slice,
        g = e.flat ? function (t) {
            return e.flat.call(t)
        } : function (t) {
            return e.concat.apply([], t)
        },
        l = e.push,
        s = e.indexOf,
        n = {},
        a = n.toString,
        v = n.hasOwnProperty,
        r = v.toString,
        c = r.call(Object),
        y = {},
        b = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        C = S.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function w(t, e, i) {
        var n, s, a = (i = i || C).createElement("script");
        if (a.text = t, e)
            for (n in u)(s = e[n] || e.getAttribute && e.getAttribute(n)) && a.setAttribute(n, s);
        i.head.appendChild(a).parentNode.removeChild(a)
    }

    function f(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[a.call(t)] || "object" : typeof t
    }
    var d = "3.5.1",
        E = function (t, e) {
            return new E.fn.init(t, e)
        };

    function h(t) {
        var e = !!t && "length" in t && t.length,
            i = f(t);
        return !b(t) && !m(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    E.fn = E.prototype = {
        jquery: d,
        constructor: E,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            t = E.merge(this.constructor(), t);
            return t.prevObject = this, t
        },
        each: function (t) {
            return E.each(this, t)
        },
        map: function (i) {
            return this.pushStack(E.map(this, function (t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(E.grep(this, function (t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(E.grep(this, function (t, e) {
                return e % 2
            }))
        },
        eq: function (t) {
            var e = this.length,
                t = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= t && t < e ? [this[t]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, E.extend = E.fn.extend = function () {
        var t, e, i, n, s, a = arguments[0] || {},
            r = 1,
            o = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[r] || {}, r++), "object" == typeof a || b(a) || (a = {}), r === o && (a = this, r--); r < o; r++)
            if (null != (t = arguments[r]))
                for (e in t) i = t[e], "__proto__" !== e && a !== i && (l && i && (E.isPlainObject(i) || (n = Array.isArray(i))) ? (s = a[e], s = n && !Array.isArray(s) ? [] : n || E.isPlainObject(s) ? s : {}, n = !1, a[e] = E.extend(l, s, i)) : void 0 !== i && (a[e] = i));
        return a
    }, E.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            return !(!t || "[object Object]" !== a.call(t) || (t = i(t)) && ("function" != typeof (t = v.call(t, "constructor") && t.constructor) || r.call(t) !== c))
        },
        isEmptyObject: function (t) {
            for (var e in t) return !1;
            return !0
        },
        globalEval: function (t, e, i) {
            w(t, {
                nonce: e && e.nonce
            }, i)
        },
        each: function (t, e) {
            var i, n = 0;
            if (h(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        makeArray: function (t, e) {
            e = e || [];
            return null != t && (h(Object(t)) ? E.merge(e, "string" == typeof t ? [t] : t) : l.call(e, t)), e
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : s.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function (t, e, i) {
            for (var n = [], s = 0, a = t.length, r = !i; s < a; s++) !e(t[s], s) != r && n.push(t[s]);
            return n
        },
        map: function (t, e, i) {
            var n, s, a = 0,
                r = [];
            if (h(t))
                for (n = t.length; a < n; a++) null != (s = e(t[a], a, i)) && r.push(s);
            else
                for (a in t) null != (s = e(t[a], a, i)) && r.push(s);
            return g(r)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = e[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function (i) {
        function d(t, e) {
            return t = "0x" + t.slice(1) - 65536, e || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))
        }

        function n() {
            T()
        }
        var t, p, w, a, s, f, h, m, x, l, c, T, S, r, C, g, o, u, v, E = "sizzle" + +new Date,
            y = i.document,
            k = 0,
            b = 0,
            _ = lt(),
            M = lt(),
            L = lt(),
            P = lt(),
            A = function (t, e) {
                return t === e && (c = !0), 0
            },
            $ = {}.hasOwnProperty,
            e = [],
            D = e.pop,
            O = e.push,
            z = e.push,
            I = e.slice,
            j = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            V = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)",
            H = new RegExp(F + "+", "g"),
            q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            X = new RegExp("^" + F + "*," + F + "*"),
            Y = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            W = new RegExp(F + "|>"),
            G = new RegExp(B),
            J = new RegExp("^" + R + "$"),
            U = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + V),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            tt = /^[^{]+\{\s*\[native \w/,
            et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            it = /[+~]/,
            nt = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
            st = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            at = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            rt = yt(function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            z.apply(e = I.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (t) {
            z = {
                apply: e.length ? function (t, e) {
                    O.apply(t, I.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, i, n) {
            var s, a, r, o, l, c, u, d = e && e.ownerDocument,
                h = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return i;
            if (!n && (T(e), e = e || S, C)) {
                if (11 !== h && (l = et.exec(t)))
                    if (s = l[1]) {
                        if (9 === h) {
                            if (!(r = e.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (d && (r = d.getElementById(s)) && v(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (l[2]) return z.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return z.apply(i, e.getElementsByClassName(s)), i
                    } if (p.qsa && !P[t + " "] && (!g || !g.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t, d = e, 1 === h && (W.test(t) || Y.test(t))) {
                        for ((d = it.test(t) && mt(e.parentNode) || e) === e && p.scope || ((o = e.getAttribute("id")) ? o = o.replace(st, at) : e.setAttribute("id", o = E)), a = (c = f(t)).length; a--;) c[a] = (o ? "#" + o : ":scope") + " " + vt(c[a]);
                        u = c.join(",")
                    }
                    try {
                        return z.apply(i, d.querySelectorAll(u)), i
                    } catch (e) {
                        P(t, !0)
                    } finally {
                        o === E && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(q, "$1"), e, i, n)
        }

        function lt() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > w.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function ct(t) {
            return t[E] = !0, t
        }

        function ut(t) {
            var e = S.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function dt(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = e
        }

        function ht(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function pt(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ft(r) {
            return ct(function (a) {
                return a = +a, ct(function (t, e) {
                    for (var i, n = r([], t.length, a), s = n.length; s--;) t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in p = ot.support = {}, s = ot.isXML = function (t) {
                var e = t.namespaceURI,
                    t = (t.ownerDocument || t).documentElement;
                return !Q.test(e || t && t.nodeName || "HTML")
            }, T = ot.setDocument = function (t) {
                var e, t = t ? t.ownerDocument || t : y;
                return t != S && 9 === t.nodeType && t.documentElement && (r = (S = t).documentElement, C = !s(S), y != S && (e = S.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", n, !1) : e.attachEvent && e.attachEvent("onunload", n)), p.scope = ut(function (t) {
                    return r.appendChild(t).appendChild(S.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                }), p.attributes = ut(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), p.getElementsByTagName = ut(function (t) {
                    return t.appendChild(S.createComment("")), !t.getElementsByTagName("*").length
                }), p.getElementsByClassName = tt.test(S.getElementsByClassName), p.getById = ut(function (t) {
                    return r.appendChild(t).id = E, !S.getElementsByName || !S.getElementsByName(E).length
                }), p.getById ? (w.filter.ID = function (t) {
                    var e = t.replace(nt, d);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, w.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        t = e.getElementById(t);
                        return t ? [t] : []
                    }
                }) : (w.filter.ID = function (t) {
                    var e = t.replace(nt, d);
                    return function (t) {
                        t = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return t && t.value === e
                    }
                }, w.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && C) {
                        var i, n, s, a = e.getElementById(t);
                        if (a) {
                            if ((i = a.getAttributeNode("id")) && i.value === t) return [a];
                            for (s = e.getElementsByName(t), n = 0; a = s[n++];)
                                if ((i = a.getAttributeNode("id")) && i.value === t) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = p.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        s = 0,
                        a = e.getElementsByTagName(t);
                    if ("*" !== t) return a;
                    for (; i = a[s++];) 1 === i.nodeType && n.push(i);
                    return n
                }, w.find.CLASS = p.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t)
                }, o = [], g = [], (p.qsa = tt.test(S.querySelectorAll)) && (ut(function (t) {
                    var e;
                    r.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + N + ")"), t.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), (e = S.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                }), ut(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = S.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (p.matchesSelector = tt.test(u = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ut(function (t) {
                    p.disconnectedMatch = u.call(t, "*"), u.call(t, "[s!='']:x"), o.push("!=", B)
                }), g = g.length && new RegExp(g.join("|")), o = o.length && new RegExp(o.join("|")), e = tt.test(r.compareDocumentPosition), v = e || tt.test(r.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        e = e && e.parentNode;
                    return t === e || !(!e || 1 !== e.nodeType || !(i.contains ? i.contains(e) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, A = e ? function (t, e) {
                    if (t === e) return c = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t == S || t.ownerDocument == y && v(y, t) ? -1 : e == S || e.ownerDocument == y && v(y, e) ? 1 : l ? j(l, t) - j(l, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return c = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        a = e.parentNode,
                        r = [t],
                        o = [e];
                    if (!s || !a) return t == S ? -1 : e == S ? 1 : s ? -1 : a ? 1 : l ? j(l, t) - j(l, e) : 0;
                    if (s === a) return ht(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) o.unshift(i);
                    for (; r[n] === o[n];) n++;
                    return n ? ht(r[n], o[n]) : r[n] == y ? -1 : o[n] == y ? 1 : 0
                }), S
            }, ot.matches = function (t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function (t, e) {
                if (T(t), p.matchesSelector && C && !P[e + " "] && (!o || !o.test(e)) && (!g || !g.test(e))) try {
                    var i = u.call(t, e);
                    if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                    P(e, !0)
                }
                return 0 < ot(e, S, null, [t]).length
            }, ot.contains = function (t, e) {
                return (t.ownerDocument || t) != S && T(t), v(t, e)
            }, ot.attr = function (t, e) {
                (t.ownerDocument || t) != S && T(t);
                var i = w.attrHandle[e.toLowerCase()],
                    i = i && $.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                return void 0 !== i ? i : p.attributes || !C ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, ot.escape = function (t) {
                return (t + "").replace(st, at)
            }, ot.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(A), c) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return l = null, t
            }, a = ot.getText = function (t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += a(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += a(e);
                return i
            }, (w = ot.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(nt, d), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && G.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(nt, d).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = _[t + " "];
                        return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && _(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, i, n) {
                        return function (t) {
                            t = ot.attr(t, e);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === n : "!=" === i ? t !== n : "^=" === i ? n && 0 === t.indexOf(n) : "*=" === i ? n && -1 < t.indexOf(n) : "$=" === i ? n && t.slice(-n.length) === n : "~=" === i ? -1 < (" " + t.replace(H, " ") + " ").indexOf(n) : "|=" === i && (t === n || t.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (f, t, e, m, g) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === t;
                        return 1 === m && 0 === g ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, i) {
                            var n, s, a, r, o, l, c = v != y ? "nextSibling" : "previousSibling",
                                u = t.parentNode,
                                d = b && t.nodeName.toLowerCase(),
                                h = !i && !b,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (r = t; r = r[c];)
                                            if (b ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (o = (n = (s = (a = (r = u)[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2], r = o && u.childNodes[o]; r = ++o && r && r[c] || (p = o = 0) || l.pop();)
                                        if (1 === r.nodeType && ++p && r === t) {
                                            s[f] = [k, o, p];
                                            break
                                        }
                                } else if (h && (p = o = (n = (s = (a = (r = t)[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] || [])[0] === k && n[1]), !1 === p)
                                    for (;
                                        (r = ++o && r && r[c] || (p = o = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++p || (h && ((s = (a = r[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[f] = [k, p]), r !== t)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function (t, a) {
                        var e, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return r[E] ? r(a) : 1 < r.length ? (e = [t, t, "", a], w.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, e) {
                            for (var i, n = r(t, a), s = n.length; s--;) t[i = j(t, n[s])] = !(e[i] = n[s])
                        }) : function (t) {
                            return r(t, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: ct(function (t) {
                        var n = [],
                            s = [],
                            o = h(t.replace(q, "$1"));
                        return o[E] ? ct(function (t, e, i, n) {
                            for (var s, a = o(t, null, n, []), r = t.length; r--;)(s = a[r]) && (t[r] = !(e[r] = s))
                        }) : function (t, e, i) {
                            return n[0] = t, o(n, null, i, s), n[0] = null, !s.pop()
                        }
                    }),
                    has: ct(function (e) {
                        return function (t) {
                            return 0 < ot(e, t).length
                        }
                    }),
                    contains: ct(function (e) {
                        return e = e.replace(nt, d),
                            function (t) {
                                return -1 < (t.textContent || a(t)).indexOf(e)
                            }
                    }),
                    lang: ct(function (i) {
                        return J.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(nt, d).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === r
                    },
                    focus: function (t) {
                        return t === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function (t) {
                        return Z.test(t.nodeName)
                    },
                    input: function (t) {
                        return K.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (t = t.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ft(function () {
                        return [0]
                    }),
                    last: ft(function (t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ft(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: ft(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: ft(function (t, e, i) {
                        for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                        return t
                    }),
                    gt: ft(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[t] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(t);
        for (t in {
                submit: !0,
                reset: !0
            }) w.pseudos[t] = function (i) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }(t);

        function gt() {}

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(r, t, e) {
            var o = t.dir,
                l = t.next,
                c = l || o,
                u = e && "parentNode" === c,
                d = b++;
            return t.first ? function (t, e, i) {
                for (; t = t[o];)
                    if (1 === t.nodeType || u) return r(t, e, i);
                return !1
            } : function (t, e, i) {
                var n, s, a = [k, d];
                if (i) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || u) && r(t, e, i)) return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || u)
                            if (n = (s = t[E] || (t[E] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[o] || t;
                            else {
                                if ((s = n[c]) && s[0] === k && s[1] === d) return a[2] = s[2];
                                if ((n[c] = a)[2] = r(t, e, i)) return !0
                            } return !1
            }
        }

        function bt(s) {
            return 1 < s.length ? function (t, e, i) {
                for (var n = s.length; n--;)
                    if (!s[n](t, e, i)) return !1;
                return !0
            } : s[0]
        }

        function wt(t, e, i, n, s) {
            for (var a, r = [], o = 0, l = t.length, c = null != e; o < l; o++)(a = t[o]) && (i && !i(a, n, s) || (r.push(a), c && e.push(o)));
            return r
        }

        function xt(t) {
            for (var n, e, i, s = t.length, a = w.relative[t[0].type], r = a || w.relative[" "], o = a ? 1 : 0, l = yt(function (t) {
                    return t === n
                }, r, !0), c = yt(function (t) {
                    return -1 < j(n, t)
                }, r, !0), u = [function (t, e, i) {
                    i = !a && (i || e !== x) || ((n = e).nodeType ? l : c)(t, e, i);
                    return n = null, i
                }]; o < s; o++)
                if (e = w.relative[t[o].type]) u = [yt(bt(u), e)];
                else {
                    if ((e = w.filter[t[o].type].apply(null, t[o].matches))[E]) {
                        for (i = ++o; i < s && !w.relative[t[i].type]; i++);
                        return function t(p, f, m, g, v, e) {
                            return g && !g[E] && (g = t(g)), v && !v[E] && (v = t(v, e)), ct(function (t, e, i, n) {
                                var s, a, r, o = [],
                                    l = [],
                                    c = e.length,
                                    u = t || function (t, e, i) {
                                        for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                                        return i
                                    }(f || "*", i.nodeType ? [i] : i, []),
                                    d = !p || !t && f ? u : wt(u, o, p, i, n),
                                    h = m ? v || (t ? p : c || g) ? [] : e : d;
                                if (m && m(d, h, i, n), g)
                                    for (s = wt(h, l), g(s, [], i, n), a = s.length; a--;)(r = s[a]) && (h[l[a]] = !(d[l[a]] = r));
                                if (t) {
                                    if (v || p) {
                                        if (v) {
                                            for (s = [], a = h.length; a--;)(r = h[a]) && s.push(d[a] = r);
                                            v(null, h = [], s, n)
                                        }
                                        for (a = h.length; a--;)(r = h[a]) && -1 < (s = v ? j(t, r) : o[a]) && (t[s] = !(e[s] = r))
                                    }
                                } else h = wt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : z.apply(e, h)
                            })
                        }(1 < o && bt(u), 1 < o && vt(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(q, "$1"), e, o < i && xt(t.slice(o, i)), i < s && xt(t = t.slice(i)), i < s && vt(t))
                    }
                    u.push(e)
                } return bt(u)
        }
        return gt.prototype = w.filters = w.pseudos, w.setFilters = new gt, f = ot.tokenize = function (t, e) {
            var i, n, s, a, r, o, l, c = M[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, o = [], l = w.preFilter; r;) {
                for (a in i && !(n = X.exec(r)) || (n && (r = r.slice(n[0].length) || r), o.push(s = [])), i = !1, (n = Y.exec(r)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(q, " ")
                    }), r = r.slice(i.length)), w.filter) !(n = U[a].exec(r)) || l[a] && !(n = l[a](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: a,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return e ? r.length : r ? ot.error(t) : M(t, o).slice(0)
        }, h = ot.compile = function (t, e) {
            var i, g, v, y, b, n, s = [],
                a = [],
                r = L[t + " "];
            if (!r) {
                for (i = (e = e || f(t)).length; i--;)((r = xt(e[i]))[E] ? s : a).push(r);
                (r = L(t, (g = a, y = 0 < (v = s).length, b = 0 < g.length, n = function (t, e, i, n, s) {
                    var a, r, o, l = 0,
                        c = "0",
                        u = t && [],
                        d = [],
                        h = x,
                        p = t || b && w.find.TAG("*", s),
                        f = k += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (s && (x = e == S || e || s); c !== m && null != (a = p[c]); c++) {
                        if (b && a) {
                            for (r = 0, e || a.ownerDocument == S || (T(a), i = !C); o = g[r++];)
                                if (o(a, e || S, i)) {
                                    n.push(a);
                                    break
                                } s && (k = f)
                        }
                        y && ((a = !o && a) && l--, t && u.push(a))
                    }
                    if (l += c, y && c !== l) {
                        for (r = 0; o = v[r++];) o(u, d, e, i);
                        if (t) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = D.call(n));
                            d = wt(d)
                        }
                        z.apply(n, d), s && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(n)
                    }
                    return s && (k = f, x = h), u
                }, y ? ct(n) : n))).selector = t
            }
            return r
        }, m = ot.select = function (t, e, i, n) {
            var s, a, r, o, l, c = "function" == typeof t && t,
                u = !n && f(t = c.selector || t);
            if (i = i || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (r = a[0]).type && 9 === e.nodeType && C && w.relative[a[1].type]) {
                    if (!(e = (w.find.ID(r.matches[0].replace(nt, d), e) || [])[0])) return i;
                    c && (e = e.parentNode), t = t.slice(a.shift().value.length)
                }
                for (s = U.needsContext.test(t) ? 0 : a.length; s-- && (r = a[s], !w.relative[o = r.type]);)
                    if ((l = w.find[o]) && (n = l(r.matches[0].replace(nt, d), it.test(a[0].type) && mt(e.parentNode) || e))) {
                        if (a.splice(s, 1), !(t = n.length && vt(a))) return z.apply(i, n), i;
                        break
                    }
            }
            return (c || h(t, u))(n, e, !C, i, !e || it.test(t) && mt(e.parentNode) || e), i
        }, p.sortStable = E.split("").sort(A).join("") === E, p.detectDuplicates = !!c, T(), p.sortDetached = ut(function (t) {
            return 1 & t.compareDocumentPosition(S.createElement("fieldset"))
        }), ut(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || dt("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), p.attributes && ut(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || dt("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ut(function (t) {
            return null == t.getAttribute("disabled")
        }) || dt(N, function (t, e, i) {
            if (!i) return !0 === t[e] ? e.toLowerCase() : (e = t.getAttributeNode(e)) && e.specified ? e.value : null
        }), ot
    }(S);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;

    function x(t, e, i) {
        for (var n = [], s = void 0 !== i;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (s && E(t).is(i)) break;
                n.push(t)
            } return n
    }

    function T(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }
    var k = E.expr.match.needsContext;

    function _(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(t, i, n) {
        return b(i) ? E.grep(t, function (t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? E.grep(t, function (t) {
            return t === i !== n
        }) : "string" != typeof i ? E.grep(t, function (t) {
            return -1 < s.call(i, t) !== n
        }) : E.filter(i, t, n)
    }
    E.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? E.find.matchesSelector(n, t) ? [n] : [] : E.find.matches(t, E.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, E.fn.extend({
        find: function (t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(E(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (E.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) E.find(t, s[e], i);
            return 1 < n ? E.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(L(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(L(this, t || [], !0))
        },
        is: function (t) {
            return !!L(this, "string" == typeof t && k.test(t) ? E(t) : t || [], !1).length
        }
    });
    var P, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (t, e, i) {
        if (!t) return this;
        if (i = i || P, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== i.ready ? i.ready(t) : t(E) : E.makeArray(t, this);
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : A.exec(t)) || !n[1] && e) return (!e || e.jquery ? e || i : this.constructor(e)).find(t);
        if (n[1]) {
            if (e = e instanceof E ? e[0] : e, E.merge(this, E.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), M.test(n[1]) && E.isPlainObject(e))
                for (var n in e) b(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (t = C.getElementById(n[2])) && (this[0] = t, this.length = 1), this
    }).prototype = E.fn, P = E(C);
    var $ = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    E.fn.extend({
        has: function (t) {
            var e = E(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (E.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, n = 0,
                s = this.length,
                a = [],
                r = "string" != typeof t && E(t);
            if (!k.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && E.find.matchesSelector(i, t))) {
                            a.push(i);
                            break
                        } return this.pushStack(1 < a.length ? E.uniqueSort(a) : a)
        },
        index: function (t) {
            return t ? "string" == typeof t ? s.call(E(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), E.each({
        parent: function (t) {
            t = t.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (t) {
            return x(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return x(t, "parentNode", i)
        },
        next: function (t) {
            return O(t, "nextSibling")
        },
        prev: function (t) {
            return O(t, "previousSibling")
        },
        nextAll: function (t) {
            return x(t, "nextSibling")
        },
        prevAll: function (t) {
            return x(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return x(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return x(t, "previousSibling", i)
        },
        siblings: function (t) {
            return T((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return T(t.firstChild)
        },
        contents: function (t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (_(t, "template") && (t = t.content || t), E.merge([], t.childNodes))
        }
    }, function (n, s) {
        E.fn[n] = function (t, e) {
            var i = E.map(this, s, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = E.filter(e, i)), 1 < this.length && (D[n] || E.uniqueSort(i), $.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var z = /[^\x20\t\r\n\f]+/g;

    function I(t) {
        return t
    }

    function j(t) {
        throw t
    }

    function N(t, e, i, n) {
        var s;
        try {
            t && b(s = t.promise) ? s.call(t).done(e).fail(i) : t && b(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    E.Callbacks = function (n) {
        var i;
        n = "string" == typeof n ? (i = {}, E.each(n.match(z) || [], function (t, e) {
            i[e] = !0
        }), i) : E.extend({}, n);

        function s() {
            for (r = r || n.once, e = a = !0; l.length; c = -1)
                for (t = l.shift(); ++c < o.length;) !1 === o[c].apply(t[0], t[1]) && n.stopOnFalse && (c = o.length, t = !1);
            n.memory || (t = !1), a = !1, r && (o = t ? [] : "")
        }
        var a, t, e, r, o = [],
            l = [],
            c = -1,
            u = {
                add: function () {
                    return o && (t && !a && (c = o.length - 1, l.push(t)), function i(t) {
                        E.each(t, function (t, e) {
                            b(e) ? n.unique && u.has(e) || o.push(e) : e && e.length && "string" !== f(e) && i(e)
                        })
                    }(arguments), t && !a && s()), this
                },
                remove: function () {
                    return E.each(arguments, function (t, e) {
                        for (var i; - 1 < (i = E.inArray(e, o, i));) o.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < E.inArray(t, o) : 0 < o.length
                },
                empty: function () {
                    return o = o && [], this
                },
                disable: function () {
                    return r = l = [], o = t = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = l = [], t || a || (o = t = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, e) {
                    return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), a || s()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!e
                }
            };
        return u
    }, E.extend({
        Deferred: function (t) {
            var a = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                s = "pending",
                r = {
                    state: function () {
                        return s
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return r.then(null, t)
                    },
                    pipe: function () {
                        var s = arguments;
                        return E.Deferred(function (n) {
                            E.each(a, function (t, e) {
                                var i = b(s[e[4]]) && s[e[4]];
                                o[e[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && b(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), s = null
                        }).promise()
                    },
                    then: function (e, i, n) {
                        var l = 0;

                        function c(s, a, r, o) {
                            return function () {
                                function t() {
                                    var t, e;
                                    if (!(s < l)) {
                                        if ((t = r.apply(i, n)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                        e = t && ("object" == typeof t || "function" == typeof t) && t.then, b(e) ? o ? e.call(t, c(l, a, I, o), c(l, a, j, o)) : (l++, e.call(t, c(l, a, I, o), c(l, a, j, o), c(l, a, I, a.notifyWith))) : (r !== I && (i = void 0, n = [t]), (o || a.resolveWith)(i, n))
                                    }
                                }
                                var i = this,
                                    n = arguments,
                                    e = o ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(t, e.stackTrace), l <= s + 1 && (r !== j && (i = void 0, n = [t]), a.rejectWith(i, n))
                                        }
                                    };
                                s ? e() : (E.Deferred.getStackHook && (e.stackTrace = E.Deferred.getStackHook()), S.setTimeout(e))
                            }
                        }
                        return E.Deferred(function (t) {
                            a[0][3].add(c(0, t, b(n) ? n : I, t.notifyWith)), a[1][3].add(c(0, t, b(e) ? e : I)), a[2][3].add(c(0, t, b(i) ? i : j))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? E.extend(t, r) : r
                    }
                },
                o = {};
            return E.each(a, function (t, e) {
                var i = e[2],
                    n = e[5];
                r[e[1]] = i.add, n && i.add(function () {
                    s = n
                }, a[3 - t][2].disable, a[3 - t][3].disable, a[0][2].lock, a[0][3].lock), i.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = i.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function (t) {
            function e(e) {
                return function (t) {
                    s[e] = this, a[e] = 1 < arguments.length ? o.call(arguments) : t, --i || r.resolveWith(s, a)
                }
            }
            var i = arguments.length,
                n = i,
                s = Array(n),
                a = o.call(arguments),
                r = E.Deferred();
            if (i <= 1 && (N(t, r.done(e(n)).resolve, r.reject, !i), "pending" === r.state() || b(a[n] && a[n].then))) return r.then();
            for (; n--;) N(a[n], e(n), r.reject);
            return r.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (t, e) {
        S.console && S.console.warn && t && F.test(t.name) && S.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, E.readyException = function (t) {
        S.setTimeout(function () {
            throw t
        })
    };
    var R = E.Deferred();

    function V() {
        C.removeEventListener("DOMContentLoaded", V), S.removeEventListener("load", V), E.ready()
    }
    E.fn.ready = function (t) {
        return R.then(t).catch(function (t) {
            E.readyException(t)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --E.readyWait : E.isReady) || (E.isReady = !0) !== t && 0 < --E.readyWait || R.resolveWith(C, [E])
        }
    }), E.ready.then = R.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? S.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", V), S.addEventListener("load", V));
    var B = function (t, e, i, n, s, a, r) {
            var o = 0,
                l = t.length,
                c = null == i;
            if ("object" === f(i))
                for (o in s = !0, i) B(t, e, o, i[o], !0, a, r);
            else if (void 0 !== n && (s = !0, b(n) || (r = !0), c && (e = r ? (e.call(t, n), null) : (c = e, function (t, e, i) {
                    return c.call(E(t), i)
                })), e))
                for (; o < l; o++) e(t[o], i, r ? n : n.call(t[o], o, e(t[o], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : a
        },
        H = /^-ms-/,
        q = /-([a-z])/g;

    function X(t, e) {
        return e.toUpperCase()
    }

    function Y(t) {
        return t.replace(H, "ms-").replace(q, X)
    }

    function W(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }

    function G() {
        this.expando = E.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[Y(e)] = i;
            else
                for (n in e) s[Y(n)] = e[n];
            return s
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in n ? [e] : e.match(z) || []).length;
                    for (; i--;) delete n[e[i]]
                }
                void 0 !== e && !E.isEmptyObject(n) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            t = t[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var J = new G,
        U = new G,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Q.test(s) ? JSON.parse(s) : s)
                } catch (t) {}
                U.set(t, e, i)
            } else i = void 0;
        return i
    }
    E.extend({
        hasData: function (t) {
            return U.hasData(t) || J.hasData(t)
        },
        data: function (t, e, i) {
            return U.access(t, e, i)
        },
        removeData: function (t, e) {
            U.remove(t, e)
        },
        _data: function (t, e, i) {
            return J.access(t, e, i)
        },
        _removeData: function (t, e) {
            J.remove(t, e)
        }
    }), E.fn.extend({
        data: function (i, t) {
            var e, n, s, a = this[0],
                r = a && a.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                U.set(this, i)
            }) : B(this, function (t) {
                var e;
                return a && void 0 === t ? void 0 !== (e = U.get(a, i)) || void 0 !== (e = Z(a, i)) ? e : void 0 : void this.each(function () {
                    U.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (s = U.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
                for (e = r.length; e--;) r[e] && 0 === (n = r[e].name).indexOf("data-") && (n = Y(n.slice(5)), Z(a, n, s[n]));
                J.set(a, "hasDataAttrs", !0)
            }
            return s
        },
        removeData: function (t) {
            return this.each(function () {
                U.remove(this, t)
            })
        }
    }), E.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = J.get(t, e), i && (!n || Array.isArray(i) ? n = J.access(t, e, E.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = E.queue(t, e),
                n = i.length,
                s = i.shift(),
                a = E._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete a.stop, s.call(t, function () {
                E.dequeue(t, e)
            }, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return J.get(t, i) || J.access(t, i, {
                empty: E.Callbacks("once memory").add(function () {
                    J.remove(t, [e + "queue", i])
                })
            })
        }
    }), E.fn.extend({
        queue: function (e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? E.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                var t = E.queue(this, e, i);
                E._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && E.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                E.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            function i() {
                --s || a.resolveWith(r, [r])
            }
            var n, s = 1,
                a = E.Deferred(),
                r = this,
                o = this.length;
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = J.get(r[o], t + "queueHooks")) && n.empty && (s++, n.empty.add(i));
            return i(), a.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        nt = C.documentElement,
        st = function (t) {
            return E.contains(t.ownerDocument, t)
        },
        at = {
            composed: !0
        };
    nt.getRootNode && (st = function (t) {
        return E.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument
    });

    function rt(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === E.css(t, "display")
    }

    function ot(t, e, i, n) {
        var s, a, r = 20,
            o = n ? function () {
                return n.cur()
            } : function () {
                return E.css(t, e, "")
            },
            l = o(),
            c = i && i[3] || (E.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (E.cssNumber[e] || "px" !== c && +l) && et.exec(E.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; r--;) E.style(t, e, u + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0), u /= a;
            u *= 2, E.style(t, e, u + c), i = i || []
        }
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
    }
    var lt = {};

    function ct(t, e) {
        for (var i, n, s, a, r, o, l = [], c = 0, u = t.length; c < u; c++)(n = t[c]).style && (i = n.style.display, e ? ("none" === i && (l[c] = J.get(n, "display") || null, l[c] || (n.style.display = "")), "" === n.style.display && rt(n) && (l[c] = (o = a = s = void 0, a = n.ownerDocument, r = n.nodeName, (o = lt[r]) || (s = a.body.appendChild(a.createElement(r)), o = E.css(s, "display"), s.parentNode.removeChild(s), "none" === o && (o = "block"), lt[r] = o)))) : "none" !== i && (l[c] = "none", J.set(n, "display", i)));
        for (c = 0; c < u; c++) null != l[c] && (t[c].style.display = l[c]);
        return t
    }
    E.fn.extend({
        show: function () {
            return ct(this, !0)
        },
        hide: function () {
            return ct(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                rt(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ut = /^(?:checkbox|radio)$/i,
        dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i,
        d = C.createDocumentFragment().appendChild(C.createElement("div"));
    (p = C.createElement("input")).setAttribute("type", "radio"), p.setAttribute("checked", "checked"), p.setAttribute("name", "t"), d.appendChild(p), y.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, d.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue, d.innerHTML = "<option></option>", y.option = !!d.lastChild;
    var pt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ft(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && _(t, e) ? E.merge([t], i) : i
    }

    function mt(t, e) {
        for (var i = 0, n = t.length; i < n; i++) J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"))
    }
    pt.tbody = pt.tfoot = pt.colgroup = pt.caption = pt.thead, pt.th = pt.td, y.option || (pt.optgroup = pt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var gt = /<|&#?\w+;/;

    function vt(t, e, i, n, s) {
        for (var a, r, o, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
            if ((a = t[h]) || 0 === a)
                if ("object" === f(a)) E.merge(d, a.nodeType ? [a] : a);
                else if (gt.test(a)) {
            for (r = r || u.appendChild(e.createElement("div")), o = (dt.exec(a) || ["", ""])[1].toLowerCase(), o = pt[o] || pt._default, r.innerHTML = o[1] + E.htmlPrefilter(a) + o[2], c = o[0]; c--;) r = r.lastChild;
            E.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(a));
        for (u.textContent = "", h = 0; a = d[h++];)
            if (n && -1 < E.inArray(a, n)) s && s.push(a);
            else if (l = st(a), r = ft(u.appendChild(a), "script"), l && mt(r), i)
            for (c = 0; a = r[c++];) ht.test(a.type || "") && i.push(a);
        return u
    }
    var yt = /^key/,
        bt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;

    function xt() {
        return !0
    }

    function Tt() {
        return !1
    }

    function St(t, e) {
        return t === function () {
            try {
                return C.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Ct(t, e, i, n, s, a) {
        var r, o;
        if ("object" == typeof e) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), e) Ct(t, o, i, n, e[o], a);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Tt;
        else if (!s) return t;
        return 1 === a && (r = s, (s = function (t) {
            return E().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = E.guid++)), t.each(function () {
            E.event.add(this, e, s, n, i)
        })
    }

    function Et(t, s, a) {
        a ? (J.set(t, s, !1), E.event.add(t, s, {
            namespace: !1,
            handler: function (t) {
                var e, i, n = J.get(this, s);
                if (1 & t.isTrigger && this[s]) {
                    if (n.length)(E.event.special[s] || {}).delegateType && t.stopPropagation();
                    else if (n = o.call(arguments), J.set(this, s, n), e = a(this, s), this[s](), n !== (i = J.get(this, s)) || e ? J.set(this, s, !1) : i = {}, n !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value
                } else n.length && (J.set(this, s, {
                    value: E.event.trigger(E.extend(n[0], E.Event.prototype), n.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === J.get(t, s) && E.event.add(t, s, xt)
    }
    E.event = {
        global: {},
        add: function (e, t, i, n, s) {
            var a, r, o, l, c, u, d, h, p, f = J.get(e);
            if (W(e))
                for (i.handler && (i = (a = i).handler, s = a.selector), s && E.find.matchesSelector(nt, s), i.guid || (i.guid = E.guid++), (o = f.events) || (o = f.events = Object.create(null)), (r = f.handle) || (r = f.handle = function (t) {
                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(z) || [""]).length; l--;) d = p = (c = wt.exec(t[l]) || [])[1], h = (c[2] || "").split(".").sort(), d && (u = E.event.special[d] || {}, d = (s ? u.delegateType : u.bindType) || d, u = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: p,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && E.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, a), (p = o[d]) || ((p = o[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, h, r) || e.addEventListener && e.addEventListener(d, r)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
        },
        remove: function (t, e, i, n, s) {
            var a, r, o, l, c, u, d, h, p, f, m, g = J.hasData(t) && J.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(z) || [""]).length; c--;)
                    if (p = m = (o = wt.exec(e[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = E.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = h.length; a--;) u = h[a], !s && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                        r && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || E.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) E.event.remove(t, p + e[c], i, n, !0);
                E.isEmptyObject(l) && J.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, i, n, s, a, r = new Array(arguments.length),
                o = E.event.fix(t),
                l = (J.get(this, "events") || Object.create(null))[o.type] || [],
                t = E.event.special[o.type] || {};
            for (r[0] = o, e = 1; e < arguments.length; e++) r[e] = arguments[e];
            if (o.delegateTarget = this, !t.preDispatch || !1 !== t.preDispatch.call(this, o)) {
                for (a = E.event.handlers.call(this, o, l), e = 0;
                    (n = a[e++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = n.elem, i = 0;
                        (s = n.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== s.namespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, void 0 !== (s = ((E.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, r)) && !1 === (o.result = s) && (o.preventDefault(), o.stopPropagation()));
                return t.postDispatch && t.postDispatch.call(this, o), o.result
            }
        },
        handlers: function (t, e) {
            var i, n, s, a, r, o = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (a = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? -1 < E(s, this).index(c) : E.find(s, this, null, [c]).length), r[s] && a.push(n);
                        a.length && o.push({
                            elem: c,
                            handlers: a
                        })
                    } return c = this, l < e.length && o.push({
                elem: c,
                handlers: e.slice(l)
            }), o
        },
        addProp: function (e, t) {
            Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: b(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[E.expando] ? t : new E.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (t) {
                    t = this || t;
                    return ut.test(t.type) && t.click && _(t, "input") && Et(t, "click", xt), !1
                },
                trigger: function (t) {
                    t = this || t;
                    return ut.test(t.type) && t.click && _(t, "input") && Et(t, "click"), !0
                },
                _default: function (t) {
                    t = t.target;
                    return ut.test(t.type) && t.click && _(t, "input") && J.get(t, "click") || _(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, E.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, E.Event = function (t, e) {
        if (!(this instanceof E.Event)) return new E.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && E.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Tt,
        isPropagationStopped: Tt,
        isImmediatePropagationStopped: Tt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = xt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = xt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = xt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && bt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        E.event.special[t] = {
            setup: function () {
                return Et(this, t, St), !1
            },
            trigger: function () {
                return Et(this, t), !0
            },
            delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, s) {
        E.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function (t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || E.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
            }
        }
    }), E.fn.extend({
        on: function (t, e, i, n) {
            return Ct(this, t, e, i, n)
        },
        one: function (t, e, i, n) {
            return Ct(this, t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, E(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Tt), this.each(function () {
                E.event.remove(this, t, i, e)
            });
            for (s in t) this.off(s, e, t[s]);
            return this
        }
    });
    var kt = /<script|<style|<link/i,
        _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Lt(t, e) {
        return _(t, "table") && _(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0] || t
    }

    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function At(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function $t(t, e) {
        var i, n, s, a;
        if (1 === e.nodeType) {
            if (J.hasData(t) && (a = J.get(t).events))
                for (s in J.remove(e, "handle events"), a)
                    for (i = 0, n = a[s].length; i < n; i++) E.event.add(e, s, a[s][i]);
            U.hasData(t) && (t = U.access(t), t = E.extend({}, t), U.set(e, t))
        }
    }

    function Dt(i, n, s, a) {
        n = g(n);
        var t, e, r, o, l, c, u = 0,
            d = i.length,
            h = d - 1,
            p = n[0],
            f = b(p);
        if (f || 1 < d && "string" == typeof p && !y.checkClone && _t.test(p)) return i.each(function (t) {
            var e = i.eq(t);
            f && (n[0] = p.call(this, t, e.html())), Dt(e, n, s, a)
        });
        if (d && (e = (t = vt(n, i[0].ownerDocument, !1, i, a)).firstChild, 1 === t.childNodes.length && (t = e), e || a)) {
            for (o = (r = E.map(ft(t, "script"), Pt)).length; u < d; u++) l = t, u !== h && (l = E.clone(l, !0, !0), o && E.merge(r, ft(l, "script"))), s.call(i[u], l, u);
            if (o)
                for (c = r[r.length - 1].ownerDocument, E.map(r, At), u = 0; u < o; u++) l = r[u], ht.test(l.type || "") && !J.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : w(l.textContent.replace(Mt, ""), l, c))
        }
        return i
    }

    function Ot(t, e, i) {
        for (var n, s = e ? E.filter(e, t) : t, a = 0; null != (n = s[a]); a++) i || 1 !== n.nodeType || E.cleanData(ft(n)), n.parentNode && (i && st(n) && mt(ft(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    E.extend({
        htmlPrefilter: function (t) {
            return t
        },
        clone: function (t, e, i) {
            var n, s, a, r, o, l, c, u = t.cloneNode(!0),
                d = st(t);
            if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t)))
                for (r = ft(u), n = 0, s = (a = ft(t)).length; n < s; n++) o = a[n], "input" === (c = (l = r[n]).nodeName.toLowerCase()) && ut.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (e)
                if (i)
                    for (a = a || ft(t), r = r || ft(u), n = 0, s = a.length; n < s; n++) $t(a[n], r[n]);
                else $t(t, u);
            return 0 < (r = ft(u, "script")).length && mt(r, !d && ft(t, "script")), u
        },
        cleanData: function (t) {
            for (var e, i, n, s = E.event.special, a = 0; void 0 !== (i = t[a]); a++)
                if (W(i)) {
                    if (e = i[J.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? E.event.remove(i, n) : E.removeEvent(i, n, e.handle);
                        i[J.expando] = void 0
                    }
                    i[U.expando] && (i[U.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function (t) {
            return Ot(this, t, !0)
        },
        remove: function (t) {
            return Ot(this, t)
        },
        text: function (t) {
            return B(this, function (t) {
                return void 0 === t ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Dt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Dt(this, arguments, function (t) {
                var e;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = Lt(this, t)).insertBefore(t, e.firstChild)
            })
        },
        before: function () {
            return Dt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Dt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (E.cleanData(ft(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return E.clone(this, t, e)
            })
        },
        html: function (t) {
            return B(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !kt.test(t) && !pt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = E.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (E.cleanData(ft(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var i = [];
            return Dt(this, arguments, function (t) {
                var e = this.parentNode;
                E.inArray(this, i) < 0 && (E.cleanData(ft(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, r) {
        E.fn[t] = function (t) {
            for (var e, i = [], n = E(t), s = n.length - 1, a = 0; a <= s; a++) e = a === s ? this : this.clone(!0), E(n[a])[r](e), l.apply(i, e.get());
            return this.pushStack(i)
        }
    });

    function zt(t, e, i) {
        var n, s = {};
        for (n in e) s[n] = t.style[n], t.style[n] = e[n];
        for (n in i = i.call(t), e) t.style[n] = s[n];
        return i
    }
    var It, jt, Nt, Ft, Rt, Vt, Bt, Ht, qt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Xt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = S), e.getComputedStyle(t)
        },
        Yt = new RegExp(it.join("|"), "i");

    function Wt(t, e, i) {
        var n, s, a = t.style;
        return (i = i || Xt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || st(t) || (s = E.style(t, e)), !y.pixelBoxStyles() && qt.test(s) && Yt.test(e) && (n = a.width, t = a.minWidth, e = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = t, a.maxWidth = e)), void 0 !== s ? s + "" : s
    }

    function Gt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Jt() {
        var t;
        Ht && (Bt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ht.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(Bt).appendChild(Ht), t = S.getComputedStyle(Ht), It = "1%" !== t.top, Vt = 12 === Ut(t.marginLeft), Ht.style.right = "60%", Ft = 36 === Ut(t.right), jt = 36 === Ut(t.width), Ht.style.position = "absolute", Nt = 12 === Ut(Ht.offsetWidth / 3), nt.removeChild(Bt), Ht = null)
    }

    function Ut(t) {
        return Math.round(parseFloat(t))
    }
    Bt = C.createElement("div"), (Ht = C.createElement("div")).style && (Ht.style.backgroundClip = "content-box", Ht.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ht.style.backgroundClip, E.extend(y, {
        boxSizingReliable: function () {
            return Jt(), jt
        },
        pixelBoxStyles: function () {
            return Jt(), Ft
        },
        pixelPosition: function () {
            return Jt(), It
        },
        reliableMarginLeft: function () {
            return Jt(), Vt
        },
        scrollboxSize: function () {
            return Jt(), Nt
        },
        reliableTrDimensions: function () {
            var t, e, i;
            return null == Rt && (t = C.createElement("table"), i = C.createElement("tr"), e = C.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", e.style.height = "9px", nt.appendChild(t).appendChild(i).appendChild(e), i = S.getComputedStyle(i), Rt = 3 < parseInt(i.height), nt.removeChild(t)), Rt
        }
    }));
    var Qt = ["Webkit", "Moz", "ms"],
        Kt = C.createElement("div").style,
        Zt = {};

    function te(t) {
        return E.cssProps[t] || Zt[t] || (t in Kt ? t : Zt[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = Qt.length; i--;)
                if ((t = Qt[i] + e) in Kt) return t
        }(t) || t)
    }
    var ee = /^(none|table(?!-c[ea]).+)/,
        ie = /^--/,
        ne = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        se = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function ae(t, e, i) {
        var n = et.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function re(t, e, i, n, s, a) {
        var r = "width" === e ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += E.css(t, i + it[r], !0, s)), n ? ("content" === i && (l -= E.css(t, "padding" + it[r], !0, s)), "margin" !== i && (l -= E.css(t, "border" + it[r] + "Width", !0, s))) : (l += E.css(t, "padding" + it[r], !0, s), "padding" !== i ? l += E.css(t, "border" + it[r] + "Width", !0, s) : o += E.css(t, "border" + it[r] + "Width", !0, s));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - a - l - o - .5)) || 0), l
    }

    function oe(t, e, i) {
        var n = Xt(t),
            s = (!y.boxSizingReliable() || i) && "border-box" === E.css(t, "boxSizing", !1, n),
            a = s,
            r = Wt(t, e, n),
            o = "offset" + e[0].toUpperCase() + e.slice(1);
        if (qt.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return (!y.boxSizingReliable() && s || !y.reliableTrDimensions() && _(t, "tr") || "auto" === r || !parseFloat(r) && "inline" === E.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === E.css(t, "boxSizing", !1, n), (a = o in t) && (r = t[o])), (r = parseFloat(r) || 0) + re(t, e, i || (s ? "border" : "content"), a, n, r) + "px"
    }

    function le(t, e, i, n, s) {
        return new le.prototype.init(t, e, i, n, s)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        t = Wt(t, "opacity");
                        return "" === t ? "1" : t
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, a, r, o = Y(e),
                    l = ie.test(e),
                    c = t.style;
                if (l || (e = te(o)), r = E.cssHooks[e] || E.cssHooks[o], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e];
                "string" == (a = typeof i) && (s = et.exec(i)) && s[1] && (i = ot(t, e, s), a = "number"), null != i && i == i && ("number" !== a || l || (i += s && s[3] || (E.cssNumber[o] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function (t, e, i, n) {
            var s, a = Y(e);
            return ie.test(e) || (e = te(a)), (a = E.cssHooks[e] || E.cssHooks[a]) && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = Wt(t, e, n)), "normal" === s && e in se && (s = se[e]), "" === i || i ? (e = parseFloat(s), !0 === i || isFinite(e) ? e || 0 : s) : s
        }
    }), E.each(["height", "width"], function (t, o) {
        E.cssHooks[o] = {
            get: function (t, e, i) {
                if (e) return !ee.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? oe(t, o, i) : zt(t, ne, function () {
                    return oe(t, o, i)
                })
            },
            set: function (t, e, i) {
                var n, s = Xt(t),
                    a = !y.scrollboxSize() && "absolute" === s.position,
                    r = (a || i) && "border-box" === E.css(t, "boxSizing", !1, s),
                    i = i ? re(t, o, i, r, s) : 0;
                return r && a && (i -= Math.ceil(t["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(s[o]) - re(t, o, "border", !1, s) - .5)), i && (n = et.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e, e = E.css(t, o)), ae(0, e, i)
            }
        }
    }), E.cssHooks.marginLeft = Gt(y.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (s, a) {
        E.cssHooks[s + a] = {
            expand: function (t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[s + it[e] + a] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, "margin" !== s && (E.cssHooks[s + a].set = ae)
    }), E.fn.extend({
        css: function (t, e) {
            return B(this, function (t, e, i) {
                var n, s, a = {},
                    r = 0;
                if (Array.isArray(e)) {
                    for (n = Xt(t), s = e.length; r < s; r++) a[e[r]] = E.css(t, e[r], !1, n);
                    return a
                }
                return void 0 !== i ? E.style(t, e, i) : E.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((E.Tween = le).prototype = {
        constructor: le,
        init: function (t, e, i, n, s, a) {
            this.elem = t, this.prop = i, this.easing = s || E.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (E.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = le.propHooks[this.prop];
            return (t && t.get ? t : le.propHooks._default).get(this)
        },
        run: function (t) {
            var e, i = le.propHooks[this.prop];
            return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (i && i.set ? i : le.propHooks._default).set(this), this
        }
    }).init.prototype = le.prototype, (le.propHooks = {
        _default: {
            get: function (t) {
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (t = E.css(t.elem, t.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (t) {
                E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !E.cssHooks[t.prop] && null == t.elem.style[te(t.prop)] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = le.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, E.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = le.prototype.init, E.fx.step = {};
    var ce, ue, de = /^(?:toggle|show|hide)$/,
        he = /queueHooks$/;

    function pe() {
        ue && (!1 === C.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(pe) : S.setTimeout(pe, E.fx.interval), E.fx.tick())
    }

    function fe() {
        return S.setTimeout(function () {
            ce = void 0
        }), ce = Date.now()
    }

    function me(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = it[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function ge(t, e, i) {
        for (var n, s = (ve.tweeners[e] || []).concat(ve.tweeners["*"]), a = 0, r = s.length; a < r; a++)
            if (n = s[a].call(i, e, t)) return n
    }

    function ve(s, t, e) {
        var i, a, n = 0,
            r = ve.prefilters.length,
            o = E.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var t = ce || fe(), t = Math.max(0, c.startTime + c.duration - t), e = 1 - (t / c.duration || 0), i = 0, n = c.tweens.length; i < n; i++) c.tweens[i].run(e);
                return o.notifyWith(s, [c, e, t]), e < 1 && n ? t : (n || o.notifyWith(s, [c, 1, 0]), o.resolveWith(s, [c]), !1)
            },
            c = o.promise({
                elem: s,
                props: E.extend({}, t),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: ce || fe(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    t = E.Tween(s, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(t), t
                },
                stop: function (t) {
                    var e = 0,
                        i = t ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; e < i; e++) c.tweens[e].run(1);
                    return t ? (o.notifyWith(s, [c, 1, 0]), o.resolveWith(s, [c, t])) : o.rejectWith(s, [c, t]), this
                }
            }),
            u = c.props;
        for (function (t, e) {
                var i, n, s, a, r;
                for (i in t)
                    if (s = e[n = Y(i)], a = t[i], Array.isArray(a) && (s = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), (r = E.cssHooks[n]) && "expand" in r)
                        for (i in a = r.expand(a), delete t[n], a) i in t || (t[i] = a[i], e[i] = s);
                    else e[n] = s
            }(u, c.opts.specialEasing); n < r; n++)
            if (i = ve.prefilters[n].call(c, s, u, c.opts)) return b(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return E.map(u, ge, c), b(c.opts.start) && c.opts.start.call(s, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
            elem: s,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    E.Animation = E.extend(ve, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return ot(i.elem, t, et.exec(e), i), i
            }]
        },
        tweener: function (t, e) {
            for (var i, n = 0, s = (t = b(t) ? (e = t, ["*"]) : t.match(z)).length; n < s; n++) i = t[n], ve.tweeners[i] = ve.tweeners[i] || [], ve.tweeners[i].unshift(e)
        },
        prefilters: [function (t, e, i) {
            var n, s, a, r, o, l, c, u = "width" in e || "height" in e,
                d = this,
                h = {},
                p = t.style,
                f = t.nodeType && rt(t),
                m = J.get(t, "fxshow");
            for (n in i.queue || (null == (r = E._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function () {
                    r.unqueued || o()
                }), r.unqueued++, d.always(function () {
                    d.always(function () {
                        r.unqueued--, E.queue(t, "fx").length || r.empty.fire()
                    })
                })), e)
                if (s = e[n], de.test(s)) {
                    if (delete e[n], a = a || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    h[n] = m && m[n] || E.style(t, n)
                } if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(h))
                for (n in u && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = J.get(t, "display")), "none" === (u = E.css(t, "display")) && (c ? u = c : (ct([t], !0), c = t.style.display || c, u = E.css(t, "display"), ct([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(t, "float") && (l || (d.done(function () {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function () {
                        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (f = m.hidden) : m = J.access(t, "fxshow", {
                    display: c
                }), a && (m.hidden = !f), f && ct([t], !0), d.done(function () {
                    for (n in f || ct([t]), J.remove(t, "fxshow"), h) E.style(t, n, h[n])
                })), l = ge(f ? m[n] : 0, n, d), n in m || (m[n] = l.start, f && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? ve.prefilters.unshift(t) : ve.prefilters.push(t)
        }
    }), E.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? E.extend({}, t) : {
            complete: i || !i && e || b(t) && t,
            duration: t,
            easing: i && e || e && !b(e) && e
        };
        return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            b(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue)
        }, n
    }, E.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(rt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function (e, t, i, n) {
            var s = E.isEmptyObject(e),
                a = E.speed(t, i, n),
                n = function () {
                    var t = ve(this, E.extend({}, e), a);
                    (s || J.get(this, "finish")) && t.stop(!0)
                };
            return n.finish = n, s || !1 === a.queue ? this.each(n) : this.queue(a.queue, n)
        },
        stop: function (s, t, a) {
            function r(t) {
                var e = t.stop;
                delete t.stop, e(a)
            }
            return "string" != typeof s && (a = t, t = s, s = void 0), t && this.queue(s || "fx", []), this.each(function () {
                var t = !0,
                    e = null != s && s + "queueHooks",
                    i = E.timers,
                    n = J.get(this);
                if (e) n[e] && n[e].stop && r(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && he.test(e) && r(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(a), t = !1, i.splice(e, 1));
                !t && a || E.dequeue(this, s)
            })
        },
        finish: function (r) {
            return !1 !== r && (r = r || "fx"), this.each(function () {
                var t, e = J.get(this),
                    i = e[r + "queue"],
                    n = e[r + "queueHooks"],
                    s = E.timers,
                    a = i ? i.length : 0;
                for (e.finish = !0, E.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (t, n) {
        var s = E.fn[n];
        E.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(me(n, !0), t, e, i)
        }
    }), E.each({
        slideDown: me("show"),
        slideUp: me("hide"),
        slideToggle: me("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, n) {
        E.fn[t] = function (t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), E.timers = [], E.fx.tick = function () {
        var t, e = 0,
            i = E.timers;
        for (ce = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || E.fx.stop(), ce = void 0
    }, E.fx.timer = function (t) {
        E.timers.push(t), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        ue || (ue = !0, pe())
    }, E.fx.stop = function () {
        ue = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function (n, t) {
        return n = E.fx && E.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
            var i = S.setTimeout(t, n);
            e.stop = function () {
                S.clearTimeout(i)
            }
        })
    }, d = C.createElement("input"), tt = C.createElement("select").appendChild(C.createElement("option")), d.type = "checkbox", y.checkOn = "" !== d.value, y.optSelected = tt.selected, (d = C.createElement("input")).value = "t", d.type = "radio", y.radioValue = "t" === d.value;
    var ye, be = E.expr.attrHandle;
    E.fn.extend({
        attr: function (t, e) {
            return B(this, E.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                E.removeAttr(this, t)
            })
        }
    }), E.extend({
        attr: function (t, e, i) {
            var n, s, a = t.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === t.getAttribute ? E.prop(t, e, i) : (1 === a && E.isXMLDoc(t) || (s = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ye : void 0)), void 0 !== i ? null === i ? void E.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : !(s && "get" in s && null !== (n = s.get(t, e))) && null == (n = E.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!y.radioValue && "radio" === e && _(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, n = 0,
                s = e && e.match(z);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), ye = {
        set: function (t, e, i) {
            return !1 === e ? E.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var r = be[e] || E.find.attr;
        be[e] = function (t, e, i) {
            var n, s, a = e.toLowerCase();
            return i || (s = be[a], be[a] = n, n = null != r(t, e, i) ? a : null, be[a] = s), n
        }
    });
    var we = /^(?:input|select|textarea|button)$/i,
        xe = /^(?:a|area)$/i;

    function Te(t) {
        return (t.match(z) || []).join(" ")
    }

    function Se(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function Ce(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(z) || []
    }
    E.fn.extend({
        prop: function (t, e) {
            return B(this, E.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[E.propFix[t] || t]
            })
        }
    }), E.extend({
        prop: function (t, e, i) {
            var n, s, a = t.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && E.isXMLDoc(t) || (e = E.propFix[e] || e, s = E.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = E.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (E.propHooks.selected = {
        get: function (t) {
            t = t.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (t) {
            t = t.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (e) {
            var t, i, n, s, a, r, o = 0;
            if (b(e)) return this.each(function (t) {
                E(this).addClass(e.call(this, t, Se(this)))
            });
            if ((t = Ce(e)).length)
                for (; i = this[o++];)
                    if (r = Se(i), n = 1 === i.nodeType && " " + Te(r) + " ") {
                        for (a = 0; s = t[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (r = Te(n)) && i.setAttribute("class", r)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, s, a, r, o = 0;
            if (b(e)) return this.each(function (t) {
                E(this).removeClass(e.call(this, t, Se(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Ce(e)).length)
                for (; i = this[o++];)
                    if (r = Se(i), n = 1 === i.nodeType && " " + Te(r) + " ") {
                        for (a = 0; s = t[a++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        r !== (r = Te(n)) && i.setAttribute("class", r)
                    } return this
        },
        toggleClass: function (s, e) {
            var a = typeof s,
                r = "string" == a || Array.isArray(s);
            return "boolean" == typeof e && r ? e ? this.addClass(s) : this.removeClass(s) : b(s) ? this.each(function (t) {
                E(this).toggleClass(s.call(this, t, Se(this), e), e)
            }) : this.each(function () {
                var t, e, i, n;
                if (r)
                    for (e = 0, i = E(this), n = Ce(s); t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== s && "boolean" != a || ((t = Se(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== s && J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            for (var e, i = 0, n = " " + t + " "; e = this[i++];)
                if (1 === e.nodeType && -1 < (" " + Te(Se(e)) + " ").indexOf(n)) return !0;
            return !1
        }
    });
    var Ee = /\r/g;
    E.fn.extend({
        val: function (e) {
            var i, t, n, s = this[0];
            return arguments.length ? (n = b(e), this.each(function (t) {
                1 === this.nodeType && (null == (t = n ? e.call(this, t, E(this).val()) : e) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (t) {
                    return null == t ? "" : t + ""
                })), (i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : s ? (i = E.valHooks[s.type] || E.valHooks[s.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(s, "value")) ? t : "string" == typeof (t = s.value) ? t.replace(Ee, "") : null == t ? "" : t : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = E.find.attr(t, "value");
                    return null != e ? e : Te(E.text(t))
                }
            },
            select: {
                get: function (t) {
                    for (var e, i = t.options, n = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], r = s ? n + 1 : i.length, o = n < 0 ? r : s ? n : 0; o < r; o++)
                        if (((e = i[o]).selected || o === n) && !e.disabled && (!e.parentNode.disabled || !_(e.parentNode, "optgroup"))) {
                            if (e = E(e).val(), s) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var i, n, s = t.options, a = E.makeArray(e), r = s.length; r--;)((n = s[r]).selected = -1 < E.inArray(E.valHooks.option.get(n), a)) && (i = !0);
                    return i || (t.selectedIndex = -1), a
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < E.inArray(E(t).val(), e)
            }
        }, y.checkOn || (E.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), y.focusin = "onfocusin" in S;

    function ke(t) {
        t.stopPropagation()
    }
    var _e = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function (t, e, i, n) {
            var s, a, r, o, l, c, u, d = [i || C],
                h = v.call(t, "type") ? t.type : t,
                p = v.call(t, "namespace") ? t.namespace.split(".") : [],
                f = u = a = i = i || C;
            if (3 !== i.nodeType && 8 !== i.nodeType && !_e.test(h + E.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), o = h.indexOf(":") < 0 && "on" + h, (t = t[E.expando] ? t : new E.Event(h, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : E.makeArray(e, [t]), c = E.event.special[h] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                if (!n && !c.noBubble && !m(i)) {
                    for (r = c.delegateType || h, _e.test(r + h) || (f = f.parentNode); f; f = f.parentNode) d.push(f), a = f;
                    a === (i.ownerDocument || C) && d.push(a.defaultView || a.parentWindow || S)
                }
                for (s = 0;
                    (f = d[s++]) && !t.isPropagationStopped();) u = f, t.type = 1 < s ? r : c.bindType || h, (l = (J.get(f, "events") || Object.create(null))[t.type] && J.get(f, "handle")) && l.apply(f, e), (l = o && f[o]) && l.apply && W(f) && (t.result = l.apply(f, e), !1 === t.result && t.preventDefault());
                return t.type = h, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !W(i) || o && b(i[h]) && !m(i) && ((a = i[o]) && (i[o] = null), E.event.triggered = h, t.isPropagationStopped() && u.addEventListener(h, ke), i[h](), t.isPropagationStopped() && u.removeEventListener(h, ke), E.event.triggered = void 0, a && (i[o] = a)), t.result
            }
        },
        simulate: function (t, e, i) {
            t = E.extend(new E.Event, i, {
                type: t,
                isSimulated: !0
            });
            E.event.trigger(t, null, e)
        }
    }), E.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                E.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return E.event.trigger(t, e, i, !0)
        }
    }), y.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (i, n) {
        function s(t) {
            E.event.simulate(n, t.target, E.event.fix(t))
        }
        E.event.special[n] = {
            setup: function () {
                var t = this.ownerDocument || this.document || this,
                    e = J.access(t, n);
                e || t.addEventListener(i, s, !0), J.access(t, n, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this.document || this,
                    e = J.access(t, n) - 1;
                e ? J.access(t, n, e) : (t.removeEventListener(i, s, !0), J.remove(t, n))
            }
        }
    });
    var Me = S.location,
        Le = {
            guid: Date.now()
        },
        Pe = /\?/;
    E.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new S.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + t), e
    };
    var Ae = /\[\]$/,
        $e = /\r?\n/g,
        De = /^(?:submit|button|image|reset|file)$/i,
        Oe = /^(?:input|select|textarea|keygen)/i;
    E.param = function (t, e) {
        function i(t, e) {
            e = b(e) ? e() : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e)
        }
        var n, s = [];
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !E.isPlainObject(t)) E.each(t, function () {
            i(this.name, this.value)
        });
        else
            for (n in t) ! function i(n, t, s, a) {
                if (Array.isArray(t)) E.each(t, function (t, e) {
                    s || Ae.test(n) ? a(n, e) : i(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, s, a)
                });
                else if (s || "object" !== f(t)) a(n, t);
                else
                    for (var e in t) i(n + "[" + e + "]", t[e], s, a)
            }(n, t[n], e, i);
        return s.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = E.prop(this, "elements");
                return t ? E.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !E(this).is(":disabled") && Oe.test(this.nodeName) && !De.test(t) && (this.checked || !ut.test(t))
            }).map(function (t, e) {
                var i = E(this).val();
                return null == i ? null : Array.isArray(i) ? E.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace($e, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace($e, "\r\n")
                }
            }).get()
        }
    });
    var ze = /%20/g,
        Ie = /#.*$/,
        je = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fe = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Ve = {},
        Be = {},
        He = "*/".concat("*"),
        qe = C.createElement("a");

    function Xe(a) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                s = t.toLowerCase().match(z) || [];
            if (b(e))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (a[i] = a[i] || []).unshift(e)) : (a[i] = a[i] || []).push(e)
        }
    }

    function Ye(e, n, s, a) {
        var r = {},
            o = e === Be;

        function l(t) {
            var i;
            return r[t] = !0, E.each(e[t] || [], function (t, e) {
                e = e(n, s, a);
                return "string" != typeof e || o || r[e] ? o ? !(i = e) : void 0 : (n.dataTypes.unshift(e), l(e), !1)
            }), i
        }
        return l(n.dataTypes[0]) || !r["*"] && l("*")
    }

    function We(t, e) {
        var i, n, s = E.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n = n || {})[i] = e[i]);
        return n && E.extend(!0, t, n), t
    }
    qe.href = Me.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? We(We(t, E.ajaxSettings), e) : We(E.ajaxSettings, t)
        },
        ajaxPrefilter: Xe(Ve),
        ajaxTransport: Xe(Be),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var l, c, u, i, d, n, h, p, s, a, f = E.ajaxSetup({}, e),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                v = E.Deferred(),
                y = E.Callbacks("once memory"),
                b = f.statusCode || {},
                r = {},
                o = {},
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (h) {
                            if (!i)
                                for (i = {}; e = Ne.exec(u);) i[e[1].toLowerCase() + " "] = (i[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = i[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? u : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == h && (t = o[t.toLowerCase()] = o[t.toLowerCase()] || t, r[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == h && (f.mimeType = t), this
                    },
                    statusCode: function (t) {
                        if (t)
                            if (h) x.always(t[x.status]);
                            else
                                for (var e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        t = t || w;
                        return l && l.abort(t), T(0, t), this
                    }
                };
            if (v.promise(x), f.url = ((t || f.url || Me.href) + "").replace(Re, Me.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""], null == f.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = f.url, n.href = n.href, f.crossDomain = qe.protocol + "//" + qe.host != n.protocol + "//" + n.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Ye(Ve, f, e, x), h) return x;
            for (s in (p = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Fe.test(f.type), c = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(ze, "+")) : (a = f.url.slice(c.length), f.data && (f.processData || "string" == typeof f.data) && (c += (Pe.test(c) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (c = c.replace(je, "$1"), a = (Pe.test(c) ? "&" : "?") + "_=" + Le.guid++ + a), f.url = c + a), f.ifModified && (E.lastModified[c] && x.setRequestHeader("If-Modified-Since", E.lastModified[c]), E.etag[c] && x.setRequestHeader("If-None-Match", E.etag[c])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + He + "; q=0.01" : "") : f.accepts["*"]), f.headers) x.setRequestHeader(s, f.headers[s]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, x, f) || h)) return x.abort();
            if (w = "abort", y.add(f.complete), x.done(f.success), x.fail(f.error), l = Ye(Be, f, e, x)) {
                if (x.readyState = 1, p && g.trigger("ajaxSend", [x, f]), h) return x;
                f.async && 0 < f.timeout && (d = S.setTimeout(function () {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    h = !1, l.send(r, T)
                } catch (t) {
                    if (h) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, e, i, n) {
                var s, a, r, o = e;
                h || (h = !0, d && S.clearTimeout(d), l = void 0, u = n || "", x.readyState = 0 < t ? 4 : 0, n = 200 <= t && t < 300 || 304 === t, i && (r = function (t, e, i) {
                    for (var n, s, a, r, o = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in o)
                            if (o[s] && o[s].test(n)) {
                                l.unshift(s);
                                break
                            } if (l[0] in i) a = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                a = s;
                                break
                            }
                            r = r || s
                        }
                        a = a || r
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(f, x, i)), !n && -1 < E.inArray("script", f.dataTypes) && (f.converters["text script"] = function () {}), r = function (t, e, i, n) {
                    var s, a, r, o, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (a = u.shift(); a;)
                        if (t.responseFields[a] && (i[t.responseFields[a]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(r = c[l + " " + a] || c["* " + a]))
                            for (s in c)
                                if ((o = s.split(" "))[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {
                                    !0 === r ? r = c[s] : !0 !== c[s] && (a = o[0], u.unshift(o[1]));
                                    break
                                } if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: r ? t : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, r, x, n), n ? (f.ifModified && ((i = x.getResponseHeader("Last-Modified")) && (E.lastModified[c] = i), (i = x.getResponseHeader("etag")) && (E.etag[c] = i)), 204 === t || "HEAD" === f.type ? o = "nocontent" : 304 === t ? o = "notmodified" : (o = r.state, s = r.data, n = !(a = r.error))) : (a = o, !t && o || (o = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || o) + "", n ? v.resolveWith(m, [s, o, x]) : v.rejectWith(m, [x, o, a]), x.statusCode(b), b = void 0, p && g.trigger(n ? "ajaxSuccess" : "ajaxError", [x, f, n ? s : a]), y.fireWith(m, [x, o]), p && (g.trigger("ajaxComplete", [x, f]), --E.active || E.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function (t, e, i) {
            return E.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return E.get(t, void 0, e, "script")
        }
    }), E.each(["get", "post"], function (t, s) {
        E[s] = function (t, e, i, n) {
            return b(e) && (n = n || i, i = e, e = void 0), E.ajax(E.extend({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            }, E.isPlainObject(t) && t))
        }
    }), E.ajaxPrefilter(function (t) {
        for (var e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), E._evalUrl = function (t, e, i) {
        return E.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (t) {
                E.globalEval(t, e, i)
            }
        })
    }, E.fn.extend({
        wrapAll: function (t) {
            return this[0] && (b(t) && (t = t.call(this[0])), t = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (i) {
            return b(i) ? this.each(function (t) {
                E(this).wrapInner(i.call(this, t))
            }) : this.each(function () {
                var t = E(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function (e) {
            var i = b(e);
            return this.each(function (t) {
                E(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (t) {
        return !E.expr.pseudos.visible(t)
    }, E.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new S.XMLHttpRequest
        } catch (t) {}
    };
    var Ge = {
            0: 200,
            1223: 204
        },
        Je = E.ajaxSettings.xhr();
    y.cors = !!Je && "withCredentials" in Je, y.ajax = Je = !!Je, E.ajaxTransport(function (s) {
        var a, r;
        if (y.cors || Je && !s.crossDomain) return {
            send: function (t, e) {
                var i, n = s.xhr();
                if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                    for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                a = function (t) {
                    return function () {
                        a && (a = r = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Ge[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = a(), r = n.onerror = n.ontimeout = a("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function () {
                    4 === n.readyState && S.setTimeout(function () {
                        a && r()
                    })
                }, a = a("abort");
                try {
                    n.send(s.hasContent && s.data || null)
                } catch (t) {
                    if (a) throw t
                }
            },
            abort: function () {
                a && a()
            }
        }
    }), E.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return E.globalEval(t), t
            }
        }
    }), E.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), E.ajaxTransport("script", function (i) {
        var n, s;
        if (i.crossDomain || i.scriptAttrs) return {
            send: function (t, e) {
                n = E("<script>").attr(i.scriptAttrs || {}).prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", s = function (t) {
                    n.remove(), s = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), C.head.appendChild(n[0])
            },
            abort: function () {
                s && s()
            }
        }
    });
    var Ue = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ue.pop() || E.expando + "_" + Le.guid++;
            return this[t] = !0, t
        }
    }), E.ajaxPrefilter("json jsonp", function (t, e, i) {
        var n, s, a, r = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
        if (r || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Qe, "$1" + n) : !1 !== t.jsonp && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
            return a || E.error(n + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = S[n], S[n] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === s ? E(S).removeProp(n) : S[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, Ue.push(n)), a && b(s) && s(a[0]), a = s = void 0
        }), "script"
    }), y.createHTMLDocument = ((d = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === d.childNodes.length), E.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (y.createHTMLDocument ? ((n = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, e.head.appendChild(n)) : e = C), n = !i && [], (i = M.exec(t)) ? [e.createElement(i[1])] : (i = vt([t], e, n), n && n.length && E(n).remove(), E.merge([], i.childNodes)));
        var n
    }, E.fn.load = function (t, e, i) {
        var n, s, a, r = this,
            o = t.indexOf(" ");
        return -1 < o && (n = Te(t.slice(o)), t = t.slice(0, o)), b(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && E.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            a = arguments, r.html(n ? E("<div>").append(E.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, a || [t.responseText, e, t])
            })
        }), this
    }, E.expr.pseudos.animated = function (e) {
        return E.grep(E.timers, function (t) {
            return e === t.elem
        }).length
    }, E.offset = {
        setOffset: function (t, e, i) {
            var n, s, a, r, o = E.css(t, "position"),
                l = E(t),
                c = {};
            "static" === o && (t.style.position = "relative"), a = l.offset(), n = E.css(t, "top"), r = E.css(t, "left"), r = ("absolute" === o || "fixed" === o) && -1 < (n + r).indexOf("auto") ? (s = (o = l.position()).top, o.left) : (s = parseFloat(n) || 0, parseFloat(r) || 0), b(e) && (e = e.call(t, i, E.extend({}, a))), null != e.top && (c.top = e.top - a.top + s), null != e.left && (c.left = e.left - a.left + r), "using" in e ? e.using.call(t, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), l.css(c))
        }
    }, E.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                E.offset.setOffset(this, e, t)
            });
            var t, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), i = i.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(n, "position")) e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === E.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((s = E(t).offset()).top += E.css(t, "borderTopWidth", !0), s.left += E.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - s.top - E.css(n, "marginTop", !0),
                    left: e.left - s.left - E.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === E.css(t, "position");) t = t.offsetParent;
                return t || nt
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, s) {
        var a = "pageYOffset" === s;
        E.fn[e] = function (t) {
            return B(this, function (t, e, i) {
                var n;
                return m(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i ? n ? n[s] : t[e] : void(n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }), E.each(["top", "left"], function (t, i) {
        E.cssHooks[i] = Gt(y.pixelPosition, function (t, e) {
            if (e) return e = Wt(t, i), qt.test(e) ? E(t).position()[i] + "px" : e
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function (r, o) {
        E.each({
            padding: "inner" + r,
            content: o,
            "": "outer" + r
        }, function (n, a) {
            E.fn[a] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    s = n || (!0 === t || !0 === e ? "margin" : "border");
                return B(this, function (t, e, i) {
                    var n;
                    return m(t) ? 0 === a.indexOf("outer") ? t["inner" + r] : t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? E.css(t, e, s) : E.style(t, e, i, s)
                }, o, i ? t : void 0, i)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        E.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), E.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
        E.fn[i] = function (t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    });
    var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function (t, e) {
        var i, n;
        if ("string" == typeof e && (n = t[e], e = t, t = n), b(t)) return i = o.call(arguments, 2), (n = function () {
            return t.apply(e || this, i.concat(o.call(arguments)))
        }).guid = t.guid = t.guid || E.guid++, n
    }, E.holdReady = function (t) {
        t ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = _, E.isFunction = b, E.isWindow = m, E.camelCase = Y, E.type = f, E.now = Date.now, E.isNumeric = function (t) {
        var e = E.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, E.trim = function (t) {
        return null == t ? "" : (t + "").replace(Ke, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Ze = S.jQuery,
        ti = S.$;
    return E.noConflict = function (t) {
        return S.$ === E && (S.$ = ti), t && S.jQuery === E && (S.jQuery = Ze), E
    }, void 0 === t && (S.jQuery = S.$ = E), E
}),
function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (l) {
    "use strict";
    var c = "animsition",
        u = {
            init: function (s) {
                s = l.extend({
                    inClass: "fade-in",
                    outClass: "fade-out",
                    inDuration: 1500,
                    outDuration: 800,
                    linkElement: ".animsition-link",
                    loading: !0,
                    loadingParentElement: "body",
                    loadingClass: "animsition-loading",
                    loadingInner: "",
                    timeout: !1,
                    timeoutCountdown: 5e3,
                    onLoadEvent: !0,
                    browser: ["animation-duration", "-webkit-animation-duration"],
                    overlay: !1,
                    overlayClass: "animsition-overlay-slide",
                    overlayParentElement: "body",
                    transition: function (t) {
                        window.location.href = t
                    }
                }, s), u.settings = {
                    timer: !1,
                    data: {
                        inClass: "animsition-in-class",
                        inDuration: "animsition-in-duration",
                        outClass: "animsition-out-class",
                        outDuration: "animsition-out-duration",
                        overlay: "animsition-overlay"
                    },
                    events: {
                        inStart: "animsition.inStart",
                        inEnd: "animsition.inEnd",
                        outStart: "animsition.outStart",
                        outEnd: "animsition.outEnd"
                    }
                };
                var t = u.supportCheck.call(this, s);
                return t || !(0 < s.browser.length) || t && this.length ? (u.optionCheck.call(this, s) && l("." + s.overlayClass).length <= 0 && u.addOverlay.call(this, s), s.loading && l("." + s.loadingClass).length <= 0 && u.addLoading.call(this, s), this.each(function () {
                    var n = this,
                        t = l(this),
                        e = l(window),
                        i = l(document);
                    t.data(c) || (s = l.extend({}, s), t.data(c, {
                        options: s
                    }), s.timeout && u.addTimer.call(n), s.onLoadEvent && e.on("load." + c, function () {
                        u.settings.timer && clearTimeout(u.settings.timer), u.in.call(n)
                    }), e.on("pageshow." + c, function (t) {
                        t.originalEvent.persisted && u.in.call(n)
                    }), e.on("unload." + c, function () {}), i.on("click." + c, s.linkElement, function (t) {
                        t.preventDefault();
                        var e = l(this),
                            i = e.attr("href");
                        2 === t.which || t.metaKey || t.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && t.ctrlKey ? window.open(i, "_blank") : u.out.call(n, e, i)
                    }))
                })) : ("console" in window || (window.console = {}, window.console.log = function (t) {
                    return t
                }), this.length || console.log("Animsition: Element does not exist on page."), t || console.log("Animsition: Does not support this browser."), u.destroy.call(this))
            },
            addOverlay: function (t) {
                l(t.overlayParentElement).prepend('<div class="' + t.overlayClass + '"></div>')
            },
            addLoading: function (t) {
                l(t.loadingParentElement).append('<div class="' + t.loadingClass + '">' + t.loadingInner + "</div>")
            },
            removeLoading: function () {
                var t = l(this).data(c).options;
                l(t.loadingParentElement).children("." + t.loadingClass).fadeOut().remove()
            },
            addTimer: function () {
                var t = this,
                    e = l(this).data(c).options;
                u.settings.timer = setTimeout(function () {
                    u.in.call(t), l(window).off("load." + c)
                }, e.timeoutCountdown)
            },
            supportCheck: function (t) {
                var e = l(this),
                    i = t.browser,
                    n = i.length,
                    s = !1;
                0 === n && (s = !0);
                for (var a = 0; a < n; a++)
                    if ("string" == typeof e.css(i[a])) {
                        s = !0;
                        break
                    } return s
            },
            optionCheck: function (t) {
                var e = l(this);
                return !(!t.overlay && !e.data(u.settings.data.overlay))
            },
            animationCheck: function (t, e, i) {
                var n = l(this).data(c).options,
                    s = typeof t,
                    a = !e && "number" == s,
                    s = e && "string" == s && 0 < t.length;
                return a || s || (e && i ? t = n.inClass : !e && i ? t = n.inDuration : e && !i ? t = n.outClass : e || i || (t = n.outDuration)), t
            },
            in: function () {
                var t = this,
                    e = l(this),
                    i = e.data(c).options,
                    n = e.data(u.settings.data.inDuration),
                    s = e.data(u.settings.data.inClass),
                    a = u.animationCheck.call(t, n, !1, !0),
                    r = u.animationCheck.call(t, s, !0, !0),
                    n = u.optionCheck.call(t, i),
                    s = e.data(c).outClass;
                i.loading && u.removeLoading.call(t), s && e.removeClass(s), (n ? u.inOverlay : u.inDefault).call(t, r, a)
            },
            inDefault: function (t, e) {
                var i = l(this);
                i.css({
                    "animation-duration": e + "ms"
                }).addClass(t).trigger(u.settings.events.inStart).animateCallback(function () {
                    i.removeClass(t).css({
                        opacity: 1
                    }).trigger(u.settings.events.inEnd)
                })
            },
            inOverlay: function (t, e) {
                var i = l(this),
                    n = i.data(c).options;
                i.css({
                    opacity: 1
                }).trigger(u.settings.events.inStart), l(n.overlayParentElement).children("." + n.overlayClass).css({
                    "animation-duration": e + "ms"
                }).addClass(t).animateCallback(function () {
                    i.trigger(u.settings.events.inEnd)
                })
            },
            out: function (t, e) {
                var i = this,
                    n = l(this),
                    s = n.data(c).options,
                    a = t.data(u.settings.data.outClass),
                    r = n.data(u.settings.data.outClass),
                    o = t.data(u.settings.data.outDuration),
                    t = n.data(u.settings.data.outDuration),
                    r = a || r,
                    t = o || t,
                    r = u.animationCheck.call(i, r, !0, !1),
                    t = u.animationCheck.call(i, t, !1, !1),
                    s = u.optionCheck.call(i, s);
                n.data(c).outClass = r, (s ? u.outOverlay : u.outDefault).call(i, r, t, e)
            },
            outDefault: function (t, e, i) {
                var n = l(this),
                    s = n.data(c).options;
                n.css({
                    "animation-duration": e + 1 + "ms"
                }).addClass(t).trigger(u.settings.events.outStart).animateCallback(function () {
                    n.trigger(u.settings.events.outEnd), s.transition(i)
                })
            },
            outOverlay: function (t, e, i) {
                var n = l(this),
                    s = n.data(c).options,
                    a = n.data(u.settings.data.inClass),
                    a = u.animationCheck.call(this, a, !0, !0);
                l(s.overlayParentElement).children("." + s.overlayClass).css({
                    "animation-duration": e + 1 + "ms"
                }).removeClass(a).addClass(t).trigger(u.settings.events.outStart).animateCallback(function () {
                    n.trigger(u.settings.events.outEnd), s.transition(i)
                })
            },
            destroy: function () {
                return this.each(function () {
                    var t = l(this);
                    l(window).off("." + c), t.css({
                        opacity: 1
                    }).removeData(c)
                })
            }
        };
    l.fn.animateCallback = function (e) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var t = l(this);
            t.on(i, function () {
                return t.off(i), e.call(this)
            })
        })
    }, l.fn.animsition = function (t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void l.error("Method " + t + " does not exist on jQuery." + c) : u.init.apply(this, arguments)
    }
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function n(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function x(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function M(t) {
        return "string" == typeof t
    }

    function d(t) {
        return "function" == typeof t
    }

    function T(t) {
        return "number" == typeof t
    }

    function s(t) {
        return void 0 === t
    }

    function S(t) {
        return "object" == typeof t
    }

    function D(t) {
        return !1 !== t
    }

    function e() {
        return "undefined" != typeof window
    }

    function C(t) {
        return d(t) || M(t)
    }

    function i(t) {
        return (yt = ut(t, te)) && ei
    }

    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function E(t, e) {
        return !e && console.warn(t)
    }

    function a(t, e) {
        return t && (te[t] = e) && yt && (yt[t] = e) || te
    }

    function k() {
        return 0
    }

    function O(t) {
        var e, i, n = t[0];
        if (S(n) || d(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (i = oe.length; i-- && !oe[i].targetTest(n););
            e = oe[i]
        }
        for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new ke(t[i], e))) || t.splice(i, 1);
        return t
    }

    function z(t) {
        return t._gsap || O(he(t))[0]._gsap
    }

    function r(t, e) {
        var i = t[e];
        return d(i) ? t[e]() : s(i) && t.getAttribute(e) || i
    }

    function h(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function I(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function o(t, e, i) {
        var n, s = T(t[1]),
            a = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            r = t[a];
        if (s && (r.duration = t[1]), r.parent = i, e) {
            for (n = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = D(i.vars.inherit) && i.parent;
            r.immediateRender = D(n.immediateRender), e < 2 ? r.runBackwards = 1 : r.startAt = t[a - 1]
        }
        return r
    }

    function j() {
        var t, e, i = ie.length,
            n = ie.slice(0);
        for (ne = {}, t = ie.length = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function l(t, e, i, n) {
        ie.length && j(), t.render(e, i, n), ie.length && j()
    }

    function c(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Zt).length < 2 ? e : t
    }

    function u(t) {
        return t
    }

    function N(t, e) {
        for (var i in e) i in t || (t[i] = e[i]);
        return t
    }

    function p(t, e) {
        for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
    }

    function f(t, e) {
        for (var i in e) t[i] = S(e[i]) ? f(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }

    function F(t, e) {
        var i, n = {};
        for (i in t) i in e || (n[i] = t[i]);
        return n
    }

    function _(t) {
        var e = t.parent || ft,
            i = t.keyframes ? p : N;
        if (D(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent;
        return t
    }

    function m(t, e, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s = e._prev,
            a = e._next;
        s ? s._next = a : t[i] === e && (t[i] = a), a ? a._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null
    }

    function R(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function g(t) {
        for (var e = t; e;) e._dirty = 1, e = e.parent;
        return t
    }

    function v(t) {
        return t._repeat ? dt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function y(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function P(t) {
        return t._end = I(t._start + (t._tDur / Math.abs(t._ts || t._pauseTS || Ft) || 0))
    }

    function A(t, e) {
        var i;
        if ((e._time || e._initted && !e._dur) && (i = y(t.rawTime(), e), (!e._dur || ue(0, e.totalDuration(), i) - e._tTime > Ft) && e.render(i, !0)), g(t)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (i = t; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -Ft
        }
    }

    function b(t, e, i, n) {
        return e.parent && R(e), e._start = I(i + e._delay), e._end = I(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function (t, e, i, n, s) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var a, r = t[n];
                if (s)
                    for (a = e[s]; r && r[s] > a;) r = r._prev;
                r ? (e._next = r._next, r._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = r, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || A(t, e), t
    }

    function $(t, e, i, n) {
        return $e(t, e), !t._initted || !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== ve.frame && (ie.push(t), t._lazy = [e, n])
    }

    function w(t, e, i) {
        var n = t._repeat,
            e = I(e);
        return t._dur = e, t._tDur = n ? n < 0 ? 1e12 : I(e * (n + 1) + t._rDelay * n) : e, i || g(t.parent), t.parent && P(t), t
    }

    function V(t) {
        return t instanceof Le ? g(t) : w(t, t._dur)
    }

    function B(t, e) {
        var i, n = t.labels,
            s = t._recent || ce,
            a = t.duration() >= Nt ? s.endTime(!1) : t._dur;
        return M(e) && (isNaN(e) || e in n) ? "<" === (i = e.charAt(0)) || ">" === i ? ("<" === i ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (i = e.indexOf("=")) < 0 ? (e in n || (n[e] = a), n[e]) : (n = +(e.charAt(i - 1) + e.substr(i + 1)), 1 < i ? B(t, e.substr(0, i - 1)) + n : a + n) : null == e ? a : +e
    }

    function H(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function q(t) {
        return (t + "").substr((parseFloat(t) + "").length)
    }

    function X(t, e) {
        return t && S(t) && "length" in t && (!e && !t.length || t.length - 1 in t && S(t[0])) && !t.nodeType && t !== mt
    }

    function Y(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function W(t) {
        if (d(t)) return t;
        var p = S(t) ? t : {
                each: t
            },
            f = Se(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            v = {},
            t = 0 < m && m < 1,
            y = isNaN(m) || t,
            b = p.axis,
            w = m,
            x = m;
        return M(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            } [m] || 0 : !t && y && (w = m[0], x = m[1]),
            function (t, e, i) {
                var n, s, a, r, o, l, c, u, d = (i || p).length,
                    h = v[d];
                if (!h) {
                    if (!(u = "auto" === p.grid ? 0 : (p.grid || [1, Nt])[1])) {
                        for (l = -Nt; l < (l = i[u++].getBoundingClientRect().left) && u < d;);
                        u--
                    }
                    for (h = v[d] = [], n = y ? Math.min(u, d) * w - .5 : m % u, s = y ? d * x / u - .5 : m / u | 0, c = Nt, o = l = 0; o < d; o++) a = o % u - n, r = s - (o / u | 0), h[o] = r = b ? Math.abs("y" === b ? r : a) : Ht(a * a + r * r), l < r && (l = r), r < c && (c = r);
                    "random" === m && Y(h), h.max = l - c, h.min = c, h.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < u ? d - 1 : b ? "y" === b ? d / u : u : Math.max(u, d / u)) || 0) * ("edges" === m ? -1 : 1), h.b = d < 0 ? g - d : g, h.u = q(p.amount || p.each) || 0, f = f && d < 0 ? Te(f) : f
                }
                return d = (h[t] - h.min) / h.max || 0, I(h.b + (f ? f(d) : d) * h.v) + h.u
            }
    }

    function G(e) {
        var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (t) {
            return ~~(Math.round(parseFloat(t) / e) * e * i) / i + (T(t) ? 0 : q(t))
        }
    }

    function J(l, t) {
        var c, u, e = Yt(l);
        return !e && S(l) && (c = e = l.radius || Nt, l.values ? (l = he(l.values), (u = !T(l[0])) && (c *= c)) : l = G(l.increment)), H(t, e ? d(l) ? function (t) {
            return u = l(t), Math.abs(u - t) <= c ? u : t
        } : function (t) {
            for (var e, i, n = parseFloat(u ? t.x : t), s = parseFloat(u ? t.y : 0), a = Nt, r = 0, o = l.length; o--;)(e = u ? (e = l[o].x - n) * e + (i = l[o].y - s) * i : Math.abs(l[o] - n)) < a && (a = e, r = o);
            return r = !c || a <= c ? l[r] : t, u || r === t || T(t) ? r : r + q(t)
        } : G(l))
    }

    function U(t, e, i, n) {
        return H(Yt(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
            return Yt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n
        })
    }

    function Q(e, i, t) {
        return H(t, function (t) {
            return e[~~i(t)]
        })
    }

    function K(t) {
        for (var e, i, n, s, a = 0, r = ""; ~(e = t.indexOf("random(", a));) n = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(s ? Zt : Wt), r += t.substr(a, e - a) + U(s ? i : +i[0], +i[1], +i[2] || 1e-5), a = n + 1;
        return r + t.substr(a, t.length - a)
    }

    function Z(t, e, i) {
        var n, s, a, r = t.labels,
            o = Nt;
        for (n in r)(s = r[n] - e) < 0 == !!i && s && o > (s = Math.abs(s)) && (a = n, o = s);
        return a
    }

    function tt(t) {
        return R(t), t.progress() < 1 && pt(t, "onInterrupt"), t
    }

    function et(t, e, i) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * pe + .5 | 0
    }

    function it(t, e, i) {
        var n, s, a, r, o, l, c, u = t ? T(t) ? [t >> 16, t >> 8 & pe, t & pe] : 0 : fe.black;
        if (!u) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t]) u = fe[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (a = t.charAt(3)) + a), u = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & pe, t & pe];
            else if ("hsl" === t.substr(0, 3))
                if (u = c = t.match(Wt), e) {
                    if (~t.indexOf("=")) return u = t.match(Gt), i && u.length < 4 && (u[3] = 1), u
                } else r = +u[0] % 360 / 360, o = u[1] / 100, n = 2 * (l = u[2] / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < u.length && (u[3] *= 1), u[0] = et(r + 1 / 3, n, s), u[1] = et(r, n, s), u[2] = et(r - 1 / 3, n, s);
            else u = t.match(Wt) || fe.transparent;
            u = u.map(Number)
        }
        return e && !c && (n = u[0] / pe, s = u[1] / pe, a = u[2] / pe, l = ((t = Math.max(n, s, a)) + (e = Math.min(n, s, a))) / 2, t === e ? r = o = 0 : (c = t - e, o = .5 < l ? c / (2 - t - e) : c / (t + e), r = t === n ? (s - a) / c + (s < a ? 6 : 0) : t === s ? (a - n) / c + 2 : (n - s) / c + 4, r *= 60), u[0] = ~~(r + .5), u[1] = ~~(100 * o + .5), u[2] = ~~(100 * l + .5)), i && u.length < 4 && (u[3] = 1), u
    }

    function nt(t) {
        var e = [],
            i = [],
            n = -1;
        return t.split(me).forEach(function (t) {
            t = t.match(Jt) || [];
            e.push.apply(e, t), i.push(n += t.length + 1)
        }), e.c = i, e
    }

    function st(t, e, i) {
        var n, s, a, r, o = "",
            l = (t + o).match(me),
            c = e ? "hsla(" : "rgba(",
            u = 0;
        if (!l) return t;
        if (l = l.map(function (t) {
                return (t = it(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), i && (a = nt(t), (n = i.c).join(o) !== a.c.join(o)))
            for (r = (s = t.replace(me, "1").split(Jt)).length - 1; u < r; u++) o += s[u] + (~n.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : i).shift());
        if (!s)
            for (r = (s = t.split(me)).length - 1; u < r; u++) o += s[u] + l[u];
        return o + s[r]
    }

    function at(t) {
        var e = t.join(" ");
        if (me.lastIndex = 0, me.test(e)) return e = ge.test(e), t[1] = st(t[1], e), t[0] = st(t[0], e, nt(t[1])), !0
    }

    function rt(t, e, i, n) {
        void 0 === i && (i = function (t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var s, a = {
            easeIn: e,
            easeOut: i,
            easeInOut: n
        };
        return h(t, function (t) {
            for (var e in be[t] = te[t] = a, be[s = t.toLowerCase()] = i, a) be[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = be[t + "." + e] = a[e]
        }), 1
    }

    function ot(e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function lt(i, t, e) {
        function n(t) {
            return 1 === t ? 1 : s * Math.pow(2, -10 * t) * Xt((t - a) * r) + 1
        }
        var s = 1 <= t ? t : 1,
            a = (r = (e || (i ? .3 : .45)) / (t < 1 ? t : 1)) / Rt * (Math.asin(1 / s) || 0),
            t = "out" === i ? n : "in" === i ? function (t) {
                return 1 - n(1 - t)
            } : ot(n),
            r = Rt / r;
        return t.config = function (t, e) {
            return lt(i, t, e)
        }, t
    }

    function ct(e, i) {
        function n(t) {
            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
        }
        void 0 === i && (i = 1.70158);
        var t = "out" === e ? n : "in" === e ? function (t) {
            return 1 - n(1 - t)
        } : ot(n);
        return t.config = function (t) {
            return ct(e, t)
        }, t
    }

    function ut(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function dt(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }

    function ht(e, t, i, n, s) {
        var a = t - e,
            r = n - i;
        return H(s, function (t) {
            return i + (t - e) / a * r
        })
    }

    function pt(t, e, i) {
        var n = t.vars,
            s = n[e];
        return s && (e = n[e + "Params"], t = n.callbackScope || t, i && ie.length && j(), e ? s.apply(t, e) : s.call(t))
    }
    var ft, mt, gt, vt, yt, bt, wt, xt, Tt, St, Ct, Et, kt, _t, Mt, Lt, Pt, At, $t, Dt, Ot, zt, It = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        jt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Nt = 1e8,
        Ft = 1 / Nt,
        Rt = 2 * Math.PI,
        Vt = Rt / 4,
        Bt = 0,
        Ht = Math.sqrt,
        qt = Math.cos,
        Xt = Math.sin,
        Yt = Array.isArray,
        Wt = /(?:-?\.?\d|\.)+/gi,
        Gt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Jt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Ut = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        Qt = /\(([^()]+)\)/i,
        Kt = /[+-]=-?[\.\d]+/,
        Zt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        te = {},
        ee = {},
        ie = [],
        ne = {},
        se = {},
        ae = {},
        re = 30,
        oe = [],
        le = "",
        ce = {
            _start: 0,
            endTime: k
        },
        ue = function (t, e, i) {
            return i < t ? t : e < i ? e : i
        },
        de = [].slice,
        he = function (t, e) {
            return !M(t) || e || !gt && ye() ? Yt(t) ? (i = e, void 0 === n && (n = []), t.forEach(function (t) {
                return M(t) && !i || X(t, 1) ? n.push.apply(n, he(t)) : n.push(t)
            }) || n) : X(t) ? de.call(t, 0) : t ? [t] : [] : de.call(vt.querySelectorAll(t), 0);
            var i, n
        },
        pe = 255,
        fe = {
            aqua: [0, pe, pe],
            lime: [0, pe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, pe],
            navy: [0, 0, 128],
            white: [pe, pe, pe],
            olive: [128, 128, 0],
            yellow: [pe, pe, 0],
            orange: [pe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [pe, 0, 0],
            pink: [pe, 192, 203],
            cyan: [0, pe, pe],
            transparent: [pe, pe, pe, 0]
        },
        me = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in fe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ge = /hsl[a]?\(/,
        ve = (_t = Date.now, Mt = 500, Lt = 33, Pt = _t(), At = Pt, Dt = $t = 1 / 240, kt = {
            time: 0,
            frame: 0,
            tick: function () {
                Ce(!0)
            },
            wake: function () {
                bt && (!gt && e() && (mt = gt = window, vt = mt.document || {}, te.gsap = ei, (mt.gsapVersions || (mt.gsapVersions = [])).push(ei.version), i(yt || mt.GreenSockGlobals || !mt.gsap && mt || {}), Et = mt.requestAnimationFrame), St && kt.sleep(), Ct = Et || function (t) {
                    return setTimeout(t, 1e3 * (Dt - kt.time) + 1 | 0)
                }, Tt = 1, Ce(2))
            },
            sleep: function () {
                (Et ? mt.cancelAnimationFrame : clearTimeout)(St), Tt = 0, Ct = k
            },
            lagSmoothing: function (t, e) {
                Mt = t || 1e8, Lt = Math.min(e, Mt, 0)
            },
            fps: function (t) {
                $t = 1 / (t || 240), Dt = kt.time + $t
            },
            add: function (t) {
                Ot.indexOf(t) < 0 && Ot.push(t), ye()
            },
            remove: function (t) {
                ~(t = Ot.indexOf(t)) && Ot.splice(t, 1)
            },
            _listeners: Ot = []
        }),
        ye = function () {
            return !Tt && ve.wake()
        },
        be = {},
        we = /^[\d.\-M][\d.\-,\s]/,
        xe = /["']/g,
        Te = function (e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        },
        Se = function (t, e) {
            return t && (d(t) ? t : be[t] || (n = ((i = t) + "").split("("), (t = be[n[0]]) && 1 < n.length && t.config ? t.config.apply(null, ~i.indexOf("{") ? [function (t) {
                for (var e, i, n, s = {}, a = t.substr(1, t.length - 3).split(":"), r = a[0], o = 1, l = a.length; o < l; o++) i = a[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), s[r] = isNaN(n) ? n.replace(xe, "").trim() : +n, r = i.substr(e + 1).trim();
                return s
            }(n[1])] : Qt.exec(i)[1].split(",").map(c)) : be._CE && we.test(i) ? be._CE("", i) : t)) || e;
            var i, n
        };

    function Ce(e) {
        var t, i, n = _t() - At,
            s = !0 === e;
        Mt < n && (Pt += n - Lt), At += n, kt.time = (At - Pt) / 1e3, (0 < (t = kt.time - Dt) || s) && (kt.frame++, Dt += t + ($t <= t ? .004 : $t - t), i = 1), s || (St = Ct(Ce)), i && Ot.forEach(function (t) {
            return t(kt.time, n, kt.frame, e)
        })
    }

    function Ee(t) {
        return t < 1 / 2.75 ? zt * t * t : t < .7272727272727273 ? zt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? zt * (t -= 2.25 / 2.75) * t + .9375 : zt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    h("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var i = e < 5 ? e + 1 : e;
        rt(t + ",Power" + (i - 1), e ? function (t) {
            return Math.pow(t, i)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, i)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        })
    }), be.Linear.easeNone = be.none = be.Linear.easeIn, rt("Elastic", lt("in"), lt("out"), lt()), zt = 7.5625, rt("Bounce", function (t) {
        return 1 - Ee(1 - t)
    }, Ee), rt("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), rt("Circ", function (t) {
        return -(Ht(1 - t * t) - 1)
    }), rt("Sine", function (t) {
        return 1 - qt(t * Vt)
    }), rt("Back", ct("in"), ct("out"), ct()), be.SteppedEase = be.steps = te.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
                n = t + (e ? 0 : 1),
                s = e ? 1 : 0;
            return function (t) {
                return ((n * ue(0, .99999999, t) | 0) + s) * i
            }
        }
    }, jt.ease = be["quad.out"], h("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return le += t + "," + t + "Params,"
    });
    var ke = function (t, e) {
            this.id = Bt++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : r, this.set = e ? e.getSetter : Ye
        },
        _e = ((An = Me.prototype).delay = function (t) {
            return t || 0 === t ? (this._delay = t, this) : this._delay
        }, An.duration = function (t) {
            return arguments.length ? w(this, t) : this.totalDuration() && this._dur
        }, An.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, w(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, An.totalTime = function (t, e) {
            if (ye(), !arguments.length) return this._tTime;
            var i = this.parent || this._dp;
            if (i && i.smoothChildTiming && this._ts) {
                for (this._start = I(i._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), P(this), i._dirty || g(i); i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                !this.parent && this._dp.autoRemoveChildren && b(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Ft) && (this._ts || (this._pTime = t), l(this, t, e)), this
        }, An.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + v(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, An.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, An.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + v(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, An.iteration = function (t, e) {
            var i = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? dt(this._tTime, i) + 1 : 1
        }, An.timeScale = function (t) {
            if (!arguments.length) return this._ts || this._pauseTS || 0;
            if (null !== this._pauseTS) return this._pauseTS = t, this;
            var e = this.parent && this._ts ? y(this.parent._time, this) : this._tTime;
            return this._ts = t,
                function (t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(e, !0))
        }, An.paused = function (t) {
            var e = !this._ts;
            return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ye(), this._ts = this._pauseTS || 1, this._pauseTS = null, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Ft) && Math.abs(this._zTime) !== Ft))), this) : e
        }, An.startTime = function (t) {
            return arguments.length ? (this.parent && this.parent._sort && b(this.parent, this, t - this._delay), this) : this._start
        }, An.endTime = function (t) {
            return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, An.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? y(e.rawTime(t), this) : this._tTime : this._tTime
        }, An.repeat = function (t) {
            return arguments.length ? (this._repeat = t, V(this)) : this._repeat
        }, An.repeatDelay = function (t) {
            return arguments.length ? (this._rDelay = t, V(this)) : this._rDelay
        }, An.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, An.seek = function (t, e) {
            return this.totalTime(B(this, t), D(e))
        }, An.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, D(e))
        }, An.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, An.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, An.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, An.resume = function () {
            return this.paused(!1)
        }, An.reversed = function (t) {
            var e = this._ts || this._pauseTS || 0;
            return arguments.length ? (t !== this.reversed() && (this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0
        }, An.invalidate = function () {
            return this._initted = 0, this._zTime = -Ft, this
        }, An.isActive = function (t) {
            var e, i = this.parent || this._dp,
                n = this._start;
            return !(i && !(this._ts && (this._initted || !t) && i.isActive(t) && (e = i.rawTime(!0)) >= n && e < this.endTime(!0) - Ft))
        }, An.eventCallback = function (t, e, i) {
            var n = this.vars;
            return 1 < arguments.length ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, An.then = function (n) {
            var s = this;
            return new Promise(function (e) {
                function t() {
                    var t = s.then;
                    s.then = null, d(i) && (i = i(s)) && (i.then || i === s) && (s.then = t), e(i), s.then = t
                }
                var i = d(n) ? n : u;
                s._initted && 1 === s.totalProgress() && 0 <= s._ts || !s._tTime && s._ts < 0 ? t() : s._prom = t
            })
        }, An.kill = function () {
            tt(this)
        }, Me);

    function Me(t, e) {
        var i = t.parent || ft;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = t.reversed ? -1 : 1, w(this, +t.duration, 1), this.data = t.data, Tt || ve.wake(), i && b(i, this, e || 0 === e ? e : i._time, 1), t.paused && this.paused(!0)
    }
    N(_e.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Ft,
        _prom: 0,
        _pauseTS: null
    });
    var Le = function (i) {
        function t(t, e) {
            return void 0 === t && (t = {}), (e = i.call(this, t, e) || this).labels = {}, e.smoothChildTiming = !!t.smoothChildTiming, e.autoRemoveChildren = !!t.autoRemoveChildren, e._sort = D(t.sortChildren), e.parent && A(e.parent, x(e)), e
        }
        n(t, i);
        var e = t.prototype;
        return e.to = function (t, e, i, n) {
            return new je(t, o(arguments, 0, this), B(this, T(e) ? n : i)), this
        }, e.from = function (t, e, i, n) {
            return new je(t, o(arguments, 1, this), B(this, T(e) ? n : i)), this
        }, e.fromTo = function (t, e, i, n, s) {
            return new je(t, o(arguments, 2, this), B(this, T(e) ? s : n)), this
        }, e.set = function (t, e, i) {
            return e.duration = 0, e.parent = this, _(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new je(t, e, B(this, i), 1), this
        }, e.call = function (t, e, i) {
            return b(this, je.delayedCall(0, t, e), B(this, i))
        }, e.staggerTo = function (t, e, i, n, s, a, r) {
            return i.duration = e, i.stagger = i.stagger || n, i.onComplete = a, i.onCompleteParams = r, i.parent = this, new je(t, i, B(this, s)), this
        }, e.staggerFrom = function (t, e, i, n, s, a, r) {
            return i.runBackwards = 1, _(i).immediateRender = D(i.immediateRender), this.staggerTo(t, e, i, n, s, a, r)
        }, e.staggerFromTo = function (t, e, i, n, s, a, r, o) {
            return n.startAt = i, _(n).immediateRender = D(n.immediateRender), this.staggerTo(t, e, n, s, a, r, o)
        }, e.render = function (t, e, i) {
            var n, s, a, r, o, l, c, u, d, h, p = this._time,
                f = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                g = this !== ft && f - Ft < t && 0 <= t ? f : t < Ft ? 0 : t,
                v = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (g !== this._tTime || i || v) {
                if (p !== this._time && m && (g += this._time - p, t += this._time - p), n = g, u = this._start, o = !(c = this._ts), v && (m || (p = this._zTime), !t && e || (this._zTime = t)), this._repeat && (b = this._yoyo, (m < (n = I(g % (y = m + this._rDelay))) || f === g) && (n = m), (r = ~~(g / y)) && r === g / y && (n = m, r--), b && 1 & r && (n = m - n, h = 1), r !== (d = dt(this._tTime, y)) && !this._lock)) {
                    var y = b && 1 & d,
                        b = y === (b && 1 & r);
                    if (r < d && (y = !y), p = y ? 0 : m, this._lock = 1, this.render(p, e, !m)._lock = 0, !e && this.parent && pt(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), p !== this._time || o != !this._ts) return this;
                    if (b && (this._lock = 2, p = y ? m + 1e-4 : -1e-4, this.render(p, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !o) return this
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, i) {
                        var n;
                        if (e < i)
                            for (n = t._first; n && n._start <= i;) {
                                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= i;) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, I(p), I(n))) && (g -= n - (n = l._start)), this._tTime = g, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), p || !n || e || pt(this, "onStart"), p <= n && 0 <= t)
                    for (s = this._first; s;) {
                        if (a = s._next, (s._act || n >= s._start) && s._ts && l !== s) {
                            if (s.parent !== this) return this.render(t, e, i);
                            if (s.render(0 < s._ts ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, i), n !== this._time || !this._ts && !o) {
                                l = 0, a && (g += this._zTime = -Ft);
                                break
                            }
                        }
                        s = a
                    } else {
                        s = this._last;
                        for (var w = t < 0 ? t : n; s;) {
                            if (a = s._prev, (s._act || w <= s._end) && s._ts && l !== s) {
                                if (s.parent !== this) return this.render(t, e, i);
                                if (s.render(0 < s._ts ? (w - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (w - s._start) * s._ts, e, i), n !== this._time || !this._ts && !o) {
                                    l = 0, a && (g += this._zTime = w ? -Ft : Ft);
                                    break
                                }
                            }
                            s = a
                        }
                    }
                if (l && !e && (this.pause(), l.render(p <= n ? 0 : -Ft)._zTime = p <= n ? 1 : -1, this._ts)) return this._start = u, P(this), this.render(t, e, i);
                this._onUpdate && !e && pt(this, "onUpdate", !0), (g === f && f >= this.totalDuration() || !g && this._ts < 0) && (u !== this._start && Math.abs(c) === Math.abs(this._ts) || (!t && m || !(t && 0 < this._ts || !g && this._ts < 0) || R(this, 1), e || t < 0 && !p || (pt(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())))
            }
            return this
        }, e.add = function (t, e) {
            var i = this;
            if (T(e) || (e = B(this, e)), !(t instanceof _e)) {
                if (Yt(t)) return t.forEach(function (t) {
                    return i.add(t, e)
                }), g(this);
                if (M(t)) return this.addLabel(t, e);
                if (!d(t)) return this;
                t = je.delayedCall(0, t)
            }
            return this !== t ? b(this, t, e) : this
        }, e.getChildren = function (t, e, i, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -Nt);
            for (var s = [], a = this._first; a;) a._start >= n && (a instanceof je ? e && s.push(a) : (i && s.push(a), t && s.push.apply(s, a.getChildren(!0, e, i)))), a = a._next;
            return s
        }, e.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, e.remove = function (t) {
            return M(t) ? this.removeLabel(t) : d(t) ? this.killTweensOf(t) : (m(this, t), t === this._recent && (this._recent = this._last), g(this))
        }, e.totalTime = function (t, e) {
            return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = I(ve.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function (t, e) {
            return this.labels[t] = B(this, e), this
        }, e.removeLabel = function (t) {
            return delete this.labels[t], this
        }, e.addPause = function (t, e, i) {
            i = je.delayedCall(0, e || k, i);
            return i.data = "isPause", this._hasPause = 1, b(this, i, B(this, t))
        }, e.removePause = function (t) {
            var e = this._first;
            for (t = B(this, t); e;) e._start === t && "isPause" === e.data && R(e), e = e._next
        }, e.killTweensOf = function (t, e, i) {
            for (var n = this.getTweensOf(t, i), s = n.length; s--;) De !== n[s] && n[s].kill(t, e);
            return this
        }, e.getTweensOf = function (t, e) {
            for (var i, n = [], s = he(t), a = this._first; a;) a instanceof je ? ! function (t, e) {
                for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
                return n < i
            }(a._targets, s) || e && !a.isActive("started" === e) || n.push(a) : (i = a.getTweensOf(s, e)).length && n.push.apply(n, i), a = a._next;
            return n
        }, e.tweenTo = function (t, e) {
            e = e || {};
            var i = this,
                n = B(i, t),
                t = e.startAt,
                s = e.onStart,
                a = e.onStartParams,
                r = je.to(i, N(e, {
                    ease: "none",
                    lazy: !1,
                    time: n,
                    duration: e.duration || Math.abs(n - (t && "time" in t ? t.time : i._time)) / i.timeScale() || Ft,
                    onStart: function () {
                        i.pause();
                        var t = e.duration || Math.abs(n - i._time) / i.timeScale();
                        r._dur !== t && w(r, t).render(r._time, !0, !0), s && s.apply(r, a || [])
                    }
                }));
            return r
        }, e.tweenFromTo = function (t, e, i) {
            return this.tweenTo(e, N({
                startAt: {
                    time: B(this, t)
                }
            }, i))
        }, e.recent = function () {
            return this._recent
        }, e.nextLabel = function (t) {
            return void 0 === t && (t = this._time), Z(this, B(this, t))
        }, e.previousLabel = function (t) {
            return void 0 === t && (t = this._time), Z(this, B(this, t), 1)
        }, e.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Ft)
        }, e.shiftChildren = function (t, e, i) {
            void 0 === i && (i = 0);
            for (var n, s = this._first, a = this.labels; s;) s._start >= i && (s._start += t), s = s._next;
            if (e)
                for (n in a) a[n] >= i && (a[n] += t);
            return g(this)
        }, e.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, e.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._time = this._tTime = 0, t && (this.labels = {}), g(this)
        }, e.totalDuration = function (t) {
            var e, i, n, s = 0,
                a = this,
                r = a._last,
                o = Nt;
            if (arguments.length) return a._repeat < 0 ? a : a.timeScale(a.totalDuration() / t);
            if (a._dirty) {
                for (n = a.parent; r;) e = r._prev, r._dirty && r.totalDuration(), o < (i = r._start) && a._sort && r._ts && !a._lock ? (a._lock = 1, b(a, r, i - r._delay, 1)._lock = 0) : o = i, i < 0 && r._ts && (s -= i, (!n && !a._dp || n && n.smoothChildTiming) && (a._start += i / a._ts, a._time -= i, a._tTime -= i), a.shiftChildren(-i, !1, -1e20), o = 0), s < (i = P(r)) && r._ts && (s = i), r = e;
                w(a, a === ft && a._time > s ? a._time : Math.min(Nt, s), 1), a._dirty = 0
            }
            return a._tDur
        }, t.updateRoot = function (t) {
            if (ft._ts && (l(ft, y(t, ft)), wt = ve.frame), ve.frame >= re) {
                re += It.autoSleep || 120;
                var e = ft._first;
                if ((!e || !e._ts) && It.autoSleep && ve._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || ve.sleep()
                }
            }
        }, t
    }(_e);

    function Pe(t, e, i, n, s, a) {
        var r, o, l, c;
        if (se[t] && !1 !== (r = new se[t]).init(s, r.rawVars ? e[t] : function (t, e, i, n, s) {
                if (d(t) && (t = Oe(t, s, e, i, n)), !S(t) || t.style && t.nodeType || Yt(t)) return M(t) ? Oe(t, s, e, i, n) : t;
                var a, r = {};
                for (a in t) r[a] = Oe(t[a], s, e, i, n);
                return r
            }(e[t], n, s, a, i), i, n, a) && (i._pt = o = new Qe(i._pt, s, t, 0, 1, r.render, r, 0, r.priority), i !== xt))
            for (l = i._ptLookup[i._targets.indexOf(s)], c = r._props.length; c--;) l[r._props[c]] = o;
        return r
    }
    N(Le.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function Ae(t, e, i, n, s, a, r, o, l) {
        d(n) && (n = n(s || 0, t, a));
        var s = t[e],
            a = "get" !== i ? i : d(s) ? l ? t[e.indexOf("set") || !d(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : s,
            i = d(s) ? l ? Xe : qe : He;
        if (M(n) && (~n.indexOf("random(") && (n = K(n)), "=" === n.charAt(1) && (n = parseFloat(a) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (q(a) || 0))), a !== n) return isNaN(a + n) ? (s || e in t || L(e, n), function (t, e, i, n, s, a, r) {
            var o, l, c, u, d, h = new Qe(this._pt, t, e, 0, 1, Je, null, s),
                p = 0,
                f = 0;
            for (h.b = i, h.e = n, i += "", (s = ~(n += "").indexOf("random(")) && (n = K(n)), a && (a(a = [i, n], t, e), i = a[0], n = a[1]), o = i.match(Ut) || []; d = Ut.exec(n);) c = d[0], u = n.substring(p, d.index), l ? l = (l + 1) % 5 : "rgba(" === u.substr(-5) && (l = 1), c !== o[f++] && (d = parseFloat(o[f - 1]) || 0, h._pt = {
                _next: h._pt,
                p: u || 1 === f ? u : ",",
                s: d,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - d,
                m: l && l < 4 ? Math.round : 0
            }, p = Ut.lastIndex);
            return h.c = p < n.length ? n.substring(p, n.length) : "", h.fp = r, (Kt.test(n) || s) && (h.e = 0), this._pt = h
        }.call(this, t, e, a, n, i, o || It.stringFilter, l)) : (i = new Qe(this._pt, t, e, +a || 0, n - (a || 0), "boolean" == typeof s ? Ge : We, 0, i), l && (i.fp = l), r && i.modifier(r, this, t), this._pt = i)
    }

    function $e(t, e) {
        var i, n, s, a, r, o, l, c, u, d, h, p, f = t.vars,
            m = f.ease,
            g = f.startAt,
            v = f.immediateRender,
            y = f.lazy,
            b = f.onUpdate,
            w = f.onUpdateParams,
            x = f.callbackScope,
            T = f.runBackwards,
            S = f.yoyoEase,
            C = f.keyframes,
            E = f.autoRevert,
            k = t._dur,
            _ = t._startAt,
            M = t._targets,
            L = t.parent,
            P = L && "nested" === L.data ? L.parent._targets : M,
            A = "auto" === t._overwrite,
            $ = t.timeline;
        if (!$ || C && m || (m = "none"), t._ease = Se(m, jt.ease), t._yEase = S ? Te(Se(!0 === S ? m : S, jt.ease)) : 0, S && t._yoyo && !t._repeat && (S = t._yEase, t._yEase = t._ease, t._ease = S), !$) {
            if (_ && _.render(-1, !0).kill(), g) {
                if (R(t._startAt = je.set(M, N({
                        data: "isStart",
                        overwrite: !1,
                        parent: L,
                        immediateRender: !0,
                        lazy: D(y),
                        startAt: null,
                        delay: 0,
                        onUpdate: b,
                        onUpdateParams: w,
                        callbackScope: x,
                        stagger: 0
                    }, g))), v)
                    if (0 < e) E || (t._startAt = 0);
                    else if (k) return
            } else if (T && k)
                if (_) E || (t._startAt = 0);
                else if (e && (v = !1), R(t._startAt = je.set(M, ut(F(f, ee), {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: v && D(y),
                    immediateRender: v,
                    stagger: 0,
                    parent: L
                }))), v) {
                if (!e) return
            } else $e(t._startAt, Ft);
            for (i = F(f, ee), p = (c = M[t._pt = 0] ? z(M[0]).harness : 0) && f[c.prop], y = k && D(y) || y && !k, n = 0; n < M.length; n++) {
                if (l = (r = M[n])._gsap || O(M)[n]._gsap, t._ptLookup[n] = d = {}, ne[l.id] && j(), h = P === M ? n : P.indexOf(r), c && !1 !== (u = new c).init(r, p || i, t, h, P) && (t._pt = a = new Qe(t._pt, r, u.name, 0, 1, u.render, u, 0, u.priority), u._props.forEach(function (t) {
                        d[t] = a
                    }), u.priority && (o = 1)), !c || p)
                    for (s in i) se[s] && (u = Pe(s, i, t, h, r, P)) ? u.priority && (o = 1) : d[s] = a = Ae.call(t, r, s, "get", i[s], h, P, 0, f.stringFilter);
                t._op && t._op[n] && t.kill(r, t._op[n]), A && t._pt && (De = t, ft.killTweensOf(r, d, "started"), De = 0), t._pt && y && (ne[l.id] = 1)
            }
            o && Ue(t), t._onInit && t._onInit(t)
        }
        t._from = !$ && !!f.runBackwards, t._onUpdate = b, t._initted = 1
    }
    var De, Oe = function (t, e, i, n, s) {
            return d(t) ? t.call(e, i, n, s) : M(t) && ~t.indexOf("random(") ? K(t) : t
        },
        ze = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ie = (ze + ",id,stagger,delay,duration,paused").split(","),
        je = function (w) {
            function s(t, e, i, n) {
                var s;
                "number" == typeof e && (i.duration = e, e = i, i = null);
                var a, r, o, l, c, u, d, h, p = (s = w.call(this, n ? e : _(e), i) || this).vars,
                    f = p.duration,
                    m = p.delay,
                    g = p.immediateRender,
                    v = p.stagger,
                    y = p.overwrite,
                    n = p.keyframes,
                    i = p.defaults,
                    p = s.parent,
                    b = (Yt(t) ? T(t[0]) : "length" in e) ? [t] : he(t);
                if (s._targets = b.length ? O(b) : E("GSAP target " + t + " not found. https://greensock.com", !It.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = y, n || v || C(f) || C(m)) {
                    if (e = s.vars, (a = s.timeline = new Le({
                            data: "nested",
                            defaults: i || {}
                        })).kill(), a.parent = x(s), n) N(a.vars.defaults, {
                        ease: "none"
                    }), n.forEach(function (t) {
                        return a.to(b, t, ">")
                    });
                    else {
                        if (l = b.length, d = v ? W(v) : k, S(v))
                            for (c in v) ~ze.indexOf(c) && ((h = h || {})[c] = v[c]);
                        for (r = 0; r < l; r++) {
                            for (c in o = {}, e) Ie.indexOf(c) < 0 && (o[c] = e[c]);
                            o.stagger = 0, h && ut(o, h), e.yoyoEase && !e.repeat && (o.yoyoEase = e.yoyoEase), u = b[r], o.duration = +Oe(f, x(s), r, u, b), o.delay = (+Oe(m, x(s), r, u, b) || 0) - s._delay, !v && 1 === l && o.delay && (s._delay = m = o.delay, s._start += m, o.delay = 0), a.to(u, o, d(r, u, b))
                        }
                        f = m = 0
                    }
                    f || s.duration(f = a.duration())
                } else s.timeline = 0;
                return !0 === y && (De = x(s), ft.killTweensOf(b), De = 0), p && A(p, x(s)), (g || !f && !n && s._start === p._time && D(g) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(x(s)) && "nested" !== p.data) && (s._tTime = -Ft, s.render(Math.max(0, -m))), s
            }
            n(s, w);
            var t = s.prototype;
            return t.render = function (t, e, i) {
                var n, s, a, r, o, l, c, u, d, h = this._time,
                    p = this._tDur,
                    f = this._dur,
                    m = p - Ft < t && 0 <= t ? p : t < Ft ? 0 : t;
                if (f) {
                    if (m !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = m, u = this.timeline, this._repeat) {
                            if ((f < (n = I(m % (r = f + this._rDelay))) || p === m) && (n = f), (a = ~~(m / r)) && a === m / r && (n = f, a--), (l = this._yoyo && 1 & a) && (d = this._yEase, n = f - n), o = dt(this._tTime, r), n === h && !i && this._initted) return this;
                            a !== o && (!this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(r * a, !0).invalidate()._lock = 0))
                        }
                        if (!this._initted && $(this, n, i, e)) return this._tTime = 0, this;
                        for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(n / f), this._from && (this.ratio = c = 1 - c), h || !n || e || pt(this, "onStart"), s = this._pt; s;) s.r(c, s.d), s = s._next;
                        u && u.render(t < 0 ? t : !n && l ? -Ft : u._dur * c, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, i), !t && f || !(t && 0 < this._ts || !m && this._ts < 0) || R(this, 1), e || t < 0 && !h || m < p && 0 < this.timeScale() || (pt(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))
                    }
                } else ! function (t, e, i, n) {
                    var s, a = t._zTime < 0 ? 0 : 1,
                        r = e < 0 ? 0 : 1,
                        o = t._rDelay,
                        l = 0;
                    if (o && t._repeat && (l = ue(0, t._tDur, e), dt(l, o) !== dt(t._tTime, o) && (a = 1 - r, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !$(t, e, n, i)) && (r !== a || n || t._zTime === Ft || !e && t._zTime)) {
                        for (t._zTime = e || (i ? Ft : 0), t.ratio = r, t._from && (r = 1 - r), t._time = 0, t._tTime = l, i || pt(t, "onStart"), s = t._pt; s;) s.r(r, s.d), s = s._next;
                        !r && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n), t._onUpdate && (i || pt(t, "onUpdate")), l && t._repeat && !i && t.parent && pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === r && (t.ratio && R(t, 1), i || (pt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    }
                }(this, t, e, i);
                return this
            }, t.targets = function () {
                return this._targets
            }, t.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), w.prototype.invalidate.call(this)
            }, t.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return tt(this);
                if (this.timeline) return this.timeline.killTweensOf(t, e, De && !0 !== De.vars.overwrite), this;
                var i, n, s, a, r, o, l, c = this._targets,
                    u = t ? he(t) : c,
                    d = this._ptLookup,
                    t = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                        return i < 0
                    }(c, u)) return tt(this);
                for (i = this._op = this._op || [], "all" !== e && (M(e) && (r = {}, h(e, function (t) {
                        return r[t] = 1
                    }), e = r), e = function (t, e) {
                        var i, n, s, a, t = t[0] ? z(t[0]).harness : 0,
                            r = t && t.aliases;
                        if (!r) return e;
                        for (n in i = ut({}, e), r)
                            if (n in i)
                                for (s = (a = r[n].split(",")).length; s--;) i[a[s]] = i[n];
                        return i
                    }(c, e)), l = c.length; l--;)
                    if (~u.indexOf(c[l]))
                        for (r in n = d[l], "all" === e ? (i[l] = e, a = n, s = {}) : (s = i[l] = i[l] || {}, a = e), a)(o = n && n[r]) && ("kill" in o.d && !0 !== o.d.kill(r) || m(this, o, "_pt"), delete n[r]), "all" !== s && (s[r] = 1);
                return this._initted && !this._pt && t && tt(this), this
            }, s.to = function (t, e, i) {
                return new s(t, e, i)
            }, s.from = function (t, e) {
                return new s(t, o(arguments, 1))
            }, s.delayedCall = function (t, e, i, n) {
                return new s(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, s.fromTo = function (t, e, i) {
                return new s(t, o(arguments, 2))
            }, s.set = function (t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new s(t, e)
            }, s.killTweensOf = function (t, e, i) {
                return ft.killTweensOf(t, e, i)
            }, s
        }(_e);

    function Ne(t, e, i) {
        return t.setAttribute(e, i)
    }

    function Fe(t, e, i, n) {
        n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
    }
    N(je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), h("staggerTo,staggerFrom,staggerFromTo", function (i) {
        je[i] = function () {
            var t = new Le,
                e = de.call(arguments, 0);
            return e.splice("staggerFromTo" === i ? 5 : 4, 0, 0), t[i].apply(t, e)
        }
    });

    function Re(t, e) {
        for (var i = e._pt; i;) i.r(t, i.d), i = i._next
    }

    function Ve(t, e, i, n) {
        for (var s, a = this._pt; a;) s = a._next, a.p === n && a.modifier(t, e, i), a = s
    }

    function Be(t) {
        for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? m(this, n, "_pt") : n.dep || (e = 1), n = i;
        return !e
    }
    var He = function (t, e, i) {
            return t[e] = i
        },
        qe = function (t, e, i) {
            return t[e](i)
        },
        Xe = function (t, e, i, n) {
            return t[e](n.fp, i)
        },
        Ye = function (t, e) {
            return d(t[e]) ? qe : s(t[e]) && t.setAttribute ? Ne : He
        },
        We = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        Ge = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Je = function (t, e) {
            var i = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        Ue = function (t) {
            for (var e, i, n, s, a = t._pt; a;) {
                for (e = a._next, i = n; i && i.pr > a.pr;) i = i._next;
                (a._prev = i ? i._prev : s) ? a._prev._next = a: n = a, (a._next = i) ? i._prev = a : s = a, a = e
            }
            t._pt = n
        },
        Qe = (Ke.prototype.modifier = function (t, e, i) {
            this.mSet = this.mSet || this.set, this.set = Fe, this.m = t, this.mt = i, this.tween = e
        }, Ke);

    function Ke(t, e, i, n, s, a, r, o, l) {
        this.t = e, this.s = n, this.c = s, this.p = i, this.r = a || We, this.d = r || this, this.set = o || He, this.pr = l || 0, (this._next = t) && (t._prev = this)
    }
    h(le + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (t) {
        return ee[t] = 1
    }), te.TweenMax = te.TweenLite = je, te.TimelineLite = te.TimelineMax = Le, ft = new Le({
        sortChildren: !1,
        defaults: jt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), It.stringFilter = at;
    var Ze = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function (t) {
                var e = (t = !t.name && t.default || t).name,
                    i = d(t),
                    n = e && !i && t.init ? function () {
                        this._props = []
                    } : t,
                    s = {
                        init: k,
                        render: Re,
                        add: Ae,
                        kill: Be,
                        modifier: Ve,
                        rawVars: 0
                    },
                    i = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ye,
                        aliases: {},
                        register: 0
                    };
                if (ye(), t !== n) {
                    if (se[e]) return;
                    N(n, N(F(t, s), i)), ut(n.prototype, ut(s, F(t, i))), se[n.prop = e] = n, t.targetTest && (oe.push(n), ee[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                a(e, n), t.register && t.register(ei, n, Qe)
            })
        },
        timeline: function (t) {
            return new Le(t)
        },
        getTweensOf: function (t, e) {
            return ft.getTweensOf(t, e)
        },
        getProperty: function (n, t, e, i) {
            M(n) && (n = he(n)[0]);
            var s = z(n || {}).get,
                a = e ? u : c;
            return "native" === e && (e = ""), n && (t ? a((se[t] && se[t].get || s)(n, t, e, i)) : function (t, e, i) {
                return a((se[t] && se[t].get || s)(n, t, e, i))
            })
        },
        quickSetter: function (i, e, n) {
            if (1 < (i = he(i)).length) {
                var s = i.map(function (t) {
                        return ei.quickSetter(t, e, n)
                    }),
                    a = s.length;
                return function (t) {
                    for (var e = a; e--;) s[e](t)
                }
            }
            i = i[0] || {};
            var r = se[e],
                o = z(i),
                l = r ? function (t) {
                    var e = new r;
                    xt._pt = 0, e.init(i, n ? t + n : t, xt, 0, [i]), e.render(1, e), xt._pt && Re(1, xt)
                } : o.set(i, e);
            return r ? l : function (t) {
                return l(i, e, n ? t + n : t, o, 1)
            }
        },
        isTweening: function (t) {
            return 0 < ft.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Se(t.ease, jt.ease)), f(jt, t || {})
        },
        config: function (t) {
            return f(It, t || {})
        },
        registerEffect: function (t) {
            var n = t.name,
                i = t.effect,
                e = t.plugins,
                s = t.defaults,
                t = t.extendTimeline;
            (e || "").split(",").forEach(function (t) {
                return t && !se[t] && !te[t] && E(n + " effect requires " + t + " plugin.")
            }), ae[n] = function (t, e) {
                return i(he(t), N(e || {}, s))
            }, t && (Le.prototype[n] = function (t, e, i) {
                return this.add(ae[n](t, S(e) ? e : (i = e) && {}), i)
            })
        },
        registerEase: function (t, e) {
            be[t] = Se(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Se(t, e) : be
        },
        getById: function (t) {
            return ft.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i, n, s = new Le(t);
            for (s.smoothChildTiming = D(t.smoothChildTiming), ft.remove(s), s._dp = 0, s._time = s._tTime = ft._time, i = ft._first; i;) n = i._next, !e && !i._dur && i instanceof je && i.vars.onComplete === i._targets[0] || b(s, i, i._start - i._delay), i = n;
            return b(ft, s, 0), s
        },
        utils: {
            wrap: function t(e, i, n) {
                var s = i - e;
                return Yt(e) ? Q(e, t(0, e.length), i) : H(n, function (t) {
                    return (s + (t - e) % s) % s + e
                })
            },
            wrapYoyo: function t(e, i, n) {
                var s = i - e,
                    a = 2 * s;
                return Yt(e) ? Q(e, t(0, e.length - 1), i) : H(n, function (t) {
                    return e + (s < (t = (a + (t - e) % a) % a) ? a - t : t)
                })
            },
            distribute: W,
            random: U,
            snap: J,
            normalize: function (t, e, i) {
                return ht(t, e, 0, 1, i)
            },
            getUnit: q,
            clamp: function (e, i, t) {
                return H(t, function (t) {
                    return ue(e, i, t)
                })
            },
            splitColor: it,
            toArray: he,
            mapRange: ht,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function (e, i) {
                return function (t) {
                    return e(parseFloat(t)) + (i || q(t))
                }
            },
            interpolate: function t(e, i, n, s) {
                var a = isNaN(e + i) ? 0 : function (t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var r, o, l, c, u, d = M(e),
                        h = {};
                    if (!0 === n && (s = 1) && (n = null), d) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Yt(e) && !Yt(i)) {
                        for (l = [], c = e.length, u = c - 2, o = 1; o < c; o++) l.push(t(e[o - 1], e[o]));
                        c--, a = function (t) {
                            t *= c;
                            var e = Math.min(u, ~~t);
                            return l[e](t - e)
                        }, n = i
                    } else s || (e = ut(Yt(e) ? [] : {}, e));
                    if (!l) {
                        for (r in i) Ae.call(h, e, r, "get", i[r]);
                        a = function (t) {
                            return Re(t, h), d ? e.p : e
                        }
                    }
                }
                return H(n, a)
            },
            shuffle: Y
        },
        install: i,
        effects: ae,
        ticker: ve,
        updateRoot: Le.updateRoot,
        plugins: se,
        globalTimeline: ft,
        core: {
            PropTween: Qe,
            globals: a,
            Tween: je,
            Timeline: Le,
            Animation: _e,
            getCache: z,
            _removeLinkedListItem: m
        }
    };

    function ti(t, s) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, n, e) {
                e._onInit = function (t) {
                    var e, i;
                    if (M(n) && (e = {}, h(n, function (t) {
                            return e[t] = 1
                        }), n = e), s) {
                        for (i in e = {}, n) e[i] = s(n[i]);
                        n = e
                    }! function (t, e) {
                        var i, n, s, a = t._targets;
                        for (i in e)
                            for (n = a.length; n--;)(s = (s = t._ptLookup[n][i]) && s.d) && (s._pt && (s = function (t, e) {
                                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                                return i
                            }(s, i)), s && s.modifier && s.modifier(e[i], t, a[n], i))
                    }(t, n)
                }
            }
        }
    }
    h("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return Ze[t] = je[t]
    }), ve.add(Le.updateRoot), xt = Ze.to({}, {
        duration: 0
    });
    var ei = Ze.registerPlugin({
        name: "attr",
        init: function (t, e, i, n, s) {
            for (var a in e) this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], n, s, 0, 0, a), this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
        }
    }, ti("roundProps", G), ti("modifiers"), ti("snap", J)) || Ze;

    function ii(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ni(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function si(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function ai(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }

    function ri(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function oi(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function li(t, e, i) {
        return t.style[e] = i
    }

    function ci(t, e, i) {
        return t.style.setProperty(e, i)
    }

    function ui(t, e, i) {
        return t._gsap[e] = i
    }

    function di(t, e, i) {
        return t._gsap.scaleX = t._gsap.scaleY = i
    }

    function hi(t, e, i, n, s) {
        t = t._gsap;
        t.scaleX = t.scaleY = i, t.renderTransform(s, t)
    }

    function pi(t, e, i, n, s) {
        t = t._gsap;
        t[e] = i, t.renderTransform(s, t)
    }

    function fi(t, e) {
        e = $i.createElementNS ? $i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : $i.createElement(t);
        return e.style ? e : $i.createElement(t)
    }

    function mi(t, e, i) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(ln, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && mi(t, mn(e) || e, 1) || ""
    }

    function gi() {
        "undefined" == typeof window || (Di = ($i = window.document).documentElement, zi = fi("div") || {
            style: {}
        }, Ii = fi("div"), hn = mn(hn), pn = mn(pn), zi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ni = !!mn("perspective"), Oi = 1)
    }

    function vi(t) {
        var e, i = fi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
        if (Di.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = vi
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Di.removeChild(i), this.style.cssText = a, e
    }

    function yi(t, e) {
        for (var i = e.length; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
    }

    function bi(e) {
        var i;
        try {
            i = e.getBBox()
        } catch (t) {
            i = vi.call(e, !0)
        }
        return i && (i.width || i.height) || e.getBBox === vi || (i = vi.call(e, !0)), !i || i.width || i.x || i.y ? i : {
            x: +yi(e, ["x", "cx", "x1"]) || 0,
            y: +yi(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function wi(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !bi(t))
    }

    function xi(t, e) {
        e && (t = t.style, e in sn && (e = hn), t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(ln, "-$1").toLowerCase())) : t.removeAttribute(e))
    }

    function Ti(t, e, i, n, s, a) {
        a = new Qe(t._pt, e, i, 0, 1, a ? oi : ri);
        return (t._pt = a).b = n, a.e = s, t._props.push(i), a
    }

    function Si(t, e, i, n) {
        var s = parseFloat(i) || 0,
            a = (i + "").trim().substr((s + "").length) || "px",
            r = zi.style,
            o = cn.test(e),
            l = "svg" === t.tagName.toLowerCase(),
            c = (l ? "client" : "offset") + (o ? "Width" : "Height"),
            u = "px" === n;
        return n === a || !s || gn[n] || gn[a] ? s : (i = t.getCTM && wi(t), "%" === n && (sn[e] || ~e.indexOf("adius")) ? I(s / (i ? t.getBBox()[o ? "width" : "height"] : t[c]) * 100) : (r[o ? "width" : "height"] = 100 + (u ? a : n), l = ~e.indexOf("adius") || "em" === n && t.appendChild && !l ? t : t.parentNode, i && (l = (t.ownerSVGElement || {}).parentNode), l && l !== $i && l.appendChild || (l = $i.body), (i = l._gsap) && "%" === n && i.width && o && i.time === ve.time ? I(s / i.width * 100) : (l === t && (r.position = "static"), l.appendChild(zi), t = zi[c], l.removeChild(zi), r.position = "absolute", o && "%" === n && ((i = z(l)).time = ve.time, i.width = l[c]), I(u ? t * s / 100 : 100 / t * s))))
    }

    function Ci(t, e, i, n) {
        var s;
        return Oi || gi(), e in dn && "transform" !== e && ~(e = dn[e]).indexOf(",") && (e = e.split(",")[0]), sn[e] && "transform" !== e ? (s = xn(t, n), s = "transformOrigin" !== e ? s[e] : Tn(mi(t, pn)) + " " + s.zOrigin + "px") : (s = t.style[e]) && "auto" !== s && !n && !~(s + "").indexOf("calc(") || (s = yn[e] && yn[e](t, e, i) || mi(t, e) || r(t, e) || ("opacity" === e ? 1 : 0)), i && !~(s + "").indexOf(" ") ? Si(t, e, s, i) + i : s
    }

    function Ei(t, e, i, n) {
        var s;
        i && "none" !== i || (a = (s = mn(e, t, 1)) && mi(t, s, 1)) && a !== i && (e = s, i = a);
        var a, r, o, l, c, u, d, h, p, f, m = new Qe(this._pt, t.style, e, 0, 1, Je),
            g = 0,
            v = 0;
        if (m.b = i, m.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = mi(t, e) || n, t.style[e] = i), at(a = [i, n]), n = a[1], r = (i = a[0]).match(Jt) || [], (n.match(Jt) || []).length) {
            for (; u = Jt.exec(n);) h = u[0], d = n.substring(g, u.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), h !== (c = r[v++] || "") && (o = parseFloat(c) || 0, p = c.substr((o + "").length), (f = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)), u = parseFloat(h), h = h.substr((u + "").length), g = Jt.lastIndex - h.length, h || (h = h || It.units[e] || p, g === n.length && (n += h, m.e += h)), p !== h && (o = Si(t, e, c, h) || 0), m._pt = {
                _next: m._pt,
                p: d || 1 === v ? d : ",",
                s: o,
                c: f ? f * u : u - o,
                m: l && l < 4 ? Math.round : 0
            });
            m.c = g < n.length ? n.substring(g, n.length) : ""
        } else m.r = "display" === e && "none" === n ? oi : ri;
        return Kt.test(n) && (m.e = 0), this._pt = m
    }

    function ki(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, n, s, a = e.t,
                r = a.style,
                o = e.u,
                e = a._gsap;
            if ("all" === o || !0 === o) r.cssText = "", n = 1;
            else
                for (s = (o = o.split(",")).length; - 1 < --s;) i = o[s], sn[i] && (n = 1, i = "transformOrigin" === i ? pn : hn), xi(a, i);
            n && (xi(a, hn), e && (e.svg && a.removeAttribute("transform"), xn(a, 1), e.uncache = 1))
        }
    }

    function _i(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function Mi(t) {
        t = mi(t, hn);
        return _i(t) ? bn : t.substr(7).match(Gt).map(I)
    }

    function Li(t, e) {
        var i, n, s, a = t._gsap || z(t),
            r = t.style,
            o = Mi(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (o = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? bn : o : (o !== bn || t.offsetParent || t === Di || a.svg || (n = r.display, r.display = "block", (a = t.parentNode) && t.offsetParent || (s = 1, i = t.nextSibling, Di.appendChild(t)), o = Mi(t), n ? r.display = n : xi(t, "display"), s && (i ? a.insertBefore(t, i) : a ? a.appendChild(t) : Di.removeChild(t))), e && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    }

    function Pi(t, e, i, n, s, a) {
        var r, o, l = t._gsap,
            c = s || Li(t, !0),
            u = l.xOrigin || 0,
            d = l.yOrigin || 0,
            h = l.xOffset || 0,
            p = l.yOffset || 0,
            f = c[0],
            m = c[1],
            g = c[2],
            v = c[3],
            y = c[4],
            b = c[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            s = parseFloat(w[1]) || 0;
        i ? c !== bn && (r = f * v - m * g) && (o = x * (-m / r) + s * (f / r) - (f * b - m * y) / r, x = x * (v / r) + s * (-g / r) + (g * b - v * y) / r, s = o) : (x = (o = bi(t)).x + (~w[0].indexOf("%") ? x / 100 * o.width : x), s = o.y + (~(w[1] || w[0]).indexOf("%") ? s / 100 * o.height : s)), n || !1 !== n && l.smooth ? (y = x - u, b = s - d, l.xOffset = h + (y * f + b * g) - y, l.yOffset = p + (y * m + b * v) - b) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = s, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!i, t.style[pn] = "0px 0px", a && (Ti(a, l, "xOrigin", u, x), Ti(a, l, "yOrigin", d, s), Ti(a, l, "xOffset", h, l.xOffset), Ti(a, l, "yOffset", p, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + s)
    }

    function Ai(t, e, i) {
        var n = q(e);
        return I(parseFloat(e) + parseFloat(Si(t, "x", i + "px", n))) + n
    }
    je.version = Le.version = ei.version = "3.2.4", bt = 1, e() && ye();
    var $i, Di, Oi, zi, Ii, ji, Ni, Fi = be.Power0,
        Ri = be.Power1,
        Vi = be.Power2,
        Bi = be.Power3,
        Hi = be.Power4,
        qi = be.Linear,
        Xi = be.Quad,
        Yi = be.Cubic,
        Wi = be.Quart,
        Gi = be.Quint,
        Ji = be.Strong,
        Ui = be.Elastic,
        Qi = be.Back,
        Ki = be.SteppedEase,
        Zi = be.Bounce,
        tn = be.Sine,
        en = be.Expo,
        nn = be.Circ,
        sn = {},
        an = 180 / Math.PI,
        rn = Math.PI / 180,
        on = Math.atan2,
        ln = /([A-Z])/g,
        cn = /(?:left|right|width|margin|padding|x)/i,
        un = /[\s,\(]\S/,
        dn = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        hn = "transform",
        pn = hn + "Origin",
        fn = "O,Moz,ms,Ms,Webkit".split(","),
        mn = function (t, e, i) {
            var n = (e || zi).style,
                s = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(fn[s] + t in n););
            return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? fn[s] : "") + t
        },
        gn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        vn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        yn = {
            clearProps: function (t, e, i, n, s) {
                if ("isFromStart" !== s.data) {
                    e = t._pt = new Qe(t._pt, e, i, 0, 0, ki);
                    return e.u = n, e.pr = -10, e.tween = s, t._props.push(i), 1
                }
            }
        },
        bn = [1, 0, 0, 1, 0, 0],
        wn = {},
        xn = function (t, e) {
            var i = t._gsap || new ke(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n, s, a, r, o, l, c, u, d, h, p, f, m, g, v, y, b, w, x, T, S, C, E, k, _, M, L = t.style,
                P = i.scaleX < 0,
                A = mi(t, pn) || "0",
                $ = n = s = r = o = l = c = u = 0,
                D = a = 1;
            return i.svg = !(!t.getCTM || !wi(t)), d = Li(t, i.svg), i.svg && (x = !i.uncache && t.getAttribute("data-svg-origin"), Pi(t, x || A, !!x || i.originIsAbsolute, !1 !== i.smooth, d)), _ = i.xOrigin || 0, h = i.yOrigin || 0, d !== bn && (m = d[0], g = d[1], v = d[2], y = d[3], $ = b = d[4], n = w = d[5], 6 === d.length ? (D = Math.sqrt(m * m + g * g), a = Math.sqrt(y * y + v * v), r = m || g ? on(g, m) * an : 0, (c = v || y ? on(v, y) * an + r : 0) && (a *= Math.cos(c * rn)), i.svg && ($ -= _ - (_ * m + h * v), n -= h - (_ * g + h * y))) : (M = d[6], k = d[7], C = d[8], E = d[9], e = d[10], _ = d[11], $ = d[12], n = d[13], s = d[14], o = (h = on(M, e)) * an, h && (x = b * (p = Math.cos(-h)) + C * (f = Math.sin(-h)), T = w * p + E * f, S = M * p + e * f, C = b * -f + C * p, E = w * -f + E * p, e = M * -f + e * p, _ = k * -f + _ * p, b = x, w = T, M = S), l = (h = on(-v, e)) * an, h && (p = Math.cos(-h), _ = y * (f = Math.sin(-h)) + _ * p, m = x = m * p - C * f, g = T = g * p - E * f, v = S = v * p - e * f), r = (h = on(g, m)) * an, h && (x = m * (p = Math.cos(h)) + g * (f = Math.sin(h)), T = b * p + w * f, g = g * p - m * f, w = w * p - b * f, m = x, b = T), o && 359.9 < Math.abs(o) + Math.abs(r) && (o = r = 0, l = 180 - l), D = I(Math.sqrt(m * m + g * g + v * v)), a = I(Math.sqrt(w * w + M * M)), h = on(b, w), c = 2e-4 < Math.abs(h) ? h * an : 0, u = _ ? 1 / (_ < 0 ? -_ : _) : 0), i.svg && (d = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !_i(mi(t, hn)), d && t.setAttribute("transform", d))), 90 < Math.abs(c) && Math.abs(c) < 270 && (P ? (D *= -1, c += r <= 0 ? 180 : -180, r += r <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), i.x = ((i.xPercent = $ && Math.round(t.offsetWidth / 2) === Math.round(-$) ? -50 : 0) ? 0 : $) + "px", i.y = ((i.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.z = s + "px", i.scaleX = I(D), i.scaleY = I(a), i.rotation = I(r) + "deg", i.rotationX = I(o) + "deg", i.rotationY = I(l) + "deg", i.skewX = c + "deg", i.skewY = "0deg", i.transformPerspective = u + "px", (i.zOrigin = parseFloat(A.split(" ")[2]) || 0) && (L[pn] = Tn(A)), i.xOffset = i.yOffset = 0, i.force3D = It.force3D, i.renderTransform = i.svg ? Mn : Ni ? _n : Sn, i.uncache = 0, i
        },
        Tn = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Sn = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, _n(t, e)
        },
        Cn = "0deg",
        En = "0px",
        kn = ") ",
        _n = function (t, e) {
            var i = e || this,
                n = i.xPercent,
                s = i.yPercent,
                a = i.x,
                r = i.y,
                o = i.z,
                l = i.rotation,
                c = i.rotationY,
                u = i.rotationX,
                d = i.skewX,
                h = i.skewY,
                p = i.scaleX,
                f = i.scaleY,
                m = i.transformPerspective,
                g = i.force3D,
                v = i.target,
                y = i.zOrigin,
                b = "",
                e = "auto" === g && t && 1 !== t || !0 === g;
            !y || u === Cn && c === Cn || (i = parseFloat(c) * rn, t = Math.sin(i), g = Math.cos(i), i = parseFloat(u) * rn, a = Ai(v, a, t * (t = Math.cos(i)) * -y), r = Ai(v, r, -Math.sin(i) * -y), o = Ai(v, o, g * t * -y + y)), m !== En && (b += "perspective(" + m + kn), (n || s) && (b += "translate(" + n + "%, " + s + "%) "), !e && a === En && r === En && o === En || (b += o !== En || e ? "translate3d(" + a + ", " + r + ", " + o + ") " : "translate(" + a + ", " + r + kn), l !== Cn && (b += "rotate(" + l + kn), c !== Cn && (b += "rotateY(" + c + kn), u !== Cn && (b += "rotateX(" + u + kn), d === Cn && h === Cn || (b += "skew(" + d + ", " + h + kn), 1 === p && 1 === f || (b += "scale(" + p + ", " + f + kn), v.style[hn] = b || "translate(0, 0)"
        },
        Mn = function (t, e) {
            var i, n, s, a, r, o = e || this,
                l = o.xPercent,
                c = o.yPercent,
                u = o.x,
                d = o.y,
                h = o.rotation,
                p = o.skewX,
                f = o.skewY,
                m = o.scaleX,
                g = o.scaleY,
                v = o.target,
                y = o.xOrigin,
                b = o.yOrigin,
                w = o.xOffset,
                x = o.yOffset,
                T = o.forceCSS,
                e = parseFloat(u),
                o = parseFloat(d),
                h = parseFloat(h),
                p = parseFloat(p);
            (f = parseFloat(f)) && (p += f = parseFloat(f), h += f), h || p ? (h *= rn, p *= rn, i = Math.cos(h) * m, n = Math.sin(h) * m, s = Math.sin(h - p) * -g, a = Math.cos(h - p) * g, p && (f *= rn, r = Math.tan(p - f), s *= r = Math.sqrt(1 + r * r), a *= r, f && (r = Math.tan(f), i *= r = Math.sqrt(1 + r * r), n *= r)), i = I(i), n = I(n), s = I(s), a = I(a)) : (i = m, a = g, n = s = 0), (e && !~(u + "").indexOf("px") || o && !~(d + "").indexOf("px")) && (e = Si(v, "x", u, "px"), o = Si(v, "y", d, "px")), (y || b || w || x) && (e = I(e + y - (y * i + b * s) + w), o = I(o + b - (y * n + b * a) + x)), (l || c) && (e = I(e + l / 100 * (r = v.getBBox()).width), o = I(o + c / 100 * r.height)), r = "matrix(" + i + "," + n + "," + s + "," + a + "," + e + "," + o + ")", v.setAttribute("transform", r), T && (v.style[hn] = r)
        };
    h("padding,margin,Width,Radius", function (e, i) {
        var t = "Bottom",
            o = (i < 3 ? ["Top", "Right", t, "Left"] : ["TopLeft", "TopRight", t + "Right", t + "Left"]).map(function (t) {
                return i < 2 ? e + t : "border" + t + e
            });
        yn[1 < i ? "border" + e : e] = function (e, t, i, n, s) {
            var a, r;
            if (arguments.length < 4) return a = o.map(function (t) {
                return Ci(e, t, i)
            }), 5 === (r = a.join(" ")).split(a[0]).length ? a[0] : r;
            a = (n + "").split(" "), r = {}, o.forEach(function (t, e) {
                return r[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, r, s)
        }
    });
    var Ln, Pn = {
        name: "css",
        register: gi,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, i, n, s) {
            var a, r, o, l, c, u, d, h, p, f, m, g, v, y, b, w, x, T, S, C, E, k = this._props,
                _ = t.style;
            for (c in Oi || gi(), e)
                if ("autoRound" !== c && (r = e[c], !se[c] || !Pe(c, e, i, n, t, s)))
                    if (x = typeof r, w = yn[c], "function" === x && (x = typeof (r = r.call(i, n, t, s))), "string" === x && ~r.indexOf("random(") && (r = K(r)), w) w(this, t, c, r, i) && (g = 1);
                    else if ("--" === c.substr(0, 2)) this.add(_, "setProperty", getComputedStyle(t).getPropertyValue(c) + "", r + "", n, s, 0, 0, c);
            else {
                if (a = Ci(t, c), l = parseFloat(a), (d = "string" === x && "=" === r.charAt(1) ? +(r.charAt(0) + "1") : 0) && (r = r.substr(2)), o = parseFloat(r), c in dn && ("autoAlpha" === c && (1 === l && "hidden" === Ci(t, "visibility") && o && (l = 0), Ti(this, _, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = dn[c]).indexOf(",") && (c = c.split(",")[0])), h = c in sn)
                    if (p || ((f = t._gsap).renderTransform || xn(t), m = !1 !== e.smoothOrigin && f.smooth, (p = this._pt = new Qe(this._pt, _, hn, 0, 1, f.renderTransform, f, 0, -1)).dep = 1), "scale" === c) this._pt = new Qe(this._pt, f, "scaleY", f.scaleY, d ? d * o : o - f.scaleY), k.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            E = C = S = void 0, S = (T = r).split(" "), C = S[0], E = S[1] || "50%", "top" !== C && "bottom" !== C && "left" !== E && "right" !== E || (T = C, C = E, E = T), S[0] = vn[C] || C, S[1] = vn[E] || E, r = S.join(" "), f.svg ? Pi(t, r, 0, m, 0, this) : ((u = parseFloat(r.split(" ")[2]) || 0) !== f.zOrigin && Ti(this, f, "zOrigin", f.zOrigin, u), Ti(this, _, c, Tn(a), Tn(r)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            Pi(t, r, 1, m, 0, this);
                            continue
                        }
                        if (c in wn) {
                            v = this, y = f, b = c, w = l, x = d, E = E = C = T = void 0, T = 360, C = M(S = r), E = parseFloat(S) * (C && ~S.indexOf("rad") ? an : 1), E = w + (x = x ? E * x : E - w) + "deg", C && ("short" === (S = S.split("_")[1]) && (x %= T) != x % 180 && (x += x < 0 ? T : -T), "cw" === S && x < 0 ? x = (x + 36e9) % T - ~~(x / T) * T : "ccw" === S && 0 < x && (x = (x - 36e9) % T - ~~(x / T) * T)), v._pt = x = new Qe(v._pt, y, b, w, x, ni), x.e = E, x.u = "deg", v._props.push(b);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Ti(this, f, "smooth", f.smooth, r);
                            continue
                        }
                        if ("force3D" === c) {
                            f[c] = r;
                            continue
                        }
                        if ("transform" === c) {
                            ! function (t, e, i) {
                                var n, s, a, r, o, l = Ii.style,
                                    c = i._gsap;
                                for (s in l.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", l[hn] = e, $i.body.appendChild(Ii), n = xn(Ii, 1), sn)(a = c[s]) !== (r = n[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (a = q(a) !== (o = q(r)) ? Si(i, s, a, o) : parseFloat(a), r = parseFloat(r), t._pt = new Qe(t._pt, c, s, a, r - a, ii), t._pt.u = o || 0, t._props.push(s));
                                $i.body.removeChild(Ii)
                            }(this, r, t);
                            continue
                        }
                    }
                else c in _ || (c = mn(c) || c);
                if (h || (o || 0 === o) && (l || 0 === l) && !un.test(r) && c in _)(b = (a + "").substr((l + "").length)) !== (u = (r + "").substr(((o = o || 0) + "").length) || (c in It.units ? It.units[c] : b)) && (l = Si(t, c, a, u)), this._pt = new Qe(this._pt, h ? f : _, c, l, d ? d * o : o - l, "px" !== u || !1 === e.autoRound || h ? ii : ai), this._pt.u = u || 0, b !== u && (this._pt.b = a, this._pt.r = si);
                else if (c in _) Ei.call(this, t, c, a, r);
                else {
                    if (!(c in t)) {
                        L(c, r);
                        continue
                    }
                    this.add(t, c, t[c], r, n, s)
                }
                k.push(c)
            }
            g && Ue(this)
        },
        get: Ci,
        aliases: dn,
        getSetter: function (t, e, i) {
            var n = dn[e];
            return n && n.indexOf(",") < 0 && (e = n), e in sn && e !== pn && (t._gsap.x || Ci(t, "x")) ? i && ji === i ? "scale" === e ? di : ui : (ji = i || {}) && ("scale" === e ? hi : pi) : t.style && !s(t.style[e]) ? li : ~e.indexOf("-") ? ci : Ye(t, e)
        },
        core: {
            _removeProperty: xi,
            _getMatrix: Li
        }
    };
    ei.utils.checkPrefix = mn, Ln = h("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + ($n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        sn[t] = 1
    }), h($n, function (t) {
        It.units[t] = "deg", wn[t] = 1
    }), dn[Ln[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + $n, h("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        t = t.split(":");
        dn[t[1]] = Ln[t[0]]
    }), h("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        It.units[t] = "px"
    }), ei.registerPlugin(Pn);
    var An = ei.registerPlugin(Pn) || ei,
        $n = An.core.Tween;
    t.Back = Qi, t.Bounce = Zi, t.CSSPlugin = Pn, t.Circ = nn, t.Cubic = Yi, t.Elastic = Ui, t.Expo = en, t.Linear = qi, t.Power0 = Fi, t.Power1 = Ri, t.Power2 = Vi, t.Power3 = Bi, t.Power4 = Hi, t.Quad = Xi, t.Quart = Wi, t.Quint = Gi, t.Sine = tn, t.SteppedEase = Ki, t.Strong = Ji, t.TimelineLite = Le, t.TimelineMax = Le, t.TweenLite = je, t.TweenMax = $n, t.default = An, t.gsap = An, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function (f) {
    "use strict";
    var i = function () {
        function a(t, e) {
            var i = n;
            e.cssArrows && (i += " " + s), t.toggleClass(i)
        }

        function r(t, e) {
            t.children(e.actionElement).toggleClass(i)
        }

        function o(t) {
            var e = "pan-y" === (e = t.css("ms-touch-action")) ? "auto" : "pan-y";
            t.css("ms-touch-action", e)
        }

        function l(t) {
            var e = f(this);
            if ((t = e.siblings(t.data.popUpSelector)).length) return t = t.is(":hidden") ? u : d, f.proxy(t, e.parent("li"))(), t != u
        }
        var c = "sf-breadcrumb",
            n = "sf-js-enabled",
            i = "sf-with-ul",
            s = "sf-arrows",
            u = (f(window).on("load", function () {
                f("body").children().on("click.superclick", function () {
                    f(".sf-js-enabled").superclick("reset")
                })
            }), function () {
                var t = f(this);
                p(t);
                t.siblings().superclick("hide").end().superclick("show")
            }),
            d = function () {
                var t = f(this),
                    e = p(t);
                f.proxy(h, t, e)()
            },
            h = function (t) {
                t.retainPath = -1 < f.inArray(this[0], t.$path), this.superclick("hide"), this.parents("." + t.activeClass).length || (t.onIdle.call(e(this)), t.$path.length && f.proxy(u, t.$path)())
            },
            e = function (t) {
                return t.closest("." + n)
            },
            p = function (t) {
                return e(t).data("sf-options")
            };
        return {
            hide: function (t) {
                if (this.length) {
                    var e = p(this);
                    if (!e) return this;
                    var i = !0 === e.retainPath ? e.$path : "",
                        n = this.find("li." + e.activeClass).add(this).not(i).removeClass(e.activeClass).children(e.popUpSelector),
                        i = e.speedOut;
                    t && (n.show(), i = 0), e.retainPath = !1, e.onBeforeHide.call(n), n.stop(!0, !0).animate(e.animationOut, i, function () {
                        var t = f(this);
                        e.onHide.call(t)
                    })
                }
                return this
            },
            show: function () {
                var t = p(this);
                if (!t) return this;
                var e = this.addClass(t.activeClass).children(t.popUpSelector);
                return t.onBeforeShow.call(e), e.stop(!0, !0).animate(t.animation, t.speed, function () {
                    t.onShow.call(e)
                }), this
            },
            destroy: function () {
                return this.each(function () {
                    var t, e = f(this),
                        i = e.data("sf-options");
                    if (!i) return !1;
                    t = e.find(i.popUpSelector).parent("li"), a(e, i), r(t, i), o(e), e.off(".superclick"), t.children(i.popUpSelector).attr("style", function (t, e) {
                        return e.replace(/display[^;]+;?/g, "")
                    }), i.$path.removeClass(i.activeClass + " " + c).addClass(i.pathClass), e.find("." + i.activeClass).removeClass(i.activeClass), i.onDestroy.call(e), e.removeData("sf-options")
                })
            },
            reset: function () {
                return this.each(function () {
                    var t = f(this),
                        e = p(t);
                    f(t.find("." + e.activeClass).toArray().reverse()).children(e.actionElement).trigger("click")
                })
            },
            init: function (s) {
                return this.each(function () {
                    var t = f(this);
                    if (t.data("sf-options")) return !1;
                    var e, i = f.extend({}, f.fn.superclick.defaults, s),
                        n = t.find(i.popUpSelector).parent("li");
                    i.$path = (e = i, t.find("li." + e.pathClass).slice(0, e.pathLevels).addClass(e.activeClass + " " + c).filter(function () {
                        return f(this).children(e.popUpSelector).hide().show().length
                    }).removeClass(e.pathClass)), t.data("sf-options", i), a(t, i), r(n, i), o(t), t.on("click.superclick", i.actionElement, i, l), n.not("." + c).superclick("hide", !0), i.onInit.call(this)
                })
            }
        }
    }();
    f.fn.superclick = function (t, e) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? f.error("Method " + t + " does not exist on jQuery.fn.superclick") : i.init.apply(this, arguments)
    }, f.fn.superclick.defaults = {
        popUpSelector: "ul,.sf-mega",
        activeClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        actionElement: "a",
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        onInit: f.noop,
        onBeforeShow: f.noop,
        onShow: f.noop,
        onBeforeHide: f.noop,
        onHide: f.noop,
        onIdle: f.noop,
        onDestroy: f.noop
    }
}(jQuery),
function ($, D, O) {
    "use strict";
    $.fn.pagepiling = function (t) {
        var r, n = $.fn.pagepiling,
            s = $(this),
            o = 0,
            i = "ontouchstart" in O || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
            a = 0,
            l = 0,
            c = 0,
            u = 0,
            d = [],
            e = 600,
            h = $.extend(!0, {
                direction: "vertical",
                menu: null,
                verticalCentered: !0,
                sectionsColor: [],
                anchors: [],
                scrollingSpeed: 700,
                easing: "easeInQuart",
                loopBottom: !1,
                loopTop: !1,
                css3: !0,
                navigation: {
                    textColor: "#000",
                    bulletsColor: "#000",
                    position: "right",
                    tooltips: []
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: !0,
                sectionSelector: ".section",
                animateAnchor: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null
            }, t);
        $.extend($.easing, {
            easeInQuart: function (t, e, i, n, s) {
                return n * (e /= s) * e * e * e + i
            }
        }), n.setScrollingSpeed = function (t) {
            h.scrollingSpeed = t
        }, n.setMouseWheelScrolling = function (t) {
            t ? s.get(0).addEventListener ? (s.get(0).addEventListener("mousewheel", T, !1), s.get(0).addEventListener("wheel", T, !1)) : s.get(0).attachEvent("onmousewheel", T) : s.get(0).addEventListener ? (s.get(0).removeEventListener("mousewheel", T, !1), s.get(0).removeEventListener("wheel", T, !1)) : s.get(0).detachEvent("onmousewheel", T)
        }, n.setAllowScrolling = function (t) {
            var e;
            t ? (n.setMouseWheelScrolling(!0), i && (e = k(), s.off("touchstart " + e.down).on("touchstart " + e.down, L), s.off("touchmove " + e.move).on("touchmove " + e.move, P))) : (n.setMouseWheelScrolling(!1), i && (e = k(), s.off("touchstart " + e.down), s.off("touchmove " + e.move)))
        }, n.setKeyboardScrolling = function (t) {
            h.keyboardScrolling = t
        }, n.moveSectionUp = function () {
            var t = $(".pp-section.active").prev(".pp-section");
            !t.length && h.loopTop && (t = $(".pp-section").last()), t.length && f(t)
        }, n.moveSectionDown = function () {
            var t = $(".pp-section.active").next(".pp-section");
            !t.length && h.loopBottom && (t = $(".pp-section").first()), t.length && f(t)
        }, n.moveTo = function (t) {
            var e = "";
            0 < (e = isNaN(t) ? $(D).find('[data-anchor="' + t + '"]') : $(".pp-section").eq(t - 1)).length && f(e)
        }, $(h.sectionSelector).each(function () {
            $(this).addClass("pp-section")
        }), h.css3 && (h.css3 = function () {
            var t, e = D.createElement("p"),
                i = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            for (t in D.body.insertBefore(e, null), i) void 0 !== e.style[t] && (e.style[t] = "translate3d(1px,1px,1px)", O.getComputedStyle(e).getPropertyValue(i[t]));
            return D.body.removeChild(e), !0
        }()), $(s).css({
            overflow: "hidden",
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), n.setAllowScrolling(!0), $.isEmptyObject(h.navigation) || function () {
            $("body").append('<div id="pp-nav"><ul></ul></div>');
            var t = $("#pp-nav");
            t.css("color", h.navigation.textColor), t.addClass(h.navigation.position);
            for (var e = 0; e < $(".pp-section").length; e++) {
                var i, n = "";
                h.anchors.length && (n = h.anchors[e]), "undefined" === h.navigation.tooltips || void 0 === (i = h.navigation.tooltips[e]) && (i = ""), t.find("ul").append('<li data-tooltip="' + i + '"><a href="#' + n + '"><span></span></a></li>')
            }
            t.find("span").css("border-color", h.navigation.bulletsColor)
        }();
        var p = $(".pp-section").length;

        function f(t, e) {
            var i, n, s, a = {
                destination: t,
                animated: e,
                activeSection: $(".pp-section.active"),
                anchorLink: t.data("anchor"),
                sectionIndex: t.index(".pp-section"),
                toMove: t,
                yMovement: (i = t, e = $(".pp-section.active").index(".pp-section"), i.index(".pp-section") < e ? "up" : "down"),
                leavingSection: $(".pp-section.active").index(".pp-section") + 1
            };
            a.activeSection.is(t) || (void 0 === a.animated && (a.animated = !0), void 0 !== a.anchorLink && (e = a.anchorLink, s = a.sectionIndex, h.anchors.length ? (location.hash = e, y(location.hash)) : y(String(s))), a.destination.addClass("active").siblings().removeClass("active"), a.sectionsToMove = function (e) {
                var t;
                t = "down" === e.yMovement ? $(".pp-section").map(function (t) {
                    if (t < e.destination.index(".pp-section")) return $(this)
                }) : $(".pp-section").map(function (t) {
                    if (t > e.destination.index(".pp-section")) return $(this)
                });
                return t
            }(a), "down" === a.yMovement ? (a.translate3d = A(), a.scrolling = "-100%", h.css3 || a.sectionsToMove.each(function (t) {
                t != a.activeSection.index(".pp-section") && $(this).css(v(a.scrolling))
            }), a.animateSection = a.activeSection) : (a.translate3d = "translate3d(0px, 0px, 0px)", a.scrolling = "0", a.animateSection = t), $.isFunction(h.onLeave) && h.onLeave.call(this, a.leavingSection, a.sectionIndex + 1, a.yMovement), n = a, h.css3 ? (w(n.animateSection, n.translate3d, n.animated), n.sectionsToMove.each(function () {
                w($(this), n.translate3d, n.animated)
            }), setTimeout(function () {
                m(n)
            }, h.scrollingSpeed)) : (n.scrollOptions = v(n.scrolling), n.animated ? n.animateSection.animate(n.scrollOptions, h.scrollingSpeed, h.easing, function () {
                g(n), m(n)
            }) : (n.animateSection.css(v(n.scrolling)), setTimeout(function () {
                g(n), m(n)
            }, 400))), s = a.anchorLink, h.menu && ($(h.menu).find(".active").removeClass("active"), $(h.menu).find('[data-menuanchor="' + s + '"]').addClass("active")), t = a.anchorLink, s = a.sectionIndex, h.navigation && ($("#pp-nav").find(".active").removeClass("active"), (t ? $("#pp-nav").find('a[href="#' + t + '"]') : $("#pp-nav").find("li").eq(s).find("a")).addClass("active")), r = a.anchorLink, s = (new Date).getTime(), o = s)
        }

        function m(t) {
            $.isFunction(h.afterLoad) && h.afterLoad.call(this, t.anchorLink, t.sectionIndex + 1)
        }

        function g(e) {
            "up" === e.yMovement && e.sectionsToMove.each(function (t) {
                $(this).css(v(e.scrolling))
            })
        }

        function v(t) {
            return "vertical" === h.direction ? {
                top: t
            } : {
                left: t
            }
        }

        function y(t) {
            t = t.replace("#", ""), $("body")[0].className = $("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, ""), $("body").addClass("pp-viewing-" + t)
        }

        function b() {
            return (new Date).getTime() - o < e + h.scrollingSpeed
        }

        function w(t, e, i) {
            t.toggleClass("pp-easing", i), t.css({
                "-webkit-transform": e = e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            })
        }
        $(".pp-section").each(function (t) {
            $(this).data("data-index", t), $(this).css("z-index", p), t || 0 !== $(".pp-section.active").length || $(this).addClass("active"), void 0 !== h.anchors[t] && $(this).attr("data-anchor", h.anchors[t]), void 0 !== h.sectionsColor[t] && $(this).css("background-color", h.sectionsColor[t]), h.verticalCentered && !$(this).hasClass("pp-scrollable") && $(this).addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />'), --p
        }).promise().done(function () {
            h.navigation && ($("#pp-nav").css("margin-top", "-" + $("#pp-nav").height() / 2 + "px"), $("#pp-nav").find("li").eq($(".pp-section.active").index(".pp-section")).find("a").addClass("active")), $(O).on("load", function () {
                var t;
                t = O.location.hash.replace("#", ""), 0 < (t = $(D).find('.pp-section[data-anchor="' + t + '"]')).length && f(t, h.animateAnchor)
            }), $.isFunction(h.afterRender) && h.afterRender.call(this)
        }), $(O).on("hashchange", function () {
            var t = O.location.hash.replace("#", "").split("/")[0];
            t.length && t && t !== r && f(isNaN(t) ? $(D).find('[data-anchor="' + t + '"]') : $(".pp-section").eq(t - 1))
        }), $(D).keydown(function (t) {
            if (h.keyboardScrolling && !b()) switch (t.which) {
                case 38:
                case 33:
                    n.moveSectionUp();
                    break;
                case 40:
                case 34:
                    n.moveSectionDown();
                    break;
                case 36:
                    n.moveTo(1);
                    break;
                case 35:
                    n.moveTo($(".pp-section").length);
                    break;
                case 37:
                    n.moveSectionUp();
                    break;
                case 39:
                    n.moveSectionDown();
                    break;
                default:
                    return
            }
        }), h.normalScrollElements && ($(D).on("mouseenter", h.normalScrollElements, function () {
            n.setMouseWheelScrolling(!1)
        }), $(D).on("mouseleave", h.normalScrollElements, function () {
            n.setMouseWheelScrolling(!0)
        }));
        var x = (new Date).getTime();

        function T(t) {
            var e = (new Date).getTime(),
                i = (t = t || O.event).wheelDelta || -t.deltaY || -t.detail,
                n = Math.max(-1, Math.min(1, i)),
                s = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                s = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !s;
            149 < d.length && d.shift(), d.push(Math.abs(i));
            i = e - x;
            if (x = e, 200 < i && (d = []), !b()) {
                e = E($(".pp-section.active")), i = S(d, 10);
                return S(d, 70) <= i && s && (n < 0 ? C("down", e) : 0 < n && C("up", e)), !1
            }
        }

        function S(t, e) {
            for (var i = 0, n = t.slice(Math.max(t.length - e, 1)), s = 0; s < n.length; s++) i += n[s];
            return Math.ceil(i / e)
        }

        function C(t, e) {
            var i, t = "down" == t ? (i = "bottom", n.moveSectionDown) : (i = "top", n.moveSectionUp);
            if (0 < e.length) {
                if (! function (t, e) {
                        {
                            if ("top" === t) return !e.scrollTop();
                            if ("bottom" === t) return e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight
                        }
                    }(i, e)) return 1;
                t()
            } else t()
        }

        function E(t) {
            return t.filter(".pp-scrollable")
        }

        function k() {
            var t = O.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove",
                up: "pointerup"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove",
                up: "MSPointerUp"
            };
            return t
        }

        function _(t) {
            var e = new Array;
            return e.y = (void 0 !== t.pageY && (t.pageY || t.pageX) ? t : t.touches[0]).pageY, e.x = (void 0 !== t.pageX && (t.pageY || t.pageX) ? t : t.touches[0]).pageX, e
        }

        function M(t) {
            return void 0 === t.pointerType || "mouse" != t.pointerType
        }

        function L(t) {
            t = t.originalEvent;
            M(t) && (t = _(t), a = t.y, l = t.x)
        }

        function P(t) {
            var e, i = t.originalEvent;
            ! function t(e, i) {
                i = i || 0;
                var e = $(e).parent();
                return !!(i < h.normalScrollElementTouchThreshold && e.is(h.normalScrollElements)) || i != h.normalScrollElementTouchThreshold && t(e, ++i)
            }(t.target) && M(i) && ((e = E($(".pp-section.active"))).length || t.preventDefault(), b() || (i = _(i), c = i.y, u = i.x, "horizontal" === h.direction && Math.abs(l - u) > Math.abs(a - c) ? Math.abs(l - u) > s.width() / 100 * h.touchSensitivity && (u < l ? C("down", e) : l < u && C("up", e)) : Math.abs(a - c) > s.height() / 100 * h.touchSensitivity && (c < a ? C("down", e) : a < c && C("up", e))))
        }

        function A() {
            return "vertical" !== h.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)"
        }
        $(D).on("click touchstart", "#pp-nav a", function (t) {
            t.preventDefault();
            t = $(this).parent().index();
            f($(".pp-section").eq(t))
        }), $(D).on({
            mouseenter: function () {
                var t = $(this).data("tooltip");
                $('<div class="pp-tooltip ' + h.navigation.position + '">' + t + "</div>").hide().appendTo($(this)).fadeIn(200)
            },
            mouseleave: function () {
                $(this).find(".pp-tooltip").fadeOut(200, function () {
                    $(this).remove()
                })
            }
        }, "#pp-nav li")
    }
}(jQuery, document, window),
function (t) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("object" == typeof exports) t(require("jquery"));
    else {
        if ("undefined" == typeof jQuery) throw "jquery-numerator requires jQuery to be loaded first";
        t(jQuery)
    }
}(function (n) {
    var i = "numerator",
        s = {
            easing: "swing",
            duration: 500,
            delimiter: void 0,
            rounding: 0,
            toValue: void 0,
            fromValue: void 0,
            queue: !1,
            onStart: function () {},
            onStep: function () {},
            onProgress: function () {},
            onComplete: function () {}
        };

    function e(t, e) {
        this.element = t, this.settings = n.extend({}, s, e), this._defaults = s, this._name = i, this.init()
    }
    e.prototype = {
        init: function () {
            this.parseElement(), this.setValue()
        },
        parseElement: function () {
            var t = n.trim(n(this.element).text());
            this.settings.fromValue = this.settings.fromValue || this.format(t)
        },
        setValue: function () {
            var i = this;
            n({
                value: i.settings.fromValue
            }).animate({
                value: i.settings.toValue
            }, {
                duration: parseInt(i.settings.duration, 10),
                easing: i.settings.easing,
                start: i.settings.onStart,
                step: function (t, e) {
                    n(i.element).text(i.format(t)), i.settings.onStep(t, e)
                },
                progress: i.settings.onProgress,
                complete: i.settings.onComplete
            })
        },
        format: function (t) {
            return t = parseInt(this.settings.rounding) < 1 ? parseInt(t, 10) : parseFloat(t).toFixed(parseInt(this.settings.rounding)), this.settings.delimiter ? this.delimit(t) : t
        },
        delimit: function (t) {
            if (t = t.toString(), this.settings.rounding && 0 < parseInt(this.settings.rounding, 10)) {
                var e = t.substring(t.length - (this.settings.rounding + 1), t.length),
                    i = t.substring(0, t.length - (this.settings.rounding + 1));
                return this.addDelimiter(i) + e
            }
            return this.addDelimiter(t)
        },
        addDelimiter: function (t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter)
        }
    }, n.fn[i] = function (t) {
        return this.each(function () {
            n.data(this, "plugin_" + i) && n.data(this, "plugin_" + i, null), n.data(this, "plugin_" + i, new e(this, t))
        })
    }
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (u) {
    u.extend(u.fn, {
        validate: function (t) {
            if (this.length) {
                var n = u.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new u.validator(t, this[0]), u.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                    n.submitButton = t.currentTarget, u(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function (i) {
                    function t() {
                        var t, e;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", n.submitButton.name).val(u(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (e = n.settings.submitHandler.call(n, n.currentForm, i), t && t.remove(), void 0 !== e && e)
                    }
                    return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1)
                })), n)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function () {
            var t, e, i;
            return u(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = u(this[0].form).validate(), this.each(function () {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }), e.errorList = i), t
        },
        rules: function (t, e) {
            var i, n, s, a, r, o = this[0],
                l = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != o && (!o.form && l && (o.form = this.closest("form")[0], o.name = this.attr("name")), null != o.form)) {
                if (t) switch (i = u.data(o.form, "validator").settings, n = i.rules, s = u.validator.staticRules(o), t) {
                    case "add":
                        u.extend(s, u.validator.normalizeRule(e)), delete s.messages, n[o.name] = s, e.messages && (i.messages[o.name] = u.extend(i.messages[o.name], e.messages));
                        break;
                    case "remove":
                        return e ? (r = {}, u.each(e.split(/\s/), function (t, e) {
                            r[e] = s[e], delete s[e]
                        }), r) : (delete n[o.name], s)
                }
                return (t = u.validator.normalizeRules(u.extend({}, u.validator.classRules(o), u.validator.attributeRules(o), u.validator.dataRules(o), u.validator.staticRules(o)), o)).required && (a = t.required, delete t.required, t = u.extend({
                    required: a
                }, t)), t.remote && (a = t.remote, delete t.remote, t = u.extend(t, {
                    remote: a
                })), t
            }
        }
    });

    function e(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    var i;
    u.extend(u.expr.pseudos || u.expr[":"], {
        blank: function (t) {
            return !e("" + u(t).val())
        },
        filled: function (t) {
            t = u(t).val();
            return null !== t && !!e("" + t)
        },
        unchecked: function (t) {
            return !u(t).prop("checked")
        }
    }), u.validator = function (t, e) {
        this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
    }, u.validator.format = function (i, t) {
        return 1 === arguments.length ? function () {
            var t = u.makeArray(arguments);
            return t.unshift(i), u.validator.format.apply(this, t)
        } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function (t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return e
            })
        })), i)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).addClass(e).removeClass(i)
            },
            unhighlight: function (t, e, i) {
                ("radio" === t.type ? this.findByName(t.name) : u(t)).removeClass(e).addClass(i)
            }
        },
        setDefaults: function (t) {
            u.extend(u.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function t(t) {
                    var e, i, n = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                    !this.form && n && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name")), s === this.form && (e = u.data(this.form, "validator"), i = "on" + t.type.replace(/^validate/, ""), (n = e.settings)[i] && !u(this).is(n.ignore) && n[i].call(e, this, t))
                }
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.currentForm,
                    n = this.groups = {};
                u.each(this.settings.groups, function (i, t) {
                    "string" == typeof t && (t = t.split(/\s/)), u.each(t, function (t, e) {
                        n[e] = i
                    })
                }), i = this.settings.rules, u.each(i, function (t, e) {
                    i[t] = u.validator.normalizeRule(e)
                }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function (t) {
                var e, i, n = this.clean(t),
                    s = this.validationTargetFor(n),
                    a = this,
                    r = !0;
                return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s), this.currentElements = u(s), (i = this.groups[s.name]) && u.each(this.groups, function (t, e) {
                    e === i && t !== s.name && ((n = a.validationTargetFor(a.clean(a.findByName(t)))) && n.name in a.invalid && (a.currentElements.push(n), r = a.check(n) && r))
                }), e = !1 !== this.check(s), r = r && e, this.invalid[s.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), r
            },
            showErrors: function (e) {
                var i;
                e && (i = this, u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function (t, e) {
                    return {
                        message: t,
                        element: i.findByName(e)[0]
                    }
                }), this.successList = u.grep(this.successList, function (t) {
                    return !(t.name in e)
                })), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function (t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (t) {
                var e, i = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                return i
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === u.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function () {
                var i = this,
                    n = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var t = this.name || u(this).attr("name"),
                        e = void 0 !== u(this).attr("contenteditable") && "false" !== u(this).attr("contenteditable");
                    return !t && i.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = u(this).closest("form")[0], this.name = t), !(this.form !== i.currentForm || t in n || !i.objectLength(u(this).rules()) || (n[t] = !0, 0))
                })
            },
            clean: function (t) {
                return u(t)[0]
            },
            errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = u([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function (t) {
                var e = u(t),
                    i = t.type,
                    n = void 0 !== e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = n ? e.text() : e.val(), "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, n, s, a = u(e).rules(),
                    r = u.map(a, function (t, e) {
                        return e
                    }).length,
                    o = !1,
                    l = this.elementValue(e);
                for (i in "function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s && (l = s.call(e, l), delete a.normalizer), a) {
                    n = {
                        method: i,
                        parameters: a[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, l, e, n.parameters)) && 1 === r) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, n), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
                    }
                }
                if (!o) return this.objectLength(a) && this.successList.push(e), !0
            },
            customDataMessage: function (t, e) {
                return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
            },
            customMessage: function (t, e) {
                t = this.settings.messages[t];
                return t && (t.constructor === String ? t : t[e])
            },
            findDefined: function () {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function (t, e) {
                "string" == typeof e && (e = {
                    method: e
                });
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    n = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = u.validator.format(i.replace(n, "{$1}"), e.parameters)), i
            },
            formatAndAdd: function (t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function () {
                for (var t, e, i = 0; this.errorList[i]; i++) e = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (i = 0, t = this.validElements(); t[i]; i++) this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return u(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (t, e) {
                var i, n, s, a = this.errorsFor(t),
                    r = this.idOrName(t),
                    o = u(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(e)) : (i = a = u("<" + this.settings.errorElement + ">").attr("id", r + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", r) : 0 === a.parents("label[for='" + this.escapeCssMeta(r) + "']").length && (r = a.attr("id"), o ? o.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (o += " " + r) : o = r, u(t).attr("aria-describedby", o), (n = this.groups[t.name]) && (s = this, u.each(s.groups, function (t, e) {
                    e === n && u("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                })))), !e && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function (t) {
                var e = this.escapeCssMeta(this.idOrName(t)),
                    t = u(t).attr("aria-describedby"),
                    e = "label[for='" + e + "'], label[for='" + e + "'] *";
                return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function (t) {
                return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (t) {
                return this.groups[t.name] || !this.checkable(t) && t.id || t.name
            },
            validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0]
            },
            checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function (t) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function (t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return u("option:selected", e).length;
                    case "input":
                        if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function (t) {
                    return t
                },
                string: function (t, e) {
                    return !!u(t, e.form).length
                },
                function: function (t, e) {
                    return t(e)
                }
            },
            optional: function (t) {
                var e = this.elementValue(t);
                return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function (t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (t, e) {
                return e = "string" == typeof e && e || "remote", u.data(t, "previousValue") || u.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function () {
                this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var e = {},
                t = u(t).attr("class");
            return t && u.each(t.split(" "), function () {
                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
            }), e
        },
        normalizeAttributeRule: function (t, e, i, n) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function (t) {
            var e, i, n = {},
                s = u(t),
                a = t.getAttribute("type");
            for (e in u.validator.methods) i = "required" === e ? (i = t.getAttribute(e), "" === i && (i = !0), !!i) : s.attr(e), this.normalizeAttributeRule(n, a, e, i);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function (t) {
            var e, i, n = {},
                s = u(t),
                a = t.getAttribute("type");
            for (e in u.validator.methods) i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), "" === i && (i = !0), this.normalizeAttributeRule(n, a, e, i);
            return n
        },
        staticRules: function (t) {
            var e = {},
                i = u.data(t.form, "validator");
            return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function (n, s) {
            return u.each(n, function (t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                            case "string":
                                i = !!u(e.depends, s.form).length;
                                break;
                            case "function":
                                i = e.depends.call(s, s)
                        }
                        i ? n[t] = void 0 === e.param || e.param : (u.data(s.form, "validator").resetElements(u(s)), delete n[t])
                    }
                } else delete n[t]
            }), u.each(n, function (t, e) {
                n[t] = u.isFunction(e) && "normalizer" !== t ? e(s) : e
            }), u.each(["minlength", "maxlength"], function () {
                n[this] && (n[this] = Number(n[this]))
            }), u.each(["rangelength", "range"], function () {
                var t;
                n[this] && (u.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])]))
            }), u.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
        },
        normalizeRule: function (t) {
            var e;
            return "string" == typeof t && (e = {}, u.each(t.split(/\s/), function () {
                e[this] = !0
            }), t = e), t
        },
        addMethod: function (t, e, i) {
            u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length;
                e = u(e).val();
                return e && 0 < e.length
            },
            email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function (t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: (i = !1, function (t, e) {
                return i || (i = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }),
            dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function (t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= t
            },
            maxlength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t <= i
            },
            rangelength: function (t, e, i) {
                t = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            min: function (t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function (t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function (t, e, i) {
                function n(t) {
                    return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
                }

                function s(t) {
                    return Math.round(t * Math.pow(10, a))
                }
                var a, r = u(e).attr("type"),
                    o = "Step attribute on input type " + r + " is not supported.",
                    l = new RegExp("\\b" + r + "\\b"),
                    c = !0;
                if (r && !l.test(["text", "number", "range"].join())) throw new Error(o);
                return a = n(i), (n(t) > a || s(t) % s(i) != 0) && (c = !1), this.optional(e) || c
            },
            equalTo: function (t, e, i) {
                i = u(i);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    u(e).valid()
                }), t === i.val()
            },
            remote: function (n, s, t, a) {
                if (this.optional(s)) return "dependency-mismatch";
                a = "string" == typeof a && a || "remote";
                var r, e, o = this.previousValue(s, a);
                return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), o.originalMessage = o.originalMessage || this.settings.messages[s.name][a], this.settings.messages[s.name][a] = o.message, t = "string" == typeof t ? {
                    url: t
                } : t, e = u.param(u.extend({
                    data: n
                }, t.data)), o.old === e ? o.valid : (o.old = e, (r = this).startRequest(s), (e = {})[s.name] = n, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + s.name,
                    dataType: "json",
                    data: e,
                    context: r.currentForm,
                    success: function (t) {
                        var e, i = !0 === t || "true" === t;
                        r.settings.messages[s.name][a] = o.originalMessage, i ? (e = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(s), r.formSubmitted = e, r.successList.push(s), r.invalid[s.name] = !1, r.showErrors()) : (e = {}, t = t || r.defaultMessage(s, {
                            method: a,
                            parameters: n
                        }), e[s.name] = o.message = t, r.invalid[s.name] = !0, r.showErrors(e)), o.valid = i, r.stopRequest(s, i)
                    }
                }, t)), "pending")
            }
        }
    });
    var n, s = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function (t, e, i) {
        var n = t.port;
        "abort" === t.mode && (s[n] && s[n].abort(), s[n] = i)
    }) : (n = u.ajax, u.ajax = function (t) {
        var e = ("mode" in t ? t : u.ajaxSettings).mode,
            i = ("port" in t ? t : u.ajaxSettings).port;
        return "abort" === e ? (s[i] && s[i].abort(), s[i] = n.apply(this, arguments), s[i]) : n.apply(this, arguments)
    }), u
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Swiper = e()
}(this, function () {
    "use strict";

    function n(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function s(e, i) {
        void 0 === e && (e = {}), void 0 === i && (i = {}), Object.keys(i).forEach(function (t) {
            void 0 === e[t] ? e[t] = i[t] : n(i[t]) && n(e[t]) && 0 < Object.keys(i[t]).length && s(e[t], i[t])
        })
    }
    var d = "undefined" != typeof document ? document : {},
        t = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () {}
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            createElementNS: function () {
                return {}
            },
            importNode: function () {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
    s(d, t);
    var W = "undefined" != typeof window ? window : {};
    s(W, {
        document: t,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {}
        },
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {}
        }
    });
    var l = function (t) {
        for (var e = 0; e < t.length; e += 1) this[e] = t[e];
        return this.length = t.length, this
    };

    function T(t, e) {
        var i = [],
            n = 0;
        if (t && !e && t instanceof l) return t;
        if (t)
            if ("string" == typeof t) {
                var s, a, r = t.trim();
                if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                    var o = "div";
                    for (0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select"), (a = d.createElement(o)).innerHTML = r, n = 0; n < a.childNodes.length; n += 1) i.push(a.childNodes[n])
                } else
                    for (s = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || d).querySelectorAll(t.trim()) : [d.getElementById(t.trim().split("#")[1])], n = 0; n < s.length; n += 1) s[n] && i.push(s[n])
            } else if (t.nodeType || t === W || t === d) i.push(t);
        else if (0 < t.length && t[0].nodeType)
            for (n = 0; n < t.length; n += 1) i.push(t[n]);
        return new l(i)
    }

    function a(t) {
        for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]);
        return e
    }
    T.fn = l.prototype, T.Class = l, T.Dom7 = l;
    var e = {
        addClass: function (t) {
            if (void 0 === t) return this;
            for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(e[i]);
            return this
        },
        removeClass: function (t) {
            for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(e[i]);
            return this
        },
        hasClass: function (t) {
            return !!this[0] && this[0].classList.contains(t)
        },
        toggleClass: function (t) {
            for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(e[i]);
            return this
        },
        attr: function (t, e) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length) this[n].setAttribute(t, e);
                else
                    for (var s in t) this[n][s] = t[s], this[n].setAttribute(s, t[s]);
            return this
        },
        removeAttr: function (t) {
            for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
            return this
        },
        data: function (t, e) {
            var i;
            if (void 0 !== e) {
                for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
                return this
            }
            if (i = this[0]) return i.dom7ElementDataStorage && t in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[t] : i.getAttribute("data-" + t) || void 0
        },
        transform: function (t) {
            for (var e = 0; e < this.length; e += 1) {
                var i = this[e].style;
                i.webkitTransform = t, i.transform = t
            }
            return this
        },
        transition: function (t) {
            "string" != typeof t && (t += "ms");
            for (var e = 0; e < this.length; e += 1) {
                var i = this[e].style;
                i.webkitTransitionDuration = t, i.transitionDuration = t
            }
            return this
        },
        on: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i = t[0],
                a = t[1],
                r = t[2],
                n = t[3];

            function s(t) {
                var e = t.target;
                if (e) {
                    var i = t.target.dom7EventData || [];
                    if (i.indexOf(t) < 0 && i.unshift(t), T(e).is(a)) r.apply(e, i);
                    else
                        for (var n = T(e).parents(), s = 0; s < n.length; s += 1) T(n[s]).is(a) && r.apply(n[s], i)
                }
            }

            function o(t) {
                var e = t && t.target && t.target.dom7EventData || [];
                e.indexOf(t) < 0 && e.unshift(t), r.apply(this, e)
            }
            "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], a = void 0), n = n || !1;
            for (var l, c = i.split(" "), u = 0; u < this.length; u += 1) {
                var d = this[u];
                if (a)
                    for (l = 0; l < c.length; l += 1) {
                        var h = c[l];
                        d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[h] || (d.dom7LiveListeners[h] = []), d.dom7LiveListeners[h].push({
                            listener: r,
                            proxyListener: s
                        }), d.addEventListener(h, s, n)
                    } else
                        for (l = 0; l < c.length; l += 1) {
                            var p = c[l];
                            d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[p] || (d.dom7Listeners[p] = []), d.dom7Listeners[p].push({
                                listener: r,
                                proxyListener: o
                            }), d.addEventListener(p, o, n)
                        }
            }
            return this
        },
        off: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i = t[0],
                n = t[1],
                s = t[2],
                a = t[3];
            "function" == typeof t[1] && (i = t[0], s = t[1], a = t[2], n = void 0), a = a || !1;
            for (var r = i.split(" "), o = 0; o < r.length; o += 1)
                for (var l = r[o], c = 0; c < this.length; c += 1) {
                    var u = this[c],
                        d = void 0;
                    if (!n && u.dom7Listeners ? d = u.dom7Listeners[l] : n && u.dom7LiveListeners && (d = u.dom7LiveListeners[l]), d && d.length)
                        for (var h = d.length - 1; 0 <= h; --h) {
                            var p = d[h];
                            !(s && p.listener === s || s && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === s) && s || (u.removeEventListener(l, p.proxyListener, a), d.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            for (var i = t[0].split(" "), n = t[1], s = 0; s < i.length; s += 1)
                for (var a = i[s], r = 0; r < this.length; r += 1) {
                    var o = this[r],
                        l = void 0;
                    try {
                        l = new W.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (l = d.createEvent("Event")).initEvent(a, !0, !0), l.detail = n
                    }
                    o.dom7EventData = t.filter(function (t, e) {
                        return 0 < e
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function (e) {
            var i, n = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(t) {
                if (t.target === this)
                    for (e.call(this, t), i = 0; i < n.length; i += 1) s.off(n[i], a)
            }
            if (e)
                for (i = 0; i < n.length; i += 1) s.on(n[i], a);
            return this
        },
        outerWidth: function (t) {
            if (0 < this.length) {
                if (t) {
                    t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (t) {
            if (0 < this.length) {
                if (t) {
                    t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (0 < this.length) {
                var t = this[0],
                    e = t.getBoundingClientRect(),
                    i = d.body,
                    n = t.clientTop || i.clientTop || 0,
                    s = t.clientLeft || i.clientLeft || 0,
                    i = t === W ? W.scrollY : t.scrollTop,
                    t = t === W ? W.scrollX : t.scrollLeft;
                return {
                    top: e.top + i - n,
                    left: e.left + t - s
                }
            }
            return null
        },
        css: function (t, e) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof t) {
                    for (i = 0; i < this.length; i += 1)
                        for (var n in t) this[i].style[n] = t[n];
                    return this
                }
                if (this[0]) return W.getComputedStyle(this[0], null).getPropertyValue(t)
            }
            if (2 !== arguments.length || "string" != typeof t) return this;
            for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
            return this
        },
        each: function (t) {
            if (!t) return this;
            for (var e = 0; e < this.length; e += 1)
                if (!1 === t.call(this[e], e, this[e])) return this;
            return this
        },
        html: function (t) {
            if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
            for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
            return this
        },
        text: function (t) {
            if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
            for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
            return this
        },
        is: function (t) {
            var e, i, n = this[0];
            if (!n || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (n.matches) return n.matches(t);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
                if (n.msMatchesSelector) return n.msMatchesSelector(t);
                for (e = T(t), i = 0; i < e.length; i += 1)
                    if (e[i] === n) return !0;
                return !1
            }
            if (t === d) return n === d;
            if (t === W) return n === W;
            if (t.nodeType || t instanceof l) {
                for (e = t.nodeType ? [t] : t, i = 0; i < e.length; i += 1)
                    if (e[i] === n) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var t, e = this[0];
            if (e) {
                for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                return t
            }
        },
        eq: function (t) {
            if (void 0 === t) return this;
            var e = this.length;
            return new l(e - 1 < t ? [] : t < 0 ? (e = e + t) < 0 ? [] : [this[e]] : [this[t]])
        },
        append: function () {
            for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
            for (var n = 0; n < e.length; n += 1) {
                t = e[n];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof t) {
                        var a = d.createElement("div");
                        for (a.innerHTML = t; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (t instanceof l)
                    for (var r = 0; r < t.length; r += 1) this[s].appendChild(t[r]);
                else this[s].appendChild(t)
            }
            return this
        },
        prepend: function (t) {
            for (var e, i = 0; i < this.length; i += 1)
                if ("string" == typeof t) {
                    var n = d.createElement("div");
                    for (n.innerHTML = t, e = n.childNodes.length - 1; 0 <= e; --e) this[i].insertBefore(n.childNodes[e], this[i].childNodes[0])
                } else if (t instanceof l)
                for (e = 0; e < t.length; e += 1) this[i].insertBefore(t[e], this[i].childNodes[0]);
            else this[i].insertBefore(t, this[i].childNodes[0]);
            return this
        },
        next: function (t) {
            return 0 < this.length ? t ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(t) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function (t) {
            var e = [],
                i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                var n = i.nextElementSibling;
                t && !T(n).is(t) || e.push(n), i = n
            }
            return new l(e)
        },
        prev: function (t) {
            if (0 < this.length) {
                var e = this[0];
                return t ? e.previousElementSibling && T(e.previousElementSibling).is(t) ? new l([e.previousElementSibling]) : new l([]) : e.previousElementSibling ? new l([e.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function (t) {
            var e = [],
                i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                var n = i.previousElementSibling;
                t && !T(n).is(t) || e.push(n), i = n
            }
            return new l(e)
        },
        parent: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || t && !T(this[i].parentNode).is(t) || e.push(this[i].parentNode);
            return T(a(e))
        },
        parents: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].parentNode; n;) t && !T(n).is(t) || e.push(n), n = n.parentNode;
            return T(a(e))
        },
        closest: function (t) {
            var e = this;
            return void 0 === t ? new l([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
        },
        find: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].querySelectorAll(t), s = 0; s < n.length; s += 1) e.push(n[s]);
            return new l(e)
        },
        children: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1)
                for (var n = this[i].childNodes, s = 0; s < n.length; s += 1) t ? 1 === n[s].nodeType && T(n[s]).is(t) && e.push(n[s]) : 1 === n[s].nodeType && e.push(n[s]);
            return new l(a(e))
        },
        filter: function (t) {
            for (var e = [], i = 0; i < this.length; i += 1) t.call(this[i], i, this[i]) && e.push(this[i]);
            return new l(e)
        },
        remove: function () {
            for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
            return this
        },
        add: function () {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            for (var i = 0; i < t.length; i += 1)
                for (var n = T(t[i]), s = 0; s < n.length; s += 1) this[this.length] = n[s], this.length += 1;
            return this
        },
        styles: function () {
            return this[0] ? W.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(e).forEach(function (t) {
        T.fn[t] = T.fn[t] || e[t]
    });
    var G = {
            deleteProps: function (t) {
                var e = t;
                Object.keys(e).forEach(function (t) {
                    try {
                        e[t] = null
                    } catch (t) {}
                    try {
                        delete e[t]
                    } catch (t) {}
                })
            },
            nextTick: function (t, e) {
                return void 0 === e && (e = 0), setTimeout(t, e)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (t, e) {
                var i, n, s;
                void 0 === e && (e = "x");
                t = W.getComputedStyle(t, null);
                return W.WebKitCSSMatrix ? (6 < (n = t.transform || t.webkitTransform).split(",").length && (n = n.split(", ").map(function (t) {
                    return t.replace(",", ".")
                }).join(", ")), s = new W.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = t.MozTransform || t.OTransform || t.MsTransform || t.msTransform || t.transform || t.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (n = W.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = W.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
            },
            parseUrlQuery: function (t) {
                var e, i, n, s, a = {},
                    t = t || W.location.href;
                if ("string" == typeof t && t.length)
                    for (s = (i = (t = -1 < t.indexOf("?") ? t.replace(/\S*\?/, "") : "").split("&").filter(function (t) {
                            return "" !== t
                        })).length, e = 0; e < s; e += 1) n = i[e].replace(/#\S+/g, "").split("="), a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return a
            },
            isObject: function (t) {
                return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
            },
            extend: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                for (var i = Object(t[0]), n = 1; n < t.length; n += 1) {
                    var s = t[n];
                    if (null != s)
                        for (var a = Object.keys(Object(s)), r = 0, o = a.length; r < o; r += 1) {
                            var l = a[r],
                                c = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== c && c.enumerable && (G.isObject(i[l]) && G.isObject(s[l]) ? G.extend(i[l], s[l]) : !G.isObject(i[l]) && G.isObject(s[l]) ? (i[l] = {}, G.extend(i[l], s[l])) : i[l] = s[l])
                        }
                }
                return i
            }
        },
        w = {
            touch: !!("ontouchstart" in W || W.DocumentTouch && d instanceof W.DocumentTouch),
            pointerEvents: !!W.PointerEvent && "maxTouchPoints" in W.navigator && 0 <= W.navigator.maxTouchPoints,
            observer: "MutationObserver" in W || "WebkitMutationObserver" in W,
            passiveListener: function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    W.addEventListener("testPassiveListener", null, e)
                } catch (t) {}
                return t
            }(),
            gestures: "ongesturestart" in W
        },
        i = function (t) {
            void 0 === t && (t = {});
            var e = this;
            e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
                e.on(t, e.params.on[t])
            })
        },
        r = {
            components: {
                configurable: !0
            }
        };
    i.prototype.on = function (t, e, i) {
        var n = this;
        if ("function" != typeof e) return n;
        var s = i ? "unshift" : "push";
        return t.split(" ").forEach(function (t) {
            n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][s](e)
        }), n
    }, i.prototype.once = function (i, n, t) {
        var s = this;
        return "function" != typeof n ? s : (a.f7proxy = n, s.on(i, a, t));

        function a() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            s.off(i, a), a.f7proxy && delete a.f7proxy, n.apply(s, t)
        }
    }, i.prototype.off = function (t, n) {
        var s = this;
        return s.eventsListeners && t.split(" ").forEach(function (i) {
            void 0 === n ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].length && s.eventsListeners[i].forEach(function (t, e) {
                (t === n || t.f7proxy && t.f7proxy === n) && s.eventsListeners[i].splice(e, 1)
            })
        }), s
    }, i.prototype.emit = function () {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var i, n, s, a = this;
        return a.eventsListeners && (s = "string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], n = t.slice(1, t.length), a) : (i = t[0].events, n = t[0].data, t[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (t) {
            var e;
            a.eventsListeners && a.eventsListeners[t] && (e = [], a.eventsListeners[t].forEach(function (t) {
                e.push(t)
            }), e.forEach(function (t) {
                t.apply(s, n)
            }))
        })), a
    }, i.prototype.useModulesParams = function (e) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (t) {
            t = i.modules[t];
            t.params && G.extend(e, t.params)
        })
    }, i.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var n = this;
        n.modules && Object.keys(n.modules).forEach(function (t) {
            var i = n.modules[t],
                t = e[t] || {};
            i.instance && Object.keys(i.instance).forEach(function (t) {
                var e = i.instance[t];
                n[t] = "function" == typeof e ? e.bind(n) : e
            }), i.on && n.on && Object.keys(i.on).forEach(function (t) {
                n.on(t, i.on[t])
            }), i.create && i.create.bind(n)(t)
        })
    }, r.components.set = function (t) {
        this.use && this.use(t)
    }, i.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = e.name || Object.keys(n.prototype.modules).length + "_" + G.now();
        return (n.prototype.modules[s] = e).proto && Object.keys(e.proto).forEach(function (t) {
            n.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function (t) {
            n[t] = e.static[t]
        }), e.install && e.install.apply(n, t), n
    }, i.use = function (t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(t) ? (t.forEach(function (t) {
            return n.installModule(t)
        }), n) : n.installModule.apply(n, [t].concat(e))
    }, Object.defineProperties(i, r);
    var o, c, u, h, p, f, m, g, v, y, b, x, S = {
            updateSize: function () {
                var t = this.$el,
                    e = void 0 !== this.params.width ? this.params.width : t[0].clientWidth,
                    i = void 0 !== this.params.height ? this.params.height : t[0].clientHeight;
                0 === e && this.isHorizontal() || 0 === i && this.isVertical() || (e = e - parseInt(t.css("padding-left"), 10) - parseInt(t.css("padding-right"), 10), i = i - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10), G.extend(this, {
                    width: e,
                    height: i,
                    size: this.isHorizontal() ? e : i
                }))
            },
            updateSlides: function () {
                var e = this.params,
                    t = this.$wrapperEl,
                    i = this.size,
                    n = this.rtlTranslate,
                    s = this.wrongRTL,
                    a = this.virtual && e.virtual.enabled,
                    r = (a ? this.virtual : this).slides.length,
                    o = t.children("." + this.params.slideClass),
                    l = (a ? this.virtual.slides : o).length,
                    c = [],
                    u = [],
                    d = [];

                function h(t) {
                    return !e.cssMode || t !== o.length - 1
                }
                var p = e.slidesOffsetBefore;
                "function" == typeof p && (p = e.slidesOffsetBefore.call(this));
                var f = e.slidesOffsetAfter;
                "function" == typeof f && (f = e.slidesOffsetAfter.call(this));
                var m, g = this.snapGrid.length,
                    a = this.snapGrid.length,
                    v = e.spaceBetween,
                    y = -p,
                    b = 0,
                    w = 0;
                if (void 0 !== i) {
                    "string" == typeof v && 0 <= v.indexOf("%") && (v = parseFloat(v.replace("%", "")) / 100 * i), this.virtualSize = -v, n ? o.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : o.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < e.slidesPerColumn && (m = Math.floor(l / e.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (m = Math.max(m, e.slidesPerView * e.slidesPerColumn)));
                    for (var x, T, S, C, E, k = e.slidesPerColumn, _ = m / k, M = Math.floor(l / e.slidesPerColumn), L = 0; L < l; L += 1) {
                        z = 0;
                        var P, A, $, D, O, z, I, j, N, F, R, V, B = o.eq(L);
                        1 < e.slidesPerColumn && (O = D = $ = void 0, "row" === e.slidesPerColumnFill && 1 < e.slidesPerGroup ? (V = Math.floor(L / (e.slidesPerGroup * e.slidesPerColumn)), P = L - e.slidesPerColumn * e.slidesPerGroup * V, A = 0 === V ? e.slidesPerGroup : Math.min(Math.ceil((l - V * k * e.slidesPerGroup) / k), e.slidesPerGroup), $ = (D = P - (O = Math.floor(P / A)) * A + V * e.slidesPerGroup) + O * m / k, B.css({
                            "-webkit-box-ordinal-group": $,
                            "-moz-box-ordinal-group": $,
                            "-ms-flex-order": $,
                            "-webkit-order": $,
                            order: $
                        })) : "column" === e.slidesPerColumnFill ? (O = L - (D = Math.floor(L / k)) * k, (M < D || D === M && O === k - 1) && (O += 1) >= k && (O = 0, D += 1)) : D = L - (O = Math.floor(L / _)) * _, B.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px")), "none" !== B.css("display") && ("auto" === e.slidesPerView ? (V = W.getComputedStyle(B[0], null), $ = B[0].style.transform, D = B[0].style.webkitTransform, $ && (B[0].style.transform = "none"), D && (B[0].style.webkitTransform = "none"), z = e.roundLengths ? this.isHorizontal() ? B.outerWidth(!0) : B.outerHeight(!0) : this.isHorizontal() ? (I = parseFloat(V.getPropertyValue("width")), j = parseFloat(V.getPropertyValue("padding-left")), N = parseFloat(V.getPropertyValue("padding-right")), F = parseFloat(V.getPropertyValue("margin-left")), R = parseFloat(V.getPropertyValue("margin-right")), (O = V.getPropertyValue("box-sizing")) && "border-box" === O ? I + F + R : I + j + N + F + R) : (I = parseFloat(V.getPropertyValue("height")), j = parseFloat(V.getPropertyValue("padding-top")), N = parseFloat(V.getPropertyValue("padding-bottom")), F = parseFloat(V.getPropertyValue("margin-top")), R = parseFloat(V.getPropertyValue("margin-bottom")), (V = V.getPropertyValue("box-sizing")) && "border-box" === V ? I + F + R : I + j + N + F + R), $ && (B[0].style.transform = $), D && (B[0].style.webkitTransform = D), e.roundLengths && (z = Math.floor(z))) : (z = (i - (e.slidesPerView - 1) * v) / e.slidesPerView, e.roundLengths && (z = Math.floor(z)), o[L] && (this.isHorizontal() ? o[L].style.width = z + "px" : o[L].style.height = z + "px")), o[L] && (o[L].swiperSlideSize = z), d.push(z), e.centeredSlides ? (y = y + z / 2 + b / 2 + v, 0 === b && 0 !== L && (y = y - i / 2 - v), 0 === L && (y = y - i / 2 - v), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), w % e.slidesPerGroup == 0 && c.push(y), u.push(y)) : (e.roundLengths && (y = Math.floor(y)), (w - Math.min(this.params.slidesPerGroupSkip, w)) % this.params.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + z + v), this.virtualSize += z + v, b = z, w += 1)
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + f, n && s && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), e.setWrapperSize && (this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        })), 1 < e.slidesPerColumn && (this.virtualSize = (z + e.spaceBetween) * m, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : t.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                        x = [];
                        for (var H = 0; H < c.length; H += 1) {
                            var q = c[H];
                            e.roundLengths && (q = Math.floor(q)), c[H] < this.virtualSize + c[0] && x.push(q)
                        }
                        c = x
                    }
                    if (!e.centeredSlides) {
                        x = [];
                        for (var X = 0; X < c.length; X += 1) {
                            var Y = c[X];
                            e.roundLengths && (Y = Math.floor(Y)), c[X] <= this.virtualSize - i && x.push(Y)
                        }
                        c = x, 1 < Math.floor(this.virtualSize - i) - Math.floor(c[c.length - 1]) && c.push(this.virtualSize - i)
                    }
                    0 === c.length && (c = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? o.filter(h).css({
                        marginLeft: v + "px"
                    }) : o.filter(h).css({
                        marginRight: v + "px"
                    }) : o.filter(h).css({
                        marginBottom: v + "px"
                    })), e.centeredSlides && e.centeredSlidesBounds && (T = 0, d.forEach(function (t) {
                        T += t + (e.spaceBetween || 0)
                    }), S = (T -= e.spaceBetween) - i, c = c.map(function (t) {
                        return t < 0 ? -p : S < t ? S + f : t
                    })), e.centerInsufficientSlides && (C = 0, d.forEach(function (t) {
                        C += t + (e.spaceBetween || 0)
                    }), (C -= e.spaceBetween) < i && (E = (i - C) / 2, c.forEach(function (t, e) {
                        c[e] = t - E
                    }), u.forEach(function (t, e) {
                        u[e] = t + E
                    }))), G.extend(this, {
                        slides: o,
                        snapGrid: c,
                        slidesGrid: u,
                        slidesSizesGrid: d
                    }), l !== r && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== a && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (t) {
                var e, i, n = [],
                    s = 0;
                if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && 1 < this.params.slidesPerView)
                    if (this.params.centeredSlides) this.visibleSlides.each(function (t, e) {
                        n.push(e)
                    });
                    else
                        for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                            var a = this.activeIndex + e;
                            if (a > this.slides.length) break;
                            n.push(this.slides.eq(a)[0])
                        } else n.push(this.slides.eq(this.activeIndex)[0]);
                for (e = 0; e < n.length; e += 1) void 0 !== n[e] && (s = s < (i = n[e].offsetHeight) ? i : s);
                s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            },
            updateSlidesProgress: function (t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this.params,
                    i = this.slides,
                    n = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var s = n ? t : -t;
                    i.removeClass(e.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var a = 0; a < i.length; a += 1) {
                        var r, o, l = i[a],
                            c = (s + (e.centeredSlides ? this.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + e.spaceBetween);
                        (e.watchSlidesVisibility || e.centeredSlides && e.autoHeight) && (o = (r = -(s - l.swiperSlideOffset)) + this.slidesSizesGrid[a], (0 <= r && r < this.size - 1 || 1 < o && o <= this.size || r <= 0 && o >= this.size) && (this.visibleSlides.push(l), this.visibleSlidesIndexes.push(a), i.eq(a).addClass(e.slideVisibleClass))), l.progress = n ? -c : c
                    }
                    this.visibleSlides = T(this.visibleSlides)
                }
            },
            updateProgress: function (t) {
                void 0 === t && (r = this.rtlTranslate ? -1 : 1, t = this && this.translate && this.translate * r || 0);
                var e = this.params,
                    i = this.maxTranslate() - this.minTranslate(),
                    n = this.progress,
                    s = this.isBeginning,
                    a = s,
                    r = o = this.isEnd,
                    o = 0 == i ? s = !(n = 0) : (s = (n = (t - this.minTranslate()) / i) <= 0, 1 <= n);
                G.extend(this, {
                    progress: n,
                    isBeginning: s,
                    isEnd: o
                }), (e.watchSlidesProgress || e.watchSlidesVisibility || e.centeredSlides && e.autoHeight) && this.updateSlidesProgress(t), s && !a && this.emit("reachBeginning toEdge"), o && !r && this.emit("reachEnd toEdge"), (a && !s || r && !o) && this.emit("fromEdge"), this.emit("progress", n)
            },
            updateSlidesClasses: function () {
                var t = this.slides,
                    e = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex,
                    s = this.realIndex,
                    a = this.virtual && e.virtual.enabled;
                t.removeClass(e.slideActiveClass + " " + e.slideNextClass + " " + e.slidePrevClass + " " + e.slideDuplicateActiveClass + " " + e.slideDuplicateNextClass + " " + e.slideDuplicatePrevClass), (n = a ? this.$wrapperEl.find("." + e.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n)).addClass(e.slideActiveClass), e.loop && (n.hasClass(e.slideDuplicateClass) ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]') : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]')).addClass(e.slideDuplicateActiveClass);
                s = n.nextAll("." + e.slideClass).eq(0).addClass(e.slideNextClass);
                e.loop && 0 === s.length && (s = t.eq(0)).addClass(e.slideNextClass);
                n = n.prevAll("." + e.slideClass).eq(0).addClass(e.slidePrevClass);
                e.loop && 0 === n.length && (n = t.eq(-1)).addClass(e.slidePrevClass), e.loop && ((s.hasClass(e.slideDuplicateClass) ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]') : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')).addClass(e.slideDuplicateNextClass), (n.hasClass(e.slideDuplicateClass) ? i.children("." + e.slideClass + ":not(." + e.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]') : i.children("." + e.slideClass + "." + e.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')).addClass(e.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (t) {
                var e = this.rtlTranslate ? this.translate : -this.translate,
                    i = this.slidesGrid,
                    n = this.snapGrid,
                    s = this.params,
                    a = this.activeIndex,
                    r = this.realIndex,
                    o = this.snapIndex,
                    l = t;
                if (void 0 === l) {
                    for (var c = 0; c < i.length; c += 1) void 0 !== i[c + 1] ? e >= i[c] && e < i[c + 1] - (i[c + 1] - i[c]) / 2 ? l = c : e >= i[c] && e < i[c + 1] && (l = c + 1) : e >= i[c] && (l = c);
                    s.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0)
                }(s = 0 <= n.indexOf(e) ? n.indexOf(e) : (t = Math.min(s.slidesPerGroupSkip, l)) + Math.floor((l - t) / s.slidesPerGroup)) >= n.length && (s = n.length - 1), l !== a ? (n = parseInt(this.slides.eq(l).attr("data-swiper-slide-index") || l, 10), G.extend(this, {
                    snapIndex: s,
                    realIndex: n,
                    previousIndex: a,
                    activeIndex: l
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), r !== n && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")) : s !== o && (this.snapIndex = s, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function (t) {
                var e = this.params,
                    i = T(t.target).closest("." + e.slideClass)[0],
                    n = !1;
                if (i)
                    for (var s = 0; s < this.slides.length; s += 1) this.slides[s] === i && (n = !0);
                if (!i || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(T(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = T(i).index(), e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        C = {
            getTranslate: function (t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                var e = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    s = this.$wrapperEl;
                if (e.virtualTranslate) return i ? -n : n;
                if (e.cssMode) return n;
                t = G.getTranslate(s[0], t);
                return i && (t = -t), t || 0
            },
            setTranslate: function (t, e) {
                var i = this.rtlTranslate,
                    n = this.params,
                    s = this.$wrapperEl,
                    a = this.wrapperEl,
                    r = this.progress,
                    o = 0,
                    l = 0;
                this.isHorizontal() ? o = i ? -t : t : l = t, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : n.virtualTranslate || s.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
                l = this.maxTranslate() - this.minTranslate();
                (0 == l ? 0 : (t - this.minTranslate()) / l) !== r && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
            },
            minTranslate: function () {
                return -this.snapGrid[0]
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function (t, e, i, n, s) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                var a = this,
                    r = a.params,
                    o = a.wrapperEl;
                if (a.animating && r.preventInteractionOnTransition) return !1;
                var l = a.minTranslate(),
                    c = a.maxTranslate(),
                    c = n && l < t ? l : n && t < c ? c : t;
                if (a.updateProgress(c), r.cssMode) {
                    t = a.isHorizontal();
                    return 0 !== e && o.scrollTo ? o.scrollTo(((r = {})[t ? "left" : "top"] = -c, r.behavior = "smooth", r)) : o[t ? "scrollLeft" : "scrollTop"] = -c, !0
                }
                return 0 === e ? (a.setTransition(0), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, s), a.emit("transitionEnd"))) : (a.setTransition(e), a.setTranslate(c), i && (a.emit("beforeTransitionStart", e, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (t) {
                    a && !a.destroyed && t.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
            }
        },
        E = {
            slideTo: function (t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                var s = this,
                    a = t;
                a < 0 && (a = 0);
                var r = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    c = s.previousIndex,
                    u = s.activeIndex,
                    d = s.rtlTranslate,
                    h = s.wrapperEl;
                if (s.animating && r.preventInteractionOnTransition) return !1;
                t = Math.min(s.params.slidesPerGroupSkip, a), t += Math.floor((a - t) / s.params.slidesPerGroup);
                t >= o.length && (t = o.length - 1), (u || r.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                var p, f = -o[t];
                if (s.updateProgress(f), r.normalizeSlideIndex)
                    for (var m = 0; m < l.length; m += 1) - Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
                if (s.initialized && a !== u) {
                    if (!s.allowSlideNext && f < s.translate && f < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (u || 0) !== a) return !1
                }
                if (p = u < a ? "next" : a < u ? "prev" : "reset", d && -f === s.translate || !d && f === s.translate) return s.updateActiveIndex(a), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(f), "reset" != p && (s.transitionStart(i, p), s.transitionEnd(i, p)), !1;
                if (r.cssMode) {
                    u = s.isHorizontal(), r = -f;
                    return d && (r = h.scrollWidth - h.offsetWidth - r), 0 !== e && h.scrollTo ? h.scrollTo(((d = {})[u ? "left" : "top"] = r, d.behavior = "smooth", d)) : h[u ? "scrollLeft" : "scrollTop"] = r, !0
                }
                return 0 === e ? (s.setTransition(0), s.setTranslate(f), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, p), s.transitionEnd(i, p)) : (s.setTransition(e), s.setTranslate(f), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(i, p), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
                    s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, p))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function (t, e, i, n) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                return this.params.loop && (t += this.loopedSlides), this.slideTo(t, e, i, n)
            },
            slideNext: function (t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var n = this.params,
                    s = this.animating,
                    a = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                if (n.loop) {
                    if (s) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + a, t, e, i)
            },
            slidePrev: function (t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var n = this.params,
                    s = this.animating,
                    a = this.snapGrid,
                    r = this.slidesGrid,
                    o = this.rtlTranslate;
                if (n.loop) {
                    if (s) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }

                function l(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }
                var c, u = l(o ? this.translate : -this.translate),
                    o = a.map(l),
                    d = (r.map(l), a[o.indexOf(u)], a[o.indexOf(u) - 1]);
                return void 0 === d && n.cssMode && a.forEach(function (t) {
                    !d && t <= u && (d = t)
                }), void 0 !== d && (c = r.indexOf(d)) < 0 && (c = this.activeIndex - 1), this.slideTo(c, t, e, i)
            },
            slideReset: function (t, e, i) {
                return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
            },
            slideToClosest: function (t, e, i, n) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === n && (n = .5);
                var s = this.activeIndex,
                    a = Math.min(this.params.slidesPerGroupSkip, s),
                    r = a + Math.floor((s - a) / this.params.slidesPerGroup),
                    o = this.rtlTranslate ? this.translate : -this.translate;
                return o >= this.snapGrid[r] ? o - (a = this.snapGrid[r]) > (this.snapGrid[r + 1] - a) * n && (s += this.params.slidesPerGroup) : o - (o = this.snapGrid[r - 1]) <= (this.snapGrid[r] - o) * n && (s -= this.params.slidesPerGroup), s = Math.max(s, 0), s = Math.min(s, this.slidesGrid.length - 1), this.slideTo(s, t, e, i)
            },
            slideToClickedSlide: function () {
                var t, e = this,
                    i = e.params,
                    n = e.$wrapperEl,
                    s = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                    a = e.clickedIndex;
                i.loop ? e.animating || (t = parseInt(T(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), G.nextTick(function () {
                    e.slideTo(a)
                })) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(), a = n.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), G.nextTick(function () {
                    e.slideTo(a)
                })) : e.slideTo(a)) : e.slideTo(a)
            }
        },
        k = {
            loopCreate: function () {
                var n = this,
                    t = n.params,
                    e = n.$wrapperEl;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                var s = e.children("." + t.slideClass);
                if (t.loopFillGroupWithBlank) {
                    var i = t.slidesPerGroup - s.length % t.slidesPerGroup;
                    if (i !== t.slidesPerGroup) {
                        for (var a = 0; a < i; a += 1) {
                            var r = T(d.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                            e.append(r)
                        }
                        s = e.children("." + t.slideClass)
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), n.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), n.loopedSlides += t.loopAdditionalSlides, n.loopedSlides > s.length && (n.loopedSlides = s.length);
                var o = [],
                    l = [];
                s.each(function (t, e) {
                    var i = T(e);
                    t < n.loopedSlides && l.push(e), t < s.length && t >= s.length - n.loopedSlides && o.push(e), i.attr("data-swiper-slide-index", t)
                });
                for (var c = 0; c < l.length; c += 1) e.append(T(l[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (var u = o.length - 1; 0 <= u; --u) e.prepend(T(o[u].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function () {
                this.emit("beforeLoopFix");
                var t, e = this.activeIndex,
                    i = this.slides,
                    n = this.loopedSlides,
                    s = this.allowSlidePrev,
                    a = this.allowSlideNext,
                    r = this.snapGrid,
                    o = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                r = -r[e] - this.getTranslate();
                e < n ? (t = i.length - 3 * n + e, t += n, this.slideTo(t, 0, !1, !0) && 0 != r && this.setTranslate((o ? -this.translate : this.translate) - r)) : e >= i.length - n && (t = -i.length + e + n, t += n, this.slideTo(t, 0, !1, !0) && 0 != r && this.setTranslate((o ? -this.translate : this.translate) - r)), this.allowSlidePrev = s, this.allowSlideNext = a, this.emit("loopFix")
            },
            loopDestroy: function () {
                var t = this.$wrapperEl,
                    e = this.params,
                    i = this.slides;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        _ = {
            setGrabCursor: function (t) {
                var e;
                w.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode || ((e = this.el).style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab")
            },
            unsetGrabCursor: function () {
                w.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        M = {
            appendSlide: function (t) {
                var e = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof t && "length" in t)
                    for (var n = 0; n < t.length; n += 1) t[n] && e.append(t[n]);
                else e.append(t);
                i.loop && this.loopCreate(), i.observer && w.observer || this.update()
            },
            prependSlide: function (t) {
                var e = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                e.loop && this.loopDestroy();
                var s = n + 1;
                if ("object" == typeof t && "length" in t) {
                    for (var a = 0; a < t.length; a += 1) t[a] && i.prepend(t[a]);
                    s = n + t.length
                } else i.prepend(t);
                e.loop && this.loopCreate(), e.observer && w.observer || this.update(), this.slideTo(s, 0, !1)
            },
            addSlide: function (t, e) {
                var i = this.$wrapperEl,
                    n = this.params,
                    s = this.activeIndex;
                n.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + n.slideClass));
                var a = this.slides.length;
                if (t <= 0) this.prependSlide(e);
                else if (a <= t) this.appendSlide(e);
                else {
                    for (var r = t < s ? s + 1 : s, o = [], l = a - 1; t <= l; --l) {
                        var c = this.slides.eq(l);
                        c.remove(), o.unshift(c)
                    }
                    if ("object" == typeof e && "length" in e) {
                        for (var u = 0; u < e.length; u += 1) e[u] && i.append(e[u]);
                        r = t < s ? s + e.length : s
                    } else i.append(e);
                    for (var d = 0; d < o.length; d += 1) i.append(o[d]);
                    n.loop && this.loopCreate(), n.observer && w.observer || this.update(), n.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                }
            },
            removeSlide: function (t) {
                var e = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                e.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                var s, a = n;
                if ("object" == typeof t && "length" in t) {
                    for (var r = 0; r < t.length; r += 1) s = t[r], this.slides[s] && this.slides.eq(s).remove(), s < a && --a;
                    a = Math.max(a, 0)
                } else s = t, this.slides[s] && this.slides.eq(s).remove(), s < a && --a, a = Math.max(a, 0);
                e.loop && this.loopCreate(), e.observer && w.observer || this.update(), e.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
            },
            removeAllSlides: function () {
                for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                this.removeSlide(t)
            }
        },
        L = (x = W.navigator.platform, o = W.navigator.userAgent, c = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!W.cordova && !W.phonegap),
            phonegap: !(!W.cordova && !W.phonegap),
            electron: !1
        }, u = W.screen.width, h = W.screen.height, p = o.match(/(Android);?[\s\/]+([\d.]+)?/), f = o.match(/(iPad).*OS\s([\d_]+)/), m = o.match(/(iPod)(.*OS\s([\d_]+))?/), g = !f && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), v = 0 <= o.indexOf("MSIE ") || 0 <= o.indexOf("Trident/"), y = 0 <= o.indexOf("Edge/"), b = 0 <= o.indexOf("Gecko/") && 0 <= o.indexOf("Firefox/"), t = "Win32" === x, r = 0 <= o.toLowerCase().indexOf("electron"), x = "MacIntel" === x, !f && x && w.touch && (1024 === u && 1366 === h || 834 === u && 1194 === h || 834 === u && 1112 === h || 768 === u && 1024 === h) && (f = o.match(/(Version)\/([\d.]+)/), x = !1), c.ie = v, c.edge = y, c.firefox = b, p && !t && (c.os = "android", c.osVersion = p[2], c.android = !0, c.androidChrome = 0 <= o.toLowerCase().indexOf("chrome")), (f || g || m) && (c.os = "ios", c.ios = !0), g && !m && (c.osVersion = g[2].replace(/_/g, "."), c.iphone = !0), f && (c.osVersion = f[2].replace(/_/g, "."), c.ipad = !0), m && (c.osVersion = m[3] ? m[3].replace(/_/g, ".") : null, c.ipod = !0), c.ios && c.osVersion && 0 <= o.indexOf("Version/") && "10" === c.osVersion.split(".")[0] && (c.osVersion = o.toLowerCase().split("version/")[1].split(" ")[0]), c.webView = !(!(g || f || m) || !o.match(/.*AppleWebKit(?!.*Safari)/i) && !W.navigator.standalone) || W.matchMedia && W.matchMedia("(display-mode: standalone)").matches, c.webview = c.webView, c.standalone = c.webView, c.desktop = !(c.ios || c.android) || r, c.desktop && (c.electron = r, c.macos = x, c.windows = t, c.macos && (c.os = "macos"), c.windows && (c.os = "windows")), c.pixelRatio = W.devicePixelRatio || 1, c);

    function P() {
        var t, e, i = this.params,
            n = this.el;
        n && 0 === n.offsetWidth || (i.breakpoints && this.setBreakpoint(), t = this.allowSlideNext, e = this.allowSlidePrev, n = this.snapGrid, this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === i.slidesPerView || 1 < i.slidesPerView) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = e, this.allowSlideNext = t, this.params.watchOverflow && n !== this.snapGrid && this.checkOverflow())
    }
    var A = !1;

    function $() {}
    var D = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        O = {
            update: S,
            translate: C,
            transition: {
                setTransition: function (t, e) {
                    this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e)
                },
                transitionStart: function (t, e) {
                    void 0 === t && (t = !0);
                    var i = this.activeIndex,
                        n = this.params,
                        s = this.previousIndex;
                    n.cssMode || (n.autoHeight && this.updateAutoHeight(), e = (e = e) || (s < i ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), t && i !== s && ("reset" !== e ? (this.emit("slideChangeTransitionStart"), "next" === e ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")) : this.emit("slideResetTransitionStart")))
                },
                transitionEnd: function (t, e) {
                    void 0 === t && (t = !0);
                    var i = this.activeIndex,
                        n = this.previousIndex,
                        s = this.params;
                    this.animating = !1, s.cssMode || (this.setTransition(0), e = (e = e) || (n < i ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== n && ("reset" !== e ? (this.emit("slideChangeTransitionEnd"), "next" === e ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")) : this.emit("slideResetTransitionEnd")))
                }
            },
            slide: E,
            loop: k,
            grabCursor: _,
            manipulation: M,
            events: {
                attachEvents: function () {
                    var t = this.params,
                        e = this.touchEvents,
                        i = this.el,
                        n = this.wrapperEl;
                    this.onTouchStart = function (t) {
                        var e, i, n, s, a, r = this.touchEventsData,
                            o = this.params,
                            l = this.touches;
                        this.animating && o.preventInteractionOnTransition || ((e = t).originalEvent && (e = e.originalEvent), i = T(e.target), "wrapper" === o.touchEventsTarget && !i.closest(this.wrapperEl).length || (r.isTouchEvent = "touchstart" === e.type, !r.isTouchEvent && "which" in e && 3 === e.which || !r.isTouchEvent && "button" in e && 0 < e.button || r.isTouched && r.isMoved) || (o.noSwiping && i.closest(o.noSwipingSelector || "." + o.noSwipingClass)[0] ? this.allowClick = !0 : o.swipeHandler && !i.closest(o.swipeHandler)[0] || (l.currentX = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX, l.currentY = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY, n = l.currentX, a = l.currentY, s = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection, t = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold, s && (n <= t || n >= W.screen.width - t) || (G.extend(r, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), l.startX = n, l.startY = a, r.touchStartTime = G.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, 0 < o.threshold && (r.allowThresholdMove = !1), "touchstart" !== e.type && (a = !0, i.is(r.formElements) && (a = !1), d.activeElement && T(d.activeElement).is(r.formElements) && d.activeElement !== i[0] && d.activeElement.blur(), a = a && this.allowTouchMove && o.touchStartPreventDefault, (o.touchStartForcePreventDefault || a) && e.preventDefault()), this.emit("touchStart", e)))))
                    }.bind(this), this.onTouchMove = function (t) {
                        var e = this.touchEventsData,
                            i = this.params,
                            n = this.touches,
                            s = this.rtlTranslate,
                            a = t;
                        if (a.originalEvent && (a = a.originalEvent), e.isTouched) {
                            if (!e.isTouchEvent || "touchmove" === a.type) {
                                var r = "touchmove" === a.type && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
                                    o = ("touchmove" === a.type ? r : a).pageX,
                                    t = ("touchmove" === a.type ? r : a).pageY;
                                if (a.preventedByNestedSwiper) return n.startX = o, void(n.startY = t);
                                if (!this.allowTouchMove) return this.allowClick = !1, void(e.isTouched && (G.extend(n, {
                                    startX: o,
                                    startY: t,
                                    currentX: o,
                                    currentY: t
                                }), e.touchStartTime = G.now()));
                                if (e.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (this.isVertical()) {
                                        if (t < n.startY && this.translate <= this.maxTranslate() || t > n.startY && this.translate >= this.minTranslate()) return e.isTouched = !1, void(e.isMoved = !1)
                                    } else if (o < n.startX && this.translate <= this.maxTranslate() || o > n.startX && this.translate >= this.minTranslate()) return;
                                if (e.isTouchEvent && d.activeElement && a.target === d.activeElement && T(a.target).is(e.formElements)) return e.isMoved = !0, void(this.allowClick = !1);
                                if (e.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && 1 < a.targetTouches.length)) {
                                    n.currentX = o, n.currentY = t;
                                    r = n.currentX - n.startX, o = n.currentY - n.startY;
                                    if (!(this.params.threshold && Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)) < this.params.threshold))
                                        if (void 0 === e.isScrolling && (this.isHorizontal() && n.currentY === n.startY || this.isVertical() && n.currentX === n.startX ? e.isScrolling = !1 : 25 <= r * r + o * o && (t = 180 * Math.atan2(Math.abs(o), Math.abs(r)) / Math.PI, e.isScrolling = this.isHorizontal() ? t > i.touchAngle : 90 - t > i.touchAngle)), e.isScrolling && this.emit("touchMoveOpposite", a), void 0 === e.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (e.startMoving = !0)), e.isScrolling) e.isTouched = !1;
                                        else if (e.startMoving) {
                                        this.allowClick = !1, !i.cssMode && a.cancelable && a.preventDefault(), i.touchMoveStopPropagation && !i.nested && a.stopPropagation(), e.isMoved || (i.loop && this.loopFix(), e.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), e.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), e.isMoved = !0;
                                        r = this.isHorizontal() ? r : o;
                                        n.diff = r, r *= i.touchRatio, s && (r = -r), this.swipeDirection = 0 < r ? "prev" : "next", e.currentTranslate = r + e.startTranslate;
                                        o = !0, s = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (s = 0), 0 < r && e.currentTranslate > this.minTranslate() ? (o = !1, i.resistance && (e.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + e.startTranslate + r, s))) : r < 0 && e.currentTranslate < this.maxTranslate() && (o = !1, i.resistance && (e.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - e.startTranslate - r, s))), o && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && e.currentTranslate < e.startTranslate && (e.currentTranslate = e.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && e.currentTranslate > e.startTranslate && (e.currentTranslate = e.startTranslate), 0 < i.threshold) {
                                            if (!(Math.abs(r) > i.threshold || e.allowThresholdMove)) return void(e.currentTranslate = e.startTranslate);
                                            if (!e.allowThresholdMove) return e.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, e.currentTranslate = e.startTranslate, void(n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                        }
                                        i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === e.velocities.length && e.velocities.push({
                                            position: n[this.isHorizontal() ? "startX" : "startY"],
                                            time: e.touchStartTime
                                        }), e.velocities.push({
                                            position: n[this.isHorizontal() ? "currentX" : "currentY"],
                                            time: G.now()
                                        })), this.updateProgress(e.currentTranslate), this.setTranslate(e.currentTranslate))
                                    }
                                }
                            }
                        } else e.startMoving && e.isScrolling && this.emit("touchMoveOpposite", a)
                    }.bind(this), this.onTouchEnd = function (t) {
                        var e = this,
                            i = e.touchEventsData,
                            n = e.params,
                            s = e.touches,
                            a = e.rtlTranslate,
                            r = e.$wrapperEl,
                            o = e.slidesGrid,
                            l = e.snapGrid,
                            c = t;
                        if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                        var u, d = G.now(),
                            t = d - i.touchStartTime;
                        if (e.allowClick && (e.updateClickedSlide(c), e.emit("tap click", c), t < 300 && d - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)), i.lastClickTime = G.now(), G.nextTick(function () {
                                e.destroyed || (e.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? a ? e.translate : -e.translate : -i.currentTranslate, !n.cssMode)
                            if (n.freeMode)
                                if (u < -e.minTranslate()) e.slideTo(e.activeIndex);
                                else if (u > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                        else {
                            if (n.freeModeMomentum) {
                                1 < i.velocities.length ? (v = i.velocities.pop(), p = i.velocities.pop(), h = v.position - p.position, p = v.time - p.time, e.velocity = h / p, e.velocity /= 2, Math.abs(e.velocity) < n.freeModeMinimumVelocity && (e.velocity = 0), (150 < p || 300 < G.now() - v.time) && (e.velocity = 0)) : e.velocity = 0, e.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                var h = 1e3 * n.freeModeMomentumRatio,
                                    p = e.velocity * h,
                                    f = e.translate + p;
                                a && (f = -f);
                                var m, g, v = !1,
                                    p = 20 * Math.abs(e.velocity) * n.freeModeMomentumBounceRatio;
                                if (f < e.maxTranslate()) n.freeModeMomentumBounce ? (f + e.maxTranslate() < -p && (f = e.maxTranslate() - p), m = e.maxTranslate(), v = !0, i.allowMomentumBounce = !0) : f = e.maxTranslate(), n.loop && n.centeredSlides && (g = !0);
                                else if (f > e.minTranslate()) n.freeModeMomentumBounce ? (f - e.minTranslate() > p && (f = e.minTranslate() + p), m = e.minTranslate(), v = !0, i.allowMomentumBounce = !0) : f = e.minTranslate(), n.loop && n.centeredSlides && (g = !0);
                                else if (n.freeModeSticky) {
                                    for (var y, b = 0; b < l.length; b += 1)
                                        if (l[b] > -f) {
                                            y = b;
                                            break
                                        } f = -(Math.abs(l[y] - f) < Math.abs(l[y - 1] - f) || "next" === e.swipeDirection ? l[y] : l[y - 1])
                                }
                                if (g && e.once("transitionEnd", function () {
                                        e.loopFix()
                                    }), 0 !== e.velocity) h = a ? Math.abs((-f - e.translate) / e.velocity) : Math.abs((f - e.translate) / e.velocity), n.freeModeSticky && (h = (g = Math.abs((a ? -f : f) - e.translate)) < (a = e.slidesSizesGrid[e.activeIndex]) ? n.speed : g < 2 * a ? 1.5 * n.speed : 2.5 * n.speed);
                                else if (n.freeModeSticky) return void e.slideToClosest();
                                n.freeModeMomentumBounce && v ? (e.updateProgress(m), e.setTransition(h), e.setTranslate(f), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                                    e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(n.speed), setTimeout(function () {
                                        e.setTranslate(m), r.transitionEnd(function () {
                                            e && !e.destroyed && e.transitionEnd()
                                        })
                                    }, 0))
                                })) : e.velocity ? (e.updateProgress(f), e.setTransition(h), e.setTranslate(f), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
                                    e && !e.destroyed && e.transitionEnd()
                                }))) : e.updateProgress(f), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else if (n.freeModeSticky) return void e.slideToClosest();
                            (!n.freeModeMomentum || t >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        } else {
                            for (var w = 0, x = e.slidesSizesGrid[0], T = 0; T < o.length; T += T < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                                var S = T < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                void 0 !== o[T + S] ? u >= o[T] && u < o[T + S] && (x = o[(w = T) + S] - o[T]) : u >= o[T] && (w = T, x = o[o.length - 1] - o[o.length - 2])
                            }
                            v = (u - o[w]) / x, h = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                            t > n.longSwipesMs ? n.longSwipes ? ("next" === e.swipeDirection && (v >= n.longSwipesRatio ? e.slideTo(w + h) : e.slideTo(w)), "prev" === e.swipeDirection && (v > 1 - n.longSwipesRatio ? e.slideTo(w + h) : e.slideTo(w))) : e.slideTo(e.activeIndex) : n.shortSwipes ? !e.navigation || c.target !== e.navigation.nextEl && c.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(w + h), "prev" === e.swipeDirection && e.slideTo(w)) : c.target === e.navigation.nextEl ? e.slideTo(w + h) : e.slideTo(w) : e.slideTo(e.activeIndex)
                        }
                    }.bind(this), t.cssMode && (this.onScroll = function () {
                        var t = this.wrapperEl,
                            e = this.rtlTranslate;
                        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = e ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : this.translate = -t.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses(), (0 == (t = this.maxTranslate() - this.minTranslate()) ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(e ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
                    }.bind(this)), this.onClick = function (t) {
                        this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                    }.bind(this);
                    var s, a = !!t.nested;
                    !w.touch && w.pointerEvents ? (i.addEventListener(e.start, this.onTouchStart, !1), d.addEventListener(e.move, this.onTouchMove, a), d.addEventListener(e.end, this.onTouchEnd, !1)) : (w.touch && (s = !("touchstart" !== e.start || !w.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, i.addEventListener(e.start, this.onTouchStart, s), i.addEventListener(e.move, this.onTouchMove, w.passiveListener ? {
                        passive: !1,
                        capture: a
                    } : a), i.addEventListener(e.end, this.onTouchEnd, s), e.cancel && i.addEventListener(e.cancel, this.onTouchEnd, s), A || (d.addEventListener("touchstart", $), A = !0)), (t.simulateTouch && !L.ios && !L.android || t.simulateTouch && !w.touch && L.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), d.addEventListener("mousemove", this.onTouchMove, a), d.addEventListener("mouseup", this.onTouchEnd, !1))), (t.preventClicks || t.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0), t.cssMode && n.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(L.ios || L.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : this.on("observerUpdate", P, !0)
                },
                detachEvents: function () {
                    var t, e = this.params,
                        i = this.touchEvents,
                        n = this.el,
                        s = this.wrapperEl,
                        a = !!e.nested;
                    !w.touch && w.pointerEvents ? (n.removeEventListener(i.start, this.onTouchStart, !1), d.removeEventListener(i.move, this.onTouchMove, a), d.removeEventListener(i.end, this.onTouchEnd, !1)) : (w.touch && (t = !("onTouchStart" !== i.start || !w.passiveListener || !e.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, n.removeEventListener(i.start, this.onTouchStart, t), n.removeEventListener(i.move, this.onTouchMove, a), n.removeEventListener(i.end, this.onTouchEnd, t), i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, t)), (e.simulateTouch && !L.ios && !L.android || e.simulateTouch && !w.touch && L.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1), d.removeEventListener("mousemove", this.onTouchMove, a), d.removeEventListener("mouseup", this.onTouchEnd, !1))), (e.preventClicks || e.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0), e.cssMode && s.removeEventListener("scroll", this.onScroll), this.off(L.ios || L.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var t = this.activeIndex,
                        e = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var n, s, a, r, o = this.params,
                        l = this.$el,
                        c = o.breakpoints;
                    !c || c && 0 === Object.keys(c).length || (n = this.getBreakpoint(c)) && this.currentBreakpoint !== n && ((s = n in c ? c[n] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (t) {
                        var e = s[t];
                        void 0 !== e && (s[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                    }), a = s || this.originalParams, r = 1 < o.slidesPerColumn, c = 1 < a.slidesPerColumn, r && !c ? l.removeClass(o.containerModifierClass + "multirow " + o.containerModifierClass + "multirow-column") : !r && c && (l.addClass(o.containerModifierClass + "multirow"), "column" === a.slidesPerColumnFill && l.addClass(o.containerModifierClass + "multirow-column")), l = a.direction && a.direction !== o.direction, o = o.loop && (a.slidesPerView !== o.slidesPerView || l), l && e && this.changeDirection(), G.extend(this.params, a), G.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                    }), this.currentBreakpoint = n, o && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", a))
                },
                getBreakpoint: function (t) {
                    if (t) {
                        var e = !1,
                            i = Object.keys(t).map(function (t) {
                                if ("string" != typeof t || 0 !== t.indexOf("@")) return {
                                    value: t,
                                    point: t
                                };
                                var e = parseFloat(t.substr(1));
                                return {
                                    value: W.innerHeight * e,
                                    point: t
                                }
                            });
                        i.sort(function (t, e) {
                            return parseInt(t.value, 10) - parseInt(e.value, 10)
                        });
                        for (var n = 0; n < i.length; n += 1) {
                            var s = i[n],
                                a = s.point;
                            s.value <= W.innerWidth && (e = a)
                        }
                        return e || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var t = this.params,
                        e = this.isLocked,
                        i = 0 < this.slides.length && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        i = this.params,
                        t = this.rtl,
                        n = this.$el,
                        s = [];
                    s.push("initialized"), s.push(i.direction), i.freeMode && s.push("free-mode"), i.autoHeight && s.push("autoheight"), t && s.push("rtl"), 1 < i.slidesPerColumn && (s.push("multirow"), "column" === i.slidesPerColumnFill && s.push("multirow-column")), L.android && s.push("android"), L.ios && s.push("ios"), i.cssMode && s.push("css-mode"), s.forEach(function (t) {
                        e.push(i.containerModifierClass + t)
                    }), n.addClass(e.join(" "))
                },
                removeClasses: function () {
                    var t = this.$el,
                        e = this.classNames;
                    t.removeClass(e.join(" "))
                }
            },
            images: {
                loadImage: function (t, e, i, n, s, a) {
                    function r() {
                        a && a()
                    }!(T(t).parent("picture")[0] || t.complete && s) && e ? ((s = new W.Image).onload = r, s.onerror = r, n && (s.sizes = n), i && (s.srcset = i), e && (s.src = e)) : r()
                },
                preloadImages: function () {
                    var t = this;

                    function e() {
                        null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                    }
                    t.imagesToLoad = t.$el.find("img");
                    for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                        var n = t.imagesToLoad[i];
                        t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                    }
                }
            }
        },
        z = {},
        I = function (c) {
            function u() {
                for (var i, t = [], e = arguments.length; e--;) t[e] = arguments[e];
                i = (i = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (a = t[0], t[1])) || {}, i = G.extend({}, i), a && !i.el && (i.el = a), c.call(this, i), Object.keys(O).forEach(function (e) {
                    Object.keys(O[e]).forEach(function (t) {
                        u.prototype[t] || (u.prototype[t] = O[e][t])
                    })
                });
                var n = this;
                void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (t) {
                    var e = n.modules[t];
                    e.params && (t = Object.keys(e.params)[0], "object" == typeof (e = e.params[t]) && null !== e && t in i && "enabled" in e && (!0 === i[t] && (i[t] = {
                        enabled: !0
                    }), "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                        enabled: !1
                    })))
                });
                var s = G.extend({}, D);
                n.useModulesParams(s), n.params = G.extend({}, s, z, i), n.originalParams = G.extend({}, n.params), n.passedParams = G.extend({}, i);
                var a, r, o = (n.$ = T)(n.params.el);
                if (a = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (t, e) {
                            e = G.extend({}, i, {
                                el: e
                            });
                            l.push(new u(e))
                        }), l
                    }
                    return a.swiper = n, o.data("swiper", n), a && a.shadowRoot && a.shadowRoot.querySelector ? (r = T(a.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (t) {
                        return o.children(t)
                    } : r = o.children("." + n.params.wrapperClass), G.extend(n, {
                        $el: o,
                        el: a,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        classNames: [],
                        slides: T(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === n.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === n.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === n.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: (a = ["touchstart", "touchmove", "touchend", "touchcancel"], r = ["mousedown", "mousemove", "mouseup"], w.pointerEvents && (r = ["pointerdown", "pointermove", "pointerup"]), n.touchEventsTouch = {
                            start: a[0],
                            move: a[1],
                            end: a[2],
                            cancel: a[3]
                        }, n.touchEventsDesktop = {
                            start: r[0],
                            move: r[1],
                            end: r[2]
                        }, w.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: G.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.useModules(), n.params.init && n.init(), n
                }
            }
            c && (u.__proto__ = c), u.prototype = Object.create(c && c.prototype);
            var t = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return (u.prototype.constructor = u).prototype.slidesPerViewDynamic = function () {
                var t = this.params,
                    e = this.slides,
                    i = this.slidesGrid,
                    n = this.size,
                    s = this.activeIndex,
                    a = 1;
                if (t.centeredSlides) {
                    for (var r, o = e[s].swiperSlideSize, l = s + 1; l < e.length; l += 1) e[l] && !r && (a += 1, (o += e[l].swiperSlideSize) > n && (r = !0));
                    for (var c = s - 1; 0 <= c; --c) e[c] && !r && (a += 1, (o += e[c].swiperSlideSize) > n && (r = !0))
                } else
                    for (var u = s + 1; u < e.length; u += 1) i[u] - i[s] < n && (a += 1);
                return a
            }, u.prototype.update = function () {
                var t, e, i = this;

                function n() {
                    var t = i.rtlTranslate ? -1 * i.translate : i.translate,
                        t = Math.min(Math.max(t, i.maxTranslate()), i.minTranslate());
                    i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses()
                }
                i && !i.destroyed && (t = i.snapGrid, (e = i.params).breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (n(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || n(), e.watchOverflow && t !== i.snapGrid && i.checkOverflow(), i.emit("update"))
            }, u.prototype.changeDirection = function (i, t) {
                void 0 === t && (t = !0);
                var e = this.params.direction;
                return (i = i || ("horizontal" === e ? "vertical" : "horizontal")) === e || "horizontal" !== i && "vertical" !== i || (this.$el.removeClass("" + this.params.containerModifierClass + e).addClass("" + this.params.containerModifierClass + i), this.params.direction = i, this.slides.each(function (t, e) {
                    "vertical" === i ? e.style.width = "" : e.style.height = ""
                }), this.emit("changeDirection"), t && this.update()), this
            }, u.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, u.prototype.destroy = function (t, e) {
                void 0 === t && (t = !0), void 0 === e && (e = !0);
                var i = this,
                    n = i.params,
                    s = i.$el,
                    a = i.$wrapperEl,
                    r = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), e && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (t) {
                    i.off(t)
                }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), G.deleteProps(i)), i.destroyed = !0), null
            }, u.extendDefaults = function (t) {
                G.extend(z, t)
            }, t.extendedDefaults.get = function () {
                return z
            }, t.defaults.get = function () {
                return D
            }, t.Class.get = function () {
                return c
            }, t.$.get = function () {
                return T
            }, Object.defineProperties(u, t), u
        }(i),
        S = {
            name: "device",
            proto: {
                device: L
            },
            static: {
                device: L
            }
        },
        C = {
            name: "support",
            proto: {
                support: w
            },
            static: {
                support: w
            }
        },
        j = {
            isEdge: !!W.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (E = W.navigator.userAgent.toLowerCase()).indexOf("safari") && E.indexOf("chrome") < 0 && E.indexOf("android") < 0,
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(W.navigator.userAgent)
        },
        k = {
            name: "browser",
            proto: {
                browser: j
            },
            static: {
                browser: j
            }
        },
        _ = {
            name: "resize",
            create: function () {
                var t = this;
                G.extend(t, {
                    resize: {
                        resizeHandler: function () {
                            t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            t && !t.destroyed && t.initialized && t.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    W.addEventListener("resize", this.resize.resizeHandler), W.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    W.removeEventListener("resize", this.resize.resizeHandler), W.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        N = {
            func: W.MutationObserver || W.WebkitMutationObserver,
            attach: function (t, e) {
                void 0 === e && (e = {});
                var i = this,
                    n = new N.func(function (t) {
                        var e;
                        1 !== t.length ? (e = function () {
                            i.emit("observerUpdate", t[0])
                        }, W.requestAnimationFrame ? W.requestAnimationFrame(e) : W.setTimeout(e, 0)) : i.emit("observerUpdate", t[0])
                    });
                n.observe(t, {
                    attributes: void 0 === e.attributes || e.attributes,
                    childList: void 0 === e.childList || e.childList,
                    characterData: void 0 === e.characterData || e.characterData
                }), i.observer.observers.push(n)
            },
            init: function () {
                if (w.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (t) {
                    t.disconnect()
                }), this.observer.observers = []
            }
        },
        M = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                G.extend(this, {
                    observer: {
                        init: N.init.bind(this),
                        attach: N.attach.bind(this),
                        destroy: N.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        F = {
            update: function (t) {
                var e = this,
                    i = e.params,
                    n = i.slidesPerView,
                    s = i.slidesPerGroup,
                    a = i.centeredSlides,
                    r = e.params.virtual,
                    o = r.addSlidesBefore,
                    l = r.addSlidesAfter,
                    c = e.virtual,
                    u = c.from,
                    d = c.to,
                    h = c.slides,
                    p = c.slidesGrid,
                    f = c.renderSlide,
                    i = c.offset;
                e.updateActiveIndex();
                var r = e.activeIndex || 0,
                    c = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                    l = a ? (v = Math.floor(n / 2) + s + o, Math.floor(n / 2) + s + l) : (v = n + (s - 1) + o, s + l),
                    m = Math.max((r || 0) - l, 0),
                    g = Math.min((r || 0) + v, h.length - 1),
                    v = (e.slidesGrid[m] || 0) - (e.slidesGrid[0] || 0);

                function y() {
                    e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
                }
                if (G.extend(e.virtual, {
                        from: m,
                        to: g,
                        offset: v,
                        slidesGrid: e.slidesGrid
                    }), u === m && d === g && !t) return e.slidesGrid !== p && v !== i && e.slides.css(c, v + "px"), void e.updateProgress();
                if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                    offset: v,
                    from: m,
                    to: g,
                    slides: function () {
                        for (var t = [], e = m; e <= g; e += 1) t.push(h[e]);
                        return t
                    }()
                }), void y();
                var b = [],
                    w = [];
                if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                else
                    for (var x = u; x <= d; x += 1)(x < m || g < x) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + x + '"]').remove();
                for (var T = 0; T < h.length; T += 1) m <= T && T <= g && (void 0 === d || t ? w.push(T) : (d < T && w.push(T), T < u && b.push(T)));
                w.forEach(function (t) {
                    e.$wrapperEl.append(f(h[t], t))
                }), b.sort(function (t, e) {
                    return e - t
                }).forEach(function (t) {
                    e.$wrapperEl.prepend(f(h[t], t))
                }), e.$wrapperEl.children(".swiper-slide").css(c, v + "px"), y()
            },
            renderSlide: function (t, e) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                t = i.renderSlide ? T(i.renderSlide.call(this, t, e)) : T('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                return t.attr("data-swiper-slide-index") || t.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = t), t
            },
            appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                    for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]);
                else this.virtual.slides.push(t);
                this.virtual.update(!0)
            },
            prependSlide: function (t) {
                var n, s, e = this.activeIndex,
                    i = e + 1,
                    a = 1;
                if (Array.isArray(t)) {
                    for (var r = 0; r < t.length; r += 1) t[r] && this.virtual.slides.unshift(t[r]);
                    i = e + t.length, a = t.length
                } else this.virtual.slides.unshift(t);
                this.params.virtual.cache && (n = this.virtual.cache, s = {}, Object.keys(n).forEach(function (t) {
                    var e = n[t],
                        i = e.attr("data-swiper-slide-index");
                    i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), s[parseInt(t, 10) + a] = e
                }), this.virtual.cache = s), this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function (t) {
                if (null != t) {
                    var e = this.activeIndex;
                    if (Array.isArray(t))
                        for (var i = t.length - 1; 0 <= i; --i) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && --e, e = Math.max(e, 0);
                    else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && --e, e = Math.max(e, 0);
                    this.virtual.update(!0), this.slideTo(e, 0)
                }
            },
            removeAllSlides: function () {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        i = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                G.extend(this, {
                    virtual: {
                        update: F.update.bind(this),
                        appendSlide: F.appendSlide.bind(this),
                        prependSlide: F.prependSlide.bind(this),
                        removeSlide: F.removeSlide.bind(this),
                        removeAllSlides: F.removeAllSlides.bind(this),
                        renderSlide: F.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var t;
                    this.params.virtual.enabled && (this.classNames.push(this.params.containerModifierClass + "virtual"), t = {
                        watchSlidesProgress: !0
                    }, G.extend(this.params, t), G.extend(this.originalParams, t), this.params.initialSlide || this.virtual.update())
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        R = {
            handle: function (t) {
                var e = this.rtlTranslate,
                    i = t;
                i.originalEvent && (i = i.originalEvent);
                var n = i.keyCode || i.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === n || this.isVertical() && 40 === n || 34 === n)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === n || this.isVertical() && 38 === n || 33 === n)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === n || 34 === n || 37 === n || 39 === n || 38 === n || 40 === n)) {
                        var s = !1;
                        if (0 < this.$el.parents("." + this.params.slideClass).length && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var a = W.innerWidth,
                            r = W.innerHeight,
                            t = this.$el.offset();
                        e && (t.left -= this.$el[0].scrollLeft);
                        for (var o = [
                                [t.left, t.top],
                                [t.left + this.width, t.top],
                                [t.left, t.top + this.height],
                                [t.left + this.width, t.top + this.height]
                            ], l = 0; l < o.length; l += 1) {
                            var c = o[l];
                            0 <= c[0] && c[0] <= a && 0 <= c[1] && c[1] <= r && (s = !0)
                        }
                        if (!s) return
                    }
                    this.isHorizontal() ? (33 !== n && 34 !== n && 37 !== n && 39 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (34 !== n && 39 !== n || e) && (33 !== n && 37 !== n || !e) || this.slideNext(), (33 !== n && 37 !== n || e) && (34 !== n && 39 !== n || !e) || this.slidePrev()) : (33 !== n && 34 !== n && 38 !== n && 40 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 34 !== n && 40 !== n || this.slideNext(), 33 !== n && 38 !== n || this.slidePrev()), this.emit("keyPress", n)
                }
            },
            enable: function () {
                this.keyboard.enabled || (T(d).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                this.keyboard.enabled && (T(d).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        E = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function () {
                G.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: R.enable.bind(this),
                        disable: R.disable.bind(this),
                        handle: R.handle.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        V = {
            lastScrollTime: G.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function () {
                return -1 < W.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((e = "onwheel" in d) || ((t = d.createElement("div")).setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel), !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e ? "wheel" : "mousewheel");
                var t, e
            },
            normalize: function (t) {
                var e = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = s, s = 0), (n || s) && t.deltaMode && (1 === t.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !e && (e = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: e,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (t) {
                var e = t,
                    i = this,
                    n = i.params.mousewheel;
                i.params.cssMode && e.preventDefault();
                var s = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (s = T(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !s[0].contains(e.target) && !n.releaseOnEdges) return !0;
                e.originalEvent && (e = e.originalEvent);
                var a = 0,
                    r = i.rtlTranslate ? -1 : 1,
                    s = V.normalize(e);
                if (n.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
                        a = s.pixelX * r
                    } else {
                        if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
                        a = s.pixelY
                    }
                else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * r : -s.pixelY;
                if (0 === a) return !0;
                if (n.invert && (a = -a), i.params.freeMode) {
                    var o = {
                            time: G.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a)
                        },
                        r = i.mousewheel.lastEventBeforeSnap,
                        s = r && o.time < r.time + 500 && o.delta <= r.delta && o.direction === r.direction;
                    if (!s) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var l, c, u = i.getTranslate() + a * n.sensitivity,
                            r = i.isBeginning,
                            n = i.isEnd;
                        if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!r && i.isBeginning || !n && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0, 15 <= (l = i.mousewheel.recentWheelEvents).length && l.shift(), r = l.length ? l[l.length - 1] : void 0, n = l[0], l.push(o), r && (o.delta > r.delta || o.direction !== r.direction) ? l.splice(0) : 15 <= l.length && o.time - n.time < 500 && 1 <= n.delta - o.delta && o.delta <= 6 && (c = 0 < a ? .8 : .2, i.mousewheel.lastEventBeforeSnap = o, l.splice(0), i.mousewheel.timeout = G.nextTick(function () {
                                i.slideToClosest(i.params.speed, !0, void 0, c)
                            }, 0)), i.mousewheel.timeout || (i.mousewheel.timeout = G.nextTick(function () {
                                i.mousewheel.lastEventBeforeSnap = o, l.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }, 500))), s || i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                    }
                } else {
                    u = {
                        time: G.now(),
                        delta: Math.abs(a),
                        direction: Math.sign(a),
                        raw: t
                    }, a = i.mousewheel.recentWheelEvents;
                    2 <= a.length && a.shift();
                    t = a.length ? a[a.length - 1] : void 0;
                    if (a.push(u), (!t || u.direction !== t.direction || u.delta > t.delta || u.time > t.time + 150) && i.mousewheel.animateSlider(u), i.mousewheel.releaseScroll(u)) return !0
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            },
            animateSlider: function (t) {
                return 6 <= t.delta && G.now() - this.mousewheel.lastScrollTime < 60 || (t.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", t.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", t.raw)), this.mousewheel.lastScrollTime = (new W.Date).getTime(), !1)
            },
            releaseScroll: function (t) {
                var e = this.params.mousewheel;
                if (t.direction < 0) {
                    if (this.isEnd && !this.params.loop && e.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && e.releaseOnEdges) return !0;
                return !1
            },
            enable: function () {
                var t = V.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0;
                if (!t) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = T(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(t, this.mousewheel.handle), this.mousewheel.enabled = !0
            },
            disable: function () {
                var t = V.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0;
                if (!t) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = T(this.params.mousewheel.eventsTarged)), e.off(t, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
            }
        },
        B = {
            update: function () {
                var t, e, i = this.params.navigation;
                this.params.loop || (t = (e = this.navigation).$nextEl, (e = e.$prevEl) && 0 < e.length && (this.isBeginning ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)), t && 0 < t.length && (this.isEnd ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)))
            },
            onPrevClick: function (t) {
                t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function (t) {
                t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function () {
                var t, e, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (t = T(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < t.length && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))), i.prevEl && (e = T(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < e.length && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))), t && 0 < t.length && t.on("click", this.navigation.onNextClick), e && 0 < e.length && e.on("click", this.navigation.onPrevClick), G.extend(this.navigation, {
                    $nextEl: t,
                    nextEl: t && t[0],
                    $prevEl: e,
                    prevEl: e && e[0]
                }))
            },
            destroy: function () {
                var t = this.navigation,
                    e = t.$nextEl,
                    t = t.$prevEl;
                e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), t && t.length && (t.off("click", this.navigation.onPrevClick), t.removeClass(this.params.navigation.disabledClass))
            }
        },
        H = {
            update: function () {
                var t = this.rtl,
                    n = this.params.pagination;
                if (n.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var s, e = (this.virtual && this.params.virtual.enabled ? this.virtual : this).slides.length,
                        i = this.pagination.$el,
                        a = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > e - 1 - 2 * this.loopedSlides && (s -= e - 2 * this.loopedSlides), a - 1 < s && (s -= a), s < 0 && "bullets" !== this.params.paginationType && (s = a + s)) : s = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === n.type && this.pagination.bullets && 0 < this.pagination.bullets.length) {
                        var r, o, l, c, u, d = this.pagination.bullets;
                        if (n.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), 1 < n.dynamicMainBullets && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += s - this.previousIndex, this.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), r = s - this.pagination.dynamicBulletIndex, l = ((o = r + (Math.min(d.length, n.dynamicMainBullets) - 1)) + r) / 2), d.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), 1 < i.length) d.each(function (t, e) {
                            var i = T(e),
                                e = i.index();
                            e === s && i.addClass(n.bulletActiveClass), n.dynamicBullets && (r <= e && e <= o && i.addClass(n.bulletActiveClass + "-main"), e === r && i.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), e === o && i.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var h = d.eq(s),
                                p = h.index();
                            if (h.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                for (var e = d.eq(r), h = d.eq(o), f = r; f <= o; f += 1) d.eq(f).addClass(n.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (p >= d.length - n.dynamicMainBullets) {
                                        for (var m = n.dynamicMainBullets; 0 <= m; --m) d.eq(d.length - m).addClass(n.bulletActiveClass + "-main");
                                        d.eq(d.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                                    } else e.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                                else e.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                        }
                        n.dynamicBullets && (u = Math.min(d.length, n.dynamicMainBullets + 4), c = (this.pagination.bulletSize * u - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize, u = t ? "right" : "left", d.css(this.isHorizontal() ? u : "top", c + "px"))
                    }
                    "fraction" === n.type && (i.find("." + n.currentClass).text(n.formatFractionCurrent(s + 1)), i.find("." + n.totalClass).text(n.formatFractionTotal(a))), "progressbar" === n.type && (l = n.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical", t = (s + 1) / a, c = u = 1, "horizontal" == l ? u = t : c = t, i.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + c + ")").transition(this.params.speed)), "custom" === n.type && n.renderCustom ? (i.html(n.renderCustom(this, s + 1, a)), this.emit("paginationRender", this, i[0])) : this.emit("paginationUpdate", this, i[0]), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            },
            render: function () {
                var t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var e = (this.virtual && this.params.virtual.enabled ? this.virtual : this).slides.length,
                        i = this.pagination.$el,
                        n = "";
                    if ("bullets" === t.type) {
                        for (var s = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1) t.renderBullet ? n += t.renderBullet.call(this, a, t.bulletClass) : n += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(n), this.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(n)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function () {
                var t, e = this,
                    i = e.params.pagination;
                !i.el || 0 !== (t = T(i.el)).length && (e.params.uniqueNavElements && "string" == typeof i.el && 1 < t.length && 1 === e.$el.find(i.el).length && (t = e.$el.find(i.el)), "bullets" === i.type && i.clickable && t.addClass(i.clickableClass), t.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (t.addClass("" + i.modifierClass + i.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && t.addClass(i.progressbarOppositeClass), i.clickable && t.on("click", "." + i.bulletClass, function (t) {
                    t.preventDefault();
                    t = T(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (t += e.loopedSlides), e.slideTo(t)
                }), G.extend(e.pagination, {
                    $el: t,
                    el: t[0]
                }))
            },
            destroy: function () {
                var t, e = this.params.pagination;
                e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length && ((t = this.pagination.$el).removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass))
            }
        },
        q = {
            setTranslate: function () {
                var t, e, i, n, s, a, r, o;
                this.params.scrollbar.el && this.scrollbar.el && (r = this.scrollbar, t = this.rtlTranslate, o = this.progress, e = r.dragSize, i = r.trackSize, n = r.$dragEl, s = r.$el, a = this.params.scrollbar, o = (i - (r = e)) * o, t ? 0 < (o = -o) ? (r = e - o, o = 0) : i < -o + e && (r = i + o) : o < 0 ? (r = e + o, o = 0) : i < o + e && (r = i - o), this.isHorizontal() ? (n.transform("translate3d(" + o + "px, 0, 0)"), n[0].style.width = r + "px") : (n.transform("translate3d(0px, " + o + "px, 0)"), n[0].style.height = r + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), s[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                    s[0].style.opacity = 0, s.transition(400)
                }, 1e3)))
            },
            setTransition: function (t) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
            },
            updateSize: function () {
                var t, e, i, n, s, a, r;
                this.params.scrollbar.el && this.scrollbar.el && (e = (t = this.scrollbar).$dragEl, i = t.$el, e[0].style.width = "", e[0].style.height = "", n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, a = (s = this.size / this.virtualSize) * (n / this.size), r = "auto" === this.params.scrollbar.dragSize ? n * s : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = r + "px" : e[0].style.height = r + "px", i[0].style.display = 1 <= s ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), G.extend(t, {
                    trackSize: n,
                    divider: s,
                    moveDivider: a,
                    dragSize: r
                }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass))
            },
            getPointerPosition: function (t) {
                return this.isHorizontal() ? ("touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0] : t).clientX : ("touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0] : t).clientY
            },
            setDragPosition: function (t) {
                var e = this.scrollbar,
                    i = this.rtlTranslate,
                    n = e.$el,
                    s = e.dragSize,
                    a = e.trackSize,
                    r = e.dragStartPos,
                    s = (e.getPointerPosition(t) - n.offset()[this.isHorizontal() ? "left" : "top"] - (null !== r ? r : s / 2)) / (a - s);
                s = Math.max(Math.min(s, 1), 0), i && (s = 1 - s);
                s = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * s;
                this.updateProgress(s), this.setTranslate(s), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function (t) {
                var e = this.params.scrollbar,
                    i = this.scrollbar,
                    n = this.$wrapperEl,
                    s = i.$el,
                    a = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = t.target === a[0] || t.target === a ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), e.hide && s.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", t)
            },
            onDragMove: function (t) {
                var e = this.scrollbar,
                    i = this.$wrapperEl,
                    n = e.$el,
                    s = e.$dragEl;
                this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", t))
            },
            onDragEnd: function (t) {
                var e = this.params.scrollbar,
                    i = this.scrollbar,
                    n = this.$wrapperEl,
                    s = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = G.nextTick(function () {
                    s.css("opacity", 0), s.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function () {
                var t, e, i, n, s;
                this.params.scrollbar.el && (n = this.scrollbar, t = this.touchEventsTouch, e = this.touchEventsDesktop, s = this.params, i = n.$el[0], n = !(!w.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!w.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, w.touch ? (i.addEventListener(t.start, this.scrollbar.onDragStart, n), i.addEventListener(t.move, this.scrollbar.onDragMove, n), i.addEventListener(t.end, this.scrollbar.onDragEnd, s)) : (i.addEventListener(e.start, this.scrollbar.onDragStart, n), d.addEventListener(e.move, this.scrollbar.onDragMove, n), d.addEventListener(e.end, this.scrollbar.onDragEnd, s)))
            },
            disableDraggable: function () {
                var t, e, i, n, s;
                this.params.scrollbar.el && (n = this.scrollbar, t = this.touchEventsTouch, e = this.touchEventsDesktop, s = this.params, i = n.$el[0], n = !(!w.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!w.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, w.touch ? (i.removeEventListener(t.start, this.scrollbar.onDragStart, n), i.removeEventListener(t.move, this.scrollbar.onDragMove, n), i.removeEventListener(t.end, this.scrollbar.onDragEnd, s)) : (i.removeEventListener(e.start, this.scrollbar.onDragStart, n), d.removeEventListener(e.move, this.scrollbar.onDragMove, n), d.removeEventListener(e.end, this.scrollbar.onDragEnd, s)))
            },
            init: function () {
                var t, e, i, n;
                this.params.scrollbar.el && (t = this.scrollbar, n = this.$el, i = T((e = this.params.scrollbar).el), this.params.uniqueNavElements && "string" == typeof e.el && 1 < i.length && 1 === n.find(e.el).length && (i = n.find(e.el)), 0 === (n = i.find("." + this.params.scrollbar.dragClass)).length && (n = T('<div class="' + this.params.scrollbar.dragClass + '"></div>'), i.append(n)), G.extend(t, {
                    $el: i,
                    el: i[0],
                    $dragEl: n,
                    dragEl: n[0]
                }), e.draggable && t.enableDraggable())
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        X = {
            setTransform: function (t, e) {
                var i = this.rtl,
                    n = T(t),
                    s = i ? -1 : 1,
                    a = n.attr("data-swiper-parallax") || "0",
                    r = n.attr("data-swiper-parallax-x"),
                    o = n.attr("data-swiper-parallax-y"),
                    t = n.attr("data-swiper-parallax-scale"),
                    i = n.attr("data-swiper-parallax-opacity");
                r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = a, o = "0") : (o = a, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * e * s + "%" : r * e * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * e + "%" : o * e + "px", null != i && (i = i - (i - 1) * (1 - Math.abs(e)), n[0].style.opacity = i), null == t ? n.transform("translate3d(" + r + ", " + o + ", 0px)") : (e = t - (t - 1) * (1 - Math.abs(e)), n.transform("translate3d(" + r + ", " + o + ", 0px) scale(" + e + ")"))
            },
            setTranslate: function () {
                var n = this,
                    t = n.$el,
                    e = n.slides,
                    s = n.progress,
                    a = n.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                    n.parallax.setTransform(e, s)
                }), e.each(function (t, e) {
                    var i = e.progress;
                    1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(t / 2) - s * (a.length - 1)), i = Math.min(Math.max(i, -1), 1), T(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                        n.parallax.setTransform(e, i)
                    })
                })
            },
            setTransition: function (n) {
                void 0 === n && (n = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, e) {
                    var i = T(e),
                        e = parseInt(i.attr("data-swiper-parallax-duration"), 10) || n;
                    0 === n && (e = 0), i.transition(e)
                })
            }
        },
        Y = {
            getDistanceBetweenTouches: function (t) {
                if (t.targetTouches.length < 2) return 1;
                var e = t.targetTouches[0].pageX,
                    i = t.targetTouches[0].pageY,
                    n = t.targetTouches[1].pageX,
                    t = t.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(t - i, 2))
            },
            onGestureStart: function (t) {
                var e = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !w.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, n.scaleStart = Y.getDistanceBetweenTouches(t)
                }
                n.$slideEl && n.$slideEl.length || (n.$slideEl = T(t.target).closest("." + this.params.slideClass), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent("." + e.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl && n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
            },
            onGestureChange: function (t) {
                var e = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!w.gestures) {
                    if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = Y.getDistanceBetweenTouches(t)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = w.gestures ? t.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function (t) {
                var e = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!w.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !L.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), e.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function (t) {
                var e = this.zoom,
                    i = e.gesture,
                    e = e.image;
                i.$imageEl && 0 !== i.$imageEl.length && (e.isTouched || (L.android && t.cancelable && t.preventDefault(), e.isTouched = !0, e.touchesStart.x = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX, e.touchesStart.y = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY))
            },
            onTouchMove: function (t) {
                var e = this.zoom,
                    i = e.gesture,
                    n = e.image,
                    s = e.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = G.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = G.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                    var a = n.width * e.scale,
                        r = n.height * e.scale;
                    if (!(a < i.slideWidth && r < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - r / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = ("touchmove" === t.type ? t.targetTouches[0] : t).pageX, n.touchesCurrent.y = ("touchmove" === t.type ? t.targetTouches[0] : t).pageY, !n.isMoved && !e.isScaling) {
                            if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                        }
                        t.cancelable && t.preventDefault(), t.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var t = this.zoom,
                    e = t.gesture,
                    i = t.image,
                    n = t.velocity;
                if (e.$imageEl && 0 !== e.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        a = 300,
                        r = n.x * s,
                        o = i.currentX + r,
                        r = n.y * a,
                        r = i.currentY + r;
                    0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((r - i.currentY) / n.y));
                    a = Math.max(s, a);
                    i.currentX = o, i.currentY = r;
                    r = i.width * t.scale, t = i.height * t.scale;
                    i.minX = Math.min(e.slideWidth / 2 - r / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - t / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(a).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var t = this.zoom,
                    e = t.gesture;
                e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl && e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl && e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
            },
            toggle: function (t) {
                var e = this.zoom;
                e.scale && 1 !== e.scale ? e.out() : e.in(t)
            },
            in: function (t) {
                var e, i, n, s = this.zoom,
                    a = this.params.zoom,
                    r = s.gesture,
                    o = s.image;
                r.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? r.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : r.$slideEl = this.slides.eq(this.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (r.$slideEl.addClass("" + a.zoomedSlideClass), o = void 0 === o.touchesStart.x && t ? (n = ("touchend" === t.type ? t.changedTouches[0] : t).pageX, ("touchend" === t.type ? t.changedTouches[0] : t).pageY) : (n = o.touchesStart.x, o.touchesStart.y), s.scale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, s.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? (a = r.$slideEl[0].offsetWidth, t = r.$slideEl[0].offsetHeight, e = r.$slideEl.offset().left + a / 2 - n, i = r.$slideEl.offset().top + t / 2 - o, n = r.$imageEl[0].offsetWidth, o = r.$imageEl[0].offsetHeight, n = n * s.scale, o = o * s.scale, n = -(a = Math.min(a / 2 - n / 2, 0)), o = -(t = Math.min(t / 2 - o / 2, 0)), (e = e * s.scale) < a && (e = a), n < e && (e = n), (i = i * s.scale) < t && (i = t), o < i && (i = o)) : i = e = 0, r.$imageWrapEl.transition(300).transform("translate3d(" + e + "px, " + i + "px,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
            },
            out: function () {
                var t = this.zoom,
                    e = this.params.zoom,
                    i = t.gesture;
                i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + e.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function () {
                var t, e, i, n = this.zoom;
                n.enabled || (n.enabled = !0, t = !("touchstart" !== this.touchEvents.start || !w.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, e = !w.passiveListener || {
                    passive: !1,
                    capture: !0
                }, i = "." + this.params.slideClass, w.gestures ? (this.$wrapperEl.on("gesturestart", i, n.onGestureStart, t), this.$wrapperEl.on("gesturechange", i, n.onGestureChange, t), this.$wrapperEl.on("gestureend", i, n.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, i, n.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, i, n.onGestureChange, e), this.$wrapperEl.on(this.touchEvents.end, i, n.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, i, n.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, n.onTouchMove, e))
            },
            disable: function () {
                var t, e, i, n = this.zoom;
                n.enabled && (this.zoom.enabled = !1, t = !("touchstart" !== this.touchEvents.start || !w.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, e = !w.passiveListener || {
                    passive: !1,
                    capture: !0
                }, i = "." + this.params.slideClass, w.gestures ? (this.$wrapperEl.off("gesturestart", i, n.onGestureStart, t), this.$wrapperEl.off("gesturechange", i, n.onGestureChange, t), this.$wrapperEl.off("gestureend", i, n.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, i, n.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, i, n.onGestureChange, e), this.$wrapperEl.off(this.touchEvents.end, i, n.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, i, n.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, n.onTouchMove, e))
            }
        },
        J = {
            loadInSlide: function (t, l) {
                void 0 === l && (l = !0);
                var c, u = this,
                    d = u.params.lazy;
                void 0 !== t && 0 !== u.slides.length && (t = (c = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children("." + u.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : u.slides.eq(t)).find("." + d.elementClass + ":not(." + d.loadedClass + "):not(." + d.loadingClass + ")"), !c.hasClass(d.elementClass) || c.hasClass(d.loadedClass) || c.hasClass(d.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (t, e) {
                    var i = T(e);
                    i.addClass(d.loadingClass);
                    var n = i.attr("data-background"),
                        s = i.attr("data-src"),
                        a = i.attr("data-srcset"),
                        r = i.attr("data-sizes"),
                        o = i.parent("picture");
                    u.loadImage(i[0], s || n, a, r, !1, function () {
                        var t, e;
                        null == u || !u || u && !u.params || u.destroyed || (n ? (i.css("background-image", 'url("' + n + '")'), i.removeAttr("data-background")) : (a && (i.attr("srcset", a), i.removeAttr("data-srcset")), r && (i.attr("sizes", r), i.removeAttr("data-sizes")), o.length && o.children("source").each(function (t, e) {
                            e = T(e);
                            e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")), e.removeAttr("data-srcset"))
                        }), s && (i.attr("src", s), i.removeAttr("data-src"))), i.addClass(d.loadedClass).removeClass(d.loadingClass), c.find("." + d.preloaderClass).remove(), u.params.loop && l && (e = c.attr("data-swiper-slide-index"), c.hasClass(u.params.slideDuplicateClass) ? (t = u.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + u.params.slideDuplicateClass + ")"), u.lazy.loadInSlide(t.index(), !1)) : (e = u.$wrapperEl.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]'), u.lazy.loadInSlide(e.index(), !1))), u.emit("lazyImageReady", c[0], i[0]), u.params.autoHeight && u.updateAutoHeight())
                    }), u.emit("lazyImageLoad", c[0], i[0])
                }))
            },
            load: function () {
                var i = this,
                    e = i.$wrapperEl,
                    n = i.params,
                    s = i.slides,
                    t = i.activeIndex,
                    a = i.virtual && n.virtual.enabled,
                    r = n.lazy,
                    o = n.slidesPerView;

                function l(t) {
                    if (a) {
                        if (e.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return 1
                    } else if (s[t]) return 1
                }

                function c(t) {
                    return a ? T(t).attr("data-swiper-slide-index") : T(t).index()
                }
                if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) e.children("." + n.slideVisibleClass).each(function (t, e) {
                    e = a ? T(e).attr("data-swiper-slide-index") : T(e).index();
                    i.lazy.loadInSlide(e)
                });
                else if (1 < o)
                    for (var u = t; u < t + o; u += 1) l(u) && i.lazy.loadInSlide(u);
                else i.lazy.loadInSlide(t);
                if (r.loadPrevNext)
                    if (1 < o || r.loadPrevNextAmount && 1 < r.loadPrevNextAmount) {
                        for (var d = r.loadPrevNextAmount, r = o, h = Math.min(t + r + Math.max(d, r), s.length), d = Math.max(t - Math.max(r, d), 0), p = t + o; p < h; p += 1) l(p) && i.lazy.loadInSlide(p);
                        for (var f = d; f < t; f += 1) l(f) && i.lazy.loadInSlide(f)
                    } else {
                        d = e.children("." + n.slideNextClass);
                        0 < d.length && i.lazy.loadInSlide(c(d));
                        d = e.children("." + n.slidePrevClass);
                        0 < d.length && i.lazy.loadInSlide(c(d))
                    }
            }
        },
        U = {
            LinearSpline: function (t, e) {
                var i, n, s, a, r;
                return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
                    return t ? (r = function (t, e) {
                        for (n = -1, i = t.length; 1 < i - n;) t[s = i + n >> 1] <= e ? n = s : i = s;
                        return i
                    }(this.x, t), a = r - 1, (t - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function (t) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new U.LinearSpline(this.slidesGrid, t.slidesGrid) : new U.LinearSpline(this.snapGrid, t.snapGrid))
            },
            setTranslate: function (t, e) {
                var i, n, s = this,
                    a = s.controller.control;

                function r(t) {
                    var e = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(t), n = -s.controller.spline.interpolate(-e)), n && "container" !== s.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (e - s.minTranslate()) * i + t.minTranslate()), s.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, s), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== e && a[o] instanceof I && r(a[o]);
                else a instanceof I && e !== a && r(a)
            },
            setTransition: function (e, t) {
                var i, n = this,
                    s = n.controller.control;

                function a(t) {
                    t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && G.nextTick(function () {
                        t.updateAutoHeight()
                    }), t.$wrapperEl.transitionEnd(function () {
                        s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof I && a(s[i]);
                else s instanceof I && t !== s && a(s)
            }
        },
        Q = {
            makeElFocusable: function (t) {
                return t.attr("tabIndex", "0"), t
            },
            makeElNotFocusable: function (t) {
                return t.attr("tabIndex", "-1"), t
            },
            addElRole: function (t, e) {
                return t.attr("role", e), t
            },
            addElLabel: function (t, e) {
                return t.attr("aria-label", e), t
            },
            disableEl: function (t) {
                return t.attr("aria-disabled", !0), t
            },
            enableEl: function (t) {
                return t.attr("aria-disabled", !1), t
            },
            onEnterKey: function (t) {
                var e = this.params.a11y;
                13 === t.keyCode && (t = T(t.target), this.navigation && this.navigation.$nextEl && t.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)), this.navigation && this.navigation.$prevEl && t.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)), this.pagination && t.is("." + this.params.pagination.bulletClass) && t[0].click())
            },
            notify: function (t) {
                var e = this.a11y.liveRegion;
                0 !== e.length && (e.html(""), e.html(t))
            },
            updateNavigation: function () {
                var t, e;
                !this.params.loop && this.navigation && (t = (e = this.navigation).$nextEl, (e = e.$prevEl) && 0 < e.length && (this.isBeginning ? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e)) : (this.a11y.enableEl(e), this.a11y.makeElFocusable(e))), t && 0 < t.length && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t))))
            },
            updatePagination: function () {
                var i = this,
                    n = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (t, e) {
                    e = T(e);
                    i.a11y.makeElFocusable(e), i.a11y.addElRole(e, "button"), i.a11y.addElLabel(e, n.paginationBulletMessage.replace(/\{\{index\}\}/, e.index() + 1))
                })
            },
            init: function () {
                this.$el.append(this.a11y.liveRegion);
                var t, e, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function () {
                var t, e;
                this.a11y.liveRegion && 0 < this.a11y.liveRegion.length && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        K = {
            init: function () {
                if (this.params.history) {
                    if (!W.history || !W.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var t = this.history;
                    t.initialized = !0, t.paths = K.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || W.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function () {
                this.params.history.replaceState || W.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function () {
                var t = W.location.pathname.slice(1).split("/").filter(function (t) {
                        return "" !== t
                    }),
                    e = t.length;
                return {
                    key: t[e - 2],
                    value: t[e - 1]
                }
            },
            setHistory: function (t, e) {
                this.history.initialized && this.params.history.enabled && (e = this.slides.eq(e), e = K.slugify(e.attr("data-history")), W.location.pathname.includes(t) || (e = t + "/" + e), (t = W.history.state) && t.value === e || (this.params.history.replaceState ? W.history.replaceState({
                    value: e
                }, null, e) : W.history.pushState({
                    value: e
                }, null, e)))
            },
            slugify: function (t) {
                return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (t, e, i) {
                if (e)
                    for (var n = 0, s = this.slides.length; n < s; n += 1) {
                        var a = this.slides.eq(n);
                        K.slugify(a.attr("data-history")) !== e || a.hasClass(this.params.slideDuplicateClass) || (a = a.index(), this.slideTo(a, t, i))
                    } else this.slideTo(0, t, i)
            }
        },
        Z = {
            onHashCange: function () {
                this.emit("hashChange");
                var t = d.location.hash.replace("#", "");
                t === this.slides.eq(this.activeIndex).attr("data-hash") || void 0 !== (t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index()) && this.slideTo(t)
            },
            setHash: function () {
                var t;
                this.hashNavigation.initialized && this.params.hashNavigation.enabled && (this.params.hashNavigation.replaceState && W.history && W.history.replaceState ? W.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "") : (t = (t = this.slides.eq(this.activeIndex)).attr("data-hash") || t.attr("data-history"), d.location.hash = t || ""), this.emit("hashSet"))
            },
            init: function () {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var t = d.location.hash.replace("#", "");
                    if (t)
                        for (var e = 0, i = this.slides.length; e < i; e += 1) {
                            var n = this.slides.eq(e);
                            (n.attr("data-hash") || n.attr("data-history")) !== t || n.hasClass(this.params.slideDuplicateClass) || (n = n.index(), this.slideTo(n, 0, this.params.runCallbacksOnInit, !0))
                        }
                    this.params.hashNavigation.watchState && T(W).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && T(W).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        tt = {
            run: function () {
                var t = this,
                    e = t.slides.eq(t.activeIndex),
                    i = t.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = G.nextTick(function () {
                    t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run()
                }, i)
            },
            start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function () {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function (t) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        et = {
            setTranslate: function () {
                for (var t = this.slides, e = 0; e < t.length; e += 1) {
                    var i = this.slides.eq(e),
                        n = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (n -= this.translate);
                    var s = 0;
                    this.isHorizontal() || (s = n, n = 0);
                    var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: a
                    }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                }
            },
            setTransition: function (t) {
                var i, n = this,
                    e = n.slides,
                    s = n.$wrapperEl;
                e.transition(t), n.params.virtualTranslate && 0 !== t && (i = !1, e.transitionEnd(function () {
                    if (!i && n && !n.destroyed) {
                        i = !0, n.animating = !1;
                        for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1) s.trigger(t[e])
                    }
                }))
            }
        },
        it = {
            setTranslate: function () {
                var t, e = this.$el,
                    i = this.$wrapperEl,
                    n = this.slides,
                    s = this.width,
                    a = this.height,
                    r = this.rtlTranslate,
                    o = this.size,
                    l = this.params.cubeEffect,
                    c = this.isHorizontal(),
                    u = this.virtual && this.params.virtual.enabled,
                    d = 0;
                l.shadow && (c ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = T('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({
                    height: s + "px"
                })) : 0 === (t = e.find(".swiper-cube-shadow")).length && (t = T('<div class="swiper-cube-shadow"></div>'), e.append(t)));
                for (var h = 0; h < n.length; h += 1) {
                    var p = n.eq(h),
                        f = h;
                    u && (f = parseInt(p.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    r && (m = -m, g = Math.floor(-m / 360));
                    var v = Math.max(Math.min(p[0].progress, 1), -1),
                        y = 0,
                        b = 0,
                        w = 0;
                    f % 4 == 0 ? (y = 4 * -g * o, w = 0) : (f - 1) % 4 == 0 ? (y = 0, w = 4 * -g * o) : (f - 2) % 4 == 0 ? (y = o + 4 * g * o, w = o) : (f - 3) % 4 == 0 && (y = -o, w = 3 * o + 4 * o * g), r && (y = -y), c || (b = y, y = 0);
                    w = "rotateX(" + (c ? 0 : -m) + "deg) rotateY(" + (c ? m : 0) + "deg) translate3d(" + y + "px, " + b + "px, " + w + "px)";
                    v <= 1 && -1 < v && (d = r ? 90 * -f - 90 * v : 90 * f + 90 * v), p.transform(w), l.slideShadows && (f = c ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"), w = c ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom"), 0 === f.length && (f = T('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), p.append(f)), 0 === w.length && (w = T('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), p.append(w)), f.length && (f[0].style.opacity = Math.max(-v, 0)), w.length && (w[0].style.opacity = Math.max(v, 0)))
                }
                i.css({
                    "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                    "transform-origin": "50% 50% -" + o / 2 + "px"
                }), l.shadow && (c ? t.transform("translate3d(0px, " + (s / 2 + l.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")") : (x = Math.abs(d) - 90 * Math.floor(Math.abs(d) / 90), e = 1.5 - (Math.sin(2 * x * Math.PI / 360) / 2 + Math.cos(2 * x * Math.PI / 360) / 2), s = l.shadowScale, x = l.shadowScale / e, e = l.shadowOffset, t.transform("scale3d(" + s + ", 1, " + x + ") translate3d(0px, " + (a / 2 + e) + "px, " + -a / 2 / x + "px) rotateX(-90deg)")));
                var x = j.isSafari || j.isUiWebView ? -o / 2 : 0;
                i.transform("translate3d(0px,0," + x + "px) rotateX(" + (this.isHorizontal() ? 0 : d) + "deg) rotateY(" + (this.isHorizontal() ? -d : 0) + "deg)")
            },
            setTransition: function (t) {
                var e = this.$el;
                this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
            }
        },
        nt = {
            setTranslate: function () {
                for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var n = t.eq(i),
                        s = n[0].progress;
                    this.params.flipEffect.limitRotation && (s = Math.max(Math.min(n[0].progress, 1), -1));
                    var a, r, o = -180 * s,
                        l = 0,
                        c = -n[0].swiperSlideOffset,
                        u = 0;
                    this.isHorizontal() ? e && (o = -o) : (u = c, l = -o, o = c = 0), n[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, this.params.flipEffect.slideShadows && (a = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), r = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = T('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(a)), 0 === r.length && (r = T('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(r)), a.length && (a[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))), n.transform("translate3d(" + c + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function (t) {
                var i, n = this,
                    e = n.slides,
                    s = n.activeIndex,
                    a = n.$wrapperEl;
                e.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), n.params.virtualTranslate && 0 !== t && (i = !1, e.eq(s).transitionEnd(function () {
                    if (!i && n && !n.destroyed) {
                        i = !0, n.animating = !1;
                        for (var t = ["webkitTransitionEnd", "transitionend"], e = 0; e < t.length; e += 1) a.trigger(t[e])
                    }
                }))
            }
        },
        st = {
            setTranslate: function () {
                for (var t = this.width, e = this.height, i = this.slides, n = this.$wrapperEl, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), o = this.translate, l = r ? t / 2 - o : e / 2 - o, c = r ? a.rotate : -a.rotate, u = a.depth, d = 0, h = i.length; d < h; d += 1) {
                    var p = i.eq(d),
                        f = s[d],
                        m = (l - p[0].swiperSlideOffset - f / 2) / f * a.modifier,
                        g = r ? c * m : 0,
                        v = r ? 0 : c * m,
                        y = -u * Math.abs(m),
                        b = a.stretch;
                    "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * f);
                    f = r ? 0 : b * m, b = r ? b * m : 0;
                    Math.abs(b) < .001 && (b = 0), Math.abs(f) < .001 && (f = 0), Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0);
                    v = "translate3d(" + b + "px," + f + "px," + y + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg)";
                    p.transform(v), p[0].style.zIndex = 1 - Math.abs(Math.round(m)), a.slideShadows && (g = r ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"), v = r ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom"), 0 === g.length && (g = T('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), p.append(g)), 0 === v.length && (v = T('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), p.append(v)), g.length && (g[0].style.opacity = 0 < m ? m : 0), v.length && (v[0].style.opacity = 0 < -m ? -m : 0))
                }(w.pointerEvents || w.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%")
            },
            setTransition: function (t) {
                this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            }
        },
        at = {
            init: function () {
                var t = this.params.thumbs,
                    e = this.constructor;
                t.swiper instanceof e ? (this.thumbs.swiper = t.swiper, G.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), G.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : G.isObject(t.swiper) && (this.thumbs.swiper = new e(G.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function () {
                var t, e, i, n = this.thumbs.swiper;
                n && (e = n.clickedIndex, (t = n.clickedSlide) && T(t).hasClass(this.params.thumbs.slideThumbActiveClass) || null == e || (i = n.params.loop ? parseInt(T(n.clickedSlide).attr("data-swiper-slide-index"), 10) : e, this.params.loop && (t = this.activeIndex, this.slides.eq(t).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, t = this.activeIndex), n = this.slides.eq(t).prevAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(), e = this.slides.eq(t).nextAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(), i = void 0 === n || void 0 !== e && e - t < t - n ? e : n), this.slideTo(i)))
            },
            update: function (t) {
                var e = this.thumbs.swiper;
                if (e) {
                    var i, n, s, a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView,
                        r = this.params.thumbs.autoScrollOffset,
                        o = r && !e.params.loop;
                    this.realIndex === e.realIndex && !o || (i = e.activeIndex, s = e.params.loop ? (e.slides.eq(i).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, i = e.activeIndex), s = e.slides.eq(i).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), n = e.slides.eq(i).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), n = void 0 === s ? n : void 0 === n ? s : n - i == i - s ? i : n - i < i - s ? n : s, this.activeIndex > this.previousIndex ? "next" : "prev") : (n = this.realIndex) > this.previousIndex ? "next" : "prev", o && (n += "next" === s ? r : -1 * r), e.visibleSlidesIndexes && e.visibleSlidesIndexes.indexOf(n) < 0 && (e.params.centeredSlides ? n = i < n ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : i < n && (n = n - a + 1), e.slideTo(n, t ? 0 : void 0)));
                    var l = 1,
                        c = this.params.thumbs.slideThumbActiveClass;
                    if (1 < this.params.slidesPerView && !this.params.centeredSlides && (l = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (l = 1), l = Math.floor(l), e.slides.removeClass(c), e.params.loop || e.params.virtual && e.params.virtual.enabled)
                        for (var u = 0; u < l; u += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(c);
                    else
                        for (var d = 0; d < l; d += 1) e.slides.eq(this.realIndex + d).addClass(c)
                }
            }
        },
        E = [S, C, k, _, M, i, E, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                G.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: V.enable.bind(this),
                        disable: V.disable.bind(this),
                        handle: V.handle.bind(this),
                        handleMouseEnter: V.handleMouseEnter.bind(this),
                        handleMouseLeave: V.handleMouseLeave.bind(this),
                        animateSlider: V.animateSlider.bind(this),
                        releaseScroll: V.releaseScroll.bind(this),
                        lastScrollTime: G.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function () {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function () {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                G.extend(this, {
                    navigation: {
                        init: B.init.bind(this),
                        update: B.update.bind(this),
                        destroy: B.destroy.bind(this),
                        onNextClick: B.onNextClick.bind(this),
                        onPrevClick: B.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (t) {
                    var e, i = this.navigation,
                        n = i.$nextEl,
                        i = i.$prevEl;
                    !this.params.navigation.hideOnClick || T(t.target).is(i) || T(t.target).is(n) || (n ? e = n.hasClass(this.params.navigation.hiddenClass) : i && (e = i.hasClass(this.params.navigation.hiddenClass)), !0 === e ? this.emit("navigationShow", this) : this.emit("navigationHide", this), n && n.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (t) {
                        return t
                    },
                    formatFractionTotal: function (t) {
                        return t
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                G.extend(this, {
                    pagination: {
                        init: H.init.bind(this),
                        render: H.render.bind(this),
                        update: H.update.bind(this),
                        destroy: H.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function () {
                    !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
                },
                snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function () {
                    this.pagination.destroy()
                },
                click: function (t) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !T(t.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                G.extend(this, {
                    scrollbar: {
                        init: q.init.bind(this),
                        destroy: q.destroy.bind(this),
                        updateSize: q.updateSize.bind(this),
                        setTranslate: q.setTranslate.bind(this),
                        setTransition: q.setTransition.bind(this),
                        enableDraggable: q.enableDraggable.bind(this),
                        disableDraggable: q.disableDraggable.bind(this),
                        setDragPosition: q.setDragPosition.bind(this),
                        getPointerPosition: q.getPointerPosition.bind(this),
                        onDragStart: q.onDragStart.bind(this),
                        onDragMove: q.onDragMove.bind(this),
                        onDragEnd: q.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function () {
                    this.scrollbar.updateSize()
                },
                resize: function () {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize()
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate()
                },
                setTransition: function (t) {
                    this.scrollbar.setTransition(t)
                },
                destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                G.extend(this, {
                    parallax: {
                        setTransform: X.setTransform.bind(this),
                        setTranslate: X.setTranslate.bind(this),
                        setTransition: X.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function (t) {
                    this.params.parallax.enabled && this.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var n = this,
                    e = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (t) {
                    e[t] = Y[t].bind(n)
                }), G.extend(n, {
                    zoom: e
                });
                var s = 1;
                Object.defineProperty(n.zoom, "scale", {
                    get: function () {
                        return s
                    },
                    set: function (t) {
                        var e, i;
                        s !== t && (e = n.zoom.gesture.$imageEl ? n.zoom.gesture.$imageEl[0] : void 0, i = n.zoom.gesture.$slideEl ? n.zoom.gesture.$slideEl[0] : void 0, n.emit("zoomChange", t, e, i)), s = t
                    }
                })
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function () {
                    this.zoom.disable()
                },
                touchStart: function (t) {
                    this.zoom.enabled && this.zoom.onTouchStart(t)
                },
                touchEnd: function (t) {
                    this.zoom.enabled && this.zoom.onTouchEnd(t)
                },
                doubleTap: function (t) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                },
                transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                G.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: J.load.bind(this),
                        loadInSlide: J.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function () {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function () {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                G.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: U.getInterpolateFunction.bind(this),
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function (t, e) {
                    this.controller.control && this.controller.setTranslate(t, e)
                },
                setTransition: function (t, e) {
                    this.controller.control && this.controller.setTransition(t, e)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var e = this;
                G.extend(e, {
                    a11y: {
                        liveRegion: T('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(Q).forEach(function (t) {
                    e.a11y[t] = Q[t].bind(e)
                })
            },
            on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                G.extend(this, {
                    history: {
                        init: K.init.bind(this),
                        setHistory: K.setHistory.bind(this),
                        setHistoryPopState: K.setHistoryPopState.bind(this),
                        scrollToSlide: K.scrollToSlide.bind(this),
                        destroy: K.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function () {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                G.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: Z.init.bind(this),
                        destroy: Z.destroy.bind(this),
                        setHash: Z.setHash.bind(this),
                        onHashCange: Z.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function () {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var e = this;
                G.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: tt.run.bind(e),
                        start: tt.start.bind(e),
                        stop: tt.stop.bind(e),
                        pause: tt.pause.bind(e),
                        onVisibilityChange: function () {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function (t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function (t, e) {
                    this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                },
                sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function () {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                G.extend(this, {
                    fadeEffect: {
                        setTranslate: et.setTranslate.bind(this),
                        setTransition: et.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var t;
                    "fade" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "fade"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, G.extend(this.params, t), G.extend(this.originalParams, t))
                },
                setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function (t) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                G.extend(this, {
                    cubeEffect: {
                        setTranslate: it.setTranslate.bind(this),
                        setTransition: it.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var t;
                    "cube" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    }, G.extend(this.params, t), G.extend(this.originalParams, t))
                },
                setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function (t) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                G.extend(this, {
                    flipEffect: {
                        setTranslate: nt.setTranslate.bind(this),
                        setTransition: nt.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var t;
                    "flip" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, G.extend(this.params, t), G.extend(this.originalParams, t))
                },
                setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function (t) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                G.extend(this, {
                    coverflowEffect: {
                        setTranslate: st.setTranslate.bind(this),
                        setTransition: st.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function (t) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function () {
                G.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: at.init.bind(this),
                        update: at.update.bind(this),
                        onThumbClick: at.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var t = this.params.thumbs;
                    t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function (t) {
                    var e = this.thumbs.swiper;
                    e && e.setTransition(t)
                },
                beforeDestroy: function () {
                    var t = this.thumbs.swiper;
                    t && this.thumbs.swiperCreated && t && t.destroy()
                }
            }
        }];
    return void 0 === I.use && (I.use = I.Class.use, I.installModule = I.Class.installModule), I.use(E), I
}),
function (a) {
    "use strict";
    a.fn.fitVids = function (t) {
        var e, i, s = {
            customSelector: null,
            ignore: null
        };
        return document.getElementById("fit-vids-style") || (e = document.head || document.getElementsByTagName("head")[0], (i = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', e.appendChild(i.childNodes[1])), t && a.extend(s, t), this.each(function () {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            s.customSelector && t.push(s.customSelector);
            var n = ".fitvidsignore";
            s.ignore && (n = n + ", " + s.ignore), a(this).find(t.join(",")).not("object object").not(n).each(function () {
                var t, e, i = a(this);
                0 < i.parents(n).length || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length || (i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16)), t = ("object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height()) / (isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10)), i.attr("name") || (e = "fitvid" + a.fn.fitVids._count, i.attr("name", e), a.fn.fitVids._count++), i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), i.removeAttr("height").removeAttr("width"))
            })
        })
    }, a.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function (l, r, f) {
    "use strict";

    function i(t, e) {
        var i, n, s, a = [],
            r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = d(t.data.options, e)), i = e.$target || f(t.currentTarget).trigger("blur"), (s = f.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i) || (a = e.selector ? f(e.selector) : (n = i.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + n + '"]') : f('[data-fancybox="' + n + '"]') : [i], (r = f(a).index(i)) < 0 && (r = 0), (s = f.fancybox.open(a, e, r)).$trigger = i))
    }
    if (l.console = l.console || {
            info: function (t) {}
        }, f) {
        if (f.fn.fancybox) return console.info("fancyBox already initialized");
        var t = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: f.noop,
                beforeLoad: f.noop,
                afterLoad: f.noop,
                beforeShow: f.noop,
                afterShow: f.noop,
                beforeClose: f.noop,
                afterClose: f.noop,
                onActivate: f.noop,
                onDeactivate: f.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = f(l),
            a = f(r),
            o = 0,
            u = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function (t) {
                return l.setTimeout(t, 1e3 / 60)
            },
            e = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function (t) {
                l.clearTimeout(t)
            },
            c = function () {
                var t, e = r.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in i)
                    if (void 0 !== e.style[t]) return i[t];
                return "transitionend"
            }(),
            h = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            d = function (t, e) {
                var i = f.extend(!0, {}, t, e);
                return f.each(e, function (t, e) {
                    f.isArray(e) && (i[t] = e)
                }), i
            },
            n = function (t, e, i) {
                var n = this;
                n.opts = d({
                    index: i
                }, f.fancybox.defaults), f.isPlainObject(e) && (n.opts = d(n.opts, e)), f.fancybox.isMobile && (n.opts = d(n.opts, n.opts.mobile)), n.id = n.opts.id || ++o, n.currIndex = parseInt(n.opts.index, 10) || 0, n.prevIndex = null, n.prevPos = null, n.currPos = 0, n.firstRun = !0, n.group = [], n.slides = {}, n.addContent(t), n.group.length && n.init()
            };
        f.extend(n.prototype, {
            init: function () {
                var e, i, n = this,
                    s = n.group[n.currIndex].opts;
                s.closeExisting && f.fancybox.close(!0), f("body").addClass("fancybox-active"), !f.fancybox.getInstance() && !1 !== s.hideScrollbar && !f.fancybox.isMobile && r.body.scrollHeight > l.innerHeight && (f("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - r.documentElement.clientWidth) + "px;}</style>"), f("body").addClass("compensate-for-scrollbar")), i = "", f.each(s.buttons, function (t, e) {
                    i += s.btnTpl[e] || ""
                }), e = f(n.translate(n, s.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + n.id).addClass(s.baseClass).data("FancyBox", n).appendTo(s.parentEl), n.$refs = {
                    container: e
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    n.$refs[t] = e.find(".fancybox-" + t)
                }), n.trigger("onInit"), n.activate(), n.jumpTo(n.currIndex)
            },
            translate: function (t, e) {
                var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    return void 0 === i[e] ? t : i[e]
                })
            },
            addContent: function (t) {
                var r = this,
                    t = f.makeArray(t);
                f.each(t, function (t, e) {
                    var i, n, s = {},
                        a = {};
                    f.isPlainObject(e) ? a = (s = e).opts || e : "object" === f.type(e) && f(e).length ? (a = (n = f(e)).data() || {}, (a = f.extend(!0, {}, a, a.options)).$orig = n, s.src = r.opts.src || a.src || n.attr("href"), s.type || s.src || (s.type = "inline", s.src = e)) : s = {
                        type: "html",
                        src: e + ""
                    }, s.opts = f.extend(!0, {}, r.opts, a), f.isArray(a.buttons) && (s.opts.buttons = a.buttons), f.fancybox.isMobile && s.opts.mobile && (s.opts = d(s.opts, s.opts.mobile)), i = s.type || s.opts.type, n = s.src || "", !i && n && ((a = n.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "video", s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : n.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : n.match(/\.(pdf)((\?|#).*)?$/i) ? (i = "iframe", s = f.extend(!0, s, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === n.charAt(0) && (i = "inline")), i ? s.type = i : r.trigger("objectNeedsType", s), s.contentType || (s.contentType = -1 < f.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type), s.index = r.group.length, "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < f.inArray(s.type, ["html", "inline", "ajax"])), "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn), s.$thumb = s.opts.$thumb || null, s.opts.$trigger && s.index === r.opts.index && (s.$thumb = s.opts.$trigger.find("img:first"), s.$thumb.length && (s.opts.$orig = s.opts.$trigger)), s.$thumb && s.$thumb.length || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")), s.$thumb && !s.$thumb.length && (s.$thumb = null), s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null), "function" === f.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(e, [r, s])), "function" === f.type(r.opts.caption) && (s.opts.caption = r.opts.caption.apply(e, [r, s])), s.opts.caption instanceof f || (s.opts.caption = void 0 === s.opts.caption ? "" : s.opts.caption + ""), "ajax" !== s.type || 1 < (n = n.split(/\s+/, 2)).length && (s.src = n.shift(), s.opts.filter = n.shift()), s.opts.modal && (s.opts = f.extend(!0, s.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), r.group.push(s)
                }), Object.keys(r.slides).length && (r.updateControls(), (t = r.Thumbs) && t.isActive && (t.create(), t.focus()))
            },
            addEvents: function () {
                var n = this;
                n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), n.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), n.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), n.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), s.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (n.requestId && e(n.requestId), n.requestId = u(function () {
                        n.update(t)
                    })) : (n.current && "iframe" === n.current.type && n.$refs.stage.hide(), setTimeout(function () {
                        n.$refs.stage.show(), n.update(t)
                    }, f.fancybox.isMobile ? 600 : 250))
                }), a.on("keydown.fb", function (t) {
                    var e = (f.fancybox ? f.fancybox.getInstance() : null).current,
                        i = t.keyCode || t.which;
                    if (9 != i) return !e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || f(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === i || 27 === i ? (t.preventDefault(), void n.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void n.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, i);
                    e.opts.trapFocus && n.focus(t)
                }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                }), n.idleInterval = l.setInterval(function () {
                    ++n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                }, 1e3))
            },
            removeEvents: function () {
                s.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
            },
            previous: function (t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function (t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function (t, n) {
                var e, i, s, a, r, o, l, c, u = this,
                    d = u.group.length;
                if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) return t = parseInt(t, 10), !(!(i = (u.current || u).opts.loop) && (t < 0 || d <= t)) && (e = u.firstRun = !Object.keys(u.slides).length, a = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, s = u.createSlide(t), 1 < d && ((i || s.index < d - 1) && u.createSlide(t + 1), (i || 0 < s.index) && u.createSlide(t - 1)), u.current = s, u.currIndex = s.index, u.currPos = s.pos, u.trigger("beforeShow", e), u.updateControls(), s.forcedDuration = void 0, f.isNumeric(n) ? s.forcedDuration = n : n = s.opts[e ? "animationDuration" : "transitionDuration"], n = parseInt(n, 10), t = u.isMoved(s), s.$slide.addClass("fancybox-slide--current"), e ? (s.opts.animationEffect && n && u.$refs.container.css("transition-duration", n + "ms"), u.$refs.container.addClass("fancybox-is-open").trigger("focus"), u.loadSlide(s)) : (r = f.fancybox.getTranslate(a.$slide), o = f.fancybox.getTranslate(u.$refs.stage), f.each(u.slides, function (t, e) {
                    f.fancybox.stop(e.$slide, !0)
                }), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), t ? (c = r.left - (a.pos * r.width + a.pos * a.opts.gutter), f.each(u.slides, function (t, e) {
                    e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                    });
                    var i = e.pos * r.width + e.pos * e.opts.gutter;
                    f.fancybox.setTranslate(e.$slide, {
                        top: 0,
                        left: i - o.left + c
                    }), e.pos !== s.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > s.pos ? "next" : "previous")), h(e.$slide), f.fancybox.animate(e.$slide, {
                        top: 0,
                        left: (e.pos - s.pos) * r.width + (e.pos - s.pos) * e.opts.gutter
                    }, n, function () {
                        e.$slide.css({
                            transform: "",
                            opacity: ""
                        }).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && u.complete()
                    })
                })) : n && s.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), f.fancybox.animate(a.$slide, l, n, function () {
                    a.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")
                }, !1)), s.isLoaded ? u.revealContent(s) : u.loadSlide(s)), void u.preload("image"))
            },
            createSlide: function (t) {
                var e, i = this,
                    n = t % i.group.length;
                return n = n < 0 ? i.group.length + n : n, !i.slides[t] && i.group[n] && (e = f('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = f.extend(!0, {}, i.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), i.updateSlide(i.slides[t])), i.slides[t]
            },
            scaleToActual: function (t, e, i) {
                var n, s, a, r, o = this,
                    l = o.current,
                    c = l.$content,
                    u = f.fancybox.getTranslate(l.$slide).width,
                    d = f.fancybox.getTranslate(l.$slide).height,
                    h = l.width,
                    p = l.height;
                o.isAnimating || o.isMoved() || !c || "image" != l.type || !l.isLoaded || l.hasError || (o.isAnimating = !0, f.fancybox.stop(c), t = void 0 === t ? .5 * u : t, e = void 0 === e ? .5 * d : e, (n = f.fancybox.getTranslate(c)).top -= f.fancybox.getTranslate(l.$slide).top, n.left -= f.fancybox.getTranslate(l.$slide).left, a = h / n.width, r = p / n.height, s = .5 * u - .5 * h, l = .5 * d - .5 * p, u < h && (0 < (s = n.left * a - (t * a - t)) && (s = 0), s < u - h && (s = u - h)), d < p && (0 < (l = n.top * r - (e * r - e)) && (l = 0), l < d - p && (l = d - p)), o.updateCursor(h, p), f.fancybox.animate(c, {
                    top: l,
                    left: s,
                    scaleX: a,
                    scaleY: r
                }, i || 366, function () {
                    o.isAnimating = !1
                }), o.SlideShow && o.SlideShow.isActive && o.SlideShow.stop())
            },
            scaleToFit: function (t) {
                var e = this,
                    i = e.current,
                    n = i.$content;
                e.isAnimating || e.isMoved() || !n || "image" != i.type || !i.isLoaded || i.hasError || (e.isAnimating = !0, f.fancybox.stop(n), i = e.getFitPos(i), e.updateCursor(i.width, i.height), f.fancybox.animate(n, {
                    top: i.top,
                    left: i.left,
                    scaleX: i.width / n.width(),
                    scaleY: i.height / n.height()
                }, t || 366, function () {
                    e.isAnimating = !1
                }))
            },
            getFitPos: function (t) {
                var e, i, n = t.$content,
                    s = t.$slide,
                    a = t.width || t.opts.width,
                    r = t.height || t.opts.height,
                    o = {};
                return !!(t.isLoaded && n && n.length) && (e = f.fancybox.getTranslate(this.$refs.stage).width, i = f.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(n.css("marginLeft")) + parseFloat(n.css("marginRight")), i -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(n.css("marginTop")) + parseFloat(n.css("marginBottom")), a && r || (a = e, r = i), e - .5 < (a *= n = Math.min(1, e / a, i / r)) && (a = e), i - .5 < (r *= n) && (r = i), "image" === t.type ? (o.top = Math.floor(.5 * (i - r)) + parseFloat(s.css("paddingTop")), o.left = Math.floor(.5 * (e - a)) + parseFloat(s.css("paddingLeft"))) : "video" === t.contentType && (a / (t = t.opts.width && t.opts.height ? a / r : t.opts.ratio || 16 / 9) < r ? r = a / t : r * t < a && (a = r * t)), o.width = a, o.height = r, o)
            },
            update: function (i) {
                var n = this;
                f.each(n.slides, function (t, e) {
                    n.updateSlide(e, i)
                })
            },
            updateSlide: function (t, e) {
                var i = this,
                    n = t && t.$content,
                    s = t.width || t.opts.width,
                    a = t.height || t.opts.height,
                    r = t.$slide;
                i.adjustCaption(t), n && (s || a || "video" === t.contentType) && !t.hasError && (f.fancybox.stop(n), f.fancybox.setTranslate(n, i.getFitPos(t)), t.pos === i.currPos && (i.isAnimating = !1, i.updateCursor())), i.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), i.trigger("onUpdate", t, e)
            },
            centerSlide: function (t) {
                var e = this,
                    i = e.current,
                    n = i.$slide;
                !e.isClosing && i && (n.siblings().css({
                    transform: "",
                    opacity: ""
                }), n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), f.fancybox.animate(n, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === t ? 0 : t, function () {
                    n.css({
                        transform: "",
                        opacity: ""
                    }), i.isComplete || e.complete()
                }, !1))
            },
            isMoved: function (t) {
                var e, i = t || this.current;
                return !!i && (e = f.fancybox.getTranslate(this.$refs.stage), t = f.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - e.top) || .5 < Math.abs(t.left - e.left)))
            },
            updateCursor: function (t, e) {
                var i = this.current,
                    n = this.$refs.container;
                i && !this.isClosing && this.Guestures && (n.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), e = !!(t = this.canPan(t, e)) || this.isZoomable(), n.toggleClass("fancybox-is-zoomable", e), f("[data-fancybox-zoom]").prop("disabled", !e), t ? n.addClass("fancybox-can-pan") : e && ("zoom" === i.opts.clickContent || f.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? n.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < this.group.length) && "video" !== i.contentType && n.addClass("fancybox-can-swipe"))
            },
            isZoomable: function () {
                var t, e = this.current;
                if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                    if (!e.isLoaded) return !0;
                    if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                }
                return !1
            },
            isScaledDown: function (t, e) {
                var i = !1,
                    n = this.current,
                    s = n.$content;
                return void 0 !== t && void 0 !== e ? i = t < n.width && e < n.height : s && (i = (i = f.fancybox.getTranslate(s)).width < n.width && i.height < n.height), i
            },
            canPan: function (t, e) {
                var i = this.current,
                    n = null,
                    s = !1;
                return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (s = this.getFitPos(i), void 0 !== t && void 0 !== e ? n = {
                    width: t,
                    height: e
                } : i.isComplete && (n = f.fancybox.getTranslate(i.$content)), n && s && (s = 1.5 < Math.abs(n.width - s.width) || 1.5 < Math.abs(n.height - s.height))), s
            },
            loadSlide: function (i) {
                var t, e, n, s = this;
                if (!i.isLoading && !i.isLoaded) {
                    if (!(i.isLoading = !0) === s.trigger("beforeLoad", i)) return i.isLoading = !1;
                    switch (t = i.type, (e = i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass), t) {
                        case "image":
                            s.setImage(i);
                            break;
                        case "iframe":
                            s.setIframe(i);
                            break;
                        case "html":
                            s.setContent(i, i.src || i.content);
                            break;
                        case "video":
                            s.setContent(i, i.opts.video.tpl.replace(/\{\{src\}\}/gi, i.src).replace("{{format}}", i.opts.videoFormat || i.opts.video.format || "").replace("{{poster}}", i.thumb || ""));
                            break;
                        case "inline":
                            f(i.src).length ? s.setContent(i, f(i.src)) : s.setError(i);
                            break;
                        case "ajax":
                            s.showLoading(i), n = f.ajax(f.extend({}, i.opts.ajax.settings, {
                                url: i.src,
                                success: function (t, e) {
                                    "success" === e && s.setContent(i, t)
                                },
                                error: function (t, e) {
                                    t && "abort" !== e && s.setError(i)
                                }
                            })), e.one("onReset", function () {
                                n.abort()
                            });
                            break;
                        default:
                            s.setError(i)
                    }
                    return !0
                }
            },
            setImage: function (e) {
                var t, i = this;
                setTimeout(function () {
                    var t = e.$image;
                    i.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || i.showLoading(e)
                }, 50), i.checkSrcset(e), e.$content = f('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (t = r.createElement("img")).onerror = function () {
                    f(this).remove(), e.$ghost = null
                }, t.onload = function () {
                    i.afterLoad(e)
                }, e.$ghost = f(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), i.setBigImage(e)
            },
            checkSrcset: function (t) {
                var e, i, n, s, a = t.opts.srcset || t.opts.image.srcset;
                if (a) {
                    n = l.devicePixelRatio || 1, s = l.innerWidth * n, (i = a.split(",").map(function (t) {
                        var n = {};
                        return t.trim().split(/\s+/).forEach(function (t, e) {
                            var i = parseInt(t.substring(0, t.length - 1), 10);
                            if (0 === e) return n.url = t;
                            i && (n.value = i, n.postfix = t[t.length - 1])
                        }), n
                    })).sort(function (t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < i.length; r++) {
                        var o = i[r];
                        if ("w" === o.postfix && o.value >= s || "x" === o.postfix && o.value >= n) {
                            e = o;
                            break
                        }
                    }!e && i.length && (e = i[i.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value), t.opts.srcset = a)
                }
            },
            setBigImage: function (e) {
                var i = this,
                    t = r.createElement("img"),
                    n = f(t);
                e.$image = n.one("error", function () {
                    i.setError(e)
                }).one("load", function () {
                    var t;
                    e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)), i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (1 < e.width / e.height && 1 < s.width() / s.height() ? "100" : Math.round(e.width / e.height * 100)) + "vw"), n.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function () {
                        e.$ghost && !i.isClosing && e.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, e.height / 1600))), i.hideLoading(e))
                }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (t.complete || "complete" == t.readyState) && n.naturalWidth && n.naturalHeight ? n.trigger("load") : t.error && n.trigger("error")
            },
            resolveImageSlideSize: function (t, e, i) {
                var n = parseInt(t.opts.width, 10),
                    s = parseInt(t.opts.height, 10);
                t.width = e, t.height = i, 0 < n && (t.width = n, t.height = Math.floor(n * i / e)), 0 < s && (t.width = Math.floor(s * e / i), t.height = s)
            },
            setIframe: function (s) {
                var a, e = this,
                    r = s.opts.iframe,
                    o = s.$slide;
                s.$content = f('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(o), o.addClass("fancybox-slide--" + s.contentType), s.$iframe = a = f(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(s.$content), r.preload ? (e.showLoading(s), a.on("load.fb error.fb", function (t) {
                    this.isReady = 1, s.$slide.trigger("refresh"), e.afterLoad(s)
                }), o.on("refresh.fb", function () {
                    var t, e = s.$content,
                        i = r.css.width,
                        n = r.css.height;
                    if (1 === a[0].isReady) {
                        try {
                            t = a.contents().find("body")
                        } catch (t) {}
                        t && t.length && t.children().length && (o.css("overflow", "visible"), e.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), void 0 === i && (i = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))), e.css("width", i || "").css("max-width", ""), void 0 === n && (n = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))), e.css("height", n || ""), o.css("overflow", "auto")), e.removeClass("fancybox-is-hidden")
                    }
                })) : e.afterLoad(s), a.attr("src", s.src), o.one("onReset", function () {
                    try {
                        f(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    f(this).off("refresh.fb").empty(), s.isLoaded = !1, s.isRevealed = !1
                })
            },
            setContent: function (t, e) {
                var i;
                this.isClosing || (this.hideLoading(t), t.$content && f.fancybox.stop(t.$content), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof f && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = f("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === f.type(e) && (e = f("<div>").append(f.trim(e)).contents()), t.opts.filter && (e = f("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    f(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (f(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                }), f(e).appendTo(t.$slide), f(e).is("video,audio") && (f(e).addClass("fancybox-video"), f(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || f(e).attr("width"), t.opts.height = t.opts.height || f(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
            },
            setError: function (t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function (t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = f(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function (t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
            },
            afterLoad: function (t) {
                this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = f(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && f('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
            },
            adjustCaption: function (t) {
                var e = t || this.current,
                    i = e.opts.caption,
                    n = e.opts.preventCaptionOverlap,
                    s = this.$refs.caption,
                    t = !1;
                s.toggleClass("fancybox-caption--separate", n), n && i && i.length && (e.pos !== this.currPos ? ((s = s.clone().appendTo(s.parent())).children().eq(0).empty().html(i), t = s.outerHeight(!0), s.empty().remove()) : this.$caption && (t = this.$caption.outerHeight(!0)), e.$slide.css("padding-bottom", t || ""))
            },
            adjustLayout: function (t) {
                var e, i, n, s = t || this.current;
                s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (i = s.$slide[0].style["padding-bottom"], n = s.$slide.css("padding-bottom"), 0 < parseFloat(n) && (t = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(t - s.$slide[0].scrollHeight) < 1 && (e = n), s.$slide.css("padding-bottom", i))), s.$content.css("margin-bottom", e))
            },
            revealContent: function (t) {
                var e, i, n, s, a = this,
                    r = t.$slide,
                    o = !1,
                    l = !1,
                    c = a.isMoved(t),
                    u = t.isRevealed;
                return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], n = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], n = parseInt(void 0 === t.forcedDuration ? n : t.forcedDuration, 10), !c && t.pos === a.currPos && n || (e = !1), "zoom" === e && (t.pos === a.currPos && n && "image" === t.type && !t.hasError && (l = a.getThumbPos(t)) ? o = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, o.scaleX = o.width / l.width, o.scaleY = o.height / l.height, "auto" == (s = t.opts.zoomOpacity) && (s = .1 < Math.abs(t.width / t.height - l.width / l.height)), s && (l.opacity = .1, o.opacity = 1), f.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), h(t.$content), void f.fancybox.animate(t.$content, o, n, function () {
                    a.isAnimating = !1, a.complete()
                })) : (a.updateSlide(t), e ? (f.fancybox.stop(r), i = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), h(r), "image" !== t.type && t.$content.hide().show(0), void f.fancybox.animate(r, "fancybox-slide--current", n, function () {
                    r.removeClass(i).css({
                        transform: "",
                        opacity: ""
                    }), t.pos === a.currPos && a.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === a.currPos && a.complete())))
            },
            getThumbPos: function (t) {
                var e, i, n, s, a = t.$thumb;
                return !(!a || (!(n = a[0]) || n.ownerDocument !== r || (f(".fancybox-container").css("pointer-events", "none"), s = {
                    x: n.getBoundingClientRect().left + n.offsetWidth / 2,
                    y: n.getBoundingClientRect().top + n.offsetHeight / 2
                }, n = r.elementFromPoint(s.x, s.y) === n, f(".fancybox-container").css("pointer-events", ""), !n))) && (e = f.fancybox.getTranslate(a), t = parseFloat(a.css("border-top-width") || 0), s = parseFloat(a.css("border-right-width") || 0), n = parseFloat(a.css("border-bottom-width") || 0), a = parseFloat(a.css("border-left-width") || 0), i = {
                    top: e.top + t,
                    left: e.left + a,
                    width: e.width - s - a,
                    height: e.height - t - n,
                    scaleX: 1,
                    scaleY: 1
                }, 0 < e.width && 0 < e.height && i)
            },
            complete: function () {
                var t, i = this,
                    e = i.current,
                    n = {};
                !i.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), i.preload("inline"), h(e.$slide), e.$slide.addClass("fancybox-slide--complete"), f.each(i.slides, function (t, e) {
                    e.pos >= i.currPos - 1 && e.pos <= i.currPos + 1 ? n[e.pos] = e : e && (f.fancybox.stop(e.$slide), e.$slide.off().remove())
                }), i.slides = n), i.isAnimating = !1, i.updateCursor(), i.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), i.next()
                }), e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : i.focus(null, !0)), e.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function (t) {
                var e, i;
                this.group.length < 2 || (i = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), i && i.type === t && this.loadSlide(i))
            },
            focus: function (t, e) {
                var i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                this.isClosing || ((e = (e = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(i).filter(function () {
                    return "hidden" !== f(this).css("visibility") && !f(this).hasClass("disabled")
                })).length ? (i = e.index(r.activeElement), t && t.shiftKey ? (i < 0 || 0 == i) && (t.preventDefault(), e.eq(e.length - 1).trigger("focus")) : (i < 0 || i == e.length - 1) && (t && t.preventDefault(), e.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
            },
            activate: function () {
                var e = this;
                f(".fancybox-container").each(function () {
                    var t = f(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            },
            close: function (t, e) {
                function i() {
                    l.cleanUp(t)
                }
                var n, s, a, r, o, l = this,
                    c = l.current;
                return !l.isClosing && (!(l.isClosing = !0) === l.trigger("beforeClose", t) ? (l.isClosing = !1, u(function () {
                    l.update()
                }), !1) : (l.removeEvents(), a = c.$content, n = c.opts.animationEffect, s = f.isNumeric(e) ? e : n ? c.opts.animationDuration : 0, c.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? f.fancybox.stop(c.$slide) : n = !1, c.$slide.siblings().trigger("onReset").remove(), s && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), l.hideLoading(c), l.hideControls(!0), l.updateCursor(), "zoom" !== n || a && s && "image" === c.type && !l.isMoved() && !c.hasError && (o = l.getThumbPos(c)) || (n = "fade"), "zoom" === n ? (f.fancybox.stop(a), e = {
                    top: (r = f.fancybox.getTranslate(a)).top,
                    left: r.left,
                    scaleX: r.width / o.width,
                    scaleY: r.height / o.height,
                    width: o.width,
                    height: o.height
                }, "auto" == (r = c.opts.zoomOpacity) && (r = .1 < Math.abs(c.width / c.height - o.width / o.height)), r && (o.opacity = 0), f.fancybox.setTranslate(a, e), h(a), f.fancybox.animate(a, o, s, i)) : n && s ? f.fancybox.animate(c.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, s, i) : !0 === t ? setTimeout(i, s) : i(), !0))
            },
            cleanUp: function (t) {
                var e, i = this.current.opts.$orig;
                this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", t), this.current.opts.backFocus && (i && i.length && i.is(":visible") || (i = this.$trigger), i && i.length && (e = l.scrollX, t = l.scrollY, i.trigger("focus"), f("html, body").scrollTop(t).scrollLeft(e))), this.current = null, (e = f.fancybox.getInstance()) ? e.activate() : (f("body").removeClass("fancybox-active compensate-for-scrollbar"), f("#fancybox-style-noscroll").remove())
            },
            trigger: function (t, e) {
                var i, n = Array.prototype.slice.call(arguments, 1),
                    e = e && e.opts ? e : this.current;
                if (e ? n.unshift(e) : e = this, n.unshift(this), f.isFunction(e.opts[t]) && (i = e.opts[t].apply(e, n)), !1 === i) return i;
                ("afterClose" !== t && this.$refs ? this.$refs.container : a).trigger(t + ".fb", n)
            },
            updateControls: function () {
                var t = this,
                    e = t.current,
                    i = e.index,
                    n = t.$refs.container,
                    s = t.$refs.caption,
                    a = e.opts.caption;
                e.$slide.trigger("refresh"), a && a.length ? (t.$caption = s).children().eq(0).html(a) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), n.find("[data-fancybox-count]").html(t.group.length), n.find("[data-fancybox-index]").html(i + 1), n.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && i <= 0), n.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && i >= t.group.length - 1), "image" === e.type ? n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), f(r.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            },
            hideControls: function (t) {
                var e = ["infobar", "toolbar", "nav"];
                !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
                    return "fancybox-show-" + t
                }).join(" ")), this.hasHiddenControls = !0
            },
            showControls: function () {
                var t = (this.current || this).opts,
                    e = this.$refs.container;
                this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < this.group.length)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
            },
            toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), f.fancybox = {
            version: "3.5.7",
            defaults: t,
            getInstance: function (t) {
                var e = f('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    i = Array.prototype.slice.call(arguments, 1);
                return e instanceof n && ("string" === f.type(t) ? e[t].apply(e, i) : "function" === f.type(t) && t.apply(e, i), e)
            },
            open: function (t, e, i) {
                return new n(t, e, i)
            },
            close: function (t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close(t))
            },
            destroy: function () {
                this.close(!0), a.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (t = r.createElement("div"), l.getComputedStyle && l.getComputedStyle(t) && l.getComputedStyle(t).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
            getTranslate: function (t) {
                var e;
                return !(!t || !t.length) && {
                    top: (e = t[0].getBoundingClientRect()).top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                }
            },
            setTranslate: function (t, e) {
                var i = "",
                    n = {};
                if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position() : e).left + "px, " + (void 0 === e.top ? t.position() : e).top + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
            },
            animate: function (e, i, n, s, a) {
                var r, o = this;
                f.isFunction(n) && (s = n, n = null), o.stop(e), r = o.getTranslate(e), e.on(c, function (t) {
                    t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (o.stop(e), f.isNumeric(n) && e.css("transition-duration", ""), f.isPlainObject(i) ? void 0 !== i.scaleX && void 0 !== i.scaleY && o.setTranslate(e, {
                        top: i.top,
                        left: i.left,
                        width: r.width * i.scaleX,
                        height: r.height * i.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== a && e.removeClass(i), f.isFunction(s) && s(t))
                }), f.isNumeric(n) && e.css("transition-duration", n + "ms"), f.isPlainObject(i) ? (void 0 !== i.scaleX && void 0 !== i.scaleY && (delete i.width, delete i.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), f.fancybox.setTranslate(e, i)) : e.addClass(i), e.data("timer", setTimeout(function () {
                    e.trigger(c)
                }, n + 33))
            },
            stop: function (t, e) {
                t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(c), t.off(c).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, f.fn.fancybox = function (t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? f("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i), this
        }, a.on("click.fb-start", "[data-fancybox]", i), a.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
            f('[data-fancybox="' + f(this).attr("data-fancybox-trigger") + '"]').eq(f(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: f(this)
            })
        }), p = null, a.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
            switch (t.type) {
                case "mousedown":
                    p = f(this);
                    break;
                case "mouseup":
                    p = null;
                    break;
                case "focusin":
                    f(".fancybox-button").removeClass("fancybox-focus"), f(this).is(p) || f(this).is("[disabled]") || f(this).addClass("fancybox-focus");
                    break;
                case "focusout":
                    f(".fancybox-button").removeClass("fancybox-focus")
            }
        })
    }
    var p
}(window, document, jQuery),
function (p) {
    "use strict";

    function f(i, t, e) {
        if (i) return e = e || "", "object" === p.type(e) && (e = p.param(e, !0)), p.each(t, function (t, e) {
            i = i.replace("$" + t, e || "")
        }), e.length && (i += (0 < i.indexOf("?") ? "&" : "?") + e), i
    }
    var n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    p(document).on("objectNeedsType.fb", function (t, e, s) {
        var a, r, o, l, c, u, d = s.src || "",
            h = !1,
            i = p.extend(!0, {}, n, s.opts.media);
        p.each(i, function (t, e) {
            if (r = d.match(e.matcher)) {
                if (h = e.type, u = t, c = {}, e.paramPlace && r[e.paramPlace]) {
                    "?" == (l = r[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                    for (var i = 0; i < l.length; ++i) {
                        var n = l[i].split("=", 2);
                        2 == n.length && (c[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
                    }
                }
                return o = p.extend(!0, {}, e.params, s.opts[t], c), d = "function" === p.type(e.url) ? e.url.call(this, r, o, s) : f(e.url, r, o), a = "function" === p.type(e.thumb) ? e.thumb.call(this, r, o, s) : f(e.thumb, r), "youtube" === t ? d = d.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, i, n) {
                    return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                }) : "vimeo" === t && (d = d.replace("&%23", "#")), !1
            }
        }), h ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === h && (s.opts = p.extend(!0, s.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), p.extend(s, {
            type: h,
            src: d,
            origSrc: s.src,
            contentSource: u,
            contentType: "image" === h ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : d && (s.type = s.opts.defaultType)
    });
    var s = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (t) {
            var e, i = this;
            this[t].loaded ? setTimeout(function () {
                i.done(t)
            }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                i[t].loaded = !0, i.done(t)
            } : e.onload = function () {
                i[t].loaded = !0, i.done(t)
            }, document.body.appendChild(e))
        },
        done: function (t) {
            var e, i;
            "youtube" === t && delete window.onYouTubeIframeAPIReady, (e = p.fancybox.getInstance()) && (i = e.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && e.next()
                    }
                }
            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function () {
                e.next()
            }))
        }
    };
    p(document).on({
        "afterShow.fb": function (t, e, i) {
            1 < e.group.length && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && s.load(i.contentSource)
        }
    })
}(jQuery),
function (u, l, d) {
    "use strict";

    function h(t) {
        var e, i = [];
        for (e in t = (t = t.originalEvent || t || u.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[e].pageX ? i.push({
            x: t[e].pageX,
            y: t[e].pageY
        }) : t[e].clientX && i.push({
            x: t[e].clientX,
            y: t[e].clientY
        });
        return i
    }

    function p(t, e, i) {
        return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }

    function c(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || d.isFunction(t.get(0).onclick) || t.data("selectable")) return 1;
        for (var e = 0, i = t[0].attributes, n = i.length; e < n; e++)
            if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return 1
    }

    function f(t) {
        for (var e, i, n, s = !1;
            (e = t.get(0), i = n = i = void 0, i = u.getComputedStyle(e)["overflow-y"], n = u.getComputedStyle(e)["overflow-x"], i = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, e = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth, !(s = i || e)) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
        return s
    }

    function i(t) {
        this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", d.proxy(this, "ontouchstart"))
    }
    var m = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || function (t) {
            return u.setTimeout(t, 1e3 / 60)
        },
        g = u.cancelAnimationFrame || u.webkitCancelAnimationFrame || u.mozCancelAnimationFrame || u.oCancelAnimationFrame || function (t) {
            u.clearTimeout(t)
        };
    i.prototype.destroy = function () {
        this.$container.off(".fb.touch"), d(l).off(".fb.touch"), this.requestId && (g(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
    }, i.prototype.ontouchstart = function (t) {
        var e = this,
            i = d(t.target),
            n = e.instance,
            s = n.current,
            a = s.$slide,
            r = s.$content,
            o = "touchstart" == t.type;
        if (o && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && a.length && i.length && !c(i) && !c(i.parent()) && (i.is("img") || !(t.originalEvent.clientX > i[0].clientWidth + i.offset().left))) {
            if (!s || n.isAnimating || s.$slide.hasClass("fancybox-animated")) return t.stopPropagation(), void t.preventDefault();
            e.realPoints = e.startPoints = h(t), e.startPoints.length && (s.touch && t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = i, e.$content = r, e.opts = s.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.canPan = n.canPan(), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(a[0].clientWidth), e.canvasHeight = Math.round(a[0].clientHeight), e.contentLastPos = null, e.contentStartPos = d.fancybox.getTranslate(e.$content) || {
                top: 0,
                left: 0
            }, e.sliderStartPos = d.fancybox.getTranslate(a), e.stagePos = d.fancybox.getTranslate(n.$refs.stage), e.sliderStartPos.top -= e.stagePos.top, e.sliderStartPos.left -= e.stagePos.left, e.contentStartPos.top -= e.stagePos.top, e.contentStartPos.left -= e.stagePos.left, d(l).off(".fb.touch").on(o ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", d.proxy(e, "ontouchend")).on(o ? "touchmove.fb.touch" : "mousemove.fb.touch", d.proxy(e, "ontouchmove")), d.fancybox.isMobile && l.addEventListener("scroll", e.onscroll, !0), ((e.opts || e.canPan) && (i.is(e.$stage) || e.$stage.find(i).length) || (i.is(".fancybox-image") && t.preventDefault(), d.fancybox.isMobile && i.parents(".fancybox-caption").length)) && (e.isScrollable = f(i) || f(i.parent()), d.fancybox.isMobile && e.isScrollable || t.preventDefault(), 1 !== e.startPoints.length && !s.hasError || (e.canPan ? (d.fancybox.stop(e.$content), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-is-grabbing")), 2 === e.startPoints.length && "image" === s.type && (s.isLoaded || s.$ghost) && (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, d.fancybox.stop(e.$content), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - d(u).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - d(u).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = p(e.startPoints[0], e.startPoints[1]))))
        }
    }, i.prototype.onscroll = function (t) {
        this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0)
    }, i.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = h(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = p(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = p(e.newPoints[0], e.startPoints[0], "y"), e.distance = p(e.newPoints[0], e.startPoints[0]), 0 < e.distance && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, i.prototype.onSwipe = function (t) {
        var s = this,
            a = s.instance,
            e = s.isSwiping,
            i = s.sliderStartPos.left || 0;
        !0 !== e ? ("x" == e && (0 < s.distanceX && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? i += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? i -= Math.pow(-s.distanceX, .8) : i += s.distanceX), s.sliderLastPos = {
            top: "x" == e ? 0 : s.sliderStartPos.top + s.distanceY,
            left: i
        }, s.requestId && (g(s.requestId), s.requestId = null), s.requestId = m(function () {
            s.sliderLastPos && (d.each(s.instance.slides, function (t, e) {
                var i = e.pos - s.instance.currPos;
                d.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        })) : 10 < Math.abs(s.distance) && (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && 800 < d(u).width() ? s.isSwiping = "x" : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = 45 < i && i < 135 ? "y" : "x"), "y" === s.isSwiping && d.fancybox.isMobile && s.isScrollable ? s.isScrolling = !0 : (a.isDragging = s.isSwiping, s.startPoints = s.newPoints, d.each(a.slides, function (t, e) {
            var i, n;
            d.fancybox.stop(e.$slide), i = d.fancybox.getTranslate(e.$slide), n = d.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                transform: "",
                opacity: "",
                "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function (t, e) {
                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
            }), e.pos === a.current.pos && (s.sliderStartPos.top = i.top - n.top, s.sliderStartPos.left = i.left - n.left), d.fancybox.setTranslate(e.$slide, {
                top: i.top - n.top,
                left: i.left - n.left
            })
        }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()))
    }, i.prototype.onPan = function () {
        var t = this;
        p(t.newPoints[0], t.realPoints[0]) < (d.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && g(t.requestId), t.requestId = m(function () {
            d.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, i.prototype.limitMovement = function () {
        var t = this.canvasWidth,
            e = this.canvasHeight,
            i = this.distanceX,
            n = this.distanceY,
            s = this.contentStartPos,
            a = s.left,
            r = s.top,
            o = s.width,
            l = s.height,
            c = t < o ? a + i : a,
            u = r + n,
            d = Math.max(0, .5 * t - .5 * o),
            s = Math.max(0, .5 * e - .5 * l),
            o = Math.min(t - o, .5 * t - .5 * o),
            l = Math.min(e - l, .5 * e - .5 * l);
        return 0 < i && d < c && (c = d - 1 + Math.pow(-d + a + i, .8) || 0), i < 0 && c < o && (c = o + 1 - Math.pow(o - a - i, .8) || 0), 0 < n && s < u && (u = s - 1 + Math.pow(-s + r + n, .8) || 0), n < 0 && u < l && (u = l + 1 - Math.pow(l - r - n, .8) || 0), {
            top: u,
            left: c
        }
    }, i.prototype.limitPosition = function (t, e, i, n) {
        var s = this.canvasWidth,
            a = this.canvasHeight;
        return t = s < i ? (t = 0 < t ? 0 : t) < s - i ? s - i : t : Math.max(0, s / 2 - i / 2), {
            top: e = a < n ? (e = 0 < e ? 0 : e) < a - n ? a - n : e : Math.max(0, a / 2 - n / 2),
            left: t
        }
    }, i.prototype.onZoom = function () {
        var t = this,
            e = t.contentStartPos,
            i = e.width,
            n = e.height,
            s = e.left,
            a = e.top,
            r = p(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            o = Math.floor(i * r),
            l = Math.floor(n * r),
            c = (i - o) * t.percentageOfImageAtPinchPointX,
            e = (n - l) * t.percentageOfImageAtPinchPointY,
            i = (t.newPoints[0].x + t.newPoints[1].x) / 2 - d(u).scrollLeft(),
            n = (t.newPoints[0].y + t.newPoints[1].y) / 2 - d(u).scrollTop(),
            i = i - t.centerPointStartX,
            r = {
                top: a + (e + (n - t.centerPointStartY)),
                left: s + (c + i),
                scaleX: r,
                scaleY: r
            };
        t.canTap = !1, t.newWidth = o, t.newHeight = l, t.contentLastPos = r, t.requestId && g(t.requestId), t.requestId = m(function () {
            d.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, i.prototype.ontouchend = function (t) {
        var e = this,
            i = e.isSwiping,
            n = e.isPanning,
            s = e.isZooming,
            a = e.isScrolling;
        if (e.endPoints = h(t), e.dMs = Math.max((new Date).getTime() - e.startTime, 1), e.$container.removeClass("fancybox-is-grabbing"), d(l).off(".fb.touch"), l.removeEventListener("scroll", e.onscroll, !0), e.requestId && (g(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap) return e.onTap(t);
        e.speed = 100, e.velocityX = e.distanceX / e.dMs * .5, e.velocityY = e.distanceY / e.dMs * .5, n ? e.endPanning() : s ? e.endZooming() : e.endSwiping(i, a)
    }, i.prototype.endSwiping = function (t, e) {
        var i = this,
            n = !1,
            s = i.instance.group.length,
            a = Math.abs(i.distanceX),
            a = "x" == t && 1 < s && (130 < i.dMs && 10 < a || 50 < a);
        i.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(i.distanceY) ? (d.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200), n = i.instance.close(!0, 250)) : a && 0 < i.distanceX ? n = i.instance.previous(300) : a && i.distanceX < 0 && (n = i.instance.next(300)), !1 !== n || "x" != t && "y" != t || i.instance.centerSlide(200), i.$container.removeClass("fancybox-is-sliding")
    }, i.prototype.endPanning = function () {
        var t, e, i = this;
        i.contentLastPos && (e = !1 === i.opts.momentum || 350 < i.dMs ? (t = i.contentLastPos.left, i.contentLastPos.top) : (t = i.contentLastPos.left + 500 * i.velocityX, i.contentLastPos.top + 500 * i.velocityY), (e = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, e.height = i.contentStartPos.height, d.fancybox.animate(i.$content, e, 366))
    }, i.prototype.endZooming = function () {
        var t, e, i, n = this,
            s = n.instance.current,
            a = n.newWidth,
            r = n.newHeight;
        n.contentLastPos && (t = n.contentLastPos.left, i = {
            top: e = n.contentLastPos.top,
            left: t,
            width: a,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, d.fancybox.setTranslate(n.$content, i), a < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : a > s.width || r > s.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (r = n.limitPosition(t, e, a, r), d.fancybox.animate(n.$content, r, 150)))
    }, i.prototype.onTap = function (e) {
        function t(t) {
            if (t = r.opts[t], d.isFunction(t) && (t = t.apply(a, [r, e])), t) switch (t) {
                case "close":
                    a.close(n.startEvent);
                    break;
                case "toggleControls":
                    a.toggleControls();
                    break;
                case "next":
                    a.next();
                    break;
                case "nextOrClose":
                    1 < a.group.length ? a.next() : a.close(n.startEvent);
                    break;
                case "zoom":
                    "image" == r.type && (r.isLoaded || r.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(l, c) : a.group.length < 2 && a.close(n.startEvent))
            }
        }
        var i, n = this,
            s = d(e.target),
            a = n.instance,
            r = a.current,
            o = e && h(e) || n.startPoints,
            l = o[0] ? o[0].x - d(u).scrollLeft() - n.stagePos.left : 0,
            c = o[0] ? o[0].y - d(u).scrollTop() - n.stagePos.top : 0;
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(l > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
            else if (s.is(".fancybox-slide")) i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
                i = "Content"
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped), n.tapped = null, 50 < Math.abs(l - n.tapX) || 50 < Math.abs(c - n.tapY)) return this;
                t("dblclick" + i)
            } else n.tapX = l, n.tapY = c, r.opts["dblclick" + i] && r.opts["dblclick" + i] !== r.opts["click" + i] ? n.tapped = setTimeout(function () {
                n.tapped = null, a.isAnimating || t("click" + i)
            }, 500) : t("click" + i);
            return this
        }
    }, d(l).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new i(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function (a, r) {
    "use strict";

    function i(t) {
        this.instance = t, this.init()
    }
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    }), r.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this,
                e = t.instance,
                i = e.group[e.currIndex].opts.slideShow;
            t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), e.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))
        },
        set: function (t) {
            var e = this.instance,
                i = e.current;
            i && (!0 === t || i.opts.loop || e.currIndex < e.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && r.fancybox.animate(this.$progress.show(), {
                scaleX: 1
            }, i.opts.slideShow.speed), this.timer = setTimeout(function () {
                e.current.opts.loop || e.current.index != e.group.length - 1 ? e.next() : e.jumpTo(0)
            }, i.opts.slideShow.speed)) : (this.stop(), e.idleSecondsCounter = 0, e.showControls())
        },
        clear: function () {
            clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
        },
        start: function () {
            var t = this.instance.current;
            t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            this.isActive ? this.stop() : this.start()
        }
    }), r(a).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
        },
        "beforeShow.fb": function (t, e, i, n) {
            e = e && e.SlideShow;
            n ? e && i.opts.slideShow.autoStart && e.start() : e && e.isActive && e.clear()
        },
        "afterShow.fb": function (t, e, i) {
            e = e && e.SlideShow;
            e && e.isActive && e.set()
        },
        "afterKeydown.fb": function (t, e, i, n, s) {
            e = e && e.SlideShow;
            !e || !i.opts.slideShow || 80 !== s && 32 !== s || r(a.activeElement).is("button,a,input") || (n.preventDefault(), e.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            e = e && e.SlideShow;
            e && e.stop()
        }
    }), r(a).on("visibilitychange", function () {
        var t = r.fancybox.getInstance(),
            t = t && t.SlideShow;
        t && t.isActive && (a.hidden ? t.clear() : t.set())
    })
}(document, jQuery),
function (a, i) {
    "use strict";
    var n, s = function () {
        for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], e = {}, i = 0; i < t.length; i++) {
            var n = t[i];
            if (n && n[1] in a) {
                for (var s = 0; s < n.length; s++) e[t[0][s]] = n[s];
                return e
            }
        }
        return !1
    }();
    s && (n = {
        request: function (t) {
            (t = t || a.documentElement)[s.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
        },
        exit: function () {
            a[s.exitFullscreen]()
        },
        toggle: function (t) {
            t = t || a.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
        },
        isFullscreen: function () {
            return Boolean(a[s.fullscreenElement])
        },
        enabled: function () {
            return Boolean(a[s.fullscreenEnabled])
        }
    }, i.extend(!0, i.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }), i(a).on(s.fullscreenchange, function () {
        var t = n.isFullscreen(),
            e = i.fancybox.getInstance();
        e && (e.current && "image" === e.current.type && e.isAnimating && (e.isAnimating = !1, e.update(!0, !0, 0), e.isComplete || e.complete()), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t), e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
    })), i(a).on({
        "onInit.fb": function (t, e) {
            s ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), n.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function (t, e, i, n, s) {
            e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
        }
    })
}(document, jQuery),
function (t, a) {
    "use strict";
    var r = "fancybox-thumbs";

    function i(t) {
        this.init(t)
    }
    a.fancybox.defaults = a.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, a.fancybox.defaults), a.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this,
                i = t.group,
                n = 0;
            e.instance = t, e.opts = i[t.currIndex].opts.thumbs, (t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var s = 0, a = i.length; s < a && (i[s].thumb && n++, !(1 < n)); s++);
            1 < n && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var i, t = this,
                e = t.instance,
                n = t.opts.parentEl,
                s = [];
            t.$grid || (t.$grid = a('<div class="' + r + " " + r + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(n).addBack().filter(n)), t.$grid.on("click", "a", function () {
                e.jumpTo(a(this).attr("data-index"))
            })), t.$list || (t.$list = a('<div class="' + r + '__list">').appendTo(t.$grid)), a.each(e.group, function (t, e) {
                (i = e.thumb) || "image" !== e.type || (i = e.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (i && i.length ? ' style="background-image:url(' + i + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), t.$list[0].innerHTML = s.join(""), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (t) {
            var e, i, n = this.$list,
                s = this.$grid;
            this.instance.current && (i = (e = n.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (i.top < 0 || i.top > n.height() - e.outerHeight()) ? n.stop().animate({
                scrollTop: n.scrollTop() + i.top
            }, t) : "x" === this.opts.axis && (i.left < s.scrollLeft() || i.left > s.scrollLeft() + (s.width() - e.outerWidth())) && n.parent().stop().animate({
                scrollLeft: i.left
            }, t))
        },
        update: function () {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), a(t).on({
        "onInit.fb": function (t, e) {
            !e || e.Thumbs || (e = new i(e)).isActive && !0 === e.opts.autoStart && e.show()
        },
        "beforeShow.fb": function (t, e, i, n) {
            e = e && e.Thumbs;
            e && e.isVisible && e.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, i, n, s) {
            e = e && e.Thumbs;
            e && e.isActive && 71 === s && (n.preventDefault(), e.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e = e && e.Thumbs;
            e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide()
        }
    })
}(document, jQuery),
function (t, s) {
    "use strict";
    s.extend(!0, s.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), s(t).on("click", "[data-fancybox-share]", function () {
        var t, e, i = s.fancybox.getInstance(),
            n = i.current || null;
        n && ("function" === s.type(n.opts.share.url) && (t = n.opts.share.url.apply(n, [i, n])), t = n.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === n.type ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return e[t]
        }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), s.fancybox.open({
            src: i.translate(i, t),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                    i.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function (a, r, n) {
    "use strict";

    function s() {
        var t = a.location.hash.substr(1),
            e = t.split("-"),
            i = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return {
            hash: t,
            index: i < 1 ? 1 : i,
            gallery: e.join("-")
        }
    }

    function e(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function o(t) {
        return !!t && ("" !== (t = (t = (t.current || t).opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && t)
    }
    n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(r).on({
            "onInit.fb": function (t, e) {
                var i, n;
                !1 !== e.group[e.currIndex].opts.hash && (i = s(), (n = o(e)) && i.gallery && n == i.gallery && (e.currIndex = i.index - 1))
            },
            "beforeShow.fb": function (t, e, i, n) {
                var s;
                i && !1 !== i.opts.hash && (s = o(e)) && (e.currentHash = s + (1 < e.group.length ? "-" + (i.index + 1) : ""), a.location.hash !== "#" + e.currentHash && (n && !e.origHash && (e.origHash = a.location.hash), e.hashTimer && clearTimeout(e.hashTimer), e.hashTimer = setTimeout(function () {
                    "replaceState" in a.history ? (a.history[n ? "pushState" : "replaceState"]({}, r.title, a.location.pathname + a.location.search + "#" + e.currentHash), n && (e.hasCreatedHistory = !0)) : a.location.hash = e.currentHash, e.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function (t, e, i) {
                i && !1 !== i.opts.hash && (clearTimeout(e.hashTimer), e.currentHash && e.hasCreatedHistory ? a.history.back() : e.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, r.title, a.location.pathname + a.location.search + (e.origHash || "")) : a.location.hash = e.origHash), e.currentHash = null)
            }
        }), n(a).on("hashchange.fb", function () {
            var t = s(),
                i = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, e) {
                e = n(e).data("FancyBox");
                if (e && e.currentHash) return i = e, !1
            }), i ? i.currentHash === t.gallery + "-" + t.index || 1 === t.index && i.currentHash == t.gallery || (i.currentHash = null, i.close()) : "" !== t.gallery && e(t)
        }), setTimeout(function () {
            n.fancybox.getInstance() || e(s())
        }, 50))
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    var s = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, n, e) {
            n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var e = n.current,
                    i = (new Date).getTime();
                n.group.length < 2 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - s < 250 || (s = i, n[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function () {
    "use strict";

    function r(s, t) {
        var e;
        if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = s, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !r.notNeeded(s)) {
            for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, a = i.length; n < a; n++) this[i[n]] = function (t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }(this[i[n]], this);
            o && (s.addEventListener("mouseover", this.onMouse, !0), s.addEventListener("mousedown", this.onMouse, !0), s.addEventListener("mouseup", this.onMouse, !0)), s.addEventListener("click", this.onClick, !0), s.addEventListener("touchstart", this.onTouchStart, !1), s.addEventListener("touchmove", this.onTouchMove, !1), s.addEventListener("touchend", this.onTouchEnd, !1), s.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (s.removeEventListener = function (t, e, i) {
                var n = Node.prototype.removeEventListener;
                "click" === t ? n.call(s, t, e.hijacked || e, i) : n.call(s, t, e, i)
            }, s.addEventListener = function (t, e, i) {
                var n = Node.prototype.addEventListener;
                "click" === t ? n.call(s, t, e.hijacked || (e.hijacked = function (t) {
                    t.propagationStopped || e(t)
                }), i) : n.call(s, t, e, i)
            }), "function" == typeof s.onclick && (e = s.onclick, s.addEventListener("click", function (t) {
                e(t)
            }, !1), s.onclick = null)
        }
    }
    var t = 0 <= navigator.userAgent.indexOf("Windows Phone"),
        o = 0 < navigator.userAgent.indexOf("Android") && !t,
        l = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        c = l && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        u = l && /OS [6-7]_\d/.test(navigator.userAgent),
        n = 0 < navigator.userAgent.indexOf("BB10");
    r.prototype.needsClick = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (l && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, r.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !o;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, r.prototype.sendClick = function (t, e) {
        var i;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], (e = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.forwardedTouchEvent = !0, t.dispatchEvent(e)
    }, r.prototype.determineEventType = function (t) {
        return o && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, r.prototype.focus = function (t) {
        var e;
        l && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type && "email" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, r.prototype.updateScrollParent = function (t) {
        var e, i = t.fastClickScrollParent;
        if (!i || !i.contains(t)) {
            e = t;
            do {
                if (e.scrollHeight > e.offsetHeight) {
                    i = e, t.fastClickScrollParent = e;
                    break
                }
            } while (e = e.parentElement)
        }
        i && (i.fastClickLastScrollTop = i.scrollTop)
    }, r.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, r.prototype.onTouchStart = function (t) {
        var e, i, n;
        if (1 < t.targetTouches.length) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], l) {
            if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
            if (!c) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, r.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0],
            t = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > t || Math.abs(e.pageY - this.touchStartY) > t
    }, r.prototype.onTouchMove = function (t) {
        return this.trackingClick && (this.targetElement === this.getTargetElementFromEventTarget(t.target) && !this.touchHasMoved(t) || (this.trackingClick = !1, this.targetElement = null)), !0
    }, r.prototype.findControl = function (t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, r.prototype.onTouchEnd = function (t) {
        var e, i, n, s, a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, u && (s = t.changedTouches[0], (a = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || a).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (i = a.tagName.toLowerCase())) {
            if (s = this.findControl(a)) {
                if (this.focus(a), o) return !1;
                a = s
            }
        } else if (this.needsFocus(a)) return 100 < t.timeStamp - e || l && window.top !== window && "input" === i ? this.targetElement = null : (this.focus(a), this.sendClick(a, t), l && "select" === i || (this.targetElement = null, t.preventDefault())), !1;
        return !(!l || c || !(n = a.fastClickScrollParent) || n.fastClickLastScrollTop === n.scrollTop) || (this.needsClick(a) || (t.preventDefault(), this.sendClick(a, t)), !1)
    }, r.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, r.prototype.onMouse = function (t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
    }, r.prototype.onClick = function (t) {
        return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((t = this.onMouse(t)) || (this.targetElement = null), t)
    }, r.prototype.destroy = function () {
        var t = this.layer;
        o && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, r.notNeeded = function (t) {
        var e, i;
        if (void 0 === window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!o) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (31 < i && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (n && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= i[1] && 3 <= i[2] && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
    }, r.attach = function (t, e) {
        return new r(t, e)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return r
    }) : "undefined" != typeof module && module.exports ? (module.exports = r.attach, module.exports.FastClick = r) : window.FastClick = r
}(),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).cssVars = e()
}(this, function () {
    "use strict";

    function m() {
        return (m = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i, n = arguments[e];
                for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function p(t, e) {
        var e = 1 < arguments.length && void 0 !== e ? e : {},
            s = {
                mimeType: e.mimeType || null,
                onBeforeSend: e.onBeforeSend || Function.prototype,
                onSuccess: e.onSuccess || Function.prototype,
                onError: e.onError || Function.prototype,
                onComplete: e.onComplete || Function.prototype
            },
            n = Array.isArray(t) ? t : [t],
            a = Array.apply(null, Array(n.length)).map(function (t) {
                return null
            });

        function r(t) {
            return "<" !== (0 < arguments.length && void 0 !== t ? t : "").trim().charAt(0)
        }

        function o(t, e) {
            s.onError(t, n[e], e)
        }

        function l(t, e) {
            var i = s.onSuccess(t, n[e], e);
            t = !1 === i ? "" : i || t, a[e] = t, -1 === a.indexOf(null) && s.onComplete(a)
        }
        var c = document.createElement("a");
        n.forEach(function (t, e) {
            var i, n;
            c.setAttribute("href", t), c.href = String(c.href), Boolean(document.all && !window.atob) && c.host.split(":")[0] !== location.host.split(":")[0] ? c.protocol === location.protocol ? ((i = new XDomainRequest).open("GET", t), i.timeout = 0, i.onprogress = Function.prototype, i.ontimeout = Function.prototype, i.onload = function () {
                r(i.responseText) ? l(i.responseText, e) : o(i, e)
            }, i.onerror = function (t) {
                o(i, e)
            }, setTimeout(function () {
                i.send()
            }, 0)) : (console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(t, ")")), o(null, e)) : ((n = new XMLHttpRequest).open("GET", t), s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.onBeforeSend(n, t, e), n.onreadystatechange = function () {
                4 === n.readyState && (200 === n.status && r(n.responseText) ? l(n.responseText, e) : o(n, e))
            }, n.send())
        })
    }

    function r(t) {
        var a = {
                cssComments: /\/\*[\s\S]+?\*\//g,
                cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
            },
            d = {
                rootElement: t.rootElement || document,
                include: t.include || 'style,link[rel="stylesheet"]',
                exclude: t.exclude || null,
                filter: t.filter || null,
                useCSSOM: t.useCSSOM || !1,
                onBeforeSend: t.onBeforeSend || Function.prototype,
                onSuccess: t.onSuccess || Function.prototype,
                onError: t.onError || Function.prototype,
                onComplete: t.onComplete || Function.prototype
            },
            e = Array.apply(null, d.rootElement.querySelectorAll(d.include)).filter(function (t) {
                return e = d.exclude, !(t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, e);
                var e
            }),
            o = Array.apply(null, Array(e.length)).map(function (t) {
                return null
            });

        function l() {
            var t; - 1 === o.indexOf(null) && (t = o.join(""), d.onComplete(t, o, e))
        }

        function c(t, i, n, e) {
            var s = d.onSuccess(t, n, e);
            ! function n(s, a, r, o) {
                var l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
                    c = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : [],
                    u = h(s, r, c);
                u.rules.length ? p(u.absoluteUrls, {
                    onBeforeSend: function (t, e, i) {
                        d.onBeforeSend(t, a, e)
                    },
                    onSuccess: function (i, t, e) {
                        var n = d.onSuccess(i, a, t),
                            s = h(i = !1 === n ? "" : n || i, t, c);
                        return s.rules.forEach(function (t, e) {
                            i = i.replace(t, s.absoluteRules[e])
                        }), i
                    },
                    onError: function (t, e, i) {
                        l.push({
                            xhr: t,
                            url: e
                        }), c.push(u.rules[i]), n(s, a, r, o, l, c)
                    },
                    onComplete: function (t) {
                        t.forEach(function (t, e) {
                            s = s.replace(u.rules[e], t)
                        }), n(s, a, r, o, l, c)
                    }
                }) : o(s, l)
            }(t = void 0 !== s && !1 === Boolean(s) ? "" : s || t, n, e, function (t, e) {
                null === o[i] && (e.forEach(function (t) {
                    return d.onError(t.xhr, n, t.url)
                }), !d.filter || d.filter.test(t) ? o[i] = t : o[i] = "", l())
            })
        }

        function h(t, n, e) {
            var i = 2 < arguments.length && void 0 !== e ? e : [],
                s = {};
            return s.rules = (t.replace(a.cssComments, "").match(a.cssImports) || []).filter(function (t) {
                return -1 === i.indexOf(t)
            }), s.urls = s.rules.map(function (t) {
                return t.replace(a.cssImports, "$1")
            }), s.absoluteUrls = s.urls.map(function (t) {
                return u(t, n)
            }), s.absoluteRules = s.rules.map(function (t, e) {
                var i = s.urls[e],
                    e = u(s.absoluteUrls[e], n);
                return t.replace(i, e)
            }), s
        }
        e.length ? e.forEach(function (s, a) {
            var r = s.getAttribute("href"),
                t = s.getAttribute("rel"),
                e = "LINK" === s.nodeName && r && t && "stylesheet" === t.toLowerCase(),
                t = "STYLE" === s.nodeName;
            e ? p(r, {
                mimeType: "text/css",
                onBeforeSend: function (t, e, i) {
                    d.onBeforeSend(t, s, e)
                },
                onSuccess: function (t, e, i) {
                    var n = u(r, location.href);
                    c(t, a, s, n)
                },
                onError: function (t, e, i) {
                    o[a] = "", d.onError(t, s, e), l()
                }
            }) : t ? (t = s.textContent, d.useCSSOM && (t = Array.apply(null, s.sheet.cssRules).map(function (t) {
                return t.cssText
            }).join("")), c(t, a, s, location.href)) : (o[a] = "", l())
        }) : d.onComplete("", [])
    }

    function u(t, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : location.href,
            n = document.implementation.createHTMLDocument(""),
            s = n.createElement("base"),
            e = n.createElement("a");
        return n.head.appendChild(s), n.body.appendChild(e), s.href = i, e.href = t, e.href
    }
    var f = t;

    function t(t, e, i) {
        t instanceof RegExp && (t = s(t, i)), e instanceof RegExp && (e = s(e, i));
        var n = a(t, e, i);
        return n && {
            start: n[0],
            end: n[1],
            pre: i.slice(0, n[0]),
            body: i.slice(n[0] + t.length, n[1]),
            post: i.slice(n[1] + e.length)
        }
    }

    function s(t, e) {
        t = e.match(t);
        return t ? t[0] : null
    }

    function a(t, e, i) {
        var n, s, a, r, o, l = i.indexOf(t),
            c = i.indexOf(e, l + 1),
            u = l;
        if (0 <= l && 0 < c) {
            for (n = [], a = i.length; 0 <= u && !o;) u == l ? (n.push(u), l = i.indexOf(t, u + 1)) : 1 == n.length ? o = [n.pop(), c] : ((s = n.pop()) < a && (a = s, r = c), c = i.indexOf(e, u + 1)), u = l < c && 0 <= l ? l : c;
            n.length && (o = [a, r])
        }
        return o
    }

    function g(s, t) {
        var a = m({}, {
            preserveStatic: !0,
            removeComments: !1
        }, 1 < arguments.length && void 0 !== t ? t : {});

        function r(t) {
            throw new Error("CSS parse error: ".concat(t))
        }

        function o(t) {
            t = t.exec(s);
            if (t) return s = s.slice(t[0].length), t
        }

        function l() {
            return o(/^{\s*/)
        }

        function c() {
            return o(/^}/)
        }

        function u() {
            o(/^\s*/)
        }

        function d() {
            for (var t, e = []; t = function () {
                    if (u(), "/" === s[0] && "*" === s[1]) {
                        for (var t = 2; s[t] && ("*" !== s[t] || "/" !== s[t + 1]);) t++;
                        if (!s[t]) return r("end of comment is missing");
                        var e = s.slice(2, t);
                        return s = s.slice(t + 2), {
                            type: "comment",
                            comment: e
                        }
                    }
                }();) e.push(t);
            return a.removeComments ? [] : e
        }

        function h() {
            for (u();
                "}" === s[0];) r("extra closing bracket");
            var t = o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (t) return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (t) {
                return t.replace(/,/g, "‌")
            }).split(/\s*(?![^(]*\)),\s*/).map(function (t) {
                return t.replace(/\u200C/g, ",")
            })
        }

        function p() {
            if (!l()) return r("missing '{'");
            for (var t, e = d(); t = function () {
                    o(/^([;\s]*)+/);
                    var t = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,
                        e = o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
                    if (e) {
                        if (e = e[0].trim(), !o(/^:\s*/)) return r("property missing ':'");
                        var i = o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
                            t = {
                                type: "declaration",
                                property: e.replace(t, ""),
                                value: i ? i[0].replace(t, "").trim() : ""
                            };
                        return o(/^[;\s]*/), t
                    }
                }();) e.push(t), e = e.concat(d());
            return c() ? e : r("missing '}'")
        }

        function n() {
            if (u(), "@" === s[0]) {
                var t = function () {
                    var t = o(/^@([-\w]+)?keyframes\s*/);
                    if (t) {
                        var e = t[1];
                        if (!(t = o(/^([-\w]+)\s*/))) return r("@keyframes missing name");
                        var i, t = t[1];
                        if (!l()) return r("@keyframes missing '{'");
                        for (var n = d(); i = function () {
                                u();
                                for (var t, e = []; t = o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) e.push(t[1]), o(/^,\s*/);
                                if (e.length) return {
                                    type: "keyframe",
                                    values: e,
                                    declarations: p()
                                }
                            }();) n.push(i), n = n.concat(d());
                        return c() ? {
                            type: "keyframes",
                            name: t,
                            vendor: e,
                            keyframes: n
                        } : r("@keyframes missing '}'")
                    }
                }() || function () {
                    var t = o(/^@supports *([^{]+)/);
                    if (t) return {
                        type: "supports",
                        supports: t[1].trim(),
                        rules: e()
                    }
                }() || function () {
                    if (o(/^@host\s*/)) return {
                        type: "host",
                        rules: e()
                    }
                }() || function () {
                    var t = o(/^@media([^{]+)*/);
                    if (t) return {
                        type: "media",
                        media: (t[1] || "").trim(),
                        rules: e()
                    }
                }() || function () {
                    var t = o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                    if (t) return {
                        type: "custom-media",
                        name: t[1].trim(),
                        media: t[2].trim()
                    }
                }() || function () {
                    if (o(/^@page */)) return {
                        type: "page",
                        selectors: h() || [],
                        declarations: p()
                    }
                }() || function () {
                    var t = o(/^@([-\w]+)?document *([^{]+)/);
                    if (t) return {
                        type: "document",
                        document: t[2].trim(),
                        vendor: t[1] ? t[1].trim() : null,
                        rules: e()
                    }
                }() || function () {
                    if (o(/^@font-face\s*/)) return {
                        type: "font-face",
                        declarations: p()
                    }
                }() || function () {
                    var t = o(/^@(import|charset|namespace)\s*([^;]+);/);
                    if (t) return {
                        type: t[1],
                        name: t[2].trim()
                    }
                }();
                if (!t || a.preserveStatic) return t;
                return (t.declarations ? t.declarations.some(function (t) {
                    return /var\(/.test(t.value)
                }) : (t.keyframes || t.rules || []).some(function (t) {
                    return (t.declarations || []).some(function (t) {
                        return /var\(/.test(t.value)
                    })
                })) ? t : {}
            }
        }

        function e(t) {
            if (!t && !l()) return r("missing '{'");
            for (var e, i = d(); s.length && (t || "}" !== s[0]) && (e = n() || function () {
                    if (!a.preserveStatic) {
                        var t = f("{", "}", s);
                        if (t) {
                            var e = /:(?:root|host)(?![.:#(])/.test(t.pre) && /--\S*\s*:/.test(t.body),
                                i = /var\(/.test(t.body);
                            if (!e && !i) return s = s.slice(t.end + 1), {}
                        }
                    }
                    var n = h() || [],
                        t = a.preserveStatic ? p() : p().filter(function (t) {
                            var e = n.some(function (t) {
                                    return /:(?:root|host)(?![.:#(])/.test(t)
                                }) && /^--\S/.test(t.property),
                                t = /var\(/.test(t.value);
                            return e || t
                        });
                    return n.length || r("selector missing"), {
                        type: "rule",
                        selectors: n,
                        declarations: t
                    }
                }());) e.type && i.push(e), i = i.concat(d());
            return t || c() ? i : r("missing '}'")
        }
        return {
            type: "stylesheet",
            stylesheet: {
                rules: e(!0),
                errors: []
            }
        }
    }

    function v(t, e) {
        var n = m({}, {
                parseHost: !1,
                store: {},
                onWarning: function () {}
            }, 1 < arguments.length && void 0 !== e ? e : {}),
            i = new RegExp(":".concat(n.parseHost ? "host" : "root", "(?![.:#(])"));
        return "string" == typeof t && (t = g(t, n)), t.stylesheet.rules.forEach(function (t) {
            "rule" === t.type && t.selectors.some(function (t) {
                return i.test(t)
            }) && t.declarations.forEach(function (t, e) {
                var i = t.property,
                    t = t.value;
                i && 0 === i.indexOf("--") && (n.store[i] = t)
            })
        }), n.store
    }

    function y(t, e, i) {
        var a = 1 < arguments.length && void 0 !== e ? e : "",
            r = 2 < arguments.length ? i : void 0,
            o = {
                charset: function (t) {
                    return "@charset " + t.name + ";"
                },
                comment: function (t) {
                    return 0 === t.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + t.comment + "*/" : ""
                },
                "custom-media": function (t) {
                    return "@custom-media " + t.name + " " + t.media + ";"
                },
                declaration: function (t) {
                    return t.property + ":" + t.value + ";"
                },
                document: function (t) {
                    return "@" + (t.vendor || "") + "document " + t.document + "{" + n(t.rules) + "}"
                },
                "font-face": function (t) {
                    return "@font-face{" + n(t.declarations) + "}"
                },
                host: function (t) {
                    return "@host{" + n(t.rules) + "}"
                },
                import: function (t) {
                    return "@import " + t.name + ";"
                },
                keyframe: function (t) {
                    return t.values.join(",") + "{" + n(t.declarations) + "}"
                },
                keyframes: function (t) {
                    return "@" + (t.vendor || "") + "keyframes " + t.name + "{" + n(t.keyframes) + "}"
                },
                media: function (t) {
                    return "@media " + t.media + "{" + n(t.rules) + "}"
                },
                namespace: function (t) {
                    return "@namespace " + t.name + ";"
                },
                page: function (t) {
                    return "@page " + (t.selectors.length ? t.selectors.join(", ") : "") + "{" + n(t.declarations) + "}"
                },
                rule: function (t) {
                    var e = t.declarations;
                    if (e.length) return t.selectors.join(",") + "{" + n(e) + "}"
                },
                supports: function (t) {
                    return "@supports " + t.supports + "{" + n(t.rules) + "}"
                }
            };

        function n(t) {
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t[i];
                r && r(n);
                var s = o[n.type](n);
                s && (e += s, s.length && n.selectors && (e += a))
            }
            return e
        }
        return n(t.stylesheet.rules)
    }
    t.range = a;
    var l = "--",
        c = "var";

    function b(t, e) {
        var o = m({}, {
            preserveStatic: !0,
            preserveVars: !1,
            variables: {},
            onWarning: function () {}
        }, 1 < arguments.length && void 0 !== e ? e : {});
        return "string" == typeof t && (t = g(t, o)),
            function t(i, n) {
                i.rules.forEach(function (e) {
                    e.rules ? t(e, n) : e.keyframes ? e.keyframes.forEach(function (t) {
                        "keyframe" === t.type && n(t.declarations, e)
                    }) : e.declarations && n(e.declarations, i)
                })
            }(t.stylesheet, function (t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        s = n.type,
                        a = n.property,
                        r = n.value;
                    "declaration" === s && (o.preserveVars || !a || 0 !== a.indexOf(l) ? -1 === r.indexOf(c + "(") || (r = function s(t) {
                        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            r = 2 < arguments.length ? arguments[2] : void 0;
                        if (-1 === t.indexOf("var(")) return t;
                        var e = f("(", ")", t);
                        return e ? "var" === e.pre.slice(-3) ? 0 === e.body.trim().length ? (a.onWarning("var() must contain a non-whitespace string"), t) : e.pre.slice(0, -3) + function (t) {
                            var e = t.split(",")[0].replace(/[\s\n\t]/g, ""),
                                i = (t.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
                                n = Object.prototype.hasOwnProperty.call(a.variables, e) ? String(a.variables[e]) : void 0,
                                i = n || (i ? String(i) : void 0),
                                t = r || t;
                            return n || a.onWarning('variable "'.concat(e, '" is undefined')), i && "undefined" !== i && 0 < i.length ? s(i, a, t) : "var(".concat(t, ")")
                        }(e.body) + s(e.post, a) : e.pre + "(".concat(s(e.body, a), ")") + s(e.post, a) : (-1 !== t.indexOf("var(") && a.onWarning('missing closing ")" in the value "'.concat(t, '"')), t)
                    }(r, o)) !== n.value && (r = function (i) {
                        return (i.match(/calc\(([^)]+)\)/g) || []).forEach(function (t) {
                            var e = "calc".concat(t.split("calc").join(""));
                            i = i.replace(t, e)
                        }), i
                    }(r), o.preserveVars ? (t.splice(i, 0, {
                        type: s,
                        property: a,
                        value: r
                    }), i++) : n.value = r) : (t.splice(i, 1), i--))
                }
            }), y(t)
    }
    var o = "undefined" != typeof window,
        d = o && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
        w = {
            group: 0,
            job: 0
        },
        x = {
            rootElement: o ? document : null,
            shadowDOM: !1,
            include: "style,link[rel=stylesheet]",
            exclude: "",
            variables: {},
            onlyLegacy: !0,
            preserveStatic: !0,
            preserveVars: !1,
            silent: !1,
            updateDOM: !0,
            updateURLs: !0,
            watch: null,
            onBeforeSend: function () {},
            onWarning: function () {},
            onError: function () {},
            onSuccess: function () {},
            onComplete: function () {}
        },
        T = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssKeyframes: /@(?:-\w*-)?keyframes/,
            cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
            cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
            cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
            cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
            cssVarFunc: /var\(\s*--[\w-]/,
            cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
        },
        S = {
            dom: {},
            job: {},
            user: {}
        },
        C = !1,
        E = null,
        k = 0,
        _ = null,
        M = !1;

    function L() {
        var t, e, s, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = "cssVars(): ",
            h = m({}, x, i);

        function p(t, e, i, n) {
            !h.silent && window.console && console.error("".concat(a).concat(t, "\n"), e), h.onError(t, e, i, n)
        }

        function f(t) {
            !h.silent && window.console && console.warn("".concat(a).concat(t)), h.onWarning(t)
        }
        if (o) {
            if (h.watch) return h.watch = x.watch, s = h, window.MutationObserver && (E && (E.disconnect(), E = null), (E = new MutationObserver(function (t) {
                t.some(function (t) {
                    var e, i = !1;
                    return "attributes" === t.type ? i = n(t.target) : "childList" === t.type && (e = t.addedNodes, i = Array.apply(null, e).some(function (t) {
                        var e = 1 === t.nodeType && t.hasAttribute("data-cssvars"),
                            i = "STYLE" === t.tagName && !t.disabled && T.cssVars.test(t.textContent);
                        return !e && (n(t) || i)
                    }) || (t = t.removedNodes, Array.apply(null, t).some(function (t) {
                        var e = 1 === t.nodeType,
                            i = e && "out" === t.getAttribute("data-cssvars"),
                            n = e && "src" === t.getAttribute("data-cssvars"),
                            e = n;
                        return (n || i) && (t = t.getAttribute("data-cssvars-group"), t = s.rootElement.querySelector('[data-cssvars-group="'.concat(t, '"]')), n && ($(s.rootElement), S.dom = {}), t && t.parentNode.removeChild(t)), e
                    }))), i
                }) && L(s)
            })).observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["disabled", "href"],
                childList: !0,
                subtree: !0
            })), void L(h);
            if (!1 === h.watch && E && (E.disconnect(), E = null), !h.__benchmark) {
                if (C === h.rootElement) return void
                function (t, e) {
                    e = 1 < arguments.length && void 0 !== e ? e : 100;
                    clearTimeout(_), _ = setTimeout(function () {
                        t.__benchmark = null, L(t)
                    }, e)
                }(i);
                h.__benchmark = A(), h.exclude = [E ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', h.exclude].filter(function (t) {
                    return t
                }).join(","), h.variables = function (t) {
                    var i = 0 < arguments.length && void 0 !== t ? t : {},
                        n = /^-{2}/;
                    return Object.keys(i).reduce(function (t, e) {
                        return t[n.test(e) ? e : "--".concat(e.replace(/^-+/, ""))] = i[e], t
                    }, {})
                }(h.variables), E || (Array.apply(null, h.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach(function (t) {
                    var e = t.getAttribute("data-cssvars-group");
                    e && h.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(e, '"]')) || t.parentNode.removeChild(t)
                }), k && (t = h.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])')).length < k && (k = t.length, S.dom = {}))
            }
            "loading" !== document.readyState ? d && h.onlyLegacy ? h.updateDOM && (e = h.rootElement.host || (h.rootElement === document ? document.documentElement : h.rootElement), Object.keys(h.variables).forEach(function (t) {
                e.style.setProperty(t, h.variables[t])
            })) : !M && (h.shadowDOM || h.rootElement.shadowRoot || h.rootElement.host) ? r({
                rootElement: x.rootElement,
                include: x.include,
                exclude: h.exclude,
                onSuccess: function (t, e, i) {
                    return (t = ((t = t.replace(T.cssComments, "").replace(T.cssMediaQueries, "")).match(T.cssVarDeclRules) || []).join("")) || !1
                },
                onComplete: function (t, e, i) {
                    v(t, {
                        store: S.dom,
                        onWarning: f
                    }), M = !0, L(h)
                }
            }) : (C = h.rootElement, r({
                rootElement: h.rootElement,
                include: h.include,
                exclude: h.exclude,
                onBeforeSend: h.onBeforeSend,
                onError: function (t, e, i) {
                    var n = t.responseURL || P(i, location.href),
                        i = t.statusText ? "(".concat(t.statusText, ")") : "Unspecified Error" + (0 === t.status ? " (possibly CORS related)" : "");
                    p("CSS XHR Error: ".concat(n, " ").concat(t.status, " ").concat(i), e, t, n)
                },
                onSuccess: function (t, e, i) {
                    var n, s, e = h.onSuccess(t, e, i);
                    return t = void 0 !== e && !1 === Boolean(e) ? "" : e || t, h.updateURLs && (s = i, ((n = t).replace(T.cssComments, "").match(T.cssUrls) || []).forEach(function (t) {
                        var e = t.replace(T.cssUrls, "$1"),
                            i = P(e, s);
                        n = n.replace(t, t.replace(e, i))
                    }), t = n), t
                },
                onComplete: function (t, n) {
                    var e, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                        s = {},
                        r = h.updateDOM ? S.dom : Object.keys(S.job).length ? S.job : S.job = JSON.parse(JSON.stringify(S.dom));
                    if (i.forEach(function (t, e) {
                            if (T.cssVars.test(n[e])) try {
                                var i = g(n[e], {
                                    preserveStatic: h.preserveStatic,
                                    removeComments: !0
                                });
                                v(i, {
                                    parseHost: Boolean(h.rootElement.host),
                                    store: s,
                                    onWarning: f
                                }), t.__cssVars = {
                                    tree: i
                                }
                            } catch (e) {
                                p(e.message, t)
                            }
                        }), h.updateDOM && m(S.user, h.variables), m(s, h.variables), e = Boolean((document.querySelector("[data-cssvars]") || Object.keys(S.dom).length) && Object.keys(s).some(function (t) {
                            return s[t] !== r[t]
                        })), m(r, S.user, s), e) $(h.rootElement), L(h);
                    else {
                        var o = [],
                            l = [],
                            c = !1;
                        if (S.job = {}, h.updateDOM && w.job++, i.forEach(function (e) {
                                var t = !e.__cssVars;
                                if (e.__cssVars) try {
                                    b(e.__cssVars.tree, m({}, h, {
                                        variables: r,
                                        onWarning: f
                                    }));
                                    var i, n, s, a = y(e.__cssVars.tree);
                                    h.updateDOM ? (e.getAttribute("data-cssvars") || e.setAttribute("data-cssvars", "src"), a.length && (i = e.getAttribute("data-cssvars-group") || ++w.group, n = a.replace(/\s/g, ""), s = h.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(i, '"]')) || document.createElement("style"), c = c || T.cssKeyframes.test(a), s.hasAttribute("data-cssvars") || s.setAttribute("data-cssvars", "out"), n === e.textContent.replace(/\s/g, "") ? (t = !0, s && s.parentNode && (e.removeAttribute("data-cssvars-group"), s.parentNode.removeChild(s))) : n !== s.textContent.replace(/\s/g, "") && ([e, s].forEach(function (t) {
                                        t.setAttribute("data-cssvars-job", w.job), t.setAttribute("data-cssvars-group", i)
                                    }), s.textContent = a, o.push(a), l.push(s), s.parentNode || e.parentNode.insertBefore(s, e.nextSibling)))) : e.textContent.replace(/\s/g, "") !== a && o.push(a)
                                } catch (t) {
                                    p(t.message, e)
                                }
                                t && e.setAttribute("data-cssvars", "skip"), e.hasAttribute("data-cssvars-job") || e.setAttribute("data-cssvars-job", w.job)
                            }), k = h.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length, h.shadowDOM)
                            for (var a, u = [h.rootElement].concat(function (t) {
                                    if (Array.isArray(t)) {
                                        for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                                        return i
                                    }
                                }(i = h.rootElement.querySelectorAll("*")) || function (t) {
                                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                                }(i) || function () {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                                }()), d = 0; a = u[d]; ++d) a.shadowRoot && a.shadowRoot.querySelector("style") && L(m({}, h, {
                                rootElement: a.shadowRoot
                            }));
                        h.updateDOM && c && function (t) {
                            var e = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (t) {
                                return getComputedStyle(document.body)[t]
                            })[0];
                            if (e) {
                                for (var i = t.getElementsByTagName("*"), n = [], s = 0, a = i.length; s < a; s++) {
                                    var r = i[s];
                                    "none" !== getComputedStyle(r)[e] && (r.style[e] += "__CSSVARSPONYFILL-KEYFRAMES__", n.push(r))
                                }
                                document.body.offsetHeight;
                                for (var o = 0, l = n.length; o < l; o++) {
                                    var c = n[o].style;
                                    c[e] = c[e].replace("__CSSVARSPONYFILL-KEYFRAMES__", "")
                                }
                            }
                        }(h.rootElement), C = !1, h.onComplete(o.join(""), l, JSON.parse(JSON.stringify(r)), A() - h.__benchmark)
                    }
                }
            })) : document.addEventListener("DOMContentLoaded", function t(e) {
                L(i), document.removeEventListener("DOMContentLoaded", t)
            })
        }

        function n(t) {
            return "LINK" === t.tagName && -1 !== (t.getAttribute("rel") || "").indexOf("stylesheet") && !t.disabled
        }
    }

    function P(t, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : location.href,
            n = document.implementation.createHTMLDocument(""),
            s = n.createElement("base"),
            e = n.createElement("a");
        return n.head.appendChild(s), n.body.appendChild(e), s.href = i, e.href = t, e.href
    }

    function A() {
        return o && (window.performance || {}).now ? window.performance.now() : (new Date).getTime()
    }

    function $(t) {
        Array.apply(null, t.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach(function (t) {
            return t.setAttribute("data-cssvars", "")
        })
    }
    return L.reset = function () {
        for (var t in C = !1, E && (E.disconnect(), E = null), k = 0, _ = null, M = !1, S) S[t] = {}
    }, L
});
var VLTJS = {
    window: jQuery(window),
    document: jQuery(document),
    html: jQuery("html"),
    body: jQuery("body"),
    is_safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    is_firefox: -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
    is_chrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    is_ie10: -1 !== navigator.appVersion.indexOf("MSIE 10"),
    transitionEnd: "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
    animIteration: "animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration",
    animationEnd: "animationend webkitAnimationEnd"
};
VLTJS.isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return VLTJS.isMobile.Android() || VLTJS.isMobile.BlackBerry() || VLTJS.isMobile.iOS() || VLTJS.isMobile.Opera() || VLTJS.isMobile.Windows()
    }
};
var resizeTimeout, resizeArr = [];
VLTJS.window.on("load resize orientationchange", function (e) {
    resizeArr.length && (clearTimeout(resizeTimeout), resizeTimeout = setTimeout(function () {
        for (var t = 0; t < resizeArr.length; t++) resizeArr[t](e)
    }, 250))
}), VLTJS.debounceResize = function (t) {
    "function" == typeof t ? resizeArr.push(t) : window.dispatchEvent(new Event("resize"))
}, VLTJS.addLedingZero = function (t) {
    return ("0" + t).slice(-2)
};
var didScroll, throttleArr = [],
    delta = 5,
    lastScrollTop = 0;

function hasScrolled() {
    var t = VLTJS.window.scrollTop(),
        e = VLTJS.window.height(),
        i = VLTJS.document.height(),
        n = "";
    if (!(Math.abs(lastScrollTop - t) <= delta)) {
        for (var s in n = lastScrollTop < t ? "down" : t < lastScrollTop ? "up" : "none", 0 === t ? n = "start" : i - e <= t && (n = "end"), throttleArr) "function" == typeof throttleArr[s] && throttleArr[s](n, t, lastScrollTop, VLTJS.window);
        lastScrollTop = t
    }
}
VLTJS.window.on("load resize scroll orientationchange", function () {
        throttleArr.length && (didScroll = !0)
    }), setInterval(function () {
        didScroll && (didScroll = !1, window.requestAnimationFrame(hasScrolled))
    }, 250), VLTJS.throttleScroll = function (t) {
        "function" == typeof t && throttleArr.push(t)
    }, "undefined" != typeof cssVars && cssVars({
        onlyVars: !0
    }),
    function (e) {
        "use strict";
        VLTJS.animatedBlock = {
            init: function () {
                e(".vlt-animated-block").each(function () {
                    var t = e(this);
                    VLTJS.window.on("vlt.change-slide", function () {
                        t.removeClass("animated"), t.parents(".vlt-section").hasClass("active") && t.addClass("animated")
                    })
                })
            }
        }, VLTJS.animatedBlock.init()
    }(jQuery),
    function (n) {
        "use strict";
        VLTJS.contactForm = {
            init: function () {
                void 0 !== n.fn.validate && n(".vlt-contact-form").each(function () {
                    var t = n(this),
                        e = t.find(".message.success"),
                        i = t.find(".message.danger");
                    t.validate({
                        errorClass: "error",
                        submitHandler: function (t) {
                            n.ajax({
                                type: "POST",
                                url: "handler.php",
                                data: new FormData(t),
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                success: function () {
                                    e.fadeIn(), setTimeout(function () {
                                        e.fadeOut()
                                    }, 5e3)
                                },
                                error: function () {
                                    i.fadeIn(), setTimeout(function () {
                                        i.fadeOut()
                                    }, 5e3)
                                }
                            })
                        }
                    })
                })
            }
        }, VLTJS.contactForm.init()
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.counterUp = {
            init: function () {
                void 0 !== t.fn.numerator && t(".vlt-counter-up, .vlt-counter-up-small").each(function () {
                    var e = t(this),
                        i = e.data("animation-speed") || 1e3,
                        n = e.data("ending-number") || 0,
                        s = e.data("delimiter") || !1;
                    VLTJS.window.on("vlt.change-slide", function () {
                        var t;
                        e.parents(".vlt-section").hasClass("active") && (t = e.find(".counter").html("0"), setTimeout(function () {
                            t.numerator({
                                easing: "linear",
                                duration: i,
                                delimiter: s,
                                toValue: n
                            })
                        }, 500))
                    })
                })
            }
        }, VLTJS.counterUp.init()
    }(jQuery),
    function (n) {
        "use strict";
        VLTJS.customCursor = {
            init: function () {
                var e, i, t;
                n(".vlt-is--custom-cursor").length && (VLTJS.body.append('<div class="vlt-custom-cursor"><div class="circle"><span></span></div></div>'), e = n(".vlt-custom-cursor").find(".circle"), i = {
                    x: 0,
                    y: 0
                }, t = {
                    x: 0,
                    y: 0
                }, "undefined" != typeof gsap && (gsap.set(e, {
                    xPercent: -50,
                    yPercent: -50
                }), VLTJS.document.on("mousemove", function (t) {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    i.x = t.pageX, i.y = t.pageY - e
                }), gsap.ticker.add(function () {
                    t.x += .25 * (i.x - t.x), t.y += .25 * (i.y - t.y), gsap.set(e, {
                        x: t.x,
                        y: t.y
                    })
                }), VLTJS.document.on("mousedown", function () {
                    gsap.to(e, .3, {
                        scale: .7
                    })
                }).on("mouseup", function () {
                    gsap.to(e, .3, {
                        scale: 1
                    })
                }), VLTJS.document.on("mouseenter", "input, textarea, select, .vlt-video-button > a", function () {
                    gsap.to(e, .3, {
                        scale: 0,
                        opacity: 0
                    })
                }).on("mouseleave", "input, textarea, select, .vlt-video-button > a", function () {
                    gsap.to(e, .3, {
                        scale: 1,
                        opacity: .1
                    })
                }), VLTJS.document.on("mouseenter", 'a, button, [role="button"]', function () {
                    gsap.to(e, .3, {
                        height: 60,
                        width: 60
                    })
                }).on("mouseleave blur", 'a, button, [role="button"]', function () {
                    gsap.to(e, .3, {
                        height: 15,
                        width: 15
                    })
                }), VLTJS.document.on("mouseenter", "[data-cursor]", function () {
                    var t = n(this);
                    gsap.to(e, .3, {
                        height: 80,
                        width: 80,
                        opacity: 1,
                        onStart: function () {
                            e.find("span").html(t.attr("data-cursor"))
                        }
                    })
                }).on("mouseleave", "[data-cursor]", function () {
                    gsap.to(e, .3, {
                        height: 15,
                        width: 15,
                        opacity: .1,
                        onStart: function () {
                            e.find("span").html("")
                        }
                    })
                })))
            }
        }, VLTJS.isMobile.any() || VLTJS.customCursor.init()
    }(jQuery),
    function (u) {
        "use strict";
        VLTJS.fullpageSlider = {
            init: function () {
                var e, n, i, t, s, a, r;

                function o() {
                    0 < e.find(".pp-section.active").scrollTop() ? u(".vlt-navbar").addClass("vlt-navbar--solid") : u(".vlt-navbar").removeClass("vlt-navbar--solid")
                }

                function l() {
                    switch (e.find(".vlt-section.active").data("brightness")) {
                        case "light":
                            VLTJS.html.removeClass("is-light").addClass("is-dark");
                            break;
                        case "dark":
                            VLTJS.html.removeClass("is-dark").addClass("is-light")
                    }
                }

                function c() {
                    var t = e.find(".vlt-section.active").index();
                    0 == t ? i.html('<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></a>') : i.html(VLTJS.addLedingZero(t + 1))
                }
                void 0 !== u.fn.pagepiling && (e = u(".vlt-fullpage-slider"), n = e.find(".vlt-fullpage-slider-progress-bar"), i = e.find(".vlt-fullpage-slider-numbers"), t = !!e.data("loop-top"), s = !!e.data("loop-bottom"), a = e.data("speed") || 800, r = [], VLTJS.body.css("overflow", "hidden"), VLTJS.html.css("overflow", "hidden"), e.find("[data-anchor]").each(function () {
                    r.push(u(this).data("anchor"))
                }), o(), e.pagepiling({
                    menu: ".vlt-offcanvas-menu ul.sf-menu, .vlt-fullpage-slider-progress-bar",
                    scrollingSpeed: a,
                    loopTop: t,
                    loopBottom: s,
                    anchors: r,
                    sectionSelector: ".vlt-section",
                    navigation: !1,
                    afterRender: function () {
                        n.find("li:first-child").addClass("active").end().addClass("is-show"), l(), c(), VLTJS.window.trigger("vlt.change-slide")
                    },
                    onLeave: function (t, e, i) {
                        l(),
                            function (t) {
                                switch (i) {
                                    case "down":
                                        n.find("li:nth-child(" + t + ")").prevAll().addClass("prev");
                                        break;
                                    case "up":
                                        n.find("li:nth-child(" + t + ")").removeClass("prev")
                                }
                            }(e), c(), VLTJS.window.trigger("vlt.change-slide")
                    },
                    afterLoad: function (t, e) {
                        n.find("li.active").prevAll().addClass("prev"), o()
                    }
                }), i.on("click", ">a", function (t) {
                    t.preventDefault(), u.fn.pagepiling.moveSectionDown()
                }), e.find(".pp-scrollable").on("scroll", function () {
                    0 < u(this).scrollTop() ? u(".vlt-navbar").addClass("vlt-navbar--solid") : u(".vlt-navbar").removeClass("vlt-navbar--solid")
                }))
            }
        }, VLTJS.fullpageSlider.init()
    }(jQuery),
    function (l) {
        "use strict";
        var c = !1;
        VLTJS.menuOffcanvas = {
            config: {
                easing: "power2.out"
            },
            init: function () {
                var e = l(".vlt-offcanvas-menu"),
                    t = e.find("ul.sf-menu"),
                    i = t.find("> li"),
                    n = l(".vlt-offcanvas-menu__header"),
                    s = l(".vlt-offcanvas-menu__footer > div"),
                    a = l(".js-offcanvas-menu-open"),
                    r = l(".js-offcanvas-menu-close"),
                    o = l(".vlt-site-overlay");
                void 0 !== l.fn.superclick && t.superclick({
                    delay: 300,
                    cssArrows: !1,
                    animation: {
                        opacity: "show",
                        height: "show"
                    },
                    animationOut: {
                        opacity: "hide",
                        height: "hide"
                    }
                }), a.on("click", function (t) {
                    t.preventDefault(), c || VLTJS.menuOffcanvas.open_menu(e, o, i, n, s)
                }), r.on("click", function (t) {
                    t.preventDefault(), c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                }), o.on("click", function (t) {
                    t.preventDefault(), c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                }), VLTJS.document.keyup(function (t) {
                    27 === t.keyCode && c && (t.preventDefault(), VLTJS.menuOffcanvas.close_menu(e, o, i, n, s))
                }), i.filter("[data-menuanchor]").on("click", "a", function () {
                    c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                })
            },
            open_menu: function (t, e, i, n, s) {
                c = !0, "undefined" != typeof gsap && gsap.timeline({
                    defaults: {
                        ease: this.config.easing
                    }
                }).set(VLTJS.html, {
                    overflow: "hidden"
                }).to(e, .3, {
                    autoAlpha: 1
                }).fromTo(t, .6, {
                    x: "100%"
                }, {
                    x: 0,
                    visibility: "visible"
                }, "-=.3").fromTo(n, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1
                }, "-=.3").fromTo(i, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1,
                    stagger: {
                        each: .1,
                        from: "start"
                    }
                }, "-=.15").fromTo(s, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1,
                    stagger: {
                        each: .1,
                        from: "start"
                    }
                }, "-=.15")
            },
            close_menu: function (t, e, i, n, s) {
                c = !1, "undefined" != typeof gsap && gsap.timeline({
                    defaults: {
                        ease: this.config.easing
                    }
                }).set(VLTJS.html, {
                    overflow: "inherit"
                }).to(s, .3, {
                    x: 50,
                    autoAlpha: 0,
                    stagger: {
                        each: .1,
                        from: "end"
                    }
                }).to(i, .3, {
                    x: 50,
                    autoAlpha: 0,
                    stagger: {
                        each: .1,
                        from: "end"
                    }
                }, "-=.15").to(n, .3, {
                    x: 50,
                    autoAlpha: 0
                }, "-=.15").to(t, .6, {
                    x: "100%"
                }, "-=.15").set(t, {
                    visibility: "hidden"
                }).to(e, .3, {
                    autoAlpha: 0
                }, "-=.6")
            }
        }, VLTJS.menuOffcanvas.init()
    }(jQuery),
    function () {
        "use strict";
        "function" == typeof FastClick && FastClick.attach(document.body)
    }(jQuery),
    function (t) {
        "use strict";
        void 0 !== t.fn.animsition && ((t = t(".animsition")).animsition({
            inDuration: 500,
            outDuration: 500,
            linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([rel="nofollow"]):not([href~="#"]):not([href^=mailto]):not([href^=tel]):not(.sf-with-ul)',
            loadingClass: "animsition-loading-2",
            loadingInner: '<div class="spinner"><span class="double-bounce-one"></span><span class="double-bounce-two"></span></div>'
        }), t.on("animsition.inEnd", function () {
            VLTJS.window.trigger("vlt.preloader_done"), VLTJS.html.addClass("vlt-is-page-loaded")
        }))
    }(jQuery),
    function (s) {
        "use strict";
        VLTJS.progressBar = {
            init: function () {
                "undefined" != typeof gsap && s(".vlt-progress-bar").each(function () {
                    var t = s(this),
                        e = t.data("final-value") || 0,
                        i = t.data("animation-speed") || 0,
                        n = {
                            count: 0
                        };
                    VLTJS.window.on("vlt.change-slide", function () {
                        t.parents(".vlt-section").hasClass("active") && (n.count = 0, t.find(".vlt-progress-bar__title > .counter").text(Math.round(n.count)), gsap.set(t.find(".vlt-progress-bar__bar > span"), {
                            width: 0
                        }), gsap.to(n, i / 1e3 / 2, {
                            count: e,
                            delay: .5,
                            onUpdate: function () {
                                t.find(".vlt-progress-bar__title > .counter").text(Math.round(n.count))
                            }
                        }), gsap.to(t.find(".vlt-progress-bar__bar > span"), i / 1e3, {
                            width: e + "%",
                            delay: .5
                        }))
                    })
                })
            }
        }, VLTJS.progressBar.init()
    }(jQuery),
    function (d) {
        "use strict";
        VLTJS.projectShowcase = {
            initSlider: function () {
                var t;
                "undefined" != typeof Swiper && (t = d(".vlt-project-showcase-slider .swiper-container"), new Swiper(t, {
                    speed: 1e3,
                    spaceBetween: 30,
                    grabCursor: !0,
                    slidesPerView: 1,
                    breakpoints: {
                        575: {
                            slidesPerView: 2
                        }
                    }
                }))
            },
            initParallax: function () {
                var e, t, i, n, s, a, r, o, l, c, u;
                "undefined" != typeof gsap && (e = d(".vlt-project-showcase"), t = e.find(".vlt-project-showcase__items"), i = t.find(".vlt-project-showcase__item"), n = e.find(".vlt-project-showcase__images"), s = n.find(".vlt-project-showcase__image"), r = e.outerWidth(!0), o = n.outerWidth(!0), l = t.outerWidth(), c = (r - o) / r, u = l / r - 1, u = (r - l) / r, i.on("mouseenter", function () {
                    i.removeClass("is-active"), s.removeClass("is-active"), d(this).addClass("is-active"), s.eq(d(this).index()).addClass("is-active")
                }), i.eq(0).trigger("mouseenter"), VLTJS.window.on("mousemove", function (t) {
                    a = t.pageX - e.offset().left
                }), gsap.ticker.add(function () {
                    gsap.set(t, {
                        x: a * u,
                        ease: "power3.out"
                    }), gsap.set(n, {
                        right: a * c,
                        ease: "power3.out"
                    })
                }))
            }
        }, VLTJS.projectShowcase.initSlider(), VLTJS.projectShowcase.initParallax(), VLTJS.debounceResize(function () {
            VLTJS.projectShowcase.initParallax()
        })
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.testimonialSlider = {
            init: function () {
                "undefined" != typeof Swiper && t(".vlt-testimonial-slider .swiper-container").each(function () {
                    t(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'), new Swiper(this, {
                        speed: 1e3,
                        spaceBetween: 30,
                        grabCursor: !0,
                        effect: "coverflow",
                        slidesPerView: 1,
                        navigation: {
                            nextEl: t(".vlt-testimonial-slider-controls .next"),
                            prevEl: t(".vlt-testimonial-slider-controls .prev")
                        },
                        pagination: {
                            el: t(".vlt-testimonial-slider-controls .pagination"),
                            clickable: !1,
                            type: "fraction",
                            renderFraction: function (t, e) {
                                return '<span class="' + t + '"></span><span class="sep">/</span><span class="' + e + '"></span>'
                            }
                        }
                    })
                })
            }
        }, VLTJS.testimonialSlider.init()
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.timelineSlider = {
            init: function () {
                "undefined" != typeof Swiper && t(".vlt-timeline-slider .swiper-container").each(function () {
                    t(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'), new Swiper(this, {
                        speed: 1e3,
                        spaceBetween: 0,
                        grabCursor: !0,
                        slidesPerView: 1,
                        navigation: {
                            nextEl: t(".vlt-timeline-slider-controls .next"),
                            prevEl: t(".vlt-timeline-slider-controls .prev")
                        },
                        pagination: {
                            el: t(".vlt-timeline-slider-controls .pagination"),
                            clickable: !1,
                            type: "fraction",
                            renderFraction: function (t, e) {
                                return '<span class="' + t + '"></span><span class="sep">/</span><span class="' + e + '"></span>'
                            }
                        }
                    })
                })
            }
        }, VLTJS.timelineSlider.init()
    }(jQuery),
    function (e) {
        "use strict";
        VLTJS.animatedBlock = {
            init: function () {
                e(".vlt-animated-block").each(function () {
                    var t = e(this);
                    VLTJS.window.on("vlt.change-slide", function () {
                        t.removeClass("animated"), t.parents(".vlt-section").hasClass("active") && t.addClass("animated")
                    })
                })
            }
        }, VLTJS.animatedBlock.init()
    }(jQuery),
    function (n) {
        "use strict";
        VLTJS.contactForm = {
            init: function () {
                void 0 !== n.fn.validate && n(".vlt-contact-form").each(function () {
                    var t = n(this),
                        e = t.find(".message.success"),
                        i = t.find(".message.danger");
                    t.validate({
                        errorClass: "error",
                        submitHandler: function (t) {
                            n.ajax({
                                type: "POST",
                                url: "handler.php",
                                data: new FormData(t),
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                success: function () {
                                    e.fadeIn(), setTimeout(function () {
                                        e.fadeOut()
                                    }, 5e3)
                                },
                                error: function () {
                                    i.fadeIn(), setTimeout(function () {
                                        i.fadeOut()
                                    }, 5e3)
                                }
                            })
                        }
                    })
                })
            }
        }, VLTJS.contactForm.init()
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.counterUp = {
            init: function () {
                void 0 !== t.fn.numerator && t(".vlt-counter-up, .vlt-counter-up-small").each(function () {
                    var e = t(this),
                        i = e.data("animation-speed") || 1e3,
                        n = e.data("ending-number") || 0,
                        s = e.data("delimiter") || !1;
                    VLTJS.window.on("vlt.change-slide", function () {
                        var t;
                        e.parents(".vlt-section").hasClass("active") && (t = e.find(".counter").html("0"), setTimeout(function () {
                            t.numerator({
                                easing: "linear",
                                duration: i,
                                delimiter: s,
                                toValue: n
                            })
                        }, 500))
                    })
                })
            }
        }, VLTJS.counterUp.init()
    }(jQuery),
    function (n) {
        "use strict";
        VLTJS.customCursor = {
            init: function () {
                var e, i, t;
                n(".vlt-is--custom-cursor").length && (VLTJS.body.append('<div class="vlt-custom-cursor"><div class="circle"><span></span></div></div>'), e = n(".vlt-custom-cursor").find(".circle"), i = {
                    x: 0,
                    y: 0
                }, t = {
                    x: 0,
                    y: 0
                }, "undefined" != typeof gsap && (gsap.set(e, {
                    xPercent: -50,
                    yPercent: -50
                }), VLTJS.document.on("mousemove", function (t) {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    i.x = t.pageX, i.y = t.pageY - e
                }), gsap.ticker.add(function () {
                    t.x += .25 * (i.x - t.x), t.y += .25 * (i.y - t.y), gsap.set(e, {
                        x: t.x,
                        y: t.y
                    })
                }), VLTJS.document.on("mousedown", function () {
                    gsap.to(e, .3, {
                        scale: .7
                    })
                }).on("mouseup", function () {
                    gsap.to(e, .3, {
                        scale: 1
                    })
                }), VLTJS.document.on("mouseenter", "input, textarea, select, .vlt-video-button > a", function () {
                    gsap.to(e, .3, {
                        scale: 0,
                        opacity: 0
                    })
                }).on("mouseleave", "input, textarea, select, .vlt-video-button > a", function () {
                    gsap.to(e, .3, {
                        scale: 1,
                        opacity: .1
                    })
                }), VLTJS.document.on("mouseenter", 'a, button, [role="button"]', function () {
                    gsap.to(e, .3, {
                        height: 60,
                        width: 60
                    })
                }).on("mouseleave blur", 'a, button, [role="button"]', function () {
                    gsap.to(e, .3, {
                        height: 15,
                        width: 15
                    })
                }), VLTJS.document.on("mouseenter", "[data-cursor]", function () {
                    var t = n(this);
                    gsap.to(e, .3, {
                        height: 80,
                        width: 80,
                        opacity: 1,
                        onStart: function () {
                            e.find("span").html(t.attr("data-cursor"))
                        }
                    })
                }).on("mouseleave", "[data-cursor]", function () {
                    gsap.to(e, .3, {
                        height: 15,
                        width: 15,
                        opacity: .1,
                        onStart: function () {
                            e.find("span").html("")
                        }
                    })
                })))
            }
        }, VLTJS.isMobile.any() || VLTJS.customCursor.init()
    }(jQuery),
    function (u) {
        "use strict";
        VLTJS.fullpageSlider = {
            init: function () {
                var e, n, i, t, s, a, r;

                function o() {
                    0 < e.find(".pp-section.active").scrollTop() ? u(".vlt-navbar").addClass("vlt-navbar--solid") : u(".vlt-navbar").removeClass("vlt-navbar--solid")
                }

                function l() {
                    switch (e.find(".vlt-section.active").data("brightness")) {
                        case "light":
                            VLTJS.html.removeClass("is-light").addClass("is-dark");
                            break;
                        case "dark":
                            VLTJS.html.removeClass("is-dark").addClass("is-light")
                    }
                }

                function c() {
                    var t = e.find(".vlt-section.active").index();
                    0 == t ? i.html('<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></a>') : i.html(VLTJS.addLedingZero(t + 1))
                }
                void 0 !== u.fn.pagepiling && (e = u(".vlt-fullpage-slider"), n = e.find(".vlt-fullpage-slider-progress-bar"), i = e.find(".vlt-fullpage-slider-numbers"), t = !!e.data("loop-top"), s = !!e.data("loop-bottom"), a = e.data("speed") || 800, r = [], VLTJS.body.css("overflow", "hidden"), VLTJS.html.css("overflow", "hidden"), e.find("[data-anchor]").each(function () {
                    r.push(u(this).data("anchor"))
                }), o(), e.pagepiling({
                    menu: ".vlt-offcanvas-menu ul.sf-menu, .vlt-fullpage-slider-progress-bar",
                    scrollingSpeed: a,
                    loopTop: t,
                    loopBottom: s,
                    anchors: r,
                    sectionSelector: ".vlt-section",
                    navigation: !1,
                    afterRender: function () {
                        n.find("li:first-child").addClass("active").end().addClass("is-show"), l(), c(), VLTJS.window.trigger("vlt.change-slide")
                    },
                    onLeave: function (t, e, i) {
                        l(),
                            function (t) {
                                switch (i) {
                                    case "down":
                                        n.find("li:nth-child(" + t + ")").prevAll().addClass("prev");
                                        break;
                                    case "up":
                                        n.find("li:nth-child(" + t + ")").removeClass("prev")
                                }
                            }(e), c(), VLTJS.window.trigger("vlt.change-slide")
                    },
                    afterLoad: function (t, e) {
                        n.find("li.active").prevAll().addClass("prev"), o()
                    }
                }), i.on("click", ">a", function (t) {
                    t.preventDefault(), u.fn.pagepiling.moveSectionDown()
                }), e.find(".pp-scrollable").on("scroll", function () {
                    0 < u(this).scrollTop() ? u(".vlt-navbar").addClass("vlt-navbar--solid") : u(".vlt-navbar").removeClass("vlt-navbar--solid")
                }))
            }
        }, VLTJS.fullpageSlider.init()
    }(jQuery),
    function (l) {
        "use strict";
        var c = !1;
        VLTJS.menuOffcanvas = {
            config: {
                easing: "power2.out"
            },
            init: function () {
                var e = l(".vlt-offcanvas-menu"),
                    t = e.find("ul.sf-menu"),
                    i = t.find("> li"),
                    n = l(".vlt-offcanvas-menu__header"),
                    s = l(".vlt-offcanvas-menu__footer > div"),
                    a = l(".js-offcanvas-menu-open"),
                    r = l(".js-offcanvas-menu-close"),
                    o = l(".vlt-site-overlay");
                void 0 !== l.fn.superclick && t.superclick({
                    delay: 300,
                    cssArrows: !1,
                    animation: {
                        opacity: "show",
                        height: "show"
                    },
                    animationOut: {
                        opacity: "hide",
                        height: "hide"
                    }
                }), a.on("click", function (t) {
                    t.preventDefault(), c || VLTJS.menuOffcanvas.open_menu(e, o, i, n, s)
                }), r.on("click", function (t) {
                    t.preventDefault(), c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                }), o.on("click", function (t) {
                    t.preventDefault(), c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                }), VLTJS.document.keyup(function (t) {
                    27 === t.keyCode && c && (t.preventDefault(), VLTJS.menuOffcanvas.close_menu(e, o, i, n, s))
                }), i.filter("[data-menuanchor]").on("click", "a", function () {
                    c && VLTJS.menuOffcanvas.close_menu(e, o, i, n, s)
                })
            },
            open_menu: function (t, e, i, n, s) {
                c = !0, "undefined" != typeof gsap && gsap.timeline({
                    defaults: {
                        ease: this.config.easing
                    }
                }).set(VLTJS.html, {
                    overflow: "hidden"
                }).to(e, .3, {
                    autoAlpha: 1
                }).fromTo(t, .6, {
                    x: "100%"
                }, {
                    x: 0,
                    visibility: "visible"
                }, "-=.3").fromTo(n, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1
                }, "-=.3").fromTo(i, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1,
                    stagger: {
                        each: .1,
                        from: "start"
                    }
                }, "-=.15").fromTo(s, .3, {
                    x: 50,
                    autoAlpha: 0
                }, {
                    x: 0,
                    autoAlpha: 1,
                    stagger: {
                        each: .1,
                        from: "start"
                    }
                }, "-=.15")
            },
            close_menu: function (t, e, i, n, s) {
                c = !1, "undefined" != typeof gsap && gsap.timeline({
                    defaults: {
                        ease: this.config.easing
                    }
                }).set(VLTJS.html, {
                    overflow: "inherit"
                }).to(s, .3, {
                    x: 50,
                    autoAlpha: 0,
                    stagger: {
                        each: .1,
                        from: "end"
                    }
                }).to(i, .3, {
                    x: 50,
                    autoAlpha: 0,
                    stagger: {
                        each: .1,
                        from: "end"
                    }
                }, "-=.15").to(n, .3, {
                    x: 50,
                    autoAlpha: 0
                }, "-=.15").to(t, .6, {
                    x: "100%"
                }, "-=.15").set(t, {
                    visibility: "hidden"
                }).to(e, .3, {
                    autoAlpha: 0
                }, "-=.6")
            }
        }, VLTJS.menuOffcanvas.init()
    }(jQuery),
    function () {
        "use strict";
        "function" == typeof FastClick && FastClick.attach(document.body)
    }(jQuery),
    function (t) {
        "use strict";
        void 0 !== t.fn.animsition && ((t = t(".animsition")).animsition({
            inDuration: 500,
            outDuration: 500,
            linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([rel="nofollow"]):not([href~="#"]):not([href^=mailto]):not([href^=tel]):not(.sf-with-ul)',
            loadingClass: "animsition-loading-2",
            loadingInner: '<div class="spinner"><span class="double-bounce-one"></span><span class="double-bounce-two"></span></div>'
        }), t.on("animsition.inEnd", function () {
            VLTJS.window.trigger("vlt.preloader_done"), VLTJS.html.addClass("vlt-is-page-loaded")
        }))
    }(jQuery),
    function (s) {
        "use strict";
        VLTJS.progressBar = {
            init: function () {
                "undefined" != typeof gsap && s(".vlt-progress-bar").each(function () {
                    var t = s(this),
                        e = t.data("final-value") || 0,
                        i = t.data("animation-speed") || 0,
                        n = {
                            count: 0
                        };
                    VLTJS.window.on("vlt.change-slide", function () {
                        t.parents(".vlt-section").hasClass("active") && (n.count = 0, t.find(".vlt-progress-bar__title > .counter").text(Math.round(n.count)), gsap.set(t.find(".vlt-progress-bar__bar > span"), {
                            width: 0
                        }), gsap.to(n, i / 1e3 / 2, {
                            count: e,
                            delay: .5,
                            onUpdate: function () {
                                t.find(".vlt-progress-bar__title > .counter").text(Math.round(n.count))
                            }
                        }), gsap.to(t.find(".vlt-progress-bar__bar > span"), i / 1e3, {
                            width: e + "%",
                            delay: .5
                        }))
                    })
                })
            }
        }, VLTJS.progressBar.init()
    }(jQuery),
    function (d) {
        "use strict";
        VLTJS.projectShowcase = {
            initSlider: function () {
                var t;
                "undefined" != typeof Swiper && (t = d(".vlt-project-showcase-slider .swiper-container"), new Swiper(t, {
                    speed: 1e3,
                    spaceBetween: 30,
                    grabCursor: !0,
                    slidesPerView: 1,
                    breakpoints: {
                        575: {
                            slidesPerView: 2
                        }
                    }
                }))
            },
            initParallax: function () {
                var e, t, i, n, s, a, r, o, l, c, u;
                "undefined" != typeof gsap && (e = d(".vlt-project-showcase"), t = e.find(".vlt-project-showcase__items"), i = t.find(".vlt-project-showcase__item"), n = e.find(".vlt-project-showcase__images"), s = n.find(".vlt-project-showcase__image"), r = e.outerWidth(!0), o = n.outerWidth(!0), l = t.outerWidth(), c = (r - o) / r, u = l / r - 1, u = (r - l) / r, i.on("mouseenter", function () {
                    i.removeClass("is-active"), s.removeClass("is-active"), d(this).addClass("is-active"), s.eq(d(this).index()).addClass("is-active")
                }), i.eq(0).trigger("mouseenter"), VLTJS.window.on("mousemove", function (t) {
                    a = t.pageX - e.offset().left
                }), gsap.ticker.add(function () {
                    gsap.set(t, {
                        x: a * u,
                        ease: "power3.out"
                    }), gsap.set(n, {
                        right: a * c,
                        ease: "power3.out"
                    })
                }))
            }
        }, VLTJS.projectShowcase.initSlider(), VLTJS.projectShowcase.initParallax(), VLTJS.debounceResize(function () {
            VLTJS.projectShowcase.initParallax()
        })
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.testimonialSlider = {
            init: function () {
                "undefined" != typeof Swiper && t(".vlt-testimonial-slider .swiper-container").each(function () {
                    t(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'), new Swiper(this, {
                        speed: 1e3,
                        spaceBetween: 30,
                        grabCursor: !0,
                        effect: "coverflow",
                        slidesPerView: 1,
                        navigation: {
                            nextEl: t(".vlt-testimonial-slider-controls .next"),
                            prevEl: t(".vlt-testimonial-slider-controls .prev")
                        },
                        pagination: {
                            el: t(".vlt-testimonial-slider-controls .pagination"),
                            clickable: !1,
                            type: "fraction",
                            renderFraction: function (t, e) {
                                return '<span class="' + t + '"></span><span class="sep">/</span><span class="' + e + '"></span>'
                            }
                        }
                    })
                })
            }
        }, VLTJS.testimonialSlider.init()
    }(jQuery),
    function (t) {
        "use strict";
        VLTJS.timelineSlider = {
            init: function () {
                "undefined" != typeof Swiper && t(".vlt-timeline-slider .swiper-container").each(function () {
                    t(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'), new Swiper(this, {
                        speed: 1e3,
                        spaceBetween: 0,
                        grabCursor: !0,
                        slidesPerView: 1,
                        navigation: {
                            nextEl: t(".vlt-timeline-slider-controls .next"),
                            prevEl: t(".vlt-timeline-slider-controls .prev")
                        },
                        pagination: {
                            el: t(".vlt-timeline-slider-controls .pagination"),
                            clickable: !1,
                            type: "fraction",
                            renderFraction: function (t, e) {
                                return '<span class="' + t + '"></span><span class="sep">/</span><span class="' + e + '"></span>'
                            }
                        }
                    })
                })
            }
        }, VLTJS.timelineSlider.init()
    }(jQuery);