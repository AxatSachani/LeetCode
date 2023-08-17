/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let f = Infinity, s = Infinity
    if (nums.length < 3) return false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= f) {
            f = nums[i]
        } else if (nums[i] <= s) {
            s = nums[i]
        } else {
            return true
        }
    }
    return false
};


