class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = this.heap.length - 1;
    }

    // Helper Methods
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getParentIndex(childIndex) {
        return Math.floor(childIndex / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) <= this.size();
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) <= this.size();
    }
    hasParent(index) {
        return this.getParentIndex(index) > 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // Functions to create Min Heap

    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    front() {
        if (this.heap.length === 0 || this.heap.length === 1) {
            return null;
        }
        return this.heap[1];
    }

    // Removing an element will remove the
    // top element with highest priority then
    // heapifyDown will be called
    dequeue() {
        if (this.heap.length === 0 || this.heap.length === 1) {
            return null;
        }
        const item = this.heap[1];
        this.heap[1] = this.heap[this.size()];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    // Adding an element will add the element
    enqueue(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size();
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 1;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    printHeap() {
        var heap = ` ${this.heap[0]} `
        for (var i = 1; i < this.heap.length; i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
    }
}

module.exports = MinHeap;