/* 543. Diameter of Binary Tree */

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


/**
 * https://leetcode.com/problems/diameter-of-binary-tree/
 * TIme O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root, max = []) {
    max[0] = 0;
    dfs(root);

    return max;
};


// same as the maxDepth problem, however, we need to keep track of the max diameter
const dfs = (root) => {
    if (root === null) return -1;
    const left = dfs(root.left);
    const right = dfs(root.right);

    max[0] = Math.max(max[0], left + right + 2);


    return Math.max(left, right) + 1;
}

