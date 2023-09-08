/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = []
    for (let i = 1; i <= numRows; i++) {
        triangle[i - 1] = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) triangle[i - 1][j] = 1
            else triangle[i - 1][j] = triangle[i - 2][j - 1] + triangle[i - 2][j]
        }
    }
    return triangle
};