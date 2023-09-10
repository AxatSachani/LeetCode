/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
    const MOD = 1e9 + 7;
    let count = 1;
    for (let i = 2; i <= n; i++) {
        count = (count * (2 * i - 1) * i) % MOD;
    }
    return count;
}