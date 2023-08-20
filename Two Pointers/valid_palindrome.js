/* 125. Valid Palindrome */

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let removedString = string.toLowerCase().replace(/[^A-Za-z0-9]]/g, "");
    // base case
    if (string.length < 2) {
        return true;
    }
    if (string[0] !== string[string.length - 1]) {
        return false;
    }
    return isPalindrome(string.slice(1, -1));
};

/**
 * 2 Pointer | Midde Convergence
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length <= 1) return true;

    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;
    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];

        // skip char if non-alphanumeric
        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        } else {
            // compare letters
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};



// test() method
// The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.

// JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g., /foo/g or /foo/y). They store a lastIndex from the previous match. Using this internally, test() can be used to iterate over multiple matches in a string of text (with capture groups).

const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false