/* 572. Subtree of Another Tree */

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same 
// structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. 
// The tree tree could also be considered as a subtree of itself.

// Example1:
Input: root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2]
Output: true

// Example2:
Input: root = [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot = [4, 1, 2]
Output: false


var isSubtree = function (root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};



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