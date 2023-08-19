/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    if (nums.length === 1) return 0
    let min = Infinity
    nums.sort((a, b) => a - b)

    let start = 0
    let end = k - 1
    while (end < nums.length) {
        min = Math.min(min, nums[end] - nums[start])
        start++
        end++
    }
    return min
};

