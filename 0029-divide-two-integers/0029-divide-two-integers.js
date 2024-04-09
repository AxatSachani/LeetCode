/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let ans = dividend / divisor
    const low32bit = Math.pow(-2, 31), high32bit = Math.pow(2, 31) - 1
    ans = parseInt(ans.toString().split('.')[0])
    if (low32bit <= ans && ans <= high32bit) return ans
    else if (ans <= low32bit) return low32bit
    else if (ans >= high32bit) return high32bit
};
