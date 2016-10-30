(function(root, factory) {
    "use strict";
    // AMD 模式
    if (typeof define === 'function' && define.amd) {
        define([], factory);
        // CMD 和 commonJS模式
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.aniframe = factory();
    }
}(this, function() {
    // define the library of RAF (requestAnimationFrame)
    return {
        tmp: new Map(),
        requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        cancelAnimationFrame: window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        _run(fn) {
            fn();
            this.tmp.set(fn,requestAnimationFrame(this._run.bind(this, fn)));
        },
        run(fn) {
            this.tmp.set(fn,requestAnimationFrame(this._run.bind(this, fn)));
        },
        cancel(fn) {
            if (this.tmp.has(fn)) {
                cancelAnimationFrame(this.tmp.get(fn));
                this.tmp.delete(fn);
            }
        }
    }
}));