/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let result = [];
    let cur = [];
    let len = 0;

    for (let word of words) {
        if (word.length + cur.length + len > maxWidth) {
            for (let i = 0; i < maxWidth - len; i++) {
                cur[i % (cur.length - 1 || 1)] += ' ';
            }
            result.push(cur.join(''));
            cur = [];
            len = 0;
        }
        cur.push(word);
        len += word.length;
    }
    let lastLine = cur.join(' ');
    while (lastLine.length < maxWidth) lastLine += ' ';
    result.push(lastLine);
    return result;
}
