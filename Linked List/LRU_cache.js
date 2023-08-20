/* 146. LRU Cache */

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.


/** 
 * https://leetcode.com/problems/lru-cache/
 * Time O(1) | Space O(N)
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



function ListNode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // dummy nodes to aviod edge cases
        this.head = new ListNode(10000);
        this.tail = new ListNode(10000);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeLeastUsed() {
        const [key, next, prev] = [this.head.next.key, this.head.next.next, this.head];

        this.map.delete(key);
        prev.next = next;
        next.prev = prev;
    }

    put(key, value) {
        const hasKey = this.get(key) !== -1;
        const isAtCapacity = this.map.size === this.capacity;

        if (hasKey) return (this.tail.prev.value = value);
        if (isAtCapacity) this.removeLeastUsed();

        const node = { key, value };
        this.map.set(key, node);
        this.moveToFront(node);
    }

    get(key) {
        const hasKey = this.map.has(key);
        if (!hasKey) return -1;

        const node = this.map.get(key);

        this.removeNode(node);
        this.moveToFront(node);

        return node.value;
    }


    // helper functions
    removeNode(node) {
        // since we have dummy nodes, we don't need to check for edge cases
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    moveToFront(node) {
        const [prev, next] = [this.tail.prev, this.tail];

        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }
}
