/* 22. Generate Parentheses */

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]


/**
 * DFS
 * Time O(((4^N) / (N * SQRT(N)))) | Space O(((4^N) / (N * SQRT(N))))
 * Time O(2^N) | Space O(2^N)
 * https://leetcode.com/problems/generate-parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = (n) => dfs(n);

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
    if (path.length === (n * 2)) {
        combos.push(path.join(''));/* Space O(N + N) */

        return combos;
    }

    if (open < n) backTrackOpen(n, combos, open, close, path);  /* Time O(2^N) | Space O(2^N) */

    if (close < open) backTrackClose(n, combos, open, close, path);/* Time O(2^N) | Space O(2^N) */

    return combos;
}

const backTrackOpen = (n, combos, open, close, path) => {
    path.push('(');/* Space O(N) */
    dfs(n, combos, (open + 1), close, path);/* Time O(2^N) | Space O(2^N) */
    path.pop();
}

const backTrackClose = (n, combos, open, close, path) => {
    path.push(')');/* Space O(N) */
    dfs(n, combos, open, (close + 1), path);/* Time O(2^N) | Space O(2^N) */
    path.pop();
}