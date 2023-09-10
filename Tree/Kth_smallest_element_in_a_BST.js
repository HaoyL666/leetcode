/* 230. Kth Smallest Element in a BST */

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.




/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Time O(N + K) | Space O(H)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const array = [];

    function treeToArray(tree) {
        if (!node) return;
        treeToArray(tree.left);
        array.push(tree.value);
        treeToArray(tree.right);
    }

    treeToArray(root)

    return array[k - 1];

}