/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = []
    for (let i = 1; i <= numRows; i++) {
        const tmp = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) tmp[j] = 1
            else tmp[j] = triangle[i - 2][j - 1] + triangle[i - 2][j]
        }
        triangle[i - 1] = tmp
    }
    return triangle
};