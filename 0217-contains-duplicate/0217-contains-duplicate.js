/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const duplicate = new Set(nums)
    return duplicate.size !== nums.length
};