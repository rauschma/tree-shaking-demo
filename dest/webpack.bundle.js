! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.oe = function(e) {
        throw e
    }, t.p = "", t(t.s = 1)
}([function(e, t, n) {
    function r(e) {
        var t = e instanceof Date ? e : new Date(e);
        return t.getDate() || (t = new Date), t
    }

    function o(e, t) {
        var n = r(e),
            o = void 0,
            a = void 0,
            s = 0;
        for (t = t || "YYYY-MM-DD HH:mm:ss", o = n.getHours(), a = [
                ["M+", n.getMonth() + 1],
                ["D+", n.getDate()],
                ["H+", o],
                ["h+", o > 12 ? o - 12 : o],
                ["m+", n.getMinutes()],
                ["s+", n.getSeconds()]
            ], /(Y+)/.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length))); s < a.length; s++) new RegExp("(" + a[s][0] + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? a[s][1] : ("00" + a[s][1]).substr(("" + a[s][1]).length)));
        return t.replace(/a/gi, o > 11 ? "pm" : "am")
    }
    t.format = o
}, function(e, t, n) {
    var r = n(0),
        o = function() {
            return r.format(new Date)
        },
        a = o();
    console.log("now is " + a)
}]);
