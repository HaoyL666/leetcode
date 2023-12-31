/* 215. Kth Largest Element in an Array */

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?



//Example 1:
Input: nums = [3, 2, 1, 5, 6, 4], k = 2
Output: 5

// Example 2:
Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
Output: 4

// use sorting
/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Time O(N * log(N)) | Space O(K)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return nums
        .sort((a, b) => a - b)
        .reverse()
        .slice(k - 1)
        .shift()
};

// use max heap
/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Time O(N * log(K)) | Space O(K)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const minHeap = new MinPriorityQueue()

    for (const num of nums) {
        minHeap.enqueue(num);

        const isAtCapacity = k < minHeap.size();
        if (isAtCapacity) minHeap.dequeue();
    }

    return minHeap.front().element
};