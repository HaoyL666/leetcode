/* 102. Binary Tree Level Order Traversal */

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// from hack hour
const bfs = (root, callback) => {
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        callback(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
};

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const queue = [root];
    const result = [];

    while (queue.length) {
        const size = queue.length;
        const level = [];

        // size = # of nodes in the current level
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};