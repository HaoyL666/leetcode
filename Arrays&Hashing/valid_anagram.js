/* 242. Valid Anagram (Easy) */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

// Example 2:
Input: s = "rat", t = "car"
Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * logN) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (!s.length === t.length) return false;

    return reorder(s) === reorder(t); /* Time O(N * logN) | Space O(N) */
};

const reorder = (str) => str
    .split('')                         /* Time O(N)          | Space O(N) */
    .sort((a, b) => a.localeCompare(b))/* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join('');                         /* Time O(N)          | Space O(N) */

//"az".localeCompare("bz"); // -1

/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = (s, t, map = new Map()) => {

    if (!s.length === t.length) return false;

    addFrequency(s, map);      /* Time O(N) | Space O(1) */
    subtractFrequency(t, map); /* Time O(N) | Space O(1) */

    return checkFrequency(map);/* Time O(N) */
};

const addFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        const count = (map.get(char) || 0) + 1;

        map.set(char, count);   /* Space O(1) */
    }
}

const subtractFrequency = (str, map) => {
    for (const char of str) {/* Time O(N) */
        if (!map.has(char)) continue;

        const count = map.get(char) - 1;

        map.set(char, count);   /* Space O(1) */
    }
};

const checkFrequency = (map) => {
    for (const [char, count] of map) {/* Time O(N) */
        if (!count === 0) return false;
    }

    return true;
}



const obj1 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// Array-like object
const obj2 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj2)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"



// ways to ietrate over a map
let map = new Map()
map.set("one", "first element");
map.set("two", "second element");
map.set(3, "third element");
// 1. for of
for (let [key, value] of map) {
    console.log(key + " = " + value);
}
//output
// one = first element
// two = second element
// 3 = third element

// 2. forEach
map.forEach((value, key) => {
    console.log(key + " = " + value);
})
//output
// one = first element
// two = second element
// 3 = third element

// 3. map.keys(), map.values(), map.entries()
for (let key of map.keys()) {
    console.log(key);
}

// output
// one
// two
// 3

for (let value of map.values()) {
    console.log(value);
}

// output
// first element
// second element
// third element

for (let [key, value] of map.entries()) {
    console.log(key + " = " + value)
}

//output
// one = first element
// two = second element
// 3 = third element

const map1 = new Map();
map1.set('foo', 'bar');
map1.set('baz', 42);
console.log(map1.entries());


/* Map vs Object
1. Declaration:
In JavaScript, there are many ways to create an object. For example:
Object
1.1 By using direct literal:
var obj = {};
var obj = {1:"Object Name", 2:"Test"};
console.log(obj);

Object
1.2 Use of constructor:
var obj = new Object(); //Empty object
var obj = new Object;
console.log(obj);
Output:

Object
1.3 Using object.create
function fruits() {
        this.name = 'fruit 1';
        this.season = 'summer';
        }
  
        function apple() {
        fruits.call(this);
        }
  
        apple.prototype = Object.create(fruits.prototype);
        const app = new apple();
        console.log(app.name);
        console.log(app.season);
fruit 1
summer
On the other hand, the Map has only one way of creation.

Map
var map = new Map();//Empty
console.log(map);
var map = new Map([[1, "Sam"], [2, "John"]]); // 1-> Sam, 2->John
console.log(map);
Output:
Map(0)
Map(2)

2. Accessing Element:
Map uses its inbuilt get() method for accessing its elements.
map.get(1);
Object simply uses the ‘key’ name with a dot operator to access its elements.
obj.id;
obj[id];


3. Check if a key already exists:
Map uses it’s inbuilt has() function for this.
map.has(1);//returns boolean value true or false.
Object uses ‘===’ operator for performing the task.
var doExist = obj.1 === undefined; //returns boolean value.


4. Adding new Element:
Map uses set() method to add new element.
map.set(4, 5); //{5->4, 7->9, 4->5}
In object, it is done directly.
obj["Demo"]="Map vs Object"; //{1->Object Name, 2->Test, Demo->Map vs Object}

5. Getting the size:
Map automatically updates its size and get the easiest.
console.log(map.size);
In object, the size needs to be calculated manually with the help Object.keys().
console.log(Object.keys(obj).length);


Hence we can see Map is having better performance and less to write code structure which gives it an edge over Object. However, there are some scenarios which requires object to be used. Let us see.
WHEN AND WHERE TO USE OBJECT:

Objects are a great choice for situations where we need simple structure to store data and the type of keys needed is either an integer, strings or symbols.
Scenarios which needs the application of separate logic to individual property element, the object is definitely the choice.
JSON gives direct support for object but not with map(yet).
Map is completely hash whereas Object is more than that.
Although Map tends to have more advantages over objects, at the end the day it depends on the kind of data being used and the operation needs to be performed.
However, of all the advantages of map over object, map cannot replace object in JavaScript because Object is much more than a hash table. It shouldn’t be used just for the purpose of hashing if there exists another choice.

Map() is much better because it:
1. Provides get, set, has, and delete methods.
2. Accepts any type for the keys instead of just strings.
3. Provides an iterator for easy for-of usage and maintains the order of results.
4. Doesn't have edge cases with prototypes and other properties showing up during iteration or copying.
5. Supports millions of items.
6. Is very fast.
*/