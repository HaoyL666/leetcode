/* 98. Validate Binary Search Tree */


// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// 1.The left subtree of a node contains only nodes with keys less than the node's key.
// 2.The right subtree of a node contains only nodes with keys greater than the node's key.
// 3.Both the left and right subtrees must also be binary search trees.


/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (root === null) return true;

    // check condition 1 and 2
    const isInvalid = (root.val <= min) || (max <= root.val);
    if (isInvalid) return false;

    return dfs(root, min, max);
};

const dfs = (root, min, max) => {
    const left = isValidBST(root.left, min, root.val);
    const right = isValidBST(root.right, root.val, max);

    // check condition 3
    return left && right;
}