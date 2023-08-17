/* 19. Remove Nth Node From End of List */


// Given the head of a linked list, remove the nth node from the end of the list and return its head.


/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const sentinel = new ListNode();

    sentinel.next = head;

    const NthFromStart = getNthFromStart(head, n);/* Time O(N) | Space O(N) */

    let prev = sentinel;
    let curr = head;

    while (NthFromStart) {
        prev = curr;
        curr = curr.next;
        NthFromStart--;
    }

    prev.next = curr.next.next || null;


    return sentinel.next;
};

const getNthFromStart = (curr, n, length = 0) => {
    while (curr) {                       /* Time O(N) */
        curr = curr.next;
        length++;
    }

    return length - n;
}