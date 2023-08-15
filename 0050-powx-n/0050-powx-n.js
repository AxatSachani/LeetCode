/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let p = 1, e = Math.abs(n)
    if (Math.abs(x) == 1 && Math.abs(n + x) > n) {
        return 1
    }
    else if (Math.abs(x) == 1 && Math.abs(n + x) < n) {
        return -1
    }
    else if (n != 0) {
        while (e != 0) {
            p = p * x
            e--
        }
        if (n < 0) {
            return (1 / p)
        } else {
            return p
        }
    }
    else {
        return 1
    }
};