/* 143. Reorder List */

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


/**
 * https://leetcode.com/problems/reorder-list/
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const mid = getMid(head);           /* Time O(N) */
    const reversedFromMid = reverse(mid);/* Time O(N) */

    reorder(head, reversedFromMid);      /* Time O(N) */
};

const getMid = (head) => {
    let [slow, fast] = [head, head];

    while (fast && fast.next) {         /* Time O(N) */
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const reverse = (head) => {
    let [prev, curr, next] = [null, head, null];

    while (curr) {                      /* Time O(N) */
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}

const reorder = (l1, l2) => {
    let [first, next, second] = [l1, null, l2];

    while (second.next) {              /* Time O(N) */
        next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;
    }
}