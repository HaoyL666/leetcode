/* 226. Invert Binary Tree */

// Given the root of a binary tree, invert the tree, and return its root.

/**
 * https://leetcode.com/problems/invert-binary-tree/
 * TIme O(N) | Space O(N)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = (root) => {
    if (root === null) return root;

    return dfs(root);
}

const dfs = (root) => {
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}