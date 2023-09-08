/* 199. Binary Tree Right Side View */

// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.


/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root, level = 0, rightSide = []) {
    // base case
    if (root === null) return rightSide;

    // if the current level is the same as the length of the rightSide array,
    // then we push the right most node of the current level to the rightSide array
    const isLastNode = level === rightSide.length
    if (isLastNode) rightSide.push(root.val);

    return dfs(root, level, rightSide)
}

const dfs = (root, level, rightSide) => {
    if (root.right) rightSideView(root.right, (level + 1), rightSide);
    if (root.left) rightSideView(root.left, (level + 1), rightSide);

    return rightSide
}