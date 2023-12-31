/* 206. Reverse Linked List */

// Given the head of a singly linked list, reverse the list, and return the reversed list.


// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


// Example 2:
// Input: head = []
// Output: []


/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const isBaseCase = !head?.next;
    if (isBaseCase) return head;

    return dfs(head);                   /* Time O(N) | Space O(N) */
}

const dfs = (curr) => {
    const prev = reverseList(curr.next);/* Time O(N) | Space O(N) */

    curr.next.next = curr;
    curr.next = null;

    return prev;
}

/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let [prev, curr, next] = [null, head, null];

    while (curr) {/* Time O(N) */
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};