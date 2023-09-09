









/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root, max = -Infinity, total = [0]) {
    count(root, max, total);

    return total[0]
};

const count = (root, max, total) => {
    if (isBaseCase) return 0;

    return dfs(root, max, total);
}

const dfs = (root, max, total) => {
    const isGood = max <= root.val
    if (isGood) total[0]++;

    max = Math.max(max, root.val);

    count(root.left, max, total);
    count(root.right, max, total);
}