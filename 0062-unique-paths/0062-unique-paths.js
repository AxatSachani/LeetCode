/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let paths = 1;
    for (let i = 1; i <= m - 1; i++) {
        paths = paths * (n - 1 + i) / i;
    }
    return paths;
};