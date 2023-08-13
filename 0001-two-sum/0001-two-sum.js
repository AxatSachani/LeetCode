/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const index = []
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        while (j < nums.length) {
            if (nums[i] + nums[j] == target) {
                index.push(i)
                index.push(j)
                break
            }
            j++
        }
    }
    return index
};