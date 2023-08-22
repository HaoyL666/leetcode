/* 49. Group Anagrams*/

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Example 2:
Input: strs = [""]
Output: [[""]]

// Example 3:
Input: strs = ["a"]
Output: [["a"]]


/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Hash Map - Adjacency List
 * Time O(N * (K * log(K))) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs, map = new Map()) => {
    if (!strs.length) return [];

    groupWords(strs, map);    /* Time O(N * (K * log(K)) | Space O(N * K) */

    return [...map.values()];/* Time O(N)               | Space O(N * K) */
};

const groupWords = (strs, map) => {
    for (const original of strs) {/* Time O(N) */
        const sorted = reorder(original);/* Time O(K * log(K)) | Space O(K) */
        const values = map.get(sorted) || [];

        values.push(original);           /*                    | Space O(N) */
        map.set(sorted, values);         /*                    | Space O(N * K) */
    }
}

const reorder = (str) => str
    .split('')                         /* Time O(K)          | Space O(K) */
    .sort((a, b) => a.localeCompare(b))/* Time O(K * log(K)) | Space O(1 || log(K)) */
    .join('');                         /* Time O(K)          | Space O(K) */
