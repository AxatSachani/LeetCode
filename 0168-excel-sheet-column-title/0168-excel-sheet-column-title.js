/**
 * @param {number} columnNumber
 * @return {string}
 */
/**
 * @param {number} columnNumber
 * @return {string}
 */
let convertToTitle = (num) => {
    let column = '';
    while (num > 0) {
        num--;
        column = String.fromCharCode(65 + num % 26) + column;
        num = Math.floor(num / 26);
    }
    return column;
};