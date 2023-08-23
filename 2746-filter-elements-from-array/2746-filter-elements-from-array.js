/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    return arr.map((e, i) => { if (fn(e, i)) return e })
        .filter(el => el !== undefined);
};