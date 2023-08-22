/* 20. Valid Parentheses */

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:
Input: s = "()"
Output: true

// Example 2:
Input: s = "()[]{}"
Output: true

// Example 3:
Input: s = "(]"
Output: false

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
    const cache = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of s) {/* Time O(N) */
        if (!char in cache) { stack.push(char); continue; }/* Space O(N) */

        if (stack[stack.length - 1] === cache[char]) { stack.pop(); continue; }

        return false;
    }

    return (stack.length === 0);
};


// ordinary for loop
let str = "Buzz";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// for... in
for (let i in str) {
    console.log(str[i]);
}

// for ... of ...
for (let char of "Hello") {
    console.log(char);
}


// ! in operator 
// The in operator returns true if the specified property is in the specified object or its prototype chain.
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)
Symbol.iterator in trees; // returns true

// Predefined objects
"PI" in Math; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true