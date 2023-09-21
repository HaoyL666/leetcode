/* 973. K Closest Points to Origin */


// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


//////////////////////////////////////////////////////////////////////////////
// Sort with Custom Comparator
// Time: O(nlogn)
// Space: O(n)
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    // Sort the array with a custom lambda comparator function
    points.sort((a, b) => squaredDistance(a) - squaredDistance(b));

    // Return the first k elements of the sorted array
    return points.slice(0, k);
};

// Calculate and return the squared Euclidean distance
const squaredDistance = ([x, y]) => x ** 2 + y ** 2;


//////////////////////////////////////////////////////////////////////////////
// Max Heap or Max Priority Queue
// Time: O(nlogk)
// Space: O(k)
//////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let maxPQ = new MaxPriorityQueue();
    for (let point of points) {
        let dist = squaredDistance(point);
        if (maxPQ.size() < k) {
            // Fill the max PQ up to k points
            maxPQ.enqueue(point, dist);
        } else if (dist < maxPQ.front().priority) {
            // If the max PQ is full and a closer point is found,
            // discard the farthest point and add this one
            maxPQ.dequeue();
            maxPQ.enqueue(point, dist);
        }
    }

    // Return all points stored in the max PQ
    return maxPQ.toArray().map((el) => el.element);
};

// Calculate and return the squared Euclidean distance
// const squaredDistance = ([x, y]) => x ** 2 + y ** 2;