/* 704. Binary Search */

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.



// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


/**
 * @param {number[]} nums
 * @param {number} target
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */

var search = function (nums, target) {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = nums[mid];

        if (midValue === target) return mid;

        if (midValue > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
};