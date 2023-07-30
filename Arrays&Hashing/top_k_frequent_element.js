/* 347. Top K Frequent Elements */

// Given an integer array nums and an integer k, return the k most frequent elements. 
// You may return the answer in any order.



// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = function (nums, k) {
    let cache = {};
    nums.forEach((num) => {
        //cache[num] ? cache[num] += 1 : cache[num] = 1;
        cache[num] = (cache[num] || 0) + 1;
    })
    const result = Object.keys(cache).map(key => {
        return [Number(key), cache[key]]
    })

    const sortedResult = result.sort((a, b) => {
        return b[1] - a[1];
    })

    const output = [];
    for (let i = 0; i < k; i++) {
        output.push(sortedResult[i][0])
    }
    return output;
}