/* 208. Implement Trie (Prefix Tree) */



// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /* Time O(N) | Space O(N) */
    insert(word, node = this.root) {
        for (const char of word) {
            // if the char is not in the children, create a new node
            const child = node.children[char] || new TrieNode();

            // add the child to the children
            node.children[char] = child;

            // move to the child
            node = child;
        }

        // mark the end of the word
        node.isWord = true;
    }

    /* Time O(N) | Space O(1) */
    search(word, node = this.root) {
        for (const char of word) {

            // if the char is not in the children, return false
            const child = node.children[char] || null;

            if (!child) return false;

            node = child;
        }

        // return true if the node is the end of the word
        return node.isWord;
    }

    /* Time O(N) | Space O(1) */
    startsWith(prefix, node = this.root) {
        for (const char of prefix) {
            const child = node.children[char] || null;

            if (!child) return false;

            node = child;
        }

        return true;
    }
}