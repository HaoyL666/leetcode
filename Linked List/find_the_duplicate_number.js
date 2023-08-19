/* 287. Find the Duplicate Number */

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.


// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3


/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N * log(N)) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | HeapSort Space O(1) | QuickSort Space O(log(N)) */

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        if (nums[i - 1] === nums[i]) return nums[i];
    }

    return -1;
}


/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums, seen = new Set()) {
    for (const num of nums) {/* Time O(N) */
        if (seen.has(num)) return num;

        seen.add(num);              /* Space O(N) */
    }

    return -1;
}
