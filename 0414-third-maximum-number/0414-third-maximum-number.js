/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = nums.sort((a, b) => b - a)
    nums = new Set(nums)
    nums = Array.from(nums)
    return nums.length >= 3 ? nums[2] : nums[0]
};
