/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let isCalled = false;
    let result;

    return (...args) => {
        if (!isCalled) {
            result = fn(...args);
            isCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
