/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim()
    if (!(/^[-+\d]/.test(s))) return 0
    let i = 0, sign = 1, result = 0
    if (s[i] == '+') { sign = 1; i++ }
    else if (s[i] == '-') { sign = -1; i++ }
    while (i < s.length && /^\d$/.test(s[i])) {
        result = result * 10 + parseInt(s[i])
        i++
    }
    result = result * sign
    return Math.max(Math.min(result, Math.pow(2, 31) - 1), -Math.pow(2, 31));  // Check for integer overflow
};




