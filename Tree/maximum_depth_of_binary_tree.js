/* 104. Maximum Depth of Binary Tree */

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Time O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;

    return dfs(root);
};

const dfs = (root) => {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    const height = Math.max(left, right);

    return height + 1;
};