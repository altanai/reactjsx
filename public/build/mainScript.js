/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.3",
      m = function (a, b) {
    return new m.fn.init(a, b);
  },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function (a, b) {
    return b.toUpperCase();
  };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
      return d.call(this);
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function (a) {
      var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function (a, b) {
      return m.each(this, a, b);
    }, map: function (a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function () {
      return this.pushStack(d.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function () {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));return g;
  }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a);
    }, noop: function () {}, isFunction: function (a) {
      return "function" === m.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === m.type(a);
    }, isWindow: function (a) {
      return null != a && a == a.window;
    }, isNumeric: function (a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
    }, isEmptyObject: function (a) {
      var b;for (b in a) return !1;return !0;
    }, isPlainObject: function (a) {
      var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (k.ownLast) for (b in a) return j.call(a, b);for (b in a);return void 0 === b || j.call(a, b);
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
    }, globalEval: function (b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function (a) {
      return a.replace(o, "ms-").replace(p, q);
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function (a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = r(a);if (c) {
        if (g) {
          for (; f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
        } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
      } else if (g) {
        for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
      } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;return a;
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(n, "");
    }, makeArray: function (a, b) {
      var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function (a, b, c) {
      var d;if (b) {
        if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
      }return -1;
    }, merge: function (a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) a[e++] = b[d++];if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];return a.length = e, a;
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function (a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
    }, guid: 1, proxy: function (a, b) {
      var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    }, now: function () {
      return +new Date();
    }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function r(a) {
    var b = "length" in a && a.length,
        c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var s = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function (a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function (a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ea = function () {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) d.attrHandle[c[e]] = b;
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function (a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function (a) {
          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function (a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [w, n, m];break;
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function (a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function (b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function (a) {
          return a === o;
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function (a) {
          return a.disabled === !1;
        }, disabled: function (a) {
          return a.disabled === !0;
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
        }, parent: function (a) {
          return !d.pseudos.empty(a);
        }, header: function (a) {
          return Z.test(a.nodeName);
        }, input: function (a) {
          return Y.test(a.nodeName);
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function (a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: oa(function () {
          return [0];
        }), last: oa(function (a, b) {
          return [b - 1];
        }), eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);return a;
        }), odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);return a;
        }), lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
    }function sa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
        }
      };
    }function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
    }function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
    }function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
        return a === b;
      }, h, !0), l = sa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
        }m.push(c);
      }return ta(m);
    }function ya(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) if (o(l, g, h)) {
              i.push(l);break;
            }k && (w = v);
          }c && ((l = !o && l) && p--, f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) o(r, s, g, h);if (f) {
            if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
          }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
    }return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }m.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({ find: function (a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
        for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
      }));for (b = 0; e > b; b++) m.find(a, d[b], c);return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function (a) {
      return this.pushStack(w(this, a || [], !1));
    }, not: function (a) {
      return this.pushStack(w(this, a || [], !0));
    }, is: function (a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    } });var x,
      y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
      }if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
      }return this.context = y, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function (a, b, c) {
      var d = [],
          e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];return d;
    }, sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
    } }), m.fn.extend({ has: function (a) {
      var b,
          c = m(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
      });
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? m.unique(f) : f);
    }, index: function (a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);return a;
  }m.each({ parent: function (a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function (a) {
      return m.dir(a, "parentNode");
    }, parentsUntil: function (a, b, c) {
      return m.dir(a, "parentNode", c);
    }, next: function (a) {
      return D(a, "nextSibling");
    }, prev: function (a) {
      return D(a, "previousSibling");
    }, nextAll: function (a) {
      return m.dir(a, "nextSibling");
    }, prevAll: function (a) {
      return m.dir(a, "previousSibling");
    }, nextUntil: function (a, b, c) {
      return m.dir(a, "nextSibling", c);
    }, prevUntil: function (a, b, c) {
      return m.dir(a, "previousSibling", c);
    }, siblings: function (a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    }, children: function (a) {
      return m.sibling(a.firstChild);
    }, contents: function (a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    } }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function (l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
        c = !1;break;
      }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    },
        k = { add: function () {
        if (h) {
          var d = h.length;!function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }return this;
      }, remove: function () {
        return h && m.each(arguments, function (a, c) {
          var d;while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
        }), this;
      }, has: function (a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function () {
        return h = [], e = 0, this;
      }, disable: function () {
        return h = i = c = void 0, this;
      }, disabled: function () {
        return !h;
      }, lock: function () {
        return i = void 0, c || k.disable(), this;
      }, locked: function () {
        return !i;
      }, fireWith: function (a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      }, fire: function () {
        return k.fireWith(this, arguments), this;
      }, fired: function () {
        return !!d;
      } };return k;
  }, m.extend({ Deferred: function (a) {
      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
          c = "pending",
          d = { state: function () {
          return c;
        }, always: function () {
          return e.done(arguments).fail(arguments), this;
        }, then: function () {
          var a = arguments;return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function (a) {
          return null != a ? m.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function (a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return f || g.resolveWith(k, c), g.promise();
    } });var H;m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? m.readyWait++ : m.ready(!0);
    }, ready: function (a) {
      if (a === !0 ? ! --m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
      }
    } });function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
  }m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {}c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left");
          } catch (a) {
            return setTimeout(e, 50);
          }I(), m.ready();
        }
      }();
    }return H.promise(b);
  };var K = "undefined",
      L;for (L in m(k)) break;k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement("div");if (null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {}m.data(a, b, c);
      } else c = void 0;
    }return c;
  }function P(a) {
    var b;for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

    return !0;
  }function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
          g,
          h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) delete d[b[e]];if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    }, data: function (a, b, c) {
      return Q(a, b, c);
    }, removeData: function (a, b) {
      return R(a, b);
    }, _data: function (a, b, c) {
      return Q(a, b, c, !0);
    }, _removeData: function (a, b) {
      return R(a, b, !0);
    } }), m.fn.extend({ data: function (a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));m._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    }, removeData: function (a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    } }), m.extend({ queue: function (a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function (a, b) {
      b = b || "fx";var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
        m.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
          m._removeData(a, b + "queue"), m._removeData(a, c);
        }) });
    } }), m.fn.extend({ queue: function (a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
      });
    }, dequeue: function (a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    }, clearQueue: function (a) {
      return this.queue(a || "fx", []);
    }, promise: function (a, b) {
      var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function (a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
  },
      V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === m.type(c)) {
      e = !0;for (h in c) m.access(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(m(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      W = /^(?:checkbox|radio)$/i;!function () {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b,
        c,
        d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);d = null;
  }();var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;function aa() {
    return !0;
  }function ba() {
    return !1;
  }function ca() {
    try {
      return y.activeElement;
    } catch (a) {}
  }m.event = { global: {}, add: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);a = null;
      }
    }, remove: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
        } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    }, trigger: function (b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;try {
            d[p]();
          } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
        }return b.result;
      }
    }, dispatch: function (a) {
      a = m.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function (a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);e.length && g.push({ elem: i, handlers: e });
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function (a) {
      if (a[m.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c,
            d,
            e,
            f = b.button,
            g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          if (this !== ca() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function (a) {
          return m.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = { isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba, preventDefault: function () {
      var a = this.originalEvent;this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function () {
      var a = this.originalEvent;this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function () {
      var a = this.originalEvent;this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.submitBubbles || (m.event.special.submit = { setup: function () {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), m._data(c, "submitBubbles", !0));
      });
    }, postDispatch: function (a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
    }, teardown: function () {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
    } }), k.changeBubbles || (m.event.special.change = { setup: function () {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, "click._change", function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
        }), m._data(b, "changeBubbles", !0));
      });
    }, handle: function (a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function () {
      return m.event.remove(this, "._change"), !X.test(this.nodeName);
    } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function (a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };m.event.special[b] = { setup: function () {
        var d = this.ownerDocument || this,
            e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      }, teardown: function () {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      } };
  }), m.fn.extend({ on: function (a, b, c, d, e) {
      var f, g;if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);for (f in a) this.on(f, b, c, a[f], e);return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;else if (!d) return this;return 1 === e && (g = d, d = function (a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    }, one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function (a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    }, trigger: function (a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    }, triggerHandler: function (a, b) {
      var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
    } });function da(a) {
    var b = ea.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) c.createElement(b.pop());return c;
  }var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fa = / jQuery\d+="(?:null|\d+)"/g,
      ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
      ha = /^\s+/,
      ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ja = /<([\w:]+)/,
      ka = /<tbody/i,
      la = /<|&#?\w+;/,
      ma = /<(?:script|style|link)/i,
      na = /checked\s*(?:[^=]|=\s*.checked.)/i,
      oa = /^$|\/(?:java|ecma)script/i,
      pa = /^true\/(.*)/,
      qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ra = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      sa = da(y),
      ta = sa.appendChild(y.createElement("div"));ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;function ua(a, b) {
    var c,
        d,
        e = 0,
        f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }function wa(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function xa(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
  }function ya(a) {
    var b = pa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
          d,
          e,
          f = m._data(a),
          g = m._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }g.data && (g.data = m.extend({}, g.data));
    }
  }function Ba(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);for (d in e.events) m.removeEvent(b, d, e.handle);b.removeAttribute(m.expando);
      }"script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }m.extend({ clone: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);else Aa(a, f);return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f;
    }, buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (la.test(f)) {
        h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];while (e--) h = h.lastChild;if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
          f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
        }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) h.removeChild(h.firstChild);h = o.lastChild;
      } else p.push(b.createTextNode(f));h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
        e = 0;while (f = h[e++]) oa.test(f.type || "") && c.push(f);
      }return h = null, o;
    }, cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
        if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
      }
    } }), m.fn.extend({ text: function (a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function (a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));return this;
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ua(a, !1));while (a.firstChild) a.removeChild(a.firstChild);a.options && m.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    }, html: function (a) {
      return V(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ia, "<$1></$2>");try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function () {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function (a) {
      return this.remove(a, !0);
    }, domManip: function (a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
        var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));i = c = null;
      }return this;
    } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());return this.pushStack(e);
    };
  });var Ca,
      Da = {};function Ea(b, c) {
    var d,
        e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
  }function Fa(a) {
    var b = y,
        c = Da[a];return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c;
  }!function () {
    var a;k.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();var Ga = /^margin/,
      Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ia,
      Ja,
      Ka = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ia = function (b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  }, Ja = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : y.documentElement.currentStyle && (Ia = function (a) {
    return a.currentStyle;
  }, Ja = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function La(a, b) {
    return { get: function () {
        var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () {
          return null == g && i(), g;
        }, boxSizingReliable: function () {
          return null == f && i(), f;
        }, pixelPosition: function () {
          return null == e && i(), e;
        }, reliableMarginRight: function () {
          return null == h && i(), h;
        } });function i() {
        var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
      }
    }
  }(), m.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  };var Ma = /alpha\([^)]*\)/i,
      Na = /opacity\s*=\s*([^)]*)/,
      Oa = /^(none|table(?!-c[ea]).+)/,
      Pa = new RegExp("^(" + S + ")(.*)$", "i"),
      Qa = new RegExp("^([+-])=(" + S + ")", "i"),
      Ra = { position: "absolute", visibility: "hidden", display: "block" },
      Sa = { letterSpacing: "0", fontWeight: "400" },
      Ta = ["Webkit", "O", "Moz", "ms"];function Ua(a, b) {
    if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Ta.length;while (e--) if (b = Ta[e] + c, b in a) return b;return d;
  }function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
  }function Wa(a, b, c) {
    var d = Pa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Xa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));return g;
  }function Ya(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ia(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }m.extend({ cssHooks: { opacity: { get: function (a, b) {
          if (b) {
            var c = Ja(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = m.camelCase(b),
            i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function (a, b, c, d) {
      var e,
          f,
          g,
          h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    } }), m.each(["height", "width"], function (a, b) {
    m.cssHooks[b] = { get: function (a, c, d) {
        return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
          return Ya(a, b, d);
        }) : Ya(a, b, d) : void 0;
      }, set: function (a, c, d) {
        var e = d && Ia(a);return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) {
      return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function (a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
    } }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"]) : void 0;
  }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    m.cssHooks[a + b] = { expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
  }), m.fn.extend({ css: function (a, b) {
      return V(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (m.isArray(b)) {
          for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function () {
      return Va(this, !0);
    }, hide: function () {
      return Va(this);
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    } });function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e);
  }m.Tween = Za, Za.prototype = { constructor: Za, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
    }, cur: function () {
      var a = Za.propHooks[this.prop];return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
    }, run: function (a) {
      var b,
          c = Za.propHooks[this.prop];return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
    } }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = { _default: { get: function (a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function (a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = { set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, m.easing = { linear: function (a) {
      return a;
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, m.fx = Za.prototype.init, m.fx.step = {};var $a,
      _a,
      ab = /^(?:toggle|show|hide)$/,
      bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cb = /queueHooks$/,
      db = [ib],
      eb = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = bb.exec(b),
          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
          g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function fb() {
    return setTimeout(function () {
      $a = void 0;
    }), $a = m.now();
  }function gb(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;return b && (d.opacity = d.width = a), d;
  }function hb(a, b, c) {
    for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) if (e = b[d], ab.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
        if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
      }o[d] = r && r[d] || m.style(a, d);
    } else j = void 0;if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;m._removeData(a, "fxshow");for (b in o) m.style(a, b, o[b]);
      });for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = db.length,
        h = m.Deferred().always(function () {
      delete i.elem;
    }),
        i = function () {
      if (e) return !1;for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $a || fb(), duration: c.duration, tweens: [], createTween: function (b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function (b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d;return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }m.Animation = m.extend(kb, { tweener: function (a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
    }, prefilter: function (a, b) {
      b ? db.unshift(a) : db.push(a);
    } }), m.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({ fadeTo: function (a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function (a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
        var b = kb(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && m.dequeue(this, a);
      });
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), m.each(["toggle", "show", "hide"], function (a, b) {
    var c = m.fn[b];m.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), m.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a,
        b = m.timers,
        c = 0;for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);b.length || m.fx.stop(), $a = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _a || (_a = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_a), _a = null;
  }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
  }();var lb = /\r/g;m.fn.extend({ val: function (a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
      }
    } }), m.extend({ valHooks: { option: { get: function (a) {
          var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
        } }, select: { get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
            if (b = m(c).val(), f) return b;g.push(b);
          }return g;
        }, set: function (a, b) {
          var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
            d.selected = c = !0;
          } catch (h) {
            d.scrollHeight;
          } else d.selected = !1;return c || (a.selectedIndex = -1), e;
        } } } }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = { set: function (a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var mb,
      nb,
      ob = m.expr.attrHandle,
      pb = /^(?:checked|selected)$/i,
      qb = k.getSetAttribute,
      rb = k.input;m.fn.extend({ attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    }, removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    } }), m.extend({ attr: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
    }, removeAttr: function (a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d);
    }, attrHooks: { type: { set: function (a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), nb = { set: function (a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
    } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ob[b] || m.find.attr;ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
      var e, f;return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), rb && qb || (m.attrHooks.value = { set: function (a, b, c) {
      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
    } }), qb || (mb = { set: function (a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, ob.id = ob.name = ob.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, m.valHooks.button = { get: function (a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: mb.set }, m.attrHooks.contenteditable = { set: function (a, b, c) {
      mb.set(a, "" === b ? !1 : b, c);
    } }, m.each(["width", "height"], function (a, b) {
    m.attrHooks[b] = { set: function (a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), k.style || (m.attrHooks.style = { get: function (a) {
      return a.style.cssText || void 0;
    }, set: function (a, b) {
      return a.style.cssText = b + "";
    } });var sb = /^(?:input|select|textarea|button|object)$/i,
      tb = /^(?:a|area)$/i;m.fn.extend({ prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    }, removeProp: function (a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function (a) {
          var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
        } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
    m.propHooks[b] = { get: function (a) {
        return a.getAttribute(b, 4);
      } };
  }), k.optSelected || (m.propHooks.selected = { get: function (a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = "encoding");var ub = /[\t\r\n\f]/g;m.fn.extend({ addClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
        f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = m.trim(d), c.className !== g && (c.className = g);
      }return this;
    }, removeClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
        f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
      }return this;
    }, toggleClass: function (a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = m(this),
              f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
      });
    }, hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;return !1;
    } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({ hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function (a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function (a, b) {
      return this.off(a, null, b);
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var vb = m.now(),
      wb = /\?/,
      xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = m.trim(b + "");return e && !m.trim(e.replace(xb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
  }, m.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
  };var yb,
      zb,
      Ab = /#.*$/,
      Bb = /([?&])_=[^&]*/,
      Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Eb = /^(?:GET|HEAD)$/,
      Fb = /^\/\//,
      Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hb = {},
      Ib = {},
      Jb = "*/".concat("*");try {
    zb = location.href;
  } catch (Kb) {
    zb = y.createElement("a"), zb.href = "", zb = zb.href;
  }yb = Gb.exec(zb.toLowerCase()) || [];function Lb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function Mb(a, b, c, d) {
    var e = {},
        f = a === Ib;function g(h) {
      var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Nb(a, b) {
    var c,
        d,
        e = m.ajaxSettings.flatOptions || {};for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);return c && m.extend(!0, a, c), a;
  }function Ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));if (e) for (g in h) if (h[g] && h[g].test(e)) {
      i.unshift(g);break;
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Pb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
      }
    }return { state: "success", data: b };
  }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zb, type: "GET", isLocal: Db.test(yb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
    }, ajaxPrefilter: Lb(Hb), ajaxTransport: Lb(Ib), ajax: function (a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function (a) {
          var b;if (2 === t) {
            if (!j) {
              j = {};while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2];
            }b = j[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function () {
          return 2 === t ? f : null;
        }, setRequestHeader: function (a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function (a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function (a) {
          var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
        }, abort: function (a) {
          var b = a || u;return i && i.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) v.setRequestHeader(d, k.headers[d]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);if (i = Mb(Ib, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, c, d) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function (a, b, c) {
      return m.get(a, b, c, "json");
    }, getScript: function (a, b) {
      return m.get(a, void 0, b, "script");
    } }), m.each(["get", "post"], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), m._evalUrl = function (a) {
    return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, m.fn.extend({ wrapAll: function (a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;return a;
        }).append(this);
      }return this;
    }, wrapInner: function (a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function (a) {
      var b = m.isFunction(a);return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
      }).end();
    } }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };var Qb = /%20/g,
      Rb = /\[\]$/,
      Sb = /\r?\n/g,
      Tb = /^(?:submit|button|image|reset|file)$/i,
      Ub = /^(?:input|select|textarea|keygen)/i;function Vb(a, b, c, d) {
    var e;if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
  }m.param = function (a, b) {
    var c,
        d = [],
        e = function (a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Vb(c, a[c], b, e);return d.join("&").replace(Qb, "+");
  }, m.fn.extend({ serialize: function () {
      return m.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return { name: b.name, value: a.replace(Sb, "\r\n") };
        }) : { name: b.name, value: c.replace(Sb, "\r\n") };
      }).get();
    } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
  } : Zb;var Wb = 0,
      Xb = {},
      Yb = m.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Xb) Xb[a](void 0, !0);
  }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var b;return { send: function (c, d) {
          var e,
              f = a.xhr(),
              g = ++Wb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");f.send(a.hasContent && a.data || null), b = function (c, e) {
            var h, i, j;if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                i = f.statusText;
              } catch (k) {
                i = "";
              }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b();
        }, abort: function () {
          b && b(void 0, !0);
        } };
    }
  });function Zb() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function $b() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) {
        return m.globalEval(a), a;
      } } }), m.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), m.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = y.head || m("head")[0] || y.documentElement;return { send: function (d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function () {
          b && b.onload(void 0, !0);
        } };
    }
  });var _b = [],
      ac = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var a = _b.pop() || m.expando + "_" + vb++;return this[a] = !0, a;
    } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || m.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };var bc = m.fn.load;m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };var cc = a.document.documentElement;function dc(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }m.offset = { setOffset: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.css(a, "position"),
          l = m(a),
          n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
    } }, m.fn.extend({ offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function () {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || cc;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;return a || cc;
      });
    } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(["top", "left"], function (a, b) {
    m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
      return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
    });
  }), m.each({ Height: "height", Width: "width" }, function (a, b) {
    m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
          var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return m;
  });var ec = a.jQuery,
      fc = a.$;return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
  }, typeof b === K && (a.jQuery = a.$ = m), m;
});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function () {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function (b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.5", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function (c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function (b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function () {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function (a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) if (this.inState[a]) return !0;return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide());
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function () {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function (a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
        g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do a += ~ ~(1e6 * Math.random()); while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function (a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.5", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function (b) {
    this.element = a(b);
  };c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function (c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function () {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeBind = FuncProto.bind,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function () {};

  // Create a safe reference to the Underscore object for use below.
  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function (func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      case 2:
        return function (value, other) {
          return func.call(context, value, other);
        };
      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
    return function () {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function (value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function (value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function (keysFunc, undefinedOnly) {
    return function (obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function (prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
  };

  var property = function (key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function (collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function (obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function (obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function (obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function (value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function (obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function (obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function (value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function (obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function (obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function (obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function (obj, iteratee, context) {
    var result = -Infinity,
        lastComputed = -Infinity,
        value,
        computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function (obj, iteratee, context) {
    var result = Infinity,
        lastComputed = Infinity,
        value,
        computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function (obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function (obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function (value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function (left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function (behavior) {
    return function (obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function (value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function (result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function (result, value, key) {
    if (_.has(result, key)) result[key]++;else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function (obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [],
        fail = [];
    _.each(obj, function (value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function (array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function (array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function (array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function (input, shallow, strict, startIndex) {
    var output = [],
        idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0,
            len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function (array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function (array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function () {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function (array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function (array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function (value) {
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function () {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function (array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function (list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function (array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function (array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0,
        high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function (array, item, idx) {
      var i = 0,
          length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function (start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function (func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function () {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function (func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function () {
      var position = 0,
          length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function (obj) {
    var i,
        length = arguments.length,
        key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function (func, hasher) {
    var memoize = function (key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function () {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function (func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function (predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function (times, func) {
    return function () {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function (times, func) {
    var memo;
    return function () {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function (obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {},
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function (obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function (obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function (obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj),
        key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function (object, oiteratee, context) {
    var result = {},
        obj = object,
        iteratee,
        keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function (value, key, obj) {
        return key in obj;
      };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

  // Return a copy of the object without the blacklisted properties.
  _.omit = function (obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function (value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function (prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function (obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function (obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function (object, attrs) {
    var keys = _.keys(attrs),
        length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function (a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor,
          bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a),
          key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function (a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function (obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function (obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
    _['is' + name] = function (obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function (obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function (obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function (obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function (obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function (obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function (obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function (obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function () {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function (value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function (value) {
    return function () {
      return value;
    };
  };

  _.noop = function () {};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function (obj) {
    return obj == null ? function () {} : function (key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function (attrs) {
    attrs = _.extendOwn({}, attrs);
    return function (obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function (n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function (min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function () {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function (map) {
    var escaper = function (match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function (object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function (prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function (match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function (data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function (obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function (instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function (name) {
    var method = ArrayProto[name];
    _.prototype[name] = function () {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function () {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function () {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function () {
      return _;
    });
  }
}).call(this);
//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function (factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self == self && self || typeof global == 'object' && global.global == global && global;

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function (_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

    // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
      var _ = require('underscore'),
          $;
      try {
        $ = require('jquery');
      } catch (e) {}
      factory(root, exports, _, $);

      // Finally, as a browser global.
    } else {
        root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
      }
})(function (root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function () {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function (length, method, attribute) {
    switch (length) {
      case 1:
        return function () {
          return _[method](this[attribute]);
        };
      case 2:
        return function (value) {
          return _[method](this[attribute], value);
        };
      case 3:
        return function (iteratee, context) {
          return _[method](this[attribute], cb(iteratee, this), context);
        };
      case 4:
        return function (iteratee, defaultVal, context) {
          return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
        };
      default:
        return function () {
          var args = slice.call(arguments);
          args.unshift(this[attribute]);
          return _[method].apply(_, args);
        };
    }
  };
  var addUnderscoreMethods = function (Class, methods, attribute) {
    _.each(methods, function (length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function (iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function (model) {
      return model.get(iteratee);
    };
    return iteratee;
  };
  var modelMatcher = function (attrs) {
    var matcher = _.matches(attrs);
    return function (model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function (iteratee, events, name, callback, opts) {
    var i = 0,
        names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function (name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function (obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
      context: context,
      ctx: obj,
      listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo = function (obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function (events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context,
          ctx = options.ctx,
          listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off = function (name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening = function (obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function (events, name, callback, options) {
    if (!events) return;

    var i = 0,
        listening;
    var context = options.context,
        listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once = function (name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce = function (obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function (map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function () {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger = function (name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function (objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function (events, args) {
    var ev,
        i = -1,
        l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];
    switch (args.length) {
      case 0:
        while (++i < l) (ev = events[i]).callback.call(ev.ctx);return;
      case 1:
        while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);return;
      case 2:
        while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);return;
      case 3:
        while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);return;
      default:
        while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function (attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {},

    // Return a copy of the model's `attributes` object.
    toJSON: function (options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function () {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function (attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function (attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function (attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function (attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function (key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset = options.unset;
      var silent = options.silent;
      var changes = [];
      var changing = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function (attr, options) {
      return this.set(attr, void 0, _.extend({}, options, { unset: true }));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function (options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, { unset: true }));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function (attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function (diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function (attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function () {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function (options) {
      options = _.extend({ parse: true }, options);
      var model = this;
      var success = options.success;
      options.success = function (resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function (key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({ validate: true, parse: true }, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function (resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function (options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function () {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function (resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function () {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function (resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function () {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function () {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function (options) {
      return this._validate({}, _.defaults({ validate: true }, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function (attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
    omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function (models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({ silent: true }, options));
  };

  // Default options for `Collection#set`.
  var setOptions = { add: true, remove: true, merge: true };
  var addOptions = { add: true, remove: false };

  // Splices `insert` into `array` at index `at`.
  var splice = function (array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function (options) {
      return this.map(function (model) {
        return model.toJSON(options);
      });
    },

    // Proxy `Backbone.sync` by default.
    sync: function () {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function (models, options) {
      return this.set(models, _.extend({ merge: false }, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function (models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function (models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

          // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
            model = models[i] = this._prepareModel(model, options);
            if (model) {
              toAdd.push(model);
              this._addReference(model, options);
              modelMap[model.cid] = true;
              set.push(model);
            }
          }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function (model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({ silent: true });

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function (models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({ silent: true }, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function (model, options) {
      return this.add(model, _.extend({ at: this.length }, options));
    },

    // Remove a model from the end of the collection.
    pop: function (options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function (model, options) {
      return this.add(model, _.extend({ at: 0 }, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function (options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function () {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function (obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function (index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function (attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function (attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function (options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function (attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function (options) {
      options = _.extend({ parse: true }, options);
      var success = options.success;
      var collection = this;
      options.success = function (resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function (model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function (model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function (resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function () {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function () {
      this.length = 0;
      this.models = [];
      this._byId = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function (attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function (models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function (model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function (model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function (event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
    foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
    select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
    contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
    head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
    without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
    isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
    sortBy: 3, indexBy: 3 };

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function (options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function (selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function () {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function () {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function () {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function (element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function (el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function (events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function (eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function () {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function (eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function (tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function () {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function (attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function (method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = { type: type, dataType: 'json' };

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? { model: params.data } : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function (xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function (xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch': 'PATCH',
    'delete': 'DELETE',
    'read': 'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function () {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function (options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam = /(\(\?)?:\w+/g;
  var splatParam = /\*\w+/g;
  var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function () {},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function (route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function (fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function (callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function (fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function () {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route,
          routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function (route) {
      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
        return optional ? match : '([^/?]+)';
      }).replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function (route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function (param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function () {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function () {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function () {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function (fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function () {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function (window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function () {
      var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function (fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function (options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options = _.extend({ root: '/' }, this.options, options);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.history && this.history.pushState);
      this._usePushState = this._wantsPushState && this._hasPushState;
      this.fragment = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

          // Or if we've started out with a hash-based route, but we're currently
          // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
            this.navigate(this.getHash(), { replace: true });
          }
      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function () {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function (route, callback) {
      this.handlers.unshift({ route: route, callback: callback });
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function (e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function (fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function (handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function (fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = { trigger: !!options };

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

        // If hash changes haven't been explicitly disabled, update the hash
        // fragment to store history.
      } else if (this._wantsHashChange) {
          this._updateHash(this.location, fragment, options.replace);
          if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
            var iWindow = this.iframe.contentWindow;

            // Opening and closing the iframe tricks IE7 and earlier to push a
            // history entry on hash-tag change.  When replace is true, we don't
            // want this.
            if (!options.replace) {
              iWindow.document.open();
              iWindow.document.close();
            }

            this._updateHash(iWindow.location, fragment, options.replace);
          }

          // If you've told us that you explicitly don't want fallback hashchange-
          // based history, then `navigate` becomes a page refresh.
        } else {
            return this.location.assign(url);
          }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function (location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History();

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function (protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function () {
        return parent.apply(this, arguments);
      };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function () {
      this.constructor = child;
    };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function () {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function (model, options) {
    var error = options.error;
    options.error = function (resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;
});
/**
  * React v0.14.7
  */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.React=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s;}({1:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */'use strict';var ReactDOM=_dereq_(35);var ReactDOMServer=_dereq_(45);var ReactIsomorphic=_dereq_(63);var assign=_dereq_(23);var deprecated=_dereq_(106); // `version` will be added here by ReactIsomorphic.
var React={};assign(React,ReactIsomorphic);assign(React,{ // ReactDOM
findDOMNode:deprecated('findDOMNode','ReactDOM','react-dom',ReactDOM,ReactDOM.findDOMNode),render:deprecated('render','ReactDOM','react-dom',ReactDOM,ReactDOM.render),unmountComponentAtNode:deprecated('unmountComponentAtNode','ReactDOM','react-dom',ReactDOM,ReactDOM.unmountComponentAtNode), // ReactDOMServer
renderToString:deprecated('renderToString','ReactDOMServer','react-dom/server',ReactDOMServer,ReactDOMServer.renderToString),renderToStaticMarkup:deprecated('renderToStaticMarkup','ReactDOMServer','react-dom/server',ReactDOMServer,ReactDOMServer.renderToStaticMarkup)});React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ReactDOM;React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ReactDOMServer;module.exports=React;},{"106":106,"23":23,"35":35,"45":45,"63":63}],2:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 * @typechecks static-only
 */'use strict';var ReactMount=_dereq_(65);var findDOMNode=_dereq_(108);var focusNode=_dereq_(138);var Mixin={componentDidMount:function(){if(this.props.autoFocus){focusNode(findDOMNode(this));}}};var AutoFocusUtils={Mixin:Mixin,focusDOMComponent:function(){focusNode(ReactMount.getNode(this._rootNodeID));}};module.exports=AutoFocusUtils;},{"108":108,"138":138,"65":65}],3:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(19);var ExecutionEnvironment=_dereq_(130);var FallbackCompositionState=_dereq_(20);var SyntheticCompositionEvent=_dereq_(90);var SyntheticInputEvent=_dereq_(94);var keyOf=_dereq_(148);var END_KEYCODES=[9,13,27,32]; // Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent' in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode' in document){documentMode=document.documentMode;} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent' in window&&!documentMode&&!isPresto(); // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11); /**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return typeof opera==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);var topLevelTypes=EventConstants.topLevelTypes; // Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}}; // Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false; /**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return (nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&& // ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);} /**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate;}} /**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType===topLevelTypes.topKeyDown&&nativeEvent.keyCode===START_KEYCODE;} /**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topKeyUp: // Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case topLevelTypes.topKeyDown: // Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur: // Events are not possible without cancelling IME.
return true;default:return false;}} /**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(typeof detail==='object'&&'data' in detail){return detail.data;}return null;} // Track the current IME composition fallback object, if any.
var currentComposition=null; /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){ // The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState.getPooled(topLevelTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,topLevelTargetID,nativeEvent,nativeEventTarget);if(fallbackData){ // Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else {var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topCompositionEnd:return getDataFromCustomEvent(nativeEvent);case topLevelTypes.topKeyPress: /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case topLevelTypes.topTextInput: // Record the characters to be added to the DOM.
var chars=nativeEvent.data; // If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default: // For other native event types, do nothing.
return null;}} /**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){ // If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
if(currentComposition){if(topLevelType===topLevelTypes.topCompositionEnd||isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case topLevelTypes.topPaste: // If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case topLevelTypes.topKeyPress: /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case topLevelTypes.topCompositionEnd:return useFallbackCompositionData?null:nativeEvent.data;default:return null;}} /**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else {chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);} // If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,topLevelTargetID,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){return [extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget)];}};module.exports=BeforeInputEventPlugin;},{"130":130,"148":148,"15":15,"19":19,"20":20,"90":90,"94":94}],4:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */'use strict'; /**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true, // SVG-related properties
fillOpacity:true,stopOpacity:true,strokeDashoffset:true,strokeOpacity:true,strokeWidth:true}; /**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);} /**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});}); /**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;},{}],5:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */'use strict';var CSSProperty=_dereq_(4);var ExecutionEnvironment=_dereq_(130);var ReactPerf=_dereq_(71);var camelizeStyleName=_dereq_(132);var dangerousStyleValue=_dereq_(105);var hyphenateStyleName=_dereq_(143);var memoizeStringOnly=_dereq_(150);var warning=_dereq_(155);var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var hasShorthandPropertyBug=false;var styleFloatAccessor='cssFloat';if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{ // IE8 throws "Invalid argument." if resetting shorthand style properties.
tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;} // IE8 only supports accessing cssFloat (standard) as styleFloat
if(document.documentElement.style.cssFloat===undefined){styleFloatAccessor='styleFloat';}}if("development"!=='production'){ // 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnHyphenatedStyleName=function(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported style property %s. Did you mean %s?',name,camelizeStyleName(name)):undefined;};var warnBadVendoredStyleName=function(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?',name,name.charAt(0).toUpperCase()+name.slice(1)):undefined;};var warnStyleValueWithSemicolon=function(name,value){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;"development"!=='production'?warning(false,'Style property values shouldn\'t contain a semicolon. '+'Try "%s: %s" instead.',name,value.replace(badStyleValueWithSemicolonPattern,'')):undefined;}; /**
   * @param {string} name
   * @param {*} value
   */var warnValidStyle=function(name,value){if(name.indexOf('-')>-1){warnHyphenatedStyleName(name);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value);}};} /**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={ /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */createMarkupForStyles:function(styles){var serialized='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if("development"!=='production'){warnValidStyle(styleName,styleValue);}if(styleValue!=null){serialized+=processStyleName(styleName)+':';serialized+=dangerousStyleValue(styleName,styleValue)+';';}}return serialized||null;}, /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */setValueForStyles:function(node,styles){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}if("development"!=='production'){warnValidStyle(styleName,styles[styleName]);}var styleValue=dangerousStyleValue(styleName,styles[styleName]);if(styleName==='float'){styleName=styleFloatAccessor;}if(styleValue){style[styleName]=styleValue;}else {var expansion=hasShorthandPropertyBug&&CSSProperty.shorthandPropertyExpansions[styleName];if(expansion){ // Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion){style[individualStyleName]='';}}else {style[styleName]='';}}}}};ReactPerf.measureMethods(CSSPropertyOperations,'CSSPropertyOperations',{setValueForStyles:'setValueForStyles'});module.exports=CSSPropertyOperations;},{"105":105,"130":130,"132":132,"143":143,"150":150,"155":155,"4":4,"71":71}],6:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */'use strict';var PooledClass=_dereq_(24);var assign=_dereq_(23);var invariant=_dereq_(144); /**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */function CallbackQueue(){this._callbacks=null;this._contexts=null;}assign(CallbackQueue.prototype,{ /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */enqueue:function(callback,context){this._callbacks=this._callbacks||[];this._contexts=this._contexts||[];this._callbacks.push(callback);this._contexts.push(context);}, /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */notifyAll:function(){var callbacks=this._callbacks;var contexts=this._contexts;if(callbacks){!(callbacks.length===contexts.length)?"development"!=='production'?invariant(false,'Mismatched list of contexts in callback queue'):invariant(false):undefined;this._callbacks=null;this._contexts=null;for(var i=0;i<callbacks.length;i++){callbacks[i].call(contexts[i]);}callbacks.length=0;contexts.length=0;}}, /**
   * Resets the internal queue.
   *
   * @internal
   */reset:function(){this._callbacks=null;this._contexts=null;}, /**
   * `PooledClass` looks for this.
   */destructor:function(){this.reset();}});PooledClass.addPoolingTo(CallbackQueue);module.exports=CallbackQueue;},{"144":144,"23":23,"24":24}],7:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var EventPropagators=_dereq_(19);var ExecutionEnvironment=_dereq_(130);var ReactUpdates=_dereq_(83);var SyntheticEvent=_dereq_(92);var getEventTarget=_dereq_(114);var isEventSupported=_dereq_(119);var isTextInputElement=_dereq_(120);var keyOf=_dereq_(148);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}}; /**
 * For IE shims
 */var activeElement=null;var activeElementID=null;var activeElementValue=null;var activeElementValueProp=null; /**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}var doesChangeEventBubble=false;if(ExecutionEnvironment.canUseDOM){ // See `handleChange` comment below
doesChangeEventBubble=isEventSupported('change')&&(!('documentMode' in document)||document.documentMode>8);}function manualDispatchChangeEvent(nativeEvent){var event=SyntheticEvent.getPooled(eventTypes.change,activeElementID,nativeEvent,getEventTarget(nativeEvent));EventPropagators.accumulateTwoPhaseDispatches(event); // If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ReactUpdates.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub.enqueueEvents(event);EventPluginHub.processEventQueue(false);}function startWatchingForChangeEventIE8(target,targetID){activeElement=target;activeElementID=targetID;activeElement.attachEvent('onchange',manualDispatchChangeEvent);}function stopWatchingForChangeEventIE8(){if(!activeElement){return;}activeElement.detachEvent('onchange',manualDispatchChangeEvent);activeElement=null;activeElementID=null;}function getTargetIDForChangeEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topChange){return topLevelTargetID;}}function handleEventsForChangeEventIE8(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topFocus){ // stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(topLevelTarget,topLevelTargetID);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForChangeEventIE8();}} /**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){ // IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events
isInputEventSupported=isEventSupported('input')&&(!('documentMode' in document)||document.documentMode>9);} /**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */var newValueProp={get:function(){return activeElementValueProp.get.call(this);},set:function(val){ // Cast to a string so we can do equality checks.
activeElementValue=''+val;activeElementValueProp.set.call(this,val);}}; /**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetID){activeElement=target;activeElementID=targetID;activeElementValue=target.value;activeElementValueProp=Object.getOwnPropertyDescriptor(target.constructor.prototype,'value'); // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
// on DOM elements
Object.defineProperty(activeElement,'value',newValueProp);activeElement.attachEvent('onpropertychange',handlePropertyChange);} /**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;} // delete restores the original property definition
delete activeElement.value;activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementID=null;activeElementValue=null;activeElementValueProp=null;} /**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}var value=nativeEvent.srcElement.value;if(value===activeElementValue){return;}activeElementValue=value;manualDispatchChangeEvent(nativeEvent);} /**
 * If a `change` event should be fired, returns the target's ID.
 */function getTargetIDForInputEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topInput){ // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
// what we want so fall through here and trigger an abstract event
return topLevelTargetID;}} // For IE8 and IE9.
function handleEventsForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topFocus){ // In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(topLevelTarget,topLevelTargetID);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForValueChange();}} // For IE8 and IE9.
function getTargetIDForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topSelectionChange||topLevelType===topLevelTypes.topKeyUp||topLevelType===topLevelTypes.topKeyDown){ // On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
if(activeElement&&activeElement.value!==activeElementValue){activeElementValue=activeElement.value;return activeElementID;}}} /**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){ // Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
return elem.nodeName&&elem.nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetIDForClickEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topClick){return topLevelTargetID;}} /**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var getTargetIDFunc,handleEventFunc;if(shouldUseChangeEvent(topLevelTarget)){if(doesChangeEventBubble){getTargetIDFunc=getTargetIDForChangeEvent;}else {handleEventFunc=handleEventsForChangeEventIE8;}}else if(isTextInputElement(topLevelTarget)){if(isInputEventSupported){getTargetIDFunc=getTargetIDForInputEvent;}else {getTargetIDFunc=getTargetIDForInputEventIE;handleEventFunc=handleEventsForInputEventIE;}}else if(shouldUseClickEvent(topLevelTarget)){getTargetIDFunc=getTargetIDForClickEvent;}if(getTargetIDFunc){var targetID=getTargetIDFunc(topLevelType,topLevelTarget,topLevelTargetID);if(targetID){var event=SyntheticEvent.getPooled(eventTypes.change,targetID,nativeEvent,nativeEventTarget);event.type='change';EventPropagators.accumulateTwoPhaseDispatches(event);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,topLevelTarget,topLevelTargetID);}}};module.exports=ChangeEventPlugin;},{"114":114,"119":119,"120":120,"130":130,"148":148,"15":15,"16":16,"19":19,"83":83,"92":92}],8:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */'use strict';var nextReactRootIndex=0;var ClientReactRootIndex={createReactRootIndex:function(){return nextReactRootIndex++;}};module.exports=ClientReactRootIndex;},{}],9:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */'use strict';var Danger=_dereq_(12);var ReactMultiChildUpdateTypes=_dereq_(67);var ReactPerf=_dereq_(71);var setInnerHTML=_dereq_(124);var setTextContent=_dereq_(125);var invariant=_dereq_(144); /**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */function insertChildAt(parentNode,childNode,index){ // By exploiting arrays returning `undefined` for an undefined index, we can
// rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. However, using `undefined` is not allowed by all
// browsers so we must replace it with `null`.
// fix render order error in safari
// IE8 will throw error when index out of list size.
var beforeChild=index>=parentNode.childNodes.length?null:parentNode.childNodes.item(index);parentNode.insertBefore(childNode,beforeChild);} /**
 * Operations for updating with DOM children.
 */var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,updateTextContent:setTextContent, /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */processUpdates:function(updates,markupList){var update; // Mapping from parent IDs to initial child orderings.
var initialChildren=null; // List of children that will be moved or removed.
var updatedChildren=null;for(var i=0;i<updates.length;i++){update=updates[i];if(update.type===ReactMultiChildUpdateTypes.MOVE_EXISTING||update.type===ReactMultiChildUpdateTypes.REMOVE_NODE){var updatedIndex=update.fromIndex;var updatedChild=update.parentNode.childNodes[updatedIndex];var parentID=update.parentID;!updatedChild?"development"!=='production'?invariant(false,'processUpdates(): Unable to find child %s of element. This '+'probably means the DOM was unexpectedly mutated (e.g., by the '+'browser), usually due to forgetting a <tbody> when using tables, '+'nesting tags like <form>, <p>, or <a>, or using non-SVG elements '+'in an <svg> parent. Try inspecting the child nodes of the element '+'with React ID `%s`.',updatedIndex,parentID):invariant(false):undefined;initialChildren=initialChildren||{};initialChildren[parentID]=initialChildren[parentID]||[];initialChildren[parentID][updatedIndex]=updatedChild;updatedChildren=updatedChildren||[];updatedChildren.push(updatedChild);}}var renderedMarkup; // markupList is either a list of markup or just a list of elements
if(markupList.length&&typeof markupList[0]==='string'){renderedMarkup=Danger.dangerouslyRenderMarkup(markupList);}else {renderedMarkup=markupList;} // Remove updated children first so that `toIndex` is consistent.
if(updatedChildren){for(var j=0;j<updatedChildren.length;j++){updatedChildren[j].parentNode.removeChild(updatedChildren[j]);}}for(var k=0;k<updates.length;k++){update=updates[k];switch(update.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertChildAt(update.parentNode,renderedMarkup[update.markupIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:insertChildAt(update.parentNode,initialChildren[update.parentID][update.fromIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.SET_MARKUP:setInnerHTML(update.parentNode,update.content);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(update.parentNode,update.content);break;case ReactMultiChildUpdateTypes.REMOVE_NODE: // Already removed by the for-loop above.
break;}}}};ReactPerf.measureMethods(DOMChildrenOperations,'DOMChildrenOperations',{updateTextContent:'updateTextContent'});module.exports=DOMChildrenOperations;},{"12":12,"124":124,"125":125,"144":144,"67":67,"71":71}],10:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(144);function checkMask(value,bitmask){return (value&bitmask)===bitmask;}var DOMPropertyInjection={ /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_ATTRIBUTE:0x1,MUST_USE_PROPERTY:0x2,HAS_SIDE_EFFECTS:0x4,HAS_BOOLEAN_VALUE:0x8,HAS_NUMERIC_VALUE:0x10,HAS_POSITIVE_NUMERIC_VALUE:0x20|0x10,HAS_OVERLOADED_BOOLEAN_VALUE:0x40, /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?"development"!=='production'?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property '+'\'%s\' which has already been injected. You may be accidentally '+'injecting the same DOM property config twice, or you may be '+'injecting two configs that have conflicting property names.',propName):invariant(false):undefined;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseAttribute:checkMask(propConfig,Injection.MUST_USE_ATTRIBUTE),mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasSideEffects:checkMask(propConfig,Injection.HAS_SIDE_EFFECTS),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(!propertyInfo.mustUseAttribute||!propertyInfo.mustUseProperty)?"development"!=='production'?invariant(false,'DOMProperty: Cannot require using both attribute and property: %s',propName):invariant(false):undefined;!(propertyInfo.mustUseProperty||!propertyInfo.hasSideEffects)?"development"!=='production'?invariant(false,'DOMProperty: Properties that have side effects must use property: %s',propName):invariant(false):undefined;!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?"development"!=='production'?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or '+'numeric value, but not a combination: %s',propName):invariant(false):undefined;if("development"!=='production'){DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;if("development"!=='production'){DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}};var defaultValueCache={}; /**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid', /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseAttribute:
   *   Whether the property must be accessed and mutated using `*Attribute()`.
   *   (This includes anything that fails `<propName> in <element>`.)
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasSideEffects:
   *   Whether or not setting a value causes side effects such as triggering
   *   resources to be loaded or text selection changes. If true, we read from
   *   the DOM before updating to ensure that the value is only set if it has
   *   changed.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */properties:{}, /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */getPossibleStandardName:"development"!=='production'?{}:null, /**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[], /**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;}, /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */getDefaultValueForProperty:function(nodeName,prop){var nodeDefaults=defaultValueCache[nodeName];var testElement;if(!nodeDefaults){defaultValueCache[nodeName]=nodeDefaults={};}if(!(prop in nodeDefaults)){testElement=document.createElement(nodeName);nodeDefaults[prop]=testElement[prop];}return nodeDefaults[prop];},injection:DOMPropertyInjection};module.exports=DOMProperty;},{"144":144}],11:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var ReactPerf=_dereq_(71);var quoteAttributeValueForBrowser=_dereq_(122);var warning=_dereq_(155); // Simplified subset
var VALID_ATTRIBUTE_NAME_REGEX=/^[a-zA-Z_][\w\.\-]*$/;var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;"development"!=='production'?warning(false,'Invalid attribute name: `%s`',attributeName):undefined;return false;}function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}if("development"!=='production'){var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true};var warnedProperties={};var warnUnknownProperty=function(name){if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return;}warnedProperties[name]=true;var lowerCasedName=name.toLowerCase(); // data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null; // For now, only warn when we have a suggested correction. This prevents
// logging too much when using transferPropsTo.
"development"!=='production'?warning(standardName==null,'Unknown DOM property %s. Did you mean %s?',name,standardName):undefined;};} /**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={ /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */createMarkupForID:function(id){return DOMProperty.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser(id);},setAttributeForID:function(node,id){node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,id);}, /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */createMarkupForProperty:function(name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){if(shouldIgnoreValue(propertyInfo,value)){return '';}var attributeName=propertyInfo.attributeName;if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){return attributeName+'=""';}return attributeName+'='+quoteAttributeValueForBrowser(value);}else if(DOMProperty.isCustomAttribute(name)){if(value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}else if("development"!=='production'){warnUnknownProperty(name);}return null;}, /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */createMarkupForCustomAttribute:function(name,value){if(!isAttributeNameSafe(name)||value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}, /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function(node,name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){this.deleteValueForProperty(node,name);}else if(propertyInfo.mustUseAttribute){var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace; // `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else {node.setAttribute(attributeName,''+value);}}else {var propName=propertyInfo.propertyName; // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
// property type before comparing; only `value` does and is string.
if(!propertyInfo.hasSideEffects||''+node[propName]!==''+value){ // Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propName]=value;}}}else if(DOMProperty.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);}else if("development"!=='production'){warnUnknownProperty(name);}},setValueForAttribute:function(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else {node.setAttribute(name,''+value);}}, /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function(node,name){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseAttribute){node.removeAttribute(propertyInfo.attributeName);}else {var propName=propertyInfo.propertyName;var defaultValue=DOMProperty.getDefaultValueForProperty(node.nodeName,propName);if(!propertyInfo.hasSideEffects||''+node[propName]!==defaultValue){node[propName]=defaultValue;}}}else if(DOMProperty.isCustomAttribute(name)){node.removeAttribute(name);}else if("development"!=='production'){warnUnknownProperty(name);}}};ReactPerf.measureMethods(DOMPropertyOperations,'DOMPropertyOperations',{setValueForProperty:'setValueForProperty',setValueForAttribute:'setValueForAttribute',deleteValueForProperty:'deleteValueForProperty'});module.exports=DOMPropertyOperations;},{"10":10,"122":122,"155":155,"71":71}],12:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */'use strict';var ExecutionEnvironment=_dereq_(130);var createNodesFromMarkup=_dereq_(135);var emptyFunction=_dereq_(136);var getMarkupWrap=_dereq_(140);var invariant=_dereq_(144);var OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/;var RESULT_INDEX_ATTR='data-danger-index'; /**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */function getNodeName(markup){return markup.substring(1,markup.indexOf(' '));}var Danger={ /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */dangerouslyRenderMarkup:function(markupList){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Cannot render markup in a worker '+'thread. Make sure `window` and `document` are available globally '+'before requiring React when unit testing or use '+'ReactDOMServer.renderToString for server rendering.'):invariant(false):undefined;var nodeName;var markupByNodeName={}; // Group markup by `nodeName` if a wrap is necessary, else by '*'.
for(var i=0;i<markupList.length;i++){!markupList[i]?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Missing markup.'):invariant(false):undefined;nodeName=getNodeName(markupList[i]);nodeName=getMarkupWrap(nodeName)?nodeName:'*';markupByNodeName[nodeName]=markupByNodeName[nodeName]||[];markupByNodeName[nodeName][i]=markupList[i];}var resultList=[];var resultListAssignmentCount=0;for(nodeName in markupByNodeName){if(!markupByNodeName.hasOwnProperty(nodeName)){continue;}var markupListByNodeName=markupByNodeName[nodeName]; // This for-in loop skips the holes of the sparse array. The order of
// iteration should follow the order of assignment, which happens to match
// numerical index order, but we don't rely on that.
var resultIndex;for(resultIndex in markupListByNodeName){if(markupListByNodeName.hasOwnProperty(resultIndex)){var markup=markupListByNodeName[resultIndex]; // Push the requested markup with an additional RESULT_INDEX_ATTR
// attribute.  If the markup does not start with a < character, it
// will be discarded below (with an appropriate console.error).
markupListByNodeName[resultIndex]=markup.replace(OPEN_TAG_NAME_EXP, // This index will be parsed back out below.
'$1 '+RESULT_INDEX_ATTR+'="'+resultIndex+'" ');}} // Render each group of markup with similar wrapping `nodeName`.
var renderNodes=createNodesFromMarkup(markupListByNodeName.join(''),emptyFunction // Do nothing special with <script> tags.
);for(var j=0;j<renderNodes.length;++j){var renderNode=renderNodes[j];if(renderNode.hasAttribute&&renderNode.hasAttribute(RESULT_INDEX_ATTR)){resultIndex=+renderNode.getAttribute(RESULT_INDEX_ATTR);renderNode.removeAttribute(RESULT_INDEX_ATTR);!!resultList.hasOwnProperty(resultIndex)?"development"!=='production'?invariant(false,'Danger: Assigning to an already-occupied result index.'):invariant(false):undefined;resultList[resultIndex]=renderNode; // This should match resultList.length and markupList.length when
// we're done.
resultListAssignmentCount+=1;}else if("development"!=='production'){console.error('Danger: Discarding unexpected node:',renderNode);}}} // Although resultList was populated out of order, it should now be a dense
// array.
!(resultListAssignmentCount===resultList.length)?"development"!=='production'?invariant(false,'Danger: Did not assign to every index of resultList.'):invariant(false):undefined;!(resultList.length===markupList.length)?"development"!=='production'?invariant(false,'Danger: Expected markup to render %s nodes, but rendered %s.',markupList.length,resultList.length):invariant(false):undefined;return resultList;}, /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */dangerouslyReplaceNodeWithMarkup:function(oldChild,markup){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a '+'worker thread. Make sure `window` and `document` are available '+'globally before requiring React when unit testing or use '+'ReactDOMServer.renderToString() for server rendering.'):invariant(false):undefined;!markup?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):invariant(false):undefined;!(oldChild.tagName.toLowerCase()!=='html')?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the '+'<html> node. This is because browser quirks make this unreliable '+'and/or slow. If you want to render to the root you must use '+'server rendering. See ReactDOMServer.renderToString().'):invariant(false):undefined;var newChild;if(typeof markup==='string'){newChild=createNodesFromMarkup(markup,emptyFunction)[0];}else {newChild=markup;}oldChild.parentNode.replaceChild(newChild,oldChild);}};module.exports=Danger;},{"130":130,"135":135,"136":136,"140":140,"144":144}],13:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */'use strict';var keyOf=_dereq_(148); /**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({BeforeInputEventPlugin:null})];module.exports=DefaultEventPluginOrder;},{"148":148}],14:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(19);var SyntheticMouseEvent=_dereq_(96);var ReactMount=_dereq_(65);var keyOf=_dereq_(148);var topLevelTypes=EventConstants.topLevelTypes;var getFirstReactDOM=ReactMount.getFirstReactDOM;var eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}};var extractedEvents=[null,null];var EnterLeaveEventPlugin={eventTypes:eventTypes, /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){if(topLevelType===topLevelTypes.topMouseOver&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!==topLevelTypes.topMouseOut&&topLevelType!==topLevelTypes.topMouseOver){ // Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(topLevelTarget.window===topLevelTarget){ // `topLevelTarget` is probably a window object.
win=topLevelTarget;}else { // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=topLevelTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else {win=window;}}var from;var to;var fromID='';var toID='';if(topLevelType===topLevelTypes.topMouseOut){from=topLevelTarget;fromID=topLevelTargetID;to=getFirstReactDOM(nativeEvent.relatedTarget||nativeEvent.toElement);if(to){toID=ReactMount.getID(to);}else {to=win;}to=to||win;}else {from=win;to=topLevelTarget;toID=topLevelTargetID;}if(from===to){ // Nothing pertains to our managed components.
return null;}var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,fromID,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=from;leave.relatedTarget=to;var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,toID,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=to;enter.relatedTarget=from;EventPropagators.accumulateEnterLeaveDispatches(leave,enter,fromID,toID);extractedEvents[0]=leave;extractedEvents[1]=enter;return extractedEvents;}};module.exports=EnterLeaveEventPlugin;},{"148":148,"15":15,"19":19,"65":65,"96":96}],15:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */'use strict';var keyMirror=_dereq_(147);var PropagationPhases=keyMirror({bubbled:null,captured:null}); /**
 * Types of raw signals from the browser caught at the top level.
 */var topLevelTypes=keyMirror({topAbort:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topVolumeChange:null,topWaiting:null,topWheel:null});var EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;},{"147":147}],16:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */'use strict';var EventPluginRegistry=_dereq_(17);var EventPluginUtils=_dereq_(18);var ReactErrorUtils=_dereq_(56);var accumulateInto=_dereq_(102);var forEachAccumulated=_dereq_(110);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Internal store for event listeners
 */var listenerBank={}; /**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null; /**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function(event,simulated){if(event){EventPluginUtils.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function(e){return executeDispatchesAndRelease(e,false);}; /**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */var InstanceHandle=null;function validateInstanceHandle(){var valid=InstanceHandle&&InstanceHandle.traverseTwoPhase&&InstanceHandle.traverseEnterLeave;"development"!=='production'?warning(valid,'InstanceHandle not injected before use!'):undefined;} /**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={ /**
   * Methods for injecting dependencies.
   */injection:{ /**
     * @param {object} InjectedMount
     * @public
     */injectMount:EventPluginUtils.injection.injectMount, /**
     * @param {object} InjectedInstanceHandle
     * @public
     */injectInstanceHandle:function(InjectedInstanceHandle){InstanceHandle=InjectedInstanceHandle;if("development"!=='production'){validateInstanceHandle();}},getInstanceHandle:function(){if("development"!=='production'){validateInstanceHandle();}return InstanceHandle;}, /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder, /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules, /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */putListener:function(id,registrationName,listener){!(typeof listener==='function')?"development"!=='production'?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener):invariant(false):undefined;var bankForRegistrationName=listenerBank[registrationName]||(listenerBank[registrationName]={});bankForRegistrationName[id]=listener;var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.didPutListener){PluginModule.didPutListener(id,registrationName,listener);}}, /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function(id,registrationName){var bankForRegistrationName=listenerBank[registrationName];return bankForRegistrationName&&bankForRegistrationName[id];}, /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */deleteListener:function(id,registrationName){var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(id,registrationName);}var bankForRegistrationName=listenerBank[registrationName]; // TODO: This should never be null -- when is it?
if(bankForRegistrationName){delete bankForRegistrationName[id];}}, /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */deleteAllListeners:function(id){for(var registrationName in listenerBank){if(!listenerBank[registrationName][id]){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(id,registrationName);}delete listenerBank[registrationName][id];}}, /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry.plugins;for(var i=0;i<plugins.length;i++){ // Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto(events,extractedEvents);}}}return events;}, /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function(events){if(events){eventQueue=accumulateInto(eventQueue,events);}}, /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function(simulated){ // Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);}else {forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?"development"!=='production'?invariant(false,'processEventQueue(): Additional events were enqueued while processing '+'an event queue. Support for this has not yet been implemented.'):invariant(false):undefined; // This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils.rethrowCaughtError();}, /**
   * These are needed for tests only. Do not use!
   */__purge:function(){listenerBank={};},__getListenerBank:function(){return listenerBank;}};module.exports=EventPluginHub;},{"102":102,"110":110,"144":144,"155":155,"17":17,"18":18,"56":56}],17:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(144); /**
 * Injectable ordering of event plugins.
 */var EventPluginOrder=null; /**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={}; /**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!EventPluginOrder){ // Wait until an `EventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var PluginModule=namesToPlugins[pluginName];var pluginIndex=EventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in '+'the plugin ordering, `%s`.',pluginName):invariant(false):undefined;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!PluginModule.extractEvents?"development"!=='production'?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` '+'method, but `%s` does not.',pluginName):invariant(false):undefined;EventPluginRegistry.plugins[pluginIndex]=PluginModule;var publishedEvents=PluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName)?"development"!=='production'?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):invariant(false):undefined;}}} /**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,PluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'event name, `%s`.',eventName):invariant(false):undefined;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,PluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,PluginModule,eventName);return true;}return false;} /**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,PluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'registration name, `%s`.',registrationName):invariant(false):undefined;EventPluginRegistry.registrationNameModules[registrationName]=PluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=PluginModule.eventTypes[eventName].dependencies;} /**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={ /**
   * Ordered list of injected plugins.
   */plugins:[], /**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{}, /**
   * Mapping from registration name to plugin module
   */registrationNameModules:{}, /**
   * Mapping from registration name to event name
   */registrationNameDependencies:{}, /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function(InjectedEventPluginOrder){!!EventPluginOrder?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than '+'once. You are likely trying to load more than one copy of React.'):invariant(false):undefined; // Clone the ordering so it cannot be dynamically mutated.
EventPluginOrder=Array.prototype.slice.call(InjectedEventPluginOrder);recomputePluginOrdering();}, /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var PluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==PluginModule){!!namesToPlugins[pluginName]?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins '+'using the same name, `%s`.',pluginName):invariant(false):undefined;namesToPlugins[pluginName]=PluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}, /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */getPluginModuleForEvent:function(event){var dispatchConfig=event.dispatchConfig;if(dispatchConfig.registrationName){return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName]||null;}for(var phase in dispatchConfig.phasedRegistrationNames){if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];if(PluginModule){return PluginModule;}}return null;}, /**
   * Exposed for unit testing.
   * @private
   */_resetEventPlugins:function(){EventPluginOrder=null;for(var pluginName in namesToPlugins){if(namesToPlugins.hasOwnProperty(pluginName)){delete namesToPlugins[pluginName];}}EventPluginRegistry.plugins.length=0;var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;for(var eventName in eventNameDispatchConfigs){if(eventNameDispatchConfigs.hasOwnProperty(eventName)){delete eventNameDispatchConfigs[eventName];}}var registrationNameModules=EventPluginRegistry.registrationNameModules;for(var registrationName in registrationNameModules){if(registrationNameModules.hasOwnProperty(registrationName)){delete registrationNameModules[registrationName];}}}};module.exports=EventPluginRegistry;},{"144":144}],18:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */'use strict';var EventConstants=_dereq_(15);var ReactErrorUtils=_dereq_(56);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Injected dependencies:
 */ /**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */var injection={Mount:null,injectMount:function(InjectedMount){injection.Mount=InjectedMount;if("development"!=='production'){"development"!=='production'?warning(InjectedMount&&InjectedMount.getNode&&InjectedMount.getID,'EventPluginUtils.injection.injectMount(...): Injected Mount '+'module is missing getNode or getID.'):undefined;}}};var topLevelTypes=EventConstants.topLevelTypes;function isEndish(topLevelType){return topLevelType===topLevelTypes.topMouseUp||topLevelType===topLevelTypes.topTouchEnd||topLevelType===topLevelTypes.topTouchCancel;}function isMoveish(topLevelType){return topLevelType===topLevelTypes.topMouseMove||topLevelType===topLevelTypes.topTouchMove;}function isStartish(topLevelType){return topLevelType===topLevelTypes.topMouseDown||topLevelType===topLevelTypes.topTouchStart;}var validateEventDispatches;if("development"!=='production'){validateEventDispatches=function(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;var listenersIsArr=Array.isArray(dispatchListeners);var idsIsArr=Array.isArray(dispatchIDs);var IDsLen=idsIsArr?dispatchIDs.length:dispatchIDs?1:0;var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;"development"!=='production'?warning(idsIsArr===listenersIsArr&&IDsLen===listenersLen,'EventPluginUtils: Invalid `event`.'):undefined;};} /**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */function executeDispatch(event,simulated,listener,domID){var type=event.type||'unknown-event';event.currentTarget=injection.Mount.getNode(domID);if(simulated){ReactErrorUtils.invokeGuardedCallbackWithCatch(type,listener,event,domID);}else {ReactErrorUtils.invokeGuardedCallback(type,listener,event,domID);}event.currentTarget=null;} /**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchIDs[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchIDs);}event._dispatchListeners=null;event._dispatchIDs=null;} /**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchIDs[i])){return dispatchIDs[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchIDs)){return dispatchIDs;}}return null;} /**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchIDs=null;event._dispatchListeners=null;return ret;} /**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */function executeDirectDispatch(event){if("development"!=='production'){validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchID=event._dispatchIDs;!!Array.isArray(dispatchListener)?"development"!=='production'?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):invariant(false):undefined;var res=dispatchListener?dispatchListener(event,dispatchID):null;event._dispatchListeners=null;event._dispatchIDs=null;return res;} /**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return !!event._dispatchListeners;} /**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getNode:function(id){return injection.Mount.getNode(id);},getID:function(node){return injection.Mount.getID(node);},injection:injection};module.exports=EventPluginUtils;},{"144":144,"15":15,"155":155,"56":56}],19:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var warning=_dereq_(155);var accumulateInto=_dereq_(102);var forEachAccumulated=_dereq_(110);var PropagationPhases=EventConstants.PropagationPhases;var getListener=EventPluginHub.getListener; /**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(id,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(id,registrationName);} /**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(domID,upwards,event){if("development"!=='production'){"development"!=='production'?warning(domID,'Dispatching id must not be null'):undefined;}var phase=upwards?PropagationPhases.bubbled:PropagationPhases.captured;var listener=listenerAtPhase(domID,event,phase);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchIDs=accumulateInto(event._dispatchIDs,domID);}} /**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker,accumulateDirectionalDispatches,event);}} /**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker,accumulateDirectionalDispatches,event);}} /**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(id,ignoredDirection,event){if(event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(id,registrationName);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchIDs=accumulateInto(event._dispatchIDs,id);}}} /**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event.dispatchMarker,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,fromID,toID){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID,toID,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);} /**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;},{"102":102,"110":110,"15":15,"155":155,"16":16}],20:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */'use strict';var PooledClass=_dereq_(24);var assign=_dereq_(23);var getTextContentAccessor=_dereq_(117); /**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}assign(FallbackCompositionState.prototype,{destructor:function(){this._root=null;this._startText=null;this._fallbackText=null;}, /**
   * Get current text of input.
   *
   * @return {string}
   */getText:function(){if('value' in this._root){return this._root.value;}return this._root[getTextContentAccessor()];}, /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports=FallbackCompositionState;},{"117":117,"23":23,"24":24}],21:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */'use strict';var DOMProperty=_dereq_(10);var ExecutionEnvironment=_dereq_(130);var MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE;var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;var HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS;var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var hasSVG;if(ExecutionEnvironment.canUseDOM){var implementation=document.implementation;hasSVG=implementation&&implementation.hasFeature&&implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure','1.1');}var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{ /**
     * Standard Properties
     */accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,allowTransparency:MUST_USE_ATTRIBUTE,alt:null,async:HAS_BOOLEAN_VALUE,autoComplete:null, // autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,capture:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,cellPadding:null,cellSpacing:null,charSet:MUST_USE_ATTRIBUTE,challenge:MUST_USE_ATTRIBUTE,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,classID:MUST_USE_ATTRIBUTE, // To set className on SVG elements, it's necessary to use .setAttribute;
// this works on HTML elements too in all browsers except IE8. Conveniently,
// IE8 doesn't support SVG and so we can simply use the attribute in
// browsers that support SVG and the property in browsers that don't,
// regardless of whether the element is HTML or SVG.
className:hasSVG?MUST_USE_ATTRIBUTE:MUST_USE_PROPERTY,cols:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,colSpan:null,content:null,contentEditable:null,contextMenu:MUST_USE_ATTRIBUTE,controls:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,coords:null,crossOrigin:null,data:null, // For `<object />` acts as `src`.
dateTime:MUST_USE_ATTRIBUTE,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:null,disabled:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:null,encType:null,form:MUST_USE_ATTRIBUTE,formAction:MUST_USE_ATTRIBUTE,formEncType:MUST_USE_ATTRIBUTE,formMethod:MUST_USE_ATTRIBUTE,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:MUST_USE_ATTRIBUTE,frameBorder:MUST_USE_ATTRIBUTE,headers:null,height:MUST_USE_ATTRIBUTE,hidden:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:MUST_USE_PROPERTY,inputMode:MUST_USE_ATTRIBUTE,integrity:null,is:MUST_USE_ATTRIBUTE,keyParams:MUST_USE_ATTRIBUTE,keyType:MUST_USE_ATTRIBUTE,kind:null,label:null,lang:null,list:MUST_USE_ATTRIBUTE,loop:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,low:null,manifest:MUST_USE_ATTRIBUTE,marginHeight:null,marginWidth:null,max:null,maxLength:MUST_USE_ATTRIBUTE,media:MUST_USE_ATTRIBUTE,mediaGroup:null,method:null,min:null,minLength:MUST_USE_ATTRIBUTE,multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:null,nonce:MUST_USE_ATTRIBUTE,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,rel:null,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:MUST_USE_ATTRIBUTE,rows:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,rowSpan:null,sandbox:null,scope:null,scoped:HAS_BOOLEAN_VALUE,scrolling:null,seamless:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:null,size:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,sizes:MUST_USE_ATTRIBUTE,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:null,src:null,srcDoc:MUST_USE_PROPERTY,srcLang:null,srcSet:MUST_USE_ATTRIBUTE,start:HAS_NUMERIC_VALUE,step:null,style:null,summary:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:MUST_USE_PROPERTY|HAS_SIDE_EFFECTS,width:MUST_USE_ATTRIBUTE,wmode:MUST_USE_ATTRIBUTE,wrap:null, /**
     * RDFa Properties
     */about:MUST_USE_ATTRIBUTE,datatype:MUST_USE_ATTRIBUTE,inlist:MUST_USE_ATTRIBUTE,prefix:MUST_USE_ATTRIBUTE, // property is also supported for OpenGraph in meta tags.
property:MUST_USE_ATTRIBUTE,resource:MUST_USE_ATTRIBUTE,'typeof':MUST_USE_ATTRIBUTE,vocab:MUST_USE_ATTRIBUTE, /**
     * Non-standard Properties
     */ // autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:MUST_USE_ATTRIBUTE,autoCorrect:MUST_USE_ATTRIBUTE, // autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:null, // color is for Safari mask-icon link
color:null, // itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:MUST_USE_ATTRIBUTE,itemScope:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,itemType:MUST_USE_ATTRIBUTE, // itemID and itemRef are for Microdata support as well but
// only specified in the the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:MUST_USE_ATTRIBUTE,itemRef:MUST_USE_ATTRIBUTE, // results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:null, // IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:MUST_USE_ATTRIBUTE, // IE-only attribute that controls focus behavior
unselectable:MUST_USE_ATTRIBUTE},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{autoComplete:'autocomplete',autoFocus:'autofocus',autoPlay:'autoplay',autoSave:'autosave', // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
// http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
encType:'encoding',hrefLang:'hreflang',radioGroup:'radiogroup',spellCheck:'spellcheck',srcDoc:'srcdoc',srcSet:'srcset'}};module.exports=HTMLDOMPropertyConfig;},{"10":10,"130":130}],22:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */'use strict';var ReactPropTypes=_dereq_(74);var ReactPropTypeLocations=_dereq_(73);var invariant=_dereq_(144);var warning=_dereq_(155);var hasReadOnlyValue={'button':true,'checkbox':true,'image':true,'hidden':true,'radio':true,'reset':true,'submit':true};function _assertSingleLink(inputProps){!(inputProps.checkedLink==null||inputProps.valueLink==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a valueLink. If you want to use '+'checkedLink, you probably don\'t want to use valueLink and vice versa.'):invariant(false):undefined;}function _assertValueLink(inputProps){_assertSingleLink(inputProps);!(inputProps.value==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a valueLink and a value or onChange event. If you want '+'to use value or onChange, you probably don\'t want to use valueLink.'):invariant(false):undefined;}function _assertCheckedLink(inputProps){_assertSingleLink(inputProps);!(inputProps.checked==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a checked property or onChange event. '+'If you want to use checked or onChange, you probably don\'t want to '+'use checkedLink'):invariant(false):undefined;}var propTypes={value:function(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:ReactPropTypes.func};var loggedTypeFailures={};function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */var LinkedValueUtils={checkPropTypes:function(tagName,props,owner){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error=propTypes[propName](props,propName,tagName,ReactPropTypeLocations.prop);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum(owner);"development"!=='production'?warning(false,'Failed form propType: %s%s',error.message,addendum):undefined;}}}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */getValue:function(inputProps){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.value;}return inputProps.value;}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */getChecked:function(inputProps){if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.value;}return inputProps.checked;}, /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */executeOnChange:function(inputProps,event){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.requestChange(event.target.value);}else if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.requestChange(event.target.checked);}else if(inputProps.onChange){return inputProps.onChange.call(undefined,event);}}};module.exports=LinkedValueUtils;},{"144":144,"155":155,"73":73,"74":74}],23:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */ // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
'use strict';function assign(target,sources){if(target==null){throw new TypeError('Object.assign target cannot be null or undefined');}var to=Object(target);var hasOwnProperty=Object.prototype.hasOwnProperty;for(var nextIndex=1;nextIndex<arguments.length;nextIndex++){var nextSource=arguments[nextIndex];if(nextSource==null){continue;}var from=Object(nextSource); // We don't currently support accessors nor proxies. Therefore this
// copy cannot throw. If we ever supported this then we must handle
// exceptions and side-effects. We don't support symbols so they won't
// be transferred.
for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}}return to;}module.exports=assign;},{}],24:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */'use strict';var invariant=_dereq_(144); /**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else {return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else {return new Klass(a1,a2);}};var threeArgumentPooler=function(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else {return new Klass(a1,a2,a3);}};var fourArgumentPooler=function(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else {return new Klass(a1,a2,a3,a4);}};var fiveArgumentPooler=function(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else {return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function(instance){var Klass=this;!(instance instanceof Klass)?"development"!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):invariant(false):undefined;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler; /**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;},{"144":144}],25:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */'use strict';var ReactInstanceMap=_dereq_(62);var findDOMNode=_dereq_(108);var warning=_dereq_(155);var didWarnKey='_getDOMNodeDidWarn';var ReactBrowserComponentMixin={ /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */getDOMNode:function(){"development"!=='production'?warning(this.constructor[didWarnKey],'%s.getDOMNode(...) is deprecated. Please use '+'ReactDOM.findDOMNode(instance) instead.',ReactInstanceMap.get(this).getName()||this.tagName||'Unknown'):undefined;this.constructor[didWarnKey]=true;return findDOMNode(this);}};module.exports=ReactBrowserComponentMixin;},{"108":108,"155":155,"62":62}],26:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var EventPluginRegistry=_dereq_(17);var ReactEventEmitterMixin=_dereq_(57);var ReactPerf=_dereq_(71);var ViewportMetrics=_dereq_(101);var assign=_dereq_(23);var isEventSupported=_dereq_(119); /**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var alreadyListeningTo={};var isMonitoringScrollValue=false;var reactTopListenersCounter=0; // For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping={topAbort:'abort',topBlur:'blur',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'}; /**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+String(Math.random()).slice(2);function getListeningForDocument(mountAt){ // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];} /**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */var ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ /**
   * Injectable event backend
   */ReactEventListener:null,injection:{ /**
     * @param {object} ReactEventListener
     */injectReactEventListener:function(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;}}, /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}}, /**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function(){return !!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());}, /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];var topLevelTypes=EventConstants.topLevelTypes;for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency===topLevelTypes.topWheel){if(isEventSupported('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'wheel',mountAt);}else if(isEventSupported('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'mousewheel',mountAt);}else { // Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'DOMMouseScroll',mountAt);}}else if(dependency===topLevelTypes.topScroll){if(isEventSupported('scroll',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll,'scroll',mountAt);}else {ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll,'scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}}else if(dependency===topLevelTypes.topFocus||dependency===topLevelTypes.topBlur){if(isEventSupported('focus',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus,'focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur,'blur',mountAt);}else if(isEventSupported('focusin')){ // IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus,'focusin',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur,'focusout',mountAt);} // to make sure blur and focus event listeners are only attached once
isListening[topLevelTypes.topBlur]=true;isListening[topLevelTypes.topFocus]=true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency]=true;}}},trapBubbledEvent:function(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);}, /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */ensureScrollValueMonitoring:function(){if(!isMonitoringScrollValue){var refresh=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);isMonitoringScrollValue=true;}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});ReactPerf.measureMethods(ReactBrowserEventEmitter,'ReactBrowserEventEmitter',{putListener:'putListener',deleteListener:'deleteListener'});module.exports=ReactBrowserEventEmitter;},{"101":101,"119":119,"15":15,"16":16,"17":17,"23":23,"57":57,"71":71}],27:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */'use strict';var ReactReconciler=_dereq_(76);var instantiateReactComponent=_dereq_(118);var shouldUpdateReactComponent=_dereq_(126);var traverseAllChildren=_dereq_(127);var warning=_dereq_(155);function instantiateChild(childInstances,child,name){ // We found a component instance.
var keyUnique=childInstances[name]===undefined;if("development"!=='production'){"development"!=='production'?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.',name):undefined;}if(child!=null&&keyUnique){childInstances[name]=instantiateReactComponent(child,null);}} /**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */var ReactChildReconciler={ /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */instantiateChildren:function(nestedChildNodes,transaction,context){if(nestedChildNodes==null){return null;}var childInstances={};traverseAllChildren(nestedChildNodes,instantiateChild,childInstances);return childInstances;}, /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */updateChildren:function(prevChildren,nextChildren,transaction,context){ // We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
if(!nextChildren&&!prevChildren){return null;}var name;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var prevElement=prevChild&&prevChild._currentElement;var nextElement=nextChildren[name];if(prevChild!=null&&shouldUpdateReactComponent(prevElement,nextElement)){ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);nextChildren[name]=prevChild;}else {if(prevChild){ReactReconciler.unmountComponent(prevChild,name);} // The child must be instantiated before it's mounted.
var nextChildInstance=instantiateReactComponent(nextElement,null);nextChildren[name]=nextChildInstance;}} // Unmount children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){ReactReconciler.unmountComponent(prevChildren[name]);}}return nextChildren;}, /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */unmountChildren:function(renderedChildren){for(var name in renderedChildren){if(renderedChildren.hasOwnProperty(name)){var renderedChild=renderedChildren[name];ReactReconciler.unmountComponent(renderedChild);}}}};module.exports=ReactChildReconciler;},{"118":118,"126":126,"127":127,"155":155,"76":76}],28:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */'use strict';var PooledClass=_dereq_(24);var ReactElement=_dereq_(52);var emptyFunction=_dereq_(136);var traverseAllChildren=_dereq_(127);var twoArgumentPooler=PooledClass.twoArgumentPooler;var fourArgumentPooler=PooledClass.fourArgumentPooler;var userProvidedKeyEscapeRegex=/\/(?!\/)/g;function escapeUserProvidedKey(text){return (''+text).replace(userProvidedKeyEscapeRegex,'//');} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */function ForEachBookKeeping(forEachFunction,forEachContext){this.func=forEachFunction;this.context=forEachContext;this.count=0;}ForEachBookKeeping.prototype.destructor=function(){this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func;var context=bookKeeping.context;func.call(context,child,bookKeeping.count++);} /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){this.result=mapResult;this.keyPrefix=keyPrefix;this.func=mapFunction;this.context=mapContext;this.count=0;}MapBookKeeping.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result;var keyPrefix=bookKeeping.keyPrefix;var func=bookKeeping.func;var context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement.isValidElement(mappedChild)){mappedChild=ReactElement.cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
keyPrefix+(mappedChild!==child?escapeUserProvidedKey(mappedChild.key||'')+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);} /**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}function forEachSingleChildDummy(traverseContext,child,name){return null;} /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);} /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,count:countChildren,toArray:toArray};module.exports=ReactChildren;},{"127":127,"136":136,"24":24,"52":52}],29:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */'use strict';var ReactComponent=_dereq_(30);var ReactElement=_dereq_(52);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactNoopUpdateQueue=_dereq_(69);var assign=_dereq_(23);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var keyMirror=_dereq_(147);var keyOf=_dereq_(148);var warning=_dereq_(155);var MIXINS_KEY=keyOf({mixins:null}); /**
 * Policies that describe methods in `ReactClassInterface`.
 */var SpecPolicy=keyMirror({ /**
   * These methods may be defined only once by the class specification or mixin.
   */DEFINE_ONCE:null, /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */DEFINE_MANY:null, /**
   * These methods are overriding the base class.
   */OVERRIDE_BASE:null, /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */DEFINE_MANY_MERGED:null});var injectedMixins=[];var warnedSetProps=false;function warnSetProps(){if(!warnedSetProps){warnedSetProps=true;"development"!=='production'?warning(false,'setProps(...) and replaceProps(...) are deprecated. '+'Instead, call render again at the top level.'):undefined;}} /**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */var ReactClassInterface={ /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */mixins:SpecPolicy.DEFINE_MANY, /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */statics:SpecPolicy.DEFINE_MANY, /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */propTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */contextTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */childContextTypes:SpecPolicy.DEFINE_MANY, // ==== Definition methods ====
/**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED, /**
   * @return {object}
   * @optional
   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */render:SpecPolicy.DEFINE_ONCE, // ==== Delegate methods ====
/**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */componentWillMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY, /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE, /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */componentWillUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */componentWillUnmount:SpecPolicy.DEFINE_MANY, // ==== Advanced methods ====
/**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */updateComponent:SpecPolicy.OVERRIDE_BASE}; /**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */var RESERVED_SPEC_KEYS={displayName:function(Constructor,displayName){Constructor.displayName=displayName;},mixins:function(Constructor,mixins){if(mixins){for(var i=0;i<mixins.length;i++){mixSpecIntoComponent(Constructor,mixins[i]);}}},childContextTypes:function(Constructor,childContextTypes){if("development"!=='production'){validateTypeDef(Constructor,childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes=assign({},Constructor.childContextTypes,childContextTypes);},contextTypes:function(Constructor,contextTypes){if("development"!=='production'){validateTypeDef(Constructor,contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes=assign({},Constructor.contextTypes,contextTypes);}, /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */getDefaultProps:function(Constructor,getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,getDefaultProps);}else {Constructor.getDefaultProps=getDefaultProps;}},propTypes:function(Constructor,propTypes){if("development"!=='production'){validateTypeDef(Constructor,propTypes,ReactPropTypeLocations.prop);}Constructor.propTypes=assign({},Constructor.propTypes,propTypes);},statics:function(Constructor,statics){mixStaticSpecIntoComponent(Constructor,statics);},autobind:function(){}}; // noop
function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef){if(typeDef.hasOwnProperty(propName)){ // use a warning instead of an invariant so components
// don't show up in prod but not in __DEV__
"development"!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):undefined;}}}function validateMethodOverride(proto,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null; // Disallow overriding of base class methods unless explicitly allowed.
if(ReactClassMixin.hasOwnProperty(name)){!(specPolicy===SpecPolicy.OVERRIDE_BASE)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to override '+'`%s` from your class specification. Ensure that your method names '+'do not overlap with React methods.',name):invariant(false):undefined;} // Disallow defining methods more than once unless explicitly allowed.
if(proto.hasOwnProperty(name)){!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to define '+'`%s` on your component more than once. This conflict may be due '+'to a mixin.',name):invariant(false):undefined;}} /**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classses.
 */function mixSpecIntoComponent(Constructor,spec){if(!spec){return;}!(typeof spec!=='function')?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component class as a mixin. Instead, just use a regular object.'):invariant(false):undefined;!!ReactElement.isValidElement(spec)?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component as a mixin. Instead, just use a regular object.'):invariant(false):undefined;var proto=Constructor.prototype; // By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec){if(!spec.hasOwnProperty(name)){continue;}if(name===MIXINS_KEY){ // We have already handled mixins in a special case above.
continue;}var property=spec[name];validateMethodOverride(proto,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else { // Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isAlreadyDefined=proto.hasOwnProperty(name);var isFunction=typeof property==='function';var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;if(shouldAutoBind){if(!proto.__reactAutoBindMap){proto.__reactAutoBindMap={};}proto.__reactAutoBindMap[name]=property;proto[name]=property;}else {if(isAlreadyDefined){var specPolicy=ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride.
!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?"development"!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s '+'when mixing in component specs.',specPolicy,name):invariant(false):undefined; // For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){proto[name]=createMergedResultFunction(proto[name],property);}else if(specPolicy===SpecPolicy.DEFINE_MANY){proto[name]=createChainedFunction(proto[name],property);}}else {proto[name]=property;if("development"!=='production'){ // Add verbose displayName to the function, which helps when looking
// at profiling tools.
if(typeof property==='function'&&spec.displayName){proto[name].displayName=spec.displayName+'_'+name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics){var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=name in RESERVED_SPEC_KEYS;!!isReserved?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved '+'property, `%s`, that shouldn\'t be on the "statics" key. Define it '+'as an instance property instead; it will still be accessible on the '+'constructor.',name):invariant(false):undefined;var isInherited=name in Constructor;!!isInherited?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define '+'`%s` on your component more than once. This conflict may be '+'due to a mixin.',name):invariant(false):undefined;Constructor[name]=property;}} /**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */function mergeIntoWithNoDuplicateKeys(one,two){!(one&&two&&typeof one==='object'&&typeof two==='object')?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):invariant(false):undefined;for(var key in two){if(two.hasOwnProperty(key)){!(one[key]===undefined)?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): '+'Tried to merge two objects with the same key: `%s`. This conflict '+'may be due to a mixin; in particular, this may be caused by two '+'getInitialState() or getDefaultProps() methods returning objects '+'with clashing keys.',key):invariant(false):undefined;one[key]=two[key];}}return one;} /**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a==null){return b;}else if(b==null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};} /**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};} /**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if("development"!=='production'){boundMethod.__reactBoundContext=component;boundMethod.__reactBoundMethod=method;boundMethod.__reactBoundArguments=null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind; /* eslint-disable block-scoped-var, no-undef */boundMethod.bind=function(newThis){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];} // User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(newThis!==component&&newThis!==null){"development"!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):undefined;}else if(!args.length){"development"!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):undefined;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext=component;reboundMethod.__reactBoundMethod=method;reboundMethod.__reactBoundArguments=args;return reboundMethod; /* eslint-enable */};}return boundMethod;} /**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */function bindAutoBindMethods(component){for(var autoBindKey in component.__reactAutoBindMap){if(component.__reactAutoBindMap.hasOwnProperty(autoBindKey)){var method=component.__reactAutoBindMap[autoBindKey];component[autoBindKey]=bindAutoBindMethod(component,method);}}} /**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */var ReactClassMixin={ /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */replaceState:function(newState,callback){this.updater.enqueueReplaceState(this,newState);if(callback){this.updater.enqueueCallback(this,callback);}}, /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(){return this.updater.isMounted(this);}, /**
   * Sets a subset of the props.
   *
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */setProps:function(partialProps,callback){if("development"!=='production'){warnSetProps();}this.updater.enqueueSetProps(this,partialProps);if(callback){this.updater.enqueueCallback(this,callback);}}, /**
   * Replace all the props.
   *
   * @param {object} newProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */replaceProps:function(newProps,callback){if("development"!=='production'){warnSetProps();}this.updater.enqueueReplaceProps(this,newProps);if(callback){this.updater.enqueueCallback(this,callback);}}};var ReactClassComponent=function(){};assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin); /**
 * Module for creating composite components.
 *
 * @class ReactClass
 */var ReactClass={ /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */createClass:function(spec){var Constructor=function(props,context,updater){ // This constructor is overridden by mocks. The argument is used
// by mocks to assert on what gets mounted.
if("development"!=='production'){"development"!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):undefined;} // Wire up auto-binding
if(this.__reactAutoBindMap){bindAutoBindMethods(this);}this.props=props;this.context=context;this.refs=emptyObject;this.updater=updater||ReactNoopUpdateQueue;this.state=null; // ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var initialState=this.getInitialState?this.getInitialState():null;if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof initialState==='undefined'&&this.getInitialState._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
initialState=null;}}!(typeof initialState==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):invariant(false):undefined;this.state=initialState;};Constructor.prototype=new ReactClassComponent();Constructor.prototype.constructor=Constructor;injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec); // Initialize the defaultProps property after all mixins have been merged.
if(Constructor.getDefaultProps){Constructor.defaultProps=Constructor.getDefaultProps();}if("development"!=='production'){ // This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved={};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved={};}}!Constructor.prototype.render?"development"!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):undefined;"development"!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):undefined;} // Reduce time spent doing lookups by setting these on the prototype.
for(var methodName in ReactClassInterface){if(!Constructor.prototype[methodName]){Constructor.prototype[methodName]=null;}}return Constructor;},injection:{injectMixin:function(mixin){injectedMixins.push(mixin);}}};module.exports=ReactClass;},{"137":137,"144":144,"147":147,"148":148,"155":155,"23":23,"30":30,"52":52,"69":69,"72":72,"73":73}],30:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */'use strict';var ReactNoopUpdateQueue=_dereq_(69);var canDefineProperty=_dereq_(104);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject; // We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue;}ReactComponent.prototype.isReactComponent={}; /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState=function(partialState,callback){!(typeof partialState==='object'||typeof partialState==='function'||partialState==null)?"development"!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a '+'function which returns an object of state variables.'):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(partialState!=null,'setState(...): You passed an undefined or null state object; '+'instead, use forceUpdate().'):undefined;}this.updater.enqueueSetState(this,partialState);if(callback){this.updater.enqueueCallback(this,callback);}}; /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this);if(callback){this.updater.enqueueCallback(this,callback);}}; /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */if("development"!=='production'){var deprecatedAPIs={getDOMNode:['getDOMNode','Use ReactDOM.findDOMNode(component) instead.'],isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceProps:['replaceProps','Instead, call render again at the top level.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).'],setProps:['setProps','Instead, call render again at the top level.']};var defineDeprecationWarning=function(methodName,info){if(canDefineProperty){Object.defineProperty(ReactComponent.prototype,methodName,{get:function(){"development"!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):undefined;return undefined;}});}};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports=ReactComponent;},{"104":104,"137":137,"144":144,"155":155,"69":69}],31:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */'use strict';var ReactDOMIDOperations=_dereq_(40);var ReactMount=_dereq_(65); /**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */var ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID, /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */unmountIDFromEnvironment:function(rootNodeID){ReactMount.purgeID(rootNodeID);}};module.exports=ReactComponentBrowserEnvironment;},{"40":40,"65":65}],32:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */'use strict';var invariant=_dereq_(144);var injected=false;var ReactComponentEnvironment={ /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */unmountIDFromEnvironment:null, /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */replaceNodeWithMarkupByID:null, /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */processChildrenUpdates:null,injection:{injectEnvironment:function(environment){!!injected?"development"!=='production'?invariant(false,'ReactCompositeComponent: injectEnvironment() can only be called once.'):invariant(false):undefined;ReactComponentEnvironment.unmountIDFromEnvironment=environment.unmountIDFromEnvironment;ReactComponentEnvironment.replaceNodeWithMarkupByID=environment.replaceNodeWithMarkupByID;ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;injected=true;}}};module.exports=ReactComponentEnvironment;},{"144":144}],33:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */'use strict';var ReactComponentEnvironment=_dereq_(32);var ReactCurrentOwner=_dereq_(34);var ReactElement=_dereq_(52);var ReactInstanceMap=_dereq_(62);var ReactPerf=_dereq_(71);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactReconciler=_dereq_(76);var ReactUpdateQueue=_dereq_(82);var assign=_dereq_(23);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var shouldUpdateReactComponent=_dereq_(126);var warning=_dereq_(155);function getDeclarationErrorAddendum(component){var owner=component._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}function StatelessComponent(Component){}StatelessComponent.prototype.render=function(){var Component=ReactInstanceMap.get(this)._currentElement.type;return Component(this.props,this.context,this.updater);}; /**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */ /**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */var nextMountID=1; /**
 * @lends {ReactCompositeComponent.prototype}
 */var ReactCompositeComponentMixin={ /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */construct:function(element){this._currentElement=element;this._rootNodeID=null;this._instance=null; // See ReactUpdateQueue
this._pendingElement=null;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._renderedComponent=null;this._context=null;this._mountOrder=0;this._topLevelWrapper=null; // See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks=null;}, /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function(rootID,transaction,context){this._context=context;this._mountOrder=nextMountID++;this._rootNodeID=rootID;var publicProps=this._processProps(this._currentElement.props);var publicContext=this._processContext(context);var Component=this._currentElement.type; // Initialize the public class
var inst;var renderedElement; // This is a way to detect if Component is a stateless arrow function
// component, which is not newable. It might not be 100% reliable but is
// something we can do until we start detecting that Component extends
// React.Component. We already assume that typeof Component === 'function'.
var canInstantiate='prototype' in Component;if(canInstantiate){if("development"!=='production'){ReactCurrentOwner.current=this;try{inst=new Component(publicProps,publicContext,ReactUpdateQueue);}finally {ReactCurrentOwner.current=null;}}else {inst=new Component(publicProps,publicContext,ReactUpdateQueue);}}if(!canInstantiate||inst===null||inst===false||ReactElement.isValidElement(inst)){renderedElement=inst;inst=new StatelessComponent(Component);}if("development"!=='production'){ // This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
if(inst.render==null){"development"!=='production'?warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`, returned '+'null/false from a stateless component, or tried to render an '+'element whose type is a function that isn\'t a React component.',Component.displayName||Component.name||'Component'):undefined;}else { // We support ES6 inheriting from React.Component, the module pattern,
// and stateless components, but not ES6 classes that don't extend
"development"!=='production'?warning(Component.prototype&&Component.prototype.isReactComponent||!canInstantiate||!(inst instanceof Component),'%s(...): React component classes must extend React.Component.',Component.displayName||Component.name||'Component'):undefined;}} // These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
inst.props=publicProps;inst.context=publicContext;inst.refs=emptyObject;inst.updater=ReactUpdateQueue;this._instance=inst; // Store a reference from the instance back to the internal representation
ReactInstanceMap.set(inst,this);if("development"!=='production'){ // Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
"development"!=='production'?warning(!inst.getInitialState||inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.getDefaultProps||inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a '+'static property to define contextTypes instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(typeof inst.componentShouldUpdate!=='function','%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',this.getName()||'A component'):undefined;"development"!=='production'?warning(typeof inst.componentDidUnmount!=='function','%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',this.getName()||'A component'):undefined;"development"!=='production'?warning(typeof inst.componentWillRecieveProps!=='function','%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',this.getName()||'A component'):undefined;}var initialState=inst.state;if(initialState===undefined){inst.state=initialState=null;}!(typeof initialState==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.state: must be set to an object or null',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;if(inst.componentWillMount){inst.componentWillMount(); // When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
if(this._pendingStateQueue){inst.state=this._processPendingState(inst.props,inst.context);}} // If not a stateless component, we now render
if(renderedElement===undefined){renderedElement=this._renderValidatedComponent();}this._renderedComponent=this._instantiateReactComponent(renderedElement);var markup=ReactReconciler.mountComponent(this._renderedComponent,rootID,transaction,this._processChildContext(context));if(inst.componentDidMount){transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);}return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function(){var inst=this._instance;if(inst.componentWillUnmount){inst.componentWillUnmount();}ReactReconciler.unmountComponent(this._renderedComponent);this._renderedComponent=null;this._instance=null; // Reset pending fields
// Even if this component is scheduled for another update in ReactUpdates,
// it would still be ignored because these fields are reset.
this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._pendingCallbacks=null;this._pendingElement=null; // These fields do not really need to be reset since this object is no
// longer accessible.
this._context=null;this._rootNodeID=null;this._topLevelWrapper=null; // Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
ReactInstanceMap.remove(inst); // Some existing components rely on inst.props even after they've been
// destroyed (in event handlers).
// TODO: inst.props = null;
// TODO: inst.state = null;
// TODO: inst.context = null;
}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_maskContext:function(context){var maskedContext=null;var Component=this._currentElement.type;var contextTypes=Component.contextTypes;if(!contextTypes){return emptyObject;}maskedContext={};for(var contextName in contextTypes){maskedContext[contextName]=context[contextName];}return maskedContext;}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_processContext:function(context){var maskedContext=this._maskContext(context);if("development"!=='production'){var Component=this._currentElement.type;if(Component.contextTypes){this._checkPropTypes(Component.contextTypes,maskedContext,ReactPropTypeLocations.context);}}return maskedContext;}, /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */_processChildContext:function(currentContext){var Component=this._currentElement.type;var inst=this._instance;var childContext=inst.getChildContext&&inst.getChildContext();if(childContext){!(typeof Component.childContextTypes==='object')?"development"!=='production'?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;if("development"!=='production'){this._checkPropTypes(Component.childContextTypes,childContext,ReactPropTypeLocations.childContext);}for(var name in childContext){!(name in Component.childContextTypes)?"development"!=='production'?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||'ReactCompositeComponent',name):invariant(false):undefined;}return assign({},currentContext,childContext);}return currentContext;}, /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */_processProps:function(newProps){if("development"!=='production'){var Component=this._currentElement.type;if(Component.propTypes){this._checkPropTypes(Component.propTypes,newProps,ReactPropTypeLocations.prop);}}return newProps;}, /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */_checkPropTypes:function(propTypes,props,location){ // TODO: Stop validating prop types here and only use the element
// validation.
var componentName=this.getName();for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error;try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually '+'from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):undefined;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}if(error instanceof Error){ // We may want to extend this logic for similar errors in
// top-level render calls, so I'm abstracting it away into
// a function to minimize refactoring in the future
var addendum=getDeclarationErrorAddendum(this);if(location===ReactPropTypeLocations.prop){ // Preface gives us something to blacklist in warning module
"development"!=='production'?warning(false,'Failed Composite propType: %s%s',error.message,addendum):undefined;}else {"development"!=='production'?warning(false,'Failed Context Types: %s%s',error.message,addendum):undefined;}}}}},receiveComponent:function(nextElement,transaction,nextContext){var prevElement=this._currentElement;var prevContext=this._context;this._pendingElement=null;this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);}, /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function(transaction){if(this._pendingElement!=null){ReactReconciler.receiveComponent(this,this._pendingElement||this._currentElement,transaction,this._context);}if(this._pendingStateQueue!==null||this._pendingForceUpdate){this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);}}, /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */updateComponent:function(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){var inst=this._instance;var nextContext=this._context===nextUnmaskedContext?inst.context:this._processContext(nextUnmaskedContext);var nextProps; // Distinguish between a props update versus a simple state update
if(prevParentElement===nextParentElement){ // Skip checking prop types again -- we don't read inst.props to avoid
// warning for DOM component props in this upgrade
nextProps=nextParentElement.props;}else {nextProps=this._processProps(nextParentElement.props); // An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
if(inst.componentWillReceiveProps){inst.componentWillReceiveProps(nextProps,nextContext);}}var nextState=this._processPendingState(nextProps,nextContext);var shouldUpdate=this._pendingForceUpdate||!inst.shouldComponentUpdate||inst.shouldComponentUpdate(nextProps,nextState,nextContext);if("development"!=='production'){"development"!=='production'?warning(typeof shouldUpdate!=='undefined','%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',this.getName()||'ReactCompositeComponent'):undefined;}if(shouldUpdate){this._pendingForceUpdate=false; // Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);}else { // If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=nextParentElement;this._context=nextUnmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;}},_processPendingState:function(props,context){var inst=this._instance;var queue=this._pendingStateQueue;var replace=this._pendingReplaceState;this._pendingReplaceState=false;this._pendingStateQueue=null;if(!queue){return inst.state;}if(replace&&queue.length===1){return queue[0];}var nextState=assign({},replace?queue[0]:inst.state);for(var i=replace?1:0;i<queue.length;i++){var partial=queue[i];assign(nextState,typeof partial==='function'?partial.call(inst,nextState,props,context):partial);}return nextState;}, /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */_performComponentUpdate:function(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){var inst=this._instance;var hasComponentDidUpdate=Boolean(inst.componentDidUpdate);var prevProps;var prevState;var prevContext;if(hasComponentDidUpdate){prevProps=inst.props;prevState=inst.state;prevContext=inst.context;}if(inst.componentWillUpdate){inst.componentWillUpdate(nextProps,nextState,nextContext);}this._currentElement=nextElement;this._context=unmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;this._updateRenderedComponent(transaction,unmaskedContext);if(hasComponentDidUpdate){transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);}}, /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */_updateRenderedComponent:function(transaction,context){var prevComponentInstance=this._renderedComponent;var prevRenderedElement=prevComponentInstance._currentElement;var nextRenderedElement=this._renderValidatedComponent();if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._processChildContext(context));}else { // These two IDs are actually the same! But nothing should rely on that.
var thisID=this._rootNodeID;var prevComponentID=prevComponentInstance._rootNodeID;ReactReconciler.unmountComponent(prevComponentInstance);this._renderedComponent=this._instantiateReactComponent(nextRenderedElement);var nextMarkup=ReactReconciler.mountComponent(this._renderedComponent,thisID,transaction,this._processChildContext(context));this._replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}}, /**
   * @protected
   */_replaceNodeWithMarkupByID:function(prevComponentID,nextMarkup){ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}, /**
   * @protected
   */_renderValidatedComponentWithoutOwnerOrContext:function(){var inst=this._instance;var renderedComponent=inst.render();if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof renderedComponent==='undefined'&&inst.render._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
renderedComponent=null;}}return renderedComponent;}, /**
   * @private
   */_renderValidatedComponent:function(){var renderedComponent;ReactCurrentOwner.current=this;try{renderedComponent=this._renderValidatedComponentWithoutOwnerOrContext();}finally {ReactCurrentOwner.current=null;}!( // TODO: An `isValidNode` function would probably be more appropriate
renderedComponent===null||renderedComponent===false||ReactElement.isValidElement(renderedComponent))?"development"!=='production'?invariant(false,'%s.render(): A valid ReactComponent must be returned. You may have '+'returned undefined, an array or some other invalid object.',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;return renderedComponent;}, /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */attachRef:function(ref,component){var inst=this.getPublicInstance();!(inst!=null)?"development"!=='production'?invariant(false,'Stateless function components cannot have refs.'):invariant(false):undefined;var publicComponentInstance=component.getPublicInstance();if("development"!=='production'){var componentName=component&&component.getName?component.getName():'a component';"development"!=='production'?warning(publicComponentInstance!=null,'Stateless function components cannot be given refs '+'(See ref "%s" in %s created by %s). '+'Attempts to access this ref will fail.',ref,componentName,this.getName()):undefined;}var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;refs[ref]=publicComponentInstance;}, /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */detachRef:function(ref){var refs=this.getPublicInstance().refs;delete refs[ref];}, /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */getName:function(){var type=this._currentElement.type;var constructor=this._instance&&this._instance.constructor;return type.displayName||constructor&&constructor.displayName||type.name||constructor&&constructor.name||null;}, /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */getPublicInstance:function(){var inst=this._instance;if(inst instanceof StatelessComponent){return null;}return inst;}, // Stub
_instantiateReactComponent:null};ReactPerf.measureMethods(ReactCompositeComponentMixin,'ReactCompositeComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent',_renderValidatedComponent:'_renderValidatedComponent'});var ReactCompositeComponent={Mixin:ReactCompositeComponentMixin};module.exports=ReactCompositeComponent;},{"126":126,"137":137,"144":144,"155":155,"23":23,"32":32,"34":34,"52":52,"62":62,"71":71,"72":72,"73":73,"76":76,"82":82}],34:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */'use strict'; /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var ReactCurrentOwner={ /**
   * @internal
   * @type {ReactComponent}
   */current:null};module.exports=ReactCurrentOwner;},{}],35:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */ /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/'use strict';var ReactCurrentOwner=_dereq_(34);var ReactDOMTextComponent=_dereq_(46);var ReactDefaultInjection=_dereq_(49);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var ReactUpdates=_dereq_(83);var ReactVersion=_dereq_(84);var findDOMNode=_dereq_(108);var renderSubtreeIntoContainer=_dereq_(123);var warning=_dereq_(155);ReactDefaultInjection.inject();var render=ReactPerf.measure('React','render',ReactMount.render);var React={findDOMNode:findDOMNode,render:render,unmountComponentAtNode:ReactMount.unmountComponentAtNode,version:ReactVersion, /* eslint-disable camelcase */unstable_batchedUpdates:ReactUpdates.batchedUpdates,unstable_renderSubtreeIntoContainer:renderSubtreeIntoContainer}; // Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:ReactCurrentOwner,InstanceHandles:ReactInstanceHandles,Mount:ReactMount,Reconciler:ReactReconciler,TextComponent:ReactDOMTextComponent});}if("development"!=='production'){var ExecutionEnvironment=_dereq_(130);if(ExecutionEnvironment.canUseDOM&&window.top===window.self){ // First check if devtools is not installed
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){ // If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){console.debug('Download the React DevTools for a better development experience: '+'https://fb.me/react-devtools');}} // If we're in IE8, check to see if we are in compatibility mode and provide
// information on preventing compatibility mode
var ieCompatibilityMode=document.documentMode&&document.documentMode<8;"development"!=='production'?warning(!ieCompatibilityMode,'Internet Explorer is running in compatibility mode; please add the '+'following tag to your HTML to prevent this from happening: '+'<meta http-equiv="X-UA-Compatible" content="IE=edge" />'):undefined;var expectedFeatures=[ // shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim, // shams
Object.create,Object.freeze];for(var i=0;i<expectedFeatures.length;i++){if(!expectedFeatures[i]){console.error('One or more ES5 shim/shams expected by React are not available: '+'https://fb.me/react-warning-polyfills');break;}}}}module.exports=React;},{"108":108,"123":123,"130":130,"155":155,"34":34,"46":46,"49":49,"61":61,"65":65,"71":71,"76":76,"83":83,"84":84}],36:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */'use strict';var mouseListenerNames={onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true}; /**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */var ReactDOMButton={getNativeProps:function(inst,props,context){if(!props.disabled){return props;} // Copy the props, except the mouse listeners
var nativeProps={};for(var key in props){if(props.hasOwnProperty(key)&&!mouseListenerNames[key]){nativeProps[key]=props[key];}}return nativeProps;}};module.exports=ReactDOMButton;},{}],37:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */ /* global hasOwnProperty:true */'use strict';var AutoFocusUtils=_dereq_(2);var CSSPropertyOperations=_dereq_(5);var DOMProperty=_dereq_(10);var DOMPropertyOperations=_dereq_(11);var EventConstants=_dereq_(15);var ReactBrowserEventEmitter=_dereq_(26);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactDOMButton=_dereq_(36);var ReactDOMInput=_dereq_(41);var ReactDOMOption=_dereq_(42);var ReactDOMSelect=_dereq_(43);var ReactDOMTextarea=_dereq_(47);var ReactMount=_dereq_(65);var ReactMultiChild=_dereq_(66);var ReactPerf=_dereq_(71);var ReactUpdateQueue=_dereq_(82);var assign=_dereq_(23);var canDefineProperty=_dereq_(104);var escapeTextContentForBrowser=_dereq_(107);var invariant=_dereq_(144);var isEventSupported=_dereq_(119);var keyOf=_dereq_(148);var setInnerHTML=_dereq_(124);var setTextContent=_dereq_(125);var shallowEqual=_dereq_(153);var validateDOMNesting=_dereq_(128);var warning=_dereq_(155);var deleteListener=ReactBrowserEventEmitter.deleteListener;var listenTo=ReactBrowserEventEmitter.listenTo;var registrationNameModules=ReactBrowserEventEmitter.registrationNameModules; // For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES={'string':true,'number':true};var CHILDREN=keyOf({children:null});var STYLE=keyOf({style:null});var HTML=keyOf({__html:null});var ELEMENT_NODE_TYPE=1;function getDeclarationErrorAddendum(internalInstance){if(internalInstance){var owner=internalInstance._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' This DOM node was rendered by `'+name+'`.';}}}return '';}var legacyPropsDescriptor;if("development"!=='production'){legacyPropsDescriptor={props:{enumerable:false,get:function(){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .props of a DOM node; instead, '+'recreate the props as `render` did originally or read the DOM '+'properties/attributes directly from this node (e.g., '+'this.refs.box.className).%s',getDeclarationErrorAddendum(component)):undefined;return component._currentElement.props;}}};}function legacyGetDOMNode(){if("development"!=='production'){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; '+'instead, use the node directly.%s',getDeclarationErrorAddendum(component)):undefined;}return this;}function legacyIsMounted(){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s',getDeclarationErrorAddendum(component)):undefined;}return !!component;}function legacySetStateEtc(){if("development"!=='production'){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .setState(), .replaceState(), or '+'.forceUpdate() of a DOM node. This is a no-op.%s',getDeclarationErrorAddendum(component)):undefined;}}function legacySetProps(partialProps,callback){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .setProps() of a DOM node. '+'Instead, call ReactDOM.render again at the top level.%s',getDeclarationErrorAddendum(component)):undefined;}if(!component){return;}ReactUpdateQueue.enqueueSetPropsInternal(component,partialProps);if(callback){ReactUpdateQueue.enqueueCallbackInternal(component,callback);}}function legacyReplaceProps(partialProps,callback){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .replaceProps() of a DOM node. '+'Instead, call ReactDOM.render again at the top level.%s',getDeclarationErrorAddendum(component)):undefined;}if(!component){return;}ReactUpdateQueue.enqueueReplacePropsInternal(component,partialProps);if(callback){ReactUpdateQueue.enqueueCallbackInternal(component,callback);}}function friendlyStringify(obj){if(typeof obj==='object'){if(Array.isArray(obj)){return '['+obj.map(friendlyStringify).join(', ')+']';}else {var pairs=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var keyEscaped=/^[a-z$_][\w$_]*$/i.test(key)?key:JSON.stringify(key);pairs.push(keyEscaped+': '+friendlyStringify(obj[key]));}}return '{'+pairs.join(', ')+'}';}}else if(typeof obj==='string'){return JSON.stringify(obj);}else if(typeof obj==='function'){return '[function object]';} // Differs from JSON.stringify in that undefined becauses undefined and that
// inf and nan don't become null
return String(obj);}var styleMutationWarning={};function checkAndWarnForMutatedStyle(style1,style2,component){if(style1==null||style2==null){return;}if(shallowEqual(style1,style2)){return;}var componentName=component._tag;var owner=component._currentElement._owner;var ownerName;if(owner){ownerName=owner.getName();}var hash=ownerName+'|'+componentName;if(styleMutationWarning.hasOwnProperty(hash)){return;}styleMutationWarning[hash]=true;"development"!=='production'?warning(false,'`%s` was passed a style object that has previously been mutated. '+'Mutating `style` is deprecated. Consider cloning it beforehand. Check '+'the `render` %s. Previous style: %s. Mutated style: %s.',componentName,owner?'of `'+ownerName+'`':'using <'+componentName+'>',friendlyStringify(style1),friendlyStringify(style2)):undefined;} /**
 * @param {object} component
 * @param {?object} props
 */function assertValidProps(component,props){if(!props){return;} // Note the use of `==` which checks for null or undefined.
if("development"!=='production'){if(voidElementTags[component._tag]){"development"!=='production'?warning(props.children==null&&props.dangerouslySetInnerHTML==null,'%s is a void element tag and must not have `children` or '+'use `props.dangerouslySetInnerHTML`.%s',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):undefined;}}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?"development"!=='production'?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):invariant(false):undefined;!(typeof props.dangerouslySetInnerHTML==='object'&&HTML in props.dangerouslySetInnerHTML)?"development"!=='production'?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. '+'Please visit https://fb.me/react-invariant-dangerously-set-inner-html '+'for more information.'):invariant(false):undefined;}if("development"!=='production'){"development"!=='production'?warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):undefined;"development"!=='production'?warning(!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.'):undefined;}!(props.style==null||typeof props.style==='object')?"development"!=='production'?invariant(false,'The `style` prop expects a mapping from style properties to values, '+'not a string. For example, style={{marginRight: spacing + \'em\'}} when '+'using JSX.%s',getDeclarationErrorAddendum(component)):invariant(false):undefined;}function enqueuePutListener(id,registrationName,listener,transaction){if("development"!=='production'){ // IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
"development"!=='production'?warning(registrationName!=='onScroll'||isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):undefined;}var container=ReactMount.findReactContainerForID(id);if(container){var doc=container.nodeType===ELEMENT_NODE_TYPE?container.ownerDocument:container;listenTo(registrationName,doc);}transaction.getReactMountReady().enqueue(putListener,{id:id,registrationName:registrationName,listener:listener});}function putListener(){var listenerToPut=this;ReactBrowserEventEmitter.putListener(listenerToPut.id,listenerToPut.registrationName,listenerToPut.listener);} // There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapBubbledEventsLocal(){var inst=this; // If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
!inst._rootNodeID?"development"!=='production'?invariant(false,'Must be mounted to trap events'):invariant(false):undefined;var node=ReactMount.getNode(inst._rootNodeID);!node?"development"!=='production'?invariant(false,'trapBubbledEvent(...): Requires node to be rendered.'):invariant(false):undefined;switch(inst._tag){case 'iframe':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'video':case 'audio':inst._wrapperState.listeners=[]; // create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event],mediaEvents[event],node));}}break;case 'img':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'form':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset,'reset',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,'submit',node)];break;}}function mountReadyInputWrapper(){ReactDOMInput.mountReadyWrapper(this);}function postUpdateSelectWrapper(){ReactDOMSelect.postUpdateWrapper(this);} // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.
var omittedCloseTags={'area':true,'base':true,'br':true,'col':true,'embed':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true}; // NOTE: menuitem's close tag should be omitted, but that causes problems.
var newlineEatingTags={'listing':true,'pre':true,'textarea':true}; // For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=assign({'menuitem':true},omittedCloseTags); // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache={};var hasOwnProperty={}.hasOwnProperty;function validateDangerousTag(tag){if(!hasOwnProperty.call(validatedTagCache,tag)){!VALID_TAG_REGEX.test(tag)?"development"!=='production'?invariant(false,'Invalid tag: %s',tag):invariant(false):undefined;validatedTagCache[tag]=true;}}function processChildContextDev(context,inst){ // Pass down our tag name to child components for validation purposes
context=assign({},context);var info=context[validateDOMNesting.ancestorInfoContextKey];context[validateDOMNesting.ancestorInfoContextKey]=validateDOMNesting.updatedAncestorInfo(info,inst._tag,inst);return context;}function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;} /**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */function ReactDOMComponent(tag){validateDangerousTag(tag);this._tag=tag.toLowerCase();this._renderedChildren=null;this._previousStyle=null;this._previousStyleCopy=null;this._rootNodeID=null;this._wrapperState=null;this._topLevelWrapper=null;this._nodeWithLegacyProperties=null;if("development"!=='production'){this._unprocessedContextDev=null;this._processedContextDev=null;}}ReactDOMComponent.displayName='ReactDOMComponent';ReactDOMComponent.Mixin={construct:function(element){this._currentElement=element;}, /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   * @return {string} The computed markup.
   */mountComponent:function(rootID,transaction,context){this._rootNodeID=rootID;var props=this._currentElement.props;switch(this._tag){case 'iframe':case 'img':case 'form':case 'video':case 'audio':this._wrapperState={listeners:null};transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case 'button':props=ReactDOMButton.getNativeProps(this,props,context);break;case 'input':ReactDOMInput.mountWrapper(this,props,context);props=ReactDOMInput.getNativeProps(this,props,context);break;case 'option':ReactDOMOption.mountWrapper(this,props,context);props=ReactDOMOption.getNativeProps(this,props,context);break;case 'select':ReactDOMSelect.mountWrapper(this,props,context);props=ReactDOMSelect.getNativeProps(this,props,context);context=ReactDOMSelect.processChildContext(this,props,context);break;case 'textarea':ReactDOMTextarea.mountWrapper(this,props,context);props=ReactDOMTextarea.getNativeProps(this,props,context);break;}assertValidProps(this,props);if("development"!=='production'){if(context[validateDOMNesting.ancestorInfoContextKey]){validateDOMNesting(this._tag,this,context[validateDOMNesting.ancestorInfoContextKey]);}}if("development"!=='production'){this._unprocessedContextDev=context;this._processedContextDev=processChildContextDev(context,this);context=this._processedContextDev;}var mountImage;if(transaction.useCreateElement){var ownerDocument=context[ReactMount.ownerDocumentContextKey];var el=ownerDocument.createElement(this._currentElement.type);DOMPropertyOperations.setAttributeForID(el,this._rootNodeID); // Populate node cache
ReactMount.getID(el);this._updateDOMProperties({},props,transaction,el);this._createInitialChildren(transaction,props,context,el);mountImage=el;}else {var tagOpen=this._createOpenTagMarkupAndPutListeners(transaction,props);var tagContent=this._createContentMarkup(transaction,props,context);if(!tagContent&&omittedCloseTags[this._tag]){mountImage=tagOpen+'/>';}else {mountImage=tagOpen+'>'+tagContent+'</'+this._currentElement.type+'>';}}switch(this._tag){case 'input':transaction.getReactMountReady().enqueue(mountReadyInputWrapper,this); // falls through
case 'button':case 'select':case 'textarea':if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;}return mountImage;}, /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */_createOpenTagMarkupAndPutListeners:function(transaction,props){var ret='<'+this._currentElement.type;for(var propKey in props){if(!props.hasOwnProperty(propKey)){continue;}var propValue=props[propKey];if(propValue==null){continue;}if(registrationNameModules.hasOwnProperty(propKey)){if(propValue){enqueuePutListener(this._rootNodeID,propKey,propValue,transaction);}}else {if(propKey===STYLE){if(propValue){if("development"!=='production'){ // See `_updateDOMProperties`. style block
this._previousStyle=propValue;}propValue=this._previousStyleCopy=assign({},props.style);}propValue=CSSPropertyOperations.createMarkupForStyles(propValue);}var markup=null;if(this._tag!=null&&isCustomComponent(this._tag,props)){if(propKey!==CHILDREN){markup=DOMPropertyOperations.createMarkupForCustomAttribute(propKey,propValue);}}else {markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);}if(markup){ret+=' '+markup;}}} // For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
if(transaction.renderToStaticMarkup){return ret;}var markupForID=DOMPropertyOperations.createMarkupForID(this._rootNodeID);return ret+' '+markupForID;}, /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */_createContentMarkup:function(transaction,props,context){var ret=''; // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){ret=innerHTML.__html;}}else {var contentToUse=CONTENT_TYPES[typeof props.children]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
ret=escapeTextContentForBrowser(contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);ret=mountImages.join('');}}if(newlineEatingTags[this._tag]&&ret.charAt(0)==='\n'){ // text/html ignores the first character in these tags if it's a newline
// Prefer to break application/xml over text/html (for now) by adding
// a newline specifically to get eaten by the parser. (Alternately for
// textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
// \r is normalized out by HTMLTextAreaElement#value.)
// See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
// See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
// See: <http://www.w3.org/TR/html5/syntax.html#newlines>
// See: Parsing of "textarea" "listing" and "pre" elements
//  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
return '\n'+ret;}else {return ret;}},_createInitialChildren:function(transaction,props,context,el){ // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){setInnerHTML(el,innerHTML.__html);}}else {var contentToUse=CONTENT_TYPES[typeof props.children]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
setTextContent(el,contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);for(var i=0;i<mountImages.length;i++){el.appendChild(mountImages[i]);}}}}, /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */receiveComponent:function(nextElement,transaction,context){var prevElement=this._currentElement;this._currentElement=nextElement;this.updateComponent(transaction,prevElement,nextElement,context);}, /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */updateComponent:function(transaction,prevElement,nextElement,context){var lastProps=prevElement.props;var nextProps=this._currentElement.props;switch(this._tag){case 'button':lastProps=ReactDOMButton.getNativeProps(this,lastProps);nextProps=ReactDOMButton.getNativeProps(this,nextProps);break;case 'input':ReactDOMInput.updateWrapper(this);lastProps=ReactDOMInput.getNativeProps(this,lastProps);nextProps=ReactDOMInput.getNativeProps(this,nextProps);break;case 'option':lastProps=ReactDOMOption.getNativeProps(this,lastProps);nextProps=ReactDOMOption.getNativeProps(this,nextProps);break;case 'select':lastProps=ReactDOMSelect.getNativeProps(this,lastProps);nextProps=ReactDOMSelect.getNativeProps(this,nextProps);break;case 'textarea':ReactDOMTextarea.updateWrapper(this);lastProps=ReactDOMTextarea.getNativeProps(this,lastProps);nextProps=ReactDOMTextarea.getNativeProps(this,nextProps);break;}if("development"!=='production'){ // If the context is reference-equal to the old one, pass down the same
// processed object so the update bailout in ReactReconciler behaves
// correctly (and identically in dev and prod). See #5005.
if(this._unprocessedContextDev!==context){this._unprocessedContextDev=context;this._processedContextDev=processChildContextDev(context,this);}context=this._processedContextDev;}assertValidProps(this,nextProps);this._updateDOMProperties(lastProps,nextProps,transaction,null);this._updateDOMChildren(lastProps,nextProps,transaction,context);if(!canDefineProperty&&this._nodeWithLegacyProperties){this._nodeWithLegacyProperties.props=nextProps;}if(this._tag==='select'){ // <select> value update needs to occur after <option> children
// reconciliation
transaction.getReactMountReady().enqueue(postUpdateSelectWrapper,this);}}, /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {?DOMElement} node
   */_updateDOMProperties:function(lastProps,nextProps,transaction,node){var propKey;var styleName;var styleUpdates;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)){continue;}if(propKey===STYLE){var lastStyle=this._previousStyleCopy;for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}}this._previousStyleCopy=null;}else if(registrationNameModules.hasOwnProperty(propKey)){if(lastProps[propKey]){ // Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
deleteListener(this._rootNodeID,propKey);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){if(!node){node=ReactMount.getNode(this._rootNodeID);}DOMPropertyOperations.deleteValueForProperty(node,propKey);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=propKey===STYLE?this._previousStyleCopy:lastProps[propKey];if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp){continue;}if(propKey===STYLE){if(nextProp){if("development"!=='production'){checkAndWarnForMutatedStyle(this._previousStyleCopy,this._previousStyle,this);this._previousStyle=nextProp;}nextProp=this._previousStyleCopy=assign({},nextProp);}else {this._previousStyleCopy=null;}if(lastProp){ // Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}} // Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){styleUpdates=styleUpdates||{};styleUpdates[styleName]=nextProp[styleName];}}}else { // Relies on `updateStylesByID` not mutating `styleUpdates`.
styleUpdates=nextProp;}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){enqueuePutListener(this._rootNodeID,propKey,nextProp,transaction);}else if(lastProp){deleteListener(this._rootNodeID,propKey);}}else if(isCustomComponent(this._tag,nextProps)){if(!node){node=ReactMount.getNode(this._rootNodeID);}if(propKey===CHILDREN){nextProp=null;}DOMPropertyOperations.setValueForAttribute(node,propKey,nextProp);}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){if(!node){node=ReactMount.getNode(this._rootNodeID);} // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertantly setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(nextProp!=null){DOMPropertyOperations.setValueForProperty(node,propKey,nextProp);}else {DOMPropertyOperations.deleteValueForProperty(node,propKey);}}}if(styleUpdates){if(!node){node=ReactMount.getNode(this._rootNodeID);}CSSPropertyOperations.setValueForStyles(node,styleUpdates);}}, /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */_updateDOMChildren:function(lastProps,nextProps,transaction,context){var lastContent=CONTENT_TYPES[typeof lastProps.children]?lastProps.children:null;var nextContent=CONTENT_TYPES[typeof nextProps.children]?nextProps.children:null;var lastHtml=lastProps.dangerouslySetInnerHTML&&lastProps.dangerouslySetInnerHTML.__html;var nextHtml=nextProps.dangerouslySetInnerHTML&&nextProps.dangerouslySetInnerHTML.__html; // Note the use of `!=` which checks for null or undefined.
var lastChildren=lastContent!=null?null:lastProps.children;var nextChildren=nextContent!=null?null:nextProps.children; // If we're switching from children to content/html or vice versa, remove
// the old content
var lastHasContentOrHtml=lastContent!=null||lastHtml!=null;var nextHasContentOrHtml=nextContent!=null||nextHtml!=null;if(lastChildren!=null&&nextChildren==null){this.updateChildren(null,transaction,context);}else if(lastHasContentOrHtml&&!nextHasContentOrHtml){this.updateTextContent('');}if(nextContent!=null){if(lastContent!==nextContent){this.updateTextContent(''+nextContent);}}else if(nextHtml!=null){if(lastHtml!==nextHtml){this.updateMarkup(''+nextHtml);}}else if(nextChildren!=null){this.updateChildren(nextChildren,transaction,context);}}, /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */unmountComponent:function(){switch(this._tag){case 'iframe':case 'img':case 'form':case 'video':case 'audio':var listeners=this._wrapperState.listeners;if(listeners){for(var i=0;i<listeners.length;i++){listeners[i].remove();}}break;case 'input':ReactDOMInput.unmountWrapper(this);break;case 'html':case 'head':case 'body': /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */!false?"development"!=='production'?invariant(false,'<%s> tried to unmount. Because of cross-browser quirks it is '+'impossible to unmount some top-level components (eg <html>, '+'<head>, and <body>) reliably and efficiently. To fix this, have a '+'single top-level component that never unmounts render these '+'elements.',this._tag):invariant(false):undefined;break;}this.unmountChildren();ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);this._rootNodeID=null;this._wrapperState=null;if(this._nodeWithLegacyProperties){var node=this._nodeWithLegacyProperties;node._reactInternalComponent=null;this._nodeWithLegacyProperties=null;}},getPublicInstance:function(){if(!this._nodeWithLegacyProperties){var node=ReactMount.getNode(this._rootNodeID);node._reactInternalComponent=this;node.getDOMNode=legacyGetDOMNode;node.isMounted=legacyIsMounted;node.setState=legacySetStateEtc;node.replaceState=legacySetStateEtc;node.forceUpdate=legacySetStateEtc;node.setProps=legacySetProps;node.replaceProps=legacyReplaceProps;if("development"!=='production'){if(canDefineProperty){Object.defineProperties(node,legacyPropsDescriptor);}else { // updateComponent will update this property on subsequent renders
node.props=this._currentElement.props;}}else { // updateComponent will update this property on subsequent renders
node.props=this._currentElement.props;}this._nodeWithLegacyProperties=node;}return this._nodeWithLegacyProperties;}};ReactPerf.measureMethods(ReactDOMComponent,'ReactDOMComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent'});assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);module.exports=ReactDOMComponent;},{"10":10,"104":104,"107":107,"11":11,"119":119,"124":124,"125":125,"128":128,"144":144,"148":148,"15":15,"153":153,"155":155,"2":2,"23":23,"26":26,"31":31,"36":36,"41":41,"42":42,"43":43,"47":47,"5":5,"65":65,"66":66,"71":71,"82":82}],38:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 * @typechecks static-only
 */'use strict';var ReactElement=_dereq_(52);var ReactElementValidator=_dereq_(53);var mapObject=_dereq_(149); /**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */function createDOMFactory(tag){if("development"!=='production'){return ReactElementValidator.createFactory(tag);}return ReactElement.createFactory(tag);} /**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */var ReactDOMFactories=mapObject({a:'a',abbr:'abbr',address:'address',area:'area',article:'article',aside:'aside',audio:'audio',b:'b',base:'base',bdi:'bdi',bdo:'bdo',big:'big',blockquote:'blockquote',body:'body',br:'br',button:'button',canvas:'canvas',caption:'caption',cite:'cite',code:'code',col:'col',colgroup:'colgroup',data:'data',datalist:'datalist',dd:'dd',del:'del',details:'details',dfn:'dfn',dialog:'dialog',div:'div',dl:'dl',dt:'dt',em:'em',embed:'embed',fieldset:'fieldset',figcaption:'figcaption',figure:'figure',footer:'footer',form:'form',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',h6:'h6',head:'head',header:'header',hgroup:'hgroup',hr:'hr',html:'html',i:'i',iframe:'iframe',img:'img',input:'input',ins:'ins',kbd:'kbd',keygen:'keygen',label:'label',legend:'legend',li:'li',link:'link',main:'main',map:'map',mark:'mark',menu:'menu',menuitem:'menuitem',meta:'meta',meter:'meter',nav:'nav',noscript:'noscript',object:'object',ol:'ol',optgroup:'optgroup',option:'option',output:'output',p:'p',param:'param',picture:'picture',pre:'pre',progress:'progress',q:'q',rp:'rp',rt:'rt',ruby:'ruby',s:'s',samp:'samp',script:'script',section:'section',select:'select',small:'small',source:'source',span:'span',strong:'strong',style:'style',sub:'sub',summary:'summary',sup:'sup',table:'table',tbody:'tbody',td:'td',textarea:'textarea',tfoot:'tfoot',th:'th',thead:'thead',time:'time',title:'title',tr:'tr',track:'track',u:'u',ul:'ul','var':'var',video:'video',wbr:'wbr', // SVG
circle:'circle',clipPath:'clipPath',defs:'defs',ellipse:'ellipse',g:'g',image:'image',line:'line',linearGradient:'linearGradient',mask:'mask',path:'path',pattern:'pattern',polygon:'polygon',polyline:'polyline',radialGradient:'radialGradient',rect:'rect',stop:'stop',svg:'svg',text:'text',tspan:'tspan'},createDOMFactory);module.exports=ReactDOMFactories;},{"149":149,"52":52,"53":53}],39:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */'use strict';var ReactDOMFeatureFlags={useCreateElement:false};module.exports=ReactDOMFeatureFlags;},{}],40:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */'use strict';var DOMChildrenOperations=_dereq_(9);var DOMPropertyOperations=_dereq_(11);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var invariant=_dereq_(144); /**
 * Errors for properties that should not be updated with `updatePropertyByID()`.
 *
 * @type {object}
 * @private
 */var INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:'`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',style:'`style` must be set using `updateStylesByID()`.'}; /**
 * Operations used to process updates to DOM nodes.
 */var ReactDOMIDOperations={ /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */updatePropertyByID:function(id,name,value){var node=ReactMount.getNode(id);!!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)?"development"!=='production'?invariant(false,'updatePropertyByID(...): %s',INVALID_PROPERTY_ERRORS[name]):invariant(false):undefined; // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertantly setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(value!=null){DOMPropertyOperations.setValueForProperty(node,name,value);}else {DOMPropertyOperations.deleteValueForProperty(node,name);}}, /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */dangerouslyReplaceNodeWithMarkupByID:function(id,markup){var node=ReactMount.getNode(id);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node,markup);}, /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */dangerouslyProcessChildrenUpdates:function(updates,markup){for(var i=0;i<updates.length;i++){updates[i].parentNode=ReactMount.getNode(updates[i].parentID);}DOMChildrenOperations.processUpdates(updates,markup);}};ReactPerf.measureMethods(ReactDOMIDOperations,'ReactDOMIDOperations',{dangerouslyReplaceNodeWithMarkupByID:'dangerouslyReplaceNodeWithMarkupByID',dangerouslyProcessChildrenUpdates:'dangerouslyProcessChildrenUpdates'});module.exports=ReactDOMIDOperations;},{"11":11,"144":144,"65":65,"71":71,"9":9}],41:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */'use strict';var ReactDOMIDOperations=_dereq_(40);var LinkedValueUtils=_dereq_(22);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var instancesByReactID={};function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMInput.updateWrapper(this);}} /**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput={getNativeProps:function(inst,props,context){var value=LinkedValueUtils.getValue(props);var checked=LinkedValueUtils.getChecked(props);var nativeProps=assign({},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:inst._wrapperState.initialValue,checked:checked!=null?checked:inst._wrapperState.initialChecked,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('input',props,inst._currentElement._owner);}var defaultValue=props.defaultValue;inst._wrapperState={initialChecked:props.defaultChecked||false,initialValue:defaultValue!=null?defaultValue:null,onChange:_handleChange.bind(inst)};},mountReadyWrapper:function(inst){ // Can't be in mountWrapper or else server rendering leaks.
instancesByReactID[inst._rootNodeID]=inst;},unmountWrapper:function(inst){delete instancesByReactID[inst._rootNodeID];},updateWrapper:function(inst){var props=inst._currentElement.props; // TODO: Shouldn't this be getChecked(props)?
var checked=props.checked;if(checked!=null){ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'checked',checked||false);}var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event); // Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
ReactUpdates.asap(forceUpdateIfMounted,this);var name=props.name;if(props.type==='radio'&&name!=null){var rootNode=ReactMount.getNode(this._rootNodeID);var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;} // If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form, let's just use the global
// `querySelectorAll` to ensure we don't miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;} // This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React with non-React.
var otherID=ReactMount.getID(otherNode);!otherID?"development"!=='production'?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the '+'same `name` is not supported.'):invariant(false):undefined;var otherInstance=instancesByReactID[otherID];!otherInstance?"development"!=='production'?invariant(false,'ReactDOMInput: Unknown radio button ID %s.',otherID):invariant(false):undefined; // If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactUpdates.asap(forceUpdateIfMounted,otherInstance);}}return returnValue;}module.exports=ReactDOMInput;},{"144":144,"22":22,"23":23,"40":40,"65":65,"83":83}],42:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */'use strict';var ReactChildren=_dereq_(28);var ReactDOMSelect=_dereq_(43);var assign=_dereq_(23);var warning=_dereq_(155);var valueContextKey=ReactDOMSelect.valueContextKey; /**
 * Implements an <option> native component that warns when `selected` is set.
 */var ReactDOMOption={mountWrapper:function(inst,props,context){ // TODO (yungsters): Remove support for `selected` in <option>.
if("development"!=='production'){"development"!=='production'?warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.'):undefined;} // Look up whether this option is 'selected' via context
var selectValue=context[valueContextKey]; // If context key is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var selected=null;if(selectValue!=null){selected=false;if(Array.isArray(selectValue)){ // multiple
for(var i=0;i<selectValue.length;i++){if(''+selectValue[i]===''+props.value){selected=true;break;}}}else {selected=''+selectValue===''+props.value;}}inst._wrapperState={selected:selected};},getNativeProps:function(inst,props,context){var nativeProps=assign({selected:undefined,children:undefined},props); // Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
if(inst._wrapperState.selected!=null){nativeProps.selected=inst._wrapperState.selected;}var content=''; // Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
ReactChildren.forEach(props.children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}else {"development"!=='production'?warning(false,'Only strings and numbers are supported as <option> children.'):undefined;}});if(content){nativeProps.children=content;}return nativeProps;}};module.exports=ReactDOMOption;},{"155":155,"23":23,"28":28,"43":43}],43:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */'use strict';var LinkedValueUtils=_dereq_(22);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var warning=_dereq_(155);var valueContextKey='__ReactDOMSelect_value$'+Math.random().toString(36).slice(2);function updateOptionsIfPendingUpdateAndMounted(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=false;var props=this._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){updateOptions(this,Boolean(props.multiple),value);}}}function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}var valuePropNames=['value','defaultValue']; /**
 * Validation function for `value` and `defaultValue`.
 * @private
 */function checkSelectPropTypes(inst,props){var owner=inst._currentElement._owner;LinkedValueUtils.checkPropTypes('select',props,owner);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}if(props.multiple){"development"!=='production'?warning(Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum(owner)):undefined;}else {"development"!=='production'?warning(!Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum(owner)):undefined;}}} /**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */function updateOptions(inst,multiple,propValue){var selectedValue,i;var options=ReactMount.getNode(inst._rootNodeID).options;if(multiple){selectedValue={};for(i=0;i<propValue.length;i++){selectedValue[''+propValue[i]]=true;}for(i=0;i<options.length;i++){var selected=selectedValue.hasOwnProperty(options[i].value);if(options[i].selected!==selected){options[i].selected=selected;}}}else { // Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
selectedValue=''+propValue;for(i=0;i<options.length;i++){if(options[i].value===selectedValue){options[i].selected=true;return;}}if(options.length){options[0].selected=true;}}} /**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect={valueContextKey:valueContextKey,getNativeProps:function(inst,props,context){return assign({},props,{onChange:inst._wrapperState.onChange,value:undefined});},mountWrapper:function(inst,props){if("development"!=='production'){checkSelectPropTypes(inst,props);}var value=LinkedValueUtils.getValue(props);inst._wrapperState={pendingUpdate:false,initialValue:value!=null?value:props.defaultValue,onChange:_handleChange.bind(inst),wasMultiple:Boolean(props.multiple)};},processChildContext:function(inst,props,context){ // Pass down initial value so initial generated markup has correct
// `selected` attributes
var childContext=assign({},context);childContext[valueContextKey]=inst._wrapperState.initialValue;return childContext;},postUpdateWrapper:function(inst){var props=inst._currentElement.props; // After the initial mount, we control selected-ness manually so don't pass
// the context value down
inst._wrapperState.initialValue=undefined;var wasMultiple=inst._wrapperState.wasMultiple;inst._wrapperState.wasMultiple=Boolean(props.multiple);var value=LinkedValueUtils.getValue(props);if(value!=null){inst._wrapperState.pendingUpdate=false;updateOptions(inst,Boolean(props.multiple),value);}else if(wasMultiple!==Boolean(props.multiple)){ // For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(inst,Boolean(props.multiple),props.defaultValue);}else { // Revert the select back to its default unselected state.
updateOptions(inst,Boolean(props.multiple),props.multiple?[]:'');}}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);this._wrapperState.pendingUpdate=true;ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);return returnValue;}module.exports=ReactDOMSelect;},{"155":155,"22":22,"23":23,"65":65,"83":83}],44:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */'use strict';var ExecutionEnvironment=_dereq_(130);var getNodeForCharacterOffset=_dereq_(116);var getTextContentAccessor=_dereq_(117); /**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){return anchorNode===focusNode&&anchorOffset===focusOffset;} /**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getIEOffsets(node){var selection=document.selection;var selectedRange=selection.createRange();var selectedLength=selectedRange.text.length; // Duplicate selection so we can move range without breaking user selection.
var fromStart=selectedRange.duplicate();fromStart.moveToElementText(node);fromStart.setEndPoint('EndToStart',selectedRange);var startOffset=fromStart.text.length;var endOffset=startOffset+selectedLength;return {start:startOffset,end:endOffset};} /**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0); // In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{ /* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType; /* eslint-enable no-unused-expressions */}catch(e){return null;} // If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength; // Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode,focusOffset);var isBackward=detectionRange.collapsed;return {start:isBackward?end:start,end:isBackward?start:end};} /**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setIEOffsets(node,offsets){var range=document.selection.createRange().duplicate();var start,end;if(typeof offsets.end==='undefined'){start=offsets.start;end=start;}else if(offsets.start>offsets.end){start=offsets.end;end=offsets.start;}else {start=offsets.start;end=offsets.end;}range.moveToElementText(node);range.moveStart('character',start);range.setEndPoint('EndToStart',range);range.moveEnd('character',end-start);range.select();} /**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=typeof offsets.end==='undefined'?start:Math.min(offsets.end,length); // IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else {range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var useIEOffsets=ExecutionEnvironment.canUseDOM&&'selection' in document&&!('getSelection' in window);var ReactDOMSelection={ /**
   * @param {DOMElement} node
   */getOffsets:useIEOffsets?getIEOffsets:getModernOffsets, /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;},{"116":116,"117":117,"130":130}],45:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMServer
 */'use strict';var ReactDefaultInjection=_dereq_(49);var ReactServerRendering=_dereq_(80);var ReactVersion=_dereq_(84);ReactDefaultInjection.inject();var ReactDOMServer={renderToString:ReactServerRendering.renderToString,renderToStaticMarkup:ReactServerRendering.renderToStaticMarkup,version:ReactVersion};module.exports=ReactDOMServer;},{"49":49,"80":80,"84":84}],46:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */'use strict';var DOMChildrenOperations=_dereq_(9);var DOMPropertyOperations=_dereq_(11);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactMount=_dereq_(65);var assign=_dereq_(23);var escapeTextContentForBrowser=_dereq_(107);var setTextContent=_dereq_(125);var validateDOMNesting=_dereq_(128); /**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */var ReactDOMTextComponent=function(props){ // This constructor and its argument is currently used by mocks.
};assign(ReactDOMTextComponent.prototype,{ /**
   * @param {ReactText} text
   * @internal
   */construct:function(text){ // TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=text;this._stringText=''+text; // Properties
this._rootNodeID=null;this._mountIndex=0;}, /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */mountComponent:function(rootID,transaction,context){if("development"!=='production'){if(context[validateDOMNesting.ancestorInfoContextKey]){validateDOMNesting('span',null,context[validateDOMNesting.ancestorInfoContextKey]);}}this._rootNodeID=rootID;if(transaction.useCreateElement){var ownerDocument=context[ReactMount.ownerDocumentContextKey];var el=ownerDocument.createElement('span');DOMPropertyOperations.setAttributeForID(el,rootID); // Populate node cache
ReactMount.getID(el);setTextContent(el,this._stringText);return el;}else {var escapedText=escapeTextContentForBrowser(this._stringText);if(transaction.renderToStaticMarkup){ // Normally we'd wrap this in a `span` for the reasons stated above, but
// since this is a situation where React won't take over (static pages),
// we can simply return the text as it is.
return escapedText;}return '<span '+DOMPropertyOperations.createMarkupForID(rootID)+'>'+escapedText+'</span>';}}, /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */receiveComponent:function(nextText,transaction){if(nextText!==this._currentElement){this._currentElement=nextText;var nextStringText=''+nextText;if(nextStringText!==this._stringText){ // TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText=nextStringText;var node=ReactMount.getNode(this._rootNodeID);DOMChildrenOperations.updateTextContent(node,nextStringText);}}},unmountComponent:function(){ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);}});module.exports=ReactDOMTextComponent;},{"107":107,"11":11,"125":125,"128":128,"23":23,"31":31,"65":65,"9":9}],47:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */'use strict';var LinkedValueUtils=_dereq_(22);var ReactDOMIDOperations=_dereq_(40);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var warning=_dereq_(155);function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMTextarea.updateWrapper(this);}} /**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea={getNativeProps:function(inst,props,context){!(props.dangerouslySetInnerHTML==null)?"development"!=='production'?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):invariant(false):undefined; // Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.
var nativeProps=assign({},props,{defaultValue:undefined,value:undefined,children:inst._wrapperState.initialValue,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('textarea',props,inst._currentElement._owner);}var defaultValue=props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){if("development"!=='production'){"development"!=='production'?warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.'):undefined;}!(defaultValue==null)?"development"!=='production'?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):invariant(false):undefined;if(Array.isArray(children)){!(children.length<=1)?"development"!=='production'?invariant(false,'<textarea> can only have at most one child.'):invariant(false):undefined;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}var value=LinkedValueUtils.getValue(props);inst._wrapperState={ // We save the initial value so that `ReactDOMComponent` doesn't update
// `textContent` (unnecessary since we update value).
// The initial value can be a boolean or object so that's why it's
// forced to be a string.
initialValue:''+(value!=null?value:defaultValue),onChange:_handleChange.bind(inst)};},updateWrapper:function(inst){var props=inst._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);ReactUpdates.asap(forceUpdateIfMounted,this);return returnValue;}module.exports=ReactDOMTextarea;},{"144":144,"155":155,"22":22,"23":23,"40":40,"83":83}],48:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */'use strict';var ReactUpdates=_dereq_(83);var Transaction=_dereq_(100);var assign=_dereq_(23);var emptyFunction=_dereq_(136);var RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function(){ReactDefaultBatchingStrategy.isBatchingUpdates=false;}};var FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction();}assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}});var transaction=new ReactDefaultBatchingStrategyTransaction();var ReactDefaultBatchingStrategy={isBatchingUpdates:false, /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */batchedUpdates:function(callback,a,b,c,d,e){var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=true; // The code is written this way to avoid extra allocations
if(alreadyBatchingUpdates){callback(a,b,c,d,e);}else {transaction.perform(callback,null,a,b,c,d,e);}}};module.exports=ReactDefaultBatchingStrategy;},{"100":100,"136":136,"23":23,"83":83}],49:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */'use strict';var BeforeInputEventPlugin=_dereq_(3);var ChangeEventPlugin=_dereq_(7);var ClientReactRootIndex=_dereq_(8);var DefaultEventPluginOrder=_dereq_(13);var EnterLeaveEventPlugin=_dereq_(14);var ExecutionEnvironment=_dereq_(130);var HTMLDOMPropertyConfig=_dereq_(21);var ReactBrowserComponentMixin=_dereq_(25);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactDefaultBatchingStrategy=_dereq_(48);var ReactDOMComponent=_dereq_(37);var ReactDOMTextComponent=_dereq_(46);var ReactEventListener=_dereq_(58);var ReactInjection=_dereq_(59);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactReconcileTransaction=_dereq_(75);var SelectEventPlugin=_dereq_(86);var ServerReactRootIndex=_dereq_(87);var SimpleEventPlugin=_dereq_(88);var SVGDOMPropertyConfig=_dereq_(85);var alreadyInjected=false;function inject(){if(alreadyInjected){ // TODO: This is currently true because these injections are shared between
// the client and the server package. They should be built independently
// and not share any injection state. Then this problem will be solved.
return;}alreadyInjected=true;ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener); /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);ReactInjection.EventPluginHub.injectMount(ReactMount); /**
   * Some important event plugins included by default (without having to require
   * them).
   */ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);ReactInjection.EmptyComponent.injectEmptyComponent('noscript');ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM?ClientReactRootIndex.createReactRootIndex:ServerReactRootIndex.createReactRootIndex);ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);if("development"!=='production'){var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){var ReactDefaultPerf=_dereq_(50);ReactDefaultPerf.start();}}}module.exports={inject:inject};},{"13":13,"130":130,"14":14,"21":21,"25":25,"3":3,"31":31,"37":37,"46":46,"48":48,"50":50,"58":58,"59":59,"61":61,"65":65,"7":7,"75":75,"8":8,"85":85,"86":86,"87":87,"88":88}],50:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var ReactDefaultPerfAnalysis=_dereq_(51);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var performanceNow=_dereq_(152);function roundFloat(val){return Math.floor(val*100)/100;}function addValue(obj,key,val){obj[key]=(obj[key]||0)+val;}var ReactDefaultPerf={_allMeasurements:[], // last item in the list is the current one
_mountStack:[0],_injected:false,start:function(){if(!ReactDefaultPerf._injected){ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);}ReactDefaultPerf._allMeasurements.length=0;ReactPerf.enableMeasure=true;},stop:function(){ReactPerf.enableMeasure=false;},getLastMeasurements:function(){return ReactDefaultPerf._allMeasurements;},printExclusive:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);console.table(summary.map(function(item){return {'Component class name':item.componentName,'Total inclusive time (ms)':roundFloat(item.inclusive),'Exclusive mount time (ms)':roundFloat(item.exclusive),'Exclusive render time (ms)':roundFloat(item.render),'Mount time per instance (ms)':roundFloat(item.exclusive/item.count),'Render time per instance (ms)':roundFloat(item.render/item.count),'Instances':item.count};})); // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
// number.
},printInclusive:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);console.table(summary.map(function(item){return {'Owner > component':item.componentName,'Inclusive time (ms)':roundFloat(item.time),'Instances':item.count};}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},getMeasurementsSummaryMap:function(measurements){var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements,true);return summary.map(function(item){return {'Owner > component':item.componentName,'Wasted time (ms)':item.time,'Instances':item.count};});},printWasted:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},printDOM:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getDOMSummary(measurements);console.table(summary.map(function(item){var result={};result[DOMProperty.ID_ATTRIBUTE_NAME]=item.id;result.type=item.type;result.args=JSON.stringify(item.args);return result;}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},_recordWrite:function(id,fnName,totalTime,args){ // TODO: totalTime isn't that useful since it doesn't count paints/reflows
var writes=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].writes;writes[id]=writes[id]||[];writes[id].push({type:fnName,time:totalTime,args:args});},measure:function(moduleName,fnName,func){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var totalTime;var rv;var start;if(fnName==='_renderNewRootComponent'||fnName==='flushBatchedUpdates'){ // A "measurement" is a set of metrics recorded for each flush. We want
// to group the metrics for a given flush together so we can look at the
// components that rendered and the DOM operations that actually
// happened to determine the amount of "wasted work" performed.
ReactDefaultPerf._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0,created:{}});start=performanceNow();rv=func.apply(this,args);ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].totalTime=performanceNow()-start;return rv;}else if(fnName==='_mountImageIntoNode'||moduleName==='ReactBrowserEventEmitter'||moduleName==='ReactDOMIDOperations'||moduleName==='CSSPropertyOperations'||moduleName==='DOMChildrenOperations'||moduleName==='DOMPropertyOperations'){start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;if(fnName==='_mountImageIntoNode'){var mountID=ReactMount.getID(args[1]);ReactDefaultPerf._recordWrite(mountID,fnName,totalTime,args[0]);}else if(fnName==='dangerouslyProcessChildrenUpdates'){ // special format
args[0].forEach(function(update){var writeArgs={};if(update.fromIndex!==null){writeArgs.fromIndex=update.fromIndex;}if(update.toIndex!==null){writeArgs.toIndex=update.toIndex;}if(update.textContent!==null){writeArgs.textContent=update.textContent;}if(update.markupIndex!==null){writeArgs.markup=args[1][update.markupIndex];}ReactDefaultPerf._recordWrite(update.parentID,update.type,totalTime,writeArgs);});}else { // basic format
var id=args[0];if(typeof id==='object'){id=ReactMount.getID(args[0]);}ReactDefaultPerf._recordWrite(id,fnName,totalTime,Array.prototype.slice.call(args,1));}return rv;}else if(moduleName==='ReactCompositeComponent'&&(fnName==='mountComponent'||fnName==='updateComponent'|| // TODO: receiveComponent()?
fnName==='_renderValidatedComponent')){if(this._currentElement.type===ReactMount.TopLevelWrapper){return func.apply(this,args);}var rootNodeID=fnName==='mountComponent'?args[0]:this._rootNodeID;var isRender=fnName==='_renderValidatedComponent';var isMount=fnName==='mountComponent';var mountStack=ReactDefaultPerf._mountStack;var entry=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1];if(isRender){addValue(entry.counts,rootNodeID,1);}else if(isMount){entry.created[rootNodeID]=true;mountStack.push(0);}start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;if(isRender){addValue(entry.render,rootNodeID,totalTime);}else if(isMount){var subMountTime=mountStack.pop();mountStack[mountStack.length-1]+=totalTime;addValue(entry.exclusive,rootNodeID,totalTime-subMountTime);addValue(entry.inclusive,rootNodeID,totalTime);}else {addValue(entry.inclusive,rootNodeID,totalTime);}entry.displayNames[rootNodeID]={current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():'<root>'};return rv;}else {return func.apply(this,args);}};}};module.exports=ReactDefaultPerf;},{"10":10,"152":152,"51":51,"65":65,"71":71}],51:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */'use strict';var assign=_dereq_(23); // Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD=1.2;var DOM_OPERATION_TYPES={'_mountImageIntoNode':'set innerHTML',INSERT_MARKUP:'set innerHTML',MOVE_EXISTING:'move',REMOVE_NODE:'remove',SET_MARKUP:'set innerHTML',TEXT_CONTENT:'set textContent','setValueForProperty':'update attribute','setValueForAttribute':'update attribute','deleteValueForProperty':'remove attribute','setValueForStyles':'update styles','replaceNodeWithMarkup':'replace','updateTextContent':'set textContent'};function getTotalTime(measurements){ // TODO: return number of DOM ops? could be misleading.
// TODO: measure dropped frames after reconcile?
// TODO: log total time of each reconcile and the top-level component
// class that triggered it.
var totalTime=0;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];totalTime+=measurement.totalTime;}return totalTime;}function getDOMSummary(measurements){var items=[];measurements.forEach(function(measurement){Object.keys(measurement.writes).forEach(function(id){measurement.writes[id].forEach(function(write){items.push({id:id,type:DOM_OPERATION_TYPES[write.type]||write.type,args:write.args});});});});return items;}function getExclusiveSummary(measurements){var candidates={};var displayName;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){displayName=measurement.displayNames[id].current;candidates[displayName]=candidates[displayName]||{componentName:displayName,inclusive:0,exclusive:0,render:0,count:0};if(measurement.render[id]){candidates[displayName].render+=measurement.render[id];}if(measurement.exclusive[id]){candidates[displayName].exclusive+=measurement.exclusive[id];}if(measurement.inclusive[id]){candidates[displayName].inclusive+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[displayName].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(displayName in candidates){if(candidates[displayName].exclusive>=DONT_CARE_THRESHOLD){arr.push(candidates[displayName]);}}arr.sort(function(a,b){return b.exclusive-a.exclusive;});return arr;}function getInclusiveSummary(measurements,onlyClean){var candidates={};var inclusiveKey;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);var cleanComponents;if(onlyClean){cleanComponents=getUnchangedComponents(measurement);}for(var id in allIDs){if(onlyClean&&!cleanComponents[id]){continue;}var displayName=measurement.displayNames[id]; // Inclusive time is not useful for many components without knowing where
// they are instantiated. So we aggregate inclusive time with both the
// owner and current displayName as the key.
inclusiveKey=displayName.owner+' > '+displayName.current;candidates[inclusiveKey]=candidates[inclusiveKey]||{componentName:inclusiveKey,time:0,count:0};if(measurement.inclusive[id]){candidates[inclusiveKey].time+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[inclusiveKey].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(inclusiveKey in candidates){if(candidates[inclusiveKey].time>=DONT_CARE_THRESHOLD){arr.push(candidates[inclusiveKey]);}}arr.sort(function(a,b){return b.time-a.time;});return arr;}function getUnchangedComponents(measurement){ // For a given reconcile, look at which components did not actually
// render anything to the DOM and return a mapping of their ID to
// the amount of time it took to render the entire subtree.
var cleanComponents={};var dirtyLeafIDs=Object.keys(measurement.writes);var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){var isDirty=false; // For each component that rendered, see if a component that triggered
// a DOM op is in its subtree.
for(var i=0;i<dirtyLeafIDs.length;i++){if(dirtyLeafIDs[i].indexOf(id)===0){isDirty=true;break;}} // check if component newly created
if(measurement.created[id]){isDirty=true;}if(!isDirty&&measurement.counts[id]>0){cleanComponents[id]=true;}}return cleanComponents;}var ReactDefaultPerfAnalysis={getExclusiveSummary:getExclusiveSummary,getInclusiveSummary:getInclusiveSummary,getDOMSummary:getDOMSummary,getTotalTime:getTotalTime};module.exports=ReactDefaultPerfAnalysis;},{"23":23}],52:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */'use strict';var ReactCurrentOwner=_dereq_(34);var assign=_dereq_(23);var canDefineProperty=_dereq_(104); // The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true}; /**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */var ReactElement=function(type,key,ref,self,source,owner,props){var element={ // This tag allow us to uniquely identify this as a React Element
$$typeof:REACT_ELEMENT_TYPE, // Built-in properties that belong on the element
type:type,key:key,ref:ref,props:props, // Record the component responsible for creating this element.
_owner:owner};if("development"!=='production'){ // The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
element._store={}; // To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
if(canDefineProperty){Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false}); // self and source are DEV only properties.
Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self}); // Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});}else {element._store.validated=false;element._self=self;element._source=source;}Object.freeze(element.props);Object.freeze(element);}return element;};ReactElement.createElement=function(type,config,children){var propName; // Reserved names are extracted
var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){ref=config.ref===undefined?null:config.ref;key=config.key===undefined?null:''+config.key;self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source; // Remaining properties are added to a new props object
for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;} // Resolve default props
if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(typeof props[propName]==='undefined'){props[propName]=defaultProps[propName];}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);};ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type); // Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};ReactElement.cloneAndReplaceProps=function(oldElement,newProps){var newElement=ReactElement(oldElement.type,oldElement.key,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,newProps);if("development"!=='production'){ // If the key on the original is valid, then the clone is valid
newElement._store.validated=oldElement._store.validated;}return newElement;};ReactElement.cloneElement=function(element,config,children){var propName; // Original props are copied
var props=assign({},element.props); // Reserved names are extracted
var key=element.key;var ref=element.ref; // Self is preserved since the owner is preserved.
var self=element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
var source=element._source; // Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config!=null){if(config.ref!==undefined){ // Silently steal the ref from the parent.
ref=config.ref;owner=ReactCurrentOwner.current;}if(config.key!==undefined){key=''+config.key;} // Remaining properties override existing props
for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);}; /**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement=function(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};module.exports=ReactElement;},{"104":104,"23":23,"34":34}],53:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */ /**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */'use strict';var ReactElement=_dereq_(52);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactCurrentOwner=_dereq_(34);var canDefineProperty=_dereq_(104);var getIteratorFn=_dereq_(115);var invariant=_dereq_(144);var warning=_dereq_(155);function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};var loggedTypeFailures={}; /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var addenda=getAddendaForKeyUse('uniqueKey',element,parentType);if(addenda===null){ // we already showed the warning
return;}"development"!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s%s',addenda.parentOrOwner||'',addenda.childOwner||'',addenda.url||''):undefined;} /**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} messageType A key used for de-duping warnings.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 * @returns {?object} A set of addenda to use in the warning message, or null
 * if the warning has already been shown before (and shouldn't be shown again).
 */function getAddendaForKeyUse(messageType,element,parentType){var addendum=getDeclarationErrorAddendum();if(!addendum){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){addendum=' Check the top-level render call using <'+parentName+'>.';}}var memoizer=ownerHasKeyUseWarning[messageType]||(ownerHasKeyUseWarning[messageType]={});if(memoizer[addendum]){return null;}memoizer[addendum]=true;var addenda={parentOrOwner:addendum,url:' See https://fb.me/react-warning-keys for more information.',childOwner:null}; // Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){ // Give the component that originally created this child.
addenda.childOwner=' It was passed a child from '+element._owner.getName()+'.';}return addenda;} /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if(typeof node!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){ // This element was passed in a valid location.
if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=getIteratorFn(node); // Entry iterators provide implicit keys.
if(iteratorFn){if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}} /**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */function checkPropTypes(componentName,propTypes,props,location){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error; // Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):undefined;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}"development"!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],propName,typeof error):undefined;if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum();"development"!=='production'?warning(false,'Failed propType: %s%s',error.message,addendum):undefined;}}}} /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;if(componentClass.propTypes){checkPropTypes(name,componentClass.propTypes,element.props,ReactPropTypeLocations.prop);}if(typeof componentClass.getDefaultProps==='function'){"development"!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):undefined;}}var ReactElementValidator={createElement:function(type,props,children){var validType=typeof type==='string'||typeof type==='function'; // We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
"development"!=='production'?warning(validType,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):undefined;var element=ReactElement.createElement.apply(this,arguments); // The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element==null){return element;} // Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type); // Legacy hook TODO: Warn if this is accessed
validatedFactory.type=type;if("development"!=='production'){if(canDefineProperty){Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function(){"development"!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):undefined;Object.defineProperty(this,'type',{value:type});return type;}});}}return validatedFactory;},cloneElement:function(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports=ReactElementValidator;},{"104":104,"115":115,"144":144,"155":155,"34":34,"52":52,"72":72,"73":73}],54:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */'use strict';var ReactElement=_dereq_(52);var ReactEmptyComponentRegistry=_dereq_(55);var ReactReconciler=_dereq_(76);var assign=_dereq_(23);var placeholderElement;var ReactEmptyComponentInjection={injectEmptyComponent:function(component){placeholderElement=ReactElement.createElement(component);}};var ReactEmptyComponent=function(instantiate){this._currentElement=null;this._rootNodeID=null;this._renderedComponent=instantiate(placeholderElement);};assign(ReactEmptyComponent.prototype,{construct:function(element){},mountComponent:function(rootID,transaction,context){ReactEmptyComponentRegistry.registerNullComponentID(rootID);this._rootNodeID=rootID;return ReactReconciler.mountComponent(this._renderedComponent,rootID,transaction,context);},receiveComponent:function(){},unmountComponent:function(rootID,transaction,context){ReactReconciler.unmountComponent(this._renderedComponent);ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);this._rootNodeID=null;this._renderedComponent=null;}});ReactEmptyComponent.injection=ReactEmptyComponentInjection;module.exports=ReactEmptyComponent;},{"23":23,"52":52,"55":55,"76":76}],55:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponentRegistry
 */'use strict'; // This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIDsRegistry={}; /**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */function isNullComponentID(id){return !!nullComponentIDsRegistry[id];} /**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */function registerNullComponentID(id){nullComponentIDsRegistry[id]=true;} /**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */function deregisterNullComponentID(id){delete nullComponentIDsRegistry[id];}var ReactEmptyComponentRegistry={isNullComponentID:isNullComponentID,registerNullComponentID:registerNullComponentID,deregisterNullComponentID:deregisterNullComponentID};module.exports=ReactEmptyComponentRegistry;},{}],56:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */'use strict';var caughtError=null; /**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */function invokeGuardedCallback(name,func,a,b){try{return func(a,b);}catch(x){if(caughtError===null){caughtError=x;}return undefined;}}var ReactErrorUtils={invokeGuardedCallback:invokeGuardedCallback, /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */invokeGuardedCallbackWithCatch:invokeGuardedCallback, /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function(){if(caughtError){var error=caughtError;caughtError=null;throw error;}}};if("development"!=='production'){ /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');ReactErrorUtils.invokeGuardedCallback=function(name,func,a,b){var boundFunc=func.bind(null,a,b);var evtType='react-'+name;fakeNode.addEventListener(evtType,boundFunc,false);var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);fakeNode.removeEventListener(evtType,boundFunc,false);};}}module.exports=ReactErrorUtils;},{}],57:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */'use strict';var EventPluginHub=_dereq_(16);function runEventQueueInBatch(events){EventPluginHub.enqueueEvents(events);EventPluginHub.processEventQueue(false);}var ReactEventEmitterMixin={ /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */handleTopLevel:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var events=EventPluginHub.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};module.exports=ReactEventEmitterMixin;},{"16":16}],58:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */'use strict';var EventListener=_dereq_(129);var ExecutionEnvironment=_dereq_(130);var PooledClass=_dereq_(24);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var getEventTarget=_dereq_(114);var getUnboundedScrollPosition=_dereq_(141);var DOCUMENT_FRAGMENT_NODE_TYPE=11; /**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */function findParent(node){ // TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
var nodeID=ReactMount.getID(node);var rootID=ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);var container=ReactMount.findReactContainerForID(rootID);var parent=ReactMount.getFirstReactDOM(container);return parent;} // Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.ancestors=[];}assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null;this.nativeEvent=null;this.ancestors.length=0;}});PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);function handleTopLevelImpl(bookKeeping){ // TODO: Re-enable event.path handling
//
// if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
//   // New browsers have a path attribute on native events
//   handleTopLevelWithPath(bookKeeping);
// } else {
//   // Legacy browsers don't have a path attribute on native events
//   handleTopLevelWithoutPath(bookKeeping);
// }
void handleTopLevelWithPath; // temporarily unused
handleTopLevelWithoutPath(bookKeeping);} // Legacy browsers don't have a path attribute on native events
function handleTopLevelWithoutPath(bookKeeping){var topLevelTarget=ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent))||window; // Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=topLevelTarget;while(ancestor){bookKeeping.ancestors.push(ancestor);ancestor=findParent(ancestor);}for(var i=0;i<bookKeeping.ancestors.length;i++){topLevelTarget=bookKeeping.ancestors[i];var topLevelTargetID=ReactMount.getID(topLevelTarget)||'';ReactEventListener._handleTopLevel(bookKeeping.topLevelType,topLevelTarget,topLevelTargetID,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}} // New browsers have a path attribute on native events
function handleTopLevelWithPath(bookKeeping){var path=bookKeeping.nativeEvent.path;var currentNativeTarget=path[0];var eventsFired=0;for(var i=0;i<path.length;i++){var currentPathElement=path[i];if(currentPathElement.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE){currentNativeTarget=path[i+1];} // TODO: slow
var reactParent=ReactMount.getFirstReactDOM(currentPathElement);if(reactParent===currentPathElement){var currentPathElementID=ReactMount.getID(currentPathElement);var newRootID=ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);bookKeeping.ancestors.push(currentPathElement);var topLevelTargetID=ReactMount.getID(currentPathElement)||'';eventsFired++;ReactEventListener._handleTopLevel(bookKeeping.topLevelType,currentPathElement,topLevelTargetID,bookKeeping.nativeEvent,currentNativeTarget); // Jump to the root of this React render tree
while(currentPathElementID!==newRootID){i++;currentPathElement=path[i];currentPathElementID=ReactMount.getID(currentPathElement);}}}if(eventsFired===0){ReactEventListener._handleTopLevel(bookKeeping.topLevelType,window,'',bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function(handleTopLevel){ReactEventListener._handleTopLevel=handleTopLevel;},setEnabled:function(enabled){ReactEventListener._enabled=!!enabled;},isEnabled:function(){return ReactEventListener._enabled;}, /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));}, /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);try{ // Event queue being processed in the same cycle allows
// `preventDefault`.
ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally {TopLevelCallbackBookKeeping.release(bookKeeping);}}};module.exports=ReactEventListener;},{"114":114,"129":129,"130":130,"141":141,"23":23,"24":24,"61":61,"65":65,"83":83}],59:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */'use strict';var DOMProperty=_dereq_(10);var EventPluginHub=_dereq_(16);var ReactComponentEnvironment=_dereq_(32);var ReactClass=_dereq_(29);var ReactEmptyComponent=_dereq_(54);var ReactBrowserEventEmitter=_dereq_(26);var ReactNativeComponent=_dereq_(68);var ReactPerf=_dereq_(71);var ReactRootIndex=_dereq_(78);var ReactUpdates=_dereq_(83);var ReactInjection={Component:ReactComponentEnvironment.injection,Class:ReactClass.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,RootIndex:ReactRootIndex.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;},{"10":10,"16":16,"26":26,"29":29,"32":32,"54":54,"68":68,"71":71,"78":78,"83":83}],60:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */'use strict';var ReactDOMSelection=_dereq_(44);var containsNode=_dereq_(133);var focusNode=_dereq_(138);var getActiveElement=_dereq_(139);function isInDocument(node){return containsNode(document.documentElement,node);} /**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function(){var focusedElem=getActiveElement();return {focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};}, /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}focusNode(priorFocusedElem);}}, /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function(input){var selection;if('selectionStart' in input){ // Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){ // IE8 input.
var range=document.selection.createRange(); // There can only be one selection per document in IE, so it must
// be in our element.
if(range.parentElement()===input){selection={start:-range.moveStart('character',-input.value.length),end:-range.moveEnd('character',-input.value.length)};}}else { // Content editable or old IE textarea.
selection=ReactDOMSelection.getOffsets(input);}return selection||{start:0,end:0};}, /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function(input,offsets){var start=offsets.start;var end=offsets.end;if(typeof end==='undefined'){end=start;}if('selectionStart' in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){var range=input.createTextRange();range.collapse(true);range.moveStart('character',start);range.moveEnd('character',end-start);range.select();}else {ReactDOMSelection.setOffsets(input,offsets);}}};module.exports=ReactInputSelection;},{"133":133,"138":138,"139":139,"44":44}],61:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */'use strict';var ReactRootIndex=_dereq_(78);var invariant=_dereq_(144);var SEPARATOR='.';var SEPARATOR_LENGTH=SEPARATOR.length; /**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */var MAX_TREE_DEPTH=10000; /**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */function getReactRootIDString(index){return SEPARATOR+index.toString(36);} /**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */function isBoundary(id,index){return id.charAt(index)===SEPARATOR||index===id.length;} /**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */function isValidID(id){return id===''||id.charAt(0)===SEPARATOR&&id.charAt(id.length-1)!==SEPARATOR;} /**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */function isAncestorIDOf(ancestorID,descendantID){return descendantID.indexOf(ancestorID)===0&&isBoundary(descendantID,ancestorID.length);} /**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */function getParentID(id){return id?id.substr(0,id.lastIndexOf(SEPARATOR)):'';} /**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */function getNextDescendantID(ancestorID,destinationID){!(isValidID(ancestorID)&&isValidID(destinationID))?"development"!=='production'?invariant(false,'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',ancestorID,destinationID):invariant(false):undefined;!isAncestorIDOf(ancestorID,destinationID)?"development"!=='production'?invariant(false,'getNextDescendantID(...): React has made an invalid assumption about '+'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',ancestorID,destinationID):invariant(false):undefined;if(ancestorID===destinationID){return ancestorID;} // Skip over the ancestor and the immediate separator. Traverse until we hit
// another separator or we reach the end of `destinationID`.
var start=ancestorID.length+SEPARATOR_LENGTH;var i;for(i=start;i<destinationID.length;i++){if(isBoundary(destinationID,i)){break;}}return destinationID.substr(0,i);} /**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */function getFirstCommonAncestorID(oneID,twoID){var minLength=Math.min(oneID.length,twoID.length);if(minLength===0){return '';}var lastCommonMarkerIndex=0; // Use `<=` to traverse until the "EOL" of the shorter string.
for(var i=0;i<=minLength;i++){if(isBoundary(oneID,i)&&isBoundary(twoID,i)){lastCommonMarkerIndex=i;}else if(oneID.charAt(i)!==twoID.charAt(i)){break;}}var longestCommonID=oneID.substr(0,lastCommonMarkerIndex);!isValidID(longestCommonID)?"development"!=='production'?invariant(false,'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',oneID,twoID,longestCommonID):invariant(false):undefined;return longestCommonID;} /**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {*} arg Argument to invoke the callback with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */function traverseParentPath(start,stop,cb,arg,skipFirst,skipLast){start=start||'';stop=stop||'';!(start!==stop)?"development"!=='production'?invariant(false,'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',start):invariant(false):undefined;var traverseUp=isAncestorIDOf(stop,start);!(traverseUp||isAncestorIDOf(start,stop))?"development"!=='production'?invariant(false,'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do '+'not have a parent path.',start,stop):invariant(false):undefined; // Traverse from `start` to `stop` one depth at a time.
var depth=0;var traverse=traverseUp?getParentID:getNextDescendantID;for(var id=start;; /* until break */id=traverse(id,stop)){var ret;if((!skipFirst||id!==start)&&(!skipLast||id!==stop)){ret=cb(id,traverseUp,arg);}if(ret===false||id===stop){ // Only break //after// visiting `stop`.
break;}!(depth++<MAX_TREE_DEPTH)?"development"!=='production'?invariant(false,'traverseParentPath(%s, %s, ...): Detected an infinite loop while '+'traversing the React DOM ID tree. This may be due to malformed IDs: %s',start,stop,id):invariant(false):undefined;}} /**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */var ReactInstanceHandles={ /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */createReactRootID:function(){return getReactRootIDString(ReactRootIndex.createReactRootIndex());}, /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */createReactID:function(rootID,name){return rootID+name;}, /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */getReactRootIDFromNodeID:function(id){if(id&&id.charAt(0)===SEPARATOR&&id.length>1){var index=id.indexOf(SEPARATOR,1);return index>-1?id.substr(0,index):id;}return null;}, /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */traverseEnterLeave:function(leaveID,enterID,cb,upArg,downArg){var ancestorID=getFirstCommonAncestorID(leaveID,enterID);if(ancestorID!==leaveID){traverseParentPath(leaveID,ancestorID,cb,upArg,false,true);}if(ancestorID!==enterID){traverseParentPath(ancestorID,enterID,cb,downArg,true,false);}}, /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseTwoPhase:function(targetID,cb,arg){if(targetID){traverseParentPath('',targetID,cb,arg,true,false);traverseParentPath(targetID,'',cb,arg,false,true);}}, /**
   * Same as `traverseTwoPhase` but skips the `targetID`.
   */traverseTwoPhaseSkipTarget:function(targetID,cb,arg){if(targetID){traverseParentPath('',targetID,cb,arg,true,true);traverseParentPath(targetID,'',cb,arg,true,true);}}, /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseAncestors:function(targetID,cb,arg){traverseParentPath('',targetID,cb,arg,true,false);},getFirstCommonAncestorID:getFirstCommonAncestorID, /**
   * Exposed for unit testing.
   * @private
   */_getNextDescendantID:getNextDescendantID,isAncestorIDOf:isAncestorIDOf,SEPARATOR:SEPARATOR};module.exports=ReactInstanceHandles;},{"144":144,"78":78}],62:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */'use strict'; /**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */ // TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={ /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function(key){key._reactInternalInstance=undefined;},get:function(key){return key._reactInternalInstance;},has:function(key){return key._reactInternalInstance!==undefined;},set:function(key,value){key._reactInternalInstance=value;}};module.exports=ReactInstanceMap;},{}],63:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactIsomorphic
 */'use strict';var ReactChildren=_dereq_(28);var ReactComponent=_dereq_(30);var ReactClass=_dereq_(29);var ReactDOMFactories=_dereq_(38);var ReactElement=_dereq_(52);var ReactElementValidator=_dereq_(53);var ReactPropTypes=_dereq_(74);var ReactVersion=_dereq_(84);var assign=_dereq_(23);var onlyChild=_dereq_(121);var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if("development"!=='production'){createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var React={ // Modern
Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,toArray:ReactChildren.toArray,only:onlyChild},Component:ReactComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement.isValidElement, // Classic
PropTypes:ReactPropTypes,createClass:ReactClass.createClass,createFactory:createFactory,createMixin:function(mixin){ // Currently a noop. Will be used to validate and trace mixins.
return mixin;}, // This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:ReactDOMFactories,version:ReactVersion, // Hook for JSX spread, don't use this for anything else.
__spread:assign};module.exports=React;},{"121":121,"23":23,"28":28,"29":29,"30":30,"38":38,"52":52,"53":53,"74":74,"84":84}],64:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */'use strict';var adler32=_dereq_(103);var TAG_END=/\/?>/;var ReactMarkupChecksum={CHECKSUM_ATTR_NAME:'data-react-checksum', /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */addChecksumToMarkup:function(markup){var checksum=adler32(markup); // Add checksum (handle both parent tags and self-closing tags)
return markup.replace(TAG_END,' '+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+checksum+'"$&');}, /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */canReuseMarkup:function(markup,element){var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);existingChecksum=existingChecksum&&parseInt(existingChecksum,10);var markupChecksum=adler32(markup);return markupChecksum===existingChecksum;}};module.exports=ReactMarkupChecksum;},{"103":103}],65:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */'use strict';var DOMProperty=_dereq_(10);var ReactBrowserEventEmitter=_dereq_(26);var ReactCurrentOwner=_dereq_(34);var ReactDOMFeatureFlags=_dereq_(39);var ReactElement=_dereq_(52);var ReactEmptyComponentRegistry=_dereq_(55);var ReactInstanceHandles=_dereq_(61);var ReactInstanceMap=_dereq_(62);var ReactMarkupChecksum=_dereq_(64);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var ReactUpdateQueue=_dereq_(82);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var emptyObject=_dereq_(137);var containsNode=_dereq_(133);var instantiateReactComponent=_dereq_(118);var invariant=_dereq_(144);var setInnerHTML=_dereq_(124);var shouldUpdateReactComponent=_dereq_(126);var validateDOMNesting=_dereq_(128);var warning=_dereq_(155);var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var nodeCache={};var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9;var DOCUMENT_FRAGMENT_NODE_TYPE=11;var ownerDocumentContextKey='__ReactMount_ownerDocument$'+Math.random().toString(36).slice(2); /** Mapping from reactRootID to React component instance. */var instancesByReactRootID={}; /** Mapping from reactRootID to `container` nodes. */var containersByReactRootID={};if("development"!=='production'){ /** __DEV__-only mapping from reactRootID to root elements. */var rootElementsByReactRootID={};} // Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray=[]; /**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */function firstDifferenceIndex(string1,string2){var minLen=Math.min(string1.length,string2.length);for(var i=0;i<minLen;i++){if(string1.charAt(i)!==string2.charAt(i)){return i;}}return string1.length===string2.length?-1:minLen;} /**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOC_NODE_TYPE){return container.documentElement;}else {return container.firstChild;}} /**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */function getReactRootID(container){var rootElement=getReactRootElementInContainer(container);return rootElement&&ReactMount.getID(rootElement);} /**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */function getID(node){var id=internalGetID(node);if(id){if(nodeCache.hasOwnProperty(id)){var cached=nodeCache[id];if(cached!==node){!!isValid(cached,id)?"development"!=='production'?invariant(false,'ReactMount: Two valid but unequal nodes with the same `%s`: %s',ATTR_NAME,id):invariant(false):undefined;nodeCache[id]=node;}}else {nodeCache[id]=node;}}return id;}function internalGetID(node){ // If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return node&&node.getAttribute&&node.getAttribute(ATTR_NAME)||'';} /**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */function setID(node,id){var oldID=internalGetID(node);if(oldID!==id){delete nodeCache[oldID];}node.setAttribute(ATTR_NAME,id);nodeCache[id]=node;} /**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNode(id){if(!nodeCache.hasOwnProperty(id)||!isValid(nodeCache[id],id)){nodeCache[id]=ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * Finds the node with the supplied public React instance.
 *
 * @param {*} instance A public React instance.
 * @return {?DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNodeFromInstance(instance){var id=ReactInstanceMap.get(instance)._rootNodeID;if(ReactEmptyComponentRegistry.isNullComponentID(id)){return null;}if(!nodeCache.hasOwnProperty(id)||!isValid(nodeCache[id],id)){nodeCache[id]=ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */function isValid(node,id){if(node){!(internalGetID(node)===id)?"development"!=='production'?invariant(false,'ReactMount: Unexpected modification of `%s`',ATTR_NAME):invariant(false):undefined;var container=ReactMount.findReactContainerForID(id);if(container&&containsNode(container,node)){return true;}}return false;} /**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */function purgeID(id){delete nodeCache[id];}var deepestNodeSoFar=null;function findDeepestCachedAncestorImpl(ancestorID){var ancestor=nodeCache[ancestorID];if(ancestor&&isValid(ancestor,ancestorID)){deepestNodeSoFar=ancestor;}else { // This node isn't populated in the cache, so presumably none of its
// descendants are. Break out of the loop.
return false;}} /**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */function findDeepestCachedAncestor(targetID){deepestNodeSoFar=null;ReactInstanceHandles.traverseAncestors(targetID,findDeepestCachedAncestorImpl);var foundNode=deepestNodeSoFar;deepestNodeSoFar=null;return foundNode;} /**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function mountComponentIntoNode(componentInstance,rootID,container,transaction,shouldReuseMarkup,context){if(ReactDOMFeatureFlags.useCreateElement){context=assign({},context);if(container.nodeType===DOC_NODE_TYPE){context[ownerDocumentContextKey]=container;}else {context[ownerDocumentContextKey]=container.ownerDocument;}}if("development"!=='production'){if(context===emptyObject){context={};}var tag=container.nodeName.toLowerCase();context[validateDOMNesting.ancestorInfoContextKey]=validateDOMNesting.updatedAncestorInfo(null,tag,null);}var markup=ReactReconciler.mountComponent(componentInstance,rootID,transaction,context);componentInstance._renderedComponent._topLevelWrapper=componentInstance;ReactMount._mountImageIntoNode(markup,container,shouldReuseMarkup,transaction);} /**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function batchedMountComponentIntoNode(componentInstance,rootID,container,shouldReuseMarkup,context){var transaction=ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */shouldReuseMarkup);transaction.perform(mountComponentIntoNode,null,componentInstance,rootID,container,transaction,shouldReuseMarkup,context);ReactUpdates.ReactReconcileTransaction.release(transaction);} /**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */function unmountComponentFromNode(instance,container){ReactReconciler.unmountComponent(instance);if(container.nodeType===DOC_NODE_TYPE){container=container.documentElement;} // http://jsperf.com/emptying-a-node
while(container.lastChild){container.removeChild(container.lastChild);}} /**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */function hasNonRootReactChild(node){var reactRootID=getReactRootID(node);return reactRootID?reactRootID!==ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID):false;} /**
 * Returns the first (deepest) ancestor of a node which is rendered by this copy
 * of React.
 */function findFirstReactDOMImpl(node){ // This node might be from another React instance, so we make sure not to
// examine the node cache here
for(;node&&node.parentNode!==node;node=node.parentNode){if(node.nodeType!==1){ // Not a DOMElement, therefore not a React component
continue;}var nodeID=internalGetID(node);if(!nodeID){continue;}var reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(nodeID); // If containersByReactRootID contains the container we find by crawling up
// the tree, we know that this instance of React rendered the node.
// nb. isValid's strategy (with containsNode) does not work because render
// trees may be nested and we don't want a false positive in that case.
var current=node;var lastID;do {lastID=internalGetID(current);current=current.parentNode;if(current==null){ // The passed-in node has been detached from the container it was
// originally rendered into.
return null;}}while(lastID!==reactRootID);if(current===containersByReactRootID[reactRootID]){return node;}}return null;} /**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */var TopLevelWrapper=function(){};TopLevelWrapper.prototype.isReactComponent={};if("development"!=='production'){TopLevelWrapper.displayName='TopLevelWrapper';}TopLevelWrapper.prototype.render=function(){ // this.props is actually a ReactElement
return this.props;}; /**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */var ReactMount={TopLevelWrapper:TopLevelWrapper, /** Exposed for debugging purposes **/_instancesByReactRootID:instancesByReactRootID, /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */scrollMonitor:function(container,renderCallback){renderCallback();}, /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */_updateRootComponent:function(prevComponent,nextElement,container,callback){ReactMount.scrollMonitor(container,function(){ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement);if(callback){ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);}});if("development"!=='production'){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[getReactRootID(container)]=getReactRootElementInContainer(container);}return prevComponent;}, /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */_registerComponent:function(nextComponent,container){!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'_registerComponent(...): Target container is not a DOM element.'):invariant(false):undefined;ReactBrowserEventEmitter.ensureScrollValueMonitoring();var reactRootID=ReactMount.registerContainer(container);instancesByReactRootID[reactRootID]=nextComponent;return reactRootID;}, /**
   * Render a new component into the DOM.
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */_renderNewRootComponent:function(nextElement,container,shouldReuseMarkup,context){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
"development"!=='production'?warning(ReactCurrentOwner.current==null,'_renderNewRootComponent(): Render methods should be a pure function '+'of props and state; triggering nested component updates from '+'render is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):undefined;var componentInstance=instantiateReactComponent(nextElement,null);var reactRootID=ReactMount._registerComponent(componentInstance,container); // The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,reactRootID,container,shouldReuseMarkup,context);if("development"!=='production'){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[reactRootID]=getReactRootElementInContainer(container);}return componentInstance;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */renderSubtreeIntoContainer:function(parentComponent,nextElement,container,callback){!(parentComponent!=null&&parentComponent._reactInternalInstance!=null)?"development"!=='production'?invariant(false,'parentComponent must be a valid React Component'):invariant(false):undefined;return ReactMount._renderSubtreeIntoContainer(parentComponent,nextElement,container,callback);},_renderSubtreeIntoContainer:function(parentComponent,nextElement,container,callback){!ReactElement.isValidElement(nextElement)?"development"!=='production'?invariant(false,'ReactDOM.render(): Invalid component element.%s',typeof nextElement==='string'?' Instead of passing an element string, make sure to instantiate '+'it by passing it to React.createElement.':typeof nextElement==='function'?' Instead of passing a component class, make sure to instantiate '+'it by passing it to React.createElement.': // Check if it quacks like an element
nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):invariant(false):undefined;"development"!=='production'?warning(!container||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.'):undefined;var nextWrappedElement=new ReactElement(TopLevelWrapper,null,null,null,null,null,nextElement);var prevComponent=instancesByReactRootID[getReactRootID(container)];if(prevComponent){var prevWrappedElement=prevComponent._currentElement;var prevElement=prevWrappedElement.props;if(shouldUpdateReactComponent(prevElement,nextElement)){var publicInst=prevComponent._renderedComponent.getPublicInstance();var updatedCallback=callback&&function(){callback.call(publicInst);};ReactMount._updateRootComponent(prevComponent,nextWrappedElement,container,updatedCallback);return publicInst;}else {ReactMount.unmountComponentAtNode(container);}}var reactRootElement=getReactRootElementInContainer(container);var containerHasReactMarkup=reactRootElement&&!!internalGetID(reactRootElement);var containerHasNonRootReactChild=hasNonRootReactChild(container);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.'):undefined;if(!containerHasReactMarkup||reactRootElement.nextSibling){var rootElementSibling=reactRootElement;while(rootElementSibling){if(internalGetID(rootElementSibling)){"development"!=='production'?warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.'):undefined;break;}rootElementSibling=rootElementSibling.nextSibling;}}}var shouldReuseMarkup=containerHasReactMarkup&&!prevComponent&&!containerHasNonRootReactChild;var component=ReactMount._renderNewRootComponent(nextWrappedElement,container,shouldReuseMarkup,parentComponent!=null?parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context):emptyObject)._renderedComponent.getPublicInstance();if(callback){callback.call(component);}return component;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */render:function(nextElement,container,callback){return ReactMount._renderSubtreeIntoContainer(null,nextElement,container,callback);}, /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */registerContainer:function(container){var reactRootID=getReactRootID(container);if(reactRootID){ // If one exists, make sure it is a valid "reactRoot" ID.
reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);}if(!reactRootID){ // No valid "reactRoot" ID found, create one.
reactRootID=ReactInstanceHandles.createReactRootID();}containersByReactRootID[reactRootID]=container;return reactRootID;}, /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */unmountComponentAtNode:function(container){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
"development"!=='production'?warning(ReactCurrentOwner.current==null,'unmountComponentAtNode(): Render methods should be a pure function '+'of props and state; triggering nested component updates from render '+'is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):undefined;!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):invariant(false):undefined;var reactRootID=getReactRootID(container);var component=instancesByReactRootID[reactRootID];if(!component){ // Check if the node being unmounted was rendered by React, but isn't a
// root node.
var containerHasNonRootReactChild=hasNonRootReactChild(container); // Check if the container itself is a React root node.
var containerID=internalGetID(container);var isContainerReactRoot=containerID&&containerID===ReactInstanceHandles.getReactRootIDFromNodeID(containerID);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.'):undefined;}return false;}ReactUpdates.batchedUpdates(unmountComponentFromNode,component,container);delete instancesByReactRootID[reactRootID];delete containersByReactRootID[reactRootID];if("development"!=='production'){delete rootElementsByReactRootID[reactRootID];}return true;}, /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */findReactContainerForID:function(id){var reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(id);var container=containersByReactRootID[reactRootID];if("development"!=='production'){var rootElement=rootElementsByReactRootID[reactRootID];if(rootElement&&rootElement.parentNode!==container){"development"!=='production'?warning( // Call internalGetID here because getID calls isValid which calls
// findReactContainerForID (this function).
internalGetID(rootElement)===reactRootID,'ReactMount: Root element ID differed from reactRootID.'):undefined;var containerChild=container.firstChild;if(containerChild&&reactRootID===internalGetID(containerChild)){ // If the container has a new child with the same ID as the old
// root element, then rootElementsByReactRootID[reactRootID] is
// just stale and needs to be updated. The case that deserves a
// warning is when the container is empty.
rootElementsByReactRootID[reactRootID]=containerChild;}else {"development"!=='production'?warning(false,'ReactMount: Root element has been removed from its original '+'container. New container: %s',rootElement.parentNode):undefined;}}}return container;}, /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */findReactNodeByID:function(id){var reactRoot=ReactMount.findReactContainerForID(id);return ReactMount.findComponentRoot(reactRoot,id);}, /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component rendered by this copy of React.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */getFirstReactDOM:function(node){return findFirstReactDOMImpl(node);}, /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */findComponentRoot:function(ancestorNode,targetID){var firstChildren=findComponentRootReusableArray;var childIndex=0;var deepestAncestor=findDeepestCachedAncestor(targetID)||ancestorNode;if("development"!=='production'){ // This will throw on the next line; give an early warning
"development"!=='production'?warning(deepestAncestor!=null,'React can\'t find the root component node for data-reactid value '+'`%s`. If you\'re seeing this message, it probably means that '+'you\'ve loaded two copies of React on the page. At this time, only '+'a single copy of React can be loaded at a time.',targetID):undefined;}firstChildren[0]=deepestAncestor.firstChild;firstChildren.length=1;while(childIndex<firstChildren.length){var child=firstChildren[childIndex++];var targetChild;while(child){var childID=ReactMount.getID(child);if(childID){ // Even if we find the node we're looking for, we finish looping
// through its siblings to ensure they're cached so that we don't have
// to revisit this node again. Otherwise, we make n^2 calls to getID
// when visiting the many children of a single node in order.
if(targetID===childID){targetChild=child;}else if(ReactInstanceHandles.isAncestorIDOf(childID,targetID)){ // If we find a child whose ID is an ancestor of the given ID,
// then we can be sure that we only want to search the subtree
// rooted at this child, so we can throw out the rest of the
// search state.
firstChildren.length=childIndex=0;firstChildren.push(child.firstChild);}}else { // If this child had no ID, then there's a chance that it was
// injected automatically by the browser, as when a `<table>`
// element sprouts an extra `<tbody>` child as a side effect of
// `.innerHTML` parsing. Optimistically continue down this
// branch, but not before examining the other siblings.
firstChildren.push(child.firstChild);}child=child.nextSibling;}if(targetChild){ // Emptying firstChildren/findComponentRootReusableArray is
// not necessary for correctness, but it helps the GC reclaim
// any nodes that were left at the end of the search.
firstChildren.length=0;return targetChild;}}firstChildren.length=0;!false?"development"!=='production'?invariant(false,'findComponentRoot(..., %s): Unable to find element. This probably '+'means the DOM was unexpectedly mutated (e.g., by the browser), '+'usually due to forgetting a <tbody> when using tables, nesting tags '+'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> '+'parent. '+'Try inspecting the child nodes of the element with React ID `%s`.',targetID,ReactMount.getID(ancestorNode)):invariant(false):undefined;},_mountImageIntoNode:function(markup,container,shouldReuseMarkup,transaction){!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'mountComponentIntoNode(...): Target container is not valid.'):invariant(false):undefined;if(shouldReuseMarkup){var rootElement=getReactRootElementInContainer(container);if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){return;}else {var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);var rootMarkup=rootElement.outerHTML;rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);var normalizedMarkup=markup;if("development"!=='production'){ // because rootMarkup is retrieved from the DOM, various normalizations
// will have occurred which will not be present in `markup`. Here,
// insert markup into a <div> or <iframe> depending on the container
// type to perform the same normalizations before comparing.
var normalizer;if(container.nodeType===ELEMENT_NODE_TYPE){normalizer=document.createElement('div');normalizer.innerHTML=markup;normalizedMarkup=normalizer.innerHTML;}else {normalizer=document.createElement('iframe');document.body.appendChild(normalizer);normalizer.contentDocument.write(markup);normalizedMarkup=normalizer.contentDocument.documentElement.outerHTML;document.body.removeChild(normalizer);}}var diffIndex=firstDifferenceIndex(normalizedMarkup,rootMarkup);var difference=' (client) '+normalizedMarkup.substring(diffIndex-20,diffIndex+20)+'\n (server) '+rootMarkup.substring(diffIndex-20,diffIndex+20);!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document using '+'server rendering but the checksum was invalid. This usually '+'means you rendered a different component type or props on '+'the client from the one on the server, or your render() '+'methods are impure. React cannot handle this case due to '+'cross-browser quirks by rendering at the document root. You '+'should look for environment dependent code in your components '+'and ensure the props are the same client and server side:\n%s',difference):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(false,'React attempted to reuse markup in a container but the '+'checksum was invalid. This generally means that you are '+'using server rendering and the markup generated on the '+'server was not what the client was expecting. React injected '+'new markup to compensate which works but you have lost many '+'of the benefits of server rendering. Instead, figure out '+'why the markup being generated is different on the client '+'or server:\n%s',difference):undefined;}}}!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document but '+'you didn\'t use server rendering. We can\'t do this '+'without using server rendering due to cross-browser quirks. '+'See ReactDOMServer.renderToString() for server rendering.'):invariant(false):undefined;if(transaction.useCreateElement){while(container.lastChild){container.removeChild(container.lastChild);}container.appendChild(markup);}else {setInnerHTML(container,markup);}},ownerDocumentContextKey:ownerDocumentContextKey, /**
   * React ID utilities.
   */getReactRootID:getReactRootID,getID:getID,setID:setID,getNode:getNode,getNodeFromInstance:getNodeFromInstance,isValid:isValid,purgeID:purgeID};ReactPerf.measureMethods(ReactMount,'ReactMount',{_renderNewRootComponent:'_renderNewRootComponent',_mountImageIntoNode:'_mountImageIntoNode'});module.exports=ReactMount;},{"10":10,"118":118,"124":124,"126":126,"128":128,"133":133,"137":137,"144":144,"155":155,"23":23,"26":26,"34":34,"39":39,"52":52,"55":55,"61":61,"62":62,"64":64,"71":71,"76":76,"82":82,"83":83}],66:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */'use strict';var ReactComponentEnvironment=_dereq_(32);var ReactMultiChildUpdateTypes=_dereq_(67);var ReactCurrentOwner=_dereq_(34);var ReactReconciler=_dereq_(76);var ReactChildReconciler=_dereq_(27);var flattenChildren=_dereq_(109); /**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */var updateDepth=0; /**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */var updateQueue=[]; /**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */var markupQueue=[]; /**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */function enqueueInsertMarkup(parentID,markup,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(markup)-1,content:null,fromIndex:null,toIndex:toIndex});} /**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */function enqueueMove(parentID,fromIndex,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,content:null,fromIndex:fromIndex,toIndex:toIndex});} /**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */function enqueueRemove(parentID,fromIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,content:null,fromIndex:fromIndex,toIndex:null});} /**
 * Enqueues setting the markup of a node.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @private
 */function enqueueSetMarkup(parentID,markup){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.SET_MARKUP,markupIndex:null,content:markup,fromIndex:null,toIndex:null});} /**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */function enqueueTextContent(parentID,textContent){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,content:textContent,fromIndex:null,toIndex:null});} /**
 * Processes any enqueued updates.
 *
 * @private
 */function processQueue(){if(updateQueue.length){ReactComponentEnvironment.processChildrenUpdates(updateQueue,markupQueue);clearQueue();}} /**
 * Clears any enqueued updates.
 *
 * @private
 */function clearQueue(){updateQueue.length=0;markupQueue.length=0;} /**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */var ReactMultiChild={ /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */Mixin:{_reconcilerInstantiateChildren:function(nestedChildren,transaction,context){if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);}finally {ReactCurrentOwner.current=null;}}}return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);},_reconcilerUpdateChildren:function(prevChildren,nextNestedChildrenElements,transaction,context){var nextChildren;if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;nextChildren=flattenChildren(nextNestedChildrenElements);}finally {ReactCurrentOwner.current=null;}return ReactChildReconciler.updateChildren(prevChildren,nextChildren,transaction,context);}}nextChildren=flattenChildren(nextNestedChildrenElements);return ReactChildReconciler.updateChildren(prevChildren,nextChildren,transaction,context);}, /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */mountChildren:function(nestedChildren,transaction,context){var children=this._reconcilerInstantiateChildren(nestedChildren,transaction,context);this._renderedChildren=children;var mountImages=[];var index=0;for(var name in children){if(children.hasOwnProperty(name)){var child=children[name]; // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID+name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex=index++;mountImages.push(mountImage);}}return mountImages;}, /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */updateTextContent:function(nextContent){updateDepth++;var errorThrown=true;try{var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren); // TODO: The setTextContent operation should be enough
for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){this._unmountChild(prevChildren[name]);}} // Set new text content.
this.setTextContent(nextContent);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */updateMarkup:function(nextMarkup){updateDepth++;var errorThrown=true;try{var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){this._unmountChildByName(prevChildren[name],name);}}this.setMarkup(nextMarkup);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */updateChildren:function(nextNestedChildrenElements,transaction,context){updateDepth++;var errorThrown=true;try{this._updateChildren(nextNestedChildrenElements,transaction,context);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */_updateChildren:function(nextNestedChildrenElements,transaction,context){var prevChildren=this._renderedChildren;var nextChildren=this._reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,transaction,context);this._renderedChildren=nextChildren;if(!nextChildren&&!prevChildren){return;}var name; // `nextIndex` will increment for each child in `nextChildren`, but
// `lastIndex` will be the last index visited in `prevChildren`.
var lastIndex=0;var nextIndex=0;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var nextChild=nextChildren[name];if(prevChild===nextChild){this.moveChild(prevChild,nextIndex,lastIndex);lastIndex=Math.max(prevChild._mountIndex,lastIndex);prevChild._mountIndex=nextIndex;}else {if(prevChild){ // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
lastIndex=Math.max(prevChild._mountIndex,lastIndex);this._unmountChild(prevChild);} // The child must be instantiated before it's mounted.
this._mountChildByNameAtIndex(nextChild,name,nextIndex,transaction,context);}nextIndex++;} // Remove children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){this._unmountChild(prevChildren[name]);}}}, /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */unmountChildren:function(){var renderedChildren=this._renderedChildren;ReactChildReconciler.unmountChildren(renderedChildren);this._renderedChildren=null;}, /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */moveChild:function(child,toIndex,lastIndex){ // If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(child._mountIndex<lastIndex){enqueueMove(this._rootNodeID,child._mountIndex,toIndex);}}, /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */createChild:function(child,mountImage){enqueueInsertMarkup(this._rootNodeID,mountImage,child._mountIndex);}, /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */removeChild:function(child){enqueueRemove(this._rootNodeID,child._mountIndex);}, /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */setTextContent:function(textContent){enqueueTextContent(this._rootNodeID,textContent);}, /**
     * Sets this markup string.
     *
     * @param {string} markup Markup to set.
     * @protected
     */setMarkup:function(markup){enqueueSetMarkup(this._rootNodeID,markup);}, /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */_mountChildByNameAtIndex:function(child,name,index,transaction,context){ // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID+name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex=index;this.createChild(child,mountImage);}, /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */_unmountChild:function(child){this.removeChild(child);child._mountIndex=null;}}};module.exports=ReactMultiChild;},{"109":109,"27":27,"32":32,"34":34,"67":67,"76":76}],67:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */'use strict';var keyMirror=_dereq_(147); /**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */var ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;},{"147":147}],68:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */'use strict';var assign=_dereq_(23);var invariant=_dereq_(144);var autoGenerateWrapperClass=null;var genericComponentClass=null; // This registry keeps track of wrapper classes around native tags.
var tagToComponentClass={};var textComponentClass=null;var ReactNativeComponentInjection={ // This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function(componentClass){genericComponentClass=componentClass;}, // This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function(componentClass){textComponentClass=componentClass;}, // This accepts a keyed object with classes as values. Each key represents a
// tag. That particular tag will use this class instead of the generic one.
injectComponentClasses:function(componentClasses){assign(tagToComponentClass,componentClasses);}}; /**
 * Get a composite component wrapper class for a specific tag.
 *
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */function getComponentClassForElement(element){if(typeof element.type==='function'){return element.type;}var tag=element.type;var componentClass=tagToComponentClass[tag];if(componentClass==null){tagToComponentClass[tag]=componentClass=autoGenerateWrapperClass(tag);}return componentClass;} /**
 * Get a native internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */function createInternalComponent(element){!genericComponentClass?"development"!=='production'?invariant(false,'There is no registered component for the tag %s',element.type):invariant(false):undefined;return new genericComponentClass(element.type,element.props);} /**
 * @param {ReactText} text
 * @return {ReactComponent}
 */function createInstanceForText(text){return new textComponentClass(text);} /**
 * @param {ReactComponent} component
 * @return {boolean}
 */function isTextComponent(component){return component instanceof textComponentClass;}var ReactNativeComponent={getComponentClassForElement:getComponentClassForElement,createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactNativeComponentInjection};module.exports=ReactNativeComponent;},{"144":144,"23":23}],69:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */'use strict';var warning=_dereq_(155);function warnTDZ(publicInstance,callerName){if("development"!=='production'){"development"!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor&&publicInstance.constructor.displayName||''):undefined;}} /**
 * This is the abstract API for an update queue.
 */var ReactNoopUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(publicInstance){return false;}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function(publicInstance,callback){}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function(publicInstance){warnTDZ(publicInstance,'forceUpdate');}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function(publicInstance,completeState){warnTDZ(publicInstance,'replaceState');}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function(publicInstance,partialState){warnTDZ(publicInstance,'setState');}, /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */enqueueSetProps:function(publicInstance,partialProps){warnTDZ(publicInstance,'setProps');}, /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */enqueueReplaceProps:function(publicInstance,props){warnTDZ(publicInstance,'replaceProps');}};module.exports=ReactNoopUpdateQueue;},{"155":155}],70:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */'use strict';var invariant=_dereq_(144); /**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */var ReactOwner={ /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */isValidOwner:function(object){return !!(object&&typeof object.attachRef==='function'&&typeof object.detachRef==='function');}, /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */addComponentAsRefTo:function(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might '+'be adding a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):undefined;owner.attachRef(ref,component);}, /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */removeComponentAsRefFrom:function(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might '+'be removing a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):undefined; // Check that `component` is still the current ref because we do not want to
// detach the ref if another component stole it.
if(owner.getPublicInstance().refs[ref]===component.getPublicInstance()){owner.detachRef(ref);}}};module.exports=ReactOwner;},{"144":144}],71:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */'use strict'; /**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */var ReactPerf={ /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */enableMeasure:false, /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */storedMeasure:_noMeasure, /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */measureMethods:function(object,objectName,methodNames){if("development"!=='production'){for(var key in methodNames){if(!methodNames.hasOwnProperty(key)){continue;}object[key]=ReactPerf.measure(objectName,methodNames[key],object[key]);}}}, /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */measure:function(objName,fnName,func){if("development"!=='production'){var measuredFunc=null;var wrapper=function(){if(ReactPerf.enableMeasure){if(!measuredFunc){measuredFunc=ReactPerf.storedMeasure(objName,fnName,func);}return measuredFunc.apply(this,arguments);}return func.apply(this,arguments);};wrapper.displayName=objName+'_'+fnName;return wrapper;}return func;},injection:{ /**
     * @param {function} measure
     */injectMeasure:function(measure){ReactPerf.storedMeasure=measure;}}}; /**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */function _noMeasure(objName,fnName,func){return func;}module.exports=ReactPerf;},{}],72:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */'use strict';var ReactPropTypeLocationNames={};if("development"!=='production'){ReactPropTypeLocationNames={prop:'prop',context:'context',childContext:'child context'};}module.exports=ReactPropTypeLocationNames;},{}],73:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */'use strict';var keyMirror=_dereq_(147);var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;},{"147":147}],74:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */'use strict';var ReactElement=_dereq_(52);var ReactPropTypeLocationNames=_dereq_(72);var emptyFunction=_dereq_(136);var getIteratorFn=_dereq_(115); /**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker};function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName,location,propFullName){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(props[propName]==null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new Error('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));}return null;}else {return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var locationName=ReactPropTypeLocationNames[location]; // `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']');if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){if(!ReactElement.isValidElement(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName] instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOf, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(propValue===expectedValues[i]){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new Error('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName)==null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case 'number':case 'string':case 'undefined':return true;case 'boolean':return !propValue;case 'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||ReactElement.isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else { // Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else {return false;}return true;default:return false;}} // Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return 'array';}if(propValue instanceof RegExp){ // Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return 'object';}return propType;} // This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return 'date';}else if(propValue instanceof RegExp){return 'regexp';}}return propType;} // Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return '<<anonymous>>';}return propValue.constructor.name;}module.exports=ReactPropTypes;},{"115":115,"136":136,"52":52,"72":72}],75:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(24);var ReactBrowserEventEmitter=_dereq_(26);var ReactDOMFeatureFlags=_dereq_(39);var ReactInputSelection=_dereq_(60);var Transaction=_dereq_(100);var assign=_dereq_(23); /**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */var SELECTION_RESTORATION={ /**
   * @return {Selection} Selection information.
   */initialize:ReactInputSelection.getSelectionInformation, /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */close:ReactInputSelection.restoreSelection}; /**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */var EVENT_SUPPRESSION={ /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */initialize:function(){var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();ReactBrowserEventEmitter.setEnabled(false);return currentlyEnabled;}, /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */close:function(previouslyEnabled){ReactBrowserEventEmitter.setEnabled(previouslyEnabled);}}; /**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function(){this.reactMountReady.reset();}, /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */close:function(){this.reactMountReady.notifyAll();}}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING]; /**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */function ReactReconcileTransaction(forceHTML){this.reinitializeTransaction(); // Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup=false;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=!forceHTML&&ReactDOMFeatureFlags.useCreateElement;}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function(){return this.reactMountReady;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactReconcileTransaction);module.exports=ReactReconcileTransaction;},{"100":100,"23":23,"24":24,"26":26,"39":39,"6":6,"60":60}],76:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */'use strict';var ReactRef=_dereq_(77); /**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */function attachRefs(){ReactRef.attachRefs(this,this._currentElement);}var ReactReconciler={ /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function(internalInstance,rootID,transaction,context){var markup=internalInstance.mountComponent(rootID,transaction,context);if(internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function(internalInstance){ReactRef.detachRefs(internalInstance,internalInstance._currentElement);internalInstance.unmountComponent();}, /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */receiveComponent:function(internalInstance,nextElement,transaction,context){var prevElement=internalInstance._currentElement;if(nextElement===prevElement&&context===internalInstance._context){ // Since elements are immutable after the owner is rendered,
// we can do a cheap identity compare here to determine if this is a
// superfluous reconcile. It's possible for state to be mutable but such
// change should trigger an update of the owner which would recreate
// the element. We explicitly check for the existence of an owner since
// it's possible for an element created outside a composite to be
// deeply mutated and reused.
// TODO: Bailing out early is just a perf optimization right?
// TODO: Removing the return statement should affect correctness?
return;}var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);if(refsChanged){ReactRef.detachRefs(internalInstance,prevElement);}internalInstance.receiveComponent(nextElement,transaction,context);if(refsChanged&&internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}}, /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function(internalInstance,transaction){internalInstance.performUpdateIfNecessary(transaction);}};module.exports=ReactReconciler;},{"77":77}],77:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */'use strict';var ReactOwner=_dereq_(70);var ReactRef={};function attachRef(ref,component,owner){if(typeof ref==='function'){ref(component.getPublicInstance());}else { // Legacy ref
ReactOwner.addComponentAsRefTo(component,ref,owner);}}function detachRef(ref,component,owner){if(typeof ref==='function'){ref(null);}else { // Legacy ref
ReactOwner.removeComponentAsRefFrom(component,ref,owner);}}ReactRef.attachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){attachRef(ref,instance,element._owner);}};ReactRef.shouldUpdateRefs=function(prevElement,nextElement){ // If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;return  (// This has a few false positives w/r/t empty components.
prevEmpty||nextEmpty||nextElement._owner!==prevElement._owner||nextElement.ref!==prevElement.ref);};ReactRef.detachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){detachRef(ref,instance,element._owner);}};module.exports=ReactRef;},{"70":70}],78:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */'use strict';var ReactRootIndexInjection={ /**
   * @param {function} _createReactRootIndex
   */injectCreateReactRootIndex:function(_createReactRootIndex){ReactRootIndex.createReactRootIndex=_createReactRootIndex;}};var ReactRootIndex={createReactRootIndex:null,injection:ReactRootIndexInjection};module.exports=ReactRootIndex;},{}],79:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerBatchingStrategy
 * @typechecks
 */'use strict';var ReactServerBatchingStrategy={isBatchingUpdates:false,batchedUpdates:function(callback){ // Don't do anything here. During the server rendering we don't want to
// schedule any updates. We will simply ignore them.
}};module.exports=ReactServerBatchingStrategy;},{}],80:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */'use strict';var ReactDefaultBatchingStrategy=_dereq_(48);var ReactElement=_dereq_(52);var ReactInstanceHandles=_dereq_(61);var ReactMarkupChecksum=_dereq_(64);var ReactServerBatchingStrategy=_dereq_(79);var ReactServerRenderingTransaction=_dereq_(81);var ReactUpdates=_dereq_(83);var emptyObject=_dereq_(137);var instantiateReactComponent=_dereq_(118);var invariant=_dereq_(144); /**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */function renderToString(element){!ReactElement.isValidElement(element)?"development"!=='production'?invariant(false,'renderToString(): You must pass a valid ReactElement.'):invariant(false):undefined;var transaction;try{ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);var id=ReactInstanceHandles.createReactRootID();transaction=ReactServerRenderingTransaction.getPooled(false);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);var markup=componentInstance.mountComponent(id,transaction,emptyObject);return ReactMarkupChecksum.addChecksumToMarkup(markup);},null);}finally {ReactServerRenderingTransaction.release(transaction); // Revert to the DOM batching strategy since these two renderers
// currently share these stateful modules.
ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);}} /**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */function renderToStaticMarkup(element){!ReactElement.isValidElement(element)?"development"!=='production'?invariant(false,'renderToStaticMarkup(): You must pass a valid ReactElement.'):invariant(false):undefined;var transaction;try{ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);var id=ReactInstanceHandles.createReactRootID();transaction=ReactServerRenderingTransaction.getPooled(true);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);return componentInstance.mountComponent(id,transaction,emptyObject);},null);}finally {ReactServerRenderingTransaction.release(transaction); // Revert to the DOM batching strategy since these two renderers
// currently share these stateful modules.
ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);}}module.exports={renderToString:renderToString,renderToStaticMarkup:renderToStaticMarkup};},{"118":118,"137":137,"144":144,"48":48,"52":52,"61":61,"64":64,"79":79,"81":81,"83":83}],81:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */'use strict';var PooledClass=_dereq_(24);var CallbackQueue=_dereq_(6);var Transaction=_dereq_(100);var assign=_dereq_(23);var emptyFunction=_dereq_(136); /**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function(){this.reactMountReady.reset();},close:emptyFunction}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[ON_DOM_READY_QUEUEING]; /**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */function ReactServerRenderingTransaction(renderToStaticMarkup){this.reinitializeTransaction();this.renderToStaticMarkup=renderToStaticMarkup;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=false;}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function(){return this.reactMountReady;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactServerRenderingTransaction);module.exports=ReactServerRenderingTransaction;},{"100":100,"136":136,"23":23,"24":24,"6":6}],82:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */'use strict';var ReactCurrentOwner=_dereq_(34);var ReactElement=_dereq_(52);var ReactInstanceMap=_dereq_(62);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var warning=_dereq_(155);function enqueueUpdate(internalInstance){ReactUpdates.enqueueUpdate(internalInstance);}function getInternalInstanceReadyForUpdate(publicInstance,callerName){var internalInstance=ReactInstanceMap.get(publicInstance);if(!internalInstance){if("development"!=='production'){ // Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
"development"!=='production'?warning(!callerName,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor.displayName):undefined;}return null;}if("development"!=='production'){"development"!=='production'?warning(ReactCurrentOwner.current==null,'%s(...): Cannot update during an existing state transition '+'(such as within `render`). Render methods should be a pure function '+'of props and state.',callerName):undefined;}return internalInstance;} /**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */var ReactUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(publicInstance){if("development"!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){"development"!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):undefined;owner._warnedAboutRefsInRender=true;}}var internalInstance=ReactInstanceMap.get(publicInstance);if(internalInstance){ // During componentWillMount and render this will still be null but after
// that will always render to something. At least for now. So we can use
// this hack.
return !!internalInstance._renderedComponent;}else {return false;}}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function(publicInstance,callback){!(typeof callback==='function')?"development"!=='production'?invariant(false,'enqueueCallback(...): You called `setProps`, `replaceProps`, '+'`setState`, `replaceState`, or `forceUpdate` with a callback that '+'isn\'t callable.'):invariant(false):undefined;var internalInstance=getInternalInstanceReadyForUpdate(publicInstance); // Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!internalInstance){return null;}if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];} // TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
enqueueUpdate(internalInstance);},enqueueCallbackInternal:function(internalInstance,callback){!(typeof callback==='function')?"development"!=='production'?invariant(false,'enqueueCallback(...): You called `setProps`, `replaceProps`, '+'`setState`, `replaceState`, or `forceUpdate` with a callback that '+'isn\'t callable.'):invariant(false):undefined;if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];}enqueueUpdate(internalInstance);}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function(publicInstance){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');if(!internalInstance){return;}internalInstance._pendingForceUpdate=true;enqueueUpdate(internalInstance);}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function(publicInstance,completeState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');if(!internalInstance){return;}internalInstance._pendingStateQueue=[completeState];internalInstance._pendingReplaceState=true;enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function(publicInstance,partialState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');if(!internalInstance){return;}var queue=internalInstance._pendingStateQueue||(internalInstance._pendingStateQueue=[]);queue.push(partialState);enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */enqueueSetProps:function(publicInstance,partialProps){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setProps');if(!internalInstance){return;}ReactUpdateQueue.enqueueSetPropsInternal(internalInstance,partialProps);},enqueueSetPropsInternal:function(internalInstance,partialProps){var topLevelWrapper=internalInstance._topLevelWrapper;!topLevelWrapper?"development"!=='production'?invariant(false,'setProps(...): You called `setProps` on a '+'component with a parent. This is an anti-pattern since props will '+'get reactively updated when rendered. Instead, change the owner\'s '+'`render` method to pass the correct value as props to the component '+'where it is created.'):invariant(false):undefined; // Merge with the pending element if it exists, otherwise with existing
// element props.
var wrapElement=topLevelWrapper._pendingElement||topLevelWrapper._currentElement;var element=wrapElement.props;var props=assign({},element.props,partialProps);topLevelWrapper._pendingElement=ReactElement.cloneAndReplaceProps(wrapElement,ReactElement.cloneAndReplaceProps(element,props));enqueueUpdate(topLevelWrapper);}, /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */enqueueReplaceProps:function(publicInstance,props){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceProps');if(!internalInstance){return;}ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance,props);},enqueueReplacePropsInternal:function(internalInstance,props){var topLevelWrapper=internalInstance._topLevelWrapper;!topLevelWrapper?"development"!=='production'?invariant(false,'replaceProps(...): You called `replaceProps` on a '+'component with a parent. This is an anti-pattern since props will '+'get reactively updated when rendered. Instead, change the owner\'s '+'`render` method to pass the correct value as props to the component '+'where it is created.'):invariant(false):undefined; // Merge with the pending element if it exists, otherwise with existing
// element props.
var wrapElement=topLevelWrapper._pendingElement||topLevelWrapper._currentElement;var element=wrapElement.props;topLevelWrapper._pendingElement=ReactElement.cloneAndReplaceProps(wrapElement,ReactElement.cloneAndReplaceProps(element,props));enqueueUpdate(topLevelWrapper);},enqueueElementInternal:function(internalInstance,newElement){internalInstance._pendingElement=newElement;enqueueUpdate(internalInstance);}};module.exports=ReactUpdateQueue;},{"144":144,"155":155,"23":23,"34":34,"52":52,"62":62,"83":83}],83:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(24);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var Transaction=_dereq_(100);var assign=_dereq_(23);var invariant=_dereq_(144);var dirtyComponents=[];var asapCallbackQueue=CallbackQueue.getPooled();var asapEnqueued=false;var batchingStrategy=null;function ensureInjected(){!(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)?"development"!=='production'?invariant(false,'ReactUpdates: must inject a reconcile transaction class and batching '+'strategy'):invariant(false):undefined;}var NESTED_UPDATES={initialize:function(){this.dirtyComponentsLength=dirtyComponents.length;},close:function(){if(this.dirtyComponentsLength!==dirtyComponents.length){ // Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
// with this transaction's wrappers around it.
return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);}});PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);function batchedUpdates(callback,a,b,c,d,e){ensureInjected();batchingStrategy.batchedUpdates(callback,a,b,c,d,e);} /**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
dirtyComponents.sort(mountOrderComparator);for(var i=0;i<len;i++){ // If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// stash the callbacks first
   *
