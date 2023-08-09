/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    nums.sort((a, b) => a - b);

    const isContainEnough = (diff) => {
        let c = 0;
        let i = 0;
        while (i < nums.length - 1 && c < p) {
            if (nums[i + 1] - nums[i] <= diff) {
                c++;
                i += 2;
            } else {
                i++;
            }
        }
        return c >= p;
    }

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (isContainEnough(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};