/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const result = []
    while (arr.length >= size) {
        result.push(arr.splice(0, size))
    }
    if (arr.length > 0) result.push(arr.splice(0, arr.length))
    return result
};