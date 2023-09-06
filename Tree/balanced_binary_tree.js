/*110. Balanced Binary Tree*/

// Given a binary tree, determine if it is 
// height-balanced.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees 
// of every node never differs by more than one.

const superbalanced = tree => {
    if (!tree) return true;

    return superbalanced(tree.left) && superbalanced(tree.right) && Math.abs(bstHeight(tree.left) - bstHeight(tree.right)) <= 1;

};

const bstHeight = tree => {
    if (!tree) return -1;

    const leftHeight = bstHeight(tree.left);
    const rightHeight = bstHeight(tree.right);

    return Math.max(leftHeight, rightHeight) + 1;


};