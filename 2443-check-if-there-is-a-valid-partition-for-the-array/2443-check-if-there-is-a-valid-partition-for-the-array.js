/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
    let n = nums.length, dp = new Array(n + 1).fill(0);
    for (let i = 1; i < n; i++) {
        const a = nums[i] == nums[i - 1];
        const b = a && i - 2 >= 0 && nums[i] == nums[i - 2];
        const c = i - 2 >= 0 && (nums[i - 1] - nums[i - 2]) === 1 && (nums[i] - nums[i - 1]) === 1;

        dp[i] = (a && (i - 2 >= 0 ? dp[i - 2] : 1)) || ((b || c) && (i - 3 >= 0 ? dp[i - 3] : 1));
    }
    return dp[n - 1];
}