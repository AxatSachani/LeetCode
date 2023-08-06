/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const duplicate = []
  let isduplicate = false
  for (let i = 0; i < nums.length; i++) {
    if (duplicate.includes(nums[i])) isduplicate = true
    else duplicate.push(nums[i])
  }
  return isduplicate
};