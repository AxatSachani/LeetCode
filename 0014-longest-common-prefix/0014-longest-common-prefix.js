/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let tmpStr = [], subStr = '', max = 0
    strs = strs.sort((a, b) => a.length - b.length)
    const minlen = strs[0]
    if (strs.length == 1) return strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (i < strs.length - 1) {
            for (let j = 0; j < strs[i].length; j++) {
                if (j == 0 && strs[i][j] !== strs[i + 1][j]) return ''
                if (strs[i][j] == strs[i + 1][j]) subStr += strs[i][j]
                else {
                    if (subStr.length > 0) {
                        tmpStr.push(subStr)
                        subStr = ''
                    }
                }
                if (j == strs[i].length - 1 && subStr.length > 0) {
                    tmpStr.push(subStr)
                    subStr = ''
                }
            }
        } else {
            for (let j = 0; j < strs[i].length; j++) {
                if (j == 0 && strs[i][j] !== strs[i - (strs.length - 1)][j]) return ''
                if (strs[i][j] == strs[i - (strs.length - 1)][j]) subStr += strs[i][j]
                else {
                    if (subStr.length > 0) {
                        tmpStr.push(subStr)
                        subStr = ''
                    }
                }
                if (j == strs[i].length - 1 && subStr.length > 0) {
                    tmpStr.push(subStr)
                    subStr = ''
                }
            }
        }
    }
    for (i = 0; i < tmpStr.length - 1; i++) {
        let count = 0
        for (j = i + 1; j < tmpStr.length; j++) {
            if (tmpStr[i].length <= minlen.length && tmpStr[i] == tmpStr[j])
                count++
        }
        if (count > max) {
            max = count
            subStr = tmpStr[i]
        }
    }
    return subStr
};