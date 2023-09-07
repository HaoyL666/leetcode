/*100. Same Tree*/

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


/**
 * https://leetcode.com/problems/same-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // if both are null, return true
    if (!(p || q)) return true;

    // if one of them is null, return false
    if (!(p && q)) return false;

    // if both are not null, check if their values are equal
    if (p.val !== q.val) return false;

    return dfs(p, q);
};

const dfs = (p, q) => {
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);

    return left && right;
}