/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const repeated = s + s;
    const str = repeated.slice(1, -1);
    return str.includes(s);
};
