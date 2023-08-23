/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freqMap = {};
    for (const c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

    if (freqMap[sortedChars[0]] > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    const res = Array(s.length).fill(null);
    let i = 0;
    for (const c of sortedChars) {
        for (let j = 0; j < freqMap[c]; j++) {
            if (i >= s.length) i = 1;
            res[i] = c;
            i += 2;
        }
    }

    return res.join('');
}