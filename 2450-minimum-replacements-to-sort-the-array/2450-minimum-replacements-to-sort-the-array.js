/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function (nums) {
    let steps = 0, prev = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        let num = nums[i];
        let n = Math.ceil(num / prev);
        steps += n - 1;
        prev = Math.floor(num / n);
    }
    return steps;
};
