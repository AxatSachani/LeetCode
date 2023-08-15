/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 0 || isNaN(x)) {
        return NaN
    }
    let square_root = x / 2
    let temp = 0
    while (square_root != temp) {
        temp = square_root
        square_root = (x / square_root + square_root) / 2
    }
    return Math.floor(square_root)
};