/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0)
        return [];
    let m = mat.length, n = mat[0].length;
    let queue = [];
    let MAX_VALUE = m * n;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = MAX_VALUE;
            }
        }
    }
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length > 0) {
        let [row, col] = queue.shift();
        for (let [dr, dc] of directions) {
            let r = row + dr, c = col + dc;
            if (r >= 0 && r < m && c >= 0 && c < n && mat[r][c] > mat[row][col] + 1) {
                queue.push([r, c]);
                mat[r][c] = mat[row][col] + 1;
            }
        }
    }
    return mat;
};