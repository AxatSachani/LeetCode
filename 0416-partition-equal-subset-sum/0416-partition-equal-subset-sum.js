/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0
    nums.forEach(e => sum += e)
    if (sum % 2) return false
    sum = sum / 2
    const dp = [];
    dp[0] = true;
    for (var index = 0; index < nums.length; ++index) {
        var num = nums[index];
        for (var i = sum; i >= num; --i) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[sum] || false;
};
