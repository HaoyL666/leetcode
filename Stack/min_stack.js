
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// 1. MinStack() initializes the stack object.
// 2. void push(int val) pushes the element val onto the stack.
// 3. void pop() removes the element on the top of the stack.
// 4. int top() gets the top element of the stack.
// 5. int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

/** 
 * https://leetcode.com/problems/min-stack
 * Time O(1) | Space O(N)
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
    /**
     * @constructor
     */
    constructor () {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push (val, { minStack } = this) {
        this.stack.push(val);             /* Space O(N) */

        const isMinEmpty = !minStack.length;
        const hasNewMin = val <= this.top(minStack);
        const canAddMin = isMinEmpty || hasNewMin;
        if (canAddMin) minStack.push(val);/* Space O(N) */
    }

    /**
     * @return {void}
     */
    pop ({ stack, minStack } = this) {
        const top = stack.pop();          /* Time O(1) */

        const canPopMin = top === this.getMin();
        if (canPopMin) minStack.pop();    /* Time O(1) */
    }

    /**
     * @param {Array}
     * @return {number}
     */
    top (stack = this.stack) {
        return stack.length
            ? stack[stack.length - 1]     /* Time O(1) */
            : null;
    }

    /**
     * @return {number}
     */
    getMin (minStack = this.minStack) {
        return this.top(minStack);       /* Time O(1) */
    }
}