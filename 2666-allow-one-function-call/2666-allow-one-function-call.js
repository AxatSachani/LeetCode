/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let isUsed = false
    return function (...args) {
        if (!isUsed) {
            isUsed = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
