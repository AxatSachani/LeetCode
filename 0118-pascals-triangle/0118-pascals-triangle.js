/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [], tmp = []
    for (let i = 1; i <= numRows; i++) {
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) tmp[j] = 1
            else tmp[j] = triangle[i - 2][j - 1] + triangle[i - 2][j]
        }
        triangle[i - 1] = tmp
        tmp = []
    }
    return triangle
};