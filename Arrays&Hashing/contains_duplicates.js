/* 217. Contains Duplicate*/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {boolean}
 */


const containsDuplicate = function (nums) {
    const set = new Set(nums); /* Time O(N) | Space O(N) */
    return set.size !== nums.length;
};

const containsDuplicate2 = function (nums) {
    for (let i = 0; i < nums.length; i++) { /* Time O(N^2) | Space O(1) */
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

const containsDuplicate3 = function (nums) {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return hasDuplicate(nums);
}

const hasDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false;
}



const test = () => {
    const example1 = containsDuplicate3([1, 2, 3, 1]);
    console.log(example1, '-> true');
    const example2 = containsDuplicate3([1, 2, 3, 4]);
    console.log(example2, '-> false');
    const example3 = containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    console.log(example3, '-> true');
}

test();