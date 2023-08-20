/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((a, b) => a - b)
    if (nums1.length == 1) return nums1[0]
    const mid = Math.floor(nums1.length / 2)
    if (nums1.length % 2 == 0) {
        const middle1 = Math.floor(nums1.length / 2);
        const middle2 = middle1 - 1;
        return (nums1[middle1] + nums1[middle2]) / 2
    }
    else return nums1[mid]

};