/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longestSubStrLength = 0, substr = ''
    if (s.length <= 1) longestSubStrLength = s.length
    else for (let i = 0; i < s.length; i++) {
        if (substr.includes(s[i])) {
            if (longestSubStrLength < substr.length) longestSubStrLength = substr.length
            substr = substr.substring(substr.lastIndexOf(s[i]) + 1, substr.length)
            substr += s[i]
        } else {
            substr += s[i]
            if (i == s.length - 1 && longestSubStrLength < substr.length) longestSubStrLength = substr.length
        }
    }
    return longestSubStrLength
};