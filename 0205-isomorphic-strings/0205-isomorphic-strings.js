/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        if (!sMap.has(sChar)) {
            sMap.set(sChar, tChar);
        } else if (sMap.get(sChar) !== tChar) {
            return false;
        }

        if (!tMap.has(tChar)) {
            tMap.set(tChar, sChar);
        } else if (tMap.get(tChar) !== sChar) {
            return false;
        }
    }

    return true;
};