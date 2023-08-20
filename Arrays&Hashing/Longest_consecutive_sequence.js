/* 128. Longest Consecutive Sequence */

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.



// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Greedy - Max Score
 * Time O (N * log(N)) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return search(nums);       /* Time O(N) */
}

const search = (nums) => {
    let [maxScore, score] = [1, 1];

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) continue

        const isStreak = nums[i] === ((nums[i - 1]) + 1)
        if (isStreak) { score++; continue; }

        maxScore = Math.max(maxScore, score);
        score = 1;
    }

    return Math.max(maxScore, score);
}

/**
 * Hash Set - Intelligent Sequence
 * Greedy - Max Score
 * Time O (N) | Space O(N)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums, maxScore = 0) => {
    const numSet = new Set(nums);         /* Time O(N) | Space O(N) */

    for (const num of [...numSet]) {    /* Time O(N) */
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue;/* Time O(N) */

        let [currNum, score] = [num, 1];

        const isStreak = () => numSet.has(currNum + 1)
        while (isStreak()) {              /* Time O(N) */
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}