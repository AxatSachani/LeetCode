/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    function partition(left, right, pivotIndex) {
        const pivot = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivot) {
                [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
                storeIndex++;
            }
        }
        [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
        return storeIndex;
    }

    function quickSelect(left, right, kLargest) {
        if (left === right) {
            return nums[left];
        }

        const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        const pivotIndexFinal = partition(left, right, pivotIndex);

        if (kLargest === pivotIndexFinal) {
            return nums[kLargest];
        } else if (kLargest < pivotIndexFinal) {
            return quickSelect(left, pivotIndexFinal - 1, kLargest);
        } else {
            return quickSelect(pivotIndexFinal + 1, right, kLargest);
        }
    }

    return quickSelect(0, nums.length - 1, k - 1);
}