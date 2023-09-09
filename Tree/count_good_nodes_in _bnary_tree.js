









/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root, max = -Infinity, total = [0]) {
    // the reason we use an array for total is because we want to pass the same array to all recursive calls
    count(root, max, total);

    return total[0]
};

const count = (root, max, total) => {
    if (root === null) return 0;

    return dfs(root, max, total);
}

const dfs = (root, max, total) => {
    const isGood = max <= root.val
    if (isGood) total[0]++;

    // max is the max value of the path from the root to the current node
    max = Math.max(max, root.val);

    count(root.left, max, total);
    count(root.right, max, total);
}