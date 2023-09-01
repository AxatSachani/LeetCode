/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const result = Array(n + 1).fill(0)
    return result.map((e, i) => BinSum(i))
};
function BinSum(i) {
    return Number(i.toString(2).split("").reduce((p, c) => Number(p) + Number(c)))
}
