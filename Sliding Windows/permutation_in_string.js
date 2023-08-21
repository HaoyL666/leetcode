/* 567. Permutation in String */

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



//Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

//Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false


//////////////////////////////////////////////////////////////////////////////
// Static Sliding Window
// Time: Theta(l1 + l2) O(l1 + l2)  Space: Theta(1) O(1)
// Highest performing solution. Simply builds a map of the character counts
// for `s1` and `s1.length` of `s2` whose characters are within `s1`, updates
// the `s2` character map as it slides from the beginning of `s2` to the end
// of `s2`, and returns upon verifying a match between the `s1` and `s2`
// character maps.
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const s1Chars = Object.create(null);
    const s2Chars = Object.create(null);

    for (const ch of s1) {
        if (!(ch in s1Chars)) {
            s1Chars[ch] = 0;
            s2Chars[ch] = 0;
        }
        s1Chars[ch]++;
    }

    // for (let i = 0; i < s1.length; ++i) {
    //     const ch = s2[i];
    //     if (ch in s1Chars) {
    //         ++s2Chars[ch];
    //     }
    // }

    let matches = 0;
    let matched = 0;

    // for (const ch in s1Chars) {
    //     if (s1Chars[ch] === s2Chars[ch]) {
    //         ++matches;
    //     }
    //     ++matched;
    // }

    const last = s2.length - s1.length;

    for (let i = 0; i < last; ++i) {
        if (matches === matched) {
            return true;
        }

        for (let j = i; j < i + s1.length; j++) {
            const ch = s2[j];
            s2Chars[ch] = 1 + (s2Chars[ch] || 0);

        }

        for (const ch in s1Chars) {
            if (s1Chars[ch] === s2Chars[ch]) {
                ++matches;
            }
            ++matched;
        }

        if (matches === matched) {
            return true;
        }

        s2Chars[s2[i]]--;

        // const ch1 = s2[i];
        // const ch2 = s2[i + s1.length];

        // if (ch1 in s1Chars) {
        //     if (s1Chars[ch1] === s2Chars[ch1]--) {
        //         --matches;
        //     } else if (s1Chars[ch1] === s2Chars[ch1]) {
        //         ++matches;
        //     }
        // }

        // if (ch2 in s1Chars) {
        //     if (s1Chars[ch2] === s2Chars[ch2]++) {
        //         --matches;
        //     } else if (s1Chars[ch2] === s2Chars[ch2]) {
        //         ++matches;
        //     }
        // }
    }

    return false;
}