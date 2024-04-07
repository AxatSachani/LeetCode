/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegative = x < 0
    x = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    x = isNegative ? x * -1 : x
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) return 0
    else return x
};
