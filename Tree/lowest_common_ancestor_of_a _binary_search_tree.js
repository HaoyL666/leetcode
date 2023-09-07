/* 235. Lowest Common Ancestor of a Binary Search Tree */

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.


Input: root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 4
Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const isGreater = (p.val < root.val) && (q.val < root.val);
    if (isGreater) return lowestCommonAncestor(root.left, p, q);

    const isLess = (root.val < p.val) && (root.val < q.val);
    if (isLess) return lowestCommonAncestor(root.right, p, q);

    return root;
};