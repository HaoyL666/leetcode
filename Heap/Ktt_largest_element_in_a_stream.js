// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

/** 
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Time O(N * (K * log(K))) | Space O(K)
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const MinPriorityQueue = require('../Heap/minHeap');

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     * @constructor
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinPriorityQueue();

        // time O(N * log(K)) | space O(K)
        nums.forEach((num) => this.add(num));
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val, { minHeap } = this) {
        const isUnderCapacity = minHeap.size() < this.k;
        if (isUnderCapacity) {
            minHeap.enqueue(val);

            return this.top();
        }

        const isLarger = this.top() < val;
        if (isLarger) {
            minHeap.dequeue()
            minHeap.enqueue(val);
        }

        return this.top();
    }

    top({ minHeap } = this) {
        return minHeap.front()?.element || 0
    }
}