/* 74. Search a 2D Matrix */


// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

//////////////////////////////////////////////////////////////////////////////
// Two level Binary search
// Time: O(log(m) + log(n))  Space: O(1)
//////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, rows - 1];



    while (top <= bot) {
        let targetRow = Math.floor((top + bot) / 2);
        if (target > matrix[targetRow][cols - 1]) {
            top = targetRow + 1;
        } else if (target < matrix[targetRow][0]) {
            bot = targetRow - 1;
        } else {
            break;
        }
    }

    if (!(top <= bot)) {
        return false;
    }

    let targetRow = Math.floor((top + bot) / 2);
    let [l, r] = [0, cols - 1];
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (target > matrix[targetRow][m]) {
            l = m + 1;
        } else if (target < matrix[targetRow][m]) {
            r = m - 1;
        } else if (target == matrix[targetRow][m]) {
            return true;
        }
    }
    return false;
};

