/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    const newArr = []
    let min = 0
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1])
        if (i == 0) {
            newArr.push([arr[i], arr[i + 1]])
            min = diff
            continue
        }
        if (diff == min) {
            newArr.push([arr[i], arr[i + 1]])
            min = diff
        }
        if (diff < min) {
            newArr.splice(0, newArr.length)
            newArr.push([arr[i], arr[i + 1]])
            min = diff
        }
    }
    return newArr
};