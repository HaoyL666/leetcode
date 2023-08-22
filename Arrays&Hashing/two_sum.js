/* 1. Two Sum */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

// Example 3:
Input: nums = [3, 3], target = 6
Output: [0, 1]

/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
        const complement = target - nums[curr];

        for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
            if (nums[next] === complement) return [curr, next];
        }
    }

    return [-1, -1];
}

/**
 * Hash Map - 2 Pass
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
    const map = getMap(nums);       /* Time O(N) | Space O(N) */

    return getSum(nums, target, map)/* Time O(N) */
}

const getMap = (nums, map = new Map()) => {
    for (let i = 0; i < nums.length; i++) {/* Time O(N) */
        map.set(nums[i], i);                        /* Space O(N) */
    }

    return map
}

const getSum = (nums, target, map) => {
    for (let j = 0; j < nums.length; j++) {/* Time O(N) */
        const complement = target - nums[j];
        const index = map.get(complement);

        if (map.has(complement) && (index !== j)) return [j, index]
    }

    return [-1, -1];
}


// Array.indexOf()
// indexOf() – also runs in linear time. It iterates through the internal array and checks each element one by one, so the time complexity for this operation always requires O(n) time.
