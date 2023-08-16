/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
    let result = 0
    batteries.sort((a, b) => a - b)
    for (let i = 0; i < batteries.length; i++) {
        result += batteries[i]
    }
    while (batteries.at(-1) > result / n)
        --n, result -= batteries.pop();
    return Math.floor(result / n)
};


