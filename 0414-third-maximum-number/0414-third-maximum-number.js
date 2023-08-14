/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const result = Array.from(new Set(nums.sort((a, b) => b - a)))
    return result.length >= 3 ? result[2] : result[0]
};
