/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    const result = Array(target + 1).fill(0);
    result[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                result[i] += result[i - num];
            }
        }
    }

    return result[target];
};