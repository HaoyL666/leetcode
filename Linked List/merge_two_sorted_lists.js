/* 21. Merge Two Sorted Lists */

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

var mergeTwoLists = function (list1, list2) {
    // dummy nodes to aviod edge cases
    let sentinel = tail = new ListNode();

    while (list1 && list2) {/* Time O(N + M) */

        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
};
