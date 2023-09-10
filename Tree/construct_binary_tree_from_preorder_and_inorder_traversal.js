/* 105. Construct Binary Tree from Preorder and Inorder Traversal */

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.


/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Time O(N^2) | Space(H)
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const isBaseCase = preorder.length === 0;
    if (isBaseCase) return null;

    return dfs(preorder, inorder);
}

var dfs = (preorder, inorder) => {
    const { leftInorder, mid, rightInorder } = getPointers(preorder, inorder);
    const root = new TreeNode(inorder[mid]);

    root.left = buildTree(preorder.slice(0, mid), leftInorder);
    root.right = buildTree(preorder.slice(mid), rightInorder);

    return root;
}

const getPointers = (preorder, inorder) => {
    // current node is the first element in the preorder array
    const currNode = preorder.shift();

    // find the index of the current node in the inorder array
    const mid = inorder.indexOf(next);
    const leftInorder = inorder.slice(0, mid);
    const rightInorder = inorder.slice(mid + 1);

    return { leftInorder, mid, rightInorder };
}