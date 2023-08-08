<h2><a href="https://leetcode.com/problems/longest-common-prefix">14. Longest Common Prefix</a></h2><h3>Easy</h3><hr><p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters.</li>
</ul>


# Code
### Method 1: Shortest and Simplest 🚀
```
/**
 * @param {string[]} strs
 * @return {string}
 */



var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};

```

### Method 2: Long and Deep 👨‍💻
```
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
```
