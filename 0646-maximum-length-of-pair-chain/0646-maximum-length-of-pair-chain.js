/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    if (pairs.length == 1) return 1
    pairs.sort(([a, b], [c, d]) => b - d);
    let chain = 1, pair = pairs[0]
    for (let i = 1; i < pairs.length; i++) {
        if (pair[1] < pairs[i][0]) {
            pair = pairs[i]
            chain++
        }
    }
    return chain
};
